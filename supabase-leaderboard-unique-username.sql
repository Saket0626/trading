-- ChartWise: Add unique username constraint
-- Run this in Supabase SQL Editor if you already created the leaderboard table
-- If you get "duplicate key value" error, remove duplicate usernames first

alter table leaderboard add constraint leaderboard_username_unique unique (username);
