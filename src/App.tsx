import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import { TickerProvider } from "./contexts/TickerContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { AdminProvider } from "./contexts/AdminContext";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
import { SEOHead } from "./components/SEOHead";
import { MarketTicker } from "./components/MarketTicker";
import { OfflineBanner } from "./components/OfflineBanner";
import { UsernamePromptModal } from "./components/UsernamePromptModal";
import { TickerCustomizerModal } from "./components/TickerCustomizerModal";
import { AdminShell } from "./components/admin/AdminShell";
import { useTicker } from "./contexts/TickerContext";
import { useAdmin } from "./contexts/AdminContext";

const L = (fn: () => Promise<Record<string, React.ComponentType>>, n: string) =>
  lazy(() => fn().then((m) => ({ default: m[n] })));
const HomePage = L(() => import("./pages/HomePage"), "HomePage");
const LearnIndexPage = L(() => import("./pages/LearnIndexPage"), "LearnIndexPage");
const LearnPage = L(() => import("./pages/LearnPage"), "LearnPage");
const ModulePage = L(() => import("./pages/ModulePage"), "ModulePage");
const LessonPage = L(() => import("./pages/LessonPage"), "LessonPage");
const WarningsPage = L(() => import("./pages/WarningsPage"), "WarningsPage");
const SimulatorPage = L(() => import("./pages/SimulatorPage"), "SimulatorPage");
const ToolsPage = L(() => import("./pages/ToolsPage"), "ToolsPage");
const ProgressPage = L(() => import("./pages/ProgressPage"), "ProgressPage");
const GlossaryPage = L(() => import("./pages/GlossaryPage"), "GlossaryPage");
const SearchPage = L(() => import("./pages/SearchPage"), "SearchPage");
const DonationsPage = L(() => import("./pages/DonationsPage"), "DonationsPage");
const TradePage = L(() => import("./pages/TradePage"), "TradePage");
const ApiSetupPage = L(() => import("./pages/ApiSetupPage"), "ApiSetupPage");
const NotFoundPage = L(() => import("./pages/NotFoundPage"), "NotFoundPage");
const AdminDashboardPage = L(() => import("./pages/AdminDashboardPage"), "AdminDashboardPage");

function PageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[40vh]">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-8 w-48 rounded bg-surface-200 dark:bg-surface-700" />
        <div className="h-4 w-64 rounded bg-surface-200 dark:bg-surface-700" />
      </div>
    </div>
  );
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { isAdmin } = useAdmin();
  if (!isAdmin) return <Navigate to="/" replace />;
  return <>{children}</>;
}

function AppLayoutInner() {
  const { isCustomizerOpen, closeCustomizer } = useTicker();
  return (
    <AdminShell>
    <div className="flex flex-col min-h-screen">
      <Header />
      <MarketTicker />
      <main className="flex-1 animate-fade-in">
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnIndexPage />} />
            <Route path="/learn/:levelId" element={<LearnPage />} />
            <Route path="/learn/:levelId/:moduleSlug" element={<ModulePage />} />
            <Route path="/learn/:levelId/:moduleSlug/:lessonSlug" element={<LessonPage />} />
            <Route path="/warnings" element={<WarningsPage />} />
            <Route path="/simulator" element={<SimulatorPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/trade" element={<TradePage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/donations" element={<DonationsPage />} />
            <Route path="/settings/api" element={<AdminRoute><ApiSetupPage /></AdminRoute>} />
            <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <OfflineBanner />
      <UsernamePromptModal />
      <TickerCustomizerModal isOpen={isCustomizerOpen} onClose={closeCustomizer} />
    </div>
    </AdminShell>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <TickerProvider>
        <SidebarProvider>
        <AdminProvider>
          <BrowserRouter>
            <SEOHead />
            <AnalyticsTracker />
            <AppLayoutInner />
          </BrowserRouter>
        </AdminProvider>
        </SidebarProvider>
        </TickerProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
