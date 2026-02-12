export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  // A
  { term: "Ask", definition: "The lowest price a seller is willing to accept.", category: "Order Types" },
  { term: "ATR", definition: "Average True Range - a volatility indicator measuring average price range.", category: "Technical Analysis" },
  { term: "Asset Allocation", definition: "How you divide your portfolio among different asset classes.", category: "Portfolio" },
  { term: "Averaging Down", definition: "Adding to a losing position. Dangerous - can amplify losses.", category: "Risk" },
  // B
  { term: "Backtesting", definition: "Testing a strategy on historical data before live trading.", category: "Quantitative" },
  { term: "Bear Market", definition: "Prolonged period of falling prices (typically -20% or more).", category: "Market" },
  { term: "Bid", definition: "The highest price a buyer is willing to pay.", category: "Order Types" },
  { term: "Bid-Ask Spread", definition: "The difference between bid and ask. Lower = more liquid.", category: "Order Types" },
  { term: "Blue Chip", definition: "Large, stable, well-established company (e.g., Apple, Microsoft).", category: "Stocks" },
  { term: "Bollinger Bands", definition: "Volatility bands around a moving average. Tighter = lower volatility.", category: "Technical Analysis" },
  { term: "Breakout", definition: "Price moving beyond a support or resistance level.", category: "Technical Analysis" },
  { term: "Bull Market", definition: "Prolonged period of rising prices.", category: "Market" },
  { term: "Bullish", definition: "Expecting prices to rise. Green candle, long position.", category: "General" },
  { term: "Bullish Engulfing", definition: "Candlestick pattern: green candle fully engulfs previous red candle.", category: "Candlestick" },
  // C
  { term: "Call Option", definition: "Right to BUY an asset at a set price before expiration.", category: "Options" },
  { term: "Candlestick", definition: "Chart format showing OHLC as body and wicks.", category: "Charting" },
  { term: "Capital Gains", definition: "Profit from selling an asset. Taxed as income.", category: "Tax" },
  { term: "CFD", definition: "Contract for Difference - derivative tracking price without owning asset.", category: "Derivatives" },
  { term: "Commission", definition: "Fee charged by broker per trade.", category: "Costs" },
  { term: "Compound Interest", definition: "Earning returns on your returns. Key to long-term growth.", category: "General" },
  { term: "Correlation", definition: "How two assets move together. -1 to +1.", category: "Portfolio" },
  { term: "Covered Call", definition: "Selling call on stock you own. Income strategy.", category: "Options" },
  // D
  { term: "Day Trading", definition: "Opening and closing all positions within the same day.", category: "Trading Styles" },
  { term: "Delta", definition: "Options Greek - how option price changes with underlying price.", category: "Options" },
  { term: "Diversification", definition: "Spreading risk across different assets. Don't put all eggs in one basket.", category: "Portfolio" },
  { term: "Dividend", definition: "Share of company profits paid to shareholders.", category: "Stocks" },
  { term: "Doji", definition: "Candlestick with small body (open ≈ close). Indecision.", category: "Candlestick" },
  { term: "Drawdown", definition: "Peak-to-trough decline. Max drawdown = worst drop.", category: "Risk" },
  // E
  { term: "EMA", definition: "Exponential Moving Average - weights recent prices more.", category: "Technical Analysis" },
  { term: "Equity", definition: "Account value (balance + unrealized P&L).", category: "Account" },
  { term: "ETF", definition: "Exchange-Traded Fund - basket of assets traded like a stock.", category: "Stocks" },
  { term: "Execution", definition: "The actual filling of an order at a price.", category: "Order Types" },
  { term: "Expiration", definition: "Date when an option or contract expires.", category: "Options" },
  // F
  { term: "Fibonacci", definition: "Retracement levels (38.2%, 50%, 61.8%) used for support/resistance.", category: "Technical Analysis" },
  { term: "Fill", definition: "Order executed. 'Got filled at $100.'", category: "Order Types" },
  { term: "Forex", definition: "Foreign exchange - trading currency pairs.", category: "Markets" },
  { term: "Futures", definition: "Contract to buy/sell asset at set price on future date.", category: "Derivatives" },
  // G
  { term: "Golden Cross", definition: "When 50-day MA crosses above 200-day MA. Bullish signal.", category: "Technical Analysis" },
  { term: "Greeks", definition: "Options risk measures: Delta, Gamma, Theta, Vega.", category: "Options" },
  // H
  { term: "Hammer", definition: "Candlestick: long lower wick, small body at top. Bullish reversal.", category: "Candlestick" },
  { term: "Head and Shoulders", definition: "Reversal chart pattern: peak, higher peak, peak.", category: "Technical Analysis" },
  { term: "Hedging", definition: "Reducing risk by taking offsetting positions.", category: "Risk" },
  // I
  { term: "Indicator", definition: "Technical tool (MA, RSI, MACD) derived from price/volume.", category: "Technical Analysis" },
  { term: "Index", definition: "Benchmark of market (S&P 500, Dow).", category: "Market" },
  { term: "Intrinsic Value", definition: "Options: value if exercised now. Stock: 'true' value.", category: "Options" },
  // K
  { term: "Kelly Criterion", definition: "Optimal position sizing formula based on edge and odds.", category: "Risk" },
  // L
  { term: "Leverage", definition: "Borrowed money to increase position size. Amplifies gains and losses.", category: "Risk" },
  { term: "Limit Order", definition: "Order to buy/sell at specified price or better.", category: "Order Types" },
  { term: "Liquidity", definition: "Ease of buying/selling without moving price. High volume = high liquidity.", category: "Market" },
  { term: "Long", definition: "Buy position. Profit when price rises.", category: "General" },
  { term: "Lot", definition: "Forex: contract size. 1 standard lot = 100,000 units.", category: "Forex" },
  // M
  { term: "MACD", definition: "Moving Average Convergence Divergence - momentum indicator.", category: "Technical Analysis" },
  { term: "Margin", definition: "Borrowed funds from broker to trade. Requires margin account.", category: "Account" },
  { term: "Market Order", definition: "Order to buy/sell immediately at best available price.", category: "Order Types" },
  { term: "Market Maker", definition: "Entity that provides liquidity by quoting bid/ask.", category: "Market" },
  { term: "Marubozu", definition: "Candlestick with no wicks - full body. Strong momentum.", category: "Candlestick" },
  { term: "Moving Average", definition: "Average price over period. Smoothes price action.", category: "Technical Analysis" },
  // O
  { term: "OHLC", definition: "Open, High, Low, Close - four prices in a candlestick.", category: "Charting" },
  { term: "Open Interest", definition: "Total open contracts (options/futures). Higher = more activity.", category: "Options" },
  { term: "Overbought", definition: "RSI > 70. May be due for pullback.", category: "Technical Analysis" },
  { term: "Oversold", definition: "RSI < 30. May be due for bounce.", category: "Technical Analysis" },
  // P
  { term: "PDT Rule", definition: "Pattern Day Trader - US rule: need $25k for 4+ day trades in 5 days.", category: "Regulation" },
  { term: "Pip", definition: "Forex: smallest price move. Usually 4th decimal (0.0001).", category: "Forex" },
  { term: "Position Sizing", definition: "How much to risk per trade. 1% rule common.", category: "Risk" },
  { term: "Premium", definition: "Options: price paid for the option.", category: "Options" },
  { term: "Put Option", definition: "Right to SELL an asset at set price before expiration.", category: "Options" },
  // R
  { term: "Resistance", definition: "Price level where selling tends to emerge. Ceiling.", category: "Technical Analysis" },
  { term: "Return", definition: "Profit/loss as percentage of capital.", category: "General" },
  { term: "Risk-Reward", definition: "Ratio of potential profit to potential loss. 1:2 = risk $1 to make $2.", category: "Risk" },
  { term: "RSI", definition: "Relative Strength Index - momentum oscillator. 0-100.", category: "Technical Analysis" },
  // S
  { term: "Sharpe Ratio", definition: "Return per unit of risk. Higher = better risk-adjusted returns.", category: "Quantitative" },
  { term: "Short", definition: "Sell position. Profit when price falls.", category: "General" },
  { term: "Shooting Star", definition: "Candlestick: long upper wick, small body at bottom. Bearish reversal.", category: "Candlestick" },
  { term: "Slippage", definition: "Difference between expected and actual execution price.", category: "Order Types" },
  { term: "SMA", definition: "Simple Moving Average - equal weight to all prices in period.", category: "Technical Analysis" },
  { term: "Spread", definition: "Bid-ask spread or broker markup.", category: "Costs" },
  { term: "Stop Loss", definition: "Order to exit at predetermined loss level.", category: "Risk" },
  { term: "Support", definition: "Price level where buying tends to emerge. Floor.", category: "Technical Analysis" },
  { term: "Swing Trading", definition: "Holding positions for days to weeks.", category: "Trading Styles" },
  // T
  { term: "Take Profit", definition: "Order to exit at predetermined profit level.", category: "Risk" },
  { term: "Theta", definition: "Options Greek - time decay. Negative for long options.", category: "Options" },
  { term: "Tick", definition: "Smallest price increment. Stock = $0.01.", category: "Market" },
  { term: "Timeframe", definition: "Chart period: 1m, 5m, 1h, daily, etc.", category: "Charting" },
  { term: "Trailing Stop", definition: "Stop loss that moves with price to lock in gains.", category: "Risk" },
  { term: "Trend", definition: "Direction of price. Uptrend = higher highs/lows.", category: "Technical Analysis" },
  // V
  { term: "Vega", definition: "Options Greek - sensitivity to implied volatility.", category: "Options" },
  { term: "VIX", definition: "Fear index - measures S&P 500 option implied volatility.", category: "Market" },
  { term: "Volume", definition: "Number of shares/contracts traded. Confirms moves.", category: "Market" },
  { term: "VWAP", definition: "Volume Weighted Average Price - institutional benchmark.", category: "Technical Analysis" },
  // W
  { term: "Wash Sale", definition: "Selling at loss and rebuying within 30 days. Tax rule disallows loss.", category: "Tax" },
  { term: "Wick", definition: "Candlestick shadow - shows high/low beyond body.", category: "Charting" },
  // Y
  { term: "Yield", definition: "Return as percentage. Dividend yield = dividend/price.", category: "General" },
];
