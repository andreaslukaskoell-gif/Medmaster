/**
 * BMS Overview: Fachauswahl, Kapitelliste, SWR-Loader, URL-Sync.
 */
/* eslint-disable @typescript-eslint/no-explicit-any -- dev-only window debug helpers */

import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import type { Kapitel } from "@/data/bmsKapitel/types";
import BMSKapitelView from "./BMSKapitelView";
import { printChapterOverview, listAllChapters } from "@/utils/listChapters";
import {
  subjectFromSlug,
  chapterIdFromParams,
  pathForSubject,
  pathForChapter,
} from "@/lib/bmsRoutes";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { useAuth } from "@/hooks/useAuth";
import { migrateBMSChaptersToSupabase, checkMigrationStatus } from "@/scripts/migrateBMS";
import { PageLoadingSkeleton, PageError } from "@/components/ui/page-states";
import { useMRS } from "@/hooks/useFragenTrainer";
import { subjects } from "@/data/bmsSubjects";
import { BMSSubjectSelector } from "@/components/bms/BMSSubjectSelector";
import { BMSSubjectView } from "@/components/bms/BMSSubjectView";
import { useBMSChapters } from "@/hooks/useBMSChapters";

import { useStore as _useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";

function useSafeStore() {
  try {
    return _useStore ? _useStore() : { completedChapters: [] };
  } catch (error) {
    console.error("Error accessing store:", error);
    return { completedChapters: [] };
  }
}

export default function BMS() {
  usePageTitle("BMS – Biomedizinische Grundlagen");
  const navigate = useNavigate();
  const { fach: fachParam, kapitel: kapitelParam } = useParams<{
    fach?: string;
    kapitel?: string;
  }>();
  const [searchParams] = useSearchParams();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [activeKapitel, setActiveKapitel] = useState<Kapitel | null>(null);

  // Store access
  const store = useSafeStore();
  const completedChapters = useMemo(
    () =>
      store?.completedChapters && Array.isArray(store.completedChapters)
        ? store.completedChapters
        : [],
    [store?.completedChapters]
  );
  const stichwortStats = useAdaptiveStore((s) => s.profile.stichwortStats);
  const setLastPath = useAdaptiveStore((s) => s.setLastPath);
  const { setBreadcrumbs } = useBreadcrumb();
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const { mrs, loading: mrsLoading, refetch: refetchMRS } = useMRS(userId);
  const profile = useAdaptiveStore((s) => s.profile);
  const getMedATReadiness = useAdaptiveStore((s) => s.getMedATReadiness);
  const mrsFallback = useMemo(() => {
    if (profile.totalQuestionsAnswered > 0) {
      return {
        readiness: getMedATReadiness(),
        totalQuestions: profile.totalQuestionsAnswered,
        totalCorrect: profile.totalCorrect,
      };
    }
    return null;
  }, [profile.totalQuestionsAnswered, profile.totalCorrect, getMedATReadiness]);

  // Chapter loading and computation via custom hook
  const {
    isLoading,
    error,
    supabaseChapters,
    chaptersForSelectedSubject,
    roadmapChapters,
    bmsKapitel,
    totalUK,
    completedUK,
    getKapitelBySubject,
  } = useBMSChapters(selectedSubject, completedChapters);

  // MRS refetch on window focus
  useEffect(() => {
    if (!userId) return;
    const onFocus = () => refetchMRS();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [userId, refetchMRS]);

  // Breadcrumb + lastPath sync
  useEffect(() => {
    if (activeKapitel) return;
    if (selectedSubject) {
      setLastPath(pathForSubject(selectedSubject));
      const subjectData = subjects.find((s) => s.id === selectedSubject);
      setBreadcrumbs([
        { label: "Dashboard", href: "/dashboard" },
        { label: "BMS", href: "/bms" },
        { label: subjectData?.label ?? selectedSubject, href: pathForSubject(selectedSubject) },
      ]);
    } else {
      setLastPath("/bms");
      setBreadcrumbs([{ label: "Dashboard", href: "/dashboard" }, { label: "BMS" }]);
    }
  }, [activeKapitel, selectedSubject, setBreadcrumbs, setLastPath]);

  // Dev-only console helpers
  useEffect(() => {
    (window as any).showChapters = printChapterOverview;
    (window as any).listChapters = listAllChapters;
    (window as any).migrateBMSChapters = async () => {
      if (import.meta.env.DEV) console.log("Starte Migration von localStorage zu Supabase...");
      try {
        const result = await migrateBMSChaptersToSupabase();
        if (result.success) {
          if (import.meta.env.DEV)
            console.log(
              `Migration erfolgreich! ${result.chaptersMigrated} Kapitel, ${result.subchaptersMigrated} Unterkapitel migriert.`
            );
          if (result.errors.length > 0) console.warn("Einige Fehler:", result.errors);
          setTimeout(() => window.location.reload(), 1000);
        } else {
          console.error("Migration fehlgeschlagen:", result.errors);
        }
        return result;
      } catch (error) {
        console.error("Fehler bei Migration:", error);
        throw error;
      }
    };
    (window as any).checkMigrationStatus = async () => {
      const status = await checkMigrationStatus();
      if (import.meta.env.DEV) console.log("Migration Status:", status);
      return status;
    };
  }, []);

  // URL sync: read fach/kapitel from URL
  useEffect(() => {
    if (supabaseChapters.length === 0) return;
    const subjectId = subjectFromSlug(fachParam);
    const t = setTimeout(() => {
      if (subjectId) {
        setSelectedSubject(subjectId);
      } else if (fachParam === undefined && kapitelParam === undefined) {
        setSelectedSubject(null);
        setActiveKapitel(null);
      }
    }, 0);
    return () => clearTimeout(t);
  }, [fachParam, kapitelParam, supabaseChapters]);

  // Resolve activeKapitel from URL after chapters are ready
  useEffect(() => {
    if (!selectedSubject || chaptersForSelectedSubject.length === 0) return;
    const allChapterIds = chaptersForSelectedSubject.map((c) => c.id);
    const chapterId = chapterIdFromParams(fachParam, kapitelParam, allChapterIds);
    if (chapterId) {
      const chapter = chaptersForSelectedSubject.find((c) => c.id === chapterId);
      if (chapter) {
        const t = setTimeout(() => setActiveKapitel(chapter), 0);
        return () => clearTimeout(t);
      }
    }
  }, [fachParam, kapitelParam, selectedSubject, chaptersForSelectedSubject]);

  // --- Render ---

  if (error && supabaseChapters.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <BreadcrumbNav items={[{ label: "Dashboard", href: "/dashboard" }, { label: "BMS" }]} />
        <PageError message={error} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  if (isLoading && supabaseChapters.length === 0) {
    return (
      <div className="max-w-6xl mx-auto space-y-6 p-6">
        <BreadcrumbNav items={[{ label: "Dashboard", href: "/dashboard" }, { label: "BMS" }]} />
        <PageLoadingSkeleton />
      </div>
    );
  }

  // Chapter detail view
  if (activeKapitel) {
    if (!activeKapitel.id || !activeKapitel.title) {
      return (
        <div className="max-w-5xl mx-auto space-y-6 p-6">
          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
                Ungültiges Kapitel
              </h3>
              <Button onClick={() => setActiveKapitel(null)}>Zurück zur Übersicht</Button>
            </CardContent>
          </Card>
        </div>
      );
    }
    const ukParam = searchParams.get("uk");
    const initialUkIndex = ukParam !== null ? parseInt(ukParam, 10) : undefined;
    const validUkIndex =
      initialUkIndex !== undefined &&
      Number.isFinite(initialUkIndex) &&
      activeKapitel.unterkapitel?.length != null &&
      initialUkIndex >= 0 &&
      initialUkIndex < activeKapitel.unterkapitel.length
        ? initialUkIndex
        : undefined;
    const chaptersInSubject = chaptersForSelectedSubject ?? [];
    const currentChapterIndex = chaptersInSubject.findIndex((c) => c?.id === activeKapitel.id);
    return (
      <BMSKapitelView
        kapitel={activeKapitel}
        initialUkIndex={validUkIndex}
        onBack={() => {
          setActiveKapitel(null);
          navigate(selectedSubject ? pathForSubject(selectedSubject) : "/bms");
        }}
        chaptersInSubject={chaptersInSubject}
        currentChapterIndex={currentChapterIndex >= 0 ? currentChapterIndex : 0}
        onGoToChapter={
          selectedSubject
            ? (chapterId, ukIndex) => {
                navigate(pathForChapter(selectedSubject, chapterId) + "?uk=" + ukIndex);
                window.scrollTo(0, 0);
                setTimeout(() => window.scrollTo(0, 0), 50);
              }
            : undefined
        }
      />
    );
  }

  // Subject detail view
  if (selectedSubject) {
    const subjectData = subjects.find((s) => s.id === selectedSubject);
    if (!subjectData) {
      return (
        <div className="max-w-5xl mx-auto space-y-6 p-6">
          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
                Ungültiges Fach
              </h3>
              <Button onClick={() => setSelectedSubject(null)}>Zurück zur Übersicht</Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <BMSSubjectView
        subjectData={subjectData}
        roadmapChapters={roadmapChapters}
        completedChapters={completedChapters}
        stichwortStats={stichwortStats}
        onBack={() => {
          setSelectedSubject(null);
          navigate("/bms");
        }}
        onSelectChapter={(chapter) => {
          setActiveKapitel(chapter);
          navigate(pathForChapter(chapter.subject, chapter.id));
        }}
        onStartQuiz={() => navigate(`/bms/quiz/${selectedSubject}`)}
      />
    );
  }

  // Main view: 4 subject cards
  return (
    <BMSSubjectSelector
      bmsKapitel={bmsKapitel}
      supabaseChapters={supabaseChapters}
      completedChapters={completedChapters}
      totalUK={totalUK}
      completedUK={completedUK}
      mrs={mrs}
      mrsLoading={mrsLoading}
      mrsFallback={mrsFallback}
      filterParam={searchParams.get("filter")}
      getKapitelBySubject={getKapitelBySubject}
      onSelectSubject={(subjectId) => {
        setSelectedSubject(subjectId);
        navigate(pathForSubject(subjectId));
      }}
      onNavigate={navigate}
    />
  );
}
