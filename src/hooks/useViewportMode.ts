import { useState, useEffect } from "react";

type ViewportMode = "desktop" | "mobile";

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
  document.documentElement.classList.toggle("mobile-mode", mode === "mobile");
}

/** Auto-detect device — no manual override possible. */
function detectDevice(): ViewportMode {
  if (typeof window === "undefined") return "desktop";
  const isNarrow = window.screen.width < 768;
  const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  return isNarrow && hasTouch ? "mobile" : "desktop";
}

// Apply immediately on load (before React hydrates) to avoid flash
if (typeof document !== "undefined") {
  applyViewport(detectDevice());
}

export function useViewportMode() {
  const [mode] = useState<ViewportMode>(detectDevice);

  useEffect(() => {
    applyViewport(mode);
  }, [mode]);

  // toggle kept as no-op for backward compatibility (some components may reference it)
  const toggle = () => {};

  return { mode, toggle, isMobile: mode === "mobile" } as const;
}
