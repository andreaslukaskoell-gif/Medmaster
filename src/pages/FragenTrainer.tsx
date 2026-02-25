/**
 * Fragen-Trainer — einfach
 *
 * 1. Fach wählen (Biologie, Chemie, Physik, Mathematik)
 * 2. Modus: Einfach trainieren (beliebig viele, am Ende Übersicht + Begründungen)
 *    oder Offizielle Simulation (z. B. Bio 40 Fragen in 30 Min)
 * 3. Quiz → Ergebnis mit richtig/falsch und Begründung
 */
import { useState, useMemo, useEffect } from "react";
import {
  ArrowLeft,
  Trophy,
  RotateCcw,
  BookOpen,
  Loader2,
  AlertCircle,
  ChevronRight,
  Dumbbell,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Confetti } from "@/components/ui/confetti";
import { FSRSRatingButtons } from "@/components/bms/FSRSRatingButtons";
import { TypAQuestion } from "@/components/bms/TypAQuestion";
import { TypKQuestion } from "@/components/bms/TypKQuestion";
import { useFragenTrainer, suggestFSRSRating } from "@/hooks/useFragenTrainer";
import type {
  TrainerMode,
  BMSSubjectId,
  SessionAnswers,
  QuestionSource,
} from "@/hooks/useFragenTrainer";
import type { TypKKombination } from "@/lib/supabaseBMSFragen";
import { useStore } from "@/store/useStore";
import { usePageTitle } from "@/hooks/usePageTitle";

// ── Constants ─────────────────────────────────────────────────

const BMS_SUBJECTS: {
  id: BMSSubjectId;
  label: string;
  emoji: string;
  officialCount: number;
  officialMinutes: number;
}[] = [
  { id: "biologie", label: "Biologie", emoji: "🧬", officialCount: 40, officialMinutes: 30 },
  { id: "chemie", label: "Chemie", emoji: "⚗️", officialCount: 24, officialMinutes: 18 },
  { id: "physik", label: "Physik", emoji: "⚡", officialCount: 18, officialMinutes: 16 },
  { id: "mathematik", label: "Mathematik", emoji: "📐", officialCount: 12, officialMinutes: 11 },
];

const EINFACH_COUNTS = [10, 20, 30, 50];

const DIFF_COLOR: Record<number, string> = {
  1: "bg-green-100  text-green-700  dark:bg-green-900/30  dark:text-green-400",
  2: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  3: "bg-red-100    text-red-700    dark:bg-red-900/30    dark:text-red-400",
};
const DIFF_LABEL: Record<number, string> = { 1: "Leicht", 2: "Mittel", 3: "Schwer" };

