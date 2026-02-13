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
  createLesson("fibonacci", 1, "Fibonacci Retracements", "fibonacci", "16 min", ["Key Fib levels", "Using retracements in trends"], [
    { type: "text", heading: "What Are Fibonacci Retracements?", content: "Fibonacci ratios appear in nature and often in price pullbacks. After a move up or down, traders draw retracement levels: 23.6%, 38.2%, 50%, 61.8%, and 78.6% of the move. The idea is that pullbacks often stop near these levels—so they can act as support in an uptrend (buy the dip) or resistance in a downtrend. They're not magic; they work because many participants watch them, creating self-fulfilling behavior. Use with trend: in an uptrend, look for longs at 38.2% or 50% retracement; confirm with price action and volume." },
    { type: "text", heading: "How to Draw Them", content: "For an uptrend: from the swing low to the swing high, draw the levels downward. 38.2%, 50%, and 61.8% are the most used. Price often bounces from one of these. For a downtrend: from high to low, draw levels upward. Combine with other tools—support/resistance, moving averages—rather than trading Fib alone. Extension levels (e.g. 127.2%, 161.8%) are used for profit targets beyond the prior high or low." },
    { type: "interactive", heading: "Check Your Understanding", content: "Fib levels as S/R.", component: "ConceptCheck", props: { question: "Which Fibonacci levels are most used for retracements?", reveal: "38.2%, 50%, and 61.8%. They often align with support in uptrends and resistance in downtrends. Not guaranteed—confirm with price." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Fibonacci retracements = 38.2%, 50%, 61.8% of a move. Use in trend for pullback entries; confirm with structure and volume." },
  ]),
  createLesson("elliott-wave", 2, "Elliott Wave", "elliott-wave", "18 min", ["5-3 structure", "Impulse and correction"], [
    { type: "text", heading: "Basic Elliott Structure", content: "Elliott Wave Theory says markets move in repetitive patterns: 5 waves in the trend direction (impulse), then 3 waves in the opposite direction (correction). So a full cycle is 5 + 3 = 8 waves. The structure is fractal—each wave can be broken into smaller 5-3 patterns. Wave 1 starts the move; wave 2 retraces (often 38.2–61.8% of 1); wave 3 is often the strongest; wave 4 pulls back; wave 5 completes the impulse. Then A-B-C correct. Fibonacci relationships often appear (e.g. wave 2 retraces 50% of wave 1)." },
    { type: "text", heading: "Practical Use", content: "Elliott is subjective—different analysts count waves differently. Use it as one lens: identify potential impulse vs correction, and where you might be in the sequence. Don't force counts; if the count gets too messy, step back. Combine with trend, volume, and key levels. Trading purely on wave count is risky; use for context, not as sole entry." },
    { type: "interactive", heading: "Think It Through", content: "Elliott is structural.", component: "ConceptCheck", props: { question: "What is the basic Elliott structure?", reveal: "5 waves in the trend direction (impulse), 3 waves in the correction. Cyclic and fractal. Use with other analysis—counting is subjective." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Elliott: 5 waves impulse, 3 waves correction. Fractal. Use for context; confirm with price and volume. Don't over-rely on wave count." },
  ]),
  createLesson("wyckoff", 3, "Wyckoff Method", "wyckoff", "18 min", ["Four phases", "Volume and structure"], [
    { type: "text", heading: "The Four Phases", content: "Richard Wyckoff described four phases: Accumulation (smart money buys while price ranges; volume can show absorption). Markup (uptrend; demand exceeds supply). Distribution (smart money sells into strength; range at the top). Markdown (downtrend). The key is reading volume and price structure: springs (brief break below support that fails) and upthrusts (break above resistance that fails) can signal the end of accumulation or distribution. Wyckoff also emphasized cause and effect: a tight range with specific volume behavior can 'cause' a proportional move." },
    { type: "text", heading: "Volume Analysis", content: "In accumulation, volume may dry up on sell-offs and rise on bounces—suggesting buying. In distribution, the opposite. Climax volume often marks turning points. Compare volume to average; look for volume confirmation on breakouts. Wyckoff is a framework for reading supply and demand through price and volume—not a mechanical system. Study charts with this lens to improve reading of structure." },
    { type: "interactive", heading: "Check Your Understanding", content: "Wyckoff phases.", component: "ConceptCheck", props: { question: "What are the four Wyckoff phases?", reveal: "Accumulation, markup, distribution, markdown. Focus on volume and price structure to identify who is in control (supply vs demand)." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Wyckoff: accumulation, markup, distribution, markdown. Use volume and structure (springs, upthrusts) to read supply/demand." },
  ]),
  createLesson("advanced-technical-summary", 4, "Advanced Technical: Summary", "advanced-technical-summary", "8 min", ["When to use each tool"], [
    { type: "text", heading: "Recap", content: "Fibonacci: retracement levels for pullback entries in a trend. Elliott: 5-3 wave structure for context; subjective. Wyckoff: four phases and volume/structure for supply-demand. Use with your main strategy—trend, S/R, volume—not in isolation." },
    { type: "interactive", heading: "Final Check", content: "Advanced tools as context.", component: "ConceptCheck", props: { question: "How should you use Elliott Wave in practice?", reveal: "As context for where you might be in a move (impulse vs correction). Don't rely on wave count alone; confirm with price and volume." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Fib, Elliott, Wyckoff add context. Combine with trend, S/R, and risk management." },
  ], true),
];
