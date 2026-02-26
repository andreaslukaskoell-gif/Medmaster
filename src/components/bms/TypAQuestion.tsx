/**
 * TypAQuestion — MedAT Typ A (Einzelauswahl) + Typ M (Rechenaufgabe)
 *
 * Flow:
 *   1. User taps one option (no confidence step)
 *   2. Correct/wrong revealed immediately
 *   3. Explanation shown
 *   4. FSRS rating buttons appear
 */
import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

interface Props {
  frage: BMSFrage;
  chosenOption: string | null;
  revealed: boolean;
  onChoose: (key: string) => void;
}

export function TypAQuestion({ frage, chosenOption, revealed, onChoose }: Props) {
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
      <p className="text-base font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
        {stammDisplay}
      </p>

      {/* Options */}
      <div className="space-y-2">
        {optionen.map((opt) => {
          let cls =
            "border-border hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300";

          if (revealed) {
            if (opt.key === correct) {
              cls =
                "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium";
            } else if (opt.key === chosenOption) {
              cls =
                "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 line-through";
            } else {
              cls = "border-border opacity-40 text-gray-400 dark:text-gray-500";
            }
          }

          return (
            <button
              key={opt.key}
              onClick={() => !locked && onChoose(opt.key)}
              disabled={locked}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all
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
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {revealed && (
        <Card className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-red-500   shrink-0" />
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
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {stripMarkdownAsterisks(frage.erklaerung)}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
