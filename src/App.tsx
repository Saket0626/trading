import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import { AdminProvider } from "./contexts/AdminContext";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
import { HomePage } from "./pages/HomePage";
import { LearnIndexPage } from "./pages/LearnIndexPage";
import { LearnPage } from "./pages/LearnPage";
import { ModulePage } from "./pages/ModulePage";
import { LessonPage } from "./pages/LessonPage";
import { WarningsPage } from "./pages/WarningsPage";
import { SimulatorPage } from "./pages/SimulatorPage";
import { ToolsPage } from "./pages/ToolsPage";
import { ProgressPage } from "./pages/ProgressPage";
import { GlossaryPage } from "./pages/GlossaryPage";
import { DonationsPage } from "./pages/DonationsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { MarketTicker } from "./components/MarketTicker";
import { AdminShell } from "./components/admin/AdminShell";
import { Navigate } from "react-router-dom";
import { useAdmin } from "./contexts/AdminContext";

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
      <main className="flex-1">
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
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </AdminShell>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <AdminProvider>
          <BrowserRouter>
            <AnalyticsTracker />
            <AppLayoutInner />
          </BrowserRouter>
        </AdminProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
