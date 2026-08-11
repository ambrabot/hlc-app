// HLC Club API — Cloudflare Worker (clean rebuild)
// Auth: passwordless email-code. Money: Stripe subscription. Storage: D1.
// Security baked in: login brute-force lockout, Stripe webhook signature verify,
// secret-gated Payhip webhook, webhook idempotency.

const ALLOWED_ORIGINS = new Set([
  'https://app.healthyfoodrecipesclub.com',
  'https://healthyfoodrecipesclub.com',
  'http://localhost:8787',
  'http://127.0.0.1:8787',
  'http://localhost:8000',
  'http://127.0.0.1:8000'
]);

const CLUB_PRODUCT = 'hlc-club';
const PAYHIP_PRODUCTS = { ezP49: 'gut-reset-protocol', JUc5F: 'gut-reset-protocol' };

const MAX_CODES_PER_HOUR = 5;   // request-code throttle per user
const MAX_VERIFY_ATTEMPTS = 5;  // wrong tries before a code dies
const CODE_TTL_MIN = 10;
const SESSION_TTL_DAYS = 90;

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') return cors(request, null, 204);
    const url = new URL(request.url);
    const pathname = url.pathname;

    try {
      const route = `${request.method} ${pathname}`;
      switch (true) {
        case route === 'GET /api/health':            return cors(request, json({ ok: true, service: 'hlc-club-api' }));
        case route === 'GET /api/clean':             return cleanCheck(request, env, url);
        case route === 'POST /api/plate-vision':     return plateVision(request, env);
        case route === 'POST /api/coach':            return coach(request, env);
        case route === 'GET /api/download':          return downloadFile(request, env, url);
        case route === 'POST /api/event':            return logEvent(request, env);
        case route === 'GET /api/admin/overview':    return adminOverview(request, env);
        case route === 'POST /api/admin/send-weekly': return adminSendWeekly(request, env);
        case route === 'POST /api/admin/test-welcome': return adminTestWelcome(request, env);
        case route === 'POST /api/admin/kb-ingest':    return kbIngest(request, env);
        case route === 'POST /api/admin/create-coupon': return adminCreateCoupon(request, env);
        case route === 'POST /api/auth/request-code': return requestCode(request, env);
        case route === 'POST /api/auth/verify':       return verifyCode(request, env, ctx);
        case route === 'GET /api/me':                 return me(request, env);
        case route === 'DELETE /api/account':          return deleteAccount(request, env);
        case route === 'GET /api/favorites':          return listFavorites(request, env);
        case route === 'POST /api/favorites':         return addFavorite(request, env);
        case route.startsWith('DELETE /api/favorites/'): return removeFavorite(request, env, pathname);
        case route === 'GET /api/assessment':         return getAssessment(request, env);
        case route === 'POST /api/assessment':        return saveAssessment(request, env);
        case route === 'GET /api/state':              return getState(request, env);
        case route === 'PUT /api/state':              return putState(request, env);
        case route === 'GET /api/oura/status':        return ouraStatus(request, env);
        case route === 'GET /api/oura/connect':       return ouraConnect(request, env);
        case route === 'GET /api/oura/callback':      return ouraCallback(request, env, url);
        case route === 'GET /api/oura/data':          return ouraData(request, env);
        case route === 'DELETE /api/oura':            return ouraDisconnect(request, env);
        case route === 'POST /api/checkout':          return createCheckout(request, env);
        case route === 'POST /api/webhooks/stripe':   return stripeWebhook(request, env);
        case route === 'POST /api/webhooks/payhip':   return payhipWebhook(request, env);
        default:                                      return cors(request, json({ error: 'not_found' }, 404));
      }
    } catch (error) {
      console.error(error);
      return cors(request, json({ error: 'server_error' }, 500));
    }
  },
  async scheduled(event, env, ctx) {
    if (event.cron === '0 14 * * 1') ctx.waitUntil(sendWeekly(env, false)); // Mondays: weekly retention
    else ctx.waitUntil(sendNudge(env)); // daily: day-3 onboarding nudge (deduped)
  }
};

/* ---------------------------------- auth ---------------------------------- */

async function requestCode(request, env) {
  const body = await readJson(request);
  const email = normalizeEmail(body.email);
  const name = cleanName(body.name);
  if (!email) return cors(request, json({ error: 'invalid_email' }, 400));

  const user = await upsertUser(env.DB, email, name);

  // Throttle: cap codes issued per user per hour.
  const recent = await env.DB.prepare(
    'select count(*) as n from login_codes where user_id = ? and created_at > ?'
  ).bind(user.id, hoursFromNow(-1)).first();
  if ((recent?.n ?? 0) >= MAX_CODES_PER_HOUR) {
    return cors(request, json({ error: 'too_many_requests' }, 429));
  }

  const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 1000000).padStart(6, '0');
  await env.DB.prepare(
    'insert into login_codes (user_id, code_hash, expires_at, created_at) values (?, ?, ?, ?)'
  ).bind(user.id, await sha256(code), minutesFromNow(CODE_TTL_MIN), now()).run();

  // The code is already persisted; a mail-provider hiccup must not 500 the login.
  // Report ok:true (the user can resend) with a soft delivery flag instead.
  let delivered = env.BREVO_API_KEY ? 'email' : 'dev';
  try {
    await sendLoginCode(env, email, name || email.split('@')[0], code);
  } catch (err) {
    console.error('sendLoginCode failed', err);
    delivered = 'delayed';
  }
  const payload = { ok: true, email, delivery: delivered };
  if (env.ALLOW_DEV_CODES === 'true') payload.devCode = code; // dev-only; default false in prod
  return cors(request, json(payload));
}

async function verifyCode(request, env, ctx) {
  const body = await readJson(request);
  const email = normalizeEmail(body.email);
  const code = String(body.code || '').replace(/\D/g, '').slice(0, 6);
  if (!email || code.length !== 6) return cors(request, json({ error: 'invalid_code' }, 400));

  const user = await env.DB.prepare('select * from users where email = ?').bind(email).first();
  if (!user) return cors(request, json({ error: 'invalid_code' }, 401));

  // Most recent live, unused code that still has attempts left.
  const row = await env.DB.prepare(
    `select * from login_codes
     where user_id = ? and used_at is null and expires_at > ? and attempts < ?
     order by created_at desc limit 1`
  ).bind(user.id, now(), MAX_VERIFY_ATTEMPTS).first();
  if (!row) return cors(request, json({ error: 'invalid_code' }, 401));

  if (row.code_hash !== (await sha256(code))) {
    await env.DB.prepare('update login_codes set attempts = attempts + 1 where id = ?').bind(row.id).run();
    return cors(request, json({ error: 'invalid_code' }, 401));
  }

  await env.DB.prepare('update login_codes set used_at = ? where id = ?').bind(now(), row.id).run();

  const token = crypto.randomUUID() + '.' + crypto.randomUUID();
  await env.DB.prepare(
    'insert into sessions (user_id, token_hash, expires_at, created_at) values (?, ?, ?, ?)'
  ).bind(user.id, await sha256(token), daysFromNow(SESSION_TTL_DAYS), now()).run();

  // First sign-up → welcome + tutorial email (once). Non-blocking.
  if (ctx && !user.welcomed_at) {
    ctx.waitUntil((async () => {
      try {
        await env.DB.prepare('update users set welcomed_at = ? where id = ?').bind(now(), user.id).run();
        await sendWelcome(env, user.email, user.name);
      } catch (e) { console.error('welcome failed', e); }
    })());
  }

  return cors(request, json({ ok: true, token, ...(await accountPayload(env.DB, user)) }));
}

async function me(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  return cors(request, json({ ok: true, ...(await accountPayload(env.DB, auth.user)) }));
}

async function requireAuth(request, env) {
  const token = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '').trim();
  if (!token) return { response: cors(request, json({ error: 'unauthorized' }, 401)) };
  const session = await env.DB.prepare(
    'select * from sessions where token_hash = ? and expires_at > ?'
  ).bind(await sha256(token), now()).first();
  if (!session) return { response: cors(request, json({ error: 'unauthorized' }, 401)) };
  const user = await env.DB.prepare('select * from users where id = ?').bind(session.user_id).first();
  if (!user) return { response: cors(request, json({ error: 'unauthorized' }, 401)) };
  return { user, session };
}

async function accountPayload(db, user) {
  return {
    user: { id: user.id, email: user.email, name: user.name || '' },
    favorites: await favoriteIds(db, user.id),
    entitlements: await activeEntitlements(db, user.id),
    assessment: await latestAssessment(db, user.id),
    week: await userWeek(db, user.id)
  };
}

// Self-service account + data deletion (required by Google Play & Apple for apps with login).
// Deletes ONLY the authenticated user's own rows — never touches other users or the schema.
async function deleteAccount(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const db = env.DB;
  const uid = auth.user.id;

  // Best-effort: cancel any active paid subscription so the user isn't billed after deletion.
  try {
    if (env.STRIPE_SECRET_KEY) {
      const subs = (await db.prepare(
        "select distinct stripe_subscription_id as sid from entitlements where user_id = ? and stripe_subscription_id is not null and status = 'active'"
      ).bind(uid).all()).results || [];
      for (const s of subs) {
        if (s.sid) await stripeApi(env, 'DELETE', `/v1/subscriptions/${s.sid}`, new URLSearchParams());
      }
    }
  } catch (e) { console.error('sub cancel on delete failed', e); }

  // Purge every row owned by this user, then the user record itself.
  await db.batch([
    db.prepare('delete from sessions where user_id = ?').bind(uid),
    db.prepare('delete from login_codes where user_id = ?').bind(uid),
    db.prepare('delete from favorites where user_id = ?').bind(uid),
    db.prepare('delete from entitlements where user_id = ?').bind(uid),
    db.prepare('delete from assessments where user_id = ?').bind(uid),
    db.prepare('delete from users where id = ?').bind(uid)
  ]);

  return cors(request, json({ ok: true, deleted: true }));
}

/* ------------------------------ assessment ------------------------------- */

async function getAssessment(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  return cors(request, json({ ok: true, assessment: await latestAssessment(env.DB, auth.user.id) }));
}

async function saveAssessment(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const b = await readJson(request);
  const lvl = (v) => { const n = Math.round(Number(v)); return Number.isFinite(n) ? Math.max(1, Math.min(5, n)) : null; };
  const goals = Array.isArray(b.goals) ? b.goals.filter((g) => typeof g === 'string').slice(0, 8).join(',') : '';
  await env.DB.prepare(
    'insert into assessments (user_id, energy, sleep, focus, digestion, inflammation, goals, created_at) values (?, ?, ?, ?, ?, ?, ?, ?)'
  ).bind(auth.user.id, lvl(b.energy), lvl(b.sleep), lvl(b.focus), lvl(b.digestion), lvl(b.inflammation), goals, now()).run();
  return cors(request, json({ ok: true, assessment: await latestAssessment(env.DB, auth.user.id) }));
}

