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
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return cors(request, null, 204);
    const { pathname } = new URL(request.url);

    try {
      const route = `${request.method} ${pathname}`;
      switch (true) {
        case route === 'GET /api/health':            return cors(request, json({ ok: true, service: 'hlc-club-api' }));
        case route === 'POST /api/auth/request-code': return requestCode(request, env);
        case route === 'POST /api/auth/verify':       return verifyCode(request, env);
        case route === 'GET /api/me':                 return me(request, env);
        case route === 'GET /api/favorites':          return listFavorites(request, env);
        case route === 'POST /api/favorites':         return addFavorite(request, env);
        case route.startsWith('DELETE /api/favorites/'): return removeFavorite(request, env, pathname);
        case route === 'POST /api/checkout':          return createCheckout(request, env);
        case route === 'POST /api/webhooks/stripe':   return stripeWebhook(request, env);
        case route === 'POST /api/webhooks/payhip':   return payhipWebhook(request, env);
        default:                                      return cors(request, json({ error: 'not_found' }, 404));
      }
    } catch (error) {
      console.error(error);
      return cors(request, json({ error: 'server_error' }, 500));
    }
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

  await sendLoginCode(env, email, name || email.split('@')[0], code);
  const payload = { ok: true, email, delivery: env.BREVO_API_KEY ? 'email' : 'dev' };
  if (env.ALLOW_DEV_CODES === 'true') payload.devCode = code; // dev-only; default false in prod
  return cors(request, json(payload));
}

async function verifyCode(request, env) {
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
    entitlements: await activeEntitlements(db, user.id)
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

/* --------------------------------- stripe --------------------------------- */

async function createCheckout(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  if (!env.STRIPE_SECRET_KEY) return cors(request, json({ error: 'stripe_not_configured' }, 501));

  const plan = String((await readJson(request)).plan || 'monthly').toLowerCase();
  const price = plan === 'annual' ? env.STRIPE_PRICE_ANNUAL : env.STRIPE_PRICE_MONTHLY;
  if (!price) return cors(request, json({ error: 'price_not_configured' }, 501));

  const appUrl = env.APP_URL || 'https://app.healthyfoodrecipesclub.com';
  const form = new URLSearchParams();
  form.set('mode', 'subscription');
  form.set('line_items[0][price]', price);
  form.set('line_items[0][quantity]', '1');
  form.set('success_url', `${appUrl}/?checkout=success`);
  form.set('cancel_url', `${appUrl}/?checkout=cancel`);
  form.set('client_reference_id', String(auth.user.id));
  form.set('metadata[user_id]', String(auth.user.id));
  form.set('metadata[product_code]', CLUB_PRODUCT);
  form.set('subscription_data[metadata][user_id]', String(auth.user.id));
  form.set('subscription_data[metadata][product_code]', CLUB_PRODUCT);
  form.set('allow_promotion_codes', 'true');
  if (auth.user.stripe_customer_id) form.set('customer', auth.user.stripe_customer_id);
  else form.set('customer_email', auth.user.email);

  const res = await stripeApi(env, 'POST', '/v1/checkout/sessions', form);
  if (!res.ok) {
    console.error('stripe checkout failed', res.status, await res.text());
    return cors(request, json({ error: 'checkout_failed' }, 502));
  }
  const session = await res.json();
  return cors(request, json({ ok: true, url: session.url }));
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
      const customerId = obj.customer || null;
      if (userId && customerId) {
        await env.DB.prepare('update users set stripe_customer_id = ?, updated_at = ? where id = ?')
          .bind(customerId, now(), userId).run();
      }
      if (userId) await grantClub(env.DB, userId, { status: 'active', subId: obj.subscription || null });
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
  await grantClub(db, userId, { status, subId: sub.id, periodEnd });
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

async function grantClub(db, userId, { status = 'active', subId = null, periodEnd = null }) {
  await db.prepare(
    `insert into entitlements (user_id, product_code, status, source, stripe_subscription_id, current_period_end, created_at, updated_at)
     values (?, ?, ?, 'stripe', ?, ?, ?, ?)
     on conflict(user_id, product_code) do update set
       status = excluded.status,
       stripe_subscription_id = coalesce(excluded.stripe_subscription_id, entitlements.stripe_subscription_id),
       current_period_end = coalesce(excluded.current_period_end, entitlements.current_period_end),
       updated_at = excluded.updated_at`
  ).bind(userId, CLUB_PRODUCT, status, subId, periodEnd, now(), now()).run();
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
