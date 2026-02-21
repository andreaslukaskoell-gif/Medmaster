/**
 * TypAQuestion — MedAT Typ A (Einzelauswahl) + Typ M (Rechenaufgabe)
 *
 * Flow:
 *   1. User taps confidence  (ConfidenzButtons)
 *   2. Options appear → user taps one option
 *   3. Correct/wrong revealed immediately
 *   4. Explanation shown
 *   5. FSRS rating buttons appear
 */
import { CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { BMSFrage } from '@/lib/supabaseBMSFragen';

interface Props {
  frage: BMSFrage;
  confidence: import('@/hooks/useFragenTrainer').Confidence | null;
  chosenOption: string | null;
  revealed: boolean;
  onChoose: (key: string) => void;
}

export function TypAQuestion({ frage, confidence, chosenOption, revealed, onChoose }: Props) {
  const optionen = frage.optionen ?? [];
  const correct  = frage.korrekte_option ?? '';
  const isCorrect = chosenOption === correct;
  const locked    = revealed || confidence === null;

  return (
    <div className="space-y-3">
      {/* Question stem */}
      <p className="text-base font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
        {frage.stamm}
      </p>

      {/* Options — hidden until confidence selected */}
      <div
        className={`space-y-2 transition-all duration-200 ${
          confidence === null ? 'opacity-30 pointer-events-none select-none' : 'opacity-100'
        }`}
      >
        {optionen.map(opt => {
          let cls = 'border-border hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300';

          if (revealed) {
            if (opt.key === correct) {
              cls = 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium';
            } else if (opt.key === chosenOption) {
              cls = 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 line-through';
            } else {
              cls = 'border-border opacity-40 text-gray-400 dark:text-gray-500';
            }
          }

          return (
            <button
              key={opt.key}
              onClick={() => !locked && onChoose(opt.key)}
              disabled={locked}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all
                ${cls}
                ${!locked ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'}
              `}
            >
              <span className="font-bold mr-2 text-xs opacity-70">{opt.key}</span>
              {opt.text}
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
        <Card className={`border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              {isCorrect
                ? <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                : <XCircle      className="w-4 h-4 text-red-500   shrink-0" />}
              <span className={`text-sm font-semibold ${
                isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
              }`}>
                {isCorrect ? 'Richtig!' : `Falsch — Richtig wäre: ${correct}`}
              </span>
            </div>
            {frage.erklaerung && (
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {frage.erklaerung}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
