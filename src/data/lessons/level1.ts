import type { Lesson } from "../../types";

export const level1Lessons: Lesson[] = [
  {
    id: "money-basics",
    title: "What is Money and Why Do We Use It?",
    slug: "what-is-money",
    level: 1,
    moduleId: "foundations-money",
    order: 1,
    duration: "12 min",
    objectives: [
      "Understand what money is and why we use it instead of bartering",
      "Learn the three main functions of money",
      "See how money makes trading possible",
      "Connect money to financial markets and trading",
    ],
    prerequisites: [],
    content: [
      {
        type: "text",
        heading: "Why Does This Matter?",
        content:
          "Before you can understand trading, you need to understand money. Money is the tool that makes all trading possible—whether you're buying groceries, a car, or shares of a company. Every trade you'll ever make involves money on one side.\n\nImagine trying to trade your lemonade for a video game. The game shop owner might not want lemonade! You'd need to find someone who wants lemonade AND has a video game to trade. Money solves this problem: you sell lemonade for money, then use that money to buy anything from anyone.",
      },
      {
        type: "text",
        heading: "From Barter to Money",
        content:
          "Long ago, people bartered—trading things directly. If you had extra apples and wanted bread, you needed to find someone with extra bread who wanted apples. Economists call this the 'double coincidence of wants' problem. You both had to want exactly what the other had.\n\nMoney changed everything. Now you sell your apples to anyone who wants them, receive money, and use that money to buy bread from anyone selling it. You never need to find one person who has bread and wants apples. Money is the bridge that connects all traders.",
      },
      {
        type: "analogy",
        heading: "The Video Game Currency Analogy",
        content:
          "In a video game, you earn gold or coins by completing quests. You use that currency to buy weapons, armor, or items from any vendor. You can't directly trade 'defeating 10 goblins' for a sword—the blacksmith doesn't want goblin corpses. You need the game's currency in between.\n\nReal money works the same way. You exchange your time and work for dollars. Those dollars can then buy anything from anyone who accepts them. The whole economy runs on this simple idea: money is the universal translator of value.",
      },
      {
        type: "text",
        heading: "The Three Jobs of Money",
        content:
          "Money has three main functions that make it essential. First, it's a medium of exchange—you can use it to buy anything. A dollar is accepted everywhere. You don't need to carry around goods to trade.\n\nSecond, money is a store of value. You can save it for later. If you earn $100 today, you can spend it next week or next month. Of course, inflation can erode its value over time—a dollar today might buy less in 10 years—but in the short run, money holds its worth well enough to delay spending.\n\nThird, money is a unit of account. We measure the value of everything in money. This car costs $20,000. That stock is $150 per share. Your salary is $50,000 a year. Money gives us a common language to compare values.",
      },
      {
        type: "warning",
        heading: "Money Isn't Perfect",
        content:
          "Money loses value over time due to inflation. If inflation is 3% per year, $100 today will only buy what $97 buys next year. That's why people invest—they want their money to grow faster than inflation erodes it. Putting cash under the mattress is slowly losing value. This connects directly to why trading and investing exist: people are trying to preserve and grow their money's purchasing power.",
      },
      {
        type: "preview",
        heading: "Supply and Demand (Preview)",
        content:
          "Money's value—how much it can buy—isn't fixed. It depends on supply (how much money exists) and demand (how much people want to hold it). Central banks influence the supply. We'll cover this in the next lesson. For now, remember: understanding money is step one. Understanding what affects its value is step two—and that's where trading begins.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why might a society switch from barter to money?",
        component: "ConceptCheck",
        props: { question: "Why might a society switch from barter to money?", reveal: "Because barter requires a 'double coincidence of wants'—you must find someone who has what you want and wants what you have. Money lets everyone trade with everyone else through one common medium. It massively increases the number of possible trades." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Money is a tool that makes trading possible. Without it, we'd be stuck finding someone who wants exactly what we have and has exactly what we want. Money is the middleman that makes the whole economy—and every financial market—work.",
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
    duration: "12 min",
    objectives: [
      "Understand that money's value comes from supply, demand, and trust",
      "See why governments and central banks matter",
      "Learn why inflation erodes purchasing power",
      "Connect currency value to forex trading",
    ],
    prerequisites: ["money-basics"],
    content: [
      {
        type: "text",
        heading: "Why Does This Matter?",
        content:
          "A dollar today might buy less in 10 years. Currencies can strengthen or weaken against each other. When you trade forex, you're literally betting on which currency will hold or gain more value. Understanding where money's value comes from helps you see why prices change and why traders obsess over central bank announcements and economic data.\n\nThis isn't just theory—it's the foundation of trillions of dollars in daily currency trading.",
      },
      {
        type: "text",
        heading: "Supply, Demand, and Trust",
        content:
          "Money holds value for three reasons. First, people accept it in exchange for goods and services—that's demand. If everyone stopped accepting dollars tomorrow, they'd be worthless. Second, its supply isn't infinite. If a government printed trillions of new dollars overnight, each dollar would buy less—that's inflation. Scarcity matters.\n\nThird, trust. People must believe the currency will still be accepted tomorrow. Hyperinflation often starts when people lose faith—they rush to spend or convert money before it loses more value, which makes it lose value faster. Trust is fragile.",
      },
      {
        type: "analogy",
        heading: "The Concert Ticket Analogy",
        content:
          "Imagine a concert with 1,000 tickets. If 10,000 people want to go, tickets sell out fast and prices soar on the secondary market. If only 100 people want to go, tickets sit unsold and prices drop. The same ticket has different value depending on demand.\n\nCurrency works the same way. When more people want to hold dollars (strong economy, high interest rates, global demand for US assets), the dollar strengthens. When people dump dollars for other assets or currencies, it weakens. Supply and demand for the currency itself determine its value.",
      },
      {
        type: "text",
        heading: "Central Banks and Supply",
        content:
          "Central banks—like the Federal Reserve in the US—control the supply of money. They can print more (quantitative easing) or withdraw it (raising rates, selling bonds). When they print a lot, more money chases the same amount of goods—prices rise. When they tighten, less money in circulation can mean slower inflation or even deflation.\n\nTraders watch every central bank decision. A surprise rate hike can send a currency soaring. A dovish stance can sink it. This is fundamental to forex: you're trading expectations about future money supply and demand.",
      },
      {
        type: "warning",
        heading: "Inflation Erodes Purchasing Power",
        content:
          "If inflation runs at 3% per year, $100 today buys what $97 buys next year. Over 10 years, that same $100 buys what about $74 buys today. Cash in a mattress slowly loses value. This is why people invest—stocks, bonds, real estate—to try to grow wealth faster than inflation eats it. As a trader, you're participating in that same effort: trying to preserve and grow the value of your capital.",
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
          "Money's value depends on supply (how much exists), demand (how much people want it), and trust. Central banks influence supply; economic health and interest rates influence demand. As a trader, you'll care about these constantly—especially in forex.",
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
    duration: "12 min",
    objectives: [
      "Understand the difference between value and price",
      "Learn how supply and demand affect prices",
      "See why prices change over time",
      "Apply this to stocks, forex, and commodities",
    ],
    prerequisites: ["money-basics", "money-value"],
    content: [
      {
        type: "text",
        heading: "Value vs Price",
        content:
          "Value is what something is worth TO YOU—it's personal and subjective. A rare trading card might be priceless to a collector but worthless to someone who doesn't collect. Two people can disagree completely on value.\n\nPrice is different. Price is what people actually pay in the market—it's where buyers and sellers agree to trade. The market price is the balance point: the highest price buyers are willing to pay meets the lowest price sellers are willing to accept. That's the trade.\n\nAs a trader, you'll often focus on price. You don't need to know what something is 'really' worth—you need to know whether more people will want to buy or sell at the next moment. Price tells you that.",
      },
      {
        type: "analogy",
        heading: "The Lemonade Stand Analogy",
        content:
          "Imagine you run a lemonade stand. On a scorching hot day, lots of people want lemonade—high demand. You can charge $3 a cup and sell out. On a cold rainy day, nobody wants it—low demand. You might drop to $1 just to sell a few.\n\nWhen lemons are scarce and expensive at the wholesale market—low supply—you charge more to cover your costs. When lemons are cheap and plentiful—high supply—you can afford to charge less and still profit. This is supply and demand in its simplest form. The same logic drives stock prices, currency rates, and the price of oil.",
      },
      {
        type: "text",
        heading: "Prices Constantly Search for Balance",
        content:
          "In financial markets, prices move every second as new information arrives. A company announces great earnings—more people want to buy the stock—price goes up until enough sellers appear. Bad news hits—people want to sell—price falls until enough buyers step in.\n\nThe price is always searching for equilibrium: the point where the number of people willing to buy at that price equals the number willing to sell. When that balance shifts, price moves. Traders try to anticipate those shifts before they're fully reflected in the price.",
      },
      {
        type: "text",
        heading: "What Shifts Supply and Demand?",
        content:
          "For stocks: earnings reports, product launches, management changes, industry news. For forex: interest rate decisions, economic data (GDP, jobs), political stability. For commodities: weather, geopolitics, supply disruptions. For crypto: regulation, adoption news, market sentiment.\n\nEvery piece of news changes someone's view. Enough someones change their view, and the balance of buyers and sellers shifts. Price moves. As you learn each market, you'll learn which catalysts matter most.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "The price already reflects everything known. When news breaks, the market reacts in seconds. By the time you read a headline and decide to trade, the move may be over. Pros either react faster, trade on anticipation, or find inefficiencies. Don't assume you can consistently beat the crowd by reading the same news.",
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
          "Prices reflect supply and demand. More buyers than sellers—price rises. More sellers than buyers—price falls. Understanding this is the foundation of every market. Your job as a trader is to anticipate shifts in that balance.",
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
    duration: "10 min",
    objectives: [
      "Understand what a marketplace is",
      "See how buyers and sellers meet",
      "Connect this to financial markets",
      "Know the main types of financial markets",
    ],
    prerequisites: ["value-prices"],
    content: [
      {
        type: "text",
        heading: "What is a Marketplace?",
        content:
          "A market is any place where buyers and sellers come together to trade. A farmers' market, an online store, a garage sale, or a stock exchange—all are markets. In each case, there's something being traded, a price is discovered through negotiation or matching, and a deal is struck when both sides agree.\n\nThe core idea is simple: markets exist to connect people who have something with people who want it. The price is the signal that coordinates everyone. When demand rises, price rises, which attracts more supply. When supply exceeds demand, price falls, which discourages production or encourages consumption. Markets are self-organizing systems.",
      },
      {
        type: "analogy",
        heading: "The Flea Market Analogy",
        content:
          "At a flea market, hundreds of buyers and sellers roam around. Sellers display their wares and name prices. Buyers browse and make offers. When a buyer and seller agree on a price, a trade happens. No central authority sets the price—it emerges from thousands of individual negotiations.\n\nFinancial markets work the same way, just faster and with computers. Instead of haggling over vintage records, traders submit orders to buy or sell at specific prices. A match happens when a buyer's price meets a seller's price. Millions of these matches occur every second on stock and forex exchanges worldwide.",
      },
      {
        type: "text",
        heading: "Financial Markets: The Big Four",
        content:
          "When people talk about trading, they usually mean one of four markets. Stocks (equities) are ownership in companies. Forex is trading currency pairs—euro vs dollar, yen vs dollar. Commodities are physical goods: gold, oil, wheat. Cryptocurrency is digital assets like Bitcoin and Ethereum.\n\nEach market has different hours, rules, participants, and behavior. Stocks trade during exchange hours. Forex runs 24 hours, five days a week. Crypto never sleeps. We'll go deep into each in Level 2. For now, understand: they're all markets. Buyers and sellers. Supply and demand. Prices that move.",
      },
      {
        type: "text",
        heading: "Electronic vs Physical",
        content:
          "Modern financial markets are mostly electronic. Orders flow through computers. Matching engines pair buyers with sellers in milliseconds. You don't need to stand on a trading floor—you can trade from your phone. This has made markets more accessible, faster, and more liquid. It has also made them more competitive. When everyone has instant access, edges get smaller.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What do a farmers' market and a stock exchange have in common?",
        component: "ConceptCheck",
        props: { question: "What do a farmers' market and a stock exchange have in common?", reveal: "Both are markets: buyers and sellers meet, something is traded, and a price is agreed. The stock exchange just trades shares instead of vegetables—the same supply/demand and price discovery ideas apply." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Markets are where buyers and sellers meet and agree on prices. Financial markets are the same idea—stocks, forex, commodities, crypto. When you trade, you're participating in that global marketplace.",
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
    duration: "12 min",
    objectives: [
      "Understand intrinsic vs market value",
      "See why they can differ",
      "Apply this to trading decisions",
      "Know when traders vs investors care about each",
    ],
    prerequisites: ["intro-markets"],
    content: [
      {
        type: "text",
        heading: "Intrinsic vs Market Value",
        content:
          "Intrinsic value is what something might be 'really' worth based on fundamentals—a company's assets, future cash flows, growth prospects. Analysts use financial models to estimate it. There's no single right answer; different assumptions yield different estimates.\n\nMarket value is simpler: it's what people are actually paying right now. The price on the screen. The last trade. Market value is a fact. Intrinsic value is an opinion.\n\nThey often differ. A stock might trade above intrinsic value (overvalued) or below (undervalued). Investors try to buy undervalued and sell overvalued. Traders might not care—they trade price action regardless of 'fair value.'",
      },
      {
        type: "text",
        heading: "Why They Diverge",
        content:
          "Markets are driven by humans. Sentiment, fear, greed, and herd behavior push prices away from any冷静 calculation of value. A stock can stay overvalued for years if enough people keep buying. It can stay undervalued if everyone ignores it.\n\nNew information constantly changes views. An earnings beat might justify a higher intrinsic value. A scandal might collapse it. The market digests this information and adjusts price—sometimes slowly, sometimes in seconds. The gap between intrinsic and market value is where opportunity (and risk) lives.",
      },
      {
        type: "analogy",
        heading: "The House Appraisal Analogy",
        content:
          "When you sell a house, an appraiser estimates its value based on comparable sales, condition, location. That's like intrinsic value—an expert's estimate. But the actual sale price depends on who shows up to bid. In a hot market, you might get 20% above appraisal. In a crash, you might get 20% below. The market price is what a willing buyer and seller agree on today—not what a model says it 'should' be.\n\nStocks work the same way. Fundamental analysis gives you an appraisal. The market price is what people are actually paying. Both matter—but they're not the same.",
      },
      {
        type: "warning",
        heading: "Overvalued Doesn't Mean 'Sell Tomorrow'",
        content:
          "Beginners often hear 'this stock is overvalued' and assume it will drop immediately. Wrong. Overvalued stocks can keep rising for months or years. The market can stay irrational longer than you can stay solvent, as the saying goes. Never short a stock just because it looks expensive. Price can disconnect from value for a long time.",
      },
      {
        type: "pro-tip",
        heading: "Traders vs Investors",
        content:
          "Investors care deeply about intrinsic value. They buy when price is below their estimate of value and hold. Traders often care more about price action—momentum, support/resistance, order flow. They don't need to know if a stock is 'fairly valued' to trade a breakout. Both approaches can work. Know which one you're doing.",
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
          "Intrinsic value = an estimate of worth based on fundamentals. Market value = what people are paying now. They can diverge for a long time. Trading and investing both involve forming a view on that difference.",
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
    duration: "10 min",
    objectives: [
      "Understand what happens when you buy or sell something",
      "Learn about buyers and sellers in markets",
      "See how every trade has two sides",
      "Know why your counterparty matters",
    ],
    prerequisites: ["money-basics", "value-prices"],
    content: [
      {
        type: "text",
        heading: "Every Trade Has Two Sides",
        content:
          "When you buy something, someone else is selling. When you sell, someone else is buying. There's no such thing as a one-sided trade. In financial markets, this happens millions of times per second—buyers and sellers constantly matching up through exchanges and brokers.\n\nEvery time you click 'buy' on a stock, someone—perhaps a mutual fund, a hedge fund, or another individual—is clicking 'sell.' You're taking the other side of their trade. The price is the point where your willingness to buy meets their willingness to sell. That's how markets discover value.",
      },
      {
        type: "analogy",
        heading: "The Flea Market Analogy",
        content:
          "At a flea market, some people walk around looking to buy (buyers), and some have stalls with stuff to sell (sellers). They negotiate—'I'll give you $5 for that.' 'Deal!' The moment they agree, a trade happens. Both sides leave satisfied (or at least willing).\n\nStock markets work the same way, just much faster and with computers matching buyers and sellers. Instead of haggling face-to-face, you submit an order. The exchange matches it with someone on the other side. The trade executes in milliseconds. But the principle is identical: no trade happens without both a buyer and a seller agreeing on a price.",
      },
      {
        type: "text",
        heading: "Why Do People Buy and Sell at Different Times?",
        content:
          "Buyers think the price will go UP—they want to get in before it does. They're optimistic. Sellers think the price will go DOWN—they want to get out before they lose money. Or maybe the seller needs cash for something else—a house, a bill, a different investment. Different people have different reasons, and that's what makes markets work.\n\nThe beauty of a liquid market is that you never need to convince your counterparty. There are always people on both sides. Your job is to form a view: do I want to be a buyer or a seller at this price? The market will find someone to take the other side.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "When you buy, remember: someone else chose to sell. They might know something you don't—or they might be wrong. The same when you sell: someone chose to buy. Don't assume you're the smart one. Stay humble. The market is a collection of different views, and no one has a monopoly on truth.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Buying and selling is the basic activity of all markets. You're always on one side—when you buy, you're betting the price will go up. When you sell, you're either taking profit, cutting losses, or think it will go down. There's no trade without both a buyer AND a seller.",
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
    duration: "12 min",
    objectives: [
      "Understand the difference between trading and investing",
      "Learn the time horizons for each approach",
      "See when each approach might make sense",
      "Choose the right path for your goals",
    ],
    prerequisites: ["buying-selling"],
    content: [
      {
        type: "text",
        heading: "Why Does This Matter?",
        content:
          "Trading and investing are often confused, but they're very different activities. Investors think in years or decades. Traders might hold for minutes or days. The skills, risks, mindset, and time commitment required are different. Choosing the right approach for YOU is critical—mixing them up leads to bad decisions and blown accounts.\n\nMany beginners say they want to 'invest' but then check their portfolio every hour and panic-sell on a 5% drop. That's trading behavior with an investing goal—it doesn't work. Clarity on which game you're playing changes everything.",
      },
      {
        type: "text",
        heading: "Investing: The Long Game",
        content:
          "Investors buy assets (like stocks or index funds) and hold them for a long time—often years or decades. They believe the company or market will grow over time and the investment will become more valuable. Famous investor Warren Buffett says his favorite holding period is 'forever.' Investors care about the business's health: earnings, management, competitive moat. They largely ignore daily price movements.\n\nInvesting is simpler in some ways: buy quality, hold, let compound interest work. It requires patience, a long time horizon, and the ability to stomach drawdowns without selling. Historically, a diversified portfolio held for decades has been one of the best ways to build wealth. For most people, it's the right default.",
      },
      {
        type: "text",
        heading: "Trading: The Short Game",
        content:
          "Traders buy and sell frequently to profit from price movements. A day trader might buy in the morning and sell by afternoon. A swing trader might hold for days or weeks. Traders care about price patterns, momentum, support/resistance, and short-term supply and demand—not necessarily the long-term business fundamentals.\n\nTrading is active. It requires screen time, quick decisions, discipline, and rigorous risk management. It can be lucrative for those who master it—but it's harder than it looks. Many who try it would have been better off investing.",
      },
      {
        type: "analogy",
        heading: "The Landlord vs Flipper Analogy",
        content:
          "An investor is like a landlord: buy a property, rent it out, collect income over years. You care about location, rent growth, tenant quality. You're not selling next month. A trader is like a house flipper: buy, fix up, sell quickly for a profit. You care about purchase price, renovation cost, and what you can sell for in 6 months. Different skills, different timelines, different risks. Both can make money—but you don't flip houses with your retirement fund.",
      },
      {
        type: "warning",
        heading: "Important Reality Check",
        content:
          "Studies show that the majority of retail traders lose money—some estimates say 70–90%. Trading is hard. It requires discipline, education, emotional control, and capital you can afford to lose. Many people are better off with long-term investing. We'll teach you trading properly so you can make an informed choice—but never risk money you can't afford to lose. If you're unsure, start with investing.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Investing = buy and hold for years, focus on business value. Trading = buy and sell frequently, focus on price movements. Both can be valid—but they require different skills and suit different personalities. Most beginners should start by learning, not trading with real money.",
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
    duration: "12 min",
    objectives: [
      "Learn about day traders, swing traders, and position traders",
      "Understand the time commitment for each style",
      "See which might fit your lifestyle",
      "Know the PDT rule for US stocks",
    ],
    prerequisites: ["what-is-trading"],
    content: [
      {
        type: "text",
        heading: "Day Traders",
        content:
          "Day traders open and close all positions within the same day. They never hold overnight. This requires watching the markets during trading hours—9:30 AM to 4 PM Eastern for US stocks. Day trading demands focus, quick decisions, and often significant capital.\n\nIn the US, the Pattern Day Trader (PDT) rule requires a minimum $25,000 account balance to make more than 3 day trades in a 5-day period. If you have less, you're restricted. Many beginners hit this wall. Forex and futures don't have PDT—you can day trade with smaller accounts, though the risks remain.",
      },
      {
        type: "text",
        heading: "Swing Traders",
        content:
          "Swing traders hold positions for days to weeks. They capture 'swings' in price—the up and down movements within a trend. You might buy on a pullback and sell when price reaches resistance. This style is more flexible—you don't need to watch the screen all day. Check charts in the morning and evening, set alerts, and let trades play out.\n\nMany part-time traders use swing trading because it fits around a day job. You can analyze at night and place orders before work. The holding period gives you room to breathe—you're not making split-second decisions.",
      },
      {
        type: "text",
        heading: "Position Traders",
        content:
          "Position traders hold for weeks to months. They're closer to investors but still make active decisions based on technical or fundamental analysis. They ride longer trends—maybe a stock breaking out of a 6-month range or a sector rotation. They need less screen time than day or swing traders.\n\nPosition trading suits people who can tolerate drawdowns and don't need instant gratification. A position might be down 10% before it turns. You need the patience to hold through normal volatility.",
      },
      {
        type: "text",
        heading: "Scalpers (The Fastest)",
        content:
          "Scalpers make many tiny trades throughout the day, holding for seconds or minutes. They profit from small price movements—a few ticks, a few cents. This requires the most screen time, the fastest execution (low latency matters), and often the most experience. Not recommended for beginners. The competition includes algorithms and professional market makers.",
      },
      {
        type: "analogy",
        heading: "The Restaurant Analogy",
        content:
          "Day trading is like running a fast-food joint—high turnover, constant action, you're serving customers (trades) all day. Swing trading is like a sit-down restaurant—you have tables (positions) that stay for a while, you check on them periodically. Position trading is like catering—you book an event (trade) and show up for the outcome days or weeks later. Each requires different skills and energy levels. Pick the one that matches how you want to work.",
      },
      {
        type: "warning",
        heading: "Don't Mix Styles Mid-Trade",
        content:
          "A common mistake: enter as a swing trade, then get nervous and close as a day trade (locking in a small loss), or hold a day trade overnight and turn it into a swing trade (taking on risk you didn't plan for). Decide your style before you enter. Stick to the plan. Mixing styles turns discipline into chaos.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Your trading style should match your lifestyle. Can you watch markets all day? Day trading might work. Do you have a full-time job? Swing trading could fit better. Be honest about your time and commitment.",
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
    duration: "12 min",
    objectives: [
      "Understand that higher potential rewards usually mean higher risk",
      "Learn why you should never risk more than you can afford to lose",
      "See how professional traders think about risk",
      "Preview the 1% rule for position sizing",
    ],
    prerequisites: ["what-is-trading"],
    content: [
      {
        type: "text",
        heading: "The Fundamental Trade-off",
        content:
          "In trading and investing, risk and reward are inextricably linked. You cannot have meaningful reward without accepting meaningful risk. If an opportunity offered high returns with no risk, everyone would pile in, and the edge would vanish. The market doesn't give free lunches.\n\nA savings account pays little interest—maybe 1–2% a year—but is very safe. Your principal is protected. A speculative growth stock might double in a year or collapse 80%. Much higher potential reward, but much higher risk of loss. Bonds sit in between: moderate returns, moderate risk. The pattern holds everywhere: higher potential returns come with higher probability of loss.\n\nSmart traders don't try to eliminate risk. They manage it. They decide in advance how much they're willing to lose, and they only take trades where the potential reward justifies that risk.",
      },
      {
        type: "analogy",
        heading: "The Video Game Analogy",
        content:
          "In a video game, the hardest boss usually drops the best loot. Easy enemies give weak rewards—a few coins, basic items. The final boss might drop legendary gear, but you could die and lose progress trying to beat it. Trading works the same way.\n\n'Easy' safe trades—like parking cash in a savings account—offer small, predictable gains. Trades that could make big money—picking a hot stock, leveraging forex—usually come with a real chance of big losses. The high-reward opportunities are the 'boss fights.' They're harder, and you can lose. Anyone promising 'high returns with no risk' is either lying or doesn't understand what they're selling. There is no such thing.",
      },
      {
        type: "preview",
        heading: "The 1% Rule (Preview)",
        content:
          "Professional traders often risk only 1% of their account on any single trade. If you have $10,000, that means $100 maximum loss per trade. Why so little? Because losses WILL happen. Even the best traders have losing streaks. A 60% win rate is considered strong—that means 4 out of 10 trades lose.\n\nRisking 1% per trade means you could have 20 losing trades in a row and still have about 80% of your capital. You'd be bruised, but you'd still be in the game. Risk 5% per trade, and 20 losses in a row could wipe you out. We'll cover position sizing and the 1% rule in detail in the Risk Management module. For now, remember: pros protect capital first, chase profits second.",
      },
      {
        type: "warning",
        heading: "Critical Warning",
        content:
          "Never trade with money you need for rent, food, bills, or emergencies. Trading is speculative—you can lose your entire investment. The money you trade with should be money you can afford to lose completely without it affecting your life. Not your kid's college fund. Not your mortgage payment. Not your emergency fund.\n\nThis isn't being pessimistic—it's being realistic and responsible. If losing the money would cause you stress, relationship problems, or financial hardship, don't trade it. Use only disposable income—money that, if lost, wouldn't change your lifestyle. This single rule protects more traders than any strategy.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Risk and reward go together. More potential profit usually means more potential loss. Smart traders focus on managing risk first—they know that preserving capital is how you stay in the game long enough to succeed. Never risk money you can't afford to lose.",
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
    duration: "10 min",
    objectives: [
      "Understand income, speculation, and hedging as reasons to trade",
      "See how different goals need different approaches",
      "Clarify your own motivation",
    ],
    prerequisites: ["what-is-trading"],
    content: [
      {
        type: "text",
        heading: "Three Main Reasons",
        content:
          "People trade for three primary reasons. Income: trying to make regular profits, perhaps as a side hustle or primary livelihood. Speculation: betting on price direction for profit—buying low, selling high. Hedging: reducing risk in other investments. A farmer might sell corn futures to lock in a price before harvest. A company with foreign revenue might buy forex contracts to protect against currency moves.\n\nMost retail traders are focused on income or speculation. Hedging is more common among businesses and institutions. Your reason matters—it shapes your style, time horizon, and risk tolerance.",
      },
      {
        type: "text",
        heading: "Income vs Speculation",
        content:
          "Income-focused traders often want steady, repeatable returns. They might swing trade, use systematic strategies, or focus on high-probability setups. They're treating trading like a business. Speculation can be more opportunistic—chasing big moves, taking higher risk for higher potential reward. Neither is wrong, but they require different mindsets and approaches. Income traders prioritize consistency. Speculators accept more variance for bigger swings.",
      },
      {
        type: "analogy",
        heading: "The Side Hustle vs Lottery Analogy",
        content:
          "Income trading is like a side hustle—you're building something that generates regular returns. You might make $500 this month, $300 next, $600 the month after. Speculation is more like buying a lottery ticket—you might hit big or lose it all. Most people who succeed in trading treat it like the side hustle: consistent effort, managed risk, steady improvement. The lottery mentality—'I'll get rich on one trade'—usually ends badly.",
      },
      {
        type: "pro-tip",
        heading: "Be Honest About Your Goal",
        content:
          "If you're trading for excitement, say so. If you're trading to replace a job, be realistic about how long that takes. If you're hedging a business, your approach is different. Clarity on why you trade helps you choose the right style, manage risk appropriately, and avoid the trap of changing strategies every time you have a bad week.",
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
    duration: "10 min",
    objectives: [
      "See how much time day trading vs swing trading requires",
      "Match your schedule to a style",
      "Avoid the burnout trap",
    ],
    prerequisites: ["trader-types"],
    content: [
      {
        type: "text",
        heading: "Be Honest About Your Time",
        content:
          "Day trading usually means being at the screen during market hours—often 6+ hours. You need to catch the open, monitor positions, and manage exits before the close. Swing trading might need 1–2 hours daily for analysis, checking charts, and placing orders. Position trading can be weekly check-ins. Scalping needs almost constant attention—you're in and out constantly.\n\nChoose a style that fits your job and life. If you work 9–5, day trading US stocks is nearly impossible without sacrificing sleep or work. Swing trading or trading forex in the evening might work. Be realistic. Burning out helps no one.",
      },
      {
        type: "text",
        heading: "The Part-Time Reality",
        content:
          "Most successful part-time traders swing trade or position trade. They do their homework at night or on weekends. They set alerts. They place orders before work or during a lunch break. They don't try to catch every move—they wait for their setup. That's sustainable. Trying to day trade with 30 minutes at lunch usually ends in frustration and losses.",
      },
      {
        type: "analogy",
        heading: "The Gym Membership Analogy",
        content:
          "People buy gym memberships and never go because they don't have time. Trading is similar. Don't pick a style that requires 8 hours a day if you have 1 hour. You'll either skip the work (and lose) or sacrifice sleep and relationships (and burn out). Pick the style that fits. A 1-hour daily commitment to swing trading beats a fantasy of 8-hour day trading you'll never execute.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Your best trading hours might not be the market's busiest. If you can only trade the last hour of the US session, learn what works then—maybe momentum, maybe reversals. Work with your constraints instead of fighting them. The market is always there; find when YOU can be there effectively.",
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
    duration: "12 min",
    objectives: [
      "Replace 'get rich quick' with realistic returns",
      "Understand that pros often aim for 10–20% a year",
      "Set achievable goals for year one",
    ],
    prerequisites: ["time-commitment"],
    content: [
      {
        type: "text",
        heading: "What the Pros Actually Make",
        content:
          "Professional hedge funds often target 10–20% annual returns. Many fail to achieve even that. Warren Buffett's long-term average is around 20% per year—and he's one of the best investors in history. The S&P 500 has historically returned about 10% per year. Those are the benchmarks.\n\nIf someone promises you 50% per month or 100% in a year, they're either lying, running a scam, or taking insane risk that will eventually blow up. Real trading is a grind. Consistent small gains compound over time. Get-rich-quick is a fantasy.",
      },
      {
        type: "warning",
        heading: "The Truth About Beginner Returns",
        content:
          "Beginners should focus on not losing money in year one. Learning and preserving capital IS success. If you end year one with your account intact and a solid education, you're ahead of most. Many lose 30–50% or more in their first year. The goal is to be the exception—to learn without paying a fortune in tuition to the market.",
      },
      {
        type: "analogy",
        heading: "The Apprentice Analogy",
        content:
          "You wouldn't expect to earn master-plumber wages in your first year of apprenticeship. You're learning. You make mistakes. You get better. Trading is the same. Year one is apprenticeship. Year two and three, if you're diligent, you might start to see consistent results. Year five, you might have an edge. There are no shortcuts. The market exposes impatience quickly.",
      },
      {
        type: "text",
        heading: "What 'Good' Looks Like",
        content:
          "A retail trader who consistently makes 15–25% per year with controlled drawdowns is doing very well. That doubles your money in roughly 4–5 years. It's not glamorous. It won't make headlines. But it's real. It's sustainable. It beats the vast majority of traders and many professional funds. Aim for that. Adjust your position sizes and risk so that hitting that target is possible without gambling.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Set realistic goals. Consistent small gains compound. Chasing huge returns usually leads to huge losses. Aim for steady progress and risk management first. Year one: don't blow up.",
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
    duration: "10 min",
    objectives: [
      "Accept that losing money is possible",
      "Understand that risk cannot be eliminated",
      "Prepare emotionally for losses",
    ],
    prerequisites: ["realistic-expectations"],
    content: [
      {
        type: "text",
        heading: "No Guarantees",
        content:
          "Every trade can lose. Even the best traders have losing months. A 60% win rate means 4 out of 10 trades lose. You will have strings of losers. You will watch positions move against you. You must be willing to accept losses emotionally and financially before you trade with real money.\n\nIf the thought of losing $500 ruins your week, don't risk $500. If you can't sleep when a trade is down, your position is too big. Size your risk so that losses are uncomfortable but not devastating. That's the only way to stay in the game long enough to improve.",
      },
      {
        type: "text",
        heading: "Risk Cannot Be Eliminated",
        content:
          "The only way to have zero trading risk is not to trade. Every position carries the possibility of loss. Stop losses limit loss but don't eliminate it—slippage can occur, gaps can happen. The goal is to manage risk, not pretend it doesn't exist. Traders who deny risk are the ones who blow up. Traders who embrace it and plan for it are the ones who survive.",
      },
      {
        type: "analogy",
        heading: "The Weather Analogy",
        content:
          "You can't control the weather. You can check the forecast, carry an umbrella, and avoid sailing in a storm—but you can't make it not rain. Trading risk is similar. You can't control whether a trade wins or loses. You can control your position size, your stop loss, and your emotional response. Prepare for rain. When it comes, you'll be ready.",
      },
      {
        type: "warning",
        heading: "If You Can't Stomach Losses, Don't Trade",
        content:
          "If you can't accept losses emotionally, don't trade with real money. Stick to paper trading until your mindset and risk rules are solid. Traders who panic-sell, revenge-trade, or go on tilt after a loss are not ready. The market will exploit that. Build the mental game first.",
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
    duration: "12 min",
    objectives: [
      "Get an overview of stocks, forex, commodities, and crypto",
      "Understand the basic differences between markets",
      "Know where we'll go deeper in later modules",
      "See how each market fits different goals",
    ],
    prerequisites: ["trader-types"],
    content: [
      {
        type: "text",
        heading: "The Four Main Markets",
        content:
          "When people talk about trading, they usually mean one of four markets. Stocks (equities) = ownership in companies. Forex = currencies. Commodities = physical goods like gold and oil. Cryptocurrency = digital assets like Bitcoin. Each has different hours, rules, risks, and characteristics. Understanding the basics of each helps you choose where to focus—and eventually, where to put your capital.\n\nYou don't need to trade all of them. Most successful traders specialize. But you should know what each offers before you decide.",
      },
      {
        type: "text",
        heading: "Stocks (Equities)",
        content:
          "When you buy a stock, you own a tiny piece of a company. Stocks trade during market hours—roughly 9:30 AM to 4 PM in your local exchange. You profit when the company does well and the stock price goes up. Stocks can also pay dividends—a share of the company's profits. The US stock market is highly regulated, has abundant learning resources, and is where most beginners start. You need enough capital for meaningful position sizing—many educators suggest $2,000+ to start properly.",
      },
      {
        type: "text",
        heading: "Forex (Foreign Exchange)",
        content:
          "Forex is trading currency pairs—like EUR/USD (Euro vs US Dollar). When you think the Euro will get stronger versus the Dollar, you buy EUR/USD. Forex markets are open 24 hours, 5 days a week (closed weekends). It's the largest market in the world by volume—over $6 trillion daily. Forex allows smaller account sizes and 24/5 access, but leverage is high and risk is real. Major pairs (EUR/USD, USD/JPY) have the tightest spreads and most liquidity.",
      },
      {
        type: "text",
        heading: "Commodities and Crypto",
        content:
          "Commodities are raw materials: gold, silver, oil, natural gas, wheat, coffee. You trade futures or ETFs. Prices move with supply, demand, weather, and geopolitics. They can diversify a portfolio and act as an inflation hedge. Cryptocurrency is digital: Bitcoin, Ethereum, thousands of others. Crypto markets never close—24/7. They're highly volatile. Crypto has attracted many traders but comes with significant risk and regulatory uncertainty. Never risk more than you can afford to lose.",
      },
      {
        type: "analogy",
        heading: "The Restaurant Menu Analogy",
        content:
          "Think of markets like a restaurant menu. Stocks are the classic entrée—familiar, well-established. Forex is the international section—available at odd hours, different flavors. Commodities are the farm-to-table option—tied to real-world stuff. Crypto is the new fusion dish—exciting but unpredictable. You don't order everything. You pick what fits your appetite (goals), budget (capital), and schedule (time). We'll help you understand each dish before you order.",
      },
      {
        type: "preview",
        heading: "Level 2 Deep Dives (Preview)",
        content:
          "In Level 2, we'll go deep into each market. You'll learn how stocks work (exchanges, order types, sectors), forex (pips, lots, sessions), commodities (futures, contango), and crypto (exchanges, wallets, volatility). By the end, you'll know enough to choose your first market—and trade it with understanding.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Each market has different characteristics. In Level 2, we'll go deep into each one so you can understand them and choose which fits your goals, capital, and lifestyle. Don't rush—learn before you trade.",
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
    duration: "12 min",
    objectives: [
      "Understand what a stock represents",
      "Learn how companies raise money by selling stock",
      "See why stock prices change",
      "Connect ownership to price movement",
    ],
    prerequisites: ["markets-overview"],
    content: [
      {
        type: "text",
        heading: "A Stock = A Piece of a Company",
        content:
          "When a company wants to raise money, it can 'go public'—sell shares (stocks) to the public in an initial public offering (IPO). When you buy a share, you become a part-owner of that company. If the company has 1 million shares and you own 1, you own 0.0001% of the company. You're entitled to a tiny fraction of its profits (through dividends, if paid) and assets.\n\nStocks trade on exchanges like the NYSE or NASDAQ. You buy through a broker. The price you pay is determined by what other buyers and sellers are willing to accept. It changes every second the market is open.",
      },
      {
        type: "analogy",
        heading: "The Pizza Party Analogy",
        content:
          "Imagine you and 3 friends start a lemonade stand. You each put in $25, so you each own 25% (1 slice of a 4-slice pizza). If the business is worth $400 now, your slice is worth $100. If it grows to $800, your slice is worth $200. Stocks work the same way—you own a slice of a company, and the value of your slice changes as the company's value changes.\n\nThe difference: with a lemonade stand, the value is hard to know until you sell. With a stock, the market constantly prices your slice—you can see it on a chart every second. That's both a blessing (liquidity) and a curse (volatility).",
      },
      {
        type: "text",
        heading: "Why Do Stock Prices Change?",
        content:
          "Stock prices change constantly because of supply and demand. Good news—great earnings, a new product, a favorable court ruling—makes more people want to buy. Price rises. Bad news—lost a big customer, legal trouble, a recession—makes people want to sell. Price falls.\n\nMillions of participants make decisions every second. The price reflects the balance of all those decisions. No single person controls it. That's why predicting short-term moves is so hard—you're competing with everyone else's analysis and emotions.",
      },
      {
        type: "warning",
        heading: "Stocks Can Go to Zero",
        content:
          "When you buy a stock, you can lose your entire investment if the company fails. Bankruptcy, fraud, or a collapsed business model can wipe out shareholders. Diversification and position sizing protect you. Never risk more on a single stock than you can afford to lose.",
      },
      {
        type: "preview",
        heading: "Chart Reading (Preview)",
        content:
          "In Level 2, we'll learn to read stock charts—candlesticks, support, resistance, trends. Charts show the history of these supply-demand battles. They don't predict the future, but they help you see patterns, key levels, and where other traders might act. For now, know: a stock price is the market's constantly updated estimate of what a company is worth.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "A stock is ownership in a company. When you buy stock, you're betting the company will do well and your share will become more valuable. Stock prices move based on supply and demand—driven by news, emotions, and expectations.",
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
    duration: "10 min",
    objectives: [
      "Understand currency trading",
      "See why forex is 24/5",
      "Know major pairs",
      "Understand why forex attracts traders",
    ],
    prerequisites: ["stocks-basics"],
    content: [
      {
        type: "text",
        heading: "Trading Currencies",
        content:
          "Forex (foreign exchange) is trading one currency for another. When you trade EUR/USD, you're betting on the euro's value relative to the US dollar. If you think the euro will strengthen, you buy EUR/USD. If you think the dollar will strengthen, you sell EUR/USD (or buy USD/EUR). Every forex trade involves a pair—you're always long one currency and short another.\n\nForex is the largest market in the world by daily volume—over $6 trillion changes hands every day. It dwarfs the stock market. That means deep liquidity: you can usually enter and exit without moving the price.",
      },
      {
        type: "text",
        heading: "24 Hours, 5 Days a Week",
        content:
          "Unlike stocks, forex doesn't close. When New York sleeps, Sydney and Tokyo are open. When Asia winds down, London opens. There's always a major financial center trading. Markets open Sunday evening (Eastern time) and close Friday afternoon. That's appealing if you work during US stock hours—you can trade forex before or after work.\n\nLiquidity and volatility vary by session. The London-New York overlap (morning Eastern) is often the most active. Asian session can be quieter for major pairs. We'll cover sessions in detail in Level 2.",
      },
      {
        type: "analogy",
        heading: "The Exchange Rate Booth Analogy",
        content:
          "When you travel, you exchange dollars for euros at an airport booth. The rate changes constantly—$1 might buy 0.92 euros today and 0.94 tomorrow. Forex trading is the same idea, just on a massive scale. You're betting that the exchange rate will move in your favor. Banks, companies, and speculators all participate. The difference: as a trader, you're not exchanging for a trip—you're trying to profit from the rate movement itself.",
      },
      {
        type: "text",
        heading: "Major Pairs",
        content:
          "The most traded pairs involve the US dollar: EUR/USD, USD/JPY, GBP/USD, USD/CHF. These have the tightest spreads (the cost of trading) and the most liquidity. Minor pairs don't include the dollar: EUR/GBP, EUR/JPY. Exotic pairs involve emerging market currencies: USD/MXN, USD/TRY. Beginners should stick to majors—lower costs, more predictable behavior.",
      },
      {
        type: "preview",
        heading: "Leverage and Pips (Preview)",
        content:
          "Forex brokers often offer high leverage—50:1 or even 100:1. That means a $1,000 account can control $50,000 or $100,000 in positions. Leverage amplifies both gains and losses. We'll cover pips (the smallest price move), lots, and leverage in the Forex deep dive. For now, know: forex allows small accounts to trade, but leverage is dangerous if not managed.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Forex = currency pairs. Huge liquidity, 24/5 hours. Major pairs (EUR/USD, etc.) are the best place to start. We'll go deeper in Level 2.",
      },
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
    duration: "10 min",
    objectives: [
      "Define commodities",
      "Know gold, oil, and agriculture",
      "Understand why traders care about commodities",
      "See how they differ from stocks and forex",
    ],
    prerequisites: ["forex-intro"],
    content: [
      {
        type: "text",
        heading: "Physical Goods Traded",
        content:
          "Commodities are raw materials—things you can touch or extract. Gold, silver, oil, natural gas, wheat, coffee, cotton. Unlike stocks (ownership in a company) or forex (currencies), commodities are tangible assets. Their prices are driven by supply and demand in the physical world.\n\nYou typically don't buy a barrel of oil and store it. You trade futures contracts (agreements to buy/sell at a future date) or ETFs that track commodity prices. This gives you exposure without handling the physical goods.",
      },
      {
        type: "text",
        heading: "Hard vs Soft Commodities",
        content:
          "Hard commodities are mined or extracted: gold, silver, copper, oil, natural gas. Soft (or agricultural) commodities are grown: wheat, corn, soybeans, coffee, sugar. Each has different drivers. Gold reacts to inflation, interest rates, and fear. Oil reacts to supply (OPEC, shale), demand (economic growth), and geopolitics. Wheat reacts to weather, harvests, and global demand. Understanding the driver is key to trading each.",
      },
      {
        type: "analogy",
        heading: "The Gasoline Pump Analogy",
        content:
          "When you fill your car, you're buying a commodity—oil, refined into gasoline. You've noticed prices go up in summer (driving season) and when hurricanes hit Gulf refineries. Commodities are like that: real-world events directly affect price. A drought in Brazil raises coffee prices. A cold snap raises natural gas. Trading commodities means paying attention to weather, politics, and global supply chains.",
      },
      {
        type: "text",
        heading: "Why Traders Care",
        content:
          "Commodities diversify a portfolio—they often move differently than stocks. When inflation rises, gold and oil can outperform. They're also traded 24 hours (futures) and offer leverage. Many traders specialize in one or two—gold and oil are popular. We'll cover contracts, contango, and seasonal patterns in Level 2.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Commodities = tangible raw materials. Prices move with supply, demand, weather, geopolitics. Trade via futures or ETFs. Level 2 covers how to trade them.",
      },
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
    duration: "10 min",
    objectives: [
      "Define crypto",
      "Know Bitcoin basics",
      "Understand 24/7 trading",
      "Recognize the unique risks",
    ],
    prerequisites: ["commodities-intro"],
    content: [
      {
        type: "text",
        heading: "Digital Assets",
        content:
          "Cryptocurrency is digital money built on blockchain technology. Bitcoin, Ethereum, and thousands of others. Unlike dollars in a bank, crypto exists on decentralized networks—no central authority controls it. You hold it in a digital wallet. You can transfer it peer-to-peer without a bank.\n\nCrypto markets run 24/7—no closing bell. Volatility is extreme. Bitcoin can move 5–10% in a day. Altcoins can double or halve in a week. That attracts traders seeking big moves. It also creates huge risk.",
      },
      {
        type: "text",
        heading: "Why Crypto Is Different",
        content:
          "Crypto is speculative and less regulated than stocks or forex. Scams, hacks, and exchange failures have cost investors billions. There's no FDIC insurance. If an exchange goes under, your funds can vanish. Regulation is evolving—governments are still figuring out how to treat crypto. That uncertainty adds risk.\n\nDespite that, crypto has attracted massive interest. Institutions are adding it to portfolios. Some see it as digital gold or a new asset class. As a trader, you need to understand it—but never risk more than you can afford to lose.",
      },
      {
        type: "warning",
        heading: "Critical Warning",
        content:
          "Never invest more in crypto than you can afford to lose completely. Hacks, scams, and regulatory crackdowns can wipe out holdings. Use reputable exchanges. Enable two-factor authentication. Consider cold storage for large amounts. Crypto is high-risk. Treat it that way.",
      },
      {
        type: "preview",
        heading: "Crypto Trading (Preview)",
        content:
          "Level 2 covers exchanges, wallets, volatility drivers, and charting. You'll learn how crypto moves differently than traditional markets—24/7, weekend gaps, funding rates. For now, know: crypto is a real market with real liquidity, but it's the Wild West. Tread carefully.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Crypto = digital, 24/7, volatile. High risk, less regulation. Never risk money you can't afford to lose. Level 2 goes deeper.",
      },
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
    duration: "10 min",
    objectives: [
      "Know US stock hours",
      "Understand 24/5 forex",
      "See global sessions",
      "Trade when liquidity is best",
    ],
    prerequisites: ["crypto-intro"],
    content: [
      {
        type: "text",
        heading: "Different Hours for Different Markets",
        content:
          "US stocks: 9:30 AM–4:00 PM Eastern (6.5 hours). Pre-market and after-hours exist but have less liquidity. Forex: 24 hours Monday–Friday—when Sydney closes, Tokyo opens; when Tokyo winds down, London opens; when London overlaps with New York, volume peaks. Crypto: 24/7, no closing bell. Commodities have set hours per exchange (e.g. CME gold, crude oil).\n\nWhen one market closes, another may open—so there's almost always something to trade. But liquidity and volatility vary by session. Trading during low liquidity means wider spreads and choppier price action. Plan your trading around when your market is open and liquid.",
      },
      {
        type: "text",
        heading: "Why Session Matters",
        content:
          "The London-New York overlap (roughly 8 AM–11 AM Eastern) is often the most volatile and liquid period for forex. US stock open (9:30 AM) and close (3:30–4 PM) tend to have the most volume. Asian session can be quieter for US stocks and major forex pairs. If you're day trading, you want to be active when your market is moving. If you're swing trading, exact session matters less—you're holding across sessions.",
      },
      {
        type: "analogy",
        heading: "The Mall Hours Analogy",
        content:
          "Stocks are like a mall that opens at 9:30 and closes at 4. When it's closed, you can't trade (except in limited after-hours). Forex is like a mall that never closes during the week—different stores (sessions) are busy at different times. Crypto is like a 24/7 convenience store—always open. Pick the market whose hours fit your schedule. If you work 9–5, US stock day trading is tough; forex or crypto might offer evening opportunities.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Avoid trading in the first and last 5 minutes of the stock market session unless you know what you're doing. The open and close often have gap moves, whipsaws, and unusual volatility. Many pros wait 15–30 minutes after the open for the dust to settle.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Each market has its own hours. Plan your trading around when your market is open and liquid. Match your schedule to the market you trade.",
      },
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
    duration: "10 min",
    objectives: [
      "Retail vs institutional",
      "Market makers and liquidity",
      "Why it matters for your trading",
    ],
    prerequisites: ["market-hours"],
    content: [
      {
        type: "text",
        heading: "Retail, Institutional, and Market Makers",
        content:
          "Retail traders are individuals—you. You're trading your own account through a broker. Institutions are banks, hedge funds, mutual funds, and pension funds. They move huge volume. A single institutional order can be millions of shares. They have more information, faster execution, and more capital. Market makers are firms that quote both bid and ask prices—they're always willing to buy or sell. They profit from the spread (the difference between bid and ask) and provide liquidity so you can enter and exit easily.\n\nAs a retail trader, you're the smallest player. That doesn't mean you can't win—but you need to understand who you're trading against. When you buy, someone sold. Often it's a market maker or an institution. They have reasons. Understanding the participants helps you interpret price action and avoid getting run over.",
      },
      {
        type: "text",
        heading: "Why This Matters",
        content:
          "Institutional activity often drives big moves. When a fund accumulates a position, price can drift up. When they distribute, price can fall. You don't see their orders directly, but you see the result in volume and price action. Market makers provide liquidity—without them, spreads would be wide and execution would be difficult. They're not your enemy; they're the middleman. But they profit from the spread, so you pay a small cost on every trade. As a retail trader, you want tight spreads and good execution. Choosing a broker with access to quality liquidity matters.",
      },
      {
        type: "analogy",
        heading: "The Casino Floor Analogy",
        content:
          "Retail traders are like individual gamblers. Institutions are the high-rollers in the VIP section—they move the action. Market makers are like the house—they facilitate the game and profit from the vig (spread). You're playing at the same table. You don't need to beat the house every hand; you need to make good decisions and manage risk. Understanding who's at the table helps you play smarter.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Volume tells you who's active. Low volume = mostly retail, choppy. High volume = institutions are in. Big moves often happen when institutions participate. As you learn chart reading, you'll learn to spot institutional footprints—accumulation, distribution, breakouts on volume.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "You're trading alongside institutions and market makers. Understanding who participates helps you interpret price action and liquidity. Level 2+ covers how to use this in your analysis.",
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
    duration: "10 min",
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
          "In any market, price is determined by supply (how much is available to sell) and demand (how much people want to buy). When demand is high and supply is low, prices rise. When supply is high and demand is low, prices fall. This applies to stocks, forex, commodities, crypto—everything. It's the fundamental law of markets.\n\nNothing is more important to understand. Every price move—up or down—reflects a shift in the balance of supply and demand. Your job as a trader is to anticipate those shifts before they're fully reflected in the price.",
      },
      {
        type: "text",
        heading: "In Markets, 'Supply' and 'Demand' Mean Willingness",
        content:
          "For stocks, it's not physical supply—there are a fixed number of shares. 'Demand' means how many people want to buy at various prices. 'Supply' means how many people want to sell at various prices. When more people want to buy than sell at the current price, the price goes up until enough sellers appear. Equilibrium is where buyers and sellers agree.\n\nThe order book—the list of buy and sell orders at different prices—shows this in real time. A wall of buy orders below price acts as support. A wall of sell orders above acts as resistance. You'll learn to read these as you progress.",
      },
      {
        type: "analogy",
        heading: "The Concert Ticket Analogy",
        content:
          "When a popular artist announces a tour, demand for tickets spikes. Limited supply + high demand = prices soar on the secondary market. If the artist adds 20 more shows, supply increases. Prices drop. Same idea in stocks: great earnings increase demand (everyone wants in). A dilutive share offering increases supply (more shares for sale). Price adjusts. The mechanism is identical across all markets.",
      },
      {
        type: "text",
        heading: "What Shifts Supply and Demand?",
        content:
          "News, earnings reports, economic data, interest rate changes, geopolitical events—all of these change how people feel about buying or selling. Fear increases selling (supply). Greed or optimism increases buying (demand). As a trader, you're trying to anticipate these shifts before they're fully reflected in the price. That's the edge. Get it right, and you profit. Get it wrong, and you lose—which is why risk management is non-negotiable.",
      },
      {
        type: "warning",
        heading: "The Market Can Stay Irrational",
        content:
          "Supply and demand determine price—but the market can misprice things for a long time. A stock can stay 'overvalued' for years if demand keeps coming. Don't assume that because something looks expensive, it will drop tomorrow. Trade what you see. Manage your risk. Let the market tell you when the balance has shifted.",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Supply and demand drive all market prices. More buyers than sellers = price up. More sellers than buyers = price down. Your job as a trader is to understand what might shift the balance—and to manage your risk when you're wrong, because you will be wrong sometimes.",
      },
    ],
    hasQuiz: true,
  },
];
