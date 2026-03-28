import { useState } from "react";

type Region = "solid" | "liquid" | "gas" | "triple" | "critical" | null;

const REGION_INFO: Record<NonNullable<Region>, { title: string; desc: string; color: string }> = {
  solid: {
    title: "Fester Zustand",
    desc: "Hoher Druck und/oder niedrige Temperatur. Geordnete Kristallstruktur. Teilchen schwingen um feste Gitterpositionen.",
    color: "#3b82f6",
  },
  liquid: {
    title: "Flüssiger Zustand",
    desc: "Mittlerer Druck- und Temperaturbereich. Teilchen beweglich, aber noch in engem Kontakt. Definiertes Volumen, keine feste Form.",
    color: "#22c55e",
  },
  gas: {
    title: "Gasförmiger Zustand",
    desc: "Hohe Temperatur und/oder niedriger Druck. Teilchen bewegen sich frei und unabhängig voneinander.",
    color: "#f97316",
  },
  triple: {
    title: "Tripelpunkt",
    desc: "Einziger Punkt, an dem alle drei Phasen (fest, flüssig, gasförmig) im Gleichgewicht koexistieren. Für Wasser: 0,006 atm, 0,01 °C.",
    color: "#8b5cf6",
  },
  critical: {
    title: "Kritischer Punkt",
    desc: "Oberhalb dieses Punktes existiert kein Unterschied zwischen flüssig und gasförmig: überkritisches Fluid. Für Wasser: 374 °C, 218 atm.",
    color: "#ef4444",
  },
};

