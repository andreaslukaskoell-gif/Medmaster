import { useState, useMemo, useEffect } from "react";
import { usePermissions } from "@/hooks/usePermissions";
import { Paywall } from "@/components/ui/paywall";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Target,
  Flame,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Send,
  Lightbulb,
  Zap,
  Trophy,
  RotateCcw,
  Play,
  BookOpen,
  RefreshCw,
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
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { allBmsQuestions } from "@/data/bms/index";
import { alleStichworteListe } from "@/data/stichwortliste";
import { getStrategieTipp, getDirectStichwortId } from "@/data/questions/index";
import { getStichwortForQuestion } from "@/store/adaptiveLearning";
import { playCorrectAnswerSound } from "@/lib/sounds";
import { SchwachstellenAnalyse } from "@/components/schwachstellen/SchwachstellenAnalyse";
import { hasCriticalErrorPattern } from "@/lib/smartRecovery";
import { pathForChapter } from "@/lib/bmsRoutes";
import { usePageTitle } from "@/hooks/usePageTitle";

// ============================================================
// Types & Helpers
// ============================================================

type Mode = "overview" | "daily" | "focused" | "result";

const fachColors: Record<string, { bg: string; text: string; label: string; accent: string }> = {
  biologie: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    text: "text-emerald-700 dark:text-emerald-400",
    label: "Biologie",
    accent: "bg-emerald-500",
  },
  chemie: {
    bg: "bg-red-50 dark:bg-red-900/20",
    text: "text-red-700 dark:text-red-400",
    label: "Chemie",
    accent: "bg-red-500",
  },
  physik: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-700 dark:text-blue-400",
    label: "Physik",
    accent: "bg-blue-500",
  },
  mathematik: {
    bg: "bg-violet-50 dark:bg-violet-900/20",
    text: "text-violet-700 dark:text-violet-400",
    label: "Mathematik",
    accent: "bg-violet-500",
  },
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
  usePageTitle("Schwachstellen-Trainer");
  const { isLocked: isFeatureLocked } = usePermissions();
  const [mode, setMode] = useState<Mode>("overview");
  const [hydrated, setHydrated] = useState(false);
  const [focusStichwortId, setFocusStichwortId] = useState<string | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<typeof allBmsQuestions>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [showTipp, setShowTipp] = useState<string | null>(null);
  void showTipp;
  const [aiTutorQ, setAiTutorQ] = useState<{
    question: (typeof allBmsQuestions)[0];
    userAnswer: string;
  } | null>(null);
  const [lastResult, setLastResult] = useState<{
    score: number;
    total: number;
    questions: typeof allBmsQuestions;
    answers: Record<string, string>;
    wasDaily: boolean;
    minutes: number;
  } | null>(null);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const adaptive = useAdaptiveStore();
  const saveQuizResult = useStore((s) => s.saveQuizResult);
  const addXP = useStore((s) => s.addXP);
  const checkStreak = useStore((s) => s.checkStreak);
  const logActivity = useStore((s) => s.logActivity);
  const updateSpacedRepetition = useStore((s) => s.updateSpacedRepetition);
  const quizResults = useStore((s) => s.quizResults);
  const getMinutes = useSessionTimer();

  // ── Hydrate adaptive store from quiz history on first load ──
  useEffect(() => {
    let cancelled = false;
    async function hydrate() {
      const { loadBmsQuestions, loadDirectStichwortId } = await import("@/store/adaptiveLearning");
      await Promise.all([loadBmsQuestions(), loadDirectStichwortId()]);
      if (cancelled) return;
      const results = useStore.getState().quizResults ?? [];
      const bmsResults = results.filter(
        (r) => r.type === "bms" && r.answers && r.answers.length > 0
      );
      if (bmsResults.length > 0) {
        useAdaptiveStore.getState().initializeFromQuizResults(bmsResults);
      }
      setHydrated(true);
    }
    hydrate();
    return () => { cancelled = true; };
  }, []);

  const readiness = adaptive.getMedATReadiness();
  const weakTopics = adaptive.getWeakestTopics(10);
  const strongTopics = adaptive.getStrongestTopics(5);
  const { profile } = adaptive;

  const dailyQuestions = useMemo(() => {
    if (!hydrated) return [];
    return adaptive.getAdaptiveQuestions(15);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once after hydration
  }, [hydrated]);

  useEffect(() => {
    const sw = searchParams.get("stichwort");
    if (sw && mode === "overview") {
      const qs = getQuestionsForStichwort(sw, 10);
      if (qs.length > 0) {
        const t = setTimeout(() => {
          setFocusStichwortId(sw);
          setQuizQuestions(qs);
          setCurrentIndex(0);
          setAnswers({});
          setShowResult(false);
          setShowTipp(null);
          setMode("focused");
          setSearchParams({}, { replace: true });
        }, 0);
        return () => clearTimeout(t);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run only on searchParams change
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
    if (correct) playCorrectAnswerSound();
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
    const minutes = getMinutes();
    saveQuizResult({
      id: `schwachstellen-${Date.now()}`,
      type: "bms",
      subject: focusStichwortId ? "schwachstellen" : "daily",
      score,
      total: quizQuestions.length,
      date: new Date().toLocaleDateString("de-AT"),
      timestamp: new Date().toISOString(),
      durationMinutes: minutes,
      answers: quizQuestions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === q.correctOptionId,
      })),
    });
    addXP(score * 15);
    checkStreak();
    logActivity(quizQuestions.length, minutes);
    const wasDaily = mode === "daily";
    if (wasDaily) adaptive.completeDailyChallenge();
    setLastResult({ score, total: quizQuestions.length, questions: quizQuestions, answers, wasDaily, minutes });
    setMode("result");
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
    onNext: () => {
      if (showResult) handleNext();
    },
  });

  // ============================================================
  // Result View
  // ============================================================

  if (mode === "result" && lastResult) {
    const { score, total, questions: rQuestions, answers: rAnswers, wasDaily, minutes } = lastResult;
    const pct = Math.round((score / total) * 100);
    const wrongQs = rQuestions.filter((q) => rAnswers[q.id] !== q.correctOptionId);

    // Find next weak topic to suggest
    const nextWeak = weakTopics.find((t) => {
      const available = allBmsQuestions.filter((q) => {
        const d = getDirectStichwortId(q.id);
        if (d === t.stichwortId) return true;
        return getStichwortForQuestion(q.id) === t.stichwortId;
      }).length;
      return available > 0 && t.stichwortId !== focusStichwortId;
    });

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Score Header */}
        <div className="text-center py-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
            pct >= 80 ? "bg-emerald-100 dark:bg-emerald-900/30" :
            pct >= 50 ? "bg-amber-100 dark:bg-amber-900/30" :
            "bg-red-100 dark:bg-red-900/30"
          }`}>
            <span className={`text-3xl font-bold ${
              pct >= 80 ? "text-emerald-600 dark:text-emerald-400" :
              pct >= 50 ? "text-amber-600 dark:text-amber-400" :
              "text-red-600 dark:text-red-400"
            }`}>
              {pct}%
            </span>
          </div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            {pct >= 80 ? "Stark!" : pct >= 50 ? "Gut gemacht!" : "Dranbleiben!"}
          </h2>
          <p className="text-[var(--muted)] mt-1">
            {score} von {total} richtig
            {wasDaily && " — Daily Challenge"}
            {minutes > 0 && ` · ${minutes} Min.`}
          </p>
        </div>

        {/* Score Bar */}
        <div className="card-glass p-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-[var(--muted)]">Ergebnis</span>
            <span className="font-medium text-[var(--text-primary)]">{score}/{total}</span>
          </div>
          <Progress value={pct} />
          <div className="flex justify-between mt-3 text-xs text-[var(--muted)]">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              {score} richtig
            </span>
            <span className="flex items-center gap-1">
              <XCircle className="w-3.5 h-3.5 text-red-500" />
              {total - score} falsch
            </span>
          </div>
        </div>

        {/* Wrong Answers Summary */}
        {wrongQs.length > 0 && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                Falsche Antworten ({wrongQs.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {wrongQs.map((q) => {
                const sw = alleStichworteListe.find(
                  (s) => s.id === (getDirectStichwortId(q.id) || getStichwortForQuestion(q.id))
                );
                const chapterLink = sw?.linkedChapterId && sw?.fach
                  ? pathForChapter(sw.fach, sw.linkedChapterId)
                  : null;
                return (
                  <div key={q.id} className="p-3 rounded-lg bg-red-50/50 dark:bg-red-900/10 border border-red-200/50 dark:border-red-800/30">
                    <p className="text-sm text-[var(--text-primary)] line-clamp-2">{q.text}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {sw && (
                        <Badge variant="default" className="text-[10px]">{sw.thema}</Badge>
                      )}
                      {chapterLink && (
                        <button
                          onClick={() => navigate(chapterLink)}
                          className="text-[10px] text-[var(--accent)] hover:underline flex items-center gap-0.5"
                        >
                          <BookOpen className="w-3 h-3" />
                          Nachlesen
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3">
          {nextWeak && (
            <Button onClick={() => startFocusedQuiz(nextWeak.stichwortId)} className="gap-2">
              <Target className="w-4 h-4" />
              Nächste Schwachstelle: {nextWeak.thema} ({nextWeak.rate}%)
            </Button>
          )}
          {wasDaily && (
            <Button variant="outline" onClick={() => startDailyChallenge()} className="gap-2" disabled={dailyQuestions.length === 0}>
              <RotateCcw className="w-4 h-4" />
              Nochmal spielen
            </Button>
          )}
          <Button variant="ghost" onClick={() => setMode("overview")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </Button>
        </div>
      </div>
    );
  }

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
            <span className="text-sm text-[var(--muted)]">
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
            <p className="text-base font-medium text-[var(--text-primary)] mb-6">{q.text}</p>
            <div className="space-y-3">
              {q.options.map((opt) => {
                let classes = "border-[var(--border)] hover:bg-accent text-muted-foreground";
                if (showResult) {
                  if (opt.id === q.correctOptionId) {
                    classes =
                      "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300";
                  } else if (opt.id === userAnswer && !isCorrect) {
                    classes =
                      "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
                  }
                } else if (userAnswer === opt.id) {
                  classes =
                    "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30";
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
                <p className="text-sm text-[var(--muted)]">
                  {stripMarkdownAsterisks(q.explanation)}
                </p>
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
              <AiTutorButton
                onClick={() => setAiTutorQ({ question: q, userAnswer: userAnswer || "" })}
              />
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

  if (isFeatureLocked("fortschritt")) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <Paywall feature="Schwachstellen-Trainer">
          <div className="text-center py-12 space-y-3">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Schwachstellen-Trainer
            </h2>
            <p className="text-[var(--muted)]">
              Gezieltes Training deiner schwächsten Themen — einmalig €29,90.
            </p>
          </div>
        </Paywall>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <BreadcrumbNav
        items={[{ label: "Dashboard", href: "/" }, { label: "Schwachstellen-Trainer" }]}
      />

      {/* Premium Hero Header */}
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)]" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 30%, rgba(239,68,68,0.3), transparent 60%)" }} />
        <div className="relative px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Schwachstellen-Trainer</h1>
            <p className="text-sm text-slate-400 mt-1">Gezieltes Training deiner schwächsten Themen</p>
          </div>
          {/* Readiness Ring */}
          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              <div className="flex items-center gap-1.5 justify-end">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="text-lg font-bold text-orange-400 tabular-nums">{profile.dailyChallengeStreak}</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">{profile.totalQuestionsAnswered.toLocaleString("de-AT")} Fragen</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="text-center">
              <svg width={72} height={72}>
                <circle cx={36} cy={36} r={30} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={5} />
                <circle
                  cx={36} cy={36} r={30} fill="none"
                  stroke={readiness >= 60 ? "#10b981" : readiness >= 30 ? "#f59e0b" : "#ef4444"}
                  strokeWidth={5} strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 30}
                  strokeDashoffset={2 * Math.PI * 30 * (1 - readiness / 100)}
                  transform="rotate(-90 36 36)"
                  style={{ transition: "stroke-dashoffset 1s ease" }}
                />
                <text x={36} y={33} textAnchor="middle" dominantBaseline="central" fill="white" fontSize={18} fontWeight={700}>{readiness}%</text>
                <text x={36} y={48} textAnchor="middle" fill="#94a3b8" fontSize={8}>READINESS</text>
              </svg>
            </div>
          </div>
        </div>
        {/* Mini stats strip */}
        <div className="border-t border-white/[0.06] grid grid-cols-3 divide-x divide-white/[0.06]">
          {[
            { label: "MedAT Readiness", value: `${readiness}%`, color: readiness >= 60 ? "text-emerald-400" : readiness >= 30 ? "text-amber-400" : "text-red-400" },
            { label: "Tages-Streak", value: `${profile.dailyChallengeStreak}`, color: "text-orange-400" },
            { label: "Stichworte geübt", value: `${totalPracticed}/${totalStichworte}`, color: "text-blue-400" },
          ].map((s) => (
            <div key={s.label} className="px-4 py-3 text-center">
              <div className={`text-sm font-bold tabular-nums ${s.color}`}>{s.value}</div>
              <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fehler-Analyse */}
      <SchwachstellenAnalyse />

      {/* Action Cards: Daily Challenge + Smart Recovery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={startDailyChallenge}
          className="group relative overflow-hidden rounded-xl border border-orange-500/20 p-5 text-left transition-all hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 cursor-pointer"
          style={{ background: "linear-gradient(135deg, rgba(251,146,60,0.06), rgba(251,146,60,0.02))" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-orange-500/10">
              <Zap className="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <span className="text-sm font-semibold text-[var(--text-primary)]">Tägliche Challenge</span>
              <p className="text-xs text-[var(--muted)]">15 adaptive Fragen</p>
            </div>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            Fragen aus deinen Schwachstellen — Bonus-XP und Streak-Aufbau.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-orange-500 group-hover:gap-2.5 transition-all">
            <Play className="w-3 h-3" />
            Challenge starten
            <ArrowRight className="w-3 h-3" />
          </div>
        </button>

        {hasCriticalErrorPattern(quizResults ?? []) && (
          <button
            onClick={() => navigate("/schwachstellen/recovery")}
            className="group relative overflow-hidden rounded-xl border border-purple-500/20 p-5 text-left transition-all hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5 cursor-pointer"
            style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.06), rgba(139,92,246,0.02))" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-purple-500/10">
                <RefreshCw className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <span className="text-sm font-semibold text-[var(--text-primary)]">Smart Recovery</span>
                <p className="text-xs text-[var(--muted)]">Fehlerfragen wiederholen</p>
              </div>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Falsch beantwortete Fragen nochmal durchgehen — mit Erklärung vor jeder Frage.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-purple-500 group-hover:gap-2.5 transition-all">
              <RefreshCw className="w-3 h-3" />
              Recovery starten
              <ArrowRight className="w-3 h-3" />
            </div>
          </button>
        )}
      </div>

      {/* Weak Topics */}
      {weakTopics.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <Target className="w-4 h-4 text-red-500" />
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">Deine Schwachstellen</h2>
          </div>
          <div className="space-y-2">
            {weakTopics.map((topic) => {
              const sw = alleStichworteListe.find((s) => s.id === topic.stichwortId);
              const fc = fachColors[topic.fach];
              const chapterLink =
                sw?.linkedChapterId && sw?.fach
                  ? pathForChapter(sw.fach, sw.linkedChapterId)
                  : null;
              const questionsAvailable = allBmsQuestions.filter((q) => {
                const d = getDirectStichwortId(q.id);
                if (d === topic.stichwortId) return true;
                return getStichwortForQuestion(q.id) === topic.stichwortId;
              }).length;

              return (
                <div
                  key={topic.stichwortId}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-2 h-2 rounded-full ${fc?.accent || "bg-slate-400"}`} />
                      <span className="text-sm font-medium text-[var(--text-primary)]">{topic.thema}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${fc?.bg || ""} ${fc?.text || ""}`}>
                        {fc?.label || topic.fach}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <div className="h-1.5 flex-1 max-w-[140px] rounded-full bg-[var(--border)] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${topic.rate}%`, background: topic.rate >= 60 ? "#10b981" : topic.rate >= 30 ? "#f59e0b" : "#ef4444" }}
                        />
                      </div>
                      <span className="text-xs tabular-nums text-[var(--muted)]">{topic.rate}%</span>
                      <span className="text-[10px] text-[var(--muted)]">
                        {questionsAvailable} Fragen
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-3 shrink-0">
                    {chapterLink && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => navigate(chapterLink)}
                        className="text-xs h-8"
                      >
                        <BookOpen className="w-3 h-3 mr-1" />
                        Lernen
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startFocusedQuiz(topic.stichwortId)}
                      disabled={questionsAvailable === 0}
                      className="h-8"
                    >
                      <RotateCcw className="w-3 h-3 mr-1" />
                      Üben
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {weakTopics.length === 0 && (
        <Card>
          <CardContent className="py-8 text-center">
            <Target className="w-8 h-8 text-[var(--muted)] mx-auto mb-2" />
            <p className="text-sm text-[var(--muted)]">
              Bearbeite BMS-Quizze, damit deine Schwachstellen erkannt werden.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Strong Topics */}
      {strongTopics.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <Trophy className="w-4 h-4 text-amber-500" />
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">Deine Stärken</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {strongTopics.map((topic) => {
              const fc = fachColors[topic.fach];
              return (
                <div
                  key={topic.stichwortId}
                  className="flex items-center justify-between p-3 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03]"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-[var(--text-primary)]">{topic.thema}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${fc?.bg || ""} ${fc?.text || ""}`}>
                      {fc?.label}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-500 tabular-nums">{topic.rate}%</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
