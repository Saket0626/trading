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
  createLesson("backtest-basics", 1, "Backtesting Fundamentals", "backtest-basics", "20 min", ["What backtesting is", "Look-ahead and other bias"], [
    { type: "text", heading: "What Is Backtesting?", content: "Backtesting means running your strategy on historical data to see how it would have performed. You need: (1) historical data, (2) clear entry/exit rules, (3) position sizing, (4) transaction costs, and (5) performance metrics. Results depend on data quality and how realistically you simulate execution. Backtests validate logic and give you a sense of win rate, drawdown, and expectancy—but past performance doesn't guarantee future results. Market regime, liquidity, and slippage can change." },
    { type: "text", heading: "Look-Ahead Bias", content: "Look-ahead bias is using information that wouldn't have been available at the time of the trade. Examples: using the closing price of the same bar for a signal (you might not have had it at the open), or using a future value in a calculation. Fix: only use data that would have been known at each bar (e.g. prior close, not current close, for a daily signal). In pandas, shift(1) gives you the previous row—use that for lagged inputs. Always ask: 'Could I have known this when I had to decide?'" },
    { type: "interactive", heading: "Check Your Understanding", content: "Bias ruins backtests.", component: "ConceptCheck", props: { question: "What is look-ahead bias?", reveal: "Using future data in the past—e.g. a signal that wouldn't have been known at decision time. Ruins backtests. Use only lagged or past data." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Backtest = historical simulation with clear rules. Avoid look-ahead: use only information available at each bar." },
  ]),
  createLesson("backtest-pitfalls", 2, "Avoiding Bias", "backtest-pitfalls", "18 min", ["Overfitting", "Survivorship bias"], [
    { type: "text", heading: "Overfitting", content: "Overfitting means tuning your strategy so much to past data that it fits noise, not signal. In-sample performance looks great; out-of-sample it fails. To reduce overfitting: use simple rules, few parameters, and avoid optimizing every knob. Prefer walk-forward or out-of-sample testing: train on one period, test on another. If you've optimized on 2010–2020, test on 2021–2023 without changing the strategy. More parameters = more overfitting risk." },
    { type: "text", heading: "Survivorship and Other Bias", content: "Survivorship bias: backtesting only on names that exist today excludes delisted (often failed) companies; results look better than reality. Use a point-in-time universe or survivorship-bias-free data when possible. Also: account for transaction costs (commissions, spread), and don't assume you can always fill at the close. Slippage and partial fills matter for high-frequency or illiquid names. Be conservative in assumptions." },
    { type: "interactive", heading: "Think It Through", content: "Overfitting = curve-fitting the past.", component: "ConceptCheck", props: { question: "What is overfitting?", reveal: "Optimizing so much to past data that the strategy fits noise and fails out of sample. Keep it simple; use walk-forward and out-of-sample tests." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Avoid overfitting (simple rules, out-of-sample test). Watch survivorship bias and transaction costs. Be conservative." },
  ]),
  createLesson("walk-forward", 3, "Walk-Forward Analysis", "walk-forward", "16 min", ["Train/test split in time", "Rolling forward"], [
    { type: "text", heading: "What Is Walk-Forward?", content: "Walk-forward analysis: train your model or choose parameters on one period (e.g. 2010–2015), then test on the next (e.g. 2016–2017). Roll forward: now train on 2012–2017, test on 2018–2019. Repeat. You get multiple out-of-sample results and reduce the chance of a single lucky period. It's more robust than one train/test split. Used in both rule-based and ML strategies. The key is that the test period is never used for training or parameter choice." },
    { type: "text", heading: "How to Implement", content: "Define train window (e.g. 5 years) and test window (e.g. 1 year). For each roll: fit parameters or train model on train window only; run backtest on test window; record metrics. Aggregate results (e.g. average Sharpe, worst drawdown across test windows). If performance is consistent across rolls, the strategy is more credible. If it's good in one roll and bad in another, be cautious—may be regime-dependent or overfit." },
    { type: "interactive", heading: "Check Your Understanding", content: "Walk-forward = rolling out-of-sample.", component: "ConceptCheck", props: { question: "What is walk-forward analysis?", reveal: "Train on one period, test on the next; roll forward. Multiple out-of-sample tests. More robust than a single backtest." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Walk-forward = train then test, roll forward. Reduces overfitting and gives multiple OOS results. Use it before trusting a strategy." },
  ]),
  createLesson("backtest-summary", 4, "Backtesting: Summary", "backtest-summary", "8 min", ["Recap and best practices"], [
    { type: "text", heading: "Recap", content: "Backtest with clear rules and no look-ahead. Avoid overfitting (simple rules, out-of-sample). Consider survivorship bias and costs. Use walk-forward for robustness. Backtests validate logic; they don't guarantee future performance." },
    { type: "interactive", heading: "Final Check", content: "Robust backtesting.", component: "ConceptCheck", props: { question: "Why use walk-forward instead of a single backtest?", reveal: "You get multiple out-of-sample periods. Reduces chance of overfitting to one period and gives a more realistic view of robustness." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "No look-ahead, no overfitting, walk-forward, account for costs. Then interpret results with caution." },
  ], true),
];
