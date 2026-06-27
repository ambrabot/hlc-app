-- HLC Club — canonical schema (clean rebuild)
-- Auth: passwordless email-code. Entitlements: subscription-aware (Stripe) + one-time (Payhip).

create table if not exists users (
  id integer primary key autoincrement,
  email text not null unique,
  name text,
  stripe_customer_id text,
  created_at text not null,
  updated_at text not null
);

-- Short-lived login codes. attempts caps brute force; one row per request.
create table if not exists login_codes (
  id integer primary key autoincrement,
  user_id integer not null references users(id) on delete cascade,
  code_hash text not null,
  attempts integer not null default 0,
  expires_at text not null,
  used_at text,
  created_at text not null
);
create index if not exists idx_login_codes_lookup on login_codes(user_id, expires_at);

create table if not exists sessions (
  id integer primary key autoincrement,
  user_id integer not null references users(id) on delete cascade,
  token_hash text not null unique,
  expires_at text not null,
  created_at text not null
);
create index if not exists idx_sessions_token on sessions(token_hash, expires_at);

create table if not exists favorites (
  user_id integer not null references users(id) on delete cascade,
  recipe_id text not null,
  created_at text not null,
  primary key (user_id, recipe_id)
);

-- One entitlement row per (user, product). status+current_period_end drive access.
-- status: active | past_due | canceled | expired   source: stripe | payhip | manual
-- current_period_end: ISO datetime, or NULL for lifetime/one-time grants.
create table if not exists entitlements (
  id integer primary key autoincrement,
  user_id integer not null references users(id) on delete cascade,
  product_code text not null,
  status text not null default 'active',
  source text not null,
  stripe_subscription_id text,
  current_period_end text,
  created_at text not null,
  updated_at text not null,
  unique(user_id, product_code)
);
create index if not exists idx_entitlements_user on entitlements(user_id);
create index if not exists idx_entitlements_sub on entitlements(stripe_subscription_id);

-- Webhook idempotency / audit.
create table if not exists stripe_events (
  event_id text primary key,
  type text,
  created_at text not null
);

create table if not exists payhip_events (
  id integer primary key autoincrement,
  event_id text,
  email text,
  product_id text,
  payload text not null,
  created_at text not null
);
