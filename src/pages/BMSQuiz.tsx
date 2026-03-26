import { useState, useMemo, useRef, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Send,
  Flag,
  SkipForward,
} from "lucide-react";
import { AiTutorChat, AiTutorButton } from "@/components/AiTutorChat";
import { QuestionFeedbackButton } from "@/components/shared/QuestionFeedbackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Confetti } from "@/components/ui/confetti";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { getQuestionsBySubject, type Question } from "@/data/bms/index";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { useAdaptiveStore, getStichwortForQuestion } from "@/store/adaptiveLearning";
import { getStrategieTipp, getDirectStichwortId } from "@/data/questions/index";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import { ShareResultButton } from "@/components/shared/ShareResultButton";
import { getQuizShareText } from "@/lib/shareUtils";
import { trackQuizComplete } from "@/lib/analytics";
import { trackEvent } from "@/lib/analyticsTracker";

const subjectColors: Record<string, { bg: string; text: string; label: string }> = {
  biologie: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-400",
    label: "Biologie",
  },
  chemie: {
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-700 dark:text-red-400",
    label: "Chemie",
  },
  physik: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-400",
    label: "Physik",
  },
  mathematik: {
    bg: "bg-violet-100 dark:bg-violet-900/30",
    text: "text-violet-700 dark:text-violet-400",
    label: "Mathematik",
  },
};

interface Props {
  subject: string;
  onBack: () => void;
  questionCount?: number;
}

