import { lazy, Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const LandingPage = lazy(() => import("@/pages/LandingPage"));

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Development: kein Redirect zur Login-Seite, geschützte Seiten (KFF, BMS) direkt erreichbar
  if (import.meta.env.DEV) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Show landing page at root, redirect to login for all other protected routes
    if (location.pathname === "/") {
      return (
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" />
            </div>
          }
        >
          <LandingPage />
        </Suspense>
      );
    }
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
