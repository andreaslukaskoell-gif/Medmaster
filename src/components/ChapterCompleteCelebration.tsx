import { useEffect, useRef, useState } from "react";
import { playStreak } from "@/lib/sounds";

type Props = {
  chapterTitle: string;
  subjectColor: string;
  xpEarned: number;
  onContinue: () => void;
};

// ── Confetti config ────────────────────────────────────────────────────────────

const CONFETTI_COUNT = 28;

const CELEBRATION_COLORS = [
  "#10b981", // emerald
  "#f59e0b", // amber
  "#3b82f6", // blue
  "#8b5cf6", // violet
  "#ec4899", // pink
  "#34d399", // emerald-light
  "#fbbf24", // amber-light
  "#60a5fa", // blue-light
];

const CONFETTI_PIECES = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
  color: CELEBRATION_COLORS[i % CELEBRATION_COLORS.length],
  left: 2 + Math.round((i / CONFETTI_COUNT) * 96), // 2–98% spread
  size: 5 + (i % 4) * 2, // 5 | 7 | 9 | 11 px
  delay: (i * 60) % 500, // 0–499ms stagger
  duration: 900 + (i % 5) * 120, // 900–1380ms
  rotation: (i * 53) % 360,
  drift: -30 + (i % 7) * 10, // horizontal drift –30…+30 px
}));

// ── Component ─────────────────────────────────────────────────────────────────

export function ChapterCompleteCelebration({
  chapterTitle,
  subjectColor,
  xpEarned,
  onContinue,
}: Props) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showFlash, setShowFlash] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger screen flash + confetti + sound on mount
    setShowFlash(true);
    setShowConfetti(true);
    setConfettiKey((k) => k + 1);
    playStreak();

    const flashTimer = setTimeout(() => setShowFlash(false), 200);
    const confettiTimer = setTimeout(() => setShowConfetti(false), 1600);

    timerRef.current = setTimeout(() => {
      onContinue();
    }, 5000);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(confettiTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onContinue]);

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fade-in-up">
      {/* Screen flash overlay */}
      {showFlash && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0"
          style={{
            zIndex: 510,
            backgroundColor: "rgba(255,255,255,0.10)",
            transition: "opacity 200ms ease-out",
          }}
        />
      )}

      {/* Confetti burst */}
      {showConfetti && (
        <div
          key={confettiKey}
          aria-hidden
          className="pointer-events-none fixed inset-0 overflow-hidden"
          style={{ zIndex: 509 }}
        >
          {CONFETTI_PIECES.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-sm animate-confetti-drop"
              style={
                {
                  left: `${p.left}%`,
                  top: "-12px",
                  width: p.size,
                  height: p.size * 1.6,
                  backgroundColor: p.color,
                  animationDuration: `${p.duration}ms`,
                  animationDelay: `${p.delay}ms`,
                  "--rot": `${p.rotation}deg`,
                  "--drift": `${p.drift}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      <div className="card-glass rounded-2xl p-10 max-w-md text-center" style={{ zIndex: 511 }}>
        {/* Animated checkmark */}
        <div className="flex justify-center mb-6">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke={subjectColor}
              strokeWidth="3"
              fill="none"
              className="animate-draw-circle"
            />
            <path
              d="M24 40 L35 51 L56 30"
              stroke={subjectColor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="animate-draw-check"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          Kapitel abgeschlossen!
        </h2>

        {/* Chapter title */}
        <p className="text-base font-medium mb-5" style={{ color: subjectColor }}>
          {chapterTitle}
        </p>

        {/* XP badge */}
        <div
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold mb-8"
          style={{
            color: subjectColor,
            background: `color-mix(in srgb, ${subjectColor} 10%, transparent)`,
            boxShadow: `0 0 16px color-mix(in srgb, ${subjectColor} 20%, transparent)`,
          }}
        >
          +{xpEarned} XP
        </div>

        {/* Continue button */}
        <div>
          <button
            onClick={onContinue}
            className="btn-premium w-full"
            style={{
              background: `linear-gradient(135deg, ${subjectColor}, color-mix(in srgb, ${subjectColor} 80%, white))`,
            }}
          >
            Weiter lernen
          </button>
        </div>
      </div>
    </div>
  );
}
