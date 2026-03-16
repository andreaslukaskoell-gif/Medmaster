import { lazy, Suspense, useEffect } from "react";
import { PageLoadingSkeleton } from "@/components/ui/page-states";
import type { ReactNode } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { AuthGuard } from "@/components/AuthGuard";
import { useAuth } from "@/hooks/useAuth";
import { useStore } from "@/store/useStore";
import { usePageTracking } from "@/hooks/usePageTracking";
import { sanitizeUrlParam } from "@/lib/security";

// Lazy-loaded pages — casing must match filenames exactly (Linux/Vercel is case-sensitive)
const LandingPage = lazy(() => import("@/pages/LandingPage"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const MedATOnboarding = lazy(() => import("@/pages/MedATOnboarding"));
const LernplanChoice = lazy(() => import("@/pages/LernplanChoice"));
const Onboarding = lazy(() => import("@/pages/Onboarding"));
const BMS = lazy(() => import("@/pages/BMS"));
const KFF = lazy(() => import("@/pages/KFF"));
const TV = lazy(() => import("@/pages/TV"));
const SEK = lazy(() => import("@/pages/SEK"));
const Simulation = lazy(() => import("@/pages/Simulation"));
const Statistics = lazy(() => import("@/pages/Statistics"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Lernplan = lazy(() => import("@/pages/Lernplan"));
const StichwortlistePage = lazy(() => import("@/pages/StichwortlistePage"));
const SchwachstellenTrainer = lazy(() => import("@/pages/SchwachstellenTrainer"));
const KapitelEditor = lazy(() => import("@/pages/KapitelEditor"));
const ContentAudit = lazy(() => import("@/pages/ContentAudit"));
const AdminPreview = lazy(() => import("@/pages/AdminPreview"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const AdminTasksPage = lazy(() => import("@/pages/AdminTasksPage"));
const AuthPage = lazy(() => import("@/pages/AuthPage"));
const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPasswordPage"));
const Prognose = lazy(() => import("@/pages/Prognose"));
const PerformanceOverview = lazy(() => import("@/pages/PerformanceOverview"));
const BMSQuiz = lazy(() => import("@/pages/BMSQuiz"));
const SmartRecoveryPage = lazy(() => import("@/pages/SmartRecoveryPage"));
const FragenTrainer = lazy(() => import("@/pages/FragenTrainer"));
const DailyChallenge = lazy(() => import("@/pages/DailyChallenge"));
const Formelsammlung = lazy(() => import("@/pages/Formelsammlung"));
const FortschrittPage = lazy(() => import("@/pages/FortschrittPage"));
const TodayPage = lazy(() => import("@/pages/TodayPage"));
const Legal = lazy(() => import("@/pages/Legal"));
const Einstellungen = lazy(() => import("@/pages/Einstellungen"));
const BMSDemo = lazy(() => import("@/pages/BMSDemo"));
const SubjectDemo = lazy(() => import("@/pages/SubjectDemo"));
const QuizChallenge = lazy(() => import("@/pages/QuizChallenge"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const MedATGuide = lazy(() => import("@/pages/MedATGuide"));
const MedATPunkterechner = lazy(() => import("@/pages/MedATPunkterechner"));
const StichwortlistePublic = lazy(() => import("@/pages/StichwortlistePublic"));
const KFFDemo = lazy(() => import("@/pages/KFFDemo"));
const AnalyticsDashboard = lazy(() => import("@/pages/AnalyticsDashboard"));
const BlogIndex = lazy(() => import("@/pages/BlogIndex"));
const BlogArticle = lazy(() => import("@/pages/BlogArticle"));
const PaidLanding = lazy(() => import("@/pages/PaidLanding"));
const PaidLandingBMS = lazy(() => import("@/pages/PaidLandingBMS"));
const MedATCountdown = lazy(() => import("@/pages/MedATCountdown"));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-[var(--accent)] border-t-transparent" />
    </div>
  );
}

/** Scrollt bei jedem Seitenwechsel nach oben + captures ?ref= and UTM params + tracks page views */
function ScrollToTop() {
  usePageTracking();
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const params = new URLSearchParams(search);
    const ref = sanitizeUrlParam(params.get("ref"));
    if (ref) sessionStorage.setItem("medmaster_ref", ref);
    // Persist UTM params for attribution (validated against injection)
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const val = sanitizeUrlParam(params.get(key));
      if (val) sessionStorage.setItem(`medmaster_${key}`, val);
    }
  }, [search]);
  return null;
}

function OnboardingGuard() {
  const { onboardingCompleted } = useStore();
  if (onboardingCompleted) return <Navigate to="/dashboard" replace />;
  return <Onboarding />;
}

function MedATGuard({ children }: { children: ReactNode }) {
  const { hasCompletedMedATOnboarding } = useStore();
  const { profile, loading } = useAuth();
  const location = useLocation();

  // Server-side check: if profile has a real display_name (not email), onboarding is done
  // This prevents re-triggering onboarding on new devices/cleared localStorage
  const uname = profile?.username?.trim();
  const hasNameInDB = !!profile?.display_name?.trim() || !!(uname && !uname.includes("@"));
  const isComplete = hasCompletedMedATOnboarding || hasNameInDB;

  // Don't redirect while still loading auth/profile
  if (loading) return null;

  if (!isComplete && location.pathname !== "/onboarding/medat") {
    return <Navigate to="/onboarding/medat" replace />;
  }
  return <>{children}</>;
}

function AdminGuard({ children }: { children: React.ReactNode }) {
  // Admin pages (editor, audit, tasks) are dev-only.
  // AnalyticsDashboard has its own password gate and is routed separately.
  if (!import.meta.env.DEV) {
    return <Navigate to="/dashboard" replace />;
  }
  return <>{children}</>;
}

function BMSQuizWrapper() {
  const { fach } = useParams<{ fach: string }>();
  const navigate = useNavigate();
  if (!fach) return <Navigate to="/bms" replace />;
  return <BMSQuiz subject={fach} onBack={() => navigate("/bms")} />;
}

/** `/` — LandingPage sofort zeigen, Redirect nur wenn definitiv eingeloggt. */
function RootRoute() {
  const { isAuthenticated, loading } = useAuth();

  // Show LandingPage immediately — never block on auth loading.
  // Only redirect to dashboard if we're sure user is authenticated.
  if (!loading && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return <LandingPage />;
}

function NotFound404() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--background)]">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold text-[var(--text-primary)]">404</h1>
        <p className="text-base text-[var(--text-secondary)]">Seite nicht gefunden</p>
        <p className="text-sm text-[var(--muted)]">
          Diese Seite existiert nicht oder wurde verschoben.
        </p>
        <a
          href="/dashboard"
          className="inline-block mt-2 text-sm font-medium text-[var(--accent)] hover:underline"
        >
          Zurück zum Dashboard
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<RootRoute />} />
          <Route path="/login" element={<AuthPage />} />
          {/* Legacy /register URLs redirect to unified auth page */}
          <Route path="/register" element={<Navigate to="/login" replace />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/impressum" element={<Legal />} />
          <Route path="/datenschutz" element={<Legal />} />
          <Route path="/agb" element={<Legal />} />
          <Route path="/medat-uebungsfragen" element={<BMSDemo />} />
          <Route path="/medat-:subject-fragen" element={<SubjectDemo />} />
          <Route path="/challenge" element={<QuizChallenge />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/medat-guide" element={<MedATGuide />} />
          <Route path="/medat-punkte-rechner" element={<MedATPunkterechner />} />
          <Route path="/bms-stichwortliste-2026" element={<StichwortlistePublic />} />
          <Route path="/medat-kff-ueben" element={<KFFDemo />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/lp/medat" element={<PaidLanding />} />
          <Route path="/lp/bms" element={<PaidLandingBMS />} />
          <Route path="/medat-countdown" element={<MedATCountdown />} />

          {/* Analytics dashboard — password-protected, no auth needed */}
          <Route path="/admin/analytics" element={<AnalyticsDashboard />} />

          {/* Protected routes */}
          <Route
            element={
              <AuthGuard>
                <Outlet />
              </AuthGuard>
            }
          >
            <Route path="/onboarding/medat" element={<MedATOnboarding />} />
            <Route path="/onboarding/lernplan-choice" element={<LernplanChoice />} />
            <Route
              element={
                <MedATGuard>
                  <AppShell />
                </MedATGuard>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/today" element={<TodayPage />} />
              <Route path="/onboarding" element={<OnboardingGuard />} />
              <Route
                path="/bms"
                element={
                  <Suspense fallback={<PageLoadingSkeleton variant="bms" />}>
                    <BMS />
                  </Suspense>
                }
              />
              <Route
                path="/bms/quiz/:fach"
                element={
                  <Suspense fallback={<PageLoadingSkeleton variant="quiz" />}>
                    <BMSQuizWrapper />
                  </Suspense>
                }
              />
              <Route
                path="/bms/:fach"
                element={
                  <Suspense fallback={<PageLoadingSkeleton variant="bms" />}>
                    <BMS />
                  </Suspense>
                }
              />
              <Route
                path="/bms/:fach/:kapitel"
                element={
                  <Suspense fallback={<PageLoadingSkeleton variant="chapter" />}>
                    <BMS />
                  </Suspense>
                }
              />
              <Route path="/kff" element={<KFF />} />
              <Route path="/tv" element={<TV />} />
              <Route path="/sek" element={<SEK />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/lernplan" element={<Lernplan />} />
              <Route path="/statistik" element={<Statistics />} />
              <Route path="/stichwortliste" element={<StichwortlistePage />} />
              <Route path="/schwachstellen" element={<SchwachstellenTrainer />} />
              <Route path="/schwachstellen/recovery" element={<SmartRecoveryPage />} />
              <Route path="/preise" element={<Pricing />} />
              <Route
                path="/admin/kapitel-editor"
                element={
                  <AdminGuard>
                    <KapitelEditor />
                  </AdminGuard>
                }
              />
              <Route
                path="/admin/audit"
                element={
                  <AdminGuard>
                    <ContentAudit />
                  </AdminGuard>
                }
              />
              <Route
                path="/admin/preview"
                element={
                  <AdminGuard>
                    <AdminPreview />
                  </AdminGuard>
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminGuard>
                    <AdminDashboard />
                  </AdminGuard>
                }
              />
              <Route
                path="/admin/tasks"
                element={
                  <AdminGuard>
                    <AdminTasksPage />
                  </AdminGuard>
                }
              />
              <Route path="/prognose" element={<Prognose />} />
              <Route path="/performance" element={<PerformanceOverview />} />
              <Route path="/fortschritt" element={<FortschrittPage />} />
              <Route path="/fragen-trainer" element={<FragenTrainer />} />
              <Route path="/daily" element={<DailyChallenge />} />
              <Route path="/formelsammlung" element={<Formelsammlung />} />
              <Route path="/einstellungen" element={<Einstellungen />} />

              {/* 404 Catch-all for protected routes */}
              <Route path="*" element={<NotFound404 />} />
            </Route>
          </Route>

          {/* 404 Catch-all for public routes (fallback) */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
