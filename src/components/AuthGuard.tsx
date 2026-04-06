import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function AuthGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const [timedOut, setTimedOut] = useState(false);

  // Give auth 6s to resolve before showing a retry option (not a redirect)
  useEffect(() => {
    if (!loading) {
      queueMicrotask(() => setTimedOut(false));
      return;
    }
    const timer = setTimeout(() => setTimedOut(true), 6000);
    return () => clearTimeout(timer);
  }, [loading]);

  // Development: skip auth check so protected pages are directly reachable.
  if (import.meta.env.DEV && !import.meta.env.PROD) {
    return <>{children}</>;
  }

  // Timed out but not authenticated — show retry instead of immediate redirect
  if (loading && timedOut) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-sm text-[var(--muted)]">Verbindung dauert länger als erwartet...</p>
        <button
          onClick={() => window.location.reload()}
          className="text-sm font-medium text-[var(--accent)] hover:underline"
        >
          Erneut versuchen
        </button>
      </div>
    );
  }

  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  // Render shell + content immediately — tier is cached in localStorage,
  // so premium users never see a paywall flash. Skeletons in individual
  // pages handle the content loading state.
  return <>{children}</>;
}
