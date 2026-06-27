alter table users add column clerk_user_id text;
alter table users add column auth_provider text default 'email_code';

create unique index if not exists idx_users_clerk_user_id
  on users(clerk_user_id)
  where clerk_user_id is not null;
