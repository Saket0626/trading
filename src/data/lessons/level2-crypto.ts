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
    { type: "interactive", heading: "Think It Through", content: "What makes cryptocurrency different from bank money?", component: "ConceptCheck", props: { question: "What makes cryptocurrency different from bank money?", reveal: "Crypto is digital and decentralized—no single bank or government controls it. It runs on a blockchain (public ledger)." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto = digital, decentralized currency. No central authority; runs on blockchain technology." },
  ]),
  createLesson("crypto-blockchain", 2, "Blockchain Basics", "crypto-blockchain", "12 min", ["How blockchain works", "Blocks, chain, consensus"], [
    { type: "text", heading: "How It Works (Simply)", content: "A blockchain is a chain of blocks. Each block contains batches of transactions. Once a block is validated by the network (through consensus—e.g. proof of work or proof of stake), it is added to the chain and is very hard to alter. This creates a transparent, tamper-resistant record. No single party can change past data without the network agreeing." },
    { type: "interactive", heading: "Think It Through", content: "Why is blockchain history hard to change?", component: "ConceptCheck", props: { question: "Why is blockchain history hard to change?", reveal: "Blocks are validated by the network (consensus). Once added, changing past data would require the network to agree—making it tamper-resistant." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Blockchain = linked blocks of transactions. Decentralized validation; history is hard to change." },
  ]),
  createLesson("crypto-bitcoin", 3, "Bitcoin: The First Cryptocurrency", "crypto-bitcoin", "12 min", ["What Bitcoin is", "Digital gold narrative"], [
    { type: "text", heading: "Bitcoin", content: "Bitcoin (BTC) was created in 2009 as the first cryptocurrency. Supply is capped at 21 million coins. It's often called 'digital gold'—a store of value and hedge against inflation or currency debasement. Price is set by supply and demand on exchanges. It's the largest crypto by market cap and the most widely adopted." },
    { type: "interactive", heading: "Think It Through", content: "What is Bitcoin's maximum supply?", component: "ConceptCheck", props: { question: "What is Bitcoin's maximum supply?", reveal: "Capped at 21 million coins. Often viewed as digital gold—store of value, fixed supply." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Bitcoin = first and largest crypto. Fixed supply; often viewed as digital gold." },
  ]),
  createLesson("crypto-ethereum", 4, "Ethereum: Smart Contracts Platform", "crypto-ethereum", "12 min", ["Ethereum vs Bitcoin", "Smart contracts and DeFi"], [
    { type: "text", heading: "Ethereum", content: "Ethereum (ETH) is a blockchain that runs smart contracts—programs that execute when conditions are met. It powers decentralized apps (dApps), DeFi (decentralized finance), and NFTs. ETH is the native token used for fees and staking. Ethereum is the second-largest crypto by market cap and has a different use case than Bitcoin (programmable money vs store of value)." },
    { type: "interactive", heading: "Think It Through", content: "What are smart contracts?", component: "ConceptCheck", props: { question: "What are smart contracts?", reveal: "Programs on a blockchain that execute when conditions are met. Ethereum runs them; powers dApps and DeFi." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Ethereum = programmable blockchain. Smart contracts and dApps; ETH is the native token." },
  ]),
  createLesson("crypto-altcoins", 5, "Altcoins: Alternative Cryptocurrencies", "crypto-altcoins", "10 min", ["What altcoins are", "Examples and risks"], [
    { type: "text", heading: "Altcoins", content: "Altcoins are any cryptocurrency other than Bitcoin. Thousands exist: some offer different tech (faster, private, different consensus), some are memecoins or speculative. Examples include Litecoin, Cardano, Solana, and many others. Quality and risk vary hugely—many fail or are scams. Do your own research before buying." },
    { type: "interactive", heading: "Think It Through", content: "What are altcoins?", component: "ConceptCheck", props: { question: "What are altcoins?", reveal: "Any cryptocurrency other than Bitcoin. Range from serious projects to memecoins; research and risk vary." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Altcoins = all non-Bitcoin cryptos. Range from serious projects to memecoins; research and risk vary." },
  ]),
  createLesson("crypto-stablecoins", 6, "Stablecoins: USDT, USDC", "crypto-stablecoins", "10 min", ["Pegged to USD", "Use and risks"], [
    { type: "text", heading: "Stablecoins", content: "Stablecoins are cryptocurrencies designed to hold a stable value, usually pegged to the US dollar. USDT (Tether) and USDC (Circle) are the most used. They allow traders to move in and out of crypto without converting to fiat, and are used in DeFi. Risk: the peg can break if reserves are insufficient or if there is a loss of confidence—as seen in some past failures." },
    { type: "interactive", heading: "Think It Through", content: "What is the main risk of stablecoins?", component: "ConceptCheck", props: { question: "What is the main risk of stablecoins?", reveal: "The peg can break if reserves are insufficient or there is a loss of confidence. Used for trading and DeFi; issuer risk exists." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stablecoins = crypto pegged to USD. Used for trading and DeFi; peg and issuer risk exist." },
  ]),
  createLesson("crypto-exchanges", 7, "How Crypto Exchanges Work", "crypto-exchanges", "12 min", ["Centralized vs decentralized", "How to trade"], [
    { type: "text", heading: "Centralized Exchanges (CEX)", content: "Centralized exchanges (e.g. Coinbase, Binance, Kraken) are companies that match buyers and sellers. You deposit fiat or crypto and trade on their platform. They hold your keys unless you withdraw. Pros: easy to use, liquidity, fiat on/off ramps. Cons: custody risk, regulation, possible hacks or insolvency." },
    { type: "text", heading: "Decentralized Exchanges (DEX)", content: "Decentralized exchanges run on smart contracts; you connect a wallet and trade peer-to-peer without a central custodian. Pros: self-custody, permissionless. Cons: often harder to use, slippage, and you need to manage your own keys. Use regulated CEXs if you're new; understand DEXs as you advance." },
    { type: "interactive", heading: "Think It Through", content: "What is the main difference between CEX and DEX?", component: "ConceptCheck", props: { question: "What is the main difference between CEX and DEX?", reveal: "CEX = company-run, easy but you give up custody. DEX = peer-to-peer, you keep custody but complexity is higher." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "CEX = company-run, easy but you give up custody. DEX = peer-to-peer, you keep custody but complexity is higher." },
  ]),
  createLesson("crypto-wallets", 8, "Crypto Wallets: Hot vs Cold Storage", "crypto-wallets", "12 min", ["Hot and cold wallets", "Security basics"], [
    { type: "text", heading: "Hot Wallets", content: "Hot wallets are connected to the internet—exchange wallets, browser extensions, mobile apps. Convenient for frequent trading; more exposed to hacks and phishing. Never keep large amounts in hot storage." },
    { type: "text", heading: "Cold Wallets", content: "Cold wallets (hardware wallets like Ledger, Trezor) store keys offline. They're much safer for long-term holdings. You sign transactions on the device. For significant amounts, use cold storage and keep backups of seed phrases in a safe place—never online." },
    { type: "interactive", heading: "Think It Through", content: "When should you use cold storage?", component: "ConceptCheck", props: { question: "When should you use cold storage?", reveal: "For significant amounts and long-term holdings. Cold = offline, much safer. Never share seed phrases." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Hot = online, convenient, riskier. Cold = offline, safer for large holdings. Never share seed phrases." },
  ]),
  createLesson("crypto-24-7", 9, "24/7 Trading: Never Sleeps", "crypto-24-7", "8 min", ["No market close", "Implications for traders"], [
    { type: "text", heading: "Always Open", content: "Crypto markets trade 24 hours a day, 7 days a week. There is no central closing bell. Price can move sharply at any time—weekends, holidays, overnight. This means opportunity and risk: set alerts and stop-losses, and avoid overexposure when you can't monitor." },
    { type: "interactive", heading: "Think It Through", content: "Why should you use stops and position size in crypto?", component: "ConceptCheck", props: { question: "Why should you use stops and position size in crypto?", reveal: "Crypto trades 24/7 and can move sharply anytime. Manage risk with stops and position size when you can't monitor." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto trades 24/7. Volatility can happen anytime; manage risk with stops and position size." },
  ]),
  createLesson("crypto-volatility", 10, "Extreme Volatility", "crypto-volatility", "10 min", ["Why crypto is volatile", "Opportunity and risk"], [
    { type: "text", heading: "Why So Volatile?", content: "Crypto is volatile because of thinner liquidity than traditional markets, sentiment-driven flows, leverage in the system, and news (regulation, hacks, adoption). Double-digit daily moves are common. This can mean large gains or large losses—position size and risk management are critical." },
    { type: "interactive", heading: "Think It Through", content: "Why is crypto so volatile?", component: "ConceptCheck", props: { question: "Why is crypto so volatile?", reveal: "Thinner liquidity, sentiment-driven flows, leverage, and news (regulation, hacks, adoption). Size positions and never risk more than you can lose." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto can move 10–20% or more in a day. Size positions for that volatility; never risk more than you can lose." },
  ]),
  createLesson("crypto-drivers", 11, "What Moves Crypto Prices", "crypto-drivers", "12 min", ["Adoption, regulation", "Sentiment, tech"], [
    { type: "text", heading: "Main Drivers", content: "Adoption (institutional or retail buying), regulation (bans, approvals, ETFs), macro (rates, inflation, risk-on/risk-off), sentiment (social media, fear and greed), and tech (upgrades, hacks, protocol news). Bitcoin often leads; altcoins can amplify moves. News can cause sharp reversals." },
    { type: "interactive", heading: "Think It Through", content: "What are key drivers of crypto prices?", component: "ConceptCheck", props: { question: "What are key drivers of crypto prices?", reveal: "Adoption, regulation, macro, sentiment, and tech. Stay informed and manage risk." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Prices move on adoption, regulation, macro, sentiment, and tech. Stay informed and manage risk." },
  ]),
  createLesson("crypto-cap-supply", 12, "Market Cap vs Circulating Supply", "crypto-cap-supply", "10 min", ["How market cap is calculated", "Why it matters"], [
    { type: "text", heading: "Market Cap and Supply", content: "Market cap = price × circulating supply (coins available). Circulating supply excludes locked or unminted coins. Total supply is the max that will exist (e.g. Bitcoin 21M). Market cap lets you compare crypto sizes—but a low-price coin with huge supply can have a high cap; price alone is misleading." },
    { type: "interactive", heading: "Think It Through", content: "How is crypto market cap calculated?", component: "ConceptCheck", props: { question: "How is crypto market cap calculated?", reveal: "Price × circulating supply. Use it to compare projects; don't judge by price alone." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Market cap = price × circulating supply. Use it to compare projects; don't judge by price alone." },
  ]),
  createLesson("crypto-charts", 13, "Reading Crypto Charts", "crypto-charts", "10 min", ["Same as stocks/forex", "OHLC, volume, timeframes"], [
    { type: "text", heading: "Same Tools", content: "Crypto charts use the same concepts as stocks and forex: OHLC (candlesticks or bars), volume, support and resistance, trendlines, and timeframes (1m to monthly). Exchanges and sites like TradingView offer crypto charts. The difference is 24/7 data and often higher volatility—adjust stops and size accordingly." },
    { type: "interactive", heading: "Think It Through", content: "Are crypto charts different from stock charts?", component: "ConceptCheck", props: { question: "Are crypto charts different from stock charts?", reveal: "Same concepts: OHLC, volume, S/R, timeframes. Difference is 24/7 data and often higher volatility—adjust stops and size." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto charts = same OHLC, volume, S/R, and timeframes. Apply what you learn from other markets." },
  ]),
  createLesson("crypto-risks", 14, "Crypto-Specific Risks", "crypto-risks", "12 min", ["Hacks, scams", "Regulation, volatility"], [
    { type: "text", heading: "Key Risks", content: "Hacks and exchange insolvency (your funds can be lost). Scams and phishing (fake sites, fake support). Regulatory uncertainty (bans, enforcement). Extreme volatility (50%+ drawdowns). No FDIC or equivalent—you are responsible for security. Only invest what you can afford to lose completely." },
    { type: "interactive", heading: "Think It Through", content: "Is crypto protected by deposit insurance like banks?", component: "ConceptCheck", props: { question: "Is crypto protected by deposit insurance like banks?", reveal: "No. No FDIC or equivalent. You are responsible for security. Only invest what you can afford to lose completely." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Risks: hacks, scams, regulation, volatility, no deposit insurance. Treat crypto as high risk." },
  ]),
  createLesson("crypto-best-practices", 15, "Best Practices", "crypto-best-practices", "10 min", ["Security and discipline", "Never more than you can lose"], [
    { type: "text", heading: "Do's and Don'ts", content: "Do: use strong passwords and 2FA; withdraw large amounts to cold storage; use reputable, regulated exchanges; verify URLs and contracts. Don't: share seed phrases or keys; chase pumps; invest more than you can lose; leave large sums on exchanges long-term. Treat crypto as a high-risk part of a portfolio." },
    { type: "interactive", heading: "Think It Through", content: "Should you ever share your seed phrase?", component: "ConceptCheck", props: { question: "Should you ever share your seed phrase?", reveal: "Never. Anyone with your seed phrase can steal your crypto. Secure your keys and use cold storage for big holdings." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Secure your keys, use cold storage for big holdings, and never risk money you need for living expenses." },
  ]),
  createLesson("crypto-starting-small", 16, "Starting Small", "crypto-starting-small", "8 min", ["Test with small amounts", "Learn before scaling"], [
    { type: "text", heading: "Start Small", content: "Begin with an amount you can afford to lose. Learn how to buy, sell, and withdraw; practice with charts and risk management. As you understand the market and your own psychology, you can reassess—but there is no need to rush. Many professionals still treat crypto as a small, speculative allocation." },
    { type: "interactive", heading: "Think It Through", content: "How much should you start with in crypto?", component: "ConceptCheck", props: { question: "How much should you start with in crypto?", reveal: "An amount you can afford to lose. Learn the mechanics and your risk tolerance before increasing exposure." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Start with small size. Learn the mechanics and your risk tolerance before increasing exposure." },
  ], true),
];
