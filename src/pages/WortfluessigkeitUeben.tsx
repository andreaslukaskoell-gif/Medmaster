import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  Filter,
  RotateCcw,
  Shuffle,
  Eye,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Confetti } from "@/components/ui/confetti";
import { useKFFResults } from "@/hooks/useKFFResults";
import { wortfluessigkeitWords, type WortfluessigkeitWord } from "@/data/kffWortfluessigkeit";

const difficultyLabels: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: "Leicht", color: "text-green-700 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
  2: { label: "Mittel", color: "text-amber-700 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30" },
  3: { label: "Schwer", color: "text-red-700 dark:text-red-400", bg: "bg-red-100 dark:bg-red-900/30" },
};

const categoryColors: Record<string, string> = {
  Natur: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  Medizin: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
  Alltag: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  Wissenschaft: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  Abstrakta: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function WortfluessigkeitUeben() {
  const [difficultyFilter, setDifficultyFilter] = useState<number | null>(null);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledOrder, setShuffledOrder] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { recordResult } = useKFFResults();

  const filteredWords = useMemo(() => {
    if (difficultyFilter === null) return wortfluessigkeitWords;
    return wortfluessigkeitWords.filter((w) => w.difficulty === difficultyFilter);
  }, [difficultyFilter]);

  const orderedWords = useMemo(() => {
    if (isShuffled && shuffledOrder.length > 0) {
      return shuffledOrder.map((i) => filteredWords[i]).filter(Boolean);
    }
    return filteredWords;
  }, [filteredWords, isShuffled, shuffledOrder]);

  const currentWord: WortfluessigkeitWord | undefined = orderedWords[currentIndex];

  const handleShuffle = useCallback(() => {
    const order = shuffle(Array.from({ length: filteredWords.length }, (_, i) => i));
    setShuffledOrder(order);
    setIsShuffled(true);
    setCurrentIndex(0);
    setUserInput("");
    setIsChecked(false);
    setShowSolution(false);
  }, [filteredWords.length]);

  const checkAnswer = useCallback(() => {
    if (!userInput.trim() || !currentWord) return;
    const normalized = userInput.trim().toUpperCase();
    const correct =
      normalized === currentWord.solution ||
      (currentWord.alternativeSolutions?.some((alt) => normalized === alt) ?? false);

    setIsChecked(true);
    setIsCorrect(correct);
    setTotalAnswered((c) => c + 1);
    if (correct) {
      setCorrectCount((c) => c + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 100);
    }

    recordResult("wortfluessigkeit", {
      exerciseId: currentWord.id,
      userAnswer: normalized,
      correct,
      timeSpent: 0,
      date: new Date().toISOString(),
    });
  }, [userInput, currentWord, recordResult]);

  const handleNext = useCallback(() => {
    setUserInput("");
    setIsChecked(false);
    setIsCorrect(false);
    setShowSolution(false);
    setCurrentIndex((i) => (i + 1 < orderedWords.length ? i + 1 : 0));
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [orderedWords.length]);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setUserInput("");
    setIsChecked(false);
    setIsCorrect(false);
    setShowSolution(false);
    setCorrectCount(0);
    setTotalAnswered(0);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        if (!isChecked) {
          checkAnswer();
        } else {
          handleNext();
        }
      }
    },
    [isChecked, checkAnswer, handleNext]
  );

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, [currentIndex]);

  if (!currentWord) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted">Keine W&ouml;rter f&uuml;r diesen Filter verf&uuml;gbar.</p>
        </CardContent>
      </Card>
    );
  }

  const diff = difficultyLabels[currentWord.difficulty];

  return (
    <div className="space-y-4">
      <Confetti active={showConfetti} />

      {/* Top bar: filter + progress */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted" />
          <div className="flex gap-1">
            <button
              onClick={() => { setDifficultyFilter(null); setCurrentIndex(0); setIsChecked(false); setUserInput(""); setShowSolution(false); }}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                difficultyFilter === null
                  ? "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium"
                  : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              Alle
            </button>
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                onClick={() => { setDifficultyFilter(d); setCurrentIndex(0); setIsChecked(false); setUserInput(""); setShowSolution(false); }}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  difficultyFilter === d
                    ? `${difficultyLabels[d].bg} ${difficultyLabels[d].color} font-medium`
                    : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {difficultyLabels[d].label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            {currentIndex + 1}/{orderedWords.length} —{" "}
            <span className="font-medium text-green-600 dark:text-green-400">{correctCount} richtig</span>
            {totalAnswered > 0 && <span> ({Math.round((correctCount / totalAnswered) * 100)}%)</span>}
          </span>
          <button onClick={handleShuffle} className="text-muted hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" title="Mischen">
            <Shuffle className="w-4 h-4" />
          </button>
          <button onClick={handleReset} className="text-muted hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" title="Zurücksetzen">
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full bg-orange-500 transition-all"
          style={{ width: `${((currentIndex + 1) / orderedWords.length) * 100}%` }}
        />
      </div>

      {/* Word card */}
      <Card>
        <CardContent className="p-6 space-y-5">
          {/* Badges */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${diff.bg} ${diff.color}`}>
                {diff.label}
              </span>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[currentWord.category] || "bg-gray-100 text-gray-600"}`}>
                {currentWord.category}
              </span>
            </div>
            <span className="text-xs text-muted">{currentWord.id}</span>
          </div>

          {/* Letter tiles */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <p className="text-xs text-muted mb-4 text-center">Bilde ein sinnvolles deutsches Wort:</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {currentWord.letters.split("").map((letter, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-700 shadow-md rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold tracking-widest transition-all ${
                    isChecked && isCorrect
                      ? "border-2 border-green-400 dark:border-green-500"
                      : isChecked && !isCorrect
                        ? "border-2 border-red-400 dark:border-red-500"
                        : "border border-gray-200 dark:border-gray-600"
                  } text-gray-800 dark:text-gray-200`}
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="space-y-3">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value.toUpperCase())}
              onKeyDown={handleKeyDown}
              disabled={isChecked}
              placeholder="Deine Antwort eingeben..."
              className={`w-full px-4 py-3 text-lg font-mono font-bold text-center rounded-lg border-2 transition-all outline-none ${
                isChecked && isCorrect
                  ? "border-green-400 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                  : isChecked && !isCorrect
                    ? "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 animate-[shake_0.4s_ease-in-out]"
                    : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-orange-400 dark:focus:border-orange-500"
              } disabled:cursor-not-allowed`}
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {!isChecked ? (
              <>
                <button
                  onClick={checkAnswer}
                  disabled={!userInput.trim()}
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  &Uuml;berpr&uuml;fen
                </button>
                <button
                  onClick={() => setShowSolution(true)}
                  className="flex items-center gap-1.5 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  Aufl&ouml;sen
                </button>
              </>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                N&auml;chstes Wort
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Result feedback */}
          {isChecked && (
            <div
              className={`rounded-lg p-4 ${
                isCorrect
                  ? "bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800"
              }`}
            >
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <span
                  className={`font-semibold text-sm ${
                    isCorrect
                      ? "text-green-800 dark:text-green-300"
                      : "text-red-800 dark:text-red-300"
                  }`}
                >
                  {isCorrect
                    ? "Richtig!"
                    : `Falsch — Lösung: ${currentWord.solution}${currentWord.alternativeSolutions?.length ? ` (auch: ${currentWord.alternativeSolutions.join(", ")})` : ""}`}
                </span>
              </div>
            </div>
          )}

          {/* Show solution (when "Auflösen" clicked) */}
          {showSolution && !isChecked && (
            <div className="bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <span className="font-semibold">L&ouml;sung:</span>{" "}
                <span className="font-mono font-bold">{currentWord.solution}</span>
                {currentWord.alternativeSolutions?.length ? (
                  <span className="text-amber-600 dark:text-amber-400"> (auch: {currentWord.alternativeSolutions.join(", ")})</span>
                ) : null}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
