/**
 * TypKQuestion — MedAT Typ K (Kombinationsaufgabe)
 *
 * TRAINER-Modus (2 Phasen):
 *   Phase 1: Jede Aussage einzeln ✓/✗ beurteilen
 *   Phase 2: Kombination A-E wählen
 *   → Erklärung pro falsch beurteilter Aussage
 *
 * SIMULATION-Modus:
 *   Direkt: 5 Aussagen sichtbar + Kombinationsoptionen A-E auswählen
 */
import React from "react";
import { Check, X, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import type { BMSFrage } from "@/lib/supabaseBMSFragen";
import type { TypKKombination } from "@/lib/supabaseBMSFragen";
import type { TrainerMode } from "@/hooks/useFragenTrainer";

/** MedAT-exakte Optionstexte: „Alle sind richtig.“, „1. und 3. sind richtig.“, „2. ist richtig.“ (4 Aussagen, A–E). */
function formatTypKOptionLabel(k: TypKKombination, totalAussagen: number): string {
  const nummern = (k.nummern ?? []).slice().sort((a, b) => a - b);
  const n = nummern.length;
  if (n === 0) return "Keine der Aussagen ist richtig.";
  if (totalAussagen >= 2 && n === totalAussagen) return "Alle sind richtig.";
  const mitPunkt = nummern.map((nr) => `${nr}.`);
  if (mitPunkt.length === 1) return `${mitPunkt[0]} ist richtig.`;
  if (mitPunkt.length === 2) return `${mitPunkt[0]} und ${mitPunkt[1]} sind richtig.`;
  return `${mitPunkt.slice(0, -1).join(", ")} und ${mitPunkt[mitPunkt.length - 1]} sind richtig.`;
}

type Props = {
  frage: BMSFrage;
  mode: TrainerMode;
  typKPhase: 1 | 2;
  typKDecisions: (boolean | null)[];
  typKCombChosen: string | null;
  revealed: boolean;
  onJudge: (nr: number, decision: boolean) => void;
  onConfirmPhase1: () => void;
  onChooseCombination: (key: string) => void;
};

export const TypKQuestion = React.memo(function TypKQuestion({
  frage,
  mode,
  typKPhase,
  typKDecisions,
  typKCombChosen,
  revealed,
  onJudge,
  onConfirmPhase1,
  onChooseCombination,
}: Props) {
  const aussagen = frage.aussagen ?? [];
  const kombinationen = frage.kombinationen ?? [];
  const korrekt = frage.korrekte_option ?? "";
  const isCorrect = typKCombChosen === korrekt;
  const locked = false;
  const stammDisplay =
    (frage.stamm && frage.stamm.trim()) ||
    `[Fragetext fehlt — ID: ${frage.id}. Bitte „Offline-Pool“ als Quelle wählen oder Fehler melden.]`;

  // Phase 1 complete when all aussagen have a decision
  const phase1Complete = aussagen.every((_, i) => typKDecisions[i] != null);

  return (
    <div className="space-y-4">
      {/* Question stem */}
      <p className="text-base font-medium text-[var(--text-primary)] leading-relaxed">
        {stammDisplay}
      </p>

      {/* ── AUSSAGEN ─────────────────────────────────────── */}
      <div
        className={`space-y-2 transition-opacity duration-200 ${locked ? "opacity-30 pointer-events-none" : ""}`}
      >
        <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide">
          {mode === "trainer" ? "Jede Aussage beurteilen:" : "Aussagen:"}
        </p>

        {aussagen.map((a, i) => {
          const decision = typKDecisions[i] ?? null;
          const showResult = revealed;
          const wasWrong = showResult && decision !== a.korrekt;

          return (
            <div
              key={a.nr}
              className={`rounded-xl border p-3 transition-all ${
                wasWrong
                  ? "border-red-300 bg-red-50 dark:bg-red-900/10"
                  : showResult
                    ? "border-green-300 bg-green-50 dark:bg-green-900/10"
                    : "border-[var(--border)] bg-[var(--card)]"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Aussage number */}
                <span className="text-xs font-bold text-[var(--muted)]/60 mt-0.5 w-4 shrink-0">
                  {a.nr}
                </span>

                {/* Text */}
                <p className="text-sm text-[var(--text-secondary)] flex-1 leading-relaxed">
                  {a.text}
                </p>

                {/* TRAINER mode phase 1: ✓/✗ buttons */}
                {mode === "trainer" && typKPhase === 1 && !revealed && (
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      onClick={() => onJudge(a.nr, true)}
                      className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all cursor-pointer
                        ${
                          decision === true
                            ? "border-green-500 bg-green-100 dark:bg-green-900/30 text-green-600"
                            : "border-[var(--border)] text-[var(--muted)]/60 hover:border-green-400 hover:text-green-500"
                        }`}
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onJudge(a.nr, false)}
                      className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all cursor-pointer
                        ${
                          decision === false
                            ? "border-red-500 bg-red-100 dark:bg-red-900/30 text-red-600"
                            : "border-[var(--border)] text-[var(--muted)]/60 hover:border-red-400 hover:text-red-500"
                        }`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* TRAINER mode: show result after reveal */}
                {revealed && (
                  <div className="shrink-0">
                    {a.korrekt ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                )}

                {/* SIMULATION mode: just show neutral indicator */}
                {mode === "simulation" && !revealed && <div className="w-4 shrink-0" />}
              </div>

              {/* Wrong judgement explanation */}
              {wasWrong && frage.erklaerung && (
                <div className="mt-2 ml-7 flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {a.korrekt ? "Diese Aussage ist richtig." : "Diese Aussage ist falsch."}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── TRAINER: Phase 1 → Phase 2 button ────────────── */}
      {mode === "trainer" && typKPhase === 1 && !revealed && !locked && (
        <Button
          onClick={onConfirmPhase1}
          disabled={!phase1Complete}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40"
        >
          Kombination wählen →
        </Button>
      )}

      {/* ── KOMBINATIONEN ────────────────────────────────── */}
      {(mode === "simulation" || (mode === "trainer" && typKPhase === 2)) && (
        <div
          className={`space-y-2 transition-opacity duration-200 ${locked ? "opacity-30 pointer-events-none" : ""}`}
        >
          <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide">
            Welche Kombination ist richtig?
          </p>
          {kombinationen.map((k, i) => {
            let cls =
              "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]";

            if (revealed) {
              if (k.key === korrekt) {
                cls =
                  "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium";
              } else if (k.key === typKCombChosen) {
                cls =
                  "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 line-through";
              } else {
                cls = "border-[var(--border)] opacity-40 text-[var(--muted)]/60";
              }
            }

            const label = formatTypKOptionLabel(k, aussagen.length);
            return (
              <motion.button
                key={k.key}
                onClick={() => !revealed && onChooseCombination(k.key)}
                disabled={revealed}
                layout
                animate={
                  revealed
                    ? k.key === korrekt
                      ? { scale: [1, 1.03, 1], transition: { duration: 0.35, delay: i * 0.04 } }
                      : k.key === typKCombChosen
                        ? { x: [0, -6, 6, -3, 0], transition: { duration: 0.4 } }
                        : { opacity: 0.4, transition: { duration: 0.3, delay: 0.15 } }
                    : {}
                }
                className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-colors
                  ${cls} ${!revealed ? "cursor-pointer active:scale-[0.98]" : "cursor-default"}
                `}
              >
                <span className="font-bold mr-2 text-xs opacity-70">{k.key}</span>
                {label}
                {revealed && k.key === korrekt && (
                  <CheckCircle2 className="w-4 h-4 inline ml-2 text-green-500" />
                )}
                {revealed && k.key === typKCombChosen && k.key !== korrekt && (
                  <XCircle className="w-4 h-4 inline ml-2 text-red-500" />
                )}
              </motion.button>
            );
          })}
        </div>
      )}

      {/* ── Gesamterklärung after reveal ─────────────────── */}
      <AnimatePresence>
        {revealed && frage.erklaerung && (
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
                    {isCorrect ? "Richtig!" : `Falsch — Richtig wäre: ${korrekt}`}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {stripMarkdownAsterisks(frage.erklaerung)}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
