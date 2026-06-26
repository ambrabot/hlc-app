create table if not exists users (
  id integer primary key autoincrement,
  email text not null unique,
  name text,
  created_at text not null,
  updated_at text not null
);

create table if not exists login_codes (
  id integer primary key autoincrement,
  user_id integer not null references users(id) on delete cascade,
  code_hash text not null,
  expires_at text not null,
  used_at text,
  created_at text not null
);

create index if not exists idx_login_codes_lookup
  on login_codes(user_id, code_hash, expires_at);

create table if not exists sessions (
  id integer primary key autoincrement,
  user_id integer not null references users(id) on delete cascade,
  token_hash text not null unique,
  expires_at text not null,
  created_at text not null
);

create index if not exists idx_sessions_token
  on sessions(token_hash, expires_at);

create table if not exists favorites (
  user_id integer not null references users(id) on delete cascade,
  recipe_id text not null,
  created_at text not null,
  primary key (user_id, recipe_id)
);

create table if not exists entitlements (
  id integer primary key autoincrement,
  user_id integer not null references users(id) on delete cascade,
  product_code text not null,
  source text not null,
  created_at text not null,
  unique(user_id, product_code)
);

create table if not exists payhip_events (
  id integer primary key autoincrement,
  event_id text not null,
  email text,
  product_id text,
  payload text not null,
  created_at text not null
);
