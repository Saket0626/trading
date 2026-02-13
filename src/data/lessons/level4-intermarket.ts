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
  moduleId: "intermarket-analysis",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level4IntermarketLessons: Lesson[] = [
  createLesson("intermarket-basics", 1, "How Markets Relate", "intermarket-basics", "18 min", ["Stocks, bonds, currencies", "Leading and lagging relationships"], [
    { type: "text", heading: "Markets Are Connected", content: "Stocks, bonds, commodities, and currencies don't move in isolation. Rising bond yields can hurt stock valuations (discount rates go up). A stronger dollar often pressures commodities and emerging markets. Gold often moves inversely to the dollar and can act as a safe haven. Understanding these links helps you see the bigger picture: why did stocks sell off? Maybe yields spiked. Why is the dollar up? Maybe the Fed is hawkish. Intermarket analysis adds context to your primary market." },
    { type: "text", heading: "Key Relationships", content: "Stocks vs bonds: often inverse (yields up → stocks can fall). Flight to safety: risk-off sends money to Treasuries, yen, Swiss franc; risk-on to stocks, commodities. Dollar index (DXY): strong dollar can hurt commodities (priced in USD) and EM. Oil and CAD often move together (Canada is an oil producer). Copper is sometimes called 'Dr. Copper' for its economic signal. Use these as confirmation or warning—e.g. if stocks are rallying but yields are collapsing, something may be off." },
    { type: "interactive", heading: "Check Your Understanding", content: "Bonds and stocks.", component: "ConceptCheck", props: { question: "Why do bonds and stocks often move inversely?", reveal: "Rising yields can hurt stock valuations (higher discount rate). Flight to safety sends money from stocks to bonds. So bond yields up often coincide with stock pressure." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Markets are linked. Stocks/bonds, dollar/commodities, risk-on/risk-off. Use intermarket context for confirmation." },
  ]),
  createLesson("vix-fear", 2, "VIX and Fear", "vix-fear", "16 min", ["What VIX measures", "How to use it"], [
    { type: "text", heading: "What Is the VIX?", content: "The VIX is the CBOE Volatility Index—it measures implied volatility of S&P 500 options (30-day). When investors expect big moves, they pay more for options, so implied vol rises. So the VIX is often called a 'fear gauge': high VIX = fear, low VIX = complacency. VIX typically spikes when stocks fall sharply (e.g. in crashes). It tends to mean-revert: very high VIX often precedes a bounce in stocks (but not always—don't catch a falling knife on VIX alone). VIX and S&P 500 are usually negatively correlated." },
    { type: "text", heading: "Using VIX", content: "Rising VIX with falling stocks = elevated fear; options get expensive. Some traders buy volatility (VIX futures, VIX options, or volatility ETFs) as a hedge. Others use VIX levels to adjust position size (high VIX = maybe reduce risk). Don't trade VIX products without understanding their structure—many VIX ETPs decay over time. As a reading of market sentiment, VIX is valuable: extreme readings can signal reversals or confirm stress." },
    { type: "interactive", heading: "Think It Through", content: "VIX as sentiment.", component: "ConceptCheck", props: { question: "What does the VIX measure?", reveal: "Implied volatility of S&P 500 options. High VIX = fear (options expensive). It often spikes when stocks fall and tends to mean-revert." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "VIX = implied vol of S&P options; fear gauge. High VIX = stress; often mean-reverts. Use for context and hedging, not as sole signal." },
  ]),
  createLesson("intermarket-summary", 3, "Intermarket: Summary", "intermarket-summary", "8 min", ["Recap relationships and VIX"], [
    { type: "text", heading: "Recap", content: "Markets are interconnected—stocks, bonds, dollar, commodities. Use these relationships for context. VIX measures implied volatility and fear; high VIX often coincides with selloffs and can mean-revert. Add intermarket and VIX to your analysis; don't trade on them alone." },
    { type: "interactive", heading: "Final Check", content: "VIX and stocks.", component: "ConceptCheck", props: { question: "When does the VIX typically spike?", reveal: "When stocks fall sharply—investors bid up option prices (implied vol). So VIX spikes in stress and fear." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Intermarket + VIX = context for your main market. Use for confirmation and sentiment." },
  ], true),
];
