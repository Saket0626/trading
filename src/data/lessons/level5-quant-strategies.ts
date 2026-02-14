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
  createLesson("mean-reversion", 1, "Mean Reversion", "mean-reversion", "22 min", ["Concept and z-score", "Bollinger and RSI reversion", "Trend filters"], [
    {
      type: "text",
      heading: "What Is Mean Reversion?",
      content:
        "Mean reversion is the idea that prices tend to return to their average (or another equilibrium). After a big move up, the asset may pull back; after a big move down, it may bounce. It works best in ranging markets; in strong trends, price can stay extended for a long time—mean reversion can get crushed.\n\nStatistically, you can measure how far price is from the mean: z-score = (price - mean) / std. Z-score > 2 means price is 2 standard deviations above the mean—often a short signal. Z-score < -2 means price is 2 std below—often a long signal. Entry: when z-score is very high or low (e.g. beyond ±2). Exit: when it returns toward zero or hits a target. Use a trend filter (e.g. only mean-revert when not in a strong trend) to avoid fighting the tape.",
    },
    {
      type: "text",
      heading: "Bollinger and RSI",
      content:
        "Bollinger Band mean reversion: buy when price touches the lower band, sell at the upper. Bands are mean ± 2 standard deviations. With a trend filter: only long when above 200 MA; only short when below. RSI mean reversion: buy when RSI < 30 (oversold), sell when RSI > 70 (overbought). Again, filter by trend (e.g. only long when above 200 MA).\n\nStop loss is essential—sometimes the mean shifts or the trend accelerates and 'reversion' fails. Position size and stops define your risk. Mean reversion in a strong downtrend can mean catching a falling knife—always use a trend filter.",
    },
    {
      type: "analogy",
      heading: "The Rubber Band Analogy",
      content:
        "Think of mean reversion like a rubber band. When stretched too far (price far from mean), it tends to snap back. Z-score measures how stretched: ±2 = stretched, ±3 = very stretched. But in a strong wind (trend), the rubber band can stretch further before snapping—or it might break. Use a trend filter: only bet on snapback when the wind isn't too strong. Bollinger and RSI are similar: they measure stretch (oversold/overbought) and you bet on snapback—with a trend filter.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Mean reversion fails in strong trends. Buying oversold in a crash can mean catching a falling knife—price can stay oversold for weeks. Always use a trend filter: only mean-revert in the direction of the trend (e.g. only long when above 200 MA). Use stops—the mean can shift, and 'reversion' may never come. Don't assume every oversold bounce is a buy.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Mean reversion in context.",
      component: "ConceptCheck",
      props: { question: "What is mean reversion?", reveal: "Prices tend to return to the average. Works in ranges; fails in strong trends. Use z-score or Bollinger/RSI with a trend filter." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Mean reversion = bet on return to average. Use in ranges; filter by trend. Z-score, Bollinger, RSI are tools; always use stops. Trend filter is essential." },
  ], true),
  createLesson("momentum-strategies", 2, "Momentum Strategies", "momentum-strategies", "22 min", ["Time-series and cross-sectional", "MA crossover and breakouts", "Volatility scaling"], [
    {
      type: "text",
      heading: "Momentum in Quant",
      content:
        "Momentum means assets that have been going up tend to keep going up (and vice versa) over the horizon you use. Time-series momentum: trade the asset's own past return (e.g. long if 12-month return > 0; short if < 0). Cross-sectional: rank assets by past return, long the winners, short the losers (or avoid the losers). Both have academic support; both can have long drawdowns when trends reverse.\n\nUse a clear horizon (e.g. 3 months, 12 months) and rebalance periodically—monthly is common. Momentum works in trending regimes and fails in chop; regime filters can help. Expect drawdowns—momentum strategies can lose for years when trends reverse.",
    },
    {
      type: "text",
      heading: "MA Crossover and Breakouts",
      content:
        "Classic momentum: moving-average crossover (e.g. 50 above 200 = long; 50 below 200 = short or flat). Or breakout: long when price makes a new N-day high; exit when it breaks below N-day low. Volume confirmation can help—breakouts with above-average volume are more reliable.\n\nBacktest with costs—momentum strategies can have many trades. Combine with volatility scaling: size inversely to recent vol (e.g. ATR). When vol is high, reduce size; when vol is low, increase size. This smooths equity and reduces risk during stress. Momentum works in trending regimes and fails in chop; use regime filters when possible.",
    },
    {
      type: "analogy",
      heading: "The Train Analogy",
      content:
        "Think of momentum like a moving train. Once it's going, it tends to keep going. Time-series momentum: is this train (asset) moving up or down? Cross-sectional: which trains are moving fastest? MA crossover: is the short-term speed above the long-term average? Breakout: has the train broken out of the station (new high)? But trains can reverse—momentum drawdowns happen when trends end. Volatility scaling: reduce exposure when the tracks are rough (high vol); increase when smooth.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Volatility scaling improves momentum strategies. Instead of fixed size, use size = target_vol / current_vol (e.g. target 10% annual vol, scale by inverse of 20-day realized vol). This keeps risk roughly constant and smooths equity. Also, combine momentum with trend filters—e.g. only long when above 200 MA, only short when below.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Momentum = trend following.",
      component: "ConceptCheck",
      props: { question: "What is momentum in quant?", reveal: "Trend-following: assets that went up tend to keep going (and vice versa) over the horizon used. Can be time-series or cross-sectional." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Momentum = trend following. MA crossover, breakouts, or cross-sectional rank. Use volatility scaling and accept drawdowns in reversals." },
  ], true),
  createLesson("pairs-trading", 3, "Pairs Trading", "pairs-trading", "22 min", ["Spread and cointegration", "Entry and exit", "Risks and monitoring"], [
    {
      type: "text",
      heading: "What Is Pairs Trading?",
      content:
        "Pairs trading: find two assets that move together (e.g. two stocks in the same sector, or an ETF and its components). Trade the spread—when the spread diverges (one outperforms the other by a lot), bet it reverts. So you're market-neutral: long one, short the other. The key is cointegration: a statistical long-run relationship so the spread is mean-reverting.\n\nIf they're only correlated, the spread can drift forever—correlation measures short-term comovement; cointegration measures long-run equilibrium. Test for cointegration (e.g. Engle-Granger test) before trading. Use statsmodels or similar: coint(A, B) returns a p-value; low p-value = cointegrated.",
    },
    {
      type: "text",
      heading: "Entry and Exit",
      content:
        "Compute the spread: price A minus hedge ratio × price B. The hedge ratio comes from the cointegration regression (e.g. A = alpha + beta * B; hedge ratio = beta). Or use ratio A/B. When spread is X standard deviations above its mean, short the spread (short A, long B). When it's X std below, long the spread. X = 2 is common; adjust for your universe. Exit when spread reverts to mean or after a holding period.\n\nPosition size: so that dollar exposure is balanced—$1 long A, $1 short B (or scaled by beta). Risks: cointegration can break (regime change), one name can have a fundamental shock. Monitor the pair; exit if the relationship breaks (e.g. spread blows out further).",
    },
    {
      type: "analogy",
      heading: "The Twin Analogy",
      content:
        "Think of pairs trading like twins on a leash. They usually move together—when one walks left, the other follows. Cointegration means they're tied by a long-run relationship; they may drift apart temporarily but tend to reunite. When they're far apart (spread at 2+ std), you bet they'll come back together—long the laggard, short the leader. But sometimes the leash breaks (cointegration breaks)—one twin runs away. Monitor and exit if the relationship breaks.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Cointegration can break. A merger, bankruptcy, or regime change can end the relationship—the spread can blow out further instead of reverting. Always use stops. Test on out-of-sample data; cointegration in-sample doesn't guarantee cointegration out-of-sample. One-name risk: if one stock has a fundamental shock (earnings miss, scandal), the pair can move against you. Diversify across many pairs.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Pairs = trade the spread.",
      component: "ConceptCheck",
      props: { question: "What is pairs trading?", reveal: "Trade the spread between two correlated assets. When the spread diverges, bet it reverts. Need cointegration; market-neutral (long one, short other)." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Pairs = trade mean-reverting spread of two assets. Cointegration is key. Entry on divergence; exit on reversion. Monitor for breakdown. Use stops." },
  ], true),
  createLesson("quant-strategies-summary", 4, "Quant Strategies: Summary", "quant-strategies-summary", "12 min", ["When to use each", "ML module preview"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Mean reversion: bet on return to average; use in ranges; filter by trend. Momentum: trend-following; MA crossover or cross-sectional; use volatility scaling. Pairs: trade the spread of cointegrated assets; market-neutral; monitor for breakdown. Combine with risk management, costs, and regime awareness.\n\nBacktest and walk-forward before live. Match strategy to regime: mean reversion in chop, momentum in trends, pairs when you find cointegrated pairs. No strategy works always—diversify across strategies and regimes.",
    },
    {
      type: "preview",
      heading: "ML for Trading (Preview)",
      content:
        "In the ML module, we'll explore when machine learning can help—feature engineering, regime detection, pattern recognition. Quant strategies are rule-based; ML can add non-linear relationships and combine many signals. But ML brings overfitting risk—validate rigorously. Simple rules with good risk management often beat complex ML.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Strategy choice.",
      component: "ConceptCheck",
      props: { question: "When does mean reversion tend to fail?", reveal: "In strong trends—price can stay extended. Use a trend filter or avoid mean reversion in clearly trending regimes." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Mean reversion, momentum, pairs—each has a place. Match strategy to regime; backtest and manage risk. Diversify across strategies." },
  ], true),
];
