import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Dna,
  Atom,
  Zap,
  Calculator,
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Play,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";
import { getQuestionsBySubject, type Question } from "@/data/bms/index";
import { getSequenceQuestionsBySubject } from "@/data/wissencheckSequences";
import { LogicBuilder } from "@/components/wissencheck/LogicBuilder";
import { playCorrectAnswerSound } from "@/lib/sounds";
import { useStore } from "@/store/useStore";
import { usePageTitle } from "@/hooks/usePageTitle";

const QUESTION_COUNT = 10;
const TIME_LIMIT = 8 * 60; // 8 minutes in seconds

const subjectConfig: Record<
  string,
  { label: string; icon: typeof Dna; color: string; accent: string; ring: string }
> = {
  biologie: {
    label: "Biologie",
    icon: Dna,
    color: "text-primary-700 dark:text-primary-400",
    accent: "bg-primary-600",
    ring: "stroke-primary-500",
  },
  chemie: {
    label: "Chemie",
    icon: Atom,
    color: "text-red-700 dark:text-red-400",
    accent: "bg-red-600",
    ring: "stroke-red-500",
  },
  physik: {
    label: "Physik",
    icon: Zap,
    color: "text-blue-700 dark:text-blue-400",
    accent: "bg-blue-600",
    ring: "stroke-blue-500",
  },
  mathematik: {
    label: "Mathematik",
    icon: Calculator,
    color: "text-violet-700 dark:text-violet-400",
    accent: "bg-violet-600",
    ring: "stroke-violet-500",
  },
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// SVG Score Circle
function ScoreCircle({
  score,
  total,
  ringClass,
}: {
  score: number;
  total: number;
  ringClass: string;
}) {
  const pct = total > 0 ? score / total : 0;
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct);
  return (
    <svg viewBox="0 0 120 120" className="w-36 h-36">
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        strokeWidth="10"
        className="stroke-gray-200 dark:stroke-gray-700"
      />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        className={ringClass}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 60 60)"
        style={{ transition: "stroke-dashoffset 0.8s ease-out" }}
      />
      <text
        x="60"
        y="54"
        textAnchor="middle"
        className="fill-gray-900 dark:fill-gray-100 text-2xl font-bold"
        fontSize="28"
      >
        {score}/{total}
      </text>
      <text
        x="60"
        y="76"
        textAnchor="middle"
        className="fill-gray-500 dark:fill-gray-400 text-xs"
        fontSize="12"
      >
        {Math.round(pct * 100)}%
      </text>
    </svg>
  );
}

