import { useState, useEffect } from "react";
import { fetchBinanceKlines } from "../../services/marketData";

const ASSETS = [
  { symbol: "BTCUSDT", name: "BTC" },
  { symbol: "ETHUSDT", name: "ETH" },
  { symbol: "SOLUSDT", name: "SOL" },
  { symbol: "XRPUSDT", name: "XRP" },
  { symbol: "BNBUSDT", name: "BNB" },
];

function computeCorrelation(seriesA: number[], seriesB: number[]): number {
  const n = Math.min(seriesA.length, seriesB.length);
  if (n < 2) return 0;
  const meanA = seriesA.slice(0, n).reduce((a, b) => a + b, 0) / n;
  const meanB = seriesB.slice(0, n).reduce((a, b) => a + b, 0) / n;
  let num = 0;
  let denA = 0;
  let denB = 0;
  for (let i = 0; i < n; i++) {
    const da = seriesA[i] - meanA;
    const db = seriesB[i] - meanB;
    num += da * db;
    denA += da * da;
    denB += db * db;
  }
  const den = Math.sqrt(denA * denB);
  return den === 0 ? 0 : Math.max(-1, Math.min(1, num / den));
}

export function MarketCorrelationHeatmap() {
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [loading, setLoading] = useState(true);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const closes: Record<string, number[]> = {};
      await Promise.all(
        ASSETS.map(async ({ symbol, name }) => {
          const data = await fetchBinanceKlines(symbol, "1d", 60);
          const prices = data.map((d) => d.close);
          const returns = prices.slice(1).map((p, i) => (prices[i] ? (p - prices[i]) / prices[i] : 0));
          closes[name] = returns;
        })
      );
      if (cancelled) return;
      const names = ASSETS.map((a) => a.name);
      const m = names.map((_, i) =>
        names.map((_, j) => computeCorrelation(closes[names[i]] || [], closes[names[j]] || []))
      );
      setMatrix(m);
      setLabels(names);
      setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const getColor = (r: number) => {
    if (r >= 0.7) return "bg-green-500";
    if (r >= 0.3) return "bg-green-300 dark:bg-green-700";
    if (r >= -0.3) return "bg-surface-200 dark:bg-surface-600";
    if (r >= -0.7) return "bg-red-300 dark:bg-red-700";
    return "bg-red-500";
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <h3 className="font-semibold text-surface-900 dark:text-surface-100">
          Market Correlation Heatmap
        </h3>
        <div className="h-64 animate-pulse bg-surface-200 dark:bg-surface-700 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-surface-900 dark:text-surface-100">
          Market Correlation Heatmap
        </h3>
        <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">
          Rolling correlation of daily returns (60 days). Binance crypto data.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left text-sm text-surface-500" />
              {labels.map((l) => (
                <th key={l} className="p-2 text-center text-sm font-medium text-surface-700 dark:text-surface-300">
                  {l}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                <td className="p-2 text-sm font-medium text-surface-700 dark:text-surface-300">
                  {labels[i]}
                </td>
                {row.map((val, j) => (
                  <td key={j} className="p-1">
                    <div
                      className={`w-12 h-12 mx-auto rounded flex items-center justify-center text-xs font-mono ${
                        i === j ? "bg-surface-300 dark:bg-surface-600" : getColor(val)
                      } ${i === j ? "text-surface-600" : "text-white"}`}
                      title={`${labels[i]} vs ${labels[j]}: ${val.toFixed(2)}`}
                    >
                      {i === j ? "1" : val.toFixed(2)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
