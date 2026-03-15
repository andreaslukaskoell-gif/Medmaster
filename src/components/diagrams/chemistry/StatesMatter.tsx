import { useState } from "react";

type State = "solid" | "liquid" | "gas";

const STATE_INFO: Record<State, { label: string; color: string; desc: string }> = {
  solid: {
    label: "Fest",
    color: "#3b82f6",
    desc: "Teilchen in fester, geordneter Gitterstruktur. Geringe Abstände, starke Bindungskräfte. Definiertes Volumen und Form.",
  },
  liquid: {
    label: "Flüssig",
    color: "#22c55e",
    desc: "Teilchen beweglich, aber noch eng beieinander. Variables Volumen nicht vorhanden – definiertes Volumen, aber keine feste Form.",
  },
  gas: {
    label: "Gasförmig",
    color: "#f97316",
    desc: "Teilchen weit voneinander entfernt, bewegen sich schnell und ungeordnet. Kein definiertes Volumen oder Form.",
  },
};

export default function StatesMatter() {
  const [selected, setSelected] = useState<State | null>(null);

  // Particle positions for each state
  const solidParticles = [
    [60, 55],
    [100, 55],
    [140, 55],
    [60, 85],
    [100, 85],
    [140, 85],
    [60, 115],
    [100, 115],
    [140, 115],
    [60, 145],
    [100, 145],
    [140, 145],
  ];
  const liquidParticles = [
    [58, 60],
    [98, 52],
    [138, 62],
    [65, 90],
    [105, 85],
    [142, 92],
    [55, 118],
    [95, 115],
    [140, 120],
    [68, 148],
    [102, 143],
    [138, 150],
  ];
  const gasParticles = [
    [65, 50],
    [130, 65],
    [55, 100],
    [145, 85],
    [80, 130],
    [140, 120],
    [60, 155],
    [120, 148],
  ];

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Aggregatzustände — fest, flüssig, gasförmig
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Klicke auf einen Zustand für Details. Phasenübergänge zwischen den Zuständen.
      </p>

      <svg viewBox="0 0 480 320" className="w-full max-w-lg mx-auto">
        <title>
          Aggregatzustände: fest, flüssig, gasförmig — Teilchenanordnung und Phasenübergänge
        </title>

        {/* State boxes */}
        {(["solid", "liquid", "gas"] as State[]).map((state, idx) => {
          const x = 20 + idx * 155;
          const isSelected = selected === state;
          const { color, label } = STATE_INFO[state];
          return (
            <g
              key={state}
              onClick={() => setSelected(selected === state ? null : state)}
              className="cursor-pointer"
            >
              <rect
                x={x}
                y="30"
                width="140"
                height="185"
                rx="8"
                fill={isSelected ? `${color}18` : "#f9fafb"}
                stroke={color}
                strokeWidth={isSelected ? 2.5 : 1.5}
              />
              <text
                x={x + 70}
                y="22"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill={color}
              >
                {label}
              </text>

              {/* Particles */}
              {state === "solid" &&
                solidParticles.map(([px, py], i) => (
                  <circle
                    key={i}
                    cx={x + px - 20}
                    cy={py + 20}
                    r="14"
                    fill={`${color}55`}
                    stroke={color}
                    strokeWidth="1.5"
                  />
                ))}
              {state === "liquid" &&
                liquidParticles.map(([px, py], i) => (
                  <g key={i}>
                    <circle
                      cx={x + px - 20}
                      cy={py + 20}
                      r="14"
                      fill={`${color}55`}
                      stroke={color}
                      strokeWidth="1.5"
                    />
                    {/* Small movement indication */}
                    <line
                      x1={x + px - 20 + 10}
                      y1={py + 20}
                      x2={x + px - 20 + 18}
                      y2={py + 20}
                      stroke={color}
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  </g>
                ))}
              {state === "gas" &&
                gasParticles.map(([px, py], i) => (
                  <g key={i}>
                    <circle
                      cx={x + px - 20}
                      cy={py + 20}
                      r="12"
                      fill={`${color}44`}
                      stroke={color}
                      strokeWidth="1.5"
                    />
                    {/* Velocity arrows */}
                    {i % 3 === 0 && (
                      <line
                        x1={x + px - 20 + 10}
                        y1={py + 16}
                        x2={x + px - 20 + 22}
                        y2={py + 10}
                        stroke={color}
                        strokeWidth="1.2"
                        markerEnd="url(#arrow-gas)"
                        opacity="0.7"
                      />
                    )}
                  </g>
                ))}

              {/* State properties */}
              <text x={x + 70} y="225" textAnchor="middle" fontSize="8" fill="#6b7280">
                {state === "solid"
                  ? "Geordnet · Dicht"
                  : state === "liquid"
                    ? "Beweglich · Dicht"
                    : "Ungeordnet · Weit"}
              </text>
              <text
                x={x + 70}
                y="238"
                textAnchor="middle"
                fontSize="8"
                fill={color}
                fontWeight="bold"
              >
                {state === "solid"
                  ? "Definierte Form"
                  : state === "liquid"
                    ? "Anpassbare Form"
                    : "Keine Form"}
              </text>
            </g>
          );
        })}

        <defs>
          <marker id="arrow-gas" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <path d="M0,0 L6,2 L0,4" fill="#f97316" />
          </marker>
          <marker id="arrow-trans" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <path d="M0,0 L6,2 L0,4" fill="#0d9488" />
          </marker>
        </defs>

        {/* Phase transition arrows */}
        {/* Solid → Liquid */}
        <path
          d="M 160 115 L 175 115"
          fill="none"
          stroke="#0d9488"
          strokeWidth="1.5"
          markerEnd="url(#arrow-trans)"
        />
        <text x="167" y="108" textAnchor="middle" fontSize="7" fill="#0d9488">
          Schmelzen
        </text>
        {/* Liquid → Solid */}
        <path d="M 160 128 L 175 128" fill="none" stroke="#6b7280" strokeWidth="1.5" />
        <path
          d="M 163 128 L 157 128"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.5"
          markerEnd="url(#arrow-trans)"
        />
        <text x="167" y="142" textAnchor="middle" fontSize="7" fill="#6b7280">
          Erstarren
        </text>

        {/* Liquid → Gas */}
        <path
          d="M 315 115 L 330 115"
          fill="none"
          stroke="#0d9488"
          strokeWidth="1.5"
          markerEnd="url(#arrow-trans)"
        />
        <text x="322" y="108" textAnchor="middle" fontSize="7" fill="#0d9488">
          Verdampfen
        </text>
        {/* Gas → Liquid */}
        <text x="322" y="142" textAnchor="middle" fontSize="7" fill="#6b7280">
          Kondensieren
        </text>

        {/* Solid → Gas (Sublimation) */}
        <path
          d="M 100 215 Q 240 265 380 215"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          markerEnd="url(#arrow-trans)"
        />
        <text x="240" y="280" textAnchor="middle" fontSize="8" fill="#8b5cf6">
          Sublimation (fest → gasförmig)
        </text>
        <path
          d="M 380 230 Q 240 290 100 230"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <text x="240" y="305" textAnchor="middle" fontSize="8" fill="#6b7280">
          Resublimation (gasförmig → fest)
        </text>
      </svg>

      {selected ? (
        <div
          className="rounded-lg p-3 border text-xs text-gray-700 dark:text-gray-300"
          style={{
            background: `${STATE_INFO[selected].color}12`,
            borderColor: `${STATE_INFO[selected].color}44`,
          }}
        >
          <strong style={{ color: STATE_INFO[selected].color }}>
            {STATE_INFO[selected].label}:
          </strong>{" "}
          {STATE_INFO[selected].desc}
        </div>
      ) : (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Phasenübergänge sind mit Energieaustausch verbunden: Schmelzen/Verdampfen erfordern
            Energiezufuhr (endotherm), Erstarren/Kondensieren geben Energie ab (exotherm).
          </p>
        </div>
      )}
    </div>
  );
}
