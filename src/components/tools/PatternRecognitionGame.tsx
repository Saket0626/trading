import { useState, useCallback, useMemo } from "react";

type Candle = { o: number; h: number; l: number; c: number };

// Single-candle patterns with OHLC
const SINGLE_PATTERNS: Record<string, { candle: Candle; name: string; buyerSeller: "buyers" | "sellers" | "indecision"; likelyDir: "up" | "down" | "sideways"; context?: string }> = {
  hammer: {
    candle: { o: 100, h: 102, l: 85, c: 99 },
    name: "Hammer",
    buyerSeller: "buyers",
    likelyDir: "up",
    context: "at support",
  },
  invertedHammer: {
    candle: { o: 100, h: 115, l: 98, c: 101 },
    name: "Inverted Hammer",
    buyerSeller: "buyers",
    likelyDir: "up",
    context: "after downtrend",
  },
  doji: {
    candle: { o: 100, h: 103, l: 97, c: 100 },
    name: "Doji",
    buyerSeller: "indecision",
    likelyDir: "sideways",
    context: "after strong move",
  },
  shootingStar: {
    candle: { o: 100, h: 118, l: 99, c: 99 },
    name: "Shooting Star",
    buyerSeller: "sellers",
    likelyDir: "down",
    context: "at resistance",
  },
  marubozuBull: {
    candle: { o: 100, h: 112, l: 100, c: 112 },
    name: "Bullish Marubozu",
    buyerSeller: "buyers",
    likelyDir: "up",
  },
  marubozuBear: {
    candle: { o: 110, h: 110, l: 98, c: 98 },
    name: "Bearish Marubozu",
    buyerSeller: "sellers",
    likelyDir: "down",
  },
};

// Multi-candle patterns: [candle1, candle2] or [candle1, candle2, candle3]
const MULTI_PATTERNS: Record<string, { candles: Candle[]; name: string; buyerSeller: "buyers" | "sellers"; likelyDir: "up" | "down" }> = {
  bullishEngulfing: {
    candles: [
      { o: 105, h: 106, l: 100, c: 101 },
      { o: 99, h: 108, l: 98, c: 107 },
    ],
    name: "Bullish Engulfing",
    buyerSeller: "buyers",
    likelyDir: "up",
  },
  bearishEngulfing: {
    candles: [
      { o: 99, h: 106, l: 98, c: 105 },
      { o: 106, h: 107, l: 97, c: 96 },
    ],
    name: "Bearish Engulfing",
    buyerSeller: "sellers",
    likelyDir: "down",
  },
  morningStar: {
    candles: [
      { o: 108, h: 110, l: 105, c: 105 },
      { o: 105, h: 106, l: 104, c: 105 },
      { o: 104, h: 110, l: 103, c: 109 },
    ],
    name: "Morning Star",
    buyerSeller: "buyers",
    likelyDir: "up",
  },
  eveningStar: {
    candles: [
      { o: 95, h: 102, l: 94, c: 101 },
      { o: 102, h: 103, l: 101, c: 102 },
      { o: 102, h: 103, l: 95, c: 96 },
    ],
    name: "Evening Star",
    buyerSeller: "sellers",
    likelyDir: "down",
  },
  haramiBull: {
    candles: [
      { o: 108, h: 110, l: 100, c: 101 },
      { o: 100, h: 103, l: 99, c: 102 },
    ],
    name: "Bullish Harami",
    buyerSeller: "buyers",
    likelyDir: "up",
  },
};

type QuestionType =
  | { type: "pattern"; patternId: string; options: string[]; correctIndex: number }
  | { type: "buyerSeller"; patternId: string; candles: Candle[]; options: string[]; correctIndex: number; context?: string }
  | { type: "likelyDir"; patternId: string; candles: Candle[]; options: string[]; correctIndex: number; context?: string }
  | { type: "wick"; question: string; options: string[]; correctIndex: number }
  | { type: "body"; question: string; options: string[]; correctIndex: number }
  | { type: "ohlc"; question: string; options: string[]; correctIndex: number };

