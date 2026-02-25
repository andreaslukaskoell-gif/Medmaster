import { lazy, Suspense } from "react";
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
import { useStore } from "@/store/useStore";

// Lazy-loaded pages — casing must match filenames exactly (Linux/Vercel is case-sensitive)
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const MedATOnboarding = lazy(() => import("@/pages/MedATOnboarding"));
const PlacementTest = lazy(() => import("@/pages/PlacementTest"));
const Onboarding = lazy(() => import("@/pages/Onboarding"));
const BMS = lazy(() => import("@/pages/BMS"));
const KFF = lazy(() => import("@/pages/KFF"));
const TV = lazy(() => import("@/pages/TV"));
const SEK = lazy(() => import("@/pages/SEK"));
const Simulation = lazy(() => import("@/pages/Simulation"));
const Statistics = lazy(() => import("@/pages/Statistics"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Lernplan = lazy(() => import("@/pages/Lernplan"));
const AITutor = lazy(() => import("@/pages/AITutor"));
const Analysis = lazy(() => import("@/pages/Analysis"));
const Community = lazy(() => import("@/pages/Community"));
const Notes = lazy(() => import("@/pages/Notes"));
const Flashcards = lazy(() => import("@/pages/Flashcards"));
const Duel = lazy(() => import("@/pages/Duel"));
const StichwortlistePage = lazy(() => import("@/pages/StichwortlistePage"));
const SchwachstellenTrainer = lazy(() => import("@/pages/SchwachstellenTrainer"));
const KapitelEditor = lazy(() => import("@/pages/KapitelEditor"));
const ContentAudit = lazy(() => import("@/pages/ContentAudit"));
const AdminPreview = lazy(() => import("@/pages/AdminPreview"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const AdminTasksPage = lazy(() => import("@/pages/AdminTasksPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPasswordPage"));
const WissenCheck = lazy(() => import("@/pages/WissenCheck"));
const Prognose = lazy(() => import("@/pages/Prognose"));
const PerformanceOverview = lazy(() => import("@/pages/PerformanceOverview"));
const BMSQuiz = lazy(() => import("@/pages/BMSQuiz"));
const SmartRecoveryPage = lazy(() => import("@/pages/SmartRecoveryPage"));
const FragenTrainer = lazy(() => import("@/pages/FragenTrainer"));
const DailyChallenge = lazy(() => import("@/pages/DailyChallenge"));
const BMSWrapped = lazy(() => import("@/pages/BMSWrapped"));
const Formelsammlung = lazy(() => import("@/pages/Formelsammlung"));
const FortschrittPage = lazy(() => import("@/pages/FortschrittPage"));
const TodayPage = lazy(() => import("@/pages/TodayPage"));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" />
    </div>
  );
}

function OnboardingGuard() {
  const { onboardingCompleted } = useStore();
  if (onboardingCompleted) return <Navigate to="/" replace />;
  return <Onboarding />;
}

function MedATGuard({ children }: { children: ReactNode }) {
  const { hasCompletedMedATOnboarding } = useStore();
  const location = useLocation();
  if (
    !hasCompletedMedATOnboarding &&
    location.pathname !== "/onboarding/medat" &&
    location.pathname !== "/placement-test"
  ) {
    return <Navigate to="/onboarding/medat" replace />;
  }
  return <>{children}</>;
}

function AdminGuard({ children }: { children: React.ReactNode }) {
  const isDev = import.meta.env.DEV;
  if (!isDev) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

function BMSQuizWrapper() {
  const { fach } = useParams<{ fach: string }>();
  const navigate = useNavigate();
  if (!fach) return <Navigate to="/bms" replace />;
  return <BMSQuiz subject={fach} onBack={() => navigate("/bms")} />;
}

function NotFound404() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Seite nicht gefunden</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Diese Seite existiert nicht oder wurde verschoben.
        </p>
        <a
          href="/"
          className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          → Zurück zum Dashboard
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Protected routes */}
          <Route
            element={
              <AuthGuard>
                <Outlet />
              </AuthGuard>
            }
          >
            <Route path="/onboarding/medat" element={<MedATOnboarding />} />
            <Route path="/placement-test" element={<PlacementTest />} />
            <Route
              element={
                <MedATGuard>
                  <AppShell />
                </MedATGuard>
              }
            >
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Navigate to="/" replace />} />
              <Route path="/today" element={<TodayPage />} />
              <Route path="/onboarding" element={<OnboardingGuard />} />
              <Route path="/bms" element={<BMS />} />
              <Route path="/bms/quiz/:fach" element={<BMSQuizWrapper />} />
              <Route path="/bms/:fach" element={<BMS />} />
              <Route path="/bms/:fach/:kapitel" element={<BMS />} />
              <Route path="/kff" element={<KFF />} />
              <Route path="/tv" element={<TV />} />
              <Route path="/sek" element={<SEK />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/ai-tutor" element={<AITutor />} />
              <Route path="/lernplan" element={<Lernplan />} />
              <Route path="/analyse" element={<Analysis />} />
              <Route path="/community" element={<Community />} />
              <Route path="/statistik" element={<Statistics />} />
              <Route path="/notizen" element={<Notes />} />
              <Route path="/karteikarten" element={<Flashcards />} />
              <Route path="/duell" element={<Duel />} />
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
              <Route path="/wissencheck" element={<WissenCheck />} />
              <Route path="/wissencheck/:fach" element={<WissenCheck />} />
              <Route path="/prognose" element={<Prognose />} />
              <Route path="/performance" element={<PerformanceOverview />} />
              <Route path="/fortschritt" element={<FortschrittPage />} />
              <Route path="/fragen-trainer" element={<FragenTrainer />} />
              <Route path="/daily" element={<DailyChallenge />} />
              <Route path="/wrapped" element={<BMSWrapped />} />
              <Route path="/formelsammlung" element={<Formelsammlung />} />
              <Route path="/today" element={<TodayPage />} />

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
