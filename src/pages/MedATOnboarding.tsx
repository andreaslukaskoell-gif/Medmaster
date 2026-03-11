import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Brain, Target, ArrowRight, ChevronLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    key: "bms",
    icon: BookOpen,
    color: "bg-[var(--accent)]/10 text-[var(--accent)]",
    title: "BMS lernen",
    text: "Lerne Biologie, Chemie, Physik und Mathe mit unseren Lernkapiteln und über 4300 Übungsfragen.",
  },
  {
    key: "kff",
    icon: Brain,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    title: "KFF, TV & SEK trainieren",
    text: "Trainiere Zahlenfolgen, Figuren, Implikationen, Textverständnis und sozial-emotionale Kompetenzen.",
  },
  {
    key: "simulation",
    icon: Target,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    title: "Simulation & Fortschritt",
    text: "Teste dich mit realistischen Simulationen und verfolge deinen Fortschritt.",
  },
] as const;

const TOTAL_STEPS = SLIDES.length + 1; // 3 slides + username

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function MedATOnboarding() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [username, setUsername] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const setComplete = useStore((s) => s.setMedATOnboardingComplete);
  const { user } = useAuth();

  const isSlide = index < SLIDES.length;
  const isUsername = index === SLIDES.length;

  const goNext = () => {
    if (isSlide) {
      setDirection(1);
      setIndex((i) => i + 1);
      return;
    }
  };

  const goBack = () => {
    setDirection(-1);
    setIndex((i) => Math.max(0, i - 1));
  };

  const handleFinish = async () => {
    const trimmed = username.trim();
    if (trimmed.length < 2) {
      setError("Bitte wähle einen Namen mit mindestens 2 Zeichen.");
      return;
    }
    setError("");
    setSaving(true);

    if (supabase && user) {
      await supabase
        .from("profiles")
        .upsert({ id: user.id, display_name: trimmed, username: trimmed }, { onConflict: "id" });
    }

    setSaving(false);
    setComplete();
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-md">
        {/* Step indicator */}
        <nav className="mb-10" aria-label="Fortschritt">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-[var(--accent)]" : "w-2 bg-[var(--border)]"
                )}
              />
            ))}
          </div>
        </nav>

        <AnimatePresence mode="wait" custom={direction}>
          {isSlide && (
            <motion.div
              key={SLIDES[index].key}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.25 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className={cn(
                  "flex h-20 w-20 items-center justify-center rounded-2xl",
                  SLIDES[index].color
                )}
              >
                {(() => {
                  const Icon = SLIDES[index].icon;
                  return <Icon className="w-10 h-10" aria-hidden />;
                })()}
              </div>
              <h1 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                {SLIDES[index].title}
              </h1>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                {SLIDES[index].text}
              </p>
            </motion.div>
          )}

          {isUsername && (
            <motion.div
              key="username"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.25 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--accent)]/10">
                <User className="w-10 h-10 text-[var(--accent)]" aria-hidden />
              </div>
              <h1 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                Wie heißt du?
              </h1>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                Wähle einen Namen, der im Dashboard und in der Community angezeigt wird.
              </p>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleFinish();
                }}
                placeholder="Dein Name"
                maxLength={30}
                autoFocus
                className="mt-6 w-full max-w-xs rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-center text-lg font-medium text-[var(--text-primary)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-10 flex gap-3">
          {index > 0 && (
            <Button variant="outline" size="lg" className="gap-1" onClick={goBack}>
              <ChevronLeft className="w-4 h-4" />
              Zurück
            </Button>
          )}
          {isSlide && (
            <Button size="lg" className="flex-1 gap-2" onClick={goNext}>
              Weiter
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
          {isUsername && (
            <Button size="lg" className="flex-1 gap-2" onClick={handleFinish} disabled={saving}>
              {saving ? "Wird gespeichert..." : "Los geht's"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
