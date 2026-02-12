import type { Lesson } from "../../types";

const stub4 = (
  id: string,
  moduleId: string,
  order: number,
  title: string,
  slug: string
): Lesson => ({
  id,
  title,
  slug,
  level: 4,
  moduleId,
  order,
  duration: "10 min",
  objectives: ["Learn the fundamentals"],
  content: [
    {
      type: "text",
      heading: "Coming Soon",
      content:
        "This lesson is under development. We're building out the full curriculum. Complete Level 1-3 first, then check back.",
    },
  ],
  hasQuiz: false,
});

const stub5 = (
  id: string,
  moduleId: string,
  order: number,
  title: string,
  slug: string
): Lesson => ({
  id,
  title,
  slug,
  level: 5,
  moduleId,
  order,
  duration: "15 min",
  objectives: ["Learn quantitative concepts"],
  content: [
    {
      type: "text",
      heading: "Coming Soon",
      content:
        "This lesson is under development. Quantitative trading requires programming. We're building Python sandbox integration. Complete Levels 1-4 first.",
    },
  ],
  hasQuiz: false,
});

export const level4StubLessons: Lesson[] = [
  stub4("options-basics", "options-trading", 1, "Calls and Puts", "options-basics"),
  stub4("options-greeks", "options-trading", 2, "The Greeks", "options-greeks"),
  stub4("options-strategies", "options-trading", 3, "Basic Options Strategies", "options-strategies"),
  stub4("futures-basics", "derivatives", 1, "Futures Contracts", "futures-basics"),
  stub4("leverage-margin", "derivatives", 2, "Leverage and Margin", "leverage-margin"),
  stub4("mpt-basics", "portfolio-theory", 1, "Modern Portfolio Theory", "mpt-basics"),
  stub4("diversification", "portfolio-theory", 2, "Diversification", "diversification"),
  stub4("rebalancing", "portfolio-theory", 3, "Rebalancing", "rebalancing"),
  stub4("fibonacci", "advanced-technical", 1, "Fibonacci Retracements", "fibonacci"),
  stub4("elliott-wave", "advanced-technical", 2, "Elliott Wave", "elliott-wave"),
  stub4("wyckoff", "advanced-technical", 3, "Wyckoff Method", "wyckoff"),
  stub4("intermarket-basics", "intermarket-analysis", 1, "How Markets Relate", "intermarket-basics"),
  stub4("vix-fear", "intermarket-analysis", 2, "VIX and Fear", "vix-fear"),
];

export const level5StubLessons: Lesson[] = [
  stub5("python-basics", "python-trading", 1, "Python for Finance", "python-basics"),
  stub5("python-data", "python-trading", 2, "Getting Market Data", "python-data"),
  stub5("first-strategy", "python-trading", 3, "Your First Strategy", "first-strategy"),
  stub5("data-sources", "data-acquisition", 1, "Data Sources", "data-sources"),
  stub5("data-cleaning", "data-acquisition", 2, "Data Cleaning", "data-cleaning"),
  stub5("backtest-basics", "backtesting", 1, "Backtesting Fundamentals", "backtest-basics"),
  stub5("backtest-pitfalls", "backtesting", 2, "Avoiding Bias", "backtest-pitfalls"),
  stub5("walk-forward", "backtesting", 3, "Walk-Forward Analysis", "walk-forward"),
  stub5("mean-reversion", "quant-strategies", 1, "Mean Reversion", "mean-reversion"),
  stub5("momentum-strategies", "quant-strategies", 2, "Momentum Strategies", "momentum-strategies"),
  stub5("pairs-trading", "quant-strategies", 3, "Pairs Trading", "pairs-trading"),
  stub5("ml-overview", "ml-trading", 1, "ML for Trading Overview", "ml-overview"),
  stub5("feature-engineering", "ml-trading", 2, "Feature Engineering", "feature-engineering"),
  stub5("overfitting", "ml-trading", 3, "Avoiding Overfitting", "overfitting"),
  stub5("sharpe-sortino", "risk-metrics", 1, "Sharpe and Sortino", "sharpe-sortino"),
  stub5("drawdown-analysis", "risk-metrics", 2, "Drawdown Analysis", "drawdown-analysis"),
  stub5("monte-carlo", "risk-metrics", 3, "Monte Carlo Simulation", "monte-carlo"),
  stub5("automation-workflow", "automated-systems", 1, "Automation Workflow", "automation-workflow"),
  stub5("paper-automation", "automated-systems", 2, "Paper Trading Automation", "paper-automation"),
  stub5("live-deployment", "automated-systems", 3, "Live Deployment", "live-deployment"),
];
