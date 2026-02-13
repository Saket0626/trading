import type { Lesson } from "../../types";

const createLesson = (
  id: string,
  order: number,
  title: string,
  slug: string,
  duration: string,
  objectives: string[],
  content: Lesson["content"],
  hasQuiz = false
): Lesson => ({
  id,
  title,
  slug,
  level: 5,
  moduleId: "python-trading",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level5PythonLessons: Lesson[] = [
  createLesson("python-basics", 1, "Python for Finance", "python-basics", "20 min", ["Why Python", "Libraries: pandas, numpy"], [
    { type: "text", heading: "Why Python for Trading?", content: "Python is the dominant language in quantitative finance and data science. It has powerful libraries: pandas for tabular data and time series, numpy for numerical work, matplotlib for charts. Code is readable and quick to write. Most brokers and data vendors offer APIs or Python SDKs. You can backtest strategies, pull data, and automate analysis. Learning Python basics—variables, lists, loops, conditionals, functions—is the first step; then add pandas for DataFrames and financial series." },
    { type: "text", heading: "Essential Libraries", content: "pandas: DataFrames (like Excel in code), Series, reading CSV/Excel, date handling, resampling (e.g. daily to weekly). numpy: arrays, math, random. matplotlib: line plots, candlestick-style charts. datetime: parse and handle dates. Install with pip (e.g. pip install pandas numpy matplotlib). Use Jupyter notebooks for interactive exploration—run code cell by cell and see results. For trading, you'll load price data into a DataFrame, compute returns and indicators, and run backtests." },
    { type: "interactive", heading: "Check Your Understanding", content: "Python in quant finance.", component: "ConceptCheck", props: { question: "Why Python for trading?", reveal: "Libraries (pandas, numpy), readability, and wide use in quant finance. You can pull data, backtest, and automate—all in one language." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Python + pandas/numpy/matplotlib = standard stack for data and backtesting. Start with basics, then DataFrames and dates." },
  ]),
  createLesson("python-data", 2, "Getting Market Data", "python-data", "18 min", ["yfinance and APIs", "OHLCV and adjustments"], [
    { type: "text", heading: "Free Data Sources", content: "yfinance (Python library) pulls historical data from Yahoo Finance—easy and free for stocks, some indices and forex. Alpha Vantage, Quandl (Nasdaq Data Link), and FRED offer free tiers with API keys. Always check terms and rate limits. For crypto, Cryptocompare and exchange APIs. Data quality varies: check for missing days, corporate actions (splits, dividends). Use adjusted close for stocks so splits don't distort returns." },
    { type: "text", heading: "Using yfinance", content: "Install: pip install yfinance. Import yfinance as yf. Download: yf.download('AAPL', start='2020-01-01') returns a DataFrame with Open, High, Low, Close, Volume, and Adj Close. You can pass a list of tickers for multiple symbols. Resample to different timeframes with pandas (e.g. .resample('W').agg(...) for weekly). Store data locally (CSV, SQLite, or HDF5) to avoid re-downloading and respect rate limits." },
    { type: "interactive", heading: "Think It Through", content: "Data and backtests.", component: "ConceptCheck", props: { question: "What is yfinance?", reveal: "A free Python library to download historical price data from Yahoo Finance. Returns OHLCV and adjusted close for stocks and more." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "yfinance and APIs give you data. Use adjusted close; check quality and terms. Store locally when possible." },
  ]),
  createLesson("first-strategy", 3, "Your First Strategy", "first-strategy", "20 min", ["Simple backtest", "Entry/exit and metrics"], [
    { type: "text", heading: "What Is a Backtest?", content: "A backtest runs your strategy logic on historical data to see how it would have performed. You define entry and exit rules, apply them bar by bar (or in a vectorized way), and record trades. Then you compute returns, drawdown, win rate, Sharpe ratio, etc. Backtests don't guarantee future results—they're for validating logic and sizing. Avoid look-ahead bias (using future data), survivorship bias (only testing names that survived), and overfitting (tuning too much to the past)." },
    { type: "text", heading: "Simple Example", content: "A moving-average crossover: go long when fast MA crosses above slow MA; exit when it crosses below. In Python: compute 20-day and 50-day SMA on close, generate signals (e.g. 1 for long, -1 for short, 0 for flat), then compute returns from signal shifts. Add transaction costs (e.g. 0.1% per trade). Evaluate: total return, max drawdown, number of trades, Sharpe. From there you can add filters (e.g. only trade when above 200 MA) or try different parameters—but keep it simple first." },
    { type: "interactive", heading: "Check Your Understanding", content: "Backtest = historical simulation.", component: "ConceptCheck", props: { question: "What is a backtest?", reveal: "Running your strategy logic on historical data to see how it would have performed. Validates ideas; past results don't guarantee future." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Backtest = apply rules to history, measure performance. Avoid look-ahead and overfitting. Start simple (e.g. MA crossover), add costs." },
  ]),
  createLesson("python-summary", 4, "Python for Trading: Summary", "python-summary", "8 min", ["Recap and next steps"], [
    { type: "text", heading: "Recap", content: "Python + pandas/numpy is the standard for data and backtesting. Get data via yfinance or APIs; use adjusted close. Your first strategy can be a simple MA crossover; backtest it with costs and basic metrics. Next: more indicators, walk-forward analysis, and risk metrics." },
    { type: "interactive", heading: "Final Check", content: "Stack and workflow.", component: "ConceptCheck", props: { question: "What do you need to run a simple backtest in Python?", reveal: "Historical data (e.g. yfinance), entry/exit rules, and a way to compute returns and metrics (pandas). Keep it simple and avoid bias." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Data → rules → backtest → metrics. Python and pandas are the tools; discipline in testing is the skill." },
  ], true),
];
