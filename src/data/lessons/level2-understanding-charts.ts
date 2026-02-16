import type { Lesson } from "../../types";

const MODULE_ID = "understanding-charts";

export const understandingChartsLessons: Lesson[] = [
  {
    id: "price-chart-intro",
    title: "What Is a Price Chart?",
    slug: "price-chart-intro",
    level: 2,
    moduleId: MODULE_ID,
    order: 1,
    duration: "12 min",
    objectives: [
      "Understand why we visualize price data",
      "See how charts tell the story of supply and demand",
      "Know what a price chart represents",
      "Connect charts to trading decisions",
    ],
    prerequisites: [],
    content: [
      {
        type: "text",
        heading: "Why We Visualize Data",
        content:
          "Imagine you're looking at a table of numbers: Apple stock closed at 172.50 on Monday, 171.20 on Tuesday, 173.80 on Wednesday, and so on for hundreds of days. Spotting a trend or a reversal in raw numbers is hard. Your brain struggles to see patterns in columns of digits. A price chart turns that same data into a picture. Your brain can instantly see whether price has been going up, down, or sideways, and where it might be turning.\n\nThat's why traders and investors rely on charts—they turn history into visual information we can act on. A chart answers at a glance: Is this asset trending up or down? Where did it stall before? Where might it stall again? You can't trade effectively without understanding what you're looking at. Charts are the primary tool.",
      },
      {
        type: "text",
        heading: "What a Price Chart Really Shows",
        content:
          "A price chart plots price (or another measure of value) over time. Every point on the chart is an answer to: 'At this moment in time, what was the price?' Over many points, you see the path price took. That path reflects the ongoing battle between buyers and sellers. When buyers are more aggressive, price tends to rise. When sellers are, it falls. So a chart is really a visualization of supply and demand over time.\n\nCharts don't predict the future. They show the past. But the past reveals patterns—support levels where buyers stepped in, resistance levels where sellers appeared, trends that persisted or reversed. Traders use those patterns to form hypotheses about what might happen next. The chart is your evidence.",
      },
      {
        type: "analogy",
        heading: "The GPS Route Analogy",
        content:
          "Think of a chart like a GPS route. Instead of streets, you have time (horizontal) and price (vertical). The line or candles show the route price took—where it's been. Just as you'd use a map to decide where to turn next, traders use charts to decide when to enter or exit a trade. You're not predicting the route; you're using the route so far to plan your next move. A chart is a map of price history.",
      },
      {
        type: "text",
        heading: "Charts vs Fundamentals",
        content:
          "Fundamental analysts study company financials, earnings, and economic data. Technical analysts (chart traders) study price and volume. Charts don't care why price moved—only that it did. A breakout above resistance might be driven by an earnings beat, a news release, or herd behavior. The chart shows the result. Many traders combine both: use fundamentals for bias (is this stock worth owning?) and charts for timing (when do I enter and exit?).",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Start with one asset and one timeframe. Learn to read that chart well before adding complexity. AAPL on a daily chart is a good place to begin—liquid, well-known, clear trends. Master reading one chart before you try to read ten.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why do traders prefer charts over tables of numbers?",
        component: "ConceptCheck",
        props: { question: "Why do traders prefer charts over tables of numbers?", reveal: "Charts let the brain see trends, reversals, and levels at a glance. A picture of price over time is faster to read than rows of numbers and makes supply/demand visible." },
      },
      {
        type: "preview",
        heading: "Chart Types (Preview)",
        content:
          "Charts come in several forms: line charts (close only), bar charts (OHLC), and candlestick charts (OHLC with a different visual). We'll cover each. Candlesticks are the most popular for trading because they pack the most information into an easy-to-scan format. But first, understand the axes—time and price—which every chart shares.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "A price chart visualizes price over time so we can quickly see trends, reversals, and key levels. It turns raw data into a picture of supply and demand.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "chart-axes",
    title: "The X and Y Axes: Time and Price",
    slug: "chart-axes",
    level: 2,
    moduleId: MODULE_ID,
    order: 2,
    duration: "10 min",
    objectives: [
      "Know what the horizontal axis (X) represents",
      "Know what the vertical axis (Y) represents",
      "Read scale and intervals correctly",
      "Avoid misreading chart scale",
    ],
    prerequisites: ["price-chart-intro"],
    content: [
      {
        type: "text",
        heading: "The Horizontal Axis: Time",
        content:
          "On almost every price chart, the horizontal axis (X-axis) is time. It runs from left (past) to right (present or most recent). Each tick might be one minute, one hour, one day, or one week—depending on the timeframe you're viewing. So 'further right' always means 'later in time.'\n\nThe timeframe determines how much history you see. A 1-minute chart might show a few hours. A daily chart might show years. The same asset, the same price history—just different zoom levels. Always know which timeframe you're looking at. It changes everything.",
      },
      {
        type: "text",
        heading: "The Vertical Axis: Price",
        content:
          "The vertical axis (Y-axis) is price. Lower on the chart means lower price; higher means higher price. Simple. The scale can be linear (equal spacing per dollar) or logarithmic (equal spacing per percentage move). For most day-to-day trading, linear is used—a $10 move looks the same whether the stock is at $50 or $500.\n\nLogarithmic scales compress large moves and expand small ones—useful when comparing assets that have moved 10% vs 1000% over time. Always check the scale when comparing charts. Two assets with different price ranges will look different even if their percentage moves are the same.",
      },
      {
        type: "analogy",
        heading: "The Map Zoom Analogy",
        content:
          "Think of a chart like Google Maps. The X-axis is like scrolling left to right through time. The Y-axis is like the elevation—price going up or down. When you zoom in (shorter timeframe), you see more detail but less context. When you zoom out (longer timeframe), you see the big picture but miss the nuances. A 'big' mountain on a street-level view might be a tiny bump on a country-level view. Same with price: a $5 move looks huge on a 1-minute chart and insignificant on a monthly chart.",
      },
      {
        type: "warning",
        heading: "Common Mistake: Misreading Scale",
        content:
          "Beginners often see a 'big' move on a 5-minute chart and think they've found a major reversal—then get run over because the daily trend is still strong. A $2 move on a $20 stock (10%) is significant. A $2 move on a $200 stock (1%) might be noise. Always check: what timeframe am I on? What's the percentage move? Don't confuse chart scale with trading significance.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "On a standard price chart, what does the X-axis show?",
        component: "ConceptCheck",
        props: { question: "On a standard price chart, what does the X-axis show?", reveal: "Time. The horizontal axis is almost always time—left is past, right is present. The Y-axis is price." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "X = time (left to right, past to present). Y = price (low to high, bottom to top). Always be aware of the timeframe and price scale.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "line-charts",
    title: "Line Charts",
    slug: "line-charts",
    level: 2,
    moduleId: MODULE_ID,
    order: 3,
    duration: "10 min",
    objectives: [
      "Understand how line charts are built",
      "Know when to use a line chart",
      "See the trade-off: simplicity vs detail",
    ],
    prerequisites: ["chart-axes"],
    content: [
      {
        type: "text",
        heading: "How Line Charts Work",
        content:
          "A line chart takes one price per period—usually the closing price—and connects those points with a line. So for each day (or hour, or minute), you get a single dot at the close, and the line links them. No open, high, or low—just the closing value over time. That makes it the simplest and cleanest chart type.\n\nThe closing price is used because it's considered the most important: it's the last agreed-upon value before the period ended. It reflects where buyers and sellers finally settled. Opening, high, and low are discarded. You get a smooth line that shows the path of closing prices.",
      },
      {
        type: "text",
        heading: "When to Use a Line Chart",
        content:
          "Line charts are great for seeing the overall trend without clutter. They're used in news, presentations, and investor reports. For long-term views—yearly performance, decade-long trends—a line chart keeps things clean. They hide intra-period volatility: you don't see how wild price was within each bar, only where it closed.\n\nUse a line chart when you care about the general direction and closing levels, not the full range of each period. Perfect for: 'Is this stock in an uptrend?' Not perfect for: 'Where should I place my stop loss?'",
      },
      {
        type: "analogy",
        heading: "The Summary Report Analogy",
        content:
          "A line chart is like a summary report—it gives you the headline, not the details. Imagine a daily newspaper that only reported the final score of a basketball game, not the quarter-by-quarter breakdown. You'd know who won, but you wouldn't know when the momentum shifted. Line charts are the same: they tell you where price ended each period, but not the battle that happened in between. Sometimes that's enough. Often, for trading, you need more.",
      },
      {
        type: "warning",
        heading: "Don't Trade Off Line Charts Alone",
        content:
          "Because line charts show only the close, you miss critical information. Did price spike up 5% and then collapse to close flat? The line chart shows a flat close—you'd never know about the spike. Did it gap down at the open and drift lower? The line hides the gap. For trading decisions that depend on range, support/resistance, or candlestick patterns, you need bar or candlestick charts. Line charts are for clarity of trend—not for detailed entry/exit analysis.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Many pros use a line chart for the big-picture trend, then switch to candlesticks for entry timing. Check the daily line chart: uptrend or downtrend? Then go to the 1-hour or 15-minute candlestick chart to find your entry. Best of both worlds.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "When is a line chart better than a candlestick chart?",
        component: "ConceptCheck",
        props: { question: "When is a line chart better than a candlestick chart?", reveal: "When you want a clean view of the overall trend without the noise of each period's range. Line charts are good for big-picture direction; use candlesticks when you need OHLC and pattern detail." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Line charts plot closing prices only and connect them with a line. Use them for clean trend views; switch to bar or candlestick when you need OHLC detail.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "bar-charts",
    title: "Bar Charts (OHLC)",
    slug: "bar-charts",
    level: 2,
    moduleId: MODULE_ID,
    order: 4,
    duration: "10 min",
    objectives: [
      "Understand OHLC: Open, High, Low, Close",
      "Read a single bar",
      "See how bars show range and direction",
    ],
    prerequisites: ["line-charts"],
    content: [
      {
        type: "text",
        heading: "What OHLC Means",
        content:
          "Each bar on a bar chart represents one period (e.g. one day). For that period you get four prices: Open (O)—where price started; High (H)—the highest price reached; Low (L)—the lowest; and Close (C)—where price ended. So one bar packs in the full range and the direction (open to close).\n\nOHLC is the foundation of price data. Every bar chart and candlestick chart uses it. Line charts throw away O, H, and L—they only keep C. Bar charts give you the full picture: how far price traveled, where it started, and where it ended. That extra information matters for trading.",
      },
      {
        type: "text",
        heading: "How to Read One Bar",
        content:
          "The vertical line runs from the low to the high—that's the full range. A tick to the left marks the open; a tick to the right marks the close. If the close is above the open, the bar is often colored green (or white) for up; if the close is below the open, red (or black) for down.\n\nSo in one bar you see: how far price traveled (high to low), where it started (open), and where it ended (close). A tall bar means high volatility—price moved a lot. A short bar means low volatility—price barely budged. The position of the ticks tells you who won: close above open = buyers; close below open = sellers.",
      },
      {
        type: "analogy",
        heading: "The Thermometer Analogy",
        content:
          "Think of a bar like a thermometer reading for the day. The bottom is the day's low (coldest point). The top is the day's high (hottest point). The left tick is where you started (morning temperature). The right tick is where you ended (evening temperature). One bar captures the full range of action—not just the final number. That's why bars (and candlesticks) are more useful than line charts for trading: they show the full story of each period.",
      },
      {
        type: "text",
        heading: "Why Bars Are Useful",
        content:
          "Bars give you more information than a line chart. You can see volatility (tall bar = big range), gaps (when the next bar's open is far from the previous close), and whether buyers or sellers won the period (close vs open). Many professional traders still use bar charts; others prefer candlesticks, which show the same OHLC data in a more visually intuitive form. Both are valid—it's personal preference. The data is identical.",
      },
      {
        type: "preview",
        heading: "Candlestick Charts (Preview)",
        content:
          "Candlestick charts use the exact same OHLC data as bar charts—just a different visual representation. Instead of a vertical line with ticks, candlesticks use a rectangular body (open to close) and thin wicks (high and low). Many traders find candlesticks easier to scan for patterns. We'll cover them in the next lesson. For now, master reading one bar—the logic transfers directly to candles.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What does OHLC stand for?",
        component: "ConceptCheck",
        props: { question: "What does OHLC stand for?", reveal: "Open, High, Low, Close—the four prices that define each bar or candle. They show where price started, how far it went up and down, and where it ended." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Bar charts show Open, High, Low, and Close for each period. The vertical line is the range; left tick = open, right tick = close. They add range and direction to the simple close-only line.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "candlestick-charts-intro",
    title: "Candlestick Charts",
    slug: "candlestick-charts-intro",
    level: 2,
    moduleId: MODULE_ID,
    order: 5,
    duration: "10 min",
    objectives: [
      "See why traders prefer candlesticks",
      "Understand body vs wicks",
      "Link candlesticks to the same OHLC data",
    ],
    prerequisites: ["bar-charts"],
    content: [
      {
        type: "text",
        heading: "Same Data, Different Picture",
        content:
          "Candlestick charts use the exact same OHLC data as bar charts. The difference is how they draw it. Instead of a vertical line with ticks, each period is shown as a 'candle': a rectangular body (open to close) with thin wicks (shadows) extending to the high and low. The result is easier to scan: you quickly see which periods were bullish (e.g. green body) or bearish (e.g. red body), and how much of the range was 'body' versus 'wick.'\n\nCandlesticks originated in Japan centuries ago. They've dominated Western trading since the 1990s. Most charting platforms default to candlesticks. They're the standard for a reason: they pack the most information into the most readable format.",
      },
      {
        type: "text",
        heading: "Body and Wicks",
        content:
          "The body is the thick part—the range between open and close. A long body means a strong move in one direction. The wicks (thin lines above and below the body) show how far price went beyond the open/close—the high and low.\n\nA long upper wick with a small body often means buyers pushed price up but sellers brought it back down by the close. That's rejection at the highs—a bearish signal. A long lower wick with a small body means sellers pushed price down but buyers fought back—rejection at the lows, potentially bullish. Candlesticks don't just show levels; they hint at who had the upper hand during the period and where price was rejected.",
      },
      {
        type: "analogy",
        heading: "The Battle Summary Analogy",
        content:
          "Imagine each candle is a summary of a boxing round. The body tells you who won the round (green = bulls, red = bears). The wicks tell you the action: a long upper wick means the bulls got punched down from the ceiling; a long lower wick means the bears got punched back from the floor. One candle = one round. You're reading the scorecard of the battle between buyers and sellers. Candlesticks make that scorecard visually obvious at a glance.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Many platforms let you switch between bar and candlestick charts. Try both. Some traders prefer bars for clean S/R levels; others prefer candles for pattern recognition. There's no right answer—use what your brain reads best. The data is identical.",
      },
      {
        type: "preview",
        heading: "Candlestick Patterns (Preview)",
        content:
          "The next module goes deep into candlestick patterns: hammer, doji, engulfing, morning star, and more. These patterns form when specific candle shapes appear at key levels. A hammer at support in an uptrend can signal a bounce. A shooting star at resistance can signal a reversal. Master reading individual candles first—then patterns will make sense. We'll cover them in the Candlestick Mastery module.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What do the body and wicks of a candle represent?",
        component: "ConceptCheck",
        props: { question: "What do the body and wicks of a candle represent?", reveal: "The body = range between open and close. The wicks = how far price went to the high and low. So body shows who won the period; wicks show rejection at the extremes." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Candlestick charts display OHLC as a body (open–close) and wicks (high–low). They're preferred by many traders for pattern recognition and quick reading of momentum.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "heikin-renko",
    title: "Heikin-Ashi and Renko Charts",
    slug: "heikin-renko",
    level: 2,
    moduleId: MODULE_ID,
    order: 6,
    duration: "12 min",
    objectives: [
      "Understand Heikin-Ashi and Renko charts",
      "Know when and why to use them",
      "See their limitations vs standard candles",
    ],
    prerequisites: ["candlestick-charts-intro"],
    content: [
      {
        type: "text",
        heading: "What Is Heikin-Ashi?",
        content:
          "Heikin-Ashi (HA) means 'average bar' in Japanese. It's a modified candlestick that uses averaged prices instead of raw OHLC. The HA close = (Open + High + Low + Close) / 4. The HA open = (previous HA open + previous HA close) / 2. High and low use the max/min of the true high, true low, and the calculated open/close. The result: smoother candles, fewer wicks, and a cleaner view of the trend. HA candles often show fewer reversals and longer runs—they filter out noise. That's the upside: trend is clearer. The downside: HA price levels don't match actual price. Your stop at $100 on an HA chart might not correspond to $100 on the actual price chart. Use HA for trend direction; use standard candles for precise entry and stop levels.",
      },
      {
        type: "text",
        heading: "What Is Renko?",
        content:
          "Renko charts are price-based, not time-based. Each brick forms when price moves a fixed amount (e.g. $1 or 10 pips). A green brick appears when price rises by that amount; a red brick when it falls. Time doesn't matter—if price stays flat for an hour, no new brick appears. Renko filters out time and small moves: you only see bricks when price actually moves. That makes trends very clear—no tiny candles, no choppy wicks. The downside: Renko lags. A brick only forms after the full move; you might miss the start of a move. And Renko hides time—you can't see how fast price moved. Use Renko for clean trend view; use time-based charts for precise timing.",
      },
      {
        type: "example",
        heading: "Example: Heikin-Ashi vs Standard",
        content:
          "On a standard 5m chart, price might show 10 alternating red and green candles in 50 minutes—choppy. On Heikin-Ashi for the same period, you might see 3–4 green candles in a row—clear uptrend. HA smoothed the noise. But if you placed a stop at the HA candle low, that low might be $99.50—while actual price never went below $100. So HA is great for trend bias; use the standard chart for your actual stop and target prices.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Trading Heikin-Ashi or Renko as if the price levels are real. HA and Renko use modified or delayed prices—your stop and target on those charts may not match actual market price. Use them for trend and structure; switch to standard candlesticks for entry, stop, and target placement.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Heikin-Ashi smooths candles for cleaner trend view; Renko filters by price move. Both reduce noise but alter or delay price—use standard candles for actual entry/stop/target levels.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "volume-intro",
    title: "Volume: What It Is and Why It Matters",
    slug: "volume-intro",
    level: 2,
    moduleId: MODULE_ID,
    order: 7,
    duration: "12 min",
    objectives: [
      "Define volume",
      "Understand why volume confirms price moves",
      "Use volume to filter weak signals",
    ],
    prerequisites: ["candlestick-charts-intro"],
    content: [
      {
        type: "text",
        heading: "What Is Volume?",
        content:
          "Volume is the number of shares (or contracts, or lots) traded during a given period. For a daily chart, it's how many shares traded that day. For a 5-minute bar, it's the volume in those 5 minutes. Volume answers: 'How much actually changed hands?' High volume means many participants; low volume means fewer. It's usually shown as a histogram under the price chart—each bar's height is the volume for that period.\n\nVolume is the 'weight' behind price moves. A $5 move on 1 million shares is very different from a $5 move on 10,000 shares. The first suggests broad participation—lots of buyers and sellers agreed on that price. The second might be a few large orders moving the market—easy to reverse. Volume gives you context that price alone cannot.",
      },
      {
        type: "text",
        heading: "Why Volume Matters",
        content:
          "A price move on huge volume is more significant than the same move on tiny volume. Big volume means real conviction—many buyers and sellers agreed on that price. A breakout above resistance with strong volume is more trustworthy than a breakout on thin volume, which might reverse. So volume doesn't tell you direction by itself, but it helps confirm or question what price is doing.\n\nThink of it this way: price tells you WHAT happened. Volume tells you HOW MUCH conviction was behind it. A breakout on low volume is like a crowd 'voting' with only a few hands raised—questionable. A breakout on high volume is a full stadium cheering—the move has real support.",
      },
      {
        type: "analogy",
        heading: "The Auction Audience Analogy",
        content:
          "Imagine an auction. The hammer price (closing price) is what the item sold for. But did one person bid, or did the room erupt in competitive bidding? Volume is the size of the audience. A $100 sale with 50 people bidding tells you the price was strongly agreed upon. A $100 sale with 2 people whispering tells you it might have been a fluke. Volume answers: How many people participated? How much conviction was there? Charts show price. Volume shows the crowd behind it.",
      },
      {
        type: "text",
        heading: "Practical Use",
        content:
          "When price breaks a key level, check volume. If volume is high, the break is more likely to hold. If volume is low, be cautious—the move might be a fake-out. Similarly, in uptrends, you often see higher volume on up bars and lower volume on pullbacks; that's healthy. The opposite—higher volume on down bars during an uptrend—can signal weakening trend.\n\nUse volume as a filter, not a standalone signal. Volume never tells you to buy or sell by itself. It tells you whether the price move you're seeing has conviction or not. A breakout with volume = more reliable. A reversal candle with volume = more reliable. Ignore volume and you're trading blind.",
      },
      {
        type: "warning",
        heading: "Critical Warning",
        content:
          "Never ignore volume on breakouts. A breakout above resistance on thin volume is one of the most common traps. Price punches through, you chase, then it reverses because few participants were involved. Always check: Is volume above average? Is it expanding on the breakout bar? If not, wait. Low-volume breakouts fail more often than they succeed.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Compare current bar volume to the 20-period average. If today's volume is 2x the average on a breakout, that's strong confirmation. If it's below average, be skeptical. Most platforms show volume average as a line overlay—use it.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why is a breakout with high volume more reliable?",
        component: "ConceptCheck",
        props: { question: "Why is a breakout with high volume more reliable than one with low volume?", reveal: "High volume means many participants agreed on the move—strong conviction. Low volume breakouts often fail because few were involved; the move may reverse quickly." },
      },
      {
        type: "preview",
        heading: "Volume Analysis (Preview)",
        content:
          "Advanced traders use volume profiles, VWAP (volume-weighted average price), and on-balance volume to deepen their analysis. We'll cover these in later modules. For now, master the basics: volume confirms or questions price moves. High volume = conviction. Low volume = caution.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Volume is how much was traded. Use it to confirm breakouts and trend strength; low volume often makes moves less reliable.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "timeframes-explained",
    title: "Timeframes Explained",
    slug: "timeframes-explained",
    level: 2,
    moduleId: MODULE_ID,
    order: 8,
    duration: "12 min",
    objectives: [
      "Understand 1-min to monthly timeframes",
      "Match timeframes to trading style",
      "Know how timeframe affects noise and signal",
    ],
    prerequisites: ["volume-intro"],
    content: [
      {
        type: "text",
        heading: "What Is a Timeframe?",
        content:
          "The timeframe is the length of each bar or candle. A 1-minute chart has one candle per minute; a daily chart has one per day; a monthly chart has one per month. So the same asset can be shown on a 1m, 5m, 15m, 1h, 4h, daily, or monthly chart—same price history, different level of zoom.\n\nTimeframe is the most important setting on your chart. It determines what you see. A 1m chart of AAPL might show 500 candles for one day. A daily chart might show 500 days—years of history. Same data, completely different picture. Always know which timeframe you're on. It changes everything.",
      },
      {
        type: "text",
        heading: "From Short to Long",
        content:
          "Short timeframes (1m, 5m) show lots of detail and noise—every small move is visible. They're used by scalpers and day traders who hold for minutes or hours. Medium timeframes (1h, 4h) smooth out some noise and show intraday or multi-day swings; good for swing traders who hold for days or weeks. Long timeframes (daily, weekly, monthly) show the big picture—trends and key levels that matter for position traders and investors who hold for months or years.\n\nThere's no 'best' timeframe. It depends on how long you hold and how much detail you need. A day trader staring at a monthly chart will miss entries. An investor staring at a 1-minute chart will get whipsawed. Match the timeframe to your style.",
      },
      {
        type: "analogy",
        heading: "The Camera Zoom Analogy",
        content:
          "Think of timeframes like camera zoom. A 1-minute chart is like a macro lens—you see every tiny movement, every wrinkle. A daily chart is like a wide-angle shot—you see the whole landscape. The same mountain looks completely different at different zoom levels. A 'big' move on 1m might be invisible on daily. A 'tiny' pullback on daily might be a massive swing on 1m. Same mountain. Different perspective.",
      },
      {
        type: "text",
        heading: "Noise vs Signal",
        content:
          "On a 1-minute chart, small, random fluctuations can look like signals. On a daily chart, those same moves disappear into a single candle. So shorter timeframes have more noise; longer ones emphasize the main trend.\n\nThis is why beginners get chopped up on 1m and 5m charts—they're reacting to noise, not signal. The 'reversal' they see might just be normal fluctuation. Many traders use multiple timeframes: a higher one (e.g. daily) for trend direction and key levels, and a lower one (e.g. 1h or 15m) for entry timing. You trade the big picture, enter on the detail.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Don't mix timeframes randomly. If you're a swing trader, don't enter off a 1m chart. If you're a day trader, don't ignore the daily trend. Beginners often switch timeframes when they don't like what they see—'the 5m looks bad, let me check the 1h.' That's cherry-picking. Pick your primary timeframe for your style and stick to it. Use higher timeframes for context, not escape.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Use the 4x–6x rule: your entry timeframe should be 4–6x smaller than your trend timeframe. Daily trend → 4h or 1h entry. 4h trend → 1h or 15m entry. 1h trend → 15m or 5m entry. This keeps you aligned with the big picture while getting clear entries.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why do day traders use short timeframes and investors use long ones?",
        component: "ConceptCheck",
        props: { question: "Why do day traders use short timeframes and investors use long ones?", reveal: "Day traders hold for minutes or hours, so they need 1m–15m detail. Investors hold for months or years, so daily/weekly shows the trend that matters. Timeframe should match holding period." },
      },
      {
        type: "preview",
        heading: "Multi-Timeframe Analysis (Preview)",
        content:
          "The next lesson covers how the same asset looks on different timeframes and how to use multi-timeframe analysis (higher for trend, lower for entry). Master single-timeframe thinking first—then we'll combine them.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Timeframe = length of each bar (1m, 5m, 1h, daily, etc.). Short = more detail and noise; long = smoother, bigger picture. Choose based on your holding period and style.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "same-asset-timeframes",
    title: "Same Asset on Different Timeframes",
    slug: "same-asset-timeframes",
    level: 2,
    moduleId: MODULE_ID,
    order: 9,
    duration: "12 min",
    objectives: [
      "See how one asset looks on 1m vs daily",
      "Understand multi-timeframe analysis",
      "Avoid confusion when switching timeframes",
    ],
    prerequisites: ["timeframes-explained"],
    content: [
      {
        type: "text",
        heading: "One Symbol, Many Views",
        content:
          "The same stock or pair—e.g. AAPL or EUR/USD—can look like a raging uptrend on a 1-hour chart and a messy range on a 1-minute chart. Or the daily might show a clear downtrend while the 4-hour shows a short-term bounce. Nothing changed in the asset; you're just zooming in or out. So 'trend' and 'setup' always depend on which timeframe you're looking at.\n\nThis confuses beginners. They see a 'reversal' on 5m and go short—then the daily uptrend resumes and they get run over. The 'reversal' was just a pullback. Always ask: What does the next higher timeframe say? If daily is up, 5m 'reversals' are often just entries for the long side.",
      },
      {
        type: "text",
        heading: "Multi-Timeframe Analysis",
        content:
          "A common approach is to use a higher timeframe for bias and a lower one for execution. For example: on the daily chart, you see an uptrend and a key support level. You then switch to the 1-hour or 15-minute chart to wait for a pullback to that support and a clear entry candle. That way you trade in the direction of the bigger trend but enter on a timeframe that gives you a defined stop and target.\n\nTop-down analysis: Start with the highest timeframe (e.g. weekly or daily) to identify the trend. Then go to the next lower (e.g. 4h or 1h) to find key levels. Finally, use the lowest (e.g. 15m or 5m) for precise entry. You're always trading with the big picture, never against it.",
      },
      {
        type: "analogy",
        heading: "The Map Layers Analogy",
        content:
          "Think of multi-timeframe analysis like map layers. The daily chart is the country view—you see the whole terrain. The 4h is the state view—you see regions. The 1h or 15m is the street view—you see exactly where to turn. You don't navigate a city using only the country map, and you don't plan a road trip using only street view. You use all layers together. Same with trading: higher timeframe = direction; lower timeframe = execution.",
      },
      {
        type: "text",
        heading: "How to Apply It",
        content:
          "Step 1: Identify the trend on the highest timeframe you care about (daily for swing, 4h for intraday). Step 2: Find key support and resistance on that timeframe. Step 3: Switch to a lower timeframe (4–6x smaller) and wait for price to reach that level. Step 4: Enter when you get a clear signal (e.g. bullish candle at support) on the lower timeframe. Step 5: Place your stop below the level, your target at the next resistance. You're trading the big trend with a precise entry.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Beginners often look at a 5-minute chart and think they've found a 'sure' reversal, then get run over because the daily trend is still strong. Always be aware of the next higher timeframe. What looks like a reversal on 5m might just be a small pullback in a larger move.\n\nAnother trap: switching timeframes when you don't like what you see. 'The daily says downtrend, but the 1h has a bounce—I'll go long.' That's fighting the trend. Use higher timeframes for bias. Use lower for timing. Never use lower to override higher.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Keep both timeframes on screen. Many platforms let you split-view: daily on top, 1h or 15m on bottom. Same symbol. You see the trend and the entry at once. No mental switching. When the lower timeframe pulls back to a higher-timeframe level, you're ready.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What is multi-timeframe analysis?",
        component: "ConceptCheck",
        props: { question: "What is multi-timeframe analysis?", reveal: "Using a higher timeframe (e.g. daily) for trend and key levels, and a lower timeframe (e.g. 1h or 15m) for entry. You trade with the big trend but enter on a scale that gives clear stops and targets." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "The same asset can look trending on one timeframe and choppy on another. Use higher timeframes for trend and key levels, lower for entries—and always know which timeframe you're trading.",
      },
    ],
    hasQuiz: true,
  },
];
