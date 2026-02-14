import { useState, useCallback, useMemo } from "react";

type Candle = { o: number; h: number; l: number; c: number };

// Single-candle patterns with OHLC + extended candles for likelyDir (4–6 candles with trend context)
const SINGLE_PATTERNS: Record<string, {
  candle: Candle;
  name: string;
  buyerSeller: "buyers" | "sellers" | "indecision";
  likelyDir: "up" | "down" | "sideways";
  context?: string;
  likelyDirCandles?: Candle[];
  likelyDirExplanation?: string;
}> = {
  hammer: {
    candle: { o: 100, h: 102, l: 85, c: 99 },
    name: "Hammer",
    buyerSeller: "buyers",
    likelyDir: "up",
    context: "at support",
    likelyDirCandles: [
      { o: 118, h: 120, l: 114, c: 115 },
      { o: 115, h: 116, l: 108, c: 109 },
      { o: 109, h: 111, l: 102, c: 103 },
      { o: 100, h: 102, l: 85, c: 99 },
    ],
    likelyDirExplanation: "After three bearish candles showing a clear downtrend, the hammer appears. Its long lower wick shows sellers pushed price down sharply, but buyers stepped in and rejected lower prices, closing near the open. This rejection at support—where demand overwhelmed supply—often signals exhaustion of sellers and a likely bounce. Always confirm with the next candle.",
  },
  invertedHammer: {
    candle: { o: 100, h: 115, l: 98, c: 101 },
    name: "Inverted Hammer",
    buyerSeller: "buyers",
    likelyDir: "up",
    context: "after downtrend",
    likelyDirCandles: [
      { o: 125, h: 127, l: 120, c: 121 },
      { o: 121, h: 122, l: 112, c: 113 },
      { o: 113, h: 115, l: 105, c: 106 },
      { o: 100, h: 115, l: 98, c: 101 },
    ],
    likelyDirExplanation: "Following a downtrend (three red candles), the inverted hammer shows a long upper wick—buyers tested higher prices but couldn't hold them. However, the close above open suggests buying pressure is building. At support after a selloff, this often precedes a reversal as buyers gain confidence. Confirm with a green follow-through candle.",
  },
  doji: {
    candle: { o: 100, h: 103, l: 97, c: 100 },
    name: "Doji",
    buyerSeller: "indecision",
    likelyDir: "sideways",
    context: "after strong move",
    likelyDirCandles: [
      { o: 108, h: 110, l: 105, c: 106 },
      { o: 106, h: 108, l: 102, c: 104 },
      { o: 104, h: 106, l: 98, c: 100 },
      { o: 100, h: 103, l: 97, c: 100 },
    ],
    likelyDirExplanation: "Three bearish candles lead into a doji—open and close are nearly equal, meaning buyers and sellers are balanced. After a strong move down, this indecision often signals exhaustion and a potential pause or reversal. Direction is unclear; wait for the next candle to confirm before acting.",
  },
  shootingStar: {
    candle: { o: 100, h: 118, l: 99, c: 99 },
    name: "Shooting Star",
    buyerSeller: "sellers",
    likelyDir: "down",
    context: "at resistance",
    likelyDirCandles: [
      { o: 88, h: 92, l: 85, c: 90 },
      { o: 90, h: 96, l: 88, c: 94 },
      { o: 94, h: 102, l: 92, c: 100 },
      { o: 100, h: 118, l: 99, c: 99 },
    ],
    likelyDirExplanation: "After three bullish candles in an uptrend, the shooting star appears at the top. Its long upper wick shows buyers pushed price high, but sellers aggressively sold into that strength and closed the candle red near the open. This rejection at resistance suggests demand is weakening and price is likely to turn down. Look for confirmation with a red follow-through.",
  },
  marubozuBull: {
    candle: { o: 100, h: 112, l: 100, c: 112 },
    name: "Bullish Marubozu",
    buyerSeller: "buyers",
    likelyDir: "up",
    likelyDirCandles: [
      { o: 120, h: 122, l: 115, c: 116 },
      { o: 116, h: 117, l: 108, c: 109 },
      { o: 109, h: 111, l: 102, c: 103 },
      { o: 100, h: 112, l: 100, c: 112 },
    ],
    likelyDirExplanation: "After a downtrend, the bullish marubozu has no wicks—it opens at the low and closes at the high. This means buyers controlled the entire period with no meaningful selloff. Strong buying pressure after a decline often leads to further upside. Use with trend or support for better odds.",
  },
  marubozuBear: {
    candle: { o: 110, h: 110, l: 98, c: 98 },
    name: "Bearish Marubozu",
    buyerSeller: "sellers",
    likelyDir: "down",
    likelyDirCandles: [
      { o: 85, h: 90, l: 82, c: 88 },
      { o: 88, h: 95, l: 86, c: 93 },
      { o: 93, h: 100, l: 90, c: 98 },
      { o: 110, h: 110, l: 98, c: 98 },
    ],
    likelyDirExplanation: "Following an uptrend, the bearish marubozu opens at the high and closes at the low—sellers dominated without relief. No lower wick means no buying interest. After a rally, this suggests distribution and often leads to lower prices. Confirm at resistance or with the next candle.",
  },
};

