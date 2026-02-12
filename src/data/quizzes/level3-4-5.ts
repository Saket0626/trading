import type { QuizQuestion } from "../../types";

const q = (
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): QuizQuestion => ({ id, question, options, correctIndex, explanation });

/** Level 3 Final Exam: 40 questions (expand to full set as content is completed) */
export const level3Quizzes: Record<string, QuizQuestion[]> = {
  "level-3-exam": [
    q("e3-1", "The 1% rule in risk management means:", ["Risk 1% of account per trade", "Earn 1% per day", "Use 1% leverage only", "Trade 1 hour per day"], 0, "Risk no more than 1% of your account on any single trade."),
    q("e3-2", "A Golden Cross refers to:", ["50 MA crossing below 200 MA", "50 MA crossing above 200 MA", "RSI above 70", "Volume spike"], 1, "Golden Cross: 50-period MA crosses above 200 MA—often considered bullish."),
    q("e3-3", "RSI above 70 typically suggests:", ["Oversold", "Overbought", "Neutral", "Strong support"], 1, "RSI > 70 is often considered overbought; RSI < 30 oversold."),
    q("e3-4", "Position size should depend on:", ["Only gut feeling", "Account size, risk %, and distance to stop loss", "Only the asset", "Only leverage"], 1, "Position size = (Account × Risk %) / (Entry − Stop distance)."),
    q("e3-5", "A stop loss should be:", ["Moved further away when price approaches it", "Placed at a level that limits loss and allows normal noise", "Removed after opening", "Only mental"], 1, "Place stops where the trade is invalidated; give room for noise."),
    q("e3-6", "Fundamental analysis focuses on:", ["Only price charts", "Company financials, earnings, and economic data", "Only volume", "Only candlesticks"], 1, "Fundamentals = financial statements, ratios, earnings, macro data."),
    q("e3-7", "P/E ratio is:", ["Price × Earnings", "Price divided by Earnings per share", "Profit only", "Volume metric"], 1, "P/E = share price / earnings per share (valuation metric)."),
    q("e3-8", "Revenge trading is:", ["Recommended", "Trading to win back losses quickly—usually leads to more losses", "Only for pros", "A strategy"], 1, "Revenge trading is emotional and dangerous; take a break after losses."),
    q("e3-9", "A trading plan should include:", ["Only entry rules", "Entry, exit, risk, and review rules", "Only exit rules", "Only goals"], 1, "A plan includes entry/exit criteria, risk rules, and a review process."),
    q("e3-10", "ORB stands for:", ["Order Rate Book", "Opening Range Breakout", "Option Risk Balance", "Only Random Buy"], 1, "Opening Range Breakout—trading the break of the first range of the day."),
    q("e3-11", "VWAP is often used as:", ["Only a volume indicator", "Intraday support/resistance and institutional benchmark", "Only for forex", "Only at the open"], 1, "VWAP = volume-weighted average price; used as intraday S/R and benchmark."),
    q("e3-12", "When choosing a broker, regulation is:", ["Optional", "Important for safety of funds", "Only for stocks", "Only for crypto"], 1, "Regulated brokers (SEC, FCA, ASIC, etc.) offer better protection."),
    q("e3-13", "A market order:", ["Executes at a limit price", "Executes at the current market price (may slip)", "Never fills", "Only for closing"], 1, "Market order = fill at best available price; can have slippage."),
    q("e3-14", "A limit order:", ["Always fills immediately", "Fills only at your price or better (may not fill)", "Is only for stops", "Expires in 1 minute"], 1, "Limit order = execute only at specified price or better."),
    q("e3-15", "Break-even win rate for a 1:2 risk-reward ratio is:", ["50%", "About 33.3%", "100%", "0%"], 1, "Break-even % = 1/(1+RR). For 1:2, need 1/3 ≈ 33.3% wins."),
    q("e3-16", "Overtrading often:", ["Increases profits", "Increases costs and emotional mistakes", "Is required for day trading", "Only affects forex"], 1, "Overtrading increases fees and emotional errors; quality over quantity."),
    q("e3-17", "Cognitive bias where you see what you expect is:", ["Diversification", "Confirmation bias", "Risk management", "Trend following"], 1, "Confirmation bias = favoring information that supports your view."),
    q("e3-18", "Backtesting a strategy helps:", ["Guarantee future profits", "Validate logic on historical data (past ≠ future)", "Only with live data", "Only for crypto"], 1, "Backtest validates logic on history; real trading has slippage and emotions."),
    q("e3-19", "Slippage is:", ["A type of stop", "Getting a worse fill than expected", "Only in stocks", "A fee"], 1, "Slippage = execution at a worse price than expected."),
    q("e3-20", "To unlock Level 4 you must pass Level 3 Final Exam with:", ["50%", "70%", "80%", "100%"], 2, "80% is required to unlock Level 4."),
    // Placeholder questions 21–40 (same format; add as content expands)
    ...Array.from({ length: 20 }, (_, i) =>
      q(`e3-${21 + i}`, `Level 3 exam question ${21 + i} (expand with full curriculum).`, ["A", "B", "C", "D"], 0, "Expand when Level 3 lessons are complete.")
    ),
  ],
};

