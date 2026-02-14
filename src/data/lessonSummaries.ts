/**
 * Full 2–4 sentence summaries for each lesson. Used in the lesson list dropdown.
 * Fallback: constructed from objectives when no summary is defined.
 */
export const LESSON_SUMMARIES: Record<string, string> = {
  "money-basics":
    "Money is the tool that makes trading possible—it solves the 'double coincidence of wants' problem that barter had. You learn the three main functions of money: medium of exchange, store of value, and unit of account. The lesson connects money to financial markets and explains why every trade involves money on one side.",
  "money-value":
    "Money's value depends on supply, demand, and trust. Central banks control supply; economic health and interest rates influence demand. You'll see why inflation erodes purchasing power and how this connects to forex trading, where traders bet on which currency will hold or gain value.",
  "value-prices":
    "Value is subjective; price is what the market pays. Supply and demand constantly push prices toward equilibrium—more buyers than sellers raises price, and vice versa. The lesson applies this to stocks, forex, and commodities, and explains what shifts supply and demand in each market.",
  "intro-markets":
    "A market is any place where buyers and sellers meet and agree on prices. Financial markets—stocks, forex, commodities, crypto—work the same way, just faster and electronic. The lesson introduces the big four markets and how price discovery happens through matching buyers and sellers.",
  "concept-of-value":
    "Intrinsic value is an estimate of worth based on fundamentals; market value is what people pay now. They often diverge—stocks can stay overvalued or undervalued for a long time. The lesson explains when traders vs investors care about each, and why 'overvalued' doesn't mean sell tomorrow.",
  "buying-selling":
    "Every trade has two sides: when you buy, someone else sells. Buyers and sellers constantly match through exchanges, and the price is where willingness to buy meets willingness to sell. The lesson explains why people buy and sell at different times and why your counterparty matters.",
};

/**
 * Returns a 2–4 sentence summary for a lesson. Uses LESSON_SUMMARIES when available,
 * otherwise constructs one from objectives.
 */
export function getLessonSummary(lesson: { id: string; title: string; objectives: string[] }): string {
  const custom = LESSON_SUMMARIES[lesson.id];
  if (custom) return custom;
  const objs = lesson.objectives.slice(0, 3);
  if (objs.length === 1) return `In this lesson you'll ${objs[0].toLowerCase()}.`;
  return `This lesson covers ${objs[0].toLowerCase()}. You'll also ${objs
    .slice(1)
    .map((o) => o.toLowerCase())
    .join(", and ")}.`;
}
