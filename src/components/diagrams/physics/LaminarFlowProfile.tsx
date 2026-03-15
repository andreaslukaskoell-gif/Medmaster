export default function LaminarFlowProfile() {
  // Generate parabolic velocity arrows
  const arrows: { y: number; len: number }[] = [];
  const centerY = 140;
  const R = 70;
  const steps = 9;
  for (let i = 0; i <= steps; i++) {
    const offset = (i / steps) * R;
    const vFraction = 1 - (offset / R) ** 2; // parabolic profile
    const len = Math.max(8, vFraction * 140);
    if (i === 0) {
      arrows.push({ y: centerY, len });
    } else {
      arrows.push({ y: centerY - offset, len });
      arrows.push({ y: centerY + offset, len });
    }
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Laminares Strömungsprofil
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Parabolisches Geschwindigkeitsprofil in einem zylindrischen Rohr (Hagen-Poiseuille).
      </p>

      <svg viewBox="0 0 500 300" className="w-full max-w-lg mx-auto">
        <title>Laminares Strömungsprofil — Hagen-Poiseuille-Gesetz</title>
        <defs>
          <marker id="arrowLF" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <path d="M0,0 L7,2.5 L0,5" fill="#2563eb" />
          </marker>
          <linearGradient id="tubeGradLF" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="50%" stopColor="#bfdbfe" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="250" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Laminares Strömungsprofil
        </text>

        {/* Tube walls */}
        <line x1="80" y1="70" x2="420" y2="70" stroke="#6b7280" strokeWidth="3" />
        <line x1="80" y1="210" x2="420" y2="210" stroke="#6b7280" strokeWidth="3" />

        {/* Tube fill */}
        <rect x="80" y="72" width="340" height="136" fill="url(#tubeGradLF)" />

        {/* Center line (dashed) */}
        <line
          x1="80"
          y1="140"
          x2="420"
          y2="140"
          stroke="#d1d5db"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        {/* Velocity arrows */}
        {arrows.map((a, i) => (
          <line
            key={i}
            x1="160"
            y1={a.y}
            x2={160 + a.len}
            y2={a.y}
            stroke="#2563eb"
            strokeWidth={a.y === centerY ? 2.5 : 1.5}
            markerEnd="url(#arrowLF)"
            opacity={0.5 + (a.len / 140) * 0.5}
          />
        ))}

        {/* Parabolic envelope */}
        <path
          d={`M160,70 Q${160 + 148},140 160,210`}
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeDasharray="5 3"
        />

        {/* v_max label */}
        <text x={160 + 150} y="136" fontSize="12" fill="#2563eb" fontWeight="bold">
          v_max
        </text>

        {/* v=0 labels at walls */}
        <text x="130" y="66" textAnchor="middle" fontSize="10" fill="#6b7280">
          v = 0
        </text>
        <text x="130" y="224" textAnchor="middle" fontSize="10" fill="#6b7280">
          v = 0
        </text>

        {/* Radius bracket */}
        <line x1="420" y1="140" x2="420" y2="70" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="415" y1="140" x2="425" y2="140" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="415" y1="70" x2="425" y2="70" stroke="#ef4444" strokeWidth="1.5" />
        <text x="438" y="108" textAnchor="middle" fontSize="14" fill="#ef4444" fontWeight="bold">
          R
        </text>

        {/* Wall labels */}
        <text x="440" y="73" fontSize="9" fill="#6b7280">
          Wand
        </text>
        <text x="440" y="214" fontSize="9" fill="#6b7280">
          Wand
        </text>

        {/* Formula box */}
        <rect
          x="100"
          y="240"
          width="300"
          height="45"
          rx="6"
          fill="#f0fdfa"
          stroke="#99f6e4"
          strokeWidth="1"
        />
        <text x="250" y="258" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Hagen-Poiseuille: Q ∝ r⁴
        </text>
        <text x="250" y="275" textAnchor="middle" fontSize="11" fill="#6b7280">
          Volumenstrom steigt mit der 4. Potenz des Radius
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Bei laminarer Strömung bildet sich ein parabolisches Geschwindigkeitsprofil: maximale
          Geschwindigkeit in der Rohrmitte, Stillstand an der Wand (Haftbedingung). Klinisch
          relevant: Eine Halbierung des Gefäßradius reduziert den Volumenstrom auf 1/16.
        </p>
      </div>
    </div>
  );
}