/** Level 4 Final Exam: 40 questions */
export const level4Quizzes: Record<string, QuizQuestion[]> = {
  "level-4-exam": [
    q("e4-1", "A call option gives the holder:", ["Obligation to sell", "Right to buy at strike price", "Obligation to buy", "Right to sell only at expiry"], 1, "Call = right to buy at the strike price."),
    q("e4-2", "A put option gives the holder:", ["Obligation to buy", "Right to sell at strike price", "Obligation to sell", "Right to buy only at expiry"], 1, "Put = right to sell at the strike price."),
    q("e4-3", "Theta measures:", ["Volatility sensitivity", "Time decay of option value", "Interest rate sensitivity", "Directional move"], 1, "Theta = rate of time decay."),
    q("e4-4", "Delta of an ATM call is approximately:", ["0", "0.5", "1", "-0.5"], 1, "At-the-money calls have delta near 0.5."),
    q("e4-5", "Selling options often involves:", ["Unlimited profit", "Collecting premium; risk can be large", "No risk", "Only calls"], 1, "Selling options collects premium but can have large or unlimited risk."),
    q("e4-6", "A futures contract is:", ["A spot trade", "An agreement to buy/sell at a future date at a set price", "Only for stocks", "An option"], 1, "Futures = agreement to transact at a future date at a set price."),
    q("e4-7", "Contango means:", ["Spot price > futures price", "Futures price > spot price", "No difference", "Only in crypto"], 1, "Contango = futures price above spot."),
    q("e4-8", "Backwardation means:", ["Futures price > spot", "Spot price > futures price", "No trend", "Only in stocks"], 1, "Backwardation = spot above futures."),
    q("e4-9", "Diversification in a portfolio:", ["Increases risk", "Can reduce risk by holding uncorrelated assets", "Only for bonds", "Only for stocks"], 1, "Diversification spreads risk across assets."),
    q("e4-10", "Sharpe ratio measures:", ["Only return", "Risk-adjusted return (return per unit of risk)", "Only volatility", "Only drawdown"], 1, "Sharpe = (Return − Risk-free rate) / Volatility."),
    q("e4-11", "The VIX is often called the:", ["Momentum index", "Fear index (implied volatility)", "Volume index", "Trend index"], 1, "VIX = implied volatility; spikes indicate fear."),
    q("e4-12", "Elliott Wave theory describes:", ["Only support", "5 waves in trend direction, 3 in correction", "Only volume", "Only options"], 1, "Elliott: 5-wave impulse, 3-wave correction."),
    q("e4-13", "To unlock Level 5 you must pass Level 4 Final Exam with:", ["50%", "70%", "80%", "100%"], 2, "80% is required to unlock Level 5."),
    ...Array.from({ length: 27 }, (_, i) =>
      q(`e4-${14 + i}`, `Level 4 exam question ${14 + i} (expand with full curriculum).`, ["A", "B", "C", "D"], 0, "Expand when Level 4 lessons are complete.")
    ),
  ],
};

/** Level 5 Final Exam: 50 questions (+ coding); 85% to certify */
export const level5Quizzes: Record<string, QuizQuestion[]> = {
  "level-5-exam": [
    q("e5-1", "In Python, pandas is commonly used for:", ["Only plotting", "Tabular data and time series", "Only APIs", "Only loops"], 1, "Pandas = DataFrames and Series for data manipulation."),
    q("e5-2", "Backtesting on historical data can be biased by:", ["Nothing", "Look-ahead bias, survivorship bias, overfitting", "Only volume", "Only price"], 1, "Look-ahead, survivorship bias, and overfitting are common pitfalls."),
    q("e5-3", "Walk-forward analysis:", ["Uses only one period", "Trains on one period, tests on next; rolls forward", "Only for live trading", "Only for options"], 1, "Walk-forward = train then test on out-of-sample period; repeat."),
    q("e5-4", "Sharpe ratio in backtesting is:", ["Only return", "(Return - risk-free) / std of returns", "Only drawdown", "Only win rate"], 1, "Sharpe = excess return / standard deviation of returns."),
    q("e5-5", "Mean reversion strategies assume:", ["Price always trends", "Price tends to revert to average", "Volume is constant", "No volatility"], 1, "Mean reversion = price reverts to mean."),
    q("e5-6", "Momentum strategies assume:", ["Price reverts quickly", "Trends tend to persist", "Volume is zero", "No risk"], 1, "Momentum = trend continuation."),
    q("e5-7", "Overfitting in ML means:", ["Model is too simple", "Model fits noise in training data and fails out-of-sample", "Model never fits", "Only in neural nets"], 1, "Overfitting = memorizing training data; poor generalization."),
    q("e5-8", "To earn the Quantitative Trading Professional certificate you need:", ["50% on Level 5 exam", "85% on Level 5 Final Exam (and 80%+ on prior exams)", "Only complete Level 5", "Only pass Level 1"], 1, "85% on Level 5 exam (and meeting prior level requirements) earns certification."),
    ...Array.from({ length: 42 }, (_, i) =>
      q(`e5-${9 + i}`, `Level 5 exam question ${9 + i} (expand with full curriculum).`, ["A", "B", "C", "D"], 0, "Expand when Level 5 lessons are complete.")
    ),
  ],
};