async function latestAssessment(db, userId) {
  const row = await db.prepare(
    'select energy, sleep, focus, digestion, inflammation, goals, created_at from assessments where user_id = ? order by created_at desc limit 1'
  ).bind(userId).first();
  if (!row) return null;
  const count = await db.prepare('select count(*) as n from assessments where user_id = ?').bind(userId).first();
  return {
    energy: row.energy, sleep: row.sleep, focus: row.focus, digestion: row.digestion, inflammation: row.inflammation,
    goals: row.goals ? row.goals.split(',') : [], createdAt: row.created_at, count: count?.n || 1
  };
}

/* -------------------------------- favorites ------------------------------- */

async function listFavorites(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  return cors(request, json({ ok: true, favorites: await favoriteIds(env.DB, auth.user.id) }));
}

async function addFavorite(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const recipeId = String((await readJson(request)).recipeId || '').trim().slice(0, 96);
  if (!recipeId) return cors(request, json({ error: 'invalid_recipe' }, 400));
  await env.DB.prepare(
    'insert or ignore into favorites (user_id, recipe_id, created_at) values (?, ?, ?)'
  ).bind(auth.user.id, recipeId, now()).run();
  return cors(request, json({ ok: true, favorites: await favoriteIds(env.DB, auth.user.id) }));
}

async function removeFavorite(request, env, pathname) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const recipeId = decodeURIComponent(pathname.replace('/api/favorites/', '')).slice(0, 96);
  await env.DB.prepare('delete from favorites where user_id = ? and recipe_id = ?')
    .bind(auth.user.id, recipeId).run();
  return cors(request, json({ ok: true, favorites: await favoriteIds(env.DB, auth.user.id) }));
}

/* ------------------------- user state (week plan sync) ------------------------- */
// Per-user JSON blob (the My Week plan) so a member's plan follows them across devices.
async function ensureStateTable(db) {
  await db.prepare('create table if not exists user_state (user_id text primary key, week text, updated_at text)').run();
}
async function userWeek(db, userId) {
  try {
    await ensureStateTable(db);
    const row = await db.prepare('select week from user_state where user_id = ?').bind(userId).first();
    if (!row || !row.week) return null;
    try { return JSON.parse(row.week); } catch { return null; }
  } catch { return null; }
}
async function getState(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  return cors(request, json({ ok: true, week: await userWeek(env.DB, auth.user.id) }));
}
async function putState(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const body = await readJson(request);
  const week = body && body.week ? body.week : null;
  const weekStr = week ? JSON.stringify(week).slice(0, 20000) : null; // guard size
  await ensureStateTable(env.DB);
  await env.DB.prepare(
    'insert into user_state (user_id, week, updated_at) values (?, ?, ?) on conflict(user_id) do update set week = excluded.week, updated_at = excluded.updated_at'
  ).bind(auth.user.id, weekStr, now()).run();
  return cors(request, json({ ok: true }));
}

