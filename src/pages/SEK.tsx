import { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Play, Send, CheckCircle2, XCircle, Shuffle, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { sekStrategyGuide } from "@/data/sekData";
import {
  emotionenErkennenTasks,
  emotionenRegulierenTasks,
  sozialesEntscheidenTasks,
} from "@/data/sekDataNew";
import type {
  EmotionenErkennenTask,
  EmotionenRegulierenTask,
  SozialesEntscheidenTask,
} from "@/data/sekDataNew";
import { useStore } from "@/store/useStore";

type SekView = "overview" | "strategy" | "erkennen-quiz" | "erkennen-result" | "regulieren-quiz" | "regulieren-result" | "entscheiden-quiz" | "entscheiden-result";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SEK() {
  const [view, setView] = useState<SekView>("overview");

  if (view === "strategy") {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{sekStrategyGuide.title}</h1>
        {sekStrategyGuide.sections.map((s, i) => (
          <Card key={i}><CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{s.heading}</h2>
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{s.content}</div>
          </CardContent></Card>
        ))}
      </div>
    );
  }

  if (view === "erkennen-quiz" || view === "erkennen-result") return <EmotionenErkennenQuiz tasks={emotionenErkennenTasks} onBack={() => setView("overview")} />;
  if (view === "regulieren-quiz" || view === "regulieren-result") return <EmotionenRegulierenQuiz tasks={emotionenRegulierenTasks} onBack={() => setView("overview")} />;
  if (view === "entscheiden-quiz" || view === "entscheiden-result") return <SozialesEntscheidenQuiz tasks={sozialesEntscheidenTasks} onBack={() => setView("overview")} />;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "SEK" }]} />
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">SEK — Sozial-emotionale Kompetenzen</h1>
        <p className="text-muted mt-1">Trainiere Emotionserkennung, Emotionsregulation und soziales Entscheiden.</p>
      </div>

      <Card>
        <CardContent className="p-5 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Strategie-Guide</h3>
            <p className="text-sm text-muted">Lerne die 7 Basisemotionen und Strategien für alle 3 SEK-Untertests</p>
          </div>
          <Button variant="outline" onClick={() => setView("strategy")}>
            <BookOpen className="w-4 h-4 mr-2" /> Lesen
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                <span className="text-pink-600 dark:text-pink-400 text-sm font-bold">EE</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Emotionen erkennen</h3>
            </div>
            <p className="text-sm text-muted mb-1">5 Emotionen pro Situation: wahrscheinlich oder unwahrscheinlich?</p>
            <p className="text-xs text-muted mb-3">{emotionenErkennenTasks.length} Situationen | Alles-oder-Nichts</p>
            <Button size="sm" className="w-full" onClick={() => setView("erkennen-quiz")} disabled={emotionenErkennenTasks.length === 0}>
              <Play className="w-4 h-4 mr-1" /> Üben ({emotionenErkennenTasks.length > 0 ? "14 Aufgaben" : "Daten fehlen"})
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 dark:text-amber-400 text-sm font-bold">ER</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Emotionen regulieren</h3>
            </div>
            <p className="text-sm text-muted mb-1">Beste Bewältigungsstrategie wählen (4 Optionen)</p>
            <p className="text-xs text-muted mb-3">{emotionenRegulierenTasks.length} Szenarien | Prozentual</p>
            <Button size="sm" className="w-full" onClick={() => setView("regulieren-quiz")} disabled={emotionenRegulierenTasks.length === 0}>
              <Play className="w-4 h-4 mr-1" /> Üben ({emotionenRegulierenTasks.length > 0 ? "12 Aufgaben" : "Daten fehlen"})
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">SE</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Soziales Entscheiden</h3>
            </div>
            <p className="text-sm text-muted mb-1">5 Aussagen nach Wichtigkeit ranken (A-E)</p>
            <p className="text-xs text-muted mb-3">{sozialesEntscheidenTasks.length} Dilemmata | Kohlberg-basiert</p>
            <Button size="sm" className="w-full" onClick={() => setView("entscheiden-quiz")} disabled={sozialesEntscheidenTasks.length === 0}>
              <Play className="w-4 h-4 mr-1" /> Üben ({sozialesEntscheidenTasks.length > 0 ? "14 Aufgaben" : "Daten fehlen"})
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

