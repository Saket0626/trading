import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun, Menu, X, GraduationCap, Search, BarChart3, LogOut } from "lucide-react";
import { useState, useCallback } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { useAdmin } from "../../contexts/AdminContext";

// Donations temporarily hidden from nav – route & page still work at /donations
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/learn", label: "Learn" },
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
      className="sticky top-0 z-50 w-full border-b border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-950"
      role="banner"
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-base shrink-0"
          aria-label="ChartWise - Home"
        >
          <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden />
          <span className="hidden sm:inline">ChartWise</span>
        </Link>

        <form
          onSubmit={handleSearch}
          className="hidden sm:flex flex-1 max-w-md"
        >
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-400"
              aria-hidden
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search lessons, terms..."
              className="w-full pl-9 pr-3 py-2 rounded border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              aria-label="Search"
            />
          </div>
        </form>

        <nav className="hidden md:flex items-center gap-1" role="navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-2 rounded text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800 text-sm font-medium transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          {isAdmin && (
            <>
              <Link
                to="/admin/dashboard"
                className="px-3 py-2 rounded-lg text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium transition-colors flex items-center gap-1.5"
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Link>
              <button
                onClick={deactivate}
                className="px-3 py-2 rounded-lg text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium transition-colors flex items-center gap-1.5"
              >
                <LogOut className="h-4 w-4" />
                Exit Admin
              </button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <span
            className="hidden sm:flex items-center gap-1 px-2 py-1 rounded border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-300 text-sm font-medium tabular-nums"
            title="XP Earned"
          >
            {xp} XP
          </span>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" aria-hidden />
            ) : (
              <Moon className="h-5 w-5" aria-hidden />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 focus:outline-none focus:ring-1 focus:ring-primary-500"
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
          className="md:hidden border-t border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-950 py-4 px-4 animate-fade-in overflow-y-auto max-h-[calc(100vh-5rem)]"
          role="navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            {isAdmin && (
              <>
                <Link
                  to="/admin/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-4 rounded-lg text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium flex items-center gap-2"
                >
                  <BarChart3 className="h-4 w-4" />
                  Analytics
                </Link>
                <button
                  onClick={() => {
                    deactivate();
                    setMobileMenuOpen(false);
                  }}
                  className="py-3 px-4 rounded-lg text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium flex items-center gap-2 text-left w-full"
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
