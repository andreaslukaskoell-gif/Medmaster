import { useState, useEffect, useRef, useMemo } from "react";
import { ArrowLeft, ArrowRight, Play, Send, Clock, CheckCircle2, XCircle, Pause, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { allBmsQuestions as newBmsQuestions, getQuestionsBySubject as getNewQuestions } from "@/data/bms/index";
import { bmsQuestions as legacyQuestions, getQuestionsBySubject as getLegacyQuestions } from "@/data/bmsQuestions";
import { useStore } from "@/store/useStore";

// Use new expanded questions if available, fall back to legacy
const bmsQuestions = newBmsQuestions.length > 0 ? newBmsQuestions : legacyQuestions.map((q) => ({ ...q, difficulty: "mittel" as const, tags: [] }));
function getQuestionsBySubject(subject: string) {
  const newQ = getNewQuestions(subject);
  if (newQ.length > 0) return newQ;
  return getLegacyQuestions(subject).map((q) => ({ ...q, difficulty: "mittel" as const, tags: [] }));
}

// MedAT-H simulation sections with exact timing
interface SimSection {
  id: string;
  label: string;
  subject: string;
  questionCount: number;
  timeLimitMinutes: number;
  breakAfterMinutes?: number;
}

const FULL_SIMULATION: SimSection[] = [
  { id: "bio", label: "Biologie", subject: "biologie", questionCount: 40, timeLimitMinutes: 30, breakAfterMinutes: 5 },
  { id: "chem", label: "Chemie", subject: "chemie", questionCount: 24, timeLimitMinutes: 18, breakAfterMinutes: 5 },
  { id: "phys", label: "Physik", subject: "physik", questionCount: 18, timeLimitMinutes: 16, breakAfterMinutes: 5 },
  { id: "math", label: "Mathematik", subject: "mathematik", questionCount: 12, timeLimitMinutes: 11 },
];

const KURZTEST_OPTIONS = [
  { id: "bio", label: "Biologie", subject: "biologie", questionCount: 10, timeLimitMinutes: 8 },
  { id: "chem", label: "Chemie", subject: "chemie", questionCount: 10, timeLimitMinutes: 8 },
  { id: "phys", label: "Physik", subject: "physik", questionCount: 10, timeLimitMinutes: 8 },
  { id: "math", label: "Mathematik", subject: "mathematik", questionCount: 10, timeLimitMinutes: 8 },
  { id: "mix", label: "Gemischt", subject: "all", questionCount: 20, timeLimitMinutes: 15 },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Mode = "select" | "playing" | "break" | "result";

export default function Simulation() {
  const [mode, setMode] = useState<Mode>("select");
  const [simType, setSimType] = useState<"full" | "kurz">("full");
  const [sections, setSections] = useState<SimSection[]>([]);
  const [currentSectionIdx, setCurrentSectionIdx] = useState(0);
  const [sectionQuestions, setSectionQuestions] = useState<typeof bmsQuestions>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [allQuestions, setAllQuestions] = useState<typeof bmsQuestions>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [breakTimeLeft, setBreakTimeLeft] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const { addXP, checkStreak, saveQuizResult, logActivity } = useStore();

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const startSimulation = (type: "full" | "kurz", sectionId?: string) => {
    setSimType(type);
    let secs: SimSection[];

    if (type === "full") {
      secs = FULL_SIMULATION;
    } else {
      const opt = KURZTEST_OPTIONS.find((o) => o.id === sectionId) || KURZTEST_OPTIONS[4];
      secs = [opt];
    }

    setSections(secs);

    // Prepare questions for all sections
    const allQ: typeof bmsQuestions = [];
    for (const sec of secs) {
      let pool: typeof bmsQuestions;
      if (sec.subject === "all") {
        pool = shuffle(bmsQuestions);
      } else {
        pool = shuffle(getQuestionsBySubject(sec.subject));
      }
      allQ.push(...pool.slice(0, sec.questionCount));
    }

    setAllQuestions(allQ);

    // Load first section
    const firstSec = secs[0];
    const firstQ = allQ.slice(0, firstSec.questionCount);
    setSectionQuestions(firstQ);
    setTimeLeft(firstSec.timeLimitMinutes * 60);
    setCurrentSectionIdx(0);
    setIndex(0);
    setAnswers({});
    setMode("playing");
  };

  // Timer
  useEffect(() => {
    if (mode === "playing" && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            advanceSection();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }
    if (mode === "break" && breakTimeLeft > 0) {
      timerRef.current = setInterval(() => {
        setBreakTimeLeft((t) => {
          if (t <= 1) {
            loadNextSection();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }
  }, [mode, timeLeft, breakTimeLeft]);

  const advanceSection = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    const nextIdx = currentSectionIdx + 1;
    if (nextIdx >= sections.length) {
      finishSimulation();
      return;
    }

    const currentSec = sections[currentSectionIdx];
    if (currentSec.breakAfterMinutes) {
      setBreakTimeLeft(currentSec.breakAfterMinutes * 60);
      setMode("break");
    } else {
      loadNextSectionAt(nextIdx);
    }
  };

  const loadNextSection = () => {
    loadNextSectionAt(currentSectionIdx + 1);
  };

  const loadNextSectionAt = (idx: number) => {
    if (idx >= sections.length) { finishSimulation(); return; }

    // Calculate question offset
    let offset = 0;
    for (let i = 0; i < idx; i++) offset += sections[i].questionCount;

    const sec = sections[idx];
    const q = allQuestions.slice(offset, offset + sec.questionCount);
    setSectionQuestions(q);
    setTimeLeft(sec.timeLimitMinutes * 60);
    setCurrentSectionIdx(idx);
    setIndex(0);
    setMode("playing");
  };

  const finishSimulation = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    const score = allQuestions.filter((q) => answers[q.id] === q.correctOptionId).length;
    saveQuizResult({
      id: `sim-${Date.now()}`,
      type: "simulation",
      subject: simType === "full" ? "Vollsimulation" : sections[0]?.label,
      score,
      total: allQuestions.length,
      date: new Date().toLocaleDateString("de-AT"),
      timestamp: new Date().toISOString(),
      answers: allQuestions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === q.correctOptionId,
      })),
    });
    addXP(score * 15);
    checkStreak();
    logActivity(allQuestions.length);
    setMode("result");
    setIndex(0);
  };

  // === SELECT MODE ===
  if (mode === "select") {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "Simulation" }]} />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Testsimulation</h1>
          <p className="text-muted mt-1">Simuliere den MedAT unter realistischen Bedingungen.</p>
        </div>

        {/* Full simulation */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">MedAT-H Vollsimulation</h2>
                <p className="text-sm text-muted">BMS-Teil mit exaktem Timing und Pausen</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {FULL_SIMULATION.map((sec) => (
                <div key={sec.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{sec.label}</p>
                  <p className="text-xs text-muted">{sec.questionCount} Fragen · {sec.timeLimitMinutes} Min</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between bg-orange-50 dark:bg-orange-900/10 rounded-lg p-3">
              <div>
                <p className="text-sm font-medium text-orange-800 dark:text-orange-300">
                  Gesamt: {FULL_SIMULATION.reduce((s, x) => s + x.questionCount, 0)} Fragen
                </p>
                <p className="text-xs text-orange-600 dark:text-orange-400">
                  ~{FULL_SIMULATION.reduce((s, x) => s + x.timeLimitMinutes + (x.breakAfterMinutes || 0), 0)} Minuten inkl. Pausen
                </p>
              </div>
              <Button size="lg" onClick={() => startSimulation("full")}>
                <Play className="w-5 h-5 mr-2" /> Starten
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Kurztest */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <Play className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Kurztest</h2>
                <p className="text-sm text-muted">Schnelles Ueben eines einzelnen Fachs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {KURZTEST_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => startSimulation("kurz", opt.id)}
                  className="bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg p-4 text-left transition-colors cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                >
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{opt.label}</p>
                  <p className="text-xs text-muted">{opt.questionCount} Fragen · {opt.timeLimitMinutes} Min</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // === BREAK MODE ===
  if (mode === "break") {
    const nextSec = sections[currentSectionIdx + 1];
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mx-auto">
              <Coffee className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Pause</h2>
            <p className="text-muted">
              {sections[currentSectionIdx].label} abgeschlossen!
              {nextSec && ` Nächster Teil: ${nextSec.label} (${nextSec.questionCount} Fragen, ${nextSec.timeLimitMinutes} Min)`}
            </p>
            <div className="text-4xl font-mono font-bold text-yellow-600 dark:text-yellow-400">
              {formatTime(breakTimeLeft)}
            </div>
            <Button onClick={loadNextSection}>
              <Play className="w-4 h-4 mr-1" /> Pause ueberspringen
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // === RESULT MODE ===
  if (mode === "result") {
    const score = allQuestions.filter((q) => answers[q.id] === q.correctOptionId).length;
    const pct = Math.round((score / allQuestions.length) * 100);

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Simulationsergebnis</h1>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-5xl font-bold text-primary-700 dark:text-primary-400">{pct}%</div>
            <p className="text-lg text-muted mt-1">{score} von {allQuestions.length} richtig</p>
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2">+{score * 15} XP erhalten</p>
          </CardContent>
        </Card>

        {/* Per-section breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sections.map((sec) => {
            let offset = 0;
            for (let i = 0; i < sections.indexOf(sec); i++) offset += sections[i].questionCount;
            const secQ = allQuestions.slice(offset, offset + sec.questionCount);
            const secScore = secQ.filter((q) => answers[q.id] === q.correctOptionId).length;
            const secPct = secQ.length > 0 ? Math.round((secScore / secQ.length) * 100) : 0;
            return (
              <Card key={sec.id}>
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary-700 dark:text-primary-400">{secScore}/{secQ.length}</p>
                  <p className="text-xs text-muted">{sec.label} ({secPct}%)</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed results */}
        <div className="space-y-3">
          {allQuestions.map((q, i) => {
            const correct = answers[q.id] === q.correctOptionId;
            return (
              <Card key={q.id} className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    {correct ? <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> : <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{i + 1}. {q.text}</span>
                        <Badge variant="info" className="shrink-0">{q.subject}</Badge>
                      </div>
                    </div>
                  </div>
                  {!correct && (
                    <div className="ml-6 space-y-1 text-sm">
                      <p className="text-red-600 dark:text-red-400">Deine Antwort: {q.options.find((o) => o.id === answers[q.id])?.text || "Keine Antwort"}</p>
                      <p className="text-green-700 dark:text-green-400">Richtig: {q.options.find((o) => o.id === q.correctOptionId)?.text}</p>
                    </div>
                  )}
                  <div className="ml-6 mt-2 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                    <p className="text-xs text-blue-700 dark:text-blue-400">{q.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={() => setMode("select")}>Zurück</Button>
          <Button onClick={() => startSimulation(simType)}>Neue Simulation</Button>
        </div>
      </div>
    );
  }

  // === PLAYING MODE ===
  const currentSec = sections[currentSectionIdx];
  const q = sectionQuestions[index];

  if (!q) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Badge variant="info">{currentSec.label}</Badge>
          <span className="text-sm text-muted ml-2">
            Teil {currentSectionIdx + 1}/{sections.length} · Frage {index + 1}/{sectionQuestions.length}
          </span>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${timeLeft < 300 ? "bg-red-50 dark:bg-red-900/20" : "bg-gray-100 dark:bg-gray-800"}`}>
          <Clock className={`w-4 h-4 ${timeLeft < 300 ? "text-red-500" : "text-muted"}`} />
          <span className={`text-sm font-mono font-bold ${timeLeft < 300 ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-primary-600 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / sectionQuestions.length) * 100}%` }} />
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">{q.text}</p>
          <div className="space-y-3">
            {q.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                  answers[q.id] === opt.id
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="font-semibold mr-2">{opt.id.toUpperCase()})</span>{opt.text}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < sectionQuestions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)}>
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : currentSectionIdx < sections.length - 1 ? (
          <Button onClick={advanceSection}>
            <Pause className="w-4 h-4 mr-1" /> Nächster Teil
          </Button>
        ) : (
          <Button onClick={finishSimulation}>
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {sectionQuestions.map((sq, i) => (
          <button
            key={sq.id}
            onClick={() => setIndex(i)}
            className={`w-7 h-7 rounded text-xs font-medium transition-colors cursor-pointer ${
              i === index
                ? "bg-primary-700 text-white"
                : answers[sq.id]
                  ? "bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
