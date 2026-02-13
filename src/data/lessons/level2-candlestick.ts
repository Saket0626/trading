import type { Lesson } from "../../types";

export const candlestickLessons: Lesson[] = [
  {
    id: "candlestick-anatomy",
    title: "What Are Candlesticks and Why Do We Use Them?",
    slug: "candlestick-anatomy",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 1,
    duration: "12 min",
    objectives: [
      "Understand the history of candlestick charts",
      "Learn the anatomy: body, wicks, OHLC",
      "See how one candle shows open, high, low, close",
    ],
    prerequisites: [],
    content: [
      {
        type: "text",
        heading: "Why Does This Matter?",
        content:
          "Candlestick charts are the most popular way to view price action in trading. They pack more information into each 'candle' than a simple line chart. Understanding candlesticks is essential—they're the language of price.",
      },
      {
        type: "text",
        heading: "A Brief History",
        content:
          "Candlestick charts originated in Japan in the 18th century. Rice traders used them to track price movements. A Japanese businessman named Munehisa Homma is credited with developing the system. In the 1990s, Steve Nison introduced them to the Western world, and they've dominated trading ever since.",
      },
      {
        type: "text",
        heading: "OHLC: The Four Key Prices",
        content:
          "Every candle shows four prices: Open (where price started), High (highest point reached), Low (lowest point reached), and Close (where price ended). That's why you'll see 'OHLC' data—these four numbers tell the story of what happened in that time period.",
      },
      {
        type: "text",
        heading: "Body and Wicks (Shadows)",
        content:
          "The BODY is the thick part—it shows the range between Open and Close. If close > open, the body is typically green (bullish). If close < open, the body is typically red (bearish). The WICKS (or shadows) are the thin lines above and below the body—they show how far price went beyond the open/close. The upper wick = high. The lower wick = low.",
      },
      {
        type: "interactive",
        heading: "Try It: Build Your Own Candle",
        content:
          "Use the candlestick builder below. Drag the sliders to change Open, High, Low, and Close. Watch how the candle shape changes. Try creating a Hammer (long lower wick, small body at top) or a Doji (open and close nearly equal).",
        component: "CandlestickBuilder",
      },
      {
        type: "analogy",
        heading: "Think of a Candle Like a Battle",
        content:
          "The body shows who won the battle (buyers or sellers) in that time period. A tall green body = buyers dominated. A tall red body = sellers dominated. The wicks show the fighting—a long lower wick means sellers pushed price down, but buyers fought back and closed higher. That's a sign of buyer strength!",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Each candlestick tells a story: Open, High, Low, Close. The body shows the battle between buyers and sellers. The wicks show rejected price levels. Master reading one candle before looking at patterns.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "single-candles",
    title: "Reading Individual Candles",
    slug: "single-candles",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 2,
    duration: "15 min",
    objectives: [
      "Identify bullish vs bearish candles",
      "Understand body size (strength) and wick length",
      "Recognize Doji, Hammer, Shooting Star, Marubozu",
    ],
    prerequisites: ["candlestick-anatomy"],
    content: [
      {
        type: "text",
        heading: "Bullish vs Bearish",
        content:
          "A BULLISH (green/white) candle: close > open. Buyers were in control—price went up during the period. A BEARISH (red/black) candle: close < open. Sellers were in control—price went down. The color tells you who won that time period at a glance.",
      },
      {
        type: "text",
        heading: "Body Size = Strength",
        content:
          "A long body means strong conviction. Buyers or sellers dominated. A small body means indecision—the open and close were close together. Big moves create big bodies. Choppy, sideways action creates small bodies.",
      },
      {
        type: "text",
        heading: "Wicks Show Rejection",
        content:
          "A long upper wick: price went up but was rejected—sellers pushed it back down. A long lower wick: price went down but was rejected—buyers stepped in. Wicks at key levels often signal reversals. A long lower wick after a downtrend can mean buyers are defending.",
      },
      {
        type: "text",
        heading: "Key Single-Candle Patterns",
        content:
          "DOJI: open = close (or very close). Small or no body. Indecision. HAMMER: long lower wick, small body at top. Bullish reversal signal—sellers pushed down, buyers recovered. SHOOTING STAR: long upper wick, small body at bottom. Bearish reversal—buyers pushed up, sellers rejected. MARUBOZU: no wicks, full body. Strong momentum in one direction.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What does a long lower wick tell you?",
        component: "ConceptCheck",
        props: { question: "What does a long lower wick tell you?", reveal: "Buyers rejected lower prices—price dipped but was pushed back up by the close. At support or after a downtrend it can signal potential bullish reversal." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Body = who won (buyers/sellers) and how strongly. Wicks = where price was rejected. Doji = indecision. Hammer = potential bullish reversal. Shooting star = potential bearish reversal. Always confirm with context (trend, support/resistance).",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "candlestick-patterns",
    title: "Multi-Candle Patterns",
    slug: "candlestick-patterns",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 3,
    duration: "18 min",
    objectives: [
      "Learn engulfing, piercing line, morning star",
      "Understand pattern reliability and confirmation",
      "Know when patterns work best",
    ],
    prerequisites: ["single-candles"],
    content: [
      {
        type: "text",
        heading: "Two-Candle Patterns",
        content:
          "BULLISH ENGULFING: A red candle followed by a larger green candle whose body completely 'engulfs' the previous body. Buyers overwhelmed sellers. BEARISH ENGULFING: Opposite—green then red, with red engulfing. PIERCING LINE: Red candle, then green opens lower but closes above the midpoint of the red body. Bullish reversal signal.",
      },
      {
        type: "text",
        heading: "Three-Candle Patterns",
        content:
          "MORNING STAR: Three candles. First: large red. Second: small body (indecision). Third: large green that closes well into the first candle's body. Bullish reversal. EVENING STAR: Opposite—end of uptrend, bearish reversal. THREE WHITE SOLDIERS: Three consecutive green candles with higher closes. Strong bullish momentum.",
      },
      {
        type: "warning",
        heading: "Patterns Aren't Magic",
        content:
          "Candlestick patterns don't work in isolation. They're more reliable at support/resistance, in strong trends, or with volume confirmation. A bullish engulfing in the middle of a downtrend with no support nearby is weak. Always consider context. Many patterns fail—use stop losses.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "When is a bullish engulfing pattern stronger?",
        component: "ConceptCheck",
        props: { question: "When is a bullish engulfing pattern stronger?", reveal: "When it appears at support, in an uptrend (as a pullback), or with high volume. In the middle of a downtrend with no support, it's weak." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Multi-candle patterns show shifts in momentum. Engulfing = one side overwhelmed the other. Morning/Evening Star = reversal after indecision. Use patterns with trend, support/resistance, and volume. Never rely on patterns alone.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "timeframes",
    title: "Time Frames and What They Mean",
    slug: "timeframes",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 4,
    duration: "10 min",
    objectives: [
      "Understand 1m, 5m, 15m, 1h, 4h, daily, weekly",
      "See how the same asset looks on different timeframes",
      "Learn multiple timeframe analysis",
    ],
    prerequisites: ["candlestick-patterns"],
    content: [
      {
        type: "text",
        heading: "What is a Timeframe?",
        content:
          "Each candle represents a fixed period. A 1-minute candle = 1 minute of trading. A daily candle = one full trading day. A 5-minute chart shows 5-minute candles. Shorter timeframes = more detail, more noise. Longer timeframes = bigger picture, less noise.",
      },
      {
        type: "text",
        heading: "Same Price, Different Story",
        content:
          "The same asset can look very different on different timeframes. On a 1-minute chart, you might see a sharp drop. On a daily chart, that same drop might be a tiny wick. Day traders use 1m, 5m, 15m. Swing traders use 1h, 4h, daily. Position traders use daily, weekly.",
      },
      {
        type: "text",
        heading: "Multiple Timeframe Analysis",
        content:
          "Many traders use a top-down approach: Check the higher timeframe (e.g., daily) for the overall trend. Then drop to a lower timeframe (e.g., 4h or 1h) for entries. Trade in the direction of the higher timeframe. This aligns your trades with the bigger picture.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why match timeframe to trading style?",
        component: "ConceptCheck",
        props: { question: "Why match timeframe to trading style?", reveal: "Day traders need short timeframes (1m–15m) to see intraday setups. Swing traders use 1h–daily. Using the wrong timeframe means you either miss detail or see too much noise." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Timeframe = how much time each candle represents. Shorter = more detail, more noise. Longer = bigger picture. Use multiple timeframes: higher for trend, lower for entries. Match your timeframe to your trading style.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "market-psychology",
    title: "What Candles Tell You About Market Psychology",
    slug: "market-psychology",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 5,
    duration: "10 min",
    objectives: [
      "Connect candle structure to buyer/seller behavior",
      "Understand supply and demand in candle form",
      "See how volume confirms candle signals",
    ],
    prerequisites: ["timeframes"],
    content: [
      {
        type: "text",
        heading: "Candles = Psychology in Action",
        content:
          "Every candle reflects the collective decisions of buyers and sellers. A long green body with high volume = strong buying conviction. A long upper wick after a rally = sellers stepped in, buyers couldn't hold the high. You're reading the 'votes' of the market in real-time.",
      },
      {
        type: "text",
        heading: "Supply and Demand",
        content:
          "At support, long lower wicks = demand (buyers) absorbing supply (sellers). Price drops, buyers step in, price recovers. At resistance, long upper wicks = supply overwhelming demand. Price rises, sellers step in, price falls. Candles make supply and demand visible.",
      },
      {
        type: "text",
        heading: "Volume Confirmation",
        content:
          "A bullish engulfing with high volume is stronger than one with low volume. Volume shows conviction. Big moves on big volume = real. Big moves on low volume = suspect, might reverse. Always consider volume with candle patterns.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What do long bodies and long wicks tell you about psychology?",
        component: "ConceptCheck",
        props: { question: "What do long bodies and long wicks tell you about psychology?", reveal: "Long body = strong conviction (buyers or sellers dominated). Long wicks = rejection—price tried to go there but was pushed back. Together they show who's in control and where price was refused." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Candles are a window into market psychology. Long bodies = conviction. Long wicks = rejection. At key levels, candles show who's winning—buyers or sellers. Use volume to confirm. You're reading the story the market is telling.",
      },
    ],
    hasQuiz: true,
  },
];
