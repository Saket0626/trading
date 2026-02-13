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
  moduleId: "quant-strategies",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level5QuantStrategiesLessons: Lesson[] = [
  createLesson("mean-reversion", 1, "Mean Reversion", "mean-reversion", "18 min", ["Concept and z-score", "Bollinger and RSI reversion"], [
    { type: "text", heading: "What Is Mean Reversion?", content: "Mean reversion is the idea that prices tend to return to their average (or another equilibrium). After a big move up, the asset may pull back; after a big move down, it may bounce. It works best in ranging markets; in strong trends, price can stay extended for a long time. Statistically, you can measure how far price is from the mean (e.g. z-score: number of standard deviations from the mean). Entry: when z-score is very high or low (e.g. beyond ±2). Exit: when it returns toward zero or hits a target. Use a trend filter (e.g. only mean-revert when not in a strong trend) to avoid fighting the tape." },
    { type: "text", heading: "Bollinger and RSI", content: "Bollinger Band mean reversion: buy when price touches the lower band, sell at the upper—with a trend filter. RSI mean reversion: buy when RSI < 30 (oversold), sell when RSI > 70 (overbought). Again, filter by trend (e.g. only long when above 200 MA). Stop loss is essential—sometimes the mean shifts or the trend accelerates and 'reversion' fails. Position size and stops define your risk." },
    { type: "interactive", heading: "Check Your Understanding", content: "Mean reversion in context.", component: "ConceptCheck", props: { question: "What is mean reversion?", reveal: "Prices tend to return to the average. Works in ranges; fails in strong trends. Use z-score or Bollinger/RSI with a trend filter." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Mean reversion = bet on return to average. Use in ranges; filter by trend. Z-score, Bollinger, RSI are tools; always use stops." },
  ]),
  createLesson("momentum-strategies", 2, "Momentum Strategies", "momentum-strategies", "18 min", ["Time-series and cross-sectional", "MA crossover and breakouts"], [
    { type: "text", heading: "Momentum in Quant", content: "Momentum means assets that have been going up tend to keep going up (and vice versa) over the horizon you use. Time-series momentum: trade the asset's own past return (e.g. long if 12-month return > 0). Cross-sectional: rank assets by past return, long the winners, short the losers (or avoid the losers). Both have academic support; both can have long drawdowns when trends reverse. Use a clear horizon (e.g. 3 months, 12 months) and rebalance periodically." },
    { type: "text", heading: "MA Crossover and Breakouts", content: "Classic momentum: moving-average crossover (e.g. 50 above 200 = long). Or breakout: long when price makes a new N-day high. Volume confirmation can help. Backtest with costs—momentum strategies can have many trades. Combine with volatility scaling (e.g. size inversely to recent vol) to smooth equity. Momentum works in trending regimes and fails in chop; regime filters (e.g. only trade when volatility is in a band) can help." },
    { type: "interactive", heading: "Think It Through", content: "Momentum = trend following.", component: "ConceptCheck", props: { question: "What is momentum in quant?", reveal: "Trend-following: assets that went up tend to keep going (and vice versa) over the horizon used. Can be time-series or cross-sectional." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Momentum = trend following. MA crossover, breakouts, or cross-sectional rank. Use volatility scaling and accept drawdowns in reversals." },
  ]),
  createLesson("pairs-trading", 3, "Pairs Trading", "pairs-trading", "18 min", ["Spread and cointegration", "Entry and exit"], [
    { type: "text", heading: "What Is Pairs Trading?", content: "Pairs trading: find two assets that move together (e.g. two stocks in the same sector, or an ETF and its components). Trade the spread—when the spread diverges (one outperforms the other by a lot), bet it reverts. So you're market-neutral: long one, short the other. The key is cointegration: a statistical long-run relationship so the spread is mean-reverting. If they're only correlated, the spread can drift forever. Test for cointegration (e.g. Engle-Granger) before trading." },
    { type: "text", heading: "Entry and Exit", content: "Compute the spread (e.g. price A minus hedge ratio × price B, or ratio A/B). When spread is X standard deviations above its mean, short the spread (short A, long B). When it's X std below, long the spread. Exit when spread reverts to mean or after a holding period. Position size: so that dollar exposure is balanced. Risks: cointegration can break (regime change), one name can have a fundamental shock. Monitor the pair; exit if the relationship breaks." },
    { type: "interactive", heading: "Check Your Understanding", content: "Pairs = trade the spread.", component: "ConceptCheck", props: { question: "What is pairs trading?", reveal: "Trade the spread between two correlated assets. When the spread diverges, bet it reverts. Need cointegration; market-neutral (long one, short other)." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Pairs = trade mean-reverting spread of two assets. Cointegration is key. Entry on divergence; exit on reversion. Monitor for breakdown." },
  ]),
  createLesson("quant-strategies-summary", 4, "Quant Strategies: Summary", "quant-strategies-summary", "8 min", ["When to use each"], [
    { type: "text", heading: "Recap", content: "Mean reversion: bet on return to average; use in ranges. Momentum: trend-following; MA crossover or cross-sectional. Pairs: trade the spread of cointegrated assets; market-neutral. Combine with risk management, costs, and regime awareness. Backtest and walk-forward before live." },
    { type: "interactive", heading: "Final Check", content: "Strategy choice.", component: "ConceptCheck", props: { question: "When does mean reversion tend to fail?", reveal: "In strong trends—price can stay extended. Use a trend filter or avoid mean reversion in clearly trending regimes." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Mean reversion, momentum, pairs—each has a place. Match strategy to regime; backtest and manage risk." },
  ], true),
];