/* ------------------------------- clean check ------------------------------ */
// Free acquisition hook — Open Food Facts costs $0, so Clean Check is open to
// everyone (no login, no Club gate). The daily free cap is a soft UX nudge on the
// client; conversion happens on depth (plate macros, history), not on this lookup.
async function cleanCheck(request, env, url) {
  const fields = 'code,product_name,brands,nova_group,nutriscore_grade,additives_tags,ingredients_text,nutriments,image_small_url,origins,origins_tags,manufacturing_places,categories_tags,labels_tags,allergens_tags,traces_tags,ingredients_analysis_tags';
  const barcode = (url.searchParams.get('barcode') || '').replace(/\D/g, '').slice(0, 14);
  const q = (url.searchParams.get('q') || '').trim().slice(0, 80);
  if (!barcode && !q) return cors(request, json({ error: 'empty_query' }, 400));
  const ua = { 'user-agent': 'HLCClub/1.0 (info@healthyfoodrecipesclub.com)', accept: 'application/json' };
  const brandStr = (b) => (Array.isArray(b) ? b.filter(Boolean).join(', ') : (b || ''));
  const norm = (s) => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
  try {
    if (barcode) {
      const res = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json?fields=${fields}`, { headers: ua });
      if (!res.ok) return cors(request, json({ error: 'off_unavailable' }, 502));
      const data = await res.json();
      const product = data.product || null;
      const alternatives = product ? await healthierBrands(product, ua) : [];
      return cors(request, json({ ok: true, product, alternatives }));
    }
    // Name search → a pick-list, HARDENED against misspellings. Raw search first (fast); if
    // the top hits don't share a token with the query (typo/gibberish → garbage, e.g. "almond
    // almox milk" → "Grillburger"), have the LLM correct the term and re-search, merging the
    // corrected (higher-intent) hits first. LLM fires only when the raw result is weak.
    // Always correct in PARALLEL with the raw search (raw is the fallback). The LLM fixes
    // misspellings/abbreviations; if it changes the term we re-search and lead with the
    // corrected (higher-intent) hits. Clean queries come back unchanged → no extra search.
    const [rawResults, fixed] = await Promise.all([
      offSearch(q, ua, brandStr),
      env.AI ? aiFixQuery(q, env) : Promise.resolve('')
    ]);
    let results = rawResults;
    let corrected;
    if (fixed && norm(fixed) !== norm(q)) {
      const fixedResults = await offSearch(fixed, ua, brandStr);
      if (fixedResults.length) {
        corrected = fixed;
        const seen = new Set(); const merged = [];
        for (const r of fixedResults.concat(rawResults)) { if (r.code && !seen.has(r.code)) { seen.add(r.code); merged.push(r); } if (merged.length >= 20) break; }
        results = merged;
      }
    }
    return cors(request, json({ ok: true, results: results.slice(0, 20), corrected }));
  } catch {
    return cors(request, json({ error: 'off_unavailable' }, 502));
  }
}

// Open Food Facts search-a-licious → trimmed candidate list. NEVER pass a `fields=` filter:
// it silently wrecks relevance. Fetch full hits and trim here.
async function offSearch(q, ua, brandStr) {
  try {
    const res = await fetch(`https://search.openfoodfacts.org/search?q=${encodeURIComponent(q)}&page_size=20`, { headers: ua });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.hits || [])
      .filter((p) => p && (p.product_name || p.product_name_en) && p.code)
      .map((p) => ({ code: String(p.code), product_name: p.product_name || p.product_name_en, brands: brandStr(p.brands), image_small_url: p.image_small_url || '', nutriscore_grade: p.nutriscore_grade || '', nova_group: p.nova_group || null }));
  } catch { return []; }
}

// LLM query normalizer — fixes misspellings/abbreviations/odd plurals into a clean product
// search term. Cheap (llama-3.1-8b-fast, ~24 tokens, temp 0). Returns '' on any failure.
async function aiFixQuery(q, env) {
  try {
    const out = await env.AI.run('@cf/meta/llama-3.1-8b-instruct-fp8-fast', {
      messages: [
        { role: 'system', content: 'You normalize grocery product search queries into a clean term. Fix spelling, drop nonsense or duplicate words, expand obvious abbreviations. Do NOT add a brand the user did not type. Reply with ONLY the corrected term, lowercase, no quotes, no punctuation, no explanation. If it is already clean, return it unchanged.' },
        { role: 'user', content: 'almond almox milk' }, { role: 'assistant', content: 'almond milk' },
        { role: 'user', content: 'califa almon milk' }, { role: 'assistant', content: 'califia almond milk' },
        { role: 'user', content: 'greik yogurt' }, { role: 'assistant', content: 'greek yogurt' },
        { role: 'user', content: 'doritoss' }, { role: 'assistant', content: 'doritos' },
        { role: 'user', content: 'chocalate' }, { role: 'assistant', content: 'chocolate' },
        { role: 'user', content: 'oreo' }, { role: 'assistant', content: 'oreo' },
        { role: 'user', content: String(q).slice(0, 80) }
      ],
      max_tokens: 24, temperature: 0
    });
    const txt = (out && (out.response !== undefined ? out.response : out.text !== undefined ? out.text : (out.choices && out.choices[0] && out.choices[0].message ? out.choices[0].message.content : ''))) || '';
    return String(txt).trim().replace(/^["'\s]+/, '').replace(/["'\s.]+$/, '').replace(/\s+/g, ' ').slice(0, 60);
  } catch { return ''; }
}

// Cleaner store-bought brands in the same category (Nutri-Score A/B only).
async function healthierBrands(product, ua) {
  try {
    // categories_tags mixes canonical en: slugs with localized tags — keep the most specific canonical one.
    const canon = (product.categories_tags || []).filter((t) => /^en:[a-z0-9-]+$/.test(t));
    const cat = canon[canon.length - 1];
    if (!cat) return [];
    const params = new URLSearchParams({
      q: `categories_tags:"${cat}" AND nutriscore_grade:(a OR b)`,
      fields: 'code,product_name,brands,image_small_url,nutriscore_grade,nova_group',
      page_size: '30'
    });
    const res = await fetch(`https://search.openfoodfacts.org/search?${params}`, { headers: ua });
    if (!res.ok) return [];
    const hits = (await res.json()).hits || [];
    const brandStr = (b) => (Array.isArray(b) ? b.join(', ') : (b || ''));
    const ownBrand = brandStr(product.brands).toLowerCase();
    const order = { a: 0, b: 1 };
    hits.sort((x, y) => (order[(x.nutriscore_grade || '').toLowerCase()] ?? 9) - (order[(y.nutriscore_grade || '').toLowerCase()] ?? 9));
    const seen = new Set();
    const out = [];
    for (const h of hits) {
      const g = (h.nutriscore_grade || '').toLowerCase();
      if (!h.product_name || !['a', 'b'].includes(g)) continue;
      if (h.code && h.code === product.code) continue;
      const b = brandStr(h.brands);
      if (b && b.toLowerCase() === ownBrand) continue;
      const key = (b || h.product_name).toLowerCase();
      if (seen.has(key)) continue; // one per brand
      seen.add(key);
      out.push({ name: h.product_name, brand: b, img: h.image_small_url || '', grade: g, nova: h.nova_group || null });
      if (out.length >= 4) break;
    }
    return out;
  } catch { return []; }
}

// Estimate foods + portions + calories/macros from a meal photo (Workers AI Llama-3.2 Vision).
async function plateVision(request, env) {
  // Club = ilimitado. Sem Club (visitante OU conta grátis) = degustação de GUEST_PLATE_DAILY
  // por dia, contada por hash do IP. Antes disto o caminho sem Club devolvia 401/403 e o app
  // caía num modelo on-device de 201 MB — no celular, em dados móveis, dentro do mercado.
  // Medido em 10/ago: era o download que parecia "travou", não a visão.
  let membro = false;
  const auth = await requireAuth(request, env);
  if (!auth.response && auth.user) {
    const ents = await activeEntitlements(env.DB, auth.user.id);
    membro = ents.includes(CLUB_PRODUCT);
  }
  if (!membro) {
    const gate = await guestGate(request, env, 'plate', GUEST_PLATE_DAILY);
    if (gate.response) return gate.response;                       // 429 guest_limit → app mostra o Club
    if (!(await tetoGlobalDiario(env, 'plate', PLATE_GLOBAL_DAILY)))
      return cors(request, json({ error: 'busy_today' }, 429));    // teto global: protege a conta
  }
  if (!env.AI) return cors(request, json({ error: 'vision_unavailable' }, 503));
  // Lê o corpo UMA vez, fora do try: o retry do aceite de licença (no catch) precisa dos
  // mesmos bytes, e clonar depois de consumir devolveria vazio — o retry falharia calado.
  const buf = await request.arrayBuffer().catch(() => null);
  if (!buf || buf.byteLength < 200) return cors(request, json({ error: 'no_image' }, 400));
  const bytes = [...new Uint8Array(buf)];
  try {
    const prompt = VISION_PROMPT;
    const out = await env.AI.run(VISION_MODEL, { image: bytes, prompt, max_tokens: 700, temperature: 0.2 });
    const text = (out && (out.response || out.description || out.text)) || '';
    let data = null;
    try { const m = String(text).match(/\{[\s\S]*\}/); if (m) data = JSON.parse(m[0]); } catch { data = null; }
    const num = (v) => { const n = Math.round(Number(v)); return Number.isFinite(n) && n >= 0 ? n : 0; };
    const items = (data && Array.isArray(data.items) ? data.items : []).slice(0, 8)
      .map((x) => ({ name: String(x.name || '').slice(0, 40), grams: num(x.grams), kcal: num(x.kcal), protein: num(x.protein), carbs: num(x.carbs), fat: num(x.fat) }))
      .filter((x) => x.name);
    return cors(request, json({ ok: true, items }));
  } catch (e) {
    // O Llama 3.2 Vision exige que a CONTA aceite a licença da Meta uma única vez, mandando
    // `{prompt:'agree'}` ao modelo; sem isso TODA chamada lança e vira 502. A conta nunca deu
    // esse aceite — provavelmente desde que o recurso nasceu, e por isso o app sempre caía no
    // modelo on-device de 201 MB (a lentidão relatada). Documentado em
    // developers.cloudflare.com/workers-ai/models/llama-3.2-11b-vision-instruct.
    // Aceita e tenta UMA vez mais, na mesma requisição: idempotente, sem laço, e a partir daí
    // a conta fica habilitada — nenhum passo manual para lembrar depois.
    try {
      await env.AI.run(VISION_MODEL, { prompt: 'agree' });
      {
        const out2 = await env.AI.run(VISION_MODEL, { image: bytes, prompt: VISION_PROMPT, max_tokens: 700, temperature: 0.2 });
        const t2 = (out2 && (out2.response || out2.description || out2.text)) || '';
        let d2 = null; try { const m = String(t2).match(/\{[\s\S]*\}/); if (m) d2 = JSON.parse(m[0]); } catch { d2 = null; }
        const nm = (v) => { const n = Math.round(Number(v)); return Number.isFinite(n) && n >= 0 ? n : 0; };
        const it2 = (d2 && Array.isArray(d2.items) ? d2.items : []).slice(0, 8)
          .map((x) => ({ name: String(x.name || '').slice(0, 40), grams: nm(x.grams), kcal: nm(x.kcal), protein: nm(x.protein), carbs: nm(x.carbs), fat: nm(x.fat) }))
          .filter((x) => x.name);
        if (it2.length) return cors(request, json({ ok: true, items: it2 }));
      }
    } catch (e2) { console.error('[plate-vision] apos aceite:', String(e2 && e2.message || e2).slice(0, 300)); }
    // Sem log aqui, um catch que engole torna o defeito indiagnosticavel de fora — foi
    // exatamente o que aconteceu em 10/ago: o tail mostrava "Ok" e o app so via 502.
    console.error('[plate-vision] falhou:', String(e && e.message || e).slice(0, 300));
    return cors(request, json({ error: 'vision_failed' }, 502));
  }
}

/* --------------------------------- coach ---------------------------------- */
// HLC AI Coach — a warm functional-nutrition companion. Educational, NEVER medical.
// Requires login (free-account gate); the daily free-taste cap is enforced client-side,
// Club = unlimited. Grounds suggestions as keywords the app maps to real recipes/teas.
// Privacy-preserving rate limit for the guest Coach taste: stores a SALTED HASH of the IP
// (never the raw IP) with only a daily counter — legitimate-interest abuse prevention, no PII
// and no user link, consistent with the events table carrying no user_id. Fail-open so a
// limiter hiccup can never block a real guest. Table created at deploy (guest_coach).
const GUEST_COACH_DAILY = 3;
// Degustacao do scan de prato: 3/dia por IP para quem nao tem Club, e um teto GLOBAL diario
// que protege a conta se a coisa viralizar. Workers AI e' cota da conta CF (Neurons), nao
// API paga por chamada — mas cota tambem acaba, e acabar em silencio derruba o recurso para
// quem PAGA. Numeros conservadores; subir depois de medir o uso real.
const VISION_MODEL = '@cf/meta/llama-3.2-11b-vision-instruct';
const VISION_PROMPT = 'You are a nutrition vision assistant. Look at this meal photo and identify each distinct food, estimating its portion. Reply with ONLY compact JSON, no prose, no markdown: {"items":[{"name":"food","grams":120,"kcal":200,"protein":10,"carbs":20,"fat":8}]}. Use realistic everyday portion sizes. Give your best estimate even if unsure. Maximum 8 items.';
const GUEST_PLATE_DAILY = 3;
const PLATE_GLOBAL_DAILY = 300;
// Cota diária de degustação, generalizada a partir do gate do Coach para servir também o
// scan de prato. Mesma tabela (`guest_coach`) com PREFIXO de escopo diferente na chave —
// os namespaces não colidem e não é preciso migração. Continua guardando só um HASH SALGADO
// do IP com um contador diário: sem PII, sem vínculo com usuário. Fail-open de propósito:
// soluço do limitador nunca pode barrar alguém legítimo.
async function guestGate(request, env, escopo, limite) {
  try {
    const ip = request.headers.get('CF-Connecting-IP') || 'noip';
    const k = await sha256('hlc-guest-' + escopo + '|' + ip);
    const today = Math.floor(Date.now() / 86400000);
    const row = await env.DB.prepare('select count, day from guest_coach where k = ?').bind(k).first();
    const used = (row && row.day === today) ? row.count : 0;
    if (used >= limite) return { response: cors(request, json({ error: 'guest_limit', escopo, limite }, 429)) };
    await env.DB.prepare('insert into guest_coach (k, count, day) values (?, 1, ?) on conflict(k) do update set count = case when day = ? then count + 1 else 1 end, day = ?').bind(k, today, today, today).run();
    return { ok: true, usados: used + 1, restantes: limite - used - 1 };
  } catch (e) { return { ok: true }; }
}
// Teto GLOBAL do dia. Cota por IP protege contra um abusador e NÃO protege contra sucesso:
// N pessoas × 3 leituras cada não tem limite nenhum. Este é o freio que protege a conta.
// Mesma tabela, chave fixa. Fail-open pelo mesmo motivo do gate acima.
async function tetoGlobalDiario(env, escopo, limite) {
  try {
    const k = 'global|' + escopo;
    const today = Math.floor(Date.now() / 86400000);
    const row = await env.DB.prepare('select count, day from guest_coach where k = ?').bind(k).first();
    const used = (row && row.day === today) ? row.count : 0;
    if (used >= limite) return false;
    await env.DB.prepare('insert into guest_coach (k, count, day) values (?, 1, ?) on conflict(k) do update set count = case when day = ? then count + 1 else 1 end, day = ?').bind(k, today, today, today).run();
    return true;
  } catch (e) { return true; }
}
async function guestCoachGate(request, env) { return guestGate(request, env, 'coach', GUEST_COACH_DAILY); }

// One-time / occasional ingestion of the knowledge base into Vectorize (embed + upsert).
// Gated by a shared key (env.KB_INGEST_KEY) so it can be run from a script without a login token.
async function kbIngest(request, env) {
  if (!env.KB_INGEST_KEY || request.headers.get('x-kb-key') !== env.KB_INGEST_KEY) return cors(request, json({ error: 'unauthorized' }, 401));
  if (!env.VECTORIZE || !env.AI) return cors(request, json({ error: 'not_configured' }, 503));
  const body = await readJson(request);
  const cards = Array.isArray(body.cards) ? body.cards.slice(0, 60) : [];
  if (!cards.length) return cors(request, json({ error: 'no_cards' }, 400));
  const texts = cards.map((c) => String((c.title || '') + '. ' + (c.text || '')).slice(0, 1600));
  const emb = await env.AI.run('@cf/baai/bge-m3', { text: texts });
  const data = emb && (emb.data || emb);
  if (!data || !data.length) return cors(request, json({ error: 'embed_failed' }, 502));
  const vectors = cards.map((c, i) => ({
    id: String(c.id || ('kb-' + i)).slice(0, 64),
    values: data[i],
    metadata: {
      title: String(c.title || '').slice(0, 200),
      text: String(c.text || '').slice(0, 2000),
      source: String(c.source || '').slice(0, 200),
      domain: String(c.domain || '').slice(0, 60),
      lens: String(c.lens || '').slice(0, 40),
    },
  }));
  const r = await env.VECTORIZE.upsert(vectors);
  return cors(request, json({ ok: true, count: vectors.length, mutation: (r && r.mutationId) || null }));
}

async function coach(request, env) {
  if (!env.AI) return cors(request, json({ error: 'coach_unavailable' }, 503));
  // Guests get a small free TASTE of the Coach before any wall (value before sign-in).
  // Signed-in users pass through; guests are capped per hashed IP/day as an abuse ceiling.
  const auth = await requireAuth(request, env);
  if (auth.response) { const g = await guestCoachGate(request, env); if (g.response) return g.response; }
  const body = await readJson(request);
  const history = (Array.isArray(body.messages) ? body.messages : [])
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-8).map((m) => ({ role: m.role, content: m.content.slice(0, 600) }));
  if (!history.some((m) => m.role === 'user')) return cors(request, json({ error: 'empty' }, 400));
  const ctx = typeof body.context === 'string' ? body.context.replace(/[\r\n]+/g, ' ').slice(0, 500) : '';
  // RAG: ground the answer in the HLC functional-nutrition knowledge base (Vectorize).
  let grounding = '';
  try {
    const lastUser = [...history].reverse().find((m) => m.role === 'user');
    if (lastUser && env.VECTORIZE) {
      const q = await env.AI.run('@cf/baai/bge-m3', { text: [lastUser.content] });
      const qv = (q && (q.data ? q.data[0] : q[0])) || null;
      if (qv) {
        const res = await env.VECTORIZE.query(qv, { topK: 5, returnMetadata: 'all' });
        const hits = (res && res.matches || []).filter((m) => m.score > 0.42).slice(0, 4);
        if (hits.length) grounding = hits.map((m) => '• ' + (m.metadata && m.metadata.title || '') + ': ' + (m.metadata && m.metadata.text || '')).join('\n').slice(0, 2600);
      }
    }
  } catch (e) { /* retrieval is best-effort; the Coach still answers without it */ }
  const system = [
    'You are the HLC Coach — a warm, deeply credible functional-nutrition and integrative-wellness companion inside the Healthy LifeStyle Club app. You carry the knowledge of a seasoned practitioner and the ease of a great cook.',
    'YOUR EXPERTISE — draw on the 1–2 lenses that best fit the question; never lecture through all of them:',
    '- Functional Nutrition (your default): root cause over symptom, food as information, nutrient density, blood-sugar stability and satiety, gut & microbiome health (prebiotic fiber, polyphenols, fermented foods).',
    '- Integrative Medicine: the whole person — food is one lever alongside sleep, stress, movement, light and connection; weigh them together.',
    "- Naturopathy: support the body's innate healing; least-force, whole-food first; remove the obstacle (refined sugar, ultra-processed seed-oil-heavy food, excess alcohol) before adding anything.",
    '- Traditional Chinese Medicine as seasoning, not dogma: warming/cooling/neutral foods, the Spleen–Stomach as the root of digestion, favoring warm cooked easy-to-digest food when it is cold or someone feels depleted.',
    '- Health & habit coaching: sustainability over perfection, one small next step, self-compassion, identity ("you are someone who nourishes yourself"); ask a gentle clarifying question when it helps.',
    '- Culinary craft: you are a nutritionist AND a chef — technique, flavor balance and texture so the food is genuinely delicious, never a health compromise.',
    'CORE THESIS — calorie QUALITY over quantity: 100 kcal of an anti-inflammatory whole food nourishes differently than 100 kcal of an ultra-processed one, even when "low sugar". Frame food by anti-inflammatory quality and processing (grounded in the Dietary Inflammatory Index and NOVA as guides, never clinical metrics). Never invent a numeric "inflammatory calorie".',
    'STRICT GUARDRAILS — you are EDUCATIONAL, never medical:',
    '- Never diagnose, treat, cure, claim to prevent a disease, or give supplement/drug doses. Speak only to foods, habits and traditional uses that generally support the body — prefer "supports / may help / traditionally used to" over any clinical claim.',
    '- If someone describes a serious symptom, a pregnancy or medication concern, or an eating-disorder / mental-health crisis, warmly point them to a licensed professional (in the US, call or text 988 for crisis) and do not coach around it.',
    '- No shame, no fear, no prosperity gospel. Encourage; never lecture. Be honest about uncertainty.',
    ...(grounding ? ['GROUNDING KNOWLEDGE from the HLC functional-nutrition knowledge base — draw on this to be accurate and specific; weave the ideas in naturally in your own warm words, do NOT cite source names or say "the knowledge base":\n' + grounding] : []),
    ...(ctx ? ['WHAT YOU KNOW ABOUT THIS MEMBER RIGHT NOW (weave in naturally to meet them where they are; NEVER recite or list it back): ' + ctx] : []),
    'TEACH THE WHY — this is what sets you apart from a recipe list: whenever you point to a food, recipe or tea, do not just name it. Teach the mechanism in plain language — name the key functional compounds it carries, say what those substances actually DO in the body, and connect that to what the member will feel. Go food → compound → action → felt outcome. (E.g. for sleep: tart cherries and kiwi carry a little natural melatonin; the tryptophan in oats, pumpkin seeds or turkey is the raw material the body converts to serotonin and then melatonin; magnesium — pumpkin seeds, dark leafy greens, cacao — calms the nervous system and eases an overactive stress response; a little slow carb at night helps tryptophan reach the brain; and skipping the late caffeine/alcohol protects deep sleep.) Ground these mechanisms in the GROUNDING KNOWLEDGE above whenever it applies, and stay strictly educational — supports / helps / traditionally used to — never a dose, never a drug or cure claim. INTELLIGIBILITY IS NON-NEGOTIABLE: this is functional nutrition made understandable. Any time you name a compound or body system, translate it in the same breath into everyday words a curious non-expert instantly gets (e.g. "magnesium, a mineral that helps your muscles and nervous system downshift", "cortisol, your body\'s built-in alarm hormone", "tryptophan, the building block your body turns into your sleep signal"). Accurate AND plain — if a smart friend with no health background would not follow it, simplify it.',
    'STYLE: warm, plain-language — a wise practitioner-friend who happens to know the biochemistry, never a textbook or a supplement label. Give 2–4 sentences of guidance, and when you suggest a food add 1–3 more that teach what is in it and how it works in the body. End by pointing to one specific thing they can cook or do right now.',
    'OUTPUT: reply with ONLY compact JSON, no markdown, no prose outside it: {"reply":"your 2-4 sentences","suggest":["a short recipe or tea keyword the app can search, e.g. anti-inflammatory breakfast, dairy-free chocolate, chamomile tea","max 3"]}.',
  ].join('\n');
  try {
    const out = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
      messages: [{ role: 'system', content: system }, ...history],
      max_tokens: 820, temperature: 0.4,
    });
    const FALLBACK = "I'm here — tell me what you're eating or how you're feeling, and I'll point you to something nourishing.";
    const takeSuggest = (arr) => (Array.isArray(arr) ? arr : []).slice(0, 3).map((s) => String(s).slice(0, 48)).filter(Boolean);
    // Workers AI response shape varies by model/version: {response}, {text}, an already-parsed
    // object, or OpenAI-style {choices:[{message:{content}}]}. Read whichever is present.
    let payload = out && (out.response !== undefined ? out.response
      : out.text !== undefined ? out.text
        : (out.choices && out.choices[0] && out.choices[0].message ? out.choices[0].message.content : undefined));
    let reply = '', suggest = [];
    if (payload && typeof payload === 'object' && !Array.isArray(payload)) {
      reply = String(payload.reply || '').slice(0, 1500);
      suggest = takeSuggest(payload.suggest);
    } else {
      const text = String(payload || '');
      try { const m = text.match(/\{[\s\S]*\}/); if (m) { const d = JSON.parse(m[0]); reply = String(d.reply || '').slice(0, 1500); suggest = takeSuggest(d.suggest); } } catch { /* fall through to raw text */ }
      if (!reply) reply = text.replace(/\{[\s\S]*\}/, '').trim().slice(0, 1500);
    }
    if (!reply) reply = FALLBACK;
    return cors(request, json({ ok: true, reply, suggest }));
  } catch (e) {
    return cors(request, json({ error: 'coach_failed' }, 502));
  }
}

