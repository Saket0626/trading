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
  moduleId: "technical-analysis",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const movingAveragesLessons: Lesson[] = [
  createLesson("ma-intro", 1, "What Are Moving Averages?", "ma-intro", "10 min", ["Define moving averages", "Smoothing price data"], [
    { type: "text", heading: "Smoothing the Noise", content: "A moving average (MA) is the average price over a set number of periods. It smooths out short-term swings so you can see the underlying trend. For example, a 20-day moving average is the average of the last 20 closing prices. Each new day, the oldest price drops out and the newest is added—so the average 'moves.' Traders use MAs to identify trend direction, support and resistance, and entry signals." },
    { type: "interactive", heading: "Think It Through", content: "Why does the average 'move'?", component: "ConceptCheck", props: { question: "Why does the average 'move'?", reveal: "Because each new period you drop the oldest price and add the newest. The window of prices slides forward in time, so the average value changes—it moves." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Moving averages smooth price data. They help you see trend direction and dynamic support/resistance." },
  ]),
  createLesson("ma-sma", 2, "Simple Moving Average (SMA)", "ma-sma", "12 min", ["How SMA is calculated", "Equal weight to each period"], [
    { type: "text", heading: "How SMA Is Calculated", content: "The Simple Moving Average adds up the closing prices for the last N periods and divides by N. For a 20-period SMA: sum the last 20 closes and divide by 20. Every price in the window has the same weight. So a price from 20 bars ago affects the SMA as much as yesterday's close. SMA is easy to understand and widely used; it can lag behind sharp moves because old data stays in the calculation until it rolls out." },
    { type: "interactive", heading: "Think It Through", content: "Why does SMA lag on sharp moves?", component: "ConceptCheck", props: { question: "Why does SMA lag on sharp moves?", reveal: "Because every old price has equal weight. A big new move is averaged with many older prices, so the SMA changes slowly until the old prices roll out of the window." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "SMA = sum of last N closes ÷ N. Equal weight; simple and robust; can lag on fast moves." },
  ]),
  createLesson("ma-ema", 3, "Exponential Moving Average (EMA)", "ma-ema", "12 min", ["More weight to recent prices", "Why traders prefer it"], [
    { type: "text", heading: "Giving More Weight to Recent Price", content: "The Exponential Moving Average gives more weight to recent prices and less to older ones. So the EMA reacts faster to new price action than the SMA. It's calculated using a multiplier based on the period (e.g. 2/(period+1) for the smoothing factor). Many short-term traders prefer the EMA because it turns sooner and can give earlier signals; the trade-off is that it can be noisier and get whipsawed in choppy markets." },
    { type: "interactive", heading: "Think It Through", content: "When might you prefer EMA over SMA?", component: "ConceptCheck", props: { question: "When might you prefer EMA over SMA?", reveal: "When you want faster reaction to new price—e.g. for short-term entries. EMA turns sooner; the cost is more false signals in choppy markets." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "EMA weights recent prices more. It reacts faster than SMA but can be noisier." },
  ]),
  createLesson("ma-periods", 4, "Common Periods: 20, 50, 100, 200", "ma-periods", "10 min", ["Why these numbers", "Short vs long term"], [
    { type: "text", heading: "Why These Numbers?", content: "20 often represents about a month of trading days; 50 about 2–3 months; 200 about a year. So 20-period = short-term trend, 50 = medium-term, 200 = long-term. Many institutions and algorithms watch the 50 and 200, so these levels often act as support or resistance. Shorter periods (e.g. 9, 12) are used for fast signals; longer ones for the big picture. Match the period to your timeframe: day traders use 9, 20, 50 on intraday charts; swing traders use 20, 50, 200 on daily charts." },
    { type: "interactive", heading: "Think It Through", content: "Why is the 200 MA so widely watched?", component: "ConceptCheck", props: { question: "Why is the 200 MA so widely watched?", reveal: "It's roughly one year of data—a long-term trend filter. Many institutions and algos use it, so it often acts as major support or resistance and a trend line." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "20 ≈ 1 month, 50 ≈ 2–3 months, 200 ≈ 1 year. Shorter = faster, longer = smoother." },
  ]),
  createLesson("ma-fast-slow", 5, "Fast vs Slow Moving Averages", "ma-fast-slow", "10 min", ["Fast and slow MAs", "How they interact"], [
    { type: "text", heading: "Fast and Slow", content: "A 'fast' MA uses fewer periods (e.g. 9 or 20); it sits closer to price and moves quickly. A 'slow' MA uses more periods (e.g. 50 or 200); it lags and smooths more. When the fast MA is above the slow MA, the short-term trend is up. When the fast crosses below the slow, the short-term trend has turned down. The distance between them can indicate trend strength: wide separation = strong trend; convergence = weakening trend or consolidation." },
    { type: "interactive", heading: "Think It Through", content: "What does it mean when fast and slow MAs converge?", component: "ConceptCheck", props: { question: "What does it mean when fast and slow MAs converge?", reveal: "Trend may be weakening or the market may be consolidating. A crossover often follows—watch for the fast to cross above or below the slow." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Fast MA = fewer periods, closer to price. Slow MA = more periods, smoother. Crosses between them signal trend changes." },
  ]),
  createLesson("ma-sr", 6, "Moving Average as Support and Resistance", "ma-sr", "12 min", ["Dynamic S/R", "Price bouncing off MAs"], [
    { type: "text", heading: "Dynamic Levels", content: "Unlike a horizontal line, a moving average moves with price—so it acts as dynamic support in an uptrend (price pulls back to the MA and bounces) or dynamic resistance in a downtrend. In strong uptrends, price often respects the 20 or 50 EMA on pullbacks. In downtrends, bounces often fail at the MA. The 200 MA is widely watched as a major trend filter: price above 200 MA is often considered long-term bullish, below it bearish." },
    { type: "interactive", heading: "Think It Through", content: "Why is MA support 'dynamic'?", component: "ConceptCheck", props: { question: "Why is MA support 'dynamic'?", reveal: "Because the MA line moves with price over time—unlike a fixed horizontal level. So the support level changes each bar; it's always 'under' price in an uptrend." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MAs act as dynamic support (in uptrends) or resistance (in downtrends). Price often tests and bounces off them." },
  ]),
  createLesson("ma-golden", 7, "Golden Cross (50 Crosses Above 200)", "ma-golden", "10 min", ["Bullish long-term signal", "What it means"], [
    { type: "text", heading: "The Golden Cross", content: "A Golden Cross occurs when the 50-period moving average crosses above the 200-period moving average. It's seen as a bullish long-term signal—short-term momentum has aligned with and overtaken the longer-term trend. It doesn't mean buy blindly: the cross can lag, and in choppy markets you get false signals. Use it as one confirmation with price action and volume. It's most meaningful on daily or higher timeframes." },
    { type: "interactive", heading: "Think It Through", content: "Why not buy blindly on a Golden Cross?", component: "ConceptCheck", props: { question: "Why not buy blindly on a Golden Cross?", reveal: "The cross can lag—the move may already be partly done. In sideways markets you get false crosses. Use it with price action and volume, and on daily or higher timeframes." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Golden Cross = 50 MA crosses above 200 MA. Considered bullish; confirm with price and volume." },
  ]),
  createLesson("ma-death", 8, "Death Cross (50 Crosses Below 200)", "ma-death", "10 min", ["Bearish long-term signal", "What it means"], [
    { type: "text", heading: "The Death Cross", content: "A Death Cross is when the 50-period MA crosses below the 200-period MA. It's the bearish counterpart of the Golden Cross—short-term trend has turned down relative to the long-term average. Like the Golden Cross, it can lag and produce false signals in sideways markets. Use it as part of a broader analysis, not in isolation. Often discussed in the media when it appears on major indices." },
    { type: "interactive", heading: "Think It Through", content: "What is the bearish counterpart of the Golden Cross?", component: "ConceptCheck", props: { question: "What is the bearish counterpart of the Golden Cross?", reveal: "The Death Cross—when the 50 MA crosses below the 200 MA. It signals short-term trend has turned down relative to the long-term average." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Death Cross = 50 MA crosses below 200 MA. Considered bearish; confirm with context." },
  ]),
  createLesson("ma-crossover", 9, "Moving Average Crossover Strategies", "ma-crossover", "12 min", ["Trading the cross", "Entry and exit"], [
    { type: "text", heading: "Trading the Crossover", content: "A simple strategy: buy when the fast MA crosses above the slow MA; sell or short when the fast crosses below the slow. Stops are often placed below the slow MA (for longs) or above it (for shorts). The problem is whipsaws—in ranging markets the MAs cross back and forth and you get repeated small losses. So crossover systems work best in trending markets. Many traders add a filter (e.g. only take longs when price is above the 200 MA) to reduce false signals." },
    { type: "interactive", heading: "Think It Through", content: "How can you reduce whipsaws in a crossover system?", component: "ConceptCheck", props: { question: "How can you reduce whipsaws in a crossover system?", reveal: "Add a trend filter—e.g. only take long signals when price is above the 200 MA. That keeps you out of sideways markets where MAs cross repeatedly." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crossover = buy when fast crosses above slow, sell when fast crosses below. Works in trends; whipsaws in ranges." },
  ]),
  createLesson("ma-triple", 10, "Multiple Moving Averages (3 MA System)", "ma-triple", "12 min", ["Using three MAs", "Trend and signal"], [
    { type: "text", heading: "Three MA System", content: "Some traders use three MAs—e.g. 9, 21, and 50 (or 20, 50, 200). The shortest gives entry timing, the middle confirms trend, and the longest defines the big trend. Rule: only take long signals when price is above the longest MA, and short signals when below it. When all three are stacked (shortest > middle > longest), you have a clear uptrend. The 3 MA system adds a trend filter and can cut some of the bad crossover trades." },
    { type: "interactive", heading: "Think It Through", content: "What does 'stacked' MAs mean?", component: "ConceptCheck", props: { question: "What does 'stacked' MAs mean in an uptrend?", reveal: "Shortest MA on top, then middle, then longest—all in order. It shows a clear, strong uptrend with no crossover confusion." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Three MAs can define trend (longest), confirmation (middle), and entry (shortest). Stack order shows trend strength." },
  ]),
  createLesson("ma-works", 11, "When Moving Averages Work", "ma-works", "10 min", ["Trending markets", "Best conditions"], [
    { type: "text", heading: "Trending Markets", content: "Moving averages shine when the market is trending. In a clear uptrend, price tends to stay above the MA and pull back to it before continuing. In a downtrend, price stays below and rallies to the MA before failing. So MAs help you stay on the right side of the trend and offer pullback entries. They also work well as a trend filter: e.g. only take long setups when price is above the 200 MA on the timeframe you trade." },
    { type: "interactive", heading: "Think It Through", content: "Where do MAs work best?", component: "ConceptCheck", props: { question: "Where do MAs work best?", reveal: "In trending markets. In uptrends price holds above the MA and pulls back to it; in downtrends price holds below. In choppy ranges they whipsaw." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MAs work best in trending markets. Use them for trend direction and pullback entries." },
  ]),
  createLesson("ma-fails", 12, "When Moving Averages Fail", "ma-fails", "10 min", ["Choppy markets", "How to avoid whipsaws"], [
    { type: "text", heading: "Choppy and Ranging Markets", content: "In sideways or choppy markets, moving averages cross frequently and price cuts through them without a sustained trend. That produces whipsaws—you get in, get stopped out, get in again. To reduce this: use MAs as one tool, not the only one. Add a trend filter (e.g. only trade in the direction of the 200 MA). Or avoid trading when the MAs are flat and tangled. In strong reversals, MAs also lag—price can move a lot before the MA catches up." },
    { type: "interactive", heading: "Think It Through", content: "When should you avoid trading with MAs?", component: "ConceptCheck", props: { question: "When should you avoid trading with MAs?", reveal: "When the MAs are flat and tangled—no clear stack. That usually means a ranging market where crossover signals will whipsaw." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MAs fail in choppy, ranging markets—whipsaws and false crosses. Use trend filters and avoid trading when MAs are flat." },
  ], true),
];
