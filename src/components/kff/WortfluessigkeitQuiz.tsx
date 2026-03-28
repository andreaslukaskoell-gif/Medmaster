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
import { generateWordFluencyTask } from "@/data/kffGenerators";
import { type WordFluencyTask } from "@/data/kffWortfluessigkeitMedAT";
import { WF_TRAINING_POOL_1000 as _WF_RAW_POOL } from "@/data/kffWortfluessigkeit1000";

/** Official MedAT WF: 7–15 letter words (ÖH Wien KFF Skript) */
const WF_TRAINING_POOL_1000 = _WF_RAW_POOL.filter((t) => t.solutionWord.length >= 7);
import { filterValidWordFluencyTasks, logPoolWarning } from "@/data/kffValidation";
import { getTasksForUserWithWeakness, taskToData } from "@/lib/taskDb";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";
import { OfficialInstructionCard } from "@/components/shared/OfficialInstructionCard";
import { OFFICIAL_WF_INSTRUCTION } from "@/data/kffWortfluessigkeitMedAT";
import {
  difficultyForIndex,
  getLastCount,
  saveLastCount,
  shuffleSlice,
  preferUnseen,
  enforceExactCount,
} from "./kffHelpers";

export function WortflüssigkeitQuiz({
  onBack,
  autoStart,
}: {
  onBack: () => void;
  autoStart?: boolean;
}) {
  const [examMode, setExamMode] = useState<ExamMode>("practice");
  const [questionCount, setQuestionCount] = useState(getLastCount("wortfluessigkeit"));
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [questions, setQuestions] = useState<WordFluencyTask[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
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
  const allAnswered = safeQuestions.every((qu) => {
    const id = qu.id ?? "";
    return answers[id] !== undefined;
  });

  const startTraining = async () => {
    saveLastCount("wortfluessigkeit", questionCount);
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
        const levels: [1, 2, 3] = [1, 2, 3];
        const generated: WordFluencyTask[] = [];
        for (let i = 0; i < questionCount; i++) {
          const t = generateWordFluencyTask(difficultyForIndex(i, levels));
          t.id = t.id ?? `wf-gen-${t.solutionWord ?? i}`;
          generated.push(t);
        }
        valid = shuffleSlice(filterValidWordFluencyTasks(generated), questionCount);
        if (valid.length === 0) {
          const fromPool = WF_TRAINING_POOL_1000.map((t, idx) => ({
            ...t,
            id: t.id ?? `wf-1000-${idx}`,
          }));
          valid = shuffleSlice(filterValidWordFluencyTasks(fromPool), questionCount);
        }
        if (import.meta.env?.DEV)
          logPoolWarning("wortflüssigkeit", valid.length, "Fallback (generiert)");
      }
      const seenIds = getKffSeenIdsForDomain("Wortfl");
      // Deduplicate by ID AND by solution word to prevent same word appearing twice
      const uniqueById = [...new Map(valid.map((t) => [t.id, t])).values()];
      const seenWords = new Set<string>();
      const uniqueByWord = uniqueById.filter((t) => {
        const word = (t.solutionWord ?? "").toUpperCase();
        if (!word || seenWords.has(word)) return false;
        seenWords.add(word);
        return true;
      });
      setQuestions(
        enforceExactCount(
          preferUnseen(
            uniqueByWord as (WordFluencyTask & { id: string })[],
            questionCount,
            seenIds
          ),
          questionCount
        )
      );
      if (valid.length < raw.length && import.meta.env?.DEV) {
        logPoolWarning("wortflüssigkeit", valid.length, "Training");
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
      durationMinutes: getMinutes(),
      answers: safeQuestions.map((qu) => ({
        questionId: qu.id ?? "",
        selectedAnswer: answers[qu.id ?? ""] || "",
        correct: answers[qu.id ?? ""] === qu.options[qu.correctIndex],
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
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Wortflüssigkeit</h1>
        <p className="text-sm text-[var(--muted)]">
          Die Buchstaben eines Wortes wurden vertauscht. Finde heraus, mit welchem Buchstaben das
          Wort beginnt (oder ob keine der Antworten passt)!
        </p>
        <UebungsbeschreibungCard id="kff-wortfluessigkeit" collapsible defaultCollapsed />
        <OfficialInstructionCard instruction={OFFICIAL_WF_INSTRUCTION} />

        <Card className="border-[var(--accent)]/30 bg-[var(--accent)]/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Timer className="w-5 h-5" /> Prüfungsmodus
            </CardTitle>
            <p className="text-sm text-[var(--muted)]">
              {EXAM_CONFIG.wortfluessigkeit.questions} Aufgaben ·{" "}
              {EXAM_CONFIG.wortfluessigkeit.timeSeconds / 60} Minuten — wie im echten MedAT.
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
                  const domain = "kff-wortflüssigkeit" as const;
                  const rating = skillRating ?? 500;
                  const count = EXAM_CONFIG.wortfluessigkeit.questions;
                  const tasks = await getTasksForUserWithWeakness(
                    domain,
                    rating,
                    count,
                    150,
                    getKffFailedIdsForDomain(domain)
                  );
                  const raw = tasks.map((t) => taskToData<WordFluencyTask>(t));
                  let valid = filterValidWordFluencyTasks(raw);
                  if (valid.length < count) {
                    const levels: [1, 2, 3] = [1, 2, 3];
                    const generated: WordFluencyTask[] = [];
                    for (let i = 0; i < count - valid.length; i++) {
                      const t = generateWordFluencyTask(difficultyForIndex(i, levels));
                      t.id = t.id ?? `wf-exam-${Date.now()}-${i}`;
                      generated.push(t);
                    }
                    valid = [...valid, ...filterValidWordFluencyTasks(generated)];
                  }
                  if (valid.length < count) {
                    const pool = WF_TRAINING_POOL_1000.map((t, idx) => ({
                      ...t,
                      id: t.id ?? `wf-1000-${idx}`,
                    }));
                    valid = [
                      ...valid,
                      ...shuffleSlice(filterValidWordFluencyTasks(pool), count - valid.length),
                    ];
                  }
                  const seenIds = getKffSeenIdsForDomain("Wortfl");
                  setQuestions(
                    enforceExactCount(
                      preferUnseen(valid as (WordFluencyTask & { id: string })[], count, seenIds),
                      count
                    )
                  );
                  setIndex(0);
                  setAnswers({});
                  setPhase("quiz");
                } catch {
                  const pool = WF_TRAINING_POOL_1000.map((t, idx) => ({
                    ...t,
                    id: t.id ?? `wf-1000-${idx}`,
                  }));
                  const valid = shuffleSlice(
                    filterValidWordFluencyTasks(pool),
                    EXAM_CONFIG.wortfluessigkeit.questions
                  );
                  setQuestions(enforceExactCount(valid, EXAM_CONFIG.wortfluessigkeit.questions));
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
              Aufgaben aus der Datenbank und dem Wörter-Pool – verschiedene Wörter, gleiche Regel.
            </p>
            <p className="mt-1">
              <span className="text-[var(--muted)] text-sm">
                {WF_TRAINING_POOL_1000.length}+ Wörter im Trainingspool verfügbar.
              </span>
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
          const id = qu.id ?? "";
          const correct = answers[id] === qu.options[qu.correctIndex];
          const lettersStr = qu.letters.join(" ");
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
                  <Badge variant="info" className="text-[10px]">
                    Geprüfte Trainingsaufgabe (MedAT-Logik)
                  </Badge>
                </div>
                {qu.source && (
                  <p className="text-xs text-[var(--muted)] mb-2">Quelle: {qu.source}</p>
                )}
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
                <div className="ml-7 mt-2 bg-[var(--surface)] p-3 rounded-lg">
                  <p className="text-xs text-[var(--muted)]">
                    {stripMarkdownAsterisks(qu.explanation)}
                  </p>
                </div>
                <div className="ml-7 mt-2">
                  <QuestionFeedbackButton questionId={id} questionType="kff-wortfluessigkeit" />
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
          <div className="flex flex-col items-center justify-center gap-4 text-[var(--muted)]">
            <div className="animate-spin w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full" />
            <p>Wörter werden geladen...</p>
          </div>
        )}
      </div>
    );
  }

  const taskId = currentQ.id ?? "";
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {examMode === "exam" && (
        <ExamTimer
          totalSeconds={EXAM_CONFIG.wortfluessigkeit.timeSeconds}
          onTimeUp={handleSubmit}
        />
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
            Wort {index + 1} von {safeQuestions.length}
          </span>
        </div>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-[var(--accent)] h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / safeQuestions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6 text-center">
          <Badge variant="info" className="mb-2">
            Geprüfte Trainingsaufgabe (MedAT-Logik)
          </Badge>
          {currentQ.source && (
            <p className="text-xs text-[var(--muted)] mb-3">Quelle: {currentQ.source}</p>
          )}
          <p className="text-sm text-[var(--muted)] mb-4">
            Mit welchem Buchstaben beginnt dieses Wort? (oder: Keine passt)
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center my-2 mb-8">
            {currentQ.letters.map((letter, i) => (
              <div
                key={i}
                className="min-w-[2.5rem] px-2 py-2 border rounded-md text-center font-mono text-lg font-bold border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)]"
              >
                {letter}
              </div>
            ))}
          </div>
          <div className="space-y-2" role="radiogroup" aria-label="Antwortmöglichkeiten">
            {(currentQ.options ?? []).map((opt, li) => (
              <button
                key={`${opt}-${li}`}
                role="radio"
                aria-checked={answers[taskId] === opt}
                onClick={() => setAnswers((p) => ({ ...p, [taskId]: opt }))}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                  answers[taskId] === opt
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "border-[var(--border)] hover:bg-[var(--border)]/50"
                }`}
              >
                <span className="font-semibold mr-2">({String.fromCharCode(65 + li)})</span>
                {opt === "-"
                  ? "Keine der Antwortmöglichkeiten ist richtig."
                  : `Anfangsbuchstabe: ${opt}`}
                <kbd className="float-right text-[10px] bg-[var(--border)] px-1.5 py-0.5 rounded text-[var(--muted)]">
                  {li + 1}
                </kbd>
              </button>
            ))}
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
      <FloatingQuestionCounter current={index + 1} total={safeQuestions.length} label="Wort" />
    </div>
  );
}
