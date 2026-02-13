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

/** Escape % _ \ for ILIKE exact match (case-insensitive) */
function escapeForIlike(s: string): string {
  return s.replace(/[\\%_]/g, (c) => "\\" + c);
}

/** Check if a username is available (not taken by another user). Case-insensitive: aarav, Aarav, AARav are the same. */
export async function checkUsernameAvailable(
  username: string,
  currentUserId: string
): Promise<{ available: boolean; error?: string }> {
  if (!supabase) return { available: false, error: "Leaderboard not configured" };
  const trimmed = username.trim().slice(0, 32);
  if (!trimmed) return { available: false, error: "Username is required" };
  const { data, error } = await supabase
    .from("leaderboard")
    .select("user_id, username")
    .ilike("username", escapeForIlike(trimmed))
    .maybeSingle();
  if (error) return { available: false, error: "Could not check username" };
  if (data && data.user_id !== currentUserId) return { available: false, error: "Username already taken" };
  return { available: true };
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
