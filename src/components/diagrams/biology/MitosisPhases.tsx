import { useState } from "react";

const phases = [
  {
    id: "prophase",
    label: "Prophase",
    detail:
      "Chromatin kondensiert zu sichtbaren Chromosomen. Spindelapparat bildet sich. Kernh\u00FCllte l\u00F6st sich auf.",
  },
  {
    id: "metaphase",
    label: "Metaphase",
    detail:
      "Chromosomen ordnen sich an der Metaphaseplatte (Aequatorialebene) an. Spindelfasern heften an Zentromere.",
  },
  {
    id: "anaphase",
    label: "Anaphase",
    detail: "Schwesterchromatiden werden getrennt und zu den Polen gezogen. Zelle streckt sich.",
  },
  {
    id: "telophase",
    label: "Telophase",
    detail:
      "Chromosomen dekondensieren. Neue Kernh\u00FCllen bilden sich. Zytokinese beginnt \u2013 Zellteilung in zwei Tochterzellen.",
  },
];

export default function MitosisPhases() {
  const [active, setActive] = useState<string | null>(null);
  const activePhase = phases.find((p) => p.id === active);

  const boxW = 120;
  const gap = 14;
  const totalW = 4 * boxW + 3 * gap;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Mitose — Phasen</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf eine Phase f\u00FCr Details.
      </p>

      <svg viewBox={`0 0 ${totalW} 250`} className="w-full max-w-2xl mx-auto">
        <title>Mitose — Prophase, Metaphase, Anaphase, Telophase</title>
        {phases.map((phase, i) => {
          const x = i * (boxW + gap);
          const cx = x + boxW / 2;
          const cy = 120;
          const isActive = active === phase.id;

          return (
            <g
              key={phase.id}
              className="cursor-pointer"
              onClick={() => setActive(active === phase.id ? null : phase.id)}
              onMouseEnter={() => setActive(phase.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Box */}
              <rect
                x={x}
                y="30"
                width={boxW}
                height={185}
                rx="10"
                fill={isActive ? "#ccfbf1" : "#f0fdfa"}
                stroke={isActive ? "#0d9488" : "#14b8a6"}
                strokeWidth={isActive ? 2.5 : 1.5}
              />

              {/* Phase label */}
              <text
                x={cx}
                y="20"
                textAnchor="middle"
                fontSize="14"
                fill="#1f2937"
                fontWeight="600"
                stroke="white"
                strokeWidth="4"
                paintOrder="stroke"
              >
                {phase.label}
              </text>

              {/* Cell outline */}
              {phase.id === "anaphase" ? (
                <ellipse
                  cx={cx}
                  cy={cy}
                  rx="44"
                  ry="58"
                  fill="#f0fdfa"
                  stroke="#14b8a6"
                  strokeWidth="1.5"
                />
              ) : phase.id === "telophase" ? (
                <>
                  <ellipse
                    cx={cx - 15}
                    cy={cy}
                    rx="28"
                    ry="50"
                    fill="#f0fdfa"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx={cx + 15}
                    cy={cy}
                    rx="28"
                    ry="50"
                    fill="#f0fdfa"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                  />
                </>
              ) : (
                <ellipse
                  cx={cx}
                  cy={cy}
                  rx="42"
                  ry="58"
                  fill="#f0fdfa"
                  stroke="#14b8a6"
                  strokeWidth="1.5"
                />
              )}

              {/* Phase-specific drawings */}
              {phase.id === "prophase" && (
                <>
                  {/* Condensing chromosomes */}
                  <path
                    d={`M${cx - 12},${cy - 20} Q${cx - 8},${cy - 10} ${cx - 12},${cy} Q${cx - 16},${cy + 10} ${cx - 12},${cy + 20}`}
                    stroke="#0f766e"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d={`M${cx + 8},${cy - 18} Q${cx + 12},${cy - 8} ${cx + 8},${cy + 2} Q${cx + 4},${cy + 12} ${cx + 8},${cy + 22}`}
                    stroke="#115e59"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Centrosomes moving apart */}
                  <circle cx={cx - 27} cy={cy - 38} r="3" fill="#0d9488" />
                  <circle cx={cx + 27} cy={cy + 38} r="3" fill="#0d9488" />
                  {/* Spindle fibers forming */}
                  <line
                    x1={cx - 27}
                    y1={cy - 38}
                    x2={cx}
                    y2={cy}
                    stroke="#99f6e4"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1={cx + 27}
                    y1={cy + 38}
                    x2={cx}
                    y2={cy}
                    stroke="#99f6e4"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />
                  {/* Leader line + annotation */}
                  <line
                    x1={cx - 27}
                    y1={cy - 38}
                    x2={cx - 27}
                    y2={cy - 52}
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <text
                    x={cx - 27}
                    y={cy - 55}
                    textAnchor="middle"
                    fontSize="13"
                    fill="#1f2937"
                    stroke="white"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Zentrosom
                  </text>
                </>
              )}

              {phase.id === "metaphase" && (
                <>
                  {/* Metaphase plate - chromosomes aligned */}
                  <line
                    x1={cx - 32}
                    y1={cy}
                    x2={cx + 32}
                    y2={cy}
                    stroke="#99f6e4"
                    strokeWidth="1"
                    strokeDasharray="3 2"
                  />
                  {[-15, -5, 5, 15].map((dx) => (
                    <g key={dx}>
                      <path
                        d={`M${cx + dx - 3},${cy - 8} L${cx + dx},${cy} L${cx + dx - 3},${cy + 8}`}
                        stroke="#0f766e"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d={`M${cx + dx + 3},${cy - 8} L${cx + dx},${cy} L${cx + dx + 3},${cy + 8}`}
                        stroke="#115e59"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </g>
                  ))}
                  {/* Centrosomes at poles */}
                  <circle cx={cx} cy={cy - 48} r="3" fill="#0d9488" />
                  <circle cx={cx} cy={cy + 48} r="3" fill="#0d9488" />
                  {/* Spindle fibers */}
                  {[-15, -5, 5, 15].map((dx) => (
                    <g key={`sf-${dx}`}>
                      <line
                        x1={cx}
                        y1={cy - 48}
                        x2={cx + dx}
                        y2={cy}
                        stroke="#99f6e4"
                        strokeWidth="0.7"
                      />
                      <line
                        x1={cx}
                        y1={cy + 48}
                        x2={cx + dx}
                        y2={cy}
                        stroke="#99f6e4"
                        strokeWidth="0.7"
                      />
                    </g>
                  ))}
                  {/* Leader line to metaphase plate label */}
                  <line
                    x1={cx + 34}
                    y1={cy}
                    x2={cx + 42}
                    y2={cy + 68}
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <text
                    x={cx}
                    y={cy + 80}
                    textAnchor="middle"
                    fontSize="13"
                    fill="#1f2937"
                    stroke="white"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Metaphase-
                  </text>
                  <text
                    x={cx}
                    y={cy + 93}
                    textAnchor="middle"
                    fontSize="13"
                    fill="#1f2937"
                    stroke="white"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    platte
                  </text>
                </>
              )}

              {phase.id === "anaphase" && (
                <>
                  {/* Chromosomes being pulled apart */}
                  <circle cx={cx} cy={cy - 48} r="3" fill="#0d9488" />
                  <circle cx={cx} cy={cy + 48} r="3" fill="#0d9488" />
                  {[-10, 0, 10].map((dx) => (
                    <g key={`ana-${dx}`}>
                      {/* Going up */}
                      <path
                        d={`M${cx + dx},${cy - 15} L${cx + dx - 2},${cy - 25} M${cx + dx},${cy - 15} L${cx + dx + 2},${cy - 25}`}
                        stroke="#0f766e"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <line
                        x1={cx}
                        y1={cy - 48}
                        x2={cx + dx}
                        y2={cy - 15}
                        stroke="#99f6e4"
                        strokeWidth="0.7"
                      />
                      {/* Going down */}
                      <path
                        d={`M${cx + dx},${cy + 15} L${cx + dx - 2},${cy + 25} M${cx + dx},${cy + 15} L${cx + dx + 2},${cy + 25}`}
                        stroke="#115e59"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <line
                        x1={cx}
                        y1={cy + 48}
                        x2={cx + dx}
                        y2={cy + 15}
                        stroke="#99f6e4"
                        strokeWidth="0.7"
                      />
                    </g>
                  ))}
                  {/* Leader line + pole label */}
                  <line
                    x1={cx + 6}
                    y1={cy - 48}
                    x2={cx + 38}
                    y2={cy - 55}
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <text
                    x={cx + 40}
                    y={cy - 52}
                    fontSize="13"
                    fill="#1f2937"
                    stroke="white"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Pol
                  </text>
                </>
              )}

              {phase.id === "telophase" && (
                <>
                  {/* Decondensing chromosomes in each daughter cell */}
                  {[-15, 15].map((dx) => (
                    <g key={`telo-${dx}`}>
                      <ellipse
                        cx={cx + dx}
                        cy={cy}
                        rx="10"
                        ry="8"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="1.5"
                      />
                      <path
                        d={`M${cx + dx - 4},${cy - 2} Q${cx + dx},${cy + 2} ${cx + dx + 4},${cy - 2}`}
                        stroke="#0f766e"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </g>
                  ))}
                  {/* Cleavage furrow */}
                  <line
                    x1={cx}
                    y1={cy - 50}
                    x2={cx}
                    y2={cy + 50}
                    stroke="#14b8a6"
                    strokeWidth="1"
                    strokeDasharray="3 2"
                  />
                  {/* Leader line to zytokinese label */}
                  <line
                    x1={cx}
                    y1={cy + 50}
                    x2={cx}
                    y2={cy + 68}
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <text
                    x={cx}
                    y={cy + 82}
                    textAnchor="middle"
                    fontSize="13"
                    fill="#1f2937"
                    fontWeight="600"
                    stroke="white"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Zytokinese
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Arrows between phases */}
        {[0, 1, 2].map((i) => {
          const x1 = (i + 1) * boxW + i * gap + 2;
          const x2 = x1 + gap - 4;
          const my = 120;
          return (
            <g key={`arrow-${i}`}>
              <line x1={x1} y1={my} x2={x2} y2={my} stroke="#0d9488" strokeWidth="1.5" />
              <polygon points={`${x2},${my - 4} ${x2 + 5},${my} ${x2},${my + 4}`} fill="#0d9488" />
            </g>
          );
        })}
      </svg>

      {activePhase && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
            {activePhase.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activePhase.detail}</p>
        </div>
      )}
    </div>
  );
}
