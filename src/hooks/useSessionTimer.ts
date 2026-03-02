import { useRef, useCallback } from "react";

/**
 * Einfacher Session-Timer: startet beim Mounten, gibt verstrichene Minuten zurück.
 * Aufruf: `const getMinutes = useSessionTimer();` → am Ende `getMinutes()`.
 */
export function useSessionTimer() {
  const startRef = useRef(Date.now());

  const getElapsedMinutes = useCallback((): number => {
    return Math.max(1, Math.round((Date.now() - startRef.current) / 60_000));
  }, []);

  return getElapsedMinutes;
}
