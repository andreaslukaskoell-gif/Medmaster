import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analyticsTracker";

/** Auto-tracks page views on route changes. Mount once inside BrowserRouter. */
export function usePageTracking() {
  const { pathname } = useLocation();
  const prev = useRef("");

  useEffect(() => {
    if (pathname !== prev.current) {
      prev.current = pathname;
      trackPageView(pathname);
    }
  }, [pathname]);
}
