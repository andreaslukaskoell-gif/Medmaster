import { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Target, Flame, ArrowLeft, ArrowRight, CheckCircle2, XCircle,
  Send, Lightbulb, Zap, Trophy, RotateCcw, Play,
} from "lucide-react";
import { AiTutorChat, AiTutorButton } from "@/components/AiTutorChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useStore } from "@/store/useStore";
import { allBmsQuestions } from "@/data/bms/index";
import { alleStichworteListe } from "@/data/stichwortliste";
import { getStrategieTipp, getDirectStichwortId } from "@/data/questions/index";
import { getStichwortForQuestion } from "@/store/adaptiveLearning";

// ============================================================
// Types & Helpers
// ============================================================

type Mode = "overview" | "daily" | "focused";

const fachColors: Record<string, { bg: string; text: string; label: string; accent: string }> = {
  biologie: { bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-400", label: "Biologie", accent: "bg-emerald-500" },
  chemie: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-400", label: "Chemie", accent: "bg-red-500" },
  physik: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-400", label: "Physik", accent: "bg-blue-500" },
  mathematik: { bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-400", label: "Mathematik", accent: "bg-violet-500" },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getQuestionsForStichwort(stichwortId: string, count = 10) {
  const matching = allBmsQuestions.filter((q) => {
    const direct = getDirectStichwortId(q.id);
    if (direct === stichwortId) return true;
    const mapped = getStichwortForQuestion(q.id);
    return mapped === stichwortId;
  });
  return shuffle(matching).slice(0, count);
}

// ============================================================
// Main Component
// ============================================================

export default function SchwachstellenTrainer() {
  const [mode, setMode] = useState<Mode>("overview");
  const [focusStichwortId, setFocusStichwortId] = useState<string | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<typeof allBmsQuestions>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [showTipp, setShowTipp] = useState<string | null>(null);
  const [aiTutorQ, setAiTutorQ] = useState<{ question: typeof allBmsQuestions[0]; userAnswer: string } | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const adaptive = useAdaptiveStore();
  const { saveQuizResult, addXP, checkStreak, logActivity, updateSpacedRepetition } = useStore();

  const readiness = adaptive.getMedATReadiness();
  const weakTopics = adaptive.getWeakestTopics(10);
  const strongTopics = adaptive.getStrongestTopics(5);
  const { profile } = adaptive;

  // Daily challenge questions: mix of weak topics
  const dailyQuestions = useMemo(() => {
    return adaptive.getAdaptiveQuestions(15);
  }, []);

  // Auto-start focused quiz from URL param ?stichwort=bio-1-01
  useEffect(() => {
    const sw = searchParams.get("stichwort");
    if (sw && mode === "overview") {
      const qs = getQuestionsForStichwort(sw, 10);
      if (qs.length > 0) {
        setFocusStichwortId(sw);
        setQuizQuestions(qs);
        setCurrentIndex(0);
        setAnswers({});
        setShowResult(false);
        setShowTipp(null);
        setMode("focused");
        setSearchParams({}, { replace: true });
      }
    }
  }, [searchParams]);

  // ============================================================
  // Start Quiz
  // ============================================================

  function startFocusedQuiz(stichwortId: string) {
    const qs = getQuestionsForStichwort(stichwortId, 10);
    if (qs.length === 0) return;
    setFocusStichwortId(stichwortId);
    setQuizQuestions(qs);
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    setShowTipp(null);
    setMode("focused");
  }

  function startDailyChallenge() {
    if (dailyQuestions.length === 0) return;
    setFocusStichwortId(null);
    setQuizQuestions(dailyQuestions);
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    setShowTipp(null);
    setMode("daily");
  }

  function handleSelect(optionId: string) {
    if (showResult) return;
    setAnswers((prev) => ({ ...prev, [quizQuestions[currentIndex].id]: optionId }));
    setShowTipp(null);
  }

  function handleCheck() {
    setShowResult(true);
    const q = quizQuestions[currentIndex];
    const correct = answers[q.id] === q.correctOptionId;
    // Record in adaptive store
    const swId = getDirectStichwortId(q.id) || getStichwortForQuestion(q.id);
    if (swId) adaptive.recordAnswer(swId, correct, 30);
    updateSpacedRepetition(q.id, correct);
  }

  function handleNext() {
    setShowResult(false);
    setShowTipp(null);
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    const score = quizQuestions.filter((q) => answers[q.id] === q.correctOptionId).length;
    saveQuizResult({
      id: `schwachstellen-${Date.now()}`,
      type: "bms",
      subject: focusStichwortId ? "schwachstellen" : "daily",
      score,
      total: quizQuestions.length,
      date: new Date().toLocaleDateString("de-AT"),
      timestamp: new Date().toISOString(),
      answers: quizQuestions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === q.correctOptionId,
      })),
    });
    addXP(score * 15); // Bonus XP for targeted practice
    checkStreak();
    logActivity(quizQuestions.length);
    if (mode === "daily") adaptive.completeDailyChallenge();
    setMode("overview");
  }

  // Keyboard shortcuts for quiz
  const quizActive = (mode === "focused" || mode === "daily") && quizQuestions.length > 0;
  const currentQ = quizActive ? quizQuestions[currentIndex] : null;
  useKeyboardShortcuts({
    disabled: !quizActive || showResult,
    maxOptions: currentQ?.options.length ?? 5,
    onSelectOption: (idx) => {
      if (currentQ && idx < currentQ.options.length) handleSelect(currentQ.options[idx].id);
    },
    onConfirm: () => {
      if (showResult) handleNext();
      else if (answers[quizQuestions[currentIndex]?.id]) handleCheck();
    },
    onNext: () => { if (showResult) handleNext(); },
  });

  // ============================================================
  // Quiz View
  // ============================================================

  if (mode === "focused" || mode === "daily") {
    const q = quizQuestions[currentIndex];
    if (!q) return null;
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.correctOptionId;
    const tipp = getStrategieTipp(q.id);
    const sw = alleStichworteListe.find(
      (s) => s.id === (getDirectStichwortId(q.id) || getStichwortForQuestion(q.id))
    );

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => setMode("overview")}>
            <ArrowLeft className="w-4 h-4 mr-1" />
            Abbrechen
          </Button>
          <div className="flex items-center gap-2">
            {mode === "daily" && (
              <Badge variant="warning" className="gap-1">
                <Flame className="w-3 h-3" />
                Daily Challenge
              </Badge>
            )}
            <span className="text-sm text-muted">
              {currentIndex + 1} / {quizQuestions.length}
            </span>
          </div>
        </div>

        <Progress value={((currentIndex + 1) / quizQuestions.length) * 100} />

        {sw && (
          <div className="flex items-center gap-2">
            <Badge variant="default" className="text-xs">
              {sw.thema}
            </Badge>
            <Badge className={`text-xs ${fachColors[sw.fach]?.text || ""}`}>
              {fachColors[sw.fach]?.label || sw.fach}
            </Badge>
          </div>
        )}

        <Card>
          <CardContent className="p-6">
            <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">
              {q.text}
            </p>
            <div className="space-y-3">
              {q.options.map((opt) => {
                let classes = "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300";
                if (showResult) {
                  if (opt.id === q.correctOptionId) {
                    classes = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300";
                  } else if (opt.id === userAnswer && !isCorrect) {
                    classes = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
                  }
                } else if (userAnswer === opt.id) {
                  classes = "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300";
                }

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

        {showResult && (
          <div className="space-y-3">
            <Card className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-medium text-sm">
                    {isCorrect ? "Richtig!" : "Leider falsch"}
                  </span>
                </div>
                <p className="text-sm text-muted">{q.explanation}</p>
              </CardContent>
            </Card>

            {tipp && (
              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
                      Strategie-Tipp
                    </span>
                  </div>
                  <p className="text-sm text-amber-800 dark:text-amber-300">{tipp}</p>
                </CardContent>
              </Card>
            )}
            {!isCorrect && (
              <AiTutorButton onClick={() => setAiTutorQ({ question: q, userAnswer: userAnswer || "" })} />
            )}
          </div>
        )}

        <div className="flex justify-between">
          {!showResult ? (
            <Button onClick={handleCheck} disabled={!userAnswer} className="ml-auto">
              <Send className="w-4 h-4 mr-1" />
              Prüfen
            </Button>
          ) : (
            <Button onClick={handleNext} className="ml-auto">
              {currentIndex < quizQuestions.length - 1 ? (
                <>Weiter <ArrowRight className="w-4 h-4 ml-1" /></>
              ) : (
                <>Ergebnis <Trophy className="w-4 h-4 ml-1" /></>
              )}
            </Button>
          )}
        </div>

        {aiTutorQ && (
          <AiTutorChat
            question={aiTutorQ.question}
            userAnswer={aiTutorQ.userAnswer}
            onClose={() => setAiTutorQ(null)}
          />
        )}
        <FloatingQuestionCounter current={currentIndex + 1} total={quizQuestions.length} />
      </div>
    );
  }

  // ============================================================
  // Overview
  // ============================================================

  const totalPracticed = Object.keys(profile.stichwortStats).length;
  const totalStichworte = alleStichworteListe.length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Schwachstellen-Trainer" }]} />

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
          <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Schwachstellen-Trainer</h1>
          <p className="text-sm text-muted">Gezielt schwache Themen trainieren</p>
        </div>
      </div>

      {/* Readiness & Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-5 text-center">
            <div className="text-3xl font-bold text-primary-700 dark:text-primary-400">{readiness}%</div>
            <p className="text-xs text-muted mt-1">MedAT Readiness</p>
            <Progress value={readiness} className="mt-3" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 text-center">
            <div className="flex items-center justify-center gap-1">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                {profile.dailyChallengeStreak}
              </span>
            </div>
            <p className="text-xs text-muted mt-1">Tages-Streak</p>
            <p className="text-xs text-muted">
              {profile.totalQuestionsAnswered} Fragen beantwortet
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 text-center">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {totalPracticed}/{totalStichworte}
            </div>
            <p className="text-xs text-muted mt-1">Stichworte geübt</p>
            <Progress value={(totalPracticed / totalStichworte) * 100} className="mt-3" />
          </CardContent>
        </Card>
      </div>

      {/* Daily Challenge */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Zap className="w-5 h-5 text-orange-500" />
            Tägliche Challenge
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-5">
          <p className="text-sm text-muted mb-4">
            15 adaptive Fragen aus deinen Schwachstellen — Bonus-XP und Streak-Aufbau!
          </p>
          <Button onClick={startDailyChallenge} className="gap-2">
            <Play className="w-4 h-4" />
            Challenge starten
          </Button>
        </CardContent>
      </Card>

      {/* Weak Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="w-5 h-5 text-red-500" />
            Deine Schwachstellen
            {weakTopics.length === 0 && (
              <Badge variant="default" className="ml-2 text-xs">Noch keine Daten</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {weakTopics.length === 0 ? (
            <p className="text-sm text-muted">
              Bearbeite zuerst einige Quizze, damit deine Schwachstellen erkannt werden.
            </p>
          ) : (
            weakTopics.map((topic) => {
              const sw = alleStichworteListe.find((s) => s.id === topic.stichwortId);
              const fc = fachColors[topic.fach];
              const questionsAvailable = allBmsQuestions.filter((q) => {
                const d = getDirectStichwortId(q.id);
                if (d === topic.stichwortId) return true;
                return getStichwortForQuestion(q.id) === topic.stichwortId;
              }).length;

              return (
                <div
                  key={topic.stichwortId}
                  className={`flex items-center justify-between p-3 rounded-lg ${fc?.bg || "bg-gray-50 dark:bg-gray-800"}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-medium ${fc?.text || ""}`}>
                        {topic.thema}
                      </span>
                      <Badge variant="default" className="text-[10px]">
                        {fc?.label || topic.fach}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={topic.rate} className="flex-1 max-w-[120px]" />
                      <span className="text-xs text-muted">{topic.rate}%</span>
                      <span className="text-[10px] text-muted">{questionsAvailable} Fragen</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => startFocusedQuiz(topic.stichwortId)}
                    disabled={questionsAvailable === 0}
                    className="ml-3 shrink-0"
                  >
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Üben
                  </Button>
                </div>
              );
            })
          )}
        </CardContent>
      </Card>

      {/* Strong Topics */}
      {strongTopics.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Deine Stärken
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {strongTopics.map((topic) => {
              const fc = fachColors[topic.fach];
              return (
                <div
                  key={topic.stichwortId}
                  className="flex items-center justify-between p-2 rounded-lg bg-green-50 dark:bg-green-900/10"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{topic.thema}</span>
                    <Badge variant="default" className="text-[10px]">{fc?.label}</Badge>
                  </div>
                  <Badge variant="success">{topic.rate}%</Badge>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {/* Per-Fach Readiness */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {(["biologie", "chemie", "physik", "mathematik"] as const).map((fach) => {
          const r = adaptive.getFachReadiness(fach);
          const fc = fachColors[fach];
          return (
            <Card key={fach}>
              <CardContent className="p-4 text-center">
                <div className={`w-8 h-8 ${fc.accent} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{r}%</span>
                </div>
                <p className="text-xs font-medium">{fc.label}</p>
                <Progress value={r} className="mt-2" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
