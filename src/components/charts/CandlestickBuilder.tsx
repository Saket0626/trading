import { useState } from "react";

export function CandlestickBuilder() {
  const [open, setOpen] = useState(100);
  const [high, setHigh] = useState(105);
  const [low, setLow] = useState(98);
  const [close, setClose] = useState(103);

  const isBullish = close >= open;
  const bodyTop = Math.max(open, close);
  const bodyBottom = Math.min(open, close);
  const range = high - low || 1;
  const scale = 200 / range;

  const bodyHeight = Math.abs(close - open) * scale || 2;
  const upperWickHeight = (high - bodyTop) * scale;
  const lowerWickHeight = (bodyBottom - low) * scale;

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-6">
      <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-4">
        Interactive Candlestick Builder
      </h3>
      <p className="text-sm text-surface-600 dark:text-surface-400 mb-6">
        Adjust the values below to see how OHLC (Open, High, Low, Close) creates different
        candlestick shapes. Green = bullish (close &gt; open). Red = bearish (close &lt; open).
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div
            className="relative mx-auto bg-surface-100 dark:bg-surface-900 rounded-lg"
            style={{ width: 80, height: 220 }}
          >
            {/* Lower wick */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bg-surface-600 dark:bg-surface-400"
              style={{
                width: 2,
                height: lowerWickHeight,
                bottom: 10,
              }}
            />
            {/* Body */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 ${
                isBullish ? "bg-bull dark:bg-bull" : "bg-bear dark:bg-bear"
              }`}
              style={{
                width: 40,
                height: Math.max(bodyHeight, 2),
                bottom: 10 + lowerWickHeight,
              }}
            />
            {/* Upper wick */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bg-surface-600 dark:bg-surface-400"
              style={{
                width: 2,
                height: upperWickHeight,
                bottom: 10 + lowerWickHeight + bodyHeight,
              }}
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
              Open: {open}
            </label>
            <input
              type="range"
              min="90"
              max="110"
              value={open}
              onChange={(e) => setOpen(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-surface-200 dark:bg-surface-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
              High: {high}
            </label>
            <input
              type="range"
              min="90"
              max="115"
              value={high}
              onChange={(e) => setHigh(Math.max(Number(e.target.value), low))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-surface-200 dark:bg-surface-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
              Low: {low}
            </label>
            <input
              type="range"
              min="85"
              max="110"
              value={low}
              onChange={(e) => setLow(Math.min(Number(e.target.value), high))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-surface-200 dark:bg-surface-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
              Close: {close}
            </label>
            <input
              type="range"
              min="90"
              max="110"
              value={close}
              onChange={(e) => setClose(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-surface-200 dark:bg-surface-600"
            />
          </div>

          <div className="pt-4 border-t border-surface-200 dark:border-surface-700">
            <p className="text-sm text-surface-600 dark:text-surface-400">
              {isBullish ? (
                <span className="text-bull dark:text-bull font-medium">Bullish candle</span>
              ) : (
                <span className="text-bear dark:text-bear font-medium">Bearish candle</span>
              )}
              {" — "}
              {bodyHeight < 5 && Math.abs(close - open) < 2
                ? "Doji (indecision)"
                : lowerWickHeight > bodyHeight * 2 && bodyHeight < 15
                  ? "Hammer-like (buyers rejected lows)"
                  : upperWickHeight > bodyHeight * 2 && bodyHeight < 15
                    ? "Shooting star-like (sellers rejected highs)"
                    : bodyHeight > 30
                      ? "Strong momentum"
                      : "Normal candle"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
