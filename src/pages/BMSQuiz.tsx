import { useState, useMemo } from "react";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Confetti } from "@/components/ui/confetti";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { allBmsQuestions, getQuestionsBySubject as getNewQuestions } from "@/data/bms/index";
import { getQuestionsBySubject as getLegacyQuestions, type Question } from "@/data/bmsQuestions";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore, getStichwortForQuestion } from "@/store/adaptiveLearning";
import { getStrategieTipp, getDirectStichwortId } from "@/data/questions/index";

// Use new expanded questions if available, fall back to legacy
function getQuestionsBySubject(subject: string) {
  const newQ = getNewQuestions(subject);
  if (newQ.length > 0) return newQ;
  return getLegacyQuestions(subject);
}

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

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getMixedQuestions(count: number) {
  const subjects = ["biologie", "chemie", "physik", "mathematik"];
  const perSubject = Math.floor(count / subjects.length);
  const remainder = count % subjects.length;
  const selected: typeof allBmsQuestions = [];

  subjects.forEach((subj, idx) => {
    const subjectQs = shuffleArray(allBmsQuestions.filter((q) => q.subject === subj));
    const take = perSubject + (idx < remainder ? 1 : 0);
    selected.push(...subjectQs.slice(0, take));
  });

  return shuffleArray(selected);
}

interface Props {
  subject: string;
  onBack: () => void;
  questionCount?: number;
}

export default function BMSQuiz({ subject, onBack, questionCount }: Props) {
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
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [aiTutorQ, setAiTutorQ] = useState<{
    question: (typeof questions)[0];
    userAnswer: string;
  } | null>(null);
  const {
    addXP,
    checkStreak,
    saveQuizResult,
    logActivity,
    flaggedQuestions,
    toggleFlagQuestion,
    updateSpacedRepetition,
  } = useStore();

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
          setCurrentIndex((i) => i + 1);
        } else if (allAnswered) {
          handleSubmit();
        }
      }
    },
    onNext: () => {
      if (currentIndex < questions.length - 1) setCurrentIndex((i) => i + 1);
    },
    onPrev: () => {
      if (currentIndex > 0) setCurrentIndex((i) => i - 1);
    },
  });

  const handleSelect = (optionId: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const handleSubmit = () => {
    const score = questions.filter((q) => answers[q.id] === q.correctOptionId).length;
    const pct = Math.round((score / questions.length) * 100);

    saveQuizResult({
      id: `bms-${subject}-${Date.now()}`,
      type: "bms",
      subject,
      score,
      total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      timestamp: new Date().toISOString(),
      answers: questions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === q.correctOptionId,
      })),
    });

    // Update spaced repetition and adaptive store for each question
    questions.forEach((q) => {
      const correct = answers[q.id] === q.correctOptionId;
      updateSpacedRepetition(q.id, correct);
      const swId = getDirectStichwortId(q.id) || getStichwortForQuestion(q.id);
      if (swId) recordAnswer(swId, correct, 30);
    });

    addXP(score * 10);
    checkStreak();
    logActivity(questions.length);
    setSubmitted(true);
    setCurrentIndex(0);
    if (pct >= 90) setShowConfetti(true);
  };

  if (submitted) {
    const score = questions.filter((q) => answers[q.id] === q.correctOptionId).length;
    const pct = Math.round((score / questions.length) * 100);

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Confetti active={showConfetti} />
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" />
          Zurück zu BMS
        </Button>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">
              {score}/{questions.length}
            </div>
            <p className="text-muted mt-1">{pct}% richtig</p>
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2">
              +{score * 10} XP erhalten
            </p>
            {pct >= 90 && <p className="text-sm text-yellow-600 font-bold mt-1">Hervorragend!</p>}
          </CardContent>
        </Card>

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
              <Card>
                <CardContent className="p-5">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Ergebnis nach Fach
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
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
                          <p className="text-xs text-muted">
                            {data.correct}/{data.total} richtig
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
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
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
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
                                : "text-gray-600 dark:text-gray-400"
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
                    <p className="text-xs text-blue-700 dark:text-blue-400">{q.explanation}</p>
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
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center pt-4">
          <Button onClick={onBack}>Zurück zu BMS</Button>
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
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" />
          Abbrechen
        </Button>
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleFlagQuestion(currentQuestion.id)}
            className={`p-1.5 rounded cursor-pointer ${isFlagged ? "text-red-500" : "text-muted hover:text-gray-700 dark:hover:text-gray-300"}`}
            title="Markieren (F)"
          >
            <Flag className="w-4 h-4" />
          </button>
          <span className="text-sm text-muted">
            Frage {currentIndex + 1} von {questions.length}
          </span>
        </div>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">
            {currentQuestion.text}
          </p>
          <div className="space-y-3">
            {currentQuestion.options.map((opt, i) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                  answers[currentQuestion.id] === opt.id
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="font-semibold mr-2">{opt.id.toUpperCase()})</span>
                {opt.text}
                <kbd className="float-right text-[10px] bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded text-muted">
                  {i + 1}
                </kbd>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

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
            <Button onClick={() => setCurrentIndex((i) => i + 1)}>
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
                ? "bg-primary-700 text-white"
                : answers[q.id]
                  ? "bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
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
        <p className="text-[10px] text-muted">
          Tastatur: 1-5 Antwort · Enter Weiter · F Markieren · S Überspringen
        </p>
      </div>

      <FloatingQuestionCounter current={currentIndex + 1} total={questions.length} />
    </div>
  );
}
