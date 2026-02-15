import { useState, useEffect, useCallback } from "react";
import { fetchQuote } from "../services/marketData";
import type { Quote } from "../services/marketData";
import type { TickerOption } from "../data/tickerOptions";
import { DEFAULT_TICKER } from "../data/tickerOptions";

const DEFAULT_SYMBOLS: TickerOption[] = DEFAULT_TICKER;

export function useTickerData(
  pollMs = 30000,
  symbols: TickerOption[] = DEFAULT_SYMBOLS
) {
  const [quotes, setQuotes] = useState<Record<string, Quote>>({});
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const results = await Promise.all(
      symbols.map(async ({ symbol, type }) => {
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
  }, [symbols]);

  useEffect(() => {
    load();
    const id = setInterval(load, pollMs);
    return () => clearInterval(id);
  }, [load, pollMs]);

  return { quotes, loading };
}
