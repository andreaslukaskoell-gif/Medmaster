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
import { Confetti } from "@/components/ui/confetti";
import { ConfidenzButtons } from "@/components/bms/ConfidenzButtons";
import { FSRSRatingButtons } from "@/components/bms/FSRSRatingButtons";
import { TypAQuestion } from "@/components/bms/TypAQuestion";
import { TypKQuestion } from "@/components/bms/TypKQuestion";
import { useFragenTrainer } from "@/hooks/useFragenTrainer";
import type {
  Confidence,
  TrainerMode,
  BMSSubjectId,
  SessionAnswers,
} from "@/hooks/useFragenTrainer";
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

// ── Selection Screen ──────────────────────────────────────────

type TrainMode = "einfach" | "offiziell";

function SelectionScreen({
  onStart,
  userId: _userId,
}: {
  onStart: (subjectId: BMSSubjectId, count: number, timeLimitMinutes: number | null) => void;
  userId: string;
}) {
  const [subjectId, setSubjectId] = useState<BMSSubjectId | null>(null);
  const [mode, setMode] = useState<TrainMode>("einfach");
  const [count, setCount] = useState(20);

  const subject = subjectId ? BMS_SUBJECTS.find((s) => s.id === subjectId) : null;
  const effectiveCount = mode === "offiziell" && subject ? subject.officialCount : count;
  const timeLimitMinutes = mode === "offiziell" && subject ? subject.officialMinutes : null;

  const handleStart = () => {
    if (!subjectId) return;
    onStart(subjectId, effectiveCount, timeLimitMinutes);
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
  userId,
  onFinish,
  onBack,
}: {
  subjectId: BMSSubjectId;
  count: number;
  timeLimitMinutes: number | null;
  userId: string;
  onFinish: (a: SessionAnswers) => void;
  onBack: () => void;
}) {
  const trainer = useFragenTrainer(
    [],
    userId,
    timeLimitMinutes != null ? "simulation" : "trainer",
    count,
    "supabase",
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
    confidence,
    setConfidence,
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
    answers,
    timeRemainingSeconds,
    timeLimitSeconds,
  } = trainer;

  useEffect(() => {
    if (sessionDone) {
      addXP(answers.filter((a) => a.correct).length * 5);
      onFinish(answers);
    }
  }, [sessionDone, answers, addXP, onFinish]);

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

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex items-center gap-3">
          {showTimer && (
            <span
              className={`flex items-center gap-1 text-sm font-medium ${
                timeRemainingSeconds <= 60
                  ? "text-red-600 dark:text-red-400"
                  : "text-muted-foreground"
              }`}
            >
              <Clock className="w-4 h-4" />
              {formatTime(timeRemainingSeconds)}
            </span>
          )}
          <span className="text-sm text-muted-foreground font-medium">
            {idx + 1} / {fragen.length}
          </span>
        </div>
      </div>

      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-300"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

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
          <ConfidenzButtons
            value={confidence as Confidence | null}
            onChange={(c) => !revealed && setConfidence(c)}
            disabled={revealed}
          />
          <div className="border-t border-border pt-4">
            {(currentFrage.typ === "A" || currentFrage.typ === "M") && (
              <TypAQuestion
                frage={currentFrage}
                confidence={confidence as Confidence | null}
                chosenOption={chosenOption}
                revealed={revealed}
                onChoose={chooseOption}
              />
            )}
            {currentFrage.typ === "K" && (
              <TypKQuestion
                frage={currentFrage}
                mode={"trainer" as TrainerMode}
                confidence={confidence as Confidence | null}
                typKPhase={typKPhase}
                typKDecisions={typKDecisions}
                typKCombChosen={typKCombChosen}
                revealed={revealed}
                onJudge={judgeAussage}
                onConfirmPhase1={confirmTypKPhase1}
                onChooseCombination={chooseTypKCombination}
              />
            )}
          </div>
          {canRate && (
            <div className="border-t border-border pt-4">
              <FSRSRatingButtons onRate={(rating) => submitFSRSRating(rating)} />
            </div>
          )}
        </CardContent>
      </Card>
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
          {wrong.map(({ frage, chosenOption }) => (
            <Card key={frage.id} className="border-l-4 border-l-red-400">
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {frage.stamm}
                </p>
                {frage.typ === "A" && frage.optionen && (
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
                {frage.erklaerung && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-0.5">
                      Begründung
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                      {frage.erklaerung}
                    </p>
                  </div>
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
          {right.map(({ frage }) => (
            <Card key={frage.id} className="border-l-4 border-l-green-400">
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {frage.stamm}
                </p>
                {frage.typ === "A" && frage.optionen && (
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
                {frage.erklaerung && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-0.5">
                      Begründung
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                      {frage.erklaerung}
                    </p>
                  </div>
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
  const [results, setResults] = useState<SessionAnswers>([]);
  const userId = useMemo(() => getLocalUserId(), []);

  return (
    <div className="p-4 pb-24 md:p-6">
      {screen === "select" && (
        <SelectionScreen
          userId={userId}
          onStart={(subj, c, time) => {
            setSubjectId(subj);
            setCount(c);
            setTimeLimitMinutes(time);
            setScreen("quiz");
          }}
        />
      )}
      {screen === "quiz" && subjectId != null && (
        <QuizScreen
          subjectId={subjectId}
          count={count}
          timeLimitMinutes={timeLimitMinutes}
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
