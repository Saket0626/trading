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
  createLesson("ma-intro", 1, "What Are Moving Averages?", "ma-intro", "14 min", ["Define moving averages", "Smoothing price data", "Why traders use them"], [
    {
      type: "text",
      heading: "Smoothing the Noise",
      content:
        "A moving average (MA) is the average price over a set number of periods. It smooths out short-term swings so you can see the underlying trend. For example, a 20-day moving average is the average of the last 20 closing prices. Each new day, the oldest price drops out and the newest is added—so the average 'moves.' Traders use MAs to identify trend direction, support and resistance, and entry signals.\n\nPrice alone is noisy: it jumps up and down every bar. A moving average filters that noise and shows you where the market has been 'on average' over the lookback window. That makes it easier to see if the trend is up, down, or flat. On a daily chart, a 20-period MA is roughly one month of trading days; on a 1-hour chart, 20 bars is about one trading day. The same number means different things on different timeframes.",
    },
    {
      type: "text",
      heading: "What MAs Tell You",
      content:
        "When price is above the MA, buyers have been in control on average over the period. When price is below, sellers have. The slope of the MA shows whether that average is rising or falling—so you get trend direction without drawing lines by hand. MAs also act as dynamic support and resistance: in uptrends, price often pulls back to the MA and bounces; in downtrends, rallies often fail at the MA. Because the MA moves with price, the level isn't fixed—it adapts. That's why pros use them alongside horizontal S/R.",
    },
    {
      type: "analogy",
      heading: "The Rolling Report Card Analogy",
      content:
        "Imagine your grade is the average of your last 5 test scores. Each time you take a new test, the oldest score drops off and the new one counts. Your 'moving average' grade changes with every test—it moves. One bad test might drop it a bit; one great test might lift it. But it won't swing as wildly as a single test score. Price is like each test; the moving average is your rolling grade. It smooths the bumps and shows the trend in your performance.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Moving averages are lagging indicators. They're based on past prices. They tell you what has already happened, not what will happen. A rising MA means price has been going up—it doesn't guarantee it will keep going up. Never rely on an MA alone for entries. Use it with price action, volume, and structure. In choppy markets, MAs cross back and forth and produce false signals—so always confirm with the actual price chart.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why does the average 'move'?", component: "ConceptCheck", props: { question: "Why does the average 'move'?", reveal: "Because each new period you drop the oldest price and add the newest. The window of prices slides forward in time, so the average value changes—it moves." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Moving averages smooth price data and show trend direction. They lag—use them with price action and structure, not in isolation." },
  ], true),
  createLesson("ma-sma", 2, "Simple Moving Average (SMA)", "ma-sma", "14 min", ["How SMA is calculated", "Equal weight to each period", "When to use it"], [
    {
      type: "text",
      heading: "How SMA Is Calculated",
      content:
        "The Simple Moving Average adds up the closing prices for the last N periods and divides by N. For a 20-period SMA: sum the last 20 closes and divide by 20. Every price in the window has the same weight. So a price from 20 bars ago affects the SMA as much as yesterday's close. SMA is easy to understand and widely used; it can lag behind sharp moves because old data stays in the calculation until it rolls out.\n\nExample: closes of 100, 101, 102, 99, 98, 97, 96, 95, 94, 93 (last 10). SMA = (100+101+…+93)/10 = 97.5. Tomorrow when the new close comes in, you drop 100 and add the new one—the window slides. The math is simple, which is why SMAs are everywhere: in platforms, in institutional reports, and in the media (e.g. 'price crossed above the 200-day moving average').",
    },
    {
      type: "text",
      heading: "Strengths and Weaknesses",
      content:
        "SMA is robust: no fancy weighting, so it's stable and easy to backtest. Because every bar has equal weight, it's a true 'average' over the period—good for defining fair value or trend over that window. The weakness is lag. When price suddenly spikes 5%, the SMA might only move 0.5% that day because the spike is averaged with 19 older prices. The SMA catches up over time as the spike stays in the window and old prices roll out—but by then the move may be over. So SMA is better for confirming trend than for catching the very start of a move.",
    },
    {
      type: "analogy",
      heading: "The Conveyor Belt Analogy",
      content:
        "Imagine a conveyor belt with 20 boxes. Each box has a number (the close). The SMA is the average of those 20 numbers. When a new box arrives at one end, the oldest box falls off the other end. The average of the 20 boxes changes—but slowly, because 19 boxes are unchanged. One very heavy box (a big up day) only changes the average by 1/20th of its impact. That's why SMA lags: one new data point is diluted by the rest.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use SMA when you want a clean, easy-to-explain trend line—e.g. for presenting to others or for longer-term trend filters. Many algos and institutions use the 50 and 200 SMA, so those levels often matter. For faster reaction, switch to EMA (next lesson). For a balanced approach, use SMA for the long-term filter (e.g. 200) and EMA for short-term entries.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why does SMA lag on sharp moves?", component: "ConceptCheck", props: { question: "Why does SMA lag on sharp moves?", reveal: "Because every old price has equal weight. A big new move is averaged with many older prices, so the SMA changes slowly until the old prices roll out of the window." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "SMA = sum of last N closes ÷ N. Equal weight; simple and robust; use it for trend confirmation—expect lag on sharp moves." },
  ], true),
  createLesson("ma-ema", 3, "Exponential Moving Average (EMA)", "ma-ema", "14 min", ["More weight to recent prices", "Why traders prefer it", "When it helps and hurts"], [
    {
      type: "text",
      heading: "Giving More Weight to Recent Price",
      content:
        "The Exponential Moving Average gives more weight to recent prices and less to older ones. So the EMA reacts faster to new price action than the SMA. It's calculated using a multiplier based on the period (e.g. 2/(period+1) for the smoothing factor). Many short-term traders prefer the EMA because it turns sooner and can give earlier signals; the trade-off is that it can be noisier and get whipsawed in choppy markets.\n\nFor a 20-period EMA, the multiplier is 2/(20+1) ≈ 0.095. Each new close gets about 9.5% weight in updating the EMA; the rest is the previous EMA value. So the EMA 'remembers' older prices but pays more attention to the latest one. That's why when price makes a sharp move, the EMA bends toward it faster than the SMA.",
    },
    {
      type: "text",
      heading: "When EMA Shines and When It Fails",
      content:
        "EMA shines in trending markets: you get earlier crossovers and earlier bounces off the line on pullbacks. Day traders and swing traders often use 9 and 21 EMA (or 12 and 26) for entry timing. It fails when the market is choppy: the EMA will cross price back and forth, and you'll get stopped out repeatedly. In strong trends, riding the EMA (e.g. buying pullbacks to the 21 EMA) works well. In ranges, the same tactic gets whipsawed. Always check whether the market is trending or ranging before trusting EMA signals.",
    },
    {
      type: "analogy",
      heading: "The News Feed Analogy",
      content:
        "SMA is like reading every newspaper from the last 20 days with equal attention. EMA is like reading today's paper most carefully, yesterday's a bit less, and last week's barely. EMA 'forgets' the past faster and 'remembers' the present. So when something new happens (a big move), the EMA updates quickly—like your opinion shifting when you read today's headline. That makes it more responsive, but also more easily swayed by noise.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Using a fast EMA (e.g. 9) in a sideways market. You'll get a crossover every few bars—buy, get stopped out, sell, get stopped out. EMA works best when you add a trend filter: e.g. only take long signals when price is above the 50 or 200 MA. That keeps you out of chop and in the trend.",
    },
    { type: "interactive", heading: "Think It Through", content: "When might you prefer EMA over SMA?", component: "ConceptCheck", props: { question: "When might you prefer EMA over SMA?", reveal: "When you want faster reaction to new price—e.g. for short-term entries. EMA turns sooner; the cost is more false signals in choppy markets." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "EMA weights recent prices more and reacts faster than SMA. Use it for timing in trends; add a trend filter to avoid whipsaws in ranges." },
  ], true),
  createLesson("ma-periods", 4, "Common Periods: 20, 50, 100, 200", "ma-periods", "12 min", ["Why these numbers", "Short vs long term", "Match period to timeframe"], [
    {
      type: "text",
      heading: "Why These Numbers?",
      content:
        "20 often represents about a month of trading days; 50 about 2–3 months; 200 about a year. So 20-period = short-term trend, 50 = medium-term, 200 = long-term. Many institutions and algorithms watch the 50 and 200, so these levels often act as support or resistance. Shorter periods (e.g. 9, 12) are used for fast signals; longer ones for the big picture. Match the period to your timeframe: day traders use 9, 20, 50 on intraday charts; swing traders use 20, 50, 200 on daily charts.\n\nThe 200 MA is so ingrained that when price approaches it, you often see a reaction—bounce or rejection—simply because everyone is watching it. That doesn't mean it's magic; it means it's a self-reinforcing level. Use that information: know that others are watching the same numbers.",
    },
    {
      type: "text",
      heading: "Matching Period to Your Style",
      content:
        "If you're scalping on a 1-minute chart, a 200-period MA is 200 minutes—about 3+ hours. That might be your 'trend' filter. If you're swing trading on a daily chart, 200 is about a year—your long-term trend. So the same number (200) means something different on each timeframe. A common combo: 9 or 20 for entry, 50 for confirmation, 200 for the big trend. Only take longs above the 200, shorts below it. That one filter cuts a lot of bad trades in sideways markets.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Don't mix timeframes randomly. If you trade the daily chart, use daily MAs (20, 50, 200). If you trade the 4-hour, use 20, 50, 200 on the 4-hour. The period number then has a consistent meaning (short/medium/long on that timeframe). Putting a 200 daily MA on a 5-minute chart is possible but the meaning changes—it's 200 five-minute bars, not one year.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why is the 200 MA so widely watched?", component: "ConceptCheck", props: { question: "Why is the 200 MA so widely watched?", reveal: "It's roughly one year of data—a long-term trend filter. Many institutions and algos use it, so it often acts as major support or resistance." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "20 ≈ 1 month, 50 ≈ 2–3 months, 200 ≈ 1 year (on daily). Match period to your timeframe and style." },
  ], true),
  createLesson("ma-fast-slow", 5, "Fast vs Slow Moving Averages", "ma-fast-slow", "12 min", ["Fast and slow MAs", "How they interact", "What convergence means"], [
    {
      type: "text",
      heading: "Fast and Slow",
      content:
        "A 'fast' MA uses fewer periods (e.g. 9 or 20); it sits closer to price and moves quickly. A 'slow' MA uses more periods (e.g. 50 or 200); it lags and smooths more. When the fast MA is above the slow MA, the short-term trend is up. When the fast crosses below the slow, the short-term trend has turned down. The distance between them can indicate trend strength: wide separation = strong trend; convergence = weakening trend or consolidation.\n\nIn a strong uptrend, the fast MA rides well above the slow—there's a clear gap. When that gap narrows, momentum is fading. When the MAs cross, the trend has shifted. Many traders use the crossover as an entry or exit signal; others use the gap as a trend-strength gauge and only trade when the gap is wide (strong trend) or when it's narrowing and they expect a reversal.",
    },
    {
      type: "analogy",
      heading: "The Two Cars Analogy",
      content:
        "Imagine two cars: a sports car (fast MA) and a truck (slow MA). When the sports car is ahead, the short-term trend is 'sports car direction.' When the sports car crosses in front of the truck, you get a crossover. When they're far apart, one is pulling away—strong trend. When they're side by side or tangled, no one is pulling away—consolidation or a turn coming. The distance between them tells you how decisive the trend is.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Trading every crossover. In ranges, the fast and slow MA will cross repeatedly—you'll get chopped. Only take crossover signals when there's a clear trend (e.g. price on the right side of the 200 MA) or when the MAs have been well separated and then converge (momentum shift). One crossover in isolation is not a system.",
    },
    { type: "interactive", heading: "Think It Through", content: "What does it mean when fast and slow MAs converge?", component: "ConceptCheck", props: { question: "What does it mean when fast and slow MAs converge?", reveal: "Trend may be weakening or the market may be consolidating. A crossover often follows—watch for the fast to cross above or below the slow." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Fast MA = fewer periods, closer to price. Slow MA = more periods, smoother. Crosses signal trend changes; wide gap = strong trend." },
  ], true),
  createLesson("ma-sr", 6, "Moving Average as Support and Resistance", "ma-sr", "14 min", ["Dynamic S/R", "Price bouncing off MAs", "How to trade pullbacks"], [
    {
      type: "text",
      heading: "Dynamic Levels",
      content:
        "Unlike a horizontal line, a moving average moves with price—so it acts as dynamic support in an uptrend (price pulls back to the MA and bounces) or dynamic resistance in a downtrend. In strong uptrends, price often respects the 20 or 50 EMA on pullbacks. In downtrends, bounces often fail at the MA. The 200 MA is widely watched as a major trend filter: price above 200 MA is often considered long-term bullish, below it bearish.\n\nBecause the MA rises in an uptrend and falls in a downtrend, the 'level' is always updating. That's useful: you're not stuck with a static line that might be obsolete. The MA adapts to the trend. The trade-off is that in a sharp reversal, the MA will lag—price can break far below the MA before the MA itself turns down.",
    },
    {
      type: "text",
      heading: "Trading Pullbacks to the MA",
      content:
        "A common approach: in an uptrend (price above the 200 MA), wait for a pullback to the 20 or 50 EMA. When price touches or slightly pierces the MA and shows a reversal candle or structure (e.g. higher low), consider a long. Your stop goes below the swing low or below the MA. Same in reverse for shorts: downtrend, rally to the MA, failure, short. This gives you entries in the direction of the trend instead of chasing. Not every touch works—so use a stop and confirm with volume or structure.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "The first touch of the MA after a strong move often holds (buyers step in). The second or third touch is riskier—support can break. If price keeps coming back to the same MA and finally slices through it, the trend may be over. Watch for a break of the MA plus a break of the recent swing low as invalidation.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why is MA support 'dynamic'?", component: "ConceptCheck", props: { question: "Why is MA support 'dynamic'?", reveal: "Because the MA line moves with price over time—unlike a fixed horizontal level. So the support level changes each bar; it's always 'under' price in an uptrend." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MAs act as dynamic support (uptrends) or resistance (downtrends). Trade pullbacks to the MA with a stop; first touch often holds." },
  ], true),
  createLesson("ma-golden", 7, "Golden Cross (50 Crosses Above 200)", "ma-golden", "12 min", ["Bullish long-term signal", "What it means", "How to use it"], [
    {
      type: "text",
      heading: "The Golden Cross",
      content:
        "A Golden Cross occurs when the 50-period moving average crosses above the 200-period moving average. It's seen as a bullish long-term signal—short-term momentum has aligned with and overtaken the longer-term trend. It doesn't mean buy blindly: the cross can lag, and in choppy markets you get false signals. Use it as one confirmation with price action and volume. It's most meaningful on daily or higher timeframes.\n\nBy the time the 50 crosses the 200, price has often already moved up for weeks. So the Golden Cross is often a confirmation of an existing uptrend rather than a leading signal. That's fine—you can use it to add to positions or to stay long. But don't expect to buy at the bottom; you might be buying after a 20% rally.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Golden Crosses in sideways markets are traps. The 50 and 200 will cross back and forth—you'll buy the cross, then the Death Cross happens a month later. Only give weight to the Golden Cross when price is already making higher highs and higher lows, or when it appears after a long downtrend and the first meaningful rally. Context matters more than the cross alone.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why not buy blindly on a Golden Cross?", component: "ConceptCheck", props: { question: "Why not buy blindly on a Golden Cross?", reveal: "The cross can lag—the move may already be partly done. In sideways markets you get false crosses. Use it with price action and volume, and on daily or higher timeframes." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Golden Cross = 50 MA above 200 MA. Use as confirmation with trend and volume; avoid in choppy markets." },
  ], true),
  createLesson("ma-death", 8, "Death Cross (50 Crosses Below 200)", "ma-death", "12 min", ["Bearish long-term signal", "What it means", "How to use it"], [
    {
      type: "text",
      heading: "The Death Cross",
      content:
        "A Death Cross is when the 50-period MA crosses below the 200-period MA. It's the bearish counterpart of the Golden Cross—short-term trend has turned down relative to the long-term average. Like the Golden Cross, it can lag and produce false signals in sideways markets. Use it as part of a broader analysis, not in isolation. Often discussed in the media when it appears on major indices.\n\nWhen the Death Cross appears after a long bull run, it can signal that the trend has shifted—institutions and algos may use it as a trigger to reduce exposure. But again, by the time it happens, price has often already fallen. Use it to confirm bearish structure (lower highs, lower lows) or to avoid new longs—not necessarily as the only reason to short.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "On major indices (S&P 500, Nasdaq), the Death Cross gets headlines and can create short-term bounces (everyone is bearish, so a squeeze up). Don't short the open the day it's announced. Use it as a trend filter: be cautious with new longs, consider shorts only on rallies into resistance, and always use stops.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is the bearish counterpart of the Golden Cross?", component: "ConceptCheck", props: { question: "What is the bearish counterpart of the Golden Cross?", reveal: "The Death Cross—when the 50 MA crosses below the 200 MA. It signals short-term trend has turned down relative to the long-term average." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Death Cross = 50 MA below 200 MA. Bearish confirmation; use with context and avoid trading the headline alone." },
  ], true),
  createLesson("ma-crossover", 9, "Moving Average Crossover Strategies", "ma-crossover", "14 min", ["Trading the cross", "Entry and exit", "Reducing whipsaws"], [
    {
      type: "text",
      heading: "Trading the Crossover",
      content:
        "A simple strategy: buy when the fast MA crosses above the slow MA; sell or short when the fast crosses below the slow. Stops are often placed below the slow MA (for longs) or above it (for shorts). The problem is whipsaws—in ranging markets the MAs cross back and forth and you get repeated small losses. So crossover systems work best in trending markets. Many traders add a filter (e.g. only take longs when price is above the 200 MA) to reduce false signals.\n\nYou can use different pairs: 9/21 for fast signals, 50/200 for slower. The faster the pair, the more signals but also more whipsaws. Backtest on your instrument and timeframe before going live. Crossover alone is rarely enough—combine with trend filter and risk management.",
    },
    {
      type: "analogy",
      heading: "The Traffic Light Analogy",
      content:
        "Green light = fast MA above slow (go long). Red light = fast below slow (go short). But in a parking lot where cars inch forward and back, the light might flicker green-red-green-red. That's a ranging market—you get whipsawed. On a highway with clear direction, the light stays green for a long time. Only 'drive' (trade) when you're on the highway (trending market), not in the parking lot.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Using a crossover system without a trend filter in a sideways market. You'll take 10 trades, get stopped out 8 times, and give back all your gains. Add a rule: e.g. only long when price > 200 MA, only short when price < 200 MA. That keeps you out of the worst chop.",
    },
    { type: "interactive", heading: "Think It Through", content: "How can you reduce whipsaws in a crossover system?", component: "ConceptCheck", props: { question: "How can you reduce whipsaws in a crossover system?", reveal: "Add a trend filter—e.g. only take long signals when price is above the 200 MA. That keeps you out of sideways markets where MAs cross repeatedly." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crossover = buy when fast crosses above slow, sell when below. Use a trend filter (e.g. 200 MA) to avoid whipsaws in ranges." },
  ], true),
  createLesson("ma-triple", 10, "Multiple Moving Averages (3 MA System)", "ma-triple", "14 min", ["Using three MAs", "Trend and signal", "Stack order"], [
    {
      type: "text",
      heading: "Three MA System",
      content:
        "Some traders use three MAs—e.g. 9, 21, and 50 (or 20, 50, 200). The shortest gives entry timing, the middle confirms trend, and the longest defines the big trend. Rule: only take long signals when price is above the longest MA, and short signals when below it. When all three are stacked (shortest > middle > longest), you have a clear uptrend. The 3 MA system adds a trend filter and can cut some of the bad crossover trades.\n\nExample: 9 EMA (fast), 21 EMA (medium), 50 EMA (slow). Uptrend = price > 9 > 21 > 50. You only take long entries (e.g. buy when price pulls back to the 9 or 21 and bounces). When the stack breaks—e.g. 9 crosses below 21—you're on alert; when 9 crosses below 50, the trend may have turned. The longest MA (50 or 200) is your line in the sand: above it, no shorts; below it, no longs.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use the 3 MA system to avoid bad entries. If price is below the 200 MA and the 9 crosses above the 21, that's a potential short-term bounce—not a reason to go long. Wait for price to get above the 200 and for the stack to form (9 > 21 > 200) before taking longs. Discipline here saves a lot of losing trades.",
    },
    { type: "interactive", heading: "Think It Through", content: "What does 'stacked' MAs mean?", component: "ConceptCheck", props: { question: "What does 'stacked' MAs mean in an uptrend?", reveal: "Shortest MA on top, then middle, then longest—all in order. It shows a clear, strong uptrend with no crossover confusion." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Three MAs: shortest = entry, middle = confirmation, longest = trend. Only trade in the direction of the longest MA; stack order shows strength." },
  ], true),
  createLesson("ma-works", 11, "When Moving Averages Work", "ma-works", "12 min", ["Trending markets", "Best conditions", "Using MAs as filter"], [
    {
      type: "text",
      heading: "Trending Markets",
      content:
        "Moving averages shine when the market is trending. In a clear uptrend, price tends to stay above the MA and pull back to it before continuing. In a downtrend, price stays below and rallies to the MA before failing. So MAs help you stay on the right side of the trend and offer pullback entries. They also work well as a trend filter: e.g. only take long setups when price is above the 200 MA on the timeframe you trade.\n\nYou can use MAs to define 'trending' vs 'not trending.' If the 50 MA is sloping up and price is above it, you're in an uptrend. If the 50 is flat and price is weaving around it, you're in a range—consider sitting out or trading mean reversion instead of trend following. Matching your strategy to the market state improves results.",
    },
    {
      type: "analogy",
      heading: "The River Analogy",
      content:
        "In a flowing river (trend), the current (MA) carries you. You can float with it or paddle with it—either way you're going the right direction. In a pond (range), there's no current. You paddle one way, then the other. MAs in a trend are like the current—they give you direction. In a range they're just a line in still water—no edge.",
    },
    { type: "interactive", heading: "Think It Through", content: "Where do MAs work best?", component: "ConceptCheck", props: { question: "Where do MAs work best?", reveal: "In trending markets. In uptrends price holds above the MA and pulls back to it; in downtrends price holds below. In choppy ranges they whipsaw." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MAs work best in trending markets. Use them for trend direction and pullback entries; use slope and stack to confirm trend." },
  ], true),
  createLesson("ma-fails", 12, "When Moving Averages Fail", "ma-fails", "12 min", ["Choppy markets", "How to avoid whipsaws", "When to sit out"], [
    {
      type: "text",
      heading: "Choppy and Ranging Markets",
      content:
        "In sideways or choppy markets, moving averages cross frequently and price cuts through them without a sustained trend. That produces whipsaws—you get in, get stopped out, get in again. To reduce this: use MAs as one tool, not the only one. Add a trend filter (e.g. only trade in the direction of the 200 MA). Or avoid trading when the MAs are flat and tangled. In strong reversals, MAs also lag—price can move a lot before the MA catches up.\n\nWhen the 20, 50, and 200 are all weaving together with no clear order, that's a range. Don't force trend-following entries. Either wait for a breakout and then use MAs to confirm the new trend, or switch to a range strategy (sell resistance, buy support) and ignore MA crossovers for a while.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "After a long trend, the first time the MAs tangle and price chops around them, the worst thing you can do is keep trading crossovers. You'll lose on every whipsaw. Step back. Wait for a clear new trend (MAs stacking again and price making higher highs or lower lows) before resuming trend-following. Sometimes the best trade is no trade.",
    },
    { type: "interactive", heading: "Think It Through", content: "When should you avoid trading with MAs?", component: "ConceptCheck", props: { question: "When should you avoid trading with MAs?", reveal: "When the MAs are flat and tangled—no clear stack. That usually means a ranging market where crossover signals will whipsaw." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MAs fail in choppy, ranging markets. Use trend filters; when MAs are flat and tangled, sit out or trade a different strategy." },
  ], true),
];
