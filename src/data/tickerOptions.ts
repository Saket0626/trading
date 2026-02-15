/**
 * Ticker options for the market ticker bar.
 * All options from the Practice/Simulator section.
 */
import type { MarketType } from "../services/marketData";
import {
  STOCK_SYMBOLS,
  FOREX_PAIRS,
  CRYPTO_SYMBOLS,
  COMMODITY_SYMBOLS,
  FUTURES_SYMBOLS,
} from "../hooks/useMarketData";

export interface TickerOption {
  symbol: string;
  name: string;
  type: MarketType;
}

const withType =
  (type: MarketType) =>
  (items: { symbol: string; name: string }[]): TickerOption[] =>
    items.map(({ symbol, name }) => ({ symbol, name, type }));

export const DEFAULT_TICKER: TickerOption[] = [
  { symbol: "SPY", name: "S&P 500", type: "stocks" },
  { symbol: "AAPL", name: "Apple", type: "stocks" },
  { symbol: "BTCUSD", name: "Bitcoin", type: "crypto" },
  { symbol: "ETHUSD", name: "Ethereum", type: "crypto" },
  { symbol: "MSFT", name: "Microsoft", type: "stocks" },
  { symbol: "NVDA", name: "NVIDIA", type: "stocks" },
  { symbol: "GOOGL", name: "Alphabet", type: "stocks" },
  { symbol: "AMZN", name: "Amazon", type: "stocks" },
  { symbol: "EURUSD", name: "EUR/USD", type: "forex" },
  { symbol: "QQQ", name: "Nasdaq 100", type: "stocks" },
];

export const ALL_TICKER_OPTIONS: TickerOption[] = [
  ...withType("stocks")(STOCK_SYMBOLS),
  ...withType("forex")(FOREX_PAIRS),
  ...withType("crypto")(CRYPTO_SYMBOLS),
  ...withType("commodities")(COMMODITY_SYMBOLS),
  ...withType("futures")(FUTURES_SYMBOLS),
];

export const TICKER_STORAGE_KEY = "chartwise-ticker-symbols";
export const MIN_TICKER_ITEMS = 5;
export const MAX_TICKER_ITEMS = 10;
