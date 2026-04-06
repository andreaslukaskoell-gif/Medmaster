import { lazy, Suspense, useEffect, type ComponentType } from "react";
import { PageLoadingSkeleton } from "@/components/ui/page-states";
import type { ReactNode } from "react";

/** Retry dynamic import once on chunk load failure (happens after deployments). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function lazyRetry(factory: () => Promise<{ default: ComponentType<any> }>) {
  return lazy(() =>
    factory().catch((err) => {
      const key = "medmaster-chunk-retry";
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
      }
      throw err;
    })
  );
}
sessionStorage.removeItem("medmaster-chunk-retry");
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
import { MotionConfig } from "framer-motion";
import { AppShell } from "@/components/layout/AppShell";
import { AuthGuard } from "@/components/AuthGuard";
import { useAuth } from "@/hooks/useAuth";
import { usePermissions } from "@/hooks/usePermissions";
import { useStore } from "@/store/useStore";
import { usePageTracking } from "@/hooks/usePageTracking";
import { sanitizeUrlParam } from "@/lib/security";
import { FloatingCTA } from "@/components/growth/FloatingCTA";
import { CookieConsentBanner } from "@/components/CookieConsent";

/** True when user prefers reduced motion (vestibular disorders, etc.) */
const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Lazy-loaded pages — casing must match filenames exactly (Linux/Vercel is case-sensitive)
const LandingPage = lazyRetry(() => import("@/pages/LandingPage"));
const Dashboard = lazyRetry(() => import("@/pages/Dashboard"));
const MedATOnboarding = lazyRetry(() => import("@/pages/MedATOnboarding"));
const LernplanChoice = lazyRetry(() => import("@/pages/LernplanChoice"));
const Onboarding = lazyRetry(() => import("@/pages/Onboarding"));
const BMS = lazyRetry(() => import("@/pages/BMS"));
const KFF = lazyRetry(() => import("@/pages/KFF"));
const TV = lazyRetry(() => import("@/pages/TV"));
const SEK = lazyRetry(() => import("@/pages/SEK"));
const Simulation = lazyRetry(() => import("@/pages/Simulation"));
const Statistics = lazyRetry(() => import("@/pages/Statistics"));
const Pricing = lazyRetry(() => import("@/pages/Pricing"));
const Lernplan = lazyRetry(() => import("@/pages/Lernplan"));
const StichwortlistePage = lazyRetry(() => import("@/pages/StichwortlistePage"));
const SchwachstellenTrainer = lazyRetry(() => import("@/pages/SchwachstellenTrainer"));
const KapitelEditor = lazyRetry(() => import("@/pages/KapitelEditor"));
const ContentAudit = lazyRetry(() => import("@/pages/ContentAudit"));
const AdminPreview = lazyRetry(() => import("@/pages/AdminPreview"));
const AdminDashboard = lazyRetry(() => import("@/pages/AdminDashboard"));
const AdminTasksPage = lazyRetry(() => import("@/pages/AdminTasksPage"));
const AdminStats = lazyRetry(() => import("@/pages/Admin"));
const AuthPage = lazyRetry(() => import("@/pages/AuthPage"));
const ForgotPasswordPage = lazyRetry(() => import("@/pages/ForgotPasswordPage"));
const ResetPasswordPage = lazyRetry(() => import("@/pages/ResetPasswordPage"));
const Prognose = lazyRetry(() => import("@/pages/Prognose"));
const PerformanceOverview = lazyRetry(() => import("@/pages/PerformanceOverview"));
const BMSQuiz = lazyRetry(() => import("@/pages/BMSQuiz"));
const SmartRecoveryPage = lazyRetry(() => import("@/pages/SmartRecoveryPage"));
const FragenTrainer = lazyRetry(() => import("@/pages/FragenTrainer"));
const DailyChallenge = lazyRetry(() => import("@/pages/DailyChallenge"));
const Formelsammlung = lazyRetry(() => import("@/pages/Formelsammlung"));
const FortschrittPage = lazyRetry(() => import("@/pages/FortschrittPage"));
const TodayPage = lazyRetry(() => import("@/pages/TodayPage"));
const Legal = lazyRetry(() => import("@/pages/Legal"));
const Einstellungen = lazyRetry(() => import("@/pages/Einstellungen"));
const BMSDemo = lazyRetry(() => import("@/pages/BMSDemo"));
const SubjectDemo = lazyRetry(() => import("@/pages/SubjectDemo"));
const QuizChallenge = lazyRetry(() => import("@/pages/QuizChallenge"));
const FAQPage = lazyRetry(() => import("@/pages/FAQPage"));
const UeberUns = lazyRetry(() => import("@/pages/UeberUns"));
const MedATGuide = lazyRetry(() => import("@/pages/MedATGuide"));
const MedATPunkterechner = lazyRetry(() => import("@/pages/MedATPunkterechner"));
const StichwortlistePublic = lazyRetry(() => import("@/pages/StichwortlistePublic"));
const KFFDemo = lazyRetry(() => import("@/pages/KFFDemo"));
const AnalyticsDashboard = lazyRetry(() => import("@/pages/AnalyticsDashboard"));
const BlogIndex = lazyRetry(() => import("@/pages/BlogIndex"));
const BlogArticle = lazyRetry(() => import("@/pages/BlogArticle"));
const PaidLanding = lazyRetry(() => import("@/pages/PaidLanding"));
const PaidLandingBMS = lazyRetry(() => import("@/pages/PaidLandingBMS"));
const MedATCountdown = lazyRetry(() => import("@/pages/MedATCountdown"));
const DiagramDemo = lazyRetry(() => import("@/pages/DiagramDemo"));
const PaymentSuccess = lazyRetry(() => import("@/pages/PaymentSuccess"));

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <img src="/logo.svg" alt="" className="h-10 w-10 opacity-60" />
      <div className="animate-spin rounded-full h-6 w-6 border-2 border-[var(--accent)] border-t-transparent" />
    </div>
  );
}

