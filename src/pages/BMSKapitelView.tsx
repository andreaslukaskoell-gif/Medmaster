import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, CheckCircle2, Clock, BookOpen, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useLocation } from "react-router-dom";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { pathForSubject, pathForChapter } from "@/lib/bmsRoutes";
import type { Kapitel } from "@/data/bmsKapitel/types";
import BMSUnterkapitel from "./BMSUnterkapitel";
import { ChapterSRSBadge } from "@/components/chapter/ChapterSRSBadge";

interface Props {
  kapitel: Kapitel;
  /** When set (e.g. from ?uk=0), open this Unterkapitel directly. */
  initialUkIndex?: number;
  onBack: () => void;
  /** All chapters in current subject (for prev/next chapter navigation). */
  chaptersInSubject?: Kapitel[];
  /** Index of current chapter in chaptersInSubject. */
  currentChapterIndex?: number;
  /** Navigate to another chapter's unterkapitel (for book-like next/prev). */
  onGoToChapter?: (chapterId: string, ukIndex: number) => void;
}

const subjectLabels: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

const CHAPTER_SCROLL_KEY = "bms-chapter-scroll";

const subjectColors: Record<string, { progress: string; text: string; badge: string; border: string }> = {
  biologie: { progress: "bg-emerald-500", text: "text-emerald-700 dark:text-emerald-400", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400", border: "border-l-emerald-500" },
  chemie: { progress: "bg-red-500", text: "text-red-700 dark:text-red-400", badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400", border: "border-l-red-500" },
  physik: { progress: "bg-blue-500", text: "text-blue-700 dark:text-blue-400", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", border: "border-l-blue-500" },
  mathematik: { progress: "bg-violet-500", text: "text-violet-700 dark:text-violet-400", badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400", border: "border-l-violet-500" },
};

export default function BMSKapitelView({ kapitel, initialUkIndex, onBack, chaptersInSubject = [], currentChapterIndex = 0, onGoToChapter }: Props) {
  const location = useLocation();
  const [activeUKIndex, setActiveUKIndex] = useState<number | null>(initialUkIndex ?? null);
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    if (location.pathname) useAdaptiveStore.getState().setLastPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setBreadcrumbs([
      { label: "Dashboard", href: "/" },
      { label: "BMS", href: "/bms" },
      { label: subjectLabels[kapitel.subject] ?? kapitel.subject, href: pathForSubject(kapitel.subject) },
      { label: kapitel.title, href: pathForChapter(kapitel.subject, kapitel.id) },
    ]);
  }, [kapitel, setBreadcrumbs]);

  // URL ?uk= or "Fortsetzen" resume
  useEffect(() => {
    if (initialUkIndex !== undefined && Number.isFinite(initialUkIndex) && kapitel?.unterkapitel?.length) {
      const idx = initialUkIndex >= 0 && initialUkIndex < kapitel.unterkapitel.length ? initialUkIndex : null;
      setActiveUKIndex(idx);
      return;
    }
    const resumeId = useAdaptiveStore.getState().resumeToUnterkapitelId;
    if (!resumeId || !kapitel?.unterkapitel?.length) return;
    const idx = kapitel.unterkapitel.findIndex((u) => u?.id === resumeId);
    if (idx >= 0) {
      setActiveUKIndex(idx);
      useAdaptiveStore.getState().setResumeToUnterkapitelId(null);
    }
  }, [kapitel?.id, kapitel?.unterkapitel, initialUkIndex]);

  // Scroll restoration: when returning from Unterkapitel, restore list scroll position
  useEffect(() => {
    if (activeUKIndex !== null || !kapitel?.id) return;
    const key = `${CHAPTER_SCROLL_KEY}:${kapitel.id}`;
    const raw = typeof sessionStorage !== "undefined" ? sessionStorage.getItem(key) : null;
    if (raw == null) return;
    const y = parseInt(raw, 10);
    if (!Number.isFinite(y) || y <= 0) return;
    const id = requestAnimationFrame(() => window.scrollTo(0, y));
    return () => cancelAnimationFrame(id);
  }, [activeUKIndex, kapitel?.id]);

  // Safe store access with fallback
  let completedChapters: string[] = [];
  try {
    const store = useStore();
    completedChapters = store.completedChapters || [];
  } catch (e) {
    console.error('Error accessing store:', e);
  }

  // Defensive checks for chapter data
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
            <Button onClick={onBack}>
              Zurück zur Übersicht
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const unterkapitel = (kapitel.unterkapitel && Array.isArray(kapitel.unterkapitel)) ? kapitel.unterkapitel : [];
  const completedUK = unterkapitel.filter((u) => u && u.id && completedChapters.includes(u.id)).length;
  const totalUK = unterkapitel.length;
  const isKapitelDone = completedChapters.includes(kapitel.id);

  const prevChapter = chaptersInSubject[currentChapterIndex - 1];
  const nextChapter = chaptersInSubject[currentChapterIndex + 1];
  const hasPrevChapter = prevChapter?.unterkapitel?.length != null && prevChapter.unterkapitel.length > 0;
  const hasNextChapter = nextChapter?.unterkapitel?.length != null && nextChapter.unterkapitel.length > 0;

  if (activeUKIndex !== null) {
    return (
      <BMSUnterkapitel
        kapitel={kapitel}
        unterkapitelIndex={activeUKIndex}
        onBack={() => setActiveUKIndex(null)}
        onNavigate={(idx) => setActiveUKIndex(idx)}
        onPrevChapter={
          onGoToChapter && hasPrevChapter
            ? () => onGoToChapter(prevChapter.id, prevChapter.unterkapitel!.length - 1)
            : undefined
        }
        onNextChapter={
          onGoToChapter && hasNextChapter
            ? () => onGoToChapter(nextChapter.id, 0)
            : undefined
        }
      />
    );
  }

  // Find first incomplete unterkapitel (defensive)
  const firstIncomplete = unterkapitel.findIndex(
    (u) => u && u.id && !completedChapters.includes(u.id)
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <BreadcrumbNav items={[
        { label: "Dashboard", href: "/" },
        { label: "BMS", href: "/bms" },
        { label: subjectLabels[kapitel.subject], href: "#" },
        { label: kapitel.title },
      ]} />

      <Button variant="ghost" size="sm" onClick={onBack}>
        <ChevronLeft className="w-4 h-4 mr-1" />
        Zurück zur Übersicht
      </Button>

      {/* Chapter header */}
      <div className="flex items-start gap-4">
        <div className="text-4xl">{kapitel.icon}</div>
        <div className="flex-1">
          <p className={`text-sm font-medium ${subjectColors[kapitel.subject]?.text || "text-primary-700 dark:text-primary-400"}`}>
            {subjectLabels[kapitel.subject]}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold text-midnight dark:text-slate-100">
              {kapitel.title}
            </h1>
            <ChapterSRSBadge chapterId={kapitel.id} />
          </div>
          <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {totalUK} Unterkapitel
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {kapitel.estimatedTime}
            </span>
          </div>
        </div>
        {isKapitelDone && (
          <Badge variant="success" className="shrink-0">Abgeschlossen</Badge>
        )}
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500 dark:text-slate-400">Fortschritt</span>
          <span className="font-medium text-primary-500">
            {completedUK}/{totalUK} Unterkapitel
          </span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
          <div
            className="bg-primary-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${totalUK > 0 ? (completedUK / totalUK) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Start / Continue button */}
      {!isKapitelDone && firstIncomplete >= 0 && (
        <Button
          className="w-full"
          size="lg"
          onClick={() => {
            if (typeof sessionStorage !== "undefined") {
              sessionStorage.setItem(`${CHAPTER_SCROLL_KEY}:${kapitel.id}`, String(window.scrollY));
            }
            setActiveUKIndex(firstIncomplete);
          }}
        >
          <Play className="w-4 h-4 mr-2" />
          {completedUK === 0 ? "Kapitel starten" : "Fortsetzen"}
        </Button>
      )}

      {/* Unterkapitel list */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-midnight dark:text-slate-100">
          Unterkapitel
        </h2>
        {unterkapitel.length === 0 ? (
          <Card className={`border-l-4 ${subjectColors[kapitel.subject]?.border || ""}`}>
            <CardContent className="p-6 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Noch keine Unterkapitel vorhanden.
              </p>
            </CardContent>
          </Card>
        ) : (
          unterkapitel.map((uk, index) => {
            if (!uk || !uk.id) return null; // Skip invalid subchapters
            const isDone = completedChapters.includes(uk.id);
            const selfTestCount = (uk.selfTest && Array.isArray(uk.selfTest)) ? uk.selfTest.length : 0;
            return (
              <motion.div
                key={uk.id}
                initial={false}
                animate={isDone ? { opacity: 1 } : {}}
                transition={{ duration: 0.25 }}
              >
                <Card
                  className={`hover:shadow-md transition-shadow cursor-pointer border-l-4 ${subjectColors[kapitel.subject]?.border || ""} ${isDone ? "bg-slate-50/80 dark:bg-slate-900/30" : ""}`}
                  onClick={() => {
                    if (typeof sessionStorage !== "undefined") {
                      sessionStorage.setItem(`${CHAPTER_SCROLL_KEY}:${kapitel.id}`, String(window.scrollY));
                    }
                    setActiveUKIndex(index);
                  }}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    {isDone ? (
                      <motion.span
                        initial={{ scale: 0.5, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="shrink-0"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </motion.span>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600 shrink-0 flex items-center justify-center text-xs text-slate-500 font-medium">
                        {index + 1}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-medium text-sm relative inline-block ${isDone ? "text-slate-500 dark:text-slate-400" : "text-midnight dark:text-slate-100"}`}>
                        <span className="relative z-1">{uk.title || "Untitled Subchapter"}</span>
                        {isDone && (
                          <span
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-green-500/80 dark:bg-green-400/80 w-full strikethrough-line pointer-events-none"
                            aria-hidden
                          />
                        )}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {selfTestCount} Selbsttest-Fragen
                        {uk.altfrage && " · Altfrage"}
                        {uk.klinischerBezug && " · Klinischer Bezug"}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
