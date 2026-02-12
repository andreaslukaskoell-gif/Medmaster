import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight, Send, BookOpen, Play, Eye, EyeOff, CheckCircle2, XCircle, Shuffle, BarChart3, Timer, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  kffStrategyGuide,
  implikationQuestions,
} from "@/data/kffData";
import type { ImplikationQuestion } from "@/data/kffData";
import {
  generateZahlenfolgenSet,
  generateAllergyCards,
  generateMemoryQuestions,
  generateWortflüssigkeitSet,
} from "@/data/kffGenerators";
import type { ZahlenfolgeGenerated, AllergyCard, MemoryQuestion, WortflüssigkeitQuestion } from "@/data/kffGenerators";
import { figurenAufgaben, figurenStrategyGuide } from "@/data/figurenData";
import type { FZAufgabe } from "@/data/figurenData";
import { useStore } from "@/store/useStore";

type KffView =
  | "overview"
  | "strategy"
  | "zahlenfolgen-setup"
  | "zahlenfolgen"
  | "gedaechtnis-learn"
  | "gedaechtnis-quiz"
  | "implikationen"
  | "wortflüssigkeit-setup"
  | "wortflüssigkeit"
  | "figuren-strategy"
  | "figuren-quiz";
type StrategyKey = "zahlenfolgen" | "gedaechtnis" | "implikationen" | "wortflüssigkeit" | "figuren";

