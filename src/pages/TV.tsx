import { useState } from "react";
import { ArrowLeft, BookOpen, Play, Send, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { tvStrategyGuide, tvTexts } from "@/data/tvData";
import { useStore } from "@/store/useStore";

type TvView = "overview" | "strategy" | "text-select" | "quiz" | "results";

export default function TV() {
  const [view, setView] = useState<TvView>("overview");
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const tvText = tvTexts[selectedTextIndex];

  const handleStartQuiz = (textIdx: number) => {
    setSelectedTextIndex(textIdx);
    setAnswers({});
    setSubmitted(false);
    setView("quiz");
  };

  const handleSubmit = () => {
    const statements = tvText.statements;
    const score = statements.filter((s) => answers[s.id] === s.isDerivable).length;
    saveQuizResult({
      id: `tv-${Date.now()}`,
      type: "tv",
      subject: tvText.title,
      score,
      total: statements.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: statements.map((s) => ({
        questionId: s.id,
        selectedAnswer: String(answers[s.id]),
        correct: answers[s.id] === s.isDerivable,
      })),
    });
    addXP(score * 10);
    checkStreak();
    setSubmitted(true);
    setView("results");
  };

  if (view === "strategy") {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">{tvStrategyGuide.title}</h1>
        {tvStrategyGuide.sections.map((s, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">{s.heading}</h2>
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{s.content}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (view === "results") {
    const statements = tvText.statements;
    const score = statements.filter((s) => answers[s.id] === s.isDerivable).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary-700">{score}/{statements.length}</div>
            <p className="text-muted mt-1">{Math.round((score / statements.length) * 100)}% richtig</p>
          </CardContent>
        </Card>
        {statements.map((s, i) => {
          const correct = answers[s.id] === s.isDerivable;
          return (
            <Card key={s.id} className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-2 mb-2">
                  {correct ? <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> : <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />}
                  <span className="text-sm font-medium">{i + 1}. {s.text}</span>
                </div>
                <div className="ml-7 space-y-1">
                  <p className="text-sm">Richtig: <Badge variant={s.isDerivable ? "success" : "danger"}>{s.isDerivable ? "Ableitbar" : "Nicht ableitbar"}</Badge></p>
                  <div className="bg-blue-50 p-3 rounded-lg mt-2"><p className="text-xs text-blue-700">{s.explanation}</p></div>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center"><Button onClick={() => setView("overview")}>Zurück</Button></div>
      </div>
    );
  }

  if (view === "quiz") {
    const statements = tvText.statements;
    const allAnswered = statements.every((s) => answers[s.id] !== undefined && answers[s.id] !== null);
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <Card>
          <CardHeader><CardTitle>{tvText.title}</CardTitle></CardHeader>
          <CardContent>
            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{tvText.content}</div>
          </CardContent>
        </Card>
        <h2 className="text-lg font-semibold text-gray-900">Aussagen bewerten</h2>
        <div className="space-y-3">
          {statements.map((s, i) => (
            <Card key={s.id}>
              <CardContent className="p-4">
                <p className="text-sm font-medium text-gray-900 mb-3">{i + 1}. {s.text}</p>
                <div className="flex gap-2">
                  <button onClick={() => setAnswers((p) => ({ ...p, [s.id]: true }))}
                    className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${answers[s.id] === true ? "border-green-500 bg-green-50 text-green-800" : "border-border hover:bg-gray-50"}`}>
                    Ableitbar
                  </button>
                  <button onClick={() => setAnswers((p) => ({ ...p, [s.id]: false }))}
                    className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${answers[s.id] === false ? "border-red-500 bg-red-50 text-red-800" : "border-border hover:bg-gray-50"}`}>
                    Nicht ableitbar
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button onClick={handleSubmit} disabled={!allAnswered} size="lg">
            <Send className="w-4 h-4 mr-2" /> Auswertung
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "TV" }]} />
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">TV - Textverständnis</h1>
        <p className="text-muted mt-1">Lies Texte und bestimme, welche Aussagen ableitbar sind.</p>
      </div>
      <Card>
        <CardContent className="p-5 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">Strategie-Guide</h3>
            <p className="text-sm text-muted">Lerne die beste Vorgehensweise für Textverständnis-Aufgaben</p>
          </div>
          <Button variant="outline" onClick={() => setView("strategy")}>
            <BookOpen className="w-4 h-4 mr-2" /> Lesen
          </Button>
        </CardContent>
      </Card>
      <h2 className="text-lg font-semibold text-gray-900">Übungstexte</h2>
      <div className="space-y-3">
        {tvTexts.map((t, i) => (
          <Card key={t.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{t.title}</h3>
                <p className="text-sm text-muted">{t.statements.length} Aussagen zu bewerten</p>
              </div>
              <Button onClick={() => handleStartQuiz(i)}>
                <Play className="w-4 h-4 mr-2" /> Starten
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
