import { useTickerData } from "../hooks/useTickerData";

const TICKER_ITEMS = [
  { symbol: "SPY", name: "S&P 500" },
  { symbol: "AAPL", name: "Apple" },
  { symbol: "BTCUSD", name: "Bitcoin" },
  { symbol: "ETHUSD", name: "Ethereum" },
  { symbol: "MSFT", name: "Microsoft" },
  { symbol: "NVDA", name: "NVIDIA" },
];

export function MarketTicker() {
  const { quotes, loading } = useTickerData(30000);

  return (
    <div className="overflow-hidden border-y border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-900/50 py-3">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {TICKER_ITEMS.map((item) => {
          const quote = quotes[item.symbol];
          if (!quote && !loading) {
            return (
              <span key={item.symbol} className="inline-flex items-center gap-2 text-surface-500">
                <span className="font-semibold">{item.symbol}</span>—
              </span>
            );
          }
          if (!quote) {
            return (
              <span key={item.symbol} className="inline-flex items-center gap-2 animate-pulse">
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
              key={item.symbol}
              className="inline-flex items-center gap-2 text-surface-700 dark:text-surface-300"
            >
              <span className="font-semibold">{item.symbol}</span>
              <span>${priceStr}</span>
              <span className={isUp ? "text-bull font-medium" : "text-bear font-medium"}>
                {isUp ? "+" : ""}
                {(quote.changePercent ?? 0).toFixed(2)}%
              </span>
            </span>
          );
        })}
      </div>
      <p className="text-xs text-surface-500 text-center mt-2">
        Live data • Crypto: Binance • Stocks: Finnhub (add VITE_FINNHUB_API_KEY for stocks)
      </p>
    </div>
  );
}