// Build question pool
function buildQuestions(): QuestionType[] {
  const q: QuestionType[] = [];

  // Pattern identification (single)
  const singleIds = Object.keys(SINGLE_PATTERNS);
  singleIds.forEach((id) => {
    const names = [...singleIds.map((k) => SINGLE_PATTERNS[k].name)];
    q.push({ type: "pattern", patternId: id, options: names, correctIndex: names.indexOf(SINGLE_PATTERNS[id].name) });
  });

  // Pattern identification (multi)
  const multiIds = Object.keys(MULTI_PATTERNS);
  multiIds.forEach((id) => {
    const names = [...multiIds.map((k) => MULTI_PATTERNS[k].name)];
    q.push({ type: "pattern", patternId: id, options: names, correctIndex: names.indexOf(MULTI_PATTERNS[id].name) } as QuestionType);
  });

  // Buyer/seller questions (single)
  singleIds.forEach((id) => {
    const p = SINGLE_PATTERNS[id];
    const options = ["Buyers won (bullish)", "Sellers won (bearish)", "Indecision (neither)"];
    const correctIdx = p.buyerSeller === "buyers" ? 0 : p.buyerSeller === "sellers" ? 1 : 2;
    q.push({ type: "buyerSeller", patternId: id, candles: [p.candle], options, correctIndex: correctIdx, context: p.context });
  });

  // Buyer/seller (multi)
  multiIds.forEach((id) => {
    const p = MULTI_PATTERNS[id];
    const options = ["Buyers took control", "Sellers took control"];
    q.push({ type: "buyerSeller", patternId: id, candles: p.candles, options, correctIndex: p.buyerSeller === "buyers" ? 0 : 1 });
  });

  // Likely direction (single)
  singleIds.forEach((id) => {
    const p = SINGLE_PATTERNS[id];
    const options = ["Price likely to go up", "Price likely to go down", "Sideways / unclear"];
    const correctIdx = p.likelyDir === "up" ? 0 : p.likelyDir === "down" ? 1 : 2;
    q.push({ type: "likelyDir", patternId: id, candles: [p.candle], options, correctIndex: correctIdx, context: p.context });
  });

  // Likely direction (multi)
  multiIds.forEach((id) => {
    const p = MULTI_PATTERNS[id];
    const options = ["Price likely to go up", "Price likely to go down"];
    q.push({ type: "likelyDir", patternId: id, candles: p.candles, options, correctIndex: p.likelyDir === "up" ? 0 : 1 });
  });

  // Wick interpretation
  q.push(
    { type: "wick", question: "A long lower wick suggests:", options: ["Buyers rejected lower prices", "Sellers rejected lower prices", "No significance", "Volume was high"], correctIndex: 0 },
    { type: "wick", question: "A long upper wick suggests:", options: ["Buyers rejected higher prices", "Sellers rejected higher prices", "Strong bullish momentum", "No significance"], correctIndex: 1 },
    { type: "wick", question: "What do wicks show?", options: ["Where price closed", "Prices that were tested but rejected", "Volume levels", "Support only"], correctIndex: 1 },
  );

  // Body interpretation
  q.push(
    { type: "body", question: "A green candle with a long body means:", options: ["Indecision", "Buyers dominated the period", "Sellers dominated", "Volume was low"], correctIndex: 1 },
    { type: "body", question: "A small body (Doji-like) suggests:", options: ["Strong momentum", "Indecision—buyers and sellers balanced", "Buyers won", "Sellers won"], correctIndex: 1 },
    { type: "body", question: "Close above open (green body) indicates:", options: ["Sellers won", "Buyers won—price closed higher than it opened", "No signal", "High volume only"], correctIndex: 1 },
  );

  // OHLC
  q.push(
    { type: "ohlc", question: "In a bullish candle, which is true?", options: ["Close < Open", "Close > Open", "High < Low", "Open = Close"], correctIndex: 1 },
    { type: "ohlc", question: "The body of a candlestick shows:", options: ["High and Low only", "Open and Close", "Volume", "Time"], correctIndex: 1 },
  );

  return q;
}

