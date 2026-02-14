-- ChartWise Newsletter - run this in Supabase SQL Editor
-- https://supabase.com/dashboard/project/_/sql

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  subscribed_at timestamptz not null default now()
);

alter table newsletter_subscribers enable row level security;

create policy "Allow public insert"
  on newsletter_subscribers for insert
  with check (true);

-- Prevent reading other subscribers' emails (privacy)
create policy "Allow no public read"
  on newsletter_subscribers for select
  using (false);
