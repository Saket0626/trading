import { supabase } from "../lib/supabase";

const LEADERBOARD_USER_ID_KEY = "chartwise-leaderboard-user-id";

export function getLeaderboardUserId(): string {
  let id = localStorage.getItem(LEADERBOARD_USER_ID_KEY);
  if (!id) {
    id = "u_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 12);
    localStorage.setItem(LEADERBOARD_USER_ID_KEY, id);
  }
  return id;
}

export interface LeaderboardEntry {
  user_id: string;
  username: string;
  lessons_count: number;
  pnl: number;
  pnl_percent: number;
  updated_at: string;
}

export async function fetchLessonsLeaderboard(limit = 20): Promise<LeaderboardEntry[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("leaderboard")
    .select("user_id, username, lessons_count, pnl, pnl_percent, updated_at")
    .order("lessons_count", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data ?? []) as LeaderboardEntry[];
}

export async function fetchPnlLeaderboard(limit = 20): Promise<LeaderboardEntry[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("leaderboard")
    .select("user_id, username, lessons_count, pnl, pnl_percent, updated_at")
    .order("pnl", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data ?? []) as LeaderboardEntry[];
}

export async function upsertLeaderboardEntry(
  userId: string,
  username: string,
  lessonsCount: number,
  pnl: number,
  pnlPercent: number
): Promise<boolean> {
  if (!supabase) return false;
  const { error } = await supabase.from("leaderboard").upsert(
    {
      user_id: userId,
      username: username.trim().slice(0, 32),
      lessons_count: lessonsCount,
      pnl,
      pnl_percent: pnlPercent,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
  return !error;
}
