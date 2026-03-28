import { useState, useEffect, useRef } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ChevronLeft, ChevronRight, CheckCircle2, Clock, Play, ArrowRight } from "lucide-react";
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
  initialUkIndex?: number;
  onBack: () => void;
  chaptersInSubject?: Kapitel[];
  currentChapterIndex?: number;
  onGoToChapter?: (chapterId: string, ukIndex: number) => void;
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
  const [autoAnimateRef] = useAutoAnimate({ duration: 250 });

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

  const storeCompleted = useStore((s) => s.completedChapters);
  const completedChapters = storeCompleted || [];

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
  const progressPct = totalUK > 0 ? Math.round((completedUK / totalUK) * 100) : 0;

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

  const firstIncomplete = unterkapitel.findIndex(
    (u) => u && u.id && !completedChapters.includes(u.id)
  );

  const accentColor = subjectAccentVars[kapitel.subject] ?? "var(--accent)";

  const saveScrollAndOpen = (index: number) => {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(`${CHAPTER_SCROLL_KEY}:${kapitel.id}`, String(window.scrollY));
    }
    setActiveUKIndex(index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12 py-4">
      <Button variant="ghost" size="sm" onClick={onBack} className="text-[var(--muted)]">
        <ChevronLeft className="w-4 h-4 mr-1" />
        {subjectLabels[kapitel.subject]}
      </Button>

      {/* Chapter header — centered premium */}
      <div className="text-center hero-orbs">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-md"
            style={{
              color: accentColor,
              background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 12%, transparent), color-mix(in srgb, ${accentColor} 6%, transparent))`,
            }}
          >
            {subjectLabels[kapitel.subject]}
          </span>
          {isKapitelDone && (
            <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Abgeschlossen
            </span>
          )}
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
          {kapitel.title}
        </h1>
        <div className="flex items-center justify-center gap-5 text-sm text-[var(--muted)]">
          <span>{totalUK} Unterkapitel</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {kapitel.estimatedTime}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-1.5">
            <span>
              {completedUK} von {totalUK} abgeschlossen
            </span>
            <span
              className="font-medium"
              style={{ color: progressPct > 0 ? accentColor : undefined }}
            >
              {progressPct}%
            </span>
          </div>
          <div className="w-full bg-[var(--border)] rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: `${progressPct}%`,
                backgroundColor: accentColor,
              }}
            />
          </div>
        </div>
      </div>

      {/* Start / Continue button */}
      {!isKapitelDone && firstIncomplete >= 0 && (
        <Button
          onClick={() => saveScrollAndOpen(firstIncomplete)}
          className="gap-2"
          variant="premium"
          size="lg"
        >
          <Play className="w-4 h-4" />
          {completedUK === 0
            ? "Kapitel starten"
            : `Fortsetzen — ${unterkapitel[firstIncomplete]?.title}`}
        </Button>
      )}

      {/* Unterkapitel list */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Inhaltsverzeichnis
          </h2>
          <div className="flex-1 h-px bg-[var(--border)]/40" />
        </div>
        {unterkapitel.length === 0 ? (
          <p className="text-sm text-[var(--muted)] text-center py-8">
            Noch keine Unterkapitel vorhanden.
          </p>
        ) : (
          <div className="card-glass divide-y divide-[var(--border)]/30 overflow-hidden" ref={autoAnimateRef}>
            {unterkapitel.map((uk, index) => {
              if (!uk || !uk.id) return null;
              const isDone = completedChapters.includes(uk.id);
              const isCurrent = firstIncomplete === index;
              return (
                <button
                  key={uk.id}
                  className={`w-full text-left flex items-center gap-4 py-4 px-5 hover:bg-[var(--surface)] transition-colors cursor-pointer ${
                    isCurrent ? "bg-[var(--surface)]" : ""
                  }`}
                  onClick={() => saveScrollAndOpen(index)}
                >
                  {/* Status indicator */}
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  ) : (
                    <span
                      className={`w-6 h-6 shrink-0 flex items-center justify-center rounded-full text-xs font-semibold border-2 ${
                        isCurrent
                          ? "border-current text-[var(--text-primary)]"
                          : "border-[var(--border)] text-[var(--muted)]"
                      }`}
                      style={
                        isCurrent ? { borderColor: accentColor, color: accentColor } : undefined
                      }
                    >
                      {index + 1}
                    </span>
                  )}

                  {/* Title */}
                  <span
                    className={`flex-1 min-w-0 text-sm font-medium ${
                      isDone
                        ? "text-[var(--muted)]"
                        : isCurrent
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-primary)]"
                    }`}
                  >
                    {uk.title || "Untitled Subchapter"}
                  </span>

                  {/* Current indicator */}
                  {isCurrent && !isDone ? (
                    <ChevronRight className="w-5 h-5 shrink-0" style={{ color: accentColor }} />
                  ) : !isDone ? (
                    <ChevronRight className="w-4 h-4 text-[var(--muted)]/50 shrink-0" />
                  ) : null}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Related chapters */}
      {kapitel.linkedChapters &&
        kapitel.linkedChapters.length > 0 &&
        (() => {
          const linkedKapitelList = kapitel.linkedChapters
            .map((id) => getKapitelById(id))
            .filter((k): k is Kapitel => k !== undefined);

          if (linkedKapitelList.length === 0) return null;

          return (
            <div className="pt-6 border-t border-[var(--border)]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
                Verwandte Kapitel
              </h3>
              <div className="space-y-1">
                {linkedKapitelList.map((linkedKap) => (
                  <button
                    key={linkedKap.id}
                    onClick={() => onGoToChapter?.(linkedKap.id, 0)}
                    className="w-full text-left flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[var(--surface)] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--muted)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {linkedKap.sequenceTitle || linkedKap.title}
                    </span>
                    <span className="text-xs text-[var(--muted)] ml-auto shrink-0">
                      {linkedKap.estimatedTime}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })()}
    </div>
  );
}
