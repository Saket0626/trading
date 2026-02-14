import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { AdminProvider } from "./contexts/AdminContext";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
import { MarketTicker } from "./components/MarketTicker";
import { OfflineBanner } from "./components/OfflineBanner";
import { UsernamePromptModal } from "./components/UsernamePromptModal";
import { AdminShell } from "./components/admin/AdminShell";
import { Navigate } from "react-router-dom";
import { useAdmin } from "./contexts/AdminContext";

const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const LearnIndexPage = lazy(() => import("./pages/LearnIndexPage").then((m) => ({ default: m.LearnIndexPage })));
const LearnPage = lazy(() => import("./pages/LearnPage").then((m) => ({ default: m.LearnPage })));
const ModulePage = lazy(() => import("./pages/ModulePage").then((m) => ({ default: m.ModulePage })));
const LessonPage = lazy(() => import("./pages/LessonPage").then((m) => ({ default: m.LessonPage })));
const WarningsPage = lazy(() => import("./pages/WarningsPage").then((m) => ({ default: m.WarningsPage })));
const SimulatorPage = lazy(() => import("./pages/SimulatorPage").then((m) => ({ default: m.SimulatorPage })));
const ToolsPage = lazy(() => import("./pages/ToolsPage").then((m) => ({ default: m.ToolsPage })));
const ProgressPage = lazy(() => import("./pages/ProgressPage").then((m) => ({ default: m.ProgressPage })));
const GlossaryPage = lazy(() => import("./pages/GlossaryPage").then((m) => ({ default: m.GlossaryPage })));
const SearchPage = lazy(() => import("./pages/SearchPage").then((m) => ({ default: m.SearchPage })));
const DonationsPage = lazy(() => import("./pages/DonationsPage").then((m) => ({ default: m.DonationsPage })));
const TradePage = lazy(() => import("./pages/TradePage").then((m) => ({ default: m.TradePage })));
const ApiSetupPage = lazy(() => import("./pages/ApiSetupPage").then((m) => ({ default: m.ApiSetupPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));
const AdminDashboardPage = lazy(() => import("./pages/AdminDashboardPage").then((m) => ({ default: m.AdminDashboardPage })));

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
    </div>
    </AdminShell>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <SidebarProvider>
        <AdminProvider>
          <BrowserRouter>
            <AnalyticsTracker />
            <AppLayoutInner />
          </BrowserRouter>
        </AdminProvider>
        </SidebarProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
