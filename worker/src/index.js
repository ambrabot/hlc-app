const ALLOWED_ORIGINS = new Set([
  'https://app.healthyfoodrecipesclub.com',
  'https://healthyfoodrecipesclub.com',
  'http://localhost:8787',
  'http://127.0.0.1:8787'
]);

const PAYHIP_PRODUCTS = {
  ezP49: 'gut-reset-protocol',
  JUc5F: 'gut-reset-protocol'
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return cors(request, null, 204);

    try {
      if (url.pathname === '/api/health') return cors(request, json({ ok: true, service: 'hlcapp-api' }));
      if (url.pathname === '/api/clerk/sync' && request.method === 'POST') return syncClerkUser(request, env);
      if (url.pathname === '/api/auth/request-code' && request.method === 'POST') return requestCode(request, env);
      if (url.pathname === '/api/auth/verify' && request.method === 'POST') return verifyCode(request, env);
      if (url.pathname === '/api/me' && request.method === 'GET') return me(request, env);
      if (url.pathname === '/api/favorites' && request.method === 'GET') return getFavorites(request, env);
      if (url.pathname === '/api/favorites' && request.method === 'POST') return saveFavorite(request, env);
      if (url.pathname.startsWith('/api/favorites/') && request.method === 'DELETE') return deleteFavorite(request, env, url);
      if (url.pathname === '/api/entitlements' && request.method === 'GET') return getEntitlements(request, env);
      if (url.pathname === '/api/webhooks/payhip' && request.method === 'POST') return payhipWebhook(request, env);
      return cors(request, json({ error: 'not_found' }, 404));
    } catch (error) {
      console.error(error);
      return cors(request, json({ error: 'server_error' }, 500));
    }
  }
};

async function requestCode(request, env) {
  const body = await readJson(request);
  const email = normalizeEmail(body.email);
  const name = cleanName(body.name);
  if (!email) return cors(request, json({ error: 'invalid_email' }, 400));

  const user = await upsertUser(env.DB, email, name);
  const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 1000000).padStart(6, '0');
  const codeHash = await sha256(code);
  const expiresAt = minutesFromNow(10);

  await env.DB.prepare(
    'insert into login_codes (user_id, code_hash, expires_at, created_at) values (?, ?, ?, ?)'
  ).bind(user.id, codeHash, expiresAt, now()).run();

  await sendLoginCode(env, email, name || email.split('@')[0], code);
  return cors(request, json({ ok: true, email, delivery: env.BREVO_API_KEY ? 'email' : 'dev' }));
}

async function verifyCode(request, env) {
  const body = await readJson(request);
  const email = normalizeEmail(body.email);
  const code = String(body.code || '').replace(/\D/g, '').slice(0, 6);
  if (!email || code.length !== 6) return cors(request, json({ error: 'invalid_code' }, 400));

  const user = await env.DB.prepare('select * from users where email = ?').bind(email).first();
  if (!user) return cors(request, json({ error: 'invalid_code' }, 401));

  const codeHash = await sha256(code);
  const row = await env.DB.prepare(
    `select * from login_codes
     where user_id = ? and code_hash = ? and used_at is null and expires_at > ?
     order by created_at desc limit 1`
  ).bind(user.id, codeHash, now()).first();
  if (!row) return cors(request, json({ error: 'invalid_code' }, 401));

  await env.DB.prepare('update login_codes set used_at = ? where id = ?').bind(now(), row.id).run();
  const token = crypto.randomUUID() + '.' + crypto.randomUUID();
  const tokenHash = await sha256(token);
  await env.DB.prepare(
    'insert into sessions (user_id, token_hash, expires_at, created_at) values (?, ?, ?, ?)'
  ).bind(user.id, tokenHash, daysFromNow(90), now()).run();

  const favorites = await favoriteIds(env.DB, user.id);
  const entitlements = await entitlementCodes(env.DB, user.id);
  return cors(request, json({ ok: true, token, user: publicUser(user), favorites, entitlements }));
}

async function me(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const favorites = await favoriteIds(env.DB, auth.user.id);
  const entitlements = await entitlementCodes(env.DB, auth.user.id);
  return cors(request, json({ ok: true, user: publicUser(auth.user), favorites, entitlements }));
}