/** Scrollt bei jedem Seitenwechsel nach oben + captures ?ref= and UTM params + tracks page views */
function ScrollToTop() {
  usePageTracking();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const params = new URLSearchParams(search);
    // Stripe Payment Link redirect: ?payment=success → /success
    if (params.get("payment") === "success") {
      navigate("/success?payment=success", { replace: true });
      return;
    }
    const ref = sanitizeUrlParam(params.get("ref"));
    if (ref) sessionStorage.setItem("medmaster_ref", ref);
    // Persist UTM params for attribution (validated against injection)
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const val = sanitizeUrlParam(params.get(key));
      if (val) sessionStorage.setItem(`medmaster_${key}`, val);
    }
  }, [search, navigate]);
  return null;
}

function OnboardingGuard() {
  const onboardingCompleted = useStore((s) => s.onboardingCompleted);
  if (onboardingCompleted) return <Navigate to="/dashboard" replace />;
  return <Onboarding />;
}

function MedATGuard({ children }: { children: ReactNode }) {
  const hasCompletedMedATOnboarding = useStore((s) => s.hasCompletedMedATOnboarding);
  const { profile, loading } = useAuth();
  const location = useLocation();

  // Server-side check: if profile has a real display_name (not email), onboarding is done
  // This prevents re-triggering onboarding on new devices/cleared localStorage
  const uname = profile?.username?.trim();
  const hasNameInDB = !!profile?.display_name?.trim() || !!(uname && !uname.includes("@"));
  const isComplete = hasCompletedMedATOnboarding || hasNameInDB;

  // Don't redirect while still loading auth/profile — show spinner instead of blank screen
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[var(--accent)]" />
      </div>
    );
  }

  if (!isComplete && location.pathname !== "/onboarding/medat") {
    return <Navigate to="/onboarding/medat" replace />;
  }
  return <>{children}</>;
}

function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  // In dev, allow all access
  if (import.meta.env.DEV) return <>{children}</>;
  // In production, require admin email
  if (loading) return <PageLoadingSkeleton />;
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || "";
  if (adminEmail && user?.email?.toLowerCase() === adminEmail.toLowerCase()) {
    return <>{children}</>;
  }
  return <Navigate to="/dashboard" replace />;
}

