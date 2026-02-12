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
    duration: "8 min",
    objectives: [
      "Understand why we visualize price data",
      "See how charts tell the story of supply and demand",
      "Know what a price chart represents",
    ],
    prerequisites: [],
    content: [
      {
        type: "text",
        heading: "Why We Visualize Data",
        content:
          "Imagine you're looking at a table of numbers: Apple stock closed at 172.50 on Monday, 171.20 on Tuesday, 173.80 on Wednesday, and so on for hundreds of days. Spotting a trend or a reversal in raw numbers is hard. A price chart turns that same data into a picture. Your brain can instantly see whether price has been going up, down, or sideways, and where it might be turning. That's why traders and investors rely on charts—they turn history into visual information we can act on.",
      },
      {
        type: "text",
        heading: "What a Price Chart Really Shows",
        content:
          "A price chart plots price (or another measure of value) over time. Every point on the chart is an answer to: 'At this moment in time, what was the price?' Over many points, you see the path price took. That path reflects the ongoing battle between buyers and sellers. When buyers are more aggressive, price tends to rise; when sellers are, it falls. So a chart is really a visualization of supply and demand over time.",
      },
      {
        type: "example",
        heading: "Real-World Example",
        content:
          "Think of a chart like a GPS route. Instead of streets, you have time (horizontal) and price (vertical). The line or candles show the route price took. Just as you'd use a map to decide where to turn next, traders use charts to decide when to enter or exit a trade.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "A price chart visualizes price over time so we can quickly see trends, reversals, and key levels. It turns raw data into a picture of supply and demand.",
      },
    ],
    hasQuiz: false,
  },
  {
    id: "chart-axes",
    title: "The X and Y Axes: Time and Price",
    slug: "chart-axes",
    level: 2,
    moduleId: MODULE_ID,
    order: 2,
    duration: "6 min",
    objectives: [
      "Know what the horizontal axis (X) represents",
      "Know what the vertical axis (Y) represents",
      "Read scale and intervals correctly",
    ],
    prerequisites: ["price-chart-intro"],
    content: [
      {
        type: "text",
        heading: "The Horizontal Axis: Time",
        content:
          "On almost every price chart, the horizontal axis (X-axis) is time. It runs from left (past) to right (present or most recent). Each tick might be one minute, one hour, one day, or one week—depending on the timeframe you're viewing. So 'further right' always means 'later in time.'",
      },
      {
        type: "text",
        heading: "The Vertical Axis: Price",
        content:
          "The vertical axis (Y-axis) is price. Lower on the chart means lower price; higher means higher price. The scale can be linear (equal spacing per dollar) or logarithmic (equal spacing per percentage move). For most day-to-day trading, linear is used. Always check the scale when comparing charts—two assets with different price ranges will look different even if their percentage moves are the same.",
      },
      {
        type: "text",
        heading: "Why It Matters",
        content:
          "Misreading the axes leads to wrong conclusions. For example, a 'big' move on a 1-minute chart might be tiny on a daily chart. The axes tell you the scale of both time and price, so you know what you're actually looking at.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "X = time (left to right, past to present). Y = price (low to high, bottom to top). Always be aware of the timeframe and price scale.",
      },
    ],
    hasQuiz: false,
  },
  {
    id: "line-charts",
    title: "Line Charts",
    slug: "line-charts",
    level: 2,
    moduleId: MODULE_ID,
    order: 3,
    duration: "6 min",
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
          "A line chart takes one price per period—usually the closing price—and connects those points with a line. So for each day (or hour, or minute), you get a single dot at the close, and the line links them. No open, high, or low—just the closing value over time. That makes it the simplest and cleanest chart type.",
      },
      {
        type: "text",
        heading: "When to Use a Line Chart",
        content:
          "Line charts are great for seeing the overall trend without clutter. They're used in news and presentations, and for long-term views (e.g. yearly performance). They hide the intra-period volatility—you don't see how wild price was within each bar, only where it closed. So use a line chart when you care about the general direction and closing levels, not the full range of each period.",
      },
      {
        type: "text",
        heading: "Limitation",
        content:
          "Because they show only the close, you miss information: Did price spike up and then collapse? Did it open high and drift lower? For trading decisions that depend on range, support/resistance, or candlestick patterns, you need bar or candlestick charts. Line charts are for clarity of trend, not for detailed entry/exit analysis.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Line charts plot closing prices only and connect them with a line. Use them for clean trend views; switch to bar or candlestick when you need OHLC detail.",
      },
    ],
    hasQuiz: false,
  },
  {
    id: "bar-charts",
    title: "Bar Charts (OHLC)",
    slug: "bar-charts",
    level: 2,
    moduleId: MODULE_ID,
    order: 4,
    duration: "8 min",
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
          "Each bar on a bar chart represents one period (e.g. one day). For that period you get four prices: Open (O)—where price started; High (H)—the highest price reached; Low (L)—the lowest; and Close (C)—where price ended. So one bar packs in the full range and the direction (open to close).",
      },
      {
        type: "text",
        heading: "How to Read One Bar",
        content:
          "The vertical line runs from the low to the high—that's the full range. A tick to the left marks the open; a tick to the right marks the close. If the close is above the open, the bar is often colored green (or white) for up; if the close is below the open, red (or black) for down. So in one bar you see: how far price traveled (high to low), where it started (open), and where it ended (close).",
      },
      {
        type: "text",
        heading: "Why Bars Are Useful",
        content:
          "Bars give you more information than a line chart. You can see volatility (tall bar = big range), gaps (when the next bar's open is far from the previous close), and whether buyers or sellers won the period (close vs open). Many professional traders still use bar charts; others prefer candlesticks, which show the same OHLC data in a different visual form.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Bar charts show Open, High, Low, and Close for each period. The vertical line is the range; left tick = open, right tick = close. They add range and direction to the simple close-only line.",
      },
    ],
    hasQuiz: false,
  },
  {
    id: "candlestick-charts-intro",
    title: "Candlestick Charts",
    slug: "candlestick-charts-intro",
    level: 2,
    moduleId: MODULE_ID,
    order: 5,
    duration: "8 min",
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
          "Candlestick charts use the exact same OHLC data as bar charts. The difference is how they draw it. Instead of a vertical line with ticks, each period is shown as a 'candle': a rectangular body (open to close) with thin wicks (shadows) extending to the high and low. The result is easier to scan: you quickly see which periods were bullish (e.g. green body) or bearish (e.g. red body), and how much of the range was 'body' versus 'wick.'",
      },
      {
        type: "text",
        heading: "Body and Wicks",
        content:
          "The body is the thick part—the range between open and close. A long body means a strong move in one direction. The wicks (thin lines above and below the body) show how far price went beyond the open/close—the high and low. A long upper wick with a small body often means buyers pushed price up but sellers brought it back down by the close. So candlesticks don't just show levels; they hint at who had the upper hand during the period.",
      },
      {
        type: "text",
        heading: "Why Traders Prefer Them",
        content:
          "Candlesticks make it easier to spot patterns (doji, hammer, engulfing, etc.) and to judge momentum and rejection at a glance. The next module goes deep into candlestick patterns; here, the point is that candlesticks are the same OHLC in a form that many find more readable for trading.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Candlestick charts display OHLC as a body (open–close) and wicks (high–low). They're preferred by many traders for pattern recognition and quick reading of momentum.",
      },
    ],
    hasQuiz: false,
  },
  {
    id: "volume-intro",
    title: "Volume: What It Is and Why It Matters",
    slug: "volume-intro",
    level: 2,
    moduleId: MODULE_ID,
    order: 6,
    duration: "8 min",
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
          "Volume is the number of shares (or contracts, or lots) traded during a given period. For a daily chart, it's how many shares traded that day. For a 5-minute bar, it's the volume in those 5 minutes. Volume answers: 'How much actually changed hands?' High volume means many participants; low volume means fewer. It's usually shown as a histogram under the price chart—each bar's height is the volume for that period.",
      },
      {
        type: "text",
        heading: "Why Volume Matters",
        content:
          "A price move on huge volume is more significant than the same move on tiny volume. Big volume means real conviction—many buyers and sellers agreed on that price. A breakout above resistance with strong volume is more trustworthy than a breakout on thin volume, which might reverse. So volume doesn't tell you direction by itself, but it helps confirm or question what price is doing.",
      },
      {
        type: "text",
        heading: "Practical Use",
        content:
          "When price breaks a key level, check volume. If volume is high, the break is more likely to hold. If volume is low, be cautious—the move might be a fake-out. Similarly, in uptrends, you often see higher volume on up bars and lower volume on pullbacks; the opposite can signal weakening trend. Use volume as a filter, not a standalone signal.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Volume is how much was traded. Use it to confirm breakouts and trend strength; low volume often makes moves less reliable.",
      },
    ],
    hasQuiz: false,
  },
  {
    id: "timeframes-explained",
    title: "Timeframes Explained",
    slug: "timeframes-explained",
    level: 2,
    moduleId: MODULE_ID,
    order: 7,
    duration: "10 min",
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
          "The timeframe is the length of each bar or candle. A 1-minute chart has one candle per minute; a daily chart has one per day; a monthly chart has one per month. So the same asset can be shown on a 1m, 5m, 15m, 1h, 4h, daily, or monthly chart—same price history, different level of zoom.",
      },
      {
        type: "text",
        heading: "From Short to Long",
        content:
          "Short timeframes (1m, 5m) show lots of detail and noise—every small move is visible. They're used by scalpers and day traders. Medium timeframes (1h, 4h) smooth out some noise and show intraday or multi-day swings; good for swing traders. Long timeframes (daily, weekly, monthly) show the big picture—trends and key levels that matter for position traders and investors. There's no 'best' timeframe; it depends on how long you hold and how much detail you need.",
      },
      {
        type: "text",
        heading: "Noise vs Signal",
        content:
          "On a 1-minute chart, small, random fluctuations can look like signals. On a daily chart, those same moves disappear into a single candle. So shorter timeframes have more noise; longer ones emphasize the main trend. Many traders use multiple timeframes: a higher one for trend direction and a lower one for entry timing.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Timeframe = length of each bar (1m, 5m, 1h, daily, etc.). Short = more detail and noise; long = smoother, bigger picture. Choose based on your holding period and style.",
      },
    ],
    hasQuiz: false,
  },
  {
    id: "same-asset-timeframes",
    title: "Same Asset on Different Timeframes",
    slug: "same-asset-timeframes",
    level: 2,
    moduleId: MODULE_ID,
    order: 8,
    duration: "10 min",
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
          "The same stock or pair—e.g. AAPL or EUR/USD—can look like a raging uptrend on a 1-hour chart and a messy range on a 1-minute chart. Or the daily might show a clear downtrend while the 4-hour shows a short-term bounce. Nothing changed in the asset; you're just zooming in or out. So 'trend' and 'setup' always depend on which timeframe you're looking at.",
      },
      {
        type: "text",
        heading: "Multi-Timeframe Analysis",
        content:
          "A common approach is to use a higher timeframe for bias and a lower one for execution. For example: on the daily chart, you see an uptrend and a key support level. You then switch to the 1-hour or 15-minute chart to wait for a pullback to that support and a clear entry candle. That way you trade in the direction of the bigger trend but enter on a timeframe that gives you a defined stop and target.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Beginners often look at a 5-minute chart and think they've found a 'sure' reversal, then get run over because the daily trend is still strong. Always be aware of the next higher timeframe. What looks like a reversal on 5m might just be a small pullback in a larger move.",
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
