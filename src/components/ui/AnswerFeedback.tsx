/**
 * AnswerFeedback — premium quiz feedback animations (CSS-only, no heavy JS).
 *
 * CorrectBurst  : emerald sparkle particles that scale out + fade on correct answer (600ms)
 * WrongShake   : red pulse overlay on the wrong option container (400ms)
 * StreakConfetti: mini coloured dots that fall when the player hits a 5-streak (1000ms)
 *
 * All animations use CSS keyframes defined in index.css.
 * Components unmount themselves after their animation completes via `onAnimationEnd`.
 */

import { useEffect, useState } from "react";

// ── Types ───────────────────────────────────────────────────────────────────

type CorrectBurstProps = {
  /** Trigger a new burst by incrementing this key */
  trigger: number;
};

type WrongShakeProps = {
  trigger: number;
};

type StreakConfettiProps = {
  trigger: number;
};

// ── CorrectBurst ─────────────────────────────────────────────────────────────

const BURST_PARTICLES = 10;

// Pre-compute particle positions so they are stable per render
const PARTICLE_CONFIGS = Array.from({ length: BURST_PARTICLES }, (_, i) => {
  const angle = (360 / BURST_PARTICLES) * i;
  const distance = 28 + (i % 3) * 10; // 28 | 38 | 48 px
  const size = 4 + (i % 3) * 2; // 4 | 6 | 8 px
  const delay = (i % 4) * 40; // 0–120ms stagger
  const rad = (angle * Math.PI) / 180;
  const tx = Math.round(Math.cos(rad) * distance);
  const ty = Math.round(Math.sin(rad) * distance);
  return { angle, size, delay, tx, ty };
});

/**
 * Renders a radial sparkle burst centred on the calling element.
 * Mount it inside a `position: relative` container.
 */
export function CorrectBurst({ trigger }: CorrectBurstProps) {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (trigger === 0) return;
    setVisible(true);
    setKey((k) => k + 1);
    const t = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(t);
  }, [trigger]);

  if (!visible) return null;

  return (
    <span
      key={key}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-visible"
      style={{ zIndex: 10 }}
    >
      {PARTICLE_CONFIGS.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-burst-particle"
          style={
            {
              width: p.size,
              height: p.size,
              top: "50%",
              left: "50%",
              marginTop: -p.size / 2,
              marginLeft: -p.size / 2,
              backgroundColor: i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#34d399" : "#6ee7b7",
              // CSS custom props drive the keyframe target position
              "--tx": `${p.tx}px`,
              "--ty": `${p.ty}px`,
              animationDelay: `${p.delay}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  );
}

// ── WrongShake ────────────────────────────────────────────────────────────────

/**
 * Briefly flashes a translucent red pulse overlay over its container.
 * Mount inside a `position: relative` container (the option button wrapper works).
 */
export function WrongShake({ trigger }: WrongShakeProps) {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (trigger === 0) return;
    setVisible(true);
    setKey((k) => k + 1);
    const t = setTimeout(() => setVisible(false), 450);
    return () => clearTimeout(t);
  }, [trigger]);

  if (!visible) return null;

  return (
    <span
      key={key}
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-lg animate-wrong-pulse"
      style={{ zIndex: 5, backgroundColor: "rgba(239,68,68,0)" }}
    />
  );
}

// ── StreakConfetti ────────────────────────────────────────────────────────────

const CONFETTI_COUNT = 18;

const CONFETTI_COLORS = [
  "#f59e0b", // amber
  "#10b981", // emerald
  "#3b82f6", // blue
  "#ec4899", // pink
  "#8b5cf6", // violet
  "#f97316", // orange
];

const CONFETTI_PIECES = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  left: 5 + Math.round((i / CONFETTI_COUNT) * 90), // 5–95% spread
  size: 5 + (i % 3) * 2, // 5 | 7 | 9 px
  delay: (i * 55) % 400, // 0–395ms
  duration: 800 + (i % 4) * 100, // 800–1100ms
  rotation: (i * 47) % 360,
}));

/**
 * Drops mini confetti from the top of the viewport when a 5-streak is reached.
 * Renders into a fixed overlay — safe to place anywhere in the tree.
 */
export function StreakConfetti({ trigger }: StreakConfettiProps) {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (trigger === 0) return;
    setVisible(true);
    setKey((k) => k + 1);
    const t = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(t);
  }, [trigger]);

  if (!visible) return null;

  return (
    <div
      key={key}
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 9999 }}
    >
      {CONFETTI_PIECES.map((p, i) => (
        <span
          key={i}
          className="absolute animate-confetti-drop rounded-sm"
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
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
