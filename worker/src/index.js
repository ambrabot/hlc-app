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
        case route === 'GET /api/download':          return downloadFile(request, env, url);
        case route === 'POST /api/event':            return logEvent(request, env);
        case route === 'GET /api/admin/overview':    return adminOverview(request, env);
        case route === 'POST /api/admin/send-weekly': return adminSendWeekly(request, env);
        case route === 'POST /api/admin/test-welcome': return adminTestWelcome(request, env);
        case route === 'POST /api/auth/request-code': return requestCode(request, env);
        case route === 'POST /api/auth/verify':       return verifyCode(request, env, ctx);
        case route === 'GET /api/me':                 return me(request, env);
        case route === 'GET /api/favorites':          return listFavorites(request, env);
        case route === 'POST /api/favorites':         return addFavorite(request, env);
        case route.startsWith('DELETE /api/favorites/'): return removeFavorite(request, env, pathname);
        case route === 'GET /api/assessment':         return getAssessment(request, env);
        case route === 'POST /api/assessment':        return saveAssessment(request, env);
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
    assessment: await latestAssessment(db, user.id)
  };
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

/* ------------------------------- clean check ------------------------------ */
// Club-only. Proxies Open Food Facts server-side (avoids browser CORS + sets a proper UA).
async function cleanCheck(request, env, url) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const ents = await activeEntitlements(env.DB, auth.user.id);
  if (!ents.includes(CLUB_PRODUCT)) return cors(request, json({ error: 'club_only' }, 403));
  const fields = 'code,product_name,brands,nova_group,nutriscore_grade,additives_tags,ingredients_text,nutriments,image_small_url,origins,origins_tags,manufacturing_places,categories_tags,labels_tags,allergens_tags,traces_tags,ingredients_analysis_tags';
  const barcode = (url.searchParams.get('barcode') || '').replace(/\D/g, '').slice(0, 14);
  const q = (url.searchParams.get('q') || '').trim().slice(0, 80);
  if (!barcode && !q) return cors(request, json({ error: 'empty_query' }, 400));
  const ua = { 'user-agent': 'HLCClub/1.0 (info@healthyfoodrecipesclub.com)', accept: 'application/json' };
  const off = barcode
    ? `https://world.openfoodfacts.org/api/v2/product/${barcode}.json?fields=${fields}`
    : `https://search.openfoodfacts.org/search?q=${encodeURIComponent(q)}&page_size=1&fields=${fields}`;
  try {
    const res = await fetch(off, { headers: ua });
    if (!res.ok) return cors(request, json({ error: 'off_unavailable' }, 502));
    const data = await res.json();
    const product = barcode ? (data.product || null) : ((data.hits || [])[0] || null);
    const alternatives = product ? await healthierBrands(product, ua) : [];
    return cors(request, json({ ok: true, product, alternatives }));
  } catch {
    return cors(request, json({ error: 'off_unavailable' }, 502));
  }
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
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const ents = await activeEntitlements(env.DB, auth.user.id);
  if (!ents.includes(CLUB_PRODUCT)) return cors(request, json({ error: 'club_only' }, 403));
  if (!env.AI) return cors(request, json({ error: 'vision_unavailable' }, 503));
  try {
    const buf = await request.arrayBuffer();
    if (!buf || buf.byteLength < 200) return cors(request, json({ error: 'no_image' }, 400));
    const bytes = [...new Uint8Array(buf)];
    const prompt = 'You are a nutrition vision assistant. Look at this meal photo and identify each distinct food, estimating its portion. Reply with ONLY compact JSON, no prose, no markdown: {"items":[{"name":"food","grams":120,"kcal":200,"protein":10,"carbs":20,"fat":8}]}. Use realistic everyday portion sizes. Give your best estimate even if unsure. Maximum 8 items.';
    const out = await env.AI.run('@cf/meta/llama-3.2-11b-vision-instruct', { image: bytes, prompt, max_tokens: 700, temperature: 0.2 });
    const text = (out && (out.response || out.description || out.text)) || '';
    let data = null;
    try { const m = String(text).match(/\{[\s\S]*\}/); if (m) data = JSON.parse(m[0]); } catch { data = null; }
    const num = (v) => { const n = Math.round(Number(v)); return Number.isFinite(n) && n >= 0 ? n : 0; };
    const items = (data && Array.isArray(data.items) ? data.items : []).slice(0, 8)
      .map((x) => ({ name: String(x.name || '').slice(0, 40), grams: num(x.grams), kcal: num(x.kcal), protein: num(x.protein), carbs: num(x.carbs), fat: num(x.fat) }))
      .filter((x) => x.name);
    return cors(request, json({ ok: true, items }));
  } catch (e) {
    return cors(request, json({ error: 'vision_failed' }, 502));
  }
}

/* ----------------------------- command center ----------------------------- */

async function logEvent(request, env) {
  const kind = String((await readJson(request)).kind || 'view').slice(0, 32);
  await env.DB.prepare('insert into events (kind, created_at) values (?, ?)').bind(kind, now()).run();
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
  return cors(request, json({ ok: true, stats, audience }));
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
      + emailCta(app);
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
      ${step('03', 'Save favorites &amp; explore protocols', '18 functional recipes, tea rituals, and the 30-Day Gut Transformation.')}
    </table>
  </td></tr></table></td></tr>
  <tr><td style="padding:0 24px 16px;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(251,191,36,0.04);border:1px solid rgba(251,191,36,0.15);border-radius:16px;"><tr><td style="padding:26px 32px;">
    <span style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#fbbf24;font-weight:500;display:block;margin-bottom:12px;">Your free gift</span>
    <h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:23px;font-weight:500;color:#fef3c7;margin:0 0 8px;">The 5-Day Gut Reset — yours free</h2>
    <p style="font-size:14px;color:rgba(224,242,230,0.65);line-height:1.7;margin:0;">A functional 5-day reset to end bloating and rebuild energy. It&apos;s waiting in the app under Protocols &amp; Programs.</p>
  </td></tr></table></td></tr>
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
