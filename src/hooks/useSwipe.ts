import { useRef, useCallback } from "react";

type SwipeHandlers = {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
};

/**
 * Lightweight horizontal swipe detection hook.
 * Returns touch handlers to attach to a container element.
 *
 * @param onSwipeLeft  — called on left swipe (→ next)
 * @param onSwipeRight — called on right swipe (← prev)
 * @param threshold    — minimum px to count as swipe (default: 60)
 */
export function useSwipe(
  onSwipeLeft: (() => void) | null,
  onSwipeRight: (() => void) | null,
  threshold = 60
): SwipeHandlers {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (startX.current === null || startY.current === null) return;
      const dx = e.changedTouches[0].clientX - startX.current;
      const dy = e.changedTouches[0].clientY - startY.current;
      startX.current = null;
      startY.current = null;

      // Ignore vertical scrolls (angle > 45°)
      if (Math.abs(dy) > Math.abs(dx)) return;
      if (Math.abs(dx) < threshold) return;

      if (dx < 0 && onSwipeLeft) onSwipeLeft();
      if (dx > 0 && onSwipeRight) onSwipeRight();
    },
    [onSwipeLeft, onSwipeRight, threshold]
  );

  return { onTouchStart, onTouchEnd };
}
