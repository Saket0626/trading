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
};
