import { Link } from "react-router-dom";
import {
  BookOpen,
  BarChart3,
  Calculator,
  Trophy,
  TrendingUp,
  Shield,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { LEVELS } from "../data/curriculum";
import { useProgress } from "../contexts/ProgressContext";

const levelColors: Record<string, string> = {
  emerald: "from-emerald-500 to-teal-600",
  blue: "from-blue-500 to-cyan-600",
  violet: "from-violet-500 to-purple-600",
  amber: "from-amber-500 to-orange-600",
  rose: "from-rose-500 to-pink-600",
};

export function HomePage() {
  const { xp, completedLessons } = useProgress();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 dark:from-surface-950 dark:via-surface-900 dark:to-surface-950 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi0yLTRjMiAwIDQtMiA0LTJzMCAyIDIgNGMtMiAwLTQgMi00IDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Learn Trading
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                From Zero to Quant
              </span>
            </h1>
            <p className="text-xl text-surface-300 mb-8 leading-relaxed">
              A complete, honest learning journey from complete beginner to quantitative trading.
              Interactive lessons, real simulations, and no "get rich quick" promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/learn/1"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
              >
                Start Learning
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                to="/warnings"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-700 hover:bg-surface-600 text-white font-semibold rounded-lg transition-colors"
              >
                <AlertTriangle className="h-5 w-5" />
                Read Risk Warnings First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Progress */}
      <section className="py-8 border-b border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-surface-800 rounded-xl shadow-sm">
              <Trophy className="h-8 w-8 text-amber-500" />
              <div>
                <p className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                  {xp}
                </p>
                <p className="text-sm text-surface-600 dark:text-surface-400">XP Earned</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-surface-800 rounded-xl shadow-sm">
              <BookOpen className="h-8 w-8 text-primary-500" />
              <div>
                <p className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                  {completedLessons.length}
                </p>
                <p className="text-sm text-surface-600 dark:text-surface-400">Lessons Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Path */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
            Your Learning Path
          </h2>
          <p className="text-surface-600 dark:text-surface-400 text-center max-w-2xl mx-auto mb-12">
            Five levels take you from "what is money?" to building quantitative trading systems.
            Each level builds on the previous. Take your time.
          </p>

          <div className="space-y-6 max-w-3xl mx-auto">
            {LEVELS.map((level) => (
              <Link
                key={level.id}
                to={`/learn/${level.id}`}
                className="block group"
              >
                <div className="flex items-start gap-4 p-6 rounded-xl border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-all">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${levelColors[level.color] || "from-primary-500 to-primary-600"} flex items-center justify-center text-white font-bold`}
                  >
                    {level.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-lg text-surface-900 dark:text-surface-100 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {level.title}
                    </h3>
                    <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">
                      {level.description}
                    </p>
                  </div>
                  <ChevronRight className="flex-shrink-0 h-5 w-5 text-surface-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-surface-100 dark:bg-surface-900/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white dark:bg-surface-800 rounded-xl shadow-sm">
              <BarChart3 className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                Interactive Charts
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Candlestick builder, pattern recognition, and live chart tools.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-surface-800 rounded-xl shadow-sm">
              <Calculator className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                Real Calculators
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Position sizing, risk-reward, margin, and pip calculators.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-surface-800 rounded-xl shadow-sm">
              <TrendingUp className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                Paper Trading
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Practice with real market data. Stocks, forex, crypto accounts.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-surface-800 rounded-xl shadow-sm">
              <Shield className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                Honest Education
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                No hype. Real statistics on failure rates. Risk management first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-12 border-t border-surface-200 dark:border-surface-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-6 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <div className="flex gap-4">
              <AlertTriangle className="h-10 w-10 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  Reality Check Before You Start
                </h3>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  70-90% of retail traders lose money. Trading is difficult and requires significant
                  education, discipline, and capital. Never trade with money you need for living
                  expenses. This platform teaches you properly—expect 1-2 years minimum to reach
                  consistent profitability, and many never do.{" "}
                  <Link to="/warnings" className="underline font-medium">
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
