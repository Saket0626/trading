import { useState, useCallback } from "react";

const PATTERNS = [
  { id: "hammer", name: "Hammer", desc: "Long lower wick, small body at top" },
  { id: "doji", name: "Doji", desc: "Open ≈ Close, small body" },
  { id: "engulfing", name: "Engulfing", desc: "Large body engulfs previous candle" },
  { id: "shooting-star", name: "Shooting Star", desc: "Long upper wick, small body at bottom" },
  { id: "marubozu", name: "Marubozu", desc: "No wicks, full body" },
];

function generateCandlePattern(patternId: string): { o: number; h: number; l: number; c: number } {
  const base = 100;
  switch (patternId) {
    case "hammer":
      return { o: base, h: base + 2, l: base - 15, c: base + 1 };
    case "doji":
      return { o: base, h: base + 3, l: base - 2, c: base + 0.5 };
    case "engulfing":
      return { o: base - 5, h: base + 8, l: base - 6, c: base + 7 };
    case "shooting-star":
      return { o: base, h: base + 15, l: base - 1, c: base + 1 };
    case "marubozu":
      return { o: base, h: base + 10, l: base, c: base + 10 };
    default:
      return { o: base, h: base + 5, l: base - 5, c: base + 3 };
  }
}

function CandleSvg({ o, h, l, c }: { o: number; h: number; l: number; c: number }) {
  const range = h - l || 1;
  const scale = 80 / range;
  const isBull = c >= o;
  const bodyTop = Math.max(o, c);
  const bodyBottom = Math.min(o, c);
  const bodyH = Math.abs(c - o) * scale || 2;
  const upperWick = (h - bodyTop) * scale;
  const lowerWick = (bodyBottom - l) * scale;
  const baseY = 90;

  return (
    <svg width="60" height="100" className="mx-auto">
      {/* Wick */}
      <line
        x1="30"
        y1={baseY - lowerWick - bodyH - upperWick}
        x2="30"
        y2={baseY}
        stroke="currentColor"
        strokeWidth="2"
        className="text-surface-600"
      />
      {/* Body */}
      <rect
        x="15"
        y={baseY - lowerWick - bodyH}
        width="30"
        height={Math.max(bodyH, 2)}
        fill={isBull ? "#22c55e" : "#ef4444"}
      />
    </svg>
  );
}

export function PatternRecognitionGame() {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const correctId = PATTERNS[round % PATTERNS.length].id;
  const candle = generateCandlePattern(correctId);

  const handleSelect = useCallback(
    (id: string) => {
      if (showResult) return;
      setSelected(id);
      setShowResult(true);
      if (id === correctId) setScore((s) => s + 1);
    },
    [correctId, showResult]
  );

  const next = () => {
    setRound((r) => r + 1);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">
          Pattern Recognition Game
        </h3>
        <p className="text-sm text-surface-600 dark:text-surface-400">
          Identify the candlestick pattern shown. Score: {score} correct.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50">
        <p className="text-sm text-surface-500 mb-4">What pattern is this?</p>
        <CandleSvg o={candle.o} h={candle.h} l={candle.l} c={candle.c} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {PATTERNS.map((p) => (
          <button
            key={p.id}
            onClick={() => handleSelect(p.id)}
            disabled={showResult}
            className={`p-3 rounded-lg border text-left transition-all ${
              showResult
                ? p.id === correctId
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : selected === p.id
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-surface-200 dark:border-surface-700 opacity-60"
                : "border-surface-200 dark:border-surface-700 hover:border-primary-400"
            }`}
          >
            <span className="font-medium">{p.name}</span>
            <span className="block text-xs text-surface-500 mt-0.5">{p.desc}</span>
          </button>
        ))}
      </div>

      {showResult && (
        <div className="flex items-center justify-between">
          <p className={selected === correctId ? "text-bull font-medium" : "text-bear font-medium"}>
            {selected === correctId ? "Correct!" : `It was ${PATTERNS.find((x) => x.id === correctId)?.name}`}
          </p>
          <button
            onClick={next}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