/* ----------------------------- command center ----------------------------- */

async function logEvent(request, env) {
  const body = await readJson(request);
  const kind = String(body.kind || 'view').slice(0, 32);
  // Optional ANONYMOUS aggregate signal — a category / recipe id / search term / topic.
  // NEVER a person: the events table has no user_id, so detail can only ever be non-PII.
  const raw = body.detail == null ? null : String(body.detail).trim().slice(0, 64);
  const detail = raw ? raw : null;
  await env.DB.prepare('insert into events (kind, detail, created_at) values (?, ?, ?)').bind(kind, detail, now()).run();
  return cors(request, json({ ok: true }));
}

async function adminOverview(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const admins = (env.ADMIN_EMAILS || '').toLowerCase().split(',').map((s) => s.trim()).filter(Boolean);
  if (!admins.includes((auth.user.email || '').toLowerCase())) return cors(request, json({ error: 'forbidden' }, 403));

  const users = (await env.DB.prepare('select id, email, name, last_name, country, created_at from users order by created_at desc').all()).results || [];
  const ents = (await env.DB.prepare("select user_id, product_code, current_period_end from entitlements where status = 'active'").all()).results || [];
  const assess = (await env.DB.prepare('select user_id, goals, created_at from assessments order by created_at').all()).results || [];
  const entByUser = {}; for (const e of ents) (entByUser[e.user_id] = entByUser[e.user_id] || []).push(e);
  const goalsByUser = {}; for (const a of assess) goalsByUser[a.user_id] = a.goals; // last wins (ordered asc)

  const audience = users.map((u) => {
    const active = (entByUser[u.id] || []).filter((e) => !e.current_period_end || e.current_period_end > now()).map((e) => e.product_code);
    const type = active.includes(CLUB_PRODUCT) ? 'subscriber' : active.length ? 'buyer' : 'free';
    return { email: u.email, name: u.name || '', lastName: u.last_name || '', country: u.country || '', type, products: active, goals: (goalsByUser[u.id] || '').split(',').filter(Boolean), joined: u.created_at };
  });
  const stats = {
    signups: audience.length,
    subscribers: audience.filter((a) => a.type === 'subscriber').length,
    buyers: audience.filter((a) => a.type === 'buyer').length,
    views: (await env.DB.prepare("select count(*) as n from events where kind = 'view'").first())?.n || 0,
    views7d: (await env.DB.prepare("select count(*) as n from events where kind = 'view' and created_at > ?").bind(daysFromNow(-7)).first())?.n || 0
  };

  // --- Intelligence: FIRST-PARTY, ANONYMOUS, AGGREGATE ---
  // Every query below groups anonymous `events` rows by `detail`. There is no user_id
  // on the events table, so nothing here can be traced to a person — by construction.
  const since30 = daysFromNow(-30);
  const topBy = async (kind, limit = 8) => (await env.DB.prepare(
    `select detail, count(*) as n from events
     where kind = ? and detail is not null and detail != '' and created_at > ?
     group by detail order by n desc limit ?`
  ).bind(kind, since30, limit).all()).results || [];

  const behaviorMix = (await env.DB.prepare(
    'select kind, count(*) as n from events where created_at > ? group by kind order by n desc'
  ).bind(daysFromNow(-7)).all()).results || [];

  const trend = (await env.DB.prepare(
    'select substr(created_at, 1, 10) as day, count(*) as n from events where created_at > ? group by day order by day'
  ).bind(daysFromNow(-30)).all()).results || [];

  // Top wellness goals — aggregated from the latest assessment per user (already deduped above).
  const goalCounts = {};
  for (const g of Object.values(goalsByUser)) (g || '').split(',').filter(Boolean).forEach((x) => { goalCounts[x] = (goalCounts[x] || 0) + 1; });
  const topGoals = Object.entries(goalCounts).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([detail, n]) => ({ detail, n }));

  const intelligence = {
    window: '30d',
    scanned: await topBy('scan'),      // top scanned product categories / brands
    recipes: await topBy('recipe'),    // most-opened recipes
    searches: await topBy('search'),   // top search terms
    coach: await topBy('coach'),       // top coach topic keywords
    shopIntent: await topBy('shop'),   // shopping intent by recipe
    goals: topGoals,                   // top wellness goals (from assessments)
    behaviorMix,                       // event mix by kind (7d)
    trend                              // daily activity (30d)
  };

  return cors(request, json({ ok: true, stats, audience, intelligence }));
}

