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
        className="flex justify-between items-center py-2 border-b border-[var(--border-subtle)] last:border-0 font-mono"
      >
        <span className="font-medium text-[var(--text-primary)]">{item.name}</span>
        <div className="text-right">
          <span className="tabular-nums text-[var(--text-primary)]">{priceStr}</span>
          {q?.changePercent != null && (
            <span
              className={`ml-2 text-sm tabular-nums ${isUp ? "text-[var(--accent-primary)]" : "text-[var(--accent-danger)]"}`}
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
    <section className="py-10 border-b border-[var(--border-subtle)]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[var(--accent-primary)]" />
            Market Overview
          </h2>
          <Link
            to="/simulator"
            className="text-[15px] text-[var(--accent-primary)] hover:underline font-medium"
          >
            Trade →
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <h3 className="text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.08em] mb-3">
              Indices & Stocks
            </h3>
            {INDICES.map(renderRow)}
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <h3 className="text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.08em] mb-3">
              Forex
            </h3>
            {FOREX.map(renderRow)}
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <h3 className="text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.08em] mb-3">
              Crypto
            </h3>
            {CRYPTO.map(renderRow)}
          </div>
        </div>
      </div>
    </section>
  );
}
