import { useState } from "react";

const phases = [
  {
    id: "prophase",
    label: "Prophase",
    detail: "Chromatin kondensiert zu sichtbaren Chromosomen. Spindelapparat bildet sich. Kernhüllte löst sich auf.",
  },
  {
    id: "metaphase",
    label: "Metaphase",
    detail: "Chromosomen ordnen sich an der Metaphaseplatte (Aequatorialebene) an. Spindelfasern heften an Zentromere.",
  },
  {
    id: "anaphase",
    label: "Anaphase",
    detail: "Schwesterchromatiden werden getrennt und zu den Polen gezogen. Zelle streckt sich.",
  },
  {
    id: "telophase",
    label: "Telophase",
    detail: "Chromosomen dekondensieren. Neue Kernhüllen bilden sich. Zytokinese beginnt – Zellteilung in zwei Tochterzellen.",
  },
];

export default function MitosisPhases() {
  const [active, setActive] = useState<string | null>(null);
  const activePhase = phases.find((p) => p.id === active);

  const boxW = 108;
  const gap = 10;
  const totalW = 4 * boxW + 3 * gap;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Mitose — Phasen</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf eine Phase für Details.</p>

      <svg viewBox={`0 0 ${totalW} 220`} className="w-full max-w-2xl mx-auto">
        {phases.map((phase, i) => {
          const x = i * (boxW + gap);
          const cx = x + boxW / 2;
          const cy = 110;
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
              <rect x={x} y="24" width={boxW} height={170} rx="10" fill={isActive ? "#ccfbf1" : "#f0fdfa"} stroke={isActive ? "#0d9488" : "#14b8a6"} strokeWidth={isActive ? 2.5 : 1.5} />

              {/* Phase label */}
              <text x={cx} y="16" textAnchor="middle" fontSize="10" fill="#0d9488" fontWeight="bold">{phase.label}</text>

              {/* Cell outline */}
              {phase.id === "anaphase" ? (
                <ellipse cx={cx} cy={cy} rx="42" ry="55" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
              ) : phase.id === "telophase" ? (
                <>
                  <ellipse cx={cx - 14} cy={cy} rx="26" ry="48" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
                  <ellipse cx={cx + 14} cy={cy} rx="26" ry="48" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
                </>
              ) : (
                <ellipse cx={cx} cy={cy} rx="40" ry="55" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
              )}

              {/* Phase-specific drawings */}
              {phase.id === "prophase" && (
                <>
                  {/* Condensing chromosomes */}
                  <path d={`M${cx - 12},${cy - 20} Q${cx - 8},${cy - 10} ${cx - 12},${cy} Q${cx - 16},${cy + 10} ${cx - 12},${cy + 20}`} stroke="#0f766e" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d={`M${cx + 8},${cy - 18} Q${cx + 12},${cy - 8} ${cx + 8},${cy + 2} Q${cx + 4},${cy + 12} ${cx + 8},${cy + 22}`} stroke="#115e59" strokeWidth="3" fill="none" strokeLinecap="round" />
                  {/* Centrosomes moving apart */}
                  <circle cx={cx - 25} cy={cy - 35} r="3" fill="#0d9488" />
                  <circle cx={cx + 25} cy={cy + 35} r="3" fill="#0d9488" />
                  {/* Spindle fibers forming */}
                  <line x1={cx - 25} y1={cy - 35} x2={cx} y2={cy} stroke="#99f6e4" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1={cx + 25} y1={cy + 35} x2={cx} y2={cy} stroke="#99f6e4" strokeWidth="0.5" strokeDasharray="2 2" />
                </>
              )}

              {phase.id === "metaphase" && (
                <>
                  {/* Metaphase plate - chromosomes aligned */}
                  <line x1={cx - 30} y1={cy} x2={cx + 30} y2={cy} stroke="#99f6e4" strokeWidth="1" strokeDasharray="3 2" />
                  {[-15, -5, 5, 15].map((dx) => (
                    <g key={dx}>
                      <path d={`M${cx + dx - 3},${cy - 8} L${cx + dx},${cy} L${cx + dx - 3},${cy + 8}`} stroke="#0f766e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <path d={`M${cx + dx + 3},${cy - 8} L${cx + dx},${cy} L${cx + dx + 3},${cy + 8}`} stroke="#115e59" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </g>
                  ))}
                  {/* Centrosomes at poles */}
                  <circle cx={cx} cy={cy - 45} r="3" fill="#0d9488" />
                  <circle cx={cx} cy={cy + 45} r="3" fill="#0d9488" />
                  {/* Spindle fibers */}
                  {[-15, -5, 5, 15].map((dx) => (
                    <g key={`sf-${dx}`}>
                      <line x1={cx} y1={cy - 45} x2={cx + dx} y2={cy} stroke="#99f6e4" strokeWidth="0.7" />
                      <line x1={cx} y1={cy + 45} x2={cx + dx} y2={cy} stroke="#99f6e4" strokeWidth="0.7" />
                    </g>
                  ))}
                  <text x={cx} y={cy + 62} textAnchor="middle" fontSize="6" fill="#0f766e">Metaphaseplatte</text>
                </>
              )}

              {phase.id === "anaphase" && (
                <>
                  {/* Chromosomes being pulled apart */}
                  <circle cx={cx} cy={cy - 45} r="3" fill="#0d9488" />
                  <circle cx={cx} cy={cy + 45} r="3" fill="#0d9488" />
                  {[-10, 0, 10].map((dx) => (
                    <g key={`ana-${dx}`}>
                      {/* Going up */}
                      <path d={`M${cx + dx},${cy - 15} L${cx + dx - 2},${cy - 25} M${cx + dx},${cy - 15} L${cx + dx + 2},${cy - 25}`} stroke="#0f766e" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <line x1={cx} y1={cy - 45} x2={cx + dx} y2={cy - 15} stroke="#99f6e4" strokeWidth="0.7" />
                      {/* Going down */}
                      <path d={`M${cx + dx},${cy + 15} L${cx + dx - 2},${cy + 25} M${cx + dx},${cy + 15} L${cx + dx + 2},${cy + 25}`} stroke="#115e59" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <line x1={cx} y1={cy + 45} x2={cx + dx} y2={cy + 15} stroke="#99f6e4" strokeWidth="0.7" />
                    </g>
                  ))}
                </>
              )}

              {phase.id === "telophase" && (
                <>
                  {/* Decondensing chromosomes in each daughter cell */}
                  {[-14, 14].map((dx) => (
                    <g key={`telo-${dx}`}>
                      <ellipse cx={cx + dx} cy={cy} rx="10" ry="8" fill="none" stroke="#0d9488" strokeWidth="1.5" />
                      <path d={`M${cx + dx - 4},${cy - 2} Q${cx + dx},${cy + 2} ${cx + dx + 4},${cy - 2}`} stroke="#0f766e" strokeWidth="1.5" fill="none" />
                    </g>
                  ))}
                  {/* Cleavage furrow */}
                  <line x1={cx} y1={cy - 48} x2={cx} y2={cy + 48} stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 2" />
                  <text x={cx} y={cy + 62} textAnchor="middle" fontSize="6" fill="#0f766e">Zytokinese</text>
                </>
              )}
            </g>
          );
        })}

        {/* Arrows between phases */}
        {[0, 1, 2].map((i) => {
          const x1 = (i + 1) * boxW + i * gap + 2;
          const x2 = x1 + gap - 4;
          const my = 110;
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
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">{activePhase.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activePhase.detail}</p>
        </div>
      )}
    </div>
  );
}
