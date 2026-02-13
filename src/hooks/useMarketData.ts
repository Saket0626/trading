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
  { symbol: "SPY", name: "S&P 500 ETF" },
  { symbol: "QQQ", name: "Nasdaq 100 ETF" },
  { symbol: "IWM", name: "Russell 2000 ETF" },
  { symbol: "AAPL", name: "Apple" },
  { symbol: "MSFT", name: "Microsoft" },
  { symbol: "GOOGL", name: "Alphabet" },
  { symbol: "AMZN", name: "Amazon" },
  { symbol: "NVDA", name: "NVIDIA" },
  { symbol: "META", name: "Meta" },
  { symbol: "TSLA", name: "Tesla" },
  { symbol: "BRK.B", name: "Berkshire Hathaway" },
  { symbol: "JPM", name: "JPMorgan Chase" },
  { symbol: "V", name: "Visa" },
  { symbol: "JNJ", name: "Johnson & Johnson" },
  { symbol: "WMT", name: "Walmart" },
  { symbol: "PG", name: "Procter & Gamble" },
  { symbol: "UNH", name: "UnitedHealth" },
  { symbol: "HD", name: "Home Depot" },
  { symbol: "DIS", name: "Disney" },
  { symbol: "BAC", name: "Bank of America" },
  { symbol: "XOM", name: "Exxon Mobil" },
  { symbol: "MA", name: "Mastercard" },
  { symbol: "CVX", name: "Chevron" },
  { symbol: "PFE", name: "Pfizer" },
  { symbol: "KO", name: "Coca-Cola" },
  { symbol: "PEP", name: "PepsiCo" },
  { symbol: "COST", name: "Costco" },
  { symbol: "ABBV", name: "AbbVie" },
  { symbol: "AVGO", name: "Broadcom" },
  { symbol: "ORCL", name: "Oracle" },
  { symbol: "CRM", name: "Salesforce" },
  { symbol: "AMD", name: "AMD" },
  { symbol: "INTC", name: "Intel" },
  { symbol: "NFLX", name: "Netflix" },
  { symbol: "ADBE", name: "Adobe" },
  { symbol: "CSCO", name: "Cisco" },
  { symbol: "TMO", name: "Thermo Fisher" },
  { symbol: "ABT", name: "Abbott" },
  { symbol: "DHR", name: "Danaher" },
  { symbol: "NEE", name: "NextEra Energy" },
  { symbol: "PM", name: "Philip Morris" },
  { symbol: "TXN", name: "Texas Instruments" },
  { symbol: "RTX", name: "RTX" },
  { symbol: "LIN", name: "Linde" },
  { symbol: "UNP", name: "Union Pacific" },
  { symbol: "HON", name: "Honeywell" },
  { symbol: "UPS", name: "UPS" },
  { symbol: "LOW", name: "Lowe's" },
  { symbol: "BMY", name: "Bristol-Myers" },
  { symbol: "SBUX", name: "Starbucks" },
  { symbol: "GS", name: "Goldman Sachs" },
  { symbol: "CAT", name: "Caterpillar" },
  { symbol: "AMGN", name: "Amgen" },
];

export const FOREX_PAIRS = [
  { symbol: "EURUSD", name: "EUR/USD" },
  { symbol: "GBPUSD", name: "GBP/USD" },
  { symbol: "USDJPY", name: "USD/JPY" },
  { symbol: "AUDUSD", name: "AUD/USD" },
  { symbol: "USDCAD", name: "USD/CAD" },
  { symbol: "USDCHF", name: "USD/CHF" },
  { symbol: "NZDUSD", name: "NZD/USD" },
  { symbol: "EURGBP", name: "EUR/GBP" },
  { symbol: "EURJPY", name: "EUR/JPY" },
  { symbol: "GBPJPY", name: "GBP/JPY" },
  { symbol: "AUDJPY", name: "AUD/JPY" },
  { symbol: "EURAUD", name: "EUR/AUD" },
  { symbol: "AUDCAD", name: "AUD/CAD" },
  { symbol: "EURNZD", name: "EUR/NZD" },
  { symbol: "GBPAUD", name: "GBP/AUD" },
  { symbol: "CADJPY", name: "CAD/JPY" },
  { symbol: "CHFJPY", name: "CHF/JPY" },
  { symbol: "EURCAD", name: "EUR/CAD" },
  { symbol: "GBPCAD", name: "GBP/CAD" },
  { symbol: "USDMXN", name: "USD/MXN" },
  { symbol: "USDTRY", name: "USD/TRY" },
  { symbol: "USDZAR", name: "USD/ZAR" },
  { symbol: "USDSGD", name: "USD/SGD" },
  { symbol: "USDHKD", name: "USD/HKD" },
  { symbol: "USDNOK", name: "USD/NOK" },
  { symbol: "USDSEK", name: "USD/SEK" },
  { symbol: "USDPLN", name: "USD/PLN" },
];

