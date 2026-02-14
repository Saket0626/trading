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
  hasQuiz = true
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

export const level2RemainingLessons: Lesson[] = [
  // Forex: full 19-lesson deep dive in level2-forex.ts
  // Commodities: full 17-lesson deep dive in level2-commodities.ts
  // Stocks
  // Stocks: full 14-lesson deep dive in level2-stocks.ts
  // Crypto: full 16-lesson deep dive in level2-crypto.ts
  // Choosing Your Market: full 10 lessons + quiz in level2-choosing-market.ts
  // Support & Resistance (module: support-and-resistance)
  createLesson(
    "support-resistance",
    "support-and-resistance",
    1,
    "What Is Support and Resistance?",
    "support-resistance",
    "16 min",
    ["Define support and resistance", "How to identify them", "Why they work", "Role reversal", "Trading at S/R"],
    [
      {
        type: "text",
        heading: "Support: The Price Floor",
        content:
          "Support is a price level where buying interest tends to emerge. When price falls to support, buyers step in and price often bounces up. Think of it as a floor—price has historically had trouble going below it. Support forms at previous lows, round numbers (e.g. 50.00, 100), or where large buyers have shown interest. The more times price has tested a level and held, the stronger that support is—until it breaks.\n\nWhy does it work? Memory and positioning. Traders remember where price reversed before and place buy orders there. When price reaches the level, a cluster of buy orders gets hit and demand temporarily overwhelms supply. Institutional traders often place orders at key levels; retail traders follow; the level becomes self-reinforcing.\n\nOn a chart, look for price lows that have held multiple times. AAPL bouncing at $170 three times? That's support. Each successful hold strengthens the level—until it doesn't. Broken support often becomes resistance later (role reversal).",
      },
      {
        type: "text",
        heading: "Resistance: The Price Ceiling",
        content:
          "Resistance is a price level where selling interest tends to emerge. When price rises to resistance, sellers step in and price often bounces down. It acts like a ceiling. Resistance forms at previous highs, round numbers, or where sellers have previously defended. A broken support often becomes resistance (role reversal), and a broken resistance often becomes support—we'll use this in trading.\n\nResistance works for the same reasons as support: traders remember where price failed before. Sellers place limit orders there. When price rallies into the zone, selling overwhelms buying. The level becomes a magnet for profit-taking and short entries. Round numbers ($200, $50) often act as psychological resistance—traders round off targets there.\n\nProfessional traders watch volume at resistance. A breakout with high volume is more likely to hold than a breakout on thin volume. We'll cover breakouts in detail in the Trendlines module.",
      },
      {
        type: "analogy",
        heading: "The Bouncy Floor and Ceiling Analogy",
        content:
          "Imagine a ball in a room with a bouncy floor and ceiling. The floor (support) bounces price up when it hits. The ceiling (resistance) bounces price down. When the ball breaks through the floor or ceiling, that old floor can become the new ceiling. You're trading the bounces and the breaks.\n\nThe ball doesn't always bounce perfectly. Sometimes it slips through. That's why you use stops—if support breaks, you're wrong and you're out. The analogy holds: trade the bounces with a plan for when the level fails.",
      },
      {
        type: "text",
        heading: "Role Reversal: When Levels Flip",
        content:
          "A broken support often becomes resistance. Why? Traders who bought at the old support and held are now underwater. When price rallies back to that level, they sell to break even—creating selling pressure. The old floor becomes a ceiling. Same in reverse: broken resistance often becomes support. Buyers who missed the breakout place buy orders there on pullbacks.\n\nRole reversal is powerful. The $170 level that held AAPL three times—once it breaks, $170 can act as resistance on any rally. Traders use this: short the retest of broken support, or buy the pullback to broken resistance. Always know whether you're trading a level that's still valid or one that's already broken.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Treat support and resistance as zones, not exact prices. Price might bounce at $169.80 or $170.20—that's the same zone. Don't place orders at one penny; use a band. And always confirm with volume: a bounce off support with increasing volume is more reliable than a bounce on declining volume.",
      },
      {
        type: "warning",
        heading: "Critical Warning",
        content:
          "Don't assume every touch of support or resistance will hold. Levels get broken. Always use a stop—e.g. just below support for a long, just above resistance for a short. Treat levels as zones, not exact prices.\n\nMany beginners buy at support with no stop, then watch price slice through and drop 10%. One broken level can wipe out a week of gains. The stop defines your risk before you enter. No stop = no trade.",
      },
      {
        type: "preview",
        heading: "Trendlines and Breakouts (Preview)",
        content:
          "Support and resistance can be horizontal (price levels) or dynamic (trendlines, moving averages). In the next module we'll cover how to draw trendlines, validate them, and trade breakouts. A breakout above resistance is often a buy signal; a breakdown below support is often a sell. We'll build on what you've learned here.",
      },
      { type: "interactive", heading: "Think It Through", content: "What is the difference between support and resistance?", component: "ConceptCheck", props: { question: "What is the difference between support and resistance?", reveal: "Support = floor where buying tends to emerge. Resistance = ceiling where selling tends to emerge. Price respects them until they break; then roles can reverse." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Support = floor (buying pressure). Resistance = ceiling (selling pressure). Price tends to respect these levels until they break; then roles can reverse. Always use stops and treat levels as zones.",
      },
    ]
  ),
  // Trendlines & Trends (module: trendlines-and-trends)
  createLesson(
    "trends",
    "trendlines-and-trends",
    1,
    "What Is a Trend?",
    "trends",
    "14 min",
    ["Uptrend, downtrend, sideways", "Higher highs, higher lows", "Why trend matters", "Timeframe alignment", "Trading with the trend"],
    [
      {
        type: "text",
        heading: "Trend = Direction of Price",
        content:
          "A trend is the prevailing direction of price over time. An UPTREND means price is making higher highs and higher lows—buyers are in control. A DOWNTREND means lower highs and lower lows—sellers are in control. SIDEWAYS (or ranging) means no clear direction; price oscillates between similar highs and lows. You identify trend by structure: in an uptrend, each pullback stops at a higher low before making a higher high. Timeframe matters: the 5m chart can show an uptrend while the daily is downtrend—align your view with your holding period.\n\nDraw a line connecting the lows in an uptrend—if it slopes up and price respects it, you have a rising trendline. Connect the highs in a downtrend—if it slopes down and price respects it, you have a falling trendline. The slope and structure tell you who's in control.",
      },
      {
        type: "text",
        heading: "Why Trend Matters for Trading",
        content:
          "Most strategies work better when you trade in the direction of the trend. 'Trend is your friend'—fighting the trend increases the chance of getting run over. Buying pullbacks in an uptrend or selling rallies in a downtrend gives you probability on your side. Identifying trend is one of the first steps in any technical analysis; we'll build on it with trendlines and breakouts in the lessons ahead.\n\nProfessional traders often use a multi-timeframe approach: check the daily for the big trend, then use the 4H or 1H for entries. If the daily is up and the 4H pulls back to support, that's a high-probability long. If the daily is down and you're buying bounces, you're fighting the tide. Trend filters—like trading only when price is above the 200 MA—cut many bad trades.",
      },
      {
        type: "analogy",
        heading: "The River Analogy",
        content:
          "Trend is like a river's current. Swimming with the current (with the trend) is easier; swimming against it is exhausting and dangerous. Trade with the current when you can.\n\nIn a strong uptrend, buying pullbacks is like swimming with the current—the market carries you. Shorting in that same uptrend is like swimming upstream. You might make it for a bit, but one strong wave (rally) can wipe you out. Save counter-trend trades for clear exhaustion signals.",
      },
      {
        type: "text",
        heading: "Timeframe Alignment",
        content:
          "The same asset can show different trends on different timeframes. AAPL might be in an uptrend on the daily (higher highs, higher lows over months) but in a downtrend on the 5-minute (lower highs, lower lows over the last hour). Day traders care about the 5m trend; swing traders care about the daily. Align your timeframe with your holding period. A day trade entry on a 5m pullback in a daily uptrend has the big trend on your side. A swing trade in a daily downtrend is fighting the tide.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "In an uptrend, look to buy dips (pullbacks to support or the rising trendline). In a downtrend, look to sell rallies. Use a stop below the last low (uptrend) or above the last high (downtrend). Don't chase—wait for the pullback. Chasing in an uptrend often means buying the top of a short-term spike.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Assuming the trend will continue forever. Trends reverse. An uptrend that's made five higher highs might be exhausting. Watch for breakdown of structure (e.g. price makes a lower low), divergences, or volume dropping on rallies. When the trend breaks, don't keep buying—step aside or flip direction with confirmation.",
      },
      {
        type: "preview",
        heading: "Drawing Trendlines (Preview)",
        content:
          "In the next lessons we'll cover how to draw trendlines correctly, validate them with touches, and trade breaks. A valid trendline needs at least two touches. We'll also cover channels, trend strength, and when trendlines break. You'll use trends and trendlines together for high-probability entries.",
      },
      { type: "interactive", heading: "Think It Through", content: "How do you define an uptrend?", component: "ConceptCheck", props: { question: "How do you define an uptrend?", reveal: "Higher highs and higher lows—buyers in control. Each pullback makes a higher low before the next rally makes a higher high. Trade with the trend when you can." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Uptrend = higher highs, higher lows. Downtrend = lower highs, lower lows. Sideways = range. Trade with the trend; align timeframe with holding period; use stops.",
      },
    ]
  ),
];
