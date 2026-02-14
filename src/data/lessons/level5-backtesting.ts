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
  moduleId: "backtesting",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level5BacktestingLessons: Lesson[] = [
  createLesson("backtest-basics", 1, "Backtesting Fundamentals", "backtest-basics", "24 min", ["What backtesting is", "Look-ahead and other bias", "Realistic simulation"], [
    {
      type: "text",
      heading: "What Is Backtesting?",
      content:
        "Backtesting means running your strategy on historical data to see how it would have performed. You need: (1) historical data, (2) clear entry/exit rules, (3) position sizing, (4) transaction costs, and (5) performance metrics. Results depend on data quality and how realistically you simulate execution.\n\nBacktests validate logic and give you a sense of win rate, drawdown, and expectancy—but past performance doesn't guarantee future results. Market regime, liquidity, and slippage can change. A strategy that worked in 2010–2020 may fail in 2021–2025. Use backtests to learn, not to promise.",
    },
    {
      type: "text",
      heading: "Look-Ahead Bias",
      content:
        "Look-ahead bias is using information that wouldn't have been available at the time of the trade. Examples: using the closing price of the same bar for a signal (you might not have had it at the open), or using a future value in a calculation (e.g. next bar's high for a stop). Fix: only use data that would have been known at each bar.\n\nFor a daily signal at the open: use prior close, not current close. In pandas, shift(1) gives you the previous row—use that for lagged inputs. Example: df['signal'] = np.where(df['Close'].shift(1) > df['SMA'].shift(1), 1, -1). Always ask: 'Could I have known this when I had to decide?' If not, you're cheating.",
    },
    {
      type: "analogy",
      heading: "The Exam Analogy",
      content:
        "Think of look-ahead bias like cheating on an exam. You're supposed to answer based on what you know at the start of the test—not peek at the answer key halfway through. A backtest with look-ahead bias is like taking the exam with the answers in hand—you'll ace it, but you learned nothing. Real trading has no answer key. Use only what you would have known at decision time. shift(1) is your friend.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Look-ahead bias is the #1 cause of inflated backtest results. It's easy to introduce accidentally—using df['Close'] instead of df['Close'].shift(1), or computing indicators that use future bars. Audit your code: trace every input to each signal. If any input uses current or future bar data, fix it. A backtest that's too good (e.g. 100% win rate) is almost certainly biased.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Bias ruins backtests.",
      component: "ConceptCheck",
      props: { question: "What is look-ahead bias?", reveal: "Using future data in the past—e.g. a signal that wouldn't have been known at decision time. Ruins backtests. Use only lagged or past data." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Backtest = historical simulation with clear rules. Avoid look-ahead: use only information available at each bar. shift(1) for lagged inputs." },
  ], true),
  createLesson("backtest-pitfalls", 2, "Avoiding Bias", "backtest-pitfalls", "22 min", ["Overfitting", "Survivorship bias", "Transaction costs"], [
    {
      type: "text",
      heading: "Overfitting",
      content:
        "Overfitting means tuning your strategy so much to past data that it fits noise, not signal. In-sample performance looks great; out-of-sample it fails. To reduce overfitting: use simple rules, few parameters, and avoid optimizing every knob. Prefer walk-forward or out-of-sample testing: train on one period, test on another.\n\nIf you've optimized on 2010–2020, test on 2021–2023 without changing the strategy. More parameters = more overfitting risk. A strategy with 20 tuned parameters and 50% annual return in-sample is probably curve-fitting. Simpler strategies with 1–3 parameters hold up better. When in doubt, simplify.",
    },
    {
      type: "text",
      heading: "Survivorship and Other Bias",
      content:
        "Survivorship bias: backtesting only on names that exist today excludes delisted (often failed) companies—Enron, Lehman, etc. Results look better than reality. Use a point-in-time universe or survivorship-bias-free data when possible. Also: account for transaction costs (commissions, spread). Don't assume you can always fill at the close—slippage and partial fills matter for high-frequency or illiquid names.\n\nBe conservative: assume 0.1% per trade in costs, or more for illiquid names. A strategy that makes 1% per trade but pays 0.5% in costs is half as good as it looks. Real execution is messier than backtests.",
    },
    {
      type: "analogy",
      heading: "The Tailor Analogy",
      content:
        "Think of overfitting like a tailor making a suit. If they measure you once and make the suit fit that exact moment, it might not fit tomorrow (you slouched, ate a big meal). A suit that fits 'in general' is more robust. Same with strategies: one that's tuned to every wrinkle of 2010–2020 data won't fit 2021–2025. Build strategies that fit 'in general'—simple rules, few parameters, robust to regime changes.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Overfitting is seductive. Your backtest shows 40% annual return with 10% drawdown—it feels real. Then you go live and lose money. The backtest fit the noise. Always reserve an out-of-sample period you never touch during development. Report OOS results, not in-sample. Survivorship bias can add 2–3% annually to backtest returns—use survivorship-bias-free data when possible.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Overfitting = curve-fitting the past.",
      component: "ConceptCheck",
      props: { question: "What is overfitting?", reveal: "Optimizing so much to past data that the strategy fits noise and fails out of sample. Keep it simple; use walk-forward and out-of-sample tests." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Avoid overfitting (simple rules, out-of-sample test). Watch survivorship bias and transaction costs. Be conservative. OOS > in-sample." },
  ], true),
  createLesson("walk-forward", 3, "Walk-Forward Analysis", "walk-forward", "20 min", ["Train/test split in time", "Rolling forward", "Interpreting results"], [
    {
      type: "text",
      heading: "What Is Walk-Forward?",
      content:
        "Walk-forward analysis: train your model or choose parameters on one period (e.g. 2010–2015), then test on the next (e.g. 2016–2017). Roll forward: now train on 2012–2017, test on 2018–2019. Repeat. You get multiple out-of-sample results and reduce the chance of a single lucky period.\n\nIt's more robust than one train/test split. Used in both rule-based and ML strategies. The key is that the test period is never used for training or parameter choice—no peeking. Each roll is a fresh, unbiased test.",
    },
    {
      type: "text",
      heading: "How to Implement",
      content:
        "Define train window (e.g. 5 years) and test window (e.g. 1 year). For each roll: fit parameters or train model on train window only; run backtest on test window; record metrics (Sharpe, return, max drawdown). Aggregate results: average Sharpe, worst drawdown across test windows, % of rolls that were profitable.\n\nIf performance is consistent across rolls, the strategy is more credible. If it's good in one roll and bad in another, be cautious—may be regime-dependent or overfit. A strategy that works in 6 out of 6 rolls is more trustworthy than one that works in 2 out of 6.",
    },
    {
      type: "analogy",
      heading: "The Rolling Exam Analogy",
      content:
        "Think of walk-forward like a series of exams. You study (train) on material from chapters 1–5, then take an exam (test) on chapter 6. You never saw chapter 6 during study. Next, you study chapters 2–6, take an exam on chapter 7. Repeat. If you pass every exam, you've really learned—not memorized. Same with strategies: if it works across multiple OOS periods, it's more robust. One exam could be lucky; six exams are a pattern.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use expanding or rolling windows. Expanding: train on all data up to test start (train grows). Rolling: train on fixed window before test (train slides). Expanding uses more data; rolling adapts faster to regime changes. Report both mean and min/max across rolls—if min Sharpe is negative, the strategy can fail in some regimes.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Walk-forward = rolling out-of-sample.",
      component: "ConceptCheck",
      props: { question: "What is walk-forward analysis?", reveal: "Train on one period, test on the next; roll forward. Multiple out-of-sample tests. More robust than a single backtest." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Walk-forward = train then test, roll forward. Reduces overfitting and gives multiple OOS results. Use it before trusting a strategy. Consistency across rolls = credibility." },
  ], true),
  createLesson("backtest-summary", 4, "Backtesting: Summary", "backtest-summary", "12 min", ["Recap and best practices", "Quant strategies module"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Backtest with clear rules and no look-ahead. Avoid overfitting (simple rules, out-of-sample). Consider survivorship bias and costs. Use walk-forward for robustness. Backtests validate logic; they don't guarantee future performance.\n\nThe mantra: no look-ahead, no overfitting, walk-forward, account for costs. Then interpret results with caution. A backtest that's too good is probably wrong. Be skeptical; be conservative.",
    },
    {
      type: "preview",
      heading: "Quant Strategies (Preview)",
      content:
        "In the Quant Strategies module, we'll apply these backtesting principles to specific strategies: mean reversion, momentum, pairs trading. You'll see how to implement and test each, with proper validation. Your backtesting discipline becomes the foundation for strategy development.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Robust backtesting.",
      component: "ConceptCheck",
      props: { question: "Why use walk-forward instead of a single backtest?", reveal: "You get multiple out-of-sample periods. Reduces chance of overfitting to one period and gives a more realistic view of robustness." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "No look-ahead, no overfitting, walk-forward, account for costs. Interpret results with caution. Skepticism beats optimism." },
  ], true),
];
