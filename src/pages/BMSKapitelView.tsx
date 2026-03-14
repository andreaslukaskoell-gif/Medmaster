import { useState, useEffect } from "react";
import { ChevronLeft, CheckCircle2, ChevronRight, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useLocation } from "react-router-dom";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { pathForSubject, pathForChapter } from "@/lib/bmsRoutes";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { getKapitelById } from "@/data/bmsKapitel";
import BMSUnterkapitel from "./BMSUnterkapitel";

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

export default function BMSKapitelView({
  kapitel,
  initialUkIndex,
  onBack,
  chaptersInSubject = [],
  currentChapterIndex = 0,
  onGoToChapter,
}: Props) {
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
      {
        label: subjectLabels[kapitel.subject] ?? kapitel.subject,
        href: pathForSubject(kapitel.subject),
      },
      { label: kapitel.title, href: pathForChapter(kapitel.subject, kapitel.id) },
    ]);
  }, [kapitel, setBreadcrumbs]);

  // URL ?uk= or "Fortsetzen" resume
  useEffect(() => {
    if (
      initialUkIndex !== undefined &&
      Number.isFinite(initialUkIndex) &&
      kapitel?.unterkapitel?.length
    ) {
      const idx =
        initialUkIndex >= 0 && initialUkIndex < kapitel.unterkapitel.length ? initialUkIndex : null;
      const t = setTimeout(() => setActiveUKIndex(idx), 0);
      return () => clearTimeout(t);
    }
    const resumeId = useAdaptiveStore.getState().resumeToUnterkapitelId;
    if (!resumeId || !kapitel?.unterkapitel?.length) return;
    const idx = kapitel.unterkapitel.findIndex((u) => u?.id === resumeId);
    if (idx >= 0) {
      const t = setTimeout(() => {
        setActiveUKIndex(idx);
        useAdaptiveStore.getState().setResumeToUnterkapitelId(null);
      }, 0);
      return () => clearTimeout(t);
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

  const { completedChapters: storeCompleted } = useStore();
  const completedChapters = storeCompleted || [];

  // Defensive checks for chapter data
  if (!kapitel || !kapitel.id) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
          Ungültiges Kapitel
        </h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          Die Kapitel-Daten konnten nicht geladen werden.
        </p>
        <Button onClick={onBack}>Zurück zur Übersicht</Button>
      </div>
    );
  }

  const unterkapitel =
    kapitel.unterkapitel && Array.isArray(kapitel.unterkapitel) ? kapitel.unterkapitel : [];
  const completedUK = unterkapitel.filter(
    (u) => u && u.id && completedChapters.includes(u.id)
  ).length;
  const totalUK = unterkapitel.length;
  const isKapitelDone = completedChapters.includes(kapitel.id);

  const prevChapter = chaptersInSubject[currentChapterIndex - 1];
  const nextChapter = chaptersInSubject[currentChapterIndex + 1];
  const hasPrevChapter =
    prevChapter?.unterkapitel?.length != null && prevChapter.unterkapitel.length > 0;
  const hasNextChapter =
    nextChapter?.unterkapitel?.length != null && nextChapter.unterkapitel.length > 0;

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
          onGoToChapter && hasNextChapter ? () => onGoToChapter(nextChapter.id, 0) : undefined
        }
      />
    );
  }

  // Find first incomplete unterkapitel (defensive)
  const firstIncomplete = unterkapitel.findIndex(
    (u) => u && u.id && !completedChapters.includes(u.id)
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" onClick={onBack} className="text-[var(--muted)]">
        <ChevronLeft className="w-4 h-4 mr-1" />
        {subjectLabels[kapitel.subject]}
      </Button>

      {/* Chapter header */}
      <div>
        <p className="text-sm font-medium text-[var(--accent)] mb-1">
          {subjectLabels[kapitel.subject]}
        </p>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          {kapitel.title}
          {isKapitelDone && (
            <CheckCircle2 className="inline w-5 h-5 text-emerald-500 ml-2 -mt-0.5" />
          )}
        </h1>
        <div className="flex items-center gap-4 mt-2 text-sm text-[var(--muted)]">
          <span>{totalUK} Unterkapitel</span>
          <span>{kapitel.estimatedTime}</span>
          {completedUK > 0 && (
            <span className="text-[var(--accent)] font-medium">
              {completedUK}/{totalUK} abgeschlossen
            </span>
          )}
        </div>
        {totalUK > 0 && (
          <div className="w-full bg-[var(--border)] rounded-full h-1 mt-3">
            <div
              className="bg-[var(--accent)] h-1 rounded-full transition-all duration-300"
              style={{ width: `${(completedUK / totalUK) * 100}%` }}
            />
          </div>
        )}
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
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">Unterkapitel</h2>
        {unterkapitel.length === 0 ? (
          <p className="text-sm text-[var(--muted)] text-center py-8">
            Noch keine Unterkapitel vorhanden.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-0">
            {unterkapitel.map((uk, index) => {
              if (!uk || !uk.id) return null;
              const isDone = completedChapters.includes(uk.id);
              return (
                <button
                  key={uk.id}
                  className={`w-full text-left flex items-center gap-3 py-3 px-2 border-b border-[var(--border)]/60 last:border-b-0 hover:bg-[var(--surface)] transition-colors cursor-pointer rounded-sm ${isDone ? "opacity-60" : ""}`}
                  onClick={() => {
                    if (typeof sessionStorage !== "undefined") {
                      sessionStorage.setItem(
                        `${CHAPTER_SCROLL_KEY}:${kapitel.id}`,
                        String(window.scrollY)
                      );
                    }
                    setActiveUKIndex(index);
                  }}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <span className="w-4 h-4 shrink-0 flex items-center justify-center text-xs text-[var(--muted)] font-medium">
                      {index + 1}
                    </span>
                  )}
                  <span
                    className={`flex-1 min-w-0 text-sm font-medium ${isDone ? "text-[var(--muted)]" : "text-[var(--text-primary)]"}`}
                  >
                    {uk.title || "Untitled Subchapter"}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-[var(--muted)] shrink-0" />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Smart-Links to Related Chapters - Phase 4: STRUCT-05 */}
      {kapitel.linkedChapters &&
        kapitel.linkedChapters.length > 0 &&
        (() => {
          const linkedKapitelList = kapitel.linkedChapters
            .map((id) => getKapitelById(id))
            .filter((k): k is Kapitel => k !== undefined);

          if (linkedKapitelList.length === 0) return null;

          return (
            <div className="space-y-3 mt-8 pt-6 border-t border-[var(--border)]">
              <h3 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-[var(--accent)]" />
                Verwandte Kapitel
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {linkedKapitelList.map((linkedKap) => (
                  <button
                    key={linkedKap.id}
                    onClick={() => onGoToChapter?.(linkedKap.id, 0)}
                    className="text-left p-4 rounded-lg border-l-[3px] border-l-[var(--accent)] bg-[var(--surface)] hover:shadow-md transition-all duration-200"
                  >
                    <div className="font-medium text-[var(--text-primary)]">
                      {linkedKap.sequenceTitle || linkedKap.title}
                    </div>
                    <div className="text-sm text-[var(--muted)] mt-1">
                      {linkedKap.subject} • {linkedKap.estimatedTime}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })()}
    </div>
  );
}
