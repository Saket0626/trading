import { useState, useEffect, useRef } from "react";
import { BarChart3, Wallet, History, FileText, Download } from "lucide-react";
import { SimulatorProvider, useSimulator } from "../contexts/SimulatorContext";
import { useMarketQuote, useCandles, getSymbols } from "../hooks/useMarketData";
import { LiveChart } from "../components/charts/LiveChart";
import { PerformanceMetrics } from "../components/simulator/PerformanceMetrics";
import { useTheme } from "../contexts/ThemeContext";
import { getPdtRemaining } from "../lib/pdt";

function SimulatorContent() {
  const { accounts, activeAccount, setActiveAccount, openPosition, closePosition, placeOrder, placeOCOOrder, cancelPendingOrder, processPriceUpdate, setForexLeverage } =
    useSimulator();
  const { resolvedTheme } = useTheme();
  const acc = accounts[activeAccount];
  const symbols = getSymbols(activeAccount);
  const [selectedSymbol, setSelectedSymbol] = useState(symbols[0]?.symbol || "BTCUSD");
  const [secondSymbol, setSecondSymbol] = useState(symbols[1]?.symbol || symbols[0]?.symbol || "BTCUSD");
  const [chartLayout, setChartLayout] = useState<"single" | "dual">("single");
  const [quantity, setQuantity] = useState("");
  const [timeframe, setTimeframe] = useState<"1m" | "5m" | "15m" | "30m" | "1h" | "4h" | "1d" | "1w" | "1M">("1h");
  const [chartType, setChartType] = useState<"candlestick" | "line" | "bar" | "heikinashi">("candlestick");
  const [chartIndicators, setChartIndicators] = useState<{
    sma?: number[];
    ema?: number[];
    bollinger?: { period?: number; std?: number };
    rsi?: number;
    macd?: { fast?: number; slow?: number; signal?: number };
    vwap?: boolean;
    atr?: number;
    stochastic?: { k?: number; d?: number };
  }>({});
  const [priceLines, setPriceLines] = useState<{ price: number; color?: string; label?: string }[]>([]);
  const [newPriceLine, setNewPriceLine] = useState("");
  const [fibHigh, setFibHigh] = useState("");
  const [fibLow, setFibLow] = useState("");
  const [orderType, setOrderType] = useState<"market" | "limit" | "stop" | "stop_limit" | "oco">("market");
  const [limitPrice, setLimitPrice] = useState("");
  const [stopPrice, setStopPrice] = useState("");
  const [trailingStopPct, setTrailingStopPct] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [oco1Type, setOco1Type] = useState<"limit" | "stop">("limit");
  const [oco1Price, setOco1Price] = useState("");
  const [oco2Type, setOco2Type] = useState<"limit" | "stop">("stop");
  const [oco2Price, setOco2Price] = useState("");

  const CHART_DRAWINGS_KEY = "trading-edu-chart-drawings";

  useEffect(() => {
    try {
      const key = `${CHART_DRAWINGS_KEY}-${activeAccount}-${selectedSymbol}-${timeframe}`;
      const stored = localStorage.getItem(key);
      if (stored) {
        const parsed = JSON.parse(stored) as { price: number; color?: string; label?: string }[];
        setPriceLines(Array.isArray(parsed) ? parsed : []);
      } else {
        setPriceLines([]);
      }
    } catch {
      setPriceLines([]);
    }
  }, [activeAccount, selectedSymbol, timeframe]);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    try {
      const key = `${CHART_DRAWINGS_KEY}-${activeAccount}-${selectedSymbol}-${timeframe}`;
      localStorage.setItem(key, JSON.stringify(priceLines));
    } catch {
      // ignore
    }
  }, [priceLines, activeAccount, selectedSymbol, timeframe]);

  const { quote, loading, error } = useMarketQuote(selectedSymbol, activeAccount, 10000);

  useEffect(() => {
    if (quote?.price) {
      const spread = quote.price * 0.0001;
      processPriceUpdate(selectedSymbol, quote.price - spread / 2, quote.price + spread / 2);
    }
  }, [quote?.price, selectedSymbol, processPriceUpdate]);
  const { data: candles, loading: candlesLoading } = useCandles(
    selectedSymbol,
    activeAccount,
    timeframe
  );
  const { data: candles2, loading: candlesLoading2 } = useCandles(
    chartLayout === "dual" ? secondSymbol : selectedSymbol,
    activeAccount,
    timeframe
  );

  const price = quote?.price ?? 0;
  const name = symbols.find((s) => s.symbol === selectedSymbol)?.name ?? selectedSymbol;
  const pdtRemaining = activeAccount === "stocks" ? getPdtRemaining(acc.equity, acc.dayTradeDates || []) : null;

  const handleBuy = () => {
    if (!selectedSymbol || !price || !quantity) return;
    const qty = parseFloat(quantity);
    if (qty <= 0) return;
    if (orderType === "market") {
      const trail = trailingStopPct ? parseFloat(trailingStopPct) : undefined;
      const tp = takeProfit ? parseFloat(takeProfit) : undefined;
      const sl = stopLoss ? parseFloat(stopLoss) : undefined;
      openPosition(selectedSymbol, "long", qty, price, 0.001, trail && trail > 0 ? trail : undefined, tp && tp > price ? tp : undefined, sl && sl < price ? sl : undefined);
    } else if (orderType === "oco") {
      const p1 = parseFloat(oco1Price);
      const p2 = parseFloat(oco2Price);
      if (!p1 || !p2 || p1 === p2) return;
      placeOCOOrder(selectedSymbol, "long", qty,
        { orderType: oco1Type, limitPrice: oco1Type === "limit" ? p1 : undefined, stopPrice: oco1Type === "stop" ? p1 : undefined },
        { orderType: oco2Type, limitPrice: oco2Type === "limit" ? p2 : undefined, stopPrice: oco2Type === "stop" ? p2 : undefined }
      );
    } else {
      const lim = orderType === "limit" || orderType === "stop_limit" ? parseFloat(limitPrice) : undefined;
      const stp = orderType === "stop" || orderType === "stop_limit" ? parseFloat(stopPrice) : undefined;
      if ((orderType === "limit" && !lim) || ((orderType === "stop" || orderType === "stop_limit") && !stp)) return;
      placeOrder(selectedSymbol, "long", qty, orderType, price, lim, stp);
    }
    setQuantity("");
    setLimitPrice("");
    setStopPrice("");
    setTrailingStopPct("");
    setTakeProfit("");
    setStopLoss("");
    setOco1Price("");
    setOco2Price("");
  };

  const handleSell = () => {
    if (!selectedSymbol || !price || !quantity) return;
    const qty = parseFloat(quantity);
    if (qty <= 0) return;
    if (orderType === "market") {
      const trail = trailingStopPct ? parseFloat(trailingStopPct) : undefined;
      const tp = takeProfit ? parseFloat(takeProfit) : undefined;
      const sl = stopLoss ? parseFloat(stopLoss) : undefined;
      openPosition(selectedSymbol, "short", qty, price, 0.001, trail && trail > 0 ? trail : undefined, tp && tp < price ? tp : undefined, sl && sl > price ? sl : undefined);
    } else if (orderType === "oco") {
      const p1 = parseFloat(oco1Price);
      const p2 = parseFloat(oco2Price);
      if (!p1 || !p2 || p1 === p2) return;
      placeOCOOrder(selectedSymbol, "short", qty,
        { orderType: oco1Type, limitPrice: oco1Type === "limit" ? p1 : undefined, stopPrice: oco1Type === "stop" ? p1 : undefined },
        { orderType: oco2Type, limitPrice: oco2Type === "limit" ? p2 : undefined, stopPrice: oco2Type === "stop" ? p2 : undefined }
      );
    } else {
      const lim = orderType === "limit" || orderType === "stop_limit" ? parseFloat(limitPrice) : undefined;
      const stp = orderType === "stop" || orderType === "stop_limit" ? parseFloat(stopPrice) : undefined;
      if ((orderType === "limit" && !lim) || ((orderType === "stop" || orderType === "stop_limit") && !stp)) return;
      placeOrder(selectedSymbol, "short", qty, orderType, price, lim, stp);
    }
    setQuantity("");
    setLimitPrice("");
    setStopPrice("");
    setTrailingStopPct("");
    setTakeProfit("");
    setStopLoss("");
    setOco1Price("");
    setOco2Price("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
        Paper Trading Simulator
      </h1>
      <p className="text-surface-600 dark:text-surface-400 mb-8">
        Real live market data. Stocks $25k, Forex $1k, Crypto $5k, Commodities $10k, Futures $10k. Add
        VITE_FINNHUB_API_KEY for stocks.
      </p>

      {activeAccount === "forex" && (
        <div className="mb-6 p-4 rounded-lg bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
          <label className="block text-sm font-medium mb-2">Forex Leverage: 1:{acc.leverage ?? 1}</label>
          <div className="flex gap-2 items-center">
            <input
              type="range"
              min="1"
              max="50"
              value={acc.leverage ?? 1}
              onChange={(e) => setForexLeverage(Number(e.target.value))}
              className="flex-1 max-w-xs"
            />
            <span className="text-sm text-surface-600 dark:text-surface-400">
              Buying power: ${(acc.balance * (acc.leverage ?? 1)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
          <p className="text-xs text-surface-500 mt-1">Higher leverage = more risk. 1:50 is common for forex.</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {(["stocks", "forex", "crypto", "commodities", "futures"] as const).map((type) => (
          <button
            key={type}
            onClick={() => {
              setActiveAccount(type);
              const syms = getSymbols(type);
              setSelectedSymbol(syms[0]?.symbol || "BTCUSD");
              setSecondSymbol(syms[1]?.symbol || syms[0]?.symbol || "BTCUSD");
            }}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
              activeAccount === type
                ? "bg-primary-500 text-white"
                : "bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Account Summary
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-surface-500 dark:text-surface-400">Balance</p>
                <p className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                  ${acc.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </p>
                {activeAccount === "stocks" && acc.equity < 25000 && (
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                    PDT: {pdtRemaining !== null ? `${pdtRemaining} day trades left (5-day)` : "25k+ exempt"}
                  </p>
                )}
              </div>
              <div>
                <p className="text-sm text-surface-500 dark:text-surface-400">Equity</p>
                <p
                  className={`text-2xl font-bold ${
                    acc.equity >= acc.startingBalance
                      ? "text-bull dark:text-bull"
                      : "text-bear dark:text-bear"
                  }`}
                >
                  ${acc.equity.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className="text-sm text-surface-500 dark:text-surface-400">P&L</p>
                <p
                  className={`text-xl font-semibold ${
                    acc.equity >= acc.startingBalance
                      ? "text-bull dark:text-bull"
                      : "text-bear dark:text-bear"
                  }`}
                >
                  {acc.equity >= acc.startingBalance ? "+" : ""}$
                  {(acc.equity - acc.startingBalance).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}{" "}
                  ({((acc.equity / acc.startingBalance - 1) * 100).toFixed(1)}%)
                </p>
              </div>
            </div>
          </div>

          {candles.length > 0 && (
            <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold">{selectedSymbol} Chart</h2>
                  <button
                    onClick={() => setChartLayout(chartLayout === "single" ? "dual" : "single")}
                    className={`px-2 py-1 text-xs rounded font-medium ${
                      chartLayout === "dual" ? "bg-primary-500 text-white" : "bg-surface-200 dark:bg-surface-700"
                    }`}
                    title="Toggle single / dual chart layout"
                  >
                    {chartLayout === "single" ? "2 Charts" : "1 Chart"}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex gap-1">
                    {(["1m", "5m", "15m", "30m", "1h", "4h", "1d", "1w", "1M"] as const).map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setTimeframe(tf)}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          timeframe === tf ? "bg-primary-500 text-white" : "bg-surface-200 dark:bg-surface-700"
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {(["candlestick", "line", "bar", "heikinashi"] as const).map((ct) => (
                      <button
                        key={ct}
                        onClick={() => setChartType(ct)}
                        className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                          chartType === ct ? "bg-primary-500 text-white" : "bg-surface-200 dark:bg-surface-700"
                        }`}
                      >
                        {ct}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1 items-center">
                    <span className="text-xs text-surface-500">Indicators:</span>
                    {[
                      { key: "sma20", label: "SMA 20", active: chartIndicators.sma?.includes(20), set: () => setChartIndicators((p) => ({ ...p, sma: p.sma?.includes(20) ? (p.sma.length === 1 ? undefined : p.sma.filter((x) => x !== 20)) : [...(p.sma || []), 20] })) },
                      { key: "ema12", label: "EMA 12", active: chartIndicators.ema?.includes(12), set: () => setChartIndicators((p) => ({ ...p, ema: p.ema?.includes(12) ? (p.ema.length === 1 ? undefined : p.ema.filter((x) => x !== 12)) : [...(p.ema || []), 12] })) },
                      { key: "bollinger", label: "BB", active: !!chartIndicators.bollinger, set: () => setChartIndicators((p) => ({ ...p, bollinger: p.bollinger ? undefined : { period: 20, std: 2 } })) },
                      { key: "rsi", label: "RSI", active: !!chartIndicators.rsi, set: () => setChartIndicators((p) => ({ ...p, rsi: p.rsi ? undefined : 14 })) },
                      { key: "macd", label: "MACD", active: !!chartIndicators.macd, set: () => setChartIndicators((p) => ({ ...p, macd: p.macd ? undefined : {} })) },
                      { key: "vwap", label: "VWAP", active: !!chartIndicators.vwap, set: () => setChartIndicators((p) => ({ ...p, vwap: !p.vwap })) },
                      { key: "atr", label: "ATR", active: !!chartIndicators.atr, set: () => setChartIndicators((p) => ({ ...p, atr: p.atr ? undefined : 14 })) },
                      { key: "stoch", label: "Stoch", active: !!chartIndicators.stochastic, set: () => setChartIndicators((p) => ({ ...p, stochastic: p.stochastic ? undefined : {} })) },
                      { key: "clear", label: "Clear", active: false, set: () => { setChartIndicators({}); setPriceLines([]); } },
                    ].map(({ key, label, active, set }) => (
                      <button
                        key={key}
                        onClick={set}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          active ? "bg-primary-500 text-white" : "bg-surface-200 dark:bg-surface-700"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 items-center mt-2">
                    <span className="text-xs text-surface-500">Add level:</span>
                    <input
                      type="number"
                      value={newPriceLine}
                      onChange={(e) => setNewPriceLine(e.target.value)}
                      placeholder="Price"
                      className="w-24 px-2 py-1 text-sm rounded border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                    />
                    <button
                      onClick={() => {
                        const p = parseFloat(newPriceLine);
                        if (!isNaN(p) && p > 0) {
                          setPriceLines((prev) => [...prev, { price: p }]);
                          setNewPriceLine("");
                        }
                      }}
                      className="px-2 py-1 text-xs rounded bg-surface-200 dark:bg-surface-700 hover:bg-surface-300"
                    >
                      Add
                    </button>
                    <span className="text-xs text-surface-400">|</span>
                    <span className="text-xs text-surface-500">Fibonacci:</span>
                    <input
                      type="number"
                      value={fibHigh}
                      onChange={(e) => setFibHigh(e.target.value)}
                      placeholder="High"
                      className="w-20 px-2 py-1 text-sm rounded border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                    />
                    <input
                      type="number"
                      value={fibLow}
                      onChange={(e) => setFibLow(e.target.value)}
                      placeholder="Low"
                      className="w-20 px-2 py-1 text-sm rounded border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                    />
                    <button
                      onClick={() => {
                        const h = parseFloat(fibHigh);
                        const l = parseFloat(fibLow);
                        if (!isNaN(h) && !isNaN(l) && h !== l) {
                          const [lo, hi] = l < h ? [l, h] : [h, l];
                          const diff = hi - lo;
                          const fibLevels = [
                            { pct: 0, label: "0%" },
                            { pct: 0.236, label: "23.6%" },
                            { pct: 0.382, label: "38.2%" },
                            { pct: 0.5, label: "50%" },
                            { pct: 0.618, label: "61.8%" },
                            { pct: 0.786, label: "78.6%" },
                            { pct: 1, label: "100%" },
                          ];
                          const lines = fibLevels.map(({ pct, label }) => ({
                            price: hi - diff * pct,
                            color: "#a855f7",
                            label,
                          }));
                          setPriceLines((prev) => [...prev, ...lines]);
                          setFibHigh("");
                          setFibLow("");
                        }
                      }}
                      className="px-2 py-1 text-xs rounded bg-primary-500/20 text-primary-600 dark:text-primary-400 hover:bg-primary-500/30"
                    >
                      Add Fib
                    </button>
                    {priceLines.length > 0 && (
                      <span className="text-xs text-surface-500">{priceLines.length} level(s)</span>
                    )}
                  </div>
                </div>
              </div>
              <div className={chartLayout === "dual" ? "grid grid-cols-1 lg:grid-cols-2 gap-4" : ""}>
                <div className={chartLayout === "dual" ? "space-y-2" : ""}>
                  {chartLayout === "dual" && (
                    <label className="block text-xs text-surface-500">Chart 1: {selectedSymbol}</label>
                  )}
                  <LiveChart
                    data={candles}
                    height={chartLayout === "dual" ? 280 : 350}
                    theme={resolvedTheme}
                    loading={candlesLoading}
                    chartType={chartType}
                    showVolume={activeAccount !== "forex"}
                    indicators={Object.keys(chartIndicators).length ? chartIndicators : undefined}
                    priceLines={priceLines.length ? priceLines : undefined}
                  />
                </div>
                {chartLayout === "dual" && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label className="block text-xs text-surface-500">Chart 2:</label>
                      <select
                        value={secondSymbol}
                        onChange={(e) => setSecondSymbol(e.target.value)}
                        className="text-xs px-2 py-1 rounded border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                      >
                        {symbols.map((s) => (
                          <option key={s.symbol} value={s.symbol}>{s.symbol} - {s.name}</option>
                        ))}
                      </select>
                    </div>
                    <LiveChart
                      data={candles2}
                      height={280}
                      theme={resolvedTheme}
                      loading={candlesLoading2}
                      chartType={chartType}
                      showVolume={activeAccount !== "forex"}
                      indicators={Object.keys(chartIndicators).length ? chartIndicators : undefined}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Trade
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Symbol</label>
                <select
                  value={selectedSymbol}
                  onChange={(e) => setSelectedSymbol(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                >
                  {symbols.map((s) => (
                    <option key={s.symbol} value={s.symbol}>
                      {s.symbol} - {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Price:{" "}
                  {loading ? (
                    <span className="animate-pulse">Loading...</span>
                  ) : error ? (
                    <span className="text-red-500">{error}</span>
                  ) : price ? (
                    `$${price < 1 ? price.toFixed(4) : price.toLocaleString()}`
                  ) : (
                    "—"
                  )}
                </label>
              </div>
              {orderType === "market" && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Trailing Stop % (optional)</label>
                    <input
                      type="number"
                      value={trailingStopPct}
                      onChange={(e) => setTrailingStopPct(e.target.value)}
                      placeholder="e.g. 2"
                      min="0.1"
                      max="50"
                      step="0.5"
                      className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                    />
                    <p className="text-xs text-surface-500 mt-1">Closes when price retraces this % from best</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Take Profit (bracket)</label>
                      <input
                        type="number"
                        value={takeProfit}
                        onChange={(e) => setTakeProfit(e.target.value)}
                        placeholder="Long: above price"
                        step="0.01"
                        className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Stop Loss (bracket)</label>
                      <input
                        type="number"
                        value={stopLoss}
                        onChange={(e) => setStopLoss(e.target.value)}
                        placeholder="Long: below price"
                        step="0.01"
                        className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-surface-500">Bracket: auto-close at TP (profit) or SL (limit loss).</p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1">Order Type</label>
                <select
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value as "market" | "limit" | "stop" | "stop_limit" | "oco")}
                  className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                >
                  <option value="market">Market</option>
                  <option value="limit">Limit</option>
                  <option value="stop">Stop</option>
                  <option value="stop_limit">Stop-Limit</option>
                  <option value="oco">OCO (One-Cancels-Other)</option>
                </select>
              </div>
              {orderType === "oco" && (
                <div className="space-y-3 p-4 rounded-lg bg-surface-100 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700">
                  <p className="text-xs text-surface-500">Place two orders: when one fills, the other cancels. E.g. Take Profit (limit) + Stop Loss (stop).</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Order 1</label>
                      <select value={oco1Type} onChange={(e) => setOco1Type(e.target.value as "limit" | "stop")} className="w-full mb-2 px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-sm">
                        <option value="limit">Limit</option>
                        <option value="stop">Stop</option>
                      </select>
                      <input type="number" value={oco1Price} onChange={(e) => setOco1Price(e.target.value)} placeholder={oco1Type === "limit" ? "Long: below price" : "Long: above price"} step="0.01" className="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Order 2</label>
                      <select value={oco2Type} onChange={(e) => setOco2Type(e.target.value as "limit" | "stop")} className="w-full mb-2 px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-sm">
                        <option value="limit">Limit</option>
                        <option value="stop">Stop</option>
                      </select>
                      <input type="number" value={oco2Price} onChange={(e) => setOco2Price(e.target.value)} placeholder={oco2Type === "limit" ? "Long: below price" : "Long: above price"} step="0.01" className="w-full px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-sm" />
                    </div>
                  </div>
                </div>
              )}
              {(orderType === "limit" || orderType === "stop_limit") && (
                <div>
                  <label className="block text-sm font-medium mb-1">Limit Price</label>
                  <input
                    type="number"
                    value={limitPrice}
                    onChange={(e) => setLimitPrice(e.target.value)}
                    placeholder={price ? price.toFixed(2) : "0"}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                  />
                </div>
              )}
              {(orderType === "stop" || orderType === "stop_limit") && (
                <div>
                  <label className="block text-sm font-medium mb-1">Stop Price</label>
                  <input
                    type="number"
                    value={stopPrice}
                    onChange={(e) => setStopPrice(e.target.value)}
                    placeholder={price ? price.toFixed(2) : "0"}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="0"
                  min="0"
                  step="0.0001"
                  className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleBuy}
                  disabled={
                    loading ||
                    !price ||
                    !quantity ||
                    (orderType !== "market" &&
                      ((orderType === "limit" && !limitPrice) ||
                        (orderType === "stop" && !stopPrice) ||
                        (orderType === "stop_limit" && (!limitPrice || !stopPrice))))
                  }
                  className="hover-lift flex-1 py-2 rounded-lg bg-bull text-white font-semibold hover:opacity-90 disabled:opacity-50"
                >
                  Buy
                </button>
                <button
                  onClick={handleSell}
                  disabled={
                    loading ||
                    !price ||
                    !quantity ||
                    (orderType !== "market" &&
                      ((orderType === "limit" && !limitPrice) ||
                        (orderType === "stop" && !stopPrice) ||
                        (orderType === "stop_limit" && (!limitPrice || !stopPrice))))
                  }
                  className="hover-lift flex-1 py-2 rounded-lg bg-bear text-white font-semibold hover:opacity-90 disabled:opacity-50"
                >
                  Sell Short
                </button>
              </div>
            </div>
          </div>

          {(acc.pendingOrders?.length ?? 0) > 0 && (
            <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
              <h2 className="font-semibold text-lg mb-4">Pending Orders</h2>
              <div className="space-y-2">
                {acc.pendingOrders?.map((ord) => (
                    <div
                      key={ord.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-surface-50 dark:bg-surface-900"
                    >
                      <div>
                        <p className="font-medium">
                          {ord.symbol} {ord.side === "long" ? "Buy" : "Sell"} {ord.quantity}{" "}
                          {ord.orderType}
                          {ord.limitPrice != null && ` @ ${ord.limitPrice.toFixed(2)}`}
                          {ord.stopPrice != null && ` stop ${ord.stopPrice.toFixed(2)}`}
                        </p>
                        <p className="text-xs text-surface-500">
                          {new Date(ord.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => cancelPendingOrder(ord.id)}
                        className="text-sm text-red-500 hover:underline"
                      >
                        Cancel
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {acc.positions.length > 0 && (
            <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
              <h2 className="font-semibold text-lg mb-4">Open Positions</h2>
              <div className="space-y-2">
                {acc.positions.map((pos) => {
                  const currentPrice = pos.symbol === selectedSymbol ? price : pos.currentPrice;
                  const pnl = (currentPrice || pos.currentPrice) - pos.entryPrice;
                  const pnlVal =
                    pos.type === "long" ? pnl * pos.quantity : -pnl * pos.quantity;
                  return (
                    <div
                      key={pos.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-surface-50 dark:bg-surface-900"
                    >
                      <div>
                        <p className="font-medium">
                          {pos.symbol} {pos.type === "long" ? "Long" : "Short"}{" "}
                          {pos.quantity}
                        </p>
                        <p className="text-sm text-surface-500">
                          Entry: ${pos.entryPrice.toFixed(4)}
                          {pos.trailingStopPct != null && (
                            <span className="ml-2 text-amber-600 dark:text-amber-400">
                              Trailing {pos.trailingStopPct}%
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className={
                            pnlVal >= 0
                              ? "text-bull font-medium"
                              : "text-bear font-medium"
                          }
                        >
                          {pnlVal >= 0 ? "+" : ""}${pnlVal.toFixed(2)}
                        </p>
                        <button
                          onClick={() =>
                            closePosition(pos.id, price || pos.currentPrice, () =>
                              alert("PDT rule: Max 3 day trades per 5 business days when under $25k.")
                            )
                          }
                          className="text-sm text-primary-500 hover:underline"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <PerformanceMetrics
            tradeHistory={acc.tradeHistory}
            startingBalance={acc.startingBalance}
            currentEquity={acc.equity}
          />

          {acc.tradeHistory.length > 0 && (
            <>
              <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
                <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <History className="h-5 w-5" />
                  Trade History
                </h2>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {acc.tradeHistory.slice(0, 10).map((t) => (
                    <div
                      key={t.id}
                      className="flex justify-between py-2 border-b border-surface-100 dark:border-surface-700 last:border-0"
                    >
                      <span className="text-sm">
                        {t.symbol} {t.type} {t.quantity} @ $
                        {t.exitPrice < 1 ? t.exitPrice.toFixed(4) : t.exitPrice.toFixed(2)}
                      </span>
                      <span className={t.pnl >= 0 ? "text-bull" : "text-bear"}>
                        {t.pnl >= 0 ? "+" : ""}${t.pnl.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
                <h2 className="font-semibold text-lg mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Trade Journal
                  </span>
                  <button
                    onClick={() => {
                      const csv = ["Date,Symbol,Side,Entry,Exit,Qty,PnL,PnL%"];
                      acc.tradeHistory.forEach((t) => {
                        csv.push(
                          `${new Date(t.timestamp).toISOString().slice(0, 10)},${t.symbol},${t.type},${t.entryPrice},${t.exitPrice},${t.quantity},${t.pnl.toFixed(2)},${t.pnlPercent.toFixed(2)}`
                        );
                      });
                      const blob = new Blob([csv.join("\n")], { type: "text/csv" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `trade-journal-${activeAccount}-${new Date().toISOString().slice(0, 10)}.csv`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <Download className="h-4 w-4" />
                    Export CSV
                  </button>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-surface-200 dark:border-surface-700">
                        <th className="text-left py-2 font-medium">Date</th>
                        <th className="text-left py-2 font-medium">Symbol</th>
                        <th className="text-left py-2 font-medium">Side</th>
                        <th className="text-right py-2 font-medium">Entry</th>
                        <th className="text-right py-2 font-medium">Exit</th>
                        <th className="text-right py-2 font-medium">P&L</th>
                      </tr>
                    </thead>
                    <tbody>
                      {acc.tradeHistory.slice(0, 20).map((t) => (
                        <tr key={t.id} className="border-b border-surface-100 dark:border-surface-800">
                          <td className="py-2">{new Date(t.timestamp).toLocaleString()}</td>
                          <td className="py-2">{t.symbol}</td>
                          <td className="py-2">{t.type}</td>
                          <td className="py-2 text-right">${t.entryPrice.toFixed(2)}</td>
                          <td className="py-2 text-right">${t.exitPrice.toFixed(2)}</td>
                          <td className={`py-2 text-right font-medium ${t.pnl >= 0 ? "text-bull" : "text-bear"}`}>
                            {t.pnl >= 0 ? "+" : ""}${t.pnl.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-surface-500 mt-3">
                  Trade journal tracks all closed positions. Export to CSV for analysis. Chart snapshots available when viewing the symbol chart at trade time.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 h-fit">
          <h2 className="font-semibold text-lg mb-4">Live Price</h2>
          {loading && <div className="animate-pulse h-8 w-24 bg-surface-200 dark:bg-surface-700 rounded" />}
          {!loading && price > 0 && (
            <div>
              <p className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                ${price < 1 ? price.toFixed(4) : price.toLocaleString()}
              </p>
              <p className="text-surface-500">{name}</p>
              {quote?.changePercent != null && (
                <p
                  className={`text-sm font-medium ${
                    quote.changePercent >= 0 ? "text-bull" : "text-bear"
                  }`}
                >
                  {quote.changePercent >= 0 ? "+" : ""}
                  {quote.changePercent.toFixed(2)}% (24h)
                </p>
              )}
            </div>
          )}
          {error && (
            <p className="text-sm text-amber-600 dark:text-amber-400">{error}</p>
          )}
          <div className="mt-4 space-y-1 text-xs text-surface-400">
            <p>Real data from Binance (crypto), Finnhub (stocks).</p>
            <p>
              Commission: {activeAccount === "stocks" && "Zero (simulated)"}
              {activeAccount === "forex" && "Spread ~0.01% (simulated)"}
              {activeAccount === "crypto" && "0.1% (Binance-style)"}
              {(activeAccount === "commodities" || activeAccount === "futures") && "Zero (simulated)"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SimulatorPage() {
  return (
    <SimulatorProvider>
      <SimulatorContent />
    </SimulatorProvider>
  );
}
