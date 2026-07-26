-- First-party intelligence: an optional, ANONYMOUS detail on each event.
-- Privacy by construction — events has NO user_id, so detail is only ever a
-- category / recipe id / search term / topic keyword, never PII. Never joined to a user.
alter table events add column detail text;
create index if not exists idx_events_detail on events(kind, detail, created_at);
