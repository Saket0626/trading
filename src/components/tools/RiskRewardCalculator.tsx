import { useState } from "react";

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
      </div>
    </div>
  );
}
