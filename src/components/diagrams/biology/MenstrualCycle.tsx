import { useState } from "react";

export default function MenstrualCycle() {
  const [hoverDay, setHoverDay] = useState<number | null>(null);

  /* Graph dimensions */
  const gL = 60;
  const gR = 450;
  const gT = 50;
  const gB = 250;
  const gW = gR - gL;
  const gH = gB - gT;

  const dayToX = (d: number) => gL + ((d - 1) / 27) * gW;
  const valToY = (v: number) => gB - v * gH;

  /* Hormone curves (normalized 0-1) */
  const fsh = [
    [1, 0.3], [3, 0.45], [5, 0.5], [7, 0.45], [9, 0.35], [11, 0.3], [13, 0.55],
    [14, 0.4], [16, 0.2], [18, 0.15], [20, 0.15], [22, 0.15], [24, 0.12], [26, 0.15], [28, 0.25],
  ];
  const lh = [
    [1, 0.1], [3, 0.1], [5, 0.12], [7, 0.12], [9, 0.15], [11, 0.2], [12, 0.35],
    [13, 0.7], [14, 0.95], [15, 0.5], [16, 0.2], [18, 0.12], [20, 0.1], [22, 0.1], [24, 0.1], [26, 0.08], [28, 0.1],
  ];
  const estrogen = [
    [1, 0.05], [3, 0.08], [5, 0.15], [7, 0.25], [9, 0.4], [11, 0.6], [12, 0.7],
    [13, 0.75], [14, 0.5], [16, 0.35], [18, 0.3], [20, 0.4], [22, 0.5], [24, 0.45], [26, 0.3], [28, 0.1],
  ];
  const progesteron = [
    [1, 0.02], [3, 0.02], [5, 0.03], [7, 0.03], [9, 0.03], [11, 0.04], [13, 0.05],
    [14, 0.08], [16, 0.25], [18, 0.5], [20, 0.7], [22, 0.8], [24, 0.7], [26, 0.45], [28, 0.1],
  ];

  const toPath = (data: number[][]) =>
    data.map(([d, v], i) => `${i === 0 ? "M" : "L"}${dayToX(d).toFixed(1)},${valToY(v).toFixed(1)}`).join(" ");

  const hormones = [
    { name: "FSH", color: "#3b82f6", data: fsh },
    { name: "LH", color: "#16a34a", data: lh },
    { name: "Östrogen", color: "#ec4899", data: estrogen },
    { name: "Progesteron", color: "#8b5cf6", data: progesteron },
  ];

  /* Phases */
  const phases = [
    { start: 1, end: 5, label: "Menstruation", color: "#fecaca" },
    { start: 5, end: 14, label: "Follikelphase", color: "#ccfbf1" },
    { start: 14, end: 15, label: "Ovulation", color: "#fef3c7" },
    { start: 15, end: 28, label: "Lutealphase", color: "#f0fdfa" },
  ];

  /* Get info for hovered day */
  const getDayInfo = (day: number): string => {
    if (day <= 5) return "Menstruation: Endometrium wird abgestossen. Östrogen und Progesteron niedrig.";
    if (day <= 13) return "Follikelphase: FSH stimuliert Follikelreifung. Östrogen steigt → Endometriumaufbau.";
    if (day === 14) return "Ovulation: LH-Peak löst Eisprung aus! Reife Eizelle wird freigesetzt.";
    if (day <= 28) return "Lutealphase: Gelbkörper produziert Progesteron. Endometrium wird für Einnistung vorbereitet.";
    return "";
  };

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Menstruationszyklus — Hormonspiegel</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Fahre über den Graphen für Tagesdetails.</p>

      <svg viewBox="0 0 480 340" className="w-full max-w-xl mx-auto">
        {/* Phase backgrounds */}
        {phases.map((phase) => (
          <g key={phase.label}>
            <rect
              x={dayToX(phase.start)} y={gT}
              width={dayToX(phase.end) - dayToX(phase.start)} height={gH}
              fill={phase.color} opacity="0.4"
            />
            <text
              x={(dayToX(phase.start) + dayToX(phase.end)) / 2} y={gB + 40}
              textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold"
            >
              {phase.label}
            </text>
          </g>
        ))}

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((v) => (
          <line key={`hgrid-${v}`} x1={gL} y1={valToY(v)} x2={gR} y2={valToY(v)} stroke="#99f6e4" strokeWidth="0.5" strokeDasharray="4 3" />
        ))}

        {/* Day ticks */}
        {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
          <g key={`tick-${d}`}>
            <line x1={dayToX(d)} y1={gB} x2={dayToX(d)} y2={gB + 4} stroke="#115e59" strokeWidth="0.5" />
            {d % 2 === 0 && (
              <text x={dayToX(d)} y={gB + 14} textAnchor="middle" fontSize="6" fill="#115e59">{d}</text>
            )}
          </g>
        ))}

        {/* Axes */}
        <line x1={gL} y1={gT - 5} x2={gL} y2={gB + 5} stroke="#115e59" strokeWidth="1.5" />
        <line x1={gL - 5} y1={gB} x2={gR + 5} y2={gB} stroke="#115e59" strokeWidth="1.5" />

        {/* Y-axis label */}
        <text x="15" y={(gT + gB) / 2} textAnchor="middle" fontSize="8" fill="#0d9488" fontWeight="bold" transform={`rotate(-90, 15, ${(gT + gB) / 2})`}>Hormonspiegel</text>

        {/* X-axis label */}
        <text x={(gL + gR) / 2} y={gB + 26} textAnchor="middle" fontSize="9" fill="#0d9488" fontWeight="bold">Tage des Zyklus</text>

        {/* Hormone curves */}
        {hormones.map((h) => (
          <path key={h.name} d={toPath(h.data)} fill="none" stroke={h.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Ovulation marker */}
        <line x1={dayToX(14)} y1={gT} x2={dayToX(14)} y2={gB} stroke="#eab308" strokeWidth="1.5" strokeDasharray="5 3" />
        <text x={dayToX(14)} y={gT - 5} textAnchor="middle" fontSize="8" fill="#eab308" fontWeight="bold">Ovulation</text>

        {/* LH peak label */}
        <text x={dayToX(14) + 5} y={valToY(0.95) + 4} fontSize="7" fill="#16a34a" fontWeight="bold">LH-Peak</text>

        {/* Hover line */}
        {hoverDay && (
          <>
            <line x1={dayToX(hoverDay)} y1={gT} x2={dayToX(hoverDay)} y2={gB} stroke="#0d9488" strokeWidth="1" opacity="0.5" />
            <circle cx={dayToX(hoverDay)} cy={gT - 5} r="3" fill="#0d9488" />
            <text x={dayToX(hoverDay)} y={gT - 10} textAnchor="middle" fontSize="7" fill="#0d9488" fontWeight="bold">Tag {hoverDay}</text>
          </>
        )}

        {/* Invisible hover zones */}
        {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
          <rect
            key={`hover-${d}`}
            x={dayToX(d) - gW / 56} y={gT}
            width={gW / 28} height={gH}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => setHoverDay(d)}
            onMouseLeave={() => setHoverDay(null)}
          />
        ))}

        {/* Legend */}
        {hormones.map((h, i) => (
          <g key={`legend-${h.name}`} transform={`translate(${gL + i * 100}, 310)`}>
            <line x1="0" y1="0" x2="20" y2="0" stroke={h.color} strokeWidth="3" strokeLinecap="round" />
            <text x="25" y="4" fontSize="8" fill={h.color} fontWeight="bold">{h.name}</text>
          </g>
        ))}
      </svg>

      {hoverDay && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">Tag {hoverDay}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{getDayInfo(hoverDay)}</p>
        </div>
      )}
    </div>
  );
}
