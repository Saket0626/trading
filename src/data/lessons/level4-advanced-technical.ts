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
  level: 4,
  moduleId: "advanced-technical",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level4AdvancedTechnicalLessons: Lesson[] = [
  createLesson("fibonacci", 1, "Fibonacci Retracements", "fibonacci", "22 min", ["Key Fib levels", "Using retracements in trends", "Extensions and targets"], [
    {
      type: "text",
      heading: "What Are Fibonacci Retracements?",
      content:
        "Fibonacci ratios appear in nature (shells, galaxies) and often in price pullbacks. After a move up or down, traders draw retracement levels: 23.6%, 38.2%, 50%, 61.8%, and 78.6% of the move. The idea is that pullbacks often stop near these levels—so they can act as support in an uptrend (buy the dip) or resistance in a downtrend.\n\nThey're not magic; they work because many participants watch them, creating self-fulfilling behavior. Use with trend: in an uptrend, look for longs at 38.2% or 50% retracement; confirm with price action and volume. Never trade Fib alone—combine with structure, moving averages, and volume.",
    },
    {
      type: "text",
      heading: "How to Draw Them",
      content:
        "For an uptrend: from the swing low to the swing high, draw the levels downward. 38.2%, 50%, and 61.8% are the most used. Price often bounces from one of these. Example: stock rallies from $100 to $150 (50-point move). Fib levels: 23.6% retracement = $138.20; 38.2% = $131; 50% = $125; 61.8% = $119. Watch for support at these levels.\n\nFor a downtrend: from high to low, draw levels upward. Combine with other tools—support/resistance, moving averages—rather than trading Fib alone. Extension levels (e.g. 127.2%, 161.8%) are used for profit targets beyond the prior high or low—e.g. if price breaks above the prior high, target 127.2% or 161.8% of the prior move.",
    },
    {
      type: "analogy",
      heading: "The Rubber Band Analogy",
      content:
        "Think of Fibonacci retracements like a rubber band. After a strong move, price often snaps back—but not all the way. Fib levels are like natural resting points: 38.2% is a shallow pullback, 50% is halfway back, 61.8% is a deeper pullback. Traders use these as entry zones—buying the dip when price reaches 38.2% or 50% in an uptrend. The rubber band doesn't always stop at these levels, but they often act as magnets. Confirm with price action—a hammer at the 50% level is more meaningful than price drifting through it.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Fibonacci levels are not guarantees. Price can blow through 50% and 61.8% in a strong reversal. Never trade Fib alone—use with trend, volume, and structure. Also, different traders draw from different swing points—your 50% might be someone else's 38.2%. Be consistent: use clear swing highs and lows. In strong trends, shallow retracements (23.6%, 38.2%) often hold; in weak trends, deeper retracements (61.8%, 78.6%) may be needed.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Fib levels as S/R.",
      component: "ConceptCheck",
      props: { question: "Which Fibonacci levels are most used for retracements?", reveal: "38.2%, 50%, and 61.8%. They often align with support in uptrends and resistance in downtrends. Not guaranteed—confirm with price." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Fibonacci retracements = 38.2%, 50%, 61.8% of a move. Use in trend for pullback entries; confirm with structure and volume. Never trade Fib alone." },
  ], true),
  createLesson("elliott-wave", 2, "Elliott Wave", "elliott-wave", "22 min", ["5-3 structure", "Impulse and correction", "Practical application"], [
    {
      type: "text",
      heading: "Basic Elliott Structure",
      content:
        "Elliott Wave Theory, developed by Ralph Nelson Elliott in the 1930s, says markets move in repetitive patterns: 5 waves in the trend direction (impulse), then 3 waves in the opposite direction (correction). So a full cycle is 5 + 3 = 8 waves.\n\nWave 1 starts the move; wave 2 retraces (often 38.2–61.8% of wave 1); wave 3 is often the strongest—never the shortest of the three impulse waves; wave 4 pulls back but shouldn't overlap wave 1; wave 5 completes the impulse. Then A-B-C correct—three waves in the opposite direction. The structure is fractal—each wave can be broken into smaller 5-3 patterns. Fibonacci relationships often appear (e.g. wave 2 retraces 50% of wave 1; wave 3 = 161.8% of wave 1).",
    },
    {
      type: "text",
      heading: "Practical Use",
      content:
        "Elliott is subjective—different analysts count waves differently. Ten experts might see ten different counts on the same chart. Use it as one lens: identify potential impulse vs correction, and where you might be in the sequence (e.g. in wave 3—expect strength; in wave 5—caution). Don't force counts; if the count gets too messy, step back.\n\nCombine with trend, volume, and key levels. Trading purely on wave count is risky; use for context, not as sole entry. Pros use Elliott to identify high-probability zones (e.g. end of wave 2 = buy zone) and then confirm with price action and volume.",
    },
    {
      type: "analogy",
      heading: "The Tide Analogy",
      content:
        "Think of Elliott Wave like ocean tides. The impulse (5 waves) is the incoming tide—water rushes in, pauses, rushes again, pauses, then one more push. The correction (3 waves) is the outgoing tide—water recedes in three steps. Each wave has sub-waves—like ripples within the tide. The pattern repeats at different scales: daily, weekly, monthly. Elliott traders look for where they are in the tide—early in wave 3 (ride the surge) or late in wave 5 (prepare for the ebb).",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Elliott Wave is highly subjective. Don't trade on wave count alone—you can always find a count that fits after the fact. In real time, counts change as new bars form. Use Elliott for context (are we in an impulse or correction?) and confirm with price, volume, and structure. Never risk significant capital on a wave count. Many traders over-complicate it; keep it simple.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Elliott is structural.",
      component: "ConceptCheck",
      props: { question: "What is the basic Elliott structure?", reveal: "5 waves in the trend direction (impulse), 3 waves in the correction. Cyclic and fractal. Use with other analysis—counting is subjective." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Elliott: 5 waves impulse, 3 waves correction. Fractal. Use for context; confirm with price and volume. Don't over-rely on wave count—it's a lens, not a crystal ball." },
  ], true),
  createLesson("wyckoff", 3, "Wyckoff Method", "wyckoff", "22 min", ["Four phases", "Volume and structure", "Springs and upthrusts"], [
    {
      type: "text",
      heading: "The Four Phases",
      content:
        "Richard Wyckoff (1873–1934) described four phases: Accumulation (smart money buys while price ranges; volume can show absorption—selling dries up, buying increases). Markup (uptrend; demand exceeds supply). Distribution (smart money sells into strength; range at the top; opposite of accumulation). Markdown (downtrend).\n\nThe key is reading volume and price structure: who is in control—supply or demand? In accumulation, sellers are exhausted; buyers absorb supply. In distribution, buyers are exhausted; sellers distribute into strength. Wyckoff emphasized cause and effect: a tight range (cause) with specific volume behavior can lead to a proportional move (effect). The longer and tighter the range, the bigger the potential move.",
    },
    {
      type: "text",
      heading: "Springs, Upthrusts, and Volume",
      content:
        "Springs: a brief break below support that fails—price dips below the range, then rallies back. Often a trap for bears and a signal that accumulation is complete. Upthrusts: a break above resistance that fails—price spikes above the range, then falls back. Often a trap for bulls and a signal that distribution is complete.\n\nIn accumulation, volume may dry up on sell-offs (no one wants to sell) and rise on bounces (buying interest). In distribution, the opposite. Climax volume often marks turning points—panic selling at bottoms, euphoria at tops. Compare volume to average; look for volume confirmation on breakouts. Wyckoff is a framework, not a mechanical system—study charts with this lens to improve reading of structure.",
    },
    {
      type: "analogy",
      heading: "The Warehouse Analogy",
      content:
        "Think of Wyckoff like a warehouse. Accumulation = smart money quietly buying inventory (stock) while everyone else sells. The warehouse fills up. Markup = demand exceeds supply; prices rise as inventory is scarce. Distribution = smart money quietly selling inventory while everyone else buys. The warehouse empties. Markdown = supply exceeds demand; prices fall. Springs and upthrusts are fake breakouts—like someone briefly opening the door (spring) or pretending to restock (upthrust) to fool the crowd. Volume tells you who's really buying or selling.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use Wyckoff with other tools. A spring at support with volume confirmation and a hammer candle is a stronger signal than a spring alone. In distribution, look for declining volume on rallies and rising volume on sell-offs. Wyckoff works best on higher timeframes (daily, weekly) where institutional activity is more visible. On intraday, noise dominates.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Wyckoff phases.",
      component: "ConceptCheck",
      props: { question: "What are the four Wyckoff phases?", reveal: "Accumulation, markup, distribution, markdown. Focus on volume and price structure to identify who is in control (supply vs demand)." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Wyckoff: accumulation, markup, distribution, markdown. Use volume and structure (springs, upthrusts) to read supply/demand. Combine with other analysis." },
  ], true),
  createLesson("advanced-technical-summary", 4, "Advanced Technical: Summary", "advanced-technical-summary", "12 min", ["When to use each tool", "Next steps"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Fibonacci: retracement levels (38.2%, 50%, 61.8%) for pullback entries in a trend. Use with structure and volume—never alone. Elliott: 5-3 wave structure for context; subjective—use as a lens, not a crystal ball. Wyckoff: four phases (accumulation, markup, distribution, markdown) and volume/structure (springs, upthrusts) for supply-demand.\n\nUse these tools with your main strategy—trend, S/R, volume—not in isolation. Confluence is key: Fib + support + volume confirmation beats any single tool. Don't over-complicate—pick one or two that resonate and master them.",
    },
    {
      type: "preview",
      heading: "Intermarket Analysis (Preview)",
      content:
        "In the Intermarket module, we'll step beyond single-asset technicals—how stocks, bonds, commodities, and currencies relate. These relationships add context to your technical analysis: why did the S&P break support? Maybe yields spiked. Why is gold rising? Maybe the dollar is falling. Advanced technicals + intermarket context = fuller picture.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Advanced tools as context.",
      component: "ConceptCheck",
      props: { question: "How should you use Elliott Wave in practice?", reveal: "As context for where you might be in a move (impulse vs correction). Don't rely on wave count alone; confirm with price and volume." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Fib, Elliott, Wyckoff add context. Combine with trend, S/R, and risk management. Confluence beats any single tool." },
  ], true),
];
