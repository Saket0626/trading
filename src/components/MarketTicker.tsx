import { useTickerData } from "../hooks/useTickerData";
import { useTicker } from "../contexts/TickerContext";

export function MarketTicker() {
  const { tickerItems } = useTicker();
  const { quotes, loading } = useTickerData(30000, tickerItems);

  // Repeat items to keep ticker full even with 5 items (marquee uses -50% translate)
  const repeatCount = Math.max(2, Math.ceil(10 / tickerItems.length));
  const displayItems = Array.from({ length: repeatCount }, () => tickerItems).flat();

  return (
    <div className="overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-2.5">
      <div className="ticker-scroll flex gap-x-8 gap-y-2 whitespace-nowrap animate-marquee font-mono text-[14px]">
        {displayItems.map((item, idx) => {
          const quote = quotes[item.symbol];
          if (!quote && !loading) {
            return (
              <span key={`${item.symbol}-${idx}`} className="inline-flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="font-semibold">{item.symbol}</span>—
              </span>
            );
          }
          if (!quote) {
            return (
              <span key={`${item.symbol}-${idx}`} className="inline-flex items-center gap-2 animate-pulse">
                <span className="font-semibold">{item.symbol}</span>
                <span className="skeleton h-4 w-16 rounded" />
              </span>
            );
          }
          const isUp = (quote.changePercent ?? 0) >= 0;
          const priceStr =
            quote.price < 1
              ? quote.price.toFixed(4)
              : quote.price < 100
                ? quote.price.toFixed(2)
                : quote.price.toFixed(0);
          return (
            <span
              key={`${item.symbol}-${idx}`}
              className="inline-flex items-center gap-2 text-[var(--text-primary)] shrink-0"
            >
              <span className="font-semibold">{item.symbol}</span>
              <span>${priceStr}</span>
              <span className={isUp ? "text-[var(--accent-primary)] font-medium" : "text-[var(--accent-danger)] font-medium"}>
                {isUp ? "+" : ""}
                {(quote.changePercent ?? 0).toFixed(2)}%
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
