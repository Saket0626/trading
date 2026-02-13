/**
 * Market Data Service - Real live data with multiple sources and fallbacks
 * Sources: Binance (crypto), CoinGecko (crypto), Finnhub (stocks), Alpha Vantage (stocks/forex),
 * ExchangeRate.host (forex)
 */

export type MarketType = "stocks" | "forex" | "crypto" | "commodities" | "futures";

const ALPHA_VANTAGE_KEY = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY || "";
const RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 500;

async function withRetry<T>(fn: () => Promise<T>): Promise<T | null> {
  for (let i = 0; i < RETRY_ATTEMPTS; i++) {
    try {
      const result = await fn();
      if (result != null) return result;
    } catch {
      if (i < RETRY_ATTEMPTS - 1) await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
    }
  }
  return null;
}

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

// Alpha Vantage - Forex (free tier: 25 req/day)
async function fetchAlphaVantageForex(pair: string): Promise<Quote | null> {
  if (!ALPHA_VANTAGE_KEY) return null;
  try {
    const from = pair.slice(0, 3);
    const to = pair.slice(3, 6);
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${ALPHA_VANTAGE_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const rate = data["Realtime Currency Exchange Rate"];
    if (!rate) return null;
    const price = parseFloat(rate["5. Exchange Rate"] || 0);
    return { symbol: pair, price, timestamp: Date.now(), source: "alphavantage" };
  } catch {
    return null;
  }
}

async function fetchAlphaVantageStock(symbol: string): Promise<Quote | null> {
  if (!ALPHA_VANTAGE_KEY) return null;
  try {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const q = data["Global Quote"];
    if (!q || !q["05. price"]) return null;
    const price = parseFloat(q["05. price"]);
    const prevClose = parseFloat(q["08. previous close"] || price);
    const change = price - prevClose;
    return {
      symbol,
      price,
      change,
      changePercent: prevClose ? (change / prevClose) * 100 : 0,
      high: parseFloat(q["03. high"]),
      low: parseFloat(q["04. low"]),
      volume: parseFloat(q["06. volume"]),
      timestamp: Date.now(),
      source: "alphavantage",
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

// Aggregated fetcher with fallbacks and retry
export async function fetchQuote(
  symbol: string,
  type: MarketType
): Promise<Quote | null> {
  const cacheKey = `${type}:${symbol}`;
  const cached = getCached<Quote>(cacheKey);
  if (cached) return cached;

  let quote: Quote | null = null;

  if (type === "crypto") {
    quote = await withRetry(() => fetchBinancePrice(symbol));
    if (!quote) quote = await withRetry(() => fetchCoinGeckoPrice(symbol));
  } else if (type === "stocks") {
    quote = await withRetry(() => fetchFinnhubQuote(symbol));
    if (!quote && ALPHA_VANTAGE_KEY) quote = await withRetry(() => fetchAlphaVantageStock(symbol));
  } else if (type === "forex") {
    quote = await withRetry(() => fetchForexRate(symbol));
    if (!quote && ALPHA_VANTAGE_KEY) quote = await withRetry(() => fetchAlphaVantageForex(symbol));
  } else if (type === "commodities") {
    const commoditySymbols: Record<string, string> = { GOLD: "GLD", OIL: "USO", SILVER: "SLV", NATGAS: "UNG" };
    const stockSymbol = commoditySymbols[symbol] || symbol;
    quote = await withRetry(() => fetchFinnhubQuote(stockSymbol));
    if (!quote && ALPHA_VANTAGE_KEY) quote = await withRetry(() => fetchAlphaVantageStock(stockSymbol));
    if (quote) quote.symbol = symbol;
  } else if (type === "futures") {
    const futuresMap: Record<string, string> = { ES: "SPY", NQ: "QQQ", GC: "GLD", CL: "USO", SI: "SLV", NG: "UNG", YM: "DIA" };
    const stockSymbol = futuresMap[symbol] || symbol;
    quote = await withRetry(() => fetchFinnhubQuote(stockSymbol));
    if (!quote && ALPHA_VANTAGE_KEY) quote = await withRetry(() => fetchAlphaVantageStock(stockSymbol));
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

// Binance order book (free, no key)
export interface OrderBookLevel {
  price: number;
  quantity: number;
}

export async function fetchBinanceOrderBook(
  symbol: string,
  limit = 20
): Promise<{ bids: OrderBookLevel[]; asks: OrderBookLevel[] }> {
  try {
    const binanceSymbol = symbol.replace("USD", "USDT").replace("BTCUSD", "BTCUSDT");
    const res = await fetch(
      `https://api.binance.com/api/v3/depth?symbol=${binanceSymbol}&limit=${limit}`
    );
    if (!res.ok) return { bids: [], asks: [] };
    const data = await res.json();
    return {
      bids: (data.bids || []).map(([p, q]: [string, string]) => ({
        price: parseFloat(p),
        quantity: parseFloat(q),
      })),
      asks: (data.asks || []).map(([p, q]: [string, string]) => ({
        price: parseFloat(p),
        quantity: parseFloat(q),
      })),
    };
  } catch {
    return { bids: [], asks: [] };
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
