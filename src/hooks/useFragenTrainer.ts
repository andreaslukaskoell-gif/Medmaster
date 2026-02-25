/**
 * useFragenTrainer — central hook for the BMS Fragen-Trainer.
 *
 * Responsibilities:
 *   - Load questions for selected UKs (FSRS-ordered)
 *   - Track session state (current idx, answers, confidence)
 *   - Record attempts to Supabase after each FSRS rating
 *   - Expose MRS data + error patterns
 */
import { useState, useEffect, useCallback, useRef } from "react";
import {
  getNextQuestions,
  recordAttempt,
  fetchErrorPatterns,
  fetchMRSData,
  filterValidBMSFragen,
  type BMSFrage,
  type MRSData,
  type ErrorPattern,
} from "@/lib/supabaseBMSFragen";
import { generateContentQuestions, toBMSFrage } from "@/lib/bmsQuestionGenerator";
import {
  getPoolBMSFragen,
  getBMSFragenBySubject,
  getAllPoolBMSFragenForUKs,
} from "@/lib/bmsPoolForTrainer";
import type { FSRSRating } from "@/lib/fsrs";

export type BMSSubjectId = "biologie" | "chemie" | "physik" | "mathematik";

export type FragenTrainerOptions = {
  subjectId?: BMSSubjectId;
  timeLimitMinutes?: number;
};

// ── Session types ─────────────────────────────────────────────

export type Confidence = 0 | 1 | 2; // 0=Raten 1=Unsicher 2=Sicher

export interface SessionAnswer {
  frage: BMSFrage;
  correct: boolean;
  confidence: Confidence;
  fsrs_rating: FSRSRating;
  chosenOption?: string; // TYP A/M
  typKPhase1?: boolean[]; // TYP K: user's per-Aussage decisions
}

export type SessionAnswers = SessionAnswer[];

export type TrainerMode = "trainer" | "simulation";

/** Where questions come from: Supabase (FSRS), content-derived (generator), or pool (static Typ A + Typ K). */
export type QuestionSource = "supabase" | "content" | "pool";

// ── Hook ─────────────────────────────────────────────────────

