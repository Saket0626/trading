import { Link } from "react-router-dom";
import { TrendingUp, ExternalLink } from "lucide-react";

const TRADINGVIEW_URL = "https://www.tradingview.com/";

export function TradePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <nav className="mb-8 text-sm text-surface-600 dark:text-surface-400">
        <Link to="/" className="hover:text-primary-500">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-surface-900 dark:text-surface-100">
          Trade
        </span>
      </nav>

      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 mb-4">
          <TrendingUp className="h-8 w-8" />
        </div>
        <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100">
          Real Paper Trading
        </h1>
        <p className="mt-2 text-surface-600 dark:text-surface-400">
          Ready to practice with real market data? Use a professional platform to start your paper trading experience.
        </p>
      </header>

      <div className="space-y-6">
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-3">
            TradingView
          </h2>
          <p className="text-surface-700 dark:text-surface-300 text-sm leading-relaxed">
            TradingView is one of the world&apos;s leading charting and analysis platforms. It offers real-time data for stocks, forex, crypto, futures, and more. You get powerful technical analysis tools, drawing tools, indicators, and alerts—all in a clean, intuitive interface. Their paper trading feature lets you practice with virtual money using live market prices, so you can test your strategies risk-free before going live.
          </p>
          <ul className="mt-3 text-sm text-surface-600 dark:text-surface-400 space-y-1 list-disc list-inside">
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
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm transition-colors"
          >
            Create Account on TradingView
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="text-sm text-surface-500 dark:text-surface-500">
          Want to keep practicing on this site? Use our{" "}
          <Link to="/simulator" className="text-primary-600 dark:text-primary-400 hover:underline">
            Practice
          </Link>{" "}
          simulator for quick paper trades.
        </p>
      </div>
    </div>
  );
}
