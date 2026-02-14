import { Link } from "react-router-dom";
import {
  BookOpen,
  BarChart3,
  Calculator,
  Trophy,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Flame,
} from "lucide-react";
import { LEVELS } from "../data/curriculum";
import { useProgress } from "../contexts/ProgressContext";
import { getNextLessonToContinue, getProgressPercentage } from "../lib/continue";
import { MarketOverviewWidget } from "../components/MarketOverviewWidget";

const levelColors: Record<string, string> = {
  emerald: "bg-surface-700 dark:bg-surface-600 text-white",
  blue: "bg-surface-700 dark:bg-surface-600 text-white",
  violet: "bg-surface-700 dark:bg-surface-600 text-white",
  amber: "bg-surface-700 dark:bg-surface-600 text-white",
  rose: "bg-surface-700 dark:bg-surface-600 text-white",
};

export function HomePage() {
  const { xp, completedLessons, streakDays } = useProgress();
  const nextLesson = getNextLessonToContinue(completedLessons);
  const progressPercent = getProgressPercentage(completedLessons);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-surface-200 dark:border-surface-800 bg-surface-900 dark:bg-surface-950 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Master Trading From Zero to Quant
            </h1>
            <p className="text-surface-300 text-base mb-6 leading-relaxed">
              A complete, honest learning journey from complete beginner to quantitative trading.
              Interactive lessons, real simulations, and no "get rich quick" promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/learn"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded transition-colors cursor-pointer no-underline"
              >
                Start Learning
                <ChevronRight className="h-4 w-4" />
              </a>
              <Link
                to="/warnings"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-surface-600 hover:bg-surface-800 text-surface-200 text-sm font-medium rounded transition-colors"
              >
                <AlertTriangle className="h-4 w-4" />
                Read Risk Warnings First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Continue where you left off */}
      {nextLesson && (
        <section className="py-4 border-b border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-900/50">
          <div className="container mx-auto px-4">
            <Link
              to={`/learn/${nextLesson.levelId}/${nextLesson.moduleSlug}/${nextLesson.lesson.slug}`}
              className="flex flex-wrap items-center justify-between gap-4 p-4 rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:border-surface-300 dark:hover:border-surface-600 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded border border-surface-200 dark:border-surface-700 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-surface-600 dark:text-surface-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">
                    Continue where you left off
                  </p>
                  <p className="font-medium text-surface-900 dark:text-surface-100 text-sm">
                    {nextLesson.lesson.title}
                  </p>
                  <p className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">
                    Level {nextLesson.levelId} • {nextLesson.lesson.duration}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-surface-400 group-hover:text-surface-600 dark:group-hover:text-surface-300 transition-colors" />
            </Link>
          </div>
        </section>
      )}

      {/* Stats / Progress */}
      <section className="py-6 border-b border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-surface-800 rounded border border-surface-200 dark:border-surface-700">
              <Trophy className="h-5 w-5 text-surface-500" />
              <div>
                <p className="text-lg font-semibold text-surface-900 dark:text-surface-100 tabular-nums">
                  {xp}
                </p>
                <p className="text-xs text-surface-500 dark:text-surface-400">XP</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-surface-800 rounded border border-surface-200 dark:border-surface-700">
              <BookOpen className="h-5 w-5 text-surface-500" />
              <div>
                <p className="text-lg font-semibold text-surface-900 dark:text-surface-100 tabular-nums">
                  {completedLessons.length}
                </p>
                <p className="text-xs text-surface-500 dark:text-surface-400">Lessons</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-surface-800 rounded border border-surface-200 dark:border-surface-700">
              <div>
                <p className="text-lg font-semibold text-surface-900 dark:text-surface-100 tabular-nums">
                  {progressPercent}%
                </p>
                <p className="text-xs text-surface-500 dark:text-surface-400">Progress</p>
              </div>
              <div className="w-16">
                <div className="h-1.5 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
                  <div
                    className="h-full bg-primary-600 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
            {streakDays > 0 && (
              <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-surface-800 rounded border border-surface-200 dark:border-surface-700">
                <Flame className="h-5 w-5 text-surface-500" />
                <div>
                  <p className="text-lg font-semibold text-surface-900 dark:text-surface-100 tabular-nums">
                    {streakDays}
                  </p>
                  <p className="text-xs text-surface-500 dark:text-surface-400">
                    Day{streakDays !== 1 ? "s" : ""} Streak
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <MarketOverviewWidget />

      {/* Curriculum Path */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-1">
            Your Learning Path
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 max-w-2xl mb-8">
            Five levels take you from "what is money?" to building quantitative trading systems.
            Each level builds on the previous. Take your time.
          </p>

          <div className="space-y-4 max-w-2xl">
            {LEVELS.map((level) => (
              <Link
                key={level.id}
                to={`/learn/${level.id}`}
                className="block group"
              >
                <div className="flex items-start gap-4 p-4 rounded border border-surface-200 dark:border-surface-700 hover:border-surface-300 dark:hover:border-surface-600 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors">
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded ${levelColors[level.color] || "bg-surface-700 dark:bg-surface-600 text-white"} flex items-center justify-center text-sm font-medium tabular-nums`}
                  >
                    {level.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-surface-900 dark:text-surface-100 text-sm">
                      {level.title}
                    </h3>
                    <p className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">
                      {level.description}
                    </p>
                  </div>
                  <ChevronRight className="flex-shrink-0 h-4 w-4 text-surface-400 group-hover:text-surface-600 dark:group-hover:text-surface-300 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-12 bg-surface-50 dark:bg-surface-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-6">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
            <div className="card-hover p-5 bg-white dark:bg-surface-800 rounded border border-surface-200 dark:border-surface-700">
              <BarChart3 className="h-5 w-5 text-surface-500 mb-3" />
              <h3 className="font-medium text-surface-900 dark:text-surface-100 text-sm mb-1">
                Real Live Data
              </h3>
              <p className="text-xs text-surface-500 dark:text-surface-400 mb-3">
                Live prices from Binance, Finnhub, CoinGecko. Stocks, forex, crypto, commodities.
              </p>
              <Link
                to="/simulator"
                className="text-xs text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                View markets →
              </Link>
            </div>
            <div className="card-hover p-5 bg-white dark:bg-surface-800 rounded border border-surface-200 dark:border-surface-700">
              <Calculator className="h-5 w-5 text-surface-500 mb-3" />
              <h3 className="font-medium text-surface-900 dark:text-surface-100 text-sm mb-1">
                Interactive Learning
              </h3>
              <p className="text-xs text-surface-500 dark:text-surface-400 mb-3">
                Candlestick builder, pattern recognition, position size calculator, Python sandbox.
              </p>
              <Link
                to="/tools"
                className="text-xs text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Explore tools →
              </Link>
            </div>
            <div className="card-hover p-5 bg-white dark:bg-surface-800 rounded border border-surface-200 dark:border-surface-700">
              <TrendingUp className="h-5 w-5 text-surface-500 mb-3" />
              <h3 className="font-medium text-surface-900 dark:text-surface-100 text-sm mb-1">
                Paper Trading
              </h3>
              <p className="text-xs text-surface-500 dark:text-surface-400 mb-3">
                Practice with real market prices. Stock, forex, crypto, commodity accounts.
              </p>
              <Link
                to="/simulator"
                className="text-xs text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Start paper trading →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-8 border-t border-surface-200 dark:border-surface-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl p-4 rounded border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-surface-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-surface-900 dark:text-surface-100 text-sm mb-1">
                  Reality Check Before You Start
                </h3>
                <p className="text-xs text-surface-600 dark:text-surface-400">
                  70-90% of retail traders lose money. Trading is difficult and requires significant
                  education, discipline, and capital. Never trade with money you need for living
                  expenses. This platform teaches you properly—expect 1-2 years minimum to reach
                  consistent profitability, and many never do.{" "}
                  <Link to="/warnings" className="text-primary-600 dark:text-primary-400 underline font-medium">
                    Read the full warnings
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
