import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function AuthGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  // Development: skip auth check so protected pages are directly reachable
  if (import.meta.env.DEV) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[var(--accent)]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