/* --------------------------- weekly retention email ----------------------- */
// Cron-fired weekly: a recipe of the week + a functional tip → back to the app.
// Reuses Brevo. Rotates content; deduped so a re-fire within the week is a no-op.
const WEEKLY = [
  { recipe: 'Dairy-Free Brigadeiro Truffles', tip: 'Pair anything sweet with protein or fiber — it blunts the sugar spike and the crash that drives the next craving.' },
  { recipe: 'Gut-Healing Overnight Oats', tip: 'Aim for 30g of fiber a day. Chia, oats and berries make it effortless — and your gut flora feeds on it.' },
  { recipe: 'Dark Chocolate Raspberry Fudge Brownies', tip: 'Real cacao (70%+) brings polyphenols and a gentle mood lift — quality calories, not just fewer.' },
  { recipe: 'Salted Date Caramel', tip: 'Swap refined sugar for dates: same caramel sweetness, plus fiber and minerals that keep you steady.' }
];

async function sendWeekly(env, force) {
  if (!env.BREVO_API_KEY) return { sent: 0, reason: 'no_brevo' };
  if (!force) {
    const recent = await env.DB.prepare("select id from events where kind = 'weekly' and created_at > ? limit 1").bind(daysFromNow(-6)).first();
    if (recent) return { sent: 0, reason: 'already_sent' };
  }
  const w = WEEKLY[Math.floor(Date.now() / (7 * 86400000)) % WEEKLY.length];
  const app = env.APP_URL || 'https://app.healthyfoodrecipesclub.com';
  const users = (await env.DB.prepare("select email, name from users where email is not null").all()).results || [];
  let sent = 0;
  for (const u of users) {
    const name = u.name || (u.email.split('@')[0]);
    const inner = emailCard('emerald', "This week's recipe",
      `<h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:24px;font-weight:500;color:#f0fdf4;margin:0;">${escapeHtml(w.recipe)}</h2>`)
      + emailCard('amber', 'Functional tip',
        `<p style="font-size:14px;color:rgba(224,242,230,0.7);line-height:1.7;margin:0;">${escapeHtml(w.tip)}</p>`)
      + emailAppPromo(app);
    const html = emailShell(inner, { badge: 'Your weekly', h1: `Your HLC week, ${escapeHtml(name)}`, sub: 'A recipe and a tip to keep you steady.' });
    try { await sendBrevoEmail(env, u.email, name, `Your HLC week: ${w.recipe} + a gut tip`, html); sent++; } catch {}
  }
  await env.DB.prepare('insert into events (kind, created_at) values (?, ?)').bind('weekly', now()).run();
  return { sent };
}

async function adminSendWeekly(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const admins = (env.ADMIN_EMAILS || '').toLowerCase().split(',').map((s) => s.trim()).filter(Boolean);
  if (!admins.includes((auth.user.email || '').toLowerCase())) return cors(request, json({ error: 'forbidden' }, 403));
  return cors(request, json({ ok: true, ...(await sendWeekly(env, true)) }));
}

async function adminTestWelcome(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const admins = (env.ADMIN_EMAILS || '').toLowerCase().split(',').map((s) => s.trim()).filter(Boolean);
  if (!admins.includes((auth.user.email || '').toLowerCase())) return cors(request, json({ error: 'forbidden' }, 403));
  await sendWelcome(env, auth.user.email, auth.user.name);
  return cors(request, json({ ok: true }));
}

// Creates a Stripe coupon + a human-typeable promotion code from it, via the API — the key never
// leaves the Worker (env.STRIPE_SECRET_KEY), so the admin never has to see/paste a secret to do this.
async function adminCreateCoupon(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const admins = (env.ADMIN_EMAILS || '').toLowerCase().split(',').map((s) => s.trim()).filter(Boolean);
  if (!admins.includes((auth.user.email || '').toLowerCase())) return cors(request, json({ error: 'forbidden' }, 403));
  if (!env.STRIPE_SECRET_KEY) return cors(request, json({ error: 'stripe_not_configured' }, 501));
  const body = await readJson(request);
  const pct = Number(body.percent_off);
  const code = String(body.code || '').trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '');
  if (!pct || pct <= 0 || pct > 100) return cors(request, json({ error: 'bad_percent_off' }, 400));
  if (!code) return cors(request, json({ error: 'bad_code' }, 400));
  const duration = ['once', 'forever', 'repeating'].includes(body.duration) ? body.duration : 'forever';
  const cForm = new URLSearchParams({ percent_off: String(pct), duration, name: body.name || `${pct}% off` });
  if (duration === 'repeating') cForm.set('duration_in_months', String(body.duration_in_months || 3));
  const cRes = await stripeApi(env, 'POST', '/v1/coupons', cForm);
  const coupon = await cRes.json();
  if (!cRes.ok) return cors(request, json({ error: 'stripe_coupon_failed', detail: coupon }, 502));
  const pForm = new URLSearchParams({ coupon: coupon.id, code });
  if (body.max_redemptions) pForm.set('max_redemptions', String(body.max_redemptions));
  const pRes = await stripeApi(env, 'POST', '/v1/promotion_codes', pForm);
  const promo = await pRes.json();
  if (!pRes.ok) return cors(request, json({ error: 'stripe_promo_failed', detail: promo }, 502));
  return cors(request, json({ ok: true, code: promo.code, percent_off: pct, duration, coupon_id: coupon.id, promotion_code_id: promo.id }));
}

async function sendBrevoEmail(env, email, name, subject, html) {
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: env.LOGIN_FROM_NAME || 'Healthy LifeStyle Club', email: env.LOGIN_FROM_EMAIL || 'info@healthyfoodrecipesclub.com' },
      to: [{ email, name }], subject, htmlContent: html
    })
  });
  if (!res.ok) throw new Error(`Brevo send failed: ${res.status}`);
}

// Welcome + tutorial on first sign-up — approved WHLC email skin, adapted to the app.
async function sendWelcome(env, email, name) {
  if (!env.BREVO_API_KEY) return;
  const app = env.APP_URL || 'https://app.healthyfoodrecipesclub.com';
  const n = escapeHtml(name || (email.split('@')[0]));
  const step = (num, title, body) => `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(52,211,153,0.08);"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td width="36" valign="top"><div style="width:28px;height:28px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.2);border-radius:8px;font-size:13px;text-align:center;line-height:28px;color:#6ee7b7;">${num}</div></td><td style="padding-left:14px;"><p style="font-family:'Cormorant Garamond',Georgia,serif;font-size:17px;color:#f0fdf4;margin:0 0 3px;font-weight:500;">${title}</p><p style="font-size:13px;color:rgba(224,242,230,0.55);margin:0;line-height:1.5;">${body}</p></td></tr></table></td></tr>`;
  const html = `<body style="margin:0;padding:0;background:#060f09;font-family:'Inter',Arial,sans-serif;color:#e8f0ea;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#060f09;"><tr><td align="center" style="padding:32px 16px;">
<table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;width:100%;">
  <tr><td style="background:linear-gradient(180deg,#0a1f12 0%,#060f09 100%);padding:52px 40px 40px;text-align:center;border-radius:20px 20px 0 0;border-bottom:1px solid rgba(52,211,153,0.1);">
    <div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:26px;font-weight:300;letter-spacing:5px;color:#f8f2e8;">WHLC<span style="color:#c9a55a;">.</span></div>
    <div style="width:24px;height:1px;background:rgba(201,165,90,0.3);margin:8px auto;"></div>
    <div style="font-size:8px;letter-spacing:3px;text-transform:uppercase;color:rgba(201,165,90,0.5);margin-bottom:22px;">Wellness &amp; Healthy LifeStyle Club</div>
    <span style="display:inline-block;padding:5px 16px;border:1px solid rgba(110,231,183,0.3);border-radius:100px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#6ee7b7;background:rgba(52,211,153,0.05);margin-bottom:22px;">Welcome to HLC Club</span>
    <h1 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:44px;font-weight:300;color:#f0fdf4;margin:0 0 14px;line-height:1.1;">You&apos;re in.<br><em style="font-style:italic;color:#6ee7b7;">Let&apos;s get started.</em></h1>
    <p style="font-size:14px;color:rgba(224,242,230,0.6);font-weight:300;max-width:400px;margin:0 auto;">Your functional eating companion — desserts that love you back.</p>
  </td></tr>
  <tr><td style="padding:0 24px;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:0 0 16px 16px;margin-bottom:16px;"><tr><td style="padding:30px 32px 26px;">
    <p style="font-size:15px;color:rgba(224,242,230,0.85);line-height:1.8;margin:0 0 14px;">Hi <strong style="color:#a7f3d0;font-weight:500;">${n}</strong>,</p>
    <p style="font-size:15px;color:rgba(224,242,230,0.7);line-height:1.8;margin:0;">You&apos;re in. Here&apos;s how to get the most from the app in your first few minutes:</p>
  </td></tr></table></td></tr>
  <tr><td style="padding:0 24px 16px;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(52,211,153,0.04);border:1px solid rgba(52,211,153,0.12);border-radius:16px;"><tr><td style="padding:26px 32px;">
    <span style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#6ee7b7;font-weight:500;display:block;margin-bottom:18px;">Your first 3 steps</span>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      ${step('01', 'Take the 60-second check-in', 'Tell us how you feel — we tune your recipes to your goals.')}
      ${step('02', 'Try Clean Check', 'Scan any packaged snack and see its real quality — then make the HLC version.')}
      ${step('03', 'Meet your Coach', 'Ask anything — it tells you what to eat and why it works in your body, in plain words.')}
    </table>
  </td></tr></table></td></tr>
  <tr><td style="padding:0 24px 16px;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(251,191,36,0.04);border:1px solid rgba(251,191,36,0.15);border-radius:16px;"><tr><td style="padding:26px 32px;">
    <span style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#fbbf24;font-weight:500;display:block;margin-bottom:12px;">Your free gift</span>
    <h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:23px;font-weight:500;color:#fef3c7;margin:0 0 8px;">The 5-Day Gut Reset — yours free</h2>
    <p style="font-size:14px;color:rgba(224,242,230,0.65);line-height:1.7;margin:0;">A functional 5-day reset to end bloating and rebuild energy. It&apos;s waiting in the app under Protocols &amp; Programs.</p>
  </td></tr></table></td></tr>
  ${emailAppPromo(app, false)}
  <tr><td style="padding:0 24px 20px;text-align:center;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;"><tr><td style="padding:28px 32px;text-align:center;">
    <p style="font-size:15px;color:rgba(224,242,230,0.7);line-height:1.7;margin:0 0 20px;">Everything&apos;s ready. Open the app and start with your check-in.</p>
    <a href="${app}" style="display:inline-block;background:linear-gradient(135deg,#059669,#047857);color:#ecfdf5;text-decoration:none;padding:14px 32px;border-radius:100px;font-size:13px;font-weight:500;letter-spacing:1px;text-transform:uppercase;">Open the app →</a>
  </td></tr></table></td></tr>
  <tr><td style="padding:0 24px 32px;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid rgba(255,255,255,0.06);"><tr><td style="text-align:center;padding:22px 0 0;">
    <div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:20px;letter-spacing:4px;color:rgba(248,242,232,0.4);margin-bottom:8px;">WHLC<span style="color:rgba(201,165,90,0.4);">.</span></div>
    <p style="font-size:11px;color:rgba(224,242,230,0.3);line-height:1.6;margin:0;">Healthy Food Recipes Club &middot; info@healthyfoodrecipesclub.com<br>Educational wellness content, not medical advice.</p>
  </td></tr></table></td></tr>
</table></td></tr></table></body>`;
  await sendBrevoEmail(env, email, name || email.split('@')[0], 'Welcome to HLC Club — your first 3 steps', html);
}

