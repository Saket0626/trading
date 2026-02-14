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
  moduleId: "markets-commodities",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const commoditiesDeepDiveLessons: Lesson[] = [
  createLesson("comm-what", 1, "What Are Commodities?", "comm-what", "12 min", ["Define commodities", "Physical goods traded", "Why they matter"], [
    {
      type: "text",
      heading: "Raw Materials",
      content:
        "Commodities are physical goods that are largely interchangeable—a barrel of oil or an ounce of gold from one source is treated the same as another. They're traded on exchanges worldwide. Unlike stocks, you're dealing with real stuff: metals, energy, and agricultural products. Prices are driven by global supply and demand.\n\nNo earnings reports, no CEO—just supply (how much is produced, stored) and demand (how much the world needs). A drought in Brazil can send coffee soaring. OPEC cutting production can send oil up. Commodities are the building blocks of the economy: you can't make a car without steel and oil, or eat without wheat and corn.",
    },
    {
      type: "analogy",
      heading: "The Building Blocks Analogy",
      content:
        "Think of commodities like LEGO blocks. Stocks are the assembled sets (companies that use the blocks). Commodities are the raw blocks—gold, oil, wheat. When blocks get scarce (supply shock), they cost more. When everyone wants to build (demand boom), blocks cost more. You can trade the blocks (commodities) or the finished sets (stocks). Different games, same underlying stuff.",
    },
    {
      type: "preview",
      heading: "Hard vs Soft (Preview)",
      content:
        "Commodities split into hard (metals, energy—mined or extracted) and soft (agriculture—grown). We'll cover both next. Hard commodities don't have a growing season; soft ones do. That affects how you trade them.",
    },
    { type: "interactive", heading: "Think It Through", content: "What are commodities?", component: "ConceptCheck", props: { question: "What are commodities?", reveal: "Physical goods that are largely interchangeable: metals, energy, agriculture. Prices reflect global supply and demand." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Commodities = raw materials (metals, energy, agriculture). Traded globally; prices reflect supply and demand." },
  ]),
  createLesson("comm-hard", 2, "Hard Commodities: Metals and Energy", "comm-hard", "12 min", ["Metals and energy", "Mined or extracted", "Drivers"], [
    {
      type: "text",
      heading: "Hard Commodities",
      content:
        "Hard commodities are mined or extracted: precious metals (gold, silver, platinum), base metals (copper, zinc), and energy (crude oil, natural gas). They don't depend on growing seasons in the same way crops do, but they are affected by geopolitics, production levels, and storage.\n\nGold and silver: driven by rates, inflation, and risk sentiment. Copper: 'Dr. Copper'—industrial demand, often a growth barometer. Oil: OPEC+, inventories, geopolitics (e.g. Middle East). Natural gas: weather, storage, LNG. Hard commodities can trade 24/5 (futures) or during exchange hours—check the contract.",
    },
    {
      type: "analogy",
      heading: "The Mine and Well Analogy",
      content:
        "Hard commodities come from the ground—mines (metals) or wells (oil, gas). You can't grow more gold in a season; you have to dig. So supply changes slowly unless there's a new discovery or a shutdown. Demand can spike (crisis = gold bid) or drop (recession = oil down). Supply is sticky; demand is flexible. That's why hard commodities can have long booms and busts.",
    },
    { type: "interactive", heading: "Think It Through", content: "What are examples of hard commodities?", component: "ConceptCheck", props: { question: "What are examples of hard commodities?", reveal: "Metals (gold, silver, copper) and energy (crude oil, natural gas). Mined or extracted; influenced by production and geopolitics." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Hard = metals and energy. Mined or extracted; influenced by production, geopolitics, and storage." },
  ]),
  createLesson("comm-soft", 3, "Soft Commodities: Agriculture", "comm-soft", "12 min", ["Agricultural commodities", "Weather and seasons", "Seasonal patterns"], [
    {
      type: "text",
      heading: "Soft Commodities",
      content:
        "Soft commodities are grown: corn, wheat, soybeans, coffee, sugar, cotton, cocoa. Weather (drought, floods), pests, and planting/harvest cycles drive prices. They often show strong seasonal patterns. Traded on futures exchanges; many investors access them via ETFs.\n\nPlanting season: farmers lock in prices; speculators take the other side. Harvest: supply hits the market—prices often drop if the crop is good. A freeze in Brazil can send coffee up 20% in a week. Soft commodities are weather lottery—you're betting on sun, rain, and frost.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Don't trade soft commodities without watching the weather and crop reports. USDA reports (planting, stocks, harvest) move markets on release. A surprise in the data can gap the market. If you're in corn or wheat, know the report calendar.",
    },
    { type: "interactive", heading: "Think It Through", content: "What drives soft commodity prices?", component: "ConceptCheck", props: { question: "What drives soft commodity prices?", reveal: "Weather, pests, and planting/harvest cycles. They often show strong seasonal patterns." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Soft = agricultural. Weather and seasons matter; often seasonal price patterns. Watch crop and weather reports." },
  ]),
  createLesson("comm-gold", 4, "Gold: Safe Haven and Inflation Hedge", "comm-gold", "14 min", ["Why gold matters", "Safe haven and inflation", "Real rates"], [
    {
      type: "text",
      heading: "Why Gold?",
      content:
        "Gold is seen as a store of value and a safe haven—when markets or currencies weaken, demand often rises. It's also used as an inflation hedge: when money loses purchasing power, gold (in nominal terms) can rise. Central banks hold gold; jewelry and industry add demand. It doesn't pay interest, so opportunity cost depends on real rates.\n\nWhen real rates (nominal rate minus inflation) are low or negative, gold tends to do well—there's no opportunity cost to holding a non-yielding asset. When real rates rise (Fed hiking, inflation falling), gold often struggles. Watch the 10-year TIPS yield (real rate proxy) as a headwind or tailwind for gold.",
    },
    {
      type: "analogy",
      heading: "The Insurance Policy Analogy",
      content:
        "Think of gold like an insurance policy. You pay a premium (opportunity cost—no dividend or interest). In return, when things go wrong (market crash, currency crisis, inflation spike), the policy pays out—gold tends to hold or gain value. No one hopes for a crash, but having some gold is like having fire insurance. You hope you never need it.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Gold often moves inverse to the US dollar. Strong dollar = gold under pressure (gold is dollar-denominated). Weak dollar = gold bid. If you trade gold, keep an eye on DXY (dollar index) and real yields.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why is gold called a safe haven?", component: "ConceptCheck", props: { question: "Why is gold called a safe haven?", reveal: "When markets or currencies weaken, demand often rises. It's seen as a store of value and inflation hedge." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Gold = safe haven and inflation hedge. Demand rises in uncertainty; often inverse to strong USD and real rates." },
  ]),
  createLesson("comm-silver", 5, "Silver: Industrial and Precious Metal", "comm-silver", "12 min", ["Silver's dual role", "Industrial demand", "Volatility"], [
    {
      type: "text",
      heading: "Silver's Two Sides",
      content:
        "Silver is both a precious metal (like gold—investment and jewelry) and a major industrial metal (electronics, solar, medical). So its price reflects both safe-haven/commodity flows and industrial demand. It tends to be more volatile than gold and can outperform in risk-on industrial booms or in precious-metal rallies.\n\nSolar demand has grown—silver is in photovoltaic cells. When gold rallies, silver often follows (and can outperform) because it's a smaller market. When industrial demand is strong, silver can outperform gold. When risk-off, gold usually holds better—silver gets hit by both precious and industrial selling.",
    },
    {
      type: "analogy",
      heading: "The Hybrid Car Analogy",
      content:
        "Gold is like a pure electric car—one engine (store of value). Silver is like a hybrid—two engines (precious + industrial). Sometimes both engines run (precious rally + industrial boom = silver soars). Sometimes one stalls (industrial slowdown = silver lags gold). That dual nature is why silver is more volatile.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why is silver more volatile than gold?", component: "ConceptCheck", props: { question: "Why is silver more volatile than gold?", reveal: "Silver has both precious-metal and industrial demand. Price reflects investment flows and industry; tends to move more than gold." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Silver = precious + industrial. More volatile than gold; driven by both investment and industry." },
  ]),
  createLesson("comm-oil", 6, "Oil: WTI vs Brent Crude", "comm-oil", "14 min", ["WTI and Brent", "Benchmarks", "What moves oil"], [
    {
      type: "text",
      heading: "Two Main Benchmarks",
      content:
        "WTI (West Texas Intermediate) is the US benchmark—light, sweet crude. Brent is the international benchmark (North Sea). Both are quoted in dollars per barrel. Spreads between them reflect regional supply, demand, and logistics. Oil is crucial for transport and industry; prices move on OPEC+, inventories, and geopolitics.\n\nUS oil production (shale) affects WTI more. Middle East, Russia, OPEC+ affect Brent more. When WTI trades far below Brent, US supply might be glutted. When they converge, global balance. EIA weekly inventory (Wed) and OPEC+ meetings are key events—they can move oil 5%+ in a day.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Oil can gap on geopolitics (e.g. Middle East conflict, pipeline attack). Don't use size you can't afford to lose. Stops can slip in fast markets. If you trade oil futures or ETFs (USO, etc.), know the contract structure—many oil ETFs roll futures and suffer in contango.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is the difference between WTI and Brent?", component: "ConceptCheck", props: { question: "What is the difference between WTI and Brent?", reveal: "WTI = US benchmark. Brent = international (North Sea). Both are crude oil benchmarks; spreads reflect regional supply and demand." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "WTI = US benchmark. Brent = international. Both drive energy costs. Watch OPEC+, EIA inventories, and geopolitics." },
  ]),
  createLesson("comm-natgas", 7, "Natural Gas: Seasonal Patterns", "comm-natgas", "12 min", ["Heating and cooling demand", "Seasonality", "Storage"], [
    {
      type: "text",
      heading: "Seasonal Demand",
      content:
        "Natural gas demand spikes in winter (heating) and summer (cooling). Storage levels and weather forecasts drive short-term moves. Supply (US shale, LNG) has grown. Natural gas is often more volatile and region-specific than oil. Many traders use ETFs or futures; storage and delivery logistics matter.\n\nEIA releases weekly storage data (Thu). If storage is low going into winter and a cold snap is forecast, nat gas can spike. If storage is high and winter is mild, price can collapse. Regional: US nat gas (Henry Hub) can diverge from European or Asian prices. Know which contract you're trading.",
    },
    {
      type: "analogy",
      heading: "The Thermostat Analogy",
      content:
        "Natural gas demand is like a thermostat—when it's cold (winter) or hot (summer), the thermostat turns on (demand spikes). When it's mild (spring, fall), the thermostat is off (demand drops). Storage is like the fuel tank: if the tank is low before winter, everyone gets nervous and price rises. If the tank is full and winter is mild, price can fall.",
    },
    { type: "interactive", heading: "Think It Through", content: "When does natural gas demand typically spike?", component: "ConceptCheck", props: { question: "When does natural gas demand typically spike?", reveal: "Winter (heating) and summer (cooling). Storage and weather drive short-term moves." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Natural gas = strong seasonal pattern. Winter and summer demand; storage and EIA reports matter." },
  ]),
  createLesson("comm-agri", 8, "Agricultural Commodities", "comm-agri", "14 min", ["Corn, wheat, soybeans", "Coffee, sugar, cotton", "Reports and weather"], [
    {
      type: "text",
      heading: "Major Ags",
      content:
        "Corn, wheat, and soybeans are staple crops—used for food, feed, and biofuels. Coffee, sugar, and cotton are soft commodities with their own supply chains and weather risks. Planting reports, harvests, and weather (e.g. South American drought) move prices. Trade policies and biofuels mandates also matter.\n\nUSDA reports (WASDE, planting, stocks) come out on set dates—mark the calendar. A surprise in acreage or yield can move corn or soy 5% in a day. Brazil and Argentina matter hugely for soy and corn; drought there can send prices up. Coffee: frost in Brazil. Cotton: weather in the US South and Asia. Ags are a weather and report game.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Don't trade ags without knowing the report schedule. USDA reports can gap the market. If you're long corn and the report shows bigger-than-expected supply, you can get hit at the open. Either flatten before the report or size small and accept the risk.",
    },
    { type: "interactive", heading: "Think It Through", content: "What moves agricultural commodity prices?", component: "ConceptCheck", props: { question: "What moves agricultural commodity prices?", reveal: "Planting reports, harvests, weather (e.g. drought), trade policies, and biofuels. Weather and harvest are key." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Ags = weather and harvest driven. Watch USDA reports and global weather. Corn, wheat, soy, coffee, sugar, cotton are widely traded." },
  ]),
  createLesson("comm-futures", 9, "How Commodity Markets Work", "comm-futures", "14 min", ["Futures exchanges", "Who trades", "Hedgers vs speculators"], [
    {
      type: "text",
      heading: "Futures Exchanges",
      content:
        "Commodities trade mainly on futures exchanges (e.g. CME Group: gold, oil, grains; ICE: Brent, sugar, cotton). Contracts are standardized by size and delivery month. Producers hedge; speculators and funds take the other side. Spot markets exist for physical delivery, but most price discovery happens in futures.\n\nA farmer who will harvest corn in September can sell September corn futures today and lock in a price—that's hedging. A speculator who has no corn can buy September futures hoping price rises. The speculator provides liquidity and takes the price risk the farmer doesn't want. Without speculators, hedgers would have a harder time finding a counterparty.",
    },
    {
      type: "analogy",
      heading: "The Insurance Analogy",
      content:
        "Futures are like insurance for producers. The farmer 'insures' against low corn prices by selling futures. If price falls, the futures gain offset the loss on the physical crop. Speculators are like the insurance company—they take the risk in exchange for the chance to profit. The exchange is the marketplace where they meet.",
    },
    { type: "interactive", heading: "Think It Through", content: "Where do most commodities trade?", component: "ConceptCheck", props: { question: "Where do most commodities trade?", reveal: "On futures exchanges (e.g. CME, ICE). Standardized contracts; producers hedge, speculators provide liquidity." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Commodity markets = futures exchanges. Hedgers lock in price; speculators provide liquidity and take risk." },
  ]),
  createLesson("comm-contracts", 10, "Futures Contracts Explained", "comm-contracts", "14 min", ["Contract size", "Delivery and expiry", "Tick size and roll"], [
    {
      type: "text",
      heading: "What a Futures Contract Is",
      content:
        "A futures contract is an agreement to buy or sell a set amount of a commodity at a set price on a set date. Contract size (e.g. 100 oz gold, 1,000 bbl oil) and expiry months are standardized. Most speculators close or roll before delivery; physical delivery is for commercial users. Tick size and tick value define minimum price move and its dollar impact.\n\nExample: Gold futures (GC) = 100 troy oz per contract. If gold is $2,000/oz, one contract = $200,000 notional. You don't need $200k—you post margin (e.g. $10k–15k). Oil (CL) = 1,000 barrels. One tick (e.g. $0.01/bbl) = $10 per contract. So a $1 move in oil = $1,000 per contract. Know the contract specs before you trade.",
    },
    {
      type: "text",
      heading: "Expiry and Rolling",
      content:
        "Each contract has an expiry month (e.g. December 2025). As that date approaches, open interest shifts to the next month. Speculators typically close the position or 'roll': sell the expiring contract and buy the next. If you hold past expiry, you may be assigned delivery—for oil that could mean taking delivery of 1,000 barrels. Retail traders almost never want delivery; they roll or close. Mark your calendar: roll a week or two before expiry to avoid last-minute volatility and liquidity issues.",
    },
    {
      type: "analogy",
      heading: "The Movie Ticket Analogy",
      content:
        "A futures contract is like buying a ticket for a concert on a specific date. The ticket (contract) entitles you to the show (commodity) on that date. You can sell the ticket before the show (close or roll)—most people do. Only a few actually show up to collect (delivery). The exchange standardizes the tickets (size, date) so everyone trades the same thing.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never hold a futures contract into delivery unless you are a commercial user and actually want the physical commodity. Delivery means taking possession—of oil, grain, cattle. If you're not set up for that, you'll pay to get out or face a mess. Always roll or close before the delivery period.",
    },
    { type: "interactive", heading: "Think It Through", content: "Do most speculators take delivery on futures?", component: "ConceptCheck", props: { question: "Do most speculators take delivery on futures?", reveal: "No. Most close or roll before delivery. Physical delivery is for commercial users." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Futures = standardized agreement to buy/sell at a future date. Know contract size and expiry; close or roll before delivery." },
  ]),
  createLesson("comm-contango", 11, "Contango vs Backwardation", "comm-contango", "14 min", ["Term structure", "What it means", "Roll cost"], [
    {
      type: "text",
      heading: "Contango and Backwardation",
      content:
        "Contango = futures price above spot (later months cost more). Common when storage is plentiful; you pay for carry. Backwardation = futures below spot (later months cheaper). Common when supply is tight or demand is immediate. Rolling a long position in contango costs you (you sell cheap, buy dear); in backwardation you can gain from the roll.\n\nIn contango, the curve slopes up: Dec oil might be $70, March $72, June $74. When you roll from Dec to March, you're selling at $70 and buying at $72—you lose $2 per barrel. That's 'roll yield' working against you. In backwardation, Dec might be $75, March $73—you sell high and buy lower, gaining from the roll. Long-term commodity ETF holders often suffer in contango because the fund keeps rolling at a cost.",
    },
    {
      type: "analogy",
      heading: "The Storage Unit Analogy",
      content:
        "Contango is like paying for a storage unit: you're paying to hold the stuff for later, so 'later' costs more than 'now.' Backwardation is like a shortage: people need it now, so 'now' costs more than 'later.' When you're long and roll in contango, you're effectively paying that storage fee. When you roll in backwardation, you're getting a discount for waiting.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Before going long a commodity ETF or futures for months, check the term structure. If the market is in steep contango, long-term buy-and-hold can lose to roll cost even if spot price goes sideways. Consider shorter-dated exposure or accept roll cost as a known drag.",
    },
    { type: "interactive", heading: "Think It Through", content: "In contango, is the futures price above or below spot?", component: "ConceptCheck", props: { question: "In contango, is the futures price above or below spot?", reveal: "Above spot. Later months cost more. In backwardation, futures are below spot." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Contango = futures > spot (roll costs you). Backwardation = futures < spot (roll can pay you). Check curve before going long." },
  ]),
  createLesson("comm-drivers", 12, "What Moves Commodity Prices", "comm-drivers", "14 min", ["Supply, demand", "Weather, geopolitics", "Dollar"], [
    {
      type: "text",
      heading: "Main Drivers",
      content:
        "Supply: production, inventories, disruptions (weather, geopolitics). Demand: economic growth, industrial use, policy (biofuels). The US dollar: many commodities are dollar-denominated, so a stronger dollar often pressures prices. Geopolitics (e.g. oil-producing regions) and weather (crops, nat gas demand) cause sharp moves.\n\nOil: OPEC+ cuts, US shale output, inventories (EIA reports), and Middle East tensions. Gold: real rates (TIPS yield), inflation expectations, risk sentiment. Grains: USDA reports, South American weather, planting vs harvest. Natural gas: US storage, winter/summer demand, LNG exports. Track the key reports and events for whatever you trade.",
    },
    {
      type: "analogy",
      heading: "The See-Saw Analogy",
      content:
        "Commodity prices sit on a see-saw: supply on one side, demand on the other. Drought = supply down = prices up. Recession = demand down = prices down. Dollar strength adds weight to the 'cheaper in other currencies' side—often pushes prices down. Geopolitics and weather can slam one side of the see-saw suddenly. Your job is to know which side is getting heavier.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Keep an economic calendar. EIA oil/gas inventory (weekly), USDA reports (planting, stocks, harvest), Fed meetings (dollar and gold), OPEC meetings. These dates often cause gaps and volatility. Don't be overexposed into a report unless you have a view and a plan.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why does a stronger US dollar often pressure commodity prices?", component: "ConceptCheck", props: { question: "Why does a stronger US dollar often pressure commodity prices?", reveal: "Many commodities are dollar-denominated. A stronger dollar makes them more expensive in other currencies, which can reduce demand and pressure prices." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Supply, demand, dollar, weather, and geopolitics drive commodity prices. Know the key reports for your market." },
  ]),
  createLesson("comm-seasonal", 13, "Seasonal Patterns in Commodities", "comm-seasonal", "12 min", ["Recurring patterns", "How to use them", "Not guarantees"], [
    {
      type: "text",
      heading: "Seasonality",
      content:
        "Many commodities show recurring seasonal patterns: grains around planting and harvest; natural gas in winter and summer; gold sometimes into year-end. Seasonal charts (average price by month) can highlight tendencies—but they're not guarantees. Use seasonals as one input, not the only signal.\n\nCorn and soy: often strength into planting (uncertainty), pressure into harvest (supply). Natural gas: winter demand (heating), summer demand (cooling)—spikes around those seasons. Gold: sometimes a lift into Indian wedding season or year-end. These are historical averages; any year can break the pattern. A drought can make harvest season rally instead of fall. Use seasonals for context, not as a standalone trade.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Don't trade on 'it's usually up in March' alone. Seasonals are probabilities, not certainties. One bad year can wipe out years of seasonal gains. Always pair seasonality with price action (support/resistance, trend) and risk management (stops, position size).",
    },
    { type: "interactive", heading: "Think It Through", content: "Should you trade on seasonal patterns alone?", component: "ConceptCheck", props: { question: "Should you trade on seasonal patterns alone?", reveal: "No. Use seasonals as one input; they're not guarantees. Always confirm with price and risk management." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Seasonal patterns exist in ags and nat gas. Use as context; confirm with price and risk management. Not guarantees." },
  ]),
  createLesson("comm-etfs-futures", 14, "Trading Commodities: ETFs vs Futures", "comm-etfs-futures", "14 min", ["ETFs for exposure", "Futures for leverage", "When to use each"], [
    {
      type: "text",
      heading: "ETFs",
      content:
        "Commodity ETFs (e.g. GLD for gold, USO for oil) give exposure without trading futures. They're easy to use in a stock account. Many track front-month or rolled futures, so contango can drag returns over time. Read the prospectus for structure and costs.\n\nGLD holds physical gold—no roll cost. USO and similar oil ETFs roll futures; in contango that creates a drag (they sell the cheap month, buy the expensive one). Over years of contango, USO can underperform spot oil. Some ETFs use a blend of maturities to reduce roll impact. Know what you own: physical vs futures-based, and how roll is handled.",
    },
    {
      type: "text",
      heading: "Futures",
      content:
        "Futures give direct exposure and leverage. You need a futures account and margin. Better for active traders and larger size; more complex. Roll contracts before expiry to avoid delivery.\n\nFutures are tax-efficient for certain strategies (Section 1256 in the US). You can go long or short easily. Margin is typically 5–15% of notional—so leverage is real. One contract of oil can move $1,000 per $1. Suitable if you're active, understand margin and roll, and have the capital. For set-and-forget exposure, ETFs are simpler; for tactical trades, futures often make more sense.",
    },
    {
      type: "analogy",
      heading: "The Rental vs Ownership Analogy",
      content:
        "ETFs are like renting exposure: easy, no maintenance (no roll to manage), but you don't control the details (contango drag, rebalancing). Futures are like owning: you control the contract, the roll, the timing—but you have to maintain it (roll, margin) and understand the mechanics. Rent (ETF) when you want simplicity; own (futures) when you want control and are willing to manage it.",
    },
    { type: "interactive", heading: "Think It Through", content: "When might you choose commodity ETFs over futures?", component: "ConceptCheck", props: { question: "When might you choose commodity ETFs over futures?", reveal: "When you want simple access without a futures account. ETFs are easier; futures give direct exposure and leverage but need more knowledge and capital." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ETFs = simple access; watch contango drag on futures-based funds. Futures = direct, leveraged; need knowledge and discipline." },
  ]),
  createLesson("comm-spreads", 15, "Commodity Spreads", "comm-spreads", "12 min", ["Calendar and inter-commodity", "Spread trading", "Margin"], [
    {
      type: "text",
      heading: "Types of Spreads",
      content:
        "Calendar spread = same commodity, different months (e.g. long Dec oil, short March). Inter-commodity = related commodities (e.g. crack spread: crude vs gasoline). Spreads can reduce outright direction risk and express views on term structure or relative value. They require understanding of both legs and margin.\n\nCalendar: you're betting on the gap between two months (term structure). If you think Dec is too cheap vs March, you buy Dec, sell March. You're less exposed to whether oil goes up or down overall—you care about the spread. Crack spread: long crude, short gasoline (or vice versa)—refinery margin. Spreads often have lower margin than two outright positions because the exchange recognizes offsetting risk.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Spreads are advanced. Get comfortable with outright futures first. When you trade a spread, you have two legs to manage—two rolls, two margins, and the spread can move against you even if the underlying goes your way. Start with paper trading spreads before using real capital.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is a calendar spread in commodities?", component: "ConceptCheck", props: { question: "What is a calendar spread in commodities?", reveal: "Same commodity, different months (e.g. long Dec oil, short March). Used for term structure or relative value." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Spreads = calendar (different months) or inter-commodity (e.g. crack). Reduce direction risk; need to understand both legs." },
  ]),
  createLesson("comm-storage", 16, "Storage Costs and Cost of Carry", "comm-storage", "12 min", ["Carry and storage", "Why it matters", "Curve shape"], [
    {
      type: "text",
      heading: "Cost of Carry",
      content:
        "Holding a physical commodity costs money: storage, insurance, financing. That cost is reflected in the futures curve. In contango, the gap between spot and futures partly reflects carry. For non-storable (e.g. electricity) or very expensive-to-store commodities, the curve behaves differently. Carry helps explain why futures can trade above spot.\n\nExample: store oil in a tank. You pay rent, insurance, and the cost of capital (interest). So 'oil in 6 months' should cost more than 'oil today' by roughly that amount—otherwise arbitrageurs would buy spot, store, and sell futures. When storage is full (e.g. 2020 oil glut), carry can spike and the curve goes into steep contango. When storage is tight, backwardation can appear. Electricity is barely storable, so its curve is driven more by demand patterns than carry.",
    },
    {
      type: "analogy",
      heading: "The Parking Garage Analogy",
      content:
        "Cost of carry is like parking fees. The longer you 'park' the commodity (hold it for later), the more you pay. Futures price for a later month includes that parking fee. When the garage is full (high storage), parking is expensive—steep contango. When there's plenty of space, the fee is smaller. The curve tells you what the market is charging to hold the commodity over time.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is cost of carry?", component: "ConceptCheck", props: { question: "What is cost of carry?", reveal: "The cost of holding a physical commodity: storage, insurance, financing. Reflected in the futures curve (e.g. contango)." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Storage, insurance, and financing = cost of carry. It shapes the futures curve (contango). Non-storable commodities behave differently." },
  ]),
  createLesson("comm-why-trade", 17, "Why Trade Commodities?", "comm-why-trade", "12 min", ["Diversification", "Inflation hedge", "Thematic plays"], [
    {
      type: "text",
      heading: "Reasons to Trade or Invest",
      content:
        "Diversification: commodities often have different drivers than stocks and bonds. Inflation hedge: real assets can hold value when money loses purchasing power. Thematic plays: energy transition, agriculture, scarcity. Speculation: volatility and leverage can suit active traders. Understand the product and your risk—commodities can be volatile and complex.\n\nWhen stocks and bonds fall together (e.g. inflation shock), commodities sometimes rise. Gold has historically been a haven. Oil and industrial metals can lead in reflation. That doesn't mean commodities always zig when stocks zag—correlations change. But adding a small allocation can improve portfolio diversification if you accept the volatility and use ETFs or futures appropriately.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Don't overload on commodities because 'inflation is coming.' Commodities can be volatile and go through long bear markets (e.g. 2011–2020). Use them as a slice of a portfolio, not the whole portfolio. And remember: futures-based commodity ETFs can underperform in contango even when spot price rises.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why might you add commodities to a portfolio?", component: "ConceptCheck", props: { question: "Why might you add commodities to a portfolio?", reveal: "Diversification (different drivers than stocks/bonds) and inflation hedging. Respect volatility and use ETFs or futures appropriately." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Commodities offer diversification and inflation hedging. Use a small allocation; respect volatility and product structure (ETFs vs futures)." },
  ], true),
];
