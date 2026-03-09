import type { ReactNode } from "react";
import { AlertCircle, RefreshCw, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type PageLoadingProps = {
  message?: string;
  className?: string;
};

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

/** Skeleton placeholder for page loading (cards + lines). Use instead of spinner for BMS/KFF overview. */
export function PageLoadingSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4 py-6 px-4", className)} role="status" aria-label="Laden">
      <Skeleton className="h-8 w-48 rounded-lg" />
      <div className="grid gap-3 sm:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24 rounded-xl" />
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
};

export function PageError({
  message = "Beim Laden ist ein Fehler aufgetreten.",
  onRetry,
  action,
  className,
}: PageErrorProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12 px-4 text-center",
        className
      )}
      role="alert"
    >
      <div className="rounded-2xl bg-red-50 dark:bg-red-900/20 p-4">
        <AlertCircle className="h-8 w-8 text-red-500 dark:text-red-400" />
      </div>
      <p className="text-sm text-[var(--text-secondary)] max-w-md">{message}</p>
      {action}
      {onRetry && (
        <Button variant="outline" onClick={onRetry} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Erneut versuchen
        </Button>
      )}
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
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12 px-4 text-center text-[var(--muted)]",
        className
      )}
    >
      {icon ?? (
        <div className="rounded-2xl bg-[var(--border)]/50 p-4">
          <Inbox className="h-8 w-8 text-[var(--muted)]" />
        </div>
      )}
      <p className="text-sm max-w-md">{message}</p>
      {action}
    </div>
  );
}
