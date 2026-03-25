import { useState, useEffect, useCallback } from "react";

type ViewportMode = "desktop" | "mobile";

const STORAGE_KEY = "medmaster-viewport-mode";

function getViewportMeta(): HTMLMetaElement | null {
  return document.querySelector('meta[name="viewport"]');
}

function applyViewport(mode: ViewportMode) {
  const meta = getViewportMeta();
  if (!meta) return;
  meta.setAttribute(
    "content",
    mode === "desktop"
      ? "width=1280, initial-scale=0.35, user-scalable=yes"
      : "width=device-width, initial-scale=1.0"
  );
  // Toggle CSS class on <html> so components can use .mobile-mode selectors
  document.documentElement.classList.toggle("mobile-mode", mode === "mobile");
}

/** Detect if device is likely mobile based on screen width and touch support. */
function detectDevice(): ViewportMode {
  if (typeof window === "undefined") return "desktop";
  const isNarrow = window.screen.width < 768;
  const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  return isNarrow && hasTouch ? "mobile" : "desktop";
}

function loadMode(): ViewportMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "desktop" || stored === "mobile") return stored;
  } catch {
    // ignore
  }
  // No stored preference — auto-detect from device
  return detectDevice();
}

// Apply immediately on load (before React hydrates) to avoid flash
if (typeof document !== "undefined") {
  const initial = loadMode();
  applyViewport(initial);
}

export function useViewportMode() {
  const [mode, setMode] = useState<ViewportMode>(loadMode);

  useEffect(() => {
    applyViewport(mode);
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next = prev === "desktop" ? "mobile" : "desktop";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return { mode, toggle, isMobile: mode === "mobile" } as const;
}
