import { useState } from "react";

type Disturbance =
  | "none"
  | "add-reactant"
  | "remove-product"
  | "increase-pressure"
  | "increase-temp-exo"
  | "increase-temp-endo";

const DISTURBANCES: { id: Disturbance; label: string }[] = [
  { id: "none", label: "Gleichgewicht" },
  { id: "add-reactant", label: "+ Edukt" },
  { id: "remove-product", label: "− Produkt" },
  { id: "increase-pressure", label: "↑ Druck" },
  { id: "increase-temp-exo", label: "↑ T (exo)" },
  { id: "increase-temp-endo", label: "↑ T (endo)" },
];

const INFO: Record<Disturbance, { shift: "right" | "left" | "none"; text: string }> = {
  none: {
    shift: "none",
    text: "Gleichgewichtszustand: Hin- und Rückreaktion laufen mit gleicher Geschwindigkeit. Keine makroskopische Änderung der Konzentrationen.",
  },
  "add-reactant": {
    shift: "right",
    text: "Zugabe von Edukten: Gleichgewicht verschiebt sich nach rechts (→ Produktseite), um die Störung zu kompensieren. Mehr Edukte werden verbraucht.",
  },
  "remove-product": {
    shift: "right",
    text: "Entfernen von Produkten: Gleichgewicht verschiebt sich nach rechts (→). Die Hinreaktion wird begünstigt, um Produkte zu ersetzen. Technisch wichtig (z. B. Haber-Bosch: NH₃ abkühlen).",
  },
  "increase-pressure": {
    shift: "right",
    text: "Druckerhöhung (bei Gasen): Gleichgewicht verschiebt sich zur Seite mit weniger Gasteilchen (→ weniger mol Gas). Beispiel: N₂+3H₂→2NH₃ (4→2 mol) → Gleichgewicht nach rechts.",
  },
  "increase-temp-exo": {
    shift: "left",
    text: "Temperaturerhöhung (exotherme Reaktion): Gleichgewicht verschiebt sich nach links (←). Die endotherme Rückreaktion wird begünstigt, da sie Wärme aufnimmt und so der Störung entgegenwirkt. Kc sinkt.",
  },
  "increase-temp-endo": {
    shift: "right",
    text: "Temperaturerhöhung (endotherme Reaktion): Gleichgewicht verschiebt sich nach rechts (→). Die Hinreaktion nimmt Wärme auf → wird begünstigt. Kc steigt.",
  },
};

