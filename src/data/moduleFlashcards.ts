import type { Flashcard } from "../components/learn/Flashcards";

export const MODULE_FLASHCARDS: Record<string, Flashcard[]> = {
  "what-is-money": [
    { front: "What gives money its value?", back: "Scarcity, acceptability, and trust in the issuing authority. Fiat money has value because people agree to use it." },
    { front: "What is supply and demand?", back: "Supply = how much is available. Demand = how much people want. Price moves to balance them." },
    { front: "What is a market?", back: "A place or system where buyers and sellers exchange goods, services, or assets." },
  ],
  "candlestick-mastery": [
    { front: "What do the four parts of a candlestick represent?", back: "Open, High, Low, Close (OHLC). Body shows open-close range; wicks show high-low." },
    { front: "What does a green candle mean?", back: "Close > Open. Buyers won for that period." },
    { front: "What is a Doji?", back: "Open ≈ Close. Small or no body. Indicates indecision." },
  ],
  "support-and-resistance": [
    { front: "What is support?", back: "A price level where buying tends to step in and stop declines." },
    { front: "What is resistance?", back: "A price level where selling tends to step in and cap rallies." },
    { front: "What is role reversal?", back: "When broken support becomes resistance (or vice versa)." },
  ],
  "risk-management": [
    { front: "What is position sizing?", back: "Determining how many shares or lots to trade based on your risk per trade." },
    { front: "What is the 1% rule?", back: "Risk no more than 1% of account per trade. Protects capital." },
    { front: "What is a stop loss?", back: "A predetermined price at which you exit a losing trade to limit loss." },
  ],
  "momentum-indicators": [
    { front: "What does RSI measure?", back: "Relative strength. Overbought >70, oversold <30. Momentum indicator." },
    { front: "What is MACD?", back: "Moving Average Convergence Divergence. Shows trend and momentum via two lines and histogram." },
  ],
  "trading-psychology": [
    { front: "What is FOMO?", back: "Fear Of Missing Out. Chasing trades. Often leads to bad entries." },
    { front: "What is revenge trading?", back: "Trading to recover losses quickly. Emotional, usually leads to more losses." },
  ],
  options: [
    { front: "What is a call option?", back: "Right to buy at strike price by expiry. Bullish bet." },
    { front: "What is a put option?", back: "Right to sell at strike price by expiry. Bearish or protective bet." },
  ],
  "backtesting": [
    { front: "What is backtesting?", back: "Testing a strategy on historical data to see how it would have performed." },
    { front: "What is overfitting?", back: "Strategy too tuned to past data. Fails on new data. Avoid curve-fitting." },
  ],
  default: [
    { front: "What did you learn in this module?", back: "Review the lessons and key takeaways. Practice with the flashcards!" },
  ],
};

export function getFlashcardsForModule(moduleSlug: string): Flashcard[] {
  return MODULE_FLASHCARDS[moduleSlug] || MODULE_FLASHCARDS.default;
}
