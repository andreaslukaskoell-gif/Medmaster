import { useState, useCallback, useRef, useEffect } from "react";
import {
  Flame,
  Trophy,
  ChevronRight,
  RotateCcw,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Confetti } from "@/components/ui/confetti";
import { useKFFResults } from "@/hooks/useKFFResults";
import { wortfluessigkeitWords, type WortfluessigkeitWord } from "@/data/kffWortfluessigkeit";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const difficultyLabels: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: "Leicht", color: "text-green-700 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
  2: { label: "Mittel", color: "text-amber-700 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30" },
  3: { label: "Schwer", color: "text-red-700 dark:text-red-400", bg: "bg-red-100 dark:bg-red-900/30" },
};

type EndlosPhase = "start" | "playing" | "gameover";

export default function WortfluessigkeitEndlos() {
  const [phase, setPhase] = useState<EndlosPhase>("start");
  const [queue, setQueue] = useState<WortfluessigkeitWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(() => {
    const saved = localStorage.getItem("medmaster-wf-best-streak");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [lastSolution, setLastSolution] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { recordResult } = useKFFResults();

  const generateQueue = useCallback(() => {
    // Infinite: shuffle all words, when we run out, reshuffle
    return shuffle([...wortfluessigkeitWords]);
  }, []);

  const startGame = useCallback(() => {
    setQueue(generateQueue());
    setCurrentIndex(0);
    setStreak(0);
    setTotalCorrect(0);
    setTotalAnswered(0);
    setUserInput("");
    setFeedback(null);
    setLastSolution("");
    setPhase("playing");
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [generateQueue]);

  const currentWord = queue[currentIndex];

  const handleSubmit = useCallback(() => {
    const answer = userInput.trim().toUpperCase();
    if (!answer || !currentWord) return;

    const correct =
      answer === currentWord.solution ||
      (currentWord.alternativeSolutions?.some((alt) => answer === alt) ?? false);

    setTotalAnswered((c) => c + 1);

    recordResult("wortfluessigkeit", {
      exerciseId: currentWord.id,
      userAnswer: answer,
      correct,
      timeSpent: 0,
      date: new Date().toISOString(),
    });

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setTotalCorrect((c) => c + 1);
      setFeedback("correct");
      setShowConfetti(newStreak % 5 === 0); // confetti every 5 streak
      if (newStreak % 5 === 0) setTimeout(() => setShowConfetti(false), 100);

      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
        localStorage.setItem("medmaster-wf-best-streak", String(newStreak));
      }

      // Move to next word
      setTimeout(() => {
        setFeedback(null);
        setUserInput("");
        let nextIndex = currentIndex + 1;
        if (nextIndex >= queue.length) {
          // Reshuffle and restart
          setQueue(generateQueue());
          nextIndex = 0;
        }
        setCurrentIndex(nextIndex);
        inputRef.current?.focus();
      }, 600);
    } else {
      setFeedback("wrong");
      setLastSolution(
        currentWord.solution +
          (currentWord.alternativeSolutions?.length
            ? ` (auch: ${currentWord.alternativeSolutions.join(", ")})`
            : "")
      );
      // Game over
      setTimeout(() => {
        setPhase("gameover");
      }, 1500);
    }
  }, [userInput, currentWord, streak, bestStreak, currentIndex, queue, generateQueue, recordResult]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  useEffect(() => {
    if (phase === "playing") inputRef.current?.focus();
  }, [phase, currentIndex]);

  // Streak flame intensity
  const streakColor =
    streak >= 20
      ? "text-red-500"
      : streak >= 10
        ? "text-orange-500"
        : streak >= 5
          ? "text-amber-500"
          : "text-gray-400";

  const streakBg =
    streak >= 20
      ? "bg-red-100 dark:bg-red-900/30"
      : streak >= 10
        ? "bg-orange-100 dark:bg-orange-900/30"
        : streak >= 5
          ? "bg-amber-100 dark:bg-amber-900/30"
          : "bg-gray-100 dark:bg-gray-800";

  // === START SCREEN ===
  if (phase === "start") {
    return (
      <Card>
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
            <Flame className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Endlos-Modus
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              Trainiere bis du nicht mehr kannst! Zuf&auml;llige W&ouml;rter, endlos.
              Ein Fehler beendet das Spiel. Wie weit kommst du?
            </p>
          </div>
          {bestStreak > 0 && (
            <div className="flex items-center justify-center gap-2 text-sm">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span className="text-muted">
                Dein Rekord: <span className="font-bold text-amber-600 dark:text-amber-400">{bestStreak} W&ouml;rter</span>
              </span>
            </div>
          )}
          <button
            onClick={startGame}
            className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg font-semibold transition-all cursor-pointer"
          >
            Los geht&apos;s!
          </button>
        </CardContent>
      </Card>
    );
  }

  // === GAME OVER ===
  if (phase === "gameover") {
    const isNewRecord = streak >= bestStreak && streak > 0;
    return (
      <div className="space-y-6">
        {isNewRecord && <Confetti active={true} />}
        <Card>
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {streak} richtig in Folge!
              </h2>
              {isNewRecord && (
                <p className="text-orange-600 dark:text-orange-400 font-semibold mt-1">
                  Neuer Rekord!
                </p>
              )}
              <p className="text-sm text-muted mt-2">
                {totalCorrect}/{totalAnswered} gesamt richtig
              </p>
            </div>

            {/* Last wrong answer */}
            <div className="bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800 rounded-lg p-4 text-sm max-w-sm mx-auto">
              <p className="text-red-800 dark:text-red-300">
                <span className="font-semibold">Letztes Wort:</span>{" "}
                <span className="font-mono font-bold">{lastSolution}</span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{streak}</p>
                <p className="text-xs text-muted">Streak</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{bestStreak}</p>
                <p className="text-xs text-muted">Rekord</p>
              </div>
            </div>

            <button
              onClick={startGame}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg font-medium transition-all cursor-pointer mx-auto"
            >
              <RotateCcw className="w-4 h-4" />
              Nochmal
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // === PLAYING ===
  if (!currentWord) return null;

  return (
    <div className="space-y-4">
      <Confetti active={showConfetti} />

      {/* Streak + stats bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${streakBg}`}>
            <Flame className={`w-4 h-4 ${streakColor} ${streak >= 5 ? "animate-pulse" : ""}`} />
            <span className={`text-sm font-bold ${streakColor}`}>{streak}</span>
          </div>
          {streak >= 5 && (
            <span className="text-xs text-muted flex items-center gap-1">
              <Zap className="w-3 h-3" />
              {streak >= 20 ? "UNAUFHALTBAR!" : streak >= 10 ? "On Fire!" : "Streak!"}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            {totalCorrect} gel&ouml;st
          </span>
          <div className="flex items-center gap-1 text-xs text-muted">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            {bestStreak}
          </div>
        </div>
      </div>

      {/* Word card */}
      <Card>
        <CardContent className="p-6 space-y-5">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyLabels[currentWord.difficulty].bg} ${difficultyLabels[currentWord.difficulty].color}`}>
              {difficultyLabels[currentWord.difficulty].label}
            </span>
          </div>

          {/* Letter tiles */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {currentWord.letters.split("").map((letter, i) => (
                <div
                  key={`${currentIndex}-${i}`}
                  className={`w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-700 shadow-md rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold transition-all ${
                    feedback === "correct"
                      ? "border-2 border-green-400 dark:border-green-500"
                      : feedback === "wrong"
                        ? "border-2 border-red-400 dark:border-red-500 animate-[shake_0.4s_ease-in-out]"
                        : "border border-gray-200 dark:border-gray-600"
                  } text-gray-800 dark:text-gray-200`}
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value.toUpperCase())}
            onKeyDown={handleKeyDown}
            disabled={feedback !== null}
            placeholder="Wort eingeben..."
            className={`w-full px-4 py-3 text-lg font-mono font-bold text-center rounded-lg border-2 transition-all outline-none ${
              feedback === "correct"
                ? "border-green-400 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                : feedback === "wrong"
                  ? "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                  : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-orange-400 dark:focus:border-orange-500"
            } disabled:cursor-not-allowed`}
            autoComplete="off"
            spellCheck={false}
          />

          {feedback === null && (
            <button
              onClick={handleSubmit}
              disabled={!userInput.trim()}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Best&auml;tigen
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Feedback */}
          {feedback === "correct" && (
            <div className="text-center text-green-600 dark:text-green-400 font-bold text-lg animate-[bounceIn_0.3s_ease-out]">
              Richtig!
            </div>
          )}
          {feedback === "wrong" && (
            <div className="bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800 rounded-lg p-3 text-center">
              <p className="text-red-800 dark:text-red-300 font-semibold text-sm">
                Falsch! L&ouml;sung: <span className="font-mono">{lastSolution}</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
