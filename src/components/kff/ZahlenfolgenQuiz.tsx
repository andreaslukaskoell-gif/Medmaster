import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Send, CheckCircle2, XCircle, Shuffle, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import { ExamTimer } from "@/components/shared/ExamTimer";
import { type ExamMode, EXAM_CONFIG } from "@/data/examConfig";
import { generateSequenceTaskSet, type SequenceTask } from "@/data/kffZahlenfolgenMedAT";
import { filterValidSequenceTasks, logPoolWarning } from "@/data/kffValidation";
import { getTasksForUserWithWeakness, taskToData } from "@/lib/taskDb";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";
import { OfficialInstructionCard } from "@/components/shared/OfficialInstructionCard";
import { OFFICIAL_ZF_INSTRUCTION } from "@/data/kffZahlenfolgenMedAT";
import { difficultyLabel } from "@/data/kffFigurenZusammensetzenMedAT";
import {
  getLastCount,
  saveLastCount,
  shuffleSlice,
  preferUnseen,
  TaskDbCountHint,
} from "./kffHelpers";

/** Zahlenfolge für Anzeige: nur Zahlen + genau „?, ?" am Ende (MedAT: immer 2 Lücken). */
function formatZahlenfolgeDisplay(sequence: (number | "?")[] | undefined): string {
  if (!sequence?.length) return "?, ?";
  const numbers = sequence.filter((x): x is number => x !== "?");
  return numbers.length ? `${numbers.join(", ")}, ?, ?` : "?, ?";
}

