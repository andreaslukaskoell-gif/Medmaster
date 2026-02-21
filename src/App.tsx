import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { AuthGuard } from "@/components/AuthGuard";
import { LevelGate } from "@/components/learning/LevelGate";
import { useStore } from "@/store/useStore";

// Lazy-loaded pages — casing must match filenames exactly (Linux/Vercel is case-sensitive)
const Dashboard = lazy(() => import("@/pages/Dashboard"));
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

function BMSQuizWrapper() {
  const { fach } = useParams<{ fach: string }>();
  const navigate = useNavigate();
  if (!fach) return <Navigate to="/bms" replace />;
  return <BMSQuiz subject={fach} onBack={() => navigate("/bms")} />;
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
                <AppShell />
              </AuthGuard>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/onboarding" element={<OnboardingGuard />} />
            <Route path="/bms" element={<BMS />} />
            <Route path="/bms/quiz/:fach" element={<BMSQuizWrapper />} />
            <Route path="/bms/:fach" element={<BMS />} />
            <Route path="/bms/:fach/:kapitel" element={<BMS />} />
            <Route path="/kff" element={<KFF />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/sek" element={<SEK />} />
            <Route path="/simulation" element={<LevelGate requiredLevel={15} featureLabel="Simulationen"><Simulation /></LevelGate>} />
            <Route path="/ai-tutor" element={<LevelGate requiredLevel={5} featureLabel="AI-Tutor"><AITutor /></LevelGate>} />
            <Route path="/lernplan" element={<Lernplan />} />
            <Route path="/analyse" element={<Analysis />} />
            <Route path="/community" element={<Community />} />
            <Route path="/statistik" element={<Statistics />} />
            <Route path="/notizen" element={<Notes />} />
            <Route path="/karteikarten" element={<Flashcards />} />
            <Route path="/duell" element={<Duel />} />
            <Route path="/stichwortliste" element={<StichwortlistePage />} />
            <Route path="/schwachstellen" element={<LevelGate requiredLevel={10} featureLabel="Schwachstellen-Analyse"><SchwachstellenTrainer /></LevelGate>} />
            <Route path="/schwachstellen/recovery" element={<SmartRecoveryPage />} />
            <Route path="/preise" element={<Pricing />} />
            <Route path="/admin/kapitel-editor" element={<KapitelEditor />} />
            <Route path="/admin/audit" element={<ContentAudit />} />
            <Route path="/admin/preview" element={<AdminPreview />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/wissencheck" element={<WissenCheck />} />
            <Route path="/wissencheck/:fach" element={<WissenCheck />} />
            <Route path="/prognose" element={<Prognose />} />
            <Route path="/performance" element={<PerformanceOverview />} />
            <Route path="/fragen-trainer" element={<FragenTrainer />} />
            <Route path="/daily" element={<DailyChallenge />} />
            <Route path="/wrapped" element={<BMSWrapped />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
