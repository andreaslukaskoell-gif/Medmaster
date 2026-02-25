import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Play, Send, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { PageEmpty } from "@/components/ui/page-states";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { usePageTitle } from "@/hooks/usePageTitle";
import StrategyGuideView from "@/components/shared/StrategyGuideView";
import { sekStrategyGuide } from "@/data/sekData";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";
import { emotionenRegulierenTasks, sozialesEntscheidenTasks } from "@/data/sekDataNew";
import {
  emotionenErkennenOffiziellAlle,
  type EmotionenErkennenOffiziellTask,
} from "@/data/emotionenErkennenOffiziell";
import type { EmotionenRegulierenTask, SozialesEntscheidenTask } from "@/data/sekDataNew";
import { useStore } from "@/store/useStore";

type SekView =
  | "overview"
  | "strategy"
  | "erkennen-quiz"
  | "erkennen-result"
  | "regulieren-quiz"
  | "regulieren-result"
  | "entscheiden-quiz"
  | "entscheiden-result";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SEK() {
  usePageTitle("SEK – Sozial-emotionale Kompetenzen");
  const [view, setView] = useState<SekView>("overview");

  const hasTasks =
    emotionenErkennenOffiziellAlle.length > 0 ||
    emotionenRegulierenTasks.length > 0 ||
    sozialesEntscheidenTasks.length > 0;
  if (!hasTasks) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "SEK" }]} />
        <PageEmpty
          message="Keine SEK-Aufgaben geladen."
          action={
            <Button asChild variant="outline" className="gap-2">
              <Link to="/">
                <BookOpen className="w-4 h-4" />
                Zum Dashboard
              </Link>
            </Button>
          }
        />
      </div>
    );
  }

  if (view === "strategy") {
    return <StrategyGuideView guide={sekStrategyGuide} onBack={() => setView("overview")} />;
  }

  if (view === "erkennen-quiz" || view === "erkennen-result")
    return (
      <EmotionenErkennenQuiz
        tasks={emotionenErkennenOffiziellAlle}
        onBack={() => setView("overview")}
      />
    );
  if (view === "regulieren-quiz" || view === "regulieren-result")
    return (
      <EmotionenRegulierenQuiz
        tasks={emotionenRegulierenTasks}
        onBack={() => setView("overview")}
      />
    );
  if (view === "entscheiden-quiz" || view === "entscheiden-result")
    return (
      <SozialesEntscheidenQuiz
        tasks={sozialesEntscheidenTasks}
        onBack={() => setView("overview")}
      />
    );

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "SEK" }]} />
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          SEK — Sozial-emotionale Kompetenzen
        </h1>
        <p className="text-muted mt-1">
          Trainiere Emotionserkennung, Emotionsregulation und soziales Entscheiden.
        </p>
      </div>

      <Card>
        <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Strategie-Guide</h3>
            <p className="text-sm text-muted">
              Lerne die 7 Basisemotionen und Strategien für alle 3 SEK-Untertests
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setView("strategy")}
            className="w-full sm:w-auto"
          >
            <BookOpen className="w-4 h-4 mr-2" /> Lesen
          </Button>
        </CardContent>
      </Card>

      <UebungsbeschreibungCard id="sek-emotionen-erkennen" collapsible defaultCollapsed />
      <UebungsbeschreibungCard id="sek-emotionen-regulieren" collapsible defaultCollapsed />
      <UebungsbeschreibungCard id="sek-soziales-entscheiden" collapsible defaultCollapsed />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-pink-600 dark:text-pink-400 text-sm font-bold">EE</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                Emotionen erkennen
              </h3>
            </div>
            <p className="text-sm text-muted mb-1">
              5 Emotionen pro Situation: wahrscheinlich oder unwahrscheinlich?
            </p>
            <p className="text-xs text-muted mb-3">
              {emotionenErkennenOffiziellAlle.length} Situationen | Alles-oder-Nichts
            </p>
            <Button
              size="sm"
              className="w-full"
              onClick={() => setView("erkennen-quiz")}
              disabled={emotionenErkennenOffiziellAlle.length === 0}
            >
              <Play className="w-4 h-4 mr-1" /> Üben (
              {emotionenErkennenOffiziellAlle.length > 0 ? "14 Aufgaben" : "Daten fehlen"})
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-amber-600 dark:text-amber-400 text-sm font-bold">ER</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                Emotionen regulieren
              </h3>
            </div>
            <p className="text-sm text-muted mb-1">
              Beste Bewältigungsstrategie wählen (4 Optionen)
            </p>
            <p className="text-xs text-muted mb-3">
              {emotionenRegulierenTasks.length} Szenarien | Prozentual
            </p>
            <Button
              size="sm"
              className="w-full"
              onClick={() => setView("regulieren-quiz")}
              disabled={emotionenRegulierenTasks.length === 0}
            >
              <Play className="w-4 h-4 mr-1" /> Üben (
              {emotionenRegulierenTasks.length > 0 ? "12 Aufgaben" : "Daten fehlen"})
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">SE</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                Soziales Entscheiden
              </h3>
            </div>
            <p className="text-sm text-muted mb-1">5 Überlegungen (A–E) nach Wichtigkeit ordnen</p>
            <p className="text-xs text-muted mb-3">
              {sozialesEntscheidenTasks.length} Situationen | 14 Aufgaben, 21 Min (offizielles
              Format)
            </p>
            <Button
              size="sm"
              className="w-full"
              onClick={() => setView("entscheiden-quiz")}
              disabled={sozialesEntscheidenTasks.length === 0}
            >
              <Play className="w-4 h-4 mr-1" /> Üben (
              {sozialesEntscheidenTasks.length > 0 ? "14 Aufgaben" : "Daten fehlen"})
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ==========================================
// EMOTIONEN ERKENNEN — Toggle w/u per emotion
// ==========================================

