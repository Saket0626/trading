-- ChartWise: Case-insensitive unique usernames
-- Run this in Supabase SQL Editor if you already have the leaderboard table
-- aarav, Aarav, AARav = same (only one allowed); aarav2, aarav0 = different (allowed)

-- Drop old case-sensitive constraint if it exists
alter table leaderboard drop constraint if exists leaderboard_username_unique;

-- Add case-insensitive unique index
create unique index if not exists leaderboard_username_lower_unique on leaderboard (lower(username));
