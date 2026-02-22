import { useState, useMemo, useCallback } from "react";
import {
  Filter,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Shuffle,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Confetti } from "@/components/ui/confetti";
import { useKFFResults } from "@/hooks/useKFFResults";
import { tvTexte, type TVText, type TVQuestion } from "@/data/kffTextverstaendnis";

const difficultyLabels: Record<number, { label: string; bg: string; color: string }> = {
  1: {
    label: "Leicht",
    bg: "bg-green-100 dark:bg-green-900/30",
    color: "text-green-700 dark:text-green-400",
  },
  2: {
    label: "Mittel",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    color: "text-amber-700 dark:text-amber-400",
  },
  3: {
    label: "Schwer",
    bg: "bg-red-100 dark:bg-red-900/30",
    color: "text-red-700 dark:text-red-400",
  },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Highlight a passage in the text by wrapping it with a <mark> */
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

export default function TextverstaendnisUeben() {
  const [difficultyFilter, setDifficultyFilter] = useState<number | null>(null);
  const [textIndex, setTextIndex] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // questionIdx -> selectedOption
  const [revealed, setRevealed] = useState<Record<number, boolean>>({}); // questionIdx -> true if revealed
  const [showConfetti, setShowConfetti] = useState(false);
  const [highlightedPassage, setHighlightedPassage] = useState<string | undefined>();

  const { recordResult } = useKFFResults();

  const filteredTexts = useMemo(() => {
    let texts = difficultyFilter
      ? tvTexte.filter((t) => t.difficulty === difficultyFilter)
      : [...tvTexte];
    if (shuffled) texts = shuffle(texts);
    return texts;
  }, [difficultyFilter, shuffled]);

  const currentText = filteredTexts[textIndex];

  const handleSelectOption = useCallback(
    (qIdx: number, optIdx: number) => {
      if (revealed[qIdx]) return;
      setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
    },
    [revealed]
  );

  const handleReveal = useCallback(
    (qIdx: number) => {
      if (!currentText) return;
      const question = currentText.questions[qIdx];
      const selected = answers[qIdx];
      if (selected === undefined) return;

      const correct = selected === question.correctAnswer;
      setRevealed((prev) => ({ ...prev, [qIdx]: true }));
      setHighlightedPassage(question.relevantPassage);

      // Record result
      recordResult("textverständnis", {
        exerciseId: `${currentText.id}-q${qIdx}`,
        userAnswer: question.options[selected],
        correct,
        timeSpent: 0,
        date: new Date().toISOString(),
      });

      if (correct) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 100);
      }
    },
    [currentText, answers, recordResult]
  );

  const handleNextText = useCallback(() => {
    setTextIndex((i) => Math.min(i + 1, filteredTexts.length - 1));
    setAnswers({});
    setRevealed({});
    setHighlightedPassage(undefined);
  }, [filteredTexts.length]);

  const handlePrevText = useCallback(() => {
    setTextIndex((i) => Math.max(0, i - 1));
    setAnswers({});
    setRevealed({});
    setHighlightedPassage(undefined);
  }, []);

  const handleShuffle = useCallback(() => {
    setShuffled((s) => !s);
    setTextIndex(0);
    setAnswers({});
    setRevealed({});
    setHighlightedPassage(undefined);
  }, []);

  const handleReset = useCallback(() => {
    setAnswers({});
    setRevealed({});
    setHighlightedPassage(undefined);
  }, []);

  if (!currentText) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted">Keine Texte f&uuml;r diesen Filter verf&uuml;gbar.</p>
        </CardContent>
      </Card>
    );
  }

  const allRevealed = currentText.questions.every((_, i) => revealed[i]);
  const correctCount = currentText.questions.filter(
    (q, i) => revealed[i] && answers[i] === q.correctAnswer
  ).length;

  // Determine which passage to highlight
  const textHtml = highlightText(currentText.text, highlightedPassage);

  return (
    <div className="space-y-4">
      <Confetti active={showConfetti} />

      {/* Controls */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted" />
          <button
            onClick={() => {
              setDifficultyFilter(null);
              setTextIndex(0);
              setAnswers({});
              setRevealed({});
              setHighlightedPassage(undefined);
            }}
            className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              difficultyFilter === null
                ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium"
                : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Alle
          </button>
          {[1, 2, 3].map((d) => (
            <button
              key={d}
              onClick={() => {
                setDifficultyFilter(d);
                setTextIndex(0);
                setAnswers({});
                setRevealed({});
                setHighlightedPassage(undefined);
              }}
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
        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              shuffled
                ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600"
                : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <Shuffle className="w-3 h-3" />
            Zufall
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full text-muted hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        </div>
      </div>

      {/* Text navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-500" />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Text {textIndex + 1} von {filteredTexts.length}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${difficultyLabels[currentText.difficulty].bg} ${difficultyLabels[currentText.difficulty].color}`}
          >
            {difficultyLabels[currentText.difficulty].label}
          </span>
          <span className="text-xs text-muted">{currentText.topic}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevText}
            disabled={textIndex === 0}
            className="p-1.5 rounded-lg text-muted hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextText}
            disabled={textIndex >= filteredTexts.length - 1}
            className="p-1.5 rounded-lg text-muted hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Split view: Text | Questions */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 space-y-4 lg:space-y-0">
        {/* Text panel */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 lg:max-h-[80vh] lg:overflow-y-auto">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            {currentText.title}
          </h2>
          <div
            className="prose prose-sm dark:prose-invert max-w-none text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: textHtml.replace(/\n/g, "<br/>") }}
          />
        </div>

        {/* Questions panel */}
        <div className="space-y-4 lg:sticky lg:top-4 lg:self-start lg:max-h-[80vh] lg:overflow-y-auto">
          {currentText.questions.map((q, qIdx) => (
            <QuestionCard
              key={qIdx}
              question={q}
              qIdx={qIdx}
              selected={answers[qIdx]}
              isRevealed={!!revealed[qIdx]}
              onSelect={(optIdx) => handleSelectOption(qIdx, optIdx)}
              onReveal={() => handleReveal(qIdx)}
              onHighlight={(passage) => setHighlightedPassage(passage)}
            />
          ))}

          {/* Summary after all revealed */}
          {allRevealed && (
            <Card className="border-indigo-200 dark:border-indigo-800">
              <CardContent className="p-4 text-center space-y-3">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Ergebnis: {correctCount}/{currentText.questions.length} richtig
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      correctCount === currentText.questions.length
                        ? "bg-green-500"
                        : correctCount >= currentText.questions.length / 2
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${(correctCount / currentText.questions.length) * 100}%` }}
                  />
                </div>
                {textIndex < filteredTexts.length - 1 && (
                  <button
                    onClick={handleNextText}
                    className="flex items-center gap-2 mx-auto px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  >
                    N&auml;chster Text
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  qIdx,
  selected,
  isRevealed,
  onSelect,
  onReveal,
  onHighlight,
}: {
  question: TVQuestion;
  qIdx: number;
  selected: number | undefined;
  isRevealed: boolean;
  onSelect: (optIdx: number) => void;
  onReveal: () => void;
  onHighlight: (passage?: string) => void;
}) {
  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          <span className="text-indigo-500 mr-1.5">F{qIdx + 1}.</span>
          {question.question}
        </p>

        <div className="space-y-2">
          {question.options.map((opt, optIdx) => {
            const isSelected = selected === optIdx;
            const isCorrect = optIdx === question.correctAnswer;
            let optClass =
              "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600";

            if (isRevealed) {
              if (isCorrect) {
                optClass = "border-green-500 bg-green-50 dark:bg-green-900/20";
              } else if (isSelected && !isCorrect) {
                optClass = "border-red-500 bg-red-50 dark:bg-red-900/20";
              } else {
                optClass = "border-gray-200 dark:border-gray-700 opacity-60";
              }
            } else if (isSelected) {
              optClass = "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20";
            }

            return (
              <button
                key={optIdx}
                onClick={() => onSelect(optIdx)}
                disabled={isRevealed}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm cursor-pointer disabled:cursor-default ${optClass}`}
              >
                <div className="flex items-start gap-2">
                  <span className="font-bold text-xs mt-0.5 shrink-0 w-5">
                    {String.fromCharCode(65 + optIdx)}.
                  </span>
                  <span className="flex-1 text-gray-800 dark:text-gray-200">{opt}</span>
                  {isRevealed && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  )}
                  {isRevealed && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Reveal button */}
        {!isRevealed && selected !== undefined && (
          <button
            onClick={onReveal}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
          >
            &Uuml;berpr&uuml;fen
          </button>
        )}

        {/* Explanation */}
        {isRevealed && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 space-y-2">
            <p className="text-xs text-muted leading-relaxed">{question.explanation}</p>
            {question.relevantPassage && (
              <button
                onClick={() => onHighlight(question.relevantPassage)}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer flex items-center gap-1"
              >
                <BookOpen className="w-3 h-3" />
                Relevante Textstelle anzeigen
              </button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
