import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Trophy, BookOpen, Target, Flame, Award, Medal, BarChart3, User, Save } from "lucide-react";
import { useProgress } from "../contexts/ProgressContext";
import { getProgressPercentage } from "../lib/continue";
import { DailyChallenge } from "../components/DailyChallenge";
import { isLeaderboardEnabled } from "../lib/supabase";
import {
  fetchLessonsLeaderboard,
  fetchPnlLeaderboard,
  upsertLeaderboardEntry,
  checkUsernameAvailable,
  getLeaderboardUserId,
  type LeaderboardEntry,
} from "../services/leaderboard";

const SIMULATOR_STORAGE_KEY = "trading-edu-simulator";

function useSimulatorStats() {
  const [stats, setStats] = useState<{ lessonsCompleted: number; paperTradingPnl: number; paperTradingPnlPercent: number }>({ lessonsCompleted: 0, paperTradingPnl: 0, paperTradingPnlPercent: 0 });

  const readSimulator = useCallback(() => {
    try {
      const stored = localStorage.getItem(SIMULATOR_STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored);
      const accs = parsed?.accounts;
      if (!accs) return;

      let totalStart = 0;
      let totalEquity = 0;
      for (const t of ["stocks", "forex", "crypto", "commodities", "futures"] as const) {
        const a = accs[t];
        if (!a) continue;
        const start = a.startingBalance ?? a.balance;
        const equity = a.equity ?? a.balance;
        totalStart += start;
        totalEquity += equity;
      }
      const totalPnl = totalEquity - totalStart;
      const pnlPercent = totalStart > 0 ? ((totalEquity - totalStart) / totalStart) * 100 : 0;

      setStats((prev) => ({ ...prev, paperTradingPnl: totalPnl, paperTradingPnlPercent: pnlPercent }));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    readSimulator();
    const onVisible = () => readSimulator();
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [readSimulator]);

  return stats;
}

function getLevelTier(xp: number, progressPercent: number): { tier: string; nextTier: string; progressToNext: number } {
  if (xp >= 2000 || progressPercent >= 80) {
    return { tier: "Quantitative Trader", nextTier: "", progressToNext: 100 };
  }
  if (xp >= 800 || progressPercent >= 50) {
    return { tier: "Professional", nextTier: "Quantitative Trader", progressToNext: Math.min(100, ((xp - 800) / 1200) * 100) };
  }
  if (xp >= 200 || progressPercent >= 20) {
    return { tier: "Intermediate", nextTier: "Professional", progressToNext: Math.min(100, ((xp - 200) / 600) * 100) };
  }
  return { tier: "Novice", nextTier: "Intermediate", progressToNext: Math.min(100, (xp / 200) * 100) };
}

export function ProgressPage() {
  const { xp, completedLessons, badges, streakDays, username, setUsername, addBadge } = useProgress();
  const { paperTradingPnl, paperTradingPnlPercent } = useSimulatorStats();
  const [usernameInput, setUsernameInput] = useState(username ?? "");
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [lessonsLeaderboard, setLessonsLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [pnlLeaderboard, setPnlLeaderboard] = useState<LeaderboardEntry[]>([]);
  const leaderboardEnabled = isLeaderboardEnabled();
  const userId = getLeaderboardUserId();

  useEffect(() => {
    if (paperTradingPnl > 0 && !badges.includes("profitable-trader")) {
      addBadge("profitable-trader");
    }
  }, [paperTradingPnl, badges, addBadge]);

  // Sync username input when context loads
  useEffect(() => {
    setUsernameInput(username ?? "");
  }, [username]);

  // Sync to leaderboard when username set and at least 1 lesson
  useEffect(() => {
    if (!leaderboardEnabled || !username?.trim() || completedLessons.length === 0) return;
    upsertLeaderboardEntry(userId, username.trim(), completedLessons.length, paperTradingPnl, paperTradingPnlPercent);
  }, [leaderboardEnabled, userId, username, completedLessons.length, paperTradingPnl, paperTradingPnlPercent]);

  // Fetch leaderboards
  const loadLeaderboards = useCallback(async () => {
    if (!leaderboardEnabled) return;
    const [lessons, pnl] = await Promise.all([fetchLessonsLeaderboard(), fetchPnlLeaderboard()]);
    setLessonsLeaderboard(lessons);
    setPnlLeaderboard(pnl);
  }, [leaderboardEnabled]);

  useEffect(() => {
    loadLeaderboards();
    const interval = setInterval(loadLeaderboards, 15000);
    return () => clearInterval(interval);
  }, [loadLeaderboards]);

  const handleSaveUsername = async () => {
    const trimmed = usernameInput.trim().slice(0, 32);
    setUsernameError(null);
    if (!trimmed) return;
    const { available, error } = await checkUsernameAvailable(trimmed, userId);
    if (!available) {
      setUsernameError(error ?? "Username already taken");
      return;
    }
    setUsername(trimmed);
    setUsernameSaved(true);
    setIsEditingUsername(false);
    setTimeout(() => setUsernameSaved(false), 2000);
  };

  const handleStartEditingUsername = () => {
    setUsernameInput(username ?? "");
    setUsernameError(null);
    setIsEditingUsername(true);
  };

  const progressPercent = getProgressPercentage(completedLessons);
  const { tier, nextTier, progressToNext } = getLevelTier(xp, progressPercent);
  const hasUsername = !!username?.trim();
  const showLeaderboardPrompt = leaderboardEnabled && !hasUsername;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-1">
        Your Progress
      </h1>
      <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
        Track your learning journey and earned achievements.
      </p>

      {/* Username / Profile - required for live leaderboards */}
      {leaderboardEnabled && (
        <div className="mb-6 p-4 rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-start gap-3">
            <User className="h-5 w-5 text-surface-500 mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              {hasUsername && !isEditingUsername ? (
                <p className="text-sm text-surface-700 dark:text-surface-300">
                  You&apos;re on the leaderboard as <strong>{username}</strong>.{" "}
                  <button
                    type="button"
                    onClick={handleStartEditingUsername}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Change
                  </button>
                </p>
              ) : (
                <>
                  <p className="text-sm font-medium text-surface-900 dark:text-surface-100 mb-1">
                    {hasUsername ? "Change your username" : "Compete with others in real time"}
                  </p>
                  <p className="text-xs text-surface-500 dark:text-surface-400 mb-3">
                    {hasUsername
                      ? "Pick a new username (must be unique)."
                      : "Enter a username to join the live leaderboard. You'll show up once you complete at least one lesson."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <input
                      type="text"
                      value={usernameInput}
                      onChange={(e) => {
                        setUsernameInput(e.target.value);
                        setUsernameError(null);
                      }}
                      placeholder="Enter your username"
                      maxLength={32}
                      className={`px-3 py-2 rounded border bg-surface-50 dark:bg-surface-900 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 ${
                        usernameError ? "border-red-500 dark:border-red-600" : "border-surface-200 dark:border-surface-600"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={handleSaveUsername}
                      disabled={!usernameInput.trim()}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                    >
                      <Save className="h-4 w-4" />
                      {usernameSaved ? "Saved!" : "Save"}
                    </button>
                    {hasUsername && (
                      <button
                        type="button"
                        onClick={() => setIsEditingUsername(false)}
                        className="px-3 py-2 rounded border border-surface-200 dark:border-surface-600 text-surface-700 dark:text-surface-300 text-sm font-medium hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                  {usernameError && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {usernameError}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mb-6 p-4 rounded border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded border border-surface-200 dark:border-surface-700 flex items-center justify-center">
            <Award className="h-6 w-6 text-surface-600 dark:text-surface-400" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">Your Level</p>
            <p className="text-lg font-semibold text-surface-900 dark:text-surface-100 tabular-nums">{tier}</p>
            {nextTier && (
              <div className="mt-2">
                <div className="flex justify-between text-xs text-surface-500 mb-1">
                  <span>Progress to {nextTier}</span>
                  <span>{Math.round(progressToNext)}%</span>
                </div>
                <div className="h-2 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
                  <div
                    className="h-full bg-primary-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressToNext}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <div className="p-4 rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded border border-surface-200 dark:border-surface-700 flex items-center justify-center">
              <Trophy className="h-5 w-5 text-surface-500" />
            </div>
            <div>
              <p className="text-lg font-semibold text-surface-900 dark:text-surface-100 tabular-nums">{xp}</p>
              <p className="text-xs text-surface-500 dark:text-surface-400">XP</p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <BookOpen className="h-7 w-7 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-surface-900 dark:text-surface-100">
                {completedLessons.length}
              </p>
              <p className="text-sm text-surface-600 dark:text-surface-400">Lessons Completed</p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <Target className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-surface-900 dark:text-surface-100">
                {badges.length}
              </p>
              <p className="text-sm text-surface-600 dark:text-surface-400">Badges Earned</p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Flame className="h-7 w-7 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-surface-900 dark:text-surface-100">
                {streakDays}
              </p>
              <p className="text-sm text-surface-600 dark:text-surface-400">Day Streak</p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div>
            <p className="text-3xl font-bold text-surface-900 dark:text-surface-100">
              {progressPercent}%
            </p>
            <p className="text-sm text-surface-600 dark:text-surface-400">Overall Progress</p>
            <div className="mt-2 h-2 w-full rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
              <div
                className="h-full bg-primary-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <section>
            <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
              Badges
            </h2>
            <div className="flex flex-wrap gap-3">
              {(["first-lesson", "first-quiz", "dedicated", "quiz-master", "streak-7", "pattern-master", "risk-manager", "profitable-trader"] as const).map((id) => {
                const labels: Record<string, string> = {
                  "first-lesson": "First Lesson",
                  "first-quiz": "First Quiz Passed",
                  dedicated: "10 Lessons",
                  "quiz-master": "5 Quizzes Passed",
                  "streak-7": "7 Day Streak",
                  "pattern-master": "Pattern Master",
                  "risk-manager": "Risk Manager",
                  "profitable-trader": "Profitable Trader (Paper P&L > 0)",
                };
                const earned = badges.includes(id);
                return (
                  <div
                    key={id}
                    className={`px-4 py-2 rounded-lg border ${
                      earned
                        ? "bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700"
                        : "bg-surface-100 dark:bg-surface-800 border-surface-200 dark:border-surface-700 opacity-60"
                    }`}
                  >
                    <span className="font-medium">{labels[id] || id}</span>
                    {earned ? (
                      <span className="ml-2 text-amber-600 dark:text-amber-400">✓</span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div>
          <DailyChallenge />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
          Leaderboards
        </h2>
        {leaderboardEnabled ? (
          showLeaderboardPrompt ? (
            <div className="p-6 rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 max-w-xl">
              <p className="text-base font-medium text-surface-900 dark:text-surface-100 mb-2">
                Compete with others in real time
              </p>
              <p className="text-sm text-surface-600 dark:text-surface-400 mb-4">
                Every user who completes at least one lesson can appear on the leaderboard. Set your username above to join and see your rank alongside other learners.
              </p>
              <p className="text-xs text-surface-500 dark:text-surface-400">
                Complete a lesson and add your username to get on the board!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
                <div className="flex items-center gap-2 mb-4">
                  <Medal className="h-5 w-5 text-amber-500" />
                  <h3 className="font-medium text-surface-900 dark:text-surface-100">Lessons Completed</h3>
                </div>
                <p className="text-sm text-surface-600 dark:text-surface-400 mb-4">
                  Top learners by lessons completed. Complete more lessons to climb the ranks!
                </p>
                <div className="space-y-2">
                  {lessonsLeaderboard.length === 0 ? (
                    <p className="text-sm text-surface-500 py-2">No entries yet. Complete a lesson to appear!</p>
                  ) : (
                    lessonsLeaderboard.map((entry, i) => (
                      <div
                        key={entry.user_id}
                        className={`flex items-center gap-3 py-2 px-3 rounded ${
                          entry.user_id === userId
                            ? "bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800"
                            : "bg-surface-50 dark:bg-surface-800 border border-surface-100 dark:border-surface-700"
                        }`}
                      >
                        <span className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-medium text-surface-900 dark:text-surface-100 truncate">
                          {entry.username}
                          {entry.user_id === userId && " (you)"}
                        </span>
                        <span className="ml-auto font-semibold text-primary-600 dark:text-primary-400 shrink-0 tabular-nums">
                          {entry.lessons_count} lessons
                        </span>
                      </div>
                    ))
                  )}
                </div>
                <p className="mt-4 text-xs text-surface-500">Live • Updates every 15s</p>
              </div>
              <div className="p-6 rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-emerald-500" />
                  <h3 className="font-medium text-surface-900 dark:text-surface-100">Paper Trading P&L</h3>
                </div>
                <p className="text-sm text-surface-600 dark:text-surface-400 mb-4">
                  Top paper traders by profit. Practice in the simulator to compete!
                </p>
                <div className="space-y-2">
                  {pnlLeaderboard.length === 0 ? (
                    <p className="text-sm text-surface-500 py-2">No entries yet. Practice in the simulator!</p>
                  ) : (
                    pnlLeaderboard.map((entry, i) => (
                      <div
                        key={entry.user_id}
                        className={`flex items-center gap-3 py-2 px-3 rounded ${
                          entry.user_id === userId
                            ? "bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800"
                            : "bg-surface-50 dark:bg-surface-800 border border-surface-100 dark:border-surface-700"
                        }`}
                      >
                        <span className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-medium text-surface-900 dark:text-surface-100 truncate">
                          {entry.username}
                          {entry.user_id === userId && " (you)"}
                        </span>
                        <span
                          className={`ml-auto font-semibold shrink-0 tabular-nums ${
                            entry.pnl >= 0 ? "text-bull" : "text-bear"
                          }`}
                        >
                          {entry.pnl >= 0 ? "+" : ""}${entry.pnl.toFixed(2)} ({entry.pnl >= 0 ? "+" : ""}
                          {entry.pnl_percent.toFixed(1)}%)
                        </span>
                      </div>
                    ))
                  )}
                </div>
                <Link
                  to="/simulator"
                  className="mt-4 inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
                >
                  Go to Paper Trading →
                </Link>
                <p className="mt-2 text-xs text-surface-500">Live • Updates every 15s</p>
              </div>
            </div>
          )
        ) : (
          <div className="p-6 rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 max-w-xl">
            <p className="text-sm text-surface-600 dark:text-surface-400">
              Live leaderboards require Supabase. Add <code className="text-xs bg-surface-100 dark:bg-surface-800 px-1 rounded">VITE_SUPABASE_URL</code> and{" "}
              <code className="text-xs bg-surface-100 dark:bg-surface-800 px-1 rounded">VITE_SUPABASE_ANON_KEY</code> to your{" "}
              <code className="text-xs bg-surface-100 dark:bg-surface-800 px-1 rounded">.env</code>, then run{" "}
              <code className="text-xs bg-surface-100 dark:bg-surface-800 px-1 rounded">supabase-leaderboard.sql</code> in the Supabase SQL Editor.
            </p>
          </div>
        )}
      </section>

      <section>
        <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
          Recent Activity
        </h2>
        {completedLessons.length === 0 ? (
          <p className="text-surface-600 dark:text-surface-400">
            Complete your first lesson to see progress here!
          </p>
        ) : (
          <p className="text-surface-600 dark:text-surface-400">
            You've completed {completedLessons.length} lesson{completedLessons.length !== 1 ? "s" : ""}.
            Keep going!
          </p>
        )}
      </section>
    </div>
  );
}
