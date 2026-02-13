import { useState } from "react";

interface Props {
  title?: string;
  description?: string;
}

export function SupplyDemandSimulator({ title, description }: Props) {
  const [supply, setSupply] = useState(50);
  const [demand, setDemand] = useState(50);

  // Simple model: price moves with demand - supply (higher demand => higher price)
  const equilibrium = Math.round(50 + (demand - supply) * 0.8);
  const priceLevel = Math.max(10, Math.min(90, equilibrium));

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-6">
      <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">
        {title ?? "Supply & Demand Simulator"}
      </h3>
      <p className="text-sm text-surface-600 dark:text-surface-400 mb-6">
        {description ?? "Move the sliders. When demand is higher than supply, price tends to rise. When supply is higher than demand, price tends to fall."}
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Demand (buyers): {demand}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={demand}
            onChange={(e) => setDemand(Number(e.target.value))}
            className="w-full h-3 rounded-full appearance-none bg-surface-200 dark:bg-surface-600 accent-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Supply (sellers): {supply}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={supply}
            onChange={(e) => setSupply(Number(e.target.value))}
            className="w-full h-3 rounded-full appearance-none bg-surface-200 dark:bg-surface-600 accent-primary-500"
          />
        </div>
        <div className="rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 p-4">
          <p className="text-sm font-medium text-primary-800 dark:text-primary-200">
            Equilibrium price level: <strong>{priceLevel}</strong> (scale 0–100)
          </p>
          <p className="text-xs text-surface-600 dark:text-surface-400 mt-1">
            {demand > supply
              ? "More demand than supply → price rises."
              : demand < supply
                ? "More supply than demand → price falls."
                : "Balanced → price stable."}
          </p>
        </div>
      </div>
    </div>
  );
}
