import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import type { Kapitel } from "@/data/bmsKapitel/types";
import BMSKapitelView from "./BMSKapitelView";
import { printChapterOverview, listAllChapters } from "@/utils/listChapters";
import { loadBMSChaptersSWR } from "@/lib/bmsChaptersLoader";
import { subjectFromSlug, chapterIdFromParams, pathForSubject, pathForChapter } from "@/lib/bmsRoutes";
import { migrateBMSChaptersToSupabase, checkMigrationStatus } from "@/scripts/migrateBMS";
import { ChapterListSkeleton } from "@/components/chapter/ChapterListSkeleton";

// Safe imports with fallbacks - prevents "Failed to fetch dynamically imported module" errors
// Fixed: Use proper ES6 imports with error handling
import { getKapitelBySubject as _getKapitelBySubject, alleKapitel as _alleKapitel } from "@/data/bmsKapitel";
import { useStore as _useStore } from "@/store/useStore";

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
    id: "biologie", 
    label: "Biologie", 
    icon: Dna, 
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400", 
    active: "bg-emerald-600 hover:bg-emerald-700", 
    progress: "bg-emerald-500", 
    border: "border-l-emerald-500",
    description: "Lebewesen, Zellen, Genetik, Evolution"
  },
  { 
    id: "chemie", 
    label: "Chemie", 
    icon: Atom, 
    color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400", 
    active: "bg-red-600 hover:bg-red-700", 
    progress: "bg-red-500", 
    border: "border-l-red-500",
    description: "Periodensystem, Bindungen, Reaktionen"
  },
  { 
    id: "physik", 
    label: "Physik", 
    icon: Zap, 
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400", 
    active: "bg-blue-600 hover:bg-blue-700", 
    progress: "bg-blue-500", 
    border: "border-l-blue-500",
    description: "Mechanik, Elektrizität, Wellen, Optik"
  },
  { 
    id: "mathematik", 
    label: "Mathematik", 
    icon: Calculator, 
    color: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400", 
    active: "bg-violet-600 hover:bg-violet-700", 
    progress: "bg-violet-500", 
    border: "border-l-violet-500",
    description: "Algebra, Analysis, Geometrie, Trigonometrie"
  },
] as const;

