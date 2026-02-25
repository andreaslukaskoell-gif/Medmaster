import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, Clock, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";

type Step = "welcome" | "date" | "time" | "fach" | "done";

const TIME_OPTIONS = [
  { label: "15 min", value: 15, hours: 0.25 },
  { label: "30 min", value: 30, hours: 0.5 },
  { label: "60 min", value: 60, hours: 1 },
  { label: "90+ min", value: 90, hours: 1.5 },
];

const FACH_OPTIONS = [
  { id: "biologie", label: "Biologie", emoji: "🔬" },
  { id: "chemie", label: "Chemie", emoji: "⚗️" },
  { id: "physik", label: "Physik", emoji: "⚡" },
  { id: "mathematik", label: "Mathematik", emoji: "🔢" },
];

// Total content hours to cover (~400 hours based on spec)
const TOTAL_CONTENT_HOURS = 400;

function calcCountdown(dateStr: string): number {
  if (!dateStr) return 0;
  const target = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diff = Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}

function calcWeeksToCompletion(hoursPerDay: number): number {
  if (hoursPerDay <= 0) return 0;
  const totalWeeks = Math.ceil(TOTAL_CONTENT_HOURS / (hoursPerDay * 7));
  return totalWeeks;
}

const slideVariants = {
  enter: { x: 60, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -60, opacity: 0 },
};

// ── Step: Welcome ────────────────────────────────────────────────────────────

function StepWelcome({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      key="welcome"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.3 }}
      className="flex flex-col items-center text-center space-y-8"
    >
      <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center">
        <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Willkommen bei Medmaster 🧠
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base max-w-sm mx-auto">
          Lass uns deinen persoenlichen Lernplan erstellen.
        </p>
      </div>

      <Button size="lg" className="w-full max-w-xs text-base" onClick={onNext}>
        Los geht&apos;s
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  );
}

// ── Step: Date ───────────────────────────────────────────────────────────────

function StepDate({
  onNext,
  value,
  onChange,
}: {
  onNext: () => void;
  value: string;
  onChange: (v: string) => void;
}) {
  const countdown = calcCountdown(value);
  const isValid = value !== "" && countdown > 0;

  // Min date: tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <motion.div
      key="date"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.3 }}
      className="flex flex-col items-center text-center space-y-8 w-full"
    >
      <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-3xl flex items-center justify-center">
        <Calendar className="w-10 h-10 text-orange-600 dark:text-orange-400" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Wann schreibst du die BMS?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Gib dein Pruefungsdatum ein</p>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <input
          type="date"
          min={minDate}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-center text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <AnimatePresence>
          {isValid && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl px-4 py-3 text-blue-700 dark:text-blue-300 font-semibold text-base"
            >
              Noch {countdown} Tage!
            </motion.div>
          )}
          {value !== "" && !isValid && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm"
            >
              Bitte ein Datum in der Zukunft waehlen
            </motion.div>
          )}
        </AnimatePresence>

        <Button size="lg" className="w-full text-base" onClick={onNext} disabled={!isValid}>
          Weiter
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}

// ── Step: Time ───────────────────────────────────────────────────────────────

function StepTime({
  onNext,
  value,
  onChange,
}: {
  onNext: () => void;
  value: number | null;
  onChange: (v: number) => void;
}) {
  const selectedOption = TIME_OPTIONS.find((o) => o.value === value);
  const weeksToCompletion = selectedOption ? calcWeeksToCompletion(selectedOption.hours) : null;

  return (
    <motion.div
      key="time"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.3 }}
      className="flex flex-col items-center text-center space-y-8 w-full"
    >
      <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-3xl flex items-center justify-center">
        <Clock className="w-10 h-10 text-purple-600 dark:text-purple-400" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Wie viel Zeit hast du pro Tag?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Waehle deine taegliche Lernzeit</p>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {TIME_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={cn(
                "rounded-2xl border-2 py-5 px-3 text-center font-bold text-lg transition-all cursor-pointer",
                value === opt.value
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 shadow-md"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {weeksToCompletion !== null && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl px-4 py-3 text-green-700 dark:text-green-300 text-sm"
            >
              In ca. <span className="font-bold">{weeksToCompletion} Wochen</span> wirst du alle
              Themen abgedeckt haben
            </motion.div>
          )}
        </AnimatePresence>

        <Button size="lg" className="w-full text-base" onClick={onNext} disabled={value === null}>
          Weiter
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}

// ── Step: Fach ───────────────────────────────────────────────────────────────

function StepFach({
  onNext,
  value,
  onChange,
}: {
  onNext: () => void;
  value: string | null;
  onChange: (v: string) => void;
}) {
  const selectedFach = FACH_OPTIONS.find((f) => f.id === value);

  return (
    <motion.div
      key="fach"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.3 }}
      className="flex flex-col items-center text-center space-y-8 w-full"
    >
      <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900/30 rounded-3xl flex items-center justify-center">
        <BookOpen className="w-10 h-10 text-teal-600 dark:text-teal-400" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Was ist dein schwaechstes Fach?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Wir priorisieren deine Schwachstellen
        </p>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {FACH_OPTIONS.map((fach) => (
            <button
              key={fach.id}
              onClick={() => onChange(fach.id)}
              className={cn(
                "rounded-2xl border-2 py-5 px-3 text-center font-bold transition-all cursor-pointer",
                value === fach.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 shadow-md"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
              )}
            >
              <div className="text-2xl mb-1">{fach.emoji}</div>
              <div className="text-sm">{fach.label}</div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selectedFach && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl px-4 py-3 text-blue-700 dark:text-blue-300 text-sm font-semibold"
            >
              Wir starten mit {selectedFach.label}!
            </motion.div>
          )}
        </AnimatePresence>

        <Button size="lg" className="w-full text-base" onClick={onNext} disabled={value === null}>
          Lernplan erstellen
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}

