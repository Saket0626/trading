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
    "14 min",
    ["Exchanges and listing", "How orders become trades", "Order matching"],
    [
      {
        type: "text",
        heading: "Exchanges: Where Stocks Trade",
        content:
          "Stocks trade on exchanges—the New York Stock Exchange (NYSE) and Nasdaq are the two main US exchanges. Companies list their shares on an exchange after meeting listing requirements (minimum market cap, financials, governance). Once listed, buyers and sellers submit orders; the exchange matches them and reports the price and volume. Think of it like a regulated auction: continuous bidding and offering during market hours.\n\nThe NYSE is a physical floor (with electronic backup); Nasdaq is fully electronic. Both are regulated by the SEC. When you buy AAPL, your order goes to the exchange, gets matched with a seller's order, and the trade is reported. You never 'negotiate' directly—the exchange matches you with the best available price.",
      },
      {
        type: "text",
        heading: "Listing Requirements",
        content:
          "To list on the NYSE or Nasdaq, a company must meet criteria such as minimum share price, number of shareholders, and financial thresholds. These requirements help ensure a baseline of liquidity and disclosure. When a company fails to meet them, it can be delisted—so listing is a quality filter, not a guarantee of success.\n\nExample: Nasdaq typically requires at least $1 share price, 1.25 million publicly held shares, and financial reporting. Companies that fall below these can be delisted—they might move to the OTC (over-the-counter) market, where liquidity is worse. Listing = minimum quality bar.",
      },
      {
        type: "analogy",
        heading: "The Farmers Market Analogy",
        content:
          "Think of the stock exchange like a regulated farmers market. Sellers (companies) rent a stall (listing) after meeting standards. Buyers (investors) browse and place orders. The market manager (exchange) matches buyers and sellers and ensures everyone follows the rules. No one trades in a back alley—everything goes through the market. That transparency and regulation protect both sides.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Most retail orders don't go directly to the exchange—they go through your broker, who routes to a market maker or the exchange. Your broker may get payment for order flow (PFOF) from market makers. For most retail traders, execution quality is good enough; for large size, consider direct market access (DMA).",
      },
      { type: "interactive", heading: "Think It Through", content: "Where do US stocks mainly trade?", component: "ConceptCheck", props: { question: "Where do US stocks mainly trade?", reveal: "On regulated exchanges like the NYSE and Nasdaq. The exchange matches buy and sell orders and reports trades." } },
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
    "12 min",
    ["Ownership and voting", "Rights of shareholders", "Return sources"],
    [
      {
        type: "text",
        heading: "You Own a Piece of the Company",
        content:
          "When you buy a share of stock, you own a fractional piece of that company. One share = one unit of ownership. If the company has 1 million shares outstanding and you own 1,000, you own 0.1% of the company. That entitles you to a share of profits (via dividends, if paid) and typically to vote on major decisions (e.g. board elections, mergers) at the annual meeting.\n\nYou're not a creditor—you're an owner. If the company goes bankrupt, creditors get paid first; shareholders get what's left (often nothing). But if the company succeeds, you share in the upside. Ownership = risk and reward.",
      },
      {
        type: "text",
        heading: "Common Stock and Voting Rights",
        content:
          "Common stock is the standard equity—one share equals one unit of ownership with typical voting rights (one vote per share). You share in profits via dividends and price appreciation; in bankruptcy, common shareholders get what's left after creditors and preferred. Some companies have dual-class structures (e.g. founders have shares with more votes)—Google (Alphabet) and Facebook (Meta) have this. As a small shareholder you rarely affect outcomes, but the right exists. Common stock offers the most upside and full participation in the company's growth, but also carries the most risk if the company fails.",
      },
      {
        type: "text",
        heading: "Preferred Stock",
        content:
          "Preferred stock is a hybrid between common stock and bonds. Preferred shareholders usually have priority over common for dividends and assets in bankruptcy—but typically no voting rights. Dividends are often fixed (e.g. 6% of par) and paid before common. Price is sensitive to interest rates: when rates rise, preferred prices tend to fall. Companies like banks and utilities often issue preferred. Preferred suits income investors who want dividend priority over growth.",
      },
      {
        type: "text",
        heading: "Fractional Shares",
        content:
          "Fractional shares let you buy a portion of a share—e.g. 0.25 shares of AAPL if you only have $50. Many brokers offer fractional trading for stocks and ETFs. You get proportional exposure: 0.5 shares means half the dollar move of 1 share. Useful for dollar-cost averaging (invest a fixed amount every month) or for expensive stocks. Settlement and dividends are handled proportionally. Fractional shares make investing accessible with small amounts.",
      },
      {
        type: "analogy",
        heading: "The Pizza Slice Analogy",
        content:
          "Think of a company like a pizza. Each share is a slice. If the company has 100 shares and you own 10, you own 10% of the pizza. When the company makes money (the pizza gets bigger), your slice gets bigger. Dividends are like someone cutting off a piece of your slice and handing it to you. Voting is like deciding what toppings go on the next pizza. You own a piece—you have a say.",
      },
      { type: "interactive", heading: "Think It Through", content: "What do you get when you own a share?", component: "ConceptCheck", props: { question: "What do you get when you own a share?", reveal: "A fractional piece of the company: potential dividends, usually voting rights, and return from price appreciation and/or dividends." } },
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
    "12 min",
    ["What market cap is", "Why it matters for risk and liquidity", "Mega cap"],
    [
      {
        type: "text",
        heading: "What Is Market Cap?",
        content:
          "Market cap (market capitalization) = share price × number of shares outstanding. It's the total market value of the company's equity. Example: $150 per share × 1 billion shares = $150 billion market cap. It's not the same as revenue or profit—it's what the market thinks the company is worth.\n\nA $50 stock with 2 billion shares = $100B market cap. A $500 stock with 200 million shares = $100B market cap. Same size company—different share price and share count. Don't confuse 'expensive' with high price per share. Market cap is the real measure of size.",
      },
      {
        type: "text",
        heading: "Small, Mid, and Large Cap",
        content:
          "Large cap: usually $10B+ (e.g. Apple, Microsoft)—typically more liquid and less volatile. Mid cap: roughly $2B–$10B—mix of growth and stability. Small cap: under about $2B—often more volatile, less liquid, but can offer higher growth. Mega cap is sometimes used for the very largest (e.g. over $200B—Apple, Microsoft, Saudi Aramco).\n\nBeginners: start with large or mega cap. AAPL, MSFT, SPY (S&P 500 ETF) have millions of shares traded daily—tight spreads, fair fills. Small caps can move 20% on one news item and have wide spreads—harder to trade safely.",
      },
      {
        type: "analogy",
        heading: "The Ship Size Analogy",
        content:
          "Think of market cap like ship size. Mega caps are ocean liners—steady, lots of room (liquidity), don't tip easily. Small caps are speedboats—fast moves, but one wave (news) can rock them hard. Mid caps are cruisers—in between. If you're learning to sail, start with the ocean liner. Don't start in a speedboat in a storm.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Don't think a $10 stock is 'cheap' and a $1,000 stock is 'expensive.' Berkshire Hathaway (BRK.A) is over $600,000 per share—but it's one share. Market cap and company quality matter. Price per share is just a number. A $5 penny stock can be riskier than a $500 blue chip.",
      },
      { type: "interactive", heading: "Think It Through", content: "How is market cap calculated?", component: "ConceptCheck", props: { question: "How is market cap calculated?", reveal: "Share price × number of shares outstanding. It's the total market value of the company's equity." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Market cap = price × shares outstanding. Large/mega cap = more liquid and stable. Small cap = more volatile, less liquid. Start with large cap.",
      },
    ]
  ),
  createLesson(
    "stocks-sectors",
    4,
    "Stock Sectors",
    "stocks-sectors",
    "12 min",
    ["Major sectors", "Why sector matters", "Cyclical vs defensive"],
    [
      {
        type: "text",
        heading: "The Main Sectors",
        content:
          "Stocks are grouped into sectors: Technology, Healthcare, Financials, Consumer Discretionary, Consumer Staples, Industrials, Energy, Materials, Real Estate, and Utilities. Each sector reacts differently to the economy and interest rates. Tech and growth often lead in risk-on environments; utilities and staples can be more defensive.\n\nTechnology (AAPL, MSFT, NVDA): sensitive to rates and growth. Healthcare (JNJ, UNH): more defensive, demographic tailwinds. Financials (JPM, BAC): benefit from higher rates. Consumer Discretionary (AMZN, TSLA): people spend when confident. Consumer Staples (PG, KO): people buy food and soap in any economy. Knowing which sector you're in helps you understand why a stock moves.",
      },
      {
        type: "text",
        heading: "Why Sector Matters",
        content:
          "Sector rotation—money moving from one sector to another—drives a lot of relative performance. In a recession, defensive sectors (staples, utilities) may hold up better. In a strong economy, cyclicals (industrials, discretionary) may lead. Diversifying across sectors reduces concentration risk.\n\nIf you put everything in tech and tech corrects 30%, your portfolio gets hit hard. If you have some staples and healthcare, they might cushion. As a trader, watch which sectors are leading—that tells you where the money is flowing. Sector ETFs (XLK, XLF, XLE) let you trade the whole sector in one ticker.",
      },
      {
        type: "analogy",
        heading: "The Restaurant Menu Analogy",
        content:
          "Think of the market like a restaurant menu. Sectors are the categories: appetizers (staples), mains (tech, industrials), desserts (discretionary). When the economy is hungry for growth, people order more mains. When they're nervous, they stick to appetizers. You don't want to order only one category—diversify. And if you're a trader, watch which part of the menu is selling best today.",
      },
      {
        type: "text",
        heading: "ADRs (American Depositary Receipts)",
        content:
          "ADRs are US-traded securities that represent shares of foreign companies. A US bank holds the underlying foreign shares and issues ADRs that trade on NYSE or Nasdaq. One ADR can represent one, multiple, or a fraction of a foreign share. ADRs let US investors buy companies like Toyota, Nestlé, or Samsung without opening a foreign brokerage account. Dividends are converted to dollars (minus fees). Currency risk remains: if the dollar strengthens, your ADR may lag the local-currency return. ADRs are the main way US retail investors access international equities.",
      },
      {
        type: "text",
        heading: "GDRs (Global Depositary Receipts)",
        content:
          "GDRs are similar to ADRs but trade on exchanges outside the issuer's home country—often London or Luxembourg. They represent shares of a company (often emerging market) and are marketed to international investors. GDRs expand a company's investor base without multiple listings. Liquidity can be lower than ADRs; some GDRs trade on less liquid venues. Investors use GDRs to access companies from India, Brazil, and others that don't have US ADRs. Same concept as ADRs: a depositary bank holds the underlying shares and issues receipts. Currency and geopolitical risks apply.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "Use sector performance tables (e.g. S&P 500 sector returns YTD) to see what's working. When tech leads for months, rotation into financials or energy can signal a shift. Sector relative strength is a useful filter." },
      { type: "interactive", heading: "Think It Through", content: "Why does sector matter?", component: "ConceptCheck", props: { question: "Why does sector matter?", reveal: "Different sectors perform differently across the economic cycle. Defensive sectors may hold up in recessions; cyclicals may lead in growth. Diversifying across sectors can smooth returns." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Sectors group companies by business type. Cyclical vs defensive; sector rotation drives relative performance. Diversify across sectors.",
      },
    ]
  ),
  createLesson(
    "stocks-blue-chip-penny",
    5,
    "Blue Chip vs Penny Stocks",
    "stocks-blue-chip-penny",
    "12 min",
    ["Define blue chip and penny", "Risk differences", "Where to start"],
    [
      {
        type: "text",
        heading: "Blue Chip Stocks",
        content:
          "Blue chips are large, well-established, financially strong companies—household names like Coca-Cola, Johnson & Johnson, or Procter & Gamble. They usually have a long history of profits and dividends, and are considered lower risk than smaller or unproven companies. They're often core holdings for long-term investors.\n\nThey have tight spreads, high volume, and plenty of research. When you buy KO or JNJ, you know what you're getting. Earnings are predictable; management is seasoned. That doesn't mean they can't fall—but the risk of fraud or overnight collapse is far lower than with a $1 OTC name.",
      },
      {
        type: "text",
        heading: "Penny Stocks",
        content:
          "Penny stocks are typically low-priced (often under $5), small-cap or micro-cap companies. They trade on major exchanges or over-the-counter (OTC). They're highly speculative: thin liquidity, wide spreads, and vulnerable to manipulation and fraud. Many beginners are attracted by the low price per share, but the risk of total loss is high.\n\nPump-and-dump schemes target penny stocks—promoters hype the stock, price spikes, then insiders sell and retail is left holding the bag. OTC stocks have less disclosure. Even on major exchanges, a $3 stock can drop to $0.50 on one bad headline. If you're learning, stay in names with millions of shares traded daily.",
      },
      {
        type: "analogy",
        heading: "The Highway vs Dirt Road Analogy",
        content:
          "Blue chips are like driving on a highway—well-marked, lots of other cars (liquidity), predictable. Penny stocks are like a dirt road in the middle of nowhere—bumpy, no signs, easy to get stuck. You might find a shortcut once in a while, but most people get lost or break down. Stick to the highway while you're learning.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Thinking a $2 stock is 'cheaper' than a $200 stock is wrong. What matters is total value (price × shares) and the company's quality. Penny stocks are not a shortcut to riches—they're where many people lose money. Avoid them until you have experience and can afford to lose 100%.",
      },
      { type: "interactive", heading: "Think It Through", content: "Why is a $2 stock not necessarily cheaper than a $200 stock?", component: "ConceptCheck", props: { question: "Why is a $2 stock not necessarily cheaper than a $200 stock?", reveal: "What matters is total value (price × shares) and company quality. A $2 penny stock can be riskier and more overvalued than a $200 blue chip." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Blue chips = large, stable, lower risk. Penny stocks = high risk, often illiquid and manipulated. Prefer blue chips when building a foundation.",
      },
    ]
  ),
  createLesson(
    "stocks-growth-value",
    6,
    "Growth vs Value Stocks",
    "stocks-growth-value",
    "12 min",
    ["Growth and value defined", "When each tends to work", "Rotation"],
    [
      {
        type: "text",
        heading: "Growth Stocks",
        content:
          "Growth companies are expected to grow earnings and revenue quickly. They often reinvest profits instead of paying dividends. Examples: many tech and biotech names. They tend to have higher P/E ratios because the market prices in future growth. When growth delivers, returns can be strong; when it doesn't, they can fall hard.\n\nGrowth does well when rates are low and the economy is expanding—future earnings are worth more in today's dollars. When rates rise, the present value of those future earnings drops, and growth stocks often get hit. NVDA, TSLA, high-flying tech = growth. They can double or halve in a year.",
      },
      {
        type: "text",
        heading: "Value Stocks",
        content:
          "Value stocks are those that appear cheap relative to earnings, book value, or cash flow. The idea is the market has undervalued them. They often pay dividends and are in more mature industries. Value tends to do well when interest rates or inflation expectations rise, or when the market corrects and investors seek cheaper names.\n\nValue = lower P/E, often dividend payers (banks, energy, some industrials). When growth gets expensive, money rotates into value. When the market crashes, value (already cheap) sometimes holds up better. Don't assume one style always wins—they take turns.",
      },
      {
        type: "analogy",
        heading: "The Sports Car vs Sedan Analogy",
        content:
          "Growth stocks are like sports cars—flashy, fast, expensive for what you get today, but the promise is speed later. Value stocks are like reliable sedans—cheaper, pay you back (dividends), not as exciting but steady. In a race (bull market), the sports car might win. In a storm (recession), the sedan might get you home. Smart investors have both in the garage.",
      },
      { type: "pro-tip", heading: "Pro Tip", content: "Watch the ratio of growth ETFs (e.g. QQQ or IWF) to value ETFs (e.g. IWD). When growth outperforms for a long time, value often has a catch-up run. Rotation is a real thing—don't fall in love with one style." },
      { type: "interactive", heading: "Think It Through", content: "How do growth and value stocks differ?", component: "ConceptCheck", props: { question: "How do growth and value stocks differ?", reveal: "Growth = high expected growth, often high P/E, reinvest profits. Value = cheap on earnings/book/cash flow, often pay dividends. They tend to rotate in and out of favor." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Growth = high expected growth, often high P/E. Value = cheap on metrics, often dividends. Both have a place; they rotate over time.",
      },
    ]
  ),
  createLesson(
    "stocks-dividends",
    7,
    "Dividend Stocks",
    "stocks-dividends",
    "12 min",
    ["What dividends are", "Passive income and yield", "Sustainability"],
    [
      {
        type: "text",
        heading: "What Are Dividends?",
        content:
          "Dividends are cash (or sometimes stock) payments that a company distributes to shareholders from its profits. They're often paid quarterly. Not all companies pay them—growth companies often reinvest instead. Dividend yield = annual dividends per share ÷ share price (e.g. $4 per year ÷ $100 = 4% yield).\n\nCompanies that pay dividends are usually mature and profitable. They're saying: we have more cash than we need to grow, so we'll share it with owners. Dividend dates matter: ex-dividend date (you must own before this to get the dividend), payment date (when you get the cash). If you're a trader, a stock often drops by roughly the dividend amount on ex-date—that's normal.",
      },
      {
        type: "text",
        heading: "Passive Income and Sustainability",
        content:
          "Dividend stocks can provide income without selling shares. Retirees and income-focused investors often build portfolios of dividend payers. High yield can be attractive but be careful: a very high yield (e.g. 10%+) sometimes signals the market expects a cut. Sustainable payout ratios (dividends ÷ earnings) and a history of raising dividends are better signs of quality.\n\nDividend Aristocrats are companies that have raised dividends for 25+ years—they're a popular screen for quality. A company paying 80% of earnings as dividends might have to cut when earnings fall. One paying 40% has more room.",
      },
      {
        type: "analogy",
        heading: "The Rental Income Analogy",
        content:
          "Dividends are like rental income from a property. You own the asset (the stock); periodically it pays you cash (the dividend) without you selling. The yield is like the rental yield—how much you get per year as a % of the asset value. But if the 'property' is in bad shape (company struggling), that 'rent' might get cut. Look for landlords (companies) with a history of paying and raising the rent.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Don't chase yield blindly. A 15% yield often means the stock has crashed because the market expects a dividend cut. After the cut, the yield might be 5% and you've lost capital. Prefer companies with moderate yield (2–4%) and a history of raising dividends.",
      },
      { type: "interactive", heading: "Think It Through", content: "How do you calculate dividend yield?", component: "ConceptCheck", props: { question: "How do you calculate dividend yield?", reveal: "Annual dividends per share ÷ share price. Example: $4 per year ÷ $100 = 4% yield. Sustainability matters more than yield alone." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Dividends = periodic payments to shareholders. Yield = annual dividends / price. Sustainability and growth of dividends matter more than yield alone.",
      },
    ]
  ),
  createLesson(
    "stocks-etfs",
    8,
    "ETFs vs Individual Stocks",
    "stocks-etfs",
    "14 min",
    ["What ETFs are", "When to use each", "Core and satellite"],
    [
      {
        type: "text",
        heading: "Individual Stocks",
        content:
          "When you buy a stock, you own shares in one company. Your return depends entirely on that company. You get diversification only by holding many stocks. Single-stock risk is high: one bad earnings report or scandal can hit you hard. Higher potential return, higher risk.\n\nIf you own only AAPL and Apple has a product recall or misses earnings, your portfolio can drop 10–20% in a day. If you own 20 stocks across sectors, one bad event hurts less. Stocks are for conviction—when you really believe in one name and accept concentration risk.",
      },
      {
        type: "text",
        heading: "ETFs (Exchange-Traded Funds)",
        content:
          "An ETF is a fund that holds a basket of securities (stocks, bonds, etc.) and trades on an exchange like a stock. One ETF might track the S&P 500 (SPY), a sector (XLK for tech), or a theme. You get instant diversification in one trade. Fees are usually low (0.03–0.50% per year). You can buy and sell throughout the day. ETFs are ideal for broad exposure without picking individual names.\n\nSPY = 500 large US companies. QQQ = Nasdaq 100 (tech-heavy). One click and you own the whole basket. No single-company blow-up risk. Great for building a core position.",
      },
      {
        type: "analogy",
        heading: "The Basket vs Single Egg Analogy",
        content:
          "A single stock is like putting all your eggs in one basket—if that basket drops, you lose a lot. An ETF is like buying a pre-made basket of eggs from many farms. One bad egg (one bad company) doesn't ruin the basket. You give up the chance that one egg becomes golden (one stock 10x), but you sleep better. Most people should have a basket (ETF core) and maybe a few eggs they really like (stock picks).",
      },
      {
        type: "text",
        heading: "Leveraged and Inverse ETFs",
        content:
          "Leveraged ETFs aim to deliver a multiple of the daily return of an index—e.g. 2x or 3x the S&P 500. They use swaps and futures to achieve this. Critically, the leverage resets daily. Over time, volatility causes path dependency: 2x daily moves don't compound to 2x long-term returns. In choppy markets, leveraged ETFs can lose value even if the index ends flat. Inverse ETFs aim to deliver the opposite of an index's daily return; -1x, -2x, -3x exist. Same daily-reset caveat: they're not meant for long-term hedging. Both are for short-term tactical trades only—never hold as permanent positions.",
      },
      {
        type: "example",
        heading: "Why Leveraged ETFs Decay (The Math)",
        content:
          "Suppose the S&P 500 goes up 10% one day, then down 10% the next. Your $100 in SPY: Day 1 → $110. Day 2 → $99 (down 10% from $110). You're down 1%. A 3x leveraged ETF (e.g. UPRO): Day 1 → $130 (up 30%). Day 2 → $91 (down 30% from $130). You're down 9%—even though the index is only down 1%. That's decay. Volatility (up and down) erodes leveraged ETFs over time. They're designed for daily rebalancing, not long-term holds. Holding a 3x ETF for months in a choppy market can wipe you out even if the index ends flat or slightly up.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Holding leveraged ETFs (TQQQ, UPRO, SQQQ, etc.) for weeks or months. They're built for intraday or overnight tactical trades—not buy-and-hold. The daily reset + volatility = decay. If you want long-term exposure to the index, use SPY, QQQ, or regular index funds.",
      },
      {
        type: "text",
        heading: "Bond ETFs and Sector ETFs",
        content:
          "Bond ETFs hold fixed-income securities—Treasuries, corporate bonds, municipals, high-yield—and trade like stocks. You get diversified bond exposure without buying individual bonds. Prices move with interest rates: when rates rise, bond ETF prices fall. Duration tells you how sensitive the ETF is. Popular examples: BND (total bond), TLT (long Treasuries), LQD (investment-grade corporates). Sector ETFs track a single sector—technology (XLK), healthcare (XLV), financials (XLF), energy (XLE). You get concentrated exposure to one part of the economy without picking individual stocks. Sector rotation strategies shift between sectors based on economic cycles. Sector ETFs can be more volatile than broad-market ETFs because they're less diversified.",
      },
      {
        type: "text",
        heading: "Commodity ETFs and Crypto ETFs",
        content:
          "Commodity ETFs give exposure to raw materials—gold, silver, oil, natural gas, agriculture. Some hold physical commodities (e.g. GLD for gold); others use futures. Physical-backed ETFs track spot prices closely. Futures-based ETFs can suffer from contango (rolling futures costs) and may diverge from spot over time. Commodities add diversification and can hedge inflation. Crypto ETFs hold Bitcoin, Ethereum, or baskets of cryptocurrencies. US spot Bitcoin ETFs (e.g. IBIT, FBTC) hold actual BTC. You get crypto exposure through a regulated, brokerage-accessible product—no wallet or exchange account needed. Crypto ETFs are highly volatile and speculative; fees are higher than traditional ETFs.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Core and satellite: put 70–80% in broad ETFs (SPY, QQQ, or a mix). Use 20–30% for individual stock picks where you have an edge. That way you get market exposure and still have room to outperform with ideas—without betting the farm on one name.",
      },
      { type: "interactive", heading: "Think It Through", content: "When might you choose an ETF over a single stock?", component: "ConceptCheck", props: { question: "When might you choose an ETF over a single stock?", reveal: "When you want diversification or to track the market/sector in one trade. ETFs give a basket of securities; single stocks give concentrated exposure and higher risk." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Stocks = single company, higher concentration risk. ETFs = basket, diversification in one trade. Core (ETFs) + satellite (stocks) is a common approach.",
      },
    ]
  ),
  createLesson(
    "stocks-splits",
    10,
    "Stock Splits",
    "stocks-splits",
    "10 min",
    ["What a split is", "Why companies do it", "Adjusted prices"],
    [
      {
        type: "text",
        heading: "What Is a Stock Split?",
        content:
          "In a stock split, a company increases the number of shares and adjusts the price so total value stays the same. A 2-for-1 split: you had 100 shares at $200, now you have 200 shares at $100. Your total position value is unchanged. Reverse splits do the opposite (fewer shares, higher price)—often used to avoid delisting when a stock trades under $1.\n\nA 4-for-1 split (e.g. Apple in 2020): 100 shares at $400 become 400 shares at $100. Same $40,000 value. Splits are cosmetic—they don't change the company's market cap or fundamentals. They just make the share price 'smaller' so more people can afford a round lot (100 shares).",
      },
      {
        type: "text",
        heading: "Why Companies Split / Adjusted Prices",
        content:
          "Splits are often done to lower the share price so it feels more accessible to small investors. They don't change the company's value. When you're trading or analyzing, use adjusted prices (most platforms do this automatically) so historical charts are comparable before and after the split.\n\nIf you look at a 10-year AAPL chart without adjustment, you'd see a fake 'crash' on every split date. Adjusted prices back out splits so the chart shows true percentage moves. Always use 'adjusted' or 'split-adjusted' when doing technical analysis.",
      },
      {
        type: "text",
        heading: "SPAC Shares",
        content:
          "A SPAC (Special Purpose Acquisition Company) is a shell company that raises money via an IPO to acquire a private company and take it public. SPAC shares typically trade at $10 at IPO; if a merger (de-SPAC) is announced, the price may jump or drop based on the target. If no deal is found within 18–24 months, the SPAC liquidates and redeems shares at about $10. SPACs surged in 2020–2021; many merged companies fell sharply post-deal. Risks: dilution from warrants and promoter shares, poor target quality, and hype-driven volatility. Treat SPACs as speculative—only invest if you understand the target and deal structure.",
      },
      {
        type: "text",
        heading: "Rights",
        content:
          "Rights are short-term options that give existing shareholders the right to buy more shares at a set price, usually at a discount. Companies issue rights in rights offerings to raise capital—e.g. one right per share, exercisable for 30 days. Rights trade separately on the exchange; if you don't exercise, they expire worthless. They're often used in distressed situations or to give current shareholders first dibs on new shares. If the rights are in-the-money (share price above exercise price), they have value; out-of-the-money rights may trade for pennies. Understand the ratio and expiration before participating.",
      },
      {
        type: "text",
        heading: "Warrants",
        content:
          "Warrants are long-dated call options issued by the company itself (not an options exchange). They give the holder the right to buy the company's stock at a set strike price until expiration—often 5–10 years. Warrants are sometimes attached to bonds or preferred stock (units) or issued by SPACs. Unlike listed options, warrants are dilutive: when exercised, the company issues new shares. They can be very volatile; a small move in the stock can cause a large move in the warrant. They offer leverage but also risk of expiring worthless if the stock doesn't reach the strike.",
      },
      {
        type: "analogy",
        heading: "The Pizza Slice Analogy",
        content:
          "A 2-for-1 split is like cutting a pizza into twice as many slices. You had 4 big slices; now you have 8 smaller slices. Same amount of pizza (same company value). You didn't get more pizza—you just have more, smaller pieces. Reverse split = combining slices to make fewer, bigger ones. Same pizza.",
      },
      { type: "interactive", heading: "Think It Through", content: "Does a 2-for-1 stock split change your total position value?", component: "ConceptCheck", props: { question: "Does a 2-for-1 stock split change your total position value?", reveal: "No. You get twice the shares at half the price; total value stays the same. Use adjusted prices when looking at historical charts." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "A split changes share count and price; total value stays the same. Use adjusted prices for charts. Reverse splits often signal distress.",
      },
    ]
  ),
  createLesson(
    "stocks-index-funds",
    9,
    "Index Funds: S&P 500, Nasdaq 100",
    "stocks-index-funds",
    "12 min",
    ["What index funds track", "S&P 500 vs Nasdaq 100", "ETFs that track them"],
    [
      {
        type: "text",
        heading: "What Is an Index Fund?",
        content:
          "An index fund (or index ETF) aims to match the performance of a market index by holding the same (or a representative sample of) securities. You don't try to beat the market—you get the market return minus a small fee. The S&P 500 and Nasdaq 100 are two of the most common US equity indexes.\n\nSPY, IVV, VOO are S&P 500 ETFs—you get the return of the 500 largest US companies. Fees are tiny (0.03–0.09%). Most active managers fail to beat the S&P 500 over time, so indexing is a rational default for long-term money.",
      },
      {
        type: "text",
        heading: "S&P 500 vs Nasdaq 100",
        content:
          "The S&P 500 includes about 500 large US companies across sectors—the broad US large-cap market. The Nasdaq 100 has about 100 of the largest non-financial companies listed on Nasdaq—heavy on tech (Apple, Microsoft, Amazon, etc.). So Nasdaq 100 is more tech-focused and can be more volatile. Many long-term investors use an S&P 500 index fund as a core holding.\n\nQQQ tracks the Nasdaq 100. When tech leads, QQQ outperforms SPY. When tech corrects, QQQ falls more. Choose based on whether you want broad US market (SPY) or tech tilt (QQQ).",
      },
      {
        type: "text",
        heading: "Mutual Funds and Index Funds",
        content:
          "Mutual funds pool money from many investors and invest in stocks, bonds, or both. Shares are bought and sold at end-of-day NAV, not intraday. Actively managed funds have a manager picking securities; index mutual funds track an index. Fees can be higher than ETFs—especially load funds or those with high expense ratios. Mutual funds are common in 401(k)s and IRAs. Index funds (mutual or ETF) aim to match an index at low cost; they've beaten most active managers over long periods and are the default for long-term, diversified investing.",
      },
      {
        type: "text",
        heading: "Target-Date Funds and Closed-End Funds",
        content:
          "Target-date funds (TDFs) automatically shift from stocks to bonds as you approach a target retirement year (e.g. 2050). They're all-in-one, set-it-and-forget-it products for retirement accounts. Younger investors get more equity; as the target nears, the fund glides to more bonds. Fees vary—some are cheap, others expensive. TDFs simplify asset allocation but you give up control over the exact mix. Closed-end funds (CEFs) have a fixed number of shares that trade on an exchange like stocks. Unlike open-end funds, you buy and sell CEF shares from other investors—the price can trade at a premium or discount to NAV. CEFs often use leverage and can pay high yields. The discount/premium adds complexity; understand the fee structure before buying.",
      },
      {
        type: "text",
        heading: "ETNs (Exchange Traded Notes)",
        content:
          "ETNs are unsecured debt instruments that track an index or strategy—they're not funds. The issuer (usually a bank) promises to pay the return of the index minus fees. You have credit risk: if the issuer goes bankrupt, you could lose principal. ETNs don't hold underlying assets; they're linked by formula. Some ETNs track commodities, volatility (e.g. VXX), or esoteric strategies. They can trade at large premiums or discounts to indicative value. Understand that ETNs are notes, not funds—credit risk and liquidity matter. Use only if you understand the structure and accept issuer risk.",
      },
      {
        type: "analogy",
        heading: "The Buffet Analogy",
        content:
          "An index fund is like ordering the chef's tasting menu—you get a bit of everything the market has to offer, in proportion. You're not picking each dish (stock); you're accepting the full market portfolio. S&P 500 = full American menu. Nasdaq 100 = heavy on the tech dishes. Simple, diversified, low cost.",
      },
      { type: "interactive", heading: "Think It Through", content: "How does the Nasdaq 100 differ from the S&P 500?", component: "ConceptCheck", props: { question: "How does the Nasdaq 100 differ from the S&P 500?", reveal: "S&P 500 = ~500 large US companies across sectors. Nasdaq 100 = ~100 largest non-financial Nasdaq names, tech-heavy and often more volatile." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Index funds track an index (S&P 500, Nasdaq 100). SPY = broad; QQQ = tech-heavy. Low cost, diversified exposure.",
      },
    ]
  ),
  createLesson(
    "stocks-finding",
    12,
    "Finding Stocks to Trade",
    "stocks-finding",
    "12 min",
    ["Screeners and scanners", "What to filter for", "Don't chase alerts"],
    [
      {
        type: "text",
        heading: "Screeners",
        content:
          "A stock screener lets you filter by criteria: market cap, sector, volume, price change, P/E, etc. You might look for large-cap tech with volume over 5 million and up more than 2% today. Free screeners exist on Yahoo Finance, Finviz, TradingView; brokers often include one. Screeners help you narrow the universe to names that fit your strategy.\n\nExample: 'Market cap > $10B, sector = Technology, average volume > 3M, price above 200-day MA.' You get a list of liquid tech names in uptrends. Then you do your chart and fundamental work. Screeners save time—they don't replace analysis.",
      },
      {
        type: "text",
        heading: "Scanners",
        content:
          "Scanners are more real-time: they highlight stocks meeting criteria as they happen (e.g. new 52-week high, unusual volume, gap up). Day traders use them to find movers. They're often built into trading platforms (ThinkOrSwim, TradeStation, etc.) or available as add-ons. Combine with your rules—don't chase every alert.\n\nUnusual volume + breakout pattern might be a valid setup. A random gap up with no level might be a trap. Use scanners to get ideas, then apply your entry rules. Never buy just because something 'scanned.'",
      },
      {
        type: "analogy",
        heading: "The Metal Detector Analogy",
        content:
          "Screeners are like setting your metal detector to 'gold'—you filter out the junk and get a list of candidates. Scanners are like the detector beeping in real time when something passes by. You still have to dig and check if it's really gold (a valid setup) or a bottle cap (noise). The tool finds candidates; you decide which to trade.",
      },
      {
        type: "text",
        heading: "IPO Shares",
        content:
          "An IPO (Initial Public Offering) is when a company first sells shares to the public. Before an IPO, the stock is private; after, it trades on an exchange. Retail investors can buy IPO shares through their broker—allocation depends on broker participation and demand. IPO pricing is set by underwriters; the first-day pop (or drop) reflects supply and demand. IPOs can be volatile: lockups expire (insiders can sell), and hype can drive prices above fundamental value. Historically, IPOs underperform the market over the long run. Treat IPOs as speculative—only invest if you'd hold the stock regardless of the IPO narrative.",
      },
      {
        type: "text",
        heading: "Secondary Offerings and Private Placements",
        content:
          "A secondary offering is when a company sells additional shares after the IPO—dilution of existing shareholders. The company raises capital; new shares hit the market. Secondary offerings often cause short-term price pressure: more supply, potential selling. Companies use secondaries for growth, debt repayment, or acquisitions. Private placements are sales of securities to a limited number of accredited investors without a public offering. They're not listed; liquidity is low or nonexistent. Some brokers offer access to private placements. Risk is high: no secondary market, long lockups, company-specific risk. Private placements are broker-dependent.",
      },
      {
        type: "text",
        heading: "Short Selling",
        content:
          "Short selling is betting that a stock will fall: you borrow shares, sell them, and hope to buy them back cheaper. If the stock drops, you profit; if it rises, you lose—and losses can be unlimited (a stock can rise forever). Shorts must pay borrow fees and dividends to the lender. Squeezes happen when many shorts are forced to cover as the stock rises. Not all stocks are shortable—hard-to-borrow names have high fees. Short selling requires a margin account; margin requirements are stricter for short positions. Use only when you understand the risks and have a defined exit plan.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Don't chase every scanner alert. By the time you see 'unusual volume' or 'new high,' the move might be half over. Have a plan: what setup are you looking for? Only act when the alert matches your rules. Otherwise you're just reacting to noise.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Screeners filter by criteria; scanners highlight real-time movers. Use both to find candidates, then apply your rules. Don't chase every alert.",
      },
    ]
  ),
  createLesson(
    "stocks-hours",
    13,
    "Stock Market Hours",
    "stocks-hours",
    "10 min",
    ["US regular session", "Global sessions", "When to trade"],
    [
      {
        type: "text",
        heading: "US Regular Session",
        content:
          "US stock market regular trading hours are 9:30 AM to 4:00 PM Eastern Time, Monday through Friday (excluding holidays). The opening bell is 9:30 AM and the closing bell 4:00 PM. The first and last 15–30 minutes often have higher volume and volatility as positions are opened and closed.\n\nThe first 30 minutes (9:30–10 AM) can be choppy—opening range, gap fills. Many day traders wait for the first 15–30 min to settle before entering. The last 30 minutes (3:30–4 PM) can see momentum as funds rebalance or traders close. Lunch (11:30–1:30) is often lower volume—fewer clean setups.",
      },
      {
        type: "text",
        heading: "Why It Matters",
        content:
          "If you're day trading US stocks, you need to be available during these hours. If you're in a different time zone, convert carefully. Major news (Fed, employment, CPI) is often released at 8:30 AM ET, so the open can gap or trend on that news.\n\nPre-market (4–9:30 AM) and after-hours (4–8 PM) exist but have less liquidity—we cover those in extended-hours trading. For most beginners, focus on regular hours when volume and fairness of execution are best.",
      },
      {
        type: "analogy",
        heading: "The Store Hours Analogy",
        content:
          "The market is like a store that's open 9:30–4 Eastern. When the store is open, most customers (traders) are there—best liquidity and fairest prices. When it's closed (nights, weekends), only a few people can trade (extended hours)—prices can be wild. Plan your 'shopping' (trading) for when the store is open unless you have a reason to be there at odd hours.",
      },
      { type: "interactive", heading: "Think It Through", content: "What are US regular stock market hours (Eastern)?", component: "ConceptCheck", props: { question: "What are US regular stock market hours (Eastern)?", reveal: "9:30 AM to 4:00 PM Eastern, Monday–Friday (excluding holidays). Plan your strategy around when liquidity and volatility are highest." } },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "US stocks trade 9:30 AM–4:00 PM Eastern. First and last 30 min often busiest. Plan your schedule around regular hours for best execution.",
      },
    ]
  ),
  createLesson(
    "stocks-beginners",
    14,
    "Best Stocks for Beginners",
    "stocks-beginners",
    "12 min",
    ["High volume, mid volatility", "Where to start", "Build skills first"],
    [
      {
        type: "text",
        heading: "What to Look For",
        content:
          "Beginners are usually better off in liquid, well-known names: high average daily volume (e.g. millions of shares), mid to large cap, and moderate volatility. That way you get fair fills and aren't wiped out by one wild swing. Examples: large-cap tech (AAPL, MSFT), popular ETFs (SPY, QQQ), or other mega caps. Avoid illiquid penny stocks and complex instruments at first.\n\nWhy volume? So your market order fills near the price you see. Why large cap? So there's research, news, and less chance of manipulation. Why not the wildest names? So one -20% day doesn't destroy your account while you're still learning.",
      },
      {
        type: "text",
        heading: "Mid Volatility",
        content:
          "You want enough movement to learn and potentially profit, but not so much that one bad trade blows the account. Mid volatility means the stock moves meaningfully but isn't a roller coaster. Combine that with 1% risk per trade and a clear plan.\n\nAAPL might move 1–2% on a normal day—enough to matter. A meme stock might move 30%—too much for a beginner's risk control. Start with names that move but don't explode. Build confidence and size before stepping into wilder names.",
      },
      {
        type: "text",
        heading: "Statistically Strong Long-Term Tickers",
        content:
          "When building a long-term portfolio, historical data shows certain names have delivered outsized returns over multi-year periods. NVIDIA (NVDA) stands out as one of the strongest performers—driven by AI, data centers, and gaming, it has delivered exceptional growth over the past decade. Other statistically strong long-term tickers include Apple (AAPL), Microsoft (MSFT), and Amazon (AMZN)—mega-cap leaders with durable competitive advantages and consistent revenue growth. Broad index ETFs like SPY and QQQ capture many of these names in one trade and have historically outperformed most active managers. Past performance does not guarantee future results; valuations and sector cycles change. Use this as a starting point for research, not a buy list.",
      },
      {
        type: "analogy",
        heading: "The Training Wheels Analogy",
        content:
          "Beginner stocks are like training wheels. You want a bike (market) that's stable enough to learn balance—not a unicycle. AAPL, SPY, MSFT are like bikes with training wheels. Penny stocks and options are like unicycles. Learn on the bike first. Take off the training wheels (add risk) only when you can ride.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Many pros still trade SPY or QQQ for a chunk of their day trading—liquidity is perfect, spreads are tight, and you can focus on execution and psychology instead of wondering if the stock is a scam. Boring is often better when learning.",
      },
      { type: "interactive", heading: "Think It Through", content: "What should beginners look for in stocks?", component: "ConceptCheck", props: { question: "What should beginners look for in stocks?", reveal: "High volume, mid-to-large cap, and mid volatility—enough movement to learn and trade, but not so much that one bad trade blows the account." } },
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
