-- Track who already got the welcome email (fire once per user).
alter table users add column welcomed_at text;
