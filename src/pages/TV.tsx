import { useState, useMemo } from "react";
import { ArrowLeft, BookOpen, Play, Send, CheckCircle2, XCircle, ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { tvStrategyGuide, tvTexts } from "@/data/tvData";
import { tvTextSets } from "@/data/tvTextsExpanded";
import { tvTextSets2 } from "@/data/tvTextsExpanded2";
import { useStore } from "@/store/useStore";
import type { TVTextSet, TVTextMC } from "@/data/tvTextsExpanded";

const allTextSets: TVTextSet[] = [...tvTextSets, ...tvTextSets2];

type TvView = "overview" | "strategy" | "legacy-quiz" | "legacy-results" | "set-quiz" | "set-results";

const LABELS = ["A", "B", "C", "D", "E"];

export default function TV() {
  const [view, setView] = useState<TvView>("overview");
  // Legacy mode
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const [legacyAnswers, setLegacyAnswers] = useState<Record<string, boolean | null>>({});
  // Set mode
  const [selectedSetIndex, setSelectedSetIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [mcAnswers, setMcAnswers] = useState<Record<string, number>>({});
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const tvText = tvTexts[selectedTextIndex];
  const currentSet = allTextSets[selectedSetIndex];

  // --- Legacy quiz handlers ---
  const handleStartLegacy = (textIdx: number) => {
    setSelectedTextIndex(textIdx);
    setLegacyAnswers({});
    setView("legacy-quiz");
  };

  const handleSubmitLegacy = () => {
    const statements = tvText.statements;
    const score = statements.filter((s) => legacyAnswers[s.id] === s.isDerivable).length;
    saveQuizResult({
      id: `tv-${Date.now()}`, type: "tv", subject: tvText.title, score, total: statements.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: statements.map((s) => ({ questionId: s.id, selectedAnswer: String(legacyAnswers[s.id]), correct: legacyAnswers[s.id] === s.isDerivable })),
    });
    addXP(score * 10);
    checkStreak();
    setView("legacy-results");
  };

  // --- Set quiz handlers ---
  const handleStartSet = (setIdx: number) => {
    setSelectedSetIndex(setIdx);
    setTextIndex(0);
    setMcAnswers({});
    setView("set-quiz");
  };

  const allSetQuestions = useMemo(() => {
    if (!currentSet) return [];
    return currentSet.texts.flatMap((t) => t.questions);
  }, [currentSet]);

  const handleSubmitSet = () => {
    const score = allSetQuestions.filter((q) => mcAnswers[q.id] === q.correctOption).length;
    saveQuizResult({
      id: `tv-set-${Date.now()}`, type: "tv", subject: currentSet.name, score, total: allSetQuestions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: allSetQuestions.map((q) => ({ questionId: q.id, selectedAnswer: mcAnswers[q.id] !== undefined ? LABELS[mcAnswers[q.id]] : "", correct: mcAnswers[q.id] === q.correctOption })),
    });
    addXP(score * 10);
    checkStreak();
    setView("set-results");
  };

  // ===== STRATEGY =====
  if (view === "strategy") {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{tvStrategyGuide.title}</h1>
        {tvStrategyGuide.sections.map((s, i) => (
          <Card key={i}><CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{s.heading}</h2>
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{s.content}</div>
          </CardContent></Card>
        ))}
      </div>
    );
  }

  // ===== LEGACY RESULTS =====
  if (view === "legacy-results") {
    const statements = tvText.statements;
    const score = statements.filter((s) => legacyAnswers[s.id] === s.isDerivable).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">{score}/{statements.length}</div>
          <p className="text-muted mt-1">{Math.round((score / statements.length) * 100)}% richtig</p>
        </CardContent></Card>
        {statements.map((s, i) => {
          const correct = legacyAnswers[s.id] === s.isDerivable;
          return (
            <Card key={s.id} className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-2 mb-2">
                  {correct ? <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> : <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />}
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{i + 1}. {s.text}</span>
                </div>
                <div className="ml-7 space-y-1">
                  <p className="text-sm">Richtig: <Badge variant={s.isDerivable ? "success" : "danger"}>{s.isDerivable ? "Ableitbar" : "Nicht ableitbar"}</Badge></p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-2"><p className="text-xs text-blue-700 dark:text-blue-300">{s.explanation}</p></div>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center"><Button onClick={() => setView("overview")}>Zurück</Button></div>
      </div>
    );
  }

  // ===== LEGACY QUIZ =====
  if (view === "legacy-quiz") {
    const statements = tvText.statements;
    const allAnswered = statements.every((s) => legacyAnswers[s.id] !== undefined && legacyAnswers[s.id] !== null);
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
        <Card>
          <CardHeader><CardTitle className="text-gray-900 dark:text-gray-100">{tvText.title}</CardTitle></CardHeader>
          <CardContent>
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{tvText.content}</div>
          </CardContent>
        </Card>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Aussagen bewerten</h2>
        <div className="space-y-3">
          {statements.map((s, i) => (
            <Card key={s.id}><CardContent className="p-4">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">{i + 1}. {s.text}</p>
              <div className="flex gap-2">
                <button onClick={() => setLegacyAnswers((p) => ({ ...p, [s.id]: true }))}
                  className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${legacyAnswers[s.id] === true ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300" : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"}`}>
                  Ableitbar
                </button>
                <button onClick={() => setLegacyAnswers((p) => ({ ...p, [s.id]: false }))}
                  className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${legacyAnswers[s.id] === false ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300" : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"}`}>
                  Nicht ableitbar
                </button>
              </div>
            </CardContent></Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button onClick={handleSubmitLegacy} disabled={!allAnswered} size="lg"><Send className="w-4 h-4 mr-2" /> Auswertung</Button>
        </div>
      </div>
    );
  }

  // ===== SET RESULTS =====
  if (view === "set-results") {
    const score = allSetQuestions.filter((q) => mcAnswers[q.id] === q.correctOption).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}><ArrowLeft className="w-4 h-4 mr-1" /> Zurück</Button>
        <Card><CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">{score}/{allSetQuestions.length}</div>
          <p className="text-muted mt-1">{Math.round((score / allSetQuestions.length) * 100)}% richtig</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
        </CardContent></Card>
        {currentSet.texts.map((t) => (
          <div key={t.id} className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 border-l-4 border-primary-500 pl-3">{t.title}</h3>
            {t.questions.map((q, qi) => {
              const userAnswer = mcAnswers[q.id];
              const isCorrect = userAnswer === q.correctOption;
              return (
                <Card key={q.id} className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      {isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> : <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />}
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{q.question}</span>
                    </div>
                    <div className="ml-7 space-y-1">
                      {q.options.map((opt, oi) => (
                        <div key={oi} className={`text-xs px-2 py-1 rounded ${
                          oi === q.correctOption ? "bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-medium" :
                          oi === userAnswer ? "bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 line-through" : "text-gray-500 dark:text-gray-400"
                        }`}>
                          {LABELS[oi]}) {opt}
                        </div>
                      ))}
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded mt-1">
                        <p className="text-xs text-blue-700 dark:text-blue-300">{q.explanation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ))}
        <div className="flex justify-center"><Button onClick={() => setView("overview")}>Zurück</Button></div>
      </div>
    );
  }

  // ===== SET QUIZ =====
  if (view === "set-quiz") {
    const currentText = currentSet.texts[textIndex];
    const totalQuestionsAnswered = allSetQuestions.filter((q) => mcAnswers[q.id] !== undefined).length;
    const currentTextAllAnswered = currentText.questions.every((q) => mcAnswers[q.id] !== undefined);
    const allAnswered = allSetQuestions.every((q) => mcAnswers[q.id] !== undefined);

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => setView("overview")}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
          <div className="flex items-center gap-2">
            <Badge variant="info">Text {textIndex + 1}/{currentSet.texts.length}</Badge>
            <span className="text-sm text-muted">{totalQuestionsAnswered}/{allSetQuestions.length} beantwortet</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-primary-500 h-2 rounded-full transition-all" style={{ width: `${(totalQuestionsAnswered / allSetQuestions.length) * 100}%` }} />
        </div>

        {/* Text tabs */}
        <div className="flex gap-1 overflow-x-auto pb-1">
          {currentSet.texts.map((t, ti) => (
            <button key={t.id} onClick={() => setTextIndex(ti)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                ti === textIndex ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}>
              {ti + 1}. {t.title.slice(0, 20)}{t.title.length > 20 ? "..." : ""}
            </button>
          ))}
        </div>

        {/* Text content */}
        <Card>
          <CardHeader><CardTitle className="text-gray-900 dark:text-gray-100 text-base">{currentText.title}</CardTitle></CardHeader>
          <CardContent>
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{currentText.content}</div>
          </CardContent>
        </Card>

        {/* Questions for current text */}
        <div className="space-y-3">
          {currentText.questions.map((q, qi) => (
            <Card key={q.id}><CardContent className="p-4">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">{q.question}</p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => (
                  <button key={oi} onClick={() => setMcAnswers((p) => ({ ...p, [q.id]: oi }))}
                    className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-colors cursor-pointer ${
                      mcAnswers[q.id] === oi
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                        : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}>
                    <span className="font-semibold mr-1.5">{LABELS[oi]})</span>{opt}
                  </button>
                ))}
              </div>
            </CardContent></Card>
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setTextIndex((i) => i - 1)} disabled={textIndex === 0}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Voriger Text
          </Button>
          {textIndex < currentSet.texts.length - 1 ? (
            <Button onClick={() => setTextIndex((i) => i + 1)}>
              Nächster Text <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleSubmitSet} disabled={!allAnswered}>
              <Send className="w-4 h-4 mr-1" /> Auswertung
            </Button>
          )}
        </div>
        <FloatingQuestionCounter current={totalQuestionsAnswered} total={allSetQuestions.length} />
      </div>
    );
  }

  // ===== OVERVIEW =====
  const difficultyColors: Record<string, string> = {
    leicht: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    mittel: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
    schwer: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "TV" }]} />
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">TV — Textverständnis</h1>
        <p className="text-muted mt-1">5 Texte lesen, 12 Fragen beantworten — wie im echten MedAT.</p>
      </div>
      <Card>
        <CardContent className="p-5 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Strategie-Guide</h3>
            <p className="text-sm text-muted">Lerne die beste Vorgehensweise für Textverständnis-Aufgaben</p>
          </div>
          <Button variant="outline" onClick={() => setView("strategy")}>
            <BookOpen className="w-4 h-4 mr-2" /> Lesen
          </Button>
        </CardContent>
      </Card>

      {/* MC Text Sets */}
      {allTextSets.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Testsets (5 Texte + 12 Fragen)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {allTextSets.map((set, i) => {
              const totalQ = set.texts.reduce((sum, t) => sum + t.questions.length, 0);
              return (
                <Card key={set.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{set.name}</h3>
                      <Badge className={`text-[10px] ${difficultyColors[set.difficulty] || ""}`}>{set.difficulty}</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted mb-3">
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {set.texts.length} Texte</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {totalQ} Fragen</span>
                    </div>
                    <Button size="sm" className="w-full" onClick={() => handleStartSet(i)}>
                      <Play className="w-4 h-4 mr-1" /> Starten
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      )}

      {/* Legacy single texts */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Einzeltexte (Ableitbar/Nicht ableitbar)</h2>
      <div className="space-y-3">
        {tvTexts.map((t, i) => (
          <Card key={t.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{t.title}</h3>
                <p className="text-sm text-muted">{t.statements.length} Aussagen zu bewerten</p>
              </div>
              <Button onClick={() => handleStartLegacy(i)}><Play className="w-4 h-4 mr-2" /> Starten</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
