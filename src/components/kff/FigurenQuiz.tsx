import { useState, useEffect, useCallback, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle2,
  XCircle,
  Shuffle,
  Timer,
  Puzzle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuestionFeedbackButton } from "@/components/shared/QuestionFeedbackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

import { ExamTimer } from "@/components/shared/ExamTimer";
import { type ExamMode, EXAM_CONFIG } from "@/data/examConfig";
import {
  difficultyLabel,
  generateFigurenTrainingTask,
  SOLUTION_SHAPES,
  polygonToPath,
  polygonToPathScaledToViewBox,
  layoutPiecesCompact,
  FIGURE_SVG_ASPECT_PROPS,
  isOptionE,
  getShapeDisplayName,
  getShapeDisplayNameAkk,
  type FigureAssembleTask,
  OFFICIAL_FZ_INSTRUCTION,
  duplicateGuardClear,
  polygonArea,
} from "@/data/kffFigurenZusammensetzenMedAT";
import { filterValidFigurenTasks, logPoolWarning } from "@/data/kffValidation";
import { getTasksForUserWithWeakness, taskToData } from "@/lib/taskDb";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";
import { OfficialInstructionCard } from "@/components/shared/OfficialInstructionCard";
import {
  difficultyForIndex,
  getLastCount,
  saveLastCount,
  shuffleSlice,
  balancedDifficultySession,
  preferUnseen,
} from "./kffHelpers";

const FZ_OPTION_LABELS = ["A", "B", "C", "D", "E"] as const;
/** Offizielles MedAT-Hellblau (IB FZ 26): Cyan-Hellblau wie im VMC-PDF. */
const FILL_FZ = "#87CEEB";

