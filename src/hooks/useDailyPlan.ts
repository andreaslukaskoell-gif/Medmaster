/**
 * useDailyPlan — tier-aware daily plan builder.
 * Wraps the existing generateAdaptivePlan + buildConcreteDailyPlan with
 * minimal/empfohlen/intensiv tiers and daily completion tracking.
 */
import { useMemo, useState } from "react";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { generateAdaptivePlan, type AdaptivePlanResult } from "@/lib/adaptivePlan";
import { buildConcreteDailyPlan, type ConcreteDailyPlan } from "@/lib/concreteDailyPlan";
import { daysUntilMedAT } from "@/lib/utils";

export type PlanTier = "minimal" | "empfohlen" | "intensiv";

const TIER_FACTORS: Record<PlanTier, number> = {
  minimal: 0.5,
  empfohlen: 1.0,
  intensiv: 1.5,
};

const TIER_LABELS: Record<PlanTier, { label: string; desc: string; minutes: string }> = {
  minimal: { label: "Minimal", desc: "Grundlagen sichern", minutes: "~30 Min" },
  empfohlen: { label: "Empfohlen", desc: "Ausgewogene Vorbereitung", minutes: "~60 Min" },
  intensiv: { label: "Intensiv", desc: "Maximale Prüfungsvorbereitung", minutes: "~90 Min" },
};

export type DailyPlanResult = {
  plan: ConcreteDailyPlan;
  adaptivePlan: AdaptivePlanResult;
  tier: PlanTier;
  tierLabel: (typeof TIER_LABELS)[PlanTier];
  setTier: (tier: PlanTier) => void;
  allTiers: typeof TIER_LABELS;
  completedItems: Set<string>;
  toggleCompleted: (itemId: string) => void;
  completionProgress: { done: number; total: number; percentage: number };
};

/** Storage key for daily completion checkmarks */
const COMPLETION_KEY = "medmaster-daily-plan-completed";

function loadCompletedToday(): Set<string> {
  try {
    const raw = localStorage.getItem(COMPLETION_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    const today = new Date().toISOString().split("T")[0];
    if (parsed.date !== today) return new Set(); // Reset on new day
    return new Set(parsed.items ?? []);
  } catch {
    return new Set();
  }
}

function saveCompletedToday(items: Set<string>) {
  const today = new Date().toISOString().split("T")[0];
  localStorage.setItem(COMPLETION_KEY, JSON.stringify({ date: today, items: [...items] }));
}

export function useDailyPlan(): DailyPlanResult {
  const [tier, setTier] = useState<PlanTier>("empfohlen");
  const [completedItems, setCompletedItems] = useState<Set<string>>(loadCompletedToday);

  // Read from stores
  const lernplanConfig = useStore((s) => s.lernplanConfig);
  const completedChapters = useStore((s) => s.completedChapters ?? []);
  const getDueChapterIds = useStore((s) => s.getDueChapterIds);
  const lastViewedKapitelId = useAdaptiveStore((s) => s.lastViewedKapitelId);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);

  // Stable selectors: extract functions, call in useMemo to avoid infinite loops
  const getMedATReadiness = useAdaptiveStore((s) => s.getMedATReadiness);
  const getFachReadiness = useAdaptiveStore((s) => s.getFachReadiness);
  const getWeakestTopics = useAdaptiveStore((s) => s.getWeakestTopics);
  const phase = useAdaptiveStore((s) => s.profile?.learningPhase ?? "einstieg");

  // Generate adaptive plan with tier factor
  const adaptivePlan = useMemo(() => {
    const baseHours = lernplanConfig?.hoursPerWeek ?? 10;
    const hoursPerWeek = Math.max(3, Math.min(40, baseHours * TIER_FACTORS[tier]));
    const weeksLeft = Math.max(1, Math.ceil(daysUntilMedAT() / 7));

    const readiness = getMedATReadiness();
    const faecher = ["biologie", "chemie", "physik", "mathematik"];
    const fachReadiness: Record<string, number> = {};
    for (const f of faecher) fachReadiness[f] = getFachReadiness(f);
    const weakTopics = getWeakestTopics(10);

    return generateAdaptivePlan({
      hoursPerWeek,
      weeksLeft,
      readiness,
      fachReadiness,
      weakTopics,
      phase,
    });
  }, [tier, lernplanConfig, getMedATReadiness, getFachReadiness, getWeakestTopics, phase]);

  // Build concrete daily plan
  const plan = useMemo(() => {
    const dueIds = getDueChapterIds?.() ?? [];
    return buildConcreteDailyPlan(adaptivePlan, {
      dueChapterIds: dueIds,
      lastViewedChapterId: lastViewedKapitelId,
      lastViewedUnterkapitelId: lastViewedUnterkapitelId,
      completedChapterIds: completedChapters,
    });
  }, [
    adaptivePlan,
    getDueChapterIds,
    lastViewedKapitelId,
    lastViewedUnterkapitelId,
    completedChapters,
  ]);

  // Count total plan items
  const totalItems = useMemo(() => {
    let count = 0;
    count += plan.bmsRead.length;
    count += plan.bmsReview.length;
    count += plan.bmsQuestions.length;
    count += plan.kffTasks.length;
    if (plan.tvTexts > 0) count += 1;
    count += plan.sekTasks.length;
    return Math.max(1, count);
  }, [plan]);

  const toggleCompleted = (itemId: string) => {
    setCompletedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      saveCompletedToday(next);
      return next;
    });
  };

  const done = completedItems.size;
  const percentage = Math.round((done / totalItems) * 100);

  return {
    plan,
    adaptivePlan,
    tier,
    tierLabel: TIER_LABELS[tier],
    setTier,
    allTiers: TIER_LABELS,
    completedItems,
    toggleCompleted,
    completionProgress: { done, total: totalItems, percentage: Math.min(100, percentage) },
  };
}
