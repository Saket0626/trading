/**
 * Full 2–4 sentence summaries for each lesson. Used in the lesson list dropdown.
 * Every summary matches the length and detail of the money-basics example.
 * Fallback: constructed from objectives when no summary is defined.
 */
export const LESSON_SUMMARIES: Record<string, string> = {
  // Level 1 - Foundations: Money & Economics
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

  // Level 1 - What is Trading & Investing
  "what-is-trading":
    "Trading is buying and selling assets for profit over shorter timeframes, while investing is holding for the long term. You learn the key difference: traders focus on price movement and timing; investors focus on ownership and compounding. The lesson explains why both exist and how to think about which approach fits your goals.",
  "why-people-trade":
    "People trade for income, capital growth, hedging, or simply the challenge. The lesson explores the real motivations behind trading—from professionals making a living to retail traders seeking supplemental income. You'll understand the spectrum of reasons and how to set realistic expectations for yourself.",
  "trader-types":
    "Day traders, swing traders, and position traders differ by holding period and time commitment. You learn how each style works: day traders close by day's end; swing traders hold days to weeks; position traders hold weeks to months. The lesson helps you see which style matches your schedule and personality.",
  "risk-reward":
    "Risk and reward are linked—higher potential profit usually means higher potential loss. The lesson explains the fundamental trade-off: you cannot have meaningful reward without accepting meaningful risk. You'll learn why professional traders risk only 1% per trade and why never risking money you need for living expenses is the first rule of survival in markets.",
  "time-commitment":
    "Trading demands real time—watching charts, placing orders, managing positions, and reviewing trades. The lesson breaks down what each style requires: day trading needs full focus during market hours; swing trading needs daily check-ins. You'll see why time availability is a major factor in choosing your approach.",
  "realistic-expectations":
    "Most retail traders lose money; the lesson explains why and how to set honest goals. You learn that 'get rich quick' is a myth, that consistent profitability takes years, and that preserving capital while learning is the first win. Realistic expectations protect you from blowing up and quitting too soon.",
  "truth-about-risk":
    "Trading involves real risk of loss—capital at risk, emotional stress, and the possibility of blowing up. The lesson confronts the hard truths: leverage amplifies losses, overconfidence kills accounts, and most people underestimate risk. You'll learn why respecting risk is the foundation of survival and long-term success.",

  // Level 1 - Introduction to Markets
  "stocks-basics":
    "Stocks represent ownership in companies; when you buy a share, you own a small piece of that business. The lesson covers how stocks trade on exchanges, why companies issue them, and how you profit from price appreciation or dividends. You'll connect this to the broader idea of equity markets.",
  "forex-intro":
    "Forex is the market where currencies are traded—buying one currency while selling another. The lesson introduces pairs like EUR/USD, explains why forex is the largest market by volume, and shows how traders profit from currency movements. You'll see why 24/5 hours and leverage make it unique.",
  "commodities-intro":
    "Commodities are raw materials—gold, oil, wheat—traded on global markets. The lesson covers hard commodities (metals, energy) vs soft commodities (agricultural), and how supply, demand, and geopolitics drive prices. You'll understand why traders use commodities for diversification and inflation hedging.",
  "crypto-intro":
    "Cryptocurrency is digital money built on blockchain—Bitcoin, Ethereum, and thousands of others. The lesson explains decentralization, 24/7 trading, and why crypto is highly volatile. You'll see how crypto differs from traditional markets and what risks and opportunities it presents for traders.",
  "market-hours":
    "Each market has specific trading hours—US stocks 9:30–4:00 ET; forex 24/5; crypto 24/7. The lesson explains why hours matter: liquidity, volatility, and overlap between sessions. You'll learn when the best opportunities appear and how to plan your trading around market schedules.",
  "market-participants":
    "Markets include retail traders, institutional investors, market makers, and hedgers—each with different goals and size. The lesson explains who moves price, who provides liquidity, and why understanding participants helps you read the market. You'll see how the mix of players shapes order flow.",
  "markets-overview":
    "The four main markets are stocks, forex, commodities, and crypto—each with different hours, rules, and characteristics. The lesson gives you an overview of all four so you understand the basics before going deeper. You'll see how each market fits different goals, capital requirements, and schedules, and why most successful traders specialize in one or two.",
  "other-markets":
    "Supply and demand drive every market price—more buyers than sellers raises price, and vice versa. The lesson applies this to stocks, forex, commodities, and crypto, showing how news and sentiment shift the balance. You'll understand that your job as a trader is to anticipate these shifts while managing risk, because the market can misprice things for a long time.",

  // Level 1 - Risk & Reward
  "risk-what":
    "Risk is the chance of losing money—from a single trade blowing up to a string of losses. The lesson defines risk in practical terms: how much you can lose, when, and why it matters. You'll learn that managing risk is more important than picking winners.",
  "reward-what":
    "Reward is the potential profit from a trade—the upside you're targeting. The lesson connects reward to risk-reward ratios: aiming for more reward than risk on each trade. You'll see why consistent positive expectancy requires thinking in terms of reward relative to risk.",
  "risk-reward-relationship":
    "Risk and reward are linked: higher potential reward usually means higher risk. The lesson explains how to balance them—using position sizing, stops, and targets to get favorable odds. You'll learn why the ratio matters more than win rate for long-term profitability.",
  "thinking-about-losses":
    "Losses are part of trading; the lesson teaches how to accept them and learn from them. You'll see why cutting losses quickly preserves capital and why emotional attachment to losers leads to bigger drawdowns. The goal is to lose small and learn, not avoid losses entirely.",
  "protecting-money-stops":
    "Stop losses limit how much you can lose on a trade—they're non-negotiable for risk management. The lesson covers where to place stops (technical levels, ATR-based) and why 'no stop' is one of the most dangerous beginner mistakes. You'll learn to define risk before every entry.",
  "why-most-lose":
    "Most retail traders lose because of overtrading, poor risk management, and emotional decisions. The lesson breaks down the common traps: revenge trading, FOMO, averaging down, and ignoring the plan. You'll see what separates the minority who survive from the majority who blow up.",

  // Level 1 - Getting Started Safely
  "paper-trading":
    "Paper trading lets you practice with fake money before risking real capital. The lesson explains why it's essential: learning the platform, testing strategies, and building discipline without financial consequence. You'll learn how to use it effectively and when to transition to live trading.",
  "how-much-to-start":
    "How much capital you need depends on your market, style, and risk tolerance. The lesson covers realistic minimums—enough to survive drawdowns and pay for costs—and why starting too small or with money you can't afford to lose sets you up for failure.",
  "choosing-first-market":
    "Your first market should match your capital, time, and risk tolerance. The lesson compares stocks, forex, and crypto for beginners—liquidity, costs, hours, and learning curve. You'll get a framework for picking where to focus rather than bouncing between markets.",
  "demo-account-setup":
    "Demo accounts from brokers let you trade with virtual money in real market conditions. The lesson walks through setting one up, using the same platform you'll use live, and treating it seriously. You'll learn why demo discipline predicts live discipline.",
  "learning-path":
    "A structured learning path keeps you from wandering—foundations first, then practice, then specialization. The lesson outlines a sensible order: understand money and markets, paper trade, master one style, then scale. You'll see why rushing skips the skills that matter most.",
  "common-mistakes":
    "Beginners often overtrade, use too much leverage, ignore stops, and chase losses. The lesson catalogs the most costly mistakes and how to avoid them. You'll recognize the patterns before they wreck your account and build habits that protect your capital.",

  // Level 1 Exam
  "level-1-exam":
    "The Level 1 exam tests everything from money basics to risk and getting started. You'll answer 25 questions covering all Level 1 modules—pass with 80% to unlock Level 2. The exam ensures you've absorbed the foundations before moving to chart reading and technical analysis.",

  // Level 2 - Understanding Charts
  "price-chart-intro":
    "Price charts visualize how an asset's price changed over time—the foundation of technical analysis. The lesson introduces the basic idea: time on one axis, price on the other, with each point or bar showing where price traded. You'll see why charts are the trader's primary tool.",
  "chart-axes":
    "Charts have a horizontal axis (time) and vertical axis (price)—understanding scale and labeling matters. The lesson covers linear vs logarithmic scales, timeframes, and how to read axes correctly. You'll avoid misreading charts due to scale or timeframe confusion.",
  "line-charts":
    "Line charts connect closing prices with a single line—simple but limited. The lesson explains when line charts are useful (seeing overall trend) and when they hide important information (intraday range, open/high/low). You'll know when to use them vs bar or candlestick charts.",
  "bar-charts":
    "Bar charts show open, high, low, and close for each period—more information than a line. The lesson covers how to read each bar and what the range tells you about volatility and buyer/seller conflict. You'll see bars as a step toward understanding candlesticks.",
  "candlestick-charts-intro":
    "Candlestick charts display OHLC with a body and wicks—the most informative chart type for traders. The lesson introduces the structure: body for open-close range, wicks for high-low. You'll see why candlesticks reveal market psychology and price action at a glance.",
  "volume-intro":
    "Volume shows how many shares or contracts traded—confirmation for price moves. The lesson explains why volume matters: high volume on a breakout suggests conviction; low volume suggests weakness. You'll learn to use volume as a filter and confirmation tool.",
  "timeframes-explained":
    "Timeframes—1m, 5m, 1h, daily, weekly—show the same price data at different zoom levels. The lesson explains what each timeframe reveals and how traders use multiple timeframes: higher for trend, lower for entry. You'll see why timeframe choice defines your style.",
  "same-asset-timeframes":
    "The same asset looks different on different timeframes—a daily uptrend can have a 5m downtrend. The lesson teaches multiple timeframe analysis: align your trades with the higher timeframe trend and use the lower for precise entries. You'll avoid fighting the bigger picture.",

  // Level 2 - Candlestick Mastery
  "candlestick-anatomy":
    "Each candlestick has a body (open to close) and wicks (high and low)—the anatomy tells the story. The lesson breaks down bullish vs bearish candles, long vs short bodies, and what wicks reveal about rejection. You'll read individual candles before learning patterns.",
  "single-candles":
    "Single-candle patterns—doji, hammer, shooting star—signal potential reversals or continuation. The lesson covers the most important ones: what they look like, what they mean, and when to trust them. You'll add these to your toolkit for reading price action.",
  "candlestick-patterns":
    "Multi-candle patterns—engulfing, morning star, three white soldiers—combine several candles for stronger signals. The lesson teaches recognition and interpretation, plus when patterns fail. You'll learn to use patterns as one input among many, not as holy grails.",
  "timeframes":
    "Candlestick patterns mean different things on different timeframes—a doji on 1m vs daily. The lesson connects candlesticks to timeframe analysis and shows how to align pattern signals with the trend. You'll avoid acting on noise by matching pattern to context.",
  "market-psychology":
    "Candlesticks reflect buyer and seller psychology—fear, greed, indecision, and conviction. The lesson explains how to read the market's mood from candle structure and volume. You'll see price action as a window into what participants are thinking and doing.",

  // Level 2 - Forex Deep Dive (sample; add more as needed)
  "forex-what":
    "Forex is the global market for trading currency pairs—buying one currency while selling another. The lesson explains how forex works: no central exchange, 24/5 trading, and the largest liquidity in the world. You'll understand why forex attracts day traders and what makes it unique.",
  "forex-pairs":
    "Currency pairs are quoted as base/quote—e.g., EUR/USD means euros per dollar. The lesson covers major, minor, and exotic pairs, and how to read a quote. You'll see why some pairs are more liquid and suitable for beginners than others.",
  "forex-major-pairs":
    "Major pairs—EUR/USD, GBP/USD, USD/JPY—involve the US dollar and have the tightest spreads. The lesson explains why majors are best for beginners: liquidity, low costs, and abundant analysis. You'll learn which majors suit different trading styles.",
  "forex-minor-pairs":
    "Minor pairs exclude the US dollar but include other majors—e.g., EUR/GBP, AUD/JPY. The lesson covers spreads, volatility, and when to trade minors. You'll understand the trade-off between lower liquidity and potential opportunity.",
  "forex-exotic-pairs":
    "Exotic pairs include a major and an emerging-market currency—e.g., USD/TRY, USD/ZAR. The lesson explains wide spreads, high volatility, and higher risk. You'll learn when experienced traders use exotics and why beginners should avoid them.",
  "forex-quoted":
    "Forex quotes show bid and ask—the price you sell at vs the price you buy at. The lesson explains the spread, pip values, and how to read a broker's quote. You'll see why understanding quotes is essential before placing a trade.",
  "forex-pips":
    "A pip is the smallest price move—usually the fourth decimal in forex. The lesson covers pip values, how to calculate profit/loss in pips, and why pips matter for position sizing. You'll speak the language of forex traders.",
  "forex-lots":
    "Lots define trade size—standard, mini, micro—and determine how much each pip is worth. The lesson explains lot sizes, leverage, and how to size positions correctly. You'll avoid overleveraging by understanding lot math.",
  "forex-leverage":
    "Leverage lets you control a large position with small capital—but amplifies both gains and losses. The lesson covers how leverage works, margin, and why high leverage is dangerous for beginners. You'll learn to use leverage responsibly.",
  "forex-hours":
    "Forex trades 24 hours from Sunday evening to Friday evening—with different sessions. The lesson explains the Asian, European, and US sessions and when each is most active. You'll know when to trade for maximum liquidity.",
  "forex-sessions":
    "The London and New York sessions overlap for the most volatile period—often the best for day traders. The lesson breaks down session characteristics: who's trading, typical moves, and when to avoid thin markets. You'll plan your trading around sessions.",
  "forex-best-times":
    "Best times to trade forex depend on your pair and strategy—overlaps and news matter. The lesson identifies high-probability windows and when to stay out. You'll optimize your schedule for your chosen pairs.",
  "forex-what-moves":
    "Forex moves on interest rates, economic data, geopolitics, and central bank policy. The lesson covers the main drivers and how to anticipate them. You'll build a calendar of events that move your pairs.",
  "forex-central-banks":
    "Central banks set interest rates and influence money supply—their decisions move currencies. The lesson explains the Fed, ECB, BOJ, and others, plus how to trade around announcements. You'll respect the impact of policy on forex.",
  "forex-carry-trade":
    "Carry trade profits from interest rate differentials—borrow low, invest high. The lesson covers how it works, when it's profitable, and the risks (e.g., sudden currency moves). You'll understand a major driver of long-term forex flow.",
  "forex-day-trading":
    "Forex day trading uses short timeframes and session volatility—no overnight risk. The lesson explains what works: liquid pairs, session overlap, and disciplined execution. You'll see how forex fits day trading vs other markets.",
  "forex-risks":
    "Forex risks include leverage, gaps, and geopolitical shocks—the lesson catalogues them. You'll learn how to manage each: position sizing, avoiding major news, and understanding correlation. Risk awareness keeps you in the game.",
  "forex-broker":
    "Choosing a forex broker means checking regulation, spreads, execution, and platform. The lesson outlines what to compare and red flags to avoid. You'll pick a broker that serves your strategy, not just the lowest spread.",
  "forex-demo":
    "Forex demo accounts let you practice with virtual money before going live. The lesson explains how to use them effectively—same platform, same discipline, and when to transition. You'll build skills without risking capital.",

  // Level 2 - Commodities (sample)
  "comm-what":
    "Commodities are raw materials—metals, energy, agricultural—traded globally. The lesson introduces the commodity universe and how traders access it via futures or ETFs. You'll see why commodities matter for diversification and inflation.",
  "comm-hard":
    "Hard commodities include metals (gold, silver, copper) and energy (oil, gas). The lesson covers what drives each and how they're traded. You'll understand supply, demand, and storage dynamics.",
  "comm-soft":
    "Soft commodities are agricultural—wheat, corn, coffee, sugar. The lesson explains seasonal patterns, weather, and why softs are volatile. You'll see how to approach agricultural markets.",
  "comm-gold":
    "Gold is a store of value, inflation hedge, and safe haven. The lesson covers what moves gold—dollar strength, rates, geopolitics—and how to trade it. You'll understand gold's unique role in portfolios.",
  "comm-silver":
    "Silver moves with gold but is more industrial—used in electronics and solar. The lesson explains the gold/silver ratio and silver-specific drivers. You'll see when silver leads or lags gold.",
  "comm-oil":
    "Oil (WTI, Brent) is driven by supply, demand, OPEC, and geopolitics. The lesson covers the oil market structure and how traders position. You'll understand one of the most important global commodities.",
  "comm-natgas":
    "Natural gas is seasonal and regional—weather and storage drive prices. The lesson explains natgas specifics vs oil. You'll see why it's more volatile and harder to trade than oil.",
  "comm-agri":
    "Agricultural commodities—corn, wheat, soybeans—depend on weather and harvests. The lesson covers seasonal cycles and how to approach ag markets. You'll understand the unique risks of soft commodities.",
  "comm-futures":
    "Commodities often trade as futures—contracts for future delivery. The lesson explains futures structure, expiry, and rollover. You'll see how futures differ from spot and why they matter for commodity exposure.",
  "comm-contracts":
    "Futures contracts specify quantity, quality, and delivery—the lesson breaks down contract specs. You'll learn tick sizes, margin, and how to read a futures quote.",
  "comm-contango":
    "Contango and backwardation describe the shape of the futures curve. The lesson explains what they mean for storage, supply, and roll costs. You'll understand how curve structure affects commodity ETFs and strategies.",
  "comm-drivers":
    "Commodity prices move on supply shocks, demand, dollar strength, and sentiment. The lesson catalogs the main drivers for each commodity class. You'll build a mental model for what moves prices.",
  "comm-seasonal":
    "Many commodities have seasonal patterns—harvest, heating demand, summer driving. The lesson covers key seasonal cycles and how to use them. You'll avoid fighting seasonal trends.",
  "comm-etfs-futures":
    "You can access commodities via ETFs (e.g., GLD, USO) or futures—each has pros and cons. The lesson compares costs, tracking, and roll issues. You'll choose the right vehicle for your strategy.",
  "comm-spreads":
    "Commodity spreads trade the price difference between related contracts—e.g., crack spread, calendar spread. The lesson introduces spread trading and when it's useful. You'll see alternatives to directional bets.",
  "comm-storage":
    "Storage costs and capacity affect commodity prices—especially for oil and gas. The lesson explains how storage shapes the curve and creates opportunities. You'll understand the physical side of commodity markets.",
  "comm-why-trade":
    "Traders use commodities for diversification, inflation hedging, and speculation. The lesson summarizes why commodities belong in a trader's toolkit and how to approach them. You'll connect commodities to your overall strategy.",

  // Level 2 - Stocks Deep Dive
  "stocks-how-it-works":
    "Stocks trade on exchanges—NYSE, Nasdaq—where buyers and sellers match. The lesson covers listing, order matching, and how a trade executes. You'll understand the plumbing of the stock market.",
  "stocks-ownership":
    "Owning a stock means owning a piece of the company—dividends, voting rights, and upside. The lesson explains shareholder rights and what you actually own. You'll see stocks as ownership, not just a ticker.",
  "stocks-market-cap":
    "Market cap is share price times shares outstanding—the total value of a company. The lesson covers large, mid, and small cap and why size matters for liquidity and volatility. You'll size companies correctly.",
  "stocks-sectors":
    "Stocks are grouped into sectors—tech, healthcare, energy, etc. The lesson explains sector rotation and why sector matters for diversification and trend. You'll use sectors to filter and diversify.",
  "stocks-blue-chip-penny":
    "Blue chips are established, liquid companies; penny stocks are small, speculative, and risky. The lesson contrasts them and explains why beginners should focus on quality. You'll avoid the penny stock trap.",
  "stocks-growth-value":
    "Growth stocks prioritize earnings growth; value stocks are cheap relative to fundamentals. The lesson explains both styles and when each tends to outperform. You'll understand how investors categorize stocks.",
  "stocks-dividends":
    "Dividends are cash payments from profits—income and a sign of financial health. The lesson covers dividend yield, payout ratio, and dividend growth. You'll see dividends as one component of stock returns.",
  "stocks-etfs":
    "ETFs bundle many stocks into one trade—instant diversification. The lesson explains how ETFs work, fees, and popular examples. You'll use ETFs for exposure without picking individual names.",
  "stocks-index-funds":
    "Index funds track a benchmark—S&P 500, Nasdaq—with low fees. The lesson covers why indexing works for many and how traders use index ETFs. You'll understand passive vs active approaches.",
  "stocks-splits":
    "Stock splits change share count and price—2-for-1 halves the price, doubles the shares. The lesson explains why companies split and that value doesn't change. You'll avoid confusion when a stock splits.",
  "stocks-pre-post":
    "Pre-market and after-hours trading extend the session with lower liquidity. The lesson covers hours, who trades then, and the risks. You'll know when extended hours matter for your strategy.",
  "stocks-finding":
    "Finding stocks to trade involves screeners, sectors, and catalysts. The lesson outlines how to build a watchlist and filter for liquidity and volatility. You'll develop a process for discovering opportunities.",
  "stocks-hours":
    "US stock market hours are 9:30 AM–4:00 PM ET, with pre- and post-market. The lesson explains when volume and volatility peak and how to plan your day. You'll align your trading with market structure.",
  "stocks-beginners":
    "Beginners should start with liquid, large-cap names—avoid illiquid and speculative stocks. The lesson recommends where to focus and what to avoid. You'll build a foundation before branching out.",

  // Level 2 - Crypto (sample)
  "crypto-what":
    "Cryptocurrency is digital money on blockchain—decentralized, 24/7, and volatile. The lesson introduces Bitcoin, Ethereum, and the broader crypto ecosystem. You'll understand what makes crypto different from traditional markets.",
  "crypto-blockchain":
    "Blockchain is the distributed ledger that secures crypto—transparent, immutable, and decentralized. The lesson explains the basics without the hype. You'll see why blockchain matters for crypto's value proposition.",
  "crypto-bitcoin":
    "Bitcoin is the first and largest crypto—digital gold, limited supply, and institutional adoption. The lesson covers what drives BTC price and how to approach it as a trader. You'll understand Bitcoin's role in crypto.",
  "crypto-ethereum":
    "Ethereum adds smart contracts—programmable money and DeFi. The lesson explains ETH's use cases and what moves its price. You'll see Ethereum as more than just another coin.",
  "crypto-altcoins":
    "Altcoins are everything except Bitcoin—thousands of projects with varying quality. The lesson covers how to evaluate them and the risks of speculation. You'll approach altcoins with caution.",
  "crypto-stablecoins":
    "Stablecoins peg to fiat—USDT, USDC—for stability within crypto. The lesson explains how they work and the risks (e.g., depegging). You'll use stablecoins for trading and risk management.",
  "crypto-exchanges":
    "Crypto exchanges—Coinbase, Binance, etc.—let you buy and sell. The lesson covers centralised vs decentralised, fees, and security. You'll choose an exchange that fits your needs.",
  "crypto-wallets":
    "Wallets hold your crypto—hot (online) vs cold (offline). The lesson explains custody, private keys, and how to stay secure. You'll protect your assets from hacks and scams.",
  "crypto-24-7":
    "Crypto trades 24/7—no closing bell, no weekends. The lesson explains the implications: constant exposure, weekend gaps, and different rhythm. You'll adapt your approach for always-on markets.",
  "crypto-volatility":
    "Crypto is extremely volatile—double-digit moves in hours are common. The lesson explains why and how to size and manage risk. You'll respect volatility instead of being destroyed by it.",
  "crypto-drivers":
    "Crypto moves on adoption, regulation, macro, and sentiment—different from stocks. The lesson catalogs the main drivers. You'll build a framework for what moves crypto prices.",
  "crypto-cap-supply":
    "Market cap and circulating supply matter for valuation—the lesson explains how. You'll avoid confusing price with value and understand supply mechanics.",
  "crypto-charts":
    "Crypto charts use the same tools as stocks—candlesticks, volume, support/resistance. The lesson applies technical analysis to crypto. You'll transfer your chart skills to a new asset class.",
  "crypto-risks":
    "Crypto risks include hacks, regulation, and extreme volatility—the lesson catalogues them. You'll learn how to protect yourself and size positions appropriately.",
  "crypto-best-practices":
    "Best practices for crypto: secure storage, avoid FOMO, and never invest more than you can lose. The lesson distills lessons from crypto's wild history. You'll trade crypto responsibly.",
  "crypto-starting-small":
    "Start small in crypto—learn the mechanics and volatility before scaling. The lesson offers a sensible path from first trade to consistent approach. You'll build experience without overexposure.",

  // Level 2 - Choosing Your Market
  "market-capital":
    "Capital requirements differ by market—stocks need more for pattern day trading; forex and crypto have lower bars. The lesson compares minimums and why they matter. You'll match your capital to your market.",
  "market-time":
    "Time commitment varies—day trading needs screen time; swing trading needs daily check-ins. The lesson helps you align your schedule with a style. You'll avoid markets that don't fit your life.",
  "market-volatility":
    "Volatility levels differ—forex majors are calmer than crypto; small caps more volatile than large. The lesson compares volatility across markets. You'll choose volatility that matches your risk tolerance.",
  "market-learning":
    "Learning curves vary—stocks are familiar; forex and crypto have unique concepts. The lesson outlines what you need to learn for each. You'll plan your education efficiently.",
  "market-costs":
    "Costs—commissions, spreads, fees—add up and affect profitability. The lesson compares cost structures across markets. You'll factor costs into your strategy and broker choice.",
  "market-liquidity":
    "Liquidity determines how easily you can enter and exit—majors are liquid; exotics are not. The lesson explains liquidity and why it matters. You'll avoid illiquid traps.",
  "market-leverage":
    "Leverage is available in forex and futures—less so in stocks (margin). The lesson compares leverage by market and the risks. You'll use leverage only when you understand it.",
  "market-tax":
    "Tax treatment differs—short-term vs long-term, forex vs stocks. The lesson covers the basics so you're not surprised at tax time. You'll plan for taxes in your strategy.",
  "market-personality":
    "Your personality—patient vs reactive, risk-tolerant vs conservative—fits some markets better. The lesson helps you match your style to a market. You'll trade where you're comfortable.",
  "market-multi":
    "You can trade multiple markets—but start with one and master it first. The lesson explains when and how to diversify across markets. You'll build focus before spreading thin.",
  "market-best-instruments":
    "Recommended liquid instruments by category: stocks (NVDA, AAPL, SPY, QQQ), forex (EUR/USD, GBP/USD, USD/JPY), futures (ES, MES, GC, CL), options (SPY, QQQ), commodities (gold, silver, oil), and crypto (BTC, ETH). Includes disclaimer—not financial advice.",
  "which-market-quiz":
    "A quiz helps you identify which market fits your capital, time, and personality. The lesson offers a structured way to decide. You'll make an informed choice instead of guessing.",

  // Level 2 - Support & Resistance
  "support-resistance":
    "Support is where buying emerges; resistance is where selling emerges—price floors and ceilings. The lesson defines both, how to identify them, and why they work. You'll use S/R as a core tool.",
  "sr-why-work":
    "S/R works because of memory, order clustering, and institutional levels. The lesson explains the psychology and mechanics. You'll trust levels with appropriate skepticism.",
  "sr-identifying":
    "Identifying S/R means looking for prior highs/lows, round numbers, and volume clusters. The lesson teaches how to draw levels. You'll build a repeatable process.",
  "sr-multiple-touches":
    "The more times price tests a level, the stronger it becomes—until it breaks. The lesson covers confluence and validation. You'll prioritize high-probability levels.",
  "sr-role-reversal":
    "Broken support becomes resistance; broken resistance becomes support—role reversal. The lesson explains why and how to trade it. You'll use failed levels as new levels.",
  "sr-drawing":
    "Drawing S/R correctly means zones, not lines, and using multiple timeframes. The lesson refines your technique. You'll avoid overfitting levels to history.",
  "sr-dynamic":
    "Dynamic S/R moves with price—moving averages, trendlines. The lesson contrasts static vs dynamic. You'll use both in context.",
  "sr-round-numbers":
    "Round numbers—100, 1000—often act as S/R because of psychology. The lesson explains when and how to use them. You'll add round numbers to your toolkit.",
  "sr-fibonacci":
    "Fibonacci retracements overlay levels on a move—38.2%, 50%, 61.8%. The lesson teaches how to draw and use them. You'll use Fib as confluence, not alone.",
  "sr-volume-profile":
    "Volume profile shows where most volume traded—potential S/R. The lesson introduces the concept and how to read it. You'll add volume context to price levels.",
  "sr-trading":
    "Trading at S/R means entries, stops, and targets—the lesson ties it together. You'll build a complete S/R strategy.",
  "sr-summary":
    "Support and resistance are foundational—floors and ceilings that guide entries and risk. The lesson recaps identification, role reversal, and trading application. You'll reinforce the module before moving on.",

  // Level 2 - Trendlines & Trends
  "trends":
    "An uptrend makes higher highs and higher lows; a downtrend makes lower highs and lower lows. The lesson defines trend and how to recognize it. You'll trade with the trend as a core rule.",
  "tl-downtrend":
    "Downtrends require lower highs and lower lows—selling pressure dominates. The lesson teaches how to identify and trade downtrends. You'll avoid catching falling knives.",
  "tl-sideways":
    "Sideways or ranging markets have no clear trend—different strategies apply. The lesson explains when to trade ranges vs when to wait. You'll avoid forcing trades in chop.",
  "tl-drawing":
    "Drawing trendlines connects swing highs or lows—the lesson refines your technique. You'll draw lines that matter, not random connects.",
  "tl-validation":
    "Valid trendlines need multiple touches and clean bounces. The lesson covers how to confirm. You'll avoid weak or overfitted lines.",
  "tl-breaks":
    "Trendline breaks can signal reversals or continuations—context matters. The lesson explains how to interpret breaks. You'll trade breaks with confirmation.",
  "tl-channels":
    "Channels contain price between parallel trendlines—useful for targets and stops. The lesson teaches channel trading. You'll add channels to your toolkit.",
  "tl-strength":
    "Trend strength varies—strong trends have clean structure; weak trends chop. The lesson helps you assess. You'll focus on high-quality trends.",
  "tl-friend":
    "The trend is your friend—trading with the trend has higher probability. The lesson reinforces this principle. You'll default to trend-following.",
  "tl-counter":
    "Counter-trend trading is possible but harder—requires precise entries. The lesson explains when experts go counter-trend. You'll avoid it until experienced.",
  "tl-summary":
    "Trendlines and trends guide direction—uptrend, downtrend, and when to sit out. The lesson recaps drawing, validation, and trading. You'll complete the trends module.",

  // Level 2 Exam
  "level-2-exam":
    "The Level 2 exam tests chart reading, candlesticks, markets, support/resistance, and trends. You'll answer 30 questions—pass with 80% to unlock Level 3. The exam ensures you're ready for technical analysis and strategies.",

  // Level 3 - Day Trading Fundamentals
  "day-trading-intro":
    "Day trading means opening and closing all positions within the same day—no overnight risk. The lesson defines it, covers the PDT rule, and explains capital and time requirements. You'll know what day trading really demands.",
  "day-trader-mindset":
    "Discipline, focus, and emotional control separate surviving day traders from those who blow up. The lesson explores the mindset: following the plan, cutting losses, and avoiding revenge trades. You'll build the psychological foundation.",
  "day-trading-summary":
    "Day trading requires capital, time, and the right mindset—the lesson recaps definition, PDT, and psychology. You'll consolidate the fundamentals before diving into strategies.",

  // Level 3 - Moving Averages
  "ma-intro":
    "Moving averages smooth price data and reveal trend direction—a core technical tool. The lesson introduces SMA and EMA, and why traders use them. You'll add MAs to your chart analysis.",
  "ma-sma":
    "The Simple Moving Average gives equal weight to each period—easy to calculate and interpret. The lesson covers calculation and use. You'll understand SMA before moving to EMA.",
  "ma-ema":
    "The Exponential Moving Average gives more weight to recent prices—faster to react. The lesson explains why traders often prefer EMA for entries. You'll choose the right MA type for your style.",
  "ma-periods":
    "Common periods are 20, 50, 100, 200—each serves a different purpose. The lesson matches period to timeframe and strategy. You'll avoid arbitrary MA choices.",
  "ma-fast-slow":
    "Fast and slow MAs interact—crossovers signal momentum shifts. The lesson covers how they work together. You'll use MA pairs for signals.",
  "ma-sr":
    "Moving averages can act as dynamic support and resistance—price bounces off them. The lesson teaches how to trade MA bounces. You'll use MAs for entries in trends.",
  "ma-golden":
    "The Golden Cross occurs when the 50-period MA crosses above the 200-period MA—a classic bullish long-term signal watched by investors worldwide. The lesson explains what it means, why it matters for trend confirmation, and how to use it without over-relying on its lag. You'll recognize this widely followed indicator and understand when it adds value.",
  "ma-death":
    "The Death Cross occurs when the 50-period MA crosses below the 200-period MA—signaling potential bearish momentum for the longer term. The lesson covers interpretation, the lag inherent in such long-period crosses, and why you should use it as confirmation rather than precise timing. You'll avoid chasing the signal after the move has already happened.",
  "ma-crossover":
    "MA crossover strategies generate buy/sell signals—but lag and whipsaw. The lesson teaches how to improve them with filters. You'll trade crossovers with context.",
  "ma-triple":
    "A three-MA system stacks short, medium, and long MAs for trend and signal. The lesson outlines setup and use. You'll add structure to your MA analysis.",
  "ma-works":
    "MAs work best in trending markets—they fail in chop. The lesson identifies when to use them. You'll avoid using MAs in the wrong conditions.",
  "ma-fails":
    "MAs whipsaw in sideways markets—the lesson explains how to detect and avoid. You'll know when to turn off MA signals.",

  // Level 3 - Momentum
  "mom-intro":
    "Momentum measures the rate of price change—RSI, MACD, Stochastic. The lesson introduces momentum and why it matters. You'll add momentum to your toolkit.",
  "mom-rsi":
    "RSI shows overbought/oversold and strength—the lesson covers calculation and signals. You'll use RSI for entries and exits.",
  "mom-rsi-divergence":
    "RSI divergence—price makes new high, RSI doesn't—can signal reversals. The lesson teaches recognition and confirmation. You'll add divergence as a filter.",
  "mom-macd":
    "MACD combines trend and momentum—line, signal, histogram. The lesson breaks down each component. You'll read MACD correctly.",
  "mom-macd-crossovers":
    "MACD crossovers and histogram changes generate signals. The lesson covers interpretation and lag. You'll trade MACD with awareness of its timing.",
  "mom-macd-divergence":
    "MACD divergence, like RSI divergence, can warn of reversals. The lesson teaches how to spot and use it. You'll use divergence as confirmation.",
  "mom-stochastic":
    "Stochastic shows overbought/oversold with %K and %D. The lesson covers calculation and crossovers. You'll add Stochastic to your momentum suite.",
  "mom-cci-williams":
    "CCI (Commodity Channel Index) and Williams %R are momentum oscillators that measure overbought/oversold differently than RSI. The lesson introduces their calculations and signals, and when each adds value. You'll expand your momentum toolkit and know when to use CCI or Williams %R instead of or alongside RSI.",
  "mom-roc":
    "Rate of Change measures price change over a period—simple momentum. The lesson covers ROC and divergence. You'll have another momentum option.",
  "mom-summary":
    "Momentum indicators—RSI, MACD, Stochastic—work together; avoid overload. The lesson recaps when to use each and how to combine. You'll finish the momentum module.",

  // Level 3 - Volatility
  "vol-intro":
    "Volatility measures price range and uncertainty—essential for position sizing and stops. The lesson defines volatility and how to measure it. You'll use volatility in risk management.",
  "vol-bollinger":
    "Bollinger Bands show volatility with a middle line and standard deviation bands. The lesson covers squeeze and expansion. You'll read Bollinger Bands for volatility and mean reversion.",
  "vol-bollinger-trading":
    "Trade Bollinger Bands with bounces, breakouts, and trend filters. The lesson ties theory to practice. You'll apply Bollinger strategies.",
  "vol-atr":
    "ATR (Average True Range) measures volatility in price units—ideal for stops. The lesson covers calculation and use. You'll use ATR for dynamic stops.",
  "vol-atr-stops":
    "ATR-based stops adapt to volatility—wider in volatile markets, tighter in calm. The lesson teaches the formula and application. You'll place stops that make sense.",
  "vol-keltner":
    "Keltner Channels use ATR instead of standard deviation for the bands—giving a different volatility envelope than Bollinger Bands. The lesson compares their structure, when they squeeze or expand, and how to trade them. You'll know when Keltner adds value over Bollinger and when to use each tool.",
  "vol-donchian":
    "Donchian Channels use high-low range—basis of the Turtle Trading system. The lesson covers structure and breakout use. You'll add Donchian to your toolkit.",
  "vol-stdev":
    "Standard deviation quantifies how much price varies from its average—the math behind Bollinger Bands and many risk metrics. The lesson explains the concept in practical terms and how traders use it to measure volatility. You'll understand the volatility math that underpins your indicators and position sizing.",
  "vol-summary":
    "Volatility indicators—Bollinger, ATR, Keltner, Donchian—each have a role. The lesson recaps when to use each and combine with trend. You'll complete the volatility module.",

  // Level 3 - Risk Management
  "position-sizing":
    "Position sizing determines how much you risk per trade—the 1% rule is a starting point. The lesson covers the formula: risk amount divided by stop distance. You'll size positions to survive drawdowns.",
  "stop-losses":
    "Stop losses limit loss per trade—technical or ATR-based placement. The lesson teaches where to place stops and why. You'll never enter without a stop.",
  "risk-mistakes":
    "Averaging down, overtrading, and no stops are common fatal mistakes. The lesson catalogs them and how to avoid. You'll protect your account.",
  "risk-summary":
    "Risk management—position sizing, stops, and discipline—is non-negotiable. The lesson recaps the rules and builds a checklist. You'll lock in the risk module.",

  // Level 3 - Options, Fundamentals, Psychology, Plan, Strategies
  "options-basics":
    "Options give the right to buy (call) or sell (put) at a strike price by expiry. The lesson introduces calls, puts, and basic terminology. You'll understand options before using them.",
  "options-greeks":
    "Greeks—Delta, Gamma, Theta, Vega—measure how option price changes. The lesson explains each and why they matter. You'll manage option risk with Greeks.",
  "options-strategies":
    "Basic strategies include covered calls, protective puts, and spreads. The lesson covers when to use each. You'll add options to your toolkit strategically.",
  "options-summary":
    "Options add leverage and flexibility—but complexity and decay. The lesson recaps when to use options and key concepts. You'll complete the options module.",

  "financial-statements":
    "The income statement, balance sheet, and cash flow statement reveal a company's health. The lesson teaches how to read each. You'll use financials for fundamental analysis.",
  "key-ratios":
    "P/E, P/B, ROE, and margins help compare and value companies. The lesson covers key ratios and red flags. You'll screen and analyze with fundamentals.",
  "earnings-trading":
    "Earnings reports move stock prices—volatility and gap risk. The lesson explains how to trade around earnings or avoid them. You'll manage earnings exposure.",
  "news-trading":
    "News drives price through implications—Fed, economic data, company-specific, and geopolitics. The lesson teaches how to interpret news, anticipate reactions, and trade the reaction rather than the headline. With the Headline vs Reality analogy, a Fed-cut example, and common traps, you'll use calendars and structure for high-quality news trades.",
  "fundamentals-summary":
    "Fundamentals matter for investing and swing trading—less for day trading. The lesson recaps when to use fundamentals vs technicals. You'll complete the fundamentals module.",

  "psychology-basics":
    "Fear, greed, and discipline drive outcomes—emotions undermine plans. The lesson covers recognizing and managing emotions. You'll build emotional control.",
  "cognitive-biases":
    "Confirmation bias, anchoring, recency, and loss aversion hurt traders. The lesson names them and how to reduce impact. You'll think more clearly.",
  "trading-journal":
    "A trading journal tracks trades, emotions, and lessons—essential for improvement. The lesson teaches how to keep and use one. You'll build a habit of reflection.",
  "psychology-summary":
    "Psychology separates surviving traders from those who blow up. The lesson recaps emotions, biases, and journaling. You'll complete the psychology module.",

  "trading-plan-intro":
    "A trading plan defines rules—entries, exits, risk—so emotion doesn't override. The lesson explains why a plan is non-negotiable. You'll commit to writing one.",
  "plan-template":
    "A plan template covers goals, markets, style, entry/exit rules, and loss limits. The lesson walks through each section. You'll build your plan step by step.",
  "plan-summary":
    "A written trading plan keeps you accountable and overrides emotion when the market tests you. The lesson recaps why a plan is non-negotiable, what it should include, and how to use it in daily practice. You'll finish the trading plan module with a clear framework for your own rules.",

  "orb-strategy":
    "Opening Range Breakout (ORB) trades the break of the first 15–30 minutes' range. The lesson covers setup, entry, stop, and target. You'll add ORB to your strategy toolkit.",
  "vwap-strategy":
    "VWAP acts as intraday support/resistance—pullbacks to VWAP in a trend offer entries. The lesson teaches how to use VWAP. You'll trade with institutional flow.",
  "breakout-strategy":
    "Breakout trading enters when price breaks key levels—with volume confirmation. The lesson covers identification and risk management. You'll trade breakouts systematically.",
  "entry-timing":
    "Knowing when to enter and when not to enter separates disciplined traders from overtraders. The lesson covers clear setup + alignment, confluence, and the traps to avoid: choppy markets, counter-trend, no stop, and emotional trading. With positive and negative examples, the sniper analogy, and the no-trade log, you'll build a filter for high-quality entries only.",
  "strategies-summary":
    "ORB, VWAP, and breakout strategies each have a role—the lesson recaps when to use each. You'll complete the strategies module.",

  "broker-criteria":
    "Choose a broker for regulation, fees, execution, and platform—not just the bonus. The lesson outlines what to compare. You'll pick a broker that serves your strategy.",
  "demo-practice":
    "Demo practice builds skills without risk—treat it like live money. The lesson explains how to practice effectively. You'll transition from demo to live when ready.",
  "broker-summary":
    "Broker choice and demo practice set you up for success—regulation, fees, execution, and platform matter. The lesson recaps what to compare when selecting a broker and how to use demo accounts effectively before going live. You'll complete the broker module with a clear path to opening an account.",

  "order-types":
    "Market, limit, and stop orders each have a use—immediate fill vs price control. The lesson covers when to use each. You'll place orders correctly.",
  "order-execution":
    "Orders fill through market makers or ECNs—slippage and liquidity matter. The lesson explains execution and how to get fair fills. You'll understand the mechanics.",
  "mechanics-summary":
    "Order types and execution are the plumbing of trading—market, limit, and stop orders each have a purpose. The lesson recaps when to use each type and how orders get filled through market makers or ECNs. You'll complete the mechanics module with a solid understanding of how trades reach the market.",

  "costs-overview":
    "Commissions, spreads, and fees add up—they reduce profitability. The lesson catalogs costs and how to minimize them. You'll factor costs into your edge.",
  "tax-implications":
    "Short-term gains are taxed as ordinary income; long-term get lower rates. The lesson covers basics and wash sale rule. You'll plan for taxes.",
  "profitability":
    "Break-even win rate depends on your risk-reward ratio—the lesson teaches the math so you know what win rate you need to be profitable. You'll set realistic profit expectations and understand why costs and risk-reward matter more than raw win rate for long-term success.",
  "costs-summary":
    "Costs and taxes eat into returns—the lesson recaps how to manage them. You'll complete the costs module.",

  // Level 3 Exam
  "level-3-exam":
    "The Level 3 exam tests technical analysis, risk management, strategies, and psychology. You'll answer 40 questions—pass with 80% to unlock Level 4. The exam ensures you're ready for advanced topics.",

  // Level 4 - Derivatives, Portfolio, Advanced Technical, Intermarket
  "futures-basics":
    "Futures are contracts to buy/sell at a future date—used for commodities, indices, and currencies. The lesson introduces structure and margin. You'll understand futures before trading them.",
  "leverage-margin":
    "Leverage and margin allow controlling large positions with less capital—but amplify risk. The lesson explains how they work and the dangers. You'll use leverage responsibly.",
  "derivatives-summary":
    "Futures, leverage, and margin open new strategies—but also new risks. The lesson recaps the key concepts: contract structure, margin requirements, and why understanding derivatives matters before you trade them. You'll complete the derivatives module with a clear picture of when and how to use them.",

  "mpt-basics":
    "Modern Portfolio Theory balances risk and return through diversification. The lesson introduces MPT and efficient frontiers. You'll think in portfolio terms.",
  "diversification":
    "Diversification reduces risk by spreading across assets—don't put all eggs in one basket. The lesson covers how and when it helps. You'll build robust portfolios.",
  "rebalancing":
    "Rebalancing brings the portfolio back to target weights—disciplined selling high, buying low. The lesson teaches when and how. You'll maintain allocation over time.",
  "portfolio-summary":
    "MPT, diversification, and rebalancing are pillars of portfolio management—balancing risk and return across assets. The lesson recaps the key ideas and how to apply them whether you're building a long-term portfolio or managing trading capital. You'll complete the portfolio module with a framework for allocation.",

  "fibonacci":
    "Fibonacci retracements (38.2%, 50%, 61.8%) identify potential pullback levels. The lesson teaches how to draw and use them. You'll add Fib as confluence.",
  "elliott-wave":
    "Elliott Wave theory proposes market structure in waves—complex and subjective. The lesson introduces the basics. You'll understand the concept without over-relying.",
  "wyckoff":
    "Wyckoff analysis focuses on accumulation, distribution, and institutional flow. The lesson covers the key phases. You'll add another lens for price action.",
  "advanced-technical-summary":
    "Fibonacci, Elliott Wave, and Wyckoff are advanced technical tools—each with strengths and subjectivity. The lesson recaps when to use each, how to avoid over-relying on them, and how they fit with price action and volume. You'll complete the advanced technical module with a broader toolkit.",

  "intermarket-basics":
    "Markets influence each other—stocks, bonds, commodities, and currencies are linked. The lesson introduces intermarket relationships. You'll see the big picture.",
  "vix-fear":
    "The VIX measures implied volatility—fear and complacency in the market. The lesson explains how to read and use it. You'll add VIX to your toolkit.",
  "top-down-analysis":
    "Top-down analysis filters from macro → sector → asset → entry. The lesson teaches how to align trades with the tide: check rates, growth, and risk sentiment first; then sector leadership; then the best technical setup. With the funnel analogy, trade and counter-examples, and a pre-open checklist, you'll enter only when the bigger picture supports the trade.",
  "intermarket-summary":
    "Intermarket analysis and the VIX provide context for your trades—how stocks, bonds, commodities, and currencies influence each other. The lesson recaps the key relationships and how to use the fear gauge in your analysis. You'll complete the intermarket module with a bigger-picture view of markets.",

  // Level 4 Exam
  "level-4-exam":
    "The Level 4 exam tests options, derivatives, portfolio theory, and advanced technicals. You'll answer 40 questions—pass with 80% to unlock Level 5. The exam ensures readiness for quantitative trading.",

  // Level 5 - Python, Data, Backtesting, Quant Strategies, ML, Risk Metrics, Automated
  "python-basics":
    "Python is the language of quantitative trading—pandas, NumPy, and data handling. The lesson introduces the basics you need. You'll start coding for trading.",
  "python-data":
    "Loading and manipulating market data in Python—OHLCV, cleaning, and alignment. The lesson walks through data workflows. You'll handle data programmatically.",
  "first-strategy":
    "Building your first algorithmic strategy in Python—from idea to backtest. The lesson ties data and logic together. You'll have a working strategy.",
  "python-summary":
    "Python opens the door to systematic trading—data handling, backtesting, and automation. The lesson recaps the basics you've learned and the next steps toward building and testing strategies programmatically. You'll complete the Python module ready to move into data acquisition and backtesting.",

  "data-sources":
    "Market data comes from free and paid APIs—each with terms and limitations. The lesson compares sources. You'll choose data that fits your needs.",
  "data-cleaning":
    "Data needs cleaning—missing values, splits, dividends, alignment. The lesson covers common issues. You'll prepare data for backtesting.",
  "data-summary":
    "Data acquisition and cleaning are foundational for quantitative trading—garbage in, garbage out. The lesson recaps data sources, common cleaning tasks, and why getting the data right matters before backtesting. You'll complete the data module ready to feed clean data into your strategies.",

  "backtest-basics":
    "Backtesting tests a strategy on historical data—but bias can make results misleading. The lesson explains look-ahead bias and realistic simulation. You'll backtest correctly.",
  "backtest-pitfalls":
    "Overfitting, survivorship bias, and ignoring costs ruin backtests. The lesson catalogs pitfalls. You'll avoid false confidence.",
  "walk-forward":
    "Walk-forward analysis tests out-of-sample as you roll forward—reduces overfitting. The lesson teaches the method. You'll validate strategies properly.",
  "backtest-summary":
    "Backtesting requires care—bias, overfitting, and unrealistic assumptions can make results misleading. The lesson recaps best practices: walk-forward analysis, realistic costs, and treating backtest results with appropriate skepticism. You'll complete the backtesting module ready to validate strategies properly.",

  "mean-reversion":
    "Mean reversion strategies bet price returns to average—Bollinger, RSI, z-score. The lesson covers concept and implementation. You'll add mean reversion to your arsenal.",
  "momentum-strategies":
    "Momentum strategies ride trends—time-series and cross-sectional. The lesson covers MA crossovers and breakouts. You'll implement momentum systems.",
  "pairs-trading":
    "Pairs trading exploits the spread between correlated assets—cointegration and entry/exit. The lesson teaches the framework. You'll understand statistical arbitrage.",
  "quant-strategies-summary":
    "Mean reversion, momentum, and pairs trading are core quantitative approaches—each with different market conditions where they shine. The lesson recaps when to use each, how they differ, and what to watch for when implementing them. You'll complete the quant strategies module ready to explore machine learning.",

  "ml-overview":
    "Machine learning can help with prediction—but realistic expectations and validation matter. The lesson covers when ML adds value. You'll approach ML with caution.",
  "feature-engineering":
    "Features drive ML performance—lags, normalization, target definition. The lesson teaches how to build features. You'll prepare data for models.",
  "overfitting":
    "Overfitting kills live performance—train/test, walk-forward, and simplicity. The lesson explains how to avoid it. You'll build robust models.",
  "ml-summary":
    "ML for trading is powerful but risky—overfitting and unrealistic expectations can doom live performance. The lesson recaps the caution and best practices: feature engineering, validation, and when ML actually adds value. You'll complete the ML module with a sober view of its role in systematic trading.",

  "sharpe-sortino":
    "Sharpe and Sortino ratios measure risk-adjusted return—essential for comparing strategies. The lesson covers calculation and interpretation. You'll evaluate performance properly.",
  "drawdown-analysis":
    "Max drawdown and recovery time show worst-case loss—critical for sizing and psychology. The lesson teaches how to analyze drawdowns. You'll size for drawdowns.",
  "monte-carlo":
    "Monte Carlo simulation tests strategy robustness with random scenarios. The lesson introduces the method. You'll stress-test your strategies.",
  "risk-metrics-summary":
    "Sharpe, Sortino, drawdown, and Monte Carlo complete the risk toolkit—essential for evaluating and comparing strategies. The lesson recaps how each metric helps you size risk, stress-test systems, and make informed decisions. You'll complete the risk metrics module ready for automated systems.",

  "automation-workflow":
    "Automated trading requires data, strategy, execution, and monitoring—a full pipeline. The lesson outlines the architecture. You'll understand the workflow.",
  "paper-automation":
    "Paper trade your automated system before going live—sim vs live differences matter. The lesson explains what to check. You'll validate in paper first.",
  "live-deployment":
    "Going live requires a checklist—kill switch, alerts, runbook. The lesson covers deployment best practices. You'll deploy safely.",
  "automated-summary":
    "Automated systems complete the quant journey—from data and strategy to execution and monitoring. The lesson recaps the full workflow, paper-trading before live, and the safety checklist for deployment. You'll finish the course with a complete picture of building and running automated trading systems.",

  // Level 5 Exam
  "level-5-exam":
    "The Level 5 exam plus coding assessment certifies your quantitative trading knowledge—from Python and data through backtesting, strategies, ML, and automated systems. Pass with 85% to earn certification and demonstrate mastery of the full curriculum from beginner to quant trader.",
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
