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
  createLesson("mom-intro", 1, "What Is Momentum?", "mom-intro", "10 min", ["Rate of price change", "Why momentum matters"], [
    { type: "text", heading: "Rate of Change", content: "Momentum measures how fast price is moving—the rate of change. When price rises quickly, momentum is positive and often high; when price falls quickly, momentum is negative. Momentum indicators help you see when a move is speeding up or slowing down, and when price might be overbought (ripe for a pullback) or oversold (ripe for a bounce). They don't predict direction by themselves; they add confirmation to price action and trend." },
    { type: "interactive", heading: "Think It Through", content: "What does momentum measure?", component: "ConceptCheck", props: { question: "What does momentum measure?", reveal: "The rate of price change—how fast price is moving. It helps spot overbought/oversold and whether a move is strengthening or weakening." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Momentum = rate of price change. Use it to gauge strength and spot overbought/oversold conditions." },
  ]),
  createLesson("mom-rsi", 2, "RSI: Relative Strength Index", "mom-rsi", "14 min", ["Calculation (simplified)", "Overbought and oversold"], [
    { type: "text", heading: "What RSI Does", content: "RSI compares the size of recent gains to recent losses over a set period (often 14). It's plotted from 0 to 100. When RSI is above 70, the asset is often considered overbought—price may pull back. When RSI is below 30, it's often oversold—price may bounce. RSI doesn't have to reverse at 70 or 30; in strong trends it can stay overbought or oversold for a long time. Use it with trend and support/resistance." },
    { type: "text", heading: "Using RSI for Entries and Exits", content: "Some traders buy when RSI crosses back above 30 (exit oversold) and sell when it crosses back below 70 (exit overbought). Others use RSI to confirm breakouts: rising RSI with rising price = strong move. Falling RSI with rising price = divergence, possible weakness. Never rely on RSI alone—combine with price structure and risk management." },
    { type: "interactive", heading: "Think It Through", content: "What do RSI levels 70 and 30 usually mean?", component: "ConceptCheck", props: { question: "What do RSI levels 70 and 30 usually mean?", reveal: "Above 70 = often overbought (pullback possible). Below 30 = often oversold (bounce possible). In strong trends RSI can stay extreme, so use with context." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "RSI 0–100. >70 often overbought, <30 often oversold. Use with trend and S/R; it can stay extreme in strong trends." },
  ]),
  createLesson("mom-rsi-divergence", 3, "RSI Divergence", "mom-rsi-divergence", "12 min", ["Price vs RSI disagree", "Bullish and bearish divergence"], [
    { type: "text", heading: "When Price and RSI Disagree", content: "Divergence occurs when price makes a new high but RSI makes a lower high (bearish divergence), or price makes a new low but RSI makes a higher low (bullish divergence). It suggests the move may be losing steam—momentum isn't confirming price. Divergence can warn of reversals but isn't perfect; in strong trends you can get multiple divergences before a turn. Use it as one signal with confirmation." },
    { type: "interactive", heading: "Think It Through", content: "What is bearish RSI divergence?", component: "ConceptCheck", props: { question: "What is bearish RSI divergence?", reveal: "Price makes a new high but RSI makes a lower high. Momentum isn't confirming the price high—possible weakness or reversal." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Bearish divergence = price higher high, RSI lower high. Bullish = price lower low, RSI higher low. Suggests weakening momentum." },
  ]),
  createLesson("mom-macd", 4, "MACD: Components", "mom-macd", "14 min", ["MACD line, signal line, histogram"], [
    { type: "text", heading: "The Three Parts of MACD", content: "MACD (Moving Average Convergence Divergence) has three elements: (1) The MACD line = fast EMA minus slow EMA (often 12 and 26). (2) The signal line = EMA of the MACD line (often 9). (3) The histogram = MACD line minus signal line. When the MACD line is above the signal line, short-term momentum is positive; when below, it's negative. The histogram shows the gap—getting larger when momentum is strengthening, shrinking when it's weakening." },
    { type: "interactive", heading: "Think It Through", content: "What is the MACD histogram?", component: "ConceptCheck", props: { question: "What is the MACD histogram?", reveal: "The difference between the MACD line and the signal line. It shows momentum strength—growing bars = strengthening, shrinking = weakening." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MACD line = fast − slow EMA. Signal line = EMA of MACD. Histogram = difference. Crossovers and histogram shape show momentum shifts." },
  ]),
  createLesson("mom-macd-crossovers", 5, "MACD Crossovers and Histogram", "mom-macd-crossovers", "12 min", ["Bullish and bearish crossovers", "Histogram strength"], [
    { type: "text", heading: "Trading the Crossover", content: "When the MACD line crosses above the signal line, it's a bullish crossover—momentum is turning up. When it crosses below, it's bearish. Many traders use the crossover as an entry signal; the drawback is lag—the move may already be underway. The histogram tells you strength: bars growing in the direction of the trend = strong momentum; shrinking bars = momentum fading, possible reversal or pullback." },
    { type: "interactive", heading: "Think It Through", content: "What does a shrinking MACD histogram suggest?", component: "ConceptCheck", props: { question: "What does a shrinking MACD histogram suggest?", reveal: "Momentum is fading—the gap between MACD and signal is getting smaller. Often precedes a crossover or pullback." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MACD above signal = bullish; below = bearish. Histogram growing = momentum strengthening; shrinking = weakening." },
  ]),
  createLesson("mom-macd-divergence", 6, "MACD Divergence", "mom-macd-divergence", "10 min", ["Price vs MACD disagree"], [
    { type: "text", heading: "MACD Divergence", content: "Like RSI, MACD can show divergence: price makes a new high but MACD makes a lower high (bearish), or price makes a new low but MACD makes a higher low (bullish). It indicates that momentum isn't confirming the price move and a reversal or pause is possible. Use MACD divergence with key levels and trend—don't reverse blindly on divergence alone." },
    { type: "interactive", heading: "Think It Through", content: "Should you reverse position on divergence alone?", component: "ConceptCheck", props: { question: "Should you reverse position on divergence alone?", reveal: "No. Divergence warns of possible reversal; confirm with price action, key levels, and trend. Multiple divergences can appear before a turn." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MACD divergence = price and MACD moving in opposite structure. Can warn of reversals; confirm with price action." },
  ]),
  createLesson("mom-stochastic", 7, "Stochastic Oscillator", "mom-stochastic", "12 min", ["%K and %D", "Overbought/oversold", "Crossovers"], [
    { type: "text", heading: "How Stochastic Works", content: "The Stochastic oscillator compares the current close to the high-low range over a period. It has two lines: %K (fast) and %D (slow, usually a moving average of %K). Values run from 0 to 100. Above 80 is often overbought; below 20 is often oversold. A buy signal: %K crosses above %D in the oversold zone. A sell signal: %K crosses below %D in the overbought zone. Like RSI, it can stay extreme in strong trends." },
    { type: "interactive", heading: "Think It Through", content: "Where does Stochastic give a buy signal?", component: "ConceptCheck", props: { question: "Where does Stochastic give a buy signal?", reveal: "When %K crosses above %D in the oversold zone (below 20). It suggests momentum turning up from oversold." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stochastic: %K and %D, 0–100. >80 overbought, <20 oversold. Crossovers in those zones can signal entries." },
  ]),
  createLesson("mom-cci-williams", 8, "CCI and Williams %R", "mom-cci-williams", "10 min", ["Commodity Channel Index", "Williams %R"], [
    { type: "text", heading: "CCI (Commodity Channel Index)", content: "CCI measures the current price relative to its statistical average. It's unbounded—it can go well above 100 or below -100. Readings above +100 often suggest overbought; below -100 oversold. CCI is useful for spotting extremes and divergences. It was designed for commodities but is used on any market." },
    { type: "text", heading: "Williams %R", content: "Williams %R is similar to Stochastic but inverted: it's plotted from -100 to 0. Above -20 is overbought; below -80 is oversold. The interpretation is the same—look for reversals from extremes and use with other tools." },
    { type: "interactive", heading: "Think It Through", content: "How is Williams %R different from Stochastic?", component: "ConceptCheck", props: { question: "How is Williams %R different from Stochastic?", reveal: "It's inverted: plotted from -100 to 0. -20 = overbought, -80 = oversold. Same idea as Stochastic, different scale." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "CCI: unbounded; +100/-100 often overbought/oversold. Williams %R: -20 overbought, -80 oversold. Use with trend and S/R." },
  ]),
  createLesson("mom-roc", 9, "Rate of Change (ROC) and Momentum", "mom-roc", "10 min", ["ROC", "Momentum indicator"], [
    { type: "text", heading: "Rate of Change", content: "ROC measures the percentage change in price over N periods. If price is up 5% over 10 periods, ROC is +5. It shows how fast price is moving. ROC above zero = price higher than N periods ago; below zero = price lower. Divergence between price and ROC can signal momentum shifts. It's simple and easy to read." },
    { type: "text", heading: "Momentum Indicator", content: "The classic Momentum indicator is price minus price N periods ago (or a similar formulation). It's raw momentum—positive when price is rising, negative when falling. Like ROC, it can show divergence and overbought/oversold when compared to its own history." },
    { type: "interactive", heading: "Think It Through", content: "What does ROC measure?", component: "ConceptCheck", props: { question: "What does ROC (Rate of Change) measure?", reveal: "The percentage change in price over N periods. It shows how fast price is moving—positive = price higher than N ago, negative = lower." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ROC = % change over N periods. Momentum = price change over N periods. Both show speed of move and can diverge from price." },
  ]),
  createLesson("mom-summary", 10, "Using Momentum Indicators Together", "mom-summary", "10 min", ["Combining indicators", "When to use which"], [
    { type: "text", heading: "Don't Overload", content: "Using too many momentum indicators at once can give conflicting signals and paralysis. Pick one or two—e.g. RSI for overbought/oversold and MACD for trend and crossovers. Use them to confirm price action: e.g. buy when price bounces off support and RSI is coming out of oversold. Momentum works best with trend and key levels." },
    { type: "interactive", heading: "Think It Through", content: "Why use only one or two momentum indicators?", component: "ConceptCheck", props: { question: "Why use only one or two momentum indicators?", reveal: "Too many can conflict and cause analysis paralysis. RSI + MACD (or one of them with price action) is enough. Confirm with trend and S/R." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Use one or two momentum tools with trend and S/R. RSI and MACD are the most popular. Confirm, don't rely on indicators alone." },
  ], true),
];