function EmotionenErkennenQuiz({
  tasks,
  onBack,
}: {
  tasks: EmotionenErkennenOffiziellTask[];
  onBack: () => void;
}) {
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
  const [questions] = useState(() => shuffle(tasks).slice(0, 14));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, Record<string, "wahrscheinlich" | "unwahrscheinlich">>
  >({});
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const _toggleEmotion = (taskId: string, optionId: string) => {
    setAnswers((prev) => {
      const current = prev[taskId] || {};
      const val = current[optionId];
      return {
        ...prev,
        [taskId]: {
          ...current,
          [optionId]: val === "wahrscheinlich" ? "unwahrscheinlich" : "wahrscheinlich",
        },
      };
    });
  };
  void _toggleEmotion;

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      const a = answers[q.id] || {};
      const allCorrect = q.emotionen.every((e) => a[e.id] === e.correct);
      if (allCorrect) score++;
    });
    saveQuizResult({
      id: `sek-ee-${Date.now()}`,
      type: "sek",
      subject: "Emotionen erkennen",
      score,
      total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => {
        const a = answers[q.id] || {};
        const allCorrect = q.emotionen.every((e) => a[e.id] === e.correct);
        return { questionId: q.id, selectedAnswer: JSON.stringify(a), correct: allCorrect };
      }),
    });
    addXP(score * 15);
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  if (phase === "result") {
    let score = 0;
    questions.forEach((q) => {
      const a = answers[q.id] || {};
      if (q.emotionen.every((e) => a[e.id] === e.correct)) score++;
    });
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-pink-700 dark:text-pink-400">
              {score}/{questions.length}
            </div>
            <p className="text-muted mt-1">
              {Math.round((score / questions.length) * 100)}% — Alles-oder-Nichts
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 15} XP</p>
          </CardContent>
        </Card>
        {questions.map((q, qi) => {
          const a = answers[q.id] || {};
          const allCorrect = q.emotionen.every((e) => a[e.id] === e.correct);
          return (
            <Card
              key={q.id}
              className={`border-l-4 ${allCorrect ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {allCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                  <span className="text-sm font-medium">
                    {qi + 1}. {q.situation.slice(0, 80)}...
                  </span>
                </div>
                <div className="ml-7 space-y-1">
                  {q.emotionen.map((e) => {
                    const userAnswer = a[e.id] || "unwahrscheinlich";
                    const isRight = userAnswer === e.correct;
                    return (
                      <div
                        key={e.id}
                        className={`text-xs px-2 py-1 rounded flex justify-between ${isRight ? "bg-green-50 dark:bg-green-900/10" : "bg-red-50 dark:bg-red-900/10"}`}
                      >
                        <span>{e.text}</span>
                        <span>{isRight ? "✓" : `${userAnswer} → ${e.correct}`}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={onBack}>Zurück</Button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  if (!q) return <div className="p-8 text-center text-muted">Keine Aufgaben verfügbar.</div>;
  const currentAnswers = answers[q.id] || {};
  const allQuestionsAnswered = questions.every((qu) => {
    const a = answers[qu.id] || {};
    return qu.emotionen.every((e) => a[e.id] !== undefined);
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Badge className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 w-fit">
            Emotionen erkennen
          </Badge>
          <span className="text-sm text-muted">
            {index + 1}/{questions.length}
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-pink-500 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mb-6">
            <p className="text-xs text-muted uppercase tracking-wide mb-1">Situation:</p>
            <p className="text-sm text-gray-800 dark:text-gray-200">{q.situation}</p>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">
            Wie fühlt sich {q.personName} in dieser Situation? Eher wahrscheinlich oder eher
            unwahrscheinlich?
          </p>
          <div className="space-y-3">
            {q.emotionen.map((e) => {
              const val = currentAnswers[e.id];
              return (
                <div
                  key={e.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 rounded-lg border border-border dark:border-gray-700"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    ({e.id}) {e.text}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: { ...(prev[q.id] || {}), [e.id]: "wahrscheinlich" },
                        }));
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        val === "wahrscheinlich"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      eher wahrscheinlich
                    </button>
                    <button
                      onClick={() => {
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: { ...(prev[q.id] || {}), [e.id]: "unwahrscheinlich" },
                        }));
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        val === "unwahrscheinlich"
                          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      eher unwahrscheinlich
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <Button
          variant="outline"
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
          className="w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < questions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)} className="w-full sm:w-auto">
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered}
            className="w-full sm:w-auto"
          >
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}

// ==========================================
// EMOTIONEN REGULIEREN — Choose best strategy
// ==========================================

function EmotionenRegulierenQuiz({
  tasks,
  onBack,
}: {
  tasks: EmotionenRegulierenTask[];
  onBack: () => void;
}) {
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
  const [questions] = useState(() => shuffle(tasks).slice(0, 12));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const handleSubmit = () => {
    let totalScore = 0;
    let maxScore = 0;
    questions.forEach((q) => {
      maxScore += 3;
      const selectedIdx = answers[q.id];
      if (selectedIdx !== undefined) {
        totalScore += q.strategien[selectedIdx].score;
      }
    });
    const pct = Math.round((totalScore / maxScore) * 100);
    void pct;
    saveQuizResult({
      id: `sek-er-${Date.now()}`,
      type: "sek",
      subject: "Emotionen regulieren",
      score: totalScore,
      total: maxScore,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => {
        const sel = answers[q.id];
        return {
          questionId: q.id,
          selectedAnswer: sel !== undefined ? q.strategien[sel].text : "",
          correct: sel !== undefined && q.strategien[sel].score === 3,
        };
      }),
    });
    addXP(Math.round(totalScore * 5));
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  if (phase === "result") {
    let totalScore = 0;
    let maxScore = 0;
    questions.forEach((q) => {
      maxScore += 3;
      const selectedIdx = answers[q.id];
      if (selectedIdx !== undefined) totalScore += q.strategien[selectedIdx].score;
    });
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-amber-700 dark:text-amber-400">
              {totalScore}/{maxScore}
            </div>
            <p className="text-muted mt-1">
              {Math.round((totalScore / maxScore) * 100)}% — Prozentuale Bewertung
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              +{Math.round(totalScore * 5)} XP
            </p>
          </CardContent>
        </Card>
        {questions.map((q, qi) => {
          const sel = answers[q.id];
          const bestIdx = q.strategien.findIndex((s) => s.score === 3);
          return (
            <Card
              key={q.id}
              className={`border-l-4 ${sel !== undefined && q.strategien[sel].score === 3 ? "border-l-green-500" : "border-l-orange-500"}`}
            >
              <CardContent className="p-5">
                <p className="text-sm font-medium mb-2">
                  {qi + 1}. {q.situation.slice(0, 80)}...
                </p>
                <div className="ml-2 space-y-1">
                  {q.strategien.map((s, si) => (
                    <div
                      key={si}
                      className={`text-xs px-2 py-1.5 rounded flex justify-between items-center ${
                        si === bestIdx
                          ? "bg-green-50 dark:bg-green-900/10 font-medium"
                          : sel === si
                            ? "bg-orange-50 dark:bg-orange-900/10"
                            : ""
                      }`}
                    >
                      <span className="flex-1">{s.text.slice(0, 60)}...</span>
                      <Badge
                        className={`ml-2 text-[10px] ${
                          s.score === 3
                            ? "bg-green-100 text-green-700"
                            : s.score === 2
                              ? "bg-blue-100 text-blue-700"
                              : s.score === 1
                                ? "bg-orange-100 text-orange-700"
                                : "bg-red-100 text-red-700"
                        }`}
                      >
                        {s.score}/3
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={onBack}>Zurück</Button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  if (!q) return <div className="p-8 text-center text-muted">Keine Aufgaben verfügbar.</div>;
  const allAnswered = questions.every((qu) => answers[qu.id] !== undefined);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 w-fit">
            Emotionen regulieren
          </Badge>
          <span className="text-sm text-muted">
            {index + 1}/{questions.length}
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-amber-500 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-800 dark:text-gray-200">{q.situation}</p>
          </div>
          <div className="flex gap-2 mb-4 flex-wrap">
            <Badge variant="danger">{q.emotion}</Badge>
            <Badge variant="info">Ziel: {q.ziel}</Badge>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
            Welche Strategie ist am besten geeignet?
          </p>
          <div className="space-y-2">
            {q.strategien.map((s, si) => (
              <button
                key={si}
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: si }))}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                  answers[q.id] === si
                    ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {s.text}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <Button
          variant="outline"
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
          className="w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < questions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)} className="w-full sm:w-auto">
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allAnswered} className="w-full sm:w-auto">
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}

// ==========================================
// SOZIALES ENTSCHEIDEN — Rank 5 statements (offizielles MedAT-Vorbild)
// Bewertung: Zusammenhangsmaß (Spearman Rangkorrelation)
// ==========================================

/** Spearman-Rangkorrelation zwischen Nutzer-Rangordnung und theoretischer Rangordnung (n=5). */
function spearmanScore(userRanks: Record<number, number>, idealRanks: number[]): number {
  const values = Object.values(userRanks);
  if (values.length !== 5) return 0;
  const unique = new Set(values);
  if (unique.size !== 5 || Math.min(...values) !== 1 || Math.max(...values) !== 5) return 0;
  let sumD2 = 0;
  for (let i = 0; i < idealRanks.length; i++) {
    const u = userRanks[i];
    if (u === undefined) return 0;
    sumD2 += (u - idealRanks[i]) ** 2;
  }
  const n = idealRanks.length;
  const rho = 1 - (6 * sumD2) / (n * (n * n - 1));
  // rho in [-1, 1] → Punkte 0–20 pro Aufgabe
  return Math.max(0, ((rho + 1) / 2) * 20);
}

function SozialesEntscheidenQuiz({
  tasks,
  onBack,
}: {
  tasks: SozialesEntscheidenTask[];
  onBack: () => void;
}) {
  const [phase, setPhase] = useState<"instructions" | "quiz" | "result">("instructions");
  const [questions] = useState(() => shuffle(tasks).slice(0, 14));
  const [index, setIndex] = useState(0);
  // rankings[taskId] = { statementIdx: rank (1-5) }
  const [rankings, setRankings] = useState<Record<string, Record<number, number>>>({});
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const setRank = (taskId: string, stmtIdx: number, rank: number) => {
    setRankings((prev) => {
      const current = { ...(prev[taskId] || {}) };
      // Remove rank from any other statement
      Object.keys(current).forEach((k) => {
        if (current[Number(k)] === rank) delete current[Number(k)];
      });
      current[stmtIdx] = rank;
      return { ...prev, [taskId]: current };
    });
  };

  const calculateScore = (q: SozialesEntscheidenTask): number => {
    const r = rankings[q.id] || {};
    const idealRanks = q.aussagen.map((a) => a.idealRank);
    return spearmanScore(r, idealRanks);
  };

  const handleSubmit = () => {
    let totalScore = 0;
    const maxPerQ = 20; // Spearman normiert auf 0–20 pro Aufgabe
    questions.forEach((q) => {
      totalScore += calculateScore(q);
    });
    const maxScore = questions.length * maxPerQ;
    saveQuizResult({
      id: `sek-se-${Date.now()}`,
      type: "sek",
      subject: "Soziales Entscheiden",
      score: totalScore,
      total: maxScore,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => ({
        questionId: q.id,
        selectedAnswer: JSON.stringify(rankings[q.id] || {}),
        correct: calculateScore(q) >= 16,
      })),
    });
    addXP(Math.round((totalScore / maxScore) * 100));
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  // Ausfüllvorschrift (offizielle Anleitung) vor dem Quiz anzeigen
  if (phase === "instructions") {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Ausfüllvorschrift der Aufgabengruppe Soziales Entscheiden
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-sm text-gray-700 dark:text-gray-300">
            <p>
              Die Aufgabe bei der Aufgabengruppe Soziales Entscheiden besteht darin, die fünf
              Überlegungen nach ihrer Wichtigkeit für die Entscheidung in eine Rangfolge zu bringen.
            </p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">Bitte beachten Sie:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Es müssen immer <strong>alle fünf</strong> Überlegungen in eine{" "}
                <strong>eindeutige</strong> Rangfolge gebracht und jede Wichtigkeitsstufe nur{" "}
                <strong>einmal</strong> vergeben werden.
              </li>
              <li>
                Das bedeutet, dass nie zwei oder mehr Überlegungen als gleich wichtig eingestuft und
                auf die gleiche Wichtigkeitsstufe gestellt werden können.
              </li>
              <li>
                Weiters können Sie nie einer Überlegung zwei oder mehr Wichtigkeitsstufen zuordnen.
              </li>
              <li>
                Außerdem müssen Sie <strong>alle fünf Wichtigkeitsstufen</strong> vergeben.
              </li>
            </ul>
            <p>
              Sollten Sie eine Wichtigkeitsstufe dennoch doppelt oder mehrfach vergeben und/oder
              einer oder mehreren Überlegungen keine Wichtigkeitsstufe zuordnen, wird die
              betreffende Aufgabe mit <strong>null bewertet</strong>. Bitte vergewissern Sie sich
              daher bei jeder Aufgabe, dass Sie tatsächlich immer nur einer Überlegung eine
              Wichtigkeitsstufe zugeordnet und alle fünf Wichtigkeitsstufen vergeben haben.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100 pt-2">
              Wie trage ich meine Antworten richtig ein?
            </p>
            <p>
              Wenn für Sie Überlegung <strong>A</strong> am wichtigsten ist (1. Stelle), ordnen Sie
              A die Wichtigkeitsstufe <strong>1</strong> zu. Wenn Überlegung <strong>B</strong> an
              2. Stelle steht, ordnen Sie B die Stufe <strong>2</strong> zu – und so weiter für C, D
              und E. Jede Wichtigkeitsstufe wird nur einmal vergeben, jeder Überlegung genau eine
              Stufe zugeordnet.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100">Richtiges Beispiel:</p>
            <div className="overflow-x-auto">
              <table className="w-full max-w-xs border border-border dark:border-gray-600 text-center">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border-b border-r border-border dark:border-gray-600 p-2"></th>
                    <th className="border-b border-border dark:border-gray-600 p-2">1</th>
                    <th className="border-b border-border dark:border-gray-600 p-2">2</th>
                    <th className="border-b border-border dark:border-gray-600 p-2">3</th>
                    <th className="border-b border-border dark:border-gray-600 p-2">4</th>
                    <th className="border-b border-border dark:border-gray-600 p-2">5</th>
                  </tr>
                </thead>
                <tbody>
                  {["A", "B", "C", "D", "E"].map((row, i) => (
                    <tr key={row}>
                      <td className="border-r border-border dark:border-gray-600 p-2 font-medium">
                        {row}
                      </td>
                      {[1, 2, 3, 4, 5].map((col) => (
                        <td key={col} className="border border-border dark:border-gray-600 p-2">
                          {i + 1 === col ? "✓" : ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted text-xs">
              Jede Wichtigkeitsstufe nur einmal vergeben, allen Überlegungen eine Stufe zugeordnet →
              Aufgabe wird gewertet.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Falsche Beispiele (Aufgabe wird mit 0 bewertet):
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Doppelt vergeben / keine Stufe:</strong> Einer Überlegung zwei Stufen
                zugeordnet oder einer Überlegung keine Stufe zugeordnet.
              </li>
              <li>
                <strong>Gleiche Stufe zweimal:</strong> Zwei Überlegungen haben dieselbe
                Wichtigkeitsstufe (z. B. beide 2); eine Stufe fehlt.
              </li>
              <li>
                <strong>Nicht alle Stufen vergeben:</strong> Nur z. B. Stufe 1 und 4 vergeben,
                Stufen 2, 3 und 5 fehlen.
              </li>
            </ul>
          </CardContent>
        </Card>
        <div className="flex justify-end">
          <Button onClick={() => setPhase("quiz")}>
            Weiter zu den Aufgaben <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "result") {
    let totalScore = 0;
    const maxPerQ = 20;
    questions.forEach((q) => {
      totalScore += calculateScore(q);
    });
    const maxScore = questions.length * maxPerQ;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-700 dark:text-blue-400">
              {Math.round((totalScore / maxScore) * 100)}%
            </div>
            <p className="text-muted mt-1">
              {totalScore} von {maxScore} Punkten (Übereinstimmung mit der theoretischen
              Rangordnung)
            </p>
          </CardContent>
        </Card>
        {questions.map((q, qi) => {
          const r = rankings[q.id] || {};
          const qScore = calculateScore(q);
          return (
            <Card
              key={q.id}
              className={`border-l-4 ${qScore >= 16 ? "border-l-green-500" : qScore >= 10 ? "border-l-orange-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <p className="text-sm font-medium mb-2">
                  {qi + 1}. {q.dilemma.slice(0, 80)}...{" "}
                  <Badge variant="info" className="text-[10px] ml-1">
                    {qScore}/{maxPerQ}
                  </Badge>
                </p>
                <div className="ml-2 space-y-1">
                  {q.aussagen.map((a, ai) => {
                    const label = String.fromCharCode(65 + ai);
                    return (
                      <div key={ai} className="text-xs flex items-center gap-2">
                        <span
                          className={`w-16 ${r[ai] === a.idealRank ? "text-green-600 font-bold" : "text-red-500"}`}
                        >
                          Dein: {r[ai] || "-"} | Ideal: {a.idealRank}
                        </span>
                        <span className="flex-1">
                          <span className="font-medium">{label})</span> {a.text.slice(0, 55)}...
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={onBack}>Zurück</Button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  if (!q) return <div className="p-8 text-center text-muted">Keine Aufgaben verfügbar.</div>;
  const currentRanking = rankings[q.id] || {};
  const _allRanked = q.aussagen.every((_, i) => currentRanking[i] !== undefined);
  void _allRanked;
  const allQuestionsRanked = questions.every((qu) => {
    const r = rankings[qu.id] || {};
    return qu.aussagen.every((_, i) => r[i] !== undefined);
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 w-fit">
            Soziales Entscheiden
          </Badge>
          <span className="text-sm text-muted">
            {index + 1}/{questions.length}
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-800 dark:text-gray-200">{q.dilemma}</p>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">
            Wie wichtig sind Ihrer Meinung nach die folgenden Überlegungen für diese
            Entscheidungssituation? Ordnen Sie die Überlegungen A) bis E) der Wichtigkeit nach,
            wobei <strong>1</strong> die (relativ) wichtigste und <strong>5</strong> die am
            wenigsten wichtige Überlegung ist. Entscheiden Sie sich für eine eindeutige Ordnung –
            Sie können nicht zwei Überlegungen auf die gleiche Wichtigkeitsstufe stellen.
          </p>
          <div className="space-y-3">
            {q.aussagen.map((a, ai) => {
              const label = String.fromCharCode(65 + ai);
              return (
                <div
                  key={ai}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg border border-border dark:border-gray-700"
                >
                  <div className="flex gap-1 flex-wrap">
                    {[1, 2, 3, 4, 5].map((rank) => {
                      const isSelected = currentRanking[ai] === rank;
                      const isUsed = Object.values(currentRanking).includes(rank) && !isSelected;
                      return (
                        <button
                          key={rank}
                          onClick={() => setRank(q.id, ai, rank)}
                          disabled={isUsed}
                          className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-blue-500 text-white"
                              : isUsed
                                ? "bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed"
                                : "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          }`}
                        >
                          {rank}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{label})</span>{" "}
                    {a.text}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <Button
          variant="outline"
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
          className="w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < questions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)} className="w-full sm:w-auto">
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!allQuestionsRanked}
            className="w-full sm:w-auto"
          >
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}
