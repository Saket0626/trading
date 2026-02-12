import { useState } from "react";

export function PositionSizeCalculator() {
  const [accountSize, setAccountSize] = useState("10000");
  const [riskPercent, setRiskPercent] = useState("1");
  const [entryPrice, setEntryPrice] = useState("100");
  const [stopLoss, setStopLoss] = useState("98");

  const account = parseFloat(accountSize) || 0;
  const risk = parseFloat(riskPercent) || 0;
  const entry = parseFloat(entryPrice) || 0;
  const stop = parseFloat(stopLoss) || 0;

  const riskAmount = (account * risk) / 100;
  const riskPerShare = Math.abs(entry - stop);
  const positionSize = riskPerShare > 0 ? Math.floor(riskAmount / riskPerShare) : 0;
  const positionValue = positionSize * entry;
  const positionPercent = account > 0 ? (positionValue / account) * 100 : 0;

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
      <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
        Position Size Calculator
      </h2>
      <p className="text-sm text-surface-600 dark:text-surface-400 mb-6">
        Calculate how many shares/units to buy based on the 1% rule. Risk only the specified %
        of your account on this trade.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Account Size ($)</label>
          <input
            type="number"
            value={accountSize}
            onChange={(e) => setAccountSize(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Risk Per Trade (%)</label>
          <input
            type="number"
            value={riskPercent}
            onChange={(e) => setRiskPercent(e.target.value)}
            step="0.1"
            min="0.1"
            max="5"
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
          <p className="text-xs text-surface-500 mt-1">1% recommended</p>
        </div>
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
          <label className="block text-sm font-medium mb-1">Stop Loss Price ($)</label>
          <input
            type="number"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            step="0.01"
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
        </div>

        <div className="pt-4 border-t border-surface-200 dark:border-surface-700 space-y-2">
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">Risk Amount</span>
            <span className="font-semibold">${riskAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">Position Size</span>
            <span className="font-semibold text-primary-600">{positionSize} shares</span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">Position Value</span>
            <span>${positionValue.toFixed(2)} ({positionPercent.toFixed(1)}% of account)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