function BMSQuizWrapper() {
  const { fach } = useParams<{ fach: string }>();
  const navigate = useNavigate();
  if (!fach) return <Navigate to="/bms" replace />;
  // Prevent free users from bypassing question limits via direct URL
  const { isPremium } = usePermissions();
  if (!isPremium) return <Navigate to="/bms" replace />;
  return <BMSQuiz subject={fach} onBack={() => navigate("/bms")} />;
}

/** `/` — Redirect authenticated users to dashboard, show LandingPage for visitors. */
function RootRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Check localStorage for a session hint to avoid flashing the landing page
    // for users who are very likely logged in.
    const hasSession = !!localStorage.getItem("medmaster-storage");
    if (hasSession) return <LoadingSpinner />;
    // No session hint → show landing page immediately (no delay for new visitors)
    return <LandingPage />;
  }
  if (isAuthenticated) {
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

/** Sync dark mode class on <html> + native status bar whenever store.darkMode changes */
/** Initialize In-App Purchase store on native platforms */
function IAPInit() {
  useEffect(() => {
    import("@/lib/native").then(({ isNative }) => {
      if (!isNative) return;
      import("@/lib/iap").then(({ initIAP }) => {
        const onVerified = async (userId: string) => {
          const { supabase } = await import("@/lib/supabase");
          if (!supabase) return;
          await supabase.functions.invoke("verify-apple-receipt", {
            body: { userId },
          });
        };
        initIAP(onVerified).catch((err) => console.warn("[IAP] Init error:", err));
      });
    });
  }, []);
  return null;
}

function DarkModeSync() {
  const darkMode = useStore((s) => s.darkMode);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Sync native status bar color on Capacitor
    import("@/lib/native")
      .then(({ isNative, setStatusBarDark, setStatusBarLight }) => {
        if (!isNative) return;
        if (darkMode) setStatusBarDark().catch(() => {});
        else setStatusBarLight().catch(() => {});
      })
      .catch(() => {});
  }, [darkMode]);
  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      <BrowserRouter>
        <DarkModeSync />
        <IAPInit />
        <ScrollToTop />
        <FloatingCTA />
        <CookieConsentBanner />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<RootRoute />} />
            <Route path="/login" element={<AuthPage />} />
            {/* Legacy /register URLs redirect to unified auth page */}
            <Route path="/register" element={<Navigate to="/login" replace />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/impressum" element={<Legal />} />
            <Route path="/datenschutz" element={<Legal />} />
            <Route path="/agb" element={<Legal />} />
            <Route path="/medat-uebungsfragen" element={<BMSDemo />} />
            <Route path="/medat-:subject-fragen" element={<SubjectDemo />} />
            <Route path="/challenge" element={<QuizChallenge />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/medat-guide" element={<MedATGuide />} />
            <Route path="/medat-punkte-rechner" element={<MedATPunkterechner />} />
            <Route path="/bms-stichwortliste-2026" element={<StichwortlistePublic />} />
            <Route path="/medat-kff-ueben" element={<KFFDemo />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/lp/medat" element={<PaidLanding />} />
            <Route path="/lp/bms" element={<PaidLandingBMS />} />
            <Route path="/medat-countdown" element={<MedATCountdown />} />

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
                <Route path="/success" element={<PaymentSuccess />} />
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
                <Route
                  path="/admin/analytics"
                  element={
                    <AdminGuard>
                      <AnalyticsDashboard />
                    </AdminGuard>
                  }
                />
                <Route path="/admin/stats" element={<AdminGuard><AdminStats /></AdminGuard>} />
                <Route path="/prognose" element={<Prognose />} />
                <Route path="/performance" element={<PerformanceOverview />} />
                <Route path="/fortschritt" element={<FortschrittPage />} />
                <Route path="/fragen-trainer" element={<FragenTrainer />} />
                <Route path="/daily" element={<DailyChallenge />} />
                <Route path="/formelsammlung" element={<Formelsammlung />} />
                <Route path="/einstellungen" element={<Einstellungen />} />
                <Route path="/diagram-demo" element={<DiagramDemo />} />

                {/* 404 Catch-all for protected routes */}
                <Route path="*" element={<NotFound404 />} />
              </Route>
            </Route>

            {/* 404 Catch-all for public routes (fallback) */}
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MotionConfig>
  );
}
