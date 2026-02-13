import type { Lesson } from "../../types";

const stub4 = (
  id: string,
  moduleId: string,
  order: number,
  title: string,
  slug: string,
  question: string,
  reveal: string
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
    { type: "text", heading: "Coming Soon", content: "This lesson is under development. We're building out the full curriculum. Complete Level 1-3 first, then check back." },
    { type: "interactive", heading: "Think Ahead", content: "Preview the topic.", component: "ConceptCheck", props: { question, reveal } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Full Level 4 content coming soon. Master Levels 1–3 first." },
  ],
  hasQuiz: false,
});

const stub5 = (
  id: string,
  moduleId: string,
  order: number,
  title: string,
  slug: string,
  question: string,
  reveal: string
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
    { type: "text", heading: "Coming Soon", content: "This lesson is under development. Quantitative trading requires programming. We're building Python sandbox integration. Complete Levels 1-4 first." },
    { type: "interactive", heading: "Think Ahead", content: "Preview the topic.", component: "ConceptCheck", props: { question, reveal } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Full Level 5 content coming soon. Complete Levels 1–4 first." },
  ],
  hasQuiz: false,
});

export const level4StubLessons: Lesson[] = [
  stub4("options-basics", "options-trading", 1, "Calls and Puts", "options-basics", "What is a call option?", "The right (not obligation) to buy the underlying at the strike price by expiration."),
  stub4("options-greeks", "options-trading", 2, "The Greeks", "options-greeks", "What does delta measure?", "How much the option price changes when the underlying moves $1. Calls 0–1, puts 0 to -1."),
  stub4("options-strategies", "options-trading", 3, "Basic Options Strategies", "options-strategies", "What is a covered call?", "You own the stock and sell a call. You collect premium and cap upside at the strike."),
  stub4("futures-basics", "derivatives", 1, "Futures Contracts", "futures-basics", "What is a futures contract?", "An agreement to buy or sell an asset at a set price on a future date. Standardized and traded on exchanges."),
  stub4("leverage-margin", "derivatives", 2, "Leverage and Margin", "leverage-margin", "What is initial margin?", "The deposit required to open a futures (or leveraged) position. Much less than full notional value."),
  stub4("mpt-basics", "portfolio-theory", 1, "Modern Portfolio Theory", "mpt-basics", "What is the efficient frontier?", "The set of portfolios offering the best expected return for each level of risk (volatility)."),
  stub4("diversification", "portfolio-theory", 2, "Diversification", "diversification", "Why diversify?", "To reduce risk without giving up too much return. Uncorrelated assets smooth the portfolio."),
  stub4("rebalancing", "portfolio-theory", 3, "Rebalancing", "rebalancing", "Why rebalance?", "Weights drift as assets perform differently. Rebalancing brings the portfolio back to target and can discipline buying low/selling high."),
  stub4("fibonacci", "advanced-technical", 1, "Fibonacci Retracements", "fibonacci", "Which Fib levels are most used?", "38.2%, 50%, and 61.8% retracements. Often align with support/resistance."),
  stub4("elliott-wave", "advanced-technical", 2, "Elliott Wave", "elliott-wave", "What is the basic Elliott structure?", "5 waves in the trend direction, 3 waves in the correction. Cyclic and fractal."),
  stub4("wyckoff", "advanced-technical", 3, "Wyckoff Method", "wyckoff", "What are the four Wyckoff phases?", "Accumulation, markup, distribution, markdown. Focus on volume and price structure."),
  stub4("intermarket-basics", "intermarket-analysis", 1, "How Markets Relate", "intermarket-basics", "Why do bonds and stocks often move inversely?", "Rising yields can hurt stock valuations; flight to safety sends money from stocks to bonds."),
  stub4("vix-fear", "intermarket-analysis", 2, "VIX and Fear", "vix-fear", "What does the VIX measure?", "Implied volatility of S&P 500 options. High VIX = fear; it often spikes when stocks fall."),
];

