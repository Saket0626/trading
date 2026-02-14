import { Link } from "react-router-dom";
import { AlertTriangle, Shield, TrendingDown } from "lucide-react";

export function WarningsPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <nav className="mb-8 text-[14px] text-[var(--text-secondary)]">
        <Link to="/" className="hover:text-[var(--accent-primary)]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--text-primary)]">Risk Warnings</span>
      </nav>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#EF444420] flex items-center justify-center">
          <AlertTriangle className="h-8 w-8 text-[var(--accent-danger)]" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-[var(--text-primary)]">
            Critical Risk Warnings
          </h1>
          <p className="text-[var(--text-secondary)] mt-1">
            Read this before you consider trading with real money
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <section className="p-6 rounded-xl bg-[#EF444415] border border-[#EF444440]">
          <h2 className="font-semibold text-lg text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <TrendingDown className="h-5 w-5" />
            The Statistics Are Real
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Multiple studies indicate that <strong className="text-[var(--text-primary)]">70-90% of retail traders lose money</strong>.
            This isn't a scare tactic—it's data. The majority of people who try to trade
            professionally will lose. Understanding why (overtrading, poor risk management,
            emotional decisions, insufficient capital) can help you avoid becoming a statistic.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-[var(--text-primary)] mb-4">
            When NOT to Trade
          </h2>
          <ul className="space-y-3 text-[var(--text-secondary)]">
            <li className="flex gap-2">
              <span className="text-[var(--accent-danger)]">•</span>
              <strong className="text-[var(--text-primary)]">When you can't afford to lose the money</strong> — Never use rent money,
              emergency funds, or money needed for living expenses.
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--accent-danger)]">•</span>
              <strong className="text-[var(--text-primary)]">When you're emotional</strong> — Angry, fearful, or overexcited decisions
              lead to losses. Take a break.
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--accent-danger)]">•</span>
              <strong className="text-[var(--text-primary)]">When you haven't tested your strategy</strong> — Paper trade first. Backtest.
              Know your edge before risking capital.
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--accent-danger)]">•</span>
              <strong className="text-[var(--text-primary)]">When you don't understand what you're doing</strong> — If you can't explain
              your trade in one sentence, you shouldn't be in it.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-[var(--text-primary)] mb-4">
            Realistic Expectations
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Expect <strong className="text-[var(--text-primary)]">1-2 years minimum</strong> of learning and practice before reaching
            consistent profitability—and many never do. Trading is a skill. Like any skill, it
            takes time. "Get rich quick" schemes and courses promising easy money are dangerous.
            Don't quit your job to trade. Build an emergency fund first. Treat trading as a
            secondary endeavor until you've proven profitability over many months.
          </p>
        </section>

        <section className="p-6 rounded-xl bg-[#00D4AA15] border border-[#00D4AA40]">
          <h2 className="font-semibold text-lg text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-[var(--accent-primary)]" />
            Our Approach
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
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
          className="px-6 py-3 bg-[var(--accent-primary)] hover:brightness-110 text-[var(--bg-primary)] font-semibold rounded-lg transition-all duration-200"
        >
          Back to Home
        </Link>
        <Link
          to="/learn"
          className="px-6 py-3 border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[#00D4AA40] font-semibold rounded-lg transition-all duration-200"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
}
