import { useRef, useCallback, useEffect } from "react";

/**
 * Einfacher Session-Timer: startet beim Mounten, gibt verstrichene Minuten zurück.
 * Aufruf: `const getMinutes = useSessionTimer();` → am Ende `getMinutes()`.
 */
export function useSessionTimer() {
  const startRef = useRef(0);

  useEffect(() => {
    startRef.current = Date.now();
  }, []);

  const getElapsedMinutes = useCallback((): number => {
    if (startRef.current === 0) return 1;
    return Math.max(1, Math.round((Date.now() - startRef.current) / 60_000));
  }, []);

  return getElapsedMinutes;
}
