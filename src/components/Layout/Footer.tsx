import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { useState } from "react";
import { useAdmin } from "../../contexts/AdminContext";
import { AdminAuthModal } from "../admin/AdminAuthModal";

export function Footer() {
  const { activate, attemptsRemaining } = useAdmin();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-900 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-surface-900 dark:text-surface-100 text-sm mb-2">
              Trading Education Platform
            </h3>
            <p className="text-sm text-surface-600 dark:text-surface-400 max-w-md">
              Learn trading from scratch to quantitative expertise. Built with honesty about risks
              and realistic expectations. Education first, trading second.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-surface-900 dark:text-surface-100 text-sm mb-2">Learn</h4>
            <ul className="space-y-1 text-sm text-surface-600 dark:text-surface-400">
              <li>
                <Link to="/learn/1" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Level 1: Foundations
                </Link>
              </li>
              <li>
                <Link to="/learn/2" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Level 2: Market Basics
                </Link>
              </li>
              <li>
                <Link to="/learn/3" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Level 3: Intermediate
                </Link>
              </li>
              <li>
                <Link to="/learn/4" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Level 4: Advanced
                </Link>
              </li>
              <li>
                <Link to="/learn/5" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Level 5: Quantitative
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-surface-900 dark:text-surface-100 text-sm mb-2">Resources</h4>
            <ul className="space-y-1 text-sm text-surface-600 dark:text-surface-400">
              <li>
                <Link to="/tools" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Calculators & Tools
                </Link>
              </li>
              <li>
                <Link to="/warnings" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Risk Warnings
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="/settings/api" className="hover:text-primary-600 dark:hover:text-primary-400">
                  API Setup
                </Link>
              </li>
              <li>
                <Link to="/donations" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Donations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-surface-200 dark:border-surface-800 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-surface-500 dark:text-surface-500">
            <strong>Important:</strong> Trading involves substantial risk of loss. Past performance
            does not guarantee future results. This platform is for educational purposes only. Never
            trade with money you cannot afford to lose. 70-90% of retail traders lose money.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="p-1.5 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
            aria-label="Settings"
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
