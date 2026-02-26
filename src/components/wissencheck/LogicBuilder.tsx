import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SequenceQuestion } from "@/data/wissencheckSequences";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface LogicBuilderProps {
  question: SequenceQuestion;
  onCorrect: () => void;
  onWrong?: () => void;
  accentClass?: string;
}

export function LogicBuilder({
  question,
  onCorrect,
  onWrong,
  accentClass = "bg-primary-600",
}: LogicBuilderProps) {
  const { title, correctOrder, explanation } = question;

  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [remaining, setRemaining] = useState<string[]>(() => shuffle(correctOrder));
  const [isWrong, setIsWrong] = useState(false);
  const [solved, setSolved] = useState(false);

  const addToOrder = (fragment: string) => {
    if (solved) return;
    setRemaining((prev) => prev.filter((s) => s !== fragment));
    setSelectedOrder((prev) => [...prev, fragment]);
    setIsWrong(false);
  };

  const removeFromOrder = (fragment: string) => {
    if (solved) return;
    setSelectedOrder((prev) => prev.filter((s) => s !== fragment));
    setRemaining((prev) => shuffle([...prev, fragment]));
    setIsWrong(false);
  };

  const handleCheck = () => {
    if (selectedOrder.length !== correctOrder.length) return;
    const correct =
      selectedOrder.length === correctOrder.length &&
      selectedOrder.every((s, i) => s === correctOrder[i]);
    if (correct) {
      setSolved(true);
    } else {
      setIsWrong(true);
      onWrong?.();
    }
  };

  const handleReset = () => {
    setSelectedOrder([]);
    setRemaining(shuffle(correctOrder));
    setIsWrong(false);
  };

  const canCheck = selectedOrder.length === correctOrder.length && !solved;

  return (
    <div className="space-y-5">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</p>
      <p className="text-xs text-muted">
        Tippe die Fragmente in der richtigen Reihenfolge an. Klicke auf ein gewähltes Fragment, um
        es zurückzusetzen.
      </p>

      {/* Ausgewählte Reihenfolge (mit Pfeilen) */}
      <div className="min-h-[3rem] flex flex-wrap items-center gap-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-800/50 border-2 border-dashed border-gray-300 dark:border-gray-600">
        {selectedOrder.length === 0 ? (
          <span className="text-sm text-muted">Reihenfolge hier aufbauen …</span>
        ) : (
          selectedOrder.map((fragment, i) => (
            <span key={`${fragment}-${i}`} className="inline-flex items-center gap-2">
              <motion.button
                type="button"
                onClick={() => removeFromOrder(fragment)}
                className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-900 dark:text-gray-100 hover:border-primary-500 dark:hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                whileTap={{ scale: 0.98 }}
              >
                {fragment}
              </motion.button>
              {i < selectedOrder.length - 1 && (
                <ArrowRight
                  className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0"
                  aria-hidden
                />
              )}
            </span>
          ))
        )}
      </div>

      {/* Verfügbare Fragmente (zum Antippen) – wackeln bei falscher Reihenfolge */}
      <motion.div
        className="flex flex-wrap gap-2"
        animate={isWrong ? { x: [0, -12, 12, -12, 12, 0] } : { x: 0 }}
        transition={{ duration: 0.45 }}
        onAnimationComplete={() => {
          if (isWrong) {
            handleReset();
            setIsWrong(false);
          }
        }}
      >
        {remaining.map((fragment) => (
          <motion.button
            key={fragment}
            type="button"
            onClick={() => addToOrder(fragment)}
            disabled={solved}
            className="px-4 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium text-sm hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500/50 disabled:opacity-50 disabled:pointer-events-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {fragment}
          </motion.button>
        ))}
      </motion.div>

      {/* Prüfen / Zurücksetzen */}
      <div className="flex flex-wrap gap-2">
        {!solved && (
          <Button
            onClick={handleCheck}
            disabled={!canCheck}
            className={accentClass + " text-white hover:opacity-90"}
          >
            Reihenfolge prüfen
          </Button>
        )}
        {!solved && selectedOrder.length > 0 && (
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-1" />
            Zurücksetzen
          </Button>
        )}
      </div>

      {/* Erfolg + Erklärung + Weiter */}
      {solved && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 text-green-800 dark:text-green-200 font-medium mb-2">
              <CheckCircle2 className="w-5 h-5" />
              Richtig!
            </div>
            {explanation && (
              <p className="text-sm text-green-900 dark:text-green-100 leading-relaxed">
                {stripMarkdownAsterisks(explanation)}
              </p>
            )}
          </div>
          <Button onClick={onCorrect} className={accentClass + " text-white hover:opacity-90"}>
            Weiter
          </Button>
        </motion.div>
      )}
    </div>
  );
}
