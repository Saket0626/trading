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
    "12 min",
    ["Define support and resistance", "How to identify them"],
    [
      {
        type: "text",
        heading: "Support: The Price Floor",
        content:
          "Support is a price level where buying interest tends to emerge. When price falls to support, buyers step in and price often bounces up. Think of it as a floor—price has historically had trouble going below it. Support forms at previous lows, round numbers, or where large buyers have shown interest.",
      },
      {
        type: "text",
        heading: "Resistance: The Price Ceiling",
        content:
          "Resistance is a price level where selling interest tends to emerge. When price rises to resistance, sellers step in and price often bounces down. It acts like a ceiling. Resistance forms at previous highs, round numbers, or where sellers have previously defended.",
      },
      { type: "interactive", heading: "Think It Through", content: "What is the difference between support and resistance?", component: "ConceptCheck", props: { question: "What is the difference between support and resistance?", reveal: "Support = floor where buying tends to emerge. Resistance = ceiling where selling tends to emerge. Price respects them until they break." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Support = floor (buying pressure). Resistance = ceiling (selling pressure). Price tends to respect these levels until they break.",
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
    "10 min",
    ["Uptrend, downtrend", "Higher highs, higher lows"],
    [
      {
        type: "text",
        heading: "Trend = Direction of Price",
        content:
          "A trend is the prevailing direction of price over time. An UPTREND means price is making higher highs and higher lows—buyers are in control. A DOWNTREND means lower highs and lower lows—sellers are in control. SIDEWAYS (or ranging) means no clear direction; price oscillates between similar highs and lows.",
      },
      {
        type: "text",
        heading: "Why It Matters",
        content:
          "Most strategies work better when you trade in the direction of the trend. 'Trend is your friend'—fighting the trend increases the chance of getting run over. Identifying trend is one of the first steps in any technical analysis.",
      },
      { type: "interactive", heading: "Think It Through", content: "How do you define an uptrend?", component: "ConceptCheck", props: { question: "How do you define an uptrend?", reveal: "Higher highs and higher lows—buyers in control. Trade with the trend when you can." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content: "Uptrend = higher highs, higher lows. Downtrend = lower highs, lower lows. Sideways = range. Trade with the trend when you can.",
      },
    ]
  ),
];
