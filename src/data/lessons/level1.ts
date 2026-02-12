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
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Money is a tool that makes trading possible. Without it, we'd be stuck trying to find someone who wants exactly what we have and has exactly what we want. Money is the 'middle man' that makes the whole economy work.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "value-prices",
    title: "What is Value and How Do Prices Work?",
    slug: "value-and-prices",
    level: 1,
    moduleId: "foundations-money",
    order: 2,
    duration: "10 min",
    objectives: [
      "Understand the difference between value and price",
      "Learn how supply and demand affect prices",
      "See why prices change over time",
    ],
    prerequisites: ["money-basics"],
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
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Prices aren't random - they reflect supply and demand. When more people want to buy than sell, prices rise. When more people want to sell than buy, prices fall. Understanding this is the foundation of understanding any market.",
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
    order: 2,
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
    title: "What Are Businesses and Stocks?",
    slug: "stocks-basics",
    level: 1,
    moduleId: "foundations-markets",
    order: 2,
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
