import { useState, useMemo } from "react";
import { ArrowLeft, BookOpen, Play, Send, CheckCircle2, XCircle, ArrowRight, Clock, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { usePageTitle } from "@/hooks/usePageTitle";
import StrategyGuideView from "@/components/shared/StrategyGuideView";
import { tvStrategyGuide, tvTexts } from "@/data/tvData";
import { tvTextSets } from "@/data/tvTextsExpanded";
import { tvTextSets2 } from "@/data/tvTextsExpanded2";
import { useStore } from "@/store/useStore";
import type { TVTextSet, TVTextMC } from "@/data/tvTextsExpanded";

const allTextSets: TVTextSet[] = [...tvTextSets, ...tvTextSets2];

type TvView = "overview" | "strategy" | "legacy-quiz" | "legacy-results" | "set-quiz" | "set-results";

const LABELS = ["A", "B", "C", "D", "E"];

export default function TV() {
  usePageTitle("TV – Textverständnis");
  const [view, setView] = useState<TvView>("overview");
  // Legacy mode
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const [legacyAnswers, setLegacyAnswers] = useState<Record<string, boolean | null>>({});
  // Set mode
  const [selectedSetIndex, setSelectedSetIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [mcAnswers, setMcAnswers] = useState<Record<string, number>>({});
  // Mobile
  const [showAllLegacy, setShowAllLegacy] = useState(false);
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

  // Keyboard navigation for set-quiz (arrow keys for text navigation)
  useKeyboardShortcuts({
    disabled: view !== "set-quiz",
    onNext: () => { if (view === "set-quiz" && textIndex < currentSet.texts.length - 1) setTextIndex((i) => i + 1); },
    onPrev: () => { if (view === "set-quiz" && textIndex > 0) setTextIndex((i) => i - 1); },
  });

  // ===== STRATEGY =====
  if (view === "strategy") {
    return <StrategyGuideView guide={tvStrategyGuide} onBack={() => setView("overview")} />;
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <Button variant="ghost" size="sm" onClick={() => setView("overview")}><ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen</Button>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <Badge variant="info">Text {textIndex + 1}/{currentSet.texts.length}</Badge>
            <span className="text-sm text-muted">{totalQuestionsAnswered}/{allSetQuestions.length} beantwortet</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-primary-500 h-2 rounded-full transition-all" style={{ width: `${(totalQuestionsAnswered / allSetQuestions.length) * 100}%` }} />
        </div>

        {/* Text tabs */}
        <div className="flex gap-1 overflow-x-auto pb-2 -mx-1 px-1">
          {currentSet.texts.map((t, ti) => (
            <button key={t.id} onClick={() => setTextIndex(ti)}
              className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
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
                    className={`w-full text-left px-3 py-2.5 rounded-lg border text-sm transition-colors cursor-pointer ${
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

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <Button variant="outline" onClick={() => setTextIndex((i) => i - 1)} disabled={textIndex === 0} className="w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 mr-1" /> Voriger
          </Button>
          {textIndex < currentSet.texts.length - 1 ? (
            <Button onClick={() => setTextIndex((i) => i + 1)} className="w-full sm:w-auto">
              Nächster <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleSubmitSet} disabled={!allAnswered} className="w-full sm:w-auto">
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

  const displayedLegacyTexts = showAllLegacy ? tvTexts : tvTexts.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "TV" }]} />
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">TV — Textverständnis</h1>
        <p className="text-muted mt-1">5 Texte lesen, 12 Fragen beantworten — wie im echten MedAT.</p>
      </div>

      {/* Strategy Guide Card */}
      <Card>
        <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Strategie-Guide</h3>
            <p className="text-sm text-muted">Lerne die beste Vorgehensweise für Textverständnis-Aufgaben</p>
          </div>
          <Button variant="outline" onClick={() => setView("strategy")} className="w-full sm:w-auto">
            <BookOpen className="w-4 h-4 mr-2" /> Lesen
          </Button>
        </CardContent>
      </Card>

      {/* MC Text Sets - NEW/PRIMARY */}
      {allTextSets.length > 0 && (
        <>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Testsets <Badge className="ml-2 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">Neu</Badge>
            </h2>
            <p className="text-sm text-muted mb-3">Moderne Multiple-Choice Sets mit 5 Texten und 12 Fragen — wie im echten MedAT</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allTextSets.map((set, i) => {
              const totalQ = set.texts.reduce((sum, t) => sum + t.questions.length, 0);
              return (
                <Card key={set.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm flex-1">{set.name}</h3>
                      <Badge className={`text-[10px] shrink-0 ${difficultyColors[set.difficulty] || ""}`}>{set.difficulty}</Badge>
                    </div>
                    <div className="flex flex-col gap-2 text-xs text-muted mb-3">
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3 shrink-0" /> {set.texts.length} Texte</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 shrink-0" /> {totalQ} Fragen</span>
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

      {/* Separator */}
      <div className="border-t border-border my-6"></div>

      {/* Legacy single texts - SECONDARY */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">Klassischer Modus</h2>
        <p className="text-sm text-muted mb-3">Einzelne Texte mit Ableitbar/Nicht-Ableitbar Aussagen (Legacy Format)</p>
      </div>
      <div className="space-y-3">
        {displayedLegacyTexts.map((t, i) => (
          <Card key={t.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{t.title}</h3>
                <p className="text-xs text-muted mt-1">{t.statements.length} Aussagen zu bewerten</p>
              </div>
              <Button size="sm" onClick={() => handleStartLegacy(i)} className="w-full sm:w-auto">
                <Play className="w-4 h-4 mr-1" /> Starten
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show more toggle */}
      {tvTexts.length > 3 && !showAllLegacy && (
        <div className="flex justify-center pt-2">
          <button onClick={() => setShowAllLegacy(true)} className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
            <ChevronDown className="w-4 h-4" /> Alle {tvTexts.length} Texte anzeigen
          </button>
        </div>
      )}
      {showAllLegacy && tvTexts.length > 3 && (
        <div className="flex justify-center pt-2">
          <button onClick={() => setShowAllLegacy(false)} className="text-sm text-muted hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Weniger anzeigen
          </button>
        </div>
      )}
    </div>
  );
}
