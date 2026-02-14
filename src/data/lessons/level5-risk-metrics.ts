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
  createLesson("sharpe-sortino", 1, "Sharpe and Sortino", "sharpe-sortino", "22 min", ["Sharpe ratio", "Sortino and downside risk", "When to use each"], [
    {
      type: "text",
      heading: "Sharpe Ratio",
      content:
        "The Sharpe ratio measures risk-adjusted return: (Return − Risk-free rate) / Standard deviation of returns. It answers: how much excess return do I get per unit of volatility? Higher is better. Above 1 is good, above 2 is strong, above 3 is rare.\n\nUse annualized return and volatility for comparison across strategies: annual_return = (1 + total_return)^(252/days) - 1; annual_vol = daily_vol * sqrt(252). Limitation: it treats all volatility the same; upside volatility (big gains) isn't bad, but Sharpe penalizes it. So for strategies with positive skew (e.g. trend-following with big wins), Sortino can be more appropriate.",
    },
    {
      type: "text",
      heading: "Sortino Ratio",
      content:
        "Sortino uses downside deviation instead of total standard deviation—only volatility of negative returns. So it doesn't penalize upside volatility. Formula: (Return − Risk-free) / Downside deviation. Downside deviation = sqrt(mean(min(return - target, 0)^2)), often with target = 0.\n\nIt's better when you care more about bad outcomes than overall variability. Calmar ratio = return / max drawdown—focuses on worst peak-to-trough. Use Sharpe for general comparison; Sortino when you want to emphasize downside. For asymmetric strategies (big wins, small losses), Sortino often gives a fairer picture.",
    },
    {
      type: "analogy",
      heading: "The Fuel Efficiency Analogy",
      content:
        "Think of Sharpe like miles per gallon. You want more return (miles) per unit risk (fuel). A strategy with 20% return and 10% vol has Sharpe ~1.5 (assuming 5% risk-free). Sortino is like miles per gallon of 'bad fuel'—only counting when you're losing. If your strategy has big gains (upside vol) and small losses (downside vol), Sortino rewards that; Sharpe penalizes the big gains. Use the metric that matches what you care about.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Annualize for consistency. A strategy with 1% monthly return and 2% monthly vol has Sharpe ~0.5 (annualized). Compare apples to apples—same period, same risk-free rate. Use risk-free = T-bill rate for the period (e.g. 4% in 2024). For backtests, report both Sharpe and Sortino; they tell different stories.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Sharpe = return per unit risk.",
      component: "ConceptCheck",
      props: { question: "What is the Sharpe ratio?", reveal: "Return in excess of risk-free rate, divided by volatility. Higher = better risk-adjusted return. >1 good, >2 strong." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Sharpe = (return − rf) / vol. Sortino uses downside deviation. Use for comparing strategies; annualize for consistency. Sortino for asymmetric strategies." },
  ], true),
  createLesson("drawdown-analysis", 2, "Drawdown Analysis", "drawdown-analysis", "20 min", ["Max drawdown", "Recovery time", "Using MDD in sizing"], [
    {
      type: "text",
      heading: "Maximum Drawdown",
      content:
        "Drawdown is the peak-to-trough decline in equity. Maximum drawdown (MDD) is the largest such decline over the period. It answers: what was the worst loss from a high watermark? Example: equity goes from 100 to 90 to 85 to 95. Drawdown from 100: 15% (low at 85). MDD = 15%.\n\nMDD is critical for risk: can you survive that loss psychologically and financially? Recovery time is how long from the trough to a new high. Long recovery (e.g. 2 years) can test discipline. Report MDD and recovery in your backtests and live tracking. Calmar ratio = return / MDD—return per unit of worst pain.",
    },
    {
      type: "text",
      heading: "Using Drawdown",
      content:
        "Size positions and risk so that a realistic MDD doesn't blow you out. If backtest MDD is 20%, assume live MDD could be 25–30%—be conservative. Professional funds often target MDD (e.g. max 20%). In backtests, MDD is backward-looking; live MDD can be worse.\n\nCombine with Sharpe and return: a strategy with 30% annual return and 40% MDD is very different from 15% return and 10% MDD. The former might be too volatile for your psychology. Prefer strategies with acceptable MDD for your capital and psychology. Use MDD to size—if you can't stomach 30% drawdown, don't run a strategy with 30% backtest MDD.",
    },
    {
      type: "analogy",
      heading: "The Roller Coaster Analogy",
      content:
        "Think of drawdown like a roller coaster drop. MDD is the biggest drop—how far you fall from the peak before climbing again. Recovery time is how long until you're back at the top. Some people love steep drops; others get sick. Match the ride to your stomach. A strategy with 40% MDD is a wild ride—can you hold on? Use MDD to choose strategies that fit your risk tolerance.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Backtest MDD underestimates live MDD. Markets change; drawdowns can be deeper and longer in live trading. Assume live MDD could be 1.5x backtest MDD. Also, recovery time matters—a 20% MDD that recovers in 2 months is different from one that takes 2 years. Don't size based on best-case drawdown; use worst-case thinking.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Drawdown = worst peak-to-trough.",
      component: "ConceptCheck",
      props: { question: "What is maximum drawdown?", reveal: "Largest peak-to-trough decline. Shows worst loss from a high. Critical for risk and survival; also consider recovery time." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MDD = largest peak-to-trough decline. Use for risk and sizing. Track recovery time. Match MDD tolerance to your capital and psychology. Be conservative." },
  ], true),
  createLesson("monte-carlo", 3, "Monte Carlo Simulation", "monte-carlo", "20 min", ["What Monte Carlo is", "Use in trading", "Interpreting results"], [
    {
      type: "text",
      heading: "What Is Monte Carlo?",
      content:
        "Monte Carlo simulation runs many random trials to assess outcomes. In trading, you might: (1) randomize the order of historical returns and recompute equity curve—see distribution of outcomes. (2) Simulate future returns from a distribution (e.g. normal or fitted) and see distribution of final wealth or drawdown. (3) Randomize trade order in a backtest to test robustness.\n\nYou get confidence intervals: e.g. 95% of runs had MDD between 10% and 25%. It doesn't predict the future but shows range of plausible outcomes given your assumptions. Run 1,000–10,000 simulations; report percentiles (5th, 50th, 95th) for MDD, final return, etc.",
    },
    {
      type: "text",
      heading: "Use in Practice",
      content:
        "Use Monte Carlo to stress-test: what if the next 100 trades are in a bad order? What if volatility doubles? It can show that a strategy with a 15% backtest MDD might have a 25% MDD in 5% of random orderings. That informs position size and risk.\n\nDon't over-trust the distribution you assume (e.g. normal)—real returns have fat tails. Use bootstrap (resample historical returns) or fitted distributions (e.g. Student-t for fat tails). Use it as one input for risk and robustness—not as a crystal ball. Monte Carlo shows 'what could happen' given your assumptions; it doesn't say what will happen.",
    },
    {
      type: "analogy",
      heading: "The Dice Analogy",
      content:
        "Think of Monte Carlo like rolling dice many times. One roll = one outcome. Roll 10,000 times = distribution of outcomes. You can't predict the next roll, but you know the range—e.g. 95% of rolls are between 2 and 12 for two dice. Same with returns: randomize order or simulate from a distribution, run 10,000 trials, see the distribution of MDD and final wealth. It tells you what's plausible, not what's certain.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use bootstrap for path-dependency: resample blocks of returns (e.g. 20-day blocks) to preserve autocorrelation. Report 5th and 95th percentile MDD—if 5th percentile MDD is 25%, 5% of random orderings had MDD ≥ 25%. Size for the bad tail, not the average.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Monte Carlo = many random trials.",
      component: "ConceptCheck",
      props: { question: "What is Monte Carlo in trading?", reveal: "Running many random simulations (e.g. of returns or trade order) to assess risk and robustness. Gives distribution of outcomes, not a single forecast." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Monte Carlo = many random trials for distribution of outcomes. Use for drawdown and robustness. Assumptions matter; use as stress test. Report percentiles." },
  ], true),
  createLesson("risk-metrics-summary", 4, "Risk Metrics: Summary", "risk-metrics-summary", "12 min", ["Recap and use", "Automated systems preview"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Sharpe and Sortino for risk-adjusted return—return per unit of (total or downside) risk. Max drawdown and recovery for worst loss—can you survive it? Monte Carlo for distribution of outcomes—what could happen given your assumptions?\n\nUse these in backtests and live to size risk and compare strategies. Report: return, Sharpe, Sortino, MDD, recovery time, Monte Carlo percentiles. A strategy isn't good or bad in isolation—it's good or bad for your capital and psychology. Match metrics to your goals.",
    },
    {
      type: "preview",
      heading: "Automated Systems (Preview)",
      content:
        "In the Automated Systems module, we'll cover how to deploy strategies live—data, strategy engine, execution, risk controls, monitoring. Risk metrics feed into your risk controls: max drawdown, daily loss limit, position limits. You'll need MDD and Sharpe to size and monitor. See you there!",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Metrics and decisions.",
      component: "ConceptCheck",
      props: { question: "Why report max drawdown alongside return?", reveal: "Return alone doesn't show risk. MDD shows worst loss from a high—critical for survival and psychology. Match strategy to your MDD tolerance." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Sharpe, Sortino, MDD, Monte Carlo—use together to evaluate and size risk. Match strategy to your capital and psychology." },
  ], true),
];
