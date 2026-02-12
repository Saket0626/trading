import type { Lesson } from "../../types";

const createLesson = (
  id: string,
  moduleId: string,
  order: number,
  title: string,
  slug: string,
  duration: string,
  objectives: string[],
  content: Lesson["content"],
  hasQuiz = true
): Lesson => ({
  id,
  title,
  slug,
  level: 2,
  moduleId,
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level2RemainingLessons: Lesson[] = [
  // Forex
  createLesson(
    "forex-basics",
    "markets-forex",
    1,
    "What is Forex Trading?",
    "forex-basics",
    "12 min",
    ["Understand currency pairs", "Learn pips and lots", "See how forex works 24/5"],
    [
      {
        type: "text",
        heading: "Why Does This Matter?",
        content:
          "Forex (foreign exchange) is the largest market in the world by volume—trillions trade daily. It's open 24 hours, 5 days a week. Understanding forex is essential for any trader.",
      },
      {
        type: "text",
        heading: "Currency Pairs",
        content:
          "Forex trades currency PAIRS—e.g., EUR/USD (Euro vs US Dollar). When you buy EUR/USD, you buy euros and sell dollars. The price is how many dollars you need for one euro. Major pairs: EUR/USD, GBP/USD, USD/JPY.",
      },
      {
        type: "text",
        heading: "Pips and Lots",
        content:
          "A PIP (percentage in point) is the smallest price move—usually the 4th decimal (0.0001 for EUR/USD). A LOT is the contract size. 1 standard lot = 100,000 units. Mini lot = 0.1 lots = 10,000. Micro = 0.01 lots = 1,000.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Forex = currency pairs. Buy EUR/USD = buy euros, sell dollars. Pips measure movement. Lots determine position size. Forex never sleeps—24/5.",
      },
    ]
  ),
  createLesson(
    "forex-sessions",
    "markets-forex",
    2,
    "Forex Trading Sessions",
    "forex-sessions",
    "8 min",
    ["Understand Asian, European, American sessions", "See when liquidity is highest"],
    [
      {
        type: "text",
        heading: "Trading Sessions",
        content:
          "Forex has three main sessions: Asian (Tokyo), European (London), American (New York). Sessions overlap—London + New York overlap has highest volume. Asian session is often quieter.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Trade when sessions overlap for best liquidity. London-NY overlap = most action.",
      },
    ]
  ),
  createLesson(
    "forex-risks",
    "markets-forex",
    3,
    "Forex Risks",
    "forex-risks",
    "10 min",
    ["Understand leverage dangers", "Learn forex-specific risks"],
    [
      {
        type: "warning",
        heading: "Leverage Danger",
        content:
          "Forex brokers offer high leverage (50:1, 100:1, even 500:1). Leverage amplifies BOTH gains and losses. With 100:1, a 1% move against you wipes your account. Most beginners over-leverage and blow up.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Use low leverage. Risk 1% per trade. Forex rewards discipline—punishes greed.",
      },
    ]
  ),
  // Commodities
  createLesson(
    "commodities-basics",
    "markets-commodities",
    1,
    "What Are Commodities?",
    "commodities-basics",
    "10 min",
    ["Understand hard vs soft commodities", "Learn how commodity markets work"],
    [
      {
        type: "text",
        heading: "Hard vs Soft Commodities",
        content:
          "HARD: Gold, silver, oil, natural gas, copper—mined or extracted. SOFT: Wheat, coffee, cotton, sugar—agricultural. Commodities are raw materials. Prices move on supply, demand, weather, geopolitics.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Commodities = raw materials. Hard = mined. Soft = grown. Supply/demand driven.",
      },
    ]
  ),
  createLesson(
    "commodity-factors",
    "markets-commodities",
    2,
    "Commodity Price Factors",
    "commodity-factors",
    "8 min",
    ["Understand what moves commodity prices"],
    [
      {
        type: "text",
        heading: "What Moves Commodities",
        content:
          "Weather (drought = wheat up), geopolitics (oil supply), USD strength (gold often inverse to dollar), inflation (gold as hedge), seasons (natural gas in winter).",
      },
    ]
  ),
  createLesson(
    "commodity-trading",
    "markets-commodities",
    3,
    "Trading Commodities",
    "commodity-trading",
    "8 min",
    ["ETFs vs futures", "Best commodities for beginners"],
    [
      {
        type: "text",
        heading: "How to Trade Commodities",
        content:
          "FUTURES: direct exposure, high leverage, complex. ETFs: easier—e.g., GLD (gold), USO (oil). ETFs track commodity prices without futures complexity. Good for beginners.",
      },
    ]
  ),
  // Stocks
  createLesson(
    "stocks-etfs",
    "markets-stocks",
    1,
    "Stocks vs ETFs vs Index Funds",
    "stocks-etfs",
    "12 min",
    ["Understand differences", "When to use each"],
    [
      {
        type: "text",
        heading: "Individual Stocks",
        content:
          "Own a piece of one company. Higher risk, higher potential return. Company-specific risk (earnings, management). Diversification requires many stocks.",
      },
      {
        type: "text",
        heading: "ETFs and Index Funds",
        content:
          "ETF = basket of stocks. S&P 500 ETF = 500 companies in one trade. Diversification built-in. Lower risk, lower potential return. Good for beginners.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Stocks = single company. ETFs = basket. ETFs = diversification in one trade.",
      },
    ]
  ),
  createLesson(
    "stock-types",
    "markets-stocks",
    2,
    "Types of Stocks",
    "stock-types",
    "10 min",
    ["Blue chip, growth, value", "Dividend stocks"],
    [
      {
        type: "text",
        heading: "Stock Classifications",
        content:
          "BLUE CHIP: Large, stable (Apple, Microsoft). GROWTH: High growth, little/no dividend. VALUE: Undervalued by metrics. DIVIDEND: Pay regular income. PENNY: Under $5, high risk.",
      },
    ]
  ),
  createLesson(
    "stock-trading",
    "markets-stocks",
    3,
    "Stock Trading Basics",
    "stock-trading",
    "8 min",
    ["Market hours", "Pre/post market"],
    [
      {
        type: "text",
        heading: "Market Hours",
        content:
          "US stocks: 9:30 AM - 4:00 PM Eastern. PRE-MARKET: 4 AM - 9:30 AM. AFTER-HOURS: 4 PM - 8 PM. Extended hours have lower liquidity, wider spreads.",
      },
    ]
  ),
  // Crypto
  createLesson(
    "crypto-basics",
    "markets-crypto",
    1,
    "What is Cryptocurrency?",
    "crypto-basics",
    "12 min",
    ["Understand Bitcoin, Ethereum", "How crypto markets work"],
    [
      {
        type: "text",
        heading: "Digital Assets",
        content:
          "Cryptocurrency = digital money on blockchain. Bitcoin = first, largest. Ethereum = smart contracts. Crypto markets trade 24/7—never close. Highly volatile.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Crypto = digital, decentralized. 24/7. Volatile. High risk.",
      },
    ]
  ),
  createLesson(
    "crypto-risks",
    "markets-crypto",
    2,
    "Crypto Risks",
    "crypto-risks",
    "10 min",
    ["Understand crypto-specific risks"],
    [
      {
        type: "warning",
        heading: "Crypto Risks",
        content:
          "Extreme volatility (50% drops happen). Regulatory uncertainty. Exchange risk (hacks, fraud). No FDIC. Only invest what you can afford to lose completely.",
      },
    ]
  ),
  createLesson(
    "crypto-trading",
    "markets-crypto",
    3,
    "Trading Crypto",
    "crypto-trading",
    "8 min",
    ["Exchanges", "Best practices"],
    [
      {
        type: "text",
        heading: "How to Trade Crypto",
        content:
          "Use regulated exchanges. Never leave large amounts on exchange—move to wallet. Start small. Crypto can go to zero.",
      },
    ]
  ),
  // Market comparison
  createLesson(
    "market-comparison",
    "market-comparison",
    1,
    "Comparing Markets",
    "market-comparison",
    "15 min",
    ["Capital requirements", "Time commitment", "Volatility"],
    [
      {
        type: "text",
        heading: "Capital Requirements",
        content:
          "Stocks: $25k for day trading (PDT). Forex: $100-500 to start (high leverage). Crypto: $100+. Commodities: $1000+ for futures.",
      },
      {
        type: "text",
        heading: "Which Market For You?",
        content:
          "Stocks: if you have $25k+ and can trade 9:30-4. Forex: if you want 24/5, small capital. Crypto: if you accept extreme risk. Commodities: for diversification.",
      },
    ]
  ),
  createLesson(
    "which-market-quiz",
    "market-comparison",
    2,
    "Which Market Should You Start With?",
    "which-market-quiz",
    "5 min",
    ["Take the interactive quiz"],
    [
      {
        type: "interactive",
        heading: "Find Your Market",
        content:
          "Take the quiz below to get a recommendation based on your capital, time, and risk tolerance.",
        component: "WhichMarketQuiz",
      },
    ],
    false
  ),
  // Chart foundations
  createLesson(
    "chart-types",
    "chart-foundations",
    1,
    "Chart Types: Line, Bar, Candlestick",
    "chart-types",
    "10 min",
    ["Compare chart types", "When to use each"],
    [
      {
        type: "text",
        heading: "Three Main Chart Types",
        content:
          "LINE: Close prices only. Simple trend view. BAR: OHLC as vertical bar with ticks. CANDLESTICK: OHLC as body + wicks. Most popular—shows open, high, low, close in one candle.",
      },
    ]
  ),
  createLesson(
    "support-resistance",
    "chart-foundations",
    2,
    "Support and Resistance",
    "support-resistance",
    "12 min",
    ["Define support and resistance", "How to identify them"],
    [
      {
        type: "text",
        heading: "Support and Resistance",
        content:
          "SUPPORT: Price level where buying tends to emerge. Price bounces up. RESISTANCE: Level where selling emerges. Price bounces down. Previous highs/lowals become future S/R.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Support = floor. Resistance = ceiling. Price tends to respect these levels.",
      },
    ]
  ),
  createLesson(
    "trends",
    "chart-foundations",
    3,
    "Trend Identification",
    "trends",
    "10 min",
    ["Uptrend, downtrend", "Higher highs, higher lows"],
    [
      {
        type: "text",
        heading: "Trends",
        content:
          "UPTREND: Higher highs, higher lows. Price making new highs. DOWNTREND: Lower highs, lower lows. SIDEWAYS: Range-bound. Don't fight the trend.",
      },
    ]
  ),
];
