import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Play, Send, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { sekStrategyGuide, emotionQuestions } from "@/data/sekData";
import { useStore } from "@/store/useStore";

type SekView = "overview" | "strategy" | "quiz" | "results";

export default function SEK() {
  const [view, setView] = useState<SekView>("overview");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const { addXP, checkStreak, saveQuizResult } = useStore();

  const q = emotionQuestions[index];
  const allAnswered = emotionQuestions.every((q) => answers[q.id]);

  const handleSubmit = () => {
    const score = emotionQuestions.filter((q) => answers[q.id] === q.correctOptionId).length;
    saveQuizResult({
      id: `sek-${Date.now()}`,
      type: "sek",
      score,
      total: emotionQuestions.length,
      date: new Date().toLocaleDateString("de-AT"),
      answers: emotionQuestions.map((q) => ({
        questionId: q.id,
        selectedAnswer: answers[q.id] || "",
        correct: answers[q.id] === q.correctOptionId,
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
        <h1 className="text-2xl font-bold text-gray-900">{sekStrategyGuide.title}</h1>
        {sekStrategyGuide.sections.map((s, i) => (
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
    const score = emotionQuestions.filter((q) => answers[q.id] === q.correctOptionId).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary-700">{score}/{emotionQuestions.length}</div>
            <p className="text-muted mt-1">{Math.round((score / emotionQuestions.length) * 100)}% richtig</p>
            <p className="text-sm text-green-600 font-medium mt-2">+{score * 10} XP erhalten</p>
          </CardContent>
        </Card>
        {emotionQuestions.map((q, i) => {
          const correct = answers[q.id] === q.correctOptionId;
          return (
            <Card key={q.id} className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-2 mb-2">
                  {correct ? <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> : <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />}
                  <div>
                    <p className="text-sm font-medium">{i + 1}. {q.question}</p>
                    <p className="text-xs text-muted mt-1 italic">{q.situation}</p>
                  </div>
                </div>
                <div className="ml-7 space-y-1">
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt.id;
                    const isCorrectOpt = q.correctOptionId === opt.id;
                    return (
                      <div key={opt.id} className={`text-sm px-3 py-2 rounded-lg ${isCorrectOpt ? "bg-green-50 text-green-800 font-medium" : isSelected ? "bg-red-50 text-red-800 line-through" : "text-gray-500"}`}>
                        {opt.text}
                        {isCorrectOpt && <Badge variant="success" className="ml-2">Richtig</Badge>}
                        {isSelected && !isCorrectOpt && <Badge variant="danger" className="ml-2">Deine Antwort</Badge>}
                      </div>
                    );
                  })}
                  <div className="bg-blue-50 p-3 rounded-lg mt-2"><p className="text-xs text-blue-700">{q.explanation}</p></div>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center"><Button onClick={() => { setView("overview"); setAnswers({}); setSubmitted(false); setIndex(0); }}>Zurück</Button></div>
      </div>
    );
  }

  if (view === "quiz") {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
          </Button>
          <span className="text-sm text-muted">Frage {index + 1} von {emotionQuestions.length}</span>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-xs text-muted uppercase tracking-wide mb-1">Situation:</p>
              <p className="text-sm text-gray-700">{q.situation}</p>
            </div>
            <p className="text-base font-medium text-gray-900 mb-4">{q.question}</p>
            <div className="space-y-3">
              {q.options.map((opt) => (
                <button key={opt.id} onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${answers[q.id] === opt.id ? "border-primary-500 bg-primary-50 text-primary-800" : "border-border hover:bg-gray-50"}`}>
                  {opt.text}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
          </Button>
          {index < emotionQuestions.length - 1
            ? <Button onClick={() => setIndex((i) => i + 1)}>Weiter <ArrowRight className="w-4 h-4 ml-1" /></Button>
            : <Button onClick={handleSubmit} disabled={!allAnswered}><Send className="w-4 h-4 mr-1" /> Auswertung</Button>
          }
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "SEK" }]} />
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
            <p className="text-sm text-muted mb-3">Gefühle anhand von Beschreibungen und Situationen identifizieren.</p>
            <Button size="sm" className="w-full" onClick={() => { setView("quiz"); setIndex(0); setAnswers({}); setSubmitted(false); }}>
              <Play className="w-4 h-4 mr-1" /> Üben
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
            <p className="text-sm text-muted mb-3">Beste Strategie wählen, um Emotionen angemessen zu regulieren.</p>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="flex-1" onClick={() => { setView("quiz"); setIndex(0); setAnswers({}); setSubmitted(false); }}>
                <Play className="w-4 h-4 mr-1" /> Üben
              </Button>
              <Badge variant="info" className="text-xs">Neu seit 2023</Badge>
            </div>
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
            <p className="text-sm text-muted mb-3">Ethische Dilemmata lösen und die beste Handlung wählen.</p>
            <Button size="sm" variant="outline" className="w-full" onClick={() => { setView("quiz"); setIndex(0); setAnswers({}); setSubmitted(false); }}>
              <Play className="w-4 h-4 mr-1" /> Üben
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Gemischtes SEK-Quiz</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-muted mb-4">{emotionQuestions.length} Situationen: Erkenne Emotionen und wähle die angemessenste Reaktion.</p>
          <Button onClick={() => { setView("quiz"); setIndex(0); setAnswers({}); setSubmitted(false); }}>
            <Play className="w-4 h-4 mr-2" /> Alle Untertests starten
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
