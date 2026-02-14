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
  moduleId: "data-acquisition",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level5DataAcquisitionLessons: Lesson[] = [
  createLesson("data-sources", 1, "Data Sources", "data-sources", "22 min", ["Free and paid sources", "APIs and terms", "Data requirements"], [
    {
      type: "text",
      heading: "Common Data Sources",
      content:
        "Free: Yahoo Finance (yfinance), Alpha Vantage (API key), FRED (economic data), Quandl/Nasdaq Data Link (some free). For crypto: Cryptocompare, exchange APIs. Paid: Bloomberg, Refinitiv, Polygon, etc. Always check license and rate limits—free tiers often cap requests per minute or day.\n\nFor backtesting, you need OHLCV (open, high, low, close, volume); adjusted close for stocks (splits, dividends). Intraday data is heavier and often paid—Polygon, IQFeed, etc. Start with daily free data; upgrade if you need tick or intraday. Survivorship-bias-free data (includes delisted names) is important for realistic backtests—Point-in-Time and CRSP offer this.",
    },
    {
      type: "text",
      heading: "API Basics",
      content:
        "Many sources use REST APIs: you send a request (e.g. with ticker and date range), get JSON or CSV back. Store your API key in environment variables (os.environ['API_KEY']), not in code—never commit keys to git. Handle rate limits: sleep between requests, or use a queue. Check for errors: missing data, 429 (too many requests), 401 (unauthorized).\n\nSave raw or cleaned data locally (CSV, Parquet, SQLite, HDF5) so you don't re-hit the API every time. Format data into a consistent schema: datetime index, OHLCV columns, same column names across sources. Your backtester should expect a standard DataFrame structure.",
    },
    {
      type: "analogy",
      heading: "The Plumbing Analogy",
      content:
        "Think of data sources like water supply. Free sources (yfinance) are the tap—always on, good enough for most uses. Paid sources are bottled water—premium, filtered, sometimes necessary for serious work. Your pipeline (API calls, storage, cleaning) is the plumbing—it needs to be reliable. A leak (missing data) or clog (rate limits) can shut everything down. Build your plumbing well; test it; have backups.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never commit API keys to git. Use .env files and add them to .gitignore. Respect rate limits—hammering APIs can get you blocked or banned. Free data often has gaps, bad ticks, and survivorship bias. Don't assume data is clean; validate before backtesting. Paid data isn't always better—check quality and coverage for your use case.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Sources and quality.",
      component: "ConceptCheck",
      props: { question: "What are common free data sources for stocks?", reveal: "Yahoo Finance (yfinance), Alpha Vantage, FRED. Quality and terms vary; always check. Use adjusted close for stocks." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Free: yfinance, Alpha Vantage, FRED. Respect APIs and rate limits. Store data locally; use adjusted close. Never commit API keys." },
  ], true),
  createLesson("data-cleaning", 2, "Data Cleaning", "data-cleaning", "20 min", ["Missing values", "Splits and dividends", "Alignment and validation"], [
    {
      type: "text",
      heading: "Why Clean Data?",
      content:
        "Missing values, wrong prices (e.g. before split adjustment), and bad ticks distort backtests. Garbage in, garbage out. Check for: gaps in dates (holidays are fine; long gaps may be delistings), outliers (e.g. single-day 100% move that's actually a split), and alignment (same dates across multiple tickers if you're doing pairs or multi-asset).\n\nFill or drop missing values carefully. Forward fill can hide delistings—if a stock stopped trading, forward-filling the last price makes it look alive. Sometimes you want to exclude those periods or drop the ticker. Use df.isnull().sum() and df.describe() to inspect. Plot prices to spot obvious errors.",
    },
    {
      type: "text",
      heading: "Splits and Dividends",
      content:
        "Stock splits change price: 2-for-1 halves the price. Raw Close would show a fake -50% return on split day. Use adjusted close so historical prices are comparable. Dividends are often adjusted into the close (total return). yfinance and most APIs provide Adj Close.\n\nIf you have only raw close: multiply by split factor backward in time; subtract dividend impact if needed. For returns, using adjusted series avoids spurious jumps. Example: df['returns'] = df['Adj Close'].pct_change(). Never use raw Close for return calculations.",
    },
    {
      type: "analogy",
      heading: "The Kitchen Analogy",
      content:
        "Think of data cleaning like prepping ingredients. You wouldn't cook with rotten vegetables (bad data) or forget to peel (split adjustment). You check each ingredient (validate), remove the bad parts (handle missing/outliers), and make sure everything is ready at the same time (alignment). The dish (backtest) is only as good as the ingredients. One bad apple (one bad tick) can ruin the whole batch.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Build a data validation pipeline: load → check for nulls → check for outliers (e.g. returns > 50% in a day) → verify Adj Close exists → align dates for multi-asset. Log and flag issues; don't silently fix. Save cleaned data with a version/timestamp so you can reproduce. Document your cleaning steps—future you will thank you.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Clean data = reliable backtest.",
      component: "ConceptCheck",
      props: { question: "Why clean data?", reveal: "Missing values, splits, and errors distort backtests. Garbage in, garbage out. Use adjusted close and check for gaps and outliers." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Clean before backtesting. Use adjusted close; handle missing data and outliers. Check alignment for multi-asset. Document your pipeline." },
  ], true),
  createLesson("data-summary", 3, "Data Acquisition: Summary", "data-summary", "12 min", ["Recap sources and cleaning", "Backtesting module"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Get data from reliable sources (yfinance, APIs); respect rate limits and terms. Clean: adjusted close, handle missing data and outliers. Store locally for reproducibility. Format consistently: datetime index, OHLCV columns. Document your pipeline—what you did, why, and when.\n\nGood data is the base of any serious backtest. A strategy that looks great on dirty data is worthless. Invest time in your data pipeline; it pays off.",
    },
    {
      type: "preview",
      heading: "Backtesting (Preview)",
      content:
        "In the Backtesting module, we'll go deeper: look-ahead bias, overfitting, survivorship bias, walk-forward analysis. You'll learn how to run rigorous backtests that hold up out-of-sample. Your clean data will feed into a robust backtesting framework.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Data pipeline.",
      component: "ConceptCheck",
      props: { question: "What should you do with raw API data before backtesting?", reveal: "Clean it: use adjusted close, handle missing values and outliers, align dates if multi-asset. Store in a consistent format." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Source → clean → store. Adjusted close and consistency are critical. Document your pipeline. Good data = good backtests." },
  ], true),
];
