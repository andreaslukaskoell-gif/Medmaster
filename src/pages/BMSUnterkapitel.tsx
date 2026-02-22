import React, { useState, useMemo, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Bookmark,
  StickyNote,
  CheckCircle2,
  Network,
  HelpCircle,
  Layers,
  Zap,
  Clock,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { StickyBackButton } from "../components/ui/StickyBackButton";
import { QuickEdit } from "../components/QuickEdit";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { pathForSubject, pathForChapter } from "@/lib/bmsRoutes";
import { processTextForSmartLinks } from "@/data/glossary";
import { SmartLink } from "@/components/content/SmartLink";
import { useStore } from "../store/useStore";
import { MerksatzBox } from "../components/chapter/MerksatzBox";
import { SelbstTest } from "../components/chapter/SelbstTest";
import { InteractiveQuiz } from "../components/chapter/InteractiveQuiz";
import { ContentVisualizer } from "../components/chapter/ContentVisualizer";
import { ContentErrorBoundary } from "@/components/ContentErrorBoundary";
import { ChapterSRSBadge } from "@/components/chapter/ChapterSRSBadge";
import { KnowledgeBridgeSlideOver } from "@/components/content/KnowledgeBridgeSlideOver";
import { validateUnterkapitel, validateKapitel } from "@/lib/validateChapter";
import { extractKontrollfragen } from "../utils/parseKontrollfragen";
import { updateStichwortProgress } from "../lib/kontrollfragenProgress";
import { getReviewDaysFromStreak } from "../lib/utils";
import { useAdaptiveStore } from "../store/adaptiveLearning";
import type { Kapitel } from "../data/bmsKapitel/types";

// BUG-2 fix: standalone component so useState is called at top level
function MerksätzeSection({ merksätze }: { merksätze: string[] }) {
  const SHOW_DIRECTLY = 3;
  const hasMore = merksätze.length > SHOW_DIRECTLY;
  const [merkeExpanded, setMerkeExpanded] = useState(false);
  const visible = hasMore && !merkeExpanded ? merksätze.slice(0, SHOW_DIRECTLY) : merksätze;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between pb-1 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
          💡 Merksätze
          <span className="text-xs font-normal text-gray-400 dark:text-gray-500">
            ({merksätze.length})
          </span>
        </h3>
      </div>
      {visible.map((merksatz, i) => (
        <div
          key={i}
          className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg"
        >
          <p
            className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: merksatz.replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="font-semibold">$1</strong>'
              ),
            }}
          />
        </div>
      ))}
      {hasMore && (
        <button
          onClick={() => setMerkeExpanded(!merkeExpanded)}
          className="w-full text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 py-2 border border-amber-200 dark:border-amber-800 rounded-lg transition-colors"
        >
          {merkeExpanded
            ? `▲ Weniger anzeigen`
            : `▼ ${merksätze.length - SHOW_DIRECTLY} weitere Merksätze anzeigen`}
        </button>
      )}
    </div>
  );
}

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

const subjectProgressColors: Record<string, string> = {
  biologie: "bg-emerald-500",
  chemie: "bg-red-500",
  physik: "bg-blue-500",
  mathematik: "bg-violet-500",
};

const subjectTextColors: Record<string, string> = {
  biologie: "text-emerald-700 dark:text-emerald-400",
  chemie: "text-red-700 dark:text-red-400",
  physik: "text-blue-700 dark:text-blue-400",
  mathematik: "text-violet-700 dark:text-violet-400",
};