export default function LeChatelierPrinciple() {
  const [disturbance, setDisturbance] = useState<Disturbance>("none");

  const { shift, text } = INFO[disturbance];

  // Balance tilt
  const tiltAngle = shift === "right" ? 12 : shift === "left" ? -12 : 0;

  // Balance beam center
  const bx = 240;
  const by = 160;
  const beamLen = 160;

  const leftX = bx - beamLen / 2;
  const rightX = bx + beamLen / 2;

  const leftY = by + (Math.tan((tiltAngle * Math.PI) / 180) * beamLen) / 2;
  const rightY = by - (Math.tan((tiltAngle * Math.PI) / 180) * beamLen) / 2;

  // Pan positions depend on tilt
  const leftPanY = leftY + 30;
  const rightPanY = rightY + 30;

  const colorLeft = shift === "right" ? "#16a34a" : shift === "left" ? "#dc2626" : "#6b7280";
  const colorRight = shift === "left" ? "#16a34a" : shift === "right" ? "#dc2626" : "#6b7280";

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Le Chatelier'sches Prinzip
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Wenn ein Gleichgewicht gestört wird, verschiebt es sich so, dass der Störung entgegengewirkt
        wird.
      </p>

      <div className="flex gap-2 mb-2 flex-wrap">
        {DISTURBANCES.map((d) => (
          <button
            key={d.id}
            onClick={() => setDisturbance(d.id)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              disturbance === d.id
                ? "bg-emerald-600 text-white border-emerald-600"
                : "border-emerald-300 text-emerald-700 dark:text-emerald-300 dark:border-emerald-700"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <svg role="img" viewBox="0 0 480 280" className="w-full max-w-lg mx-auto">
        <title>Le Chatelier'sches Prinzip — Gleichgewichtsverschiebung</title>
        <defs>
          <marker id="arrLC" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#16a34a" />
          </marker>
          <marker id="arrLCL" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#dc2626" />
          </marker>
        </defs>

        {/* Reaction equation */}
        <text x="240" y="22" textAnchor="middle" fontSize="12" fill="#374151" fontWeight="bold">
          A + B ⇌ C + D
        </text>
        <text x="120" y="38" textAnchor="middle" fontSize="10" fill="#6b7280">
          Edukte
        </text>
        <text x="360" y="38" textAnchor="middle" fontSize="10" fill="#6b7280">
          Produkte
        </text>

        {/* Balance stand */}
        <line x1={bx} y1={by - 10} x2={bx} y2={by + 80} stroke="#374151" strokeWidth="3" />
        <ellipse cx={bx} cy={by + 85} rx="30" ry="8" fill="#374151" />

        {/* Triangle fulcrum */}
        <polygon points={`${bx},${by - 15} ${bx - 8},${by} ${bx + 8},${by}`} fill="#374151" />

        {/* Balance beam */}
        <line x1={leftX} y1={leftY} x2={rightX} y2={rightY} stroke="#374151" strokeWidth="3" />

        {/* Left pan (Edukte) */}
        <line x1={leftX} y1={leftY} x2={leftX} y2={leftPanY} stroke="#6b7280" strokeWidth="1.5" />
        <line
          x1={leftX - 35}
          y1={leftPanY}
          x2={leftX + 35}
          y2={leftPanY}
          stroke={colorLeft}
          strokeWidth="2.5"
        />

        {/* Right pan (Produkte) */}
        <line
          x1={rightX}
          y1={rightY}
          x2={rightX}
          y2={rightPanY}
          stroke="#6b7280"
          strokeWidth="1.5"
        />
        <line
          x1={rightX - 35}
          y1={rightPanY}
          x2={rightX + 35}
          y2={rightPanY}
          stroke={colorRight}
          strokeWidth="2.5"
        />

        {/* Left pan label */}
        <text
          x={leftX}
          y={leftPanY + 18}
          textAnchor="middle"
          fontSize="11"
          fill={colorLeft}
          fontWeight="bold"
        >
          A + B
        </text>

        {/* Right pan label */}
        <text
          x={rightX}
          y={rightPanY + 18}
          textAnchor="middle"
          fontSize="11"
          fill={colorRight}
          fontWeight="bold"
        >
          C + D
        </text>

        {/* Shift arrows */}
        {shift === "right" && (
          <>
            <path
              d="M195,62 L280,62"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2.5"
              markerEnd="url(#arrLC)"
            />
            <text x="240" y="57" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">
              → Verschiebung nach rechts
            </text>
          </>
        )}
        {shift === "left" && (
          <>
            <path
              d="M285,62 L200,62"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2.5"
              markerEnd="url(#arrLCL)"
            />
            <text x="240" y="57" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">
              ← Verschiebung nach links
            </text>
          </>
        )}
        {shift === "none" && (
          <text x="240" y="57" textAnchor="middle" fontSize="10" fill="#6b7280">
            Gleichgewicht — keine Verschiebung
          </text>
        )}

        {/* Disturbance indicator */}
        {disturbance === "add-reactant" && (
          <>
            <circle
              cx={leftX - 10}
              cy={leftPanY - 18}
              r="8"
              fill="#f59e0b"
              stroke="#d97706"
              strokeWidth="1"
            />
            <text
              x={leftX - 10}
              y={leftPanY - 14}
              textAnchor="middle"
              fontSize="7"
              fill="#fff"
              fontWeight="bold"
            >
              +A
            </text>
          </>
        )}
        {disturbance === "remove-product" && (
          <>
            <line
              x1={rightX - 5}
              y1={rightPanY - 22}
              x2={rightX + 5}
              y2={rightPanY - 12}
              stroke="#dc2626"
              strokeWidth="2"
            />
            <line
              x1={rightX + 5}
              y1={rightPanY - 22}
              x2={rightX - 5}
              y2={rightPanY - 12}
              stroke="#dc2626"
              strokeWidth="2"
            />
          </>
        )}
        {disturbance === "increase-pressure" && (
          <>
            <text x={bx} y="90" textAnchor="middle" fontSize="22" fill="#7c3aed">
              ⬇
            </text>
            <text x={bx} y="108" textAnchor="middle" fontSize="10" fill="#7c3aed" fontWeight="bold">
              ↑ Druck
            </text>
          </>
        )}
        {(disturbance === "increase-temp-exo" || disturbance === "increase-temp-endo") && (
          <>
            <text x={bx} y="90" textAnchor="middle" fontSize="20" fill="#f97316">
              🌡️
            </text>
            <text x={bx} y="108" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="bold">
              ↑ Temperatur
            </text>
          </>
        )}

        {/* Le Chatelier principle text box */}
        <rect
          x="60"
          y="220"
          width="360"
          height="44"
          rx="6"
          fill="#f0fdf4"
          stroke="#16a34a"
          strokeWidth="1.2"
        />
        <text x="240" y="237" textAnchor="middle" fontSize="9" fill="#15803d" fontWeight="bold">
          Prinzip von Le Chatelier
        </text>
        <text x="240" y="252" textAnchor="middle" fontSize="8.5" fill="#166534">
          Das System weicht einer Störung aus und stellt
        </text>
        <text x="240" y="263" textAnchor="middle" fontSize="8.5" fill="#166534">
          ein neues Gleichgewicht ein.
        </text>
      </svg>

      <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">{text}</p>
      </div>
    </div>
  );
}