export function useFragenTrainer(
  uk_ids: string[],
  user_id: string | null,
  mode: TrainerMode = "trainer",
  count = 8,
  source: QuestionSource = "supabase",
  options?: FragenTrainerOptions
) {
  const { subjectId, timeLimitMinutes } = options ?? {};
  const [fragen, setFragen] = useState<BMSFrage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Session
  const [idx, setIdx] = useState(0);
  const [confidence, setConfidence] = useState<Confidence | null>(null);
  const [answers, setAnswers] = useState<SessionAnswer[]>([]);
  const [sessionDone, setSessionDone] = useState(false);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number | null>(
    timeLimitMinutes != null ? timeLimitMinutes * 60 : null
  );
  const startTimeRef = useRef<number>(0);

  // Per-question phase state
  const [revealed, setRevealed] = useState(false);
  const [chosenOption, setChosenOption] = useState<string | null>(null);
  const [typKDecisions, setTypKDecisions] = useState<(boolean | null)[]>([]);
  const [typKPhase, setTypKPhase] = useState<1 | 2>(1);
  const [typKCombChosen, setTypKCombChosen] = useState<string | null>(null);

  const recordedRef = useRef(false);

  const resetQuestionState = useCallback(() => {
    setRevealed(false);
    setChosenOption(null);
    setTypKDecisions([]);
    setTypKPhase(1);
    setTypKCombChosen(null);
  }, []);

  // ── Load questions ──────────────────────────────────────────
  const subjectKey = subjectId ?? "";
  const ukIdsKey = uk_ids.join(",");
  useEffect(() => {
    const t = setTimeout(() => {
      if (subjectId) {
        setLoading(true);
        setError(null);
        const list = getBMSFragenBySubject(subjectId, count);
        setFragen(list);
        setLoading(false);
        if (list.length === 0) setError(`Keine Fragen für ${subjectId} gefunden.`);
        setIdx(0);
        setConfidence(null);
        setAnswers([]);
        setSessionDone(false);
        setTimeRemainingSeconds(timeLimitMinutes != null ? timeLimitMinutes * 60 : null);
        startTimeRef.current = Date.now();
        resetQuestionState();
        recordedRef.current = false;
        return;
      }
      if (!uk_ids.length) {
        setFragen([]);
        setLoading(false);
        setError(null);
        return;
      }
      setLoading(true);
      setError(null);

      if (source === "content") {
        const generated = generateContentQuestions(uk_ids, count);
        const asFragen = generated.map(toBMSFrage);
        const valid = filterValidBMSFragen(asFragen);
        setFragen(valid);
        setLoading(false);
        if (valid.length === 0) {
          setError(
            asFragen.length > 0
              ? "Einige Fragen waren ungültig und wurden verworfen. Bitte andere Unterkapitel wählen."
              : "Für die gewählten Unterkapitel sind noch keine Fragen hinterlegt. Bitte andere wählen."
          );
        }
      } else if (source === "pool") {
        const poolFragen = getPoolBMSFragen(uk_ids, count);
        setFragen(poolFragen);
        setLoading(false);
        if (poolFragen.length === 0) {
          setError(
            "Für die gewählten Unterkapitel sind keine Pool-Fragen vorhanden. Bitte andere Unterkapitel wählen."
          );
        }
      } else {
        getNextQuestions(uk_ids, user_id, count, getAllPoolBMSFragenForUKs)
          .then((raw) => {
            const valid = filterValidBMSFragen(raw);
            setFragen(valid);
            setLoading(false);
            if (raw.length > 0 && valid.length === 0) {
              setError("Alle geladenen Fragen waren ungültig und wurden verworfen.");
            }
          })
          .catch((e) => {
            setError(String(e));
            setLoading(false);
          });
      }
      setIdx(0);
      setConfidence(null);
      setAnswers([]);
      setSessionDone(false);
      setTimeRemainingSeconds(timeLimitMinutes != null ? timeLimitMinutes * 60 : null);
      startTimeRef.current = Date.now();
      resetQuestionState();
      recordedRef.current = false;
    }, 0);
    return () => clearTimeout(t);
  }, [subjectKey, ukIdsKey, user_id, count, source, timeLimitMinutes, resetQuestionState]);

  // ── Timer (official simulation) ─────────────────────────────
  useEffect(() => {
    if (timeLimitMinutes == null || sessionDone) return;
    const totalSeconds = timeLimitMinutes * 60;
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const remaining = Math.max(0, Math.floor(totalSeconds - elapsed));
      setTimeRemainingSeconds(remaining);
      if (remaining <= 0) setSessionDone(true);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLimitMinutes, sessionDone]);

  // ── Current question ────────────────────────────────────────
  const currentFrage = fragen[idx] ?? null;
  const progress = fragen.length > 0 ? idx / fragen.length : 0;

  // ── TYP A: choose option ────────────────────────────────────
  const chooseOption = useCallback(
    (key: string) => {
      if (revealed || confidence === null) return;
      setChosenOption(key);
      setRevealed(true);
    },
    [revealed, confidence]
  );

  // ── TYP K phase 1: judge each Aussage ──────────────────────
  const judgeAussage = useCallback(
    (nr: number, decision: boolean) => {
      if (typKPhase !== 1 || confidence === null) return;
      setTypKDecisions((prev) => {
        const next = [...prev];
        const i = nr - 1;
        next[i] = decision;
        return next;
      });
    },
    [typKPhase, confidence]
  );

  const confirmTypKPhase1 = useCallback(() => {
    setTypKPhase(2);
  }, []);

  const chooseTypKCombination = useCallback(
    (key: string) => {
      if (typKPhase !== 2 || typKCombChosen) return;
      setTypKCombChosen(key);
      setRevealed(true);
    },
    [typKPhase, typKCombChosen]
  );

  // ── Determine correctness ────────────────────────────────────
  const isAnswerCorrect = useCallback((): boolean => {
    if (!currentFrage) return false;
    if (currentFrage.typ === "A" || currentFrage.typ === "M") {
      return chosenOption === currentFrage.korrekte_option;
    }
    if (currentFrage.typ === "K") {
      return typKCombChosen === currentFrage.korrekte_option;
    }
    return false;
  }, [currentFrage, chosenOption, typKCombChosen]);

  // ── Record + advance after FSRS rating ──────────────────────
  const submitFSRSRating = useCallback(
    async (rating: FSRSRating) => {
      if (!currentFrage || !revealed || confidence === null) return;
      if (recordedRef.current) return;
      recordedRef.current = true;

      const correct = isAnswerCorrect();

      if (source === "supabase") {
        recordAttempt({
          question_id: currentFrage.id,
          user_id,
          correct,
          confidence,
          fsrs_rating: rating,
          prev_fsrs: currentFrage.fsrs ?? null,
        }).catch(console.error);
      }

      const answer: SessionAnswer = {
        frage: currentFrage,
        correct,
        confidence,
        fsrs_rating: rating,
        chosenOption: chosenOption ?? undefined,
        typKPhase1: typKDecisions.map((d) => !!d),
      };
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);

      if (idx + 1 >= fragen.length) {
        setSessionDone(true);
      } else {
        setIdx((i) => i + 1);
        setConfidence(null);
        resetQuestionState();
        recordedRef.current = false;
      }
    },
    [
      currentFrage,
      revealed,
      confidence,
      chosenOption,
      typKDecisions,
      answers,
      idx,
      fragen.length,
      user_id,
      source,
      isAnswerCorrect,
      resetQuestionState,
    ]
  );

  const restart = useCallback(() => {
    setIdx(0);
    setConfidence(null);
    setAnswers([]);
    setSessionDone(false);
    setTimeRemainingSeconds(timeLimitMinutes != null ? timeLimitMinutes * 60 : null);
    startTimeRef.current = Date.now();
    resetQuestionState();
    recordedRef.current = false;
    if (subjectId) {
      setFragen(getBMSFragenBySubject(subjectId, count));
      return;
    }
    if (uk_ids.length) {
      setLoading(true);
      if (source === "content") {
        const generated = generateContentQuestions(uk_ids, count);
        setFragen(filterValidBMSFragen(generated.map(toBMSFrage)));
        setLoading(false);
      } else if (source === "pool") {
        setFragen(getPoolBMSFragen(uk_ids, count));
        setLoading(false);
      } else {
        getNextQuestions(uk_ids, user_id, count, getAllPoolBMSFragenForUKs)
          .then((raw) => {
            setFragen(filterValidBMSFragen(raw));
            setLoading(false);
          })
          .catch(() => setLoading(false));
      }
    }
  }, [uk_ids, user_id, count, source, subjectId, timeLimitMinutes, resetQuestionState]);

  return {
    // Data
    fragen,
    loading,
    error,
    // Session
    currentFrage,
    idx,
    progress,
    answers,
    sessionDone,
    // Confidence (before answer)
    confidence,
    setConfidence,
    // TYP A
    revealed,
    chosenOption,
    chooseOption,
    // TYP K
    typKPhase,
    typKDecisions,
    typKCombChosen,
    judgeAussage,
    confirmTypKPhase1,
    chooseTypKCombination,
    // Actions
    submitFSRSRating,
    restart,
    mode,
    isAnswerCorrect,
    timeLimitSeconds: timeLimitMinutes != null ? timeLimitMinutes * 60 : null,
    timeRemainingSeconds,
  };
}

// ── MRS widget hook ─────────────────────────────────────────

export function useMRS(user_id: string | null) {
  const [mrs, setMRS] = useState<MRSData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user_id) return;
    const t = setTimeout(() => setLoading(true), 0);
    fetchMRSData(user_id)
      .then((d) => {
        setMRS(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => clearTimeout(t);
  }, [user_id]);

  return { mrs, loading };
}

// ── Error patterns hook ─────────────────────────────────────

export function useErrorPatterns(user_id: string | null, uk_ids: string[]) {
  const [patterns, setPatterns] = useState<Record<string, ErrorPattern>>({});

  useEffect(() => {
    if (!user_id || !uk_ids.length) return;
    fetchErrorPatterns(user_id, uk_ids).then(setPatterns);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- stable key uk_ids.join(",")
  }, [user_id, uk_ids.join(",")]);

  return patterns;
}