// Multi-candle patterns with extended candles for likelyDir (4–6 candles with trend context)
const MULTI_PATTERNS: Record<string, {
  candles: Candle[];
  name: string;
  buyerSeller: "buyers" | "sellers";
  likelyDir: "up" | "down";
  likelyDirCandles?: Candle[];
  likelyDirExplanation?: string;
}> = {
  bullishEngulfing: {
    candles: [
      { o: 105, h: 106, l: 100, c: 101 },
      { o: 99, h: 108, l: 98, c: 107 },
    ],
    name: "Bullish Engulfing",
    buyerSeller: "buyers",
    likelyDir: "up",
    likelyDirCandles: [
      { o: 112, h: 114, l: 108, c: 109 },
      { o: 109, h: 111, l: 104, c: 105 },
      { o: 105, h: 106, l: 100, c: 101 },
      { o: 99, h: 108, l: 98, c: 107 },
    ],
    likelyDirExplanation: "After a downtrend (three red candles), the bullish engulfing forms: the green candle's body fully engulfs the prior red body. This shows buyers overwhelmed sellers—the close above the prior open signals strong buying pressure after a selloff. The engulfing pattern often marks a reversal; price is likely to go up. Best used at support.",
  },
  bearishEngulfing: {
    candles: [
      { o: 99, h: 106, l: 98, c: 105 },
      { o: 106, h: 107, l: 97, c: 96 },
    ],
    name: "Bearish Engulfing",
    buyerSeller: "sellers",
    likelyDir: "down",
    likelyDirCandles: [
      { o: 92, h: 96, l: 88, c: 94 },
      { o: 94, h: 100, l: 92, c: 98 },
      { o: 99, h: 106, l: 98, c: 105 },
      { o: 106, h: 107, l: 97, c: 96 },
    ],
    likelyDirExplanation: "Following an uptrend (three green candles), the bearish engulfing forms: the red candle's body fully engulfs the prior green body. Sellers overwhelmed buyers—the close below the prior open signals strong selling pressure after a rally. This often marks a reversal; price is likely to go down. Best used at resistance.",
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
    likelyDirCandles: [
      { o: 118, h: 120, l: 114, c: 115 },
      { o: 115, h: 116, l: 108, c: 109 },
      { o: 108, h: 110, l: 105, c: 105 },
      { o: 105, h: 106, l: 104, c: 105 },
      { o: 104, h: 110, l: 103, c: 109 },
    ],
    likelyDirExplanation: "After a downtrend (two red candles), the Morning Star forms: (1) large red candle, (2) small indecision candle (doji-like), (3) large green candle closing into the first candle's body. The small middle candle shows sellers losing momentum; the green close confirms buyers taking control. A strong reversal pattern—price is likely to go up.",
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
    likelyDirCandles: [
      { o: 88, h: 92, l: 85, c: 90 },
      { o: 90, h: 98, l: 88, c: 95 },
      { o: 95, h: 102, l: 94, c: 101 },
      { o: 102, h: 103, l: 101, c: 102 },
      { o: 102, h: 103, l: 95, c: 96 },
    ],
    likelyDirExplanation: "After an uptrend (two green candles), the Evening Star forms: (1) large green candle, (2) small indecision candle, (3) large red candle closing into the first candle's body. The small middle candle shows buyers losing momentum; the red close confirms sellers taking control. A strong reversal pattern—price is likely to go down.",
  },
  haramiBull: {
    candles: [
      { o: 108, h: 110, l: 100, c: 101 },
      { o: 100, h: 103, l: 99, c: 102 },
    ],
    name: "Bullish Harami",
    buyerSeller: "buyers",
    likelyDir: "up",
    likelyDirCandles: [
      { o: 118, h: 120, l: 114, c: 115 },
      { o: 115, h: 116, l: 108, c: 109 },
      { o: 108, h: 110, l: 100, c: 101 },
      { o: 100, h: 103, l: 99, c: 102 },
    ],
    likelyDirExplanation: "After a downtrend (two red candles), the Bullish Harami forms: a large red candle followed by a small green candle inside the prior body. The small green body shows sellers losing control and buyers stepping in. Less aggressive than engulfing but still signals a potential reversal—price is likely to go up. Confirm with follow-through.",
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

  // Likely direction (single) — use extended 4–6 candles when available
  singleIds.forEach((id) => {
    const p = SINGLE_PATTERNS[id];
    const options = ["Price likely to go up", "Price likely to go down", "Sideways / unclear"];
    const correctIdx = p.likelyDir === "up" ? 0 : p.likelyDir === "down" ? 1 : 2;
    const candles = p.likelyDirCandles ?? [p.candle];
    q.push({ type: "likelyDir", patternId: id, candles, options, correctIndex: correctIdx, context: p.context });
  });

  // Likely direction (multi) — use extended 4–6 candles when available
  multiIds.forEach((id) => {
    const p = MULTI_PATTERNS[id];
    const options = ["Price likely to go up", "Price likely to go down"];
    const candles = p.likelyDirCandles ?? p.candles;
    q.push({ type: "likelyDir", patternId: id, candles, options, correctIndex: p.likelyDir === "up" ? 0 : 1 });
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

// Candle SVG - renders 1–6 candles with proper scaling
function CandleSvg({ candles, maxHeight = 120 }: { candles: Candle[]; maxHeight?: number }) {
  const allH = candles.flatMap((c) => [c.h, c.l]);
  const globHigh = Math.max(...allH);
  const globLow = Math.min(...allH);
  const range = Math.max(globHigh - globLow, 1);
  const scale = maxHeight / range;
  const n = candles.length;
  const candleWidth = n === 1 ? 40 : n === 2 ? 32 : n <= 4 ? 24 : 20;
  const gap = n <= 2 ? 8 : 6;
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
      const explanation =
        (SINGLE_PATTERNS[q.patternId] as { likelyDirExplanation?: string })?.likelyDirExplanation ??
        (MULTI_PATTERNS[q.patternId] as { likelyDirExplanation?: string })?.likelyDirExplanation;
      if (correct) {
        return explanation
          ? `Correct! ${explanation}`
          : "Correct! Patterns suggest probability, not certainty—always use stops.";
      }
      return explanation
        ? `The answer was "${q.options[correctIndex]}". ${explanation}`
        : `The pattern suggested "${q.options[correctIndex]}". Patterns work best at support/resistance with confirmation.`;
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
