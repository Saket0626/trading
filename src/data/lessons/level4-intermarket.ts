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
  createLesson("intermarket-basics", 1, "How Markets Relate", "intermarket-basics", "22 min", ["Stocks, bonds, currencies", "Leading and lagging relationships", "Using intermarket context"], [
    {
      type: "text",
      heading: "Markets Are Connected",
      content:
        "Stocks, bonds, commodities, and currencies don't move in isolation. Rising bond yields can hurt stock valuations—higher discount rates mean future earnings are worth less today. A stronger dollar often pressures commodities (priced in USD) and emerging markets (dollar-denominated debt). Gold often moves inversely to the dollar and can act as a safe haven.\n\nUnderstanding these links helps you see the bigger picture: why did stocks sell off? Maybe yields spiked on strong employment data. Why is the dollar up? Maybe the Fed is hawkish. Intermarket analysis adds context to your primary market—you're not just looking at the S&P in isolation; you're seeing the global mosaic.",
    },
    {
      type: "text",
      heading: "Key Relationships",
      content:
        "Stocks vs bonds: often inverse. Yields up (bond prices down) → stocks can fall. Flight to safety: risk-off sends money to Treasuries, yen, Swiss franc; risk-on to stocks, commodities. Dollar index (DXY): strong dollar can hurt commodities (priced in USD) and EM. Oil and CAD often move together (Canada is an oil producer). Copper is sometimes called 'Dr. Copper' for its economic signal—it tends to lead the business cycle.\n\nUse these as confirmation or warning. Example: stocks are rallying but yields are collapsing and gold is spiking—that's risk-off behavior, and the stock rally may be fragile. Conversely: stocks up, yields up, dollar strong—that's risk-on, growth expectations rising.",
    },
    {
      type: "analogy",
      heading: "The Ecosystem Analogy",
      content:
        "Think of markets like an ecosystem. When it rains (Fed eases), plants (stocks) and animals (commodities) thrive. When there's a drought (Fed tightens), everything suffers. Predators (dollar) and prey (EM, commodities) have inverse relationships. Flight to safety is like animals seeking shelter—money runs to Treasuries and yen when storms hit. You can't understand one species without understanding the ecosystem. Same with markets: stocks don't exist in a vacuum.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Check intermarket context before big trades. If you're bullish stocks, confirm that yields aren't spiking (which would pressure valuations) and the dollar isn't surging (which can hurt earnings for multinationals). Use DXY, TNX (10-year yield), and gold as a quick dashboard. Divergences—e.g. stocks making new highs while yields and copper lag—can warn of topping action.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Bonds and stocks.",
      component: "ConceptCheck",
      props: { question: "Why do bonds and stocks often move inversely?", reveal: "Rising yields can hurt stock valuations (higher discount rate). Flight to safety sends money from stocks to bonds. So bond yields up often coincide with stock pressure." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Markets are linked. Stocks/bonds, dollar/commodities, risk-on/risk-off. Use intermarket context for confirmation and warning." },
  ], true),
  createLesson("vix-fear", 2, "VIX and Fear", "vix-fear", "22 min", ["What VIX measures", "How to use it", "VIX products and pitfalls"], [
    {
      type: "text",
      heading: "What Is the VIX?",
      content:
        "The VIX is the CBOE Volatility Index—it measures implied volatility of S&P 500 options (30-day). When investors expect big moves, they pay more for options, so implied vol rises. The VIX is often called a 'fear gauge': high VIX = fear, low VIX = complacency.\n\nVIX typically spikes when stocks fall sharply (e.g. 2008, March 2020). In March 2020, VIX hit 82—among the highest readings ever. It tends to mean-revert: very high VIX often precedes a bounce in stocks (options are expensive, fear is extreme)—but not always. Don't catch a falling knife on VIX alone. VIX and S&P 500 are usually negatively correlated: stocks down, VIX up; stocks up, VIX down.",
    },
    {
      type: "text",
      heading: "Using VIX",
      content:
        "Rising VIX with falling stocks = elevated fear; options get expensive. Some traders buy volatility (VIX futures, VIX options, or volatility ETFs like VXX) as a hedge—when stocks crash, VIX spikes and the hedge pays off. Others use VIX levels to adjust position size: high VIX (e.g. above 25) = maybe reduce risk; low VIX (e.g. below 15) = complacency, be cautious of sudden spikes.\n\nExtreme readings can signal reversals: VIX above 40 often coincides with short-term bottoms (but not always). VIX below 12 = complacency; a shock can cause a violent spike. Use VIX as context—don't trade it alone.",
    },
    {
      type: "analogy",
      heading: "The Thermometer Analogy",
      content:
        "Think of VIX like a thermometer for market fear. When everyone is calm (low VIX), the reading is low. When panic hits (high VIX), the reading spikes. But a thermometer doesn't predict the weather—it just measures the current temperature. VIX doesn't predict crashes; it measures current fear. High VIX often mean-reverts (fear fades), but during a real crisis it can stay high for weeks. Don't assume VIX 80 means 'buy everything'—sometimes fear gets fear.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Don't trade VIX products (VXX, UVXY, etc.) without understanding their structure. Many VIX ETPs hold short-term VIX futures and decay over time due to contango—they lose value even when VIX is flat. They're designed for short-term hedging, not long-term holds. Buying and holding VXX is a losing strategy for most. Use VIX for sentiment reading; trade VIX products only if you fully understand the mechanics.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "VIX as sentiment.",
      component: "ConceptCheck",
      props: { question: "What does the VIX measure?", reveal: "Implied volatility of S&P 500 options. High VIX = fear (options expensive). It often spikes when stocks fall and tends to mean-revert." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "VIX = implied vol of S&P options; fear gauge. High VIX = stress; often mean-reverts. Use for context and hedging, not as sole signal. Beware VIX ETP decay." },
  ], true),
  createLesson("intermarket-summary", 3, "Intermarket: Summary", "intermarket-summary", "12 min", ["Recap relationships and VIX", "Next steps"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Markets are interconnected—stocks, bonds, dollar, commodities. Use these relationships for context: yields up can pressure stocks; strong dollar can pressure commodities and EM; risk-on vs risk-off drives flows. VIX measures implied volatility and fear; high VIX often coincides with selloffs and can mean-revert. Add intermarket and VIX to your analysis; don't trade on them alone.\n\nIntermarket analysis is a lens—it helps you understand why your primary market is moving and whether the move has confirmation or divergence. Check DXY, yields, and VIX before big trades. Build a simple dashboard and review it daily.",
    },
    {
      type: "preview",
      heading: "Level 5: Quantitative Trading (Preview)",
      content:
        "In Level 5, we shift from discretionary analysis to systematic, quantitative approaches. Python, data acquisition, backtesting, and risk metrics—building a repeatable process. Intermarket relationships can be quantified (correlations, lead-lag) and tested. The context you've learned here becomes inputs for quantitative models. See you in Level 5!",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "VIX and stocks.",
      component: "ConceptCheck",
      props: { question: "When does the VIX typically spike?", reveal: "When stocks fall sharply—investors bid up option prices (implied vol). So VIX spikes in stress and fear." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Intermarket + VIX = context for your main market. Use for confirmation and sentiment. Build a dashboard; check it daily." },
  ], true),
];
