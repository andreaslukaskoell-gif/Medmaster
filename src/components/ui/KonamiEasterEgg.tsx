import { useEffect, useState } from "react";

// ── Confetti config ────────────────────────────────────────────────────────────

const CONFETTI_COUNT = 55;

const KONAMI_COLORS = [
  "#10b981", // emerald
  "#f59e0b", // amber
  "#3b82f6", // blue
  "#8b5cf6", // violet
  "#ec4899", // pink
  "#f97316", // orange
  "#34d399", // emerald-light
  "#fbbf24", // amber-light
  "#60a5fa", // blue-light
  "#a78bfa", // violet-light
];

const CONFETTI_PIECES = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
  color: KONAMI_COLORS[i % KONAMI_COLORS.length],
  left: 1 + Math.round((i / CONFETTI_COUNT) * 98), // 1–99% spread
  size: 5 + (i % 4) * 2, // 5 | 7 | 9 | 11 px
  delay: (i * 45) % 600, // 0–599ms stagger
  duration: 900 + (i % 6) * 130, // 900–1550ms
  rotation: (i * 71) % 360,
}));

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * Listens for the 'konami' CustomEvent, then shows a full-screen confetti
 * burst with a glass-card popup message. Auto-dismisses after 3 seconds.
 */
export function KonamiEasterEgg() {
  const [visible, setVisible] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    function handleKonami() {
      setVisible(true);
      setRenderKey((k) => k + 1);
    }

    window.addEventListener("konami", handleKonami);
    return () => {
      window.removeEventListener("konami", handleKonami);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, [visible, renderKey]);

  if (!visible) return null;

  return (
    <div
      key={renderKey}
      aria-live="polite"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 9000 }}
    >
      {/* Confetti burst */}
      {CONFETTI_PIECES.map((p, i) => (
        <span
          key={i}
          aria-hidden
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
            } as React.CSSProperties
          }
        />
      ))}

      {/* Center popup card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="card-glass px-10 py-8 text-center animate-fade-in-up"
          style={{ maxWidth: 420, zIndex: 9001 }}
        >
          <div className="text-5xl mb-4">🎉</div>
          <h2
            className="text-2xl font-bold"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Du hast den Geheimcode gefunden!
          </h2>
          <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
            ↑ ↑ ↓ ↓ ← → ← → B A
          </p>
        </div>
      </div>
    </div>
  );
}
