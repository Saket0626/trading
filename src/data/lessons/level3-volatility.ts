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
  moduleId: "technical-indicators-volatility",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const volatilityLessons: Lesson[] = [
  createLesson("vol-intro", 1, "What Is Volatility?", "vol-intro", "14 min", ["Define volatility", "Why it matters", "How to measure it"], [
    {
      type: "text",
      heading: "Price Movement Magnitude",
      content:
        "Volatility is how much price moves—up or down—over a given period. Imagine two stocks: one moves $0.50 a day, the other $5. The second is more volatile. Volatility isn't direction; it's the size of the swings. High volatility means bigger daily ranges, more uncertainty, and often wider stop losses. Low volatility can mean tight ranges and, sometimes, a buildup before a big move. Traders use volatility to size positions, place stops, and choose which instruments fit their risk.\n\nVolatility can be historical (how much did price actually move over the past N days?) or implied (what does the options market expect?). For most chart-based trading, we use historical measures like ATR (Average True Range) or the width of Bollinger Bands. The key: volatility tells you how far price might move, not which way.",
    },
    {
      type: "text",
      heading: "Why It Matters",
      content:
        "If you use a fixed dollar stop, a volatile stock can hit it quickly on normal noise. If you use a percentage stop, volatile assets need smaller position sizes. Volatility also affects option prices (higher vol = more expensive options) and tells you when a market is 'quiet' (squeeze) or 'explosive' (expansion). Professional traders often measure volatility with indicators like ATR or Bollinger Band width and adjust their strategy accordingly. In low vol, you might use tighter stops and slightly larger size. In high vol, you widen stops and reduce size so that one bad day doesn't wipe out a week of gains.",
    },
    {
      type: "analogy",
      heading: "The Weather Analogy",
      content:
        "Volatility is like temperature range. One city might go from 70°F to 72°F (low volatility—predictable). Another goes from 40°F to 90°F (high volatility—big swings). You pack differently for each. Same with trading: in low-volatility markets you can use tighter stops; in high-volatility markets you need more room or you'll get stopped out by normal fluctuation. Volatility doesn't tell you if it will rain or shine—just how much the weather might swing.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Ignoring volatility when setting stops is a common mistake. A 1% stop on a stock that moves 3% a day will get hit constantly by noise. Use volatility-based stops (e.g. 1.5× or 2× ATR) so your stop adapts to how much the market actually moves. One size does not fit all.",
    },
    { type: "interactive", heading: "Think It Through", content: "Does volatility tell you the direction of price?", component: "ConceptCheck", props: { question: "Does volatility tell you the direction of price?", reveal: "No. Volatility measures the size of price movement, not whether price is going up or down. High vol = big swings either way." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Volatility = magnitude of price movement. Use it for stops, sizing, and to spot squeeze vs expansion." },
  ], true),
  createLesson("vol-bollinger", 2, "Bollinger Bands: Structure and Meaning", "vol-bollinger", "16 min", ["Middle band, upper/lower", "Squeeze and expansion"], [
    {
      type: "text",
      heading: "The Three Bands",
      content:
        "Bollinger Bands have three lines. The middle band is usually a 20-period Simple Moving Average. The upper and lower bands are typically two standard deviations above and below the middle. So about 95% of price action, statistically, falls within the bands under a normal distribution. When price moves to the upper band, it's relatively extended up; when it touches the lower band, it's relatively extended down. The distance between the bands—the band width—reflects volatility: narrow bands = low volatility (squeeze), wide bands = high volatility (expansion).\n\nStandard deviation measures how spread out price is from the average. Two std devs capture most of the data. When volatility rises, the bands widen automatically; when it falls, they narrow. That's the key: the bands adapt to conditions. You're not drawing fixed lines—the bands move with the market.",
    },
    {
      type: "text",
      heading: "Squeeze and Expansion",
      content:
        "A 'squeeze' is when the bands contract—volatility has fallen. Many traders watch for a squeeze because it often precedes a strong move (expansion) in one direction; the breakout from the squeeze can be tradeable. When the bands expand, volatility has increased and big moves are already happening. The idea: low volatility doesn't last forever. Something has to give. The squeeze is the coiling; the breakout is the release. Trading the first touch of the upper or lower band as mean reversion is common, but in strong trends price can walk the band—so context (trend, volume) matters.",
    },
    {
      type: "analogy",
      heading: "The Rubber Band Analogy",
      content:
        "Bollinger Bands are like a rubber band around price. When the market is quiet, the band is loose (narrow bands—squeeze). When the market gets active, the band stretches (wide bands—expansion). Price touching the upper or lower band is like touching the edges of the band—it might snap back (mean reversion) or the band might stretch further (trend). In a squeeze, the band is tight—when it finally gives, the move can be sharp.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Assuming every touch of the lower band is a buy. In a strong downtrend, price can ride the lower band for many bars. Use trend and confirmation before reversing. Only take long bounces when the trend supports it (e.g. above the 200 MA) or when you have a clear reversal candle.",
    },
    { type: "interactive", heading: "Think It Through", content: "What does a Bollinger Band 'squeeze' usually signal?", component: "ConceptCheck", props: { question: "What does a Bollinger Band 'squeeze' usually signal?", reveal: "Low volatility—bands are narrow. It often precedes a strong move (expansion) in one direction; the breakout can be tradeable." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Bollinger Bands = 20 SMA ± 2 std dev. Squeeze = low vol, often before breakout; expansion = high vol. Don't buy every lower-band touch." },
  ], true),
  createLesson("vol-bollinger-trading", 3, "Trading the Bands: Bounces and Breaks", "vol-bollinger-trading", "14 min", ["Bounces off bands", "Breakouts", "Trend filter"], [
    {
      type: "text",
      heading: "Bounces",
      content:
        "In a ranging or mildly trending market, price often bounces off the upper or lower band back toward the middle. Traders may buy near the lower band (with a stop below) and take profit near the middle or upper band, or sell near the upper band. This works until the market trends strongly—then price can 'walk' the band and bounces fail. Add a trend filter: e.g. only take long bounces when price is above the middle band or a longer MA. In a clear uptrend, a pullback to the lower band might be a buy—but in a downtrend, that same touch can lead to more selling. Context is everything.",
    },
    {
      type: "text",
      heading: "Breakouts",
      content:
        "A close outside the bands can signal the start of a trend or a continuation. After a squeeze, a breakout above the upper band (with volume) might be a long entry; a break below the lower band might be a short. False breakouts happen—price can poke out and then return. So some traders wait for a second close outside the band or use the band as a trailing reference once the move is underway. The first break after a long squeeze is often the most significant—momentum has been building. Confirm with volume: low volume breakouts fail more often.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use the middle band as a trend filter. Price above the middle = bias long (buy bounces to lower band). Price below = bias short (sell rallies to upper band). In a squeeze, wait for the breakout and then trade in the direction of the break—don't guess. Let the market tell you which way it's going.",
    },
    { type: "interactive", heading: "Think It Through", content: "When do band bounces tend to fail?", component: "ConceptCheck", props: { question: "When do band bounces tend to fail?", reveal: "In strong trends—price can walk the band. Use a trend filter (e.g. only long bounces when above the middle band) to avoid fighting the trend." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Bounces in ranges; breakouts after squeeze. Filter by trend (middle band) and volume." },
  ], true),
  createLesson("vol-atr", 4, "ATR: Average True Range", "vol-atr", "14 min", ["What ATR measures", "How it's calculated", "Why traders use it"], [
    {
      type: "text",
      heading: "What ATR Measures",
      content:
        "The Average True Range (ATR) measures volatility by averaging the 'true range' over a period—usually 14. The true range for each bar is the largest of: (1) current high minus current low, (2) absolute value of current high minus previous close, (3) absolute value of current low minus previous close. So it captures gaps and previous-close gaps, not just the current bar's range. ATR is expressed in price units (dollars, pips). A higher ATR means the asset is moving more per bar; lower ATR means quieter price action.\n\nWhy 'true' range? A regular bar's range (high minus low) misses gaps. If the previous close was 100 and today's low is 95 (gap down), the true range captures that 5-point gap. So ATR gives you a more accurate picture of how far price actually moves from bar to bar.",
    },
    {
      type: "text",
      heading: "Why Traders Use It",
      content:
        "ATR doesn't tell you direction—it tells you how much the market typically moves. That makes it ideal for setting stop losses (e.g. 1.5 × ATR below your entry) so your stop is based on recent volatility, not an arbitrary dollar amount. You can also compare ATR across different assets or timeframes to see which is more volatile. Many systems use ATR for position sizing: risk a fixed amount per trade, and the ATR determines how many shares or lots you can take. Formula: shares = (dollar risk) / (ATR × multiplier). So ATR directly influences your position size.",
    },
    {
      type: "analogy",
      heading: "The Ruler Analogy",
      content:
        "ATR is like a ruler that adjusts to the market. In a calm market, the ruler is short—small moves. In a volatile market, the ruler is long—big moves. When you set a stop, you're saying 'I'll exit if price moves X units against me.' ATR tells you what 'one unit' of typical movement is. So your stop is in the market's language, not in arbitrary dollars. A $2 stop might be huge for a quiet stock and tiny for a volatile one—ATR keeps you consistent.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why use ATR for stop loss placement?", component: "ConceptCheck", props: { question: "Why use ATR for stop loss placement?", reveal: "ATR reflects recent volatility. A stop based on ATR (e.g. 1.5× ATR) gives the trade room in volatile markets and tightens in quiet markets—adaptive to conditions." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ATR = average of true range. Measures typical move per bar. Use for stops and position sizing—it adapts to volatility." },
  ], true),
  createLesson("vol-atr-stops", 5, "Using ATR for Stop Losses", "vol-atr-stops", "14 min", ["ATR-based stops", "Comparing across assets", "Position sizing"], [
    {
      type: "text",
      heading: "ATR-Based Stops",
      content:
        "A common approach: place your stop 1.5 or 2 times the ATR away from your entry. For a long, that's often below the entry (e.g. entry minus 2× ATR). So in a $2 ATR stock, your stop might be $4 below entry; in a $0.50 ATR stock, $1 below. The stop adapts to volatility—you're not using a fixed $1 stop on a stock that moves $3 a day (you'd get stopped out constantly) or a $5 stop on a quiet stock (you'd risk too much). Adjust the multiplier (1.5, 2, 2.5) to your style: tighter = more stops but smaller loss per trade.\n\nSome traders use a multiple of ATR below the low of the entry candle (for longs) or above the high (for shorts)—that incorporates structure too. The key: your stop distance should scale with volatility.",
    },
    {
      type: "text",
      heading: "Position Sizing with ATR",
      content:
        "If you risk 1% of your account ($100 on $10k) and your stop is 2× ATR ($4 per share), you can buy 25 shares ($100 / $4). When ATR is high, your stop is wider, so you buy fewer shares for the same dollar risk. When ATR is low, you buy more. That keeps risk consistent whether the market is calm or wild. Compare across assets: a $50 stock with ATR 2 (4% of price) is more volatile than a $50 stock with ATR 1 (2%). Use ATR/price to compare, or just let ATR drive your position size formula.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "When ATR spikes suddenly (e.g. after earnings or news), your stop might become very wide. Consider reducing position size or waiting for ATR to normalize. Trading with a 3× ATR stop in a spiking market can mean risking 10% or more per trade—too much for most. Let volatility settle before sizing up.",
    },
    { type: "interactive", heading: "Think It Through", content: "If ATR is $2 and you use 2× ATR for your stop, how far is the stop from entry?", component: "ConceptCheck", props: { question: "If ATR is $2 and you use 2× ATR for your stop, how far is the stop from entry?", reveal: "$4. Stop distance = multiplier × ATR. So 2 × $2 = $4. That's how much you're risking per share." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stop = ATR × multiplier (1.5–2). Position size = dollar risk / stop distance. ATR keeps risk consistent across conditions." },
  ], true),
  createLesson("vol-keltner", 6, "Keltner Channels", "vol-keltner", "12 min", ["Structure", "How they differ from Bollinger"], [
    {
      type: "text",
      heading: "What Are Keltner Channels?",
      content:
        "Keltner Channels are volatility bands around a moving average. The middle line is usually an Exponential Moving Average (e.g. 20-period). The upper and lower channels are often set at a multiple of the ATR above and below the middle (e.g. 2× ATR). So instead of standard deviation (like Bollinger), Keltner uses ATR for the band width. That makes the channels more responsive to sudden volatility changes and often smoother than Bollinger Bands. When price closes outside the channel, some traders see it as a breakout or exhaustion signal.\n\nBecause ATR can spike quickly (e.g. on a big gap), Keltner Channels can widen faster than Bollinger Bands. That can be useful—you see the volatility expansion sooner. The trade-off: Keltner might be noisier in some conditions. Try both and see which fits your style.",
    },
    {
      type: "text",
      heading: "Keltner vs Bollinger",
      content:
        "Bollinger Bands use standard deviation, so they widen and narrow with statistical dispersion. Keltner uses ATR, so the width reflects average range. In practice, both can show squeezes and expansions; Keltner tends to be less jagged. Some traders use both: e.g. when Bollinger Bands move inside Keltner (squeeze), they expect a volatility expansion. Use the one that fits your platform and style—the idea (volatility bands around an average) is similar. If you're already using ATR for stops, Keltner keeps your volatility measure consistent.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "The 'squeeze' play: when Bollinger Bands contract inside Keltner Channels, volatility is very low. That often precedes a big move. Watch for the first close outside the bands as a potential breakout entry. Not every squeeze leads to a clean breakout—confirm with volume and trend.",
    },
    { type: "interactive", heading: "Think It Through", content: "How do Keltner Channels differ from Bollinger Bands?", component: "ConceptCheck", props: { question: "How do Keltner Channels differ from Bollinger Bands?", reveal: "Keltner uses ATR for band width; Bollinger uses standard deviation. Keltner can be smoother; both show volatility and squeeze/expansion." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Keltner = EMA ± multiple of ATR. Similar to Bollinger; ATR-based width. Can combine with Bollinger for squeeze signals." },
  ], true),
  createLesson("vol-donchian", 7, "Donchian Channels", "vol-donchian", "12 min", ["High-low range", "Breakout trading", "Turtle system"], [
    {
      type: "text",
      heading: "What Are Donchian Channels?",
      content:
        "Donchian Channels plot the highest high and the lowest low over the last N periods (often 20). The upper channel = highest high of the last 20 bars; the lower = lowest low. So they form a band that contains all price action over that window. There's no middle line unless you add one (e.g. the midpoint). Donchian Channels are simple and show the recent range—when price breaks above the upper channel, it's at a new N-period high; when it breaks below the lower, it's at a new N-period low. They're widely used in breakout and trend-following systems (e.g. Turtle Traders).\n\nThe Turtle Traders used 20-day and 55-day Donchian breakouts. A 20-day breakout = new 20-day high or low. The logic: if price is making new highs, the trend is up; if new lows, down. Simple. No oscillators, no complex math—just price breaking its recent range.",
    },
    {
      type: "text",
      heading: "Trading With Donchian",
      content:
        "Classic breakout: go long when price closes above the upper channel, go short when it closes below the lower channel. Stops are often placed at the opposite channel or at the midpoint. The channel width shows volatility—narrow channel = tight range, often before a breakout; wide channel = already trending. Like all breakouts, false breaks happen, so some traders require a filter (e.g. volume, or only in direction of a longer trend). The 20-period Donchian is short-term; 55-period is longer-term. Some use both: enter on 20 breakout, add on 55 breakout.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Trading every Donchian breakout in a choppy market. You'll get whipsawed—break up, reverse, break down, reverse. Add a trend filter: e.g. only take long breakouts when the 50 MA is rising, or only in the direction of the higher-timeframe trend. Or trade breakouts only after a clear consolidation (narrow channel).",
    },
    { type: "interactive", heading: "Think It Through", content: "What does a close above the upper Donchian Channel mean?", component: "ConceptCheck", props: { question: "What does a close above the upper Donchian Channel mean?", reveal: "Price made a new N-period high (e.g. 20-bar high). Used as a breakout long signal in trend-following systems." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Donchian = highest high and lowest low over N. Breakouts = trend-following entries. Add trend filter to reduce whipsaws." },
  ], true),
  createLesson("vol-stdev", 8, "Standard Deviation as Volatility", "vol-stdev", "12 min", ["What standard deviation shows", "Using it in context"], [
    {
      type: "text",
      heading: "Standard Deviation in Trading",
      content:
        "Standard deviation (std dev) measures how spread out price or returns are from their average. High std dev = more dispersion = more volatility. Bollinger Bands use it directly (2 std dev from the SMA). You can also plot std dev of returns or price over a window as a standalone volatility indicator—when it rises, the market is moving more; when it falls, it's quieter. It's the same idea as ATR but from a statistical lens: both tell you 'how much does this move?'\n\nStandard deviation is used in options pricing (the 'vol' in Black-Scholes is essentially annualized std dev of returns). So when you hear 'implied volatility' in options, it's related to this concept. For chart trading, you see it most in Bollinger Bands—the band width is a function of std dev.",
    },
    {
      type: "text",
      heading: "Why It Matters",
      content:
        "Understanding that volatility can be measured (ATR, std dev, band width) helps you avoid one-size-fits-all rules. A 1% stop might be fine for a low-volatility index but way too tight for a volatile stock. Use volatility indicators to adapt position size and stop distance. In options, volatility (implied and historical) is central to pricing—so standard deviation and volatility measures connect directly to how options are valued. For now, know: std dev and ATR are two ways to measure the same thing (how much price moves). Use whichever your platform and strategy prefer.",
    },
    {
      type: "analogy",
      heading: "The Scatter Plot Analogy",
      content:
        "Imagine plotting daily returns on a chart. If they're clustered tightly around zero, std dev is low—consistent, calm. If they're spread from -5% to +5%, std dev is high—wild swings. Standard deviation measures that spread. ATR does something similar for price range. Both answer: how much does this thing move? Different math, same idea.",
    },
    { type: "interactive", heading: "Think It Through", content: "What does a rise in standard deviation of price indicate?", component: "ConceptCheck", props: { question: "What does a rise in standard deviation of price indicate?", reveal: "Higher volatility—price or returns are more spread out from the average. The market is moving more." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Std dev measures spread from average. High = high vol. Used in Bollinger Bands and options. Same idea as ATR—adapt to conditions." },
  ], true),
  createLesson("vol-summary", 9, "Volatility Indicators: Summary", "vol-summary", "12 min", ["When to use each", "Combine with trend", "ATR first"], [
    {
      type: "text",
      heading: "Choosing Your Tool",
      content:
        "Bollinger Bands: great for squeeze/expansion and mean reversion in ranges. ATR: best for stop placement and position sizing—it's in price units and easy to apply. Keltner: similar to Bollinger, ATR-based width. Donchian: simple breakout and range. You don't need all of them—many traders use ATR for risk and Bollinger or one channel for volatility context. Combine with trend (e.g. only long volatility breakouts when above the 200 MA) to avoid fighting the trend.\n\nIf you learn one volatility tool first, make it ATR. It's the most practical: stops, position sizing, and it's in the units (dollars, pips) you trade. Add Bollinger or Donchian for squeeze/breakout context when you're ready.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Professional traders often size positions so that the dollar risk per trade (distance to stop × shares) is a fixed percentage of the account—and they use ATR to set that distance. So volatility directly determines how many shares they can buy. That keeps risk consistent across quiet and volatile days. Master ATR for risk first; add other volatility tools for strategy (squeeze, breakout) second.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Using a fixed stop (e.g. always $1) regardless of volatility. In low vol, you might be okay. In high vol, you'll get stopped out on noise. In very low vol, a $1 stop might be too wide and you'll risk too much. Let ATR (or similar) drive your stop distance.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is the main use of ATR for many pros?", component: "ConceptCheck", props: { question: "What is the main use of ATR for many pros?", reveal: "Setting stop distance and position size so that dollar risk per trade is consistent (e.g. 1% of account). ATR defines the stop distance." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ATR for stops and sizing. Bollinger/Donchian for squeeze and breakout context. Combine with trend. Let volatility adapt your risk." },
  ], true),
];
