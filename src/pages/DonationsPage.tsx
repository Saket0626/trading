import { Link } from "react-router-dom";
import { Heart, Copy, Check } from "lucide-react";
import { useState } from "react";

const PAYPAL_USER = "Saket Amanana";
const PAYPAL_ME = "Saket-Amanana";
const ZELLE = "5107665504";
const VENMO = "@Saket-Amanana";

export function DonationsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <nav className="mb-8 text-sm text-surface-600 dark:text-surface-400">
        <Link to="/" className="hover:text-primary-500">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-surface-900 dark:text-surface-100">
          Donations
        </span>
      </nav>

      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 mb-4">
          <Heart className="h-8 w-8" />
        </div>
        <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100">
          Support This Project
        </h1>
        <p className="mt-2 text-surface-600 dark:text-surface-400">
          If this platform has helped you, consider a donation. Every bit helps keep it free for everyone.
        </p>
      </header>

      <div className="space-y-6">
        <a
          href={`https://paypal.me/${PAYPAL_ME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-surface-50 dark:hover:bg-surface-800/80 transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00457C] flex items-center justify-center text-white font-bold text-sm">
              PayPal
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-surface-900 dark:text-surface-100">
                PayPal
              </h2>
              <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
                {PAYPAL_USER}
              </p>
              <p className="mt-2 text-sm text-primary-600 dark:text-primary-400 font-medium">
                paypal.me/{PAYPAL_ME} →
              </p>
            </div>
          </div>
        </a>

        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#008CFF] flex items-center justify-center text-white font-bold text-sm">
              Venmo
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-surface-900 dark:text-surface-100">
                Venmo
              </h2>
              <div className="mt-2 flex items-center gap-2">
                <code className="px-3 py-1.5 rounded-lg bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 font-mono text-sm">
                  {VENMO}
                </code>
                <button
                  onClick={() => copyToClipboard(VENMO, "venmo")}
                  className="p-2 rounded-lg text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700"
                  title="Copy"
                >
                  {copied === "venmo" ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              <a
                href="https://venmo.com/u/Saket-Amanana"
                aria-label="Open Venmo profile"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Open Venmo →
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#6D1ED4] flex items-center justify-center text-white font-bold text-sm">
              Zelle
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-surface-900 dark:text-surface-100">
                Zelle
              </h2>
              <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
                Use your bank app to send via Zelle
              </p>
              <div className="mt-2 flex items-center gap-2">
                <code className="px-3 py-1.5 rounded-lg bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 font-mono text-sm">
                  {ZELLE}
                </code>
                <button
                  onClick={() => copyToClipboard(ZELLE, "zelle")}
                  className="p-2 rounded-lg text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700"
                  title="Copy"
                >
                  {copied === "zelle" ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-surface-500 dark:text-surface-400">
        Thank you for your generosity. Your support helps keep this educational platform free and ad-free.
      </p>
    </div>
  );
}