// ── Step: Done ───────────────────────────────────────────────────────────────

function StepDone() {
  const navigate = useNavigate();

  const firstActions = [
    {
      label: "BMS lernen",
      description: "Biologie, Chemie, Physik & Mathe",
      icon: "📚",
      path: "/bms",
      color:
        "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40",
      textColor: "text-emerald-700 dark:text-emerald-300",
    },
    {
      label: "Fortschritt & Prognose",
      description: "Schwachstellen, Statistik, Prognose",
      icon: "📈",
      path: "/fortschritt",
      color:
        "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/40",
      textColor: "text-violet-700 dark:text-violet-300",
    },
    {
      label: "Simulation starten",
      description: "Teste dich mit echten MedAT-Fragen",
      icon: "🎯",
      path: "/simulation",
      color:
        "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40",
      textColor: "text-blue-700 dark:text-blue-300",
    },
  ];

  return (
    <motion.div
      key="done"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center text-center space-y-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 250, delay: 0.15 }}
        className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center"
      >
        <CheckCircle2 className="w-14 h-14 text-green-500" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-1"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Alles bereit! 🎉
        </h2>
        <p className="text-lg font-bold text-green-600 dark:text-green-400">
          +50 XP — Willkommen an Bord!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full space-y-2"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Wo möchtest du starten?</p>
        {firstActions.map((action, i) => (
          <motion.button
            key={action.path}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            onClick={() => navigate(action.path)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-colors ${action.color}`}
          >
            <span className="text-2xl">{action.icon}</span>
            <div className="flex-1 min-w-0">
              <p className={`font-semibold text-sm ${action.textColor}`}>{action.label}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{action.description}</p>
            </div>
            <ArrowRight className={`w-4 h-4 shrink-0 ${action.textColor}`} />
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

const STEP_ORDER: Step[] = ["welcome", "date", "time", "fach", "done"];

function StepIndicator({ current }: { current: Step }) {
  const steps: { key: Step; label: string }[] = [
    { key: "welcome", label: "Start" },
    { key: "date", label: "Datum" },
    { key: "time", label: "Zeit" },
    { key: "fach", label: "Fach" },
  ];
  const currentIdx = STEP_ORDER.indexOf(current);

  return (
    <div className="flex items-center gap-2 mb-8">
      {steps.map((s, i) => (
        <div key={s.key} className="flex items-center gap-2">
          <div
            className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all",
              i < currentIdx
                ? "bg-blue-500 text-white"
                : i === currentIdx
                  ? "bg-blue-500 text-white ring-4 ring-blue-200 dark:ring-blue-800"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
            )}
          >
            {i < currentIdx ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "flex-1 h-0.5 w-6 rounded-full transition-all",
                i < currentIdx ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Onboarding() {
  const [step, setStep] = useState<Step>("welcome");
  const [medatDate, setMedatDate] = useState("");
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedFach, setSelectedFach] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addXP, setLernplanConfig, completeOnboarding } = useStore();

  // Auto-navigate away from "done" slide after 5s (user can also click CTAs directly)
  useEffect(() => {
    if (step !== "done") return;

    // Grant XP welcome bonus
    addXP(50);

    // Compute hoursPerWeek from selected time
    const optionData = TIME_OPTIONS.find((o) => o.value === selectedTime);
    const hoursPerDay = optionData?.hours ?? 0.5;
    const hoursPerWeek = Math.round(hoursPerDay * 7 * 10) / 10;

    // Save lernplan config
    setLernplanConfig({
      medatDate,
      hoursPerWeek,
      generatedAt: new Date().toISOString(),
    });

    // Mark onboarding complete (pass null for einstufungsResult — simplified flow)
    completeOnboarding(null);

    const timer = setTimeout(() => {
      navigate("/daily", { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  const goNext = () => {
    const idx = STEP_ORDER.indexOf(step);
    if (idx < STEP_ORDER.length - 1) {
      setStep(STEP_ORDER[idx + 1]);
    }
  };

  const showIndicator = step !== "done";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-sm">
        {showIndicator && <StepIndicator current={step} />}

        <AnimatePresence mode="wait">
          {step === "welcome" && <StepWelcome key="welcome" onNext={goNext} />}
          {step === "date" && (
            <StepDate key="date" value={medatDate} onChange={setMedatDate} onNext={goNext} />
          )}
          {step === "time" && (
            <StepTime key="time" value={selectedTime} onChange={setSelectedTime} onNext={goNext} />
          )}
          {step === "fach" && (
            <StepFach key="fach" value={selectedFach} onChange={setSelectedFach} onNext={goNext} />
          )}
          {step === "done" && <StepDone key="done" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
