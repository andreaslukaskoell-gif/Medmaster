import { useState, useMemo, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Bookmark,
  StickyNote,
  Network,
  HelpCircle,
  Zap,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { QuickEdit } from "../components/QuickEdit";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { pathForSubject, pathForChapter } from "@/lib/bmsRoutes";
import { useStore } from "../store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { InteractiveQuiz } from "../components/chapter/InteractiveQuiz";
import { ContentVisualizer } from "../components/chapter/ContentVisualizer";
import { ContentErrorBoundary } from "@/components/ContentErrorBoundary";
import { KnowledgeBridgeSlideOver } from "@/components/content/KnowledgeBridgeSlideOver";
import { validateUnterkapitel, validateKapitel } from "@/lib/validateChapter";
import { extractKontrollfragen } from "../utils/parseKontrollfragen";
import { updateStichwortProgress } from "../lib/kontrollfragenProgress";
import { getReviewDaysFromStreak } from "../lib/utils";
import { useAdaptiveStore } from "../store/adaptiveLearning";
import type { Kapitel } from "../data/bmsKapitel/types";
import { trackEvent } from "@/lib/analyticsTracker";
import { sanitizeHtml } from "@/lib/security";

interface Props {
  kapitel: Kapitel;
  unterkapitelIndex: number;
  onBack: () => void;
  onNavigate: (index: number) => void;
  onPrevChapter?: () => void;
  onNextChapter?: () => void;
}

const subjectLabels: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

const subjectAccentVars: Record<string, string> = {
  biologie: "var(--accent-bio)",
  chemie: "var(--accent-chem)",
  physik: "var(--accent-phys)",
  mathematik: "var(--accent-math)",
};

export default function BMSUnterkapitel({
  kapitel,
  unterkapitelIndex,
  onBack,
  onNavigate,
  onPrevChapter,
  onNextChapter,
}: Props) {
  const location = useLocation();
  const { setBreadcrumbs } = useBreadcrumb();
  const kapitelId = kapitel?.id;
  const ukFromIndex =
    kapitel?.unterkapitel &&
    Array.isArray(kapitel.unterkapitel) &&
    unterkapitelIndex >= 0 &&
    unterkapitelIndex < kapitel.unterkapitel.length
      ? kapitel.unterkapitel[unterkapitelIndex]
      : null;
  const ukId = ukFromIndex?.id;

  // Track chapter open
  useEffect(() => {
    if (ukId) trackEvent("chapter_open", { chapter: kapitelId, subchapter: ukId });
  }, [ukId, kapitelId]);

  const store = useStore();
  const completedChapters = store.completedChapters || [];
  const completeChapter = store.completeChapter || (() => {});
  const addXP = store.addXP || (() => {});
  const checkStreak = store.checkStreak || (() => {});
  const notes = store.notes || {};
  const setNote = store.setNote || (() => {});
  const bookmarks = store.bookmarks || { chapters: [] };
  const toggleBookmarkChapter = store.toggleBookmarkChapter || (() => {});
  const saveQuizResult = store.saveQuizResult ?? (() => {});
  const logActivity = store.logActivity ?? (() => {});
  const getMinutes = useSessionTimer();

  const unterkapitel =
    kapitel?.unterkapitel && Array.isArray(kapitel.unterkapitel) ? kapitel.unterkapitel : [];
  const total = unterkapitel.length;
  const uk =
    unterkapitelIndex >= 0 && unterkapitelIndex < unterkapitel.length
      ? unterkapitel[unterkapitelIndex]
      : null;

  const isLast = unterkapitelIndex === total - 1;
  const isFirst = unterkapitelIndex === 0;

  const [noteText, setNoteText] = useState(notes[uk?.id || ""] || "");
  const [showNotes, setShowNotes] = useState(false);
  const [bridgeOpen, setBridgeOpen] = useState(false);
  const [hinterfragMode, setHinterfragMode] = useState(false);
  const [quickReviewMode, setQuickReviewMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollRestoredToast, setShowScrollRestoredToast] = useState(false);
  const [toolMenuOpen, setToolMenuOpen] = useState(false);
  const allCompleteFired = useRef(false);
  const scrollSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const kontrollResultsRef = useRef<{ questionIndex: number; correct: boolean }[]>([]);

  const readingTimeMin = useMemo(() => {
    const text = [uk?.content ?? "", ...(uk?.sections?.map((s) => s.text ?? "") ?? [])].join(" ");
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }, [uk?.content, uk?.sections]);

  useEffect(() => {
    if (kapitelId && ukId) useAdaptiveStore.getState().setLastViewed(kapitelId, ukId);
  }, [kapitelId, ukId]);

  useEffect(() => {
    if (location.pathname) useAdaptiveStore.getState().setLastPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (!kapitel?.id || !ukFromIndex?.title) return;
    setBreadcrumbs([
      { label: "Dashboard", href: "/" },
      { label: "BMS", href: "/bms" },
      {
        label: subjectLabels[kapitel.subject] ?? kapitel.subject,
        href: pathForSubject(kapitel.subject),
      },
      { label: kapitel.title, href: pathForChapter(kapitel.subject, kapitel.id) },
      { label: ukFromIndex.title },
    ]);
  }, [kapitel, ukFromIndex?.title, setBreadcrumbs]);

  useEffect(() => {
    const storageKey = ukId ? `medmaster-uk-scroll-${ukId}` : null;
    const saved = storageKey ? sessionStorage.getItem(storageKey) : null;
    if (saved) {
      const y = parseInt(saved, 10);
      if (y > 0) {
        // Defer to allow content to render before restoring position
        requestAnimationFrame(() => {
          window.scrollTo(0, y);
          setShowScrollRestoredToast(true);
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [ukId]);

  useEffect(() => {
    const storageKey = ukId ? `medmaster-uk-scroll-${ukId}` : null;
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const totalHeight = el.scrollHeight - el.clientHeight;
      setScrollProgress(totalHeight > 0 ? Math.min(100, (scrolled / totalHeight) * 100) : 0);

      // Debounced scroll position save
      if (storageKey) {
        if (scrollSaveTimerRef.current) clearTimeout(scrollSaveTimerRef.current);
        scrollSaveTimerRef.current = setTimeout(() => {
          sessionStorage.setItem(storageKey, String(Math.round(scrolled)));
        }, 500);
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      if (scrollSaveTimerRef.current) clearTimeout(scrollSaveTimerRef.current);
    };
  }, [ukId]);

  // Auto-dismiss scroll-restored toast after 3 seconds
  useEffect(() => {
    if (!showScrollRestoredToast) return;
    const t = setTimeout(() => setShowScrollRestoredToast(false), 3000);
    return () => clearTimeout(t);
  }, [showScrollRestoredToast]);

  useEffect(() => {
    if (!kapitel || !ukFromIndex) return;
    const kRes = validateKapitel(kapitel, `Kapitel ${kapitel.id}`);
    if (!kRes.valid) {
      console.warn("[Content-Schema] Kapitel-Validierung fehlgeschlagen:", kRes.errors);
    }
    const ukRes = validateUnterkapitel(ukFromIndex, `Unterkapitel ${ukFromIndex.id}`);
    if (!ukRes.valid) {
      console.warn("[Content-Schema] Unterkapitel-Validierung fehlgeschlagen:", ukRes.errors);
    }
  }, [kapitel, ukFromIndex]);

  const completedCount = unterkapitel.filter(
    (u) => u && u.id && completedChapters.includes(u.id)
  ).length;

  const isBookmarked = uk ? bookmarks.chapters.includes(uk.id) : false;
  const isCompleted = uk ? completedChapters.includes(uk.id) : false;

  const handleComplete = () => {
    if (!uk || !kapitel) return;
    // Clear saved scroll position on completion
    sessionStorage.removeItem(`medmaster-uk-scroll-${uk.id}`);
    if (!isCompleted) {
      completeChapter(uk.id);
      addXP(5);
      checkStreak();
    }
    const newCompletedCount = completedCount + (isCompleted ? 0 : 1);
    if (newCompletedCount === total) {
      completeChapter(kapitel.id);
      addXP(50);
    }
  };

  const handleNext = () => {
    handleComplete();
    if (!isLast) {
      onNavigate(unterkapitelIndex + 1);
      window.scrollTo(0, 0);
    } else if (onNextChapter) {
      onNextChapter();
      window.scrollTo(0, 0);
    } else {
      onBack();
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      onNavigate(unterkapitelIndex - 1);
      window.scrollTo(0, 0);
    } else if (onPrevChapter) {
      onPrevChapter();
      window.scrollTo(0, 0);
    }
  };

  const canGoPrev = !isFirst || !!onPrevChapter;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight" && !e.altKey && !e.metaKey) handleNext();
      if (e.key === "ArrowLeft" && !e.altKey && !e.metaKey) handlePrev();
      if ((e.key === "r" || e.key === "R") && !e.ctrlKey && !e.metaKey)
        setQuickReviewMode((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [unterkapitelIndex, isFirst, isLast]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleKontrollfragenAnswer = (
    questionIndex: number,
    correct: boolean,
    secondTry?: boolean
  ): void | { nextReviewDays: number; name: string } => {
    if (!uk) return;
    kontrollResultsRef.current.push({ questionIndex, correct });
    const stichwortId = `${uk.id}-kontroll-${questionIndex}`;
    updateStichwortProgress(stichwortId, correct, 30);
    addXP(correct ? (secondTry ? 5 : 10) : 2);
    checkStreak();
    if (correct) {
      const stat = useAdaptiveStore.getState().profile.stichwortStats[stichwortId];
      const nextReviewDays = stat ? getReviewDaysFromStreak(stat.streak) : 0;
      return { nextReviewDays, name: `Frage ${questionIndex + 1}` };
    }
  };

  const updateChapterSRS = useStore((s) => s.updateChapterSRS);

  const handleAllKontrollfragenComplete = (correctCount?: number, totalArg?: number) => {
    if (allCompleteFired.current) return;
    allCompleteFired.current = true;
    if (typeof correctCount === "number" && typeof totalArg === "number" && totalArg > 0) {
      const scorePct = (correctCount / totalArg) * 100;
      if (kapitel) updateChapterSRS(kapitel.id, scorePct);
      const collected = kontrollResultsRef.current;
      const byIndex = new Map<number, boolean>();
      collected.forEach((r) => byIndex.set(r.questionIndex, r.correct));
      const answers = Array.from(byIndex.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([i, correct]) => ({
          questionId: `kontroll-${uk?.id}-${i}`,
          selectedAnswer: "",
          correct,
        }));
      if (answers.length > 0) {
        saveQuizResult({
          id: `kontroll-${uk?.id}-${Date.now()}`,
          type: "bms",
          subject: kapitel?.subject ?? "",
          score: correctCount,
          total: totalArg,
          date: new Date().toLocaleDateString("de-AT"),
          timestamp: new Date().toISOString(),
          durationMinutes: getMinutes(),
          answers,
        });
        logActivity(totalArg, getMinutes());
      }
      kontrollResultsRef.current = [];
    }
    handleComplete();
    setTimeout(() => onBack(), 1200);
  };

  // eslint-disable-next-line react-hooks/preserve-manual-memoization -- deps intentionally minimal
  const selfTestBlock = useMemo(() => {
    if (!uk || !uk.id) return null;
    const questionsFromArray =
      uk.selfTest && Array.isArray(uk.selfTest) && uk.selfTest.length > 0 ? uk.selfTest : [];
    const extractedFromContent = uk.content ? extractKontrollfragen(uk.content).questions : [];
    const allQuestions =
      extractedFromContent.length > 0 ? extractedFromContent : questionsFromArray;

    if (allQuestions.length === 0) return null;

    const kontrollProps = {
      unterkapitelId: uk.id,
      onAnswer: handleKontrollfragenAnswer,
      onAllComplete: handleAllKontrollfragenComplete,
    };

    return (
      <div>
        <InteractiveQuiz questions={allQuestions} {...kontrollProps} />
      </div>
    );
  }, [uk?.selfTest, uk?.content, kapitel?.id, uk?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!kapitel || !kapitel.id) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center">
        <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
          Ungültiges Kapitel
        </h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          Die Kapitel-Daten konnten nicht geladen werden.
        </p>
        <Button onClick={onBack}>Zurück zur Übersicht</Button>
      </div>
    );
  }

  if (unterkapitelIndex < 0 || unterkapitelIndex >= unterkapitel.length) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center">
        <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
          Ungültiges Unterkapitel
        </h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          Das angeforderte Unterkapitel konnte nicht gefunden werden.
        </p>
        <Button onClick={onBack}>Zurück zur Übersicht</Button>
      </div>
    );
  }

  if (!uk || !uk.id) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center">
        <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
          Ungültige Unterkapitel-Daten
        </h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          Die Unterkapitel-Daten konnten nicht geladen werden.
        </p>
        <Button onClick={onBack}>Zurück zur Übersicht</Button>
      </div>
    );
  }

  const nextUk = !isLast ? unterkapitel[unterkapitelIndex + 1] : null;
  const prevUk = !isFirst ? unterkapitel[unterkapitelIndex - 1] : null;
  const accentColor = subjectAccentVars[kapitel.subject] ?? "var(--accent)";

  return (
    <div className="w-full max-w-6xl mx-auto pb-16 relative px-0">
      {/* Scroll restored toast */}
      {showScrollRestoredToast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] px-4 py-2 rounded-lg text-sm"
          style={{
            backgroundColor: "var(--surface)",
            color: "var(--text-secondary)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            border: "1px solid var(--border)",
          }}
        >
          <button
            onClick={() => setShowScrollRestoredToast(false)}
            className="cursor-pointer bg-transparent border-none p-0 text-inherit"
          >
            Zurück zum Lesezeichen &uarr;
          </button>
        </div>
      )}

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full transition-all duration-150"
          style={{ width: `${scrollProgress}%`, backgroundColor: accentColor }}
        />
      </div>

      {/* Top bar: back + tools */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-[var(--muted)]">
          <ChevronLeft className="w-4 h-4 mr-1" />
          {kapitel.title}
        </Button>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setBridgeOpen(true)}
            className="p-2 rounded-lg cursor-pointer text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
            title="Verknüpfte Themen"
          >
            <Network className="w-4 h-4" />
          </button>
          <div className="relative">
            <button
              onClick={() => setToolMenuOpen(!toolMenuOpen)}
              className="p-2 rounded-lg cursor-pointer text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
              title="Weitere Optionen"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
            {toolMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setToolMenuOpen(false)} />
                <div className="absolute right-0 top-full mt-1 z-50 min-w-[180px] rounded-lg border border-[var(--border)] bg-[var(--background)] shadow-lg py-1">
                  <button
                    onClick={() => {
                      toggleBookmarkChapter(uk.id);
                      setToolMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface)] cursor-pointer transition-colors"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${isBookmarked ? "fill-current text-[var(--accent)]" : ""}`}
                    />
                    {isBookmarked ? "Lesezeichen entfernen" : "Lesezeichen setzen"}
                  </button>
                  <button
                    onClick={() => {
                      setShowNotes(!showNotes);
                      setToolMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface)] cursor-pointer transition-colors"
                  >
                    <StickyNote className={`w-4 h-4 ${showNotes ? "text-[var(--accent)]" : ""}`} />
                    Notizen
                  </button>
                  <button
                    onClick={() => {
                      setHinterfragMode(!hinterfragMode);
                      setToolMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface)] cursor-pointer transition-colors"
                  >
                    <HelpCircle
                      className={`w-4 h-4 ${hinterfragMode ? "text-[var(--accent)]" : ""}`}
                    />
                    Hinterfrag-Modus
                  </button>
                  <button
                    onClick={() => {
                      setQuickReviewMode(!quickReviewMode);
                      setToolMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface)] cursor-pointer transition-colors"
                  >
                    <Zap className={`w-4 h-4 ${quickReviewMode ? "text-[var(--accent)]" : ""}`} />
                    Quick Review (R)
                  </button>
                </div>
              </>
            )}
          </div>
          {import.meta.env.DEV && (
            <QuickEdit data={uk} storageKey={uk.id} label="Unterkapitel bearbeiten (Dev)" />
          )}
        </div>
      </div>

      <ContentErrorBoundary context={uk.id}>
        {/* Header — premium centered */}
        <header className="mb-20 mt-4 max-w-3xl mx-auto text-center hero-orbs">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-md"
              style={{
                color: accentColor,
                background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 12%, transparent), color-mix(in srgb, ${accentColor} 6%, transparent))`,
              }}
            >
              {subjectLabels[kapitel.subject]}
            </span>
            <span className="text-sm text-[var(--muted)]">
              {kapitel.title} &middot; {unterkapitelIndex + 1} von {total}
            </span>
          </div>
          <h1 className="text-[3rem] font-bold text-[var(--text-primary)] leading-[1.15] tracking-tight mb-5">
            {uk.title}
          </h1>
          <div className="flex items-center justify-center gap-5 text-sm text-[var(--muted)]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden />
              {readingTimeMin} Min Lesezeit
            </span>
            {isCompleted && (
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                Abgeschlossen
              </span>
            )}
          </div>
          {/* Accent underline */}
          <div
            className="mx-auto mt-8 h-[3px] w-16 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${accentColor}, color-mix(in srgb, ${accentColor} 50%, white))`,
            }}
          />
        </header>

        {/* Notes panel */}
        {showNotes && (
          <div className="mb-10 p-5 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-900/10">
            <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 flex items-center gap-2 mb-3">
              <StickyNote className="w-4 h-4" />
              Meine Notizen
            </h3>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Notizen zu diesem Unterkapitel..."
              className="w-full h-24 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-white dark:bg-yellow-900/10 text-sm text-[var(--text-primary)] placeholder:text-[var(--muted)] outline-none focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)] resize-y"
            />
            <Button size="sm" onClick={() => setNote(uk.id, noteText)} className="mt-2">
              Speichern
            </Button>
          </div>
        )}

        {/* Quick Review Mode */}
        {quickReviewMode ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 py-2.5 px-4 rounded-lg bg-[var(--surface)] border-l-2 border-[var(--accent)]">
              <Zap className="w-3.5 h-3.5 text-[var(--muted)] shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                Quick Review — nur Merksätze{" "}
                <span className="text-[var(--muted)]">(R zum Beenden)</span>
              </p>
            </div>
            {uk.sections && uk.sections.length > 0 ? (
              uk.sections
                .filter((s) => s.merksatz)
                .map((s, i) => (
                  <div
                    key={i}
                    className="rounded-lg border-l-4 border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/15 p-4 space-y-1"
                  >
                    <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wide">
                      {s.heading}
                    </p>
                    <p
                      className="text-sm text-[var(--text-primary)] leading-relaxed"
                      // Content is from our own chapter data files, not user input
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(
                          (s.merksatz ?? "").replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="font-semibold">$1</strong>'
                          )
                        ),
                      }}
                    />
                  </div>
                ))
            ) : (
              <p className="text-sm text-[var(--muted)] text-center py-8">
                Keine Merksätze in den Sektionen vorhanden.
              </p>
            )}
          </div>
        ) : (
          <>
            <div className="relative">
              <ContentErrorBoundary context={`${kapitel?.id ?? "chapter"}-${uk?.id ?? "uk"}`}>
                <ContentVisualizer
                  uk={uk}
                  subject={kapitel?.subject ?? "biologie"}
                  chapterId={kapitel?.id}
                  hinterfragMode={hinterfragMode}
                />
              </ContentErrorBoundary>
            </div>

            {/* Altfrage + Kontrollfragen */}
            <div className="w-full max-w-[680px] ml-[268px] min-w-0 space-y-10 mt-12">
              {uk.altfrage && (
                <div className="card-glass p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-[13px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 mb-3">
                    Altfragen-Klassiker
                  </h3>
                  {"text" in uk.altfrage ? (
                    <>
                      <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
                        {uk.altfrage.text}
                      </p>
                      <ul className="space-y-1.5 mb-3">
                        {uk.altfrage.options.map((opt) => (
                          <li
                            key={opt.id}
                            className="text-sm text-[var(--text-secondary)] flex gap-2"
                          >
                            <span className="font-semibold uppercase text-[var(--text-primary)]">
                              {opt.id})
                            </span>
                            <span>{opt.text}</span>
                          </li>
                        ))}
                      </ul>
                      <details className="group">
                        <summary className="text-sm text-[var(--accent)] cursor-pointer hover:underline font-medium">
                          Antwort anzeigen
                        </summary>
                        <p className="text-sm text-[var(--text-secondary)] mt-3 pl-4 border-l-2 border-amber-300 dark:border-amber-700">
                          <span className="font-semibold text-[var(--text-primary)]">
                            Richtig: {uk.altfrage.correctOptionId.toUpperCase()}
                          </span>{" "}
                          — {uk.altfrage.explanation}
                        </p>
                      </details>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-[var(--text-primary)] mb-2">
                        {uk.altfrage.question}
                      </p>
                      <details className="group">
                        <summary className="text-sm text-[var(--accent)] cursor-pointer hover:underline font-medium">
                          Antwort anzeigen
                        </summary>
                        <p className="text-sm text-[var(--text-secondary)] mt-3 pl-4 border-l-2 border-amber-300 dark:border-amber-700">
                          {uk.altfrage.answer}
                        </p>
                      </details>
                    </>
                  )}
                </div>
              )}

              {selfTestBlock}
            </div>
          </>
        )}

        {/* Navigation: Previous / Next — premium glass cards */}
        <div className="mt-24 pt-10 border-t border-[var(--border)]/30">
          <div className="grid grid-cols-2 gap-5">
            <div>
              {canGoPrev && (
                <button
                  onClick={handlePrev}
                  className="card-glass w-full text-left p-5 transition-all group cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[var(--muted)] mb-2">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{isFirst && onPrevChapter ? "Vorheriges Kapitel" : "Zurück"}</span>
                  </div>
                  {prevUk && (
                    <p className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                      {prevUk.title}
                    </p>
                  )}
                </button>
              )}
            </div>
            <div>
              <button
                onClick={handleNext}
                className="card-glass w-full text-left p-5 transition-all group cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-wider font-medium text-[var(--muted)] mb-2">
                  <span>{isLast && !onNextChapter ? "Kapitel abschließen" : "Weiter"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                {nextUk && (
                  <p className="text-base font-semibold text-[var(--text-primary)] text-right group-hover:text-[var(--accent)] transition-colors truncate">
                    {nextUk.title}
                  </p>
                )}
                {isLast && !onNextChapter && (
                  <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400 text-right">
                    Kapitel abschließen
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Dev-only status */}
        {import.meta.env.DEV && (
          <div className="mt-6 py-3 px-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--muted)]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>
                Word Count:{" "}
                {(() => {
                  const text = (uk.content || "").trim();
                  const words = text.split(/\s+/).filter(Boolean);
                  return words.length;
                })()}
              </span>
              <span>Quiz: {uk.quiz && uk.quiz.length > 0 ? "Vorhanden" : "Fehlt"}</span>
              <span>Image: {uk.imageUrl ? "Vorhanden" : "Fehlt"}</span>
              <button
                type="button"
                onClick={() => {
                  void navigator.clipboard.writeText(uk.id);
                }}
                className="ml-auto px-2 py-1 rounded bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)] transition-colors"
              >
                Copy ID
              </button>
            </div>
          </div>
        )}
      </ContentErrorBoundary>

      <KnowledgeBridgeSlideOver
        open={bridgeOpen}
        onClose={() => setBridgeOpen(false)}
        chapterId={kapitel.id}
        subject={kapitel.subject}
        chapterTitle={kapitel.title}
        content={
          (uk.content || "") +
          (uk.sections?.map((s) => (s && "text" in s ? s.text : "")).join(" ") ?? "")
        }
      />
    </div>
  );
}
