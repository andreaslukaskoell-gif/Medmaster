/**
 * TypAQuestion — MedAT Typ A (Einzelauswahl) + Typ M (Rechenaufgabe)
 *
 * Flow:
 *   1. User taps one option (no confidence step)
 *   2. Correct/wrong revealed immediately
 *   3. Explanation shown
 *   4. FSRS rating buttons appear
 */
import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

type Props = {
  frage: BMSFrage;
  chosenOption: string | null;
  revealed: boolean;
  onChoose: (key: string) => void;
};

export const TypAQuestion = React.memo(function TypAQuestion({
  frage,
  chosenOption,
  revealed,
  onChoose,
}: Props) {
  const optionen = frage.optionen ?? [];
  const correct = frage.korrekte_option ?? "";
  const isCorrect = chosenOption === correct;
  const locked = revealed;
  const stammDisplay =
    stripMarkdownAsterisks(frage.stamm) ||
    `[Fragetext fehlt — ID: ${frage.id}. Bitte „Offline-Pool“ als Quelle wählen oder Fehler melden.]`;

  return (
    <div className="space-y-3">
      {/* Question stem */}
      <p className="text-base font-medium text-[var(--text-primary)] leading-relaxed">
        {stammDisplay}
      </p>

      {/* Options */}
      <div className="space-y-2">
        {optionen.map((opt, i) => {
          let cls =
            "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]";

          if (revealed) {
            if (opt.key === correct) {
              cls =
                "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium";
            } else if (opt.key === chosenOption) {
              cls =
                "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 line-through";
            } else {
              cls = "border-[var(--border)] opacity-40 text-[var(--muted)]/60";
            }
          }

          return (
            <motion.button
              key={opt.key}
              onClick={() => !locked && onChoose(opt.key)}
              disabled={locked}
              layout
              animate={
                revealed
                  ? opt.key === correct
                    ? { scale: [1, 1.03, 1], transition: { duration: 0.35, delay: i * 0.04 } }
                    : opt.key === chosenOption
                      ? { x: [0, -6, 6, -3, 0], transition: { duration: 0.4 } }
                      : { opacity: 0.4, transition: { duration: 0.3, delay: 0.15 } }
                  : {}
              }
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-colors
                ${cls}
                ${!locked ? "cursor-pointer active:scale-[0.98]" : "cursor-default"}
              `}
            >
              <span className="font-bold mr-2 text-xs opacity-70">{opt.key}</span>
              {stripMarkdownAsterisks(opt.text)}
              {revealed && opt.key === correct && (
                <CheckCircle2 className="w-4 h-4 inline ml-2 text-green-500" />
              )}
              {revealed && opt.key === chosenOption && opt.key !== correct && (
                <XCircle className="w-4 h-4 inline ml-2 text-red-500" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          >
            <Card className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  )}
                  <span
                    className={`text-sm font-semibold ${
                      isCorrect
                        ? "text-green-700 dark:text-green-400"
                        : "text-red-700 dark:text-red-400"
                    }`}
                  >
                    {isCorrect ? "Richtig!" : `Falsch — Richtig wäre: ${correct}`}
                  </span>
                </div>
                {frage.erklaerung && (
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {stripMarkdownAsterisks(frage.erklaerung)}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
