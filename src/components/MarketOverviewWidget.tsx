import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { useTickerData } from "../hooks/useTickerData";

const INDICES = [
  { symbol: "SPY", name: "S&P 500", type: "stocks" as const },
  { symbol: "AAPL", name: "Apple", type: "stocks" as const },
  { symbol: "NVDA", name: "NVIDIA", type: "stocks" as const },
];
const FOREX = [
  { symbol: "EURUSD", name: "EUR/USD", type: "forex" as const },
  { symbol: "GBPUSD", name: "GBP/USD", type: "forex" as const },
  { symbol: "USDJPY", name: "USD/JPY", type: "forex" as const },
];
const CRYPTO = [
  { symbol: "BTCUSD", name: "Bitcoin", type: "crypto" as const },
  { symbol: "ETHUSD", name: "Ethereum", type: "crypto" as const },
  { symbol: "SOLUSD", name: "Solana", type: "crypto" as const },
];

export function MarketOverviewWidget() {
  const { quotes } = useTickerData(30000);

  const renderRow = (item: { symbol: string; name: string }) => {
    const q = quotes[item.symbol];
    const isUp = (q?.changePercent ?? 0) >= 0;
    const priceStr = q
      ? q.price < 1
        ? q.price.toFixed(4)
        : q.price < 100
          ? q.price.toFixed(2)
          : q.price.toFixed(0)
      : "—";
    return (
      <div
        key={item.symbol}
        className="flex justify-between items-center py-2 border-b border-surface-100 dark:border-surface-700 last:border-0"
      >
        <span className="font-medium text-surface-900 dark:text-surface-100">{item.name}</span>
        <div className="text-right">
          <span className="tabular-nums">{priceStr}</span>
          {q?.changePercent != null && (
            <span
              className={`ml-2 text-sm tabular-nums ${
                isUp ? "text-bull" : "text-bear"
              }`}
            >
              {isUp ? "+" : ""}
              {q.changePercent.toFixed(2)}%
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 border-b border-surface-200 dark:border-surface-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-bold text-surface-900 dark:text-surface-100 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary-500" />
            Market Overview
          </h2>
          <Link
            to="/simulator"
            className="text-sm text-primary-500 hover:text-primary-600 font-medium"
          >
            Trade →
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4">
            <h3 className="text-sm font-semibold text-surface-500 dark:text-surface-400 uppercase mb-2">
              Indices & Stocks
            </h3>
            {INDICES.map(renderRow)}
          </div>
          <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4">
            <h3 className="text-sm font-semibold text-surface-500 dark:text-surface-400 uppercase mb-2">
              Forex
            </h3>
            {FOREX.map(renderRow)}
          </div>
          <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4">
            <h3 className="text-sm font-semibold text-surface-500 dark:text-surface-400 uppercase mb-2">
              Crypto
            </h3>
            {CRYPTO.map(renderRow)}
          </div>
        </div>
      </div>
    </section>
  );
}
