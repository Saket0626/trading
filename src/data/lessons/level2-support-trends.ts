import type { Lesson } from "../../types";

const createLesson = (
  id: string,
  moduleId: string,
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
  level: 2,
  moduleId,
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const supportResistanceLessons: Lesson[] = [
  createLesson(
    "sr-why-work",
    "support-and-resistance",
    2,
    "Why Support and Resistance Work",
    "sr-why-work",
    "8 min",
    ["Psychology and memory", "Why levels hold"],
    [
      {
        type: "text",
        heading: "Psychology and Memory",
        content:
          "Support and resistance work because traders remember where price reversed before. At a previous low, buyers who missed the first bounce may step in again; at a previous high, sellers who missed the top may sell. These levels become self-reinforcing: everyone watches the same levels, so order flow clusters there.",
      },
      {
        type: "text",
        heading: "Why It Matters",
        content:
          "You're not trading against a random chart—you're trading against other participants who also see these levels. When you know where the crowd is looking, you can plan entries (near support in an uptrend) and exits (near resistance) with clearer risk.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "S/R works because of collective memory and order flow at key levels." },
    ]
  ),
  createLesson(
    "sr-identifying",
    "support-and-resistance",
    3,
    "Identifying Support and Resistance",
    "sr-identifying",
    "10 min",
    ["Horizontal levels", "How to spot them on charts"],
    [
      {
        type: "text",
        heading: "Horizontal Levels",
        content:
          "The simplest form of support and resistance is a horizontal line at a price where price has repeatedly reacted. Look for at least two touches—the more touches, the stronger the level. Swing highs and swing lows on your timeframe are the best candidates. Don't force a level where price only touched once.",
      },
      {
        type: "text",
        heading: "Common Mistake",
        content:
          "Many beginners draw too many lines or draw through price. Keep it clean: focus on the clearest, most obvious levels. If a level is fuzzy, it's probably not strong enough to trade.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Identify S/R where price has reacted multiple times. Fewer, clearer levels beat a cluttered chart." },
    ]
  ),
  createLesson(
    "sr-multiple-touches",
    "support-and-resistance",
    4,
    "Multiple Touches: Stronger Levels",
    "sr-multiple-touches",
    "6 min",
    ["Why more touches = stronger", "When to trust a level"],
    [
      {
        type: "text",
        heading: "Strength in Numbers",
        content:
          "A level that has been tested three or four times and held is stronger than one tested once. Each successful hold reinforces the level in traders' minds. Conversely, after a level breaks, it often loses its power—so focus on levels that have recently held.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "More touches that hold = stronger level. Broken levels often lose significance." },
    ]
  ),
  createLesson(
    "sr-role-reversal",
    "support-and-resistance",
    5,
    "Role Reversal: Support Becomes Resistance",
    "sr-role-reversal",
    "8 min",
    ["Why broken support becomes resistance", "How to use it"],
    [
      {
        type: "text",
        heading: "Flipping Roles",
        content:
          "When price breaks below support, that support often becomes resistance on the way back up. Why? Traders who bought at support and held are now sitting on losses; when price returns to that level, they may sell to break even. Same in reverse: broken resistance can become support. This 'role reversal' is one of the most reliable concepts in technical analysis.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Broken support often acts as new resistance; broken resistance often acts as new support." },
    ]
  ),
  createLesson(
    "sr-drawing",
    "support-and-resistance",
    6,
    "Drawing Support and Resistance Properly",
    "sr-drawing",
    "8 min",
    ["Don't force it", "Clean charts"],
    [
      {
        type: "text",
        heading: "Don't Force It",
        content:
          "Draw levels where price clearly reacted—not where you wish it had. Use the body of the candle or the wick consistently (many use the wick for the true extreme). If you're erasing and redrawing constantly, the level probably isn't valid. The best levels are obvious at a glance.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Draw S/R where price clearly reacted. Keep it simple and consistent." },
    ]
  ),
  createLesson(
    "sr-dynamic",
    "support-and-resistance",
    7,
    "Dynamic Support and Resistance: Moving Averages",
    "sr-dynamic",
    "8 min",
    ["Moving averages as S/R", "When price follows the MA"],
    [
      {
        type: "text",
        heading: "Moving Averages as Levels",
        content:
          "Support and resistance don't have to be horizontal. A moving average (e.g. 50-day or 200-day) can act as dynamic support in an uptrend—price pulls back to it and bounces. In a downtrend, the MA can act as dynamic resistance. These levels move with price, so they adapt to the trend.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "MAs can act as dynamic S/R. In uptrends price often respects the MA as support." },
    ]
  ),
  createLesson(
    "sr-round-numbers",
    "support-and-resistance",
    8,
    "Round Numbers: Psychological Levels",
    "sr-round-numbers",
    "6 min",
    ["Why round numbers matter", "00 and 50 levels"],
    [
      {
        type: "text",
        heading: "Psychology of Round Numbers",
        content:
          "Round numbers (100, 150, 200, 1000, etc.) and half-rounds (50, 150.50) often attract orders. Traders place stops and targets at these levels, so they become minor or major S/R. Don't rely on them alone, but be aware when price is approaching a big round number.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Round numbers often act as psychological S/R because of order clustering." },
    ]
  ),
  createLesson(
    "sr-fibonacci",
    "support-and-resistance",
    9,
    "Fibonacci Levels as Support and Resistance",
    "sr-fibonacci",
    "8 min",
    ["Common Fib retracements", "38.2%, 50%, 61.8%"],
    [
      {
        type: "text",
        heading: "Fibonacci Retracements",
        content:
          "After a move, traders often look for pullbacks to Fibonacci retracement levels: 38.2%, 50%, and 61.8% of the move. These levels frequently coincide with support or resistance. For example, in an uptrend, a pullback to 50% or 61.8% may find buyers. Fib works best when it aligns with a visible horizontal S/R level.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Fib retracements (38.2%, 50%, 61.8%) often align with S/R. Use with other confirmation." },
    ]
  ),
  createLesson(
    "sr-volume-profile",
    "support-and-resistance",
    10,
    "Volume Profile: Price Levels with Most Trading",
    "sr-volume-profile",
    "8 min",
    ["What volume profile shows", "High-volume nodes"],
    [
      {
        type: "text",
        heading: "Volume at Price",
        content:
          "Volume profile shows how much volume traded at each price level. Levels where a lot of volume occurred (high-volume nodes) often act as support or resistance—they represent price areas where many participants have a stake. The point of control (POC) is the price with the most volume and often acts as a magnet or key level.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Volume profile highlights levels with the most trading; these often become S/R." },
    ]
  ),
  createLesson(
    "sr-trading",
    "support-and-resistance",
    11,
    "Trading at Support and Resistance: Bounce or Break?",
    "sr-trading",
    "10 min",
    ["Bounce vs breakout", "How to plan"],
    [
      {
        type: "text",
        heading: "Two Scenarios",
        content:
          "At support or resistance you have two main scenarios: (1) Price bounces—you can enter in the direction of the bounce with a stop beyond the level. (2) Price breaks—you can trade the breakout with a stop on the other side of the level. Never assume one or the other; wait for confirmation (e.g. a strong close beyond the level for a break, or a reversal candle for a bounce) and always use a stop.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Entering before confirmation leads to fake-outs. A break that fails and reverses is common. Wait for the candle to close beyond the level or for a clear rejection candle.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "At S/R, plan for both bounce and break. Wait for confirmation and use a stop." },
    ]
  ),
  createLesson(
    "sr-summary",
    "support-and-resistance",
    12,
    "Support and Resistance: Summary",
    "sr-summary",
    "6 min",
    ["Recap", "Putting it together"],
    [
      {
        type: "text",
        heading: "Recap",
        content:
          "Support = floor (buying). Resistance = ceiling (selling). Levels work due to psychology and memory. Identify clear horizontal levels with multiple touches. Broken support becomes resistance and vice versa. Use dynamic S/R (MAs), round numbers, and Fib when they align. At S/R, wait for bounce or break confirmation and always use a stop.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "S/R is foundational. Draw it cleanly, trade with confirmation, and manage risk." },
    ],
    true
  ),
];

export const trendlinesLessons: Lesson[] = [
  createLesson(
    "tl-downtrend",
    "trendlines-and-trends",
    2,
    "Downtrend: Lower Highs, Lower Lows",
    "tl-downtrend",
    "6 min",
    ["Define downtrend", "Sellers in control"],
    [
      {
        type: "text",
        heading: "Downtrend",
        content:
          "In a downtrend, price makes a series of lower highs and lower lows. Each rally fails to make a new high, and each drop makes a new low. Sellers are in control. A downtrend line is drawn along the highs—price often respects it as resistance on bounces.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Downtrend = lower highs, lower lows. Draw the trendline along the highs." },
    ]
  ),
  createLesson(
    "tl-sideways",
    "trendlines-and-trends",
    3,
    "Sideways and Ranging Markets",
    "tl-sideways",
    "6 min",
    ["No clear trend", "Range-bound price"],
    [
      {
        type: "text",
        heading: "When There's No Trend",
        content:
          "Price doesn't always trend. In a range, price oscillates between a support and resistance zone without making consistent higher highs or lower lows. Trend-following strategies often fail in ranges; mean reversion (buying support, selling resistance) can work. Identify the range and don't force a trend.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Ranging markets have no clear trend. Trade the range or wait for a breakout." },
    ]
  ),
  createLesson(
    "tl-drawing",
    "trendlines-and-trends",
    4,
    "Drawing Trendlines: Connect at Least Two Points",
    "tl-drawing",
    "8 min",
    ["How to draw", "Uptrend and downtrend lines"],
    [
      {
        type: "text",
        heading: "How to Draw a Trendline",
        content:
          "An uptrend line connects at least two significant lows; the line slopes up. A downtrend line connects at least two significant highs; the line slopes down. Use touches that are clear swing points—not every tiny wick. The more touches, the more valid the line. Don't force a line through price; if it doesn't fit, the trend may be weak or over.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Connect at least two swing lows (uptrend) or swing highs (downtrend). More touches = stronger line." },
    ]
  ),
  createLesson(
    "tl-validation",
    "trendlines-and-trends",
    5,
    "Trendline Validation: The Third Touch",
    "tl-validation",
    "6 min",
    ["Third touch confirms", "When to trust the line"],
    [
      {
        type: "text",
        heading: "Third Touch Confirms",
        content:
          "A trendline drawn from two points is provisional. When price comes back and touches the line a third time (or more) and holds, the trendline is validated. If price slices through on the third touch, the trend may be weakening or over. Use the third touch to confirm before relying on the line for entries.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "A third touch that holds validates the trendline. A break on the third touch suggests weakness." },
    ]
  ),
  createLesson(
    "tl-breaks",
    "trendlines-and-trends",
    6,
    "Trendline Breaks: Potential Reversals",
    "tl-breaks",
    "8 min",
    ["What a break can mean", "False breaks"],
    [
      {
        type: "text",
        heading: "When Price Breaks the Trendline",
        content:
          "A clear break of a validated trendline (especially on a close) can signal a potential trend change or pause. In an uptrend, a break below the trendline might lead to a pullback or reversal. Don't reverse your position on the first tick—wait for confirmation (e.g. close below, follow-through). False breaks are common; price sometimes wicks through and then resumes the trend.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Trendline breaks can signal change. Wait for confirmation; be aware of false breaks." },
    ]
  ),
  createLesson(
    "tl-channels",
    "trendlines-and-trends",
    7,
    "Channels: Parallel Trendlines",
    "tl-channels",
    "8 min",
    ["Rising and falling channels", "Trading the channel"],
    [
      {
        type: "text",
        heading: "Drawing a Channel",
        content:
          "A channel is formed by two parallel trendlines—one along the lows, one along the highs. In an uptrend channel, price tends to bounce between the lower and upper line. You can buy near the lower line and take profit near the upper line, with a stop below the channel. Same idea in reverse for a downtrend channel.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Channels contain price between two parallel lines. Trade bounces within the channel or breakouts." },
    ]
  ),
  createLesson(
    "tl-strength",
    "trendlines-and-trends",
    8,
    "Trend Strength: Steepness and Consistency",
    "tl-strength",
    "6 min",
    ["Steep vs gentle", "Sustained trends"],
    [
      {
        type: "text",
        heading: "What Strong Trends Look Like",
        content:
          "A steep trendline (price rising or falling quickly) often doesn't last as long—it can be exhausted. A more gentle, consistent slope often indicates a healthier, more sustainable trend. Also look at consistency: does price keep making higher lows (uptrend) or lower highs (downtrend) without big violations? That consistency suggests strength.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Gentler, consistent trends often last longer. Steep trends can burn out quickly." },
    ]
  ),
  createLesson(
    "tl-friend",
    "trendlines-and-trends",
    9,
    "'Trend Is Your Friend': Trade With the Trend",
    "tl-friend",
    "8 min",
    ["Why trading with trend helps", "Pullbacks in trend"],
    [
      {
        type: "text",
        heading: "Trade With the Trend",
        content:
          "The saying 'trend is your friend' means that taking trades in the direction of the prevailing trend has a higher probability of success than fighting it. In an uptrend, look for buy opportunities on pullbacks (to the trendline, MA, or support). In a downtrend, look for sell opportunities on bounces. You don't have to catch the exact bottom or top—catching a portion of the trend is enough.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Align your trades with the trend. Buy pullbacks in uptrends, sell bounces in downtrends." },
    ]
  ),
  createLesson(
    "tl-counter",
    "trendlines-and-trends",
    10,
    "Counter-Trend Trading: Higher Risk, Higher Reward",
    "tl-counter",
    "8 min",
    ["When counter-trend makes sense", "Risks"],
    [
      {
        type: "text",
        heading: "Trading Against the Trend",
        content:
          "Counter-trend trading means taking trades against the prevailing trend (e.g. selling in an uptrend at resistance). It can offer good risk-reward if you catch a reversal, but the probability of success is often lower—trends can extend further than you expect. If you counter-trend trade, use tight stops and only at clear levels (strong S/R, exhaustion signals). Many professionals focus on trend-following and use counter-trend only in specific setups.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content: "Beginners often counter-trend trade without a clear level or stop. That leads to catching falling knives or selling into strength.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Counter-trend is possible but riskier. Use clear levels and tight risk; prefer trend-following when learning." },
    ]
  ),
  createLesson(
    "tl-summary",
    "trendlines-and-trends",
    11,
    "Trendlines and Trends: Summary",
    "tl-summary",
    "6 min",
    ["Recap", "Putting it together"],
    [
      {
        type: "text",
        heading: "Recap",
        content:
          "Uptrend = higher highs, higher lows. Downtrend = lower highs, lower lows. Draw trendlines along swing lows (uptrend) or swing highs (downtrend); validate with a third touch. Breaks can signal change—confirm before acting. Channels give you parallel boundaries. Trade with the trend when you can; counter-trend only with clear levels and strict risk.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Trends and trendlines help you stay on the right side of the market. Draw cleanly, confirm, and manage risk." },
    ],
    true
  ),
];
