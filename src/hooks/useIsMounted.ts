import { useState, useEffect } from "react";

/**
 * Gibt erst nach dem ersten Client-Mount true zurück.
 * Verhindert Hydration Mismatch / "Message port" Fehler, wenn Komponenten
 * store- oder window-abhängige Werte (z. B. XP, Leaderboard) anzeigen,
 * die auf dem Server anders sind als nach Rehydration.
 */
export function useIsMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);
  return mounted;
}