export default function WissenCheck() {
  usePageTitle("Wissen-Check");
  const { fach } = useParams<{ fach: string }>();
  const navigate = useNavigate();
  const { saveQuizResult, logActivity, addXP, checkStreak } = useStore();

  const config = fach ? subjectConfig[fach] : undefined;
  const SubjectIcon = config?.icon ?? Dna;

  // Prepare questions once
  const questions = useMemo<Question[]>(() => {
    if (!fach) return [];
    const pool = getQuestionsBySubject(fach);
    const selected = shuffleArray(pool).slice(0, QUESTION_COUNT);
    // Shuffle options for each question
    return selected.map((q) => ({ ...q, options: shuffleArray(q.options) }));
  }, [fach]);

  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");
  const [logicMode, setLogicMode] = useState(false);
  const [logicIndex, setLogicIndex] = useState(0);
  const [logicCorrect, setLogicCorrect] = useState(0);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [expandedQ, setExpandedQ] = useState<string | null>(null);

  const logicQuestions = useMemo(() => (fach ? getSequenceQuestionsBySubject(fach) : []), [fach]);
  const hasLogicQuestions = logicQuestions.length > 0;

  // Timer
  useEffect(() => {
    if (phase !== "quiz") return;
    if (timeLeft <= 0) {
      finishQuiz();
      return;
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, timeLeft]);

  const finishQuiz = useCallback(() => {
    const score = questions.reduce((s, q) => s + (answers[q.id] === q.correctOptionId ? 1 : 0), 0);
    saveQuizResult({
      id: `wc-${fach}-${Date.now()}`,
      type: "bms",
      subject: fach,
      score,
      total: questions.length,
      date: new Date().toISOString().split("T")[0],
      answers: questions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === q.correctOptionId,
      })),
    });
    logActivity(questions.length);
    addXP(score * 5);
    checkStreak();
    setPhase("result");
  }, [questions, answers, fach, saveQuizResult, logActivity, addXP, checkStreak]);

  const selectAnswer = (optionId: string) => {
    if (answers[questions[current].id]) return; // already answered
    const q = questions[current];
    setAnswers((prev) => ({ ...prev, [q.id]: optionId }));
    if (optionId === q.correctOptionId) playCorrectAnswerSound();
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      finishQuiz();
    }
  };

  const resetQuiz = () => {
    setPhase("intro");
    setCurrent(0);
    setAnswers({});
    setTimeLeft(TIME_LIMIT);
    setExpandedQ(null);
  };

  // Subject picker when at /wissencheck (no fach)
  if (!fach) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <BreadcrumbNav
          items={[
            { label: "Dashboard", href: "/" },
            { label: "BMS", href: "/bms" },
            { label: "Wissenscheck" },
          ]}
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Wissenscheck</h1>
          <p className="text-muted mt-1">
            Wähle ein Fach für einen kurzen Quick-Check (10 Fragen, 8 Min).
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(subjectConfig).map(([id, cfg]) => (
            <Card
              key={id}
              className="cursor-pointer hover:shadow-md transition-shadow border-l-4"
              style={{ borderLeftColor: "var(--tw-gradient-from)" }}
              onClick={() => navigate(`/wissencheck/${id}`)}
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${cfg.accent} flex items-center justify-center`}
                >
                  <cfg.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{cfg.label}</h3>
                  <p className="text-xs text-muted">{QUESTION_COUNT} Fragen · 8 Min</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="outline" onClick={() => navigate("/bms")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zu BMS
        </Button>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="max-w-3xl mx-auto py-10 text-center">
        <AlertTriangle className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
        <p className="text-lg text-gray-700 dark:text-gray-300">Unbekanntes Fach.</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate("/wissencheck")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Fach wählen
        </Button>
      </div>
    );
  }

  const score = questions.reduce((s, q) => s + (answers[q.id] === q.correctOptionId ? 1 : 0), 0);

  // ── INTRO ──────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <BreadcrumbNav
          items={[
            { label: "Dashboard", href: "/" },
            { label: "BMS", href: "/bms" },
            { label: `${config.label} Wissenscheck` },
          ]}
        />

        <Card>
          <CardContent className="p-8 text-center space-y-6">
            <div
              className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${config.accent}`}
            >
              <SubjectIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {config.label} Wissenscheck
              </h1>
              <p className="text-muted mt-2">Teste dein Wissen mit einem kurzen Quick-Check.</p>
            </div>
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>{QUESTION_COUNT} Fragen</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>8 Minuten</span>
              </div>
            </div>
            <div className="text-xs text-muted bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
              Die Fragen werden zufällig aus dem gesamten Fragenpool ausgewählt. Beantworte alle
              Fragen innerhalb des Zeitlimits. Nach Ablauf der Zeit wird automatisch abgegeben.
            </div>
            <UebungsbeschreibungCard id="bms-wissencheck" />
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button variant="outline" onClick={() => navigate("/bms")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Button>
              <Button
                onClick={() => setPhase("quiz")}
                className={config.accent + " hover:opacity-90 text-white"}
              >
                <Play className="w-4 h-4 mr-2" />
                Klassischer Check
              </Button>
              {hasLogicQuestions && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setLogicMode(true);
                    setLogicIndex(0);
                    setLogicCorrect(0);
                  }}
                  className="border-2 border-dashed"
                >
                  Reihenfolge üben (Logic-Builder)
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── LOGIC-BUILDER (Reihenfolge) ────────────────────────
  if (logicMode && config && hasLogicQuestions) {
    const logicDone = logicIndex >= logicQuestions.length;
    if (logicDone) {
      return (
        <div className="max-w-3xl mx-auto space-y-6">
          <BreadcrumbNav
            items={[
              { label: "Dashboard", href: "/" },
              { label: "BMS", href: "/bms" },
              { label: `${config.label} · Logic-Builder` },
            ]}
          />
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Logic-Builder abgeschlossen
              </h2>
              <div className="flex justify-center">
                <ScoreCircle
                  score={logicCorrect}
                  total={logicQuestions.length}
                  ringClass={config.ring}
                />
              </div>
              <p className="text-sm text-muted">
                Du hast {logicCorrect} von {logicQuestions.length} Reihenfolgen richtig gelöst.
              </p>
              <div className="flex gap-3 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setLogicMode(false);
                    setLogicIndex(0);
                    setLogicCorrect(0);
                  }}
                >
                  Zurück zum Wissenscheck
                </Button>
                <Button
                  onClick={() => {
                    setLogicMode(true);
                    setLogicIndex(0);
                    setLogicCorrect(0);
                  }}
                  className={config.accent + " text-white hover:opacity-90"}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Nochmal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
    const seqQ = logicQuestions[logicIndex];
    return (
      <div className="max-w-3xl mx-auto space-y-4">
        <BreadcrumbNav
          items={[
            { label: "Dashboard", href: "/" },
            { label: "BMS", href: "/bms" },
            { label: "Wissenscheck", href: `/wissencheck/${fach}` },
            { label: "Logic-Builder" },
          ]}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SubjectIcon className={`w-5 h-5 ${config.color}`} />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {config.label} · Logic-Builder
            </span>
          </div>
          <span className="text-sm text-muted">
            Reihenfolge {logicIndex + 1} von {logicQuestions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`${config.accent} h-2 rounded-full transition-all`}
            style={{ width: `${((logicIndex + 1) / logicQuestions.length) * 100}%` }}
          />
        </div>
        <Card>
          <CardContent className="p-5">
            <LogicBuilder
              question={seqQ}
              accentClass={config.accent}
              onCorrect={() => {
                setLogicCorrect((c) => c + 1);
                setLogicIndex((i) => i + 1);
              }}
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── QUIZ ───────────────────────────────────────────────
  if (phase === "quiz") {
    const q = questions[current];
    const answered = !!answers[q.id];
    const isLast = current === questions.length - 1;
    const timeWarning = timeLeft <= 60;

    return (
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Header: Timer + Progress */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SubjectIcon className={`w-5 h-5 ${config.color}`} />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {config.label} Wissenscheck
            </span>
          </div>
          <div
            className={`flex items-center gap-1.5 font-mono text-sm font-medium px-3 py-1 rounded-lg ${
              timeWarning
                ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            <Clock className="w-4 h-4" />
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted">
            <span>
              Frage {current + 1} von {questions.length}
            </span>
            <span>{Object.keys(answers).length} beantwortet</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`${config.accent} h-2 rounded-full transition-all duration-300`}
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card>
          <CardContent className="p-5 space-y-4">
            <div className="flex items-start gap-3">
              <Badge variant="info" className="shrink-0 mt-0.5">
                {current + 1}/{questions.length}
              </Badge>
              <p className="text-gray-900 dark:text-gray-100 font-medium leading-relaxed">
                {q.text}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2">
              {q.options.map((opt, idx) => {
                const letter = String.fromCharCode(65 + idx); // A, B, C, D, E
                const isSelected = answers[q.id] === opt.id;
                const isCorrect = opt.id === q.correctOptionId;
                let optClass =
                  "border-border dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer";
                if (answered) {
                  if (isCorrect) {
                    optClass = "border-green-500 bg-green-50 dark:bg-green-900/20";
                  } else if (isSelected && !isCorrect) {
                    optClass = "border-red-500 bg-red-50 dark:bg-red-900/20";
                  } else {
                    optClass = "border-border dark:border-gray-700 opacity-60";
                  }
                }
                return (
                  <button
                    key={opt.id}
                    onClick={() => selectAnswer(opt.id)}
                    disabled={answered}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-all flex items-start gap-3 ${optClass} ${
                      !answered ? "active:scale-[0.99]" : ""
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        answered && isCorrect
                          ? "bg-green-500 text-white"
                          : answered && isSelected && !isCorrect
                            ? "bg-red-500 text-white"
                            : isSelected
                              ? `${config.accent} text-white`
                              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {answered && isCorrect ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : answered && isSelected && !isCorrect ? (
                        <XCircle className="w-4 h-4" />
                      ) : (
                        letter
                      )}
                    </span>
                    <span className="text-sm text-gray-800 dark:text-gray-200 pt-0.5">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Explanation after answer */}
            {answered && (
              <div
                className={`text-sm p-3 rounded-lg ${
                  answers[q.id] === q.correctOptionId
                    ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                    : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                }`}
              >
                {q.explanation}
              </div>
            )}

            {/* Next button */}
            {answered && (
              <div className="flex justify-end pt-1">
                <Button
                  onClick={nextQuestion}
                  className={config.accent + " text-white hover:opacity-90"}
                >
                  {isLast ? "Ergebnis anzeigen" : "Nächste Frage"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── RESULT ─────────────────────────────────────────────
  const pct = Math.round((score / questions.length) * 100);
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <BreadcrumbNav
        items={[
          { label: "Dashboard", href: "/" },
          { label: "BMS", href: "/bms" },
          { label: `${config.label} Wissenscheck` },
        ]}
      />

      {/* Score Card */}
      <Card>
        <CardContent className="p-6 text-center space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Ergebnis</h2>
          <div className="flex justify-center">
            <ScoreCircle score={score} total={questions.length} ringClass={config.ring} />
          </div>
          <div>
            <Badge
              variant={pct >= 80 ? "success" : pct >= 50 ? "warning" : "danger"}
              className="text-sm px-3 py-1"
            >
              {pct >= 80 ? "Sehr gut!" : pct >= 50 ? "Gut, weiter üben!" : "Mehr Übung nötig"}
            </Badge>
          </div>
          <p className="text-sm text-muted">
            Du hast {score} von {questions.length} Fragen richtig beantwortet.
          </p>
          <div className="flex gap-3 justify-center pt-2">
            <Button variant="outline" onClick={() => navigate("/bms")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
            <Button onClick={resetQuiz} className={config.accent + " text-white hover:opacity-90"}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Erneut
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Answer Review */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">Deine Antworten</h3>
        {questions.map((q, i) => {
          const selected = answers[q.id] || "";
          const correct = selected === q.correctOptionId;
          const isExpanded = expandedQ === q.id;
          return (
            <Card key={q.id}>
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-4 flex items-center gap-3"
                  onClick={() => setExpandedQ(isExpanded ? null : q.id)}
                >
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                  <span className="text-sm text-gray-800 dark:text-gray-200 flex-1 line-clamp-1">
                    {i + 1}. {q.text}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-muted shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 space-y-2 border-t border-border dark:border-gray-700 pt-3">
                    <div className="space-y-1">
                      {q.options.map((opt) => {
                        const isCorrectOpt = opt.id === q.correctOptionId;
                        const isSelectedOpt = opt.id === selected;
                        return (
                          <div
                            key={opt.id}
                            className={`text-sm p-2 rounded flex items-center gap-2 ${
                              isCorrectOpt
                                ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                                : isSelectedOpt
                                  ? "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                                  : "text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            {isCorrectOpt && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                            {isSelectedOpt && !isCorrectOpt && (
                              <XCircle className="w-3.5 h-3.5 shrink-0" />
                            )}
                            <span>{opt.text}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-xs text-muted bg-gray-50 dark:bg-gray-800/50 rounded p-2">
                      {q.explanation}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
