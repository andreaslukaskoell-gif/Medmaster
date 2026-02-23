import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));

export function DashboardOrRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const lastPath = useAdaptiveStore((s) => s.lastPath);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);
  const setResumeToUnterkapitelId = useAdaptiveStore((s) => s.setResumeToUnterkapitelId);

  useEffect(() => {
    if (location.pathname !== "/" || !lastPath || lastPath === "/") return;
    setResumeToUnterkapitelId(lastViewedUnterkapitelId);
    navigate(lastPath, { replace: true });
  }, [location.pathname, lastPath, lastViewedUnterkapitelId, setResumeToUnterkapitelId, navigate]);

  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-500" />
        </div>
      }
    >
      <Dashboard />
    </Suspense>
  );
}
