import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Brain, Target, ArrowRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    key: "bms",
    icon: BookOpen,
    color: "bg-primary-500/10 text-primary-500",
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

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function MedATOnboarding() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();
  const setComplete = useStore((s) => s.setMedATOnboardingComplete);

  const slide = SLIDES[index];
  const isLast = index === SLIDES.length - 1;

  const goNext = () => {
    if (isLast) {
      setComplete();
      navigate("/dashboard", { replace: true });
      return;
    }
    setDirection(1);
    setIndex((i) => i + 1);
  };

  const goBack = () => {
    setDirection(-1);
    setIndex((i) => Math.max(0, i - 1));
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-md">
        {/* Step indicator */}
        <nav className="mb-10" aria-label="Fortschritt">
          <div className="flex items-center justify-center gap-2">
            {SLIDES.map((s, i) => (
              <div
                key={s.key}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-primary-500" : "w-2 bg-app-border"
                )}
              />
            ))}
          </div>
        </nav>

        {/* Slide content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.key}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.25 }}
            className="flex flex-col items-center text-center"
          >
            <div
              className={cn("flex h-20 w-20 items-center justify-center rounded-2xl", slide.color)}
            >
              <slide.icon className="w-10 h-10" aria-hidden />
            </div>

            <h1 className="mt-6 text-2xl font-bold tracking-tight text-app-foreground">
              {slide.title}
            </h1>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-app-muted">{slide.text}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-10 flex gap-3">
          {index > 0 && (
            <Button variant="outline" size="lg" className="gap-1" onClick={goBack}>
              <ChevronLeft className="w-4 h-4" />
              Zurück
            </Button>
          )}
          <Button size="lg" className="flex-1 gap-2" onClick={goNext}>
            {isLast ? "Los geht's" : "Weiter"}
            {!isLast && <ArrowRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
