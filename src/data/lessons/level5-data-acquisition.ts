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
  createLesson("data-sources", 1, "Data Sources", "data-sources", "18 min", ["Free and paid sources", "APIs and terms"], [
    { type: "text", heading: "Common Data Sources", content: "Free: Yahoo Finance (yfinance), Alpha Vantage (API key), FRED (economic data), Quandl/Nasdaq Data Link (some free). For crypto: Cryptocompare, exchange APIs. Paid: Bloomberg, Refinitiv, Polygon, etc. Always check license and rate limits. For backtesting, you need OHLCV (open, high, low, close, volume); adjusted close for stocks (splits, dividends). Intraday data is heavier and often paid. Start with daily free data; upgrade if you need tick or intraday." },
    { type: "text", heading: "API Basics", content: "Many sources use REST APIs: you send a request (e.g. with ticker and date range), get JSON or CSV back. Store your API key in environment variables, not in code. Handle rate limits (e.g. sleep between requests, or use a queue). Check for errors (missing data, 429 too many requests). Save raw or cleaned data locally so you don't re-hit the API every time. Format data into a consistent schema (e.g. datetime index, OHLCV columns) for your backtester." },
    { type: "interactive", heading: "Check Your Understanding", content: "Sources and quality.", component: "ConceptCheck", props: { question: "What are common free data sources for stocks?", reveal: "Yahoo Finance (yfinance), Alpha Vantage, FRED. Quality and terms vary; always check. Use adjusted close for stocks." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Free: yfinance, Alpha Vantage, FRED. Respect APIs and rate limits. Store data locally; use adjusted close for stocks." },
  ]),
  createLesson("data-cleaning", 2, "Data Cleaning", "data-cleaning", "16 min", ["Missing values", "Splits and dividends"], [
    { type: "text", heading: "Why Clean Data?", content: "Missing values, wrong prices (e.g. before split adjustment), and bad ticks distort backtests. Garbage in, garbage out. Check for: gaps in dates (holidays are fine; long gaps may be delistings), outliers (e.g. single-day 100% move that's actually a split), and alignment (same dates across multiple tickers if you're doing pairs or multi-asset). Fill or drop missing values carefully—forward fill can hide delistings; sometimes you want to exclude those periods." },
    { type: "text", heading: "Splits and Dividends", content: "Stock splits change price (e.g. 2-for-1 halves the price). Use adjusted close so historical prices are comparable. Dividends are often adjusted into the close (total return). yfinance and most APIs provide Adj Close. If you have only raw close, adjust manually: multiply by split factor backward in time; subtract dividend impact if needed. For returns, using adjusted series avoids spurious jumps." },
    { type: "interactive", heading: "Think It Through", content: "Clean data = reliable backtest.", component: "ConceptCheck", props: { question: "Why clean data?", reveal: "Missing values, splits, and errors distort backtests. Garbage in, garbage out. Use adjusted close and check for gaps and outliers." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Clean before backtesting. Use adjusted close; handle missing data and outliers. Check alignment for multi-asset strategies." },
  ]),
  createLesson("data-summary", 3, "Data Acquisition: Summary", "data-summary", "8 min", ["Recap sources and cleaning"], [
    { type: "text", heading: "Recap", content: "Get data from reliable sources (yfinance, APIs); respect rate limits and terms. Clean: adjusted close, handle missing data and outliers. Store locally for reproducibility. Good data is the base of any serious backtest." },
    { type: "interactive", heading: "Final Check", content: "Data pipeline.", component: "ConceptCheck", props: { question: "What should you do with raw API data before backtesting?", reveal: "Clean it: use adjusted close, handle missing values and outliers, align dates if multi-asset. Store in a consistent format." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Source → clean → store. Adjusted close and consistency are critical." },
  ], true),
];
