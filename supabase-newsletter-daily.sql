-- ChartWise Newsletter - Daily send tracking
-- Run this in Supabase SQL Editor after supabase-newsletter.sql
-- Prevents duplicate daily emails

create table if not exists newsletter_daily_sends (
  id uuid primary key default gen_random_uuid(),
  sent_date date not null unique,
  sent_at timestamptz not null default now(),
  subscriber_count int not null default 0
);

alter table newsletter_daily_sends enable row level security;
-- No policies: only service role (Edge Function) can read/write. Service role bypasses RLS.
