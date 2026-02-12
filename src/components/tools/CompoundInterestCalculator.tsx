import { useState } from "react";

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("10000");
  const [monthlyReturn, setMonthlyReturn] = useState("2");
  const [months, setMonths] = useState("36");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(monthlyReturn) || 0 / 100;
  const m = parseInt(months) || 0;

  const rate = r / 100;
  const finalValue = p * Math.pow(1 + rate, m);
  const totalProfit = finalValue - p;

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
      <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
        Compound Interest Calculator
      </h2>
      <p className="text-sm text-surface-600 dark:text-surface-400 mb-6">
        See how compounding grows your capital. Use realistic monthly returns—2% monthly =
        26.8% annually.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Starting Capital ($)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Monthly Return (%)</label>
          <input
            type="number"
            value={monthlyReturn}
            onChange={(e) => setMonthlyReturn(e.target.value)}
            step="0.1"
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
          <p className="text-xs text-surface-500 mt-1">2-5% is ambitious but possible</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Months</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            min="1"
            max="360"
            className="w-full px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
        </div>

        <div className="pt-4 border-t border-surface-200 dark:border-surface-700 space-y-2">
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">Final Value</span>
            <span className="text-xl font-bold text-primary-600">
              ${finalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-600 dark:text-surface-400">Total Profit</span>
            <span
              className={
                totalProfit >= 0 ? "text-bull font-semibold" : "text-bear font-semibold"
              }
            >
              {totalProfit >= 0 ? "+" : ""}${totalProfit.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