export default function BMS() {
  const navigate = useNavigate();
  const { fach: fachParam, kapitel: kapitelParam } = useParams<{ fach?: string; kapitel?: string }>();
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

  // Initialize and listen for localStorage changes
  useEffect(() => {
    // Einmalig: localStorage leeren (vermeidet QuotaExceededError durch alte Backups)
    if (!sessionStorage.getItem('bms-localStorage-cleared-once')) {
      localStorage.clear();
      sessionStorage.setItem('bms-localStorage-cleared-once', '1');
    }
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
      console.log('🚀 Starte Migration von localStorage zu Supabase...');
      try {
        const result = await migrateBMSChaptersToSupabase();
        if (result.success) {
          console.log(`✅ Migration erfolgreich! ${result.chaptersMigrated} Kapitel, ${result.subchaptersMigrated} Unterkapitel migriert.`);
          if (result.errors.length > 0) {
            console.warn('⚠️ Einige Fehler:', result.errors);
          }
          console.log('🔄 Seite neu laden, um aus Supabase zu laden...');
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
      console.log('📊 Migration Status:', status);
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
          console.log('📦 Showing cached chapters (revalidating in background)');
        } else {
          console.log('✅ Loaded', chapters.length, 'chapters from Supabase');
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
      const chapter = chapterId ? supabaseChapters.find((c) => c.id === chapterId) : null;
      setActiveKapitel(chapter ?? null);
    } else if (fachParam === undefined && kapitelParam === undefined) {
      setSelectedSubject(null);
      setActiveKapitel(null);
    }
  }, [fachParam, kapitelParam, supabaseChapters]);

  // Compute merged chapters for selected subject (only Supabase)
  const chaptersForSelectedSubject = useMemo(() => {
    if (!selectedSubject) return [];
    try {
      const sourceChapters = supabaseChapters.filter((k) => k && k.subject === selectedSubject);
      const staticChapters = (getKapitelBySubject && getKapitelBySubject(selectedSubject)) || [];
      const merged = [...staticChapters];
      for (const dynamicChapter of sourceChapters) {
        if (!dynamicChapter || !dynamicChapter.id) continue;
        const index = merged.findIndex((c) => c && c.id === dynamicChapter.id);
        if (index >= 0) {
          merged[index] = dynamicChapter;
        } else {
          merged.push(dynamicChapter);
        }
      }
      return merged;
    } catch (error) {
      console.error('❌ Error computing chapters for subject:', error);
      return [];
    }
  }, [selectedSubject, supabaseChapters]);

  // Compute merged chapters for all subjects (only Supabase)
  const safeAlleKapitel = useMemo(() => {
    try {
      const staticChapters = Array.isArray(alleKapitel) ? alleKapitel : [];
      const merged = [...staticChapters];
      for (const supabaseChapter of supabaseChapters) {
        if (!supabaseChapter || !supabaseChapter.id) continue;
        const index = merged.findIndex((c) => c && c.id === supabaseChapter.id);
        if (index >= 0) {
          merged[index] = supabaseChapter;
        } else {
          merged.push(supabaseChapter);
        }
      }
      return merged;
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
    return (
      <BMSKapitelView
        kapitel={activeKapitel}
        onBack={() => {
          setActiveKapitel(null);
          navigate(selectedSubject ? pathForSubject(selectedSubject) : '/bms');
        }}
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

    const kapitel = Array.isArray(chaptersForSelectedSubject) ? chaptersForSelectedSubject : [];

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

        <div className="flex items-center gap-4">
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
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
            <subjectData.icon className="w-8 h-8" />
            {subjectData.label}
          </h1>
          <p className="text-muted mt-1">
            {kapitel.length} Kapitel mit {subjectUK} Unterkapiteln
            {subjectUK > 0 && (
              <span className="text-primary-700 dark:text-primary-400 font-medium ml-2">
                {subjectCompletedUK}/{subjectUK} abgeschlossen
              </span>
            )}
          </p>
        </div>

        {subjectUK > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted">
              <span>Fortschritt</span>
              <span>{subjectCompletedUK}/{subjectUK} Unterkapitel</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`${subjectData.progress} h-2 rounded-full transition-all`}
                style={{ width: `${(subjectCompletedUK / subjectUK) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary-700 dark:text-primary-400" />
            Kapitel
          </h2>
          
          {kapitel.length === 0 ? (
            <Card className={`border-l-4 ${subjectData.border}`}>
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`w-16 h-16 rounded-full ${subjectData.color} flex items-center justify-center`}>
                    <subjectData.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Noch keine Kapitel vorhanden
                </h3>
                <p className="text-muted mb-6">
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
              const progress = ukTotal > 0 ? (ukDone / ukTotal) * 100 : 0;

              return (
                <Card
                  key={kap.id}
                  className={`hover:shadow-md transition-shadow cursor-pointer border-l-4 ${subjectData.border}`}
                  onClick={() => {
                    setActiveKapitel(kap);
                    navigate(pathForChapter(kap.subject, kap.id));
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl shrink-0">{kap.icon || '📚'}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-gray-900 dark:text-gray-100">{kap.title || 'Untitled Chapter'}</h3>
                          {isCompleted && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted">
                          <span>{ukTotal} Unterkapitel</span>
                          {kap.estimatedTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {kap.estimatedTime}
                            </span>
                          )}
                          {ukTotal > 0 && (
                            <span className="text-primary-600 dark:text-primary-400 font-medium">
                              {ukDone}/{ukTotal}
                            </span>
                          )}
                        </div>
                        {ukDone > 0 && !isCompleted && (
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                            <div
                              className={`${subjectData.progress} h-1.5 rounded-full transition-all`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted shrink-0" />
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
    <div className="max-w-6xl mx-auto space-y-6 p-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "BMS" }]} />

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">BMS - Basiskenntnistest</h1>
        <p className="text-muted mt-2">
          {safeAlleKapitel.length} Kapitel mit {totalUK} Unterkapiteln
          {totalUK > 0 && (
            <span className="text-primary-700 dark:text-primary-400 font-medium ml-2">
              {completedUK}/{totalUK} abgeschlossen
            </span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject) => {
          let sKapitel: Kapitel[] = [];
          try {
            const staticChapters = (getKapitelBySubject && getKapitelBySubject(subject.id)) || [];
            const dynamicChapters = supabaseChapters.filter((k) => k && k.subject === subject.id);
            sKapitel = [...staticChapters];
            for (const dynamicChapter of dynamicChapters) {
              if (!dynamicChapter || !dynamicChapter.id) continue;
              const index = sKapitel.findIndex((c) => c && c.id === dynamicChapter.id);
              if (index >= 0) {
                sKapitel[index] = dynamicChapter;
              } else {
                sKapitel.push(dynamicChapter);
              }
            }
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

          return (
            <Card
              key={subject.id}
              className={`hover:shadow-lg transition-all cursor-pointer border-l-4 ${subject.border} h-full`}
              onClick={() => {
                setSelectedSubject(subject.id);
                navigate(pathForSubject(subject.id));
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl ${subject.color} flex items-center justify-center shrink-0`}>
                    <subject.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {subject.label}
                    </h2>
                    <p className="text-sm text-muted mb-3">
                      {subject.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted">
                        {sKapitel.length} Kapitel
                      </span>
                      {sTotal > 0 && (
                        <>
                          <span className="text-muted">•</span>
                          <span className="text-primary-600 dark:text-primary-400 font-medium">
                            {sDone}/{sTotal} Unterkapitel
                          </span>
                        </>
                      )}
                    </div>
                    {sTotal > 0 && (
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                        <div
                          className={`${subject.progress} h-2 rounded-full transition-all`}
                          style={{ width: `${(sDone / sTotal) * 100}%` }}
                        />
                      </div>
                    )}
                  </div>
                  <ChevronRight className="w-6 h-6 text-muted shrink-0" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {safeAlleKapitel.length === 0 && (
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
              Noch keine Kapitel vorhanden
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-400 mb-4">
              Erstelle deine ersten Kapitel im Editor. Sie werden automatisch hier angezeigt.
            </p>
            <Button onClick={() => navigate('/admin/kapitel-editor')} className="gap-2">
              <BookOpen className="w-4 h-4" />
              Zum Kapitel-Editor
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
