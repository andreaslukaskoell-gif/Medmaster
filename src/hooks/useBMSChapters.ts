/**
 * Custom hook that encapsulates BMS chapter loading (SWR) and
 * all derived chapter computations (merge, filter, sort, count).
 */
import { useState, useEffect, useMemo } from "react";
import type { Kapitel } from "@/data/bmsKapitel/types";
import {
  getKapitelBySubject as _getKapitelBySubject,
  alleKapitel as _alleKapitel,
} from "@/data/bmsKapitel";
import { loadBMSChaptersSWR } from "@/lib/bmsChaptersLoader";
import { mergeChaptersWithSupabase, filterBMSKapitel, countUK } from "@/lib/mergeChapters";

// Safe wrappers that never throw
const getKapitelBySubject = (subject: string): Kapitel[] => {
  try {
    return _getKapitelBySubject ? _getKapitelBySubject(subject) : [];
  } catch (error) {
    console.error("Error in getKapitelBySubject:", error);
    return [];
  }
};

const alleKapitel: Kapitel[] = (() => {
  try {
    return Array.isArray(_alleKapitel) ? _alleKapitel : [];
  } catch (error) {
    console.error("Error accessing alleKapitel:", error);
    return [];
  }
})();

export { getKapitelBySubject };

export function useBMSChapters(selectedSubject: string | null, completedChapters: string[]) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [supabaseChapters, setSupabaseChapters] = useState<Kapitel[]>([]);

  // SWR: cache first, then Supabase, with static fallback timeout
  useEffect(() => {
    let resolved = false;
    queueMicrotask(() => {
      setIsLoading(true);
      setError(null);
    });

    // Fallback: if nothing loads within 5s, use static chapter data
    const fallbackTimer = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        const staticFallback = Array.isArray(alleKapitel) ? alleKapitel : [];
        if (staticFallback.length > 0) {
          setSupabaseChapters(staticFallback);
          setIsLoading(false);
            console.warn(
              `[bms] Timeout — showing ${staticFallback.length} static chapters as fallback`
            );
        }
      }
    }, 5000);

    loadBMSChaptersSWR(
      (chapters, source) => {
        resolved = true;
        clearTimeout(fallbackTimer);
        setSupabaseChapters(chapters);
        setIsLoading(false);
      },
      (err) => {
        if (!resolved) {
          // If timed out already with static fallback, don't show error
          setError(err);
          setIsLoading(false);
        }
      },
      () => {}
    );

    return () => clearTimeout(fallbackTimer);
  }, []);

  // Merged chapters for selected subject
  const chaptersForSelectedSubject = useMemo(() => {
    if (!selectedSubject) return [];
    try {
      const staticChapters = getKapitelBySubject(selectedSubject) || [];
      const sourceChapters = supabaseChapters.filter((k) => k?.subject === selectedSubject);
      return mergeChaptersWithSupabase(staticChapters, sourceChapters);
    } catch (error) {
      console.error("Error computing chapters for subject:", error);
      return [];
    }
  }, [selectedSubject, supabaseChapters]);

  const sortedChapters = useMemo(() => {
    if (!Array.isArray(chaptersForSelectedSubject)) return [];
    return [...chaptersForSelectedSubject].sort(
      (a, b) => (a.sequence ?? 999) - (b.sequence ?? 999)
    );
  }, [chaptersForSelectedSubject]);

  const roadmapChapters = useMemo(
    () =>
      sortedChapters.filter(
        (c) => c.sequence !== undefined && c.unterkapitel && c.unterkapitel.length > 0
      ),
    [sortedChapters]
  );

  // All chapters merged (for global stats)
  const safeAlleKapitel = useMemo(() => {
    try {
      const staticChapters = Array.isArray(alleKapitel) ? alleKapitel : [];
      return mergeChaptersWithSupabase(staticChapters, supabaseChapters);
    } catch (error) {
      console.error("Error merging chapters:", error);
      return [];
    }
  }, [supabaseChapters]);

  const bmsKapitel = useMemo(() => filterBMSKapitel(safeAlleKapitel), [safeAlleKapitel]);

  const { total: totalUK, completed: completedUK } = useMemo(
    () => countUK(bmsKapitel, completedChapters),
    [bmsKapitel, completedChapters]
  );

  return {
    isLoading,
    error,
    supabaseChapters,
    chaptersForSelectedSubject,
    sortedChapters,
    roadmapChapters,
    safeAlleKapitel,
    bmsKapitel,
    totalUK,
    completedUK,
    getKapitelBySubject,
  };
}