// Candle SVG - renders 1, 2, or 3 candles with proper scaling
function CandleSvg({ candles, maxHeight = 120 }: { candles: Candle[]; maxHeight?: number }) {
  const allH = candles.flatMap((c) => [c.h, c.l]);
  const globHigh = Math.max(...allH);
  const globLow = Math.min(...allH);
  const range = Math.max(globHigh - globLow, 1);
  const scale = maxHeight / range;
  const candleWidth = candles.length === 1 ? 40 : candles.length === 2 ? 28 : 22;
  const gap = 8;
  const totalW = candles.length * candleWidth + (candles.length - 1) * gap;
  const baseY = maxHeight + 10;

  return (
    <svg width={Math.max(totalW, 80)} height={maxHeight + 20} className="mx-auto overflow-visible">
      {candles.map((c, i) => {
        const isBull = c.c >= c.o;
        const bodyTop = Math.max(c.o, c.c);
        const bodyBottom = Math.min(c.o, c.c);
        const bodyH = Math.max(Math.abs(c.c - c.o) * scale, 2);
        const upperWick = Math.max((c.h - bodyTop) * scale, 0);
        const lowerWick = Math.max((bodyBottom - c.l) * scale, 0);
        const localCx = candleWidth / 2;
        return (
          <g key={i} transform={`translate(${i * (candleWidth + gap)}, 0)`}>
            {/* Full wick (center line) */}
            <line
              x1={localCx}
              y1={baseY - lowerWick - bodyH - upperWick}
              x2={localCx}
              y2={baseY}
              stroke="currentColor"
              strokeWidth="2"
              className="text-surface-600 dark:text-surface-400"
            />
            {/* Body */}
            <rect
              x={0}
              y={baseY - lowerWick - bodyH}
              width={candleWidth}
              height={Math.max(bodyH, 2)}
              fill={isBull ? "#22c55e" : "#ef4444"}
              rx="2"
            />
          </g>
        );
      })}
    </svg>
  );
}

// Shuffle and pick a random question
function pickQuestion(pool: QuestionType[], excludeIds: Set<string>): { q: QuestionType; candles: Candle[]; correctName?: string } | null {
  const available = pool.filter((x) => {
    if (x.type === "pattern") return !excludeIds.has(x.patternId);
    if (x.type === "buyerSeller" || x.type === "likelyDir") return !excludeIds.has(x.patternId);
    return true;
  });
  if (available.length === 0) return null;
  const q = available[Math.floor(Math.random() * available.length)];

  let candles: Candle[] = [];
  let correctName: string | undefined;

  if (q.type === "pattern") {
    if (SINGLE_PATTERNS[q.patternId]) {
      candles = [SINGLE_PATTERNS[q.patternId].candle];
      correctName = SINGLE_PATTERNS[q.patternId].name;
    } else if (MULTI_PATTERNS[q.patternId]) {
      candles = MULTI_PATTERNS[q.patternId].candles;
      correctName = MULTI_PATTERNS[q.patternId].name;
    }
  } else if (q.type === "buyerSeller" || q.type === "likelyDir") {
    candles = q.candles;
  }

  return { q, candles, correctName };
}

