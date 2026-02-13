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
  moduleId: "risk-metrics",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level5RiskMetricsLessons: Lesson[] = [
  createLesson("sharpe-sortino", 1, "Sharpe and Sortino", "sharpe-sortino", "18 min", ["Sharpe ratio", "Sortino and downside risk"], [
    { type: "text", heading: "Sharpe Ratio", content: "The Sharpe ratio measures risk-adjusted return: (Return − Risk-free rate) / Standard deviation of returns. It answers: how much excess return do I get per unit of volatility? Higher is better. Above 1 is good, above 2 is strong, above 3 is rare. Use annualized return and volatility for comparison across strategies. Limitation: it treats all volatility the same; upside volatility isn't bad, but Sharpe penalizes it. So for strategies with positive skew, Sortino can be more appropriate." },
    { type: "text", heading: "Sortino Ratio", content: "Sortino uses downside deviation instead of total standard deviation—only volatility of negative returns. So it doesn't penalize upside volatility. Formula: (Return − Risk-free) / Downside deviation. It's better when you care more about bad outcomes than overall variability. Calmar ratio = return / max drawdown—focuses on worst peak-to-trough. Use Sharpe for general comparison; Sortino when you want to emphasize downside." },
    { type: "interactive", heading: "Check Your Understanding", content: "Sharpe = return per unit risk.", component: "ConceptCheck", props: { question: "What is the Sharpe ratio?", reveal: "Return in excess of risk-free rate, divided by volatility. Higher = better risk-adjusted return. >1 good, >2 strong." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Sharpe = (return − rf) / vol. Sortino uses downside deviation. Use for comparing strategies; annualize for consistency." },
  ]),
  createLesson("drawdown-analysis", 2, "Drawdown Analysis", "drawdown-analysis", "16 min", ["Max drawdown", "Recovery time"], [
    { type: "text", heading: "Maximum Drawdown", content: "Drawdown is the peak-to-trough decline in equity. Maximum drawdown (MDD) is the largest such decline over the period. It answers: what was the worst loss from a high watermark? Example: equity goes from 100 to 90 to 85 to 95. Drawdown from 100: 15% (low at 85). MDD is critical for risk: can you survive that loss psychologically and financially? Recovery time is how long from the trough to a new high. Long recovery can test discipline. Report MDD and recovery in your backtests and live tracking." },
    { type: "text", heading: "Using Drawdown", content: "Size positions and risk so that a realistic MDD doesn't blow you out. Professional funds often target MDD (e.g. max 20%). In backtests, MDD is backward-looking; live MDD can be worse. Combine with Sharpe and return: a strategy with 30% annual return and 40% MDD is very different from 15% return and 10% MDD. Prefer strategies with acceptable MDD for your capital and psychology." },
    { type: "interactive", heading: "Think It Through", content: "Drawdown = worst peak-to-trough.", component: "ConceptCheck", props: { question: "What is maximum drawdown?", reveal: "Largest peak-to-trough decline. Shows worst loss from a high. Critical for risk and survival; also consider recovery time." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MDD = largest peak-to-trough decline. Use for risk and sizing. Track recovery time. Match MDD tolerance to your capital and psychology." },
  ]),
  createLesson("monte-carlo", 3, "Monte Carlo Simulation", "monte-carlo", "16 min", ["What Monte Carlo is", "Use in trading"], [
    { type: "text", heading: "What Is Monte Carlo?", content: "Monte Carlo simulation runs many random trials to assess outcomes. In trading, you might: (1) randomize the order of historical returns and recompute equity curve—see distribution of outcomes. (2) Simulate future returns from a distribution (e.g. normal or fitted) and see distribution of final wealth or drawdown. (3) Randomize trade order in a backtest to test robustness. You get confidence intervals: e.g. 95% of runs had MDD between 10% and 25%. It doesn't predict the future but shows range of plausible outcomes given your assumptions." },
    { type: "text", heading: "Use in Practice", content: "Use Monte Carlo to stress-test: what if the next 100 trades are in a bad order? What if volatility doubles? It can show that a strategy with a 15% backtest MDD might have a 25% MDD in 5% of random orderings. That informs position size and risk. Don't over-trust the distribution you assume (e.g. normal)—real returns have fat tails. Use it as one input for risk and robustness." },
    { type: "interactive", heading: "Check Your Understanding", content: "Monte Carlo = many random trials.", component: "ConceptCheck", props: { question: "What is Monte Carlo in trading?", reveal: "Running many random simulations (e.g. of returns or trade order) to assess risk and robustness. Gives distribution of outcomes, not a single forecast." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Monte Carlo = many random trials for distribution of outcomes. Use for drawdown and robustness. Assumptions matter; use as stress test." },
  ]),
  createLesson("risk-metrics-summary", 4, "Risk Metrics: Summary", "risk-metrics-summary", "8 min", ["Recap and use"], [
    { type: "text", heading: "Recap", content: "Sharpe and Sortino for risk-adjusted return. Max drawdown and recovery for worst loss. Monte Carlo for distribution of outcomes. Use these in backtests and live to size risk and compare strategies." },
    { type: "interactive", heading: "Final Check", content: "Metrics and decisions.", component: "ConceptCheck", props: { question: "Why report max drawdown alongside return?", reveal: "Return alone doesn't show risk. MDD shows worst loss from a high—critical for survival and psychology. Match strategy to your MDD tolerance." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Sharpe, Sortino, MDD, Monte Carlo—use together to evaluate and size risk." },
  ], true),
];
