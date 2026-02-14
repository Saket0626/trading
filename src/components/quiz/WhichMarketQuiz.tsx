import { useState } from "react";
import { shuffleIndices } from "../../lib/shuffle";

type Answer = "a" | "b" | "c" | "d";

interface Question {
  q: string;
  options: string[];
  scores: Record<Answer, { stocks: number; forex: number; crypto: number; commodities: number }>;
}

const QUESTIONS: Question[] = [
  {
    q: "How much capital do you have for trading?",
    options: ["Under $1,000", "$1,000 - $10,000", "$10,000 - $25,000", "$25,000+"],
    scores: {
      a: { stocks: 0, forex: 3, crypto: 2, commodities: 0 },
      b: { stocks: 1, forex: 2, crypto: 2, commodities: 1 },
      c: { stocks: 2, forex: 1, crypto: 1, commodities: 2 },
      d: { stocks: 3, forex: 1, crypto: 0, commodities: 2 },
    },
  },
  {
    q: "When can you trade?",
    options: [
      "9:30 AM - 4 PM Eastern only",
      "24/5 (any weekday)",
      "24/7 (including weekends)",
      "Evenings and weekends",
    ],
    scores: {
      a: { stocks: 3, forex: 0, crypto: 0, commodities: 1 },
      b: { stocks: 2, forex: 3, crypto: 2, commodities: 2 },
      c: { stocks: 0, forex: 1, crypto: 3, commodities: 1 },
      d: { stocks: 1, forex: 2, crypto: 3, commodities: 1 },
    },
  },
  {
    q: "What's your risk tolerance?",
    options: [
      "Low - I want steady, slower growth",
      "Medium - I can handle volatility",
      "High - I'm okay with big swings",
      "Very high - I accept total loss",
    ],
    scores: {
      a: { stocks: 2, forex: 0, crypto: 0, commodities: 2 },
      b: { stocks: 2, forex: 2, crypto: 1, commodities: 2 },
      c: { stocks: 1, forex: 2, crypto: 2, commodities: 1 },
      d: { stocks: 0, forex: 1, crypto: 3, commodities: 0 },
    },
  },
  {
    q: "What's your goal?",
    options: [
      "Long-term growth (years)",
      "Swing trades (days/weeks)",
      "Day trading (same day)",
      "Quick speculative gains",
    ],
    scores: {
      a: { stocks: 3, forex: 0, crypto: 0, commodities: 2 },
      b: { stocks: 2, forex: 2, crypto: 1, commodities: 2 },
      c: { stocks: 2, forex: 2, crypto: 1, commodities: 1 },
      d: { stocks: 0, forex: 1, crypto: 3, commodities: 1 },
    },
  },
];

export function WhichMarketQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [done, setDone] = useState(false);
  const [result, setResult] = useState<"stocks" | "forex" | "crypto" | "commodities">("stocks");
  const [optionOrders] = useState(() =>
    QUESTIONS.map((q) => shuffleIndices(q.options.length))
  );

  const q = QUESTIONS[current];
  const order = optionOrders[current] ?? Array.from({ length: q.options.length }, (_, i) => i);

  const handleAnswer = (origIdx: number) => {
    const ans = String.fromCharCode(97 + origIdx) as Answer;
    const newAnswers = [...answers, ans];
    setAnswers(newAnswers);
    if (current + 1 >= QUESTIONS.length) {
      const totals = { stocks: 0, forex: 0, crypto: 0, commodities: 0 };
      newAnswers.forEach((a, i) => {
        Object.entries(QUESTIONS[i].scores[a]).forEach(([k, v]) => {
          totals[k as keyof typeof totals] += v;
        });
      });
      const max = Object.entries(totals).reduce((a, b) => (b[1] > a[1] ? b : a), ["stocks", 0]);
      setResult(max[0] as keyof typeof totals);
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  if (done) {
    const descriptions: Record<string, string> = {
      stocks:
        "Stocks suit you if you have capital ($25k for day trading) and can trade US hours. ETFs offer diversification. Start with paper trading.",
      forex:
        "Forex suits you if you want 24/5 trading with smaller capital. Use LOW leverage. Practice on demo first.",
      crypto:
        "Crypto suits you if you accept extreme risk and want 24/7 trading. Only use money you can afford to lose completely.",
      commodities:
        "Commodities suit you for diversification. ETFs (GLD, USO) are easier than futures. Good inflation hedge.",
    };
    return (
      <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
        <h3 className="font-semibold text-lg mb-4">Your Result</h3>
        <p className="text-xl font-bold text-primary-600 capitalize mb-2">{result}</p>
        <p className="text-surface-600 dark:text-surface-400">{descriptions[result]}</p>
        <button
          onClick={() => {
            setCurrent(0);
            setAnswers([]);
            setDone(false);
          }}
          className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6">
      <p className="text-sm text-surface-500 mb-4">
        Question {current + 1} of {QUESTIONS.length}
      </p>
      <h3 className="font-semibold text-lg mb-4">{q.q}</h3>
      <div className="space-y-2">
        {order.map((origIdx) => (
          <button
            key={origIdx}
            onClick={() => handleAnswer(origIdx)}
            className="w-full text-left p-4 rounded-lg border border-surface-200 dark:border-surface-600 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
          >
            {q.options[origIdx]}
          </button>
        ))}
      </div>
    </div>
  );
}
