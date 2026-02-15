import { Link } from "react-router-dom";
import { Settings, CandlestickChart, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { useAdmin } from "../../contexts/AdminContext";
import { AdminAuthModal } from "../admin/AdminAuthModal";
import { subscribeToNewsletter } from "../../services/newsletter";

export function Footer() {
  const { activate, attemptsRemaining, isAdmin } = useAdmin();
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus("loading");
    setNewsletterMessage("");
    const result = await subscribeToNewsletter(email);
    if (result.success) {
      setNewsletterStatus("success");
      setEmail("");
      setNewsletterMessage("Thanks for subscribing!");
    } else {
      setNewsletterStatus("error");
      setNewsletterMessage(result.error || "Something went wrong.");
    }
  };

  return (
    <>
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] mt-auto">
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <a href="/" className="flex items-center gap-2 font-display font-semibold text-xl text-[var(--text-primary)] mb-4">
                <CandlestickChart className="h-6 w-6 text-[var(--accent-primary)]" />
                Chartwise
              </a>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                Learn trading from scratch to quantitative expertise. Built with honesty about risks
                and realistic expectations. Education first, trading second.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-[var(--text-primary)] text-sm uppercase tracking-[0.08em] mb-4">Product</h4>
              <ul className="space-y-3 text-[15px]">
                {[
                  { to: "/learn", label: "Courses" },
                  { to: "/simulator", label: "Practice" },
                  { to: "/tools", label: "Tools" },
                  { to: "/progress", label: "Progress" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-[var(--text-primary)] text-sm uppercase tracking-[0.08em] mb-4">Resources</h4>
              <ul className="space-y-3 text-[15px]">
                {[
                  { to: "/learn/1", label: "Level 1: Foundations" },
                  { to: "/warnings", label: "Risk Warnings" },
                  { to: "/glossary", label: "Glossary" },
                  ...(isAdmin ? [{ to: "/settings/api", label: "API Setup" }] : []),
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-[var(--text-primary)] text-sm uppercase tracking-[0.08em] mb-4">Newsletter</h4>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col gap-2"
              >
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setNewsletterStatus("idle");
                    }}
                    placeholder="Your email"
                    disabled={newsletterStatus === "loading"}
                    className="flex-1 px-4 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-primary)] placeholder:opacity-60 focus:outline-none focus:border-[var(--accent-primary)] transition-colors disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === "loading"}
                    className="px-4 py-2.5 rounded-lg bg-[var(--accent-primary)] text-[var(--bg-primary)] font-bold hover:brightness-110 transition-all duration-200 disabled:opacity-60 shrink-0 inline-flex items-center justify-center gap-2"
                  >
                    {newsletterStatus === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : newsletterStatus === "success" ? (
                      <Check className="h-4 w-4" />
                    ) : null}
                    Subscribe
                  </button>
                </div>
                {newsletterMessage && (
                  <p className={`text-sm ${newsletterStatus === "success" ? "text-[var(--accent-primary)]" : "text-[var(--accent-danger)]"}`}>
                    {newsletterMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[var(--text-secondary)] order-2 sm:order-1">
              © {new Date().getFullYear()} Chartwise. Privacy · Terms
            </p>
            <p className="text-[13px] text-[var(--text-secondary)] text-center sm:text-left order-1 sm:order-2 max-w-xl">
              <strong>Important:</strong> Trading involves substantial risk of loss. Past performance does not guarantee future results. This platform is for educational purposes only.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors order-3"
              aria-label="Admin settings"
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>
      <AdminAuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => {}}
        onAttempt={activate}
        attemptsRemaining={attemptsRemaining}
      />
    </>
  );
}
