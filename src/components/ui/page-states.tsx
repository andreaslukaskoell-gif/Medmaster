import type { ReactNode } from "react";
import { AlertCircle, RefreshCw, WifiOff, SearchX, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";
import {
  DashboardSkeleton,
  BMSSkeleton,
  QuizSkeleton,
  ChapterSkeleton,
} from "@/components/ui/Skeletons";

type PageLoadingProps = {
  message?: string;
  className?: string;
};

type SkeletonVariant = "dashboard" | "bms" | "quiz" | "chapter" | "default";

export function PageLoading({ message = "Laden...", className }: PageLoadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-12 px-4 text-[var(--muted)]",
        className
      )}
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--accent)] border-t-transparent" />
      <p className="text-sm">{message}</p>
    </div>
  );
}

/**
 * Skeleton placeholder for page loading.
 * Pass `variant` to get a layout-accurate shimmer skeleton.
 * Defaults to the generic skeleton when no variant is specified.
 */
export function PageLoadingSkeleton({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: SkeletonVariant;
}) {
  if (variant === "dashboard") return <DashboardSkeleton className={className} />;
  if (variant === "bms") return <BMSSkeleton className={className} />;
  if (variant === "quiz") return <QuizSkeleton className={className} />;
  if (variant === "chapter") return <ChapterSkeleton className={className} />;

  // Default: generic card + line skeleton
  return (
    <div className={cn("space-y-4 py-6 px-4", className)} role="status" aria-label="Laden">
      <Skeleton className="h-8 w-48 rounded-lg" />
      <div className="grid gap-3 grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card-glass p-4">
            <Skeleton className="h-16 rounded-lg" />
          </div>
        ))}
      </div>
      <Skeleton className="h-6 w-32 rounded" />
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-4 rounded" style={{ width: `${60 + i * 10}%` }} />
        ))}
      </div>
    </div>
  );
}

type PageErrorProps = {
  message?: string;
  onRetry?: () => void;
  action?: ReactNode;
  className?: string;
  variant?: "error" | "offline" | "not-found" | "empty-search";
};

/** SVG illustration for error states — small, inline, no external dependencies */
function ErrorIllustration({ variant }: { variant: PageErrorProps["variant"] }) {
  const Icon =
    variant === "offline"
      ? WifiOff
      : variant === "not-found"
        ? FileQuestion
        : variant === "empty-search"
          ? SearchX
          : AlertCircle;
  const bgColor =
    variant === "offline"
      ? "bg-amber-50 dark:bg-amber-900/20"
      : variant === "not-found"
        ? "bg-blue-50 dark:bg-blue-900/20"
        : variant === "empty-search"
          ? "bg-violet-50 dark:bg-violet-900/20"
          : "bg-red-50 dark:bg-red-900/20";
  const iconColor =
    variant === "offline"
      ? "text-amber-500 dark:text-amber-400"
      : variant === "not-found"
        ? "text-blue-500 dark:text-blue-400"
        : variant === "empty-search"
          ? "text-violet-500 dark:text-violet-400"
          : "text-red-500 dark:text-red-400";

  return (
    <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center", bgColor)}>
      <Icon className={cn("h-10 w-10", iconColor)} />
    </div>
  );
}

const ERROR_TITLES: Record<string, string> = {
  error: "Etwas ist schiefgelaufen",
  offline: "Keine Verbindung",
  "not-found": "Seite nicht gefunden",
  "empty-search": "Nichts gefunden",
};

export function PageError({
  message = "Beim Laden ist ein Fehler aufgetreten.",
  onRetry,
  action,
  className,
  variant = "error",
}: PageErrorProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16 px-4 text-center",
        className
      )}
      role="alert"
    >
      <div className="card-glass p-8 max-w-md mx-auto flex flex-col items-center gap-5">
        <ErrorIllustration variant={variant} />
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            {ERROR_TITLES[variant] ?? ERROR_TITLES.error}
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{message}</p>
        </div>
        {action}
        {onRetry && (
          <Button variant="outline" onClick={onRetry} className="btn-glass gap-2">
            <RefreshCw className="h-4 w-4" />
            Erneut versuchen
          </Button>
        )}
      </div>
    </div>
  );
}

type PageEmptyProps = {
  message?: string;
  action?: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function PageEmpty({
  message = "Noch keine Daten.",
  action,
  icon,
  className,
}: PageEmptyProps) {
  // If custom icon or action ReactNode is provided, render legacy layout
  if (icon || action) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4 py-12 px-4 text-center text-[var(--muted)]",
          className
        )}
      >
        <div className="card-glass p-8 max-w-md mx-auto flex flex-col items-center gap-4">
          {icon}
          <p className="text-sm">{message}</p>
          {action}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("", className)}>
      <EmptyState icon="search" title="Nichts gefunden" description={message} />
    </div>
  );
}
