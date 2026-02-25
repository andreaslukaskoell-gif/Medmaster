import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Timer,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Clock,
  BookOpen,
  Flag,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Confetti } from "@/components/ui/confetti";
import { useKFFResults } from "@/hooks/useKFFResults";
import { useTvTexte } from "@/hooks/useTvTexte";
import type { TVText, TVQuestion } from "@/data/kffTextverstaendnis";

const TIME_LIMIT_SEC = 35 * 60; // 35 Minuten
const TARGET_QUESTIONS = 12;
const TARGET_TEXTS = 4;

type SimPhase = "start" | "running" | "results";

type FlatQuestion = {
  globalIndex: number;
  textIndex: number;
  textId: string;
  textTitle: string;
  q: TVQuestion;
};

/** Einen Übungstest aus mehreren Texten und insgesamt ~12 Fragen aufbauen (offizielles Vorbild). */
function buildUebungstest(tvTexte: TVText[]): { texts: TVText[]; flatQuestions: FlatQuestion[] } {
  if (tvTexte.length === 0) return { texts: [], flatQuestions: [] };
  const shuffled = [...tvTexte].sort(() => Math.random() - 0.5);
  const texts: TVText[] = [];
  const flatQuestions: FlatQuestion[] = [];
  let globalIndex = 0;

  for (let t = 0; t < shuffled.length && texts.length < TARGET_TEXTS; t++) {
    const text = shuffled[t];
    const remaining = TARGET_QUESTIONS - flatQuestions.length;
    if (remaining <= 0) break;
    const questionsToTake = Math.min(text.questions.length, remaining);
    if (questionsToTake <= 0) continue;

    texts.push(text);
    const textIndex = texts.length - 1;
    for (let q = 0; q < questionsToTake; q++) {
      flatQuestions.push({
        globalIndex: globalIndex++,
        textIndex,
        textId: text.id,
        textTitle: text.title,
        q: text.questions[q],
      });
    }
  }

  return { texts, flatQuestions };
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const LABELS = ["A", "B", "C", "D", "E"];

const OFFICIAL_INSTRUCTIONS = `Dies ist der Übungstest für den Testteil Textverständnis.

Sie haben für die Bearbeitung des Tests 35 Minuten Zeit. Wenn Sie den Test zwischenspeichern, läuft die Testzeit weiter.

Für richtige Antworten erhalten Sie 1 Punkt, falsche Antworten werden mit 0 Punkten bewertet.

Diesen Übungstest können Sie beliebig oft wiederholen.

Zeitbegrenzung: 35 Minuten
Bewertungsmethode: Bester Versuch`;

const STORAGE_KEY_BEST = "medmaster-tv-simulation-best";

function getStoredBest(): number | null {
  try {
    const v = sessionStorage.getItem(STORAGE_KEY_BEST);
    return v !== null ? parseInt(v, 10) : null;
  } catch {
    return null;
  }
}

function setStoredBest(score: number) {
  try {
    const prev = getStoredBest();
    if (prev === null || score > prev) sessionStorage.setItem(STORAGE_KEY_BEST, String(score));
  } catch {
    /* ignore */
  }
}

export default function TextverstaendnisSimulation() {
  const [phase, setPhase] = useState<SimPhase>("start");
  const [testData, setTestData] = useState<ReturnType<typeof buildUebungstest> | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [marked, setMarked] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SEC);
  const [highlightedPassage, setHighlightedPassage] = useState<string | undefined>();
  const { recordSimulation } = useKFFResults();
  const { texts: tvTexte, loading } = useTvTexte();

  const flatQuestions = useMemo(() => testData?.flatQuestions ?? [], [testData]);
  const totalQuestions = flatQuestions.length;

  useEffect(() => {
    if (phase !== "running") return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  const finishSimulation = useCallback(() => {
    if (!testData || flatQuestions.length === 0) return;

    const details = flatQuestions.map((fq) => {
      const selected = answers[fq.globalIndex];
      const correct = selected === fq.q.correctAnswer;
      return {
        exerciseId: `${fq.textId}-q${fq.globalIndex}`,
        userAnswer: selected !== undefined ? fq.q.options[selected] : "",
        correct,
        timeSpent: 0,
        date: new Date().toISOString(),
      };
    });

    const correctCount = details.filter((d) => d.correct).length;
    setStoredBest(correctCount);

    recordSimulation({
      id: `sim-tv-${Date.now()}`,
      subtestType: "textverständnis",
      score: correctCount,
      maxScore: totalQuestions,
      timeUsed: TIME_LIMIT_SEC - timeLeft,
      timeLimit: TIME_LIMIT_SEC,
      date: new Date().toISOString(),
      details,
    });

    setPhase("results");
  }, [testData, flatQuestions, answers, timeLeft, totalQuestions, recordSimulation]);

  useEffect(() => {
    if (phase === "running" && timeLeft === 0) queueMicrotask(() => finishSimulation());
  }, [timeLeft, phase, finishSimulation]);

  const startSimulation = useCallback(() => {
    setTestData(buildUebungstest(tvTexte));
    setAnswers({});
    setMarked(new Set());
    setTimeLeft(TIME_LIMIT_SEC);
    setHighlightedPassage(undefined);
    setPhase("running");
  }, [tvTexte]);

  const handleSelectOption = useCallback((qIdx: number, optIdx: number) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  }, []);

  const toggleMarked = useCallback((qIdx: number) => {
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(qIdx)) next.delete(qIdx);
      else next.add(qIdx);
      return next;
    });
  }, []);

  const isUrgent = timeLeft <= 300; // 5 min

  // —— Start screen (offizielles Vorbild) ——
  if (phase === "start") {
    return (
      <Card>
        <CardContent className="p-8 space-y-6">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <Timer className="w-8 h-8 text-indigo-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
              Übungstest Textverständnis
            </h2>
            <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line max-w-lg mx-auto bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5">
              {OFFICIAL_INSTRUCTIONS}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-muted">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> 35:00 min
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" /> {TARGET_TEXTS} Informationstexte,{" "}
                {TARGET_QUESTIONS} Fragen
              </span>
            </div>
            <p className="text-xs">Bewertungsmethode: Bester Versuch</p>
          </div>
          <div className="flex justify-center">
            {loading ? (
              <p className="text-sm text-muted">Lade Übungstexte …</p>
            ) : tvTexte.length === 0 ? (
              <p className="text-sm text-amber-600 dark:text-amber-400">
                Keine TV-Texte verfügbar. Bitte zuerst das Seed-Skript ausführen oder Datenbank
                prüfen.
              </p>
            ) : (
              <button
                onClick={startSimulation}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Übungstest starten
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!testData || flatQuestions.length === 0) return null;

  // —— Results ——
  if (phase === "results") {
    const correctCount = flatQuestions.filter(
      (fq) => answers[fq.globalIndex] === fq.q.correctAnswer
    ).length;
    const scorePercent = totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const best = getStoredBest();

    return (
      <div className="space-y-6">
        <Confetti active={scorePercent >= 80} />

        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {correctCount}/{totalQuestions} Punkte
                </h2>
                <p className="text-sm text-muted">
                  {scorePercent}% richtig
                  {best !== null && best === correctCount && (
                    <span className="block mt-1 font-medium text-indigo-600 dark:text-indigo-400">
                      Bester Versuch
                    </span>
                  )}
                </p>
              </div>
              <div className="flex justify-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {formatTime(TIME_LIMIT_SEC - timeLeft)}
                  </p>
                  <p className="text-xs text-muted">Bearbeitungszeit</p>
                </div>
                {best !== null && (
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      Bester Versuch: {best}/{totalQuestions}
                    </p>
                    <p className="text-xs text-muted">Bewertungsmethode</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Review: texts + questions */}
        <div className="space-y-8">
          {testData.texts.map((text, tIdx) => {
            const qsForText = flatQuestions.filter((fq) => fq.textIndex === tIdx);
            return (
              <div key={text.id} className="space-y-4">
                <Card>
                  <CardContent className="p-5">
                    <p className="text-xs font-medium text-muted uppercase tracking-wider mb-2">
                      Informationstext
                    </p>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {text.title}
                    </h3>
                    <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {text.text}
                    </div>
                  </CardContent>
                </Card>
                {qsForText.map((fq) => {
                  const selected = answers[fq.globalIndex];
                  const isCorrect = selected === fq.q.correctAnswer;
                  return (
                    <Card
                      key={fq.globalIndex}
                      className="border-l-4 border-l-gray-200 dark:border-l-gray-700"
                    >
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-start gap-2">
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                          )}
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            Frage {fq.globalIndex + 1}: {fq.q.question}
                          </p>
                        </div>
                        <div className="space-y-1.5 pl-7">
                          {fq.q.options.map((opt, oi) => {
                            const isSelected = selected === oi;
                            const isCorrectOpt = oi === fq.q.correctAnswer;
                            let cls = "text-xs text-muted";
                            if (isCorrectOpt)
                              cls = "text-xs font-medium text-green-700 dark:text-green-400";
                            if (isSelected && !isCorrectOpt)
                              cls =
                                "text-xs font-medium text-red-600 dark:text-red-400 line-through";
                            return (
                              <div key={oi} className="flex items-start gap-1.5">
                                <span className="font-bold text-[10px] mt-px shrink-0">
                                  {LABELS[oi]}.
                                </span>
                                <span className={cls}>
                                  {opt}
                                  {isCorrectOpt && " ✓"}
                                  {isSelected && !isCorrectOpt && " (deine Wahl)"}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 space-y-1">
                          <p className="text-xs text-muted leading-relaxed">{fq.q.explanation}</p>
                          {fq.q.relevantPassage && (
                            <button
                              type="button"
                              onClick={() => setHighlightedPassage(fq.q.relevantPassage)}
                              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer flex items-center gap-1"
                            >
                              <BookOpen className="w-3 h-3" />
                              Textstelle markieren
                            </button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            );
          })}
        </div>

        {highlightedPassage && (
          <div className="rounded-lg border border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-900/20 p-3">
            <p className="text-xs font-medium text-indigo-800 dark:text-indigo-200 mb-1">
              Markierte Textstelle
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
              &quot;{highlightedPassage}&quot;
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={startSimulation}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Übungstest wiederholen
          </button>
        </div>
      </div>
    );
  }

  // —— Running: offizielles Layout ——
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-4">
      {/* Verbleibende Zeit (wie ANV) */}
      <div className="flex items-center justify-between gap-4 py-2 px-3 bg-gray-100 dark:bg-gray-800/80 rounded-lg sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Timer
            className={`w-5 h-5 ${isUrgent ? "text-red-500 animate-pulse" : "text-indigo-500"}`}
          />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Verbleibende Zeit
          </span>
          <span
            className={`font-mono font-bold min-w-[52px] ${
              isUrgent ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"
            }`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted">
          <span>
            {answeredCount}/{totalQuestions} beantwortet
          </span>
          <div className="flex gap-0.5">
            {flatQuestions.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  answers[i] !== undefined ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
                title={answers[i] !== undefined ? "Beantwortet" : "Unvollständig"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inhalt: pro Text ein Block "Informationstext" + zugehörige Fragen */}
      <div className="space-y-8 pb-8">
        {testData.texts.map((text, tIdx) => {
          const qsForText = flatQuestions.filter((fq) => fq.textIndex === tIdx);
          return (
            <div key={text.id} className="space-y-6">
              {/* Information / Frage markieren / Informationstext */}
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    <span>Information</span>
                    <span aria-hidden>·</span>
                    <span>Frage markieren</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Informationstext
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {text.title}
                  </h4>
                  <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line max-h-[50vh] overflow-y-auto">
                    {text.text}
                  </div>
                </CardContent>
              </Card>

              {/* Fragen zu diesem Text */}
              {qsForText.map((fq) => {
                const selected = answers[fq.globalIndex];
                const isUnvollstaendig = selected === undefined;
                return (
                  <Card
                    key={fq.globalIndex}
                    className="border border-gray-200 dark:border-gray-700"
                  >
                    <CardContent className="p-5 space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            Frage {fq.globalIndex + 1}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${
                              isUnvollstaendig
                                ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200"
                                : "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                            }`}
                          >
                            {isUnvollstaendig ? "Unvollständig" : "Beantwortet"}
                          </span>
                          <span className="text-xs text-muted">Erreichbare Punkte: 1,00</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleMarked(fq.globalIndex)}
                          className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                            marked.has(fq.globalIndex)
                              ? "bg-amber-100 dark:bg-amber-900/30 border-amber-400 text-amber-700 dark:text-amber-300"
                              : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-muted hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                          title="Frage markieren"
                        >
                          <Flag className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-muted uppercase tracking-wider">Fragetext</p>
                      <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                        {fq.q.question}
                      </p>
                      <div className="space-y-2">
                        {fq.q.options.map((opt, oi) => (
                          <button
                            key={oi}
                            type="button"
                            onClick={() => handleSelectOption(fq.globalIndex, oi)}
                            className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm cursor-pointer flex items-start gap-2 ${
                              selected === oi
                                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
                            }`}
                          >
                            <span className="font-bold text-xs mt-0.5 shrink-0 w-5">
                              {LABELS[oi]}.
                            </span>
                            <span className="flex-1 text-gray-800 dark:text-gray-200">{opt}</span>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Abgabe / Zeit abgelaufen */}
      <div className="sticky bottom-0 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            Wenn Sie den Test zwischenspeichern, läuft die Testzeit weiter. Bei Ablauf der Zeit wird
            automatisch abgegeben.
          </p>
          <button
            onClick={finishSimulation}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors cursor-pointer disabled:opacity-60"
          >
            Abgabe und Auswertung
          </button>
        </div>
      </div>
    </div>
  );
}