function EmotionenErkennenQuiz({ tasks, onBack }: { tasks: EmotionenErkennenTask[]; onBack: () => void }) {
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
  const [questions] = useState(() => shuffle(tasks).slice(0, 14));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Record<string, "wahrscheinlich" | "unwahrscheinlich">>>({});
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const toggleEmotion = (taskId: string, emotionName: string) => {
    setAnswers((prev) => {
      const current = prev[taskId] || {};
      const val = current[emotionName];
      return {
        ...prev,
        [taskId]: { ...current, [emotionName]: val === "wahrscheinlich" ? "unwahrscheinlich" : "wahrscheinlich" },
      };
    });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      const a = answers[q.id] || {};
      const allCorrect = q.emotionen.every((e) => a[e.name] === e.correct);
      if (allCorrect) score++;
    });
    saveQuizResult({
      id: `sek-ee-${Date.now()}`, type: "sek", subject: "Emotionen erkennen", score, total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => {
        const a = answers[q.id] || {};
        const allCorrect = q.emotionen.every((e) => a[e.name] === e.correct);
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
      const allCorrect = q.emotionen.every((e) => a[e.name] === e.correct);
      if (allCorrect) score++;
    });
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-pink-700 dark:text-pink-400">{score}/{questions.length}</div>
          <p className="text-muted mt-1">{Math.round((score / questions.length) * 100)}% — Alles-oder-Nichts</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 15} XP</p>
        </CardContent></Card>
        {questions.map((q, qi) => {
          const a = answers[q.id] || {};
          const allCorrect = q.emotionen.every((e) => a[e.name] === e.correct);
          return (
            <Card key={q.id} className={`border-l-4 ${allCorrect ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {allCorrect ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  <span className="text-sm font-medium">{qi + 1}. {q.situation.slice(0, 80)}...</span>
                </div>
                <div className="ml-7 space-y-1">
                  {q.emotionen.map((e) => {
                    const userAnswer = a[e.name] || "unwahrscheinlich";
                    const isRight = userAnswer === e.correct;
                    return (
                      <div key={e.name} className={`text-xs px-2 py-1 rounded flex justify-between ${isRight ? "bg-green-50 dark:bg-green-900/10" : "bg-red-50 dark:bg-red-900/10"}`}>
                        <span>{e.name}</span>
                        <span>{isRight ? "✓" : `${userAnswer} → ${e.correct}`}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center"><Button onClick={onBack}>Zurück</Button></div>
      </div>
    );
  }

  const q = questions[index];
  if (!q) return <div className="p-8 text-center text-muted">Keine Aufgaben verfügbar.</div>;
  const currentAnswers = answers[q.id] || {};
  const allEmotionsAnswered = q.emotionen.every((e) => currentAnswers[e.name] !== undefined);
  const allQuestionsAnswered = questions.every((qu) => {
    const a = answers[qu.id] || {};
    return qu.emotionen.every((e) => a[e.name] !== undefined);
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
        <div className="flex items-center gap-2">
          <Badge className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400">Emotionen erkennen</Badge>
          <span className="text-sm text-muted">{index + 1}/{questions.length}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-pink-500 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
      </div>
      <Card><CardContent className="p-6">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mb-6">
          <p className="text-xs text-muted uppercase tracking-wide mb-1">Situation:</p>
          <p className="text-sm text-gray-800 dark:text-gray-200">{q.situation}</p>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">Ist diese Emotion in dieser Situation eher wahrscheinlich oder unwahrscheinlich?</p>
        <div className="space-y-3">
          {q.emotionen.map((e) => {
            const val = currentAnswers[e.name];
            return (
              <div key={e.name} className="flex items-center justify-between p-3 rounded-lg border border-border dark:border-gray-700">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{e.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setAnswers((prev) => ({
                        ...prev,
                        [q.id]: { ...(prev[q.id] || {}), [e.name]: "wahrscheinlich" },
                      }));
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      val === "wahrscheinlich"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700"
                        : "bg-gray-50 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    wahrscheinlich
                  </button>
                  <button
                    onClick={() => {
                      setAnswers((prev) => ({
                        ...prev,
                        [q.id]: { ...(prev[q.id] || {}), [e.name]: "unwahrscheinlich" },
                      }));
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      val === "unwahrscheinlich"
                        ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700"
                        : "bg-gray-50 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    unwahrscheinlich
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent></Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        {index < questions.length - 1
          ? <Button onClick={() => setIndex((i) => i + 1)}>Weiter <ArrowRight className="w-4 h-4 ml-1" /></Button>
          : <Button onClick={handleSubmit} disabled={!allQuestionsAnswered}><Send className="w-4 h-4 mr-1" /> Auswertung</Button>
        }
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}

// ==========================================
// EMOTIONEN REGULIEREN — Choose best strategy
// ==========================================

function EmotionenRegulierenQuiz({ tasks, onBack }: { tasks: EmotionenRegulierenTask[]; onBack: () => void }) {
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
    saveQuizResult({
      id: `sek-er-${Date.now()}`, type: "sek", subject: "Emotionen regulieren", score: totalScore, total: maxScore,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => {
        const sel = answers[q.id];
        return { questionId: q.id, selectedAnswer: sel !== undefined ? q.strategien[sel].text : "", correct: sel !== undefined && q.strategien[sel].score === 3 };
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
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-amber-700 dark:text-amber-400">{totalScore}/{maxScore}</div>
          <p className="text-muted mt-1">{Math.round((totalScore / maxScore) * 100)}% — Prozentuale Bewertung</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{Math.round(totalScore * 5)} XP</p>
        </CardContent></Card>
        {questions.map((q, qi) => {
          const sel = answers[q.id];
          const bestIdx = q.strategien.findIndex((s) => s.score === 3);
          return (
            <Card key={q.id} className={`border-l-4 ${sel !== undefined && q.strategien[sel].score === 3 ? "border-l-green-500" : "border-l-orange-500"}`}>
              <CardContent className="p-5">
                <p className="text-sm font-medium mb-2">{qi + 1}. {q.situation.slice(0, 80)}...</p>
                <div className="ml-2 space-y-1">
                  {q.strategien.map((s, si) => (
                    <div key={si} className={`text-xs px-2 py-1.5 rounded flex justify-between items-center ${
                      si === bestIdx ? "bg-green-50 dark:bg-green-900/10 font-medium" : sel === si ? "bg-orange-50 dark:bg-orange-900/10" : ""
                    }`}>
                      <span className="flex-1">{s.text.slice(0, 60)}...</span>
                      <Badge className={`ml-2 text-[10px] ${
                        s.score === 3 ? "bg-green-100 text-green-700" : s.score === 2 ? "bg-blue-100 text-blue-700" : s.score === 1 ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"
                      }`}>{s.score}/3</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center"><Button onClick={onBack}>Zurück</Button></div>
      </div>
    );
  }

  const q = questions[index];
  if (!q) return <div className="p-8 text-center text-muted">Keine Aufgaben verfügbar.</div>;
  const allAnswered = questions.every((qu) => answers[qu.id] !== undefined);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
        <div className="flex items-center gap-2">
          <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Emotionen regulieren</Badge>
          <span className="text-sm text-muted">{index + 1}/{questions.length}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-amber-500 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
      </div>
      <Card><CardContent className="p-6">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-800 dark:text-gray-200">{q.situation}</p>
        </div>
        <div className="flex gap-2 mb-4">
          <Badge variant="danger">{q.emotion}</Badge>
          <Badge variant="info">Ziel: {q.ziel}</Badge>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Welche Strategie ist am besten geeignet?</p>
        <div className="space-y-2">
          {q.strategien.map((s, si) => (
            <button key={si} onClick={() => setAnswers((p) => ({ ...p, [q.id]: si }))}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                answers[q.id] === si
                  ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300"
                  : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}>
              {s.text}
            </button>
          ))}
        </div>
      </CardContent></Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        {index < questions.length - 1
          ? <Button onClick={() => setIndex((i) => i + 1)}>Weiter <ArrowRight className="w-4 h-4 ml-1" /></Button>
          : <Button onClick={handleSubmit} disabled={!allAnswered}><Send className="w-4 h-4 mr-1" /> Auswertung</Button>
        }
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}

// ==========================================
// SOZIALES ENTSCHEIDEN — Rank 5 statements
// ==========================================

function SozialesEntscheidenQuiz({ tasks, onBack }: { tasks: SozialesEntscheidenTask[]; onBack: () => void }) {
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
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
    let score = 0;
    q.aussagen.forEach((a, i) => {
      const userRank = r[i];
      if (userRank !== undefined) {
        const diff = Math.abs(userRank - a.idealRank);
        score += Math.max(0, 4 - diff); // 4 for exact, 3 for off-by-1, etc.
      }
    });
    return score;
  };

  const handleSubmit = () => {
    let totalScore = 0;
    const maxPerQ = 20; // 5 statements × 4 max points
    questions.forEach((q) => { totalScore += calculateScore(q); });
    const maxScore = questions.length * maxPerQ;
    saveQuizResult({
      id: `sek-se-${Date.now()}`, type: "sek", subject: "Soziales Entscheiden", score: totalScore, total: maxScore,
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

  if (phase === "result") {
    let totalScore = 0;
    const maxPerQ = 20;
    questions.forEach((q) => { totalScore += calculateScore(q); });
    const maxScore = questions.length * maxPerQ;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-blue-700 dark:text-blue-400">{Math.round((totalScore / maxScore) * 100)}%</div>
          <p className="text-muted mt-1">{totalScore} von {maxScore} Punkten</p>
        </CardContent></Card>
        {questions.map((q, qi) => {
          const r = rankings[q.id] || {};
          const qScore = calculateScore(q);
          return (
            <Card key={q.id} className={`border-l-4 ${qScore >= 16 ? "border-l-green-500" : qScore >= 10 ? "border-l-orange-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <p className="text-sm font-medium mb-2">{qi + 1}. {q.dilemma.slice(0, 80)}... <Badge variant="info" className="text-[10px] ml-1">{qScore}/{maxPerQ}</Badge></p>
                <div className="ml-2 space-y-1">
                  {q.aussagen.map((a, ai) => (
                    <div key={ai} className="text-xs flex items-center gap-2">
                      <span className={`w-16 ${r[ai] === a.idealRank ? "text-green-600 font-bold" : "text-red-500"}`}>
                        Dein: {r[ai] || "-"} | Ideal: {a.idealRank}
                      </span>
                      <span className="flex-1">{a.text.slice(0, 60)}...</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center"><Button onClick={onBack}>Zurück</Button></div>
      </div>
    );
  }

  const q = questions[index];
  if (!q) return <div className="p-8 text-center text-muted">Keine Aufgaben verfügbar.</div>;
  const currentRanking = rankings[q.id] || {};
  const allRanked = q.aussagen.every((_, i) => currentRanking[i] !== undefined);
  const allQuestionsRanked = questions.every((qu) => {
    const r = rankings[qu.id] || {};
    return qu.aussagen.every((_, i) => r[i] !== undefined);
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
        <div className="flex items-center gap-2">
          <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">Soziales Entscheiden</Badge>
          <span className="text-sm text-muted">{index + 1}/{questions.length}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
      </div>
      <Card><CardContent className="p-6">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-800 dark:text-gray-200">{q.dilemma}</p>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">Ordne die Aussagen nach Wichtigkeit (1 = wichtigste, 5 = unwichtigste):</p>
        <div className="space-y-3">
          {q.aussagen.map((a, ai) => (
            <div key={ai} className="flex items-center gap-3 p-3 rounded-lg border border-border dark:border-gray-700">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((rank) => {
                  const isSelected = currentRanking[ai] === rank;
                  const isUsed = Object.values(currentRanking).includes(rank) && !isSelected;
                  return (
                    <button key={rank} onClick={() => setRank(q.id, ai, rank)}
                      disabled={isUsed}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-blue-500 text-white"
                          : isUsed
                            ? "bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed"
                            : "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      }`}>
                      {rank}
                    </button>
                  );
                })}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">{a.text}</p>
            </div>
          ))}
        </div>
      </CardContent></Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        {index < questions.length - 1
          ? <Button onClick={() => setIndex((i) => i + 1)}>Weiter <ArrowRight className="w-4 h-4 ml-1" /></Button>
          : <Button onClick={handleSubmit} disabled={!allQuestionsRanked}><Send className="w-4 h-4 mr-1" /> Auswertung</Button>
        }
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}
