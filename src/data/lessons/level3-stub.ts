import type { Lesson } from "../../types";

const stub = (
  id: string,
  moduleId: string,
  order: number,
  title: string,
  slug: string,
  content: string
): Lesson => ({
  id,
  title,
  slug,
  level: 3,
  moduleId,
  order,
  duration: "10 min",
  objectives: ["Learn the fundamentals"],
  content: [
    {
      type: "text",
      heading: "Coming Soon",
      content: `This lesson is under development. ${content} We're building out the full curriculum. Check back soon or explore the Level 1 and 2 content.`,
    },
  ],
  hasQuiz: false,
});

export const level3StubLessons: Lesson[] = [
  stub("day-trading-intro", "day-trading-fundamentals", 1, "What is Day Trading?", "day-trading-intro", "Day trading means opening and closing all positions within the same day."),
  stub("day-trader-mindset", "day-trading-fundamentals", 2, "Day Trader Mindset", "day-trader-mindset", "Day trading requires discipline, focus, and emotional control."),
  stub("moving-averages", "technical-analysis", 1, "Moving Averages", "moving-averages", "SMA and EMA - trend following indicators."),
  stub("momentum-indicators", "technical-analysis", 2, "RSI, MACD, Stochastic", "momentum-indicators", "Momentum indicators show overbought/oversold."),
  stub("chart-patterns", "technical-analysis", 3, "Chart Patterns", "chart-patterns", "Head and shoulders, double top, triangles."),
  stub("position-sizing", "risk-management", 1, "Position Sizing", "position-sizing", "The 1% rule and Kelly Criterion."),
  stub("stop-losses", "risk-management", 2, "Stop Loss Placement", "stop-losses", "Technical stops, ATR-based stops."),
  stub("risk-mistakes", "risk-management", 3, "Common Risk Mistakes", "risk-mistakes", "Averaging down, overtrading, no stops."),
  stub("financial-statements", "fundamental-analysis", 1, "Income Statement, Balance Sheet", "financial-statements", "Reading company financials."),
  stub("key-ratios", "fundamental-analysis", 2, "P/E, P/B, ROE", "key-ratios", "Key valuation ratios."),
  stub("earnings-trading", "fundamental-analysis", 3, "Trading Around Earnings", "earnings-trading", "Risks and opportunities of earnings."),
  stub("psychology-basics", "trading-psychology", 1, "Emotional Control", "psychology-basics", "Fear, greed, discipline."),
  stub("cognitive-biases", "trading-psychology", 2, "Cognitive Biases", "cognitive-biases", "Confirmation bias, anchoring, recency."),
  stub("trading-journal", "trading-psychology", 3, "Trading Journal", "trading-journal", "Why and how to journal."),
  stub("trading-plan-intro", "trading-plan", 1, "Building a Trading Plan", "trading-plan-intro", "Define your style, rules, review process."),
  stub("plan-template", "trading-plan", 2, "Trading Plan Template", "plan-template", "A template to build your plan."),
  stub("orb-strategy", "day-trading-strategies", 1, "Opening Range Breakout", "orb-strategy", "ORB strategy for day trading."),
  stub("vwap-strategy", "day-trading-strategies", 2, "VWAP Trading", "vwap-strategy", "Trading around VWAP."),
  stub("breakout-strategy", "day-trading-strategies", 3, "Breakout Trading", "breakout-strategy", "Trading breakouts from consolidation."),
  stub("broker-criteria", "broker-selection", 1, "What to Look For", "broker-criteria", "Regulation, fees, platform."),
  stub("demo-practice", "broker-selection", 2, "Demo Account Practice", "demo-practice", "Paper trade before going live."),
  stub("order-types", "market-mechanics", 1, "Market, Limit, Stop Orders", "order-types", "Order types explained."),
  stub("order-execution", "market-mechanics", 2, "How Orders Get Filled", "order-execution", "Execution, slippage, liquidity."),
  stub("costs-overview", "trading-costs", 1, "Commissions and Fees", "costs-overview", "Understanding trading costs."),
  stub("tax-implications", "trading-costs", 2, "Tax Implications", "tax-implications", "Capital gains, wash sale rule."),
  stub("profitability", "trading-costs", 3, "Break-Even and Profitability", "profitability", "Realistic expectations."),
];
