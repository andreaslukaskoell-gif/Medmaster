import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  CalendarCheck,
  PieChart,
  Sparkles,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  ClipboardList,
  Target,
  BarChart3,
  Lightbulb,
  Stethoscope,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { getMedATStatsByUniversity, admissionRatePercent } from "@/data/medatStats";

type MedATStep = "was-ist" | "ablauf" | "quoten" | "nutzen" | "start";

const STEPS: { key: MedATStep; title: string }[] = [
  { key: "was-ist", title: "Was ist der MedAT?" },
  { key: "ablauf", title: "Ablauf" },
  { key: "quoten", title: "Quoten & Chancen" },
  { key: "nutzen", title: "MedMaster nutzen" },
];

const slideVariants = {
  enter: { x: 20, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { y: 8, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function StepIndicator({ current }: { current: MedATStep }) {
  const idx = STEPS.findIndex((s) => s.key === current);
  return (
    <nav className="mb-8" aria-label="Fortschritt">
      <div className="flex items-center justify-between gap-2">
        {STEPS.map((s, i) => (
          <div key={s.key} className="flex flex-1 items-center gap-1.5 min-w-0">
            <div
              className={cn(
                "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
                i < idx
                  ? "bg-primary-500 text-white"
                  : i === idx
                    ? "bg-primary-500 text-white ring-2 ring-primary-200 dark:ring-primary-800 ring-offset-2 ring-offset-background"
                    : "bg-app-border text-app-muted"
              )}
              aria-current={i === idx ? "step" : undefined}
            >
              {i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 rounded-full min-w-2 transition-colors",
                  i < idx ? "bg-primary-500" : "bg-app-border"
                )}
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-sm font-medium text-app-muted">{STEPS[idx]?.title}</p>
    </nav>
  );
}

function SectionTitle({
  icon: Icon,
  children,
  className,
}: {
  icon: typeof BookOpen;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-app-foreground",
        className
      )}
    >
      <Icon className="w-4 h-4 shrink-0 text-primary-500" aria-hidden />
      {children}
    </h2>
  );
}

// ── Step 1: Was ist der MedAT? ─────────────────────────────────────────────

function StepWasIst({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      key="was-ist"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.28 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-primary-500/10">
          <BookOpen className="w-7 h-7 text-primary-500" aria-hidden />
        </div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-app-foreground">
          Was ist der MedAT?
        </h1>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <Card className="border-app-border bg-app-card">
          <CardContent className="pt-5 pb-5">
            <SectionTitle icon={Stethoscope}>Definition & Studiengänge</SectionTitle>
            <p className="mt-3 text-sm leading-relaxed text-app-muted">
              Der <strong className="text-app-foreground">Medizinaufnahmetest (MedAT)</strong> ist
              der zentrale Aufnahmetest für das Studium der{" "}
              <strong className="text-app-foreground">Humanmedizin</strong> und{" "}
              <strong className="text-app-foreground">Zahnmedizin</strong> an den öffentlichen
              Medizin-Unis in Österreich: Wien, Graz, Innsbruck und Linz.
            </p>
          </CardContent>
        </Card>

        <Card className="border-app-border bg-app-card">
          <CardHeader className="pb-2">
            <SectionTitle icon={Brain}>Testteile</SectionTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="rounded-lg border border-app-border bg-background/50 p-3">
              <p className="font-semibold text-app-foreground">BMS</p>
              <p className="text-sm text-app-muted">
                Biologie, Chemie, Physik, Mathematik — Faktenwissen & Verständnis
              </p>
            </div>
            <div className="rounded-lg border border-app-border bg-background/50 p-3">
              <p className="font-semibold text-app-foreground">KFF</p>
              <p className="text-sm text-app-muted">
                Kognitive Fähigkeiten: Figuren zusammensetzen, Implikationen, Wortflüssigkeit,
                Merkfähigkeit, Zahlenfolgen, Textverständnis, Schlauchfiguren u. a.
              </p>
            </div>
            <p className="text-sm text-app-muted">
              Es wird sowohl <strong className="text-app-foreground">Faktenwissen</strong> als auch{" "}
              <strong className="text-app-foreground">kognitive Fähigkeiten</strong> geprüft —
              beides lässt sich gezielt trainieren.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <Button size="lg" className="w-full gap-2" onClick={onNext}>
        Weiter
        <ArrowRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

// ── Step 2: Wie läuft der MedAT ab? ────────────────────────────────────────

function StepAblauf({ onNext }: { onNext: () => void }) {
  const steps = [
    {
      num: 1,
      icon: CalendarCheck,
      text: "Anmeldung an einer MedUni (Wien, Graz, Innsbruck oder Linz)",
    },
    {
      num: 2,
      icon: ClipboardList,
      text: "Testtag: feste Blöcke, feste Dauer, gleiche Bedingungen für alle",
    },
    { num: 3, icon: BarChart3, text: "Punktevergabe & Gewichtung je nach Testteil" },
    {
      num: 4,
      icon: GraduationCap,
      text: "Reihung nach Gesamtpunktzahl → Zuteilung der Studienplätze",
    },
  ];
  return (
    <motion.div
      key="ablauf"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.28 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-violet-500/10">
          <CalendarCheck className="w-7 h-7 text-violet-600 dark:text-violet-400" aria-hidden />
        </div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-app-foreground">
          Wie läuft der MedAT ab?
        </h1>
      </div>

      <div className="relative space-y-0">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-app-border" aria-hidden />
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: i * 0.05 }}
            className="relative flex gap-4 pl-10 pb-5 last:pb-0"
          >
            <div className="absolute left-0 top-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary-500 bg-background text-sm font-bold text-primary-500">
              {s.num}
            </div>
            <div className="flex gap-3 rounded-xl border border-app-border bg-app-card p-3 flex-1 min-w-0">
              <s.icon
                className="w-5 h-5 shrink-0 text-violet-600 dark:text-violet-400 mt-0.5"
                aria-hidden
              />
              <p className="text-sm leading-relaxed text-app-muted pt-0.5">{s.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Card className="border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-900/10">
        <CardContent className="py-3">
          <p className="text-xs text-app-muted">
            <strong className="text-app-foreground">Quote</strong> = Aufteilung der Plätze (z. B.
            Österreich / EU / Nicht-EU). Du konkurrierst innerhalb deiner Quote.
          </p>
        </CardContent>
      </Card>

      <Button size="lg" className="w-full gap-2" onClick={onNext}>
        Weiter
        <ArrowRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

// ── Step 3: Quoten, Grenzwerte & Chancen ───────────────────────────────────

function StepQuoten({ onNext }: { onNext: () => void }) {
  const byUni = getMedATStatsByUniversity();
  return (
    <motion.div
      key="quoten"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.28 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-amber-500/10">
          <PieChart className="w-7 h-7 text-amber-600 dark:text-amber-400" aria-hidden />
        </div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-app-foreground">
          Quoten, Grenzwerte & Chancen
        </h1>
      </div>

      <Card className="overflow-hidden border-app-border bg-app-card">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-app-border bg-background/60">
                <th className="py-3 pl-4 font-semibold text-app-foreground">Uni</th>
                <th className="py-3 px-2 font-semibold text-app-foreground text-right">Bewerber</th>
                <th className="py-3 px-2 font-semibold text-app-foreground text-right">Plätze</th>
                <th className="py-3 pr-4 pl-2 font-semibold text-app-foreground text-right">
                  Quote
                </th>
              </tr>
            </thead>
            <tbody>
              {byUni.map(({ university, stats }) => {
                const latest = stats[0];
                if (!latest) return null;
                const rate = admissionRatePercent(latest.applicants, latest.places);
                return (
                  <tr
                    key={university}
                    className="border-b border-app-border last:border-0 hover:bg-background/30"
                  >
                    <td className="py-3 pl-4 font-medium text-app-foreground">{university}</td>
                    <td className="py-3 px-2 text-app-muted text-right">
                      {latest.applicants.toLocaleString("de-AT")}
                    </td>
                    <td className="py-3 px-2 text-app-muted text-right">
                      {latest.places.toLocaleString("de-AT")}
                    </td>
                    <td className="py-3 pr-4 pl-2 font-medium text-app-foreground text-right">
                      ca. {rate} %
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {byUni.some(({ stats }) => stats[0]?.cutoffPercent != null) && (
          <div className="border-t border-app-border px-4 py-2 text-xs text-app-muted">
            Grenzbereich (Richtwert): ca. 90–92 % der Maximalpunktzahl je nach Uni und Jahr.
          </div>
        )}
      </Card>

      <Card className="border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-900/10">
        <CardContent className="py-3">
          <p className="text-xs text-app-muted">
            <strong className="text-app-foreground">Hinweis:</strong> Werte schwanken jedes Jahr —
            diese Zahlen dienen zur realistischen Einordnung, nicht als Garantie.
          </p>
        </CardContent>
      </Card>

      <Button size="lg" className="w-full gap-2" onClick={onNext}>
        Weiter
        <ArrowRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

// ── Step 4: So nutzt du MedMaster optimal ──────────────────────────────────

function StepNutzen({ onNext }: { onNext: () => void }) {
  const items = [
    { icon: BookOpen, label: "Lernkapitel (BMS)", desc: "Stoff nach Kapitel durcharbeiten" },
    {
      icon: Target,
      label: "KFF-Training",
      desc: "Figuren, Implikationen, Wortflüssigkeit, Merkfähigkeit",
    },
    { icon: ClipboardList, label: "Fragen-Trainer", desc: "Übungsfragen zu jedem Thema" },
    { icon: Sparkles, label: "Wiederholungen & Schwächen", desc: "Gezielt Lücken schließen" },
  ];
  return (
    <motion.div
      key="nutzen"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.28 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-emerald-500/10">
          <Lightbulb className="w-7 h-7 text-emerald-600 dark:text-emerald-400" aria-hidden />
        </div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-app-foreground">
          So nutzt du MedMaster optimal
        </h1>
      </div>

      <p className="text-sm text-app-muted">MedMaster bietet dir:</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: i * 0.05 }}
          >
            <Card className="card-interactive h-full border-app-border bg-app-card">
              <CardContent className="flex gap-3 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10">
                  <item.icon className="w-5 h-5 text-primary-500" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-app-foreground">{item.label}</p>
                  <p className="text-xs text-app-muted mt-0.5">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border-l-4 border-l-primary-500 bg-primary-500/5 dark:bg-primary-500/10">
        <CardHeader className="pb-1">
          <SectionTitle icon={Target}>Empfehlung</SectionTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-app-foreground">
            <li>Zuerst den Einstufungstest machen</li>
            <li>Dann deinen Lernplan nutzen</li>
            <li>Gezielt Schwächen trainieren</li>
          </ol>
        </CardContent>
      </Card>

      <Button size="lg" className="w-full gap-2" onClick={onNext}>
        Weiter
        <ArrowRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

// ── Final: Einstufungstest starten ─────────────────────────────────────────

function StepStart() {
  const navigate = useNavigate();
  const { setMedATOnboardingComplete } = useStore();

  const handleStart = () => {
    navigate("/placement-test", { replace: true });
  };

  return (
    <motion.div
      key="start"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.28 }}
      className="space-y-6 text-center"
    >
      <div className="flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-500/15 ring-2 ring-primary-500/30">
          <GraduationCap className="w-10 h-10 text-primary-500" aria-hidden />
        </div>
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-app-foreground">
        Bereit für den nächsten Schritt
      </h1>
      <p className="mx-auto max-w-sm text-sm leading-relaxed text-app-muted">
        Starte jetzt den Einstufungstest. Danach erhältst du deinen persönlichen Lernplan und kannst
        mit dem Lernen beginnen.
      </p>
      <Button size="lg" className="w-full gap-2 py-6 text-base font-semibold" onClick={handleStart}>
        <ClipboardList className="w-5 h-5" aria-hidden />
        Einstufungstest starten
        <ChevronRight className="w-4 h-4" aria-hidden />
      </Button>
    </motion.div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────

export default function MedATOnboarding() {
  const [step, setStep] = useState<MedATStep>("was-ist");

  const goNext = () => {
    const order: MedATStep[] = ["was-ist", "ablauf", "quoten", "nutzen", "start"];
    const i = order.indexOf(step);
    if (i < order.length - 1) setStep(order[i + 1]);
  };

  const showIndicator = step !== "start";

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-lg">
        {showIndicator && <StepIndicator current={step} />}
        <AnimatePresence mode="wait">
          {step === "was-ist" && <StepWasIst key="was-ist" onNext={goNext} />}
          {step === "ablauf" && <StepAblauf key="ablauf" onNext={goNext} />}
          {step === "quoten" && <StepQuoten key="quoten" onNext={goNext} />}
          {step === "nutzen" && <StepNutzen key="nutzen" onNext={goNext} />}
          {step === "start" && <StepStart key="start" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
