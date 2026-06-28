-- Day-3 onboarding nudge (fire once per user).
alter table users add column nudged_at text;
