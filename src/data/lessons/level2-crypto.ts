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
  createLesson("crypto-what", 1, "What Is Cryptocurrency?", "crypto-what", "14 min", ["Define cryptocurrency", "Digital, decentralized money", "Use cases"], [
    {
      type: "text",
      heading: "Digital Money",
      content:
        "Cryptocurrency is digital money that runs on a decentralized network (blockchain). No single bank or government controls it. Transactions are recorded on a public ledger. Bitcoin was the first; thousands of cryptocurrencies exist today. Crypto can be used as a medium of exchange, a store of value, or for speculation.\n\nWhen you send crypto, you're not asking a bank to move numbers—you're broadcasting a transaction to a network. Miners or validators confirm it and add it to the ledger. No one can freeze your wallet or reverse the transaction (unless the protocol allows it). That's the appeal: permissionless, borderless, and (in theory) censorship-resistant.",
    },
    {
      type: "analogy",
      heading: "The Digital Cash Analogy",
      content:
        "Think of crypto like cash—but digital and on a shared ledger. With cash, you hand a bill and no bank is involved. With crypto, you send a signed message and the network records it. No bank in the middle. The ledger (blockchain) is like a public notebook everyone can read: 'Alice sent 1 BTC to Bob.' Once written, it's very hard to erase. That's the innovation.",
    },
    {
      type: "preview",
      heading: "Blockchain Basics (Preview)",
      content:
        "Under the hood, crypto runs on blockchain—a chain of blocks of transactions, validated by consensus. We'll cover how that works in the next lesson. For now, know that 'decentralized' means no single point of control, and 'on-chain' means the record is public and permanent.",
    },
    { type: "interactive", heading: "Think It Through", content: "What makes cryptocurrency different from bank money?", component: "ConceptCheck", props: { question: "What makes cryptocurrency different from bank money?", reveal: "Crypto is digital and decentralized—no single bank or government controls it. It runs on a blockchain (public ledger)." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto = digital, decentralized currency. No central authority; runs on blockchain. Used as money, store of value, or speculation." },
  ]),
  createLesson("crypto-blockchain", 2, "Blockchain Basics", "crypto-blockchain", "14 min", ["How blockchain works", "Blocks, chain, consensus"], [
    {
      type: "text",
      heading: "How It Works (Simply)",
      content:
        "A blockchain is a chain of blocks. Each block contains batches of transactions. Once a block is validated by the network (through consensus—e.g. proof of work or proof of stake), it is added to the chain and is very hard to alter. This creates a transparent, tamper-resistant record. No single party can change past data without the network agreeing.\n\nBitcoin uses proof of work (miners solve puzzles; first to solve gets to add the block). Ethereum uses proof of stake (validators lock ETH; they get to propose blocks). Both achieve consensus: everyone agrees on the same history. If someone tried to change an old block, they'd have to redo all the work—economically infeasible. That's why people say the chain is 'immutable.'",
    },
    {
      type: "analogy",
      heading: "The Ledger Analogy",
      content:
        "Imagine a shared notebook. Every 10 minutes, a new page (block) is added with a list of transactions. Everyone has a copy of the notebook. To change an old page, you'd have to convince everyone to rewrite their copy—and the new page would have to match the rest. Practically impossible. That's blockchain: a shared, append-only ledger that no one controls alone.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why is blockchain history hard to change?", component: "ConceptCheck", props: { question: "Why is blockchain history hard to change?", reveal: "Blocks are validated by the network (consensus). Once added, changing past data would require the network to agree—making it tamper-resistant." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Blockchain = linked blocks of transactions. Consensus (proof of work or stake) validates; history is hard to change." },
  ]),
  createLesson("crypto-bitcoin", 3, "Bitcoin: The First Cryptocurrency", "crypto-bitcoin", "14 min", ["What Bitcoin is", "Digital gold narrative", "Supply and demand"], [
    {
      type: "text",
      heading: "Bitcoin",
      content:
        "Bitcoin (BTC) was created in 2009 as the first cryptocurrency. Supply is capped at 21 million coins. It's often called 'digital gold'—a store of value and hedge against inflation or currency debasement. Price is set by supply and demand on exchanges. It's the largest crypto by market cap and the most widely adopted.\n\nNew bitcoin is created through mining (reward for validating blocks); the reward halves every ~4 years until no new coins are minted. That fixed supply is part of the narrative: no one can 'print' more Bitcoin. Demand comes from adoption, speculation, and (for some) fear of inflation or bank risk. Price is volatile—double-digit daily moves are common.",
    },
    {
      type: "analogy",
      heading: "The Digital Gold Analogy",
      content:
        "Gold is scarce, durable, and has been a store of value for centuries. Bitcoin is scarce (21M cap), durable (digital, can't rust), and some see it as digital gold—especially when central banks print money or inflation rises. Unlike gold, you can send Bitcoin anywhere in minutes. The 'digital gold' narrative is why many hold BTC long-term rather than trade it daily.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Bitcoin is highly volatile. It can drop 50%+ in a bear market. Never invest more than you can afford to lose. It's not FDIC-insured; if you lose your keys or get hacked, your bitcoin is gone. Treat it as high-risk speculation, not a savings account.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is Bitcoin's maximum supply?", component: "ConceptCheck", props: { question: "What is Bitcoin's maximum supply?", reveal: "Capped at 21 million coins. Often viewed as digital gold—store of value, fixed supply." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Bitcoin = first and largest crypto. Fixed supply; digital gold narrative. Highly volatile—only risk what you can lose." },
  ]),
  createLesson("crypto-ethereum", 4, "Ethereum: Smart Contracts Platform", "crypto-ethereum", "14 min", ["Ethereum vs Bitcoin", "Smart contracts and DeFi"], [
    {
      type: "text",
      heading: "Ethereum",
      content:
        "Ethereum (ETH) is a blockchain that runs smart contracts—programs that execute when conditions are met. It powers decentralized apps (dApps), DeFi (decentralized finance), and NFTs. ETH is the native token used for fees (gas) and staking. Ethereum is the second-largest crypto by market cap and has a different use case than Bitcoin (programmable money vs store of value).\n\nWhere Bitcoin is 'digital gold,' Ethereum is 'programmable money.' You can build apps on top of it—lending, trading, gaming—without a central company. That makes ETH demand depend on both 'money' narrative and 'platform' usage. When DeFi or NFTs are hot, ETH often outperforms BTC. When risk-off, BTC sometimes holds better.",
    },
    {
      type: "analogy",
      heading: "The App Store Analogy",
      content:
        "Bitcoin is like a calculator—one job (store of value / payments). Ethereum is like a smartphone—the same device (blockchain) runs many apps (smart contracts). DeFi apps, NFT marketplaces, and games all run on Ethereum. ETH is the 'fuel' that pays for running those apps. So ETH value is tied to how much people use the Ethereum 'phone.'",
    },
    { type: "interactive", heading: "Think It Through", content: "What are smart contracts?", component: "ConceptCheck", props: { question: "What are smart contracts?", reveal: "Programs on a blockchain that execute when conditions are met. Ethereum runs them; powers dApps and DeFi." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Ethereum = programmable blockchain. Smart contracts and dApps; ETH is the native token for fees and staking." },
  ]),
  createLesson("crypto-altcoins", 5, "Altcoins: Alternative Cryptocurrencies", "crypto-altcoins", "12 min", ["What altcoins are", "Examples and risks", "DYOR"], [
    {
      type: "text",
      heading: "Altcoins",
      content:
        "Altcoins are any cryptocurrency other than Bitcoin. Thousands exist: some offer different tech (faster, private, different consensus), some are memecoins or speculative. Examples include Litecoin (LTC), Cardano (ADA), Solana (SOL), and many others. Quality and risk vary hugely—many fail or are scams. Do your own research (DYOR) before buying.\n\nSome altcoins solve real problems (faster settlement, smart contracts, privacy). Others are purely speculative or jokes (memecoins). Altcoins often move more than Bitcoin—when BTC rallies, alts can 2x or 3x; when BTC dumps, alts can drop 50%+. Never assume an altcoin is 'the next Bitcoin.' Most are not.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Many altcoins are scams or pump-and-dumps. Fake teams, inflated supply, 'rug pulls' where devs drain liquidity. Never invest based on social media hype or a friend's tip. Check the project: real team? Real use case? Audited contracts? If you can't explain why it has value, don't buy.",
    },
    {
      type: "analogy",
      heading: "The App Store Analogy",
      content:
        "Bitcoin is like the one killer app everyone has. Altcoins are like the millions of other apps—some useful (Ethereum, Solana), some niche, many forgettable or scams. Just because an app exists doesn't mean it's worth downloading. Same with altcoins: existence doesn't mean value.",
    },
    { type: "interactive", heading: "Think It Through", content: "What are altcoins?", component: "ConceptCheck", props: { question: "What are altcoins?", reveal: "Any cryptocurrency other than Bitcoin. Range from serious projects to memecoins; research and risk vary." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Altcoins = all non-Bitcoin cryptos. DYOR; many fail or are scams. Don't chase hype." },
  ]),
  createLesson("crypto-stablecoins", 6, "Stablecoins: USDT, USDC", "crypto-stablecoins", "12 min", ["Pegged to USD", "Use and risks", "Depeg risk"], [
    {
      type: "text",
      heading: "Stablecoins",
      content:
        "Stablecoins are cryptocurrencies designed to hold a stable value, usually pegged to the US dollar. USDT (Tether) and USDC (Circle) are the most used. They allow traders to move in and out of crypto without converting to fiat, and are used in DeFi. Risk: the peg can break if reserves are insufficient or if there is a loss of confidence—as seen in some past failures (e.g. UST in 2022).\n\nUSDT and USDC aim to hold $1.00. When they trade at $0.98 or $1.02, that's 'depeg' risk—the market doubts the backing. Algorithmic stablecoins (like the failed UST) had no full reserve; when confidence broke, they collapsed. Stick to reserve-backed stablecoins and watch reserve reports.",
    },
    {
      type: "analogy",
      heading: "The Gift Card Analogy",
      content:
        "A stablecoin is like a gift card that's supposed to always be worth $1. You use it to move value without cashing out to a bank. But if people doubt the company has enough cash to redeem every card (reserves), the card might trade at 95 cents. That's depeg. Only use stablecoins from issuers you trust and that publish reserves.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Don't assume stablecoins are risk-free. UST lost 99% of its value in days. Even USDT and USDC have issuer and reserve risk. Don't leave life savings in stablecoins on an exchange—use them for trading and move out when not needed.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is the main risk of stablecoins?", component: "ConceptCheck", props: { question: "What is the main risk of stablecoins?", reveal: "The peg can break if reserves are insufficient or there is a loss of confidence. Used for trading and DeFi; issuer risk exists." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stablecoins = crypto pegged to USD. Use for trading; watch depeg and issuer risk. Prefer reserve-backed (USDC, USDT)." },
  ]),
  createLesson("crypto-exchanges", 7, "How Crypto Exchanges Work", "crypto-exchanges", "14 min", ["Centralized vs decentralized", "How to trade", "Custody risk"], [
    {
      type: "text",
      heading: "Centralized Exchanges (CEX)",
      content:
        "Centralized exchanges (e.g. Coinbase, Binance, Kraken) are companies that match buyers and sellers. You deposit fiat or crypto and trade on their platform. They hold your keys unless you withdraw. Pros: easy to use, liquidity, fiat on/off ramps. Cons: custody risk, regulation, possible hacks or insolvency.\n\nWhen you leave crypto on a CEX, you're trusting that company. If they get hacked (Mt. Gox, FTX) or go bankrupt, you might lose funds. Not your keys, not your coins. For active trading, CEX is practical; for long-term holdings, withdraw to your own wallet.",
    },
    {
      type: "text",
      heading: "Decentralized Exchanges (DEX)",
      content:
        "Decentralized exchanges run on smart contracts; you connect a wallet and trade peer-to-peer without a central custodian. Pros: self-custody, permissionless. Cons: often harder to use, slippage on large orders, and you need to manage your own keys. Use regulated CEXs if you're new; understand DEXs as you advance.\n\nUniswap, Curve, etc.: you connect MetaMask or another wallet, approve the trade, and the smart contract executes. No company holds your funds. But if you send to the wrong address or approve a malicious contract, you can lose everything. DEXs are powerful but require more care.",
    },
    {
      type: "analogy",
      heading: "The Bank vs Safe Analogy",
      content:
        "CEX = putting money in a bank. Convenient, but the bank can fail or get robbed—you're a creditor. DEX = keeping money in your own safe. You have full control, but you're responsible for not losing the key or giving it to a scammer. Most people use the bank (CEX) for day-to-day and the safe (cold wallet) for savings.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is the main difference between CEX and DEX?", component: "ConceptCheck", props: { question: "What is the main difference between CEX and DEX?", reveal: "CEX = company-run, easy but you give up custody. DEX = peer-to-peer, you keep custody but complexity is higher." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "CEX = easy, but not your keys. DEX = self-custody, more complex. Withdraw large holdings to your own wallet." },
  ]),
  createLesson("crypto-wallets", 8, "Crypto Wallets: Hot vs Cold Storage", "crypto-wallets", "14 min", ["Hot and cold wallets", "Security basics", "Seed phrase"], [
    {
      type: "text",
      heading: "Hot Wallets",
      content:
        "Hot wallets are connected to the internet—exchange wallets, browser extensions (MetaMask), mobile apps. Convenient for frequent trading; more exposed to hacks and phishing. Never keep large amounts in hot storage.\n\nRule of thumb: only keep in hot what you'd carry in a wallet in your pocket. Enough to trade or spend, not your life savings. Phishing sites that look like MetaMask or your exchange can steal keys. Always verify URLs; never enter your seed phrase on any website.",
    },
    {
      type: "text",
      heading: "Cold Wallets",
      content:
        "Cold wallets (hardware wallets like Ledger, Trezor) store keys offline. They're much safer for long-term holdings. You sign transactions on the device—the private key never leaves it. For significant amounts, use cold storage and keep backups of seed phrases in a safe place—never online, never in email or cloud.\n\nSeed phrase = 12 or 24 words that recover your wallet. Anyone with those words owns your crypto. Write them on paper; store in a safe or safety deposit box. Never share with anyone—legit support will never ask for it.",
    },
    {
      type: "analogy",
      heading: "The Key Under the Mat Analogy",
      content:
        "Your seed phrase is the master key to your crypto. Hot wallet = key in your pocket (handy but can be stolen). Cold wallet = key in a safe (harder to use but much safer). Never put your key under the mat (online, in a screenshot, or shared). If someone finds it, they take everything.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never share your seed phrase with anyone. No legitimate company, support agent, or 'admin' will ever ask for it. Scammers do. If you share it, your crypto can be stolen in minutes and there is no reversal. Ever.",
    },
    { type: "interactive", heading: "Think It Through", content: "When should you use cold storage?", component: "ConceptCheck", props: { question: "When should you use cold storage?", reveal: "For significant amounts and long-term holdings. Cold = offline, much safer. Never share seed phrases." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Hot = online, convenient, riskier. Cold = offline, safer for large holdings. Never share seed phrases. Backup seed offline." },
  ]),
  createLesson("crypto-24-7", 9, "24/7 Trading: Never Sleeps", "crypto-24-7", "12 min", ["No market close", "Implications for traders", "Risk management"], [
    {
      type: "text",
      heading: "Always Open",
      content:
        "Crypto markets trade 24 hours a day, 7 days a week. There is no central closing bell. Price can move sharply at any time—weekends, holidays, overnight. This means opportunity and risk: set alerts and stop-losses, and avoid overexposure when you can't monitor.\n\nStocks close at 4 PM ET; you know you're 'safe' until the next open. Crypto never closes. A tweet at 3 AM can move Bitcoin 5%. If you're overexposed and asleep, you can wake up to a different P&L. Use stop-losses (exchange or mental) and size so that a 20% move against you doesn't wipe you out.",
    },
    {
      type: "analogy",
      heading: "The Never-Closing Casino Analogy",
      content:
        "Crypto is like a casino that never closes. You can play anytime—but the wheel can spin when you're not looking. You wouldn't leave a huge bet on the table and go home. Same with crypto: don't leave size on that you can't afford to have move against you overnight. Stops and position size are your way of 'cashing out' when you're not watching.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why should you use stops and position size in crypto?", component: "ConceptCheck", props: { question: "Why should you use stops and position size in crypto?", reveal: "Crypto trades 24/7 and can move sharply anytime. Manage risk with stops and position size when you can't monitor." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto trades 24/7. Use stops and size so you're not exposed when you can't monitor." },
  ]),
  createLesson("crypto-volatility", 10, "Extreme Volatility", "crypto-volatility", "12 min", ["Why crypto is volatile", "Opportunity and risk", "Position sizing"], [
    {
      type: "text",
      heading: "Why So Volatile?",
      content:
        "Crypto is volatile because of thinner liquidity than traditional markets, sentiment-driven flows, leverage in the system, and news (regulation, hacks, adoption). Double-digit daily moves are common. This can mean large gains or large losses—position size and risk management are critical.\n\nA 10% move in a stock is big. In crypto it's a normal day. Bitcoin has had 80%+ drawdowns from peaks. Altcoins can drop 90%. If you size like you're trading AAPL, one bad week in crypto can wipe your account. Size small: 1–2% risk per trade or less. Let the volatility work for you when you're right, but never let it destroy you when you're wrong.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never use leverage in crypto when you're learning. 10x leverage + 10% move against you = 100% loss. Crypto is volatile enough without leverage. Pros use leverage sparingly and with strict risk. Beginners should never use it.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why is crypto so volatile?", component: "ConceptCheck", props: { question: "Why is crypto so volatile?", reveal: "Thinner liquidity, sentiment-driven flows, leverage, and news (regulation, hacks, adoption). Size positions and never risk more than you can lose." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto can move 10–20%+ in a day. Size small (1–2% risk); never use leverage when learning." },
  ]),
  createLesson("crypto-drivers", 11, "What Moves Crypto Prices", "crypto-drivers", "14 min", ["Adoption, regulation", "Sentiment, tech", "Macro"], [
    {
      type: "text",
      heading: "Main Drivers",
      content:
        "Adoption (institutional or retail buying), regulation (bans, approvals, ETFs), macro (rates, inflation, risk-on/risk-off), sentiment (social media, fear and greed), and tech (upgrades, hacks, protocol news). Bitcoin often leads; altcoins can amplify moves. News can cause sharp reversals.\n\nETF approval = often rally. Exchange hack = often selloff. Fed hawkish = risk-off, crypto can drop. Fed pivot = risk-on, crypto can rally. Fear and Greed Index is a rough sentiment gauge. Don't trade on headlines alone—but be aware of the calendar (Fed, CPI, ETF deadlines) and major news.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Bitcoin often leads; alts follow with more amplitude. When BTC breaks out, watch for alts to pump. When BTC dumps, alts often dump harder. Use BTC as a 'tide' indicator—when the tide turns, adjust your alt exposure.",
    },
    { type: "interactive", heading: "Think It Through", content: "What are key drivers of crypto prices?", component: "ConceptCheck", props: { question: "What are key drivers of crypto prices?", reveal: "Adoption, regulation, macro, sentiment, and tech. Stay informed and manage risk." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Prices move on adoption, regulation, macro, sentiment, and tech. BTC often leads; stay informed." },
  ]),
  createLesson("crypto-cap-supply", 12, "Market Cap vs Circulating Supply", "crypto-cap-supply", "12 min", ["How market cap is calculated", "Why it matters", "Don't judge by price"], [
    {
      type: "text",
      heading: "Market Cap and Supply",
      content:
        "Market cap = price × circulating supply (coins available). Circulating supply excludes locked or unminted coins. Total supply is the max that will exist (e.g. Bitcoin 21M). Market cap lets you compare crypto sizes—but a low-price coin with huge supply can have a high cap; price alone is misleading.\n\nExample: Coin A at $0.01 with 1 trillion supply = $10B market cap. Coin B at $50,000 with 200k supply = $10B market cap. Same size. The '$0.01 coin' isn't 'cheaper'—it's just more diluted. Always look at market cap when comparing projects. A 'low price' with massive supply often means the project is overvalued or a meme.",
    },
    {
      type: "analogy",
      heading: "The Pizza Slice Analogy",
      content:
        "Price per coin is like price per slice. A pizza cut into 8 slices at $2/slice = $16 total. A pizza cut into 1000 slices at $0.02/slice = $20 total. The 'cheaper' slice doesn't mean a cheaper pizza—it means more slices (more supply). Market cap = total pizza value. Look at the whole pizza.",
    },
    { type: "interactive", heading: "Think It Through", content: "How is crypto market cap calculated?", component: "ConceptCheck", props: { question: "How is crypto market cap calculated?", reveal: "Price × circulating supply. Use it to compare projects; don't judge by price alone." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Market cap = price × circulating supply. Use it to compare projects; price per coin alone is misleading." },
  ]),
  createLesson("crypto-charts", 13, "Reading Crypto Charts", "crypto-charts", "12 min", ["Same as stocks/forex", "OHLC, volume, timeframes"], [
    {
      type: "text",
      heading: "Same Tools",
      content:
        "Crypto charts use the same concepts as stocks and forex: OHLC (candlesticks or bars), volume, support and resistance, trendlines, and timeframes (1m to monthly). Exchanges and sites like TradingView offer crypto charts. The difference is 24/7 data and often higher volatility—adjust stops and size accordingly.\n\nEverything you learn in the charting and candlestick modules applies. S/R, trendlines, patterns—they work in crypto too. The main adjustment: volatility is higher, so use wider stops or smaller size. And volume can be faked on some exchanges (wash trading), so treat volume as one input, not gospel.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use TradingView for crypto charts even if you trade on an exchange—better indicators and layout. Connect your exchange for live data or use the free delayed data. Same TA toolkit: RSI, MAs, S/R. Apply what you learn elsewhere.",
    },
    { type: "interactive", heading: "Think It Through", content: "Are crypto charts different from stock charts?", component: "ConceptCheck", props: { question: "Are crypto charts different from stock charts?", reveal: "Same concepts: OHLC, volume, S/R, timeframes. Difference is 24/7 data and often higher volatility—adjust stops and size." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto charts = same OHLC, volume, S/R, timeframes. Apply TA from other markets; adjust for volatility." },
  ]),
  createLesson("crypto-risks", 14, "Crypto-Specific Risks", "crypto-risks", "14 min", ["Hacks, scams", "Regulation, volatility"], [
    {
      type: "text",
      heading: "Key Risks",
      content:
        "Hacks and exchange insolvency (your funds can be lost). Scams and phishing (fake sites, fake support). Regulatory uncertainty (bans, enforcement). Extreme volatility (50%+ drawdowns). No FDIC or equivalent—you are responsible for security. Only invest what you can afford to lose completely.\n\nFTX collapsed in 2022—users lost billions. Mt. Gox was hacked years ago. Scammers impersonate support and ask for seed phrases. Fake airdrops, fake tokens that drain your wallet. If something seems too good to be true (double your ETH, free NFT that requires 'verification'), it's a scam. Verify URLs, never share keys, use hardware wallets for serious holdings.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "There is no FDIC, SIPC, or government backstop for crypto. If your exchange goes under or you get hacked, you're likely not getting your money back. Treat every dollar in crypto as at risk. Only risk what you can afford to lose 100%.",
    },
    { type: "interactive", heading: "Think It Through", content: "Is crypto protected by deposit insurance like banks?", component: "ConceptCheck", props: { question: "Is crypto protected by deposit insurance like banks?", reveal: "No. No FDIC or equivalent. You are responsible for security. Only invest what you can afford to lose completely." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Risks: hacks, scams, regulation, volatility, no deposit insurance. Treat crypto as high risk; only risk what you can lose." },
  ]),
  createLesson("crypto-best-practices", 15, "Best Practices", "crypto-best-practices", "12 min", ["Security and discipline", "Never more than you can lose"], [
    {
      type: "text",
      heading: "Do's and Don'ts",
      content:
        "Do: use strong passwords and 2FA; withdraw large amounts to cold storage; use reputable, regulated exchanges; verify URLs and contracts. Don't: share seed phrases or keys; chase pumps; invest more than you can lose; leave large sums on exchanges long-term. Treat crypto as a high-risk part of a portfolio.\n\nEnable 2FA everywhere—prefer an authenticator app over SMS (SIM swap risk). Bookmark your exchange and wallet URLs; never click links from email or Twitter. Before connecting a wallet to a new dApp, check if the contract is verified and the project is legit. A few minutes of caution can save you from a drainer.",
    },
    {
      type: "analogy",
      heading: "The Seatbelt Analogy",
      content:
        "Best practices are like wearing a seatbelt. You hope you never need it, but when something goes wrong (hack, scam, exchange failure), the seatbelt (2FA, cold storage, not sharing keys) can save you. Don't skip the seatbelt because 'nothing bad has happened yet.'",
    },
    { type: "interactive", heading: "Think It Through", content: "Should you ever share your seed phrase?", component: "ConceptCheck", props: { question: "Should you ever share your seed phrase?", reveal: "Never. Anyone with your seed phrase can steal your crypto. Secure your keys and use cold storage for big holdings." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "2FA, cold storage, verify URLs, never share keys. Treat crypto as high risk. Never risk money you need." },
  ]),
  createLesson("crypto-starting-small", 16, "Starting Small", "crypto-starting-small", "12 min", ["Test with small amounts", "Learn before scaling"], [
    {
      type: "text",
      heading: "Start Small",
      content:
        "Begin with an amount you can afford to lose. Learn how to buy, sell, and withdraw; practice with charts and risk management. As you understand the market and your own psychology, you can reassess—but there is no need to rush. Many professionals still treat crypto as a small, speculative allocation.\n\nUse small size to learn: how does the exchange work? How do I send to a wallet? What happens when price moves 10%? Get comfortable with the mechanics and your own reaction to volatility before adding size. Crypto will still be here in a year. There's no prize for going all-in on day one.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Treat your first 3–6 months as tuition. Expect to make mistakes—wrong address, emotional trade, forgetting 2FA. Better to make those mistakes with $100 than $10,000. Once you've made the beginner errors with small size, you're better prepared to scale (if you choose to).",
    },
    { type: "interactive", heading: "Think It Through", content: "How much should you start with in crypto?", component: "ConceptCheck", props: { question: "How much should you start with in crypto?", reveal: "An amount you can afford to lose. Learn the mechanics and your risk tolerance before increasing exposure." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Start with small size. Learn mechanics and psychology before increasing. Treat early losses as tuition." },
  ], true),
];