/** Renders the sequence as evenly-spaced boxes (like the official MedAT paper format). */
function ZahlenfolgeBoxes({ sequence }: { sequence: (number | "?")[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 justify-center my-2">
      {sequence.map((val, i) => (
        <div
          key={i}
          className={`min-w-[3rem] px-2 py-2 border rounded-md text-center font-mono text-base font-semibold ${
            val === "?"
              ? "border-primary-400 dark:border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
              : "border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)]"
          }`}
        >
          {val}
        </div>
      ))}
    </div>
  );
}

type ZahlenfolgenMode = "training";

export function ZahlenfolgenQuiz({
  onBack,
  initialQuestionCount,
  autoStart,
}: {
  onBack: () => void;
  initialQuestionCount?: number;
  autoStart?: boolean;
}) {
  const [mode, setMode] = useState<ZahlenfolgenMode | null>(null);
  const [examMode, setExamMode] = useState<ExamMode>("practice");
  const [questionCount, setQuestionCount] = useState(
    initialQuestionCount ?? getLastCount("zahlenfolgen")
  );
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
    logActivity,
    skillRating,
    setSkillRating,
    addKffTaskFailed,
    markKffTaskCorrect,
    getKffFailedIdsForDomain,
    getKffSeenIdsForDomain,
  } = useStore();
  const getMinutes = useSessionTimer();

  const safeQuestions = questions || [];
  const currentQ = safeQuestions[index];
  const allAnswered = safeQuestions.every((qu) => answers[qu.id] !== undefined);
  const startTraining = async () => {
    saveLastCount("zahlenfolgen", questionCount);
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
        if (import.meta.env?.DEV)
          logPoolWarning("zahlenfolgen", valid.length, "Fallback (generiert)");
      }
      const seenIds = getKffSeenIdsForDomain("Zahlenfolgen");
      setQuestions(preferUnseen(valid, questionCount, seenIds));
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
      durationMinutes: getMinutes(),
      answers: list.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] ?? "",
        correct: answers[q.id] === q.correctOptionId,
      })),
    });
    logActivity(list.length, getMinutes());
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
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Zahlenfolgen</h1>
        <UebungsbeschreibungCard id="kff-zahlenfolgen" collapsible defaultCollapsed />
        <OfficialInstructionCard instruction={OFFICIAL_ZF_INSTRUCTION} />

        <Card className="border-primary-200 dark:border-primary-800/50 bg-primary-50/50 dark:bg-primary-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Timer className="w-5 h-5" /> Prüfungsmodus
            </CardTitle>
            <p className="text-sm text-muted">
              {EXAM_CONFIG.zahlenfolgen.questions} Aufgaben ·{" "}
              {EXAM_CONFIG.zahlenfolgen.timeSeconds / 60} Minuten — wie im echten MedAT.
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
                  const domain = "kff-zahlenfolgen" as const;
                  const rating = skillRating ?? 500;
                  const count = EXAM_CONFIG.zahlenfolgen.questions;
                  const tasks = await getTasksForUserWithWeakness(
                    domain,
                    rating,
                    count,
                    150,
                    getKffFailedIdsForDomain(domain)
                  );
                  const raw = tasks.map((t) => taskToData<SequenceTask>(t));
                  let valid = filterValidSequenceTasks(raw);
                  if (valid.length < count) {
                    const generated = generateSequenceTaskSet(count, Date.now());
                    valid = [
                      ...valid,
                      ...shuffleSlice(filterValidSequenceTasks(generated), count - valid.length),
                    ];
                  }
                  const seenIds = getKffSeenIdsForDomain("Zahlenfolgen");
                  setQuestions(preferUnseen(valid, count, seenIds));
                  setMode("training");
                  setIndex(0);
                  setAnswers({});
                  setPhase("quiz");
                } catch {
                  const generated = generateSequenceTaskSet(
                    EXAM_CONFIG.zahlenfolgen.questions,
                    Date.now()
                  );
                  const valid = filterValidSequenceTasks(generated);
                  setQuestions(valid.slice(0, EXAM_CONFIG.zahlenfolgen.questions));
                  setMode("training");
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
            <p className="text-sm text-muted">
              Aufgaben aus der Datenbank -- Schwierigkeit wird automatisch gemischt (leicht, mittel,
              schwer).
            </p>
            <p className="mt-1">
              <TaskDbCountHint domain="kff-zahlenfolgen" />
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
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
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
                  <Badge variant="info" className="text-[10px]">
                    {difficultyLabel(q.difficulty)}
                  </Badge>
                </div>
                {!correct && answers[q.id] !== undefined && (
                  <p className="text-sm text-red-600 dark:text-red-400 ml-7">
                    Deine Antwort: {selectedLabel(q, answers[q.id])}
                  </p>
                )}
                <p className="text-sm text-green-700 dark:text-green-400 ml-7">
                  Richtige Antwort: {q.correctNext[0]}, {q.correctNext[1]}
                </p>
                <div className="ml-7 mt-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-400">
                    {stripMarkdownAsterisks(q.explanation)}
                  </p>
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
              <Button variant="outline" onClick={onBack}>
                Zurück zum Setup
              </Button>
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
      {examMode === "exam" && (
        <ExamTimer totalSeconds={EXAM_CONFIG.zahlenfolgen.timeSeconds} onTimeUp={handleSubmit} />
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
          <span className="text-sm text-muted">
            Frage {index + 1} von {total}
          </span>
        </div>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
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
          <ZahlenfolgeBoxes sequence={currentQ.sequence} />
          <p className="text-sm text-muted mb-6 text-center">
            Welche zwei Zahlen folgen als nächstes?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options && Array.isArray(currentQ.options) ? (
              currentQ.options.map((opt, oi) => (
                <button
                  key={opt.key}
                  onClick={() => setAnswers((p) => ({ ...p, [currentQ.id]: opt.key }))}
                  className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer text-left ${answers[currentQ.id] === opt.key ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300" : "border-[var(--border)] hover:bg-[var(--border)]/50"}`}
                >
                  <span className="font-semibold mr-2">{opt.key})</span>
                  {optionDisplay(opt)}
                  <kbd className="float-right text-[10px] bg-[var(--border)] px-1.5 py-0.5 rounded text-muted">
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
      <FloatingQuestionCounter current={index + 1} total={total} />
    </div>
  );
}
