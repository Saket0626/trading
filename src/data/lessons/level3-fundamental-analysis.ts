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
  moduleId: "fundamental-analysis",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const fundamentalAnalysisLessons: Lesson[] = [
  createLesson("financial-statements", 1, "Income Statement, Balance Sheet, and Cash Flow", "financial-statements", "20 min", ["Read the three main statements", "Understand revenue, profit, assets, and cash flow"], [
    { type: "text", heading: "Why Fundamentals Matter", content: "Imagine you're buying a share of a lemonade stand. You'd want to know: Does it make money? What does it own? Does it have debt? Can it pay its bills? Fundamental analysis is the same for companies. It uses financial statements to judge whether a business is healthy, growing, and fairly priced. Long-term investors rely heavily on fundamentals. Short-term traders use them for context—e.g. avoiding a stock before bad earnings or trading the reaction after a report. Either way, knowing how to read the basics helps you avoid obvious traps and spot opportunities." },
    { type: "text", heading: "The Income Statement", content: "The income statement (or P&L—profit and loss) shows revenue, expenses, and profit over a period (quarter or year). Revenue is what the company earns from selling goods or services. Subtract cost of goods sold (COGS) to get gross profit. Subtract operating expenses (salaries, rent, marketing, etc.) to get operating income. Then subtract interest and taxes to get net income (the 'bottom line'). Earnings per share (EPS) = net income ÷ number of shares. When you hear 'the company beat earnings,' it means reported EPS was higher than analysts expected. Revenue growth and profit margins (gross, operating, net) tell you if the business is improving." },
    { type: "text", heading: "The Balance Sheet", content: "The balance sheet is a snapshot at a point in time: what the company owns (assets), what it owes (liabilities), and what's left for shareholders (equity). Assets = Liabilities + Equity. Current assets (cash, receivables, inventory) can be turned into cash within a year. Current liabilities (payables, short-term debt) are due within a year. If current assets are much larger than current liabilities, the company has liquidity. Long-term debt and equity fund the business. Book value is total assets minus total liabilities; it's the theoretical value if the company were liquidated. Compare market cap (share price × shares) to book value to see if the market is valuing the company above or below its stated book value." },
    { type: "text", heading: "The Cash Flow Statement", content: "Profit on the income statement isn't always cash—companies can have revenue booked but not yet collected, or non-cash expenses like depreciation. The cash flow statement shows actual cash in and out. It's split into operating (day-to-day business), investing (buying/selling assets, acquisitions), and financing (debt, dividends, share buybacks). Operating cash flow is key: a company can report profit but burn cash (e.g. heavy receivables or inventory), which is a red flag. Strong, positive operating cash flow supports dividends and growth. Many pros look at free cash flow (operating cash flow minus capital expenditures) as a measure of how much cash the business truly generates." },
    { type: "warning", heading: "Common Mistake", content: "Focusing only on net income and ignoring cash flow. A company can show profit while running out of cash. Always check operating and free cash flow for sustainability." },
    { type: "interactive", heading: "Check Your Understanding", content: "The three statements answer different questions.", component: "ConceptCheck", props: { question: "Which statement tells you whether the company actually generated cash from its operations over the period?", reveal: "The cash flow statement. The income statement shows profit (which can include non-cash items); the cash flow statement shows real cash in and out, including operating cash flow." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Income statement = revenue, expenses, profit. Balance sheet = assets, liabilities, equity. Cash flow = real cash in/out. Use all three to judge financial health." },
  ], true),
  createLesson("key-ratios", 2, "P/E, P/B, ROE, EV/EBITDA, and Other Key Ratios", "key-ratios", "24 min", ["Use P/E, P/B, ROE, EV/EBITDA, and margins", "Compare companies and spot red flags"], [
    { type: "text", heading: "Valuation Ratios", content: "Ratios let you compare companies of different sizes and see if a stock is cheap or expensive relative to earnings, assets, or growth. Price-to-earnings (P/E) = share price ÷ earnings per share. It answers: how many years of current earnings are you paying for? A P/E of 20 means you're paying $20 for every $1 of annual earnings. High P/E can mean the market expects strong growth, or that the stock is overvalued. Low P/E can mean a bargain or that the market expects trouble. Compare P/E to the company's history and to peers in the same sector. Price-to-book (P/B) = market cap ÷ book value. Below 1 can mean the market values the company below its stated assets (sometimes a value opportunity; sometimes the assets are overstated or low-quality). PEG (P/E to growth) = P/E ÷ expected annual earnings growth rate. It adjusts for growth: a high P/E may be justified if growth is high. PEG below 1 is often considered attractive. EV/EBITDA (enterprise value ÷ earnings before interest, taxes, depreciation, amortization) is a professional's metric: it values the whole business (debt + equity minus cash) against operating profit before interest and depreciation. It's useful when comparing companies with different debt loads or tax situations—EV/EBITDA strips those out. Lower EV/EBITDA often suggests cheaper; compare to peers." },
    { type: "text", heading: "Profitability and Financial Health", content: "Return on equity (ROE) = net income ÷ shareholders' equity. It shows how well the company uses equity to generate profit. ROE of 15–20% or higher is often strong; compare to peers. Debt-to-equity = total debt ÷ equity. High ratio means more leverage—more risk but also more amplification of returns. Current ratio = current assets ÷ current liabilities. Above 1 means the company can cover short-term obligations; well above 1 suggests liquidity. EPS (earnings per share) = net income ÷ shares outstanding. It's the profit attributable to each share. Revenue growth (year over year) and profit margins (gross, operating, net) show whether the business is expanding and whether it's keeping more of each dollar of sales as profit." },
    { type: "example", heading: "Quick Example", content: "Company A: P/E 25, ROE 18%, revenue growth 10%. Company B: P/E 12, ROE 8%, revenue growth 2%. A looks 'expensive' on P/E but has stronger profitability and growth. B looks 'cheap' but may be cheap for a reason. Ratios are starting points—dig into why the numbers look the way they do." },
    { type: "warning", heading: "Common Mistake", content: "Using one ratio in isolation. A low P/E can hide high debt or declining earnings. Combine valuation (P/E, P/B), profitability (ROE, margins), and growth to get a fuller picture." },
    { type: "interactive", heading: "Think It Through", content: "P/E and growth.", component: "ConceptCheck", props: { question: "Why might a company have a very high P/E and still be considered fairly valued?", reveal: "If earnings are expected to grow very fast, the market may price in that growth. High growth can justify a high P/E; that's why some use PEG (P/E ÷ growth) to compare." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "P/E and P/B for valuation; ROE and margins for profitability; debt and current ratio for health. Compare to history and peers—no single number tells the whole story." },
  ], true),
  createLesson("earnings-trading", 3, "Trading Around Earnings Reports", "earnings-trading", "18 min", ["Understand when and how earnings move price", "Manage risk around earnings"], [
    { type: "text", heading: "When Earnings Are Released", content: "Public companies report earnings quarterly. In the US, earnings season is roughly a few weeks after each quarter ends (e.g. January, April, July, October). Companies announce a date and often hold an earnings call where management discusses results and gives guidance (forward-looking expectations). The actual report—revenue, EPS, and commentary—can cause a large move in the stock in minutes. Beats (actual > estimate) often lead to a rally; misses often lead to a drop. But the reaction also depends on guidance: a beat with lowered guidance can still sell off. So earnings trading is event-driven and volatile." },
    { type: "text", heading: "Risks of Trading Earnings", content: "Volatility: the stock can gap up or down 5–20% or more in after-hours or the next open. Slippage: in fast markets your fill may be much worse than expected. Gaps: if you're long and the stock gaps down through your stop, you can lose more than you planned. Surprises: even 'obvious' beats or misses sometimes reverse (e.g. sell the news). Many professional day traders avoid holding through earnings or they use options to define risk. If you do trade around earnings, use smaller size, wider stops, or defined-risk strategies, and never risk more than you can afford to lose on one event." },
    { type: "text", heading: "Strategies Around Earnings", content: "Some traders avoid earnings entirely and focus on technicals. Others trade the reaction: wait for the initial spike to settle, then look for a pullback and continuation or reversal with clear levels and volume. Another approach is to trade the run-up (buy before earnings hoping for a beat)—riskier because a miss can cause a big drop. Earnings plays can also be done with options (e.g. straddles if you expect a big move but don't know direction). Whatever you do, have a plan: entry, stop, target, and max loss before the event. And respect the stats: most retail traders lose on earnings; the edge is often with those who wait for the dust to settle and trade the resulting structure." },
    { type: "pro-tip", heading: "Pro Tip", content: "Don't hold a large position through earnings unless you're an investor and comfortable with a possible 10–20% move. Day traders often flatten before the report or use much smaller size." },
    { type: "interactive", heading: "Check Your Understanding", content: "Earnings and risk.", component: "ConceptCheck", props: { question: "Why is it risky to hold a full-sized position through an earnings report?", reveal: "The stock can gap up or down 5–20%+ on the news. Your stop may not get filled at your price (slippage or gap), so you can lose more than your planned risk. Many traders reduce size or avoid holding through the event." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Earnings cause big, fast moves. Manage risk: smaller size, wider stops, or avoid holding through the report. Trade the reaction only if you have a clear plan." },
  ], true),
  createLesson("news-trading", 4, "Reading News and Trading the Impact", "news-trading", "25 min", ["Interpret news for stock impact", "Anticipate market reactions", "Avoid traps and false signals"], [
    {
      type: "text",
      heading: "News Drives Price—But Not Always Obvious",
      content:
        "News—earnings, Fed, economic data, geopolitics, company-specific—can move stocks sharply. The direction isn't always intuitive. A 'good' jobs report can send stocks down if it implies the Fed will stay hawkish. A 'bad' GDP number can lift stocks if it means more stimulus. Your job is to think through the chain: What does this news imply? How will institutions and algorithms react? Which sectors or stocks benefit or suffer? Then: Does price action confirm or contradict that story?",
    },
    {
      type: "analogy",
      heading: "Headline vs Reality",
      content:
        "Headlines are the first draft; price is the final edit. The market digests news in seconds—institutions and algorithms react before you finish reading. By the time you act on the headline, the initial move may be done. Your edge is in interpreting what the news implies, forming a view, and then trading the reaction—whether price confirms or contradicts your view. Don't chase the headline; trade the structure that forms after it.",
    },
    {
      type: "text",
      heading: "Fed and Rates",
      content:
        "Fed news is macro-critical. Hawkish (rates higher for longer, tough on inflation) → pressure on long-duration growth, potential support for financials and dollar. Dovish (cuts coming, growth prioritized) → support for growth stocks, bonds, risk assets. Watch the dot plot, language ('data dependent,' 'patient'), and surprises vs expectations. Often the market has priced in a certain outcome—the surprise vs consensus matters more than the headline. After a decision, check: did stocks, bonds, and dollar move as you'd expect? If not, the market is telling you something different.",
    },
    {
      type: "text",
      heading: "Economic Data",
      content:
        "Jobs, CPI, GDP, retail sales, PMI—each has implications. Strong jobs + hot CPI = hawkish Fed = potential stock pressure. Weak jobs + cool CPI = dovish Fed = potential stock support. But context matters: sometimes 'bad' data is already expected and priced in; the beat/miss vs estimate drives the move. Sector impact: strong consumer data can lift retail, travel; weak data can hurt cyclicals. PMI and industrial data affect materials, industrials. Build a simple framework: strong data → Fed hawkish? Weak data → Fed dovish? Then map to sectors.",
    },
    {
      type: "text",
      heading: "Company-Specific News",
      content:
        "M&A, product launches, recalls, lawsuits, management changes, guidance—each affects the stock. M&A: acquirer often dips (paying a premium), target rallies. Product recall: company and sometimes sector hit. Positive guidance: stock can gap up; negative can gap down. Read beyond the headline: Is it new information or old news repackaged? Has the stock already moved? A 'positive' story after a 20% run may be priced in. Compare the news to what was expected (analyst estimates, prior guidance) to gauge surprise.",
    },
    {
      type: "text",
      heading: "Geopolitics",
      content:
        "Geopolitical shocks—tariffs, conflict, supply-chain disruption—often trigger risk-off: flight to safety (bonds, yen, dollar), pressure on risk assets. Sector impact varies: defense may rally on conflict; airlines and travel may sell off. Energy can spike on supply fears. Don't assume 'bad news = down'—map the chain: Who benefits? Who suffers? Then watch price. Geopolitical events are often unpredictable; if you're wrong, cut quickly.",
    },
    {
      type: "text",
      heading: "How to Read and React",
      content:
        "Don't trade the headline—trade the reaction. Wait for the initial spike to settle (often 5–15 minutes). See if price holds the move or fades. A stock that gaps up on news but quickly sells off is telling you the news wasn't that good or was priced in. One that holds the gap and builds is confirming. Use volume: high volume on the move suggests conviction. Also compare the stock to its sector and the broad market—is it moving alone (stock-specific) or with everything (macro)? That tells you what's driving the move.",
    },
    {
      type: "example",
      heading: "Example: Fed Cut, Priced In",
      content:
        "The Fed cuts 25bps, exactly as expected. Stocks gap up at the open, then fade in the first hour—selling into strength. Interpretation: The cut was priced in; the gap was the reaction, and profit-taking is winning. Don't chase the gap. Wait for a pullback: if support holds and buyers step in, that's your entry. If price keeps fading, the market is saying the cut wasn't enough or something else matters more. Trade the structure that forms, not the headline.",
    },
    {
      type: "warning",
      heading: "Common Traps",
      content:
        "Avoid trading the first tick—algorithms and pros react in milliseconds; you'll often get filled at the worst price. Avoid assuming 'good news = up' and 'bad news = down'—markets discount the future and often reverse on 'obvious' news. Avoid holding through major scheduled news (Fed, earnings) without a plan. And avoid chasing a stock that's already moved 10% on the news—the edge is often gone. Wait for a pullback and structure, or skip.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use an economic calendar and earnings calendar. Know what's coming each week. Before the open, scan headlines from trusted sources (Reuters, Bloomberg, Fed, company IR). Form a view: What would bullish vs bearish news look like? What's the base case? Then watch price—does it confirm or contradict? Trade the confirmation, not the guess.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "News and reaction.",
      component: "ConceptCheck",
      props: { question: "Why might a 'good' jobs report cause stocks to sell off?", reveal: "If jobs are too strong, the Fed may keep rates higher for longer to fight inflation. Markets discount future policy—hawkish Fed = pressure on stock valuations." },
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Chasing the move.",
      component: "ConceptCheck",
      props: { question: "A stock has already rallied 12% on positive news before you see it. What should you do?", reveal: "The edge is often gone—the move is priced in. Chasing usually means buying at the worst level. Wait for a pullback and see if support holds, or skip. Better to miss a move than to buy the top." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "News drives price via implications (Fed, growth, sector). Think through the chain, then trade the reaction—not the headline. Use calendars, wait for structure, avoid chasing." },
  ], true),
  createLesson("fundamentals-summary", 5, "Fundamental Analysis: Summary", "fundamentals-summary", "10 min", ["When to use fundamentals vs technicals", "Recap key tools"], [
    { type: "text", heading: "When Fundamentals Matter Most", content: "For long-term investing, fundamentals are central: you're buying a business, so revenue, profit, cash flow, and balance sheet health matter. For swing trading (days to weeks), fundamentals can filter which stocks to trade (e.g. only longs in companies with strong earnings growth) and help you avoid names with looming bad news. Reading news and trading the reaction—Fed, economic data, company-specific, geopolitics—helps you anticipate moves and avoid headline traps; it's part of the fundamentals toolkit for active traders. For day trading, fundamentals matter less for each tick—price action and order flow dominate. But knowing when earnings are, whether the company is generally healthy, and how to interpret news still helps you avoid holding through a report or chasing a move that's already priced in. Use fundamentals to set the stage; use technicals and risk management to time entries and exits." },
    { type: "text", heading: "Recap", content: "You now know the three statements (income, balance sheet, cash flow), key ratios (P/E, P/B, ROE, margins, debt), how earnings reports work and why they're risky to trade through, and how to read news and trade the reaction—interpreting Fed, economic data, company-specific news, and geopolitics, then waiting for price to confirm before entering. Combine this with technical analysis and strict risk rules. Even the best fundamentals don't guarantee short-term price movement—so never bet the farm on one report or one ratio." },
    { type: "interactive", heading: "Final Check", content: "Fundamentals and time horizon.", component: "ConceptCheck", props: { question: "For a day trader, what is the main use of fundamental analysis?", reveal: "Context: knowing earnings dates to avoid holding through them, and filtering which names are generally healthy vs distressed. Entry and exit timing are still driven by technicals and risk management." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Fundamentals = financial health, valuation, and news interpretation. Use for investing and swing filters; use technicals and risk management for timing. Respect earnings volatility; trade the reaction, not the headline." },
  ], true),
];
