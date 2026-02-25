/**
 * FragenTrainer — Phase 6 Rebuild
 *
 * Screens: select → quiz → results
 *
 * Features:
 *   - TYP A + TYP K questions
 *   - Confidence buttons BEFORE answering
 *   - FSRS rating AFTER answering
 *   - FSRS-driven question rotation (due → new → recent)
 *   - Error Pattern DNA badges
 *   - Interleaving Toggle (opt-in, localStorage)
 *   - TRAINER vs SIMULATION mode
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
  ToggleLeft,
  ToggleRight,
  Shuffle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Confetti } from "@/components/ui/confetti";
import { ConfidenzButtons } from "@/components/bms/ConfidenzButtons";
import { FSRSRatingButtons } from "@/components/bms/FSRSRatingButtons";
import { TypAQuestion } from "@/components/bms/TypAQuestion";
import { TypKQuestion } from "@/components/bms/TypKQuestion";
import { MRSWidget } from "@/components/bms/MRSWidget";
import { useBMSSubchapterList } from "@/hooks/useBMSSubchapterQuestions";
import { useFragenTrainer, useMRS, useErrorPatterns } from "@/hooks/useFragenTrainer";
import type { Confidence, TrainerMode, QuestionSource } from "@/hooks/useFragenTrainer";
import { getChaptersWithContentKnowledge, getKnowledgeByUkId } from "@/data/bmsQuestionKnowledge";
import { useStore } from "@/store/useStore";
import { usePageTitle } from "@/hooks/usePageTitle";

// ── Constants ─────────────────────────────────────────────────

const BIO_CHAPTERS = [
  { id: "bio-kap1", label: "Zellbiologie", emoji: "🧬" },
  { id: "bio-kap2", label: "Gewebe", emoji: "🔬" },
  { id: "bio-kap3", label: "Anatomie & Physio", emoji: "🫀" },
  { id: "bio-kap4", label: "Entwicklungsbiologie", emoji: "🥚" },
  { id: "bio-kap5", label: "Klassische Genetik", emoji: "🧬" },
  { id: "bio-kap6", label: "Molekulargenetik", emoji: "🔬" },
  { id: "bio-kap8", label: "Humangenetik", emoji: "👨‍⚕️" },
  { id: "bio-kap9", label: "Evolution", emoji: "🦴" },
  { id: "bio-kap10", label: "Ökologie", emoji: "🌿" },
  { id: "bio-kap11", label: "Immunologie", emoji: "🛡️" },
];

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

// ── Selection Screen ──────────────────────────────────────────

function SelectionScreen({
  onStart,
  userId,
}: {
  onStart: (ids: string[], mode: TrainerMode, source: QuestionSource) => void;
  userId: string;
}) {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedUKs, setSelectedUKs] = useState<Set<string>>(new Set());
  const [mode, setMode] = useState<TrainerMode>("trainer");
  const [questionSource, setQuestionSource] = useState<QuestionSource>("supabase");
  const [interleaving, setInterleaving] = useState(
    () => localStorage.getItem("ft-interleaving") === "true"
  );

  const contentChapters = useMemo(() => getChaptersWithContentKnowledge(), []);
  const { subchapters, loading } = useBMSSubchapterList(
    questionSource === "supabase" ? selectedChapter : null
  );
  const contentSubchapters = useMemo(() => {
    if (questionSource !== "content" || !selectedChapter) return [];
    const ch = contentChapters.find((c) => c.chapterId === selectedChapter);
    if (!ch) return [];
    return ch.ukIds.map((ukId) => {
      const k = getKnowledgeByUkId(ukId);
      return { id: ukId, title: k?.title ?? ukId, questionCount: 8 };
    });
  }, [questionSource, selectedChapter, contentChapters]);

  const activeSubchapters = questionSource === "content" ? contentSubchapters : subchapters;
  const subchaptersLoading = questionSource === "supabase" && loading;

  const { mrs, loading: mrsLoading } = useMRS(userId);
  const allUKIds = useMemo(() => activeSubchapters.map((s) => s.id), [activeSubchapters]);
  const errorPatterns = useErrorPatterns(userId, allUKIds);

  const totalSelected = useMemo(
    () =>
      questionSource === "content"
        ? (interleaving ? activeSubchapters.length : selectedUKs.size) * 8
        : activeSubchapters
            .filter((s) => selectedUKs.has(s.id))
            .reduce((n, s) => n + s.questionCount, 0),
    [questionSource, activeSubchapters, selectedUKs, interleaving]
  );

  const toggleUK = (id: string) =>
    setSelectedUKs((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  const toggleInterleaving = () => {
    const next = !interleaving;
    setInterleaving(next);
    localStorage.setItem("ft-interleaving", String(next));
  };

  const handleStart = () =>
    onStart(
      interleaving ? activeSubchapters.map((s) => s.id) : [...selectedUKs],
      mode,
      questionSource
    );

  const canStart = selectedChapter && (selectedUKs.size > 0 || interleaving);

  const chaptersToShow =
    questionSource === "content"
      ? contentChapters.map((c) => ({
          id: c.chapterId,
          label: c.chapterId
            .replace("bio-kap", "Bio ")
            .replace("ch-kap", "Chemie ")
            .replace("ph-kap", "Physik ")
            .replace("ma-kap", "Mathe "),
          emoji: c.chapterId.startsWith("bio")
            ? "🧬"
            : c.chapterId.startsWith("ch")
              ? "⚗️"
              : c.chapterId.startsWith("ph")
                ? "⚡"
                : "📐",
        }))
      : BIO_CHAPTERS;

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
          <Dumbbell className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Fragen-Trainer</h1>
          <p className="text-sm text-muted-foreground">
            {questionSource === "supabase"
              ? "Biologie · FSRS-gesteuerte Wiederholung"
              : "MedMaster-Inhalt · Generierte Fragen"}
          </p>
        </div>
      </div>

      {questionSource === "supabase" && <MRSWidget mrs={mrs} loading={mrsLoading} />}

      {/* Quelle */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Quelle</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setQuestionSource("supabase");
                setSelectedChapter(null);
                setSelectedUKs(new Set());
              }}
              className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left ${
                questionSource === "supabase"
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                  : "border-border text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <div className="font-semibold">Supabase</div>
              <div className="text-xs opacity-70">Bestehende Fragen, FSRS</div>
            </button>
            <button
              type="button"
              onClick={() => {
                setQuestionSource("content");
                setSelectedChapter(null);
                setSelectedUKs(new Set());
              }}
              className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left ${
                questionSource === "content"
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                  : "border-border text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <div className="font-semibold">MedMaster-Inhalt</div>
              <div className="text-xs opacity-70">Aus Kapitelstoff generiert</div>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Mode */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Modus</p>
          <div className="grid grid-cols-2 gap-2">
            {(["trainer", "simulation"] as TrainerMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left space-y-0.5 ${
                  mode === m
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                    : "border-border text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <div className="font-semibold">
                  {m === "trainer" ? "🎓 Trainer" : "⚡ Simulation"}
                </div>
                <div className="text-xs opacity-70">
                  {m === "trainer"
                    ? "Schritt für Schritt + Erklärungen"
                    : "Wie echte MedAT-Prüfung"}
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chapter */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">1. Kapitel</p>
          <div className="grid grid-cols-2 gap-2">
            {chaptersToShow.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  setSelectedChapter(ch.id);
                  setSelectedUKs(new Set());
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors cursor-pointer text-left ${
                  selectedChapter === ch.id
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                    : "border-border hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                <span>{ch.emoji}</span>
                <span className="truncate text-xs">{ch.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* UKs */}
      {selectedChapter && (
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                2. Unterkapitel
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedUKs(new Set(activeSubchapters.map((s) => s.id)))}
                  className="text-xs text-emerald-600 hover:underline cursor-pointer"
                >
                  Alle
                </button>
                <span className="text-muted-foreground text-xs">·</span>
                <button
                  onClick={() => setSelectedUKs(new Set())}
                  className="text-xs text-muted-foreground hover:underline cursor-pointer"
                >
                  Keine
                </button>
              </div>
            </div>
            {subchaptersLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground text-sm py-4">
                <Loader2 className="w-4 h-4 animate-spin" /> Lädt…
              </div>
            ) : (
              <div className="space-y-1 max-h-64 overflow-y-auto">
                {activeSubchapters.map((uk) => {
                  const pat = errorPatterns[uk.id];
                  const hasError = pat && pat.errorRate > 0.5 && pat.attempts >= 5;
                  return (
                    <label
                      key={uk.id}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedUKs.has(uk.id)}
                        onChange={() => toggleUK(uk.id)}
                        className="rounded border-gray-300 text-emerald-600 cursor-pointer"
                      />
                      <span className="text-sm flex-1 text-gray-700 dark:text-gray-300">
                        {uk.title}
                      </span>
                      {hasError && (
                        <span title={`${Math.round(pat.errorRate * 100)}% Fehlerrate`}>
                          <AlertTriangle className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">{uk.questionCount}×</span>
                    </label>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Interleaving toggle */}
      {selectedChapter && (
        <button
          onClick={toggleInterleaving}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Shuffle className="w-4 h-4 text-gray-500" />
            <div className="text-left">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                MedAT-Mix (Interleaving)
              </p>
              <p className="text-xs text-muted-foreground">
                Fragen aus allen UKs gemischt (opt-in)
              </p>
            </div>
          </div>
          {interleaving ? (
            <ToggleRight className="w-6 h-6 text-emerald-500" />
          ) : (
            <ToggleLeft className="w-6 h-6 text-gray-400" />
          )}
        </button>
      )}

      {/* Start */}
      {canStart && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {interleaving
              ? `Alle UKs · ${mode}`
              : `${selectedUKs.size} UK${selectedUKs.size > 1 ? "s" : ""} · ${totalSelected} Fragen`}
          </p>
          <Button onClick={handleStart} className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Starten <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
}

// ── Quiz Screen ───────────────────────────────────────────────

function QuizScreen({
  uk_ids,
  mode,
  userId,
  source,
  onFinish,
  onBack,
}: {
  uk_ids: string[];
  mode: TrainerMode;
  userId: string;
  source: QuestionSource;
  onFinish: (a: SessionAnswers) => void;
  onBack: () => void;
}) {
  const trainer = useFragenTrainer(uk_ids, userId, mode, 8, source);
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
  } = trainer;

  useEffect(() => {
    if (sessionDone) {
      addXP(answers.filter((a) => a.correct).length * 5);
      onFinish(answers);
    }
  }, [sessionDone]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
        <Loader2 className="w-8 h-8 animate-spin" />
        <p className="text-sm">FSRS-Rotation berechnen…</p>
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

  if (!currentFrage) return null;

  const canRate = revealed && (currentFrage.typ !== "K" || typKCombChosen !== null);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <span className="text-sm text-muted-foreground font-medium">
          {idx + 1} / {fragen.length}
        </span>
      </div>

      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-300"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-muted-foreground px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">
          {currentFrage.uk_id}
        </span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${DIFF_COLOR[currentFrage.schwierigkeit]}`}
        >
          {DIFF_LABEL[currentFrage.schwierigkeit]}
        </span>
        <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-medium">
          Typ {currentFrage.typ}
        </span>
        {currentFrage.fsrs && (
          <span className="text-xs text-muted-foreground px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">
            {currentFrage.fsrs.reps === 0 ? "Neu" : `${currentFrage.fsrs.reps}× gesehen`}
          </span>
        )}
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
                mode={mode}
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

  const byDiff: Record<number, { c: number; t: number }> = {};
  for (const a of answers) {
    const d = a.frage.schwierigkeit;
    if (!byDiff[d]) byDiff[d] = { c: 0, t: 0 };
    byDiff[d].t++;
    if (a.correct) byDiff[d].c++;
  }

  const confCounts = [0, 0, 0];
  const confCorrect = [0, 0, 0];
  for (const a of answers) {
    confCounts[a.confidence]++;
    if (a.correct) confCorrect[a.confidence]++;
  }

  const wrong = answers.filter((a) => !a.correct);

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

      {Object.keys(byDiff).length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {([1, 2, 3] as const)
            .filter((d) => byDiff[d])
            .map((d) => (
              <Card key={d}>
                <CardContent className="p-3 text-center">
                  <p
                    className={`text-xs font-semibold mb-1 ${DIFF_COLOR[d].split(" ").slice(1).join(" ")}`}
                  >
                    {DIFF_LABEL[d]}
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {byDiff[d].c}/{byDiff[d].t}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      )}

      {answers.length >= 5 && (
        <Card>
          <CardContent className="p-4 space-y-2">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Konfidenz-Kalibrierung
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              {(["🔴 Geraten", "🟡 Unsicher", "🟢 Sicher"] as const).map((label, i) =>
                confCounts[i] > 0 ? (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      {Math.round((confCorrect[i] / confCounts[i]) * 100)}%
                    </p>
                    <p className="text-[10px] text-muted-foreground">{confCounts[i]}×</p>
                  </div>
                ) : null
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {wrong.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Falsch beantwortet ({wrong.length})
          </h3>
          {wrong.map(({ frage, chosenOption }) => (
            <Card key={frage.id} className="border-l-4 border-l-red-400">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {frage.stamm}
                  </p>
                  <span className="text-[10px] shrink-0 px-1.5 py-0.5 rounded border border-border text-muted-foreground">
                    Typ {frage.typ}
                  </span>
                </div>
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

type SessionAnswers = ReturnType<typeof useFragenTrainer>["answers"];

export default function FragenTrainer() {
  usePageTitle("Fragen-Trainer");
  const [screen, setScreen] = useState<"select" | "quiz" | "results">("select");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [mode, setMode] = useState<TrainerMode>("trainer");
  const [questionSource, setQuestionSource] = useState<QuestionSource>("supabase");
  const [results, setResults] = useState<SessionAnswers>([]);
  const userId = useMemo(() => getLocalUserId(), []);

  return (
    <div className="p-4 pb-24 md:p-6">
      {screen === "select" && (
        <SelectionScreen
          userId={userId}
          onStart={(ids, m, source) => {
            setSelectedIds(ids);
            setMode(m);
            setQuestionSource(source);
            setScreen("quiz");
          }}
        />
      )}
      {screen === "quiz" && (
        <QuizScreen
          uk_ids={selectedIds}
          mode={mode}
          userId={userId}
          source={questionSource}
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
