import { useState, useEffect, useCallback } from "react";
import {
  Timer,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Clock,
  BarChart3,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Confetti } from "@/components/ui/confetti";
import { useKFFResults } from "@/hooks/useKFFResults";
import { tvTexte, type TVText } from "@/data/kffTextverstaendnis";

const TIME_LIMIT = 360; // 6 minutes

type SimPhase = "start" | "running" | "results";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Highlight a passage in the text */
function highlightText(text: string, passage?: string): string {
  if (!passage) return text;
  const idx = text.indexOf(passage);
  if (idx === -1) return text;
  return (
    text.slice(0, idx) +
    `<mark class="bg-yellow-200 dark:bg-yellow-800/50 px-0.5 rounded">${passage}</mark>` +
    text.slice(idx + passage.length)
  );
}

export default function TextverstaendnisSimulation() {
  const [phase, setPhase] = useState<SimPhase>("start");
  const [selectedText, setSelectedText] = useState<TVText | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [highlightedPassage, setHighlightedPassage] = useState<string | undefined>();
  const { recordSimulation } = useKFFResults();

  // Timer
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

  // Auto-finish when time runs out
  useEffect(() => {
    if (phase === "running" && timeLeft === 0) {
      finishSimulation();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, phase]);

  const startSimulation = useCallback(() => {
    const text = shuffle(tvTexte)[0];
    setSelectedText(text);
    setAnswers({});
    setTimeLeft(TIME_LIMIT);
    setHighlightedPassage(undefined);
    setPhase("running");
  }, []);

  const finishSimulation = useCallback(() => {
    if (!selectedText) return;

    const details = selectedText.questions.map((q, i) => {
      const selected = answers[i];
      const correct = selected === q.correctAnswer;
      return {
        exerciseId: `${selectedText.id}-q${i}`,
        userAnswer: selected !== undefined ? q.options[selected] : "",
        correct,
        timeSpent: 0,
        date: new Date().toISOString(),
      };
    });

    const correctCount = details.filter((d) => d.correct).length;

    recordSimulation({
      id: `sim-tv-${Date.now()}`,
      subtestType: "textverstaendnis",
      score: correctCount,
      maxScore: selectedText.questions.length,
      timeUsed: TIME_LIMIT - timeLeft,
      timeLimit: TIME_LIMIT,
      date: new Date().toISOString(),
      details,
    });

    setPhase("results");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedText, answers, timeLeft, recordSimulation]);

  const handleSelectOption = useCallback(
    (qIdx: number, optIdx: number) => {
      if (phase !== "running") return;
      setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
    },
    [phase]
  );

  const timePercent = (timeLeft / TIME_LIMIT) * 100;
  const isUrgent = timeLeft <= 60;

  // === START SCREEN ===
  if (phase === "start") {
    return (
      <Card>
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <Timer className="w-8 h-8 text-indigo-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              TV-Simulation starten
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              Du bekommst 1 zuf&auml;lligen wissenschaftlichen Text mit 5 MC-Fragen.
              Beantworte alle Fragen innerhalb von {Math.floor(TIME_LIMIT / 60)} Minuten.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-muted">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {Math.floor(TIME_LIMIT / 60)}:00 min
              </span>
              <span className="flex items-center gap-1">
                <BarChart3 className="w-4 h-4" /> 1 Text, 5 Fragen
              </span>
            </div>
            <p className="text-xs">Wie im echten MedAT: Text bleibt sichtbar</p>
          </div>
          <button
            onClick={startSimulation}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors cursor-pointer"
          >
            Simulation starten
          </button>
        </CardContent>
      </Card>
    );
  }

  if (!selectedText) return null;

  // === RESULTS SCREEN ===
  if (phase === "results") {
    const correctCount = selectedText.questions.filter(
      (q, i) => answers[i] === q.correctAnswer
    ).length;
    const scorePercent = Math.round(
      (correctCount / selectedText.questions.length) * 100
    );

    return (
      <div className="space-y-6">
        <Confetti active={scorePercent >= 80} />

        {/* Score card */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {correctCount}/{selectedText.questions.length}
                </h2>
                <p className="text-sm text-muted">
                  {scorePercent}% richtig &mdash;{" "}
                  {scorePercent >= 80
                    ? "Ausgezeichnet!"
                    : scorePercent >= 60
                      ? "Gut gemacht!"
                      : scorePercent >= 40
                        ? "Weiter \u00fcben!"
                        : "Mehr \u00dcbung n\u00f6tig!"}
                </p>
              </div>
              <div className="flex justify-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {formatTime(TIME_LIMIT - timeLeft)}
                  </p>
                  <p className="text-xs text-muted">Gesamtzeit</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {selectedText.title}
                  </p>
                  <p className="text-xs text-muted">Text</p>
                </div>
              </div>
              <div className="w-full max-w-xs mx-auto">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      scorePercent >= 80
                        ? "bg-green-500"
                        : scorePercent >= 50
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${scorePercent}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed results with text */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 space-y-4 lg:space-y-0">
          {/* Text */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 lg:max-h-[70vh] lg:overflow-y-auto">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              {selectedText.title}
            </h3>
            <div
              className="prose prose-sm dark:prose-invert max-w-none text-base leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: highlightText(selectedText.text, highlightedPassage).replace(/\n/g, "<br/>"),
              }}
            />
          </div>

          {/* Questions review */}
          <div className="space-y-3 lg:max-h-[70vh] lg:overflow-y-auto">
            {selectedText.questions.map((q, qIdx) => {
              const selected = answers[qIdx];
              const isCorrect = selected === q.correctAnswer;

              return (
                <Card key={qIdx}>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {q.question}
                      </p>
                    </div>

                    <div className="space-y-1.5 pl-7">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selected === optIdx;
                        const isCorrectOpt = optIdx === q.correctAnswer;
                        let cls = "text-xs text-muted";
                        if (isCorrectOpt) cls = "text-xs font-medium text-green-700 dark:text-green-400";
                        if (isSelected && !isCorrectOpt) cls = "text-xs font-medium text-red-600 dark:text-red-400 line-through";

                        return (
                          <div key={optIdx} className="flex items-start gap-1.5">
                            <span className="font-bold text-[10px] mt-px shrink-0">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span className={cls}>
                              {opt}
                              {isCorrectOpt && " \u2713"}
                              {isSelected && !isCorrectOpt && " (deine Wahl)"}
                            </span>
                          </div>
                        );
                      })}
                      {selected === undefined && (
                        <p className="text-xs text-amber-600 dark:text-amber-400 italic">
                          Nicht beantwortet
                        </p>
                      )}
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 space-y-1">
                      <p className="text-xs text-muted leading-relaxed">{q.explanation}</p>
                      {q.relevantPassage && (
                        <button
                          onClick={() => setHighlightedPassage(q.relevantPassage)}
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
        </div>

        {/* Restart */}
        <div className="flex justify-center">
          <button
            onClick={startSimulation}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Neue Simulation
          </button>
        </div>
      </div>
    );
  }

  // === RUNNING ===
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = selectedText.questions.length;

  return (
    <div className="space-y-4">
      {/* Timer bar */}
      <div className="flex items-center gap-3">
        <Timer
          className={`w-5 h-5 ${isUrgent ? "text-red-500 animate-pulse" : "text-indigo-500"}`}
        />
        <div className="flex-1">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all ${isUrgent ? "bg-red-500" : "bg-indigo-500"}`}
              style={{ width: `${timePercent}%` }}
            />
          </div>
        </div>
        <span
          className={`text-sm font-mono font-bold min-w-[48px] text-right ${
            isUrgent
              ? "text-red-600 dark:text-red-400"
              : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-muted">
        <span>
          {answeredCount}/{totalQuestions} Fragen beantwortet
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                answers[i] !== undefined
                  ? "bg-indigo-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Split view */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 space-y-4 lg:space-y-0">
        {/* Text */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 lg:max-h-[70vh] lg:overflow-y-auto">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            {selectedText.title}
          </h2>
          <div
            className="prose prose-sm dark:prose-invert max-w-none text-base leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: selectedText.text.replace(/\n/g, "<br/>"),
            }}
          />
        </div>

        {/* Questions */}
        <div className="space-y-4 lg:sticky lg:top-4 lg:self-start lg:max-h-[70vh] lg:overflow-y-auto">
          {selectedText.questions.map((q, qIdx) => {
            const selected = answers[qIdx];

            return (
              <Card key={qIdx}>
                <CardContent className="p-4 space-y-3">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    <span className="text-indigo-500 mr-1.5">F{qIdx + 1}.</span>
                    {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selected === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(qIdx, optIdx)}
                          className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm cursor-pointer ${
                            isSelected
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="font-bold text-xs mt-0.5 shrink-0 w-5">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span className="flex-1 text-gray-800 dark:text-gray-200">
                              {opt}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Submit button */}
          <button
            onClick={finishSimulation}
            disabled={answeredCount < totalQuestions}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {answeredCount < totalQuestions
              ? `Noch ${totalQuestions - answeredCount} Frage${totalQuestions - answeredCount > 1 ? "n" : ""} offen`
              : "Auswertung anzeigen"}
          </button>
        </div>
      </div>
    </div>
  );
}
