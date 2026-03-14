import React, { useState, useMemo, useRef, useEffect } from "react";
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
} from "lucide-react";
import { Button } from "../components/ui/button";
import { StickyBackButton } from "../components/ui/StickyBackButton";
import { QuickEdit } from "../components/QuickEdit";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { pathForSubject, pathForChapter } from "@/lib/bmsRoutes";
import { useStore } from "../store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { SelbstTest } from "../components/chapter/SelbstTest";
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

interface Props {
  kapitel: Kapitel;
  unterkapitelIndex: number;
  onBack: () => void;
  onNavigate: (index: number) => void;
  /** Go to previous chapter's last Unterkapitel (book-like). */
  onPrevChapter?: () => void;
  /** Go to next chapter's first Unterkapitel (book-like). */
  onNextChapter?: () => void;
}

const subjectLabels: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

/** Thin accent color for subject label — small indicator, OK to keep per-subject. */
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

  // BUG-1 fix: useStore called unconditionally at the top level, before any early returns
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

  // Derive safe values that don't depend on uk being valid yet
  const unterkapitel =
    kapitel?.unterkapitel && Array.isArray(kapitel.unterkapitel) ? kapitel.unterkapitel : [];
  const total = unterkapitel.length;
  const uk =
    unterkapitelIndex >= 0 && unterkapitelIndex < unterkapitel.length
      ? unterkapitel[unterkapitelIndex]
      : null;

  // BUG-4 fix: isFirst / isLast declared before the keyboard useEffect that uses them
  const isLast = unterkapitelIndex === total - 1;
  const isFirst = unterkapitelIndex === 0;

  // Additional state — all useState calls unconditionally at top level
  const [noteText, setNoteText] = useState(notes[uk?.id || ""] || "");
  const [showNotes, setShowNotes] = useState(false);
  const [bridgeOpen, setBridgeOpen] = useState(false);
  const [hinterfragMode, setHinterfragMode] = useState(false);
  const [quickReviewMode, setQuickReviewMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const allCompleteFired = useRef(false);
  /** Sammelt Kontrollfragen-Antworten für Einspeisung in Analyse (quizResults). */
  const kontrollResultsRef = useRef<{ questionIndex: number; correct: boolean }[]>([]);

  // Reading time: ~200 words/minute — useMemo unconditionally at top level
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

  // Scroll to top whenever the UK changes (navigation between Unterkapitel)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ukId]);

  // Reading progress bar tracking
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [ukId]);

  // Schema-Validierung beim Laden: Fehler in Konsole loggen (F12), damit du siehst, wo im JSON der Fehler liegt
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

  // Derived booleans — computed defensively (uk may be null before early returns)
  const isBookmarked = uk ? bookmarks.chapters.includes(uk.id) : false;
  const isCompleted = uk ? completedChapters.includes(uk.id) : false;

  // All event handlers that keyboard useEffect depends on — declared BEFORE the useEffect
  const handleComplete = () => {
    if (!uk || !kapitel) return;
    if (!isCompleted) {
      completeChapter(uk.id);
      addXP(5);
      checkStreak();
    }
    const newCompletedCount = completedCount + (isCompleted ? 0 : 1);
    if (newCompletedCount === total) {
      completeChapter(kapitel.id);
      addXP(50); // +50 XP beim Abschluss des gesamten Kapitels
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

  // Keyboard navigation: ← → for prev/next UK, R to toggle Quick Review
  // BUG-4 fix: isFirst/isLast are now declared above this useEffect
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

  // useStore selector called unconditionally at top level (not inside handler)
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

  // BUG-3 fix: selfTestBlock useMemo before all early returns, guarded for null uk
  // eslint-disable-next-line react-hooks/preserve-manual-memoization -- deps intentionally minimal to avoid re-creating block
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
      <div className={kapitel?.enhancedFormatting ? "mt-8" : ""}>
        {kapitel?.enhancedFormatting ? (
          <InteractiveQuiz questions={allQuestions} {...kontrollProps} />
        ) : (
          <>
            <div
              className={
                kapitel?.enhancedFormatting ? "mb-4 pb-3 border-b-2 border-[var(--border)]" : ""
              }
            >
              <h2
                className={`${kapitel?.enhancedFormatting ? "text-2xl font-bold" : "text-xl font-semibold"} text-[var(--text-primary)]`}
              >
                {kapitel?.enhancedFormatting && "📝 "}Kontrollfragen
              </h2>
              {kapitel?.enhancedFormatting && (
                <p className="text-sm text-[var(--muted)] mt-1">
                  Teste dein Wissen mit diesen Fragen
                </p>
              )}
            </div>
            <SelbstTest questions={allQuestions} {...kontrollProps} />
          </>
        )}
      </div>
    );
  }, [uk?.selfTest, uk?.content, kapitel?.id, uk?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Defensive checks for chapter and subchapter data
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

  // After early returns, uk is guaranteed non-null and uk.id is valid

  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto pb-16 relative px-0">
      {/* Reading progress bar — fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-[200] h-0.5 bg-transparent pointer-events-none">
        <div
          className="h-full transition-all duration-100 bg-[var(--accent)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <StickyBackButton onClick={onBack} />

      {/* Minimal top bar: back + essential actions */}
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-[var(--muted)]">
          <ChevronLeft className="w-4 h-4 mr-1" />
          {kapitel.title}
        </Button>
        <div className="flex items-center gap-1">
          <button
            onClick={() => toggleBookmarkChapter(uk.id)}
            className={`p-2 rounded-lg cursor-pointer transition-colors ${isBookmarked ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--text-primary)]"}`}
            title="Lesezeichen"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
          </button>
          <div className="relative">
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="p-2 rounded-lg cursor-pointer text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
              title="Lernwerkzeuge"
            >
              <Zap className="w-4 h-4" />
            </button>
            {toolsOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setToolsOpen(false)} />
                <div className="absolute right-0 top-full mt-1 z-50 w-56 rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-lg py-1">
                  <button
                    onClick={() => {
                      setShowNotes(!showNotes);
                      setToolsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                  >
                    <StickyNote className="w-4 h-4 text-[var(--muted)]" />
                    <span>Notizen {showNotes ? "ausblenden" : "anzeigen"}</span>
                  </button>
                  <button
                    onClick={() => {
                      setBridgeOpen(true);
                      setToolsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                  >
                    <Network className="w-4 h-4 text-[var(--muted)]" />
                    <span>Verknüpfte Themen</span>
                  </button>
                  <button
                    onClick={() => {
                      setHinterfragMode(!hinterfragMode);
                      setToolsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                  >
                    <HelpCircle className="w-4 h-4 text-[var(--muted)]" />
                    <span>Hinterfrag-Modus {hinterfragMode ? "aus" : "an"}</span>
                  </button>
                  <button
                    onClick={() => {
                      setQuickReviewMode(!quickReviewMode);
                      setToolsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                  >
                    <Zap className="w-4 h-4 text-[var(--muted)]" />
                    <span>Quick Review {quickReviewMode ? "aus" : "an"}</span>
                  </button>
                </div>
              </>
            )}
          </div>
          <QuickEdit data={uk} storageKey={uk.id} label="Unterkapitel bearbeiten (Dev)" />
        </div>
      </div>

      <ContentErrorBoundary context={uk.id}>
        {/* Clean header: chapter context + title */}
        <header className="mb-8">
          <p
            className="text-sm font-medium mb-1"
            style={{ color: subjectAccentVars[kapitel.subject] ?? "var(--accent)" }}
          >
            {kapitel.title} · {unterkapitelIndex + 1}/{total}
          </p>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{uk.title}</h1>
          <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
            <Clock className="w-3 h-3" aria-hidden />
            Ca. {readingTimeMin} Min Lesezeit
          </span>
        </header>

        {/* Notes panel */}
        {showNotes && (
          <div className="mb-8 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-900/10">
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

        {/* Quick Review Mode: nur Merksätze der Sections */}
        {quickReviewMode ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
              <Zap className="w-4 h-4 text-yellow-600 dark:text-yellow-400 shrink-0" />
              <p className="text-sm text-yellow-800 dark:text-yellow-300 font-medium">
                Quick Review — nur Merksätze (R zum Beenden)
              </p>
            </div>
            {uk.sections && uk.sections.length > 0 ? (
              uk.sections
                .filter((s) => s.merksatz)
                .map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50/60 dark:bg-yellow-900/10 p-4 space-y-1"
                  >
                    <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-400 uppercase tracking-wide">
                      {s.heading}
                    </p>
                    <p
                      className="text-sm text-[var(--text-primary)] leading-relaxed"
                      // Content is from our own chapter data files, not user input
                      dangerouslySetInnerHTML={{
                        __html: (s.merksatz ?? "").replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="font-semibold">$1</strong>'
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
          /* Main content: no Card wrapper, content breathes directly */
          <>
            <div className="relative">
              <ContentErrorBoundary context={`${kapitel?.id ?? "chapter"}-${uk?.id ?? "uk"}`}>
                <ContentVisualizer
                  uk={uk}
                  subject={kapitel?.subject ?? "biologie"}
                  chapterId={kapitel?.id}
                  enhancedFormatting={kapitel?.enhancedFormatting}
                  hinterfragMode={hinterfragMode}
                />
              </ContentErrorBoundary>
            </div>

            {/* Altfrage + Kontrollfragen: flow naturally after content */}
            <div className="w-full lg:max-w-[calc(100%-240px)] lg:ml-[240px] min-w-0 space-y-8 mt-8">
              {/* Altfrage — subtle border-left instead of heavy card */}
              {uk.altfrage && (
                <div className="pl-4 border-l-2 border-amber-400 dark:border-amber-600">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
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
                        <summary className="text-sm text-[var(--accent)] cursor-pointer hover:underline">
                          Antwort anzeigen
                        </summary>
                        <p className="text-sm text-[var(--text-secondary)] mt-2 pl-4 border-l-2 border-[var(--border)]">
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
                        <summary className="text-sm text-[var(--accent)] cursor-pointer hover:underline">
                          Antwort anzeigen
                        </summary>
                        <p className="text-sm text-[var(--text-secondary)] mt-2 pl-4 border-l-2 border-[var(--border)]">
                          {uk.altfrage.answer}
                        </p>
                      </details>
                    </>
                  )}
                </div>
              )}

              {/* Kontrollfragen / Self-Test */}
              {selfTestBlock}
            </div>
          </>
        )}

        {/* Navigation: Previous / Next */}
        <div className="flex items-center justify-between pt-8 mt-12 border-t border-[var(--border)]">
          <Button variant="outline" onClick={handlePrev} disabled={!canGoPrev}>
            <ArrowLeft className="w-4 h-4 mr-1" />
            {isFirst && onPrevChapter ? "Vorheriges Kapitel" : "Zurück"}
          </Button>

          <Button onClick={handleNext}>
            {isLast && !onNextChapter ? "Kapitel abschließen" : "Weiter"}
            {(!isLast || onNextChapter) && <ArrowRight className="w-4 h-4 ml-1" />}
          </Button>
        </div>

        {/* Dev-only: Status-Overlay am Seitenende */}
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
