import { useState } from "react";

function RecoveryMathVisualizer() {
  const [lossPct, setLossPct] = useState(50);
  const gainNeeded = lossPct > 0 ? (100 * lossPct) / (100 - lossPct) : 0;

  // Comparison: 1% risk vs 10% risk over 100 trades (win rate 50%)
  const risk1Pct = 1;
  const risk10Pct = 10;
  const trades = 100;
  const winRate = 0.5;
  const loss1Pct = (1 - risk1Pct / 100) ** (trades * (1 - winRate)) * (1 + risk1Pct / 100) ** (trades * winRate);
  const loss10Pct = (1 - risk10Pct / 100) ** (trades * (1 - winRate)) * (1 + risk10Pct / 100) ** (trades * winRate);
  const surv1 = (loss1Pct * 100).toFixed(0);
  const surv10 = (loss10Pct * 100).toFixed(0);

  return (
    <div className="mt-6 pt-6 border-t border-surface-200 dark:border-surface-700 space-y-6">
      <div>
        <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">
          Recovery Math
        </h3>
        <p className="text-sm text-surface-600 dark:text-surface-400 mb-4">
          After a % loss, you need a larger % gain to break even. 50% loss → 100% gain to recover.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex-1 min-w-[120px]">
            <label className="block text-xs text-surface-500 mb-1">Loss %</label>
            <input
              type="range"
              min="10"
              max="90"
              value={lossPct}
              onChange={(e) => setLossPct(Number(e.target.value))}
              className="w-full h-2 rounded-lg accent-bear"
            />
            <span className="text-lg font-bold text-bear">{lossPct}%</span>
          </div>
          <div className="text-center">
            <span className="text-surface-500">→ needs </span>
            <span className="text-xl font-bold text-bull">{gainNeeded.toFixed(1)}%</span>
            <span className="text-surface-500"> gain to recover</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2 items-end h-24">
          <div className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-bear/70 rounded-t min-h-[4px] transition-all duration-300"
              style={{ height: `${Math.min(lossPct, 90)}%` }}
              title={`${lossPct}% loss`}
            />
            <span className="text-xs text-surface-500 mt-1">Loss</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-bull/70 rounded-t min-h-[4px] transition-all duration-300"
              style={{ height: `${Math.min(gainNeeded / 2, 90)}%` }}
              title={`${gainNeeded.toFixed(0)}% gain needed`}
            />
            <span className="text-xs text-surface-500 mt-1">Gain needed</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">
          Risk Comparison: 1% vs 10% per trade (100 trades, 50% win rate)
        </h3>
        <p className="text-sm text-surface-600 dark:text-surface-400 mb-3">
          Risking 1% per trade preserves capital; 10% per trade often wipes accounts.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
            <p className="text-sm font-medium text-bull">1% risk</p>
            <p className="text-2xl font-bold">~{surv1}%</p>
            <p className="text-xs text-surface-500">capital remaining</p>
          </div>
          <div className="p-4 rounded-lg bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
            <p className="text-sm font-medium text-bear">10% risk</p>
            <p className="text-2xl font-bold">~{surv10}%</p>
            <p className="text-xs text-surface-500">capital remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RiskRewardCalculator() {
  const [entryPrice, setEntryPrice] = useState("100");
  const [stopLoss, setStopLoss] = useState("98");
  const [riskReward, setRiskReward] = useState("2");

  const entry = parseFloat(entryPrice) || 0;
  const stop = parseFloat(stopLoss) || 0;
  const rr = parseFloat(riskReward) || 0;

  const risk = Math.abs(entry - stop);
  const reward = risk * rr;
  const takeProfitLong = entry + reward;
  const takeProfitShort = entry - reward;

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
      <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
        Risk-Reward Calculator
      </h2>
      <p className="text-sm text-surface-600 dark:text-surface-400 mb-6">
        Find take-profit levels for your risk-reward targets. 1:2 means you risk $1 to make $2.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Entry Price ($)</label>
          <input
            type="number"
            value={entryPrice}
            onChange={(e) => setEntryPrice(e.target.value)}
            step="0.01"
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Stop Loss ($)</label>
          <input
            type="number"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            step="0.01"
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Risk:Reward Ratio</label>
          <select
            value={riskReward}
            onChange={(e) => setRiskReward(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          >
            <option value="1.5">1:1.5</option>
            <option value="2">1:2</option>
            <option value="2.5">1:2.5</option>
            <option value="3">1:3</option>
            <option value="4">1:4</option>
          </select>
        </div>

        <div className="pt-4 border-t border-surface-200 dark:border-surface-700 space-y-2">
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">Risk per share</span>
            <span>${risk.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">Reward per share</span>
            <span>${reward.toFixed(2)}</span>
          </div>
          <div className="pt-2">
            <p className="text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
              Take Profit (Long)
            </p>
            <p className="text-lg font-semibold text-bull">${takeProfitLong.toFixed(2)}</p>
          </div>
          <div className="pt-2">
            <p className="text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
              Take Profit (Short)
            </p>
            <p className="text-lg font-semibold text-bear">${takeProfitShort.toFixed(2)}</p>
          </div>
        </div>

        <RecoveryMathVisualizer />
      </div>
    </div>
  );
}
