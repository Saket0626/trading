import { useState, useEffect, useCallback } from "react";
import {
  fetchQuote,
  fetchBinanceKlines,
  fetchFinnhubCandles,
  type Quote,
  type OHLCV,
  type MarketType,
} from "../services/marketData";

export const STOCK_SYMBOLS = [
  { symbol: "AAPL", name: "Apple" },
  { symbol: "MSFT", name: "Microsoft" },
  { symbol: "GOOGL", name: "Alphabet" },
  { symbol: "AMZN", name: "Amazon" },
  { symbol: "NVDA", name: "NVIDIA" },
  { symbol: "META", name: "Meta" },
  { symbol: "TSLA", name: "Tesla" },
  { symbol: "SPY", name: "S&P 500 ETF" },
];

export const FOREX_PAIRS = [
  { symbol: "EURUSD", name: "EUR/USD" },
  { symbol: "GBPUSD", name: "GBP/USD" },
  { symbol: "USDJPY", name: "USD/JPY" },
  { symbol: "AUDUSD", name: "AUD/USD" },
  { symbol: "USDCAD", name: "USD/CAD" },
];

export const CRYPTO_SYMBOLS = [
  { symbol: "BTCUSD", name: "Bitcoin" },
  { symbol: "ETHUSD", name: "Ethereum" },
  { symbol: "BNBUSD", name: "BNB" },
  { symbol: "SOLUSD", name: "Solana" },
  { symbol: "XRPUSD", name: "XRP" },
];

export const COMMODITY_SYMBOLS = [
  { symbol: "GOLD", name: "Gold (GLD)" },
  { symbol: "OIL", name: "Oil (USO)" },
];

export function useMarketQuote(symbol: string, type: MarketType, pollMs = 15000) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!symbol) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const q = await fetchQuote(symbol, type);
      setQuote(q);
      if (!q) setError("No data");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, [symbol, type]);

  useEffect(() => {
    load();
    const id = setInterval(load, pollMs);
    return () => clearInterval(id);
  }, [load, pollMs]);

  return { quote, loading, error, refetch: load };
}

export function useCandles(
  symbol: string,
  type: MarketType,
  interval: string = "1h"
): { data: OHLCV[]; loading: boolean; error: string | null } {
  const [data, setData] = useState<OHLCV[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!symbol) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    const to = Math.floor(Date.now() / 1000);
    const from = to - 30 * 24 * 60 * 60; // 30 days

    if (type === "crypto") {
      const map: Record<string, string> = {
        "1m": "1m",
        "5m": "5m",
        "15m": "15m",
        "1h": "1h",
        "4h": "4h",
        "1d": "1d",
      };
      fetchBinanceKlines(symbol, map[interval] || "1h", 100)
        .then((d) => {
          setData(d);
          if (d.length === 0) setError("No data");
        })
        .catch(() => setError("Failed to load"))
        .finally(() => setLoading(false));
    } else if (type === "stocks" || type === "commodities") {
      const sym = type === "commodities" && symbol === "GOLD" ? "GLD" : symbol === "OIL" ? "USO" : symbol;
      const resMap: Record<string, string> = {
        "1m": "1",
        "5m": "5",
        "15m": "15",
        "1h": "60",
        "1d": "D",
      };
      fetchFinnhubCandles(sym, resMap[interval] || "60", from, to)
        .then((d) => {
          setData(d);
          if (d.length === 0) setError("No data (add FINNHUB_API_KEY for stocks)");
        })
        .catch(() => setError("Failed to load"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setError("Forex candles not supported yet");
    }
  }, [symbol, type, interval]);

  return { data, loading, error };
}

export function getSymbols(type: MarketType) {
  switch (type) {
    case "stocks":
      return STOCK_SYMBOLS;
    case "forex":
      return FOREX_PAIRS;
    case "crypto":
      return CRYPTO_SYMBOLS;
    case "commodities":
      return COMMODITY_SYMBOLS;
    default:
      return [];
  }
}
