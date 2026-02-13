import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { useStore } from "./store/useStore";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import BMS from "./pages/BMS";
import KFF from "./pages/KFF";
import TV from "./pages/TV";
import SEK from "./pages/SEK";
import Simulation from "./pages/Simulation";
import Statistics from "./pages/Statistics";
import Pricing from "./pages/Pricing";
import Lernplan from "./pages/Lernplan";
import Analysis from "./pages/Analysis";
import Community from "./pages/Community";
import Notes from "./pages/Notes";
import Flashcards from "./pages/Flashcards";
import Duel from "./pages/Duel";
import StichwortlistePage from "./pages/StichwortlistePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function OnboardingGuard() {
  const { onboardingCompleted } = useStore();
  if (onboardingCompleted) return <Navigate to="/" replace />;
  return <Onboarding />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<OnboardingGuard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route element={<AppShell />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bms" element={<BMS />} />
          <Route path="/kff" element={<KFF />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/sek" element={<SEK />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/lernplan" element={<Lernplan />} />
          <Route path="/analyse" element={<Analysis />} />
          <Route path="/community" element={<Community />} />
          <Route path="/statistik" element={<Statistics />} />
          <Route path="/notizen" element={<Notes />} />
          <Route path="/karteikarten" element={<Flashcards />} />
          <Route path="/duell" element={<Duel />} />
          <Route path="/stichwortliste" element={<StichwortlistePage />} />
          <Route path="/preise" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
