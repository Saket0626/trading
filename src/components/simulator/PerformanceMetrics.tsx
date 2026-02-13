import type { Trade } from "../../types/simulator";

interface PerformanceMetricsProps {
  tradeHistory: Trade[];
  startingBalance: number;
  currentEquity: number;
}

export function PerformanceMetrics({
  tradeHistory,
  startingBalance,
  currentEquity,
}: PerformanceMetricsProps) {
  const wins = tradeHistory.filter((t) => t.pnl > 0);
  const losses = tradeHistory.filter((t) => t.pnl < 0);
  const winRate =
    tradeHistory.length > 0
      ? Math.round((wins.length / tradeHistory.length) * 100)
      : 0;
  const grossProfit = wins.reduce((s, t) => s + t.pnl, 0);
  const grossLoss = Math.abs(losses.reduce((s, t) => s + t.pnl, 0));
  const profitFactor =
    grossLoss > 0 ? (grossProfit / grossLoss).toFixed(2) : grossProfit > 0 ? "∞" : "0";

  // Equity curve points: start, then cumulative after each trade
  const equityPoints: { x: number; y: number }[] = [
    { x: 0, y: startingBalance },
  ];
  let cumPnl = 0;
  let peak = startingBalance;
  let maxDrawdown = 0;
  const sorted = [...tradeHistory].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  sorted.forEach((t, i) => {
    cumPnl += t.pnl;
    const equity = startingBalance + cumPnl;
    equityPoints.push({ x: i + 1, y: equity });
    peak = Math.max(peak, equity);
    const dd = peak > 0 ? ((peak - equity) / peak) * 100 : 0;
    maxDrawdown = Math.max(maxDrawdown, dd);
  });
  const maxEquity = Math.max(...equityPoints.map((p) => p.y), currentEquity);
  const minEquity = Math.min(...equityPoints.map((p) => p.y), startingBalance);

  // Sharpe ratio (annualized, assume 252 trading days, risk-free = 0 for simplicity)
  const returns = sorted.map((t) => t.pnlPercent);
  const avgReturn = returns.length > 0 ? returns.reduce((a, b) => a + b, 0) / returns.length : 0;
  const variance =
    returns.length > 1
      ? returns.reduce((s, r) => s + Math.pow(r - avgReturn, 2), 0) / (returns.length - 1)
      : 0;
  const stdDev = Math.sqrt(variance);
  const sharpeRatio =
    stdDev > 0 && returns.length >= 5 ? (avgReturn / stdDev) * Math.sqrt(252) : null;
  const downsideReturns = returns.filter((r) => r < 0);
  const downsideStd =
    downsideReturns.length >= 2
      ? Math.sqrt(
          downsideReturns.reduce((s, r) => s + Math.pow(r - 0, 2), 0) /
            downsideReturns.length
        )
      : 0;
  const sortinoRatio =
    downsideStd > 0 && returns.length >= 5 ? (avgReturn / downsideStd) * Math.sqrt(252) : null;
  const calmarRatio =
    maxDrawdown > 0 && returns.length >= 5
      ? (avgReturn * 252 * 100) / maxDrawdown
      : null;

  if (tradeHistory.length === 0) {
    return (
      <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
        <h2 className="font-semibold text-lg mb-4">Performance Metrics</h2>
        <p className="text-surface-500 text-sm">
          Complete trades to see win rate, profit factor, and equity curve.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
      <h2 className="font-semibold text-lg mb-4">Performance Metrics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        <div>
          <p className="text-sm text-surface-500">Win Rate</p>
          <p className="text-xl font-bold text-surface-900 dark:text-surface-100">
            {winRate}%
          </p>
          <p className="text-xs text-surface-400">{wins.length}W / {losses.length}L</p>
        </div>
        <div>
          <p className="text-sm text-surface-500">Profit Factor</p>
          <p className="text-xl font-bold text-surface-900 dark:text-surface-100">
            {profitFactor}
          </p>
        </div>
        <div>
          <p className="text-sm text-surface-500">Max Drawdown</p>
          <p className="text-xl font-bold text-bear">{maxDrawdown.toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-sm text-surface-500">Total Trades</p>
          <p className="text-xl font-bold text-surface-900 dark:text-surface-100">
            {tradeHistory.length}
          </p>
        </div>
        <div>
          <p className="text-sm text-surface-500">Total P&L</p>
          <p
            className={`text-xl font-bold ${
              currentEquity >= startingBalance ? "text-bull" : "text-bear"
            }`}
          >
            {currentEquity >= startingBalance ? "+" : ""}$
            {(currentEquity - startingBalance).toFixed(2)}
          </p>
        </div>
        {sharpeRatio != null && (
          <div>
            <p className="text-sm text-surface-500">Sharpe (ann.)</p>
            <p className="text-xl font-bold text-surface-900 dark:text-surface-100">
              {sharpeRatio.toFixed(2)}
            </p>
          </div>
        )}
        {sortinoRatio != null && (
          <div>
            <p className="text-sm text-surface-500">Sortino (ann.)</p>
            <p className="text-xl font-bold text-surface-900 dark:text-surface-100">
              {sortinoRatio.toFixed(2)}
            </p>
          </div>
        )}
        {calmarRatio != null && (
          <div>
            <p className="text-sm text-surface-500">Calmar (ann.)</p>
            <p className="text-xl font-bold text-surface-900 dark:text-surface-100">
              {calmarRatio.toFixed(2)}
            </p>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-surface-500 mb-2">Equity Curve</p>
        <div
          className="h-24 flex items-end gap-0.5"
          style={{ minHeight: "96px" }}
        >
          {equityPoints.map((pt, i) => (
            <div
              key={i}
              className="flex-1 min-w-[4px] bg-primary-500 rounded-t opacity-80 hover:opacity-100 transition-opacity"
              style={{
                height: `${Math.max(
                  4,
                  ((pt.y - minEquity) / (maxEquity - minEquity || 1)) * 100
                )}%`,
              }}
              title={`Trade ${i}: $${pt.y.toFixed(2)}`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-surface-500 mt-1">
          <span>Start: ${startingBalance.toLocaleString()}</span>
          <span>Now: ${currentEquity.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
