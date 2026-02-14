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
  createLesson("mpt-basics", 1, "Modern Portfolio Theory", "mpt-basics", "22 min", ["Efficient frontier", "Risk-return trade-off", "Why MPT matters"], [
    {
      type: "text",
      heading: "What Is MPT?",
      content:
        "Modern Portfolio Theory (MPT), developed by Harry Markowitz in the 1950s, says you can build portfolios that maximize expected return for a given level of risk (volatility), or minimize risk for a given return. Risk is measured as standard deviation of returns—the more your portfolio swings, the higher the risk.\n\nDiversification helps: combining assets that don't move in lockstep can lower portfolio volatility. A portfolio of 100% stocks might have 15% annual volatility; adding bonds (which often zig when stocks zag) can lower it to 10%—without necessarily sacrificing return. The 'optimal' portfolio depends on your risk tolerance. MPT assumes rational investors and stable correlations; in practice, correlations change and tails are fat, but the idea (diversify, think in risk/return) is foundational.",
    },
    {
      type: "text",
      heading: "Efficient Frontier",
      content:
        "On a graph of risk (x) vs return (y), the efficient frontier is the upper edge of the feasible set—no portfolio below it offers higher return for the same risk. Portfolios on the frontier are 'efficient': you can't improve return without taking more risk, or reduce risk without giving up return.\n\nAdding a risk-free asset (e.g. T-bills at 4%) gives a capital allocation line—you can mix the risk-free asset with the tangency portfolio to get any point on the line. The tangency portfolio is often used as the 'market' portfolio in theory. In practice, you use asset allocation (stocks, bonds, commodities, etc.) to get close to a risk/return profile you can live with—e.g. 60/40 stocks/bonds for moderate risk.",
    },
    {
      type: "analogy",
      heading: "The Smoothie Analogy",
      content:
        "Think of MPT like making a smoothie. One ingredient (100% strawberries) tastes good but might spike your blood sugar. Add bananas and yogurt—different ingredients that don't all spike at once—and you get a smoother experience. Diversification is mixing ingredients that don't all react the same way. The efficient frontier is the best possible smoothie for each level of 'smoothness'—you can't make it smoother without changing the flavor (return), or improve flavor without making it less smooth.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Don't chase the 'optimal' portfolio—it's unknowable in advance. Correlations and returns change. Focus on a reasonable allocation (e.g. 60/40, 70/30) that you can stick with through drawdowns. Consistency matters more than perfection. Rebalance periodically to keep your target mix.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Efficient frontier = best return per risk.",
      component: "ConceptCheck",
      props: { question: "What is the efficient frontier?", reveal: "The set of portfolios offering the best expected return for each level of risk (volatility). No portfolio below it gives higher return for the same risk." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MPT: diversify to improve risk/return. Efficient frontier = best return for each risk level. Foundation for asset allocation. Consistency beats perfection." },
  ], true),
  createLesson("diversification", 2, "Diversification", "diversification", "20 min", ["Why diversify", "Correlation", "How much is enough"], [
    {
      type: "text",
      heading: "Why Diversify?",
      content:
        "Diversification reduces risk without necessarily giving up return. When one asset zigs, another may zag—so the portfolio's swings can be smaller than holding a single asset. The key is correlation: assets with low or negative correlation add more diversification benefit.\n\nUncorrelated or negatively correlated assets smooth the ride. You don't need hundreds of names; after ~20-30 stocks, more names add little. Across asset classes (stocks, bonds, commodities) and geographies often helps more than just adding more stocks. International diversification can reduce country-specific risk—a US-only portfolio missed Japan's lost decade; a global portfolio was less impacted.",
    },
    {
      type: "text",
      heading: "Correlation",
      content:
        "Correlation measures how two assets move together (-1 to +1). +1 = perfect lockstep (both rise and fall together). -1 = opposite (one rises when the other falls). 0 = no linear relationship. Negative correlation is rare but valuable (e.g. stocks vs bonds sometimes—flight to safety). Low positive correlation (e.g. 0.3) still helps—not everything moves together.\n\nCorrelation is not constant—in stress (2008, 2020), many assets fall together (correlation rises). So diversification works in 'normal' times but can break in crashes. Still, a diversified portfolio is usually less volatile than a concentrated one. Don't expect diversification to work perfectly when you need it most.",
    },
    {
      type: "analogy",
      heading: "The Restaurant Analogy",
      content:
        "Think of diversification like owning shares in different restaurants. If you own only a steakhouse and people stop eating meat, you're in trouble. Own a steakhouse, a salad bar, and a bakery—different customer bases and trends—and one bad sector hurts less. Correlation is how often the restaurants have good or bad months together. Low correlation = they don't all suffer at once. But in a recession, everyone cuts dining—correlation rises. Diversification helps, but it's not a magic shield.",
    },
    {
      type: "text",
      heading: "Treasury Bills, Notes, and Bonds",
      content:
        "Treasury Bills (T-Bills) are short-term US government debt with maturities of 4, 8, 13, 26, or 52 weeks. They're sold at a discount to face value—you pay less than $100, receive $100 at maturity. The difference is your interest. No coupon payments; considered risk-free. Treasury Notes (T-Notes) have maturities of 2, 3, 5, 7, or 10 years; Treasury Bonds (T-Bonds) have 20 or 30 years. They pay a fixed coupon every six months and return face value at maturity. Prices move inversely to interest rates: when rates rise, bond prices fall. Longer maturities are more sensitive. All are backed by the US government.",
    },
    {
      type: "text",
      heading: "TIPS (Treasury Inflation-Protected Securities)",
      content:
        "TIPS adjust their principal for inflation (CPI). If inflation rises, your principal increases; at maturity you get the greater of adjusted principal or original. TIPS pay a fixed coupon on the adjusted principal—so your interest payments rise with inflation. They protect purchasing power when inflation surprises to the upside. When inflation expectations rise, TIPS outperform nominal Treasuries. Yields on TIPS are often lower than nominal Treasuries because of the inflation adjustment—the difference (breakeven inflation) reflects market inflation expectations. Useful for retirement portfolios and inflation hedging.",
    },
    {
      type: "text",
      heading: "Corporate Bonds and Municipal Bonds",
      content:
        "Corporate bonds are issued by companies to raise debt capital. They pay a coupon and return principal at maturity. Investment-grade bonds (rated BBB or higher) have lower default risk and lower yields; high-yield (junk) bonds offer higher yields but higher default risk. Corporate bond prices are sensitive to interest rates and the issuer's credit quality. Municipal bonds are issued by state and local governments for schools, roads, utilities. Interest is often exempt from federal income tax—and from state tax if you live in the issuing state. General obligation bonds are backed by taxing power; revenue bonds by project revenue. Munis appeal to high-income investors in high tax brackets.",
    },
    {
      type: "text",
      heading: "Zero-Coupon Bonds, Convertible Bonds, and Commercial Paper",
      content:
        "Zero-coupon bonds pay no interest—they're sold at a discount and mature at face value. The difference is your return. Zeros have high duration (price sensitivity to rates) because all cash flow is at maturity. Treasuries can be stripped into zeros (STRIPS). Convertible bonds can be converted into the issuer's stock at a set ratio. They offer bond-like income with equity upside—if the stock rises, the convertible gains; if it falls, you still have the bond floor. Commercial paper is short-term unsecured debt (typically 1–270 days) issued by corporations and financial institutions for working capital. Very short maturity; low default risk for top issuers. Retail access is usually through money market funds that hold CP.",
    },
    {
      type: "text",
      heading: "Equity REITs and Mortgage REITs",
      content:
        "Equity REITs own and operate income-producing real estate—offices, malls, apartments, warehouses, hospitals. They earn rent from tenants and pass most of it to shareholders as dividends. REITs must distribute at least 90% of taxable income to qualify for favorable tax treatment. Equity REITs are the most common type; performance depends on property type, location, and interest rates. Mortgage REITs (mREITs) don't own property—they invest in mortgages and mortgage-backed securities. They borrow at short-term rates and lend or invest at longer-term rates, earning the spread. mREITs are highly sensitive to interest rates: when rates rise, their cost of funding can increase faster than asset yields. mREITs typically offer higher yields but with more volatility and rate risk.",
    },
    {
      type: "text",
      heading: "Hybrid REITs",
      content:
        "Hybrid REITs combine equity and mortgage strategies—they own some properties and also invest in mortgages or MBS. This diversifies revenue: rental income from owned real estate plus interest income from mortgage investments. Hybrid REITs aim to balance the stability of equity REITs with the yield potential of mortgage REITs. They're less common than pure equity or mortgage REITs. Risk and return profile falls between the two. If you want mixed exposure, hybrids offer it—but understand the allocation (how much equity vs mortgage) and how that affects sensitivity to rates and real estate cycles.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Diversification does not eliminate risk. In 2008 and 2020, stocks and many assets fell together. 'Diworsification'—adding too many similar assets—doesn't help. Adding 50 tech stocks isn't real diversification; add different asset classes (bonds, commodities, international). Also, over-diversification can dilute returns—you end up with index-like returns but with more complexity and cost.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Diversification and correlation.",
      component: "ConceptCheck",
      props: { question: "Why diversify?", reveal: "To reduce risk without giving up too much return. Uncorrelated or low-correlation assets smooth the portfolio. Don't put all eggs in one basket." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Diversify across assets and asset classes. Correlation drives benefit. Diversification reduces volatility but doesn't eliminate risk. Quality of diversification matters more than quantity." },
  ], true),
  createLesson("rebalancing", 3, "Rebalancing", "rebalancing", "18 min", ["Why rebalance", "How often and how", "Tax and cost considerations"], [
    {
      type: "text",
      heading: "Why Rebalance?",
      content:
        "Over time, weights drift. If stocks outperform bonds, your stock allocation grows and you're taking more risk than you intended. Example: start with 60/40 stocks/bonds. After a strong bull market, stocks double and bonds stay flat—your portfolio might be 75/25. You're now taking more risk than you planned.\n\nRebalancing means bringing the portfolio back to target weights—sell what's overweight (stocks), buy what's underweight (bonds). That forces a discipline: buy relatively cheap (underweight) and sell relatively expensive (overweight). It also keeps risk in line with your plan. Without rebalancing, a 60/40 portfolio can become 80/20 after a long bull market—just when a correction might hurt most.",
    },
    {
      type: "text",
      heading: "How to Rebalance",
      content:
        "Frequency: annually, quarterly, or when weights drift by a threshold (e.g. 5%). Annual rebalancing is simple and low-cost. Threshold rebalancing triggers only when an asset is meaningfully off target—e.g. if stocks drift to 70% in a 60/40 portfolio, rebalance back to 60%. This can reduce unnecessary trading.\n\nConsider taxes: selling in taxable accounts triggers capital gains. Use new cash or dividends to rebalance when possible—add to underweight assets instead of selling overweight. In tax-advantaged accounts (IRA, 401k), rebalancing has no immediate tax cost. Don't over-rebalance—transaction costs and taxes matter. Rebalancing more than once or twice a year rarely adds value.",
    },
    {
      type: "analogy",
      heading: "The Garden Analogy",
      content:
        "Think of rebalancing like pruning a garden. Some plants grow faster than others—soon one type takes over. Pruning (selling overweight) and planting more of the slow growers (buying underweight) keeps the garden balanced. You're not guessing which plant will do best—you're maintaining your intended mix. The garden (portfolio) stays healthy and matches your plan. Rebalancing is disciplined maintenance, not market timing.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "In taxable accounts, rebalance with new contributions when possible—direct deposits to underweight assets. Use tax-loss harvesting: sell losers to offset gains, then reinvest in similar (not identical) assets to maintain exposure. In IRAs/401ks, rebalance freely—no tax impact. Consider a 5% threshold: only rebalance when an asset is 5+ percentage points off target.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Rebalancing restores targets.",
      component: "ConceptCheck",
      props: { question: "Why rebalance?", reveal: "Weights drift as assets perform differently. Rebalancing brings the portfolio back to target and can discipline buying low/selling high. Keeps risk in check." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Rebalancing = restore target weights. Controls risk and can add discipline. Use frequency or threshold; mind taxes and costs. New contributions can do some of the work." },
  ], true),
  createLesson("portfolio-summary", 4, "Portfolio Theory: Summary", "portfolio-summary", "12 min", ["Recap MPT, diversification, rebalancing", "Next steps"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "MPT frames portfolios in risk and return; the efficient frontier is the best return per risk. Diversification across uncorrelated assets reduces volatility—across asset classes and geographies. Rebalancing keeps weights and risk on target; use frequency or threshold, and mind taxes and costs.\n\nUse these ideas for long-term allocation—not for day trading, but for building and maintaining a portfolio. A simple 60/40 or 70/30 stocks/bonds, rebalanced annually, beats most complex strategies for most investors. Consistency and discipline matter more than perfection.",
    },
    {
      type: "text",
      heading: "Structured Notes",
      content:
        "Structured notes are debt instruments whose payoffs are linked to the performance of an underlying asset—a stock, index, commodity, or basket. The issuer (usually a bank) promises a return based on a formula. Example: you get 100% of the S&P 500 return up to a cap, and principal back if the index doesn't fall more than 20%. You have credit risk: if the issuer fails, you can lose principal. Complexity is high—read the prospectus. Fees and spreads are often embedded. Structured notes can offer principal protection, participation in upside, or exotic payoffs. Only suitable for sophisticated investors who understand the payoff and issuer risk.",
    },
    {
      type: "text",
      heading: "Capital-Protected Notes and Reverse Convertibles",
      content:
        "Capital-protected notes (principal-protected notes) guarantee return of principal at maturity while offering participation in an underlying's upside. The structure typically combines a zero-coupon bond with an option or derivative. The catch: protection depends on the issuer's credit. Reverse convertibles pay a high coupon but at maturity may convert into the underlying stock—typically when the stock has fallen. If you're converted into stock, you could receive shares worth less than your initial investment. Reverse convertibles are effectively a bond plus a short put. Often marketed to retirees seeking income—but the structure is complex and risky. Only for investors who fully understand conversion scenarios and credit risk.",
    },
    {
      type: "preview",
      heading: "Intermarket Analysis (Preview)",
      content:
        "In the Intermarket module, we'll connect portfolio theory to the real world—how stocks, bonds, commodities, and currencies relate. Understanding these relationships helps you interpret why your portfolio moves the way it does and how to adjust allocation based on market regime. Portfolio theory gives you the framework; intermarket analysis gives you the context.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Portfolio discipline.",
      component: "ConceptCheck",
      props: { question: "What does rebalancing do?", reveal: "Brings portfolio weights back to target (e.g. 60/40). Sell overweight, buy underweight. Controls risk and can enforce buy-low/sell-high." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "MPT + diversification + rebalancing = foundation for long-term portfolio management. Keep it simple; stay disciplined." },
  ], true),
];
