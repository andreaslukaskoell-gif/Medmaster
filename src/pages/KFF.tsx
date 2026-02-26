import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  BookOpen,
  Play,
  CheckCircle2,
  XCircle,
  Shuffle,
  BarChart3,
  Timer,
  Puzzle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLoadingSkeleton, PageError } from "@/components/ui/page-states";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { usePageTitle } from "@/hooks/usePageTitle";
import KFFStrategyView from "@/components/shared/KFFStrategyView";
import {
  generateAllergyPasses,
  generateGedaechtnisQuestionsFromPasses,
  generateAllWordFluencyTasksFromLexicon,
  generateImplicationTrainingTask,
  generateWordFluencyTask,
} from "@/data/kffGenerators";
import {
  OFFICIAL_GM_EXAMPLES,
  validateOfficialGedaechtnisExamples,
  type AllergyPass,
  type GedaechtnisQuestion,
} from "@/data/kffGedaechtnisMedAT";
import {
  OFFICIAL_IMPLICATION_EXAMPLES,
  implikationenTasks,
  type ImplikationTask,
} from "@/data/kffImplikationen";
import { ImplikationSolutionDiagram } from "@/components/diagrams/kff/EulerDiagrams";
import { OFFICIAL_WF_EXAMPLES, type WordFluencyTask } from "@/data/kffWortfluessigkeitMedAT";
import {
  OFFICIAL_ZF_EXAMPLES,
  generateSequenceTaskSet,
  type SequenceTask,
} from "@/data/kffZahlenfolgenMedAT";
import { difficultyLabel } from "@/data/figurenGenerator";
import {
  OFFICIAL_FZ_EXAMPLES,
  generateFigurenTrainingSet,
  polygonToPath,
  polygonToPathScaledToViewBox,
  layoutPiecesCompact,
  FIGURE_SVG_ASPECT_PROPS,
  isOptionE,
  type FigureAssembleTask,
} from "@/data/kffFigurenZusammensetzenMedAT";
import {
  filterValidSequenceTasks,
  filterValidImplikationTasks,
  filterValidWordFluencyTasks,
  filterValidFigurenTasks,
  filterValidGedaechtnisQuestions,
  logPoolWarning,
} from "@/data/kffValidation";
import {
  getTasksForUserWithWeakness,
  getOneMerkfahigkeitSet,
  taskToData,
  getTaskCountByDomain,
} from "@/lib/taskDb";
import type { TaskDomain } from "@/lib/taskDb/types";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";

type KffView =
  | "overview"
  | "strategy"
  | "zahlenfolgen"
  | "gedaechtnis-setup"
  | "gedaechtnis-learn"
  | "gedaechtnis-quiz"
  | "implikationen"
  | "wortflüssigkeit"
  | "figuren-quiz";
type StrategyKey = "zahlenfolgen" | "gedaechtnis" | "implikationen" | "wortflüssigkeit" | "figuren";

const QUICK_START_VIEWS: Record<string, KffView> = {
  zahlenfolgen: "zahlenfolgen",
  implikationen: "implikationen",
  gedaechtnis: "gedaechtnis-setup",
  wortfluessigkeit: "wortflüssigkeit",
};

/** Zahlenfolge für Anzeige: nur Zahlen + genau „?, ?“ am Ende (MedAT: immer 2 Lücken). */
function formatZahlenfolgeDisplay(sequence: (number | "?")[] | undefined): string {
  if (!sequence?.length) return "?, ?";
  const numbers = sequence.filter((x): x is number => x !== "?");
  return numbers.length ? `${numbers.join(", ")}, ?, ?` : "?, ?";
}

/** Mischt ein Array und gibt bis zu limit Elemente zurück (Fallback wenn Task-DB leer). */
function shuffleSlice<T>(arr: T[], limit: number): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out.slice(0, limit);
}

/** Zeigt die Anzahl validierter Aufgaben in der Task-DB für eine Domain (z. B. „500 Aufgaben in der Datenbank“). */
function TaskDbCountHint({ domain }: { domain: TaskDomain }) {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    let cancelled = false;
    getTaskCountByDomain(domain, true).then((n) => {
      if (!cancelled) setCount(n);
    });
    return () => {
      cancelled = true;
    };
  }, [domain]);
  if (count === null) return <span className="text-muted text-sm">Lade Anzahl…</span>;
  return (
    <span className="text-muted text-sm">
      Aktuell {count} Aufgabe{count !== 1 ? "n" : ""} in der Datenbank.
    </span>
  );
}

