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
  level: 2,
  moduleId: "markets-stocks",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const stocksDeepDiveLessons: Lesson[] = [
  createLesson(
    "stocks-how-it-works",
    1,
    "How the Stock Market Works",
    "stocks-how-it-works",
    "12 min",
    ["Exchanges and listing", "How orders become trades"],
    [
      {
        type: "text",
        heading: "Exchanges: Where Stocks Trade",
        content:
          "Stocks trade on exchanges—the New York Stock Exchange (NYSE) and Nasdaq are the two main US exchanges. Companies list their shares on an exchange after meeting listing requirements (minimum market cap, financials, governance). Once listed, buyers and sellers submit orders; the exchange matches them and reports the price and volume. Think of it like a regulated auction: continuous bidding and offering during market hours.",
      },
      {
        type: "text",
        heading: "Listing Requirements",
        content:
          "To list on the NYSE or Nasdaq, a company must meet criteria such as minimum share price, number of shareholders, and financial thresholds. These requirements help ensure a baseline of liquidity and disclosure. When a company fails to meet them, it can be delisted—so listing is a quality filter, not a guarantee of success.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Stocks trade on regulated exchanges (e.g. NYSE, Nasdaq). Listing requirements set a bar for size and transparency. The exchange matches buy and sell orders and reports trades.",
      },
    ]
  ),
  createLesson(
    "stocks-ownership",
    2,
    "What It Means to Own a Stock",
    "stocks-ownership",
    "10 min",
    ["Ownership and voting", "Rights of shareholders"],
    [
      {
        type: "text",
        heading: "You Own a Piece of the Company",
        content:
          "When you buy a share of stock, you own a fractional piece of that company. One share = one unit of ownership. If the company has 1 million shares outstanding and you own 1,000, you own 0.1% of the company. That entitles you to a share of profits (via dividends, if paid) and typically to vote on major decisions (e.g. board elections, mergers) at the annual meeting.",
      },
      {
        type: "text",
        heading: "Voting Rights",
        content:
          "Most common stock carries one vote per share. Some companies have dual-class structures (e.g. founders have shares with more votes). As a small shareholder you rarely affect outcomes, but the right exists. Preferred stock often has no or limited voting rights but may have priority for dividends.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Owning stock = owning a share of the company. You may receive dividends and usually get voting rights. Your return comes from price appreciation and/or dividends.",
      },
    ]
  ),
  createLesson(
    "stocks-market-cap",
    3,
    "Market Cap: Small, Mid, and Large",
    "stocks-market-cap",
    "10 min",
    ["What market cap is", "Why it matters for risk and liquidity"],
    [
      {
        type: "text",
        heading: "What Is Market Cap?",
        content:
          "Market cap (market capitalization) = share price × number of shares outstanding. It's the total market value of the company's equity. Example: $150 per share × 1 billion shares = $150 billion market cap. It's not the same as revenue or profit—it's what the market thinks the company is worth.",
      },
      {
        type: "text",
        heading: "Small, Mid, and Large Cap",
        content:
          "Large cap: usually $10B+ (e.g. Apple, Microsoft)—typically more liquid and less volatile. Mid cap: roughly $2B–$10B—mix of growth and stability. Small cap: under about $2B—often more volatile, less liquid, but can offer higher growth. Mega cap is sometimes used for the very largest (e.g. over $200B).",
      },
      {
        type: "example",
        heading: "Why It Matters",
        content:
          "Large caps tend to have tighter spreads and more volume, so you can enter and exit easily. Small caps can gap or move sharply on news and may have wider spreads. Beginners often start with large or mid cap names for easier execution.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Market cap = price × shares outstanding. Large cap = generally more liquid and stable; small cap = more volatile and often less liquid.",
      },
    ]
  ),
  createLesson(
    "stocks-sectors",
    4,
    "Stock Sectors",
    "stocks-sectors",
    "10 min",
    ["Major sectors", "Why sector matters"],
    [
      {
        type: "text",
        heading: "The Main Sectors",
        content:
          "Stocks are grouped into sectors: Technology, Healthcare, Financials, Consumer Discretionary, Consumer Staples, Industrials, Energy, Materials, Real Estate, and Utilities. Each sector reacts differently to the economy and interest rates. Tech and growth often lead in risk-on environments; utilities and staples can be more defensive.",
      },
      {
        type: "text",
        heading: "Why Sector Matters",
        content:
          "Sector rotation—money moving from one sector to another—drives a lot of relative performance. In a recession, defensive sectors (staples, utilities) may hold up better. In a strong economy, cyclicals (industrials, discretionary) may lead. Diversifying across sectors reduces concentration risk.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Sectors group companies by business type. Different sectors perform differently across the economic cycle; diversification across sectors can smooth returns.",
      },
    ]
  ),
  createLesson(
    "stocks-blue-chip-penny",
    5,
    "Blue Chip vs Penny Stocks",
    "stocks-blue-chip-penny",
    "10 min",
    ["Define blue chip and penny", "Risk differences"],
    [
      {
        type: "text",
        heading: "Blue Chip Stocks",
        content:
          "Blue chips are large, well-established, financially strong companies—household names like Coca-Cola, Johnson & Johnson, or Procter & Gamble. They usually have a long history of profits and dividends, and are considered lower risk than smaller or unproven companies. They're often core holdings for long-term investors.",
      },
      {
        type: "text",
        heading: "Penny Stocks",
        content:
          "Penny stocks are typically low-priced (often under $5), small-cap or micro-cap companies. They trade on major exchanges or over-the-counter (OTC). They're highly speculative: thin liquidity, wide spreads, and vulnerable to manipulation and fraud. Many beginners are attracted by the low price per share, but the risk of total loss is high.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Thinking a $2 stock is 'cheaper' than a $200 stock is wrong. What matters is total value (price × shares) and the company's quality. Penny stocks are not a shortcut to riches—they're where many people lose money.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Blue chips = large, stable, lower risk. Penny stocks = low price, high risk, often illiquid. Prefer blue chips when building a foundation.",
      },
    ]
  ),
  createLesson(
    "stocks-growth-value",
    6,
    "Growth vs Value Stocks",
    "stocks-growth-value",
    "10 min",
    ["Growth and value defined", "When each tends to work"],
    [
      {
        type: "text",
        heading: "Growth Stocks",
        content:
          "Growth companies are expected to grow earnings and revenue quickly. They often reinvest profits instead of paying dividends. Examples: many tech and biotech names. They tend to have higher P/E ratios because the market prices in future growth. When growth delivers, returns can be strong; when it doesn't, they can fall hard.",
      },
      {
        type: "text",
        heading: "Value Stocks",
        content:
          "Value stocks are those that appear cheap relative to earnings, book value, or cash flow. The idea is the market has undervalued them. They often pay dividends and are in more mature industries. Value tends to do well when interest rates or inflation expectations rise, or when the market corrects and investors seek cheaper names.",
      },
      {
        type: "text",
        heading: "Why It Matters",
        content:
          "Growth and value can rotate in and out of favor. Diversifying across both can smooth your equity exposure. As a trader, knowing whether the market is favoring growth or value helps you focus on the right names.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Growth = high expected growth, often high P/E. Value = cheap on metrics, often dividends. Both have a place; they tend to rotate over time.",
      },
    ]
  ),
  createLesson(
    "stocks-dividends",
    7,
    "Dividend Stocks",
    "stocks-dividends",
    "10 min",
    ["What dividends are", "Passive income and yield"],
    [
      {
        type: "text",
        heading: "What Are Dividends?",
        content:
          "Dividends are cash (or sometimes stock) payments that a company distributes to shareholders from its profits. They're often paid quarterly. Not all companies pay them—growth companies often reinvest instead. Dividend yield = annual dividends per share ÷ share price (e.g. $4 per year ÷ $100 = 4% yield).",
      },
      {
        type: "text",
        heading: "Passive Income",
        content:
          "Dividend stocks can provide income without selling shares. Retirees and income-focused investors often build portfolios of dividend payers. High yield can be attractive but be careful: a very high yield sometimes signals the market expects a cut. Sustainable payout ratios and a history of raising dividends are better signs of quality.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Dividends = periodic payments to shareholders. Yield = annual dividends / price. They can provide income; sustainability matters more than yield alone.",
      },
    ]
  ),
  createLesson(
    "stocks-etfs",
    8,
    "ETFs vs Individual Stocks",
    "stocks-etfs",
    "12 min",
    ["What ETFs are", "When to use each"],
    [
      {
        type: "text",
        heading: "Individual Stocks",
        content:
          "When you buy a stock, you own shares in one company. Your return depends entirely on that company. You get diversification only by holding many stocks. Single-stock risk is high: one bad earnings report or scandal can hit you hard. Higher potential return, higher risk.",
      },
      {
        type: "text",
        heading: "ETFs (Exchange-Traded Funds)",
        content:
          "An ETF is a fund that holds a basket of securities (stocks, bonds, etc.) and trades on an exchange like a stock. One ETF might track the S&P 500, a sector, or a theme. You get instant diversification in one trade. Fees are usually low. You can buy and sell throughout the day. ETFs are ideal for broad exposure without picking individual names.",
      },
      {
        type: "text",
        heading: "When to Use Which",
        content:
          "Use ETFs for diversification and for tracking the market or a sector. Use individual stocks when you have a strong view on a specific company and accept the extra risk. Many investors combine both: core in ETFs, satellite positions in stocks.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Stocks = single company, higher concentration risk. ETFs = basket, diversification in one trade. Both have a place in a portfolio.",
      },
    ]
  ),
  createLesson(
    "stocks-index-funds",
    9,
    "Index Funds: S&P 500, Nasdaq 100",
    "stocks-index-funds",
    "10 min",
    ["What index funds track", "S&P 500 vs Nasdaq 100"],
    [
      {
        type: "text",
        heading: "What Is an Index Fund?",
        content:
          "An index fund (or index ETF) aims to match the performance of a market index by holding the same (or a representative sample of) securities. You don't try to beat the market—you get the market return minus a small fee. The S&P 500 and Nasdaq 100 are two of the most common US equity indexes.",
      },
      {
        type: "text",
        heading: "S&P 500 vs Nasdaq 100",
        content:
          "The S&P 500 includes about 500 large US companies across sectors—the broad US large-cap market. The Nasdaq 100 has about 100 of the largest non-financial companies listed on Nasdaq—heavy on tech (Apple, Microsoft, Amazon, etc.). So Nasdaq 100 is more tech-focused and can be more volatile. Many long-term investors use an S&P 500 index fund as a core holding.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Index funds track an index (e.g. S&P 500, Nasdaq 100). S&P 500 = broad large cap; Nasdaq 100 = tech-heavy. Low cost, diversified exposure.",
      },
    ]
  ),
  createLesson(
    "stocks-splits",
    10,
    "Stock Splits",
    "stocks-splits",
    "8 min",
    ["What a split is", "Why companies do it"],
    [
      {
        type: "text",
        heading: "What Is a Stock Split?",
        content:
          "In a stock split, a company increases the number of shares and adjusts the price so total value stays the same. A 2-for-1 split: you had 100 shares at $200, now you have 200 shares at $100. Your total position value is unchanged. Reverse splits do the opposite (fewer shares, higher price)—often used to avoid delisting.",
      },
      {
        type: "text",
        heading: "Why Companies Split",
        content:
          "Splits are often done to lower the share price so it feels more accessible to small investors. They don't change the company's value. When you're trading or analyzing, use adjusted prices (most platforms do this automatically) so historical charts are comparable before and after the split.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "A split changes share count and price; total value stays the same. Use adjusted prices when looking at history.",
      },
    ]
  ),
  createLesson(
    "stocks-pre-post",
    11,
    "Pre-Market and After-Hours Trading",
    "stocks-pre-post",
    "10 min",
    ["Extended hours", "Risks and liquidity"],
    [
      {
        type: "text",
        heading: "Extended Hours",
        content:
          "Regular US equity hours are 9:30 AM–4:00 PM Eastern. Pre-market typically runs from 4:00 AM to 9:30 AM, and after-hours from 4:00 PM to 8:00 PM (exact times depend on the broker). During these sessions, volume is lower and spreads are often wider. News (earnings, FDA, etc.) often hits in the pre-market or after-hours, so big gaps can occur.",
      },
      {
        type: "text",
        heading: "Risks",
        content:
          "Lower liquidity means your order might not fill or might fill at a worse price. Limit orders are especially important. Some retail platforms don't allow extended-hours trading or restrict it. If you trade around earnings, be aware that the bulk of the move can happen outside regular hours.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Pre-market and after-hours exist but have less liquidity and wider spreads. Use limit orders and understand the extra risk.",
      },
    ]
  ),
  createLesson(
    "stocks-finding",
    12,
    "Finding Stocks to Trade",
    "stocks-finding",
    "10 min",
    ["Screeners and scanners", "What to filter for"],
    [
      {
        type: "text",
        heading: "Screeners",
        content:
          "A stock screener lets you filter by criteria: market cap, sector, volume, price change, P/E, etc. You might look for large-cap tech with volume over 5 million and up more than 2% today. Free screeners exist on Yahoo Finance, Finviz, TradingView; brokers often include one. Screeners help you narrow the universe to names that fit your strategy.",
      },
      {
        type: "text",
        heading: "Scanners",
        content:
          "Scanners are more real-time: they highlight stocks meeting criteria as they happen (e.g. new 52-week high, unusual volume, gap up). Day traders use them to find movers. They're often built into trading platforms (ThinkOrSwim, TradeStation, etc.) or available as add-ons. Combine with your rules—don't chase every alert.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Screeners filter by fundamentals/technical criteria. Scanners highlight real-time movers. Use both to find candidates that fit your plan.",
      },
    ]
  ),
  createLesson(
    "stocks-hours",
    13,
    "Stock Market Hours",
    "stocks-hours",
    "6 min",
    ["US regular session", "Global sessions"],
    [
      {
        type: "text",
        heading: "US Regular Session",
        content:
          "US stock market regular trading hours are 9:30 AM to 4:00 PM Eastern Time, Monday through Friday (excluding holidays). The opening bell is 9:30 AM and the closing bell 4:00 PM. The first and last 15–30 minutes often have higher volume and volatility as positions are opened and closed.",
      },
      {
        type: "text",
        heading: "Why It Matters",
        content:
          "If you're day trading US stocks, you need to be available during these hours. If you're in a different time zone, convert carefully. Major news (Fed, employment, CPI) is often released at 8:30 AM ET, so the open can gap or trend on that news.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "US stocks trade 9:30 AM–4:00 PM Eastern. Plan your schedule and strategy around when liquidity and volatility are highest.",
      },
    ]
  ),
  createLesson(
    "stocks-beginners",
    14,
    "Best Stocks for Beginners",
    "stocks-beginners",
    "10 min",
    ["High volume, mid volatility", "Where to start"],
    [
      {
        type: "text",
        heading: "What to Look For",
        content:
          "Beginners are usually better off in liquid, well-known names: high average daily volume (e.g. millions of shares), mid to large cap, and moderate volatility. That way you get fair fills and aren't wiped out by one wild swing. Examples: large-cap tech (AAPL, MSFT), popular ETFs (SPY, QQQ), or other mega caps. Avoid illiquid penny stocks and complex instruments at first.",
      },
      {
        type: "text",
        heading: "Mid Volatility",
        content:
          "You want enough movement to learn and potentially profit, but not so much that one bad trade blows the account. Mid volatility means the stock moves meaningfully but isn't a roller coaster. Combine that with 1% risk per trade and a clear plan.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Start with high-volume, mid-to-large cap names and mid volatility. Build skills and confidence before moving to riskier or more complex trades.",
      },
    ],
    true
  ),
];
