import { useState } from "react";

type Shell = "K" | "L" | "M" | "N";

const SHELL_DATA: Record<
  Shell,
  { max: number; energy: string; radius: number; color: string; electrons: number[] }
> = {
  K: {
    max: 2,
    energy: "n = 1 (niedrigste Energie)",
    radius: 50,
    color: "#ef4444",
    electrons: [0, 180],
  },
  L: {
    max: 8,
    energy: "n = 2",
    radius: 90,
    color: "#f97316",
    electrons: [0, 45, 90, 135, 180, 225, 270, 315],
  },
  M: {
    max: 18,
    energy: "n = 3",
    radius: 130,
    color: "#eab308",
    electrons: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340],
  },
  N: { max: 32, energy: "n = 4 (höchste Energie)", radius: 170, color: "#22c55e", electrons: [] },
};

export default function BohrModel() {
  const [selected, setSelected] = useState<Shell | null>(null);

  const cx = 200;
  const cy = 200;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Bohr'sches Atommodell — Elektronenschalen
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Klicke auf eine Schale, um Details zu Maximalbesetzung und Energieniveau zu sehen.
      </p>

      <svg role="img" viewBox="0 0 400 400" className="w-full max-w-sm mx-auto">
        <title>Bohr'sches Atommodell mit Elektronenschalen K, L, M, N</title>

        {/* Shells */}
        {(["N", "M", "L", "K"] as Shell[]).map((shell) => {
          const { radius, color } = SHELL_DATA[shell];
          const isSelected = selected === shell;
          return (
            <circle
              key={shell}
              cx={cx}
              cy={cy}
              r={radius}
              fill={isSelected ? `${color}22` : "none"}
              stroke={color}
              strokeWidth={isSelected ? 2.5 : 1.5}
              strokeDasharray={shell === "N" ? "6 4" : undefined}
              className="cursor-pointer transition-all"
              onClick={() => setSelected(selected === shell ? null : shell)}
            />
          );
        })}

        {/* Shell labels */}
        {(["K", "L", "M", "N"] as Shell[]).map((shell) => {
          const { radius, color } = SHELL_DATA[shell];
          return (
            <text
              key={`label-${shell}`}
              x={cx + radius - 10}
              y={cy - 6}
              fontSize="11"
              fontWeight="bold"
              fill={color}
              className="cursor-pointer select-none"
              onClick={() => setSelected(selected === shell ? null : shell)}
            >
              {shell}
            </text>
          );
        })}

        {/* Electrons on shells */}
        {(["K", "L", "M"] as Shell[]).map((shell) => {
          const { radius, color, electrons } = SHELL_DATA[shell];
          return electrons.map((angleDeg, i) => {
            const rad = (angleDeg * Math.PI) / 180;
            const ex = cx + radius * Math.cos(rad);
            const ey = cy + radius * Math.sin(rad);
            return (
              <circle
                key={`${shell}-e${i}`}
                cx={ex}
                cy={ey}
                r={4}
                fill={color}
                stroke="#fff"
                strokeWidth="0.8"
                opacity="0.85"
              />
            );
          });
        })}

        {/* N shell label for electrons */}
        <text x={cx} y={cy - 176} textAnchor="middle" fontSize="9" fill="#22c55e" opacity="0.8">
          max. 32 e⁻
        </text>

        {/* Nucleus */}
        <radialGradient id="nucleusGrad" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </radialGradient>
        <circle cx={cx} cy={cy} r={28} fill="url(#nucleusGrad)" stroke="#1d4ed8" strokeWidth="2" />
        <text x={cx} y={cy - 5} textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">
          Kern
        </text>
        <text x={cx} y={cy + 7} textAnchor="middle" fontSize="8" fill="#bfdbfe">
          p⁺ + n⁰
        </text>

        {/* Arrow labels for max electrons */}
        <text x="8" y="168" fontSize="9" fill="#ef4444" fontWeight="bold">
          K: max 2 e⁻
        </text>
        <text x="8" y="185" fontSize="9" fill="#f97316" fontWeight="bold">
          L: max 8 e⁻
        </text>
        <text x="8" y="202" fontSize="9" fill="#eab308" fontWeight="bold">
          M: max 18 e⁻
        </text>
        <text x="8" y="219" fontSize="9" fill="#22c55e" fontWeight="bold">
          N: max 32 e⁻
        </text>

        {/* Formula */}
        <text x={cx} y="392" textAnchor="middle" fontSize="10" fill="#6b7280">
          Max. e⁻ = 2n² (n = Hauptquantenzahl)
        </text>
      </svg>

      {selected && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-xs text-gray-700 dark:text-gray-300">
          <strong className="text-blue-700 dark:text-blue-300">Schale {selected}:</strong> Maximal{" "}
          <strong>{SHELL_DATA[selected].max} Elektronen</strong> — {SHELL_DATA[selected].energy}.
          {selected === "K" && " Die innerste Schale ist stets zuerst zu besetzen (Aufbauprinzip)."}
          {selected === "L" && " Valenzelektronen der 2. Periode (Li–Ne) befinden sich hier."}
          {selected === "M" && " Ab hier sind auch d-Orbitale möglich (Übergangsmetalle)."}
          {selected === "N" &&
            " Die äußerste Schale bestimmt die chemischen Eigenschaften des Elements."}
        </div>
      )}

      {!selected && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Im Bohr'schen Atommodell bewegen sich Elektronen auf festen Kreisbahnen (Schalen) um den
            Kern. Die Energie steigt mit zunehmendem Abstand. Formel: max. e⁻ = 2n².
          </p>
        </div>
      )}
    </div>
  );
}
