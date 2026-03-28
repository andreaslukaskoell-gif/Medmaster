import { useState } from "react";

type Force = "vdw" | "dipol" | "hbond";

const FORCE_INFO: Record<
  Force,
  { title: string; strength: string; energy: string; color: string; example: string; desc: string }
> = {
  vdw: {
    title: "Van-der-Waals (London)",
    strength: "Schwach",
    energy: "0,1–10 kJ/mol",
    color: "#6b7280",
    example: "CH₄, Edelgase, I₂",
    desc: "Temporäre Dipolmomente durch Elektronenfluktuation. Stärker bei größeren Molekülen (mehr Elektronen = stärkere Dispersion). Wechselwirkung zwischen allen Molekülen.",
  },
  dipol: {
    title: "Dipol-Dipol",
    strength: "Mittel",
    energy: "5–25 kJ/mol",
    color: "#3b82f6",
    example: "HCl, SO₂, Aceton",
    desc: "Anziehung zwischen dauerhaften Dipolen. Tritt auf bei polaren Molekülen (ΔEN > 0). Abhängig von Orientierung und Abstand der Dipole.",
  },
  hbond: {
    title: "Wasserstoffbrücken",
    strength: "Stark",
    energy: "10–40 kJ/mol",
    color: "#ef4444",
    example: "H₂O, HF, NH₃, DNA",
    desc: "Spezielle starke Dipol-Dipol-Wechselwirkung. Nur bei H gebunden an N, O oder F. Erklärt die anomalen Eigenschaften von Wasser (hoher Siedepunkt, Anomalie).",
  },
};