function getLocalUserId(): string {
  const key = "medmaster-local-uid";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatTypKOptionLabel(k: TypKKombination | undefined, totalAussagen: number): string {
  if (!k) return "";
  const n = k.nummern?.length ?? 0;
  if (n === 0) return "Keine der Aussagen ist richtig";
  if (totalAussagen >= 2 && n === totalAussagen) return "Alle Aussagen sind richtig";
  const nummern = k.nummern ?? [];
  if (nummern.length === 1) return `Nur Aussage ${nummern[0]} ist richtig`;
  if (nummern.length === 2) return `Nur ${nummern[0]} und ${nummern[1]} sind richtig`;
  return `Nur Aussagen ${nummern.slice(0, -1).join(", ")} und ${nummern[nummern.length - 1]} sind richtig`;
}

// ── Selection Screen ──────────────────────────────────────────

type TrainMode = "einfach" | "offiziell";

function SelectionScreen({
  onStart,
  userId: _userId,
}: {
  onStart: (
    subjectId: BMSSubjectId,
    count: number,
    timeLimitMinutes: number | null,
    source: QuestionSource
  ) => void;
  userId: string;
}) {
  const [subjectId, setSubjectId] = useState<BMSSubjectId | null>(null);
  const [mode, setMode] = useState<TrainMode>("einfach");
  const [count, setCount] = useState(20);
  const [source, setSource] = useState<QuestionSource>("pool");

  const subject = subjectId ? BMS_SUBJECTS.find((s) => s.id === subjectId) : null;
  const effectiveCount = mode === "offiziell" && subject ? subject.officialCount : count;
  const timeLimitMinutes = mode === "offiziell" && subject ? subject.officialMinutes : null;

  const handleStart = () => {
    if (!subjectId) return;
    onStart(subjectId, effectiveCount, timeLimitMinutes, source);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
          <Dumbbell className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Fragen-Trainer</h1>
          <p className="text-sm text-muted-foreground">
            BMS: Fach wählen, dann trainieren oder offizielle Zeitvorgabe
          </p>
        </div>
      </div>

      {/* 1. Fach */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">1. Fach wählen</p>
          <div className="grid grid-cols-2 gap-2">
            {BMS_SUBJECTS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSubjectId(s.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left ${
                  subjectId === s.id
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                    : "border-border text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <span className="text-lg">{s.emoji}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {subjectId && (
        <>
          {/* 2. Modus */}
          <Card>
            <CardContent className="p-4 space-y-3">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">2. Modus</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMode("einfach")}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left ${
                    mode === "einfach"
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                      : "border-border text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="font-semibold">Einfach trainieren</div>
                  <div className="text-xs opacity-70">
                    So viele wie du willst, am Ende Übersicht + Begründungen
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setMode("offiziell")}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left ${
                    mode === "offiziell"
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                      : "border-border text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="font-semibold">Offizielle Simulation</div>
                  <div className="text-xs opacity-70">
                    {subject && `${subject.officialCount} Fragen in ${subject.officialMinutes} Min`}
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Anzahl (nur bei Einfach) */}
          {mode === "einfach" && (
            <Card>
              <CardContent className="p-4 space-y-3">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Anzahl Fragen
                </p>
                <div className="flex flex-wrap gap-2">
                  {EINFACH_COUNTS.map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setCount(n)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all cursor-pointer ${
                        count === n
                          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                          : "border-border hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 3. Quelle */}
          <Card>
            <CardContent className="p-4 space-y-3">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">3. Quelle</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSource("pool")}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left ${
                    source === "pool"
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                      : "border-border text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="font-semibold">Offline-Pool</div>
                  <div className="text-xs opacity-70">
                    Ohne Anmeldung, alle Fragen aus dem lokalen Pool
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setSource("supabase")}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left ${
                    source === "supabase"
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                      : "border-border text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="font-semibold">Mit Fortschritt (Supabase)</div>
                  <div className="text-xs opacity-70">
                    Versuche werden gespeichert, FSRS-Anpassung
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Start */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {effectiveCount} Fragen
              {timeLimitMinutes != null && ` · ${timeLimitMinutes} Min Zeitlimit`}
            </p>
            <Button
              onClick={handleStart}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Starten <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

// ── Quiz Screen ───────────────────────────────────────────────

function QuizScreen({
  subjectId,
  count,
  timeLimitMinutes,
  source,
  userId,
  onFinish,
  onBack,
}: {
  subjectId: BMSSubjectId;
  count: number;
  timeLimitMinutes: number | null;
  source: QuestionSource;
  userId: string;
  onFinish: (a: SessionAnswers) => void;
  onBack: () => void;
}) {
  const trainer = useFragenTrainer(
    [],
    userId,
    timeLimitMinutes != null ? "simulation" : "trainer",
    count,
    source,
    { subjectId, timeLimitMinutes: timeLimitMinutes ?? undefined }
  );
  const { addXP } = useStore();
  const {
    loading,
    error,
    currentFrage,
    idx,
    progress,
    fragen,
    sessionDone,
    revealed,
    chosenOption,
    chooseOption,
    typKPhase,
    typKDecisions,
    typKCombChosen,
    judgeAussage,
    confirmTypKPhase1,
    chooseTypKCombination,
    submitFSRSRating,
    isAnswerCorrect,
    getTimeOnCurrentQuestion,
    answers,
    timeRemainingSeconds,
    timeLimitSeconds,
    goToQuestion,
  } = trainer;

  useEffect(() => {
    if (sessionDone) {
      addXP(answers.filter((a) => a.correct).length * 5);
      onFinish(answers);
    }
  }, [sessionDone, answers, addXP, onFinish]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (sessionDone || !currentFrage) return;
      const canRateNow = revealed && (currentFrage.typ !== "K" || typKCombChosen !== null);
      const isReview = idx < answers.length;
      if (e.key === "Enter") {
        if (canRateNow) {
          e.preventDefault();
          submitFSRSRating(3);
        } else if (isReview && idx < fragen.length - 1) {
          e.preventDefault();
          goToQuestion(idx + 1);
        }
        return;
      }
      const num =
        e.key === "1"
          ? 1
          : e.key === "2"
            ? 2
            : e.key === "3"
              ? 3
              : e.key === "4"
                ? 4
                : e.key === "5"
                  ? 5
                  : 0;
      if (num === 0) return;
      const keys = ["A", "B", "C", "D", "E"];
      const key = keys[num - 1];
      if (
        !revealed &&
        (currentFrage.typ === "A" || currentFrage.typ === "M") &&
        currentFrage.optionen?.some((o) => o.key === key)
      ) {
        e.preventDefault();
        chooseOption(key);
        return;
      }
      if (
        !revealed &&
        currentFrage.typ === "K" &&
        typKPhase === 2 &&
        currentFrage.kombinationen?.[num - 1]
      ) {
        e.preventDefault();
        chooseTypKCombination(currentFrage.kombinationen[num - 1].key);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    sessionDone,
    currentFrage,
    revealed,
    typKPhase,
    typKCombChosen,
    idx,
    answers.length,
    fragen.length,
    submitFSRSRating,
    chooseOption,
    chooseTypKCombination,
    goToQuestion,
  ]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
        <Loader2 className="w-8 h-8 animate-spin" />
        <p className="text-sm">Fragen werden geladen…</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-red-500">
        <AlertCircle className="w-8 h-8" />
        <p className="text-sm">Fehler: {error}</p>
        <Button variant="outline" onClick={onBack}>
          Zurück
        </Button>
      </div>
    );

  if (!loading && fragen.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
        <AlertCircle className="w-8 h-8" />
        <p className="text-sm">Keine Fragen für dieses Fach gefunden.</p>
        <Button variant="outline" onClick={onBack}>
          Zurück
        </Button>
      </div>
    );

  if (!currentFrage) return null;

  const canRate = revealed && (currentFrage.typ !== "K" || typKCombChosen !== null);
  const showTimer = timeLimitSeconds != null && timeRemainingSeconds != null;
  const isReviewMode = idx < answers.length;
  const reviewAnswer = isReviewMode ? answers[idx] : null;

  const [adaptiveHintDismissed, setAdaptiveHintDismissed] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("medmaster-adaptive-hint") === "1";
  });
  const showAdaptiveHint = !adaptiveHintDismissed;
  const dismissAdaptiveHint = () => {
    setAdaptiveHintDismissed(true);
    try {
      localStorage.setItem("medmaster-adaptive-hint", "1");
    } catch {}
  };

  return (
    <div className="flex gap-4 max-w-4xl mx-auto">
      <div className="flex-1 min-w-0 space-y-4">
        {showAdaptiveHint && (
          <div className="flex items-center justify-between gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-3 py-2">
            <p className="text-xs text-blue-800 dark:text-blue-200">
              Schwierigkeit und Wiederholungen passen sich deinem Stand an.
            </p>
            <button
              type="button"
              onClick={dismissAdaptiveHint}
              className="text-blue-600 dark:text-blue-400 hover:underline shrink-0 text-xs"
            >
              OK
            </button>
          </div>
        )}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
          </Button>
          <div className="flex items-center gap-3">
            {showTimer && (
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  timeRemainingSeconds !== null && timeRemainingSeconds <= 60
                    ? "text-red-600 dark:text-red-400"
                    : "text-muted-foreground"
                }`}
              >
                <Clock className="w-4 h-4" />
                {timeRemainingSeconds != null ? formatTime(timeRemainingSeconds) : ""}
              </span>
            )}
            <span className="text-sm text-muted-foreground font-medium">
              {idx + 1} / {fragen.length}
            </span>
            <Badge variant="info" className="text-xs font-normal">
              An dein Level angepasst
            </Badge>
          </div>
        </div>

        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>

        {isReviewMode && reviewAnswer ? (
          <Card className="border-l-4 border-l-blue-400">
            <CardContent className="p-5 space-y-3">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Durchsicht — Frage {idx + 1}
              </p>
              <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                {reviewAnswer.frage.stamm}
              </p>
              {(reviewAnswer.frage.typ === "A" || reviewAnswer.frage.typ === "M") &&
                reviewAnswer.frage.optionen && (
                  <div className="space-y-1">
                    {reviewAnswer.frage.optionen.map((opt) => (
                      <div
                        key={opt.key}
                        className={`text-sm px-3 py-2 rounded-lg ${
                          opt.key === reviewAnswer.frage.korrekte_option
                            ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium"
                            : opt.key === reviewAnswer.chosenOption
                              ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 line-through"
                              : "text-gray-500 dark:text-gray-500"
                        }`}
                      >
                        <span className="font-bold mr-2">{opt.key}</span>
                        {opt.text}
                      </div>
                    ))}
                  </div>
                )}
              {reviewAnswer.frage.typ === "K" && reviewAnswer.frage.aussagen && (
                <div className="space-y-1">
                  {reviewAnswer.frage.aussagen.map((a) => (
                    <div
                      key={a.nr}
                      className={`text-sm px-3 py-1.5 rounded-lg ${
                        a.korrekt
                          ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                          : "text-gray-500"
                      }`}
                    >
                      <span className="font-bold mr-2">{a.nr}</span>
                      {a.text}
                    </div>
                  ))}
                  {(reviewAnswer.typKChosenOption != null ||
                    reviewAnswer.frage.korrekte_option) && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      {reviewAnswer.typKChosenOption != null && (
                        <span className="text-red-600 dark:text-red-400">
                          Deine Wahl: {reviewAnswer.typKChosenOption}
                        </span>
                      )}
                      {reviewAnswer.frage.korrekte_option && (
                        <span className="ml-2 text-green-600 dark:text-green-400">
                          Richtig: {reviewAnswer.frage.korrekte_option}
                        </span>
                      )}
                    </p>
                  )}
                </div>
              )}
              {reviewAnswer.frage.erklaerung?.trim() && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <p className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-1">
                    Begründung
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
                    {reviewAnswer.frage.erklaerung}
                  </p>
                </div>
              )}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToQuestion(idx - 1)}
                  disabled={idx <= 0}
                >
                  ← Zurück
                </Button>
                <Button
                  size="sm"
                  onClick={() => goToQuestion(idx + 1)}
                  disabled={idx >= fragen.length - 1}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Weiter →
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${DIFF_COLOR[currentFrage.schwierigkeit]}`}
              >
                {DIFF_LABEL[currentFrage.schwierigkeit]}
              </span>
              <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-medium">
                Typ {currentFrage.typ}
              </span>
            </div>

            <Card>
              <CardContent className="p-5 space-y-5">
                <div>
                  {(currentFrage.typ === "A" || currentFrage.typ === "M") && (
                    <>
                      <TypAQuestion
                        frage={currentFrage}
                        chosenOption={chosenOption}
                        revealed={revealed}
                        onChoose={chooseOption}
                      />
                      {!revealed && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Tipp: Tasten <kbd className="px-1 rounded bg-muted font-mono">1</kbd>–
                          <kbd className="px-1 rounded bg-muted font-mono">5</kbd> = A–E
                        </p>
                      )}
                    </>
                  )}
                  {currentFrage.typ === "K" && (
                    <>
                      <TypKQuestion
                        frage={currentFrage}
                        mode={"trainer" as TrainerMode}
                        typKPhase={typKPhase}
                        typKDecisions={typKDecisions}
                        typKCombChosen={typKCombChosen}
                        revealed={revealed}
                        onJudge={judgeAussage}
                        onConfirmPhase1={confirmTypKPhase1}
                        onChooseCombination={chooseTypKCombination}
                      />
                      {!revealed && typKPhase === 2 && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Tipp: Tasten <kbd className="px-1 rounded bg-muted font-mono">1</kbd>–
                          <kbd className="px-1 rounded bg-muted font-mono">5</kbd> = Kombination A–E
                        </p>
                      )}
                    </>
                  )}
                </div>
                {canRate && (
                  <div className="border-t border-border pt-4 space-y-2">
                    <FSRSRatingButtons
                      onRate={(rating) => submitFSRSRating(rating)}
                      suggestedRating={
                        currentFrage
                          ? suggestFSRSRating(
                              isAnswerCorrect(),
                              currentFrage.schwierigkeit,
                              getTimeOnCurrentQuestion()
                            )
                          : null
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      Tipp: <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono">Enter</kbd> =
                      Weiter („Gut“)
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Rechte Seite: Fragen-Navigation */}
      <div className="w-12 shrink-0 flex flex-col gap-1">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide sticky top-0 bg-background/95 py-1">
          Nr.
        </p>
        <div className="flex flex-col gap-0.5 max-h-[60vh] overflow-y-auto">
          {fragen.map((_, i) => {
            const answered = i < answers.length;
            const isCurrent = i === idx;
            const correct = answered && answers[i]?.correct;
            return (
              <button
                key={i}
                type="button"
                onClick={() => goToQuestion(i)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors shrink-0
                  ${isCurrent ? "ring-2 ring-emerald-500 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200" : ""}
                  ${!isCurrent && answered && correct ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50" : ""}
                  ${!isCurrent && answered && !correct ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50" : ""}
                  ${!isCurrent && !answered ? "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700" : ""}
                `}
                title={`Frage ${i + 1}${answered ? (correct ? " (richtig)" : " (falsch)") : ""}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Results Screen ────────────────────────────────────────────

function ResultsScreen({
  answers,
  onRestart,
  onBack,
}: {
  answers: SessionAnswers;
  onRestart: () => void;
  onBack: () => void;
}) {
  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const wrong = answers.filter((a) => !a.correct);
  const right = answers.filter((a) => a.correct);

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <Confetti active={pct >= 80} />
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
      </Button>

      <Card>
        <CardContent className="p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-1">
            {correct}
            <span className="text-2xl text-muted-foreground font-normal">/{total}</span>
          </div>
          <p className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold">
            {pct}% richtig
          </p>
          <p className="text-sm text-muted-foreground mt-1">+{correct * 5} XP</p>
          {pct >= 90 && <p className="text-sm font-bold text-yellow-600 mt-2">🏆 Ausgezeichnet!</p>}
          {pct >= 70 && pct < 90 && (
            <p className="text-sm font-bold text-emerald-600 mt-2">✅ Sehr gut!</p>
          )}
          {pct < 70 && (
            <p className="text-sm text-muted-foreground mt-2">Weitermachen – du schaffst das!</p>
          )}
        </CardContent>
      </Card>

      {/* Falsch beantwortet + Begründung */}
      {wrong.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Falsch beantwortet ({wrong.length})
          </h3>
          {wrong.map(({ frage, chosenOption, typKChosenOption }) => (
            <Card key={frage.id} className="border-l-4 border-l-red-400">
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {frage.stamm}
                </p>
                {(frage.typ === "A" || frage.typ === "M") && frage.optionen && (
                  <div className="space-y-1">
                    {frage.optionen.map((opt) => (
                      <div
                        key={opt.key}
                        className={`text-xs px-3 py-1.5 rounded-lg ${
                          opt.key === frage.korrekte_option
                            ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium"
                            : opt.key === chosenOption
                              ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 line-through"
                              : "text-gray-400 dark:text-gray-600"
                        }`}
                      >
                        <span className="font-bold mr-1">{opt.key}</span>
                        {opt.text}
                      </div>
                    ))}
                  </div>
                )}
                {frage.typ === "K" && frage.aussagen && (
                  <>
                    <div className="space-y-1">
                      {frage.aussagen.map((a) => (
                        <div
                          key={a.nr}
                          className={`text-xs px-3 py-1.5 rounded-lg ${
                            a.korrekt
                              ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                              : "text-gray-500 dark:text-gray-500"
                          }`}
                        >
                          <span className="font-bold mr-1">{a.nr}</span>
                          {a.text}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {typKChosenOption != null && (
                        <span className="text-red-700 dark:text-red-400 font-medium">
                          Deine Kombination:{" "}
                          {formatTypKOptionLabel(
                            frage.kombinationen?.find((k) => k.key === typKChosenOption),
                            frage.aussagen.length
                          ) || typKChosenOption}
                        </span>
                      )}
                      {frage.korrekte_option && (
                        <span className="text-green-700 dark:text-green-400 font-medium">
                          Richtig:{" "}
                          {formatTypKOptionLabel(
                            frage.kombinationen?.find((k) => k.key === frage.korrekte_option),
                            frage.aussagen.length
                          ) || frage.korrekte_option}
                        </span>
                      )}
                    </div>
                  </>
                )}
                {frage.erklaerung?.trim() ? (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-0.5">
                      Begründung
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                      {frage.erklaerung}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                    Keine Begründung hinterlegt.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Richtig beantwortet + Begründung */}
      {right.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Richtig beantwortet ({right.length}) – Begründungen
          </h3>
          {right.map(({ frage, typKChosenOption }) => (
            <Card key={frage.id} className="border-l-4 border-l-green-400">
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {frage.stamm}
                </p>
                {(frage.typ === "A" || frage.typ === "M") && frage.optionen && (
                  <div className="space-y-1">
                    {frage.optionen.map((opt) => (
                      <div
                        key={opt.key}
                        className={`text-xs px-3 py-1.5 rounded-lg ${
                          opt.key === frage.korrekte_option
                            ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium"
                            : "text-gray-400 dark:text-gray-600"
                        }`}
                      >
                        <span className="font-bold mr-1">{opt.key}</span>
                        {opt.text}
                      </div>
                    ))}
                  </div>
                )}
                {frage.typ === "K" && frage.aussagen && (
                  <>
                    <div className="space-y-1">
                      {frage.aussagen.map((a) => (
                        <div
                          key={a.nr}
                          className={`text-xs px-3 py-1.5 rounded-lg ${
                            a.korrekt
                              ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                              : "text-gray-500 dark:text-gray-500"
                          }`}
                        >
                          <span className="font-bold mr-1">{a.nr}</span>
                          {a.text}
                        </div>
                      ))}
                    </div>
                    {frage.korrekte_option && (
                      <p className="text-xs text-green-700 dark:text-green-400 font-medium">
                        Richtig:{" "}
                        {formatTypKOptionLabel(
                          frage.kombinationen?.find((k) => k.key === frage.korrekte_option),
                          frage.aussagen.length
                        ) || frage.korrekte_option}
                      </p>
                    )}
                  </>
                )}
                {frage.erklaerung?.trim() ? (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-0.5">
                      Begründung
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                      {frage.erklaerung}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                    Keine Begründung hinterlegt.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="flex gap-3 justify-center pb-4">
        <Button variant="outline" onClick={onRestart}>
          <RotateCcw className="w-4 h-4 mr-1" /> Nochmal
        </Button>
        <Button onClick={onBack} className="bg-emerald-600 hover:bg-emerald-700 text-white">
          Neue Auswahl
        </Button>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────

export default function FragenTrainer() {
  usePageTitle("Fragen-Trainer");
  const [screen, setScreen] = useState<"select" | "quiz" | "results">("select");
  const [subjectId, setSubjectId] = useState<BMSSubjectId | null>(null);
  const [count, setCount] = useState(20);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number | null>(null);
  const [questionSource, setQuestionSource] = useState<QuestionSource>("pool");
  const [results, setResults] = useState<SessionAnswers>([]);
  const userId = useMemo(() => getLocalUserId(), []);

  return (
    <div className="p-4 pb-24 md:p-6">
      {screen === "select" && (
        <SelectionScreen
          userId={userId}
          onStart={(subj, c, time, src) => {
            setSubjectId(subj);
            setCount(c);
            setTimeLimitMinutes(time);
            setQuestionSource(src);
            setScreen("quiz");
          }}
        />
      )}
      {screen === "quiz" && subjectId != null && (
        <QuizScreen
          subjectId={subjectId}
          count={count}
          timeLimitMinutes={timeLimitMinutes}
          source={questionSource}
          userId={userId}
          onFinish={(r) => {
            setResults(r);
            setScreen("results");
          }}
          onBack={() => setScreen("select")}
        />
      )}
      {screen === "results" && (
        <ResultsScreen
          answers={results}
          onRestart={() => setScreen("quiz")}
          onBack={() => setScreen("select")}
        />
      )}
    </div>
  );
}
