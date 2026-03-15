/**
 * Layout-specific premium shimmer skeletons.
 * Each skeleton mirrors the actual page structure so the transition from
 * skeleton → real content is smooth and predictable.
 *
 * All shimmer effects use the `.skeleton-shimmer` CSS class from index.css.
 */

import { cn } from "@/lib/utils";

// ── Shared primitive ──────────────────────────────────────────────────────────

function S({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div aria-hidden className={cn("skeleton-shimmer rounded-xl", className)} style={style} />;
}

// ── Dashboard skeleton ────────────────────────────────────────────────────────
/**
 * Mirrors Dashboard.tsx layout:
 *   1. Hero card (greeting + progress bar) — tall
 *   2. 2-col row: daily challenge card + streak card
 *   3. 4-col quick-access row
 *   4. 2-col activity row
 */
export function DashboardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("max-w-5xl mx-auto px-4 py-8 space-y-6", className)}
      role="status"
      aria-label="Dashboard wird geladen"
    >
      {/* Hero card */}
      <div className="card-glass p-8 space-y-4">
        {/* Greeting line */}
        <S className="h-10 w-72 rounded-lg" />
        {/* Sub-link */}
        <S className="h-5 w-40 rounded" />
        {/* Plan badge pills */}
        <div className="flex gap-2">
          <S className="h-7 w-28 rounded-lg" />
          <S className="h-7 w-24 rounded-lg" />
          <S className="h-7 w-20 rounded-lg" />
        </div>
        {/* Progress bar area */}
        <div className="pt-4 border-t border-[var(--border)] space-y-2">
          <div className="flex justify-between">
            <S className="h-4 w-32 rounded" />
            <S className="h-4 w-10 rounded" />
          </div>
          <S className="h-2.5 w-full rounded-full" />
        </div>
      </div>

      {/* 2-col row: daily + streak */}
      <div className="grid grid-cols-2 gap-4">
        <div className="card-glass p-5 flex items-center gap-4">
          <S className="w-10 h-10 rounded-xl shrink-0" />
          <div className="flex-1 space-y-2">
            <S className="h-4 w-40 rounded" />
            <S className="h-3 w-28 rounded" />
          </div>
          <S className="h-8 w-24 rounded-full shrink-0" />
        </div>
        <div className="card-glass p-5 flex items-center gap-4">
          <S className="w-12 h-12 rounded-xl shrink-0" />
          <div className="flex-1 space-y-2">
            <S className="h-8 w-12 rounded" />
            <S className="h-3 w-24 rounded" />
          </div>
        </div>
      </div>

      {/* 4-col quick-access row */}
      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card-glass p-4 flex items-center gap-2.5">
            <S className="w-4 h-4 rounded shrink-0" />
            <S className="h-4 flex-1 rounded" />
          </div>
        ))}
      </div>

      {/* 2-col activity row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="card-glass p-5 space-y-3">
          <div className="flex justify-between">
            <S className="h-4 w-32 rounded" />
            <S className="h-4 w-28 rounded" />
          </div>
          {/* Heatmap placeholder */}
          <div className="grid grid-cols-7 gap-1.5 mt-2">
            {Array.from({ length: 49 }).map((_, i) => (
              <S key={i} className="aspect-square rounded-sm" />
            ))}
          </div>
        </div>
        <div className="card-glass p-5 space-y-3">
          <S className="h-5 w-40 rounded" />
          <S className="h-4 w-full rounded" />
          <S className="h-4 w-5/6 rounded" />
          <div className="flex gap-2 mt-2">
            <S className="h-9 w-28 rounded-lg" />
            <S className="h-9 w-28 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── BMS skeleton ──────────────────────────────────────────────────────────────
/**
 * Mirrors BMSSubjectSelector layout:
 *   1. Centered hero text block with progress bar
 *   2. 2x2 grid of tall subject cards
 */
