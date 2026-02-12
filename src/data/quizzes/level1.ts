import type { QuizQuestion } from "../../types";

export const level1Quizzes: Record<string, QuizQuestion[]> = {
  "money-basics": [
    {
      id: "q1",
      question: "What is the main problem that money solves?",
      options: [
        "Making people rich",
        "The 'double coincidence of wants' in barter - finding someone who has what you want AND wants what you have",
        "Storing value forever",
        "Creating jobs",
      ],
      correctIndex: 1,
      explanation:
        "Money solves the barter problem. Without money, you'd need to find someone who has exactly what you want AND wants exactly what you have. Money acts as a middle man - everyone accepts it.",
    },
    {
      id: "q2",
      question: "Which is NOT one of the three main functions of money?",
      options: [
        "Medium of exchange",
        "Store of value",
        "Unit of account",
        "Making profits",
      ],
      correctIndex: 3,
      explanation:
        "The three functions are: medium of exchange (use it to buy things), store of value (save it for later), and unit of account (measure value in dollars, etc.). Making profits is not a function of money itself.",
    },
    {
      id: "q3",
      question: "Why did bartering become impractical as societies grew?",
      options: [
        "Nobody wanted to trade",
        "It was too hard to find someone who had what you needed AND wanted what you had to offer",
        "Governments made it illegal",
        "Money was invented first",
      ],
      correctIndex: 1,
      explanation:
        "Barter requires a 'double coincidence of wants' - both parties must want what the other has. In a large society, this becomes very difficult. Money allows you to sell to anyone and buy from anyone.",
    },
  ],
  "value-prices": [
    {
      id: "q1",
      question: "What happens to price when demand is high and supply is low?",
      options: ["Price goes down", "Price stays the same", "Price goes up", "Nobody knows"],
      correctIndex: 2,
      explanation:
        "When more people want to buy (high demand) than want to sell (low supply), buyers compete and are willing to pay more. Sellers can charge more. Price rises until a new balance is found.",
    },
    {
      id: "q2",
      question: "What is the difference between value and price?",
      options: [
        "They mean the same thing",
        "Value is personal (what it's worth to you); price is what the market pays",
        "Price is always higher than value",
        "Value is in dollars, price is in cents",
      ],
      correctIndex: 1,
      explanation:
        "Value is subjective - what something is worth TO YOU. Price is objective - what buyers and sellers actually agree to trade at in the market. A rare card might have high value to a collector but a lower market price.",
    },
  ],
  "buying-selling": [
    {
      id: "q1",
      question: "When you BUY a stock, what is the other side of the trade?",
      options: ["The company", "Another person selling", "The government", "Nobody"],
      correctIndex: 1,
      explanation:
        "Every trade has two sides. When you buy, someone else is selling. The stock market matches buyers with sellers. The company already sold the stock when it first went public - now shares trade between investors.",
    },
    {
      id: "q2",
      question: "Why might a seller want to sell even if they think the price might go up?",
      options: [
        "They never would",
        "They might need cash for something else, or have different risk tolerance",
        "Sellers always think price will go down",
        "It's required by law",
      ],
      correctIndex: 1,
      explanation:
        "Sellers have many reasons: they need cash, they've made enough profit, they have different risk tolerance, or they simply have a different opinion. Not every seller thinks the price will crash.",
    },
  ],
  "what-is-trading": [
    {
      id: "q1",
      question: "What's the main difference between investing and trading?",
      options: [
        "Investing is legal, trading is not",
        "Investors hold for years/decades; traders buy and sell frequently (days, weeks, or intraday)",
        "Trading makes more money",
        "They're exactly the same",
      ],
      correctIndex: 1,
      explanation:
        "Investors think long-term - years or decades. Traders think short-term - from minutes to weeks. Different time horizons mean different strategies, risks, and required skills.",
    },
    {
      id: "q2",
      question: "According to studies, what percentage of retail traders lose money?",
      options: ["About 10%", "About 30%", "About 50%", "About 70-90%"],
      correctIndex: 3,
      explanation:
        "Various studies suggest 70-90% of retail traders lose money. This is why we emphasize education, risk management, and realistic expectations. Trading is difficult - most who try without proper preparation will lose.",
    },
  ],
  "trader-types": [
    {
      id: "q1",
      question: "Which type of trader holds positions for days to weeks?",
      options: ["Day trader", "Swing trader", "Scalper", "Position trader"],
      correctIndex: 1,
      explanation:
        "Swing traders hold for days to weeks, capturing 'swings' in price. Day traders close everything same-day. Scalpers hold for seconds/minutes. Position traders hold weeks to months.",
    },
    {
      id: "q2",
      question: "Which trading style requires the MOST screen time?",
      options: ["Position trading", "Swing trading", "Day trading", "Scalping"],
      correctIndex: 3,
      explanation:
        "Scalpers make many tiny trades throughout the day and need to watch the screen constantly. Day traders also need to watch during market hours. Swing and position traders can check less frequently.",
    },
  ],
  "risk-reward": [
    {
      id: "q1",
      question: "What is the relationship between risk and potential reward?",
      options: [
        "Higher reward always means lower risk",
        "Higher potential reward usually comes with higher risk",
        "Risk and reward are unrelated",
        "Lower risk means higher reward",
      ],
      correctIndex: 1,
      explanation:
        "Generally, investments with higher potential returns come with higher risk. Safe investments (like savings accounts) offer low returns. Speculative trades might double your money or lose it all.",
    },
    {
      id: "q2",
      question: "What does the 1% rule suggest you risk per trade?",
      options: ["1% of your profits", "1% of your account", "1% of the trade size", "$1"],
      correctIndex: 1,
      explanation:
        "The 1% rule suggests risking no more than 1% of your total account on any single trade. This helps you survive losing streaks. With $10,000, that's $100 max risk per trade.",
    },
  ],
  "markets-overview": [
    {
      id: "q1",
      question: "Which market is open 24 hours, 5 days a week?",
      options: ["US Stocks", "Forex", "Commodities", "All of them"],
      correctIndex: 1,
      explanation:
        "Forex (currency trading) is open 24 hours, 5 days a week because different financial centers (Tokyo, London, New York) open at different times. US stocks have set hours (9:30 AM - 4 PM Eastern).",
    },
    {
      id: "q2",
      question: "When you buy a stock, what do you own?",
      options: [
        "A loan to the company",
        "A piece (share) of ownership in the company",
        "A contract for future delivery",
        "Nothing - it's just a bet",
      ],
      correctIndex: 1,
      explanation:
        "A stock represents ownership - you own a share of the company. You're a part-owner, entitled to a fraction of profits (dividends) and assets. It's not a loan (that would be a bond) or just a bet.",
    },
  ],
  "stocks-basics": [
    {
      id: "q1",
      question: "Why do stock prices change constantly?",
      options: [
        "Companies change them",
        "Supply and demand - the balance of buyers and sellers changes",
        "Random chance",
        "The government sets them",
      ],
      correctIndex: 1,
      explanation:
        "Stock prices change because of supply and demand. When more people want to buy than sell at the current price, price rises. When more want to sell, price falls. News and sentiment shift this balance constantly.",
    },
    {
      id: "q2",
      question: "When a company 'goes public,' what does it do?",
      options: [
        "Announces its finances",
        "Sells shares of ownership to the public for the first time",
        "Moves to a public building",
        "Pays taxes publicly",
      ],
      correctIndex: 1,
      explanation:
        "Going public (IPO - Initial Public Offering) means the company sells shares to the public for the first time. This raises money for the company and allows anyone to buy and become a part-owner.",
    },
  ],
  "other-markets": [
    {
      id: "q1",
      question: "What drives price changes in financial markets?",
      options: [
        "Only company earnings",
        "Supply and demand - the balance of willing buyers and sellers",
        "Random algorithms",
        "Government control",
      ],
      correctIndex: 1,
      explanation:
        "All market prices are driven by supply and demand. When more people want to buy (demand) than sell (supply) at the current price, price rises. The balance shifts with news, emotions, and expectations.",
    },
  ],
  "money-value": [
    { id: "q1", question: "What mainly determines money's value?", options: ["Only the government", "Supply, demand, and trust", "The stock market", "Banks only"], correctIndex: 1, explanation: "Money's value comes from supply (how much exists), demand (how much people want it), and trust. Printing too much reduces value (inflation)." },
    { id: "q2", question: "If a government prints huge amounts of new currency, what usually happens to each unit's value?", options: ["It goes up", "It stays the same", "It goes down (inflation)", "It becomes zero"], correctIndex: 2, explanation: "More supply of money with similar demand means each unit is worth less—that's inflation." },
  ],
  "intro-markets": [
    { id: "q1", question: "What is a market in the broadest sense?", options: ["Only a stock exchange", "Any place where buyers and sellers trade", "A government building", "A type of currency"], correctIndex: 1, explanation: "A market is wherever buyers and sellers come together to trade—whether a farmers' market or a stock exchange." },
  ],
  "concept-of-value": [
    { id: "q1", question: "What is the difference between intrinsic value and market value?", options: ["They are the same", "Intrinsic = fundamental worth; market = what people pay now", "Market is always higher", "Intrinsic is always higher"], correctIndex: 1, explanation: "Intrinsic value is an estimate of 'true' worth; market value is the current price. They often differ." },
  ],
  "why-people-trade": [
    { id: "q1", question: "Which is NOT a main reason people trade?", options: ["Income", "Speculation", "Hedging", "Guaranteed profit"], correctIndex: 3, explanation: "Income, speculation, and hedging are valid reasons. Guaranteed profit is not realistic—every trade has risk." },
  ],
  "time-commitment": [
    { id: "q1", question: "Which style usually requires the LEAST daily screen time?", options: ["Scalping", "Day trading", "Swing trading", "None—all need the same"], correctIndex: 2, explanation: "Swing traders hold days to weeks and don't need to watch constantly. Day traders and scalpers need to be at the screen during sessions." },
  ],
  "realistic-expectations": [
    { id: "q1", question: "What annual return do many professional funds target?", options: ["100%", "50%", "10–20%", "5% or less"], correctIndex: 2, explanation: "Many pros aim for 10–20% per year. Promises of 50–100% are usually unrealistic or very high risk." },
  ],
  "truth-about-risk": [
    { id: "q1", question: "Can you lose money when trading?", options: ["No, if you're careful", "Yes—every trade has risk of loss", "Only in forex", "Only in crypto"], correctIndex: 1, explanation: "Every trade can lose. Accepting that is essential before using real money." },
  ],
  "forex-intro": [
    { id: "q1", question: "What does forex trading involve?", options: ["Only stocks", "Trading one currency for another", "Only commodities", "Only crypto"], correctIndex: 1, explanation: "Forex is foreign exchange—trading currency pairs like EUR/USD." },
    { id: "q2", question: "How many days per week is the forex market typically open?", options: ["1", "3", "5 (weekdays)", "7"], correctIndex: 2, explanation: "Forex is open 24 hours, 5 days a week (closed weekends)." },
  ],
  "commodities-intro": [
    { id: "q1", question: "Which is an example of a commodity?", options: ["A company stock", "Gold or oil", "A currency pair", "A bond"], correctIndex: 1, explanation: "Commodities are raw materials: gold, silver, oil, wheat, etc." },
  ],
  "crypto-intro": [
    { id: "q1", question: "How many hours a day are crypto markets typically open?", options: ["8", "12", "24", "Only weekdays"], correctIndex: 2, explanation: "Crypto markets run 24/7—no closing bell." },
  ],
  "market-hours": [
    { id: "q1", question: "When do US stock markets normally close (Eastern)?", options: ["Noon", "2 PM", "4 PM", "8 PM"], correctIndex: 2, explanation: "US stocks trade 9:30 AM–4:00 PM Eastern." },
  ],
  "market-participants": [
    { id: "q1", question: "Who are 'retail' traders?", options: ["Banks only", "Individual traders like you", "Market makers only", "Governments"], correctIndex: 1, explanation: "Retail traders are individuals. Institutions are banks and funds; market makers provide liquidity." },
  ],
  "risk-what": [
    { id: "q1", question: "In trading, what does 'risk' mean?", options: ["Guaranteed profit", "The possibility of losing money", "A type of order", "A fee"], correctIndex: 1, explanation: "Risk is the chance of loss. Every trade has it." },
    { id: "q2", question: "Can risk be eliminated?", options: ["Yes, with the right strategy", "No—every trade has some risk", "Only in paper trading", "Only with stocks"], correctIndex: 1, explanation: "You cannot eliminate risk. You can only manage and limit it." },
  ],
  "reward-what": [
    { id: "q1", question: "Is your 'target reward' on a trade guaranteed?", options: ["Yes", "No—it's a goal until you close the trade", "Only in forex", "Only if you use a stop loss"], correctIndex: 1, explanation: "Reward is potential profit. It's realized only when you exit at a profit." },
  ],
  "risk-reward-relationship": [
    { id: "q1", question: "What does a 1:2 risk-reward ratio mean?", options: ["Risk $2 to make $1", "Risk $1 to make $2", "Win 1 out of 2 trades", "Lose 2 and win 1"], correctIndex: 1, explanation: "1:2 means you risk one unit to make two. So losses are smaller than wins." },
  ],
  "thinking-about-losses": [
    { id: "q1", question: "Do professional traders have losing trades?", options: ["No", "Yes—losses are normal", "Only in demo", "Only in crypto"], correctIndex: 1, explanation: "Everyone has losing trades. The goal is to keep them small and let winners be larger." },
  ],
  "protecting-money-stops": [
    { id: "q1", question: "What is a stop loss?", options: ["A type of profit", "A predetermined price at which you exit to limit loss", "A fee", "A market order only"], correctIndex: 1, explanation: "A stop loss is a price level where you exit to cap your loss." },
    { id: "q2", question: "Should you move your stop loss further away when price approaches it?", options: ["Yes, to avoid being stopped out", "No—that can turn a small loss into a big one", "Only in stocks", "Only if you're winning"], correctIndex: 1, explanation: "Moving the stop to avoid being hit often leads to much larger losses. Respect your stop." },
  ],
  "why-most-lose": [
    { id: "q1", question: "What do studies often say about the percentage of retail traders who lose money?", options: ["Under 10%", "About 30%", "About 50%", "Around 70–90%"], correctIndex: 3, explanation: "Many studies suggest 70–90% of retail traders lose. Risk management and discipline separate winners from losers." },
  ],
  "paper-trading": [
    { id: "q1", question: "What is paper trading?", options: ["Trading only on paper", "Practicing with simulated money, no real cash at risk", "Trading stocks only", "A type of fee"], correctIndex: 1, explanation: "Paper trading uses fake money to practice in real or delayed market conditions." },
    { id: "q2", question: "Why is paper trading recommended before going live?", options: ["It's required by law", "To learn the platform and strategy without emotional/financial stress", "To make real money", "Only for forex"], correctIndex: 1, explanation: "Paper trading lets you learn and test without risking real money or strong emotions." },
  ],
  "how-much-to-start": [
    { id: "q1", question: "What kind of money should you use for trading?", options: ["Rent money", "Only money you can afford to lose completely", "Borrowed money", "Emergency fund"], correctIndex: 1, explanation: "Only trade with money you can afford to lose. Never use rent, bills, or emergency savings." },
  ],
  "choosing-first-market": [
    { id: "q1", question: "What should influence your choice of first market?", options: ["Only what's popular", "Capital, time, interest, and regulation", "Only crypto", "Only stocks"], correctIndex: 1, explanation: "Consider how much capital you have, when you can trade, what you're interested in, and safety/regulation." },
  ],
  "demo-account-setup": [
    { id: "q1", question: "Are demo accounts usually free?", options: ["No", "Yes, from most brokers", "Only for a week", "Only for stocks"], correctIndex: 1, explanation: "Most brokers offer free demo/paper accounts so you can practice." },
  ],
  "learning-path": [
    { id: "q1", question: "What should you learn first?", options: ["Only strategies", "Foundations: money, markets, risk", "Only technical analysis", "Only options"], correctIndex: 1, explanation: "Build foundations first—money, markets, risk—then charts and strategies." },
  ],
  "common-mistakes": [
    { id: "q1", question: "What is 'averaging down'?", options: ["Taking profits", "Adding to a losing position hoping it recovers", "Using a stop loss", "Paper trading"], correctIndex: 1, explanation: "Averaging down means buying more as price falls. It can turn a small loss into a very large one." },
    { id: "q2", question: "Which is a common beginner mistake?", options: ["Using a stop loss", "Trading with money you need for bills", "Paper trading first", "Risking 1% per trade"], correctIndex: 1, explanation: "Trading with rent or bill money is one of the most dangerous mistakes. Only use risk capital." },
  ],
};
