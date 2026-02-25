import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  size: number;
  borderRadius: string;
  duration: number;
}

export function Confetti({ active }: { active: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) {
      const t = setTimeout(() => setPieces([]), 0);
      return () => clearTimeout(t);
    }
    const colors = ["#0f766e", "#14b8a6", "#f59e0b", "#ef4444", "#8b5cf6", "#3b82f6", "#ec4899"];
    const newPieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      size: Math.random() * 8 + 4,
      borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      duration: 2 + Math.random(),
    }));
    const t = setTimeout(() => setPieces(newPieces), 0);
    const timer = setTimeout(() => setPieces([]), 3000);
    return () => {
      clearTimeout(t);
      clearTimeout(timer);
    };
  }, [active]);

  if (pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-100 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.borderRadius,
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}