export default function KFF() {
  const [view, setView] = useState<KffView>("overview");
  const [strategyKey, setStrategyKey] = useState<StrategyKey>("zahlenfolgen");

  if (view === "figuren-strategy") {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{figurenStrategyGuide.title}</h1>
        {figurenStrategyGuide.sections.map((s, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{s.heading}</h2>
              <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{s.content}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (view === "figuren-quiz") return <FigurenQuiz onBack={() => setView("overview")} />;

  if (view === "strategy") {
    const guide = kffStrategyGuide[strategyKey as keyof typeof kffStrategyGuide];
    if (!guide) {
      return (
        <div className="max-w-3xl mx-auto space-y-6">
          <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
          </Button>
          <p className="text-muted">Strategie-Guide noch nicht verfügbar.</p>
        </div>
      );
    }
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{guide.title}</h1>
        {guide.sections.map((s, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{s.heading}</h2>
              <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{s.content}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (view === "zahlenfolgen-setup") return <ZahlenfolgenSetup onStart={(d, c) => setView("zahlenfolgen")} onBack={() => setView("overview")} />;
  if (view === "zahlenfolgen") return <ZahlenfolgenQuiz onBack={() => setView("overview")} />;
  if (view === "gedaechtnis-learn") return <GedaechtnisLearn onStart={() => setView("gedaechtnis-quiz")} onBack={() => setView("overview")} />;
  if (view === "gedaechtnis-quiz") return <GedaechtnisQuiz onBack={() => setView("overview")} />;
  if (view === "implikationen") return <ImplikationenQuiz onBack={() => setView("overview")} />;
  if (view === "wortflüssigkeit-setup") return <WortflüssigkeitSetup onBack={() => setView("overview")} />;
  if (view === "wortflüssigkeit") return <WortflüssigkeitQuiz onBack={() => setView("overview")} />;

  const modules = [
    {
      id: "zahlenfolgen" as const,
      title: "Zahlenfolgen",
      desc: "Erkenne das Muster und finde die nächste Zahl. Unendlich viele generierte Aufgaben!",
      strategyKey: "zahlenfolgen" as StrategyKey,
      startView: "zahlenfolgen-setup" as KffView,
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
      badge: "Generiert",
    },
    {
      id: "gedaechtnis" as const,
      title: "Allergiepässe merken",
      desc: "Lerne 8 generierte Allergieausweise und beantworte Fragen dazu.",
      strategyKey: "gedaechtnis" as StrategyKey,
      startView: "gedaechtnis-learn" as KffView,
      color: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
      badge: "Generiert",
    },
    {
      id: "implikationen" as const,
      title: "Implikationen erkennen",
      desc: "Bestimme ob logische Schlüsse gültig sind.",
      strategyKey: "implikationen" as StrategyKey,
      startView: "implikationen" as KffView,
      color: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "wortflüssigkeit" as const,
      title: "Wortflüssigkeit",
      desc: "Erkenne das Wort aus den vertauschten Buchstaben. Mit welchem Buchstaben beginnt es?",
      strategyKey: "wortflüssigkeit" as StrategyKey,
      startView: "wortflüssigkeit-setup" as KffView,
      color: "bg-orange-100 dark:bg-orange-900/30",
      textColor: "text-orange-600 dark:text-orange-400",
      badge: "Generiert",
    },
    {
      id: "figuren" as const,
      title: "Figuren zusammensetzen",
      desc: "Welche Figur entsteht aus den Puzzleteilen? Trainiere räumliches Vorstellungsvermögen.",
      strategyKey: "figuren" as StrategyKey,
      startView: "figuren-quiz" as KffView,
      color: "bg-rose-100 dark:bg-rose-900/30",
      textColor: "text-rose-600 dark:text-rose-400",
      customStrategyView: "figuren-strategy" as KffView,
      icon: "puzzle",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "KFF" }]} />
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">KFF - Kognitive Fähigkeiten</h1>
        <p className="text-muted mt-1">Trainiere Zahlenfolgen, Gedächtnis, logisches Denken und Wortflüssigkeit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((m) => (
          <Card key={m.id}>
            <CardContent className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 ${m.color} rounded-xl flex items-center justify-center shrink-0`}>
                  {m.icon === "puzzle" ? <Puzzle className={`w-5 h-5 ${m.textColor}`} /> : <BarChart3 className={`w-5 h-5 ${m.textColor}`} />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{m.title}</h3>
                    {m.badge && <Badge variant="info" className="text-[10px]">{m.badge}</Badge>}
                  </div>
                  <p className="text-sm text-muted mt-0.5">{m.desc}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => {
                  if (m.customStrategyView) {
                    setView(m.customStrategyView);
                  } else {
                    setStrategyKey(m.strategyKey);
                    setView("strategy");
                  }
                }}>
                  <BookOpen className="w-4 h-4 mr-1" /> Strategie
                </Button>
                <Button size="sm" onClick={() => setView(m.startView)}>
                  <Play className="w-4 h-4 mr-1" /> Starten
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// ZAHLENFOLGEN - with difficulty + generator
// ==========================================

function ZahlenfolgenSetup({ onStart, onBack }: { onStart: (difficulty: string, count: number) => void; onBack: () => void }) {
  const [difficulty, setDifficulty] = useState<"leicht" | "mittel" | "schwer">("mittel");
  const [count, setCount] = useState(10);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
      </Button>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Zahlenfolgen</h1>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">Schwierigkeit</label>
            <div className="flex gap-3">
              {(["leicht", "mittel", "schwer"] as const).map((d) => (
                <button key={d} onClick={() => setDifficulty(d)}
                  className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer capitalize ${
                    difficulty === d
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">Anzahl Fragen</label>
            <div className="flex gap-3">
              {[5, 10, 15, 20].map((c) => (
                <button key={c} onClick={() => setCount(c)}
                  className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    count === c
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <Button className="w-full" size="lg" onClick={() => onStart(difficulty, count)}>
            <Shuffle className="w-5 h-5 mr-2" /> {count} Fragen generieren
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function ZahlenfolgenQuiz({ onBack }: { onBack: () => void }) {
  const [difficulty, setDifficulty] = useState<"leicht" | "mittel" | "schwer">("mittel");
  const [questionCount, setQuestionCount] = useState(10);
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [questions, setQuestions] = useState<ZahlenfolgeGenerated[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const startQuiz = () => {
    const generated = generateZahlenfolgenSet(questionCount, difficulty);
    setQuestions(generated);
    setIndex(0);
    setAnswers({});
    setPhase("quiz");
  };

  const handleSubmit = () => {
    const score = questions.filter((q) => answers[q.id] === q.correctAnswer).length;
    saveQuizResult({
      id: `kff-zf-${Date.now()}`, type: "kff", subject: `Zahlenfolgen (${difficulty})`, score, total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => ({ questionId: q.id, selectedAnswer: String(answers[q.id] ?? ""), correct: answers[q.id] === q.correctAnswer })),
    });
    addXP(score * 10);
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Zahlenfolgen</h1>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">Schwierigkeit</label>
              <div className="flex gap-3">
                {(["leicht", "mittel", "schwer"] as const).map((d) => (
                  <button key={d} onClick={() => setDifficulty(d)}
                    className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer capitalize ${
                      difficulty === d
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">Anzahl Fragen</label>
              <div className="flex gap-3">
                {[5, 10, 15, 20].map((c) => (
                  <button key={c} onClick={() => setQuestionCount(c)}
                    className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      questionCount === c
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <Button className="w-full" size="lg" onClick={startQuiz}>
              <Shuffle className="w-5 h-5 mr-2" /> {questionCount} Fragen generieren
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "result") {
    const score = questions.filter((q) => answers[q.id] === q.correctAnswer).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">{score}/{questions.length}</div>
          <p className="text-muted mt-1">{Math.round((score / questions.length) * 100)}% richtig</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
        </CardContent></Card>
        {questions.map((q, i) => {
          const correct = answers[q.id] === q.correctAnswer;
          return (
            <Card key={q.id} className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {correct ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  <span className="font-medium">{i + 1}. {q.sequence.join(", ")}, ?</span>
                  <Badge variant="info" className="text-[10px]">{q.difficulty}</Badge>
                </div>
                {!correct && <p className="text-sm text-red-600 dark:text-red-400 ml-7">Deine Antwort: {answers[q.id]}</p>}
                <p className="text-sm text-green-700 dark:text-green-400 ml-7">Richtige Antwort: {q.correctAnswer}</p>
                <div className="ml-7 mt-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg"><p className="text-xs text-blue-700 dark:text-blue-400">{q.explanation}</p></div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={onBack}>Zurück</Button>
          <Button onClick={() => setPhase("setup")}><Shuffle className="w-4 h-4 mr-1" /> Neue Fragen</Button>
        </div>
      </div>
    );
  }

  // Quiz phase
  const q = questions[index];
  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
        <div className="flex items-center gap-2">
          <Badge variant="info">{difficulty}</Badge>
          <span className="text-sm text-muted">Frage {index + 1} von {questions.length}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-primary-600 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
      </div>
      <Card><CardContent className="p-6">
        <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6">{q.sequence.join(", ")}, <span className="text-primary-700 dark:text-primary-400">?</span></p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {q.options.map((opt) => (
            <button key={opt} onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
              className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${answers[q.id] === opt ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300" : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
              {opt}
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
    </div>
  );
}

// ==========================================
// GEDAECHTNIS - with procedural cards
// ==========================================

let _currentCards: AllergyCard[] = [];
let _currentMemoryQuestions: MemoryQuestion[] = [];

function GedaechtnisLearn({ onStart, onBack }: { onStart: () => void; onBack: () => void }) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [cards] = useState<AllergyCard[]>(() => {
    const generated = generateAllergyCards(8);
    _currentCards = generated;
    _currentMemoryQuestions = generateMemoryQuestions(generated, 25);
    return generated;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Badge variant="warning">Lernphase - Präge dir alles ein!</Badge>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Allergieausweise</h1>
      <p className="text-sm text-muted">Präge dir die folgenden 8 Allergieausweise ein. Klicke auf die Karten, um Details anzuzeigen. Wenn du bereit bist, starte die Prüfphase.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((a) => (
          <Card key={a.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setRevealed((p) => ({ ...p, [a.id]: !p[a.id] }))}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{a.name}</h3>
                {revealed[a.id] ? <EyeOff className="w-4 h-4 text-muted" /> : <Eye className="w-4 h-4 text-muted" />}
              </div>
              {revealed[a.id] ? (
                <div className="space-y-1 text-sm">
                  <p><span className="text-muted">Geburtsdatum:</span> <span className="text-gray-800 dark:text-gray-200">{a.geburtsdatum}</span></p>
                  <p><span className="text-muted">Blutgruppe:</span> <span className="font-semibold text-primary-700 dark:text-primary-400">{a.blutgruppe}</span></p>
                  <p><span className="text-muted">Allergien:</span> <span className="text-gray-800 dark:text-gray-200">{a.allergien.join(", ")}</span></p>
                  <p><span className="text-muted">Land:</span> <span className="text-gray-800 dark:text-gray-200">{a.land}</span></p>
                  <p><span className="text-muted">Ausweisnummer:</span> <span className="font-mono text-gray-800 dark:text-gray-200">{a.ausweisnummer}</span></p>
                  <p><span className="text-muted">Medikamente:</span> <span className="text-gray-800 dark:text-gray-200">{a.medikamente ? "Ja" : "Nein"}</span></p>
                </div>
              ) : (
                <p className="text-sm text-muted italic">Klicke, um Details zu sehen</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center"><Button size="lg" onClick={onStart}><Play className="w-5 h-5 mr-2" /> Prüfphase starten</Button></div>
    </div>
  );
}

function GedaechtnisQuiz({ onBack }: { onBack: () => void }) {
  const questions = useMemo(() => _currentMemoryQuestions, []);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const { addXP, checkStreak, saveQuizResult } = useStore();

  if (questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <p className="text-muted">Keine Fragen verfügbar. Bitte starte zuerst die Lernphase.</p>
      </div>
    );
  }

  const q = questions[index];
  const allAnswered = questions.every((q) => answers[q.id]);

  const handleSubmit = () => {
    const score = questions.filter((q) => answers[q.id] === q.correctAnswer).length;
    saveQuizResult({
      id: `kff-ged-${Date.now()}`, type: "kff", subject: "Gedächtnis", score, total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => ({ questionId: q.id, selectedAnswer: answers[q.id] || "", correct: answers[q.id] === q.correctAnswer })),
    });
    addXP(score * 10);
    checkStreak();
    setSubmitted(true);
    setIndex(0);
  };

  if (submitted) {
    const score = questions.filter((q) => answers[q.id] === q.correctAnswer).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">{score}/{questions.length}</div>
          <p className="text-muted mt-1">{Math.round((score / questions.length) * 100)}% richtig</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
        </CardContent></Card>
        {questions.map((q, i) => {
          const correct = answers[q.id] === q.correctAnswer;
          return (
            <Card key={q.id} className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {correct ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  <span className="font-medium text-sm">{i + 1}. {q.text}</span>
                </div>
                {!correct && <p className="text-sm text-red-600 dark:text-red-400 ml-7">Deine Antwort: {answers[q.id]}</p>}
                <p className="text-sm text-green-700 dark:text-green-400 ml-7">Richtig: {q.correctAnswer}</p>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center"><Button onClick={onBack}>Zurück</Button></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
        <Badge variant="danger">Prüfphase</Badge>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-primary-600 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
      </div>
      <Card><CardContent className="p-6">
        <p className="text-sm text-muted mb-1">Frage {index + 1} von {questions.length}</p>
        <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">{q.text}</p>
        <div className="space-y-3">
          {q.options.map((opt) => (
            <button key={opt} onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${answers[q.id] === opt ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300" : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
              {opt}
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
    </div>
  );
}

// ==========================================
// IMPLIKATIONEN (kept static)
// ==========================================

function ImplikationenQuiz({ onBack }: { onBack: () => void }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const q = implikationQuestions[index];
  const allAnswered = implikationQuestions.every((q) => answers[q.id] !== undefined && answers[q.id] !== null);

  const handleSubmit = () => {
    const score = implikationQuestions.filter((q) => answers[q.id] === q.isValid).length;
    saveQuizResult({
      id: `kff-imp-${Date.now()}`, type: "kff", subject: "Implikationen", score, total: implikationQuestions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: implikationQuestions.map((q) => ({ questionId: q.id, selectedAnswer: String(answers[q.id]), correct: answers[q.id] === q.isValid })),
    });
    addXP(score * 10);
    checkStreak();
    setSubmitted(true);
    setIndex(0);
  };

  if (submitted) {
    const score = implikationQuestions.filter((q) => answers[q.id] === q.isValid).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">{score}/{implikationQuestions.length}</div>
          <p className="text-muted mt-1">{Math.round((score / implikationQuestions.length) * 100)}% richtig</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
        </CardContent></Card>
        {implikationQuestions.map((q, i) => {
          const correct = answers[q.id] === q.isValid;
          return (
            <Card key={q.id} className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {correct ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  <span className="font-medium text-sm">{i + 1}.</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-7 mb-1"><strong>Prämisse:</strong> {q.premise}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-7 mb-1"><strong>Schluss:</strong> {q.conclusion}</p>
                <p className="text-sm ml-7">Richtig: <Badge variant={q.isValid ? "success" : "danger"}>{q.isValid ? "Gültig" : "Ungültig"}</Badge></p>
                <div className="ml-7 mt-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg"><p className="text-xs text-blue-700 dark:text-blue-400">{q.explanation}</p></div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center"><Button onClick={onBack}>Zurück</Button></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
        <span className="text-sm text-muted">Frage {index + 1} von {implikationQuestions.length}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-primary-600 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / implikationQuestions.length) * 100}%` }} />
      </div>
      <Card><CardContent className="p-6">
        <p className="text-sm text-muted mb-2">Prämisse:</p>
        <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">{q.premise}</p>
        <p className="text-sm text-muted mb-2">Schlussfolgerung:</p>
        <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">{q.conclusion}</p>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Ist dieser Schluss logisch gültig?</p>
        <div className="flex gap-3">
          <button onClick={() => setAnswers((p) => ({ ...p, [q.id]: true }))}
            className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${answers[q.id] === true ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300" : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
            Gültig
          </button>
          <button onClick={() => setAnswers((p) => ({ ...p, [q.id]: false }))}
            className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${answers[q.id] === false ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300" : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
            Ungültig
          </button>
        </div>
      </CardContent></Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        {index < implikationQuestions.length - 1
          ? <Button onClick={() => setIndex((i) => i + 1)}>Weiter <ArrowRight className="w-4 h-4 ml-1" /></Button>
          : <Button onClick={handleSubmit} disabled={!allAnswered}><Send className="w-4 h-4 mr-1" /> Auswertung</Button>
        }
      </div>
    </div>
  );
}

// ==========================================
// WORTFLUESSIGKEIT - new module
// ==========================================

function WortflüssigkeitSetup({ onBack }: { onBack: () => void }) {
  return <WortflüssigkeitQuiz onBack={onBack} />;
}

function WortflüssigkeitQuiz({ onBack }: { onBack: () => void }) {
  const [difficulty, setDifficulty] = useState<"leicht" | "mittel" | "schwer">("mittel");
  const [questionCount, setQuestionCount] = useState(10);
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [questions, setQuestions] = useState<WortflüssigkeitQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const startQuiz = () => {
    const generated = generateWortflüssigkeitSet(questionCount, difficulty);
    setQuestions(generated);
    setIndex(0);
    setAnswers({});
    setPhase("quiz");
  };

  const handleSubmit = () => {
    const score = questions.filter((q) => answers[q.id] === q.correctWord[0]).length;
    saveQuizResult({
      id: `kff-wf-${Date.now()}`, type: "kff", subject: `Wortflüssigkeit (${difficulty})`, score, total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => ({ questionId: q.id, selectedAnswer: answers[q.id] || "", correct: answers[q.id] === q.correctWord[0] })),
    });
    addXP(score * 10);
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Wortflüssigkeit</h1>
        <p className="text-sm text-muted">Die Buchstaben eines Wortes wurden vertauscht. Finde heraus, mit welchem Buchstaben das Wort beginnt!</p>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">Schwierigkeit</label>
              <div className="flex gap-3">
                {(["leicht", "mittel", "schwer"] as const).map((d) => (
                  <button key={d} onClick={() => setDifficulty(d)}
                    className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer capitalize ${
                      difficulty === d
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}>
                    {d}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted mt-2">
                {difficulty === "leicht" ? "Kurze, einfache Wörter (4-7 Buchstaben)" :
                 difficulty === "mittel" ? "Zusammengesetzte Wörter (8-12 Buchstaben)" :
                 "Lange, komplexe Wörter (13+ Buchstaben)"}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">Anzahl Fragen</label>
              <div className="flex gap-3">
                {[5, 10, 15, 20].map((c) => (
                  <button key={c} onClick={() => setQuestionCount(c)}
                    className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      questionCount === c
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <Button className="w-full" size="lg" onClick={startQuiz}>
              <Shuffle className="w-5 h-5 mr-2" /> {questionCount} Wörter generieren
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "result") {
    const score = questions.filter((q) => answers[q.id] === q.correctWord[0]).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">{score}/{questions.length}</div>
          <p className="text-muted mt-1">{Math.round((score / questions.length) * 100)}% richtig</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
        </CardContent></Card>
        {questions.map((q, i) => {
          const correct = answers[q.id] === q.correctWord[0];
          return (
            <Card key={q.id} className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {correct ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  <span className="font-mono text-lg tracking-wider">{q.scrambled}</span>
                </div>
                {!correct && <p className="text-sm text-red-600 dark:text-red-400 ml-7">Dein Buchstabe: {answers[q.id]}</p>}
                <p className="text-sm text-green-700 dark:text-green-400 ml-7">Lösung: <span className="font-semibold">{q.correctWord}</span> (beginnt mit {q.correctWord[0]})</p>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={onBack}>Zurück</Button>
          <Button onClick={() => setPhase("setup")}><Shuffle className="w-4 h-4 mr-1" /> Neue Wörter</Button>
        </div>
      </div>
    );
  }

  // Quiz phase
  const q = questions[index];
  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
        <div className="flex items-center gap-2">
          <Badge variant="info">{difficulty}</Badge>
          <span className="text-sm text-muted">Wort {index + 1} von {questions.length}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-primary-600 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
      </div>
      <Card><CardContent className="p-6 text-center">
        <p className="text-sm text-muted mb-4">Mit welchem Buchstaben beginnt dieses Wort?</p>
        <p className="text-3xl font-mono font-bold tracking-[0.3em] text-gray-900 dark:text-gray-100 mb-8">{q.scrambled}</p>
        <div className="flex justify-center gap-3 flex-wrap">
          {q.options.map((letter) => (
            <button key={letter} onClick={() => setAnswers((p) => ({ ...p, [q.id]: letter }))}
              className={`w-14 h-14 rounded-xl border-2 text-xl font-bold transition-all cursor-pointer ${
                answers[q.id] === letter
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 scale-110"
                  : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105"
              }`}>
              {letter}
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
    </div>
  );
}

// ==========================================
// FIGUREN ZUSAMMENSETZEN
// ==========================================

function FigurenQuiz({ onBack }: { onBack: () => void }) {
  const [difficulty, setDifficulty] = useState<"leicht" | "mittel" | "schwer" | "alle">("alle");
  const [questionCount, setQuestionCount] = useState(10);
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [questions, setQuestions] = useState<FZAufgabe[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(90);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const startQuiz = () => {
    let pool = [...figurenAufgaben];
    if (difficulty !== "alle") {
      pool = pool.filter((q) => q.difficulty === difficulty);
    }
    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const selected = pool.slice(0, Math.min(questionCount, pool.length));
    setQuestions(selected);
    setIndex(0);
    setAnswers({});
    setTimeLeft(90);
    setPhase("quiz");
  };

  // Timer logic - reset on each question change
  useEffect(() => {
    if (phase !== "quiz") {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    setTimeLeft(90);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, index]);

  const handleFzSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const score = questions.filter((q) => answers[q.id] === q.correctOptionId).length;
    saveQuizResult({
      id: `kff-fz-${Date.now()}`,
      type: "kff",
      subject: `Figuren zusammensetzen${difficulty !== "alle" ? ` (${difficulty})` : ""}`,
      score,
      total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: questions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === q.correctOptionId,
      })),
    });
    addXP(score * 10);
    checkStreak();
    setPhase("result");
    setIndex(0);
  }, [questions, answers, difficulty, saveQuizResult, addXP, checkStreak]);

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

  // --- SETUP ---
  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Figuren zusammensetzen</h1>
        <p className="text-sm text-muted">Finde heraus, welche Figur aus den gezeigten Puzzleteilen entsteht. Du hast 1:30 Minuten pro Aufgabe.</p>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">Schwierigkeit</label>
              <div className="flex gap-3 flex-wrap">
                {(["alle", "leicht", "mittel", "schwer"] as const).map((d) => (
                  <button key={d} onClick={() => setDifficulty(d)}
                    className={`flex-1 min-w-[70px] px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer capitalize ${
                      difficulty === d
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}>
                    {d === "alle" ? "Alle" : d}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted mt-2">
                {difficulty === "alle" ? "Gemischte Schwierigkeit (2-5 Puzzleteile)" :
                 difficulty === "leicht" ? "Einfache Figuren (2-3 Puzzleteile)" :
                 difficulty === "mittel" ? "Mittlere Figuren (3-4 Puzzleteile)" :
                 "Komplexe Figuren (4-5 Puzzleteile)"}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">Anzahl Aufgaben</label>
              <div className="flex gap-3">
                {[5, 10, 15, 20].map((c) => (
                  <button key={c} onClick={() => setQuestionCount(c)}
                    className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      questionCount === c
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <Button className="w-full" size="lg" onClick={startQuiz}>
              <Puzzle className="w-5 h-5 mr-2" /> {questionCount} Aufgaben starten
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- RESULT ---
  if (phase === "result") {
    const score = questions.filter((q) => answers[q.id] === q.correctOptionId).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-rose-700 dark:text-rose-400">{score}/{questions.length}</div>
          <p className="text-muted mt-1">{Math.round((score / questions.length) * 100)}% richtig</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
        </CardContent></Card>
        {questions.map((q, i) => {
          const correct = answers[q.id] === q.correctOptionId;
          const selectedOpt = q.options.find((o) => o.id === answers[q.id]);
          const correctOpt = q.options.find((o) => o.id === q.correctOptionId);
          return (
            <Card key={q.id} className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {correct ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  <span className="font-medium text-sm">Aufgabe {i + 1}</span>
                  <Badge variant="info" className="text-[10px]">{q.difficulty}</Badge>
                </div>
                <div className="flex items-center gap-4 ml-7 mb-2 flex-wrap">
                  <div>
                    <p className="text-xs text-muted mb-1">Puzzleteile:</p>
                    <div className="flex gap-1 flex-wrap">
                      {q.pieces.map((piece, pi) => (
                        <svg key={pi} viewBox="0 0 120 120" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded">
                          <path d={piece.path} fill={piece.fill} stroke={piece.fill} strokeWidth="1" opacity="0.9" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  {correctOpt && (
                    <div>
                      <p className="text-xs text-green-600 dark:text-green-400 mb-1">Richtig ({correctOpt.id.toUpperCase()}):</p>
                      <svg viewBox="0 0 200 200" className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-700">
                        {correctOpt.paths.map((p, pi) => (
                          <path key={pi} d={p} fill="none" stroke="#22c55e" strokeWidth="3" />
                        ))}
                      </svg>
                    </div>
                  )}
                  {!correct && selectedOpt && (
                    <div>
                      <p className="text-xs text-red-600 dark:text-red-400 mb-1">Deine Antwort ({selectedOpt.id.toUpperCase()}):</p>
                      <svg viewBox="0 0 200 200" className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded border border-red-300 dark:border-red-700">
                        {selectedOpt.paths.map((p, pi) => (
                          <path key={pi} d={p} fill="none" stroke="#ef4444" strokeWidth="3" />
                        ))}
                      </svg>
                    </div>
                  )}
                </div>
                <div className="ml-7 mt-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-400">{q.explanation}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={onBack}>Zurück</Button>
          <Button onClick={() => setPhase("setup")}><Shuffle className="w-4 h-4 mr-1" /> Neue Aufgaben</Button>
        </div>
      </div>
    );
  }

  // --- QUIZ ---
  const fzQ = questions[index];
  const fzAllAnswered = questions.every((qu) => answers[qu.id] !== undefined);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timerColor = timeLeft <= 15 ? "text-red-500" : timeLeft <= 30 ? "text-orange-500" : "text-gray-600 dark:text-gray-400";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
        <div className="flex items-center gap-3">
          <Badge variant="info">{fzQ.difficulty}</Badge>
          <span className="text-sm text-muted">Aufgabe {index + 1} von {questions.length}</span>
          <div className={`flex items-center gap-1 font-mono text-sm font-semibold ${timerColor}`}>
            <Timer className="w-4 h-4" />
            {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-rose-500 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Puzzle pieces */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <Puzzle className="w-4 h-4 text-rose-500" /> Puzzleteile ({fzQ.pieces.length} Stücke)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {fzQ.pieces.map((piece, pi) => (
                <div key={pi} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 border border-gray-200 dark:border-gray-700 flex items-center justify-center aspect-square">
                  <svg viewBox="0 0 120 90" className="w-full h-full max-w-[100px] max-h-[100px]">
                    <path d={piece.path} fill={piece.fill} stroke={piece.fill} strokeWidth="1.5" opacity="0.9" />
                  </svg>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right: Answer options */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Welche Figur entsteht?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {fzQ.options.map((opt) => {
                const selected = answers[fzQ.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setAnswers((p) => ({ ...p, [fzQ.id]: opt.id }))}
                    className={`relative p-3 rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center gap-2 aspect-square ${
                      selected
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20 shadow-md scale-[1.02]"
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <span className={`absolute top-1.5 left-2.5 text-xs font-bold ${
                      selected ? "text-rose-600 dark:text-rose-400" : "text-gray-400 dark:text-gray-500"
                    }`}>
                      {opt.id.toUpperCase()}
                    </span>
                    <svg viewBox="0 0 200 200" className="w-full h-full max-w-[80px] max-h-[80px] mt-2">
                      {opt.paths.map((p, pi) => (
                        <path key={pi} d={p} fill="none" stroke={selected ? "#e11d48" : "#64748b"} strokeWidth="3" />
                      ))}
                    </svg>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={goToPrev} disabled={index === 0}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        {index < questions.length - 1
          ? <Button onClick={goToNext}>Weiter <ArrowRight className="w-4 h-4 ml-1" /></Button>
          : <Button onClick={handleFzSubmit} disabled={!fzAllAnswered}><Send className="w-4 h-4 mr-1" /> Auswertung</Button>
        }
      </div>
    </div>
  );
}
