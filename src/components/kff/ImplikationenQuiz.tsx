import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Send, CheckCircle2, XCircle, Shuffle, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuestionFeedbackButton } from "@/components/shared/QuestionFeedbackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import { ExamTimer } from "@/components/shared/ExamTimer";
import { type ExamMode, EXAM_CONFIG } from "@/data/examConfig";
import { generateImplicationTrainingTask } from "@/data/kffGenerators";
import {
  implikationenTasks,
  generateImplicationTaskSet,
  type ImplikationTask,
} from "@/data/kffImplikationen";
import { filterValidImplikationTasks, logPoolWarning } from "@/data/kffValidation";
import { getTasksForUserWithWeakness, taskToData } from "@/lib/taskDb";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";
import { OfficialInstructionCard } from "@/components/shared/OfficialInstructionCard";
import { OFFICIAL_IMP_INSTRUCTION } from "@/data/kffImplikationen";
import {
  difficultyForIndex,
  getLastCount,
  saveLastCount,
  shuffleSlice,
  preferUnseen,
  enforceExactCount,
  TaskDbCountHint,
} from "./kffHelpers";

function impDifficultyLabel(d: 1 | 2 | 3): string {
  return d === 1 ? "Leicht" : d === 2 ? "Mittel" : "Schwer";
}

