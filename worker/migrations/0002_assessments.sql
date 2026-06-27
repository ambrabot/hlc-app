-- Wellness assessment baseline (onboarding) — powers personalization + the 30-day "you improved" story.
create table if not exists assessments (
  id integer primary key autoincrement,
  user_id integer not null references users(id) on delete cascade,
  energy integer,
  sleep integer,
  focus integer,
  digestion integer,
  goals text,
  created_at text not null
);
create index if not exists idx_assessments_user on assessments(user_id, created_at);
