import type { QuizQuestion } from "../../types";

export const level2Quizzes: Record<string, QuizQuestion[]> = {
  "candlestick-anatomy": [
    {
      id: "q1",
      question: "What does OHLC stand for?",
      options: [
        "Open, High, Low, Close",
        "Order, Hold, Limit, Cancel",
        "Option, Hedge, Leverage, Capital",
        "Over, High, Low, Under",
      ],
      correctIndex: 0,
      explanation:
        "OHLC = Open, High, Low, Close. These are the four key prices each candlestick displays. Open is where price started, High is the peak, Low is the trough, Close is where it ended.",
    },
    {
      id: "q2",
      question: "What does the body of a candlestick represent?",
      options: [
        "The high and low of the period",
        "The range between open and close",
        "Volume",
        "Time",
      ],
      correctIndex: 1,
      explanation:
        "The body shows the range between the open and close prices. The wicks (shadows) extend to the high and low. A thick body means a significant move between open and close.",
    },
  ],
  "single-candles": [
    {
      id: "q1",
      question: "A candle with a long lower wick and small body at the top is called:",
      options: ["Shooting Star", "Hammer", "Doji", "Marubozu"],
      correctIndex: 1,
      explanation:
        "A Hammer has a long lower wick and small body at the top. It suggests sellers pushed price down but buyers recovered—a potential bullish reversal signal. It 'hammers out' a bottom.",
    },
    {
      id: "q2",
      question: "A Doji candle typically indicates:",
      options: [
        "Strong bullish momentum",
        "Strong bearish momentum",
        "Indecision (buyers and sellers balanced)",
        "High volume",
      ],
      correctIndex: 2,
      explanation:
        "A Doji has a very small or nonexistent body (open ≈ close). It indicates indecision—neither buyers nor sellers could take control. Often appears at potential reversal points.",
    },
  ],
  "candlestick-patterns": [
    {
      id: "q1",
      question: "In a bullish engulfing pattern, what happens?",
      options: [
        "A small red candle is followed by a larger green candle whose body completely covers the red body",
        "Two small candles appear",
        "A green candle is followed by a red candle",
        "Three identical candles appear",
      ],
      correctIndex: 0,
      explanation:
        "Bullish engulfing: first a red candle, then a green candle whose body completely 'engulfs' the previous red body. It signals buyers have overwhelmed the prior selling pressure.",
    },
    {
      id: "q2",
      question: "Candlestick patterns are most reliable when:",
      options: [
        "Used in isolation",
        "At random price levels",
        "At support/resistance with trend and volume confirmation",
        "On 1-minute charts only",
      ],
      correctIndex: 2,
      explanation:
        "Patterns work best with context: at key support/resistance levels, in line with the trend, and with volume confirmation. Isolated patterns fail more often.",
    },
  ],
  "timeframes": [
    {
      id: "q1",
      question: "A daily candlestick represents:",
      options: [
        "1 minute of trading",
        "1 hour of trading",
        "One full trading day",
        "One week of trading",
      ],
      correctIndex: 2,
      explanation:
        "A daily candle shows the open, high, low, and close for one full trading day. Each candle = one day of price action.",
    },
    {
      id: "q2",
      question: "Multiple timeframe analysis typically suggests:",
      options: [
        "Only trade the 1-minute chart",
        "Use higher timeframe for trend, lower for entries",
        "Ignore higher timeframes",
        "Use the same timeframe for everything",
      ],
      correctIndex: 1,
      explanation:
        "Top-down approach: determine trend on higher timeframe (e.g., daily), then use lower timeframe (e.g., 4h or 1h) for precise entry. Trade with the bigger picture.",
    },
  ],
  "market-psychology": [
    {
      id: "q1",
      question: "A long upper wick after a price rally often indicates:",
      options: [
        "Buyers are strong",
        "Sellers rejected higher prices",
        "Volume is low",
        "Support was broken",
      ],
      correctIndex: 1,
      explanation:
        "A long upper wick means price went up but was pushed back down. Sellers stepped in and rejected the higher prices. It can signal potential weakness or reversal.",
    },
    {
      id: "q2",
      question: "Volume confirmation with a bullish candle pattern means:",
      options: [
        "Volume is irrelevant",
        "High volume makes the pattern stronger/more reliable",
        "Low volume is better",
        "Volume only matters for stocks",
      ],
      correctIndex: 1,
      explanation:
        "High volume with a bullish pattern shows strong conviction—many participants agreed with the move. Low volume suggests weak participation and the pattern may be less reliable.",
    },
  ],
};
