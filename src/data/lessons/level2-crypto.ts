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
  moduleId: "markets-crypto",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const cryptoDeepDiveLessons: Lesson[] = [
  createLesson("crypto-what", 1, "What Is Cryptocurrency?", "crypto-what", "12 min", ["Define cryptocurrency", "Digital, decentralized money"], [
    { type: "text", heading: "Digital Money", content: "Cryptocurrency is digital money that runs on a decentralized network (blockchain). No single bank or government controls it. Transactions are recorded on a public ledger. Bitcoin was the first; thousands of cryptocurrencies exist today. Crypto can be used as a medium of exchange, a store of value, or for speculation." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto = digital, decentralized currency. No central authority; runs on blockchain technology." },
  ]),
  createLesson("crypto-blockchain", 2, "Blockchain Basics", "crypto-blockchain", "12 min", ["How blockchain works", "Blocks, chain, consensus"], [
    { type: "text", heading: "How It Works (Simply)", content: "A blockchain is a chain of blocks. Each block contains batches of transactions. Once a block is validated by the network (through consensus—e.g. proof of work or proof of stake), it is added to the chain and is very hard to alter. This creates a transparent, tamper-resistant record. No single party can change past data without the network agreeing." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Blockchain = linked blocks of transactions. Decentralized validation; history is hard to change." },
  ]),
  createLesson("crypto-bitcoin", 3, "Bitcoin: The First Cryptocurrency", "crypto-bitcoin", "12 min", ["What Bitcoin is", "Digital gold narrative"], [
    { type: "text", heading: "Bitcoin", content: "Bitcoin (BTC) was created in 2009 as the first cryptocurrency. Supply is capped at 21 million coins. It's often called 'digital gold'—a store of value and hedge against inflation or currency debasement. Price is set by supply and demand on exchanges. It's the largest crypto by market cap and the most widely adopted." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Bitcoin = first and largest crypto. Fixed supply; often viewed as digital gold." },
  ]),
  createLesson("crypto-ethereum", 4, "Ethereum: Smart Contracts Platform", "crypto-ethereum", "12 min", ["Ethereum vs Bitcoin", "Smart contracts and DeFi"], [
    { type: "text", heading: "Ethereum", content: "Ethereum (ETH) is a blockchain that runs smart contracts—programs that execute when conditions are met. It powers decentralized apps (dApps), DeFi (decentralized finance), and NFTs. ETH is the native token used for fees and staking. Ethereum is the second-largest crypto by market cap and has a different use case than Bitcoin (programmable money vs store of value)." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Ethereum = programmable blockchain. Smart contracts and dApps; ETH is the native token." },
  ]),
  createLesson("crypto-altcoins", 5, "Altcoins: Alternative Cryptocurrencies", "crypto-altcoins", "10 min", ["What altcoins are", "Examples and risks"], [
    { type: "text", heading: "Altcoins", content: "Altcoins are any cryptocurrency other than Bitcoin. Thousands exist: some offer different tech (faster, private, different consensus), some are memecoins or speculative. Examples include Litecoin, Cardano, Solana, and many others. Quality and risk vary hugely—many fail or are scams. Do your own research before buying." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Altcoins = all non-Bitcoin cryptos. Range from serious projects to memecoins; research and risk vary." },
  ]),
  createLesson("crypto-stablecoins", 6, "Stablecoins: USDT, USDC", "crypto-stablecoins", "10 min", ["Pegged to USD", "Use and risks"], [
    { type: "text", heading: "Stablecoins", content: "Stablecoins are cryptocurrencies designed to hold a stable value, usually pegged to the US dollar. USDT (Tether) and USDC (Circle) are the most used. They allow traders to move in and out of crypto without converting to fiat, and are used in DeFi. Risk: the peg can break if reserves are insufficient or if there is a loss of confidence—as seen in some past failures." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stablecoins = crypto pegged to USD. Used for trading and DeFi; peg and issuer risk exist." },
  ]),
  createLesson("crypto-exchanges", 7, "How Crypto Exchanges Work", "crypto-exchanges", "12 min", ["Centralized vs decentralized", "How to trade"], [
    { type: "text", heading: "Centralized Exchanges (CEX)", content: "Centralized exchanges (e.g. Coinbase, Binance, Kraken) are companies that match buyers and sellers. You deposit fiat or crypto and trade on their platform. They hold your keys unless you withdraw. Pros: easy to use, liquidity, fiat on/off ramps. Cons: custody risk, regulation, possible hacks or insolvency." },
    { type: "text", heading: "Decentralized Exchanges (DEX)", content: "Decentralized exchanges run on smart contracts; you connect a wallet and trade peer-to-peer without a central custodian. Pros: self-custody, permissionless. Cons: often harder to use, slippage, and you need to manage your own keys. Use regulated CEXs if you're new; understand DEXs as you advance." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "CEX = company-run, easy but you give up custody. DEX = peer-to-peer, you keep custody but complexity is higher." },
  ]),
  createLesson("crypto-wallets", 8, "Crypto Wallets: Hot vs Cold Storage", "crypto-wallets", "12 min", ["Hot and cold wallets", "Security basics"], [
    { type: "text", heading: "Hot Wallets", content: "Hot wallets are connected to the internet—exchange wallets, browser extensions, mobile apps. Convenient for frequent trading; more exposed to hacks and phishing. Never keep large amounts in hot storage." },
    { type: "text", heading: "Cold Wallets", content: "Cold wallets (hardware wallets like Ledger, Trezor) store keys offline. They're much safer for long-term holdings. You sign transactions on the device. For significant amounts, use cold storage and keep backups of seed phrases in a safe place—never online." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Hot = online, convenient, riskier. Cold = offline, safer for large holdings. Never share seed phrases." },
  ]),
  createLesson("crypto-24-7", 9, "24/7 Trading: Never Sleeps", "crypto-24-7", "8 min", ["No market close", "Implications for traders"], [
    { type: "text", heading: "Always Open", content: "Crypto markets trade 24 hours a day, 7 days a week. There is no central closing bell. Price can move sharply at any time—weekends, holidays, overnight. This means opportunity and risk: set alerts and stop-losses, and avoid overexposure when you can't monitor." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto trades 24/7. Volatility can happen anytime; manage risk with stops and position size." },
  ]),
  createLesson("crypto-volatility", 10, "Extreme Volatility", "crypto-volatility", "10 min", ["Why crypto is volatile", "Opportunity and risk"], [
    { type: "text", heading: "Why So Volatile?", content: "Crypto is volatile because of thinner liquidity than traditional markets, sentiment-driven flows, leverage in the system, and news (regulation, hacks, adoption). Double-digit daily moves are common. This can mean large gains or large losses—position size and risk management are critical." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto can move 10–20% or more in a day. Size positions for that volatility; never risk more than you can lose." },
  ]),
  createLesson("crypto-drivers", 11, "What Moves Crypto Prices", "crypto-drivers", "12 min", ["Adoption, regulation", "Sentiment, tech"], [
    { type: "text", heading: "Main Drivers", content: "Adoption (institutional or retail buying), regulation (bans, approvals, ETFs), macro (rates, inflation, risk-on/risk-off), sentiment (social media, fear and greed), and tech (upgrades, hacks, protocol news). Bitcoin often leads; altcoins can amplify moves. News can cause sharp reversals." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Prices move on adoption, regulation, macro, sentiment, and tech. Stay informed and manage risk." },
  ]),
  createLesson("crypto-cap-supply", 12, "Market Cap vs Circulating Supply", "crypto-cap-supply", "10 min", ["How market cap is calculated", "Why it matters"], [
    { type: "text", heading: "Market Cap and Supply", content: "Market cap = price × circulating supply (coins available). Circulating supply excludes locked or unminted coins. Total supply is the max that will exist (e.g. Bitcoin 21M). Market cap lets you compare crypto sizes—but a low-price coin with huge supply can have a high cap; price alone is misleading." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Market cap = price × circulating supply. Use it to compare projects; don't judge by price alone." },
  ]),
  createLesson("crypto-charts", 13, "Reading Crypto Charts", "crypto-charts", "10 min", ["Same as stocks/forex", "OHLC, volume, timeframes"], [
    { type: "text", heading: "Same Tools", content: "Crypto charts use the same concepts as stocks and forex: OHLC (candlesticks or bars), volume, support and resistance, trendlines, and timeframes (1m to monthly). Exchanges and sites like TradingView offer crypto charts. The difference is 24/7 data and often higher volatility—adjust stops and size accordingly." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto charts = same OHLC, volume, S/R, and timeframes. Apply what you learn from other markets." },
  ]),
  createLesson("crypto-risks", 14, "Crypto-Specific Risks", "crypto-risks", "12 min", ["Hacks, scams", "Regulation, volatility"], [
    { type: "text", heading: "Key Risks", content: "Hacks and exchange insolvency (your funds can be lost). Scams and phishing (fake sites, fake support). Regulatory uncertainty (bans, enforcement). Extreme volatility (50%+ drawdowns). No FDIC or equivalent—you are responsible for security. Only invest what you can afford to lose completely." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Risks: hacks, scams, regulation, volatility, no deposit insurance. Treat crypto as high risk." },
  ]),
  createLesson("crypto-best-practices", 15, "Best Practices", "crypto-best-practices", "10 min", ["Security and discipline", "Never more than you can lose"], [
    { type: "text", heading: "Do's and Don'ts", content: "Do: use strong passwords and 2FA; withdraw large amounts to cold storage; use reputable, regulated exchanges; verify URLs and contracts. Don't: share seed phrases or keys; chase pumps; invest more than you can lose; leave large sums on exchanges long-term. Treat crypto as a high-risk part of a portfolio." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Secure your keys, use cold storage for big holdings, and never risk money you need for living expenses." },
  ]),
  createLesson("crypto-starting-small", 16, "Starting Small", "crypto-starting-small", "8 min", ["Test with small amounts", "Learn before scaling"], [
    { type: "text", heading: "Start Small", content: "Begin with an amount you can afford to lose. Learn how to buy, sell, and withdraw; practice with charts and risk management. As you understand the market and your own psychology, you can reassess—but there is no need to rush. Many professionals still treat crypto as a small, speculative allocation." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Start with small size. Learn the mechanics and your risk tolerance before increasing exposure." },
  ], true),
];
