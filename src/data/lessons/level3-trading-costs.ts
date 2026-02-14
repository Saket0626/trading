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
  level: 3,
  moduleId: "trading-costs",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const tradingCostsLessons: Lesson[] = [
  createLesson("costs-overview", 1, "Commissions and Fees", "costs-overview", "18 min", ["Types of costs", "How they add up"], [
    {
      type: "text",
      heading: "Why Costs Matter",
      content:
        "Every dollar you pay in commissions, spreads, or fees is a dollar that doesn't compound. For day traders who take many trades, costs can erase a thin edge. Compare broker structures: zero commission (e.g. Robinhood) vs per-trade vs per-share (e.g. Interactive Brokers). For forex, the spread (difference between bid and ask) is the main cost—major pairs often 1–3 pips, exotics much wider.\n\nOvernight fees (swap/rollover) apply to leveraged positions held past the close. Some brokers charge inactivity or withdrawal fees. Data fees (real-time quotes, Level 2) can add up. Add all of it and see what 100 trades per month really cost. Example: 100 trades × $1 round-trip = $100/month. On a $10k account, that's 1% per month—12% per year—just in commissions. Costs matter.",
    },
    {
      type: "text",
      heading: "Spreads and Overnight",
      content:
        "In forex, you typically buy at the ask and sell at the bid—the spread is the cost of the round trip. In stocks, the spread exists too (bid-ask); commission may be separate. For day traders who don't hold overnight, swap doesn't matter; for swing or carry trades it can be positive or negative. Factor costs into your break-even: if you need 33% win rate with 1:2 RR before costs, you might need 35%+ after costs.\n\nWide spreads eat into small moves. If you're scalping for 5 pips and the spread is 3 pips, you need price to move 8 pips in your favor just to break even on the round trip. Trade liquid instruments where the spread is a small fraction of your target move.",
    },
    {
      type: "analogy",
      heading: "The Toll Booth Analogy",
      content:
        "Every trade is like driving through a toll booth. Commission, spread, fees—you pay at the entrance and exit. The more you trade, the more tolls you pay. A strategy that nets 0.5% per trade before costs might lose money if the toll (cost per trade) is 0.3%. Make sure your edge is wider than the toll road.",
    },
    { type: "interactive", heading: "Check Your Understanding", content: "Costs reduce net returns.", component: "ConceptCheck", props: { question: "Why do costs matter especially for day traders?", reveal: "They take many trades; small costs per trade add up and can wipe out a thin edge. Compare total cost of 100 trades at different brokers." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Commissions, spreads, and fees reduce net returns. For active traders, total cost per trade and per month matters—shop and factor into break-even." },
  ], true),
  createLesson("tax-implications", 2, "Tax Implications", "tax-implications", "18 min", ["Short-term vs long-term", "Wash sale rule"], [
    {
      type: "text",
      heading: "Capital Gains",
      content:
        "In the US, short-term capital gains (hold one year or less) are taxed as ordinary income—same as your salary. Long-term (hold more than one year) get a lower rate. So day traders and swing traders usually pay the higher short-term rate. Keep records of every trade: date, price, size, and P&L. You'll need them for Form 8949 and Schedule D.\n\nSome active traders use mark-to-market accounting (election with the IRS) so they treat positions as sold at year-end and can deduct losses more freely—consult a tax pro. This can help with wash sales and loss deduction, but it's a significant election. Don't DIY your taxes if you're actively trading; the rules are complex.",
    },
    {
      type: "text",
      heading: "Wash Sale Rule",
      content:
        "If you sell a stock at a loss and buy the same or 'substantially identical' security within 30 days before or after, the loss may be disallowed for tax purposes (wash sale). The disallowed amount gets added to the cost basis of the new position. Day traders who flip in and out of the same name can trigger wash sales unintentionally. Track your trades; some brokers report wash sales on the 1099. Plan around it if you're harvesting losses.\n\nExample: You sell AAPL at a $500 loss, then buy AAPL again 10 days later. The $500 loss is disallowed; it's added to the cost basis of your new position. You haven't 'lost' the deduction forever—it's deferred until you close the new position without repurchasing within 30 days. But it can create nasty surprises at tax time if you're not tracking it.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Ignoring wash sales when trading the same stock repeatedly. If you're day trading AAPL and have 50 round trips, you might have dozens of wash sales. Your 1099 may show a much lower net loss than you expect. Keep records and consider a tax pro or software that tracks wash sales.",
    },
    { type: "interactive", heading: "Think It Through", content: "Wash sale disallows the loss.", component: "ConceptCheck", props: { question: "What is the wash sale rule?", reveal: "You can't deduct a loss if you repurchase the same or substantially identical security within 30 days. The disallowed loss is added to the cost basis of the new position." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Short-term gains = ordinary income. Keep records. Wash sale: no loss deduction if you rebuy within 30 days. Consider mark-to-market if very active." },
  ], true),
  createLesson("profitability", 3, "Break-Even and Realistic Profitability", "profitability", "18 min", ["Break-even win rate", "Realistic expectations"], [
    {
      type: "text",
      heading: "Break-Even Analysis",
      content:
        "With a 1:2 risk-reward (risk $1 to make $2), you need to win 1/(1+2) = 33.3% of trades to break even mathematically. Formula: break-even win rate = 1 / (1 + R). So 1:3 RR needs 25% wins. That's before costs—commissions and spread push the required win rate up.\n\nExample: 100 trades, 1:2 RR, 33 wins × 2 units = 66, 67 losses × 1 unit = 67, so you're roughly even; add $500 in costs and you need more wins or better RR. Always factor costs into your expectancy. If you're risking $100 per trade, $500 in costs = 5 trades' worth of profit. You need to win 5 extra trades (or have 5 fewer losses) just to cover costs. Run the numbers for your strategy and frequency.",
    },
    { type: "text", heading: "Realistic Expectations", content: "Professional traders often target 10–20% annual return; that's excellent. Beginners should focus on not losing money the first year while they learn. 'Get rich quick' in trading is a myth for the vast majority. Most retail traders lose—due to poor risk management, no plan, emotion, and overtrading. What separates winners: discipline, risk rules, patience, and realistic goals. Compounding small, consistent gains over years is the sustainable path." },
    { type: "warning", heading: "Common Mistake", content: "Believing you need 50%+ win rate to profit. With 1:2 RR, 34% wins is already profitable. Focus on RR and position sizing, not just win rate." },
    { type: "interactive", heading: "Check Your Understanding", content: "Break-even depends on risk-reward.", component: "ConceptCheck", props: { question: "What win rate do you need with a 1:2 risk-reward to break even?", reveal: "About 33.3%. Formula: 1/(1+R). So 1/(1+2)=1/3. With 1:3 RR you need only 25% wins to break even." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Break-even % = 1/(1+RR). Factor in costs. Aim for realistic returns; discipline and risk management matter more than win rate." },
  ], true),
  createLesson("costs-summary", 4, "Trading Costs: Summary", "costs-summary", "8 min", ["Recap costs and profitability"], [
    { type: "text", heading: "Recap", content: "Commissions, spreads, and fees reduce returns—factor them into break-even and expectancy. Taxes: short-term gains = ordinary income; watch wash sales. Realistic profitability: 10–20% annual is strong; beginners should prioritize capital preservation and learning." },
    { type: "interactive", heading: "Final Check", content: "Costs and edge.", component: "ConceptCheck", props: { question: "Why might a strategy that is profitable before costs lose money after?", reveal: "High frequency or wide spreads/commissions can erase a thin edge. Always model costs in your expectancy and break-even." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Costs and taxes matter. Use break-even formula; set realistic goals; protect capital first." },
  ], true),
];
