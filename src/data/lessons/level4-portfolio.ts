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
  moduleId: "portfolio-theory",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level4PortfolioLessons: Lesson[] = [
  createLesson("mpt-basics", 1, "Modern Portfolio Theory", "mpt-basics", "18 min", ["Efficient frontier", "Risk-return trade-off"], [
    { type: "text", heading: "What Is MPT?", content: "Modern Portfolio Theory (MPT) says you can build portfolios that maximize expected return for a given level of risk (volatility), or minimize risk for a given return. Risk is measured as standard deviation of returns. Diversification helps: combining assets that don't move in lockstep can lower portfolio volatility. The efficient frontier is the set of portfolios that offer the best possible expected return for each level of risk. The 'optimal' portfolio depends on your risk tolerance. MPT assumes rational investors and stable relationships—in practice, correlations change and tails are fat, but the idea (diversify, think in risk/return) is foundational." },
    { type: "text", heading: "Efficient Frontier", content: "On a graph of risk (x) vs return (y), the efficient frontier is the upper edge of the feasible set—no portfolio below it offers higher return for the same risk. Portfolios on the frontier are 'efficient.' Adding a risk-free asset (e.g. T-bills) gives a capital allocation line; the tangency portfolio is often used as the 'market' portfolio in theory. In practice, you use asset allocation (stocks, bonds, etc.) to get close to a risk/return profile you can live with." },
    { type: "interactive", heading: "Check Your Understanding", content: "Efficient frontier = best return per risk.", component: "ConceptCheck", props: { question: "What is the efficient frontier?", reveal: "The set of portfolios offering the best expected return for each level of risk (volatility). No portfolio below it gives higher return for the same risk." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MPT: diversify to improve risk/return. Efficient frontier = best return for each risk level. Foundation for asset allocation." },
  ]),
  createLesson("diversification", 2, "Diversification", "diversification", "16 min", ["Why diversify", "Correlation"], [
    { type: "text", heading: "Why Diversify?", content: "Diversification reduces risk without necessarily giving up return. When one asset zigs, another may zag—so the portfolio's swings can be smaller than holding a single asset. The key is correlation: assets with low or negative correlation add more diversification benefit. Uncorrelated or negatively correlated assets smooth the ride. You don't need hundreds of names; after a point, more names add little. Across asset classes (stocks, bonds, commodities) and geographies often helps more than just adding more stocks." },
    { type: "text", heading: "Correlation", content: "Correlation measures how two assets move together (-1 to +1). +1 = perfect lockstep; -1 = opposite; 0 = no linear relationship. Negative correlation is rare but valuable (e.g. stocks vs bonds sometimes). Low positive correlation (e.g. 0.3) still helps. Correlation is not constant—in stress, many assets fall together (correlation rises). So diversification works in 'normal' times but can break in crashes. Still, a diversified portfolio is usually less volatile than a concentrated one." },
    { type: "interactive", heading: "Think It Through", content: "Diversification and correlation.", component: "ConceptCheck", props: { question: "Why diversify?", reveal: "To reduce risk without giving up too much return. Uncorrelated or low-correlation assets smooth the portfolio. Don't put all eggs in one basket." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Diversify across assets and asset classes. Correlation drives benefit. Diversification reduces volatility but doesn't eliminate risk." },
  ]),
  createLesson("rebalancing", 3, "Rebalancing", "rebalancing", "14 min", ["Why rebalance", "How often and how"], [
    { type: "text", heading: "Why Rebalance?", content: "Over time, weights drift. If stocks outperform bonds, your stock allocation grows and you're taking more risk than you intended. Rebalancing means bringing the portfolio back to target weights—sell what's overweight, buy what's underweight. That forces a discipline: buy relatively cheap (underweight) and sell relatively expensive (overweight). It also keeps risk in line with your plan. Without rebalancing, a 60/40 portfolio can become 80/20 after a long bull market." },
    { type: "text", heading: "How to Rebalance", content: "Frequency: annually, quarterly, or when weights drift by a threshold (e.g. 5%). Threshold rebalancing triggers only when an asset is meaningfully off target. Consider taxes: selling in taxable accounts triggers gains; use new cash or dividends to rebalance when possible. In tax-advantaged accounts (IRA, 401k), rebalancing has no immediate tax cost. Don't over-rebalance—transaction costs and taxes matter." },
    { type: "interactive", heading: "Check Your Understanding", content: "Rebalancing restores targets.", component: "ConceptCheck", props: { question: "Why rebalance?", reveal: "Weights drift as assets perform differently. Rebalancing brings the portfolio back to target and can discipline buying low/selling high. Keeps risk in check." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Rebalancing = restore target weights. Controls risk and can add discipline. Use frequency or threshold; mind taxes and costs." },
  ]),
  createLesson("portfolio-summary", 4, "Portfolio Theory: Summary", "portfolio-summary", "8 min", ["Recap MPT, diversification, rebalancing"], [
    { type: "text", heading: "Recap", content: "MPT frames portfolios in risk and return; the efficient frontier is the best return per risk. Diversification across uncorrelated assets reduces volatility. Rebalancing keeps weights and risk on target. Use these ideas for long-term allocation—not for day trading, but for building and maintaining a portfolio." },
    { type: "interactive", heading: "Final Check", content: "Portfolio discipline.", component: "ConceptCheck", props: { question: "What does rebalancing do?", reveal: "Brings portfolio weights back to target (e.g. 60/40). Sell overweight, buy underweight. Controls risk and can enforce buy-low/sell-high." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MPT + diversification + rebalancing = foundation for long-term portfolio management." },
  ], true),
];