const SCROLL_STORAGE_KEY = "medmaster-scroll";

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
  const [progressiveDisclosure, setProgressiveDisclosure] = useState(true);
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

  useEffect(() => {
    if (!ukId || typeof window === "undefined") return;
    const key = `${SCROLL_STORAGE_KEY}:${location.pathname}:${ukId}`;
    const raw = sessionStorage.getItem(key);
    if (raw === null) return;
    const y = parseInt(raw, 10);
    if (!Number.isFinite(y) || y <= 0) return;
    const id = requestAnimationFrame(() => {
      window.scrollTo(0, y);
    });
    return () => cancelAnimationFrame(id);
  }, [location.pathname, ukId]);

  useEffect(() => {
    if (!ukId) return;
    const key = `${SCROLL_STORAGE_KEY}:${location.pathname}:${ukId}`;
    return () => {
      sessionStorage.setItem(key, String(window.scrollY));
    };
  }, [location.pathname, ukId]);

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
          answers,
        });
        logActivity(totalArg);
      }
      kontrollResultsRef.current = [];
    }
    handleComplete();
    setTimeout(() => onBack(), 1200);
  };

  // BUG-3 fix: selfTestBlock useMemo before all early returns, guarded for null uk
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
                kapitel?.enhancedFormatting
                  ? "mb-4 pb-3 border-b-2 border-gray-300 dark:border-gray-600"
                  : ""
              }
            >
              <h2
                className={`${kapitel?.enhancedFormatting ? "text-2xl font-bold" : "text-xl font-semibold"} text-gray-900 dark:text-gray-100`}
              >
                {kapitel?.enhancedFormatting && "📝 "}Kontrollfragen
              </h2>
              {kapitel?.enhancedFormatting && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
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
      <div className="max-w-3xl mx-auto space-y-6 p-6">
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
              Ungültiges Kapitel
            </h3>
            <p className="text-sm text-red-800 dark:text-red-400 mb-4">
              Die Kapitel-Daten konnten nicht geladen werden.
            </p>
            <Button onClick={onBack}>Zurück zur Übersicht</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Validate index
  if (unterkapitelIndex < 0 || unterkapitelIndex >= unterkapitel.length) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 p-6">
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
              Ungültiges Unterkapitel
            </h3>
            <p className="text-sm text-red-800 dark:text-red-400 mb-4">
              Das angeforderte Unterkapitel konnte nicht gefunden werden.
            </p>
            <Button onClick={onBack}>Zurück zur Übersicht</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Validate subchapter
  if (!uk || !uk.id) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 p-6">
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
              Ungültige Unterkapitel-Daten
            </h3>
            <p className="text-sm text-red-800 dark:text-red-400 mb-4">
              Die Unterkapitel-Daten konnten nicht geladen werden.
            </p>
            <Button onClick={onBack}>Zurück zur Übersicht</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // After early returns, uk is guaranteed non-null and uk.id is valid

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 relative">
      {/* Reading progress bar — fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-[200] h-0.5 bg-transparent pointer-events-none">
        <div
          className={`h-full transition-all duration-100 ${subjectProgressColors[kapitel.subject] || "bg-primary-600"}`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <StickyBackButton onClick={onBack} />

      {/* Top bar */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          {kapitel.title}
        </Button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-lg border border-transparent dark:border-white/10 cursor-pointer ${showNotes ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700" : "text-muted hover:bg-gray-100 dark:hover:bg-white/5"}`}
            title="Notizen"
          >
            <StickyNote className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleBookmarkChapter(uk.id)}
            className={`p-2 rounded-lg border border-transparent dark:border-white/10 cursor-pointer ${isBookmarked ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700" : "text-muted hover:bg-gray-100 dark:hover:bg-white/5"}`}
            title="Lesezeichen"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
          </button>
          <button
            onClick={() => setBridgeOpen(true)}
            className="p-2 rounded-lg border border-transparent dark:border-white/10 cursor-pointer text-muted hover:bg-primary-100 dark:hover:bg-white/5 hover:text-primary-600 dark:hover:text-primary-400"
            title="Verknüpfte Themen (Knowledge Bridge)"
          >
            <Network className="w-4 h-4" />
          </button>
          <button
            onClick={() => setHinterfragMode(!hinterfragMode)}
            className={`p-2 rounded-lg border border-transparent dark:border-white/10 cursor-pointer ${hinterfragMode ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300" : "text-muted hover:bg-gray-100 dark:hover:bg-white/5"}`}
            title="Hinterfrag-Modus: Kernsätze als Frage anzeigen, Antwort bei Klick/Hover (Active Recall)"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
          <button
            onClick={() => setProgressiveDisclosure(!progressiveDisclosure)}
            className={`p-2 rounded-lg border border-transparent dark:border-white/10 cursor-pointer ${progressiveDisclosure ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300" : "text-muted hover:bg-gray-100 dark:hover:bg-white/5"}`}
            title="Progressive Disclosure: Abschnitte nacheinander einblenden (Scroll oder Verstanden)"
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={() => setQuickReviewMode(!quickReviewMode)}
            className={`p-2 rounded-lg border border-transparent dark:border-white/10 cursor-pointer ${quickReviewMode ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300" : "text-muted hover:bg-gray-100 dark:hover:bg-white/5"}`}
            title="Quick Review: Nur Merksätze anzeigen (R)"
          >
            <Zap className="w-4 h-4" />
          </button>
          <QuickEdit data={uk} storageKey={uk.id} label="Unterkapitel bearbeiten (Dev)" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted">
          <span>
            Unterkapitel {unterkapitelIndex + 1} von {total}
          </span>
          <span>
            {completedCount}/{total} abgeschlossen
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`${subjectProgressColors[kapitel.subject] || "bg-primary-600"} h-2 rounded-full transition-all`}
            style={{ width: `${(completedCount / total) * 100}%` }}
          />
        </div>
      </div>

      <ContentErrorBoundary context={uk.id}>
        {/* Chapter number + title */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p
              className={`text-sm font-medium ${subjectTextColors[kapitel.subject] || "text-primary-700 dark:text-primary-400"}`}
            >
              {kapitel.title} — {unterkapitelIndex + 1}/{total}
            </p>
            <ChapterSRSBadge chapterId={kapitel.id} />
          </div>
          <div className="flex items-center gap-3 mt-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{uk.title}</h1>
            <span className="flex items-center gap-1 text-xs text-muted shrink-0">
              <Clock className="w-3 h-3" />~{readingTimeMin} min
            </span>
          </div>
        </div>

        {/* Notes panel */}
        {showNotes && (
          <Card className="border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-4 space-y-3">
              <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 flex items-center gap-2">
                <StickyNote className="w-4 h-4" />
                Meine Notizen
              </h3>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Notizen zu diesem Unterkapitel..."
                className="w-full h-24 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-muted outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 dark:focus:border-primary-400 resize-y"
              />
              <Button size="sm" onClick={() => setNote(uk.id, noteText)}>
                Speichern
              </Button>
            </CardContent>
          </Card>
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
                      className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed"
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
              <p className="text-sm text-muted text-center py-8">
                Keine Merksätze in den Sektionen vorhanden.
              </p>
            )}
          </div>
        ) : (
          /* Main content: im Fluss (relative), kein Overlap mit Header */
          <Card className="relative">
            <CardContent className={`relative ${kapitel?.enhancedFormatting ? "p-8" : "p-6"}`}>
              <ContentErrorBoundary context={`${kapitel?.id ?? "chapter"}-${uk?.id ?? "uk"}`}>
                <ContentVisualizer
                  uk={uk}
                  subject={kapitel?.subject ?? "biologie"}
                  chapterId={kapitel?.id}
                  enhancedFormatting={kapitel?.enhancedFormatting}
                  hinterfragMode={hinterfragMode}
                  progressiveDisclosure={progressiveDisclosure}
                />
              </ContentErrorBoundary>
            </CardContent>
          </Card>
        )}

        {/* Merksätze - collapsible when more than 3 */}
        {uk.merksätze && Array.isArray(uk.merksätze) && uk.merksätze.length > 0 && (
          <MerksätzeSection merksätze={uk.merksätze} />
        )}

        {/* Altfrage */}
        {uk.altfrage && (
          <Card className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold text-red-800 dark:text-red-300 flex items-center gap-2 mb-2">
                🎯 Altfragen-Klassiker
              </h3>
              <p className="text-sm font-medium text-red-900 dark:text-red-200 mb-2">
                {uk.altfrage.question}
              </p>
              <details className="group">
                <summary className="text-sm text-red-700 dark:text-red-400 cursor-pointer hover:underline">
                  Antwort anzeigen
                </summary>
                <p className="text-sm text-red-800 dark:text-red-300 mt-2 pl-4 border-l-2 border-red-300 dark:border-red-700">
                  {uk.altfrage.answer}
                </p>
              </details>
            </CardContent>
          </Card>
        )}

        {/* Klinischer Bezug */}
        {uk.klinischerBezug && <MerksatzBox text={uk.klinischerBezug} type="klinisch" />}

        {/* Optional additional notes – render only if present */}
        {uk.additionalNotes && uk.additionalNotes.trim() && (
          <Card className="border-slate-200 dark:border-slate-700">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                Zusatznotizen
              </h3>
              <div className="prose prose-sm prose-slate dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a: ({ href, title, children }) => {
                      if (href?.startsWith("/bms/") && href.length > 8 && title) {
                        return (
                          <SmartLink to={href} description={title}>
                            {children}
                          </SmartLink>
                        );
                      }
                      return (
                        <a href={href} title={title ?? undefined}>
                          {children}
                        </a>
                      );
                    },
                  }}
                >
                  {processTextForSmartLinks(uk.additionalNotes)}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Self-Test - Now includes questions extracted from content */}
        {selfTestBlock}

        {/* Gelesen-Markierung: triggert Fortschrittsbalken in der Sidebar */}
        <Card className="border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/40">
          <CardContent className="p-4 flex items-center gap-3">
            {isCompleted ? (
              <span className="flex items-center gap-2 text-sm font-medium text-green-700 dark:text-green-400">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                Bereits gelesen ✓
              </span>
            ) : (
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={() => completeChapter(uk.id)}
                  className="w-4 h-4 rounded border-2 border-slate-300 dark:border-white/20 text-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Als gelesen markieren
                </span>
              </label>
            )}
          </CardContent>
        </Card>

        {/* Navigation: Previous / Next (book-like, inkl. benachbarte Kapitel) */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button variant="outline" onClick={handlePrev} disabled={!canGoPrev}>
            <ArrowLeft className="w-4 h-4 mr-1" />
            {isFirst && onPrevChapter ? "Vorheriges Kapitel" : "Vorheriges Unterkapitel"}
          </Button>

          <Button onClick={handleNext}>
            {isLast && !onNextChapter ? "Kapitel abschließen" : "Nächstes Unterkapitel"}
            {(!isLast || onNextChapter) && <ArrowRight className="w-4 h-4 ml-1" />}
          </Button>
        </div>

        {/* Dev-only: Status-Overlay am Seitenende */}
        {(process.env.NODE_ENV === "development" || import.meta.env.DEV) && (
          <div className="mt-6 py-3 px-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
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
                className="ml-auto px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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
