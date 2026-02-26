import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationStore } from "@/store/navigationStore";

/**
 * Returns a function that navigates to the previous app page, or to "/" if there was none.
 * Use for all "Zurück" actions so back behavior is consistent across the app.
 */
export function useBack(): () => void {
  const navigate = useNavigate();
  const previousPath = useNavigationStore((s) => s.previousPath);

  return useCallback(() => {
    const target = previousPath && previousPath !== "" ? previousPath : "/";
    navigate(target);
  }, [navigate, previousPath]);
}
