import type { Lesson } from "../../types";

export const level1Lessons: Lesson[] = [
  {
    id: "money-basics",
    title: "What is Money and Why Do We Use It?",
    slug: "what-is-money",
    level: 1,
    moduleId: "foundations-money",
    order: 1,
    duration: "8 min",
    objectives: [
      "Understand what money is and why we use it instead of bartering",
      "Learn the three main functions of money",
      "See how money makes trading possible",
    ],
    prerequisites: [],
    content: [
      {
        type: "text",
        heading: "Why Does This Matter?",
        content:
          "Before you can understand trading, you need to understand money. Money is the tool that makes all trading possible. Imagine trying to trade your lemonade for a video game - the game shop owner might not want lemonade! Money solves this problem.",
      },
      {
        type: "analogy",
        heading: "Think of Money Like Video Game Currency",
        content:
          "In a video game, you earn gold or coins by completing quests. You use that currency to buy weapons, armor, or items. You can't directly trade 'defeating 10 goblins' for a sword - you need the game's currency in between. Real money works the same way in our economy!",
      },
      {
        type: "text",
        heading: "The Three Jobs of Money",
        content:
          "Money has three main jobs: (1) Medium of exchange - you can use it to buy anything; (2) Store of value - you can save it for later and it (usually) keeps its worth; (3) Unit of account - we measure the value of things in money (this car costs $20,000).",
      },
      {
        type: "text",
        heading: "From Barter to Money",
        content:
          "Long ago, people bartered - trading things directly. If you had extra apples and wanted bread, you needed to find someone with extra bread who wanted apples. Money changed everything: now you sell your apples for money, then use that money to buy bread from anyone.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why might a society switch from barter to money?",
        component: "ConceptCheck",
        props: { question: "Why might a society switch from barter to money?", reveal: "Because barter requires a 'double coincidence of wants'—you must find someone who has what you want and wants what you have. Money lets everyone trade with everyone else through one common medium." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Money is a tool that makes trading possible. Without it, we'd be stuck trying to find someone who wants exactly what we have and has exactly what we want. Money is the 'middle man' that makes the whole economy work.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "money-value",
    title: "How Does Money Get Its Value?",
    slug: "how-money-gets-value",
    level: 1,
    moduleId: "foundations-money",
    order: 2,
    duration: "8 min",
    objectives: [
      "Understand that money's value comes from supply, demand, and trust",
      "See why governments and central banks matter",
      "Learn why inflation erodes purchasing power",
    ],
    prerequisites: ["money-basics"],
    content: [
      {
        type: "text",
        heading: "Why Does This Matter?",
        content:
          "A dollar today might buy less in 10 years. Currencies can strengthen or weaken. Understanding where money's value comes from helps you see why prices change and why traders watch central banks and economic data.",
      },
      {
        type: "text",
        heading: "Supply, Demand, and Trust",
        content:
          "Money holds value because people accept it in exchange for goods and services (demand) and because its supply isn't infinite (supply). If a government printed trillions of new units, each unit would be worth less—that's inflation. Trust matters too: if people lost faith in a currency, they'd dump it and its value would fall.",
      },
      {
        type: "interactive",
        heading: "Try It: Supply & Demand",
        content: "See how supply and demand affect price level.",
        component: "SupplyDemandSimulator",
        props: { description: "Move the sliders. More demand than supply pushes price up; more supply than demand pushes price down. This is the same idea that drives currency and asset prices." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Money's value depends on supply (how much exists), demand (how much people want it), and trust. Central banks influence supply; economic health and interest rates influence demand. As a trader, you'll care about these when trading forex or thinking about inflation.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "value-prices",
    title: "What Makes Prices Go Up and Down?",
    slug: "value-and-prices",
    level: 1,
    moduleId: "foundations-money",
    order: 3,
    duration: "10 min",
    objectives: [
      "Understand the difference between value and price",
      "Learn how supply and demand affect prices",
      "See why prices change over time",
    ],
    prerequisites: ["money-basics", "money-value"],
    content: [
      {
        type: "text",
        heading: "Value vs Price",
        content:
          "Value is what something is worth TO YOU - it's personal. A rare trading card might be priceless to a collector but worthless to someone who doesn't collect. Price is what people actually pay in the market - it's where buyers and sellers agree to trade.",
      },
      {
        type: "analogy",
        heading: "The Lemonade Stand",
        content:
          "Imagine you run a lemonade stand. On a hot day, lots of people want lemonade (high demand) - you can charge more. On a cold rainy day, nobody wants it (low demand) - you might lower your price to sell any. When lemons are scarce and expensive (low supply), you charge more. When lemons are cheap and plentiful (high supply), you can charge less. This is supply and demand in action!",
      },
      {
        type: "text",
        heading: "Prices Are Like a Compass",
        content:
          "In markets, prices constantly move as new information arrives. If a company announces great news, more people want to buy - price goes up. If bad news hits, people want to sell - price goes down. The price is always searching for the point where buyers and sellers agree.",
      },
      {
        type: "interactive",
        heading: "Try It: Supply & Demand Simulator",
        content: "Adjust demand and supply to see how the equilibrium price level changes.",
        component: "SupplyDemandSimulator",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Prices aren't random - they reflect supply and demand. When more people want to buy than sell, prices rise. When more people want to sell than buy, prices fall. Understanding this is the foundation of understanding any market.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "intro-markets",
    title: "Introduction to Markets",
    slug: "intro-markets",
    level: 1,
    moduleId: "foundations-money",
    order: 4,
    duration: "8 min",
    objectives: [
      "Understand what a marketplace is",
      "See how buyers and sellers meet",
      "Connect this to financial markets",
    ],
    prerequisites: ["value-prices"],
    content: [
      {
        type: "text",
        heading: "What is a Marketplace?",
        content:
          "A market is any place where buyers and sellers come together to trade. A farmers' market, an online store, or a stock exchange—all are markets. In each case, there's something being traded, a price, and agreement between buyer and seller.",
      },
      {
        type: "text",
        heading: "Financial Markets",
        content:
          "In financial markets, people trade assets: stocks, currencies, commodities, crypto. These markets can be physical (like a trading floor) or electronic. Prices move as buyers and sellers agree on new levels. When you trade, you're participating in that global marketplace.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What do a farmers' market and a stock exchange have in common?",
        component: "ConceptCheck",
        props: { question: "What do a farmers' market and a stock exchange have in common?", reveal: "Both are markets: buyers and sellers meet, something is traded, and a price is agreed. The stock exchange just trades shares instead of vegetables—the same supply/demand and agreement ideas apply." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Markets are where buyers and sellers meet and agree on prices. Financial markets are the same idea—just with stocks, forex, and other assets. Understanding markets starts with understanding that simple exchange.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "concept-of-value",
    title: "The Concept of Value",
    slug: "concept-of-value",
    level: 1,
    moduleId: "foundations-money",
    order: 5,
    duration: "8 min",
    objectives: [
      "Understand intrinsic vs market value",
      "See why they can differ",
      "Apply this to trading decisions",
    ],
    prerequisites: ["intro-markets"],
    content: [
      {
        type: "text",
        heading: "Intrinsic vs Market Value",
        content:
          "Intrinsic value is what something is 'really' worth based on fundamentals—e.g. a company's assets and future cash flows. Market value is what people are actually paying right now. They often differ. A stock might trade above intrinsic value (overvalued) or below (undervalued). Traders and investors use different tools to decide when market price is too high or too low.",
      },
      {
        type: "text",
        heading: "Why This Matters for You",
        content:
          "As a trader, you'll often focus on price action and market value—what the crowd is doing. As you learn more, you can combine that with ideas about intrinsic value. For now, remember: the price on the screen is market value; it can stay above or below what seems 'fair' for a long time.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Can a stock's price stay above its intrinsic value for a long time?",
        component: "ConceptCheck",
        props: { question: "Can a stock's price stay above its intrinsic value for a long time?", reveal: "Yes. Market value is set by supply and demand right now. Sentiment and momentum can keep price above or below intrinsic value for months or years. That's why 'overvalued' doesn't mean the price will drop tomorrow." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Intrinsic value = what something might be worth by some measure. Market value = what people are paying. They can diverge. Trading and investing both involve forming a view on that difference.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "buying-selling",
    title: "Introduction to Buying and Selling",
    slug: "buying-selling",
    level: 1,
    moduleId: "foundations-money",
    order: 3,
    duration: "8 min",
    objectives: [
      "Understand what happens when you buy or sell something",
      "Learn about buyers and sellers in markets",
      "See how every trade has two sides",
    ],
    prerequisites: ["money-basics", "value-prices"],
    content: [
      {
        type: "text",
        heading: "Every Trade Has Two Sides",
        content:
          "When you buy something, someone else is selling. When you sell, someone else is buying. There's no such thing as a one-sided trade. In financial markets, this happens millions of times per second - buyers and sellers constantly matching up.",
      },
      {
        type: "analogy",
        heading: "Like a Flea Market",
        content:
          "At a flea market, some people walk around looking to buy (buyers), and some have stalls with stuff to sell (sellers). They negotiate - 'I'll give you $5 for that.' 'Deal!' The moment they agree, a trade happens. Stock markets work the same way, just much faster and with computers matching buyers and sellers.",
      },
      {
        type: "text",
        heading: "Why Do People Buy and Sell at Different Times?",
        content:
          "Buyers think the price will go UP - they want to get in before it does. Sellers think the price will go DOWN - they want to get out before they lose money. Or maybe the seller needs cash for something else. Different people have different reasons, and that's what makes markets work.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Buying and selling is the basic activity of all markets. You're always on one side - when you buy, you're betting the price will go up. When you sell, you're either taking profit, cutting losses, or think it will go down. There's no trade without both a buyer AND a seller.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "what-is-trading",
    title: "What is Trading vs Investing?",
    slug: "what-is-trading",
    level: 1,
    moduleId: "foundations-trading",
    order: 1,
    duration: "10 min",
    objectives: [
      "Understand the difference between trading and investing",
      "Learn the time horizons for each approach",
      "See when each approach might make sense",
    ],
    prerequisites: ["buying-selling"],
    content: [
      {
        type: "text",
        heading: "Why Does This Matter?",
        content:
          "Trading and investing are often confused, but they're very different. Investors think in years or decades. Traders might hold for minutes or days. The skills, risks, and mindset required are different. Choosing the right approach for YOU is critical.",
      },
      {
        type: "text",
        heading: "Investing: The Long Game",
        content:
          "Investors buy assets (like stocks) and hold them for a long time - often years or decades. They believe the company will grow over time and the investment will become more valuable. Famous investor Warren Buffett says his favorite holding period is 'forever.' Investors care about the business's health, not daily price movements.",
      },
      {
        type: "text",
        heading: "Trading: The Short Game",
        content:
          "Traders buy and sell frequently to profit from price movements. A day trader might buy in the morning and sell by afternoon. A swing trader might hold for days or weeks. Traders care about price patterns, momentum, and short-term supply and demand - not necessarily the long-term business fundamentals.",
      },
      {
        type: "warning",
        heading: "Important Reality Check",
        content:
          "Studies show that the majority of retail traders lose money - some estimates say 70-90%. Trading is hard. It requires discipline, education, and emotional control. Many people are better off with long-term investing. We'll teach you trading properly so you can make an informed choice - but never risk money you can't afford to lose.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Investing = buy and hold for years, focus on business value. Trading = buy and sell frequently, focus on price movements. Both can be valid - but they require different skills and suit different personalities. Most beginners should start by learning, not trading with real money.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "trader-types",
    title: "Different Types of Traders",
    slug: "trader-types",
    level: 1,
    moduleId: "foundations-trading",
    order: 3,
    duration: "8 min",
    objectives: [
      "Learn about day traders, swing traders, and position traders",
      "Understand the time commitment for each style",
      "See which might fit your lifestyle",
    ],
    prerequisites: ["what-is-trading"],
    content: [
      {
        type: "text",
        heading: "Day Traders",
        content:
          "Day traders open and close all positions within the same day. They never hold overnight. This requires watching the markets during trading hours (9:30 AM - 4 PM Eastern for US stocks). Day trading requires focus, quick decisions, and often significant capital (the Pattern Day Trader rule requires $25,000 minimum for US stocks).",
      },
      {
        type: "text",
        heading: "Swing Traders",
        content:
          "Swing traders hold positions for days to weeks. They capture 'swings' in price - the up and down movements within a trend. This style is more flexible - you don't need to watch the screen all day. Many part-time traders use swing trading because it fits around a day job.",
      },
      {
        type: "text",
        heading: "Position Traders",
        content:
          "Position traders hold for weeks to months. They're closer to investors but still make active decisions based on technical or fundamental analysis. They ride longer trends and need less screen time than day or swing traders.",
      },
      {
        type: "text",
        heading: "Scalpers (The Fastest)",
        content:
          "Scalpers make many tiny trades throughout the day, holding for seconds or minutes. They profit from small price movements. This requires the most screen time, the fastest execution, and often the most experience. Not recommended for beginners.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Your trading style should match your lifestyle. Can you watch markets all day? Day trading might work. Do you have a full-time job? Swing trading could fit better. Be honest about your time and commitment - that determines which style makes sense.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "risk-reward",
    title: "The Concept of Risk and Reward",
    slug: "risk-reward",
    level: 1,
    moduleId: "foundations-trading",
    order: 3,
    duration: "10 min",
    objectives: [
      "Understand that higher potential rewards usually mean higher risk",
      "Learn why you should never risk more than you can afford to lose",
      "See how professional traders think about risk",
    ],
    prerequisites: ["what-is-trading"],
    content: [
      {
        type: "text",
        heading: "The Fundamental Trade-off",
        content:
          "In trading and investing, risk and reward are connected. Investments with higher potential returns usually come with higher risk of loss. A savings account pays little interest but is very safe. A speculative stock might double or go to zero - much higher potential reward, but much higher risk.",
      },
      {
        type: "analogy",
        heading: "The Video Game Analogy",
        content:
          "In a video game, the hardest boss usually gives the best loot. Easy enemies give weak rewards. Trading is similar - 'easy' safe trades offer small gains. Trades that could make big money usually have a real chance of big losses. Anyone promising 'high returns with no risk' is not being honest.",
      },
      {
        type: "text",
        heading: "The 1% Rule (Preview)",
        content:
          "Professional traders often risk only 1% of their account on any single trade. If you have $10,000, that means $100 max risk per trade. Why? Because losses WILL happen. Even great traders have losing streaks. Risking 1% means you could have 20 losing trades in a row and still have 80% of your capital. We'll cover this in detail in the Risk Management module.",
      },
      {
        type: "warning",
        heading: "Critical Warning",
        content:
          "Never trade with money you need for rent, food, bills, or emergencies. Trading is speculative - you can lose your entire investment. The money you trade with should be money you can afford to lose completely without it affecting your life. This isn't being pessimistic - it's being realistic and responsible.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Risk and reward go together. More potential profit usually means more potential loss. Smart traders focus on managing risk first - they know that preserving capital is how you stay in the game long enough to succeed. Never risk money you can't afford to lose.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "why-people-trade",
    title: "Why Do People Trade?",
    slug: "why-people-trade",
    level: 1,
    moduleId: "foundations-trading",
    order: 2,
    duration: "8 min",
    objectives: [
      "Understand income, speculation, and hedging as reasons to trade",
      "See how different goals need different approaches",
    ],
    prerequisites: ["what-is-trading"],
    content: [
      {
        type: "text",
        heading: "Three Main Reasons",
        content:
          "People trade for income (trying to make regular profits), speculation (betting on price direction for profit), or hedging (reducing risk in other investments—e.g. a farmer selling futures to lock in a price). Most retail traders are focused on income or speculation. Hedging is more common among businesses and institutions.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Your reason for trading will shape your style and goals. Be clear on whether you're seeking income, speculation, or hedging—and learn the approach that fits.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "time-commitment",
    title: "Time Commitment for Each Trading Style",
    slug: "time-commitment",
    level: 1,
    moduleId: "foundations-trading",
    order: 4,
    duration: "8 min",
    objectives: [
      "See how much time day trading vs swing trading requires",
      "Match your schedule to a style",
    ],
    prerequisites: ["trader-types"],
    content: [
      {
        type: "text",
        heading: "Be Honest About Your Time",
        content:
          "Day trading usually means being at the screen during market hours—often 6+ hours. Swing trading might need 1–2 hours for analysis and orders. Position trading can be weekly check-ins. Scalping needs almost constant attention. Choose a style that fits your job and life; otherwise you'll burn out or make rushed decisions.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Your available time should drive your trading style. Don't try to day trade if you can only check markets at night—swing or position trade instead.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "realistic-expectations",
    title: "Realistic Expectations: How Much Can You Make?",
    slug: "realistic-expectations",
    level: 1,
    moduleId: "foundations-trading",
    order: 5,
    duration: "8 min",
    objectives: [
      "Replace 'get rich quick' with realistic returns",
      "Understand that pros often aim for 10–20% a year",
    ],
    prerequisites: ["time-commitment"],
    content: [
      {
        type: "warning",
        heading: "The Truth",
        content:
          "Professional funds often target 10–20% annual returns; many fail to achieve that. Promises of 100% or 50% per month are marketing, not reality. Beginners should focus on not losing money in year one—learning and preserving capital is success.",
      },
      {
        type: "text",
        heading: "Key Takeaway",
        content:
          "Set realistic goals. Consistent small gains compound. Chasing huge returns usually leads to huge losses. Aim for steady progress and risk management first.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "truth-about-risk",
    title: "The Truth About Risk: You Can Lose Money",
    slug: "truth-about-risk",
    level: 1,
    moduleId: "foundations-trading",
    order: 6,
    duration: "8 min",
    objectives: [
      "Accept that losing money is possible",
      "Understand that risk cannot be eliminated",
    ],
    prerequisites: ["realistic-expectations"],
    content: [
      {
        type: "text",
        heading: "No Guarantees",
        content:
          "Every trade can lose. Even the best traders have losing months. You must be willing to accept losses emotionally and financially. If you can't, don't trade with real money—stick to paper trading until your mindset and risk rules are solid.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Trading involves real risk of loss. Only use money you can afford to lose. Accepting this is the first step to managing risk properly.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "markets-overview",
    title: "Introduction to Different Markets",
    slug: "markets-overview",
    level: 1,
    moduleId: "foundations-markets",
    order: 1,
    duration: "10 min",
    objectives: [
      "Get an overview of stocks, forex, commodities, and crypto",
      "Understand the basic differences between markets",
      "Know where we'll go deeper in later modules",
    ],
    prerequisites: ["trader-types"],
    content: [
      {
        type: "text",
        heading: "The Four Main Markets",
        content:
          "When people talk about trading, they usually mean one of four markets: (1) Stocks - ownership in companies; (2) Forex - currencies; (3) Commodities - physical goods like gold and oil; (4) Cryptocurrency - digital assets like Bitcoin. Each has different hours, rules, risks, and characteristics.",
      },
      {
        type: "text",
        heading: "Stocks (Equities)",
        content:
          "When you buy a stock, you own a tiny piece of a company. Stocks trade during market hours (roughly 9:30 AM - 4 PM in your local market). You can profit when the company does well and the stock price goes up. Stocks can also pay dividends - a share of the company's profits.",
      },
      {
        type: "text",
        heading: "Forex (Foreign Exchange)",
        content:
          "Forex is trading currency pairs - like EUR/USD (Euro vs US Dollar). When you think the Euro will get stronger vs the Dollar, you buy EUR/USD. Forex markets are open 24 hours, 5 days a week (closed weekends). It's the largest market in the world by volume.",
      },
      {
        type: "text",
        heading: "Commodities",
        content:
          "Commodities are raw materials - gold, silver, oil, natural gas, wheat, coffee. You're trading contracts for these goods. Commodities can be an inflation hedge and diversify a portfolio. They're affected by weather, geopolitics, and supply/demand.",
      },
      {
        type: "text",
        heading: "Cryptocurrency",
        content:
          "Crypto is digital money - Bitcoin, Ethereum, and thousands of others. Crypto markets never close - 24/7. They're highly volatile and relatively new. Crypto has attracted many traders but comes with significant risk and regulatory uncertainty.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Each market has different characteristics. In Level 2, we'll go deep into each one so you can understand them and choose which fits your goals, capital, and lifestyle. Don't rush - learn before you trade.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "stocks-basics",
    title: "Stock Market Basics",
    slug: "stocks-basics",
    level: 1,
    moduleId: "foundations-markets",
    order: 1,
    duration: "10 min",
    objectives: [
      "Understand what a stock represents",
      "Learn how companies raise money by selling stock",
      "See why stock prices change",
    ],
    prerequisites: ["markets-overview"],
    content: [
      {
        type: "text",
        heading: "A Stock = A Piece of a Company",
        content:
          "When a company wants to raise money, it can 'go public' - sell shares (stocks) to the public. When you buy a share, you become a part-owner of that company. If the company has 1 million shares and you own 1, you own 0.0001% of the company. You're entitled to a tiny fraction of its profits and assets.",
      },
      {
        type: "analogy",
        heading: "The Pizza Party",
        content:
          "Imagine you and 3 friends start a lemonade stand. You each put in $25, so you each own 25% (1 slice of a 4-slice pizza). If the business is worth $400 now, your slice is worth $100. If it grows to $800, your slice is worth $200. Stocks work the same way - you own a slice of a company, and the value of your slice changes as the company's value changes.",
      },
      {
        type: "text",
        heading: "Why Do Stock Prices Change?",
        content:
          "Stock prices change constantly because of supply and demand. Good news (great earnings, new product) → more people want to buy → price rises. Bad news (lost a big customer, legal trouble) → people want to sell → price falls. Millions of people make decisions every second, and the price reflects the balance of all those decisions.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "A stock is ownership in a company. When you buy stock, you're betting the company will do well and your share will become more valuable. Stock prices move based on supply and demand - which is driven by news, emotions, and expectations about the company's future.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "forex-intro",
    title: "What is the Forex Market?",
    slug: "forex-intro",
    level: 1,
    moduleId: "foundations-markets",
    order: 2,
    duration: "8 min",
    objectives: ["Understand currency trading", "See why forex is 24/5", "Know major pairs"],
    prerequisites: ["stocks-basics"],
    content: [
      {
        type: "text",
        heading: "Trading Currencies",
        content:
          "Forex (foreign exchange) is trading one currency for another—e.g. EUR/USD (euro vs US dollar). When you think the euro will strengthen versus the dollar, you buy EUR/USD. It's the largest market by volume and is open 24 hours, 5 days a week.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Forex = currency pairs. Huge liquidity and 24/5 hours. We'll go deeper in Level 2." },
    ],
    hasQuiz: true,
  },
  {
    id: "commodities-intro",
    title: "What Are Commodities?",
    slug: "commodities-intro",
    level: 1,
    moduleId: "foundations-markets",
    order: 3,
    duration: "8 min",
    objectives: ["Define commodities", "Know gold, oil, agriculture"],
    prerequisites: ["forex-intro"],
    content: [
      {
        type: "text",
        heading: "Physical Goods Traded",
        content:
          "Commodities are raw materials: gold, silver, oil, natural gas, wheat, coffee. You usually trade futures or ETFs linked to them. Prices move with supply, demand, weather, and geopolitics. They can diversify a portfolio and act as an inflation hedge.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Commodities = tangible assets. Level 2 covers how to trade them." },
    ],
    hasQuiz: true,
  },
  {
    id: "crypto-intro",
    title: "What is Cryptocurrency?",
    slug: "crypto-intro",
    level: 1,
    moduleId: "foundations-markets",
    order: 4,
    duration: "8 min",
    objectives: ["Define crypto", "Know Bitcoin basics", "Understand 24/7 trading"],
    prerequisites: ["commodities-intro"],
    content: [
      {
        type: "text",
        heading: "Digital Assets",
        content:
          "Cryptocurrency is digital money—Bitcoin, Ethereum, and thousands of others. Markets run 24/7. Volatility is high. Crypto is speculative and less regulated than stocks or forex. Never invest more than you can afford to lose.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto = digital, 24/7, volatile. Level 2 goes deeper." },
    ],
    hasQuiz: true,
  },
  {
    id: "market-hours",
    title: "How Do Markets Open and Close?",
    slug: "market-hours",
    level: 1,
    moduleId: "foundations-markets",
    order: 5,
    duration: "8 min",
    objectives: ["Know US stock hours", "Understand 24/5 forex", "See global sessions"],
    prerequisites: ["crypto-intro"],
    content: [
      {
        type: "text",
        heading: "Different Hours for Different Markets",
        content:
          "US stocks: 9:30 AM–4:00 PM Eastern. Forex: 24 hours Monday–Friday. Crypto: 24/7. Commodities have set hours per exchange. When one market closes, another may open—so there's almost always something to trade, but liquidity and volatility vary by session.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "Each market has its own hours. Plan your trading around when your market is open and liquid." },
    ],
    hasQuiz: true,
  },
  {
    id: "market-participants",
    title: "Who Participates in Markets?",
    slug: "market-participants",
    level: 1,
    moduleId: "foundations-markets",
    order: 6,
    duration: "8 min",
    objectives: ["Retail vs institutional", "Market makers", "Why it matters"],
    prerequisites: ["market-hours"],
    content: [
      {
        type: "text",
        heading: "Retail, Institutional, and Market Makers",
        content:
          "Retail traders are individuals (you). Institutions are banks, funds, and hedge funds—they move huge volume. Market makers provide liquidity by quoting bid and ask; they profit from the spread. As a retail trader, you're the smallest player; understanding who else is in the market helps you interpret price action and liquidity.",
      },
      { type: "key-takeaway", heading: "Key Takeaway", content: "You're trading alongside institutions and market makers. Level 2+ covers how to use this in your analysis." },
    ],
    hasQuiz: true,
  },
  {
    id: "other-markets",
    title: "Supply and Demand in Markets",
    slug: "other-markets",
    level: 1,
    moduleId: "foundations-markets",
    order: 3,
    duration: "8 min",
    objectives: [
      "Apply supply and demand to financial markets",
      "Understand how market sentiment drives prices",
      "See the connection between economics and trading",
    ],
    prerequisites: ["stocks-basics"],
    content: [
      {
        type: "text",
        heading: "Supply and Demand: The Engine of Prices",
        content:
          "In any market, price is determined by supply (how much is available to sell) and demand (how much people want to buy). When demand is high and supply is low, prices rise. When supply is high and demand is low, prices fall. This applies to stocks, forex, commodities, crypto - everything.",
      },
      {
        type: "text",
        heading: "In Markets, 'Supply' and 'Demand' Mean Willingness",
        content:
          "For stocks, it's not physical supply - there are a fixed number of shares. 'Demand' means how many people want to buy at various prices. 'Supply' means how many people want to sell at various prices. When more people want to buy than sell at the current price, the price goes up until enough sellers appear.",
      },
      {
        type: "text",
        heading: "What Shifts Supply and Demand?",
        content:
          "News, earnings reports, economic data, interest rate changes, geopolitical events - all of these change how people feel about buying or selling. Fear increases selling (supply). Greed or optimism increases buying (demand). As a trader, you're trying to anticipate these shifts before they're fully reflected in the price.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Supply and demand drive all market prices. More buyers than sellers = price up. More sellers than buyers = price down. Your job as a trader is to understand what might shift the balance - and to manage your risk when you're wrong, because you will be wrong sometimes.",
      },
    ],
    hasQuiz: true,
  },
];
