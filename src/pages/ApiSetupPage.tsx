import { Key, ExternalLink } from "lucide-react";

const API_SOURCES = [
  {
    name: "Finnhub",
    envVar: "VITE_FINNHUB_API_KEY",
    use: "Stocks, commodities, candles",
    url: "https://finnhub.io/register",
    free: true,
  },
  {
    name: "Alpha Vantage",
    envVar: "VITE_ALPHA_VANTAGE_API_KEY",
    use: "Stocks, forex (fallback)",
    url: "https://www.alphavantage.co/support/#api-key",
    free: true,
  },
  {
    name: "Binance",
    envVar: null,
    use: "Crypto — no key needed",
    url: null,
    free: true,
  },
  {
    name: "CoinGecko",
    envVar: null,
    use: "Crypto fallback — no key needed",
    url: null,
    free: true,
  },
];

export function ApiSetupPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
        <Key className="h-8 w-8 text-primary-500" />
        API Key Setup
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        For full live data, add API keys to your environment. Crypto works without keys.
      </p>

      <div className="space-y-6">
        {API_SOURCES.map((api) => (
          <div
            key={api.name}
            className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  {api.name}
                  {api.free && (
                    <span className="text-xs font-normal px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                      Free tier
                    </span>
                  )}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{api.use}</p>
                {api.envVar && (
                  <code className="mt-2 block text-xs bg-surface-100 dark:bg-surface-900 px-2 py-1 rounded font-mono">
                    {api.envVar}
                  </code>
                )}
              </div>
              {api.url && (
                <a
                  href={api.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 shrink-0"
                >
                  Get key <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        ))}

        <div className="p-6 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
          <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
            How to add keys
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800 dark:text-amber-200">
            <li>Create a <code>.env</code> file in the project root (or <code>.env.local</code>)</li>
            <li>Add lines like: <code>VITE_FINNHUB_API_KEY=your_key_here</code></li>
            <li>Restart the dev server (<code>npm run dev</code>)</li>
            <li>For production, set env vars in your hosting (Railway, Vercel, etc.)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
