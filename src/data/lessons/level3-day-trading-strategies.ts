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
  level: 3,
  moduleId: "day-trading-strategies",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const dayTradingStrategiesLessons: Lesson[] = [
  createLesson("orb-strategy", 1, "Opening Range Breakout (ORB)", "orb-strategy", "20 min", ["Define the opening range", "Entry, stop, target rules", "When it works best"], [
    {
      type: "text",
      heading: "How ORB Works",
      content:
        "The opening range is the high and low of the first 15–30 minutes of the session. Many institutional and algorithmic orders get executed in that window, so the range often acts as a reference for the rest of the day. In Opening Range Breakout (ORB), you go long when price breaks above the range high and short when it breaks below the range low. Entry is typically on a close beyond the range (or a retest of the broken level) with volume.\n\nStop loss is usually the opposite side of the range—e.g. for a long, your stop is below the range low. Take profit is often 1–2× the height of the range, or the next key level. Example: range high 100, low 98 (height = 2). Long on break above 100, stop at 97.50 (below the low), target at 102 or 104 (1× or 2× the range height). Risk-reward is defined by the range itself.",
    },
    {
      type: "text",
      heading: "Best Use",
      content:
        "ORB works best in stocks or indices with a catalyst (earnings, news) or on days when you expect a trend. It can whipsaw on quiet, range-bound days. Use it on 5-minute charts; confirm with volume. Win rate is often 40–50%; so risk-reward of at least 1:2 is important. Common mistake: entering on the first tick beyond the range without volume—wait for confirmation.\n\nOn low-volatility days, the range is tight and breakouts often fail. On high-volatility days (e.g. Fed announcement, earnings), the range can be wide and the breakout meaningful. Check the range size relative to recent days—a very narrow range might mean a big move is coming, but it could go either way.",
    },
    {
      type: "analogy",
      heading: "The Starting Gate Analogy",
      content:
        "Think of the opening range like the first lap of a race. Everyone is jockeying for position. The high and low of that lap define the 'starting box.' When price breaks out of that box, it's like a runner breaking away from the pack. The breakout suggests conviction—but you need volume to confirm it's real, not a fake burst that gets reeled back in.",
    },
    { type: "interactive", heading: "Check Your Understanding", content: "ORB uses the first range of the day.", component: "ConceptCheck", props: { question: "What is the opening range in ORB?", reveal: "The high and low of the first 15–30 minutes. ORB trades a breakout above that high (long) or below that low (short), with stop on the opposite side." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ORB = break of first 15–30 min range. Enter on confirmation + volume; stop opposite side; target 1–2× range. Best with catalyst; aim 1:2+ RR." },
  ], true),
  createLesson("vwap-strategy", 2, "VWAP Trading", "vwap-strategy", "18 min", ["Use VWAP as intraday S/R", "Pullback entries in trend"], [
    {
      type: "text",
      heading: "Why VWAP Matters",
      content:
        "VWAP (Volume Weighted Average Price) is the average price of all shares traded during the day, weighted by volume. Institutions often use it as a benchmark—they try to get fills at or better than VWAP. So price tends to gravitate toward VWAP and often respects it as support in an uptrend (pullbacks to VWAP hold) and resistance in a downtrend.\n\nDay traders use it to time entries: in an uptrend, buy pullbacks to VWAP with a stop below VWAP and target the prior high or a measured move. The logic: if price is above VWAP, the average buyer today is in profit—bullish. Price pulling back to VWAP often finds buyers (institutions adding, or mean reversion). Don't fight VWAP: if price can't get above it, avoid longs.",
    },
    {
      type: "text",
      heading: "Rules",
      content:
        "Identify the trend (e.g. price above VWAP and making higher highs = uptrend). Wait for a pullback to VWAP (or the first touch). Enter when price bounces (e.g. bullish candle or break of a small downtrend line) with volume. Stop: below VWAP (or below the pullback low). Target: previous high or 1:2 RR. Best on liquid names (stocks, forex majors) and 15-min or 1-hour for swing-style intraday. Don't fight VWAP: if price is stuck below it with no bounce, avoid longs.\n\nThe first touch of VWAP in an uptrend often holds—buyers step in. The second or third touch is riskier; if price keeps failing at VWAP, the trend may be weakening. Use the bounce as confirmation—don't buy the touch itself, buy the reversal candle or structure.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Combine VWAP with the opening range. If price opens above VWAP and holds, that's bullish. If it opens below and can't reclaim VWAP, that's bearish. The first 30–60 minutes often set the tone. Use VWAP + ORB together for confluence.",
    },
    { type: "interactive", heading: "Think It Through", content: "VWAP as institutional benchmark.", component: "ConceptCheck", props: { question: "Why do traders watch VWAP?", reveal: "Institutions use it as a benchmark; price often respects it as intraday support (in uptrends) or resistance (in downtrends). Pullbacks to VWAP can offer high-probability entries." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "VWAP = volume-weighted average price; use as intraday S/R. Buy pullbacks to VWAP in uptrends, stop below VWAP." },
  ], true),
  createLesson("breakout-strategy", 3, "Breakout Trading", "breakout-strategy", "18 min", ["Trade key level breaks", "Volume and confirmation"], [
    {
      type: "text",
      heading: "How Breakouts Work",
      content:
        "After price consolidates (e.g. in a range, triangle, or flag), it often makes a sharp move in one direction. Breakout trading is entering when price closes beyond a key level—resistance for longs, support for shorts—with the expectation that the move will continue. The level can be a horizontal S/R, a trendline, or the high/low of a pattern.\n\nEntry: many wait for a close beyond the level (not just a wick) and preferably with above-average volume. Low-volume breakouts fail more often. Stop is usually just inside the broken level or below the breakout candle. Target is often a measured move (e.g. height of the consolidation projected from the break). Example: 5-point range (95–100), breakout above 100, target 105. Risk: stop at 99. Reward: 5. That's 1:5 RR—excellent if the breakout holds.",
    },
    { type: "text", heading: "What Confirms a Breakout", content: "A close beyond the level (not just a spike). Volume: ideally volume on the breakout is higher than recent average. In stocks, some use a volume climax or a specific multiple of average. Retest: some traders wait for a pullback to the broken level and then enter on the bounce—cleaner risk/reward but you may miss the move. False breakouts happen often; so position size and stop are critical. Don't add size until the breakout is clearly holding." },
    { type: "warning", heading: "Common Mistake", content: "Entering on the first tick above resistance without a close or volume. That's a fake-out trap. Wait for confirmation." },
    { type: "interactive", heading: "Check Your Understanding", content: "Confirmation reduces false breakouts.", component: "ConceptCheck", props: { question: "What confirms a breakout?", reveal: "A close beyond the level plus volume. Without volume, breakouts often fail. Some also wait for a retest of the broken level." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Breakout = close beyond key level + volume. Stop inside the level; target measured move. Wait for confirmation—don't chase the first tick." },
  ], true),
  createLesson("strategies-summary", 4, "Day Trading Strategies: Summary", "strategies-summary", "12 min", ["When to use each strategy"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "ORB: first 15–30 min range break; good with catalyst. VWAP: pullbacks to VWAP in trend for intraday S/R. Breakout: close beyond level + volume; measured move target. All require clear entry, stop, target and 1:2+ risk-reward. Pick one, paper trade it, then go live with small size.\n\nDon't use all three at once when starting. Master one—get 50+ paper trades with it—then consider adding another. Each strategy has its own nuances. Spreading attention across too many approaches slows learning and creates confusion when two strategies conflict (e.g. ORB says short, VWAP says wait for pullback).",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Chasing every breakout or ORB without a filter. On choppy days, you'll get chopped. Add a filter: e.g. only take ORB when the range is at least X% of average daily range, or only take breakouts when price is in the direction of the higher-timeframe trend. Quality over quantity.",
    },
    { type: "interactive", heading: "Final Check", content: "Strategy and confirmation.", component: "ConceptCheck", props: { question: "Why is volume important on breakouts?", reveal: "Low-volume breakouts often fail (no conviction). Higher volume suggests real participation and increases the odds the move will continue." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ORB, VWAP, breakout—each has clear rules. Use one, confirm with volume and structure, and always use stops and targets." },
  ], true),
];
