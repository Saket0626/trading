/**
 * Market Data Service - Real live data with multiple sources and fallbacks
 * Sources: Binance (crypto), CoinGecko (crypto), Finnhub (stocks), ExchangeRate.host (forex)
 */

export type MarketType = "stocks" | "forex" | "crypto" | "commodities";

export interface Quote {
  symbol: string;
  price: number;
  change?: number;
  changePercent?: number;
  high?: number;
  low?: number;
  volume?: number;
  timestamp: number;
  source: string;
}

export interface OHLCV {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  timestamp: number;
}

const CACHE_TTL_MS = 15000; // 15 seconds
const cache = new Map<string, { data: Quote; expires: number }>();

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry || Date.now() > entry.expires) return null;
  return entry.data as unknown as T;
}

function setCache(key: string, data: Quote, ttl = CACHE_TTL_MS) {
  cache.set(key, { data, expires: Date.now() + ttl });
}

const FINNHUB_KEY = import.meta.env.VITE_FINNHUB_API_KEY || "";

// Binance - Free, no key, real-time crypto
export async function fetchBinancePrice(symbol: string): Promise<Quote | null> {
  try {
    const binanceSymbol = symbol.replace("USD", "USDT").replace("BTCUSD", "BTCUSDT");
    const res = await fetch(
      `https://api.binance.com/api/v3/ticker/24hr?symbol=${binanceSymbol}`
    );
    if (!res.ok) return null;
    const data = await res.json();
    const price = parseFloat(data.lastPrice);
    const change = parseFloat(data.priceChangePercent || 0);
    const quote: Quote = {
      symbol,
      price,
      change: parseFloat(data.priceChange || 0),
      changePercent: change,
      high: parseFloat(data.highPrice),
      low: parseFloat(data.lowPrice),
      volume: parseFloat(data.volume),
      timestamp: Date.now(),
      source: "binance",
    };
    return quote;
  } catch {
    return null;
  }
}

// CoinGecko - Free, no key, crypto
export async function fetchCoinGeckoPrice(symbol: string): Promise<Quote | null> {
  const ids: Record<string, string> = {
    BTC: "bitcoin",
    ETH: "ethereum",
    BTCUSD: "bitcoin",
    ETHUSD: "ethereum",
  };
  const id = ids[symbol] || ids[symbol.replace("USD", "")];
  if (!id) return null;
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_24hr_change=true`
    );
    if (!res.ok) return null;
    const data = await res.json();
    const coin = data[id];
    if (!coin) return null;
    const price = coin.usd || 0;
    const changePercent = coin.usd_24h_change || 0;
    return {
      symbol,
      price,
      changePercent,
      change: (price * changePercent) / 100,
      timestamp: Date.now(),
      source: "coingecko",
    };
  } catch {
    return null;
  }
}

// Finnhub - Stocks (free tier, needs key)
export async function fetchFinnhubQuote(symbol: string): Promise<Quote | null> {
  if (!FINNHUB_KEY) return null;
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_KEY}`
    );
    if (!res.ok) return null;
    const data = await res.json();
    const price = data.c || 0;
    const prevClose = data.pc || price;
    const change = price - prevClose;
    const changePercent = prevClose ? (change / prevClose) * 100 : 0;
    return {
      symbol,
      price,
      change,
      changePercent,
      high: data.h,
      low: data.l,
      volume: data.v,
      timestamp: Date.now(),
      source: "finnhub",
    };
  } catch {
    return null;
  }
}

// Open ER-API - Forex (free, no key, daily updates)
export async function fetchForexRate(pair: string): Promise<Quote | null> {
  try {
    const base = pair.slice(0, 3);
    const quote = pair.slice(3, 6);
    const res = await fetch(`https://open.er-api.com/v6/latest/${base}`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const price = data.rates?.[quote] || 0;
    return {
      symbol: pair,
      price,
      timestamp: Date.now(),
      source: "exchangerate",
    };
  } catch {
    return null;
  }
}

// Aggregated fetcher with fallbacks
export async function fetchQuote(
  symbol: string,
  type: MarketType
): Promise<Quote | null> {
  const cacheKey = `${type}:${symbol}`;
  const cached = getCached<Quote>(cacheKey);
  if (cached) return cached;

  let quote: Quote | null = null;

  if (type === "crypto") {
    quote = await fetchBinancePrice(symbol);
    if (!quote) quote = await fetchCoinGeckoPrice(symbol);
  } else if (type === "stocks") {
    quote = await fetchFinnhubQuote(symbol);
  } else if (type === "forex") {
    quote = await fetchForexRate(symbol);
  } else if (type === "commodities") {
    // Commodities often tracked via ETFs - use Finnhub for GLD, USO etc
    const commoditySymbols: Record<string, string> = {
      GOLD: "GLD",
      OIL: "USO",
    };
    const stockSymbol = commoditySymbols[symbol] || symbol;
    quote = await fetchFinnhubQuote(stockSymbol);
    if (quote) quote.symbol = symbol;
  }

  if (quote) setCache(cacheKey, quote);
  return quote;
}

// Binance klines for candlestick data
export async function fetchBinanceKlines(
  symbol: string,
  interval: string = "1h",
  limit: number = 100
): Promise<OHLCV[]> {
  try {
    const binanceSymbol = symbol.replace("USD", "USDT").replace("BTCUSD", "BTCUSDT");
    const res = await fetch(
      `https://api.binance.com/api/v3/klines?symbol=${binanceSymbol}&interval=${interval}&limit=${limit}`
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.map((k: number[]) => ({
      open: k[1],
      high: k[2],
      low: k[3],
      close: k[4],
      volume: k[5],
      timestamp: k[0],
    }));
  } catch {
    return [];
  }
}

// Finnhub candles for stocks
export async function fetchFinnhubCandles(
  symbol: string,
  resolution: string = "60",
  from: number,
  to: number
): Promise<OHLCV[]> {
  if (!FINNHUB_KEY) return [];
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${FINNHUB_KEY}`
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.t || !data.o) return [];
    return data.t.map((t: number, i: number) => ({
      timestamp: t * 1000,
      open: data.o[i],
      high: data.h[i],
      low: data.l[i],
      close: data.c[i],
      volume: data.v[i] || 0,
    }));
  } catch {
    return [];
  }
}
