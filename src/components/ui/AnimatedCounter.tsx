import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedCounter({
  value,
  duration = 800,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const [displayed, setDisplayed] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);
            setDisplayed(Math.round(eased * value));

            if (progress < 1) {
              rafRef.current = requestAnimationFrame(tick);
            } else {
              setDisplayed(value);
            }
          }

          rafRef.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [value, duration]);

  // Re-animate if value changes after first animation
  useEffect(() => {
    if (!hasAnimated.current) return;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    const start = performance.now();
    const from = displayed;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      setDisplayed(Math.round(from + eased * (value - from)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayed(value);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
    // Only run when value changes after mount — intentional dep
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const formatted = displayed.toLocaleString("de-AT");

  return (
    <span ref={containerRef} className={cn(className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
