import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { AuthGuard } from "@/components/AuthGuard";
import { ErrorBoundary } from "@/components/ErrorBoundary";
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
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPasswordPage"));

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
            <Route path="/bms/:fach" element={<BMS />} />
            <Route path="/bms/:fach/:kapitel" element={<BMS />} />
            <Route path="/kff" element={<ErrorBoundary><KFF /></ErrorBoundary>} />
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
            <Route path="/preise" element={<Pricing />} />
            <Route path="/admin/kapitel-editor" element={<KapitelEditor />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