export default function IntermolecularForces() {
  const [selected, setSelected] = useState<Force | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Zwischenmolekulare Kräfte — Stärkenvergleich
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Klicke auf einen Krafttyp für Details. Reihenfolge: Van-der-Waals &lt; Dipol-Dipol &lt;
        Wasserstoffbrücken.
      </p>

      <svg role="img" viewBox="0 0 480 320" className="w-full max-w-lg mx-auto">
        <title>Zwischenmolekulare Kräfte: Van-der-Waals, Dipol-Dipol, Wasserstoffbrücken</title>

        {/* Strength bar chart */}
        <text x="240" y="22" textAnchor="middle" fontSize="12" fill="#0f766e" fontWeight="bold">
          Stärke der zwischenmolekularen Kräfte
        </text>

        {/* Y-axis */}
        <line x1="80" y1="40" x2="80" y2="190" stroke="#374151" strokeWidth="1.5" />
        <text
          x="40"
          y="115"
          textAnchor="middle"
          fontSize="9"
          fill="#6b7280"
          transform="rotate(-90, 40, 115)"
        >
          Energie (kJ/mol)
        </text>
        {[0, 10, 20, 30, 40].map((v, i) => (
          <g key={v}>
            <line
              x1="75"
              y1={190 - i * 37.5}
              x2="80"
              y2={190 - i * 37.5}
              stroke="#374151"
              strokeWidth="1"
            />
            <text x="70" y={193 - i * 37.5} textAnchor="end" fontSize="8" fill="#6b7280">
              {v}
            </text>
            <line
              x1="80"
              y1={190 - i * 37.5}
              x2="420"
              y2={190 - i * 37.5}
              stroke="#e5e7eb"
              strokeWidth="0.5"
              strokeDasharray="3 2"
            />
          </g>
        ))}

        {/* Bars */}
        {[
          { force: "vdw" as Force, x: 110, width: 80, maxH: 37.5, label: "Van-der-\nWaals" },
          { force: "dipol" as Force, x: 230, width: 80, maxH: 93.75, label: "Dipol-\nDipol" },
          { force: "hbond" as Force, x: 330, width: 80, maxH: 150, label: "H-\nBrücken" },
        ].map(({ force, x, width, maxH, label }) => {
          const { color } = FORCE_INFO[force];
          const isSelected = selected === force;
          return (
            <g
              key={force}
              className="cursor-pointer"
              onClick={() => setSelected(selected === force ? null : force)}
            >
              <rect
                x={x}
                y={190 - maxH}
                width={width}
                height={maxH}
                fill={isSelected ? color : `${color}88`}
                stroke={color}
                strokeWidth={isSelected ? 2 : 1}
                rx="4"
              />
              {label.split("\n").map((line, i) => (
                <text
                  key={i}
                  x={x + width / 2}
                  y={200 + i * 11}
                  textAnchor="middle"
                  fontSize="9"
                  fill={color}
                  fontWeight="bold"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        {/* Strength arrow */}
        <line x1="95" y1="220" x2="430" y2="220" stroke="#374151" strokeWidth="1.5" />
        <path d="M 425 216 L 433 220 L 425 224" fill="#374151" />
        <text x="260" y="235" textAnchor="middle" fontSize="9" fill="#374151" fontWeight="bold">
          zunehmende Stärke →
        </text>

        {/* Example molecules visualization */}
        {/* VdW: CH4 */}
        <g transform="translate(95, 245)">
          <circle cx="20" cy="15" r="12" fill="#6b728022" stroke="#6b7280" strokeWidth="1.5" />
          <text x="20" y="19" textAnchor="middle" fontSize="8" fill="#374151">
            CH₄
          </text>
          <circle cx="50" cy="15" r="12" fill="#6b728022" stroke="#6b7280" strokeWidth="1.5" />
          <text x="50" y="19" textAnchor="middle" fontSize="8" fill="#374151">
            CH₄
          </text>
          <line
            x1="32"
            y1="15"
            x2="38"
            y2="15"
            stroke="#6b7280"
            strokeWidth="0.8"
            strokeDasharray="2 1"
          />
          <text x="35" y="38" textAnchor="middle" fontSize="7" fill="#6b7280">
            VdW
          </text>
        </g>

        {/* Dipol: HCl */}
        <g transform="translate(215, 245)">
          <circle cx="15" cy="15" r="10" fill="#93c5fd44" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="15" y="19" textAnchor="middle" fontSize="7" fill="#1d4ed8">
            δ+ H
          </text>
          <circle cx="42" cy="15" r="13" fill="#93c5fd88" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="42" y="19" textAnchor="middle" fontSize="7" fill="#1d4ed8">
            Cl δ-
          </text>
          <circle cx="75" cy="15" r="10" fill="#93c5fd44" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="75" y="19" textAnchor="middle" fontSize="7" fill="#1d4ed8">
            δ+ H
          </text>
          <line
            x1="55"
            y1="15"
            x2="62"
            y2="15"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="2 1"
          />
          <text x="45" y="38" textAnchor="middle" fontSize="7" fill="#3b82f6">
            Dipol-Dipol
          </text>
        </g>

        {/* H-bond: H2O */}
        <g transform="translate(330, 245)">
          <circle cx="15" cy="20" r="12" fill="#fca5a544" stroke="#ef4444" strokeWidth="1.5" />
          <text x="15" y="24" textAnchor="middle" fontSize="7" fill="#dc2626">
            O
          </text>
          <circle cx="40" cy="10" r="8" fill="#bfdbfe44" stroke="#ef4444" strokeWidth="1" />
          <text x="40" y="14" textAnchor="middle" fontSize="6" fill="#dc2626">
            H
          </text>
          <circle cx="60" cy="20" r="8" fill="#bfdbfe44" stroke="#ef4444" strokeWidth="1" />
          <text x="60" y="24" textAnchor="middle" fontSize="6" fill="#dc2626">
            H
          </text>
          <line
            x1="48"
            y1="13"
            x2="60"
            y2="13"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          <text x="50" y="40" textAnchor="middle" fontSize="7" fill="#ef4444">
            H-Brücke
          </text>
        </g>
      </svg>

      {selected ? (
        <div
          className="rounded-lg p-3 border text-xs text-gray-700 dark:text-gray-300"
          style={{
            background: `${FORCE_INFO[selected].color}12`,
            borderColor: `${FORCE_INFO[selected].color}44`,
          }}
        >
          <div className="flex justify-between items-center mb-1">
            <strong style={{ color: FORCE_INFO[selected].color }}>
              {FORCE_INFO[selected].title}
            </strong>
            <span className="font-mono text-xs" style={{ color: FORCE_INFO[selected].color }}>
              {FORCE_INFO[selected].energy}
            </span>
          </div>
          <p>{FORCE_INFO[selected].desc}</p>
          <p className="mt-1">
            <strong>Beispiele:</strong> {FORCE_INFO[selected].example}
          </p>
        </div>
      ) : (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Zwischenmolekulare Kräfte bestimmen Siedepunkt, Löslichkeit und Viskosität. Je stärker
            die Kräfte, desto mehr Energie wird zum Trennen der Moleküle benötigt (höherer
            Siedepunkt).
          </p>
        </div>
      )}
    </div>
  );
}