export const CRYPTO_SYMBOLS = [
  { symbol: "BTCUSD", name: "Bitcoin" },
  { symbol: "ETHUSD", name: "Ethereum" },
  { symbol: "BNBUSD", name: "BNB" },
  { symbol: "SOLUSD", name: "Solana" },
  { symbol: "XRPUSD", name: "XRP" },
  { symbol: "ADAUSD", name: "Cardano" },
  { symbol: "DOGEUSD", name: "Dogecoin" },
  { symbol: "AVAXUSD", name: "Avalanche" },
  { symbol: "LINKUSD", name: "Chainlink" },
  { symbol: "DOTUSD", name: "Polkadot" },
  { symbol: "MATICUSD", name: "Polygon" },
  { symbol: "UNIUSD", name: "Uniswap" },
  { symbol: "ATOMUSD", name: "Cosmos" },
  { symbol: "LTCUSD", name: "Litecoin" },
  { symbol: "BCHUSD", name: "Bitcoin Cash" },
  { symbol: "NEARUSD", name: "NEAR" },
  { symbol: "APTUSD", name: "Aptos" },
  { symbol: "ARBUSD", name: "Arbitrum" },
  { symbol: "OPUSD", name: "Optimism" },
  { symbol: "INJUSD", name: "Injective" },
  { symbol: "SUIUSD", name: "Sui" },
  { symbol: "SEIUSD", name: "Sei" },
  { symbol: "TIAUSD", name: "Celestia" },
  { symbol: "PEPEUSD", name: "Pepe" },
  { symbol: "SHIBUSD", name: "Shiba Inu" },
  { symbol: "TRXUSD", name: "TRON" },
  { symbol: "FILUSD", name: "Filecoin" },
  { symbol: "HBARUSD", name: "Hedera" },
  { symbol: "VETUSD", name: "VeChain" },
  { symbol: "AAVEUSD", name: "Aave" },
  { symbol: "MKRUSD", name: "Maker" },
  { symbol: "GRTUSD", name: "The Graph" },
  { symbol: "ALGOUSD", name: "Algorand" },
  { symbol: "ICPUSD", name: "Internet Computer" },
  { symbol: "XLMUSD", name: "Stellar" },
  { symbol: "ETCUSD", name: "Ethereum Classic" },
  { symbol: "IMXUSD", name: "Immutable X" },
  { symbol: "RENDERUSD", name: "Render" },
  { symbol: "WLDUSD", name: "Worldcoin" },
  { symbol: "JUPUSD", name: "Jupiter" },
  { symbol: "FETUSD", name: "Fetch.ai" },
  { symbol: "RUNEUSD", name: "THORChain" },
  { symbol: "FTMUSD", name: "Fantom" },
  { symbol: "AXSUSD", name: "Axie Infinity" },
  { symbol: "SANDUSD", name: "The Sandbox" },
  { symbol: "MANAUSD", name: "Decentraland" },
  { symbol: "CRVUSD", name: "Curve" },
  { symbol: "LDOUSD", name: "Lido" },
  { symbol: "STXUSD", name: "Stacks" },
  { symbol: "APEUSD", name: "ApeCoin" },
  { symbol: "BLURUSD", name: "Blur" },
];