export function FigurenQuiz({ onBack, autoStart }: { onBack: () => void; autoStart?: boolean }) {
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [examMode, setExamMode] = useState<ExamMode>("practice");
  const [questionCount, setQuestionCount] = useState(getLastCount("figuren"));
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
    logActivity,
    skillRating,
    setSkillRating,
    addKffTaskFailed,
    markKffTaskCorrect,
    getKffFailedIdsForDomain,
    getKffSeenIdsForDomain,
  } = useStore();
  const getMinutes = useSessionTimer();

  const fzQForKeys = questions[index];
  useKeyboardShortcuts({
    disabled: phase !== "quiz" || !fzQForKeys,
    maxOptions: 5,
    onSelectOption: (idx) => {
      if (fzQForKeys && idx < FZ_OPTION_LABELS.length)
        setAnswers((p) => ({ ...p, [fzQForKeys.id]: FZ_OPTION_LABELS[idx] }));
    },
    onNext: () => {
      if (index < questions.length - 1) setIndex((i) => i + 1);
    },
    onPrev: () => {
      if (index > 0) setIndex((i) => i - 1);
    },
  });

  const startTraining = async () => {
    saveLastCount("figuren", questionCount);
    setTrainingError(null);
    setTrainingLoading(true);
    duplicateGuardClear(); // Fresh start — allow all shapes/cuts again
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
      // Filter DB tasks: must pass validator AND have solutionOverlay (reject stale data)
      let valid = filterValidFigurenTasks(list).filter(
        (t) => t.solutionOverlay && t.solutionOverlay.lines.length >= 1
      );
      const target = Math.min(questionCount, 150);
      // Supplement: always generate to fill missing shapes, even if DB has enough total tasks
      const dbShapes = new Set(valid.map((t) => t.targetShapeId).filter(Boolean));
      const missingShapes = SOLUTION_SHAPES.filter((s) => !dbShapes.has(s));
      if (valid.length < target || missingShapes.length > 0) {
        duplicateGuardClear(); // Clear — pool filling may have consumed guard slots
        const levels: ["easy", "medium", "hard"] = ["easy", "medium", "hard"];
        const seed = Date.now() * 1000 + Math.floor(Math.random() * 999);
        const generated: FigureAssembleTask[] = [];
        const numShapes = SOLUTION_SHAPES.length;
        // Generate enough for missing shapes even if DB has most tasks
        const needed = Math.max(target - valid.length, missingShapes.length * 7);
        // Shuffled shape order per session — each cycle visits all shapes in random order
        const shapeOrder: number[] = [];
        const totalGen = Math.max((needed + 10) * 3, numShapes * 15);
        const fullCycles = Math.ceil(totalGen / numShapes);
        for (let c = 0; c < fullCycles; c++) {
          const cycle = Array.from({ length: numShapes }, (_, k) => k);
          for (let j = cycle.length - 1; j > 0; j--) {
            const r = Math.floor(Math.random() * (j + 1));
            [cycle[j], cycle[r]] = [cycle[r], cycle[j]];
          }
          shapeOrder.push(...cycle);
        }
        for (let i = 0; i < totalGen; i++) {
          try {
            const requestedShape = SOLUTION_SHAPES[shapeOrder[i] % numShapes];
            const t = generateFigurenTrainingTask(
              difficultyForIndex(i, levels),
              seed + i * 7919,
              shapeOrder[i]
            );
            if (t && t.targetShapeId === requestedShape) generated.push(t);
          } catch {
            /* skip failed generation */
          }
        }
        // Quality filter: reject degenerate tasks only
        const qualityFiltered = generated.filter((t) => {
          if (t.pieces.length < 2) return false;
          const areas = t.pieces.map((p) => polygonArea(p));
          const maxA = Math.max(...areas);
          const minA = Math.min(...areas);
          const ratio = minA > 0 ? maxA / minA : 999;
          if (t.pieces.length === 2 && ratio < 1.8) return false;
          if (t.pieces.length >= 3 && ratio < 1.5) return false;
          if (ratio > 10) return false;
          return true;
        });
        // Balance: cap each shape to maxPerShape to prevent dominance
        const validGen = filterValidFigurenTasks(qualityFiltered);
        const maxPerShape = Math.max(2, Math.ceil((needed + 5) / numShapes));
        const shapeCounts: Record<string, number> = {};
        const balanced: FigureAssembleTask[] = [];
        for (const t of validGen) {
          const s = t.targetShapeId ?? "unknown";
          shapeCounts[s] = (shapeCounts[s] ?? 0) + 1;
          if (shapeCounts[s]! <= maxPerShape) balanced.push(t);
        }
        // Fill remaining with least-represented shapes only (prevent dominant shapes flooding)
        if (balanced.length < needed) {
          const remaining = validGen.filter((t) => !balanced.includes(t));
          // Sort by shape frequency (prefer underrepresented shapes)
          remaining.sort((a, b) => {
            const ca = shapeCounts[a.targetShapeId ?? ""] ?? 0;
            const cb = shapeCounts[b.targetShapeId ?? ""] ?? 0;
            return ca - cb;
          });
          for (const t of remaining) {
            balanced.push(t);
            if (balanced.length >= needed + 5) break;
          }
        }
        valid = [...valid, ...balanced];
        if (valid.length === 0) valid = shuffleSlice(filterValidFigurenTasks([]), target);
        if (import.meta.env?.DEV) logPoolWarning("figuren", valid.length, "Supplement (generiert)");
      }
      // Balance shape distribution across ALL tasks (DB + generated) to prevent DB bias
      {
        // Prefer unique shapes: allow repeat only when target > numShapes
        const finalMaxPerShape = Math.max(1, Math.ceil(target / SOLUTION_SHAPES.length));
        const finalShapeCounts: Record<string, number> = {};
        const finalBalanced: FigureAssembleTask[] = [];
        // Shuffle to avoid always picking DB tasks first
        const shuffled = [...valid].sort(() => Math.random() - 0.5);
        for (const t of shuffled) {
          const s = t.targetShapeId ?? "unknown";
          finalShapeCounts[s] = (finalShapeCounts[s] ?? 0) + 1;
          if (finalShapeCounts[s]! <= finalMaxPerShape) finalBalanced.push(t);
        }
        // Fill remaining with least-represented shapes
        if (finalBalanced.length < target) {
          const rest = shuffled.filter((t) => !finalBalanced.includes(t));
          rest.sort((a, b) => {
            const ca = finalShapeCounts[a.targetShapeId ?? ""] ?? 0;
            const cb = finalShapeCounts[b.targetShapeId ?? ""] ?? 0;
            return ca - cb;
          });
          for (const t of rest) {
            finalBalanced.push(t);
            if (finalBalanced.length >= target + 5) break;
          }
        }
        valid = finalBalanced;
      }
      const seenIds = getKffSeenIdsForDomain("Figuren");
      const fresh = preferUnseen(valid, target, seenIds);
      setQuestions(balancedDifficultySession(fresh, target, (t) => t.difficulty));
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
      durationMinutes: getMinutes(),
      answers: questions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === FZ_OPTION_LABELS[q.correctIndex],
      })),
    });
    logActivity(questions.length, getMinutes());
    addXP(score * 10);
    checkStreak();
    setPhase("result");
    setIndex(0);
  }, [
    questions,
    answers,
    saveQuizResult,
    logActivity,
    getMinutes,
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

  useEffect(() => {
    if (autoStart && phase === "setup") {
      startTraining();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // --- SETUP ---
  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Figuren zusammensetzen</h1>
        <p className="text-sm text-[var(--muted)]">
          Welche Figur entsteht aus den Teilen? (Nur Drehen/Verschieben, keine Spiegelung.) 1:30 min
          pro Aufgabe.
        </p>
        <UebungsbeschreibungCard id="kff-figuren" collapsible defaultCollapsed />
        <OfficialInstructionCard instruction={OFFICIAL_FZ_INSTRUCTION} />

        <Card className="border-[var(--accent)]/30 bg-[var(--accent)]/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Timer className="w-5 h-5" /> Prüfungsmodus
            </CardTitle>
            <p className="text-sm text-[var(--muted)]">
              {EXAM_CONFIG.figuren.questions} Aufgaben · {EXAM_CONFIG.figuren.timeSeconds / 60}{" "}
              Minuten gesamt — wie im echten MedAT (kein Timer pro Frage).
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
                  const domain = "kff-figuren" as const;
                  const rating = skillRating ?? 500;
                  const count = EXAM_CONFIG.figuren.questions;
                  const tasks = await getTasksForUserWithWeakness(
                    domain,
                    rating,
                    count,
                    150,
                    getKffFailedIdsForDomain(domain)
                  );
                  const list = tasks.map((t) => taskToData<FigureAssembleTask>(t));
                  let valid = filterValidFigurenTasks(list).filter(
                    (t) => t.solutionOverlay && t.solutionOverlay.lines.length >= 1
                  );
                  if (valid.length < count) {
                    const levels: ["easy", "medium", "hard"] = ["easy", "medium", "hard"];
                    const seed = Date.now() * 1000 + Math.floor(Math.random() * 999);
                    const generated: FigureAssembleTask[] = [];
                    const numShapes = SOLUTION_SHAPES.length;
                    for (let i = 0; i < count - valid.length; i++) {
                      try {
                        const t = generateFigurenTrainingTask(
                          difficultyForIndex(i, levels),
                          seed + i * 7919,
                          i % numShapes
                        );
                        if (t) generated.push(t);
                      } catch {
                        /* skip */
                      }
                    }
                    valid = [...valid, ...filterValidFigurenTasks(generated)];
                  }
                  if (valid.length < count)
                    valid = [
                      ...valid,
                      ...shuffleSlice(filterValidFigurenTasks([]), count - valid.length),
                    ];
                  setQuestions(balancedDifficultySession(valid, count, (t) => t.difficulty));
                  setIndex(0);
                  setAnswers({});
                  setPhase("quiz");
                } catch {
                  const levels: ["easy", "medium", "hard"] = ["easy", "medium", "hard"];
                  const seed = Date.now() * 1000 + Math.floor(Math.random() * 999);
                  const generated: FigureAssembleTask[] = [];
                  const numShapes = SOLUTION_SHAPES.length;
                  for (let i = 0; i < EXAM_CONFIG.figuren.questions; i++) {
                    try {
                      const t = generateFigurenTrainingTask(
                        difficultyForIndex(i, levels),
                        seed + i * 7919,
                        i % numShapes
                      );
                      if (t) generated.push(t);
                    } catch {
                      /* skip */
                    }
                  }
                  setQuestions(
                    balancedDifficultySession(
                      filterValidFigurenTasks(generated),
                      EXAM_CONFIG.figuren.questions,
                      (t) => t.difficulty
                    )
                  );
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
          <CardContent className="p-6 space-y-6">
            <div>
              <label className="text-sm font-medium text-[var(--text-primary)] mb-2 block">
                Anzahl Aufgaben
              </label>
              <div className="flex gap-2">
                {[10, 25, 50, 75, 100, 150].map((c) => (
                  <button
                    key={c}
                    onClick={() => setQuestionCount(c)}
                    className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      questionCount === c
                        ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                        : "border-[var(--border)]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Button size="lg" onClick={startTraining} disabled={trainingLoading}>
                {trainingLoading ? (
                  <>
                    <span className="animate-spin mr-2 inline-block w-5 h-5 border-2 border-[var(--accent)] border-t-transparent rounded-full" />
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
            <div className="text-4xl font-bold text-[var(--accent)]">
              {score}/{questions.length}
            </div>
            <p className="text-[var(--muted)] mt-1">
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
                      className="text-[10px] text-[var(--muted)] truncate max-w-[180px]"
                      title={q.source}
                    >
                      {q.source}
                    </span>
                  )}
                </div>
                {/* Assembly demonstration: large, clear visualization */}
                <div className="ml-7 mb-4">
                  <p className="text-sm font-medium text-[var(--text-secondary)] mb-2">
                    So setzen sich die Teile zusammen:
                  </p>
                  <div className="flex items-center gap-3 sm:gap-6 bg-[var(--border)]/30 rounded-xl p-4 border border-[var(--border)]">
                    {/* Puzzleteile — larger */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[var(--muted)] mb-1 uppercase tracking-wider">
                        {q.pieces.length} Teile
                      </p>
                      {(() => {
                        const { viewBox, paths } = layoutPiecesCompact(q.pieces);
                        return (
                          <svg
                            viewBox={viewBox}
                            {...FIGURE_SVG_ASPECT_PROPS}
                            className="w-full h-20 sm:h-28"
                          >
                            {paths.map((p, pi) => (
                              <path
                                key={pi}
                                d={p.d}
                                fill={FILL_FZ}
                                stroke="#333"
                                strokeWidth="0.8"
                                transform={p.transform}
                              />
                            ))}
                          </svg>
                        );
                      })()}
                    </div>
                    {/* Arrow */}
                    <div className="flex flex-col items-center gap-0.5 shrink-0">
                      <span className="text-2xl text-[var(--muted)]">→</span>
                    </div>
                    {/* Target shape with cut lines — much larger and prominent */}
                    <div className="shrink-0">
                      <p className="text-xs font-medium text-[var(--muted)] mb-1 uppercase tracking-wider">
                        {getShapeDisplayName(q.targetShapeId)}
                      </p>
                      <svg
                        viewBox="0 0 200 200"
                        {...FIGURE_SVG_ASPECT_PROPS}
                        className="w-28 h-28 sm:w-36 sm:h-36"
                      >
                        <path
                          d={polygonToPath(q.target)}
                          fill={FILL_FZ}
                          stroke="#333"
                          strokeWidth="1"
                        />
                        {q.solutionOverlay?.lines.map((line, li) => (
                          <line
                            key={li}
                            x1={line.from.x}
                            y1={line.from.y}
                            x2={line.to.x}
                            y2={line.to.y}
                            stroke="#666"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray="4 3"
                          />
                        ))}
                      </svg>
                    </div>
                  </div>
                  <p className="text-[11px] text-[var(--muted)] mt-1.5 ml-1">
                    {q.solutionOverlay?.lines.length
                      ? "Die gestrichelten Linien zeigen, wo die Teile zusammenstoßen."
                      : "Teile zusammengesetzt = Zielfigur"}
                  </p>
                </div>
                {/* Answer comparison: correct vs user's choice — side by side, larger */}
                <div className="ml-7 mb-3 flex items-start gap-4 sm:gap-6 flex-wrap">
                  <div>
                    <p className="text-xs text-green-700 dark:text-green-400 font-semibold mb-1.5">
                      ✓ Richtig: {correctLabel}
                      {q.correctIndex !== 4 && ` — ${getShapeDisplayName(q.targetShapeId)}`}
                    </p>
                    {q.correctIndex === 4 ? (
                      <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-400 dark:border-green-700">
                        <span className="text-sm text-center text-green-700 dark:text-green-400 font-medium px-3">
                          E – Keine passt
                        </span>
                      </div>
                    ) : (
                      <svg
                        viewBox="0 0 200 200"
                        {...FIGURE_SVG_ASPECT_PROPS}
                        className="w-24 h-24 sm:w-32 sm:h-32 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-400 dark:border-green-700"
                      >
                        <path
                          d={polygonToPathScaledToViewBox(
                            q.options[q.correctIndex] as { points: { x: number; y: number }[] }
                          )}
                          fill="#22c55e"
                          stroke="#15803d"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                  </div>
                  {!correct && selectedLabel && (
                    <div>
                      <p className="text-xs text-red-700 dark:text-red-400 font-semibold mb-1.5">
                        ✗ Deine Antwort: {selectedLabel}
                      </p>
                      {selectedLabel === "E" ? (
                        <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-400 dark:border-red-700">
                          <span className="text-sm text-center text-red-700 dark:text-red-400 font-medium px-3">
                            E – Keine passt
                          </span>
                        </div>
                      ) : (
                        <svg
                          viewBox="0 0 200 200"
                          {...FIGURE_SVG_ASPECT_PROPS}
                          className="w-24 h-24 sm:w-32 sm:h-32 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-400 dark:border-red-700"
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
                            strokeWidth="2"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                {/* Explanation — specific, pedagogically clear */}
                <div className="ml-7 mt-2 bg-[var(--surface)] p-3.5 rounded-lg space-y-1.5">
                  <p className="text-xs font-medium text-[var(--text-secondary)]">
                    {(() => {
                      const name = getShapeDisplayNameAkk(q.targetShapeId);
                      const n = q.pieces.length;
                      return q.correctIndex === 4
                        ? `Keine der Figuren A–D ist korrekt. Die ${n} Teile ergeben zusammengesetzt ${name} — diese Form ist aber nicht unter den Optionen A–D.`
                        : `Die ${n} Teile ergeben zusammengesetzt ${name} (Option ${correctLabel}).`;
                    })()}
                  </p>
                  <p className="text-[11px] text-[var(--muted)]">
                    {correct
                      ? "Gut erkannt! Achte auf die Gesamtfläche und die Winkel der Teile."
                      : q.correctIndex === 4
                        ? "Tipp: Prüfe zuerst die Gesamtfläche. Wenn kein Umriss A–D flächengleich ist, wähle E."
                        : `Tipp: Vergleiche die Gesamtfläche und den Umriss — nur ${correctLabel} stimmt mit den ${q.pieces.length} Teilen überein. Die gestrichelten Linien oben zeigen die exakten Schnittstellen.`}
                  </p>
                </div>
                <div className="ml-7 mt-2">
                  <QuestionFeedbackButton questionId={q.id} questionType="kff-figuren" />
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
              <p className="text-[var(--muted)]">
                Es konnten keine Trainingsaufgaben geladen werden. Der Aufgaben-Pool ist
                möglicherweise noch nicht gefüllt oder es gab einen Verbindungsfehler.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setPhase("setup");
                }}
              >
                Zurück zum Setup
              </Button>
            </CardContent>
          </Card>
        ) : (
          <p className="text-[var(--muted)]">Keine Aufgabe geladen.</p>
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
        ? "text-[var(--warning)]"
        : "text-[var(--muted)]";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {examMode === "exam" && (
        <ExamTimer totalSeconds={EXAM_CONFIG.figuren.timeSeconds} onTimeUp={handleFzSubmit} />
      )}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex items-center gap-3">
          {examMode === "exam" && (
            <Badge variant="danger" className="text-[10px]">
              Prüfungsmodus
            </Badge>
          )}
          <span className="text-sm text-[var(--muted)]">
            Aufgabe {index + 1} von {questions.length}
          </span>
          {examMode !== "exam" && (
            <div
              className={`flex items-center gap-1 font-mono text-sm font-semibold ${timerColor}`}
            >
              <Timer className="w-4 h-4" />
              {minutes}:{seconds.toString().padStart(2, "0")}
            </div>
          )}
        </div>
      </div>

      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-[var(--accent)] h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      <p className="text-sm font-medium text-[var(--text-primary)]">
        Welche Figur entsteht aus den Teilen? (Nur Drehen/Verschieben, keine Spiegelung.)
      </p>
      {/* Puzzleteile — oben, zentriert (wie offizielles IB FZ 26 Layout) */}
      <div className="flex justify-center py-6 bg-[var(--border)]/20 rounded-xl">
        {(() => {
          const { viewBox, paths } = layoutPiecesCompact(fzQ.pieces);
          return (
            <svg
              viewBox={viewBox}
              {...FIGURE_SVG_ASPECT_PROPS}
              className="w-full max-w-lg h-28 sm:h-36 mx-auto"
            >
              {paths.map((p, pi) => (
                <path
                  key={pi}
                  d={p.d}
                  fill={FILL_FZ}
                  stroke="#222"
                  strokeWidth="1"
                  transform={p.transform}
                />
              ))}
            </svg>
          );
        })()}
      </div>

      {/* Optionen A–E — horizontal in einer Reihe (wie offizielles PDF) */}
      <div className="grid grid-cols-5 gap-3 mt-4">
        {fzQ.options.map((opt, optIdx) => {
          const label = FZ_OPTION_LABELS[optIdx];
          const selected = answers[fzQ.id] === label;
          return (
            <button
              key={optIdx}
              onClick={() => setAnswers((p) => ({ ...p, [fzQ.id]: label }))}
              className={`flex flex-col items-center justify-center min-h-[110px] p-3 rounded-lg border-2 transition-colors cursor-pointer ${
                selected
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                  : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--border)]"
              }`}
            >
              {isOptionE(opt) ? (
                <span className="text-xs text-center text-[var(--muted)] leading-tight px-1">
                  Keine der Antwortmöglichkeiten ist richtig.
                </span>
              ) : (
                <svg
                  viewBox="0 0 200 200"
                  {...FIGURE_SVG_ASPECT_PROPS}
                  className="w-full max-w-[80px] max-h-[80px] flex-1"
                >
                  <path
                    d={polygonToPathScaledToViewBox(opt)}
                    fill={FILL_FZ}
                    stroke="#222"
                    strokeWidth="1"
                  />
                </svg>
              )}
              <span className="text-sm font-bold text-[var(--muted)] mt-1">{label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between">
        {examMode !== "exam" ? (
          <Button variant="outline" onClick={goToPrev} disabled={index === 0}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
          </Button>
        ) : (
          <div />
        )}
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
