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
 *
 * Design: StudyMed-inspired premium layout with clear visual hierarchy.
 */
import React from "react";
import { Check, X, AlertCircle, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import type { BMSFrage } from "@/lib/supabaseBMSFragen";
import type { TypKKombination } from "@/lib/supabaseBMSFragen";
import type { TrainerMode } from "@/hooks/useFragenTrainer";

/** MedAT-exakte Optionstexte: „Alle sind richtig.", „1. und 3. sind richtig.", „2. ist richtig." (4 Aussagen, A–E). */
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
    `[Fragetext fehlt — ID: ${frage.id}. Bitte „Offline-Pool" als Quelle wählen oder Fehler melden.]`;

  // Phase 1 complete when all aussagen have a decision
  const phase1Complete = aussagen.every((_, i) => typKDecisions[i] != null);

  return (
    <div className="space-y-6">
      {/* Question stem */}
      <p className="text-base font-medium text-[var(--text-primary)] leading-[1.7]">
        {stammDisplay}
      </p>

      {/* ── AUSSAGEN (Statements Panel) ──────────────────── */}
      <div
        className={`transition-opacity duration-200 ${locked ? "opacity-30 pointer-events-none" : ""}`}
      >
        <p className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.12em] mb-3">
          {mode === "trainer" && typKPhase === 1
            ? "Jede Aussage beurteilen:"
            : "Aussagen:"}
        </p>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] dark:bg-white/[0.02] overflow-hidden">
          {aussagen.map((a, i) => {
            const decision = typKDecisions[i] ?? null;
            const showResult = revealed;
            const wasWrong = showResult && decision !== a.korrekt;
            const isLast = i === aussagen.length - 1;

            return (
              <div key={a.nr}>
                <div
                  className={`px-5 py-4 transition-colors ${
                    wasWrong
                      ? "bg-red-50/80 dark:bg-red-950/15"
                      : showResult && a.korrekt
                        ? "bg-green-50/60 dark:bg-green-950/10"
                        : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Statement number badge */}
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-[13px] font-bold shrink-0 mt-0.5 ${
                        wasWrong
                          ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                          : showResult && a.korrekt
                            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-[var(--border)]/60 text-[var(--muted)] dark:bg-white/10"
                      }`}
                    >
                      {a.nr}
                    </span>

                    {/* Statement text */}
                    <p className="text-[15px] text-[var(--text-primary)] flex-1 leading-[1.7] pt-0.5">
                      {a.text}
                    </p>

                    {/* TRAINER mode phase 1: ✓/✗ buttons */}
                    {mode === "trainer" && typKPhase === 1 && !revealed && (
                      <div className="flex gap-2 shrink-0 ml-2">
                        <button
                          onClick={() => onJudge(a.nr, true)}
                          className={`w-9 h-9 rounded-lg border-2 flex items-center justify-center transition-all cursor-pointer
                            ${
                              decision === true
                                ? "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-600 shadow-sm"
                                : "border-[var(--border)] text-[var(--muted)]/50 hover:border-green-400 hover:text-green-500 hover:bg-green-50/50"
                            }`}
                          title="Richtig"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onJudge(a.nr, false)}
                          className={`w-9 h-9 rounded-lg border-2 flex items-center justify-center transition-all cursor-pointer
                            ${
                              decision === false
                                ? "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-600 shadow-sm"
                                : "border-[var(--border)] text-[var(--muted)]/50 hover:border-red-400 hover:text-red-500 hover:bg-red-50/50"
                            }`}
                          title="Falsch"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {/* Result indicator after reveal */}
                    {revealed && (
                      <div className="shrink-0 mt-1">
                        {a.korrekt ? (
                          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                          </div>
                        )}
                      </div>
                    )}

                    {/* SIMULATION mode: neutral spacer */}
                    {mode === "simulation" && !revealed && <div className="w-6 shrink-0" />}
                  </div>

                  {/* Wrong judgement feedback */}
                  {wasWrong && (
                    <div className="mt-2.5 ml-11 flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-[13px] text-red-600 dark:text-red-400">
                        {a.korrekt ? "Diese Aussage ist richtig." : "Diese Aussage ist falsch."}
                      </p>
                    </div>
                  )}
                </div>

                {/* Separator between statements */}
                {!isLast && (
                  <div className="mx-5 border-b border-[var(--border)]/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── TRAINER: Phase 1 → Phase 2 button ────────────── */}
      {mode === "trainer" && typKPhase === 1 && !revealed && !locked && (
        <button
          onClick={onConfirmPhase1}
          disabled={!phase1Complete}
          className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer
            ${
              phase1Complete
                ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-sm"
                : "bg-[var(--border)]/60 text-[var(--muted)] cursor-not-allowed"
            }`}
        >
          Kombination wählen
          <ArrowRight className="w-4 h-4" />
        </button>
      )}

      {/* ── KOMBINATIONEN (Answer Options) ───────────────── */}
      {(mode === "simulation" || (mode === "trainer" && typKPhase === 2)) && (
        <div
          className={`transition-opacity duration-200 ${locked ? "opacity-30 pointer-events-none" : ""}`}
        >
          <p className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.12em] mb-3">
            Welche Kombination ist richtig?
          </p>

          <div className="space-y-2.5">
            {kombinationen.map((k, i) => {
              const isKorrekt = k.key === korrekt;
              const isChosen = k.key === typKCombChosen;
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
                      ? isKorrekt
                        ? { scale: [1, 1.02, 1], transition: { duration: 0.3, delay: i * 0.04 } }
                        : isWrongChosen
                          ? { x: [0, -5, 5, -3, 0], transition: { duration: 0.35 } }
                          : { opacity: 0.4, transition: { duration: 0.25, delay: 0.1 } }
                      : {}
                  }
                  className={`w-full text-left rounded-xl border px-4 py-3.5 transition-all flex items-center gap-3.5
                    ${borderCls} ${bgCls} ${extraCls}
                    ${!revealed ? "cursor-pointer hover:border-[var(--accent)]/40 hover:shadow-sm active:scale-[0.99]" : "cursor-default"}
                  `}
                >
                  {/* Option key badge */}
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-[13px] font-bold shrink-0 ${keyCls}`}
                  >
                    {k.key}
                  </span>

                  {/* Option text */}
                  <span className={`text-[15px] flex-1 leading-snug ${textCls}`}>
                    {label}
                  </span>

                  {/* Result icons */}
                  {revealed && isKorrekt && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  )}
                  {revealed && isWrongChosen && (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                </motion.button>
              );
            })}
          </div>
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
                    {isCorrect ? "Richtig!" : `Falsch — Richtig wäre: ${korrekt}`}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)] leading-[1.7]">
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