function escapeHtml(s) { return String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

// Shared WHLC email skin (approved): dark, Cormorant wordmark, glass panels.
function emailShell(inner, o = {}) {
  return `<body style="margin:0;padding:0;background:#060f09;font-family:'Inter',Arial,sans-serif;color:#e8f0ea;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#060f09;"><tr><td align="center" style="padding:32px 16px;">
<table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;width:100%;">
  <tr><td style="background:linear-gradient(180deg,#0a1f12 0%,#060f09 100%);padding:48px 40px 36px;text-align:center;border-radius:20px 20px 0 0;border-bottom:1px solid rgba(52,211,153,0.1);">
    <div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:24px;font-weight:300;letter-spacing:5px;color:#f8f2e8;">WHLC<span style="color:#c9a55a;">.</span></div>
    <div style="width:24px;height:1px;background:rgba(201,165,90,0.3);margin:8px auto;"></div>
    <div style="font-size:8px;letter-spacing:3px;text-transform:uppercase;color:rgba(201,165,90,0.5);margin-bottom:20px;">Wellness &amp; Healthy LifeStyle Club</div>
    ${o.badge ? `<span style="display:inline-block;padding:5px 16px;border:1px solid rgba(110,231,183,0.3);border-radius:100px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#6ee7b7;background:rgba(52,211,153,0.05);margin-bottom:20px;">${o.badge}</span>` : ''}
    <h1 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:40px;font-weight:300;color:#f0fdf4;margin:0 0 12px;line-height:1.12;">${o.h1 || ''}</h1>
    ${o.sub ? `<p style="font-size:14px;color:rgba(224,242,230,0.6);font-weight:300;max-width:420px;margin:0 auto;">${o.sub}</p>` : ''}
  </td></tr>
  ${inner}
  <tr><td style="padding:0 24px 32px;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid rgba(255,255,255,0.06);"><tr><td style="text-align:center;padding:22px 0 0;">
    <div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:20px;letter-spacing:4px;color:rgba(248,242,232,0.4);margin-bottom:8px;">WHLC<span style="color:rgba(201,165,90,0.4);">.</span></div>
    <p style="font-size:11px;color:rgba(224,242,230,0.3);line-height:1.6;margin:0;">Healthy Food Recipes Club &middot; info@healthyfoodrecipesclub.com<br>Educational wellness content, not medical advice.</p>
  </td></tr></table></td></tr>
</table></td></tr></table></body>`;
}
function emailCard(accent, label, inner) {
  const c = accent === 'amber' ? '251,191,36' : '52,211,153';
  return `<tr><td style="padding:0 24px 16px;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(${c},0.04);border:1px solid rgba(${c},0.13);border-radius:16px;"><tr><td style="padding:26px 32px;">
    <span style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${accent === 'amber' ? '#fbbf24' : '#6ee7b7'};font-weight:500;display:block;margin-bottom:12px;">${label}</span>${inner}</td></tr></table></td></tr>`;
}
function emailCta(app) {
  return `<tr><td style="padding:0 24px 20px;text-align:center;"><a href="${app}" style="display:inline-block;background:linear-gradient(135deg,#059669,#047857);color:#ecfdf5;text-decoration:none;padding:14px 32px;border-radius:100px;font-size:13px;font-weight:500;letter-spacing:1px;text-transform:uppercase;">Open HLC Club →</a></td></tr>`;
}
// Promotes the full app (its current value) — dropped into marketing emails to drive opens/installs.
function emailAppPromo(app, withCta = true) {
  const feat = (t, d) => `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(52,211,153,0.08);"><p style="font-family:'Cormorant Garamond',Georgia,serif;font-size:16px;color:#f0fdf4;margin:0 0 3px;font-weight:500;">${t}</p><p style="font-size:13px;color:rgba(224,242,230,0.6);margin:0;line-height:1.55;">${d}</p></td></tr>`;
  const cta = withCta ? `<div style="text-align:center;padding-top:24px;"><a href="${app}" style="display:inline-block;background:linear-gradient(135deg,#059669,#047857);color:#ecfdf5;text-decoration:none;padding:14px 32px;border-radius:100px;font-size:13px;font-weight:500;letter-spacing:1px;text-transform:uppercase;">Open HLC Club &rarr;</a></div>` : '';
  return `<tr><td style="padding:0 24px 16px;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(52,211,153,0.05);border:1px solid rgba(52,211,153,0.14);border-radius:16px;"><tr><td style="padding:26px 32px;">
    <span style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#6ee7b7;font-weight:500;display:block;margin-bottom:6px;">Inside the app</span>
    <h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:23px;font-weight:500;color:#f0fdf4;margin:0 0 16px;line-height:1.25;">More than recipes &mdash; your functional companion</h2>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      ${feat('An AI Coach that teaches the why', 'Ask anything &mdash; it tells you what to eat and <em>why</em> it works in your body, in plain words.')}
      ${feat('Clean Check scanner', 'Scan any snack or plate and see its real quality &mdash; and what each nutrient does for you.')}
      ${feat('A plan tuned to your goals', '50+ recipes for every meal, a weekly plan and a grocery list that lean into what you want to feel.')}
      ${feat('Gentle daily tracking', 'Meals, energy, water and streaks &mdash; accountability that actually sticks.')}
    </table>${cta}
  </td></tr></table></td></tr>`;
}

// Day-3 onboarding nudge — fire once per user (cron-driven).
async function sendNudge(env) {
  if (!env.BREVO_API_KEY) return { sent: 0 };
  const app = env.APP_URL || 'https://app.healthyfoodrecipesclub.com';
  const due = (await env.DB.prepare(
    'select id, email, name from users where welcomed_at is not null and welcomed_at < ? and welcomed_at > ? and nudged_at is null limit 200'
  ).bind(daysFromNow(-3), daysFromNow(-14)).all()).results || [];
  let sent = 0;
  for (const u of due) {
    const name = escapeHtml(u.name || u.email.split('@')[0]);
    const inner = emailCard('emerald', 'Your early wins',
      `<p style="font-size:14px;color:rgba(224,242,230,0.7);line-height:1.7;margin:0;">Two things members love first: <strong style="color:#a7f3d0;">Clean Check</strong> — scan any snack and see its real quality — and your <strong style="color:#a7f3d0;">free 5-Day Gut Reset</strong>. Two taps each.</p>`) + emailCta(app);
    const html = emailShell(inner, { badge: 'Day 3', h1: `Settling in, ${name}?`, sub: 'A nudge so you get the early wins.' });
    try { await sendBrevoEmail(env, u.email, u.name, 'Your early wins in HLC Club', html); await env.DB.prepare('update users set nudged_at = ? where id = ?').bind(now(), u.id).run(); sent++; } catch {}
  }
  return { sent };
}

/* ----------------------------- gated downloads ---------------------------- */
// Paid PDFs (the $47 bundle + its protocol guides) live in KV; served only to
// Club members or buyers of the 30-Day Gut Transformation bundle.
const PAID_FILES = new Set(['gut-transformation', 'complete', 'protocol-gut-reset', 'protocol-glp1', 'protocol-hormonal', 'protocol-anti-inflammatory']);
async function downloadFile(request, env, url) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const ents = await activeEntitlements(env.DB, auth.user.id);
  if (!ents.includes(CLUB_PRODUCT) && !ents.includes('gut-transformation')) return cors(request, json({ error: 'locked' }, 403));
  const file = (url.searchParams.get('file') || '').trim();
  if (!PAID_FILES.has(file)) return cors(request, json({ error: 'not_found' }, 404));
  const buf = await env.FILES.get(file, 'arrayBuffer');
  if (!buf) return cors(request, json({ error: 'not_found' }, 404));
  return cors(request, new Response(buf, { headers: { 'content-type': 'application/pdf', 'content-disposition': `attachment; filename="${file}.pdf"` } }));
}

/* --------------------------------- stripe --------------------------------- */

