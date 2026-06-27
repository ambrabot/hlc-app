-- Command center: capture country + lightweight pageview events.
alter table users add column country text;
alter table users add column last_name text;

create table if not exists events (
  id integer primary key autoincrement,
  kind text not null,
  created_at text not null
);
create index if not exists idx_events_kind on events(kind, created_at);