export const COMMODITY_SYMBOLS = [
  { symbol: "GOLD", name: "Gold (GLD)" },
  { symbol: "OIL", name: "Oil (USO)" },
  { symbol: "SILVER", name: "Silver (SLV)" },
  { symbol: "NATGAS", name: "Natural Gas (UNG)" },
];

export const FUTURES_SYMBOLS = [
  { symbol: "ES", name: "E-mini S&P 500 (SPY proxy)" },
  { symbol: "NQ", name: "E-mini Nasdaq (QQQ proxy)" },
  { symbol: "GC", name: "Gold (GLD proxy)" },
  { symbol: "CL", name: "Crude Oil (USO proxy)" },
  { symbol: "SI", name: "Silver (SLV proxy)" },
  { symbol: "NG", name: "Natural Gas (UNG proxy)" },
  { symbol: "YM", name: "Dow (DIA proxy)" },
];

function toBinanceSymbol(s: string): string {
  return s.replace("USD", "USDT").replace("BTCUSD", "BTCUSDT").toLowerCase();
}

export function useBinanceWebSocket(symbol: string, enabled: boolean) {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    if (!enabled || !symbol) return;
    const binanceSymbol = toBinanceSymbol(symbol);
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${binanceSymbol}@ticker`);
    ws.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        const price = parseFloat(data.c || data.lastPrice || 0);
        const changePct = parseFloat(data.P || data.priceChangePercent || 0);
        const change = parseFloat(data.p || data.priceChange || 0);
        if (price > 0) {
          setQuote({
            symbol,
            price,
            change,
            changePercent: changePct,
            high: parseFloat(data.h || 0),
            low: parseFloat(data.l || 0),
            volume: parseFloat(data.v || 0),
            timestamp: Date.now(),
            source: "binance-ws",
          });
        }
      } catch {
        // ignore parse errors
      }
    };
    ws.onerror = () => ws.close();
    return () => ws.close();
  }, [symbol, enabled]);

  return quote;
}

export function useMarketQuote(symbol: string, type: MarketType, pollMs = 15000) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const wsQuote = useBinanceWebSocket(symbol, type === "crypto");

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
      if (!q && type !== "crypto") setError("No data");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, [symbol, type]);

  useEffect(() => {
    load();
    if (type !== "crypto") {
      const id = setInterval(load, pollMs);
      return () => clearInterval(id);
    }
    const id = setInterval(load, Math.max(pollMs, 60000)); // crypto: WS for live, REST fallback every 60s
    return () => clearInterval(id);
  }, [load, pollMs, type]);

  const effectiveQuote = type === "crypto" && wsQuote ? wsQuote : quote;
  const hasData = !!effectiveQuote;
  return {
    quote: effectiveQuote,
    loading: !hasData && loading,
    error: !hasData ? error : null,
    refetch: load,
  };
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
        "30m": "30m",
        "1h": "1h",
        "4h": "4h",
        "1d": "1d",
        "1w": "1w",
        "1M": "1M",
      };
      fetchBinanceKlines(symbol, map[interval] || "1h", 100)
        .then((d) => {
          setData(d);
          if (d.length === 0) setError("No data");
        })
        .catch(() => setError("Failed to load"))
        .finally(() => setLoading(false));
    } else if (type === "stocks" || type === "commodities" || type === "futures") {
      const commodityMap: Record<string, string> = { GOLD: "GLD", OIL: "USO", SILVER: "SLV", NATGAS: "UNG" };
      const futuresMap: Record<string, string> = { ES: "SPY", NQ: "QQQ", GC: "GLD", CL: "USO", SI: "SLV", NG: "UNG", YM: "DIA" };
      const sym = type === "commodities" ? (commodityMap[symbol] ?? symbol) : type === "futures" ? (futuresMap[symbol] ?? symbol) : symbol;
      const resMap: Record<string, string> = {
        "1m": "1",
        "5m": "5",
        "15m": "15",
        "30m": "30",
        "1h": "60",
        "4h": "240",
        "1d": "D",
        "1w": "W",
        "1M": "M",
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
    case "futures":
      return FUTURES_SYMBOLS;
    default:
      return [];
  }
}