async function syncClerkUser(request, env) {
  const clerk = await requireClerk(request, env);
  if (clerk.response) return clerk.response;
  const body = await readJson(request);
  const email = normalizeEmail(body.email || clerk.claims.email || clerk.claims.email_address);
  const name = cleanName(body.name || clerk.claims.name || clerk.claims.given_name);
  if (!email) return cors(request, json({ error: 'missing_email' }, 400));
  const user = await upsertUser(env.DB, email, name, clerk.claims.sub);
  const favorites = await favoriteIds(env.DB, user.id);
  const entitlements = await entitlementCodes(env.DB, user.id);
  return cors(request, json({ ok: true, user: publicUser(user), favorites, entitlements }));
}

async function getFavorites(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  return cors(request, json({ ok: true, favorites: await favoriteIds(env.DB, auth.user.id) }));
}

async function saveFavorite(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const body = await readJson(request);
  const recipeId = String(body.recipeId || '').trim().slice(0, 96);
  if (!recipeId) return cors(request, json({ error: 'invalid_recipe' }, 400));
  await env.DB.prepare(
    'insert or ignore into favorites (user_id, recipe_id, created_at) values (?, ?, ?)'
  ).bind(auth.user.id, recipeId, now()).run();
  return cors(request, json({ ok: true, favorites: await favoriteIds(env.DB, auth.user.id) }));
}

async function deleteFavorite(request, env, url) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const recipeId = decodeURIComponent(url.pathname.replace('/api/favorites/', '')).slice(0, 96);
  await env.DB.prepare('delete from favorites where user_id = ? and recipe_id = ?').bind(auth.user.id, recipeId).run();
  return cors(request, json({ ok: true, favorites: await favoriteIds(env.DB, auth.user.id) }));
}

async function getEntitlements(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  return cors(request, json({ ok: true, entitlements: await entitlementCodes(env.DB, auth.user.id) }));
}

async function payhipWebhook(request, env) {
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
    'insert or ignore into entitlements (user_id, product_code, source, created_at) values (?, ?, ?, ?)'
  ).bind(user.id, productCode, 'payhip', now()).run();
  return cors(request, json({ ok: true, granted: true, product: productCode }));
}

async function requireAuth(request, env) {
  const header = request.headers.get('authorization') || '';
  const token = header.replace(/^Bearer\s+/i, '').trim();
  if (!token) return { response: cors(request, json({ error: 'unauthorized' }, 401)) };
  try {
    const tokenHash = await sha256(token);
    const session = await env.DB.prepare(
      'select * from sessions where token_hash = ? and expires_at > ?'
    ).bind(tokenHash, now()).first();
    if (!session) throw new Error('no_email_code_session');
    const user = await env.DB.prepare('select * from users where id = ?').bind(session.user_id).first();
    if (!user) throw new Error('missing_user');
    return { user, session };
  } catch {
    if (!env.CLERK_ISSUER && !env.CLERK_JWKS_URL) {
      return { response: cors(request, json({ error: 'unauthorized' }, 401)) };
    }
    const clerk = await requireClerk(request, env);
    if (clerk.response) return clerk;
    const user = await env.DB.prepare('select * from users where clerk_user_id = ?').bind(clerk.claims.sub).first();
    if (!user) return { response: cors(request, json({ error: 'clerk_user_not_synced' }, 409)) };
    return { user, clerk: clerk.claims };
  }
}

async function requireClerk(request, env) {
  if (!env.CLERK_ISSUER && !env.CLERK_JWKS_URL) {
    return { response: cors(request, json({ error: 'clerk_not_configured' }, 501)) };
  }
  const header = request.headers.get('authorization') || '';
  const token = header.replace(/^Bearer\s+/i, '').trim();
  if (!token) return { response: cors(request, json({ error: 'unauthorized' }, 401)) };
  try {
    return { claims: await verifyClerkJwt(token, env) };
  } catch {
    return { response: cors(request, json({ error: 'invalid_clerk_token' }, 401)) };
  }
}