export function ImplikationenQuiz({
  onBack,
  initialQuestionCount,
  autoStart,
}: {
  onBack: () => void;
  initialQuestionCount?: number;
  autoStart?: boolean;
}) {
  const [examMode, setExamMode] = useState<ExamMode>("practice");
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [questionCount, setQuestionCount] = useState(
    initialQuestionCount ?? getLastCount("implikationen")
  );
  const [questions, setQuestions] = useState<ImplikationTask[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [trainingLoading, setTrainingLoading] = useState(false);
  const [trainingError, setTrainingError] = useState<string | null>(null);
  const addXP = useStore((s) => s.addXP);
  const checkStreak = useStore((s) => s.checkStreak);
  const saveQuizResult = useStore((s) => s.saveQuizResult);
  const logActivity = useStore((s) => s.logActivity);
  const skillRating = useStore((s) => s.skillRating);
  const setSkillRating = useStore((s) => s.setSkillRating);
  const addKffTaskFailed = useStore((s) => s.addKffTaskFailed);
  const markKffTaskCorrect = useStore((s) => s.markKffTaskCorrect);
  const getKffFailedIdsForDomain = useStore((s) => s.getKffFailedIdsForDomain);
  const getKffSeenIdsForDomain = useStore((s) => s.getKffSeenIdsForDomain);
  const getMinutes = useSessionTimer();

  const safeQuestions = questions || [];
  const currentQ = safeQuestions[index];
  const allAnswered = safeQuestions.every((qu) => answers[qu.id] !== undefined);

  const startTraining = async () => {
    saveLastCount("implikationen", questionCount);
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
      if (valid.length < questionCount) {
        // Supplement with generated tasks from the new syllogism-based generator
        const needed = questionCount - valid.length;
        const generatedSet = generateImplicationTaskSet(needed);
        const existingIds = new Set(valid.map((t) => t.id));
        const supplement = filterValidImplikationTasks(
          generatedSet.filter((t) => !existingIds.has(t.id))
        );
        valid = [...valid, ...supplement];
        if (import.meta.env?.DEV && supplement.length > 0)
          logPoolWarning("implikationen", valid.length, "Supplement (generateImplicationTaskSet)");
      }
      if (valid.length < questionCount) {
        // Legacy fallback: old generator from kffGenerators
        const levels: [1, 2, 3] = [1, 2, 3];
        const generated: ImplikationTask[] = [];
        const existingIds = new Set(valid.map((t) => t.id));
        for (let i = 0; i < questionCount - valid.length; i++) {
          const t = generateImplicationTrainingTask(difficultyForIndex(i, levels));
          t.id =
            t.id ??
            `imp-gen-${t.premise1?.slice(0, 20)}-${t.premise2?.slice(0, 20)}-${i}`.replace(
              /\s+/g,
              "_"
            );
          if (!existingIds.has(t.id)) {
            existingIds.add(t.id);
            generated.push(t);
          }
        }
        valid = [...valid, ...filterValidImplikationTasks(generated)];
        if (valid.length === 0) {
          valid = shuffleSlice(filterValidImplikationTasks(implikationenTasks), questionCount);
        }
        if (import.meta.env?.DEV)
          logPoolWarning("implikationen", valid.length, "Fallback (legacy generator)");
      }
      // Deduplicate by premise content (not just ID) to prevent identical tasks in same session
      const seenPremises = new Set<string>();
      const uniqueByContent = valid.filter((t) => {
        const key = `${t.premise1}|${t.premise2}`;
        if (seenPremises.has(key)) return false;
        seenPremises.add(key);
        return true;
      });
      const seenIds = getKffSeenIdsForDomain("Implikationen");
      setQuestions(
        enforceExactCount(preferUnseen(uniqueByContent, questionCount, seenIds), questionCount)
      );
      if (valid.length < raw.length && import.meta.env?.DEV) {
        logPoolWarning("implikationen", valid.length, "Training");
      }

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
      durationMinutes: getMinutes(),
      answers: safeQuestions.map((qu) => ({
        questionId: qu.id,
        selectedAnswer: qu.options?.[answers[qu.id]] || "",
        correct: answers[qu.id] === qu.correctAnswer,
      })),
    });
    logActivity(safeQuestions.length, getMinutes());
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

  useEffect(() => {
    if (autoStart && phase === "setup") {
      startTraining();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Implikationen erkennen</h1>
        <p className="text-sm text-[var(--muted)]">
          Kategorische Syllogismen: Zwei Prämissen mit "Alle" / "Einige" / "Kein" — welche
          Schlussfolgerung ist korrekt?
        </p>
        <UebungsbeschreibungCard id="kff-implikationen" collapsible defaultCollapsed />
        <OfficialInstructionCard instruction={OFFICIAL_IMP_INSTRUCTION} />

        <Card className="border-[var(--accent)]/30 bg-[var(--accent)]/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Timer className="w-5 h-5" /> Prüfungsmodus
            </CardTitle>
            <p className="text-sm text-[var(--muted)]">
              {EXAM_CONFIG.implikationen.questions} Aufgaben ·{" "}
              {EXAM_CONFIG.implikationen.timeSeconds / 60} Minuten — wie im echten MedAT.
            </p>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full"
              size="lg"
              onClick={async () => {
                setExamMode("exam");
                setTrainingLoading(true);
                try {
                  const domain = "kff-implikationen" as const;
                  const rating = skillRating ?? 500;
                  const count = EXAM_CONFIG.implikationen.questions;
                  const tasks = await getTasksForUserWithWeakness(
                    domain,
                    rating,
                    count,
                    150,
                    getKffFailedIdsForDomain(domain)
                  );
                  const raw = tasks.map((t) => taskToData<ImplikationTask>(t));
                  let valid = filterValidImplikationTasks(raw);
                  if (valid.length < count) {
                    // Supplement with generated tasks from syllogism-based generator
                    const needed = count - valid.length;
                    const generatedSet = generateImplicationTaskSet(needed);
                    const existingIds = new Set(valid.map((t) => t.id));
                    const supplement = filterValidImplikationTasks(
                      generatedSet.filter((t) => !existingIds.has(t.id))
                    );
                    valid = [...valid, ...supplement];
                  }
                  if (valid.length < count) {
                    // Legacy fallback: old generator
                    const levels: [1, 2, 3] = [1, 2, 3];
                    const generated: ImplikationTask[] = [];
                    const existingIds = new Set(valid.map((t) => t.id));
                    for (let i = 0; i < count - valid.length; i++) {
                      const t = generateImplicationTrainingTask(difficultyForIndex(i, levels));
                      t.id = t.id ?? `imp-exam-${Date.now()}-${i}`;
                      if (!existingIds.has(t.id)) {
                        existingIds.add(t.id);
                        generated.push(t);
                      }
                    }
                    valid = [...valid, ...filterValidImplikationTasks(generated)];
                  }
                  if (valid.length < count) {
                    valid = [
                      ...valid,
                      ...shuffleSlice(
                        filterValidImplikationTasks(implikationenTasks),
                        count - valid.length
                      ),
                    ];
                  }
                  const seenIds = getKffSeenIdsForDomain("Implikationen");
                  setQuestions(enforceExactCount(preferUnseen(valid, count, seenIds), count));

                  setIndex(0);
                  setAnswers({});
                  setPhase("quiz");
                } catch {
                  const count = EXAM_CONFIG.implikationen.questions;
                  // Primary fallback: new syllogism-based generator
                  let fallback = filterValidImplikationTasks(generateImplicationTaskSet(count));
                  if (fallback.length < count) {
                    // Secondary fallback: legacy generator
                    const levels: [1, 2, 3] = [1, 2, 3];
                    const existingIds = new Set(fallback.map((t) => t.id));
                    for (let i = 0; i < count - fallback.length; i++) {
                      const t = generateImplicationTrainingTask(difficultyForIndex(i, levels));
                      t.id = t.id ?? `imp-exam-${Date.now()}-${i}`;
                      if (!existingIds.has(t.id)) {
                        existingIds.add(t.id);
                        fallback.push(t);
                      }
                    }
                    fallback = filterValidImplikationTasks(fallback);
                  }
                  setQuestions(enforceExactCount(fallback.slice(0, count), count));

                  setIndex(0);
                  setAnswers({});
                  setPhase("quiz");
                } finally {
                  setTrainingLoading(false);
                }
              }}
              disabled={trainingLoading}
            >
              <Timer className="w-5 h-5 mr-2" /> Prüfungsmodus starten
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Training</CardTitle>
            <p className="text-sm text-[var(--muted)]">
              Aufgaben aus der Datenbank – verschiedene Logik-Typen und Inhalte.
            </p>
            <p className="mt-1">
              <TaskDbCountHint domain="kff-implikationen" />
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-[var(--text-primary)] mb-3 block">
                Anzahl Fragen
              </label>
              <div className="flex gap-3">
                {[10, 25, 50, 75, 100, 150].map((c) => (
                  <button
                    key={c}
                    onClick={() => setQuestionCount(c)}
                    className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      questionCount === c
                        ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                        : "border-[var(--border)] hover:bg-[var(--border)]/50"
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
                  <span className="animate-spin mr-2 inline-block w-5 h-5 border-2 border-[var(--accent)] border-t-transparent rounded-full" />
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
            <div className="text-4xl font-bold text-[var(--accent)]">
              {score}/{safeQuestions.length}
            </div>
            <p className="text-[var(--muted)] mt-1">
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
                  <Badge variant="info" className="text-[10px]">
                    {impDifficultyLabel(qu.difficulty)}
                  </Badge>
                </div>
                <p className="text-sm text-[var(--text-secondary)] ml-7 mb-1">
                  <strong>Prämisse 1:</strong> {qu.premise1}
                </p>
                <p className="text-sm text-[var(--text-secondary)] ml-7 mb-1">
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
                <div className="ml-7 mt-2 bg-[var(--surface)] p-3 rounded-lg space-y-1">
                  {qu.rulesApplied?.length > 0 && (
                    <p className="text-xs font-medium text-[var(--text-secondary)]">
                      Goldene Regel{qu.rulesApplied.length > 1 ? "n" : ""}:{" "}
                      {qu.rulesApplied.map((r) => `#${r}`).join(", ")}
                    </p>
                  )}
                  <p className="text-xs text-[var(--muted)]">
                    {stripMarkdownAsterisks(qu.explanation)}
                  </p>
                </div>
                <div className="ml-7 mt-2">
                  <QuestionFeedbackButton questionId={qu.id} questionType="kff-implikationen" />
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
              <p className="text-[var(--muted)]">
                Es konnten keine Trainingsaufgaben geladen werden. Der Aufgaben-Pool ist
                möglicherweise noch nicht gefüllt oder es gab einen Verbindungsfehler.
              </p>
              <Button variant="outline" onClick={() => setPhase("setup")}>
                Zurück zum Setup
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[var(--accent)] mx-auto" />
              <p className="text-sm text-[var(--muted)] mt-4">
                Fragen werden geladen und geprüft...
              </p>
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
      {examMode === "exam" && (
        <ExamTimer totalSeconds={EXAM_CONFIG.implikationen.timeSeconds} onTimeUp={handleSubmit} />
      )}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex items-center gap-2">
          {examMode === "exam" && (
            <Badge variant="danger" className="text-[10px]">
              Prüfungsmodus
            </Badge>
          )}
          <span className="text-sm text-[var(--muted)]">
            Frage {index + 1} von {safeQuestions.length}
          </span>
        </div>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-[var(--accent)] h-2 rounded-full transition-all"
          style={{
            width: safeQuestions.length ? `${((index + 1) / safeQuestions.length) * 100}%` : "0%",
          }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <Badge variant="info" className="mb-2">
            Geprüfte Trainingsaufgabe (MedAT-Logik)
          </Badge>
          <div className="bg-[var(--border)]/30 border-l-4 border-[var(--accent)] p-4 rounded-r-lg mb-6 space-y-2">
            <p className="text-base font-medium text-[var(--text-primary)] italic">
              &bdquo;{currentQ.premise1 ?? "Fehler beim Laden"}&ldquo;
            </p>
            <p className="text-base font-medium text-[var(--text-primary)] italic">
              &bdquo;{currentQ.premise2 ?? "Fehler beim Laden"}&ldquo;
            </p>
          </div>
          <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
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
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                      : "border-[var(--border)] hover:bg-[var(--border)]/50"
                  }`}
                >
                  <span className="font-semibold mr-2">({String.fromCharCode(65 + oi)})</span>
                  {opt}
                  {!opt.endsWith(".") && !opt.endsWith("?") ? "." : ""}
                  <kbd className="float-right text-[10px] bg-[var(--border)] px-1.5 py-0.5 rounded text-[var(--muted)]">
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
        {examMode !== "exam" ? (
          <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
          </Button>
        ) : (
          <div />
        )}
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
