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
    "12 min",
    ["Psychology and memory", "Why levels hold", "Order flow clustering"],
    [
      {
        type: "text",
        heading: "Psychology and Memory",
        content:
          "Support and resistance work because traders remember where price reversed before. At a previous low, buyers who missed the first bounce may step in again; at a previous high, sellers who missed the top may sell. These levels become self-reinforcing: everyone watches the same levels, so order flow clusters there.\n\nIt's not magic. It's human behavior. When a stock bounced off $100 three times, traders notice. The next time price approaches $100, buyers think 'it bounced before' and place buy orders. Sellers think 'it might bounce again' and hold off. The collective memory creates a floor. Same in reverse at resistance—everyone remembers where sellers stepped in.",
      },
      {
        type: "text",
        heading: "Order Flow Clustering",
        content:
          "Because everyone watches the same levels, orders pile up there. Traders place buy orders just above support, stop losses just below. Institutions use round numbers and prior highs/lows for their orders. That clustering of orders creates actual buying and selling pressure when price arrives. The levels 'work' because real money is waiting at them.\n\nYou're not trading against a random chart—you're trading against other participants who also see these levels. When you know where the crowd is looking, you can plan entries (near support in an uptrend) and exits (near resistance) with clearer risk. You're aligning with where the market is likely to react.",
      },
      {
        type: "analogy",
        heading: "The Concert Floor Analogy",
        content:
          "Think of support and resistance like the floor and ceiling of a concert hall. The floor (support) is where people naturally gather—there's a boundary everyone respects. The ceiling (resistance) is where the crowd stops—no one goes higher. Price bounces between these levels because that's where the 'crowd' (order flow) clusters. When the floor breaks, panic—people rush for the exits. When the ceiling breaks, euphoria—everyone piles in. S/R works because it's where the crowd has already decided to act.",
      },
      { type: "interactive", heading: "Think It Through", content: "Why do support and resistance work?", component: "ConceptCheck", props: { question: "Why do support and resistance work?", reveal: "Collective memory and order flow—traders remember where price reversed and cluster orders at those levels." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "S/R works because of collective memory and order flow at key levels. Everyone watches the same levels, so real orders cluster there." },
    ]
  ),
  createLesson(
    "sr-identifying",
    "support-and-resistance",
    3,
    "Identifying Support and Resistance",
    "sr-identifying",
    "12 min",
    ["Horizontal levels", "How to spot them on charts", "Swing highs and lows"],
    [
      {
        type: "text",
        heading: "Horizontal Levels",
        content:
          "The simplest form of support and resistance is a horizontal line at a price where price has repeatedly reacted. Look for at least two touches—the more touches, the stronger the level. Swing highs and swing lows on your timeframe are the best candidates. Don't force a level where price only touched once.\n\nSwing highs are the peaks—the points where price turned down. Swing lows are the troughs—where price turned up. Connect these. A level at a swing low that held twice is support. A level at a swing high that held twice is resistance. The clearest levels are obvious at a glance—you shouldn't need to squint.",
      },
      {
        type: "text",
        heading: "How to Spot Them",
        content:
          "Scan left to right. Where did price stall or reverse? Mark those prices. Do you see clusters? Multiple touches at roughly the same level? That's your S/R. Use the body or the wick consistently—many traders use the wick (true extreme) for stops and the body for levels. Pick one approach and stick to it.\n\nZones are often better than lines. Price rarely hits an exact number. A 'zone' between 99.50 and 100.50 might be more realistic than a line at 100.00. Draw a band, not a razor-thin line.",
      },
      {
        type: "analogy",
        heading: "The Basketball Hoop Analogy",
        content:
          "Think of S/R like a basketball hoop. The rim is the level. Shots don't have to hit the exact center—they just need to go through the hoop. Support and resistance work the same way. Price doesn't need to touch 100.00 exactly. It might touch 99.80 or 100.20. The zone around the level is what matters. Draw levels where price clearly reacted, not where you wish it had. The best levels are like a well-placed hoop—obvious and consistent.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Many beginners draw too many lines or draw through price. Keep it clean: focus on the clearest, most obvious levels. If a level is fuzzy, it's probably not strong enough to trade. If you're erasing and redrawing constantly, the level probably isn't valid. The best levels are obvious at a glance. Fewer, clearer levels beat a cluttered chart.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "Start with the most recent swing high and swing low. Then look for prior levels that align. The strongest levels often connect multiple swing points across months or years." },
      { type: "interactive", heading: "Think It Through", content: "How many touches make a level stronger?", component: "ConceptCheck", props: { question: "How many touches make a level stronger?", reveal: "At least two; more touches that hold = stronger. Fewer, clearer levels beat a cluttered chart." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Identify S/R where price has reacted multiple times. Fewer, clearer levels beat a cluttered chart. Use zones, not razor-thin lines." },
    ]
  ),
  createLesson(
    "sr-multiple-touches",
    "support-and-resistance",
    4,
    "Multiple Touches: Stronger Levels",
    "sr-multiple-touches",
    "10 min",
    ["Why more touches = stronger", "When to trust a level", "Broken levels"],
    [
      {
        type: "text",
        heading: "Strength in Numbers",
        content:
          "A level that has been tested three or four times and held is stronger than one tested once. Each successful hold reinforces the level in traders' minds. Why? Because every time price bounces, more traders notice. More orders get placed there. The level becomes a self-fulfilling prophecy—it works because everyone believes it works.\n\nTwo touches = a level exists. Three touches = it's validated. Four or more = it's a major level. But quality matters. Three clean bounces are better than six sloppy ones where price sliced through and recovered. Focus on levels where price clearly respected the zone.",
      },
      {
        type: "text",
        heading: "When to Trust a Level",
        content:
          "Trust levels that have recently held. If a support level held last week and price is approaching it again, that's a high-probability area. Conversely, after a level breaks, it often loses its power—or flips roles. Broken support becomes resistance. So focus on levels that have recently held, and be aware when they've been violated.",
      },
      {
        type: "analogy",
        heading: "The Bridge Analogy",
        content:
          "Think of a level like a bridge. The first time cars drive over it, you're not sure it will hold. The second time, you're more confident. By the third or fourth time, you trust it. Multiple touches = the bridge has been stress-tested. But if the bridge collapses (level breaks), you don't drive over the rubble expecting it to hold. Broken levels often lose significance—or become the opposite (support becomes resistance).",
      },
      { type: "warning", heading: "Critical Warning", content: "Don't assume a level will hold just because it held before. Markets change. A level that held five times can break on the sixth. Always use a stop loss. Levels are probabilities, not guarantees." },
      { type: "interactive", heading: "Think It Through", content: "What happens to a level after it breaks?", component: "ConceptCheck", props: { question: "What happens to a level after it breaks?", reveal: "It often loses significance. Focus on levels that have recently held. Broken support often becomes resistance (role reversal)." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "More touches that hold = stronger level. Broken levels often lose significance or flip roles. Always use stops—levels are probabilities." },
    ]
  ),
  createLesson(
    "sr-role-reversal",
    "support-and-resistance",
    5,
    "Role Reversal: Support Becomes Resistance",
    "sr-role-reversal",
    "12 min",
    ["Why broken support becomes resistance", "How to use it", "Break-even selling"],
    [
      {
        type: "text",
        heading: "Flipping Roles",
        content:
          "When price breaks below support, that support often becomes resistance on the way back up. Why? Traders who bought at support and held are now sitting on losses; when price returns to that level, they may sell to break even. That creates a wall of sell orders. Same in reverse: broken resistance can become support. Buyers who missed the breakout may buy on the first pullback, and shorts may cover. This 'role reversal' is one of the most reliable concepts in technical analysis.\n\nIt's not just psychology—it's order flow. Stops get placed just below support. When support breaks, those stops trigger. When price rallies back, the broken level becomes 'resistance' because everyone who bought there is now underwater and itching to get out.",
      },
      {
        type: "text",
        heading: "How to Use It",
        content:
          "When a support level breaks, draw a new resistance line at that level. If price rallies back and fails there, that confirms the role reversal. You can short near that level with a stop above it. Same for broken resistance: if price breaks above resistance then pulls back, the old resistance often acts as new support. Buy the pullback with a stop below. Role reversal gives you a clear level and a clear stop.",
      },
      {
        type: "analogy",
        heading: "The Floor-Ceiling Analogy",
        content:
          "Imagine a room. The floor was support—people stood on it. Then the floor collapsed. Everyone fell through. When they try to climb back up, the broken floor (now a hole) becomes a ceiling—they can't get past it. They're stuck below. That's role reversal. What was support (floor) becomes resistance (ceiling) once it breaks. The same structure, flipped function.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "The first retest of a broken level is often the strongest. If price breaks support and rallies back quickly, that first touch of the old support (now resistance) frequently fails. Subsequent touches may hold—so the first retest is the best opportunity." },
      { type: "interactive", heading: "Think It Through", content: "What happens when support breaks?", component: "ConceptCheck", props: { question: "What happens when support breaks?", reveal: "Broken support often acts as new resistance (role reversal). Same idea in reverse for broken resistance. Break-even selling creates the wall." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Broken support often acts as new resistance; broken resistance often acts as new support. Use role reversal for clear entries and stops." },
    ]
  ),
  createLesson(
    "sr-drawing",
    "support-and-resistance",
    6,
    "Drawing Support and Resistance Properly",
    "sr-drawing",
    "12 min",
    ["Don't force it", "Clean charts", "Body vs wick"],
    [
      {
        type: "text",
        heading: "Don't Force It",
        content:
          "Draw levels where price clearly reacted—not where you wish it had. Use the body of the candle or the wick consistently (many use the wick for the true extreme). If you're erasing and redrawing constantly, the level probably isn't valid. The best levels are obvious at a glance.\n\nBeginners often draw levels to fit their bias. 'I want to go long, so I'll draw support here.' That's backwards. Draw where price actually reversed. If you can't find a clear level, there might not be one. Step away and come back. The chart should speak to you, not the other way around.",
      },
      {
        type: "text",
        heading: "Body vs Wick",
        content:
          "Should you use the candle body or the wick? Most traders use the wick (high/low) for the true extreme—that's where stops get triggered and where price actually reached. Support at a swing low usually means the low of the wick. Resistance at a swing high usually means the high of the wick. Pick one convention and stick to it. Consistency matters more than the exact choice.",
      },
      {
        type: "analogy",
        heading: "The Architect Analogy",
        content:
          "Think of drawing S/R like an architect drawing blueprints. An architect doesn't draw lines where they want doors to be—they draw where the structure actually has openings. S/R is the same. You're documenting where the market structure actually reacted, not where you'd like it to react. Clean, obvious, structural. If the line looks forced, it probably is.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Drawing too many lines is a trap. A chart with 20 S/R levels is unreadable and useless. Focus on the 2–4 clearest levels on your timeframe. If a level is fuzzy or requires mental gymnastics to justify, skip it. Fewer, clearer levels beat a cluttered chart every time.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "Use semi-transparent horizontal bands instead of thin lines. A zone from 99.50 to 100.50 is more realistic than a line at 100.00. Price rarely hits an exact number—zones capture reality." },
      { type: "interactive", heading: "Think It Through", content: "How should you draw S/R?", component: "ConceptCheck", props: { question: "How should you draw S/R?", reveal: "Where price clearly reacted. Keep it simple and consistent; don't force or clutter. Use the wick for extremes." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Draw S/R where price clearly reacted. Keep it simple and consistent. Use zones, not razor lines. Fewer is better." },
    ]
  ),
  createLesson(
    "sr-dynamic",
    "support-and-resistance",
    7,
    "Dynamic Support and Resistance: Moving Averages",
    "sr-dynamic",
    "12 min",
    ["Moving averages as S/R", "When price follows the MA", "50-day and 200-day"],
    [
      {
        type: "text",
        heading: "Moving Averages as Levels",
        content:
          "Support and resistance don't have to be horizontal. A moving average (e.g. 50-day or 200-day) can act as dynamic support in an uptrend—price pulls back to it and bounces. In a downtrend, the MA can act as dynamic resistance. These levels move with price, so they adapt to the trend.\n\nWhy do MAs work? They're widely watched. The 50-day and 200-day are institutional favorites. When everyone watches the same level, order flow clusters there. It's the same psychology as horizontal S/R—collective attention creates self-fulfilling levels.",
      },
      {
        type: "text",
        heading: "When Price Follows the MA",
        content:
          "In a strong uptrend, price often 'rides' the 50-day or 20-day MA. Pullbacks to the MA are buying opportunities—the MA acts as dynamic support. In a downtrend, price rides below the MA; bounces to the MA are selling opportunities. The MA becomes a moving floor or ceiling. If price slices through the MA and doesn't reclaim it, the trend may be weakening.",
      },
      {
        type: "analogy",
        heading: "The Rope Bridge Analogy",
        content:
          "Think of a moving average like a rope bridge that moves with the crowd. In an uptrend, the bridge (MA) slopes up. Price walks along it—pullbacks touch the bridge and bounce. In a downtrend, the bridge slopes down. Price walks below it—bounces touch the bridge and fail. The bridge adapts to the terrain. Horizontal S/R is like a fixed wall; the MA is like a moving guide that tracks the trend.",
      },
      {
        type: "preview",
        heading: "Moving Averages (Preview)",
        content:
          "We'll cover moving averages in depth in a later module—types (SMA vs EMA), settings (20, 50, 200), and crossovers. For now, know that MAs can act as dynamic S/R. They're most useful in trending markets; in ranges they whipsaw.",
      },
      { type: "interactive", heading: "Think It Through", content: "Can moving averages act as support or resistance?", component: "ConceptCheck", props: { question: "Can moving averages act as support or resistance?", reveal: "Yes—dynamic S/R. In uptrends price often respects the MA as support. Widely watched MAs (50, 200) attract order flow." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "MAs can act as dynamic S/R. In uptrends price often respects the MA as support. Use 50-day and 200-day as key levels." },
    ]
  ),
  createLesson(
    "sr-round-numbers",
    "support-and-resistance",
    8,
    "Round Numbers: Psychological Levels",
    "sr-round-numbers",
    "10 min",
    ["Why round numbers matter", "00 and 50 levels", "Order clustering"],
    [
      {
        type: "text",
        heading: "Psychology of Round Numbers",
        content:
          "Round numbers (100, 150, 200, 1000, etc.) and half-rounds (50, 150.50) often attract orders. Traders place stops and targets at these levels, so they become minor or major S/R. Don't rely on them alone, but be aware when price is approaching a big round number.\n\nWhy? Humans think in round numbers. We say 'around 100' not 'around 97.34.' When traders set targets, they pick 100 or 150. When they place stops, they round to 99 or 101. That clustering creates actual order flow. The bigger the round number (1000 vs 100), the more significant it tends to be.",
      },
      {
        type: "text",
        heading: "00 and 50 Levels",
        content:
          "The most watched levels are xxx.00 (100, 200, 1000) and xxx.50 (150.50, 200.50). In forex, round numbers like 1.1000 or 1.2000 are major. In stocks, 100, 200, 500, 1000 matter. Price often stalls, reverses, or accelerates at these levels. Use them as confirmation—when a round number aligns with a horizontal S/R level, the confluence is stronger.",
      },
      {
        type: "analogy",
        heading: "The Speed Limit Analogy",
        content:
          "Think of round numbers like speed limit signs. Everyone notices 50 mph, 65 mph, 100 kph. No one focuses on 47 mph or 63 mph. Round numbers are psychological magnets—everyone's attention lands there. When price approaches 100, traders notice. Orders cluster. The level becomes self-fulfilling. It's not magic; it's human psychology in numbers.",
      },
      {
        type: "warning",
        heading: "Don't Rely on Round Numbers Alone",
        content:
          "Round numbers are useful as confirmation, not as standalone signals. A stock approaching 100 might stall—or it might blow through. Use round numbers with horizontal S/R, volume, and context. A round number that also aligns with prior swing highs is much stronger than a round number in isolation.",
      },
      { type: "interactive", heading: "Think It Through", content: "Why do round numbers often act as S/R?", component: "ConceptCheck", props: { question: "Why do round numbers often act as S/R?", reveal: "Psychological levels—order clustering. Traders place orders at round numbers. Bigger numbers (1000) attract more attention than smaller (100)." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Round numbers often act as psychological S/R because of order clustering. Use them as confirmation with other levels—not alone." },
    ]
  ),
  createLesson(
    "sr-fibonacci",
    "support-and-resistance",
    9,
    "Fibonacci Levels as Support and Resistance",
    "sr-fibonacci",
    "12 min",
    ["Common Fib retracements", "38.2%, 50%, 61.8%", "When Fib works best"],
    [
      {
        type: "text",
        heading: "Fibonacci Retracements",
        content:
          "After a move, traders often look for pullbacks to Fibonacci retracement levels: 38.2%, 50%, and 61.8% of the move. These levels frequently coincide with support or resistance. For example, in an uptrend, a pullback to 50% or 61.8% may find buyers. Fib works best when it aligns with a visible horizontal S/R level.\n\nTo draw a Fib retracement: Identify the swing low and swing high of the move. The tool plots 0% (start), 23.6%, 38.2%, 50%, 61.8%, and 100% (end). Price often bounces at these levels—especially 50% and 61.8%, which are the 'deep' retracements.",
      },
      {
        type: "text",
        heading: "When Fib Works Best",
        content:
          "Fib works best in trending markets with clear swings. In a choppy range, Fib levels are meaningless—there's no clean move to measure. Also, Fib is strongest when it aligns with horizontal S/R. A 50% retracement that lands exactly on a prior support level is a high-probability zone. Fib alone is weak; Fib + horizontal S/R + volume = strong. Don't rely on Fib in isolation.",
      },
      {
        type: "analogy",
        heading: "The Ruler Analogy",
        content:
          "Think of Fib like a ruler that divides a move into standard segments. After a 100-point rally, Fib says 'check 38.2 points down, 50 points down, 61.8 points down.' It's a structured way to find potential support. The levels aren't magic—they're widely used, so traders cluster orders there. Same psychology as round numbers: collective attention creates self-fulfilling levels.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Beginners often draw Fib on every move and expect price to bounce at 61.8% every time. It doesn't work that way. Fib is a guide, not a guarantee. Use it with horizontal S/R and confirmation. If price blows through 61.8% and keeps falling, respect it—the level failed.",
      },
      { type: "interactive", heading: "Think It Through", content: "Which Fib levels are commonly used for S/R?", component: "ConceptCheck", props: { question: "Which Fib levels are commonly used for S/R?", reveal: "38.2%, 50%, 61.8% retracements often align with S/R. Use with other confirmation—Fib + horizontal level = stronger." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Fib retracements (38.2%, 50%, 61.8%) often align with S/R. Use with horizontal levels and confirmation—not alone." },
    ]
  ),
  createLesson(
    "sr-volume-profile",
    "support-and-resistance",
    10,
    "Volume Profile: Price Levels with Most Trading",
    "sr-volume-profile",
    "12 min",
    ["What volume profile shows", "High-volume nodes", "Point of control"],
    [
      {
        type: "text",
        heading: "Volume at Price",
        content:
          "Volume profile shows how much volume traded at each price level. Levels where a lot of volume occurred (high-volume nodes) often act as support or resistance—they represent price areas where many participants have a stake. The point of control (POC) is the price with the most volume and often acts as a magnet or key level.\n\nUnlike standard volume bars (which show volume per time period), volume profile shows volume per price level. So you see: at $100, 500k shares traded; at $101, 300k; at $102, 800k. The price with the most volume is the POC—where the 'fair value' of the session or period was agreed upon. Price often returns to the POC.",
      },
      {
        type: "text",
        heading: "High-Volume Nodes",
        content:
          "High-volume nodes (HVNs) are price levels with heavy trading. They often act as support or resistance—lots of participants have a stake there. Low-volume nodes (LVNs) are gaps in volume; price often moves quickly through them. In an uptrend, price may pull back to a high-volume node and bounce. In a downtrend, price may rally to a high-volume node and fail. Volume profile reveals where the 'value' is—and where price is likely to revisit.",
      },
      {
        type: "analogy",
        heading: "The Population Map Analogy",
        content:
          "Think of volume profile like a population map. High-volume nodes are cities—lots of people (trades) there. Low-volume nodes are empty countryside—few people, price passes through quickly. When price travels, it tends to gravitate toward the 'cities' (high-volume nodes). The POC is the biggest city—the center of gravity. Price often returns to it.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "Volume profile is most useful for intraday (session profile) and swing trading (composite profile over days/weeks). Use it with horizontal S/R—when a high-volume node aligns with a prior swing high/low, the level is stronger." },
      { type: "interactive", heading: "Think It Through", content: "What does volume profile show?", component: "ConceptCheck", props: { question: "What does volume profile show?", reveal: "Levels with the most trading. These often become S/R (high-volume nodes). The POC is the price with the most volume." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Volume profile highlights levels with the most trading; these often become S/R. Use HVNs and POC with horizontal levels for confluence." },
    ]
  ),
  createLesson(
    "sr-trading",
    "support-and-resistance",
    11,
    "Trading at Support and Resistance: Bounce or Break?",
    "sr-trading",
    "14 min",
    ["Bounce vs breakout", "How to plan", "Confirmation"],
    [
      {
        type: "text",
        heading: "Two Scenarios",
        content:
          "At support or resistance you have two main scenarios: (1) Price bounces—you can enter in the direction of the bounce with a stop beyond the level. (2) Price breaks—you can trade the breakout with a stop on the other side of the level. Never assume one or the other; wait for confirmation (e.g. a strong close beyond the level for a break, or a reversal candle for a bounce) and always use a stop.\n\nThis is the key decision at every S/R level: bounce or break? You can't know in advance. So plan for both. If it bounces, enter on the reversal candle with a stop below support (or above resistance). If it breaks, enter on the breakout candle with a stop on the other side of the level. One scenario plays out—you're ready for either.",
      },
      {
        type: "text",
        heading: "Confirmation",
        content:
          "For a bounce: wait for a reversal candle (hammer, engulfing, etc.) or a close back inside the range. Don't buy the first touch—buy when price shows it's rejecting the level. For a break: wait for a close beyond the level. Wicks through don't count—price can spike and reverse. A strong close beyond the level confirms the break. Volume helps: high volume on a break or bounce increases conviction.",
      },
      {
        type: "analogy",
        heading: "The Door Analogy",
        content:
          "Think of S/R like a door. You approach it—will it open (break) or will you bounce off (rejection)? You don't push blindly. You wait for the door to either swing open (clear break) or for someone to block you (rejection candle). Entering before confirmation is like assuming the door will open and walking into it. Wait for the door to move—then act.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Entering before confirmation leads to fake-outs. A break that fails and reverses is common. Wait for the candle to close beyond the level or for a clear rejection candle. Many beginners enter on the first touch or the first wick through—and get stopped out when price reverses. Patience pays.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "Use limit orders at S/R. Place a buy order just above support or a sell order just below resistance. If price reaches it and bounces, you get filled. If it breaks, your order doesn't trigger—you avoid a bad entry." },
      { type: "interactive", heading: "Think It Through", content: "What should you plan for at S/R?", component: "ConceptCheck", props: { question: "What should you plan for at S/R?", reveal: "Both bounce and break. Wait for confirmation and use a stop. Don't assume one outcome. Patience beats guessing." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "At S/R, plan for both bounce and break. Wait for confirmation (close beyond or rejection candle) and always use a stop." },
    ]
  ),
  createLesson(
    "sr-summary",
    "support-and-resistance",
    12,
    "Support and Resistance: Summary",
    "sr-summary",
    "10 min",
    ["Recap", "Putting it together", "The S/R framework"],
    [
      {
        type: "text",
        heading: "Recap",
        content:
          "Support = floor (buying). Resistance = ceiling (selling). Levels work due to psychology and memory—collective attention creates order flow. Identify clear horizontal levels with multiple touches. Broken support becomes resistance and vice versa (role reversal). Use dynamic S/R (MAs), round numbers, and Fib when they align. Volume profile reveals high-volume nodes. At S/R, wait for bounce or break confirmation and always use a stop.\n\nS/R is the foundation of technical analysis. Every other concept—trendlines, patterns, breakouts—builds on it. Master S/R first.",
      },
      {
        type: "text",
        heading: "Putting It Together",
        content:
          "Your S/R workflow: (1) Identify the clearest horizontal levels on your timeframe. (2) Add confluence—MAs, round numbers, Fib, volume profile. (3) Plan for both bounce and break at each level. (4) Wait for confirmation before entering. (5) Use stops beyond the level. Draw cleanly. Trade patiently. Manage risk. That's the framework.",
      },
      { type: "interactive", heading: "Think It Through", content: "What are the keys to using S/R?", component: "ConceptCheck", props: { question: "What are the keys to using S/R?", reveal: "Draw cleanly, trade with confirmation, and manage risk. S/R is foundational. Use confluence—horizontal + MA + Fib + volume." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "S/R is foundational. Draw it cleanly, trade with confirmation, and manage risk. Confluence beats single levels." },
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
    "10 min",
    ["Define downtrend", "Sellers in control", "Downtrend line"],
    [
      {
        type: "text",
        heading: "Downtrend",
        content:
          "In a downtrend, price makes a series of lower highs and lower lows. Each rally fails to make a new high, and each drop makes a new low. Sellers are in control. A downtrend line is drawn along the highs—price often respects it as resistance on bounces.\n\nThink of it like descending stairs. Each step down is lower than the last. The highs (tops of the stairs) are getting lower. The lows (bottom of each step) are also getting lower. Sellers are winning—they're pushing price down with each cycle. A downtrend line connects the swing highs. Price often bounces off that line on rallies, then falls again.",
      },
      {
        type: "analogy",
        heading: "The Downhill Stairs Analogy",
        content:
          "Imagine walking down stairs. Each step is lower than the last. The handrail runs along the top of each step—that's your downtrend line. On bounces, price touches the handrail (the downtrend line) and then falls again. Sellers keep pushing. The downtrend line is resistance—price respects it until it breaks.",
      },
      { type: "interactive", heading: "Think It Through", content: "How do you define a downtrend?", component: "ConceptCheck", props: { question: "How do you define a downtrend?", reveal: "Lower highs and lower lows. Draw the trendline along the highs. Sellers are in control." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Downtrend = lower highs, lower lows. Draw the trendline along the highs. Price often respects it as resistance." },
    ]
  ),
  createLesson(
    "tl-sideways",
    "trendlines-and-trends",
    3,
    "Sideways and Ranging Markets",
    "tl-sideways",
    "10 min",
    ["No clear trend", "Range-bound price", "Mean reversion"],
    [
      {
        type: "text",
        heading: "When There's No Trend",
        content:
          "Price doesn't always trend. In a range, price oscillates between a support and resistance zone without making consistent higher highs or lower lows. Trend-following strategies often fail in ranges; mean reversion (buying support, selling resistance) can work. Identify the range and don't force a trend.\n\nRanges happen when buyers and sellers are balanced. No one has control. Price bounces between support and resistance—sometimes for weeks or months. The key is to recognize when you're in a range and adjust your strategy. Don't keep looking for a trend that isn't there.",
      },
      {
        type: "text",
        heading: "Trading the Range",
        content:
          "In a range, you can: (1) Buy near support, sell near resistance—mean reversion. (2) Wait for a breakout—don't trade until price breaks the range. (3) Stay out—ranges are choppy; many traders get whipsawed. Trend-following indicators (MAs, trendlines) often fail in ranges—they'll give false signals. Use horizontal S/R instead.",
      },
      {
        type: "analogy",
        heading: "The Ping-Pong Table Analogy",
        content:
          "Think of a range like a ping-pong table. The ball (price) bounces between the two paddles (support and resistance). Neither player (buyers or sellers) dominates. The ball doesn't go higher or lower over time—it oscillates. You can bet on the ball bouncing off one side (mean reversion) or wait for someone to smash the ball off the table (breakout).",
      },
      { type: "warning", heading: "Common Mistake", content: "Don't force trendlines on a range. If price keeps slicing through your trendline, you're in a range. Draw horizontal S/R instead and trade the bounds—or wait for a breakout." },
      { type: "interactive", heading: "Think It Through", content: "What can you do in a ranging market?", component: "ConceptCheck", props: { question: "What can you do in a ranging market?", reveal: "Trade the range (buy support, sell resistance), wait for a breakout, or stay out. Trend-following often fails in ranges." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Ranging markets have no clear trend. Trade the range (mean reversion) or wait for a breakout. Don't force trendlines." },
    ]
  ),
  createLesson(
    "tl-drawing",
    "trendlines-and-trends",
    4,
    "Drawing Trendlines: Connect at Least Two Points",
    "tl-drawing",
    "12 min",
    ["How to draw", "Uptrend and downtrend lines", "Swing points"],
    [
      {
        type: "text",
        heading: "How to Draw a Trendline",
        content:
          "An uptrend line connects at least two significant lows; the line slopes up. A downtrend line connects at least two significant highs; the line slopes down. Use touches that are clear swing points—not every tiny wick. The more touches, the more valid the line. Don't force a line through price; if it doesn't fit, the trend may be weak or over.\n\nSwing points are the pivots—the clear highs and lows. A swing low is a trough where price turned up. A swing high is a peak where price turned down. Connect the swing lows for an uptrend line; connect the swing highs for a downtrend line. Don't use every wick—only the clearest pivots.",
      },
      {
        type: "text",
        heading: "Uptrend and Downtrend Lines",
        content:
          "Uptrend line: connects swing lows. Price should respect it as support on pullbacks. Downtrend line: connects swing highs. Price should respect it as resistance on bounces. Two points define the line; a third touch validates it. If price breaks through on the third touch, the trend may be weakening.",
      },
      {
        type: "analogy",
        heading: "The Ruler Analogy",
        content:
          "Think of a trendline like a ruler under or over price. For an uptrend, you're placing the ruler under the lows—price bounces off it. For a downtrend, you're placing the ruler over the highs—price fails at it. The ruler should touch at least two clear points. If the ruler doesn't fit—if price keeps slicing through—the ruler (trendline) isn't valid. Don't bend the ruler to fit.",
      },
      { type: "warning", heading: "Don't Force the Line", content: "If you're constantly adjusting your trendline to fit new price action, the line isn't valid. A valid trendline is obvious—it connects clear swing points without slicing through candles. If it doesn't fit, the trend may be weak or the market may be ranging." },
      { type: "pro-tip", heading: "Pro Tip", content: "Use log scale for long-term trendlines—linear scale can distort steep trends over time. For intraday, linear is fine. Also, extend the line into the future—it becomes a moving support/resistance level." },
      { type: "interactive", heading: "Think It Through", content: "How many points do you need to draw a trendline?", component: "ConceptCheck", props: { question: "How many points do you need to draw a trendline?", reveal: "At least two swing lows (uptrend) or swing highs (downtrend). More touches = stronger line. Third touch validates." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Connect at least two swing lows (uptrend) or swing highs (downtrend). More touches = stronger line. Don't force it." },
    ]
  ),
  createLesson(
    "tl-validation",
    "trendlines-and-trends",
    5,
    "Trendline Validation: The Third Touch",
    "tl-validation",
    "10 min",
    ["Third touch confirms", "When to trust the line", "Provisional vs validated"],
    [
      {
        type: "text",
        heading: "Third Touch Confirms",
        content:
          "A trendline drawn from two points is provisional. When price comes back and touches the line a third time (or more) and holds, the trendline is validated. If price slices through on the third touch, the trend may be weakening or over. Use the third touch to confirm before relying on the line for entries.\n\nTwo points define a line—but any two points can define a line. The third touch is the test. Does price respect the line? If yes, it's validated. If no, the line was wrong or the trend has changed. Don't trade off a two-point trendline. Wait for the third touch.",
      },
      {
        type: "analogy",
        heading: "The Bridge Stress-Test Analogy",
        content:
          "Think of a trendline like a bridge. Two supports (two points) hold it up—but you don't know if it will hold weight until someone crosses it. The third touch is the first person crossing the bridge. If they make it (price holds the line), the bridge is validated. If the bridge collapses (price breaks through), it wasn't strong enough. The third touch is the stress test.",
      },
      { type: "interactive", heading: "Think It Through", content: "What does a third touch on a trendline do?", component: "ConceptCheck", props: { question: "What does a third touch on a trendline do?", reveal: "If it holds, it validates the trendline. A break on the third touch suggests weakness. Wait for the third touch before trading." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "A third touch that holds validates the trendline. A break on the third touch suggests weakness. Don't trade off two points alone." },
    ]
  ),
  createLesson(
    "tl-breaks",
    "trendlines-and-trends",
    6,
    "Trendline Breaks: Potential Reversals",
    "tl-breaks",
    "12 min",
    ["What a break can mean", "False breaks", "Confirmation"],
    [
      {
        type: "text",
        heading: "When Price Breaks the Trendline",
        content:
          "A clear break of a validated trendline (especially on a close) can signal a potential trend change or pause. In an uptrend, a break below the trendline might lead to a pullback or reversal. Don't reverse your position on the first tick—wait for confirmation (e.g. close below, follow-through). False breaks are common; price sometimes wicks through and then resumes the trend.\n\nA break means the structure has changed. The trendline was support (uptrend) or resistance (downtrend)—now it's broken. That doesn't guarantee a full reversal; it might just be a pullback or consolidation. But it signals that the trend is at least pausing.",
      },
      {
        type: "text",
        heading: "False Breaks",
        content:
          "Price often wicks through a trendline and then snaps back. A long lower wick that crosses the uptrend line but closes above it is a false break—buyers defended the level. Wait for a close beyond the line. And even a close below doesn't guarantee a reversal—it could be a pullback that finds new support. Look for follow-through: does price continue in the break direction, or does it reclaim the line?",
      },
      {
        type: "analogy",
        heading: "The Fence Analogy",
        content:
          "Think of a trendline like a fence. A break is like someone jumping the fence. But sometimes they jump, land on the other side, and immediately jump back (false break). Sometimes they jump and keep running (real break). Don't assume the break is real until they're clearly on the other side (close beyond, follow-through).",
      },
      {
        type: "warning",
        heading: "Critical Warning",
        content:
          "Don't reverse your position on the first wick through. False breaks are common—especially on short timeframes. Wait for a close beyond the trendline. And even then, a trendline break doesn't always mean full reversal. It might be a pullback, a consolidation, or a false alarm. Use other confirmation: S/R, volume, candle patterns.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "After a trendline break, the broken line often flips roles—uptrend line becomes resistance, downtrend line becomes support. Same as S/R role reversal. Use the broken trendline as a new level." },
      { type: "interactive", heading: "Think It Through", content: "Should you act immediately on a trendline break?", component: "ConceptCheck", props: { question: "Should you act immediately on a trendline break?", reveal: "Wait for confirmation; false breaks happen. Need close beyond, not wick. Trendline breaks can signal change but need confirmation." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Trendline breaks can signal change. Wait for close beyond the line; be aware of false breaks. Use confirmation." },
    ]
  ),
  createLesson(
    "tl-channels",
    "trendlines-and-trends",
    7,
    "Channels: Parallel Trendlines",
    "tl-channels",
    "12 min",
    ["Rising and falling channels", "Trading the channel", "Channel breaks"],
    [
      {
        type: "text",
        heading: "Drawing a Channel",
        content:
          "A channel is formed by two parallel trendlines—one along the lows, one along the highs. In an uptrend channel, price tends to bounce between the lower and upper line. You can buy near the lower line and take profit near the upper line, with a stop below the channel. Same idea in reverse for a downtrend channel.\n\nDraw the first trendline along the swing lows (uptrend) or swing highs (downtrend). Then draw a parallel line along the opposite extreme. If price respects both lines, you have a channel. Channels are more reliable when both lines have multiple touches.",
      },
      {
        type: "text",
        heading: "Trading the Channel",
        content:
          "Inside the channel: buy near the lower line, sell near the upper line. Stop below the lower line (uptrend) or above the upper line (downtrend). Target the opposite line. Risk-reward is clear. On breakouts: if price breaks above the upper line (uptrend), the trend may be accelerating. If it breaks below the lower line, the trend may be weakening. Plan for both bounces and breaks.",
      },
      {
        type: "analogy",
        heading: "The Corridor Analogy",
        content:
          "Think of a channel like a corridor. Price walks between two walls—the floor (lower trendline) and ceiling (upper trendline). In an uptrend, the corridor slopes up. You buy when price touches the floor, sell when it touches the ceiling. If price breaks through the ceiling, it might accelerate. If it breaks through the floor, the corridor may be collapsing. Two walls contain price until they don't.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "Channels often contain measured moves. If price bounces from the lower line, the target is often the upper line. If it breaks above the channel, the target is often the channel height added to the break point." },
      { type: "interactive", heading: "Think It Through", content: "How do you trade a channel?", component: "ConceptCheck", props: { question: "How do you trade a channel?", reveal: "Trade bounces within the channel (buy support, sell resistance) or breakouts. Two parallel lines contain price. Clear risk-reward." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Channels contain price between two parallel lines. Trade bounces within the channel or breakouts. Clear stops and targets." },
    ]
  ),
  createLesson(
    "tl-strength",
    "trendlines-and-trends",
    8,
    "Trend Strength: Steepness and Consistency",
    "tl-strength",
    "10 min",
    ["Steep vs gentle", "Sustained trends", "Exhaustion"],
    [
      {
        type: "text",
        heading: "What Strong Trends Look Like",
        content:
          "A steep trendline (price rising or falling quickly) often doesn't last as long—it can be exhausted. A more gentle, consistent slope often indicates a healthier, more sustainable trend. Also look at consistency: does price keep making higher lows (uptrend) or lower highs (downtrend) without big violations? That consistency suggests strength.\n\nSteep trends (price rising or falling at 45° or more) often burn out. They're driven by momentum—and momentum fades. Gentler trends (shallower slope) have room to breathe. They're more sustainable. Think of steep vs gentle like a sprint vs a marathon. Sprinters tire quickly; marathoners pace themselves.",
      },
      {
        type: "analogy",
        heading: "The Mountain Climb Analogy",
        content:
          "Think of trends like climbing a mountain. A steep climb (steep trendline) exhausts you quickly—you might collapse before reaching the top. A gentler slope (gentle trendline) is sustainable—you can keep going for miles. Steep trends look exciting but often reverse suddenly. Gentle trends look boring but often last longer.",
      },
      { type: "warning", heading: "Be Careful in Steep Trends", content: "Steep trends are tempting—big moves, fast profits. But they're also high-risk. A steep uptrend can reverse into a steep downtrend overnight. If you trade steep trends, use tighter stops and take profits quicker. Don't assume they'll last." },
      { type: "interactive", heading: "Think It Through", content: "Do steep trends or gentler trends tend to last longer?", component: "ConceptCheck", props: { question: "Do steep trends or gentler trends tend to last longer?", reveal: "Gentler, consistent trends often last longer. Steep trends can burn out quickly. Consistency matters." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Gentler, consistent trends often last longer. Steep trends can burn out quickly. Consistency matters more than speed." },
    ]
  ),
  createLesson(
    "tl-friend",
    "trendlines-and-trends",
    9,
    "'Trend Is Your Friend': Trade With the Trend",
    "tl-friend",
    "12 min",
    ["Why trading with trend helps", "Pullbacks in trend", "Probability"],
    [
      {
        type: "text",
        heading: "Trade With the Trend",
        content:
          "The saying 'trend is your friend' means that taking trades in the direction of the prevailing trend has a higher probability of success than fighting it. In an uptrend, look for buy opportunities on pullbacks (to the trendline, MA, or support). In a downtrend, look for sell opportunities on bounces. You don't have to catch the exact bottom or top—catching a portion of the trend is enough.\n\nWhy does it work? Trends tend to persist. An uptrend that's been in place for weeks has momentum. Pullbacks in that trend are often buying opportunities—you're buying the dip in a rising market. Fighting the trend (shorting in an uptrend) means you're betting against momentum. That works sometimes—but the odds are against you.",
      },
      {
        type: "text",
        heading: "Pullbacks in Trend",
        content:
          "The best entries in a trend are often on pullbacks. In an uptrend, wait for price to pull back to the trendline, MA, or horizontal support. Then look for a reversal candle (hammer, engulfing) and enter with a stop below the level. In a downtrend, wait for price to bounce to the trendline, MA, or resistance. Then look for a rejection candle and enter with a stop above the level. You're not chasing—you're waiting for the dip.",
      },
      {
        type: "analogy",
        heading: "The River Analogy",
        content:
          "Think of a trend like a river. Swimming with the current (trading with the trend) is easier—the current helps you. Swimming against the current (counter-trend trading) is exhausting—you're fighting the flow. Trend-following is swimming with the river. You don't need to catch the fastest part—just ride the flow. Counter-trend is swimming upstream. Possible, but harder.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "Don't chase. Wait for pullbacks. The trend will give you another chance. Chasing at the top of an uptrend or bottom of a downtrend leads to bad entries and stopped-out trades." },
      { type: "interactive", heading: "Think It Through", content: "What does 'trend is your friend' mean?", component: "ConceptCheck", props: { question: "What does 'trend is your friend' mean?", reveal: "Align trades with the trend. Buy pullbacks in uptrends, sell bounces in downtrends. Don't fight the flow." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Align your trades with the trend. Buy pullbacks in uptrends, sell bounces in downtrends. Don't chase—wait for the dip." },
    ]
  ),
  createLesson(
    "tl-counter",
    "trendlines-and-trends",
    10,
    "Counter-Trend Trading: Higher Risk, Higher Reward",
    "tl-counter",
    "12 min",
    ["When counter-trend makes sense", "Risks", "Clear levels"],
    [
      {
        type: "text",
        heading: "Trading Against the Trend",
        content:
          "Counter-trend trading means taking trades against the prevailing trend (e.g. selling in an uptrend at resistance). It can offer good risk-reward if you catch a reversal, but the probability of success is often lower—trends can extend further than you expect. If you counter-trend trade, use tight stops and only at clear levels (strong S/R, exhaustion signals). Many professionals focus on trend-following and use counter-trend only in specific setups.\n\nCounter-trend works best at clear exhaustion points: strong resistance after a long rally, strong support after a long drop. Reversal candles (shooting star, engulfing), divergences, and volume spikes can help confirm. But even with confirmation, trends can extend. Use tight stops.",
      },
      {
        type: "text",
        heading: "When Counter-Trend Makes Sense",
        content:
          "Counter-trend makes sense when: (1) Price reaches a major S/R level (prior high/low, round number). (2) You see exhaustion signals (long wicks, doji, volume spike). (3) Risk-reward is favorable—your stop is tight, your target is large. (4) You're willing to accept lower win rate for higher payoff. Counter-trend is a specialty—not a default. When learning, stick to trend-following.",
      },
      {
        type: "analogy",
        heading: "The Surfing Analogy",
        content:
          "Think of trend-following like surfing a wave—you ride with the wave. Counter-trend is like swimming against the wave to catch the next one forming. Possible? Yes. Risky? Very. You might get smashed. Counter-trend traders are trying to catch the turn before everyone else. Sometimes it works; often it doesn't. If you counter-trend, use a life jacket (tight stop).",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Beginners often counter-trend trade without a clear level or stop. That leads to catching falling knives or selling into strength. They see a red candle after a rally and short—then the rally resumes and they get run over. Counter-trend requires clear levels (S/R, exhaustion), confirmation (reversal candle), and tight stops. Don't short an uptrend just because price pulled back.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "If you must counter-trend, wait for a clear rejection candle at resistance (shooting star, bearish engulfing) with volume. And always use a stop above the level. One failed counter-trend trade can wipe out several wins." },
      { type: "interactive", heading: "Think It Through", content: "Is counter-trend trading riskier than trend-following?", component: "ConceptCheck", props: { question: "Is counter-trend trading riskier than trend-following?", reveal: "Yes. Counter-trend is possible but riskier. Use clear levels and tight risk; prefer trend-following when learning." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Counter-trend is possible but riskier. Use clear levels and tight risk; prefer trend-following when learning." },
    ]
  ),
  createLesson(
    "tl-summary",
    "trendlines-and-trends",
    11,
    "Trendlines and Trends: Summary",
    "tl-summary",
    "10 min",
    ["Recap", "Putting it together", "The trend framework"],
    [
      {
        type: "text",
        heading: "Recap",
        content:
          "Uptrend = higher highs, higher lows. Downtrend = lower highs, lower lows. Draw trendlines along swing lows (uptrend) or swing highs (downtrend); validate with a third touch. Breaks can signal change—confirm before acting (close beyond, follow-through). Channels give you parallel boundaries. Gentler trends often last longer than steep ones. Trade with the trend when you can; counter-trend only with clear levels and strict risk.\n\nTrends and trendlines are foundational. They help you identify direction, find entries (pullbacks to trendline/MA), and manage risk (stops below/above the line). Master them before adding complexity.",
      },
      {
        type: "text",
        heading: "Putting It Together",
        content:
          "Your trend workflow: (1) Identify the trend—higher highs/higher lows or lower highs/lower lows. (2) Draw the trendline along swing lows (uptrend) or swing highs (downtrend). (3) Wait for a third touch to validate. (4) Trade pullbacks to the trendline in the direction of the trend. (5) On breaks, wait for confirmation before reversing. Draw cleanly. Trade with the trend. Manage risk.",
      },
      { type: "interactive", heading: "Think It Through", content: "What do trends and trendlines help you do?", component: "ConceptCheck", props: { question: "What do trends and trendlines help you do?", reveal: "Stay on the right side of the market. Draw cleanly, confirm, and manage risk. Trade pullbacks, not breakouts alone." } },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Trends and trendlines help you stay on the right side of the market. Draw cleanly, confirm, and manage risk." },
    ],
    true
  ),
];
