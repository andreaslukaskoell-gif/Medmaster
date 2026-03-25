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
}

function loadMode(): ViewportMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "desktop" || stored === "mobile") return stored;
  } catch {
    // ignore
  }
  return "desktop";
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

  return { mode, toggle } as const;
}