export function PatternRecognitionGame() {
  const pool = useMemo(() => buildQuestions(), []);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [lastPatternId, setLastPatternId] = useState<string | null>(null);

  const current = useMemo(() => {
    const exclude = new Set(lastPatternId ? [lastPatternId] : []);
    return pickQuestion(pool, exclude);
  }, [round, pool, lastPatternId]);

  const questionText = useMemo(() => {
    if (!current) return "What pattern is this?";
    const q = current.q;
    if (q.type === "pattern") return "What pattern is this?";
    if (q.type === "buyerSeller") return q.context ? `Who won this period? (Context: ${q.context})` : "Who won this period?";
    if (q.type === "likelyDir") return q.context ? `What's most likely to happen next? (Context: ${q.context})` : "What's most likely to happen next?";
    if (q.type === "wick" || q.type === "body" || q.type === "ohlc") return q.question;
    return "What pattern is this?";
  }, [current]);

  const { options, correctIndex } = useMemo(() => {
    const rawOptions = current?.q.options ?? [];
    if (current?.q.type === "pattern") {
      const shuffled = (rawOptions as string[]).slice().sort(() => Math.random() - 0.5);
      const correctName = current.correctName ?? "";
      return { options: shuffled, correctIndex: shuffled.indexOf(correctName) };
    }
    return { options: rawOptions, correctIndex: current?.q.correctIndex ?? 0 };
  }, [round, current?.q.type, current?.correctName, current?.q.correctIndex, current?.q.options]);

  const handleSelect = useCallback(
    (idx: number) => {
      if (showResult || !current) return;
      setSelected(idx);
      setShowResult(true);
      if (idx === correctIndex) {
        setScore((s) => s + 1);
        setStreak((str) => str + 1);
      } else {
        setStreak(0);
      }
    },
    [showResult, current, correctIndex]
  );

  const next = () => {
    if (current && (current.q.type === "pattern" || current.q.type === "buyerSeller" || current.q.type === "likelyDir")) {
      setLastPatternId((current.q as { patternId?: string }).patternId ?? null);
    }
    setRound((r) => r + 1);
    setSelected(null);
    setShowResult(false);
  };

  const getFeedback = () => {
    if (!current || selected === null) return "";
    const q = current.q;
    const correct = selected === correctIndex;

    if (q.type === "pattern" && current.correctName) {
      if (correct) return `Correct! ${current.correctName} — a key reversal pattern. Use it with context (support/resistance, trend).`;
      return `It was ${current.correctName}. Learn the OHLC structure: body shows open/close, wicks show rejection zones.`;
    }

    if (q.type === "buyerSeller") {
      if (correct) return "Correct! Reading who won each period helps you gauge momentum and potential direction.";
      const ans = q.options[correctIndex];
      return `It was "${ans}". Green body = buyers won. Red body = sellers won. Doji = indecision.`;
    }

    if (q.type === "likelyDir") {
      if (correct) return "Correct! Patterns suggest probability, not certainty—always use stops.";
      return `The pattern suggested "${q.options[correctIndex]}". Patterns work best at support/resistance with confirmation.`;
    }

    if (q.type === "wick" || q.type === "body" || q.type === "ohlc") {
      if (correct) return "Correct!";
      return `The answer was: "${q.options[correctIndex]}".`;
    }

    return correct ? "Correct!" : "Try again!";
  };

  if (!current) {
    return (
      <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-8 text-center">
        <p className="text-surface-600 dark:text-surface-400">Loading questions...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-1">
          Candlestick Mastery Challenge
        </h3>
        <p className="text-sm text-surface-600 dark:text-surface-400">
          Test pattern names, buyer/seller dominance, likely direction, wicks, body, and OHLC.
        </p>
        <div className="flex gap-4 mt-2 text-sm">
          <span className="font-medium text-surface-700 dark:text-surface-300">
            Score: {score} correct
          </span>
          {streak >= 2 && (
            <span className="text-amber-600 dark:text-amber-400 font-medium">
              {streak} in a row
            </span>
          )}
        </div>
      </div>

      <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 min-h-[180px] flex flex-col items-center justify-center overflow-hidden">
        <p className="text-sm font-medium text-surface-700 dark:text-surface-300 mb-4">
          {questionText}
        </p>
        {current.candles.length > 0 && (
          <div className="my-4 overflow-hidden">
            <CandleSvg candles={current.candles} maxHeight={120} />
          </div>
        )}
        {(current.q.type === "wick" || current.q.type === "body" || current.q.type === "ohlc") && (
          <p className="text-xs text-surface-500 mt-2">(No candle shown—answer from knowledge)</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            disabled={showResult}
            className={`p-4 rounded-xl border text-left transition-all ${
              showResult
                ? idx === correctIndex
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : selected === idx
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-surface-200 dark:border-surface-700 opacity-60"
                : "border-surface-200 dark:border-surface-700 hover:border-primary-400 hover:bg-surface-100 dark:hover:bg-surface-800"
            }`}
          >
            <span className="font-medium text-surface-900 dark:text-surface-100">{opt}</span>
          </button>
        ))}
      </div>

      {showResult && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
            <p className={`font-medium ${selected === correctIndex ? "text-bull" : "text-bear"}`}>
              {selected === correctIndex ? "Correct!" : "Incorrect"}
            </p>
            <p className="text-sm text-surface-600 dark:text-surface-400 mt-2">
              {getFeedback()}
            </p>
          </div>
          <button
            onClick={next}
            className="w-full px-4 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 font-medium"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}