export default function PhaseDiagram() {
  const [selected, setSelected] = useState<Region>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Phasendiagramm — p-T-Diagramm
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Klicke auf Bereiche oder Punkte für Details zu Tripelpunkt, kritischem Punkt und
        Phasenübergängen.
      </p>

      <svg role="img" viewBox="0 0 480 320" className="w-full max-w-lg mx-auto">
        <title>Allgemeines Phasendiagramm — Tripelpunkt, kritischer Punkt, Phasenübergänge</title>
        <defs>
          <marker id="phArrow" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <path d="M0,0 L7,2.5 L0,5" fill="#6b7280" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1="60"
          y1="260"
          x2="60"
          y2="30"
          stroke="#374151"
          strokeWidth="2"
          markerEnd="url(#phArrow)"
        />
        <line
          x1="60"
          y1="260"
          x2="430"
          y2="260"
          stroke="#374151"
          strokeWidth="2"
          markerEnd="url(#phArrow)"
        />
        <text x="240" y="285" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="bold">
          Temperatur T →
        </text>
        <text
          x="20"
          y="145"
          textAnchor="middle"
          fontSize="11"
          fill="#374151"
          fontWeight="bold"
          transform="rotate(-90, 20, 145)"
        >
          Druck p →
        </text>

        {/* Phase regions (clickable) */}
        {/* Solid region */}
        <path
          d="M 60 30 L 60 260 L 180 200 L 130 30 Z"
          fill={selected === "solid" ? "#3b82f622" : "#3b82f611"}
          stroke="none"
          className="cursor-pointer"
          onClick={() => setSelected(selected === "solid" ? null : "solid")}
        />
        <text
          x="100"
          y="160"
          textAnchor="middle"
          fontSize="12"
          fill="#3b82f6"
          fontWeight="bold"
          className="pointer-events-none"
        >
          FEST
        </text>

        {/* Liquid region */}
        <path
          d="M 180 200 L 60 260 L 280 260 L 310 180 Z"
          fill={selected === "liquid" ? "#22c55e22" : "#22c55e11"}
          stroke="none"
          className="cursor-pointer"
          onClick={() => setSelected(selected === "liquid" ? null : "liquid")}
        />
        <text
          x="200"
          y="240"
          textAnchor="middle"
          fontSize="12"
          fill="#22c55e"
          fontWeight="bold"
          className="pointer-events-none"
        >
          FLÜSSIG
        </text>

        {/* Gas region */}
        <path
          d="M 60 260 L 180 200 L 310 180 L 430 260 Z"
          fill={selected === "gas" ? "#f9731622" : "#f9731611"}
          stroke="none"
          className="cursor-pointer"
          onClick={() => setSelected(selected === "gas" ? null : "gas")}
        />
        <text
          x="330"
          y="240"
          textAnchor="middle"
          fontSize="12"
          fill="#f97316"
          fontWeight="bold"
          className="pointer-events-none"
        >
          GAS
        </text>

        {/* Phase boundary: Solid-Liquid (melting curve) */}
        <line x1="180" y1="200" x2="130" y2="30" stroke="#6b7280" strokeWidth="2" />
        <text x="140" y="120" fontSize="8" fill="#6b7280" transform="rotate(-70, 140, 120)">
          Schmelzkurve
        </text>

        {/* Phase boundary: Liquid-Gas (vapor pressure curve) */}
        <path d="M 180 200 Q 240 195 310 180" fill="none" stroke="#6b7280" strokeWidth="2" />
        <text x="240" y="195" textAnchor="middle" fontSize="8" fill="#6b7280">
          Dampfdruckkurve
        </text>

        {/* Phase boundary: Solid-Gas (sublimation curve) */}
        <line
          x1="180"
          y1="200"
          x2="60"
          y2="260"
          stroke="#6b7280"
          strokeWidth="2"
          strokeDasharray="5 3"
        />
        <text x="110" y="245" fontSize="8" fill="#6b7280">
          Sublimationskurve
        </text>

        {/* Triple point */}
        <circle
          cx="180"
          cy="200"
          r="9"
          fill={selected === "triple" ? "#8b5cf6" : "#8b5cf699"}
          stroke="#7c3aed"
          strokeWidth="2"
          className="cursor-pointer"
          onClick={() => setSelected(selected === "triple" ? null : "triple")}
        />
        <text x="155" y="190" fontSize="9" fill="#7c3aed" fontWeight="bold">
          Tripelpunkt
        </text>

        {/* Critical point */}
        <circle
          cx="310"
          cy="180"
          r="9"
          fill={selected === "critical" ? "#ef4444" : "#ef444499"}
          stroke="#dc2626"
          strokeWidth="2"
          className="cursor-pointer"
          onClick={() => setSelected(selected === "critical" ? null : "critical")}
        />
        <text x="318" y="175" fontSize="9" fill="#dc2626" fontWeight="bold">
          Krit. Punkt
        </text>

        {/* Supercritical region label */}
        <text x="390" y="130" textAnchor="middle" fontSize="9" fill="#6b7280" fontStyle="italic">
          Über-
        </text>
        <text x="390" y="143" textAnchor="middle" fontSize="9" fill="#6b7280" fontStyle="italic">
          kritisch
        </text>
        <path
          d="M 310 180 Q 360 140 420 120"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Phase transition labels */}
        <text x="72" y="222" fontSize="8" fill="#0d9488" fontWeight="bold">
          Schmelzen ↔
        </text>
        <text x="72" y="233" fontSize="8" fill="#0d9488">
          Erstarren
        </text>
        <text x="265" y="168" fontSize="8" fill="#0d9488" fontWeight="bold">
          Verdampfen ↔
        </text>
        <text x="265" y="179" fontSize="8" fill="#0d9488">
          Kondensieren
        </text>
      </svg>

      {selected ? (
        <div
          className="rounded-lg p-3 border text-xs text-gray-700 dark:text-gray-300"
          style={{
            background: `${REGION_INFO[selected].color}12`,
            borderColor: `${REGION_INFO[selected].color}44`,
          }}
        >
          <strong style={{ color: REGION_INFO[selected].color }}>
            {REGION_INFO[selected].title}:
          </strong>{" "}
          {REGION_INFO[selected].desc}
        </div>
      ) : (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Das Phasendiagramm zeigt, welcher Aggregatzustand bei gegebenem Druck und Temperatur
            stabil ist. Phasengrenzen markieren Gleichgewichtsbedingungen zwischen je zwei Phasen.
          </p>
        </div>
      )}
    </div>
  );
}
