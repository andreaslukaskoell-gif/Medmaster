import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Send,
  Trophy,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { getRecoverySession } from "@/lib/smartRecovery";
import { playCorrectAnswerSound } from "@/lib/sounds";
import { getQuestionById } from "@/data/bms/index";
import { getStrategieTipp } from "@/data/questions/index";
import { getStichwortForQuestion } from "@/store/adaptiveLearning";
import { getDirectStichwortId } from "@/data/questions/index";
import { alleStichworteListe } from "@/data/stichwortliste";

const fachColors: Record<string, { bg: string; text: string; label: string }> = {
  biologie: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    text: "text-emerald-700 dark:text-emerald-400",
    label: "Biologie",
  },
  chemie: {
    bg: "bg-red-50 dark:bg-red-900/20",
    text: "text-red-700 dark:text-red-400",
    label: "Chemie",
  },
  physik: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-700 dark:text-blue-400",
    label: "Physik",
  },
  mathematik: {
    bg: "bg-violet-50 dark:bg-violet-900/20",
    text: "text-violet-700 dark:text-violet-400",
    label: "Mathematik",
  },
};

type Step = "reentry" | "question" | "feedback" | "result";

export default function SmartRecoveryPage() {
  const navigate = useNavigate();
  const quizResults = useStore((s) => s.quizResults);
  const {
    saveQuizResult,
    addXP,
    checkStreak,
    logActivity,
    updateSpacedRepetition,
    incrementSmartRecoveryCount,
  } = useStore();
  const adaptive = useAdaptiveStore();

  const session = useMemo(() => getRecoverySession(quizResults), [quizResults]);
  const questions = useMemo(
    () =>
      session.map((s) => getQuestionById(s.questionId)).filter(Boolean) as ReturnType<
        typeof getQuestionById
      >[],
    [session]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState<Step>("reentry");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  useEffect(() => {
    if (session.length === 0 || questions.length === 0) {
      navigate("/schwachstellen", { replace: true });
    }
  }, [session.length, questions.length, navigate]);

  const currentItem = session[currentIndex];
  const currentQuestion = questions[currentIndex];
  const reentryExplanation = currentItem?.explanation ?? "";
  const tipp = currentQuestion ? getStrategieTipp(currentQuestion.id) : null;
  const sw = currentQuestion
    ? alleStichworteListe.find(
        (s) =>
          s.id ===
          (getDirectStichwortId(currentQuestion.id) || getStichwortForQuestion(currentQuestion.id))
      )
    : null;

  const handleShowQuestion = () => setStep("question");
  const handleSelect = (optionId: string) => {
    if (showResult) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion!.id]: optionId }));
  };
  const handleCheck = () => {
    setShowResult(true);
    const correct = answers[currentQuestion!.id] === currentQuestion!.correctOptionId;
    setResults((prev) => [...prev, correct]);
    if (correct) playCorrectAnswerSound();
    const swId =
      getDirectStichwortId(currentQuestion!.id) || getStichwortForQuestion(currentQuestion!.id);
    if (swId) adaptive.recordAnswer(swId, correct, 30);
    updateSpacedRepetition(currentQuestion!.id, correct);
  };
  const handleNext = () => {
    setShowResult(false);
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestion!.id];
      return next;
    });
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setStep("reentry");
    } else {
      finishSession();
    }
  };

  function finishSession() {
    incrementSmartRecoveryCount();
    const score = results.filter(Boolean).length;
    const total = questions.length;
    saveQuizResult({
      id: `smart-recovery-${Date.now()}`,
      type: "bms",
      subject: "recovery",
      score,
      total,
      date: new Date().toISOString().split("T")[0],
      answers: questions
        .map((q) =>
          q
            ? {
                questionId: q.id,
                selectedAnswer: answers[q.id] ?? "",
                correct: answers[q.id] === q.correctOptionId,
              }
            : null
        )
        .filter(Boolean) as { questionId: string; selectedAnswer: string; correct: boolean }[],
    });
    addXP(score * 10);
    checkStreak();
    logActivity(total);
    setStep("result");
  }

  if (session.length === 0 || questions.length === 0) {
    return null;
  }

  if (step === "result") {
    const score = results.filter(Boolean).length;
    const total = results.length;
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <BreadcrumbNav
          items={[
            { label: "Dashboard", href: "/" },
            { label: "Schwachstellen", href: "/schwachstellen" },
            { label: "Smart-Recovery" },
          ]}
        />
        <Card className="border-2 border-primary-200 dark:border-primary-800">
          <CardContent className="p-8 text-center space-y-4">
            <Trophy className="w-14 h-14 mx-auto text-primary-500" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Smart-Recovery abgeschlossen
            </h2>
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {score} / {total} richtig ({pct}%)
            </p>
            <p className="text-sm text-muted">
              Du hast deine Schwachstellen gezielt wiederholt. Weiter so!
            </p>
            <div className="flex gap-3 justify-center pt-2">
              <Button variant="outline" onClick={() => navigate("/schwachstellen")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zu Schwachstellen
              </Button>
              <Button onClick={() => navigate("/")}>Zum Dashboard</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isReentry = step === "reentry";
  const isFeedback = step === "question" && showResult;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <BreadcrumbNav
        items={[
          { label: "Dashboard", href: "/" },
          { label: "Schwachstellen", href: "/schwachstellen" },
          { label: "Smart-Recovery" },
        ]}
      />

      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => navigate("/schwachstellen")}>
          <ArrowLeft className="w-4 h-4 mr-1" />
          Abbrechen
        </Button>
        <span className="text-sm text-muted">
          Frage {currentIndex + 1} von {questions.length}
        </span>
      </div>
      <Progress value={((currentIndex + 1) / questions.length) * 100} />

      {isReentry && (
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
              <BookOpen className="w-5 h-5 shrink-0" />
              <span className="font-semibold">Kurz wiederholen – dann die Frage</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {reentryExplanation}
            </p>
            {tipp && (
              <div className="rounded-lg bg-amber-100/80 dark:bg-amber-900/30 p-3 flex gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 dark:text-amber-100">{tipp}</p>
              </div>
            )}
            <Button onClick={handleShowQuestion} className="w-full sm:w-auto">
              Frage anzeigen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === "question" && currentQuestion && (
        <>
          {sw && (
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-medium px-2 py-1 rounded ${fachColors[sw.fach]?.bg} ${fachColors[sw.fach]?.text}`}
              >
                {fachColors[sw.fach]?.label ?? sw.fach}
              </span>
              <span className="text-xs text-muted">{sw.thema}</span>
            </div>
          )}
          <Card>
            <CardContent className="p-6">
              <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">
                {currentQuestion.text}
              </p>
              <div className="space-y-3">
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers[currentQuestion.id] === opt.id;
                  const isCorrectOpt = showResult && opt.id === currentQuestion.correctOptionId;
                  const isWrongSelected =
                    showResult && isSelected && opt.id !== currentQuestion.correctOptionId;
                  let classes =
                    "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300";
                  if (isCorrectOpt)
                    classes =
                      "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300";
                  else if (isWrongSelected)
                    classes =
                      "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
                  else if (isSelected)
                    classes =
                      "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300";

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(opt.id)}
                      disabled={showResult}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${classes}`}
                    >
                      <span className="font-semibold mr-2">{opt.id.toUpperCase()})</span>
                      {opt.text}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {isFeedback && (
            <Card
              className={`border-l-4 ${answers[currentQuestion.id] === currentQuestion.correctOptionId ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {answers[currentQuestion.id] === currentQuestion.correctOptionId ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-medium text-sm">
                    {answers[currentQuestion.id] === currentQuestion.correctOptionId
                      ? "Richtig!"
                      : "Leider falsch"}
                  </span>
                </div>
                <p className="text-sm text-muted">{currentQuestion.explanation}</p>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end">
            {!showResult ? (
              <Button onClick={handleCheck} disabled={!answers[currentQuestion.id]}>
                <Send className="w-4 h-4 mr-1" />
                Prüfen
              </Button>
            ) : (
              <Button onClick={handleNext}>
                {currentIndex < questions.length - 1 ? (
                  <>
                    Weiter <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  <>
                    Ergebnis <Trophy className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
