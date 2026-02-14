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
  moduleId: "technical-indicators-momentum",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const momentumLessons: Lesson[] = [
  createLesson("mom-intro", 1, "What Is Momentum?", "mom-intro", "14 min", ["Rate of price change", "Why momentum matters", "How traders use it"], [
    {
      type: "text",
      heading: "Rate of Change",
      content:
        "Momentum measures how fast price is moving—the rate of change. When price rises quickly, momentum is positive and often high; when price falls quickly, momentum is negative. Momentum indicators help you see when a move is speeding up or slowing down, and when price might be overbought (ripe for a pullback) or oversold (ripe for a bounce). They don't predict direction by themselves; they add confirmation to price action and trend.\n\nThink of it this way: price tells you where you are; momentum tells you how fast you got there. A stock at $100 could have arrived slowly (low momentum) or in a rush (high momentum). That difference matters. Slow moves can persist; fast moves often exhaust. Momentum helps you gauge whether a trend has legs or is running out of steam.",
    },
    {
      type: "text",
      heading: "What Momentum Adds to Your Analysis",
      content:
        "Momentum indicators (RSI, MACD, Stochastic, etc.) give you a second opinion. Price breaks resistance—is momentum confirming? If RSI is also rising and making higher highs, the breakout has conviction. If RSI is flat or falling while price rises (divergence), the move may be weak. Momentum also helps with timing: in an uptrend, waiting for a pullback that brings RSI to oversold (e.g. below 30) and then back above can give you a higher-probability entry than chasing. Always use momentum with price structure—never in isolation.",
    },
    {
      type: "analogy",
      heading: "The Car Speedometer Analogy",
      content:
        "Price is like your position on the road—you're at mile marker 50. Momentum is like your speedometer—are you doing 30 mph or 90 mph? At 90, you might need to brake soon (overbought, pullback likely). At 30, you have room to accelerate (oversold, bounce possible). The speedometer doesn't tell you which direction you're going—it tells you how fast. Momentum does the same for price.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Momentum can stay overbought or oversold for a long time in strong trends. A stock in a powerful uptrend can have RSI above 70 for weeks. Don't short just because RSI is overbought—you can get run over. Use momentum as confirmation with trend and key levels, not as a standalone reversal signal.",
    },
    { type: "interactive", heading: "Think It Through", content: "What does momentum measure?", component: "ConceptCheck", props: { question: "What does momentum measure?", reveal: "The rate of price change—how fast price is moving. It helps spot overbought/oversold and whether a move is strengthening or weakening." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Momentum = rate of price change. Use it to confirm trend, gauge strength, and spot extremes—but not as a lone reversal signal." },
  ], true),
  createLesson("mom-rsi", 2, "RSI: Relative Strength Index", "mom-rsi", "16 min", ["Calculation (simplified)", "Overbought and oversold", "Entries and exits"], [
    {
      type: "text",
      heading: "What RSI Does",
      content:
        "RSI compares the size of recent gains to recent losses over a set period (often 14). It's plotted from 0 to 100. When RSI is above 70, the asset is often considered overbought—price may pull back. When RSI is below 30, it's often oversold—price may bounce. RSI doesn't have to reverse at 70 or 30; in strong trends it can stay overbought or oversold for a long time. Use it with trend and support/resistance.\n\nThe formula: RSI = 100 − (100 / (1 + RS)), where RS = average gain / average loss over the period. You don't need to calculate it—your platform does—but the idea is simple: more gains than losses = RSI above 50; many more gains = RSI near 100; many more losses = RSI near 0.",
    },
    {
      type: "text",
      heading: "Using RSI for Entries and Exits",
      content:
        "Some traders buy when RSI crosses back above 30 (exit oversold) and sell when it crosses back below 70 (exit overbought). Others use RSI to confirm breakouts: rising RSI with rising price = strong move. Falling RSI with rising price = divergence, possible weakness. A common approach in uptrends: wait for a pullback that pushes RSI into oversold, then buy when RSI crosses back above 30 and price shows a reversal candle. Your stop goes below the pullback low. Never rely on RSI alone—combine with price structure and risk management.",
    },
    {
      type: "analogy",
      heading: "The Rubber Band Analogy",
      content:
        "RSI is like stretching a rubber band. When RSI hits 70, the band is stretched up—it might snap back (pullback). When it hits 30, it's stretched down—it might snap back (bounce). But in a strong wind (trend), the band can stay stretched for a while. The stretch tells you tension is building; it doesn't tell you exactly when it will snap. Use the snap (cross back above 30 or below 70) plus price action for timing.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Some traders use 80/20 or even 90/10 as overbought/oversold in strong trends—stricter levels mean fewer but potentially stronger signals. You can also use RSI's 50 level as a trend filter: RSI above 50 = bullish bias; below 50 = bearish. In an uptrend, look for long entries when RSI pulls back to 40–50 and bounces; that's often better than waiting for 30.",
    },
    { type: "interactive", heading: "Think It Through", content: "What do RSI levels 70 and 30 usually mean?", component: "ConceptCheck", props: { question: "What do RSI levels 70 and 30 usually mean?", reveal: "Above 70 = often overbought (pullback possible). Below 30 = often oversold (bounce possible). In strong trends RSI can stay extreme, so use with context." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "RSI 0–100. >70 overbought, <30 oversold. Use with trend and S/R; in trends, 40–50 can be a better pullback zone than 30." },
  ], true),
  createLesson("mom-rsi-divergence", 3, "RSI Divergence", "mom-rsi-divergence", "14 min", ["Price vs RSI disagree", "Bullish and bearish divergence", "How to trade it"], [
    {
      type: "text",
      heading: "When Price and RSI Disagree",
      content:
        "Divergence occurs when price makes a new high but RSI makes a lower high (bearish divergence), or price makes a new low but RSI makes a higher low (bullish divergence). It suggests the move may be losing steam—momentum isn't confirming price. Bearish: price goes to $110 (new high), but RSI peaks at 65 (lower than the prior high of 72). Bullish: price makes a new low at $90, but RSI bottoms at 35 (higher than the prior low of 28). The idea: price is extending but momentum is fading—often a warning of reversal or at least a pause.\n\nDivergence can warn of reversals but isn't perfect; in strong trends you can get multiple divergences before a turn. The first divergence might lead to a small pullback; the second or third might precede the real reversal. Use it as one signal with confirmation—wait for price to break a key level or show a reversal candle before acting.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Reversing your position on divergence alone. Divergence says 'momentum is weakening'—it doesn't say 'reverse now.' Price can make another high or low before turning. Wait for confirmation: a break of support/resistance, a reversal candle, or volume. And never add to a losing position because of divergence—manage risk first.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is bearish RSI divergence?", component: "ConceptCheck", props: { question: "What is bearish RSI divergence?", reveal: "Price makes a new high but RSI makes a lower high. Momentum isn't confirming the price high—possible weakness or reversal." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Bearish divergence = price higher high, RSI lower high. Bullish = price lower low, RSI higher low. Confirm with price action before reversing." },
  ], true),
  createLesson("mom-macd", 4, "MACD: Components", "mom-macd", "16 min", ["MACD line, signal line, histogram", "How to read each part"], [
    {
      type: "text",
      heading: "The Three Parts of MACD",
      content:
        "MACD (Moving Average Convergence Divergence) has three elements: (1) The MACD line = fast EMA minus slow EMA (often 12 and 26). (2) The signal line = EMA of the MACD line (often 9). (3) The histogram = MACD line minus signal line. When the MACD line is above the signal line, short-term momentum is positive; when below, it's negative. The histogram shows the gap—getting larger when momentum is strengthening, shrinking when it's weakening.\n\nThe MACD line itself is the difference between two EMAs—so when the fast EMA is above the slow, MACD is positive. The signal line smooths the MACD line, which creates lag but also filters noise. The histogram is the easiest to read at a glance: green bars above zero = bullish momentum; red bars below zero = bearish. Bar height = momentum strength.",
    },
    {
      type: "analogy",
      heading: "The Two Runners Analogy",
      content:
        "Imagine two runners: a fast one (12 EMA) and a slower one (26 EMA). The MACD line is the distance between them. When the fast runner pulls ahead, MACD is positive. When the slow runner catches up and passes, MACD goes negative. The signal line is like a smoothed version of that gap. The histogram is how fast the gap is changing—growing = one runner pulling away; shrinking = they're converging. A crossover is when the runners swap positions.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Many traders focus on the histogram more than the lines—it shows momentum strength and change at a glance. When histogram bars shrink toward zero (from either side), a crossover is often coming. When bars are growing, momentum is strong—don't fight it. Use the crossover for entry/exit signals and the histogram for context.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is the MACD histogram?", component: "ConceptCheck", props: { question: "What is the MACD histogram?", reveal: "The difference between the MACD line and the signal line. It shows momentum strength—growing bars = strengthening, shrinking = weakening." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MACD line = fast − slow EMA. Signal line = EMA of MACD. Histogram = difference. Crossovers show turns; histogram shows strength." },
  ], true),
  createLesson("mom-macd-crossovers", 5, "MACD Crossovers and Histogram", "mom-macd-crossovers", "14 min", ["Bullish and bearish crossovers", "Histogram strength", "Lag and filters"], [
    {
      type: "text",
      heading: "Trading the Crossover",
      content:
        "When the MACD line crosses above the signal line, it's a bullish crossover—momentum is turning up. When it crosses below, it's bearish. Many traders use the crossover as an entry signal; the drawback is lag—the move may already be underway. By the time MACD crosses, price may have moved 2–3%. So some traders use the histogram turning (bars shrinking to zero and then growing the other way) as an earlier warning, or they wait for a pullback after the crossover to enter.\n\nThe histogram tells you strength: bars growing in the direction of the trend = strong momentum; shrinking bars = momentum fading, possible reversal or pullback. When the histogram crosses zero, that's the same as the MACD/signal crossover—but watching bar size can give you a heads-up before the cross.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Trading every MACD crossover in a ranging market. MACD will whipsaw—cross up, cross down, cross up again. Add a trend filter: only take long crossovers when price is above the 200 MA (or your chosen trend line). That keeps you out of chop and in the trend.",
    },
    { type: "interactive", heading: "Think It Through", content: "What does a shrinking MACD histogram suggest?", component: "ConceptCheck", props: { question: "What does a shrinking MACD histogram suggest?", reveal: "Momentum is fading—the gap between MACD and signal is getting smaller. Often precedes a crossover or pullback." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MACD above signal = bullish; below = bearish. Histogram growing = strong momentum; shrinking = fading. Add trend filter to reduce whipsaws." },
  ], true),
  createLesson("mom-macd-divergence", 6, "MACD Divergence", "mom-macd-divergence", "12 min", ["Price vs MACD disagree", "Confirm before acting"], [
    {
      type: "text",
      heading: "MACD Divergence",
      content:
        "Like RSI, MACD can show divergence: price makes a new high but MACD makes a lower high (bearish), or price makes a new low but MACD makes a higher low (bullish). It indicates that momentum isn't confirming the price move and a reversal or pause is possible. You can look at the MACD line or the histogram—both can diverge from price. Histogram divergence (e.g. price higher high, histogram lower high) is often easier to spot.\n\nUse MACD divergence with key levels and trend—don't reverse blindly on divergence alone. Wait for price to break a swing low (bearish) or swing high (bullish), or for a clear reversal candle. Divergence is a setup, not an entry. The actual entry needs confirmation.",
    },
    { type: "interactive", heading: "Think It Through", content: "Should you reverse position on divergence alone?", component: "ConceptCheck", props: { question: "Should you reverse position on divergence alone?", reveal: "No. Divergence warns of possible reversal; confirm with price action, key levels, and trend. Multiple divergences can appear before a turn." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MACD divergence = price and MACD moving in opposite structure. Use as a warning; confirm with price break or reversal before entering." },
  ], true),
  createLesson("mom-stochastic", 7, "Stochastic Oscillator", "mom-stochastic", "14 min", ["%K and %D", "Overbought/oversold", "Crossovers"], [
    {
      type: "text",
      heading: "How Stochastic Works",
      content:
        "The Stochastic oscillator compares the current close to the high-low range over a period. It has two lines: %K (fast) and %D (slow, usually a moving average of %K). Values run from 0 to 100. Above 80 is often overbought; below 20 is often oversold. A buy signal: %K crosses above %D in the oversold zone. A sell signal: %K crosses below %D in the overbought zone. Like RSI, it can stay extreme in strong trends.\n\nThe idea: where did price close relative to the recent range? If the close is near the high of the range, Stochastic is high (buying pressure). If the close is near the low, Stochastic is low (selling pressure). The crossover of %K and %D is similar to an MA crossover—it shows momentum turning. Many traders prefer the crossover in the extreme zones (below 20 for buys, above 80 for sells) because it filters for oversold/overbought conditions.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Stochastic can be 'slow' or 'fast.' Slow Stochastic smooths %K (less noise, fewer signals). Fast Stochastic is more responsive but noisier. Most platforms default to slow. If you get too many false crossovers, try slowing the settings or using Stochastic only in the direction of the trend (e.g. only buy crossovers when price is above the 200 MA).",
    },
    { type: "interactive", heading: "Think It Through", content: "Where does Stochastic give a buy signal?", component: "ConceptCheck", props: { question: "Where does Stochastic give a buy signal?", reveal: "When %K crosses above %D in the oversold zone (below 20). It suggests momentum turning up from oversold." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stochastic: %K and %D, 0–100. >80 overbought, <20 oversold. Crossovers in those zones can signal entries; use with trend." },
  ], true),
  createLesson("mom-cci-williams", 8, "CCI and Williams %R", "mom-cci-williams", "12 min", ["Commodity Channel Index", "Williams %R", "When to use each"], [
    {
      type: "text",
      heading: "CCI (Commodity Channel Index)",
      content:
        "CCI measures the current price relative to its statistical average. It's unbounded—it can go well above 100 or below -100. Readings above +100 often suggest overbought; below -100 oversold. CCI is useful for spotting extremes and divergences. It was designed for commodities but is used on any market. Because it's unbounded, CCI can reach +200 or -200 in strong moves—so the levels are guidelines, not hard rules. Like RSI, CCI can stay extreme in trends. Use it with structure.",
    },
    {
      type: "text",
      heading: "Williams %R",
      content:
        "Williams %R is similar to Stochastic but inverted: it's plotted from -100 to 0. Above -20 is overbought; below -80 is oversold. The interpretation is the same—look for reversals from extremes and use with other tools. The scale is different, but the logic is identical: where did price close in the recent range? Williams %R and Stochastic often give similar signals; pick one and stick with it to avoid redundancy.",
    },
    {
      type: "analogy",
      heading: "The Thermometer Analogy",
      content:
        "CCI and Williams %R are like different thermometers. RSI and Stochastic are 0–100; CCI has no upper/lower limit; Williams %R is -100 to 0. They all measure the same thing—how 'hot' or 'cold' (overbought/oversold) price is—but with different scales. Pick the one that fits your platform and your brain. The readings mean the same thing: extremes suggest potential reversals, but confirmation is key.",
    },
    { type: "interactive", heading: "Think It Through", content: "How is Williams %R different from Stochastic?", component: "ConceptCheck", props: { question: "How is Williams %R different from Stochastic?", reveal: "It's inverted: plotted from -100 to 0. -20 = overbought, -80 = oversold. Same idea as Stochastic, different scale." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "CCI: unbounded; +100/-100 often overbought/oversold. Williams %R: -20 overbought, -80 oversold. Both similar to RSI/Stochastic; use one." },
  ], true),
  createLesson("mom-roc", 9, "Rate of Change (ROC) and Momentum", "mom-roc", "12 min", ["ROC", "Momentum indicator", "Divergence"], [
    {
      type: "text",
      heading: "Rate of Change",
      content:
        "ROC measures the percentage change in price over N periods. If price is up 5% over 10 periods, ROC is +5. It shows how fast price is moving. ROC above zero = price higher than N periods ago; below zero = price lower. Divergence between price and ROC can signal momentum shifts. It's simple and easy to read. ROC is raw and unbounded—it can spike on a big move. Some traders use a smoothed version or look for ROC crossing zero as a trend filter (above zero = bullish bias).",
    },
    {
      type: "text",
      heading: "Momentum Indicator",
      content:
        "The classic Momentum indicator is price minus price N periods ago (or a similar formulation). It's raw momentum—positive when price is rising, negative when falling. Like ROC, it can show divergence and overbought/oversold when compared to its own history. Momentum and ROC are close cousins: one uses percentage change, one uses absolute change. Both answer 'how much has price moved over N bars?' Use either for trend confirmation and divergence—don't need both.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "ROC crossing zero can be a simple trend filter: ROC > 0 = price higher than N ago (uptrend bias); ROC < 0 = downtrend bias. Combine with price: e.g. only take long setups when ROC is above zero and price is above the 200 MA. That keeps you aligned with both momentum and trend.",
    },
    { type: "interactive", heading: "Think It Through", content: "What does ROC measure?", component: "ConceptCheck", props: { question: "What does ROC (Rate of Change) measure?", reveal: "The percentage change in price over N periods. It shows how fast price is moving—positive = price higher than N ago, negative = lower." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ROC = % change over N periods. Momentum = price change. Both show speed; use for divergence and trend filter (ROC crossing zero)." },
  ], true),
  createLesson("mom-summary", 10, "Using Momentum Indicators Together", "mom-summary", "12 min", ["Combining indicators", "When to use which", "Avoid overload"], [
    {
      type: "text",
      heading: "Don't Overload",
      content:
        "Using too many momentum indicators at once can give conflicting signals and paralysis. Pick one or two—e.g. RSI for overbought/oversold and MACD for trend and crossovers. Use them to confirm price action: e.g. buy when price bounces off support and RSI is coming out of oversold. Momentum works best with trend and key levels. RSI + MACD is a classic combo: RSI for extremes and divergence, MACD for crossovers and histogram strength. That's enough. Adding Stochastic, CCI, and ROC will often just confuse you.",
    },
    {
      type: "text",
      heading: "When to Use Which",
      content:
        "RSI: overbought/oversold, divergence, simple and widely used. MACD: crossovers, trend momentum, histogram for strength. Stochastic: similar to RSI but with %K/%D crossovers—good for entries in oversold/overbought. CCI/Williams/ROC: alternatives if you prefer different scales or if your strategy backtests better with one. For most traders, mastering RSI and MACD is sufficient. Add a third only if you have a specific reason.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Indicator overload. Five momentum oscillators all saying slightly different things will make you hesitate or overtrade. Simplify. One or two indicators + price action + trend filter = a clean, tradeable system. More indicators rarely mean better results.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why use only one or two momentum indicators?", component: "ConceptCheck", props: { question: "Why use only one or two momentum indicators?", reveal: "Too many can conflict and cause analysis paralysis. RSI + MACD (or one of them with price action) is enough. Confirm with trend and S/R." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Use one or two momentum tools (RSI + MACD is enough). Confirm with trend and S/R. Don't overload—simplicity wins." },
  ], true),
];