export default function KFF() {
  usePageTitle("KFF – Kognitive Fähigkeiten");
  const [searchParams] = useSearchParams();
  const startParam = searchParams.get("start");
  const initialView: KffView =
    startParam && QUICK_START_VIEWS[startParam] ? QUICK_START_VIEWS[startParam] : "overview";
  const [view, setView] = useState<KffView>(initialView);
  const [strategyKey, setStrategyKey] = useState<StrategyKey>("zahlenfolgen");
  const { user, loading: isLoading } = useAuth();
  const [authTimedOut, setAuthTimedOut] = useState(false);

  useEffect(() => {
    if (!isLoading) return;
    const t = setTimeout(() => setAuthTimedOut(true), 5000);
    return () => clearTimeout(t);
  }, [isLoading]);

  if (isLoading && !authTimedOut) {
    return <PageLoadingSkeleton />;
  }
  if (authTimedOut || !user) {
    return (
      <PageError
        message="Zum Üben im KFF-Bereich musst du angemeldet sein. Sitzung abgelaufen oder nicht eingeloggt? Bitte melde dich erneut an."
        action={
          <Button asChild variant="outline" className="gap-2">
            <a href="/login">Zum Login</a>
          </Button>
        }
      />
    );
  }

  if (view === "figuren-quiz") return <FigurenQuiz onBack={() => setView("overview")} />;

  if (view === "strategy") {
    return <KFFStrategyView strategyKey={strategyKey} onBack={() => setView("overview")} />;
  }

  if (view === "zahlenfolgen") return <ZahlenfolgenQuiz onBack={() => setView("overview")} />;
  if (view === "gedaechtnis-setup")
    return (
      <GedaechtnisSetup
        onLearn={() => setView("gedaechtnis-learn")}
        onBack={() => setView("overview")}
      />
    );
  if (view === "gedaechtnis-learn")
    return (
      <GedaechtnisLearn
        onStart={() => setView("gedaechtnis-quiz")}
        onBack={() => setView("gedaechtnis-setup")}
      />
    );
  if (view === "gedaechtnis-quiz") return <GedaechtnisQuiz onBack={() => setView("overview")} />;
  if (view === "implikationen") return <ImplikationenQuiz onBack={() => setView("overview")} />;
  if (view === "wortflüssigkeit") return <WortflüssigkeitQuiz onBack={() => setView("overview")} />;

  const modules = [
    {
      id: "zahlenfolgen" as const,
      title: "Zahlenfolgen",
      desc: "Erkenne das Muster und finde die nächste Zahl. Unendlich viele geprüfte Trainingsaufgaben.",
      strategyKey: "zahlenfolgen" as StrategyKey,
      startView: "zahlenfolgen" as KffView,
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
      badge: "Geprüft",
    },
    {
      id: "gedaechtnis" as const,
      title: "Gedächtnis & Merkfähigkeit (Allergiepässe)",
      desc: "Lernphase: Allergieausweise einprägen. Prüfphase: Fragen A–E wie im MedAT.",
      strategyKey: "gedaechtnis" as StrategyKey,
      startView: "gedaechtnis-setup" as KffView,
      color: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
      badge: "MedAT 1:1",
    },
    {
      id: "implikationen" as const,
      title: "Implikationen erkennen",
      desc: "Kategorische Syllogismen: Alle/Einige/Kein — finde die korrekte Schlussfolgerung (A-E).",
      badge: "Geprüft",
      strategyKey: "implikationen" as StrategyKey,
      startView: "implikationen" as KffView,
      color: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "wortflüssigkeit" as const,
      title: "Wortflüssigkeit",
      desc: "Erkenne das Wort aus den vertauschten Buchstaben. Mit welchem Buchstaben beginnt es?",
      strategyKey: "wortflüssigkeit" as StrategyKey,
      startView: "wortflüssigkeit" as KffView,
      color: "bg-orange-100 dark:bg-orange-900/30",
      textColor: "text-orange-600 dark:text-orange-400",
      badge: "Geprüft",
    },
    {
      id: "figuren" as const,
      title: "Figuren zusammensetzen",
      desc: "Welche Figur entsteht aus den Puzzleteilen? Trainiere räumliches Vorstellungsvermögen.",
      strategyKey: "figuren" as StrategyKey,
      startView: "figuren-quiz" as KffView,
      color: "bg-rose-100 dark:bg-rose-900/30",
      textColor: "text-rose-600 dark:text-rose-400",
      icon: "puzzle",
      badge: "Geprüft",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "KFF" }]} />
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          KFF - Kognitive Fähigkeiten
        </h1>
        <p className="text-muted mt-1">
          Trainiere Zahlenfolgen, Gedächtnis, logisches Denken und Wortflüssigkeit.
        </p>
        <Badge variant="info" className="mt-2 text-xs font-normal">
          An dein Level angepasst
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((m) => (
          <Card key={m.id}>
            <CardContent className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 ${m.color} rounded-xl flex items-center justify-center shrink-0`}
                >
                  {m.icon === "puzzle" ? (
                    <Puzzle className={`w-5 h-5 ${m.textColor}`} />
                  ) : (
                    <BarChart3 className={`w-5 h-5 ${m.textColor}`} />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{m.title}</h3>
                    {m.badge && (
                      <Badge variant="info" className="text-[10px]">
                        {m.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted mt-0.5">{m.desc}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setStrategyKey(m.strategyKey);
                    setView("strategy");
                  }}
                >
                  <BookOpen className="w-4 h-4 mr-1" /> Strategie
                </Button>
                <Button size="sm" onClick={() => setView(m.startView)}>
                  <Play className="w-4 h-4 mr-1" /> Starten
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// Helpers
// ==========================================

// ==========================================
// ZAHLENFOLGEN
// ==========================================

type ZahlenfolgenMode = "official" | "training";

function ZahlenfolgenQuiz({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<ZahlenfolgenMode | null>(null);
  const [questionCount, setQuestionCount] = useState(10);
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [questions, setQuestions] = useState<SequenceTask[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [trainingLoading, setTrainingLoading] = useState(false);
  const [trainingError, setTrainingError] = useState<string | null>(null);
  const {
    addXP,
    checkStreak,
    saveQuizResult,
    skillRating,
    setSkillRating,
    addKffTaskFailed,
    markKffTaskCorrect,
    getKffFailedIdsForDomain,
  } = useStore();

  const safeQuestions = questions || [];
  const currentQ = safeQuestions[index];
  const allAnswered = safeQuestions.every((qu) => answers[qu.id] !== undefined);
  void (mode === "official");

  const startOfficial = () => {
    const valid = filterValidSequenceTasks([...OFFICIAL_ZF_EXAMPLES]);
    setQuestions(valid);
    logPoolWarning("zahlenfolgen", valid.length, "offiziell");
    setMode("official");
    setIndex(0);
    setAnswers({});
    setPhase("quiz");
  };

  const startTraining = async () => {
    setTrainingError(null);
    setTrainingLoading(true);
    try {
      const domain = "kff-zahlenfolgen" as const;
      const rating = skillRating ?? 500;
      const tasks = await getTasksForUserWithWeakness(
        domain,
        rating,
        questionCount,
        150,
        getKffFailedIdsForDomain(domain)
      );
      const raw = tasks.map((t) => taskToData<SequenceTask>(t));
      let valid = filterValidSequenceTasks(raw);
      if (valid.length === 0) {
        const generated = generateSequenceTaskSet(questionCount, Date.now());
        valid = shuffleSlice(filterValidSequenceTasks(generated), questionCount);
        if (valid.length === 0)
          valid = shuffleSlice(filterValidSequenceTasks([...OFFICIAL_ZF_EXAMPLES]), questionCount);
        if (import.meta.env?.DEV)
          logPoolWarning("zahlenfolgen", valid.length, "Fallback (generiert)");
      }
      setQuestions(valid);
      if (valid.length < questionCount && import.meta.env?.DEV) {
        logPoolWarning("zahlenfolgen", valid.length, "Training");
      }
      setMode("training");
      setIndex(0);
      setAnswers({});
      setPhase("quiz");
    } catch (e) {
      setTrainingError(e instanceof Error ? e.message : "Aufgaben konnten nicht geladen werden.");
    } finally {
      setTrainingLoading(false);
    }
  };

  const handleSubmit = () => {
    const list = questions || [];
    const score = list.filter((q) => answers[q.id] === q.correctOptionId).length;
    const correct = score;
    const wrong = list.length - correct;
    const domain = "kff-zahlenfolgen" as const;
    list.forEach((q) => {
      if (answers[q.id] !== q.correctOptionId) addKffTaskFailed(domain, q.id);
      else markKffTaskCorrect(domain, q.id);
    });
    setSkillRating((prev) => Math.max(0, Math.min(1000, prev + correct * 15 - wrong * 20)));
    saveQuizResult({
      id: `kff-zf-${Date.now()}`,
      type: "kff",
      subject: "Zahlenfolgen",
      score,
      total: list.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: list.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] ?? "",
        correct: answers[q.id] === q.correctOptionId,
      })),
    });
    addXP(score * 10);
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  useKeyboardShortcuts({
    disabled: phase !== "quiz",
    maxOptions: 5,
    onSelectOption: (idx) => {
      if (currentQ && currentQ.options && idx < currentQ.options.length)
        setAnswers((p) => ({ ...p, [currentQ.id]: currentQ.options[idx].key }));
    },
    onConfirm: () => {
      if (index < safeQuestions.length - 1) setIndex((i) => i + 1);
      else if (allAnswered) handleSubmit();
    },
    onNext: () => {
      if (index < safeQuestions.length - 1) setIndex((i) => i + 1);
    },
    onPrev: () => {
      if (index > 0) setIndex((i) => i - 1);
    },
  });

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Zahlenfolgen</h1>
        <UebungsbeschreibungCard id="kff-zahlenfolgen" collapsible defaultCollapsed />

        <Card className="border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              🏛️ Offizielle Beispiele
            </CardTitle>
            <p className="text-sm text-muted">
              Original MedAT-Beispielaufgaben aus der Informationsbroschüre (IB_ZF_26.pdf) – 1:1
              übernommen, in derselben Reihenfolge wie im PDF.
            </p>
          </CardHeader>
          <CardContent>
            {OFFICIAL_ZF_EXAMPLES.length > 0 ? (
              <Button className="w-full" size="lg" variant="outline" onClick={startOfficial}>
                <BookOpen className="w-5 h-5 mr-2" /> {OFFICIAL_ZF_EXAMPLES.length} offizielle
                Beispielaufgaben starten
              </Button>
            ) : (
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Noch keine offiziellen Beispiele eingetragen. Bitte IB_ZF_26.pdf öffnen und
                Beispielaufgaben in <code className="text-xs">OFFICIAL_ZF_EXAMPLES</code> in{" "}
                <code className="text-xs">src/data/kffZahlenfolgenMedAT.ts</code> 1:1 übernehmen.
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Training</CardTitle>
            <p className="text-sm text-muted">
              Aufgaben aus der Datenbank – Schwierigkeit wird automatisch gemischt (leicht, mittel,
              schwer). Offizielle Beispiele bleiben unverändert in der DB.
            </p>
            <p className="mt-1">
              <TaskDbCountHint domain="kff-zahlenfolgen" />
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">
                Anzahl Fragen
              </label>
              <div className="flex gap-3">
                {[10, 25, 50, 75, 100, 150].map((c) => (
                  <button
                    key={c}
                    onClick={() => setQuestionCount(c)}
                    className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      questionCount === c
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <Button className="w-full" size="lg" onClick={startTraining} disabled={trainingLoading}>
              {trainingLoading ? (
                <>
                  <span className="animate-spin mr-2 inline-block w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full" />
                  Wird geladen…
                </>
              ) : (
                <>
                  <Shuffle className="w-5 h-5 mr-2" /> {questionCount} Fragen laden
                </>
              )}
            </Button>
            {trainingError && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-2">{trainingError}</p>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "result") {
    const resultQuestions = questions || [];
    const score = resultQuestions.filter((q) => answers[q.id] === q.correctOptionId).length;
    const selectedLabel = (q: SequenceTask, key: string) => {
      const opt = q.options?.find((o) => o.key === key);
      if (!opt) return key;
      return opt.value ? `${opt.value[0]}, ${opt.value[1]}` : (opt.text ?? key);
    };
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">
              {score}/{resultQuestions.length}
            </div>
            <p className="text-muted mt-1">
              {resultQuestions.length ? Math.round((score / resultQuestions.length) * 100) : 0}%
              richtig
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
          </CardContent>
        </Card>
        {resultQuestions.map((q, i) => {
          const correct = answers[q.id] === q.correctOptionId;
          return (
            <Card
              key={q.id}
              className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-medium">
                    {i + 1}. {formatZahlenfolgeDisplay(q.sequence)}
                  </span>
                  {q.source && (
                    <Badge variant="default" className="text-[10px]">
                      🏛️ Offizielles MedAT-Beispiel
                    </Badge>
                  )}
                  {!q.source && (
                    <Badge variant="info" className="text-[10px]">
                      {difficultyLabel(q.difficulty)}
                    </Badge>
                  )}
                </div>
                {q.source && <p className="text-xs text-muted mb-2 ml-7">Quelle: {q.source}</p>}
                {!correct && answers[q.id] !== undefined && (
                  <p className="text-sm text-red-600 dark:text-red-400 ml-7">
                    Deine Antwort: {selectedLabel(q, answers[q.id])}
                  </p>
                )}
                <p className="text-sm text-green-700 dark:text-green-400 ml-7">
                  Richtige Antwort: {q.correctNext[0]}, {q.correctNext[1]}
                </p>
                <div className="ml-7 mt-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-400">{q.explanation}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={onBack}>
            Zurück
          </Button>
          <Button
            onClick={() => {
              setPhase("setup");
              setMode(null);
            }}
          >
            <Shuffle className="w-4 h-4 mr-1" /> Neue Fragen
          </Button>
        </div>
      </div>
    );
  }

  if (!safeQuestions.length) {
    const isTrainingEmpty = phase === "quiz" && mode === "training";
    return (
      <div className="max-w-3xl mx-auto space-y-6 p-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {isTrainingEmpty ? (
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <p className="text-muted">
                Es konnten keine Trainingsaufgaben geladen werden. Der Aufgaben-Pool ist
                möglicherweise noch nicht gefüllt oder es gab einen Verbindungsfehler.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={onBack}>
                  Zurück zum Setup
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    const valid = filterValidSequenceTasks([...OFFICIAL_ZF_EXAMPLES]);
                    if (valid.length > 0) {
                      setQuestions(valid);
                      setMode("official");
                      setIndex(0);
                      setAnswers({});
                      setPhase("quiz");
                    }
                  }}
                >
                  <BookOpen className="w-4 h-4 mr-1" /> Offizielle Beispiele starten
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 text-muted">
            <div className="animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full" />
            <p>Fragen werden geladen und geprüft...</p>
          </div>
        )}
      </div>
    );
  }
  if (!currentQ) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 p-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück zum Setup
        </Button>
        <p className="text-muted">Frage nicht gefunden.</p>
      </div>
    );
  }

  const total = safeQuestions.length;
  const optionDisplay = (opt: (typeof currentQ.options)[number]) =>
    opt.value ? `${opt.value[0]}, ${opt.value[1]}` : (opt.text ?? "");
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <span className="text-sm text-muted">
          Frage {index + 1} von {total}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{ width: total ? `${((index + 1) / total) * 100}%` : "0%" }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          {currentQ.source && (
            <Badge variant="default" className="mb-2">
              🏛️ Offizielles MedAT-Beispiel
            </Badge>
          )}
          <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            {formatZahlenfolgeDisplay(currentQ.sequence)}
          </p>
          <p className="text-sm text-muted mb-6">Welche zwei Zahlen folgen als nächstes?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options && Array.isArray(currentQ.options) ? (
              currentQ.options.map((opt, oi) => (
                <button
                  key={opt.key}
                  onClick={() => setAnswers((p) => ({ ...p, [currentQ.id]: opt.key }))}
                  className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer text-left ${answers[currentQ.id] === opt.key ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300" : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                >
                  <span className="font-semibold mr-2">{opt.key})</span>
                  {optionDisplay(opt)}
                  <kbd className="float-right text-[10px] bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded text-muted">
                    {oi + 1}
                  </kbd>
                </button>
              ))
            ) : (
              <p className="text-sm text-muted">Keine Optionen geladen.</p>
            )}
          </div>
          {currentQ.source && <p className="text-xs text-muted mt-3">Quelle: {currentQ.source}</p>}
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < safeQuestions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)}>
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={total} />
    </div>
  );
}

// ==========================================
// GEDAECHTNIS & MERKFAEHIGKEIT (Allergiepässe) – MedAT 1:1
// ==========================================

let _currentGmPasses: AllergyPass[] = [];
let _currentGmQuestions: GedaechtnisQuestion[] = [];
let _currentGmIsOfficial = false;

function AllergyPassCard({ pass }: { pass: AllergyPass }) {
  return (
    <div className="flex rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md overflow-hidden min-h-[200px]">
      <div className="w-28 shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 border-r border-gray-300 dark:border-gray-600">
        {pass.photo ? (
          <img src={pass.photo} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-20 h-24 rounded bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400">
            <svg className="w-12 h-14" viewBox="0 0 24 28" fill="currentColor" aria-hidden>
              <path d="M12 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 10c3.3 0 6 2.7 6 6v6H6v-6c0-3.3 2.7-6 6-6z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1 p-3 grid grid-cols-1 gap-1 text-sm">
        <div className="font-semibold text-base text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-1">
          {pass.name}
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5">
          <span className="text-muted shrink-0">Geburtsdatum:</span>
          <span className="text-gray-800 dark:text-gray-200">{pass.birthdate}</span>
          <span className="text-muted shrink-0">Blutgruppe:</span>
          <span className="font-semibold text-primary-700 dark:text-primary-400">
            {pass.bloodGroup}
          </span>
          <span className="text-muted shrink-0">Medikamente:</span>
          <span className="text-gray-800 dark:text-gray-200">
            {pass.medications.length ? pass.medications.join(", ") : "Keine"}
          </span>
          <span className="text-muted shrink-0">Allergien:</span>
          <span className="text-gray-800 dark:text-gray-200">{pass.allergies.join(", ")}</span>
          <span className="text-muted shrink-0">Ausweisnr.:</span>
          <span className="font-mono text-gray-800 dark:text-gray-200">{pass.passportNumber}</span>
          <span className="text-muted shrink-0">Land:</span>
          <span className="text-gray-800 dark:text-gray-200">{pass.country}</span>
        </div>
      </div>
    </div>
  );
}

function GedaechtnisSetup({ onLearn, onBack }: { onLearn: () => void; onBack: () => void }) {
  const [passCount, setPassCount] = useState(8);
  const [dbLoading, setDbLoading] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);
  const officialValid = useMemo(() => validateOfficialGedaechtnisExamples(), []);
  const hasOfficial =
    OFFICIAL_GM_EXAMPLES.passes.length > 0 && OFFICIAL_GM_EXAMPLES.questions.length > 0;

  const startOfficial = () => {
    _currentGmPasses = [...OFFICIAL_GM_EXAMPLES.passes];
    _currentGmQuestions = filterValidGedaechtnisQuestions([...OFFICIAL_GM_EXAMPLES.questions]);
    logPoolWarning("gedaechtnis", _currentGmQuestions.length, "offiziell");
    _currentGmIsOfficial = true;
    onLearn();
  };

  const startFromDb = async () => {
    setDbError(null);
    setDbLoading(true);
    try {
      const set = await getOneMerkfahigkeitSet();
      if (set && set.passes.length > 0 && set.questions.length > 0) {
        _currentGmPasses = set.passes;
        _currentGmQuestions = set.questions;
        _currentGmIsOfficial = false;
        onLearn();
      } else {
        const passes = generateAllergyPasses(8);
        const raw = generateGedaechtnisQuestionsFromPasses(passes, 25);
        const questions = filterValidGedaechtnisQuestions(raw);
        if (questions.length > 0) {
          _currentGmPasses = passes;
          _currentGmQuestions = questions;
          _currentGmIsOfficial = false;
          onLearn();
        } else {
          setDbError("Keine gültigen Fragen generiert. Bitte später erneut versuchen.");
        }
      }
    } catch (e) {
      setDbError(e instanceof Error ? e.message : "Fehler beim Laden aus der Datenbank.");
    } finally {
      setDbLoading(false);
    }
  };

  const startTraining = () => {
    _currentGmPasses = generateAllergyPasses(passCount);
    const raw = generateGedaechtnisQuestionsFromPasses(_currentGmPasses, 25);
    _currentGmQuestions = filterValidGedaechtnisQuestions(raw);
    if (_currentGmQuestions.length < raw.length && import.meta.env?.DEV) {
      logPoolWarning("gedaechtnis", _currentGmQuestions.length, "Training");
    }
    _currentGmIsOfficial = false;
    onLearn();
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
      </Button>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Gedächtnis & Merkfähigkeit (Allergiepässe)
      </h1>
      <p className="text-sm text-muted">
        Lernphase: Allergieausweise einprägen. Prüfphase: Fragen A–E. E = „Keine der
        Antwortmöglichkeiten ist richtig.“
      </p>
      <UebungsbeschreibungCard id="kff-merkfaehigkeit" collapsible defaultCollapsed />

      <Card className="border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">🏛️ Offizielle Beispiele</CardTitle>
          <p className="text-sm text-muted">
            Fixe Beispiele aus dem MedAT-PDF (IB_GM_26 o. ä.) – 1:1 übernommen, Reihenfolge wie im
            PDF.
          </p>
        </CardHeader>
        <CardContent>
          {hasOfficial ? (
            <Button className="w-full" size="lg" variant="outline" onClick={startOfficial}>
              <BookOpen className="w-5 h-5 mr-2" /> {OFFICIAL_GM_EXAMPLES.passes.length} Pässe,{" "}
              {OFFICIAL_GM_EXAMPLES.questions.length} Fragen – Lernphase starten
            </Button>
          ) : (
            <p className="text-sm text-amber-700 dark:text-amber-400">
              Noch keine offiziellen Beispiele. PDF in OFFICIAL_GM_EXAMPLES in
              src/data/kffGedaechtnisMedAT.ts eintragen.
            </p>
          )}
          {import.meta.env?.DEV && !officialValid && hasOfficial && (
            <p className="text-xs text-red-600 dark:text-red-400 mt-2">
              Dev-Check: Validierung fehlgeschlagen (z. B. nicht genau 5 Optionen oder correctIndex
              nicht 0–4).
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">🧠 Training</CardTitle>
          <p className="text-sm text-muted">
            Trainingsaufgaben aus der Datenbank (8 Pässe + bis zu 25 Fragen) oder lokal generiert.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button className="w-full" size="lg" onClick={startFromDb} disabled={dbLoading}>
            {dbLoading ? (
              "Lade …"
            ) : (
              <>
                <BarChart3 className="w-5 h-5 mr-2" /> Aus Datenbank starten (8 Pässe + Fragen)
              </>
            )}
          </Button>
          {dbError && <p className="text-sm text-amber-700 dark:text-amber-400">{dbError}</p>}
          <div className="border-t border-border dark:border-gray-700 pt-4">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">
              Fallback: Set lokal erzeugen (Anzahl Pässe)
            </label>
            <div className="flex flex-wrap gap-2">
              {[6, 7, 8, 9, 10].map((n) => (
                <button
                  key={n}
                  onClick={() => setPassCount(n)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    passCount === n
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <Button className="w-full mt-3" size="lg" variant="outline" onClick={startTraining}>
              <Shuffle className="w-5 h-5 mr-2" /> {passCount} Pässe + 25 Fragen (lokal)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function GedaechtnisLearn({ onStart, onBack }: { onStart: () => void; onBack: () => void }) {
  const [learnMinutes, setLearnMinutes] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(learnMinutes * 60);
  const [started, setStarted] = useState(false);
  const passes = useMemo(() => _currentGmPasses, []);
  const isOfficial = _currentGmIsOfficial;

  useEffect(() => {
    if (!started || secondsLeft <= 0) return;
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [started, secondsLeft]);

  const startTimer = () => setStarted(true);
  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <div className="flex items-center gap-2">
          {isOfficial && (
            <Badge variant="default" className="text-[10px]">
              🏛️ Offizielles MedAT-Beispiel
            </Badge>
          )}
          <Badge variant="warning">Lernphase – präge dir alles ein!</Badge>
          {!started ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted">Zeit:</span>
              {[3, 4, 5, 6, 7, 8].map((min) => (
                <button
                  key={min}
                  onClick={() => {
                    setLearnMinutes(min);
                    setSecondsLeft(min * 60);
                  }}
                  className={`px-2 py-1 rounded text-sm ${
                    learnMinutes === min
                      ? "bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200"
                      : "bg-gray-100 dark:bg-gray-800 text-muted"
                  }`}
                >
                  {min} min
                </button>
              ))}
              <Button size="sm" onClick={startTimer}>
                Timer starten
              </Button>
            </div>
          ) : (
            <span className="font-mono text-lg font-semibold text-gray-900 dark:text-gray-100">
              {m}:{s.toString().padStart(2, "0")}
            </span>
          )}
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Allergieausweise</h1>
      <p className="text-sm text-muted">
        Präge dir die folgenden Ausweise ein. In der Prüfphase sind sie nicht mehr sichtbar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {passes.map((p) => (
          <AllergyPassCard key={p.id} pass={p} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button size="lg" onClick={onStart}>
          <Play className="w-5 h-5 mr-2" /> Zur Prüfphase
        </Button>
      </div>
    </div>
  );
}

function GedaechtnisQuiz({ onBack }: { onBack: () => void }) {
  const questions = useMemo(() => _currentGmQuestions, []);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const { addXP, checkStreak, saveQuizResult } = useStore();
  const isOfficial = _currentGmIsOfficial;

  const q = questions[index];
  const allAnswered = questions.every((qu) => answers[qu.id] !== undefined);

  const handleSubmit = () => {
    const score = questions.filter((qu) => answers[qu.id] === qu.correctIndex).length;
    saveQuizResult({
      id: `kff-ged-${Date.now()}`,
      type: "kff",
      subject: "Gedächtnis",
      score,
      total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((qu) => ({
        questionId: qu.id,
        selectedAnswer: qu.options[answers[qu.id] ?? -1] ?? "",
        correct: answers[qu.id] === qu.correctIndex,
      })),
    });
    addXP(score * 10);
    checkStreak();
    setSubmitted(true);
    setIndex(0);
  };

  useKeyboardShortcuts({
    disabled: submitted,
    maxOptions: 5,
    onSelectOption: (idx) => {
      if (q && idx >= 0 && idx < 5) setAnswers((p) => ({ ...p, [q.id]: idx }));
    },
    onConfirm: () => {
      if (index < questions.length - 1) setIndex((i) => i + 1);
      else if (allAnswered) handleSubmit();
    },
    onNext: () => {
      if (index < questions.length - 1) setIndex((i) => i + 1);
    },
    onPrev: () => {
      if (index > 0) setIndex((i) => i - 1);
    },
  });

  if (questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <p className="text-muted">Keine Fragen verfügbar. Bitte starte zuerst die Lernphase.</p>
      </div>
    );
  }

  if (submitted) {
    const score = questions.filter((qu) => answers[qu.id] === qu.correctIndex).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">
              {score}/{questions.length}
            </div>
            <p className="text-muted mt-1">
              {Math.round((score / questions.length) * 100)}% richtig
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
          </CardContent>
        </Card>
        {questions.map((qu, i) => {
          const correct = answers[qu.id] === qu.correctIndex;
          const selectedOpt = qu.options[answers[qu.id] ?? -1];
          return (
            <Card
              key={qu.id}
              className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-medium text-sm">
                    {i + 1}. {qu.question}
                  </span>
                  {isOfficial && qu.source && (
                    <Badge variant="default" className="text-[10px]">
                      🏛️ {qu.source}
                    </Badge>
                  )}
                </div>
                {!correct && selectedOpt !== undefined && (
                  <p className="text-sm text-red-600 dark:text-red-400 ml-7">
                    Deine Antwort: {selectedOpt}
                  </p>
                )}
                <p className="text-sm text-green-700 dark:text-green-400 ml-7">
                  Richtig: {qu.options[qu.correctIndex]}
                </p>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={onBack}>Zurück</Button>
        </div>
      </div>
    );
  }

  if (!q) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 p-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <p className="text-muted">Frage nicht gefunden.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        {isOfficial && (
          <Badge variant="default" className="text-[10px]">
            🏛️ Offizielles MedAT-Beispiel
          </Badge>
        )}
        <Badge variant="danger">Prüfphase</Badge>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted mb-1">
            Frage {index + 1} von {questions.length}
          </p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">
            {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: oi }))}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer flex items-center gap-2 ${
                  answers[q.id] === oi
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <span className="font-semibold shrink-0">{String.fromCharCode(65 + oi)})</span>
                {opt}
                <kbd className="ml-auto text-[10px] bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded text-muted">
                  {oi + 1}
                </kbd>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < questions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)}>
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}

// ==========================================
// IMPLIKATIONEN (Kategorische Syllogismen)
// ==========================================

function impDifficultyLabel(d: 1 | 2 | 3): string {
  return d === 1 ? "Leicht" : d === 2 ? "Mittel" : "Schwer";
}

type ImplikationenMode = "official" | "training";

function ImplikationenQuiz({ onBack }: { onBack: () => void }) {
  const [, setMode] = useState<ImplikationenMode | null>(null);
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [questionCount, setQuestionCount] = useState(10);
  const [questions, setQuestions] = useState<ImplikationTask[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [trainingLoading, setTrainingLoading] = useState(false);
  const [trainingError, setTrainingError] = useState<string | null>(null);
  const {
    addXP,
    checkStreak,
    saveQuizResult,
    skillRating,
    setSkillRating,
    addKffTaskFailed,
    markKffTaskCorrect,
    getKffFailedIdsForDomain,
  } = useStore();

  const safeQuestions = questions || [];
  const currentQ = safeQuestions[index];
  const allAnswered = safeQuestions.every((qu) => answers[qu.id] !== undefined);

  const startOfficial = () => {
    const valid = filterValidImplikationTasks([...OFFICIAL_IMPLICATION_EXAMPLES]);
    setQuestions(valid);
    logPoolWarning("implikationen", valid.length, "offiziell");
    setMode("official");
    setIndex(0);
    setAnswers({});
    setPhase("quiz");
  };

  const startTraining = async () => {
    setTrainingError(null);
    setTrainingLoading(true);
    try {
      const domain = "kff-implikationen" as const;
      const rating = skillRating ?? 500;
      const tasks = await getTasksForUserWithWeakness(
        domain,
        rating,
        questionCount,
        150,
        getKffFailedIdsForDomain(domain)
      );
      const raw = tasks.map((t) => taskToData<ImplikationTask>(t));
      let valid = filterValidImplikationTasks(raw);
      if (valid.length === 0) {
        const levels: (1 | 2 | 3)[] = [1, 2, 3];
        const generated: ImplikationTask[] = [];
        for (let i = 0; i < questionCount; i++) {
          const t = generateImplicationTrainingTask(levels[i % 3]!);
          t.id = t.id ?? `imp-client-${Date.now()}-${i}`;
          generated.push(t);
        }
        valid = shuffleSlice(filterValidImplikationTasks(generated), questionCount);
        if (valid.length === 0) {
          const combined = [
            ...OFFICIAL_IMPLICATION_EXAMPLES,
            ...implikationenTasks.filter(
              (t) => !OFFICIAL_IMPLICATION_EXAMPLES.some((o) => o.id === t.id)
            ),
          ];
          valid = shuffleSlice(filterValidImplikationTasks(combined), questionCount);
        }
        if (import.meta.env?.DEV)
          logPoolWarning("implikationen", valid.length, "Fallback (generiert)");
      }
      setQuestions(valid);
      if (valid.length < raw.length && import.meta.env?.DEV) {
        logPoolWarning("implikationen", valid.length, "Training");
      }
      setMode("training");
      setIndex(0);
      setAnswers({});
      setPhase("quiz");
    } catch (e) {
      setTrainingError(e instanceof Error ? e.message : "Aufgaben konnten nicht geladen werden.");
    } finally {
      setTrainingLoading(false);
    }
  };

  const handleSubmit = () => {
    const score = safeQuestions.filter((qu) => answers[qu.id] === qu.correctAnswer).length;
    const correct = score;
    const wrong = safeQuestions.length - correct;
    const domain = "kff-implikationen" as const;
    safeQuestions.forEach((qu) => {
      if (answers[qu.id] !== qu.correctAnswer) addKffTaskFailed(domain, qu.id);
      else markKffTaskCorrect(domain, qu.id);
    });
    setSkillRating((prev) => Math.max(0, Math.min(1000, prev + correct * 15 - wrong * 20)));
    saveQuizResult({
      id: `kff-imp-${Date.now()}`,
      type: "kff",
      subject: "Implikationen",
      score,
      total: safeQuestions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: safeQuestions.map((qu) => ({
        questionId: qu.id,
        selectedAnswer: qu.options?.[answers[qu.id]] || "",
        correct: answers[qu.id] === qu.correctAnswer,
      })),
    });
    addXP(score * 10);
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  useKeyboardShortcuts({
    disabled: phase !== "quiz",
    maxOptions: currentQ?.options?.length ?? 5,
    onSelectOption: (idx) => {
      if (currentQ && currentQ.options && idx < currentQ.options.length)
        setAnswers((p) => ({ ...p, [currentQ.id]: idx }));
    },
    onConfirm: () => {
      if (index < safeQuestions.length - 1) setIndex((i) => i + 1);
      else if (allAnswered) handleSubmit();
    },
    onNext: () => {
      if (index < safeQuestions.length - 1) setIndex((i) => i + 1);
    },
    onPrev: () => {
      if (index > 0) setIndex((i) => i - 1);
    },
  });

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Implikationen erkennen
        </h1>
        <p className="text-sm text-muted">
          Kategorische Syllogismen: Zwei Prämissen mit "Alle" / "Einige" / "Kein" — welche
          Schlussfolgerung ist korrekt?
        </p>
        <UebungsbeschreibungCard id="kff-implikationen" collapsible defaultCollapsed />

        <Card className="border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              🏛️ Offizielle Beispiele
            </CardTitle>
            <p className="text-sm text-muted">
              Fixe Beispielaufgaben – unverändert, in fester Reihenfolge, niemals vom Generator
              verwendet.
            </p>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="lg" variant="outline" onClick={startOfficial}>
              <BookOpen className="w-5 h-5 mr-2" /> {OFFICIAL_IMPLICATION_EXAMPLES.length}{" "}
              offizielle Beispielaufgaben starten
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">🧪 Training</CardTitle>
            <p className="text-sm text-muted">
              Aufgaben aus der Datenbank – gleiche Logik-Typen, andere Inhalte. Keine Überlappung
              mit den offiziellen Beispielen.
            </p>
            <p className="mt-1">
              <TaskDbCountHint domain="kff-implikationen" />
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">
                Anzahl Fragen
              </label>
              <div className="flex gap-3">
                {[10, 25, 50, 75, 100, 150].map((c) => (
                  <button
                    key={c}
                    onClick={() => setQuestionCount(c)}
                    className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      questionCount === c
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <Button className="w-full" size="lg" onClick={startTraining} disabled={trainingLoading}>
              {trainingLoading ? (
                <>
                  <span className="animate-spin mr-2 inline-block w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full" />
                  Wird geladen…
                </>
              ) : (
                <>
                  <Shuffle className="w-5 h-5 mr-2" /> {questionCount} Trainingsaufgaben laden
                </>
              )}
            </Button>
            {trainingError && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-2">{trainingError}</p>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "result") {
    const score = safeQuestions.filter((qu) => answers[qu.id] === qu.correctAnswer).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">
              {score}/{safeQuestions.length}
            </div>
            <p className="text-muted mt-1">
              {safeQuestions.length ? Math.round((score / safeQuestions.length) * 100) : 0}% richtig
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
          </CardContent>
        </Card>
        {safeQuestions.map((qu, i) => {
          const correct = answers[qu.id] === qu.correctAnswer;
          return (
            <Card
              key={qu.id}
              className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-medium text-sm">{i + 1}.</span>
                  {qu.source ? (
                    <Badge variant="default" className="text-[10px]">
                      🏛️ Offizielles MedAT-Beispiel
                    </Badge>
                  ) : (
                    <Badge variant="info" className="text-[10px]">
                      🧪 Trainingsaufgabe · {impDifficultyLabel(qu.difficulty)}
                    </Badge>
                  )}
                </div>
                {(qu.source || (qu.id.startsWith("imp-") && !qu.id.startsWith("imp-train"))) && (
                  <p className="text-xs text-muted mb-2 ml-7">
                    {qu.source ? `Quelle: ${qu.source}` : "Offizielle Beispielaufgabe"}
                  </p>
                )}
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-7 mb-1">
                  <strong>Prämisse 1:</strong> {qu.premise1}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-7 mb-1">
                  <strong>Prämisse 2:</strong> {qu.premise2}
                </p>
                {!correct && answers[qu.id] !== undefined && (
                  <p className="text-sm text-red-600 dark:text-red-400 ml-7">
                    Deine Antwort: {qu.options?.[answers[qu.id]]}
                  </p>
                )}
                <p className="text-sm text-green-700 dark:text-green-400 ml-7">
                  Richtig: {qu.options?.[qu.correctAnswer]}
                </p>
                <ImplikationSolutionDiagram task={qu} className="ml-7 mb-3" />
                <div className="ml-7 mt-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-400">{qu.explanation}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={onBack}>
            Zurück
          </Button>
          <Button
            onClick={() => {
              setPhase("setup");
              setMode(null);
            }}
          >
            <Shuffle className="w-4 h-4 mr-1" /> Neue Fragen
          </Button>
        </div>
      </div>
    );
  }

  if (!safeQuestions.length) {
    const isTrainingEmpty = phase === "quiz";
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {isTrainingEmpty ? (
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <p className="text-muted">
                Es konnten keine Trainingsaufgaben geladen werden. Der Aufgaben-Pool ist
                möglicherweise noch nicht gefüllt oder es gab einen Verbindungsfehler.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={() => setPhase("setup")}>
                  Zurück zum Setup
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    const valid = filterValidImplikationTasks([...OFFICIAL_IMPLICATION_EXAMPLES]);
                    setQuestions(valid);
                    setIndex(0);
                    setAnswers({});
                    setPhase("quiz");
                  }}
                >
                  <BookOpen className="w-4 h-4 mr-1" /> Offizielle Beispiele starten
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto" />
              <p className="text-sm text-muted mt-4">Fragen werden geladen und geprüft...</p>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  if (!currentQ) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setPhase("setup")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück zum Setup
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-red-600 dark:text-red-400">
              Fehler: Frage nicht geladen. Bitte neu starten.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <span className="text-sm text-muted">
          Frage {index + 1} von {safeQuestions.length}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{
            width: safeQuestions.length ? `${((index + 1) / safeQuestions.length) * 100}%` : "0%",
          }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          {currentQ.source ||
          (currentQ.id.startsWith("imp-") && !currentQ.id.startsWith("imp-train")) ? (
            <Badge variant="default" className="mb-2">
              🏛️ Offizielles MedAT-Beispiel
            </Badge>
          ) : (
            <Badge variant="info" className="mb-2">
              Geprüfte Trainingsaufgabe (MedAT-Logik)
            </Badge>
          )}
          {(currentQ.source ||
            (currentQ.id.startsWith("imp-") && !currentQ.id.startsWith("imp-train"))) && (
            <p className="text-xs text-muted mb-3">
              {currentQ.source ? `Quelle: ${currentQ.source}` : "Offizielle Beispielaufgabe"}
            </p>
          )}
          <p className="text-sm text-muted mb-2">Prämisse 1:</p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4 border-l-4 border-purple-400 pl-3">
            {currentQ.premise1 ?? "Fehler beim Laden"}
          </p>
          <p className="text-sm text-muted mb-2">Prämisse 2:</p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6 border-l-4 border-purple-400 pl-3">
            {currentQ.premise2 ?? "Fehler beim Laden"}
          </p>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
            Welche Schlussfolgerung ist korrekt?
          </p>
          <div className="space-y-2">
            {currentQ.options && Array.isArray(currentQ.options) ? (
              currentQ.options.map((opt, oi) => (
                <button
                  key={oi}
                  onClick={() => setAnswers((p) => ({ ...p, [currentQ.id]: oi }))}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                    answers[currentQ.id] === oi
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + oi)})</span>
                  {opt}
                  <kbd className="float-right text-[10px] bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded text-muted">
                    {oi + 1}
                  </kbd>
                </button>
              ))
            ) : (
              <p className="text-sm text-red-600 dark:text-red-400">
                Fehler: Optionen nicht verfügbar
              </p>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < safeQuestions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)}>
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={safeQuestions.length} />
    </div>
  );
}

// ==========================================
// WORTFLUESSIGKEIT - Offizielle Beispiele vs. Training (strikt getrennt)
// ==========================================

type WortfluessigkeitMode = "official" | "training";

function WortflüssigkeitQuiz({ onBack }: { onBack: () => void }) {
  const [, setMode] = useState<WortfluessigkeitMode | null>(null);
  const [questionCount, setQuestionCount] = useState(10);
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [questions, setQuestions] = useState<WordFluencyTask[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [trainingLoading, setTrainingLoading] = useState(false);
  const [trainingError, setTrainingError] = useState<string | null>(null);
  const {
    addXP,
    checkStreak,
    saveQuizResult,
    skillRating,
    setSkillRating,
    addKffTaskFailed,
    markKffTaskCorrect,
    getKffFailedIdsForDomain,
  } = useStore();

  const safeQuestions = questions || [];
  const currentQ = safeQuestions[index];
  const allAnswered = safeQuestions.every((qu) => {
    const id = qu.id ?? "";
    return answers[id] !== undefined;
  });

  const startOfficial = () => {
    const withIds = OFFICIAL_WF_EXAMPLES.map((t, i) => ({
      ...t,
      id: t.id ?? `wf-off-${i}`,
    }));
    const valid = filterValidWordFluencyTasks(withIds);
    setQuestions(valid);
    logPoolWarning("wortflüssigkeit", valid.length, "offiziell");
    setMode("official");
    setIndex(0);
    setAnswers({});
    setPhase("quiz");
  };

  const startTraining = async () => {
    setTrainingError(null);
    setTrainingLoading(true);
    try {
      const domain = "kff-wortflüssigkeit" as const;
      const rating = skillRating ?? 500;
      const tasks = await getTasksForUserWithWeakness(
        domain,
        rating,
        questionCount,
        150,
        getKffFailedIdsForDomain(domain)
      );
      const raw = tasks.map((t) => taskToData<WordFluencyTask>(t));
      let valid = filterValidWordFluencyTasks(raw);
      if (valid.length === 0) {
        const levels: (1 | 2 | 3)[] = [1, 2, 3];
        const generated: WordFluencyTask[] = [];
        for (let i = 0; i < questionCount; i++) {
          const t = generateWordFluencyTask(levels[i % 3]!);
          t.id = t.id ?? `wf-client-${Date.now()}-${i}`;
          generated.push(t);
        }
        valid = shuffleSlice(filterValidWordFluencyTasks(generated), questionCount);
        if (valid.length === 0) {
          const withIds = OFFICIAL_WF_EXAMPLES.map((t, idx) => ({
            ...t,
            id: t.id ?? `wf-off-${idx}`,
          }));
          const fromLexicon = generateAllWordFluencyTasksFromLexicon().map((t, idx) => ({
            ...t,
            id: t.id ?? `wf-lex-${idx}`,
          }));
          valid = shuffleSlice(
            filterValidWordFluencyTasks([...withIds, ...fromLexicon]),
            questionCount
          );
        }
        if (import.meta.env?.DEV)
          logPoolWarning("wortflüssigkeit", valid.length, "Fallback (generiert)");
      }
      setQuestions(valid);
      if (valid.length < raw.length && import.meta.env?.DEV) {
        logPoolWarning("wortflüssigkeit", valid.length, "Training");
      }
      setMode("training");
      setIndex(0);
      setAnswers({});
      setPhase("quiz");
    } catch (e) {
      setTrainingError(e instanceof Error ? e.message : "Aufgaben konnten nicht geladen werden.");
    } finally {
      setTrainingLoading(false);
    }
  };

  const handleSubmit = () => {
    const score = safeQuestions.filter((qu) => {
      const id = qu.id ?? "";
      const correctOption = qu.options[qu.correctIndex];
      return answers[id] === correctOption;
    }).length;
    const correct = score;
    const wrong = safeQuestions.length - correct;
    const domain = "kff-wortflüssigkeit" as const;
    safeQuestions.forEach((qu) => {
      const id = qu.id ?? "";
      if (answers[id] !== qu.options[qu.correctIndex]) addKffTaskFailed(domain, id);
      else markKffTaskCorrect(domain, id);
    });
    setSkillRating((prev) => Math.max(0, Math.min(1000, prev + correct * 15 - wrong * 20)));
    saveQuizResult({
      id: `kff-wf-${Date.now()}`,
      type: "kff",
      subject: "Wortflüssigkeit",
      score,
      total: safeQuestions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: safeQuestions.map((qu) => ({
        questionId: qu.id ?? "",
        selectedAnswer: answers[qu.id ?? ""] || "",
        correct: answers[qu.id ?? ""] === qu.options[qu.correctIndex],
      })),
    });
    addXP(score * 10);
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  useKeyboardShortcuts({
    disabled: phase !== "quiz",
    maxOptions: currentQ?.options?.length ?? 5,
    onSelectOption: (idx) => {
      if (currentQ && currentQ.options && idx < currentQ.options.length) {
        const id = currentQ.id ?? "";
        setAnswers((p) => ({ ...p, [id]: currentQ.options[idx] }));
      }
    },
    onConfirm: () => {
      if (index < safeQuestions.length - 1) setIndex((i) => i + 1);
      else if (allAnswered) handleSubmit();
    },
    onNext: () => {
      if (index < safeQuestions.length - 1) setIndex((i) => i + 1);
    },
    onPrev: () => {
      if (index > 0) setIndex((i) => i - 1);
    },
  });

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Wortflüssigkeit</h1>
        <p className="text-sm text-muted">
          Die Buchstaben eines Wortes wurden vertauscht. Finde heraus, mit welchem Buchstaben das
          Wort beginnt (oder ob keine der Antworten passt)!
        </p>
        <UebungsbeschreibungCard id="kff-wortfluessigkeit" collapsible defaultCollapsed />

        <Card className="border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              🏛️ Offizielle Beispiele
            </CardTitle>
            <p className="text-sm text-muted">
              Fixe Beispielaufgaben aus dem MedAT-Material – 1:1, unverändert, nicht generiert.
            </p>
          </CardHeader>
          <CardContent>
            {OFFICIAL_WF_EXAMPLES.length > 0 ? (
              <Button className="w-full" size="lg" variant="outline" onClick={startOfficial}>
                <BookOpen className="w-5 h-5 mr-2" /> {OFFICIAL_WF_EXAMPLES.length} offizielle
                Beispielaufgaben starten
              </Button>
            ) : (
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Noch keine offiziellen Beispiele eingetragen. Bitte MedAT-Material öffnen und
                Beispiele in <code className="text-xs">OFFICIAL_WF_EXAMPLES</code> in{" "}
                <code className="text-xs">src/data/kffWortfluessigkeitMedAT.ts</code> 1:1 eintragen.
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">🧪 Training</CardTitle>
            <p className="text-sm text-muted">
              Aufgaben aus der Datenbank – andere Wörter, gleiche Regel. Keine Überlappung mit
              offiziellen Beispielen.
            </p>
            <p className="mt-1">
              <TaskDbCountHint domain="kff-wortflüssigkeit" />
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">
                Anzahl Fragen
              </label>
              <div className="flex gap-3">
                {[10, 25, 50, 75, 100, 150].map((c) => (
                  <button
                    key={c}
                    onClick={() => setQuestionCount(c)}
                    className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      questionCount === c
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <Button className="w-full" size="lg" onClick={startTraining} disabled={trainingLoading}>
              {trainingLoading ? (
                <>
                  <span className="animate-spin mr-2 inline-block w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full" />
                  Wird geladen…
                </>
              ) : (
                <>
                  <Shuffle className="w-5 h-5 mr-2" /> {questionCount} Trainingsaufgaben laden
                </>
              )}
            </Button>
            {trainingError && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-2">{trainingError}</p>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "result") {
    const score = safeQuestions.filter((qu) => {
      const id = qu.id ?? "";
      return answers[id] === qu.options[qu.correctIndex];
    }).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">
              {score}/{safeQuestions.length}
            </div>
            <p className="text-muted mt-1">
              {safeQuestions.length ? Math.round((score / safeQuestions.length) * 100) : 0}% richtig
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
          </CardContent>
        </Card>
        {safeQuestions.map((qu, i) => {
          const id = qu.id ?? "";
          const correct = answers[id] === qu.options[qu.correctIndex];
          const lettersStr = qu.letters.join(" ");
          const isOfficial = !!qu.source || (qu.id?.startsWith("wf-off-") ?? false);
          return (
            <Card
              key={qu.id ?? i}
              className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-mono text-lg tracking-wider">{lettersStr}</span>
                  {isOfficial ? (
                    <Badge variant="default" className="text-[10px]">
                      🏛️ Offizielles MedAT-Beispiel
                    </Badge>
                  ) : (
                    <Badge variant="info" className="text-[10px]">
                      Geprüfte Trainingsaufgabe (MedAT-Logik)
                    </Badge>
                  )}
                </div>
                {qu.source && <p className="text-xs text-muted mb-2">Quelle: {qu.source}</p>}
                {!correct && answers[id] !== undefined && (
                  <p className="text-sm text-red-600 dark:text-red-400 ml-7">
                    Deine Antwort: {answers[id] === "-" ? "Keine passt" : answers[id]}
                  </p>
                )}
                <p className="text-sm text-green-700 dark:text-green-400 ml-7">
                  Lösung: <span className="font-semibold">{qu.solutionWord}</span>
                  {qu.correctIndex < 4 && ` (beginnt mit ${qu.options[qu.correctIndex]})`}
                  {qu.correctIndex === 4 && " (keine der Antworten war richtig)"}
                </p>
                <div className="ml-7 mt-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-400">{qu.explanation}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={onBack}>
            Zurück
          </Button>
          <Button
            onClick={() => {
              setPhase("setup");
              setMode(null);
            }}
          >
            <Shuffle className="w-4 h-4 mr-1" /> Neue Wörter
          </Button>
        </div>
      </div>
    );
  }

  if (!safeQuestions.length || !currentQ) {
    const isTrainingEmpty = phase === "quiz" && questions.length === 0;
    return (
      <div className="max-w-3xl mx-auto space-y-6 p-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {isTrainingEmpty ? (
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <p className="text-muted">
                Es konnten keine Trainingsaufgaben geladen werden. Der Aufgaben-Pool ist
                möglicherweise noch nicht gefüllt oder es gab einen Verbindungsfehler.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={() => setPhase("setup")}>
                  Zurück zum Setup
                </Button>
                {OFFICIAL_WF_EXAMPLES.length > 0 && (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      const withIds = OFFICIAL_WF_EXAMPLES.map((t, i) => ({
                        ...t,
                        id: t.id ?? `wf-off-${i}`,
                      }));
                      const valid = filterValidWordFluencyTasks(withIds);
                      setQuestions(valid);
                      setIndex(0);
                      setAnswers({});
                      setPhase("quiz");
                    }}
                  >
                    <BookOpen className="w-4 h-4 mr-1" /> Offizielle Beispiele starten
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 text-muted">
            <div className="animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full" />
            <p>Wörter werden geladen...</p>
          </div>
        )}
      </div>
    );
  }

  const taskId = currentQ.id ?? "";
  const lettersStr = currentQ.letters.join(" ");
  const isOfficial = !!currentQ.source || (currentQ.id?.startsWith("wf-off-") ?? false);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <span className="text-sm text-muted">
          Wort {index + 1} von {safeQuestions.length}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / safeQuestions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6 text-center">
          {isOfficial ? (
            <Badge variant="default" className="mb-2">
              🏛️ Offizielles MedAT-Beispiel
            </Badge>
          ) : (
            <Badge variant="info" className="mb-2">
              Geprüfte Trainingsaufgabe (MedAT-Logik)
            </Badge>
          )}
          {currentQ.source && <p className="text-xs text-muted mb-3">Quelle: {currentQ.source}</p>}
          <p className="text-sm text-muted mb-4">
            Mit welchem Buchstaben beginnt dieses Wort? (oder: Keine passt)
          </p>
          <p className="text-3xl font-mono font-bold tracking-[0.3em] text-gray-900 dark:text-gray-100 mb-8">
            {lettersStr}
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {(currentQ.options ?? []).map((opt, li) => (
              <button
                key={`${opt}-${li}`}
                onClick={() => setAnswers((p) => ({ ...p, [taskId]: opt }))}
                className={`w-14 h-14 rounded-xl border-2 text-xl font-bold transition-all cursor-pointer ${
                  answers[taskId] === opt
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 scale-110"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105"
                }`}
              >
                {opt === "-" ? "–" : opt}
                <span className="block text-[9px] text-muted font-mono">
                  {String.fromCharCode(65 + li)}
                </span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < safeQuestions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)}>
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={safeQuestions.length} label="Wort" />
    </div>
  );
}

// ==========================================
// FIGUREN ZUSAMMENSETZEN (Offizielle Beispiele + Training, Polygon-basiert)
// ==========================================

const FZ_OPTION_LABELS = ["A", "B", "C", "D", "E"] as const;
const FILL_FZ = "#5eb8f0";

function FigurenQuiz({ onBack }: { onBack: () => void }) {
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [mode, setMode] = useState<"official" | "training" | null>(null);
  const [questionCount, setQuestionCount] = useState(10);
  const [questions, setQuestions] = useState<FigureAssembleTask[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(90);
  const [trainingLoading, setTrainingLoading] = useState(false);
  const [trainingError, setTrainingError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const {
    addXP,
    checkStreak,
    saveQuizResult,
    skillRating,
    setSkillRating,
    addKffTaskFailed,
    markKffTaskCorrect,
    getKffFailedIdsForDomain,
  } = useStore();

  const startOfficial = () => {
    const list = [...OFFICIAL_FZ_EXAMPLES];
    const valid = filterValidFigurenTasks(list);
    setQuestions(valid);
    logPoolWarning("figuren", valid.length, "offiziell");
    setIndex(0);
    setAnswers({});
    setTimeLeft(90);
    setPhase("quiz");
  };

  const startTraining = async () => {
    setTrainingError(null);
    setTrainingLoading(true);
    try {
      const domain = "kff-figuren" as const;
      const rating = skillRating ?? 500;
      const tasks = await getTasksForUserWithWeakness(
        domain,
        rating,
        Math.min(questionCount, 150),
        150,
        getKffFailedIdsForDomain(domain)
      );
      const list = tasks.map((t) => taskToData<FigureAssembleTask>(t));
      let valid = filterValidFigurenTasks(list);
      if (valid.length === 0) {
        const levels: ("easy" | "medium" | "hard")[] = ["easy", "medium", "hard"];
        const seed = Date.now();
        const generated: FigureAssembleTask[] = [];
        for (let i = 0; i < Math.min(questionCount, 150); i++) {
          const t = generateFigurenTrainingSet(1, levels[i % 3]!, seed + i * 7919)[0];
          if (t) generated.push(t);
        }
        valid = shuffleSlice(filterValidFigurenTasks(generated), Math.min(questionCount, 150));
        if (valid.length === 0)
          valid = shuffleSlice(
            filterValidFigurenTasks([...OFFICIAL_FZ_EXAMPLES]),
            Math.min(questionCount, 150)
          );
        if (import.meta.env?.DEV) logPoolWarning("figuren", valid.length, "Fallback (generiert)");
      }
      setQuestions(valid);
      if (valid.length < list.length && import.meta.env?.DEV) {
        logPoolWarning("figuren", valid.length, "Training");
      }
      setIndex(0);
      setAnswers({});
      setTimeLeft(90);
      setPhase("quiz");
    } catch (e) {
      setTrainingError(e instanceof Error ? e.message : "Aufgaben konnten nicht geladen werden.");
    } finally {
      setTrainingLoading(false);
    }
  };

  // Timer logic - reset on each question change
  useEffect(() => {
    if (phase !== "quiz") {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    const t = setTimeout(() => {
      setTimeLeft(90);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) return 0;
          return prev - 1;
        });
      }, 1000);
    }, 0);
    return () => {
      clearTimeout(t);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, index]);

  const correctAnswerLabel = (q: FigureAssembleTask) => FZ_OPTION_LABELS[q.correctIndex];
  const isCorrect = (q: FigureAssembleTask) => answers[q.id] === correctAnswerLabel(q);

  const handleFzSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const domain = "kff-figuren" as const;
    const score = questions.filter(
      (q) => answers[q.id] === FZ_OPTION_LABELS[q.correctIndex]
    ).length;
    questions.forEach((q) => {
      if (answers[q.id] !== FZ_OPTION_LABELS[q.correctIndex]) addKffTaskFailed(domain, q.id);
      else markKffTaskCorrect(domain, q.id);
    });
    const correct = score;
    const wrong = questions.length - correct;
    setSkillRating((prev) => Math.max(0, Math.min(1000, prev + correct * 15 - wrong * 20)));
    saveQuizResult({
      id: `kff-fz-${Date.now()}`,
      type: "kff",
      subject: "Figuren zusammensetzen",
      score,
      total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === FZ_OPTION_LABELS[q.correctIndex],
      })),
    });
    addXP(score * 10);
    checkStreak();
    setPhase("result");
    setIndex(0);
  }, [
    questions,
    answers,
    saveQuizResult,
    addXP,
    checkStreak,
    setSkillRating,
    addKffTaskFailed,
    markKffTaskCorrect,
  ]);

  const goToNext = () => {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
    }
  };

  const goToPrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
    }
  };

  // --- SETUP ---
  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Figuren zusammensetzen
        </h1>
        <p className="text-sm text-muted">
          Welche Figur entsteht aus den Teilen? (Nur Drehen/Verschieben, keine Spiegelung.) 1:30 min
          pro Aufgabe.
        </p>
        <UebungsbeschreibungCard id="kff-figuren" collapsible defaultCollapsed />

        {mode === null ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <Card
              className="cursor-pointer border-2 border-transparent hover:border-rose-500 dark:hover:border-rose-500"
              onClick={() => setMode("official")}
            >
              <CardContent className="p-6">
                <span className="text-2xl" aria-hidden>
                  🏛️
                </span>
                <h2 className="font-semibold text-gray-900 dark:text-gray-100 mt-2">
                  Offizielle MedAT-Beispiele
                </h2>
                <p className="text-sm text-muted mt-1">
                  Aufgaben 1:1 aus dem PDF (IB_FZ_26). Exakt wie in der Prüfung.
                </p>
              </CardContent>
            </Card>
            <Card
              className="cursor-pointer border-2 border-transparent hover:border-rose-500 dark:hover:border-rose-500"
              onClick={() => setMode("training")}
            >
              <CardContent className="p-6">
                <span className="text-2xl" aria-hidden>
                  🧠
                </span>
                <h2 className="font-semibold text-gray-900 dark:text-gray-100 mt-2">Training</h2>
                <p className="text-sm text-muted mt-1">
                  Aufgaben aus der Datenbank – Schwierigkeit passt sich deinem Level an.
                </p>
                <p className="mt-1">
                  <TaskDbCountHint domain="kff-figuren" />
                </p>
              </CardContent>
            </Card>
          </div>
        ) : mode === "official" ? (
          <Card>
            <CardContent className="p-6 space-y-4">
              <Badge variant="info">Offizielle Beispiele</Badge>
              <p className="text-sm text-muted">
                {OFFICIAL_FZ_EXAMPLES.length} Aufgabe{OFFICIAL_FZ_EXAMPLES.length !== 1 ? "n" : ""}{" "}
                aus dem MedAT-PDF.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setMode(null)}>
                  Zurück
                </Button>
                <Button size="lg" onClick={startOfficial}>
                  <Puzzle className="w-5 h-5 mr-2" /> Starten
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">
                  Anzahl Aufgaben
                </label>
                <div className="flex gap-2">
                  {[10, 25, 50, 75, 100, 150].map((c) => (
                    <button
                      key={c}
                      onClick={() => setQuestionCount(c)}
                      className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                        questionCount === c
                          ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20"
                          : "border-border dark:border-gray-700"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setMode(null)} disabled={trainingLoading}>
                  Zurück
                </Button>
                <Button size="lg" onClick={startTraining} disabled={trainingLoading}>
                  {trainingLoading ? (
                    <>
                      <span className="animate-spin mr-2 inline-block w-5 h-5 border-2 border-rose-500 border-t-transparent rounded-full" />
                      Wird geladen…
                    </>
                  ) : (
                    <>
                      <Puzzle className="w-5 h-5 mr-2" /> {questionCount} Aufgaben laden
                    </>
                  )}
                </Button>
              </div>
              {trainingError && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-2">{trainingError}</p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // --- RESULT ---
  if (phase === "result") {
    const score = questions.filter(
      (q) => answers[q.id] === FZ_OPTION_LABELS[q.correctIndex]
    ).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-rose-700 dark:text-rose-400">
              {score}/{questions.length}
            </div>
            <p className="text-muted mt-1">
              {Math.round((score / questions.length) * 100)}% richtig
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
          </CardContent>
        </Card>
        {questions.map((q, i) => {
          const correct = isCorrect(q);
          const selectedLabel = answers[q.id] || "";
          const correctLabel = correctAnswerLabel(q);
          return (
            <Card
              key={q.id}
              className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-medium text-sm">Aufgabe {i + 1}</span>
                  <Badge variant="info" className="text-[10px]">
                    {difficultyLabel(q.difficulty)}
                  </Badge>
                  {q.source && (
                    <span
                      className="text-[10px] text-muted truncate max-w-[180px]"
                      title={q.source}
                    >
                      {q.source}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 ml-7 mb-2 flex-wrap">
                  <div>
                    <p className="text-xs text-muted mb-1">Puzzleteile:</p>
                    {(() => {
                      const { viewBox, paths } = layoutPiecesCompact(q.pieces);
                      return (
                        <svg
                          viewBox={viewBox}
                          {...FIGURE_SVG_ASPECT_PROPS}
                          className="w-32 h-12 sm:w-40 sm:h-14 bg-white dark:bg-gray-900 rounded"
                        >
                          {paths.map((p, pi) => (
                            <path
                              key={pi}
                              d={p.d}
                              fill={FILL_FZ}
                              stroke="#374151"
                              strokeWidth="1.2"
                              transform={p.transform}
                            />
                          ))}
                        </svg>
                      );
                    })()}
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-1">So setzen sich die Teile zusammen:</p>
                    <svg
                      viewBox="0 0 200 200"
                      {...FIGURE_SVG_ASPECT_PROPS}
                      className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700"
                    >
                      {/* Zielform gefüllt */}
                      <path d={polygonToPath(q.target)} fill={FILL_FZ} stroke="none" />
                      {/* Trennlinien zwischen den Teilsteinen */}
                      {q.pieces.map((piece, pi) => (
                        <path
                          key={pi}
                          d={polygonToPath(piece)}
                          fill="none"
                          stroke="#0e7490"
                          strokeWidth="1.5"
                        />
                      ))}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-green-600 dark:text-green-400 mb-1">
                      Richtig ({correctLabel}):
                    </p>
                    {q.correctIndex === 4 ? (
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                        E – Keine der Figuren ist richtig
                      </span>
                    ) : (
                      <svg
                        viewBox="0 0 200 200"
                        {...FIGURE_SVG_ASPECT_PROPS}
                        className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-700"
                      >
                        <path
                          d={polygonToPathScaledToViewBox(
                            q.options[q.correctIndex] as { points: { x: number; y: number }[] }
                          )}
                          fill="#22c55e"
                          stroke="#15803d"
                          strokeWidth="1.2"
                        />
                      </svg>
                    )}
                  </div>
                  {!correct && selectedLabel && (
                    <div>
                      <p className="text-xs text-red-600 dark:text-red-400 mb-1">
                        Deine Antwort ({selectedLabel}):
                      </p>
                      {selectedLabel === "E" ? (
                        <span className="text-xs text-red-600 dark:text-red-400 font-medium">
                          E – Keine der Figuren ist richtig
                        </span>
                      ) : (
                        <svg
                          viewBox="0 0 200 200"
                          {...FIGURE_SVG_ASPECT_PROPS}
                          className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded border border-red-300 dark:border-red-700"
                        >
                          <path
                            d={polygonToPathScaledToViewBox(
                              q.options[
                                FZ_OPTION_LABELS.indexOf(
                                  selectedLabel as "A" | "B" | "C" | "D" | "E"
                                )
                              ] as { points: { x: number; y: number }[] }
                            )}
                            fill="#ef4444"
                            stroke="#b91c1c"
                            strokeWidth="1.2"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                <div className="ml-7 mt-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-400">{q.explanation}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={onBack}>
            Zurück
          </Button>
          <Button
            onClick={() => {
              setPhase("setup");
              setMode(null);
            }}
          >
            <Shuffle className="w-4 h-4 mr-1" /> Neue Aufgaben
          </Button>
        </div>
      </div>
    );
  }

  // --- QUIZ ---
  const fzQ = questions[index];
  if (!fzQ) {
    const isTrainingEmpty = phase === "quiz" && questions.length === 0;
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          Zurück
        </Button>
        {isTrainingEmpty ? (
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <p className="text-muted">
                Es konnten keine Trainingsaufgaben geladen werden. Der Aufgaben-Pool ist
                möglicherweise noch nicht gefüllt oder es gab einen Verbindungsfehler.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setPhase("setup");
                    setMode(null);
                  }}
                >
                  Zurück zum Setup
                </Button>
                {OFFICIAL_FZ_EXAMPLES.length > 0 && (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      const valid = filterValidFigurenTasks([...OFFICIAL_FZ_EXAMPLES]);
                      setQuestions(valid);
                      setIndex(0);
                      setAnswers({});
                      setPhase("quiz");
                    }}
                  >
                    <Puzzle className="w-4 h-4 mr-1" /> Offizielle Beispiele starten
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <p className="text-muted">Keine Aufgabe geladen.</p>
        )}
      </div>
    );
  }
  const fzAllAnswered = questions.every(
    (qu) => answers[qu.id] !== undefined && answers[qu.id] !== ""
  );
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timerColor =
    timeLeft <= 15
      ? "text-red-500"
      : timeLeft <= 30
        ? "text-orange-500"
        : "text-gray-600 dark:text-gray-400";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            Aufgabe {index + 1} von {questions.length}
          </span>
          <div className={`flex items-center gap-1 font-mono text-sm font-semibold ${timerColor}`}>
            <Timer className="w-4 h-4" />
            {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-rose-500 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
        Welche Figur entsteht aus den Teilen? (Nur Drehen/Verschieben, keine Spiegelung.)
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <p className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
              Puzzleteile
            </p>
            <div className="flex flex-wrap gap-4 justify-center py-4 bg-gray-50/50 dark:bg-gray-900/30 rounded-lg">
              {(() => {
                const { viewBox, paths } = layoutPiecesCompact(fzQ.pieces);
                return (
                  <svg
                    viewBox={viewBox}
                    {...FIGURE_SVG_ASPECT_PROPS}
                    className="w-full max-w-md h-24 sm:h-28 mx-auto"
                  >
                    {paths.map((p, pi) => (
                      <path
                        key={pi}
                        d={p.d}
                        fill={FILL_FZ}
                        stroke="#0e7490"
                        strokeWidth="1.2"
                        transform={p.transform}
                      />
                    ))}
                  </svg>
                );
              })()}
            </div>
          </CardContent>
        </Card>
        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
            Antwortoptionen
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-2 gap-3">
            {fzQ.options.map((opt, optIdx) => {
              const label = FZ_OPTION_LABELS[optIdx];
              const selected = answers[fzQ.id] === label;
              return (
                <button
                  key={optIdx}
                  onClick={() => setAnswers((p) => ({ ...p, [fzQ.id]: label }))}
                  className={`flex flex-col items-center justify-center min-h-[90px] p-3 rounded-lg border-2 transition-colors cursor-pointer ${
                    selected
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                    {label}
                  </span>
                  {isOptionE(opt) ? (
                    <span className="text-xs text-center text-muted leading-tight">
                      Keine der Figuren ist richtig
                    </span>
                  ) : (
                    <svg
                      viewBox="0 0 200 200"
                      {...FIGURE_SVG_ASPECT_PROPS}
                      className="w-full max-w-[64px] max-h-[64px] flex-1"
                    >
                      <path
                        d={polygonToPathScaledToViewBox(opt)}
                        fill={FILL_FZ}
                        stroke="#0e7490"
                        strokeWidth="1.2"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={goToPrev} disabled={index === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < questions.length - 1 ? (
          <Button onClick={goToNext}>
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleFzSubmit} disabled={!fzAllAnswered}>
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} label="Aufgabe" />
    </div>
  );
}
