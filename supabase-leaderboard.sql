-- ChartWise Leaderboard - run this in Supabase SQL Editor
-- https://supabase.com/dashboard/project/_/sql

create table if not exists leaderboard (
  user_id text primary key,
  username text not null,
  lessons_count int not null default 0,
  pnl float not null default 0,
  pnl_percent float not null default 0,
  updated_at timestamptz not null default now()
);

-- Allow public read, insert, update for leaderboard
alter table leaderboard enable row level security;

create policy "Allow public read"
  on leaderboard for select
  using (true);

create policy "Allow public insert"
  on leaderboard for insert
  with check (true);

create policy "Allow public update"
  on leaderboard for update
  using (true)
  with check (true);
