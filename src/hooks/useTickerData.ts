import { useState, useEffect, useCallback } from "react";
import { fetchQuote } from "../services/marketData";
import type { Quote } from "../services/marketData";

const TICKER_SYMBOLS = [
  { symbol: "BTCUSD", type: "crypto" as const },
  { symbol: "ETHUSD", type: "crypto" as const },
  { symbol: "SPY", type: "stocks" as const },
  { symbol: "AAPL", type: "stocks" as const },
  { symbol: "MSFT", type: "stocks" as const },
  { symbol: "NVDA", type: "stocks" as const },
];

export function useTickerData(pollMs = 30000) {
  const [quotes, setQuotes] = useState<Record<string, Quote>>({});
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const results = await Promise.all(
      TICKER_SYMBOLS.map(async ({ symbol, type }) => {
        const q = await fetchQuote(symbol, type);
        return { symbol, quote: q };
      })
    );
    const map: Record<string, Quote> = {};
    results.forEach(({ symbol, quote }) => {
      if (quote) map[symbol] = quote;
    });
    setQuotes(map);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, pollMs);
    return () => clearInterval(id);
  }, [load, pollMs]);

  return { quotes, loading };
}
