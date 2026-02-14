import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const TRADINGVIEW_URL = "https://www.tradingview.com/?aff_id=163337&aff_sub=304234&source=8192434";

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

      <header className="mb-8">
        <h1 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-1">
          Real Paper Trading
        </h1>
        <p className="text-sm text-surface-500 dark:text-surface-400">
          Ready to practice with real market data? Use a professional platform to start your paper trading experience.
        </p>
      </header>

      <div className="space-y-6">
        <div className="p-4 rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <h2 className="font-medium text-surface-900 dark:text-surface-100 text-sm mb-2">
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
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm transition-colors"
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