async function createCheckout(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  if (!env.STRIPE_SECRET_KEY) return cors(request, json({ error: 'stripe_not_configured' }, 501));

  const body = await readJson(request);
  // HLC one-time catalog: product code -> Stripe price (public ids, not secret).
  const PROTOCOL_PRICES = {
    'gut-transformation': 'price_1Tn1KYDaaq6By5Hj4CxbnbWS', // $47 — 30-Day Gut Transformation Complete Bundle
    'gut-reset-7day': env.STRIPE_PRICE_GUTRESET,            // $19 in-app protocol
    'dessert-reset': 'price_1TlWD8Daaq6By5Hjx2TMf1Vx',      // $27 eBook
    'sweets-diabetics': 'price_1QpTcgDaaq6By5HjGbLnTOTq'    // $47 cookbook
  };

  const appUrl = env.APP_URL || 'https://app.healthyfoodrecipesclub.com';
  const form = new URLSearchParams();
  if (body.embedded) {
    form.set('ui_mode', 'embedded');
    form.set('return_url', `${appUrl}/?checkout=success`);
  } else {
    form.set('success_url', `${appUrl}/?checkout=success`);
    form.set('cancel_url', `${appUrl}/?checkout=cancel`);
  }
  form.set('client_reference_id', String(auth.user.id));
  form.set('metadata[user_id]', String(auth.user.id));
  form.set('allow_promotion_codes', 'true');
  if (auth.user.stripe_customer_id) form.set('customer', auth.user.stripe_customer_id);
  else form.set('customer_email', auth.user.email);

  if (body.protocol) {
    // One-time protocol purchase.
    const price = PROTOCOL_PRICES[body.protocol];
    if (!price) return cors(request, json({ error: 'price_not_configured' }, 501));
    form.set('mode', 'payment');
    form.set('line_items[0][price]', price);
    form.set('line_items[0][quantity]', '1');
    form.set('metadata[product_code]', body.protocol);
  } else {
    // Subscription (HLC Club).
    const plan = String(body.plan || 'monthly').toLowerCase();
    const price = plan === 'annual' ? env.STRIPE_PRICE_ANNUAL : env.STRIPE_PRICE_MONTHLY;
    if (!price) return cors(request, json({ error: 'price_not_configured' }, 501));
    form.set('mode', 'subscription');
    form.set('line_items[0][price]', price);
    form.set('line_items[0][quantity]', '1');
    form.set('metadata[product_code]', CLUB_PRODUCT);
    form.set('subscription_data[metadata][user_id]', String(auth.user.id));
    form.set('subscription_data[metadata][product_code]', CLUB_PRODUCT);
  }

  const res = await stripeApi(env, 'POST', '/v1/checkout/sessions', form);
  if (!res.ok) {
    console.error('stripe checkout failed', res.status, await res.text());
    return cors(request, json({ error: 'checkout_failed' }, 502));
  }
  const session = await res.json();
  return cors(request, json({ ok: true, url: session.url, clientSecret: session.client_secret }));
}

async function stripeWebhook(request, env) {
  const raw = await request.text();
  const sig = request.headers.get('stripe-signature') || '';
  if (!env.STRIPE_WEBHOOK_SECRET || !(await verifyStripeSignature(raw, sig, env.STRIPE_WEBHOOK_SECRET))) {
    return cors(request, json({ error: 'bad_signature' }, 400));
  }

  const event = safeJson(raw);
  if (!event.id) return cors(request, json({ error: 'bad_event' }, 400));

  // Idempotency: skip if already processed.
  const seen = await env.DB.prepare('insert or ignore into stripe_events (event_id, type, created_at) values (?, ?, ?)')
    .bind(event.id, event.type || '', now()).run();
  if (seen.meta && seen.meta.changes === 0) return cors(request, json({ ok: true, duplicate: true }));

  const obj = event.data?.object || {};
  switch (event.type) {
    case 'checkout.session.completed': {
      const userId = Number(obj.metadata?.user_id || obj.client_reference_id);
      const productCode = obj.metadata?.product_code || CLUB_PRODUCT;
      const customerId = obj.customer || null;
      if (userId && customerId) {
        await env.DB.prepare('update users set stripe_customer_id = ?, updated_at = ? where id = ?')
          .bind(customerId, now(), userId).run();
      }
      // Capture name + country for the CRM/newsletter list.
      const det = obj.customer_details || {};
      const country = det.address?.country || '';
      const parts = (det.name || '').trim().split(/\s+/);
      const first = parts.shift() || '';
      const last = parts.join(' ');
      if (userId && (first || country)) {
        await env.DB.prepare(
          "update users set name = coalesce(nullif(name, ''), ?), last_name = coalesce(nullif(last_name, ''), ?), country = coalesce(nullif(country, ''), ?), updated_at = ? where id = ?"
        ).bind(first, last, country, now(), userId).run();
      }
      if (userId) {
        if (obj.mode === 'subscription') await grant(env.DB, userId, CLUB_PRODUCT, { status: 'active', subId: obj.subscription || null });
        else await grant(env.DB, userId, productCode, { status: 'active' }); // one-time protocol = permanent
      }
      break;
    }
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      await applySubscription(env.DB, obj);
      break;
    }
    case 'customer.subscription.deleted': {
      await env.DB.prepare(
        `update entitlements set status = 'canceled', updated_at = ? where stripe_subscription_id = ?`
      ).bind(now(), obj.id).run();
      break;
    }
  }
  return cors(request, json({ ok: true }));
}

// Map a Stripe subscription object onto the club entitlement.
async function applySubscription(db, sub) {
  const userId = await resolveUserId(db, sub);
  if (!userId) return;
  const status = sub.status === 'active' || sub.status === 'trialing' ? 'active'
    : sub.status === 'past_due' || sub.status === 'unpaid' ? 'past_due'
    : 'canceled';
  const periodEnd = sub.current_period_end ? new Date(sub.current_period_end * 1000).toISOString() : null;
  await grant(db, userId, CLUB_PRODUCT, { status, subId: sub.id, periodEnd });
}

async function resolveUserId(db, sub) {
  const fromMeta = Number(sub.metadata?.user_id);
  if (fromMeta) return fromMeta;
  if (sub.customer) {
    const u = await db.prepare('select id from users where stripe_customer_id = ?').bind(sub.customer).first();
    if (u) return u.id;
  }
  const existing = await db.prepare('select user_id from entitlements where stripe_subscription_id = ?').bind(sub.id).first();
  return existing?.user_id || null;
}

async function grant(db, userId, productCode, { status = 'active', subId = null, periodEnd = null } = {}) {
  await db.prepare(
    `insert into entitlements (user_id, product_code, status, source, stripe_subscription_id, current_period_end, created_at, updated_at)
     values (?, ?, ?, 'stripe', ?, ?, ?, ?)
     on conflict(user_id, product_code) do update set
       status = excluded.status,
       stripe_subscription_id = coalesce(excluded.stripe_subscription_id, entitlements.stripe_subscription_id),
       current_period_end = coalesce(excluded.current_period_end, entitlements.current_period_end),
       updated_at = excluded.updated_at`
  ).bind(userId, productCode, status, subId, periodEnd, now(), now()).run();
}

/* --------------------------------- payhip --------------------------------- */
// Secret-gated: configure Payhip webhook URL with ?key=<PAYHIP_WEBHOOK_SECRET>.
// (Closes the open-grant hole without guessing Payhip's signing scheme. Upgrade to
//  signature/API-confirmation if Payhip becomes a primary revenue rail.)

async function payhipWebhook(request, env) {
  const url = new URL(request.url);
  if (!env.PAYHIP_WEBHOOK_SECRET || url.searchParams.get('key') !== env.PAYHIP_WEBHOOK_SECRET) {
    return cors(request, json({ error: 'unauthorized' }, 401));
  }
  const raw = await request.text();
  const event = safeJson(raw);
  const email = normalizeEmail(event.email || event.customer_email || event.buyer_email);
  const productId = String(event.product_id || event.product || event.product_slug || event.link_id || '').trim();
  const productCode = PAYHIP_PRODUCTS[productId] || normalizeProduct(event.product_name || event.item_name || productId);

  await env.DB.prepare(
    'insert into payhip_events (event_id, email, product_id, payload, created_at) values (?, ?, ?, ?, ?)'
  ).bind(String(event.id || event.sale_id || crypto.randomUUID()), email || null, productId || null, raw, now()).run();

  if (!email || !productCode) return cors(request, json({ ok: true, granted: false }));
  const user = await upsertUser(env.DB, email, '');
  await env.DB.prepare(
    `insert into entitlements (user_id, product_code, status, source, created_at, updated_at)
     values (?, ?, 'active', 'payhip', ?, ?)
     on conflict(user_id, product_code) do update set status = 'active', updated_at = excluded.updated_at`
  ).bind(user.id, productCode, now(), now()).run();
  return cors(request, json({ ok: true, granted: true, product: productCode }));
}

/* ---------------------------------- oura ----------------------------------- */
// Oura Ring OAuth (Authorization Code) + daily sleep/readiness pull. Optional integration:
// gated on env.OURA_CLIENT_ID/OURA_CLIENT_SECRET being set as Worker vars/secrets — every
// route degrades gracefully (never throws) when they are unset.
const OURA_REDIRECT_URI = 'https://hlcapp-api.ambrainvestimentos.workers.dev/api/oura/callback';

async function ensureOuraTable(db) {
  await db.prepare('create table if not exists oura_tokens (user_id text primary key, access_token text, refresh_token text, expires_at text, updated_at text)').run();
}

async function ouraStatus(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const configured = !!(env.OURA_CLIENT_ID && env.OURA_CLIENT_SECRET);
  let connected = false;
  try {
    await ensureOuraTable(env.DB);
    const row = await env.DB.prepare('select user_id from oura_tokens where user_id = ?').bind(String(auth.user.id)).first();
    connected = !!row;
  } catch (e) { console.error('oura status failed', e); }
  return cors(request, json({ ok: true, configured, connected }));
}

async function ouraConnect(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  if (!env.OURA_CLIENT_ID || !env.OURA_CLIENT_SECRET) return cors(request, json({ ok: false, error: 'not_configured' }));
  const state = await signOuraState(auth.user.id, env.OURA_CLIENT_SECRET);
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: env.OURA_CLIENT_ID,
    redirect_uri: OURA_REDIRECT_URI,
    scope: 'daily personal',
    state
  });
  return cors(request, json({ ok: true, url: `https://cloud.ouraring.com/oauth/authorize?${params.toString()}` }));
}

