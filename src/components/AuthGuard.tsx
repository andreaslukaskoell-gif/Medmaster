import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function AuthGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const [timedOut, setTimedOut] = useState(false);

  // Development: skip auth check so protected pages are directly reachable
  if (import.meta.env.DEV && !import.meta.env.PROD) {
    return <>{children}</>;
  }

  // Give auth 6s to resolve before showing a retry option (not a redirect)
  useEffect(() => {
    if (!loading) {
      setTimedOut(false);
      return;
    }
    const timer = setTimeout(() => setTimedOut(true), 6000);
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading && !timedOut) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[var(--accent)]" />
      </div>
    );
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

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
