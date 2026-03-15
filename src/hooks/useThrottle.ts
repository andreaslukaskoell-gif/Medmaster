import { useState, useCallback, useRef } from "react";

/**
 * Client-side rate limiter for form submissions.
 * Prevents rapid-fire attempts (brute force, accidental double-clicks).
 *
 * @param maxAttempts  Maximum attempts within the window (default: 5)
 * @param windowMs    Time window in milliseconds (default: 60_000 = 1 minute)
 * @param cooldownMs  Cooldown after exceeding limit (default: 30_000 = 30 seconds)
 */
export function useThrottle(maxAttempts = 5, windowMs = 60_000, cooldownMs = 30_000) {
  const [blocked, setBlocked] = useState(false);
  const [remainingCooldown, setRemainingCooldown] = useState(0);
  const attempts = useRef<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const checkThrottle = useCallback((): boolean => {
    const now = Date.now();
    // Remove attempts outside the window
    attempts.current = attempts.current.filter((t) => now - t < windowMs);

    if (attempts.current.length >= maxAttempts) {
      setBlocked(true);
      setRemainingCooldown(Math.ceil(cooldownMs / 1000));

      // Countdown timer
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setRemainingCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setBlocked(false);
            attempts.current = [];
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return false; // blocked
    }

    attempts.current.push(now);
    return true; // allowed
  }, [maxAttempts, windowMs, cooldownMs]);

  return { blocked, remainingCooldown, checkThrottle };
}
