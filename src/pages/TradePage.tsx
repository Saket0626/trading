import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const TRADINGVIEW_URL = "https://www.tradingview.com/?aff_id=163337&aff_sub=304234&source=8192434";

export function TradePage() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-12">
      <nav className="mb-8 text-[14px] text-[var(--text-secondary)]">
        <Link to="/" className="hover:text-[var(--accent-primary)]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--text-primary)]">
          Trade
        </span>
      </nav>

      <header className="mb-8">
        <h1 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
          Real Paper Trading
        </h1>
        <p className="text-[15px] text-[var(--text-secondary)]">
          Ready to practice with real market data? Use a professional platform to start your paper trading experience.
        </p>
      </header>

      <div className="space-y-6">
        <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
          <h2 className="font-display font-semibold text-[var(--text-primary)] text-lg mb-3">
            TradingView
          </h2>
          <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
            TradingView is one of the world&apos;s leading charting and analysis platforms. It offers real-time data for stocks, forex, crypto, futures, and more. You get powerful technical analysis tools, drawing tools, indicators, and alerts—all in a clean, intuitive interface. Their paper trading feature lets you practice with virtual money using live market prices, so you can test your strategies risk-free before going live.
          </p>
          <ul className="mt-4 text-[15px] text-[var(--text-secondary)] space-y-1.5 list-disc list-inside">
            <li>Real-time charts and market data</li>
            <li>100+ technical indicators and drawing tools</li>
            <li>Paper trading with virtual funds</li>
            <li>Stocks, forex, crypto, futures, and more</li>
            <li>Free tier available; paid plans for advanced features</li>
          </ul>
          <a
            href={TRADINGVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-primary)] hover:brightness-110 text-[var(--bg-primary)] font-bold text-[15px] transition-all duration-200"
          >
            Create Account on TradingView
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="text-[15px] text-[var(--text-secondary)]">
          Want to keep practicing on this site? Use our{" "}
          <Link to="/simulator" className="text-[var(--accent-primary)] hover:underline">
            Practice
          </Link>{" "}
          simulator for quick paper trades.
        </p>
      </div>
    </div>
  );
}