export const level5StubLessons: Lesson[] = [
  stub5("python-basics", "python-trading", 1, "Python for Finance", "python-basics", "Why Python for trading?", "Libraries (pandas, numpy), readability, and wide use in quant finance and data science."),
  stub5("python-data", "python-trading", 2, "Getting Market Data", "python-data", "What is yfinance?", "A free Python library to download historical price data from Yahoo Finance."),
  stub5("first-strategy", "python-trading", 3, "Your First Strategy", "first-strategy", "What is a backtest?", "Running your strategy logic on historical data to see how it would have performed."),
  stub5("data-sources", "data-acquisition", 1, "Data Sources", "data-sources", "What are common free data sources?", "Yahoo Finance, Alpha Vantage, FRED. Quality and terms vary; always check."),
  stub5("data-cleaning", "data-acquisition", 2, "Data Cleaning", "data-cleaning", "Why clean data?", "Missing values, splits, and errors distort backtests. Garbage in, garbage out."),
  stub5("backtest-basics", "backtesting", 1, "Backtesting Fundamentals", "backtest-basics", "What is look-ahead bias?", "Using future data in the past—e.g. a signal that wouldn't have been known. Ruins backtests."),
  stub5("backtest-pitfalls", "backtesting", 2, "Avoiding Bias", "backtest-pitfalls", "What is overfitting?", "Optimizing so much to past data that the strategy fails out of sample. Keep it simple."),
  stub5("walk-forward", "backtesting", 3, "Walk-Forward Analysis", "walk-forward", "What is walk-forward analysis?", "Train on one period, test on the next; roll forward. More robust than a single backtest."),
  stub5("mean-reversion", "quant-strategies", 1, "Mean Reversion", "mean-reversion", "What is mean reversion?", "Prices tend to return to the average. Works in ranges; fails in strong trends."),
  stub5("momentum-strategies", "quant-strategies", 2, "Momentum Strategies", "momentum-strategies", "What is momentum in quant?", "Trend-following: assets that went up tend to keep going (and vice versa) over the horizon used."),
  stub5("pairs-trading", "quant-strategies", 3, "Pairs Trading", "pairs-trading", "What is pairs trading?", "Trade the spread between two correlated assets. When the spread diverges, bet it reverts."),
  stub5("ml-overview", "ml-trading", 1, "ML for Trading Overview", "ml-overview", "When can ML help in trading?", "Feature-rich problems, regime detection, and pattern recognition—with strict validation."),
  stub5("feature-engineering", "ml-trading", 2, "Feature Engineering", "feature-engineering", "What is feature engineering?", "Creating inputs (e.g. from price/volume) that help the model. Critical for ML performance."),
  stub5("overfitting", "ml-trading", 3, "Avoiding Overfitting", "overfitting", "How do you avoid overfitting?", "Train/test split, walk-forward validation, simpler models, and fewer features."),
  stub5("sharpe-sortino", "risk-metrics", 1, "Sharpe and Sortino", "sharpe-sortino", "What is the Sharpe ratio?", "Return in excess of risk-free rate, divided by volatility. Higher = better risk-adjusted return."),
  stub5("drawdown-analysis", "risk-metrics", 2, "Drawdown Analysis", "drawdown-analysis", "What is maximum drawdown?", "Largest peak-to-trough decline. Shows worst loss from a high watermark."),
  stub5("monte-carlo", "risk-metrics", 3, "Monte Carlo Simulation", "monte-carlo", "What is Monte Carlo in trading?", "Running many random simulations (e.g. of returns or trade order) to assess risk and robustness."),
  stub5("automation-workflow", "automated-systems", 1, "Automation Workflow", "automation-workflow", "What does an automated system need?", "Data, strategy logic, execution, risk controls, and monitoring."),
  stub5("paper-automation", "automated-systems", 2, "Paper Trading Automation", "paper-automation", "Why paper trade a system first?", "To find bugs and assess behavior with live data before risking real money."),
  stub5("live-deployment", "automated-systems", 3, "Live Deployment", "live-deployment", "Before going live, what to check?", "Risk limits, kill switch, data feed, execution path, and monitoring/alerts."),
];
