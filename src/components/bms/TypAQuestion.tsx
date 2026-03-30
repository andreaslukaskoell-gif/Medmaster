/**
 * TypAQuestion -- MedAT Typ A (Einzelauswahl) + Typ M (Rechenaufgabe)
 *
 * Flow:
 *   1. User taps one option (no confidence step)
 *   2. Correct/wrong revealed immediately
 *   3. Explanation shown
 *   4. FSRS rating buttons appear
 *
 * Design: StudyMed-inspired premium layout with key badges and clear visual hierarchy.
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
    `[Fragetext fehlt — ID: ${frage.id}. Bitte „Offline-Pool" als Quelle wählen oder Fehler melden.]`;

  return (
    <div className="space-y-6">
      {/* Question stem */}
      <p className="text-base font-medium text-[var(--text-primary)] leading-[1.7]">
        {stammDisplay}
      </p>

      {/* Options */}
      <div>
        <p className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.12em] mb-3">
          Wähle eine Antwort:
        </p>

        <div className="space-y-2.5" role="radiogroup" aria-label="Antwortmöglichkeiten">
          {optionen.map((opt, i) => {
            const isKorrekt = opt.key === correct;
            const isChosen = opt.key === chosenOption;
            const isWrongChosen = isChosen && !isKorrekt;

            let borderCls = "border-[var(--border)]";
            let bgCls = "bg-[var(--card)]";
            let textCls = "text-[var(--text-primary)]";
            let keyCls = "bg-[var(--border)]/60 text-[var(--muted)]";
            let extraCls = "";

            if (revealed) {
              if (isKorrekt) {
                borderCls = "border-green-500";
                bgCls = "bg-green-50/80 dark:bg-green-950/15";
                textCls = "text-green-800 dark:text-green-300";
                keyCls = "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
              } else if (isWrongChosen) {
                borderCls = "border-red-400";
                bgCls = "bg-red-50/60 dark:bg-red-950/10";
                textCls = "text-red-700 dark:text-red-400 line-through";
                keyCls = "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
              } else {
                borderCls = "border-[var(--border)]";
                bgCls = "";
                textCls = "text-[var(--muted)]";
                keyCls = "bg-[var(--border)]/40 text-[var(--muted)]/60";
                extraCls = "opacity-40";
              }
            } else if (isChosen) {
              borderCls = "border-[var(--accent)]/60";
              bgCls = "bg-[var(--accent)]/5";
              keyCls = "bg-[var(--accent)]/15 text-[var(--accent)]";
            }

            return (
              <motion.button
                key={opt.key}
                role="radio"
                aria-checked={isChosen}
                aria-label={`Option ${opt.key}: ${stripMarkdownAsterisks(opt.text)}`}
                onClick={() => !locked && onChoose(opt.key)}
                disabled={locked}
                layout
                animate={
                  revealed
                    ? isKorrekt
                      ? { scale: [1, 1.02, 1], transition: { duration: 0.3, delay: i * 0.04 } }
                      : isWrongChosen
                        ? { x: [0, -5, 5, -3, 0], transition: { duration: 0.35 } }
                        : { opacity: 0.4, transition: { duration: 0.25, delay: 0.1 } }
                    : {}
                }
                className={`w-full text-left rounded-xl border px-4 py-3.5 transition-all flex items-center gap-3.5
                  ${borderCls} ${bgCls} ${extraCls}
                  ${!locked ? "cursor-pointer hover:border-[var(--accent)]/40 hover:shadow-sm active:scale-[0.99]" : "cursor-default"}
                `}
              >
                {/* Option key badge */}
                <span
                  className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-[13px] font-bold shrink-0 ${keyCls}`}
                >
                  {opt.key}
                </span>

                {/* Option text */}
                <span className={`text-[15px] flex-1 leading-snug ${textCls}`}>
                  {stripMarkdownAsterisks(opt.text)}
                </span>

                {/* Result icons */}
                {revealed && isKorrekt && (
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                )}
                {revealed && isWrongChosen && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      <div aria-live="polite" aria-atomic="true">
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
            >
              <Card
                className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2.5">
                    {isCorrect ? (
                      <CheckCircle2 className="w-4.5 h-4.5 text-green-500 shrink-0" />
                    ) : (
                      <XCircle className="w-4.5 h-4.5 text-red-500 shrink-0" />
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
                    <p className="text-sm text-[var(--muted)] leading-[1.7]">
                      {stripMarkdownAsterisks(frage.erklaerung)}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});
