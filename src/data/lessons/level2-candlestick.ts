import type { Lesson } from "../../types";

export const candlestickLessons: Lesson[] = [
  {
    id: "candlestick-anatomy",
    title: "What Are Candlesticks and Why Do We Use Them?",
    slug: "candlestick-anatomy",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 1,
    duration: "15 min",
    objectives: [
      "Understand the history of candlestick charts",
      "Learn the anatomy: body, wicks, OHLC",
      "See how one candle shows open, high, low, close",
      "Read the story each candle tells",
    ],
    prerequisites: [],
    content: [
      {
        type: "text",
        heading: "The Story in Every Candle",
        content:
          "A candlestick is like a mini-story of a battle between buyers and sellers during a specific time period. Each candle tells you four critical pieces of information: where the price opened, the highest point it reached, the lowest point it fell to, and where it ultimately closed. This OHLC (Open, High, Low, Close) data reveals not just where price moved, but who won the battle—buyers or sellers.\n\nThink of each candlestick as a snapshot. On a 1-hour chart, each candle represents one hour of trading. On a daily chart, each candle shows one full day. The timeframe determines what story you're reading—short-term battles or long-term wars. Candlestick charts originated in Japan in the 18th century. Rice traders used them. Steve Nison brought them to the West in the 1990s, and they've dominated trading ever since.",
      },
      {
        type: "analogy",
        heading: "The Auction Analogy",
        content:
          "Imagine you're at an auction for a rare trading card. The opening bid (Open price) starts at $50. Someone gets excited and bids $75 (High price). Then people get nervous and it drops to $40 (Low price). Finally, it sells for $60 (Close price). That entire auction is captured in one candlestick—you can see the excitement, the fear, and the final agreed-upon value. That's exactly what happens in the market with every candle. Buyers and sellers battle. The candle records who won and how the fight played out.",
      },
      {
        type: "text",
        heading: "Reading the Color Code",
        content:
          "Green (or white) candles mean bulls won—price closed higher than it opened. Buyers were stronger. Red (or black) candles mean bears won—price closed lower than it opened. Sellers dominated. The color instantly tells you the outcome without reading numbers.\n\nBut here's what beginners miss: A green candle doesn't automatically mean 'good' and red doesn't mean 'bad.' Context matters. A red candle at resistance might be excellent if you're waiting to short. A green candle at the top of a long rally might be a warning sign. The body shows who won that period. The wicks show the fighting that happened along the way.",
      },
      {
        type: "text",
        heading: "The Body and the Wicks",
        content:
          "The thick part (body) shows the range between open and close—this is the 'agreed upon' price movement. The thin lines (wicks or shadows) show the rejected prices—where price went but couldn't hold. Long upper wicks mean sellers pushed price down from highs. Long lower wicks mean buyers pushed price up from lows.\n\nProfessional traders pay enormous attention to wicks. A hammer candle (long lower wick, small body at top) shows sellers tried to push price down but buyers fought back strongly—often a reversal signal. A shooting star (long upper wick) shows buyers tried to push price up but sellers rejected it—also a potential reversal. The wicks reveal the battle; the body reveals the outcome.",
      },
      {
        type: "warning",
        heading: "Critical Warning",
        content:
          "Never trade based on a single candle in isolation. A hammer at support in an uptrend is meaningful. The same hammer in the middle of nowhere with no context is just noise. Candlesticks are a language, and you need to read sentences, not individual letters. Many beginners see a pattern book showing a hammer and think 'I'll buy every hammer!' Then they lose money because they ignored the surrounding story—the trend, the support/resistance, the volume.",
      },
      {
        type: "text",
        heading: "What Size Tells You",
        content:
          "The size of the candle body matters. Long bodies (large distance from open to close) show strong conviction—one side clearly dominated. Short bodies (small distance) show indecision—neither side won convincingly. A series of small-bodied candles often precedes a big move—the calm before the storm.\n\nCandles with almost no body—where open and close are nearly equal—are called Doji candles. These show perfect indecision and often signal trend changes, especially after strong moves. Pros watch for Dojis at key levels.",
      },
      {
        type: "text",
        heading: "How Professionals Use Candles",
        content:
          "Professional traders use candlesticks as their primary chart type because they pack more information than line charts. A line chart only shows closing prices. A bar chart shows OHLC but isn't as visually intuitive. Candlesticks give you OHLC data in a format your brain can process instantly.\n\nPros look for patterns and confluence. A bullish candle at support + high volume + RSI oversold = high-probability trade setup. One candle alone is just data. Candles in context are actionable intelligence.",
      },
      {
        type: "interactive",
        heading: "Try It: Build Your Own Candle",
        content:
          "Use the candlestick builder below. Drag the sliders to change Open, High, Low, and Close. Watch how the candle shape changes. Try creating a Hammer (long lower wick, small body at top) or a Doji (open and close nearly equal).",
        component: "CandlestickBuilder",
      },
      {
        type: "preview",
        heading: "Single vs Multi-Candle Patterns (Preview)",
        content:
          "While individual candles tell you about one time period, the real power comes from reading multiple candles together. Patterns like engulfing, morning star, and three white soldiers involve 2–3 candles and are significantly more reliable than single candles. We'll dive deep into these patterns in the next lessons, but understanding individual candles first is essential—you can't read sentences without knowing the alphabet.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Every candlestick is a complete story of a battle between buyers and sellers. The body shows who won, the wicks show the rejected prices, and the size shows the strength of conviction. Learn to read individual candles fluently before combining them into patterns—this is your trading alphabet.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "single-candles",
    title: "Reading Individual Candles",
    slug: "single-candles",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 2,
    duration: "15 min",
    objectives: [
      "Identify bullish vs bearish candles",
      "Understand body size (strength) and wick length",
      "Recognize Doji, Hammer, Shooting Star, Marubozu",
    ],
    prerequisites: ["candlestick-anatomy"],
    content: [
      {
        type: "text",
        heading: "Bullish vs Bearish",
        content:
          "A BULLISH (green/white) candle: close > open. Buyers were in control—price went up during the period. A BEARISH (red/black) candle: close < open. Sellers were in control—price went down. The color tells you who won that time period at a glance.\n\nBut context matters. A green candle at resistance might mean sellers are about to step in—price closed up but hit a ceiling. A red candle at support might mean buyers are defending—price dipped but recovered. The color tells you who won that period; the location tells you what might happen next.",
      },
      {
        type: "text",
        heading: "Body Size = Strength",
        content:
          "A long body means strong conviction. Buyers or sellers dominated. A small body means indecision—the open and close were close together. Big moves create big bodies. Choppy, sideways action creates small bodies.\n\nProfessional traders pay attention to body size relative to recent candles. A long green body after a series of small candles signals a breakout of indecision—buyers took control. A long red body after a rally signals selling pressure—sellers overwhelmed buyers. Body size = conviction.",
      },
      {
        type: "text",
        heading: "Wicks Show Rejection",
        content:
          "A long upper wick: price went up but was rejected—sellers pushed it back down. A long lower wick: price went down but was rejected—buyers stepped in. Wicks at key levels often signal reversals. A long lower wick after a downtrend can mean buyers are defending.\n\nWicks are the 'rejection zones.' Long upper wick = sellers rejected higher prices. Long lower wick = buyers rejected lower prices. At support, a long lower wick (hammer) is a bullish signal—buyers fought back. At resistance, a long upper wick (shooting star) is a bearish signal—sellers fought back.",
      },
      {
        type: "analogy",
        heading: "The Tug-of-War Analogy",
        content:
          "Think of each candle as a round of tug-of-war. The body shows who won the round—green = buyers pulled the rope to their side; red = sellers did. The wicks show how far the losing side pulled before losing. A long lower wick on a green candle = sellers pulled price down during the round, but buyers won by the close. The wick is the 'almost'—where price went but couldn't hold.",
      },
      {
        type: "text",
        heading: "Key Single-Candle Patterns",
        content:
          "DOJI: open = close (or very close). Small or no body. Indecision. At a key level after a strong move, a doji can signal exhaustion—neither side won. HAMMER: long lower wick, small body at top. Bullish reversal signal—sellers pushed down, buyers recovered. At support or after a downtrend, a hammer often precedes a bounce. SHOOTING STAR: long upper wick, small body at bottom. Bearish reversal—buyers pushed up, sellers rejected. At resistance or after an uptrend, a shooting star often precedes a drop. MARUBOZU: no wicks, full body. Strong momentum in one direction. Opening and closing prices are at the extremes—no rejection.",
      },
      {
        type: "warning",
        heading: "Critical Warning",
        content:
          "Never trade a hammer or shooting star in isolation. A hammer at support in an uptrend = meaningful. A hammer in the middle of nowhere = noise. Always confirm with context: trend, support/resistance, volume. Single-candle patterns are clues—not guarantees.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "The hammer and shooting star have mirror patterns: the inverted hammer (long upper wick at bottom) and the hanging man (long lower wick at top). Same shape, different location. Context determines the interpretation. A hammer at support = bullish. A hanging man at resistance = bearish.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What does a long lower wick tell you?",
        component: "ConceptCheck",
        props: { question: "What does a long lower wick tell you?", reveal: "Buyers rejected lower prices—price dipped but was pushed back up by the close. At support or after a downtrend it can signal potential bullish reversal." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Body = who won (buyers/sellers) and how strongly. Wicks = where price was rejected. Doji = indecision. Hammer = potential bullish reversal. Shooting star = potential bearish reversal. Always confirm with context (trend, support/resistance).",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "candlestick-patterns",
    title: "Multi-Candle Patterns",
    slug: "candlestick-patterns",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 3,
    duration: "18 min",
    objectives: [
      "Learn engulfing, piercing line, morning star",
      "Understand pattern reliability and confirmation",
      "Know when patterns work best",
    ],
    prerequisites: ["single-candles"],
    content: [
      {
        type: "text",
        heading: "Two-Candle Patterns",
        content:
          "BULLISH ENGULFING: A red candle followed by a larger green candle whose body completely 'engulfs' the previous body. Buyers overwhelmed sellers. The green candle opens at or below the red close and closes above the red open—a complete reversal of the prior period. BEARISH ENGULFING: Opposite—green then red, with red engulfing the green body. Sellers overwhelmed buyers.\n\nPIERCING LINE: Red candle, then green opens lower but closes above the midpoint of the red body. Bullish reversal signal—weaker than engulfing but still meaningful. The green doesn't fully engulf; it 'pierces' into the red body. At support, both engulfing and piercing line can signal a bounce.",
      },
      {
        type: "text",
        heading: "Three-Candle Patterns",
        content:
          "MORNING STAR: Three candles. First: large red (downtrend). Second: small body (indecision—doji or small candle). Third: large green that closes well into the first candle's body. Bullish reversal. The small middle candle is the 'star'—the pause before the reversal. EVENING STAR: Opposite—large green, small body, large red. End of uptrend, bearish reversal.\n\nTHREE WHITE SOLDIERS: Three consecutive green candles with higher closes. Strong bullish momentum. Each candle opens within the previous body and closes higher. No long upper wicks—buyers in full control. THREE BLACK CROWS: Opposite—three consecutive red candles with lower closes. Strong bearish momentum.",
      },
      {
        type: "analogy",
        heading: "The Battle Analogy",
        content:
          "Think of multi-candle patterns like battles. Single-candle = one skirmish. Two-candle engulfing = one side overwhelmed the other in two rounds. Morning star = battle, pause (indecision), then the other side wins. Three white soldiers = three consecutive victories—momentum is clear. You're reading the scorecard of the fight between buyers and sellers over multiple periods.",
      },
      {
        type: "text",
        heading: "When Patterns Work Best",
        content:
          "Patterns work best at key levels: support, resistance, trendlines, moving averages. A bullish engulfing at support in an uptrend = high-probability bounce. The same pattern in the middle of a downtrend with no support = low probability. Add volume: high volume on the engulfing candle increases conviction. Volume confirms the shift in momentum.",
      },
      {
        type: "warning",
        heading: "Patterns Aren't Magic",
        content:
          "Candlestick patterns don't work in isolation. They're more reliable at support/resistance, in strong trends, or with volume confirmation. A bullish engulfing in the middle of a downtrend with no support nearby is weak. Always consider context. Many patterns fail—use stop losses. A pattern is a clue, not a guarantee.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "The second candle in an engulfing should have a larger body than the first. A tiny green candle that barely engulfs a tiny red candle is weak. Look for a decisive engulfing—the second candle should clearly overwhelm the first. Size matters.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "When is a bullish engulfing pattern stronger?",
        component: "ConceptCheck",
        props: { question: "When is a bullish engulfing pattern stronger?", reveal: "When it appears at support, in an uptrend (as a pullback), or with high volume. In the middle of a downtrend with no support, it's weak." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Multi-candle patterns show shifts in momentum. Engulfing = one side overwhelmed the other. Morning/Evening Star = reversal after indecision. Use patterns with trend, support/resistance, and volume. Never rely on patterns alone.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "timeframes",
    title: "Time Frames and What They Mean",
    slug: "timeframes",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 4,
    duration: "12 min",
    objectives: [
      "Understand 1m, 5m, 15m, 1h, 4h, daily, weekly",
      "See how the same asset looks on different timeframes",
      "Learn multiple timeframe analysis",
    ],
    prerequisites: ["candlestick-patterns"],
    content: [
      {
        type: "text",
        heading: "What is a Timeframe?",
        content:
          "Each candle represents a fixed period. A 1-minute candle = 1 minute of trading. A daily candle = one full trading day. A 5-minute chart shows 5-minute candles. Shorter timeframes = more detail, more noise. Longer timeframes = bigger picture, less noise.\n\nThe timeframe determines what story you're reading. On a 1m chart, each candle is a 1-minute battle. On a daily chart, each candle is a full day's battle. Same asset, same price history—different zoom level. Always know which timeframe you're on. It changes everything.",
      },
      {
        type: "text",
        heading: "Same Price, Different Story",
        content:
          "The same asset can look very different on different timeframes. On a 1-minute chart, you might see a sharp drop—a panic sell-off. On a daily chart, that same drop might be a tiny wick—barely visible. Day traders use 1m, 5m, 15m to see intraday setups. Swing traders use 1h, 4h, daily to capture multi-day moves. Position traders use daily, weekly for long-term trends.\n\nA hammer on a 5m chart might be noise. The same hammer pattern on a daily chart at support might be a major reversal signal. Context = timeframe.",
      },
      {
        type: "analogy",
        heading: "The Microscope Analogy",
        content:
          "Think of timeframes like microscope zoom. At 1m, you're zoomed in—you see every cell (every minute's battle). At daily, you're zoomed out—you see the organism (the full day's battle). The same specimen (price) looks completely different at different zoom levels. A 'big' move at 1m might be invisible at daily. Match your zoom to what you're trying to see.",
      },
      {
        type: "text",
        heading: "Multiple Timeframe Analysis",
        content:
          "Many traders use a top-down approach: Check the higher timeframe (e.g., daily) for the overall trend. Then drop to a lower timeframe (e.g., 4h or 1h) for entries. Trade in the direction of the higher timeframe. This aligns your trades with the bigger picture.\n\nExample: Daily shows uptrend + support at $100. Switch to 4h—wait for price to pull back to $100 and form a bullish engulfing. Enter with stop below $100. You're trading the daily trend with a 4h entry. Candlestick patterns on the lower timeframe give you precise entries; the higher timeframe gives you direction.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Don't mix timeframes randomly. A bullish engulfing on 5m doesn't override a bearish daily chart. If daily is downtrend, a 5m bullish engulfing might just be a bounce—short-lived. Use higher timeframe for direction; lower for timing. Don't use lower timeframe to override higher.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why match timeframe to trading style?",
        component: "ConceptCheck",
        props: { question: "Why match timeframe to trading style?", reveal: "Day traders need short timeframes (1m–15m) to see intraday setups. Swing traders use 1h–daily. Using the wrong timeframe means you either miss detail or see too much noise." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Timeframe = how much time each candle represents. Shorter = more detail, more noise. Longer = bigger picture. Use multiple timeframes: higher for trend, lower for entries. Match your timeframe to your trading style.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "market-psychology",
    title: "What Candles Tell You About Market Psychology",
    slug: "market-psychology",
    level: 2,
    moduleId: "candlestick-mastery",
    order: 5,
    duration: "12 min",
    objectives: [
      "Connect candle structure to buyer/seller behavior",
      "Understand supply and demand in candle form",
      "See how volume confirms candle signals",
    ],
    prerequisites: ["timeframes"],
    content: [
      {
        type: "text",
        heading: "Candles = Psychology in Action",
        content:
          "Every candle reflects the collective decisions of buyers and sellers. A long green body with high volume = strong buying conviction. A long upper wick after a rally = sellers stepped in, buyers couldn't hold the high. You're reading the 'votes' of the market in real-time.\n\nCandles don't just show price—they show behavior. Who won the period? How strongly? Where was price rejected? Each candle is a snapshot of fear and greed, conviction and indecision. When you read candles, you're reading the crowd's psychology.",
      },
      {
        type: "text",
        heading: "Supply and Demand",
        content:
          "At support, long lower wicks = demand (buyers) absorbing supply (sellers). Price drops, buyers step in, price recovers. At resistance, long upper wicks = supply overwhelming demand. Price rises, sellers step in, price falls. Candles make supply and demand visible.\n\nSupport is where demand meets supply and demand wins—buyers absorb selling. Resistance is where supply meets demand and supply wins—sellers absorb buying. Candles show you when that happens. A hammer at support = demand stepped in. A shooting star at resistance = supply stepped in. You're seeing supply and demand in candle form.",
      },
      {
        type: "analogy",
        heading: "The Voting Booth Analogy",
        content:
          "Think of each candle as a vote. The body shows who won the vote (buyers or sellers). The wicks show how close the vote was—did one side almost win? A long upper wick = sellers almost won (price went up but was rejected). A long lower wick = buyers almost won (price went down but was rejected). You're reading the election results of each period. Candles = the market's vote.",
      },
      {
        type: "text",
        heading: "Volume Confirmation",
        content:
          "A bullish engulfing with high volume is stronger than one with low volume. Volume shows conviction. Big moves on big volume = real—many participants agreed. Big moves on low volume = suspect—few participants, might reverse. Always consider volume with candle patterns.\n\nVolume answers: How many people participated? A hammer at support with high volume = lots of buyers stepped in. The same hammer with low volume = a few buyers, might not hold. Volume is the weight behind the candle. No volume = light candle. High volume = heavy candle. Heavy candles are harder to reverse.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Combine candles with volume profile. A bullish engulfing at a high-volume node (volume profile) is stronger than at a low-volume node. Confluence = candles + volume + S/R. The more confirmation, the higher the probability.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What do long bodies and long wicks tell you about psychology?",
        component: "ConceptCheck",
        props: { question: "What do long bodies and long wicks tell you about psychology?", reveal: "Long body = strong conviction (buyers or sellers dominated). Long wicks = rejection—price tried to go there but was pushed back. Together they show who's in control and where price was refused." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Candles are a window into market psychology. Long bodies = conviction. Long wicks = rejection. At key levels, candles show who's winning—buyers or sellers. Use volume to confirm. You're reading the story the market is telling.",
      },
    ],
    hasQuiz: true,
  },
];
