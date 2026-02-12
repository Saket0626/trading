import { Link } from "react-router-dom";
import { AlertTriangle, Shield, TrendingDown } from "lucide-react";

export function WarningsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <nav className="mb-8 text-sm text-surface-600 dark:text-surface-400">
        <Link to="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-surface-900 dark:text-surface-100">Risk Warnings</span>
      </nav>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
          <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100">
            Critical Risk Warnings
          </h1>
          <p className="text-surface-600 dark:text-surface-400 mt-1">
            Read this before you consider trading with real money
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <section className="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <h2 className="font-semibold text-lg text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
            <TrendingDown className="h-5 w-5" />
            The Statistics Are Real
          </h2>
          <p className="text-red-800 dark:text-red-200 leading-relaxed">
            Multiple studies indicate that <strong>70-90% of retail traders lose money</strong>.
            This isn't a scare tactic—it's data. The majority of people who try to trade
            professionally will lose. Understanding why (overtrading, poor risk management,
            emotional decisions, insufficient capital) can help you avoid becoming a statistic.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
            When NOT to Trade
          </h2>
          <ul className="space-y-3 text-surface-700 dark:text-surface-300">
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <strong>When you can't afford to lose the money</strong> — Never use rent money,
              emergency funds, or money needed for living expenses.
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <strong>When you're emotional</strong> — Angry, fearful, or overexcited decisions
              lead to losses. Take a break.
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <strong>When you haven't tested your strategy</strong> — Paper trade first. Backtest.
              Know your edge before risking capital.
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <strong>When you don't understand what you're doing</strong> — If you can't explain
              your trade in one sentence, you shouldn't be in it.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
            Realistic Expectations
          </h2>
          <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
            Expect <strong>1-2 years minimum</strong> of learning and practice before reaching
            consistent profitability—and many never do. Trading is a skill. Like any skill, it
            takes time. "Get rich quick" schemes and courses promising easy money are dangerous.
            Don't quit your job to trade. Build an emergency fund first. Treat trading as a
            secondary endeavor until you've proven profitability over many months.
          </p>
        </section>

        <section className="p-6 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
          <h2 className="font-semibold text-lg text-primary-900 dark:text-primary-100 mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Our Approach
          </h2>
          <p className="text-primary-800 dark:text-primary-200 leading-relaxed">
            This platform teaches you properly. We emphasize risk management in every section.
            We show both winning and losing trades. We're honest about failure rates. Education
            first, trading second. Use our paper trading simulator before risking real capital.
            When you do trade, start small. The goal is to survive long enough to learn—not to
            get rich overnight.
          </p>
        </section>
      </div>

      <div className="mt-12 flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
        >
          I Understand — Continue
        </Link>
        <Link
          to="/learn/1"
          className="px-6 py-3 border border-surface-300 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-800 font-semibold rounded-lg transition-colors"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
}