export default function BMSQuiz({ subject, onBack, questionCount }: Props) {
  const getMinutes = useSessionTimer();
  const { recordAnswer, getAdaptiveQuestions } = useAdaptiveStore();

  const questions = useMemo(() => {
    if (subject === "gemischt") {
      return getAdaptiveQuestions(questionCount ?? 20, undefined, { progressive: true });
    }
    const adaptive = getAdaptiveQuestions(
      50,
      subject as "biologie" | "chemie" | "physik" | "mathematik",
      { progressive: true }
    );
    if (adaptive.length > 0) return adaptive;
    return getQuestionsBySubject(subject);
  }, [subject, questionCount, getAdaptiveQuestions]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const questionStartRef = useRef<number>(0);
  const questionTimesRef = useRef<Record<string, number>>({});

  useEffect(() => {
    questionStartRef.current = Date.now();
  }, [currentIndex]);
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [aiTutorQ, setAiTutorQ] = useState<{
    question: (typeof questions)[0];
    userAnswer: string;
  } | null>(null);
  const addXP = useStore((s) => s.addXP);
  const checkStreak = useStore((s) => s.checkStreak);
  const saveQuizResult = useStore((s) => s.saveQuizResult);
  const logActivity = useStore((s) => s.logActivity);
  const flaggedQuestions = useStore((s) => s.flaggedQuestions);
  const toggleFlagQuestion = useStore((s) => s.toggleFlagQuestion);
  const updateSpacedRepetition = useStore((s) => s.updateSpacedRepetition);

  const currentQuestion = questions[currentIndex];
  const allAnswered = questions.every((q) => answers[q.id]);
  const isFlagged = currentQuestion ? flaggedQuestions.includes(currentQuestion.id) : false;

  // Keyboard shortcuts
  useKeyboardShortcuts({
    disabled: submitted,
    maxOptions: currentQuestion?.options.length ?? 5,
    onSelectOption: (idx) => {
      const optionIds = ["a", "b", "c", "d", "e"];
      if (currentQuestion && idx < currentQuestion.options.length) {
        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIds[idx] }));
      }
    },
    onConfirm: () => {
      if (currentQuestion && answers[currentQuestion.id]) {
        if (currentIndex < questions.length - 1) {
          captureQuestionTime(currentQuestion.id);
          setCurrentIndex((i) => i + 1);
        } else if (allAnswered) {
          captureQuestionTime(currentQuestion.id);
          handleSubmit();
        }
      }
    },
    onNext: () => {
      if (currentIndex < questions.length - 1) {
        captureQuestionTime(currentQuestion?.id ?? "");
        setCurrentIndex((i) => i + 1);
      }
    },
    onPrev: () => {
      if (currentIndex > 0) setCurrentIndex((i) => i - 1);
    },
  });

  const handleSelect = (optionId: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const captureQuestionTime = (questionId: string) => {
    // eslint-disable-next-line react-hooks/purity
    const elapsed = Math.round((Date.now() - questionStartRef.current) / 1000);
    questionTimesRef.current = { ...questionTimesRef.current, [questionId]: elapsed };
  };

  const handleSubmit = () => {
    if (currentQuestion) captureQuestionTime(currentQuestion.id);
    const score = questions.filter((q) => answers[q.id] === q.correctOptionId).length;
    const pct = Math.round((score / questions.length) * 100);

    saveQuizResult({
      // eslint-disable-next-line react-hooks/purity
      id: `bms-${subject}-${Date.now()}`,
      type: "bms",
      subject,
      score,
      total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      timestamp: new Date().toISOString(),
      durationMinutes: getMinutes(),
      answers: questions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === q.correctOptionId,
      })),
    });

    // Update spaced repetition and adaptive store for each question (mit echter Zeit pro Frage)
    questions.forEach((q) => {
      const correct = answers[q.id] === q.correctOptionId;
      const timeSeconds = questionTimesRef.current[q.id] ?? 30;
      updateSpacedRepetition(q.id, correct);
      const swId = getDirectStichwortId(q.id) || getStichwortForQuestion(q.id);
      if (swId) recordAnswer(swId, correct, timeSeconds);
    });

    addXP(score * 10);
    checkStreak();
    logActivity(questions.length, getMinutes());
    trackQuizComplete("bms", score, questions.length);
    trackEvent("quiz_complete", { section: "bms", subject, score, total: questions.length });
    setSubmitted(true);
    setCurrentIndex(0);
    if (pct >= 90) setShowConfetti(true);
  };

  if (submitted) {
    const score = questions.filter((q) => answers[q.id] === q.correctOptionId).length;
    const pct = Math.round((score / questions.length) * 100);

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <Confetti active={showConfetti} />
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" />
          Zurück zu BMS
        </Button>

        <div className="card-glass p-6 text-center">
          <div className="text-4xl font-bold text-[var(--accent)]">
            {score}/{questions.length}
          </div>
          <p className="text-[var(--muted)] mt-1">{pct}% richtig</p>
          <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2">
            +{score * 10} XP erhalten
          </p>
          {pct >= 90 && <p className="text-sm text-yellow-600 font-bold mt-1">Hervorragend!</p>}
          <div className="mt-4">
            <ShareResultButton
              text={getQuizShareText(
                subjectColors[subject]?.label || subject,
                score,
                questions.length
              )}
            />
          </div>
        </div>

        {subject === "gemischt" &&
          (() => {
            const bySubject: Record<string, { correct: number; total: number }> = {};
            questions.forEach((q) => {
              const s = q.subject;
              if (!bySubject[s]) bySubject[s] = { correct: 0, total: 0 };
              bySubject[s].total += 1;
              if (answers[q.id] === q.correctOptionId) bySubject[s].correct += 1;
            });
            return (
              <div className="card-glass p-5">
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                  Ergebnis nach Fach
                </h3>
                <div className="grid grid-cols-2 gap-3 stagger-children">
                  {Object.entries(bySubject).map(([subj, data]) => {
                    const c = subjectColors[subj];
                    const subjPct = Math.round((data.correct / data.total) * 100);
                    return (
                      <div key={subj} className={`${c?.bg || ""} rounded-lg p-3`}>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-medium ${c?.text || ""}`}>
                            {c?.label || subj}
                          </span>
                          <Badge
                            variant={
                              subjPct >= 70 ? "success" : subjPct >= 50 ? "warning" : "danger"
                            }
                          >
                            {subjPct}%
                          </Badge>
                        </div>
                        <p className="text-xs text-[var(--muted)]">
                          {data.correct}/{data.total} richtig
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

        {/* Chapter breakdown + weak areas */}
        {(() => {
          const byChapter: Record<string, { correct: number; total: number; totalTime: number }> =
            {};
          questions.forEach((q) => {
            const ch = q.chapter;
            if (!byChapter[ch]) byChapter[ch] = { correct: 0, total: 0, totalTime: 0 };
            byChapter[ch].total += 1;
            byChapter[ch].totalTime += questionTimesRef.current[q.id] ?? 0;
            if (answers[q.id] === q.correctOptionId) byChapter[ch].correct += 1;
          });
          const chapters = Object.entries(byChapter).sort(
            ([, a], [, b]) => a.correct / a.total - b.correct / b.total
          );
          const weakChapters = chapters.filter(([, d]) => d.correct / d.total < 0.5);
          const totalTime = Object.values(questionTimesRef.current).reduce((a, b) => a + b, 0);
          const avgTime = questions.length > 0 ? Math.round(totalTime / questions.length) : 0;

          return (
            <div className="card-glass p-5 space-y-4">
              {totalTime > 0 && (
                <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
                  <span>
                    Gesamt: {Math.floor(totalTime / 60)}:{String(totalTime % 60).padStart(2, "0")}{" "}
                    min
                  </span>
                  <span>~{avgTime}s pro Frage</span>
                </div>
              )}
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Ergebnis nach Kapitel
              </h3>
              <div className="space-y-2">
                {chapters.map(([ch, data]) => {
                  const chPct = Math.round((data.correct / data.total) * 100);
                  return (
                    <div key={ch} className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-[var(--text-primary)] truncate">
                            {ch}
                          </span>
                          <span
                            className={`text-xs font-semibold ${
                              chPct >= 70
                                ? "text-emerald-600 dark:text-emerald-400"
                                : chPct >= 50
                                  ? "text-amber-600 dark:text-amber-400"
                                  : "text-red-600 dark:text-red-400"
                            }`}
                          >
                            {data.correct}/{data.total}
                          </span>
                        </div>
                        <div className="w-full bg-[var(--surface)] rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full transition-all ${
                              chPct >= 70
                                ? "bg-emerald-500"
                                : chPct >= 50
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${chPct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {weakChapters.length > 0 && (
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-300 mb-1">
                    Empfehlung
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-400">
                    Wiederhole {weakChapters.map(([ch]) => ch).join(", ")} — dort hast du noch
                    Lücken.
                  </p>
                </div>
              )}
            </div>
          );
        })()}

        <div className="space-y-4">
          {questions.map((q: Question, i: number) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctOptionId;
            return (
              <Card
                key={q.id}
                className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    )}
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {i + 1}. {q.text}
                    </p>
                  </div>
                  <div className="ml-8 space-y-2 mb-3">
                    {q.options.map((opt: { id: string; text: string }) => {
                      const isSelected = userAnswer === opt.id;
                      const isCorrectOpt = q.correctOptionId === opt.id;
                      return (
                        <div
                          key={opt.id}
                          className={`text-sm px-3 py-2 rounded-lg ${
                            isCorrectOpt
                              ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium"
                              : isSelected && !isCorrectOpt
                                ? "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 line-through"
                                : "text-muted-foreground"
                          }`}
                        >
                          {opt.id.toUpperCase()}) {opt.text}
                          {isCorrectOpt && (
                            <Badge variant="success" className="ml-2">
                              Richtig
                            </Badge>
                          )}
                          {isSelected && !isCorrectOpt && (
                            <Badge variant="danger" className="ml-2">
                              Deine Antwort
                            </Badge>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="ml-8 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-1">
                      Erklärung:
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-400">
                      {stripMarkdownAsterisks(q.explanation)}
                    </p>
                  </div>
                  {getStrategieTipp(q.id) && (
                    <div className="ml-8 mt-2 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-amber-800 dark:text-amber-300 mb-1">
                        Strategie-Tipp:
                      </p>
                      <p className="text-xs text-amber-700 dark:text-amber-400">
                        {getStrategieTipp(q.id)}
                      </p>
                    </div>
                  )}
                  {!isCorrect && (
                    <div className="ml-8">
                      <AiTutorButton onClick={() => setAiTutorQ({ question: q, userAnswer })} />
                    </div>
                  )}
                  <div className="ml-8 mt-2">
                    <QuestionFeedbackButton questionId={q.id} questionType="bms" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="premium" onClick={onBack}>
            Zurück zu BMS
          </Button>
        </div>

        {aiTutorQ && (
          <AiTutorChat
            question={aiTutorQ.question}
            userAnswer={aiTutorQ.userAnswer}
            onClose={() => setAiTutorQ(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" />
          Abbrechen
        </Button>
        <div className="flex items-center gap-3">
          <Badge variant="info" className="text-xs font-normal">
            An dein Level angepasst
          </Badge>
          <button
            onClick={() => toggleFlagQuestion(currentQuestion.id)}
            className={`p-1.5 rounded cursor-pointer ${isFlagged ? "text-red-500" : "text-[var(--muted)] hover:text-[var(--text-primary)]"}`}
            title="Markieren (F)"
          >
            <Flag className="w-4 h-4" />
          </button>
          <span className="text-sm text-[var(--muted)]">
            Frage {currentIndex + 1} von {questions.length}
          </span>
        </div>
      </div>

      <div className="progress-premium">
        <div
          className="progress-fill"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="card-glass p-6">
        <p className="text-base font-medium text-[var(--text-primary)] mb-6">
          {currentQuestion.text}
        </p>
        <div className="space-y-3">
          {currentQuestion.options.map((opt, i) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                answers[currentQuestion.id] === opt.id
                  ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]"
                  : "border-[var(--border)] dark:border-[var(--border)] hover:bg-accent text-[var(--text-primary)]"
              }`}
            >
              <span className="font-semibold mr-2">{opt.id.toUpperCase()})</span>
              {opt.text}
              <kbd className="float-right text-[10px] bg-[var(--surface)] px-1.5 py-0.5 rounded text-[var(--muted)]">
                {i + 1}
              </kbd>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={currentIndex === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Zurück
        </Button>

        <div className="flex gap-2">
          {currentIndex < questions.length - 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentIndex((i) => i + 1)}
              title="Überspringen (S)"
            >
              <SkipForward className="w-4 h-4" />
            </Button>
          )}
          {currentIndex < questions.length - 1 ? (
            <Button
              onClick={() => {
                captureQuestionTime(currentQuestion?.id ?? "");
                setCurrentIndex((i) => i + 1);
              }}
            >
              Weiter
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!allAnswered}>
              <Send className="w-4 h-4 mr-1" />
              Auswertung
            </Button>
          )}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setCurrentIndex(i)}
            className={`w-8 h-8 rounded-full text-xs font-medium transition-colors cursor-pointer relative ${
              i === currentIndex
                ? "bg-[var(--accent)] text-white"
                : answers[q.id]
                  ? "bg-[var(--accent)]/20 dark:bg-[var(--accent)]/30 text-[var(--accent)]"
                  : "bg-[var(--surface)] text-muted-foreground"
            }`}
          >
            {i + 1}
            {flaggedQuestions.includes(q.id) && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="text-center">
        <p className="text-[10px] text-[var(--muted)]">
          Tastatur: 1-5 Antwort · Enter Weiter · F Markieren · S Überspringen
        </p>
      </div>

      <FloatingQuestionCounter current={currentIndex + 1} total={questions.length} />
    </div>
  );
}
