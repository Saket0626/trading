import { useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, Search, BarChart3, LogOut, CandlestickChart } from "lucide-react";
import { useState, useCallback } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { useAdmin } from "../../contexts/AdminContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/learn", label: "Courses" },
  { to: "/simulator", label: "Practice" },
  { to: "/trade", label: "Trade" },
  { to: "/tools", label: "Tools" },
  { to: "/progress", label: "Profile" },
];

export function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const { xp } = useProgress();
  const { isAdmin, deactivate } = useAdmin();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        setSearchQuery("");
      }
    },
    [searchQuery, navigate]
  );

  return (
    <header
      className="sticky top-0 z-[100] w-full h-16 bg-[rgba(10,13,18,0.85)] backdrop-blur-[12px] border-b border-transparent [@supports(backdrop-filter:blur(0))]:border-[var(--border-subtle)]"
      role="banner"
    >
      <div className="max-w-[1200px] mx-auto px-8 flex h-full items-center justify-between gap-4">
        <a
          href="/"
          className="flex items-center gap-2 shrink-0 font-display font-semibold text-[var(--text-primary)] text-lg"
          aria-label="ChartWise - Home"
        >
          <CandlestickChart className="h-6 w-6 text-[var(--accent-primary)]" aria-hidden />
          <span className="hidden sm:inline">ChartWise</span>
        </a>

        <form
          onSubmit={handleSearch}
          className="hidden sm:flex flex-1 max-w-md justify-center"
        >
          <div className="relative w-full max-w-xs">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]"
              aria-hidden
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search lessons, terms..."
              className="w-full pl-9 pr-3 py-2 rounded-lg text-[15px] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200"
              aria-label="Search"
            />
          </div>
        </form>

        <nav className="hidden md:flex items-center gap-1" role="navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to ||
              (link.to !== "/" && location.pathname.startsWith(link.to));
            return (
              <a
                key={link.to}
                href={link.to}
                className={`px-3 py-2 rounded text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          {isAdmin && (
            <>
              <a
                href="/admin/dashboard"
                className="px-3 py-2 rounded-lg text-[var(--accent-secondary)] hover:bg-[rgba(245,158,11,0.15)] font-medium transition-colors flex items-center gap-1.5"
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </a>
              <button
                onClick={deactivate}
                className="px-3 py-2 rounded-lg text-[var(--accent-secondary)] hover:bg-[rgba(245,158,11,0.15)] font-medium transition-colors flex items-center gap-1.5"
              >
                <LogOut className="h-4 w-4" />
                Exit Admin
              </button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <span
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded border border-[var(--border-subtle)] text-[var(--text-secondary)] text-[13px] font-medium tabular-nums"
            title="XP Earned"
          >
            {xp} XP
          </span>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
            aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" aria-hidden />
            ) : (
              <Moon className="h-5 w-5" aria-hidden />
            )}
          </button>
          <a
            href="/learn"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[var(--accent-primary)] text-[var(--bg-primary)] font-bold text-[15px] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[var(--glow-teal)] transition-all duration-200"
          >
            Start Free
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-4 px-6 animate-fade-in overflow-y-auto max-h-[calc(100vh-4rem)]"
          role="navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] text-[15px] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/learn"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-3 px-4 rounded-lg bg-[var(--accent-primary)] text-[var(--bg-primary)] font-bold text-center"
            >
              Start Free
            </a>
            {isAdmin && (
              <>
                <a
                  href="/admin/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-4 rounded-lg text-[var(--accent-secondary)] hover:bg-[rgba(245,158,11,0.15)] font-medium flex items-center gap-2"
                >
                  <BarChart3 className="h-4 w-4" />
                  Analytics
                </a>
                <button
                  onClick={() => {
                    deactivate();
                    setMobileMenuOpen(false);
                  }}
                  className="py-3 px-4 rounded-lg text-[var(--accent-secondary)] hover:bg-[rgba(245,158,11,0.15)] font-medium flex items-center gap-2 text-left w-full"
                >
                  <LogOut className="h-4 w-4" />
                  Exit Admin Mode
                </button>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
