import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Dna,
  Atom,
  Zap,
  Calculator,
  BookOpen,
  Play,
  CheckCircle2,
  Clock,
  ChevronRight,
  ArrowLeft,
  AlertTriangle,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { SUBJECT_COLORS, getSubjectColors } from '@/data/bmsKapitel/colors';
import { FachRoadmap } from '@/components/chapter/FachRoadmap';
import BMSKapitelView from "./BMSKapitelView";
import { printChapterOverview, listAllChapters } from "@/utils/listChapters";
import { loadBMSChaptersSWR } from "@/lib/bmsChaptersLoader";
import { subjectFromSlug, chapterIdFromParams, pathForSubject, pathForChapter } from "@/lib/bmsRoutes";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { migrateBMSChaptersToSupabase, checkMigrationStatus } from "@/scripts/migrateBMS";
import { ChapterListSkeleton } from "@/components/chapter/ChapterListSkeleton";
import { MRSWidget } from "@/components/bms/MRSWidget";
import { useMRS } from "@/hooks/useFragenTrainer";

// Safe imports with fallbacks - prevents "Failed to fetch dynamically imported module" errors
// Fixed: Use proper ES6 imports with error handling
import { getKapitelBySubject as _getKapitelBySubject, alleKapitel as _alleKapitel } from "@/data/bmsKapitel";
import { getStichworteByKapitel } from "@/data/stichwortliste";
import { useStore as _useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";

// Safe wrappers that never throw
const getKapitelBySubject = (subject: string): Kapitel[] => {
  try {
    return _getKapitelBySubject ? _getKapitelBySubject(subject) : [];
  } catch (error) {
    console.error('❌ Error in getKapitelBySubject:', error);
    return [];
  }
};

const alleKapitel: Kapitel[] = (() => {
  try {
    return Array.isArray(_alleKapitel) ? _alleKapitel : [];
  } catch (error) {
    console.error('❌ Error accessing alleKapitel:', error);
    return [];
  }
})();

// Safe store access helper - always returns same structure (prevents hook order errors)
function useSafeStore() {
  try {
    // Always call hook unconditionally (React rule - hooks must be called in same order)
    return _useStore ? _useStore() : { completedChapters: [] };
  } catch (error) {
    console.error('❌ Error accessing store:', error);
    // Return fallback with same structure
    return { completedChapters: [] };
  }
}

const subjects = [
  {
    id: "biologie" as const,
    label: "Biologie",
    icon: Dna,
    colors: SUBJECT_COLORS.biologie,
    description: "Lebewesen, Zellen, Genetik, Evolution"
  },
  {
    id: "chemie" as const,
    label: "Chemie",
    icon: Atom,
    colors: SUBJECT_COLORS.chemie,
    description: "Periodensystem, Bindungen, Reaktionen"
  },
  {
    id: "physik" as const,
    label: "Physik",
    icon: Zap,
    colors: SUBJECT_COLORS.physik,
    description: "Mechanik, Elektrizität, Wellen, Optik"
  },
  {
    id: "mathematik" as const,
    label: "Mathematik",
    icon: Calculator,
    colors: SUBJECT_COLORS.mathematik,
    description: "Algebra, Analysis, Geometrie, Trigonometrie"
  },
] as const;

export default function BMS() {
  usePageTitle("BMS – Biomedizinische Grundlagen");
  const navigate = useNavigate();
  const { fach: fachParam, kapitel: kapitelParam } = useParams<{ fach?: string; kapitel?: string }>();
  const [searchParams] = useSearchParams();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [activeKapitel, setActiveKapitel] = useState<Kapitel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [supabaseChapters, setSupabaseChapters] = useState<Kapitel[]>([]);
  const [isRevalidating, setIsRevalidating] = useState(false);
  
  // Safe store access with fallback
  const store = useSafeStore();
  const completedChapters = (store?.completedChapters && Array.isArray(store.completedChapters)) 
    ? store.completedChapters 
    : [];
  const stichwortStats = useAdaptiveStore((s) => s.profile.stichwortStats);
  const setLastPath = useAdaptiveStore((s) => s.setLastPath);
  const { setBreadcrumbs } = useBreadcrumb();
  const userId = localStorage.getItem('medmaster-local-uid') ?? null;
  const { mrs, loading: mrsLoading } = useMRS(userId);

  useEffect(() => {
    if (activeKapitel) return;
    if (selectedSubject) {
      setLastPath(pathForSubject(selectedSubject));
      const subjectData = subjects.find((s) => s.id === selectedSubject);
      setBreadcrumbs([
        { label: "Dashboard", href: "/" },
        { label: "BMS", href: "/bms" },
        { label: subjectData?.label ?? selectedSubject, href: pathForSubject(selectedSubject) },
      ]);
    } else {
      setLastPath("/bms");
      setBreadcrumbs([{ label: "Dashboard", href: "/" }, { label: "BMS" }]);
    }
  }, [activeKapitel, selectedSubject, setBreadcrumbs, setLastPath]);

  // Initialize and listen for localStorage changes
  useEffect(() => {
    setIsLoading(false); // Mark as loaded after mount

    // Make chapter listing and optimization functions available in console for debugging
    // Usage: 
    //   window.showChapters() - zeigt Übersicht
    //   window.listChapters() - gibt Daten zurück
    //   window.optimizeChapters() - optimiert alle Kapitel
    //   window.restoreChapters() - stellt Backup wieder her
    (window as any).showChapters = printChapterOverview;
    (window as any).listChapters = listAllChapters;
    // Migration Funktion
    (window as any).migrateBMSChapters = async () => {
      if (import.meta.env.DEV) console.log('🚀 Starte Migration von localStorage zu Supabase...');
      try {
        const result = await migrateBMSChaptersToSupabase();
        if (result.success) {
          if (import.meta.env.DEV) console.log(`✅ Migration erfolgreich! ${result.chaptersMigrated} Kapitel, ${result.subchaptersMigrated} Unterkapitel migriert.`);
          if (result.errors.length > 0) {
            console.warn('⚠️ Einige Fehler:', result.errors);
          }
          if (import.meta.env.DEV) console.log('🔄 Seite neu laden, um aus Supabase zu laden...');
          setTimeout(() => window.location.reload(), 1000);
        } else {
          console.error('❌ Migration fehlgeschlagen:', result.errors);
        }
        return result;
      } catch (error) {
        console.error('❌ Fehler bei Migration:', error);
        throw error;
      }
    };
    // Migration Status prüfen
    (window as any).checkMigrationStatus = async () => {
      const status = await checkMigrationStatus();
      if (import.meta.env.DEV) console.log('📊 Migration Status:', status);
      return status;
    };
    
    // Auto-show chapters overview on load (can be commented out)
    // printChapterOverview();
  }, []);

  // Stale-While-Revalidate: zuerst Cache (sofort), dann Supabase
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    loadBMSChaptersSWR(
      (chapters, source) => {
        setSupabaseChapters(chapters);
        setIsLoading(false);
        if (source === 'cache') {
          if (import.meta.env.DEV) console.log('📦 Showing cached chapters (revalidating in background)');
        } else {
          if (import.meta.env.DEV) console.log('✅ Loaded', chapters.length, 'chapters from Supabase');
        }
      },
      (err) => {
        setError(err);
        setIsLoading(false);
      },
      (revalidating) => {
        setIsRevalidating(revalidating);
      }
    );
  }, []);

  // URL-Sync: Lese fach/kapitel aus URL und setze State (sobald Kapitel geladen)
  useEffect(() => {
    if (supabaseChapters.length === 0) return;

    const subjectId = subjectFromSlug(fachParam);
    const allChapterIds = supabaseChapters.map((c) => c.id);
    const chapterId = chapterIdFromParams(fachParam, kapitelParam, allChapterIds);

    if (subjectId) {
      setSelectedSubject(subjectId);
      // Note: activeKapitel will be updated by the next useEffect from chaptersForSelectedSubject
    } else if (fachParam === undefined && kapitelParam === undefined) {
      setSelectedSubject(null);
      setActiveKapitel(null);
    }
  }, [fachParam, kapitelParam, supabaseChapters]);

  // Compute merged chapters for selected subject (only Supabase)
  const chaptersForSelectedSubject = useMemo(() => {
    if (!selectedSubject) return [];
    try {
      const staticChapters = (getKapitelBySubject && getKapitelBySubject(selectedSubject)) || [];
      const sourceChapters = supabaseChapters.filter((k) => k?.subject === selectedSubject);

      // Standard merge: Supabase has precedence
      const merged = [...staticChapters];
      for (const dynamicChapter of sourceChapters) {
        if (!dynamicChapter?.id) continue;
        const index = merged.findIndex((c) => c?.id === dynamicChapter.id);
        if (index >= 0) {
          merged[index] = { ...merged[index], ...dynamicChapter };
        } else {
          merged.push(dynamicChapter);
        }
      }

      // POST-PROCESSING: BMS learning path chapters get their static content back
      const staticById = new Map(staticChapters.map(c => [c.id, c]));
      return merged.map(chapter => {
        const staticChap = staticById.get(chapter.id);
        if (staticChap?.sequence !== undefined) {
          // BMS sequenced chapter: static content takes precedence
          return {
            ...chapter,
            title: staticChap.title,
            unterkapitel: staticChap.unterkapitel?.length
              ? staticChap.unterkapitel
              : chapter.unterkapitel,
            sequence: staticChap.sequence,
            sequenceTitle: staticChap.sequenceTitle,
            linkedChapters: staticChap.linkedChapters ?? [],
          };
        }
        return chapter; // Normal chapter: keep Supabase content
      });
    } catch (error) {
      console.error('❌ Error computing chapters for subject:', error);
      return [];
    }
  }, [selectedSubject, supabaseChapters]);

  // Sort chapters by sequence number (Phase 4: STRUCT-02)
  const sortedChapters = useMemo(() => {
    if (!Array.isArray(chaptersForSelectedSubject)) return [];
    return [...chaptersForSelectedSubject].sort((a, b) => {
      const aSeq = a.sequence ?? 999;
      const bSeq = b.sequence ?? 999;
      return aSeq - bSeq;
    });
  }, [chaptersForSelectedSubject]);

  // Filter for roadmap: only chapters with sequence metadata (BMS learning path)
  const roadmapChapters = useMemo(() => {
    return sortedChapters.filter(c => c.sequence !== undefined);
  }, [sortedChapters]);

  // Compute merged chapters for all subjects (only Supabase)
  const safeAlleKapitel = useMemo(() => {
    try {
      const staticChapters = Array.isArray(alleKapitel) ? alleKapitel : [];

      // Standard merge: Supabase has precedence
      const merged = [...staticChapters];
      for (const supabaseChapter of supabaseChapters) {
        if (!supabaseChapter?.id) continue;
        const index = merged.findIndex((c) => c?.id === supabaseChapter.id);
        if (index >= 0) {
          merged[index] = { ...merged[index], ...supabaseChapter };
        } else {
          merged.push(supabaseChapter);
        }
      }

      // POST-PROCESSING: BMS learning path chapters get their static content back
      const staticById = new Map(staticChapters.map(c => [c.id, c]));
      return merged.map(chapter => {
        const staticChap = staticById.get(chapter.id);
        if (staticChap?.sequence !== undefined) {
          // BMS sequenced chapter: static content takes precedence
          return {
            ...chapter,
            title: staticChap.title,
            unterkapitel: staticChap.unterkapitel?.length
              ? staticChap.unterkapitel
              : chapter.unterkapitel,
            sequence: staticChap.sequence,
            sequenceTitle: staticChap.sequenceTitle,
            linkedChapters: staticChap.linkedChapters ?? [],
          };
        }
        return chapter; // Normal chapter: keep Supabase content
      });
    } catch (error) {
      console.error('❌ Error merging chapters:', error);
      return [];
    }
  }, [supabaseChapters]);

  // Compute totals for main view - MUST be called unconditionally before any early returns
  const totalUK = useMemo(() => {
    if (!safeAlleKapitel || !Array.isArray(safeAlleKapitel)) return 0;
    return safeAlleKapitel.reduce((sum, k) => {
      if (!k || !k.unterkapitel || !Array.isArray(k.unterkapitel)) return sum;
      return sum + k.unterkapitel.length;
    }, 0);
  }, [safeAlleKapitel]);
  
  const completedUK = useMemo(() => {
    if (!safeAlleKapitel || !Array.isArray(safeAlleKapitel)) return 0;
    return safeAlleKapitel.reduce((sum, k) => {
      if (!k || !k.unterkapitel || !Array.isArray(k.unterkapitel)) return sum;
      return sum + (k.unterkapitel.filter((u) => u && u.id && completedChapters.includes(u.id)).length || 0);
    }, 0);
  }, [safeAlleKapitel, completedChapters]);

  // Update activeKapitel from post-processed chapters (after BMS override)
  // MUST come AFTER chaptersForSelectedSubject useMemo to avoid Temporal Dead Zone
  useEffect(() => {
    if (!selectedSubject || chaptersForSelectedSubject.length === 0) return;

    const allChapterIds = chaptersForSelectedSubject.map((c) => c.id);
    const chapterId = chapterIdFromParams(fachParam, kapitelParam, allChapterIds);

    if (chapterId) {
      const chapter = chaptersForSelectedSubject.find((c) => c.id === chapterId);
      if (chapter) {
        setActiveKapitel(chapter);
      }
    }
  }, [fachParam, kapitelParam, selectedSubject, chaptersForSelectedSubject]);

  // Error state: nur anzeigen wenn wirklich keine Daten (kein Cache, Supabase leer/Fehler)
  if (error && supabaseChapters.length === 0) {
    return (
      <div className="max-w-6xl mx-auto space-y-6 p-6">
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
              Fehler beim Laden
            </h3>
            <p className="text-sm text-red-800 dark:text-red-400 mb-4">
              {error}
            </p>
            <Button onClick={() => window.location.reload()}>
              Seite neu laden
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Loading state with skeleton (nur wenn noch keine Daten aus Cache)
  if (isLoading && supabaseChapters.length === 0) {
    return (
      <div className="max-w-6xl mx-auto space-y-6 p-6">
        <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "BMS" }]} />
        <div>
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
          <div className="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
        {selectedSubject ? (
          <ChapterListSkeleton count={6} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 space-y-4">
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
              </div>
            ))}
          </div>
        )}
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
              <Button onClick={() => setActiveKapitel(null)}>
                Zurück zur Übersicht
              </Button>
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
          navigate(selectedSubject ? pathForSubject(selectedSubject) : '/bms');
        }}
        chaptersInSubject={chaptersInSubject}
        currentChapterIndex={currentChapterIndex >= 0 ? currentChapterIndex : 0}
        onGoToChapter={
          selectedSubject
            ? (chapterId, ukIndex) => navigate(pathForChapter(selectedSubject, chapterId) + '?uk=' + ukIndex)
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
              <Button onClick={() => setSelectedSubject(null)}>
                Zurück zur Übersicht
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    // Use only sequenced (official BMS) chapters to avoid Supabase ghost entries
    const kapitel = Array.isArray(roadmapChapters) ? roadmapChapters : [];

    const subjectUK = kapitel.reduce((sum, k) => {
      if (!k || !k.unterkapitel || !Array.isArray(k.unterkapitel)) return sum;
      return sum + k.unterkapitel.length;
    }, 0);

    const subjectCompletedUK = kapitel.reduce((sum, k) => {
      if (!k || !k.unterkapitel || !Array.isArray(k.unterkapitel)) return sum;
      return sum + (k.unterkapitel.filter((u) => u && u.id && completedChapters.includes(u.id)).length || 0);
    }, 0);

    return (
      <div className="max-w-5xl mx-auto space-y-6 p-6">
        <BreadcrumbNav items={[
          { label: "Dashboard", href: "/" }, 
          { label: "BMS", href: "/bms" },
          { label: subjectData.label }
        ]} />

        <div className="flex items-center gap-4 flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedSubject(null);
              navigate('/bms');
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Fächern
          </Button>
          <Button
            size="sm"
            onClick={() => navigate(`/bms/quiz/${selectedSubject}`)}
            className="gap-2"
          >
            <Play className="w-4 h-4" />
            Quiz starten
          </Button>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-[var(--foreground)] flex items-center gap-3">
            <subjectData.icon className="w-6 h-6 text-[var(--color-primary-500)]" />
            {subjectData.label}
          </h1>
          <p className="text-sm text-[var(--muted)] mt-1">
            {kapitel.length} Kapitel · {subjectUK} Unterkapitel
            {subjectUK > 0 && (
              <span className="text-[var(--color-primary-500)] font-medium ml-2">
                {subjectCompletedUK}/{subjectUK} abgeschlossen
              </span>
            )}
          </p>
        </div>

        {subjectUK > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-[var(--muted)]">
              <span>Fortschritt</span>
              <span>{subjectCompletedUK}/{subjectUK} Unterkapitel</span>
            </div>
            <div className="w-full bg-[var(--border)] rounded-full h-1.5">
              <div
                className="bg-[var(--color-primary-500)] h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${(subjectCompletedUK / subjectUK) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Visual Learning Roadmap - Phase 4: STRUCT-03 */}
        {roadmapChapters.length > 0 && (
          <FachRoadmap
            chapters={roadmapChapters}
            currentChapterId={undefined}
            onSelectChapter={(chapterId) => {
              const chapter = kapitel.find(c => c.id === chapterId);
              if (chapter) {
                setActiveKapitel(chapter);
                navigate(pathForChapter(selectedSubject, chapterId));
              }
            }}
          />
        )}

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-midnight dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary-500" />
            Kapitel
          </h2>
          
          {kapitel.length === 0 ? (
            <Card className={`border-l-4 ${subjectData.colors.border}`}>
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`w-16 h-16 rounded-full ${subjectData.colors.bg} ${subjectData.colors.bgDark} ${subjectData.colors.text} ${subjectData.colors.textDark} flex items-center justify-center`}>
                    <subjectData.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-midnight dark:text-slate-100 mb-2">
                  Noch keine Kapitel vorhanden
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Es gibt noch keine {subjectData.label}-Kapitel. Du kannst neue Kapitel im Editor erstellen.
                </p>
                <Button onClick={() => navigate('/admin/kapitel-editor')} className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  Zum Kapitel-Editor
                </Button>
              </CardContent>
            </Card>
          ) : (
            kapitel.map((kap) => {
              if (!kap || !kap.id || typeof kap.id !== 'string' || typeof kap.title !== 'string') {
                return null;
              }
              const ukTotal = (kap.unterkapitel && Array.isArray(kap.unterkapitel)) ? kap.unterkapitel.length : 0;
              const ukDone = (kap.unterkapitel && Array.isArray(kap.unterkapitel))
                ? kap.unterkapitel.filter((u) => u && u.id && completedChapters.includes(u.id)).length
                : 0;
              const isCompleted = completedChapters.includes(kap.id) || (ukTotal > 0 && ukDone === ukTotal);
              const kapMatch = kap.id.match(/kap(\d+)/i);
              const kapitelNr = kapMatch ? parseInt(kapMatch[1], 10) : 0;
              const stichworte = getStichworteByKapitel(kap.subject, kapitelNr);
              const topicTotal = stichworte.length;
              const topicLearned = topicTotal > 0
                ? stichworte.filter((s) => (stichwortStats[s.id]?.streak ?? 0) > 0).length
                : 0;
              const hasMastery = topicTotal > 0 && stichworte.some((s) => (stichwortStats[s.id]?.streak ?? 0) >= 3);
              const progressPct = topicTotal > 0 ? (topicLearned / topicTotal) * 100 : (ukTotal > 0 ? (ukDone / ukTotal) * 100 : 0);

              return (
                <Card
                  key={kap.id}
                  className={`hover:shadow-md transition-all cursor-pointer border-l-4 ${subjectData.colors.border} ${hasMastery ? "ring-1 ring-amber-400/60 dark:ring-amber-500/50 shadow-amber-500/10" : ""}`}
                  onClick={() => {
                    setActiveKapitel(kap);
                    navigate(pathForChapter(kap.subject, kap.id));
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl shrink-0">{kap.icon || '📚'}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-medium text-midnight dark:text-slate-100">{kap.title || 'Untitled Chapter'}</h3>
                          {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                          {hasMastery && (
                            <span className="inline-flex items-center text-amber-600 dark:text-amber-400" title="Mastery (Streak ≥ 3)">
                              <Award className="w-4 h-4 shrink-0" />
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400">
                          <span>{ukTotal} Unterkapitel</span>
                          {kap.estimatedTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {kap.estimatedTime}
                            </span>
                          )}
                          {(topicTotal > 0 || ukTotal > 0) && (
                            <span className="text-primary-500 font-medium">
                              {topicTotal > 0 ? `${topicLearned}/${topicTotal} gelernt` : `${ukDone}/${ukTotal}`}
                            </span>
                          )}
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-2">
                          <div
                            className="bg-primary-500 h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(100, progressPct)}%` }}
                          />
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    );
  }

  // Main view: 4 subject cards
  // Note: totalUK and completedUK are already computed above (before early returns)
  return (
    <div className="max-w-4xl mx-auto space-y-8 px-6 py-8">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "BMS" }]} />

      <BlurFade delay={0} inView>
        <div>
          <h1 className="text-2xl font-semibold text-[var(--foreground)]">BMS</h1>
          <p className="text-sm text-[var(--muted)] mt-1">
            {safeAlleKapitel.length} Kapitel · {totalUK} Unterkapitel
            {totalUK > 0 && (
              <span className="text-[var(--color-primary-500)] font-medium ml-2">
                {completedUK}/{totalUK} abgeschlossen
              </span>
            )}
          </p>
        </div>
      </BlurFade>

      {/* MedAT Readiness Score */}
      <BlurFade delay={0.05} inView>
        <MRSWidget mrs={mrs} loading={mrsLoading} />
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject, idx) => {
          let sKapitel: Kapitel[] = [];
          try {
            const staticChapters = (getKapitelBySubject && getKapitelBySubject(subject.id)) || [];
            const dynamicChapters = supabaseChapters.filter((k) => k?.subject === subject.id);

            // Standard merge: Supabase has precedence
            sKapitel = [...staticChapters];
            for (const dynamicChapter of dynamicChapters) {
              if (!dynamicChapter?.id) continue;
              const index = sKapitel.findIndex((c) => c?.id === dynamicChapter.id);
              if (index >= 0) {
                sKapitel[index] = { ...sKapitel[index], ...dynamicChapter };
              } else {
                sKapitel.push(dynamicChapter);
              }
            }

            // POST-PROCESSING: BMS learning path chapters get their static content back
            const staticById = new Map(staticChapters.map(c => [c.id, c]));
            sKapitel = sKapitel.map(chapter => {
              const staticChap = staticById.get(chapter.id);
              if (staticChap?.sequence !== undefined) {
                return {
                  ...chapter,
                  title: staticChap.title,
                  unterkapitel: staticChap.unterkapitel?.length
                    ? staticChap.unterkapitel
                    : chapter.unterkapitel,
                  sequence: staticChap.sequence,
                  sequenceTitle: staticChap.sequenceTitle,
                  linkedChapters: staticChap.linkedChapters ?? [],
                };
              }
              return chapter;
            });
          } catch (error) {
            console.error(`❌ Error loading chapters for ${subject.id}:`, error);
            sKapitel = [];
          }

          const sTotal = sKapitel.reduce((sum, k) => {
            if (!k || !k.unterkapitel || !Array.isArray(k.unterkapitel)) return sum;
            return sum + k.unterkapitel.length;
          }, 0);

          const sDone = sKapitel.reduce((sum, k) => {
            if (!k || !k.unterkapitel || !Array.isArray(k.unterkapitel)) return sum;
            return sum + (k.unterkapitel.filter((u) => u && u.id && completedChapters.includes(u.id)).length || 0);
          }, 0);

          const progressPct = sTotal > 0 ? (sDone / sTotal) * 100 : 0;

          // Subject accent color via CSS variable
          const accentVars: Record<string, string> = {
            biologie:   "var(--accent-bio)",
            chemie:     "var(--accent-chem)",
            physik:     "var(--accent-phys)",
            mathematik: "var(--accent-math)",
          };
          const accentColor = accentVars[subject.id] ?? "var(--color-primary-500)";

          return (
            <BlurFade key={subject.id} delay={0.1 + idx * 0.05} inView>
              <div
                className="group relative rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 cursor-pointer overflow-hidden transition-all duration-200 hover:border-[var(--foreground)]/20 hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]"
                style={{ borderLeftWidth: "3px", borderLeftColor: accentColor }}
                onClick={() => {
                  setSelectedSubject(subject.id);
                  navigate(pathForSubject(subject.id));
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                  >
                    <subject.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <h2 className="text-base font-semibold text-[var(--foreground)]">
                        {subject.label}
                      </h2>
                      <ChevronRight className="w-4 h-4 text-[var(--muted)] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>

                    <p className="text-xs text-[var(--muted)] mb-3 leading-relaxed">
                      {subject.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-2.5">
                      <span>{sKapitel.length} Kapitel</span>
                      {sTotal > 0 && (
                        <>
                          <span>·</span>
                          <span style={{ color: accentColor }} className="font-medium">
                            {sDone}/{sTotal} UK
                          </span>
                        </>
                      )}
                    </div>

                    {/* Progress bar */}
                    {sTotal > 0 && (
                      <div className="w-full bg-[var(--border)] rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full transition-all duration-500"
                          style={{
                            width: `${progressPct}%`,
                            backgroundColor: accentColor,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>

      {safeAlleKapitel.length === 0 && (
        <BlurFade delay={0.2} inView>
          <Card className="border-[var(--border)] bg-[var(--card)]">
            <CardContent className="p-6 text-center">
              <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
                Noch keine Kapitel vorhanden
              </h3>
              <p className="text-sm text-[var(--muted)] mb-4">
                Erstelle deine ersten Kapitel im Editor.
              </p>
              <Button onClick={() => navigate('/admin/kapitel-editor')} className="gap-2">
                <BookOpen className="w-4 h-4" />
                Zum Kapitel-Editor
              </Button>
            </CardContent>
          </Card>
        </BlurFade>
      )}
    </div>
  );
}
