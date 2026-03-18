import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
};

export function ScrollReveal({
  children,
  delay = 0,
  threshold,
  rootMargin,
  once,
  className,
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal({ threshold, rootMargin, once });
  const willChangeCleared = useRef(false);
  const innerRef = useRef<HTMLDivElement | null>(null);

  // Remove will-change after the animation completes to free GPU layer
  useEffect(() => {
    if (!isVisible || willChangeCleared.current) return;
    const duration = 400 + delay;
    const timer = setTimeout(() => {
      if (innerRef.current) {
        innerRef.current.style.willChange = "auto";
      }
      willChangeCleared.current = true;
    }, duration + 50);
    return () => clearTimeout(timer);
  }, [isVisible, delay]);

  return (
    <div
      ref={(node) => {
        // Assign to both refs
        // eslint-disable-next-line react-hooks/immutability
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        innerRef.current = node;
      }}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.4s ease-out ${delay}ms, transform 0.4s ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