async function upsertUser(db, email, name, clerkUserId = null) {
  await db.prepare(
    `insert into users (email, name, clerk_user_id, auth_provider, created_at, updated_at) values (?, ?, ?, ?, ?, ?)
     on conflict(email) do update set
       name = coalesce(nullif(excluded.name, ''), users.name),
       clerk_user_id = coalesce(excluded.clerk_user_id, users.clerk_user_id),
       auth_provider = coalesce(excluded.auth_provider, users.auth_provider),
       updated_at = excluded.updated_at`
  ).bind(email, name || '', clerkUserId, clerkUserId ? 'clerk' : 'email_code', now(), now()).run();
  return db.prepare('select * from users where email = ?').bind(email).first();
}

async function verifyClerkJwt(token, env) {
  const [head64, payload64, sig64] = token.split('.');
  if (!head64 || !payload64 || !sig64) throw new Error('bad_jwt');
  const header = JSON.parse(fromBase64Url(head64));
  const claims = JSON.parse(fromBase64Url(payload64));
  const issuer = env.CLERK_ISSUER || '';
  if (issuer && claims.iss !== issuer) throw new Error('bad_issuer');
  const nowSeconds = Math.floor(Date.now() / 1000);
  if (claims.exp && claims.exp <= nowSeconds) throw new Error('expired');
  if (claims.nbf && claims.nbf > nowSeconds) throw new Error('not_before');
  if (!claims.sub) throw new Error('missing_sub');

  const jwksUrl = env.CLERK_JWKS_URL || `${issuer.replace(/\/$/, '')}/.well-known/jwks.json`;
  const jwks = await fetchJwks(jwksUrl, env);
  const jwk = jwks.keys.find((key) => key.kid === header.kid);
  if (!jwk) throw new Error('missing_key');
  const key = await crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['verify']
  );
  const ok = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    key,
    base64UrlBytes(sig64),
    new TextEncoder().encode(`${head64}.${payload64}`)
  );
  if (!ok) throw new Error('bad_signature');
  return claims;
}

async function fetchJwks(url, env) {
  if (env.CLERK_JWKS) return JSON.parse(env.CLERK_JWKS);
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error('jwks_fetch_failed');
  return res.json();
}

async function favoriteIds(db, userId) {
  const rows = await db.prepare('select recipe_id from favorites where user_id = ? order by created_at desc').bind(userId).all();
  return rows.results.map((row) => row.recipe_id);
}

async function entitlementCodes(db, userId) {
  const rows = await db.prepare('select product_code from entitlements where user_id = ? order by created_at desc').bind(userId).all();
  return rows.results.map((row) => row.product_code);
}

async function sendLoginCode(env, email, name, code) {
  if (!env.BREVO_API_KEY) {
    if (env.ALLOW_DEV_CODES === 'true') console.log(`HLC login code for ${email}: ${code}`);
    return;
  }
  const fromEmail = env.LOGIN_FROM_EMAIL || 'hello@healthyfoodrecipesclub.com';
  const fromName = env.LOGIN_FROM_NAME || 'Healthy Food Recipes Club';
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': env.BREVO_API_KEY,
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({
      sender: { name: fromName, email: fromEmail },
      to: [{ email, name }],
      subject: 'Your HLC app login code',
      htmlContent: `<p>Your Healthy Food Recipes Club login code is:</p><p style="font-size:28px;font-weight:700;letter-spacing:4px">${code}</p><p>This code expires in 10 minutes.</p>`,
      textContent: `Your Healthy Food Recipes Club login code is ${code}. It expires in 10 minutes.`
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
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });
}

async function readJson(request) {
  return safeJson(await request.text());
}

function safeJson(text) {
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return {};
  }
}

function normalizeEmail(email) {
  const value = String(email || '').trim().toLowerCase();
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value) ? value : '';
}

function cleanName(name) {
  return String(name || '').trim().replace(/\s+/g, ' ').slice(0, 120);
}

function normalizeProduct(value) {
  const text = String(value || '').toLowerCase();
  if (text.includes('gut') && text.includes('reset')) return 'gut-reset-protocol';
  if (text.includes('bundle')) return 'protocol-bundle';
  return '';
}

function publicUser(user) {
  return { id: user.id, email: user.email, name: user.name || '', authProvider: user.auth_provider || 'email_code' };
}

function fromBase64Url(value) {
  return new TextDecoder().decode(base64UrlBytes(value));
}

function base64UrlBytes(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function now() {
  return new Date().toISOString();
}

function minutesFromNow(minutes) {
  return new Date(Date.now() + minutes * 60 * 1000).toISOString();
}

function daysFromNow(days) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}
