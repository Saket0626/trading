import { useTickerData } from "../hooks/useTickerData";

const TICKER_ITEMS = [
  { symbol: "SPY", name: "S&P 500" },
  { symbol: "AAPL", name: "Apple" },
  { symbol: "BTCUSD", name: "Bitcoin" },
  { symbol: "ETHUSD", name: "Ethereum" },
  { symbol: "MSFT", name: "Microsoft" },
  { symbol: "NVDA", name: "NVIDIA" },
  { symbol: "GOOGL", name: "Alphabet" },
  { symbol: "AMZN", name: "Amazon" },
  { symbol: "EURUSD", name: "EUR/USD" },
  { symbol: "QQQ", name: "Nasdaq 100" },
];

export function MarketTicker() {
  const { quotes, loading } = useTickerData(30000);

  return (
    <div className="overflow-hidden border-b border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-900 py-2.5">
      <div className="ticker-scroll flex gap-x-8 gap-y-2 whitespace-nowrap animate-marquee">
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
        {/* Duplicate for seamless loop */}
        {TICKER_ITEMS.map((item) => {
          const quote = quotes[item.symbol];
          if (!quote) return null;
          const isUp = (quote.changePercent ?? 0) >= 0;
          const priceStr = quote.price < 1 ? quote.price.toFixed(4) : quote.price < 100 ? quote.price.toFixed(2) : quote.price.toFixed(0);
          return (
            <span key={`${item.symbol}-2`} className="inline-flex items-center gap-2 text-surface-700 dark:text-surface-300 shrink-0">
              <span className="font-semibold">{item.symbol}</span>
              <span>${priceStr}</span>
              <span className={isUp ? "text-bull font-medium" : "text-bear font-medium"}>
                {isUp ? "+" : ""}{(quote.changePercent ?? 0).toFixed(2)}%
              </span>
            </span>
          );
        })}
        {!loading && TICKER_ITEMS.filter((i) => quotes[i.symbol]).map((item) => {
          const quote = quotes[item.symbol]!;
          const isUp = (quote.changePercent ?? 0) >= 0;
          const priceStr = quote.price < 1 ? quote.price.toFixed(4) : quote.price < 100 ? quote.price.toFixed(2) : quote.price.toFixed(0);
          return (
            <span key={`${item.symbol}-2`} className="inline-flex items-center gap-2 text-surface-700 dark:text-surface-300 shrink-0">
              <span className="font-semibold">{item.symbol}</span>
              <span>${priceStr}</span>
              <span className={isUp ? "text-bull font-medium" : "text-bear font-medium"}>
                {isUp ? "+" : ""}{(quote.changePercent ?? 0).toFixed(2)}%
              </span>
            </span>
          );
        })}
      </div>
      <p className="text-[10px] text-surface-500 text-center mt-1.5">
        Live data • Crypto: Binance • Stocks: Finnhub (add VITE_FINNHUB_API_KEY for stocks)
      </p>
    </div>
  );
}
