import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Trophy, BookOpen, Target, Flame, Award, Medal, BarChart3 } from "lucide-react";
import { useProgress } from "../contexts/ProgressContext";
import { getProgressPercentage } from "../lib/continue";
import { DailyChallenge } from "../components/DailyChallenge";

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
  const { xp, completedLessons, badges, streakDays, addBadge } = useProgress();
  const { paperTradingPnl, paperTradingPnlPercent } = useSimulatorStats();

  useEffect(() => {
    if (paperTradingPnl > 0 && !badges.includes("profitable-trader")) {
      addBadge("profitable-trader");
    }
  }, [paperTradingPnl, badges, addBadge]);
  const progressPercent = getProgressPercentage(completedLessons);
  const { tier, nextTier, progressToNext } = getLevelTier(xp, progressPercent);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
        Your Progress
      </h1>
      <p className="text-surface-600 dark:text-surface-400 mb-12">
        Track your learning journey and earned achievements.
      </p>

      <div className="mb-8 p-6 rounded-xl border-2 border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
            <Award className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400">Your Level</p>
            <p className="text-2xl font-bold text-surface-900 dark:text-surface-100">{tier}</p>
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

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Trophy className="h-7 w-7 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-surface-900 dark:text-surface-100">{xp}</p>
              <p className="text-sm text-surface-600 dark:text-surface-400">XP Earned</p>
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
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
            <div className="flex items-center gap-2 mb-4">
              <Medal className="h-5 w-5 text-amber-500" />
              <h3 className="font-medium text-surface-900 dark:text-surface-100">Lessons Completed</h3>
            </div>
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-4">
              Top learners by lessons completed. Complete more lessons to climb the ranks!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 py-2 px-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                <span className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span className="font-medium text-surface-900 dark:text-surface-100">You</span>
                <span className="ml-auto font-semibold text-primary-600 dark:text-primary-400">
                  {completedLessons.length} lessons
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs text-surface-500">Keep learning to improve your rank!</p>
          </div>
          <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-5 w-5 text-emerald-500" />
              <h3 className="font-medium text-surface-900 dark:text-surface-100">Paper Trading P&L</h3>
            </div>
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-4">
              Top paper traders by profit. Practice in the simulator to compete!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 py-2 px-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                <span className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span className="font-medium text-surface-900 dark:text-surface-100">You</span>
                <span className={`ml-auto font-semibold ${paperTradingPnl >= 0 ? "text-bull" : "text-bear"}`}>
                  {paperTradingPnl >= 0 ? "+" : ""}${paperTradingPnl.toFixed(2)} ({paperTradingPnl >= 0 ? "+" : ""}{paperTradingPnlPercent.toFixed(1)}%)
                </span>
              </div>
            </div>
            <Link
              to="/simulator"
              className="mt-4 inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
            >
              Go to Paper Trading →
            </Link>
          </div>
        </div>
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
