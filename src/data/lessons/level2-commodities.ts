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
  createLesson("comm-what", 1, "What Are Commodities?", "comm-what", "10 min", ["Define commodities", "Physical goods traded"], [
    { type: "text", heading: "Raw Materials", content: "Commodities are physical goods that are largely interchangeable—a barrel of oil or an ounce of gold from one source is treated the same as another. They're traded on exchanges worldwide. Unlike stocks, you're dealing with real stuff: metals, energy, and agricultural products. Prices are driven by global supply and demand." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Commodities = raw materials (metals, energy, agriculture). Traded globally; prices reflect supply and demand." },
  ]),
  createLesson("comm-hard", 2, "Hard Commodities: Metals and Energy", "comm-hard", "10 min", ["Metals and energy", "Mined or extracted"], [
    { type: "text", heading: "Hard Commodities", content: "Hard commodities are mined or extracted: precious metals (gold, silver, platinum), base metals (copper, zinc), and energy (crude oil, natural gas). They don't depend on growing seasons in the same way crops do, but they are affected by geopolitics, production levels, and storage." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Hard = metals and energy. Mined or extracted; influenced by production and geopolitics." },
  ]),
  createLesson("comm-soft", 3, "Soft Commodities: Agriculture", "comm-soft", "10 min", ["Agricultural commodities", "Weather and seasons"], [
    { type: "text", heading: "Soft Commodities", content: "Soft commodities are grown: corn, wheat, soybeans, coffee, sugar, cotton, cocoa. Weather (drought, floods), pests, and planting/harvest cycles drive prices. They often show strong seasonal patterns. Traded on futures exchanges; many investors access them via ETFs." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Soft = agricultural. Weather and seasons matter; often seasonal price patterns." },
  ]),
  createLesson("comm-gold", 4, "Gold: Safe Haven and Inflation Hedge", "comm-gold", "12 min", ["Why gold matters", "Safe haven and inflation"], [
    { type: "text", heading: "Why Gold?", content: "Gold is seen as a store of value and a safe haven—when markets or currencies weaken, demand often rises. It's also used as an inflation hedge: when money loses purchasing power, gold (in nominal terms) can rise. Central banks hold gold; jewelry and industry add demand. It doesn't pay interest, so opportunity cost depends on real rates." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Gold = safe haven and inflation hedge. Demand rises in uncertainty; often inverse to strong USD." },
  ]),
  createLesson("comm-silver", 5, "Silver: Industrial and Precious Metal", "comm-silver", "10 min", ["Silver's dual role", "Industrial demand"], [
    { type: "text", heading: "Silver's Two Sides", content: "Silver is both a precious metal (like gold—investment and jewelry) and a major industrial metal (electronics, solar, medical). So its price reflects both safe-haven/commodity flows and industrial demand. It tends to be more volatile than gold and can outperform in risk-on industrial booms or in precious-metal rallies." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Silver = precious + industrial. More volatile than gold; driven by both investment and industry." },
  ]),
  createLesson("comm-oil", 6, "Oil: WTI vs Brent Crude", "comm-oil", "12 min", ["WTI and Brent", "Benchmarks"], [
    { type: "text", heading: "Two Main Benchmarks", content: "WTI (West Texas Intermediate) is the US benchmark—light, sweet crude. Brent is the international benchmark (North Sea). Both are quoted in dollars per barrel. Spreads between them reflect regional supply, demand, and logistics. Oil is crucial for transport and industry; prices move on OPEC+, inventories, and geopolitics." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "WTI = US benchmark. Brent = international. Both drive energy costs and inflation expectations." },
  ]),
  createLesson("comm-natgas", 7, "Natural Gas: Seasonal Patterns", "comm-natgas", "10 min", ["Heating and cooling demand", "Seasonality"], [
    { type: "text", heading: "Seasonal Demand", content: "Natural gas demand spikes in winter (heating) and summer (cooling). Storage levels and weather forecasts drive short-term moves. Supply (US shale, LNG) has grown. Natural gas is often more volatile and region-specific than oil. Many traders use ETFs or futures; storage and delivery logistics matter." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Natural gas = strong seasonal pattern. Winter and summer demand; storage and weather matter." },
  ]),
  createLesson("comm-agri", 8, "Agricultural Commodities", "comm-agri", "12 min", ["Corn, wheat, soybeans", "Coffee, sugar, cotton"], [
    { type: "text", heading: "Major Ags", content: "Corn, wheat, and soybeans are staple crops—used for food, feed, and biofuels. Coffee, sugar, and cotton are soft commodities with their own supply chains and weather risks. Planting reports, harvests, and weather (e.g. South American drought) move prices. Trade policies and biofuels mandates also matter." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Ags = weather and harvest driven. Corn, wheat, soy, coffee, sugar, cotton are widely traded." },
  ]),
  createLesson("comm-futures", 9, "How Commodity Markets Work", "comm-futures", "12 min", ["Futures exchanges", "Who trades"], [
    { type: "text", heading: "Futures Exchanges", content: "Commodities trade mainly on futures exchanges (e.g. CME Group: gold, oil, grains; ICE: Brent, sugar, cotton). Contracts are standardized by size and delivery month. Producers hedge; speculators and funds take the other side. Spot markets exist for physical delivery, but most price discovery happens in futures." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Commodity markets = futures exchanges. Standardized contracts; producers hedge, speculators provide liquidity." },
  ]),
  createLesson("comm-contracts", 10, "Futures Contracts Explained", "comm-contracts", "12 min", ["Contract size", "Delivery and expiry"], [
    { type: "text", heading: "What a Futures Contract Is", content: "A futures contract is an agreement to buy or sell a set amount of a commodity at a set price on a set date. Contract size (e.g. 100 oz gold, 1,000 bbl oil) and expiry months are standardized. Most speculators close or roll before delivery; physical delivery is for commercial users. Tick size and tick value define minimum price move and its dollar impact." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Futures = agreement to buy/sell at a future date. Standardized size and expiry; most close or roll, not deliver." },
  ]),
  createLesson("comm-contango", 11, "Contango vs Backwardation", "comm-contango", "12 min", ["Term structure", "What it means"], [
    { type: "text", heading: "Contango and Backwardation", content: "Contango = futures price above spot (later months cost more). Common when storage is plentiful; you pay for carry. Backwardation = futures below spot (later months cheaper). Common when supply is tight or demand is immediate. Rolling a long position in contango costs you (you sell cheap, buy dear); in backwardation you can gain from the roll." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Contango = futures > spot. Backwardation = futures < spot. Affects roll cost for long-term holders." },
  ]),
  createLesson("comm-drivers", 12, "What Moves Commodity Prices", "comm-drivers", "12 min", ["Supply, demand", "Weather, geopolitics"], [
    { type: "text", heading: "Main Drivers", content: "Supply: production, inventories, disruptions (weather, geopolitics). Demand: economic growth, industrial use, policy (biofuels). The US dollar: many commodities are dollar-denominated, so a stronger dollar often pressures prices. Geopolitics (e.g. oil-producing regions) and weather (crops, nat gas demand) cause sharp moves." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Supply, demand, dollar strength, weather, and geopolitics drive commodity prices." },
  ]),
  createLesson("comm-seasonal", 13, "Seasonal Patterns in Commodities", "comm-seasonal", "10 min", ["Recurring patterns", "How to use them"], [
    { type: "text", heading: "Seasonality", content: "Many commodities show recurring seasonal patterns: grains around planting and harvest; natural gas in winter and summer; gold sometimes into year-end. Seasonal charts (average price by month) can highlight tendencies—but they're not guarantees. Use seasonals as one input, not the only signal." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Seasonal patterns exist in ags and nat gas. Use as context; always confirm with price and risk management." },
  ]),
  createLesson("comm-etfs-futures", 14, "Trading Commodities: ETFs vs Futures", "comm-etfs-futures", "12 min", ["ETFs for exposure", "Futures for leverage"], [
    { type: "text", heading: "ETFs", content: "Commodity ETFs (e.g. GLD for gold, USO for oil) give exposure without trading futures. They're easy to use in a stock account. Many track front-month or rolled futures, so contango can drag returns over time. Read the prospectus for structure and costs." },
    { type: "text", heading: "Futures", content: "Futures give direct exposure and leverage. You need a futures account and margin. Better for active traders and larger size; more complex. Roll contracts before expiry to avoid delivery." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ETFs = simple access. Futures = direct, leveraged; need more knowledge and capital." },
  ]),
  createLesson("comm-spreads", 15, "Commodity Spreads", "comm-spreads", "10 min", ["Calendar and inter-commodity", "Spread trading"], [
    { type: "text", heading: "Types of Spreads", content: "Calendar spread = same commodity, different months (e.g. long Dec oil, short March). Inter-commodity = related commodities (e.g. crack spread: crude vs gasoline). Spreads can reduce outright direction risk and express views on term structure or relative value. They require understanding of both legs and margin." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Spreads = calendar (different months) or inter-commodity (related products). Used for structure or relative value." },
  ]),
  createLesson("comm-storage", 16, "Storage Costs and Cost of Carry", "comm-storage", "10 min", ["Carry and storage", "Why it matters"], [
    { type: "text", heading: "Cost of Carry", content: "Holding a physical commodity costs money: storage, insurance, financing. That cost is reflected in the futures curve. In contango, the gap between spot and futures partly reflects carry. For non-storable (e.g. electricity) or very expensive-to-store commodities, the curve behaves differently. Carry helps explain why futures can trade above spot." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Storage and financing = cost of carry. Reflected in futures term structure (e.g. contango)." },
  ]),
  createLesson("comm-why-trade", 17, "Why Trade Commodities?", "comm-why-trade", "10 min", ["Diversification", "Inflation hedge"], [
    { type: "text", heading: "Reasons to Trade or Invest", content: "Diversification: commodities often have different drivers than stocks and bonds. Inflation hedge: real assets can hold value when money loses purchasing power. Thematic plays: energy transition, agriculture, scarcity. Speculation: volatility and leverage can suit active traders. Understand the product and your risk—commodities can be volatile and complex." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Commodities offer diversification and inflation hedging. Use ETFs for simplicity or futures for direct exposure; respect volatility." },
  ], true),
];
