import { Link } from "react-router-dom";
import { Copy, Check } from "lucide-react";
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
    <div className="max-w-2xl mx-auto px-8 py-12">
      <nav className="mb-8 text-[14px] text-[var(--text-secondary)]">
        <Link to="/" className="hover:text-[var(--accent-primary)]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--text-primary)]">
          Donations
        </span>
      </nav>

      <header className="mb-8">
        <h1 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
          Support This Project
        </h1>
        <p className="text-[15px] text-[var(--text-secondary)]">
          If this platform has helped you, consider a donation. Every bit helps keep it free for everyone.
        </p>
      </header>

      <div className="space-y-6">
        <a
          href={`https://paypal.me/${PAYPAL_ME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[#00D4AA40] transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00457C] flex items-center justify-center text-white font-bold text-sm">
              PayPal
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-[var(--text-primary)]">
                PayPal
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {PAYPAL_USER}
              </p>
              <p className="mt-2 text-sm text-[var(--accent-primary)] font-medium">
                paypal.me/{PAYPAL_ME} →
              </p>
            </div>
          </div>
        </a>

        <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#008CFF] flex items-center justify-center text-white font-bold text-sm">
              Venmo
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-[var(--text-primary)]">
                Venmo
              </h2>
              <div className="mt-2 flex items-center gap-2">
                <code className="px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-primary)] font-mono text-sm">
                  {VENMO}
                </code>
                <button
                  onClick={() => copyToClipboard(VENMO, "venmo")}
                  className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                  title="Copy"
                >
                  {copied === "venmo" ? (
                    <Check className="h-4 w-4 text-[var(--accent-primary)]" />
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
                className="mt-2 inline-block text-sm text-[var(--accent-primary)] font-medium hover:underline"
              >
                Open Venmo →
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#6D1ED4] flex items-center justify-center text-white font-bold text-sm">
              Zelle
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-[var(--text-primary)]">
                Zelle
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Use your bank app to send via Zelle
              </p>
              <div className="mt-2 flex items-center gap-2">
                <code className="px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-primary)] font-mono text-sm">
                  {ZELLE}
                </code>
                <button
                  onClick={() => copyToClipboard(ZELLE, "zelle")}
                  className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                  title="Copy"
                >
                  {copied === "zelle" ? (
                    <Check className="h-4 w-4 text-[var(--accent-primary)]" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-[var(--text-secondary)]">
        Thank you for your generosity. Your support helps keep this educational platform free and ad-free.
      </p>
    </div>
  );
}
