import { useState } from "react";
import { BarChart3, Wallet, History } from "lucide-react";
import { SimulatorProvider, useSimulator } from "../contexts/SimulatorContext";
import { useMarketQuote, useCandles, getSymbols } from "../hooks/useMarketData";
import { LiveChart } from "../components/charts/LiveChart";
import { useTheme } from "../contexts/ThemeContext";

function SimulatorContent() {
  const { accounts, activeAccount, setActiveAccount, openPosition, closePosition } =
    useSimulator();
  const { resolvedTheme } = useTheme();
  const acc = accounts[activeAccount];
  const symbols = getSymbols(activeAccount);
  const [selectedSymbol, setSelectedSymbol] = useState(symbols[0]?.symbol || "BTCUSD");
  const [quantity, setQuantity] = useState("");

  const { quote, loading, error } = useMarketQuote(selectedSymbol, activeAccount, 10000);
  const { data: candles, loading: candlesLoading } = useCandles(
    selectedSymbol,
    activeAccount,
    "1h"
  );

  const price = quote?.price ?? 0;
  const name = symbols.find((s) => s.symbol === selectedSymbol)?.name ?? selectedSymbol;

  const handleBuy = () => {
    if (!selectedSymbol || !price || !quantity) return;
    const qty = parseFloat(quantity);
    if (qty > 0) {
      openPosition(selectedSymbol, "long", qty, price);
      setQuantity("");
    }
  };

  const handleSell = () => {
    if (!selectedSymbol || !price || !quantity) return;
    const qty = parseFloat(quantity);
    if (qty > 0) {
      openPosition(selectedSymbol, "short", qty, price);
      setQuantity("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
        Paper Trading Simulator
      </h1>
      <p className="text-surface-600 dark:text-surface-400 mb-8">
        Real live market data. Stocks $25k, Forex $1k, Crypto $5k, Commodities $10k. Add
        VITE_FINNHUB_API_KEY for stocks.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {(["stocks", "forex", "crypto", "commodities"] as const).map((type) => (
          <button
            key={type}
            onClick={() => {
              setActiveAccount(type);
              setSelectedSymbol(getSymbols(type)[0]?.symbol || "BTCUSD");
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
              <h2 className="font-semibold mb-4">{selectedSymbol} Chart (1H)</h2>
              <LiveChart
                data={candles}
                height={300}
                theme={resolvedTheme}
                loading={candlesLoading}
              />
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
                  disabled={loading || !price}
                  className="flex-1 py-2 rounded-lg bg-bull text-white font-semibold hover:opacity-90 disabled:opacity-50"
                >
                  Buy
                </button>
                <button
                  onClick={handleSell}
                  disabled={loading || !price}
                  className="flex-1 py-2 rounded-lg bg-bear text-white font-semibold hover:opacity-90 disabled:opacity-50"
                >
                  Sell Short
                </button>
              </div>
            </div>
          </div>

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
                            closePosition(pos.id, price || pos.currentPrice)
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

          {acc.tradeHistory.length > 0 && (
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
                    <span
                      className={
                        t.pnl >= 0 ? "text-bull" : "text-bear"
                      }
                    >
                      {t.pnl >= 0 ? "+" : ""}${t.pnl.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
          <p className="text-xs text-surface-400 mt-4">
            Real data from Binance (crypto), Finnhub (stocks).
          </p>
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
