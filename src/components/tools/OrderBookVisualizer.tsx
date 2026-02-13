import { useState, useEffect } from "react";
import { fetchBinanceOrderBook, type OrderBookLevel } from "../../services/marketData";

const CRYPTO_OPTIONS = [
  { symbol: "BTCUSDT", name: "Bitcoin" },
  { symbol: "ETHUSDT", name: "Ethereum" },
  { symbol: "BNBUSDT", name: "BNB" },
  { symbol: "SOLUSDT", name: "Solana" },
  { symbol: "XRPUSDT", name: "XRP" },
];

function OrderBookSide({
  levels,
  side,
  maxQty,
}: {
  levels: OrderBookLevel[];
  side: "bid" | "ask";
  maxQty: number;
}) {
  return (
    <div className="space-y-1">
      {levels.slice(0, 15).map((l, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <div
            className={`h-5 rounded-r ${
              side === "bid" ? "bg-bull/30" : "bg-bear/30"
            }`}
            style={{ width: `${maxQty ? (l.quantity / maxQty) * 120 : 0}px` }}
          />
          <span className="w-24 font-mono tabular-nums">
            ${l.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-surface-500 font-mono tabular-nums">
            {l.quantity.toLocaleString(undefined, { maximumFractionDigits: 4 })}
          </span>
        </div>
      ))}
    </div>
  );
}

export function OrderBookVisualizer() {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [data, setData] = useState<{ bids: OrderBookLevel[]; asks: OrderBookLevel[] }>({
    bids: [],
    asks: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      const result = await fetchBinanceOrderBook(symbol, 20);
      if (!cancelled) {
        setData(result);
        setLoading(false);
      }
    };
    load();
    const id = setInterval(load, 2000); // Update every 2 seconds
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [symbol]);

  const maxQty = Math.max(
    ...data.bids.map((b) => b.quantity),
    ...data.asks.map((a) => a.quantity),
    1
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-surface-900 dark:text-surface-100">
          Live Order Book
        </h3>
      </div>
      <p className="text-sm text-surface-600 dark:text-surface-400">
        Real-time bid/ask depth from Binance. Updates every 2 seconds.
      </p>
      <select
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        className="px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800"
      >
        {CRYPTO_OPTIONS.map((o) => (
          <option key={o.symbol} value={o.symbol}>
            {o.name} ({o.symbol})
          </option>
        ))}
      </select>
      {loading && data.bids.length === 0 ? (
        <div className="animate-pulse h-48 bg-surface-200 dark:bg-surface-700 rounded-lg" />
      ) : (
        <div className="grid grid-cols-2 gap-6 font-mono text-sm">
          <div>
            <p className="text-bull font-semibold mb-2">Bids (Buy)</p>
            <OrderBookSide levels={data.bids} side="bid" maxQty={maxQty} />
          </div>
          <div>
            <p className="text-bear font-semibold mb-2">Asks (Sell)</p>
            <OrderBookSide
              levels={[...data.asks].reverse()}
              side="ask"
              maxQty={maxQty}
            />
          </div>
        </div>
      )}
    </div>
  );
}
