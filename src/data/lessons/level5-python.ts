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
  createLesson("python-basics", 1, "Python for Finance", "python-basics", "24 min", ["Why Python", "Libraries: pandas, numpy", "Getting started"], [
    {
      type: "text",
      heading: "Why Python for Trading?",
      content:
        "Python is the dominant language in quantitative finance and data science. It has powerful libraries: pandas for tabular data and time series, numpy for numerical work, matplotlib for charts. Code is readable and quick to write—you can prototype a strategy in hours, not days.\n\nMost brokers and data vendors offer APIs or Python SDKs. You can backtest strategies, pull data, and automate analysis—all in one language. Learning Python basics—variables, lists, loops, conditionals, functions—is the first step; then add pandas for DataFrames and financial series. No need to master everything; focus on what you need for data and backtesting.",
    },
    {
      type: "text",
      heading: "Essential Libraries",
      content:
        "pandas: DataFrames (like Excel in code), Series, reading CSV/Excel, date handling, resampling (e.g. daily to weekly). Example: df['returns'] = df['Close'].pct_change(). numpy: arrays, math, random. Example: np.mean(returns), np.std(returns). matplotlib: line plots, candlestick-style charts. datetime: parse and handle dates.\n\nInstall with pip: pip install pandas numpy matplotlib. Use Jupyter notebooks for interactive exploration—run code cell by cell and see results. For trading, you'll load price data into a DataFrame, compute returns and indicators, and run backtests. The stack is simple: data → logic → metrics.",
    },
    {
      type: "analogy",
      heading: "The Workshop Analogy",
      content:
        "Think of Python like a well-stocked workshop. pandas is your workbench—tables and time series, easy to slice and reshape. numpy is your calculator—fast math on arrays. matplotlib is your sketchpad—visualize results. Jupyter is your lab notebook—run experiments cell by cell and keep notes. You don't need every tool; start with the workbench (pandas) and calculator (numpy). Add the rest as you need them.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use virtual environments (venv or conda) to isolate project dependencies. Keep a requirements.txt with package versions for reproducibility. Start with Jupyter for exploration; move to .py scripts when you have a working strategy. Vectorized operations (pandas/numpy) are much faster than loops—learn to think in arrays.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Python in quant finance.",
      component: "ConceptCheck",
      props: { question: "Why Python for trading?", reveal: "Libraries (pandas, numpy), readability, and wide use in quant finance. You can pull data, backtest, and automate—all in one language." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Python + pandas/numpy/matplotlib = standard stack for data and backtesting. Start with basics, then DataFrames and dates. Jupyter for exploration." },
  ], true),
  createLesson("python-data", 2, "Getting Market Data", "python-data", "22 min", ["yfinance and APIs", "OHLCV and adjustments", "Data quality"], [
    {
      type: "text",
      heading: "Free Data Sources",
      content:
        "yfinance (Python library) pulls historical data from Yahoo Finance—easy and free for stocks, some indices and forex. Alpha Vantage, Quandl (Nasdaq Data Link), and FRED offer free tiers with API keys. Always check terms and rate limits—free tiers often cap requests per minute.\n\nFor crypto, Cryptocompare and exchange APIs. Data quality varies: check for missing days, corporate actions (splits, dividends). Use adjusted close for stocks so splits don't distort returns—a 2-for-1 split halves the price; raw Close would show a fake -50% return. Adj Close accounts for splits and dividends.",
    },
    {
      type: "text",
      heading: "Using yfinance",
      content:
        "Install: pip install yfinance. Import yfinance as yf. Download: yf.download('AAPL', start='2020-01-01') returns a DataFrame with Open, High, Low, Close, Volume, and Adj Close. You can pass a list of tickers: yf.download(['AAPL','MSFT'], start='2020-01-01'). Resample to different timeframes: df.resample('W').agg({'Open':'first','High':'max','Low':'min','Close':'last','Volume':'sum'}) for weekly.\n\nStore data locally (CSV, SQLite, or HDF5) to avoid re-downloading and respect rate limits. Use Adj Close for returns: df['returns'] = df['Adj Close'].pct_change().",
    },
    {
      type: "analogy",
      heading: "The Library Analogy",
      content:
        "Think of data sources like libraries. yfinance is the local library—free, easy access, good enough for most needs. Paid sources (Bloomberg, Polygon) are like research libraries—richer data, intraday, tick data, but costly. You don't need a research library to learn; start with the local library (yfinance). Store what you download (like taking notes) so you don't have to re-fetch. Adjusted close is like getting the right edition—splits and dividends are already accounted for.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never assume data is clean. Check for missing values (df.isnull().sum()), outliers (single-day 100% moves that might be splits), and alignment across tickers. Garbage in, garbage out—a backtest on bad data is worthless. Use Adj Close for stocks; raw Close will distort returns. Respect rate limits—hammering free APIs can get you blocked.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Data and backtests.",
      component: "ConceptCheck",
      props: { question: "What is yfinance?", reveal: "A free Python library to download historical price data from Yahoo Finance. Returns OHLCV and adjusted close for stocks and more." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "yfinance and APIs give you data. Use adjusted close; check quality and terms. Store locally when possible. Garbage in, garbage out." },
  ], true),
  createLesson("first-strategy", 3, "Your First Strategy", "first-strategy", "24 min", ["Simple backtest", "Entry/exit and metrics", "Avoiding bias"], [
    {
      type: "text",
      heading: "What Is a Backtest?",
      content:
        "A backtest runs your strategy logic on historical data to see how it would have performed. You define entry and exit rules, apply them bar by bar (or in a vectorized way), and record trades. Then you compute returns, drawdown, win rate, Sharpe ratio, etc.\n\nBacktests don't guarantee future results—they're for validating logic and sizing. Avoid look-ahead bias (using future data—e.g. current bar's close for a signal you'd execute at the open), survivorship bias (only testing names that survived—excludes delisted losers), and overfitting (tuning too much to the past—curve-fitting noise).",
    },
    {
      type: "text",
      heading: "Simple Example",
      content:
        "A moving-average crossover: go long when fast MA (20) crosses above slow MA (50); exit when it crosses below. In Python: df['SMA20'] = df['Close'].rolling(20).mean(); df['SMA50'] = df['Close'].rolling(50).mean(); df['signal'] = np.where(df['SMA20'] > df['SMA50'], 1, -1). Use shift(1) so you trade on the next bar—no look-ahead. Add transaction costs (e.g. 0.1% per trade). Evaluate: total return, max drawdown, number of trades, Sharpe.\n\nKeep it simple first. Add filters (e.g. only trade when above 200 MA) or try different parameters later—but start with the basic crossover.",
    },
    {
      type: "analogy",
      heading: "The Flight Simulator Analogy",
      content:
        "Think of a backtest like a flight simulator. You're not flying a real plane—you're testing your skills in a controlled environment. The simulator (historical data) lets you practice without risk. But the real world has turbulence (regime changes), weather (liquidity), and surprises (black swans) the simulator might not capture. Use the simulator to learn—but don't assume you'll ace the real flight. Backtests validate logic; they don't guarantee profits.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Look-ahead bias is the #1 backtest killer. If your signal uses the current bar's close, you're cheating—you wouldn't have known that at the open. Always use shift(1) or prior data. Overfitting: if you optimize 20 parameters and get a 50% annual return, it's probably noise. Simpler strategies with fewer parameters hold up better out-of-sample. Past performance does not guarantee future results.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Backtest = historical simulation.",
      component: "ConceptCheck",
      props: { question: "What is a backtest?", reveal: "Running your strategy logic on historical data to see how it would have performed. Validates ideas; past results don't guarantee future." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Backtest = apply rules to history, measure performance. Avoid look-ahead and overfitting. Start simple (e.g. MA crossover), add costs. Use shift(1) for lagged signals." },
  ], true),
  createLesson("python-summary", 4, "Python for Trading: Summary", "python-summary", "12 min", ["Recap and next steps", "Data acquisition module"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Python + pandas/numpy is the standard for data and backtesting. Get data via yfinance or APIs; use adjusted close. Your first strategy can be a simple MA crossover; backtest it with costs and basic metrics. Next: more indicators, walk-forward analysis, and risk metrics.\n\nThe workflow is simple: data → rules → backtest → metrics. Python and pandas are the tools; discipline in testing (no look-ahead, no overfitting) is the skill. Start small, validate thoroughly, and scale only when you understand the strategy.",
    },
    {
      type: "preview",
      heading: "Data Acquisition (Preview)",
      content:
        "In the Data Acquisition module, we'll go deeper: more data sources, API design, data cleaning pipelines, and handling splits/dividends. You'll learn how to build a robust data pipeline that feeds your backtester. Good data is the foundation—garbage in, garbage out.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Stack and workflow.",
      component: "ConceptCheck",
      props: { question: "What do you need to run a simple backtest in Python?", reveal: "Historical data (e.g. yfinance), entry/exit rules, and a way to compute returns and metrics (pandas). Keep it simple and avoid bias." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Data → rules → backtest → metrics. Python and pandas are the tools; discipline in testing is the skill. Next: robust data pipelines." },
  ], true),
];
