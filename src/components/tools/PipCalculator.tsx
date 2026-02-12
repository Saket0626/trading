import { useState } from "react";

export function PipCalculator() {
  const [lotSize, setLotSize] = useState("0.1");
  const [pair, setPair] = useState("EURUSD");
  const [pipValue, setPipValue] = useState("10");

  const lots = parseFloat(lotSize) || 0;
  const pipVal = parseFloat(pipValue) || 10;

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
      <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
        Pip / Profit Calculator (Forex)
      </h2>
      <p className="text-sm text-surface-600 dark:text-surface-400 mb-6">
        Calculate pip value and profit/loss for forex trades. 1 standard lot = 100,000 units.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Lot Size</label>
          <select
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          >
            <option value="0.01">0.01 (Micro)</option>
            <option value="0.1">0.1 (Mini)</option>
            <option value="1">1 (Standard)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Currency Pair</label>
          <select
            value={pair}
            onChange={(e) => setPair(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          >
            <option value="EURUSD">EUR/USD (pip = $10/lot)</option>
            <option value="GBPUSD">GBP/USD (pip = $10/lot)</option>
            <option value="USDJPY">USD/JPY (pip = ~$9/lot)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Pip Value per Standard Lot ($)</label>
          <input
            type="number"
            value={pipValue}
            onChange={(e) => setPipValue(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
        </div>

        <div className="pt-4 border-t border-surface-200 dark:border-surface-700 space-y-2">
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">Pip value (your lot)</span>
            <span>${(lots * pipVal).toFixed(2)} per pip</span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">10 pips profit</span>
            <span className="text-bull font-semibold">+${(lots * pipVal * 10).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">10 pips loss</span>
            <span className="text-bear font-semibold">-${(lots * pipVal * 10).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