export function BMSSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("max-w-5xl mx-auto space-y-14 py-4 px-4", className)}
      role="status"
      aria-label="BMS wird geladen"
    >
      {/* Hero text block */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <S className="h-12 w-96 mx-auto rounded-lg" />
        <S className="h-6 w-48 mx-auto rounded" />
        <div className="mt-6 max-w-sm mx-auto space-y-2">
          <div className="flex justify-between">
            <S className="h-3 w-32 rounded" />
            <S className="h-3 w-8 rounded" />
          </div>
          <S className="h-2.5 w-full rounded-full" />
        </div>
      </div>

      {/* 2x2 subject card grid */}
      <div className="grid grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card-glass p-8 pb-6 space-y-5">
            {/* Icon + title row */}
            <div className="flex items-start gap-5">
              <S className="w-16 h-16 rounded-2xl shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <S className="h-7 w-32 rounded" />
                  <S className="h-6 w-20 rounded-lg shrink-0" />
                </div>
                <S className="h-4 w-full rounded" />
                <S className="h-4 w-4/5 rounded" />
              </div>
            </div>
            {/* Stats row */}
            <div className="flex gap-4">
              <S className="h-4 w-20 rounded" />
              <S className="h-4 w-24 rounded" />
              <S className="h-4 w-20 rounded" />
            </div>
            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <S className="h-3 w-20 rounded" />
                <S className="h-3 w-8 rounded" />
              </div>
              <S className="h-2 w-full rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Quiz skeleton ─────────────────────────────────────────────────────────────
/**
 * Mirrors quiz layout (FragenTrainer / BMS quiz):
 *   1. Progress bar at top
 *   2. Question number + difficulty badge
 *   3. Question text block (2-3 lines)
 *   4. 5 answer option buttons
 */
export function QuizSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("max-w-3xl mx-auto px-4 py-8 space-y-6", className)}
      role="status"
      aria-label="Frage wird geladen"
    >
      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between">
          <S className="h-3 w-20 rounded" />
          <S className="h-3 w-16 rounded" />
        </div>
        <S className="h-2 w-full rounded-full" />
      </div>

      {/* Question card */}
      <div className="card-glass p-6 space-y-5">
        {/* Question number + badge */}
        <div className="flex items-center gap-3">
          <S className="h-5 w-24 rounded" />
          <S className="h-6 w-14 rounded-full" />
        </div>

        {/* Question text */}
        <div className="space-y-2.5">
          <S className="h-5 w-full rounded" />
          <S className="h-5 w-5/6 rounded" />
          <S className="h-5 w-4/6 rounded" />
        </div>

        {/* 5 answer options */}
        <div className="space-y-3 pt-2">
          {["A", "B", "C", "D", "E"].map((letter) => (
            <div
              key={letter}
              className="card-glass border border-[var(--border)] rounded-xl p-4 flex items-center gap-4"
            >
              <S className="w-8 h-8 rounded-lg shrink-0" />
              <S
                className="h-4 flex-1 rounded"
                style={{ maxWidth: `${55 + Math.random() * 35}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Chapter skeleton ──────────────────────────────────────────────────────────
/**
 * Mirrors BMSUnterkapitel layout:
 *   Left: narrow sidebar TOC (240px)
 *   Right: main content with heading + text blocks + callout boxes
 */
export function ChapterSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex gap-8 max-w-6xl mx-auto px-4 py-8", className)}
      role="status"
      aria-label="Kapitel wird geladen"
    >
      {/* Left sidebar TOC */}
      <aside className="w-60 shrink-0 space-y-3 sticky top-8 self-start">
        <S className="h-5 w-32 rounded mb-4" />
        {[90, 75, 80, 65, 85, 70, 60].map((w, i) => (
          <S key={i} className="h-4 rounded" style={{ width: `${w}%` }} />
        ))}
        <div className="pt-4 space-y-2">
          <S className="h-9 w-full rounded-xl" />
          <S className="h-9 w-full rounded-xl" />
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 min-w-0 space-y-8">
        {/* Chapter title + breadcrumb */}
        <div className="space-y-2">
          <S className="h-4 w-48 rounded" />
          <S className="h-9 w-3/4 rounded-lg" />
        </div>

        {/* Content block 1 */}
        <section className="space-y-3">
          <S className="h-6 w-56 rounded-lg" />
          <S className="h-4 w-full rounded" />
          <S className="h-4 w-full rounded" />
          <S className="h-4 w-11/12 rounded" />
          <S className="h-4 w-5/6 rounded" />
        </section>

        {/* Diagram placeholder */}
        <S className="h-48 w-full rounded-xl" />

        {/* Callout box */}
        <div className="card-glass border-l-4 border-[var(--accent)]/40 p-5 space-y-2">
          <S className="h-4 w-16 rounded" />
          <S className="h-4 w-full rounded" />
          <S className="h-4 w-4/5 rounded" />
        </div>

        {/* Content block 2 */}
        <section className="space-y-3">
          <S className="h-6 w-48 rounded-lg" />
          <S className="h-4 w-full rounded" />
          <S className="h-4 w-full rounded" />
          <S className="h-4 w-3/4 rounded" />
          {/* Bullet list */}
          <div className="space-y-2 pl-4">
            {[85, 75, 90, 70].map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <S className="w-2 h-2 rounded-full shrink-0" />
                <S className="h-4 rounded" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </section>

        {/* Self-test placeholder */}
        <div className="card-glass p-6 space-y-4">
          <S className="h-5 w-40 rounded" />
          <S className="h-4 w-full rounded" />
          <S className="h-4 w-5/6 rounded" />
          <div className="grid grid-cols-1 gap-2 pt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <S key={i} className="h-11 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