// No requireAuth here — Oura redirects the user's browser to this URL directly (no Bearer
// header available). The signed `state` param recovers the user id instead.
async function ouraCallback(request, env, url) {
  const appUrl = env.APP_URL || 'https://app.healthyfoodrecipesclub.com';
  try {
    if (!env.OURA_CLIENT_ID || !env.OURA_CLIENT_SECRET) return cors(request, redirectResponse(`${appUrl}/?oura=error`));

    const code = url.searchParams.get('code') || '';
    const state = url.searchParams.get('state') || '';
    const userId = await verifyOuraState(state, env.OURA_CLIENT_SECRET);
    if (!userId || !code) return cors(request, redirectResponse(`${appUrl}/?oura=error`));

    const form = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: OURA_REDIRECT_URI,
      client_id: env.OURA_CLIENT_ID,
      client_secret: env.OURA_CLIENT_SECRET
    });
    const res = await fetch('https://api.ouraring.com/oauth/token', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: form.toString()
    });
    if (!res.ok) return cors(request, redirectResponse(`${appUrl}/?oura=error`));
    const tok = await res.json();
    if (!tok.access_token) return cors(request, redirectResponse(`${appUrl}/?oura=error`));

    await ensureOuraTable(env.DB);
    const expiresAt = new Date(Date.now() + (Number(tok.expires_in) || 0) * 1000).toISOString();
    await env.DB.prepare(
      `insert into oura_tokens (user_id, access_token, refresh_token, expires_at, updated_at) values (?, ?, ?, ?, ?)
       on conflict(user_id) do update set access_token = excluded.access_token, refresh_token = excluded.refresh_token, expires_at = excluded.expires_at, updated_at = excluded.updated_at`
    ).bind(userId, tok.access_token, tok.refresh_token || '', expiresAt, now()).run();

    return cors(request, redirectResponse(`${appUrl}/?oura=connected`));
  } catch (e) {
    console.error('oura callback failed', e);
    return cors(request, redirectResponse(`${appUrl}/?oura=error`));
  }
}

async function ouraDisconnect(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  try {
    await ensureOuraTable(env.DB);
    await env.DB.prepare('delete from oura_tokens where user_id = ?').bind(String(auth.user.id)).run();
  } catch (e) { console.error('oura disconnect failed', e); }
  return cors(request, json({ ok: true }));
}

async function ouraData(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  try {
    await ensureOuraTable(env.DB);
    const uid = String(auth.user.id);
    let row = await env.DB.prepare('select * from oura_tokens where user_id = ?').bind(uid).first();
    if (!row) return cors(request, json({ ok: true, connected: false }));
    if (!env.OURA_CLIENT_ID || !env.OURA_CLIENT_SECRET) return cors(request, json({ ok: true, connected: true, sleep: null, readiness: null }));

    if (row.expires_at && new Date(row.expires_at).getTime() <= Date.now()) {
      row = await refreshOuraToken(env, uid, row);
      if (!row) return cors(request, json({ ok: true, connected: true, sleep: null, readiness: null }));
    }

    const fmt = (d) => d.toISOString().slice(0, 10);
    const startDate = fmt(new Date(Date.now() - 2 * 86400000));
    const endDate = fmt(new Date());
    const headers = { authorization: `Bearer ${row.access_token}` };

    const [sleepRes, readinessRes] = await Promise.all([
      fetch(`https://api.ouraring.com/v2/usercollection/daily_sleep?start_date=${startDate}&end_date=${endDate}`, { headers }),
      fetch(`https://api.ouraring.com/v2/usercollection/daily_readiness?start_date=${startDate}&end_date=${endDate}`, { headers })
    ]);
    if (!sleepRes.ok || !readinessRes.ok) return cors(request, json({ ok: true, connected: true, sleep: null, readiness: null }));

    const sleepData = await sleepRes.json();
    const readinessData = await readinessRes.json();
    const latest = (arr) => {
      const items = Array.isArray(arr) ? arr : [];
      return items.length ? items.reduce((a, b) => (a.day > b.day ? a : b)) : null;
    };
    const sleepItem = latest(sleepData.data);
    const readinessItem = latest(readinessData.data);

    const sleep = sleepItem ? {
      day: sleepItem.day,
      score: sleepItem.score ?? null,
      totalSleepDuration: sleepItem.total_sleep_duration ?? null,
      contributors: sleepItem.contributors || null
    } : null;
    const readiness = readinessItem ? {
      day: readinessItem.day,
      score: readinessItem.score ?? null,
      contributors: readinessItem.contributors || null
    } : null;

    return cors(request, json({ ok: true, connected: true, sleep, readiness }));
  } catch (e) {
    console.error('oura data failed', e);
    return cors(request, json({ ok: true, connected: true, sleep: null, readiness: null }));
  }
}

async function refreshOuraToken(env, uid, row) {
  try {
    const form = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: row.refresh_token || '',
      client_id: env.OURA_CLIENT_ID,
      client_secret: env.OURA_CLIENT_SECRET
    });
    const res = await fetch('https://api.ouraring.com/oauth/token', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: form.toString()
    });
    if (!res.ok) return null;
    const tok = await res.json();
    if (!tok.access_token) return null;
    const expiresAt = new Date(Date.now() + (Number(tok.expires_in) || 0) * 1000).toISOString();
    const refreshToken = tok.refresh_token || row.refresh_token;
    await env.DB.prepare(
      'update oura_tokens set access_token = ?, refresh_token = ?, expires_at = ?, updated_at = ? where user_id = ?'
    ).bind(tok.access_token, refreshToken, expiresAt, now(), uid).run();
    return { ...row, access_token: tok.access_token, refresh_token: refreshToken, expires_at: expiresAt };
  } catch (e) {
    console.error('oura refresh failed', e);
    return null;
  }
}

function redirectResponse(location) {
  return new Response(null, { status: 302, headers: { location } });
}

// Signed OAuth state — binds the /oura/connect request to auth.user.id so the callback
// (which arrives as a plain browser redirect with no Bearer header) can identify the user.
// Format: base64url(userId) + "." + base64url(HMAC-SHA256(userId, OURA_CLIENT_SECRET)).
async function signOuraState(userId, secret) {
  const uid = String(userId);
  const mac = await hmacSha256Bytes(secret, uid);
  return `${b64urlEncode(uid)}.${b64urlEncode(mac)}`;
}
async function verifyOuraState(state, secret) {
  const [uidPart, sigPart] = String(state || '').split('.');
  if (!uidPart || !sigPart) return null;
  let uid;
  try { uid = b64urlDecode(uidPart); } catch { return null; }
  const mac = await hmacSha256Bytes(secret, uid);
  const expected = b64urlEncode(mac);
  return timingSafeEqual(expected, sigPart) ? uid : null;
}
async function hmacSha256Bytes(secret, message) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return new Uint8Array(mac);
}
function b64urlEncode(input) {
  const bytes = typeof input === 'string' ? new TextEncoder().encode(input) : input;
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlDecode(str) {
  let s = str.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const binary = atob(s);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

/* --------------------------------- helpers -------------------------------- */

async function upsertUser(db, email, name) {
  await db.prepare(
    `insert into users (email, name, created_at, updated_at) values (?, ?, ?, ?)
     on conflict(email) do update set
       name = coalesce(nullif(excluded.name, ''), users.name),
       updated_at = excluded.updated_at`
  ).bind(email, name || '', now(), now()).run();
  return db.prepare('select * from users where email = ?').bind(email).first();
}

async function favoriteIds(db, userId) {
  const rows = await db.prepare('select recipe_id from favorites where user_id = ? order by created_at desc').bind(userId).all();
  return rows.results.map((r) => r.recipe_id);
}

// Only currently-valid entitlements (active + not past period end). NULL period = lifetime.
async function activeEntitlements(db, userId) {
  const rows = await db.prepare(
    `select product_code from entitlements
     where user_id = ? and status = 'active' and (current_period_end is null or current_period_end > ?)
     order by created_at desc`
  ).bind(userId, now()).all();
  return rows.results.map((r) => r.product_code);
}

async function stripeApi(env, method, path, form) {
  return fetch(`https://api.stripe.com${path}`, {
    method,
    headers: {
      authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: form.toString()
  });
}

async function verifyStripeSignature(payload, header, secret) {
  const parts = Object.fromEntries(header.split(',').map((kv) => kv.split('=')));
  const t = parts.t;
  const v1 = parts.v1;
  if (!t || !v1) return false;
  // Reject stale signatures (>5 min) to blunt replay.
  if (Math.abs(Math.floor(Date.now() / 1000) - Number(t)) > 300) return false;
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${t}.${payload}`));
  const expected = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
  return timingSafeEqual(expected, v1);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

async function sendLoginCode(env, email, name, code) {
  if (!env.BREVO_API_KEY) {
    if (env.ALLOW_DEV_CODES === 'true') console.log(`HLC login code for ${email}: ${code}`);
    return;
  }
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: env.LOGIN_FROM_NAME || 'Healthy Food Recipes Club', email: env.LOGIN_FROM_EMAIL || 'hello@healthyfoodrecipesclub.com' },
      to: [{ email, name }],
      subject: 'Your HLC Club login code',
      htmlContent: `<p>Your Healthy LifeStyle Club login code is:</p><p style="font-size:28px;font-weight:700;letter-spacing:4px">${code}</p><p>This code expires in ${CODE_TTL_MIN} minutes.</p>`,
      textContent: `Your Healthy LifeStyle Club login code is ${code}. It expires in ${CODE_TTL_MIN} minutes.`
    })
  });
  if (!res.ok) throw new Error(`Brevo send failed: ${res.status}`);
}

function cors(request, response, status) {
  const origin = request.headers.get('origin') || '';
  const headers = new Headers(response?.headers);
  headers.set('access-control-allow-origin', ALLOWED_ORIGINS.has(origin) ? origin : 'https://app.healthyfoodrecipesclub.com');
  headers.set('access-control-allow-methods', 'GET,POST,DELETE,OPTIONS');
  headers.set('access-control-allow-headers', 'content-type,authorization');
  headers.set('access-control-max-age', '86400');
  headers.set('vary', 'Origin');
  return new Response(response?.body ?? null, { status: status || response?.status || 200, headers });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });
}

async function readJson(request) { return safeJson(await request.text()); }
function safeJson(text) { try { return text ? JSON.parse(text) : {}; } catch { return {}; } }

function normalizeEmail(email) {
  const v = String(email || '').trim().toLowerCase();
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) ? v : '';
}
function cleanName(name) { return String(name || '').trim().replace(/\s+/g, ' ').slice(0, 120); }
function normalizeProduct(value) {
  const t = String(value || '').toLowerCase();
  if (t.includes('gut') && t.includes('reset')) return 'gut-reset-protocol';
  if (t.includes('bundle')) return 'protocol-bundle';
  return '';
}

async function sha256(value) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function now() { return new Date().toISOString(); }
function minutesFromNow(m) { return new Date(Date.now() + m * 60000).toISOString(); }
function hoursFromNow(h) { return new Date(Date.now() + h * 3600000).toISOString(); }
function daysFromNow(d) { return new Date(Date.now() + d * 86400000).toISOString(); }
