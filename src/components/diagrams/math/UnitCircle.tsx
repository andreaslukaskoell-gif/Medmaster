import { useState } from "react";

interface AngleData {
  deg: number;
  rad: string;
  sin: string;
  cos: string;
  tan: string;
}

const angles: AngleData[] = [
  { deg: 0, rad: "0", sin: "0", cos: "1", tan: "0" },
  { deg: 30, rad: "\u03C0/6", sin: "1/2", cos: "\u221A3/2", tan: "1/\u221A3" },
  { deg: 45, rad: "\u03C0/4", sin: "\u221A2/2", cos: "\u221A2/2", tan: "1" },
  { deg: 60, rad: "\u03C0/3", sin: "\u221A3/2", cos: "1/2", tan: "\u221A3" },
  { deg: 90, rad: "\u03C0/2", sin: "1", cos: "0", tan: "undef." },
];

export default function UnitCircle() {
  const [activeDeg, setActiveDeg] = useState<number>(45);
  const activeAngle = angles.find((a) => a.deg === activeDeg);

  const CX = 200;
  const CY = 180;
  const R = 120;

  const rad = (activeDeg * Math.PI) / 180;
  const px = CX + R * Math.cos(rad);
  const py = CY - R * Math.sin(rad);

  const cosX = CX + R * Math.cos(rad);
  const sinY = CY - R * Math.sin(rad);

  // Tangent line at (1, 0) point
  const tanLen = activeDeg !== 90 ? Math.tan(rad) * R : 0;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Einheitskreis</h4>
      <p className="text-xs text-muted">Klicke auf einen Winkel für trigonometrische Werte.</p>

      <div className="flex gap-2 flex-wrap mb-2">
        {angles.map((a) => (
          <button
            key={a.deg}
            onClick={() => setActiveDeg(a.deg)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              activeDeg === a.deg ? "bg-teal-600 text-white border-teal-600" : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
            }`}
          >
            {a.deg}\u00B0
          </button>
        ))}
      </div>

      <svg viewBox="0 0 430 380" className="w-full max-w-lg mx-auto">
        <text x="215" y="20" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">Einheitskreis (r = 1)</text>

        {/* Grid */}
        <line x1={CX - R - 30} y1={CY} x2={CX + R + 40} y2={CY} stroke="#374151" strokeWidth="1.5" />
        <line x1={CX} y1={CY + R + 30} x2={CX} y2={CY - R - 30} stroke="#374151" strokeWidth="1.5" />
        {/* Axis arrows */}
        <polygon points={`${CX + R + 40},${CY - 4} ${CX + R + 40},${CY + 4} ${CX + R + 48},${CY}`} fill="#374151" />
        <polygon points={`${CX - 4},${CY - R - 30} ${CX + 4},${CY - R - 30} ${CX},${CY - R - 38}`} fill="#374151" />
        <text x={CX + R + 50} y={CY + 4} fontSize="13" fill="#374151" fontWeight="bold">x</text>
        <text x={CX + 8} y={CY - R - 32} fontSize="13" fill="#374151" fontWeight="bold">y</text>

        {/* Axis labels */}
        <text x={CX + R + 5} y={CY + 14} fontSize="7" fill="#6b7280">1</text>
        <text x={CX - R - 12} y={CY + 14} fontSize="7" fill="#6b7280">\u20131</text>
        <text x={CX + 8} y={CY - R + 4} fontSize="7" fill="#6b7280">1</text>
        <text x={CX + 8} y={CY + R + 12} fontSize="7" fill="#6b7280">\u20131</text>

        {/* Unit circle */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#0d9488" strokeWidth="2" />

        {/* Angle arc */}
        {activeDeg > 0 && (
          <path
            d={`M${CX + 25},${CY} A25,25 0 0,0 ${CX + 25 * Math.cos(rad)},${CY - 25 * Math.sin(rad)}`}
            fill="none"
            stroke="#0f766e"
            strokeWidth="1.5"
          />
        )}
        <text
          x={CX + 35 * Math.cos(rad / 2)}
          y={CY - 35 * Math.sin(rad / 2) + 3}
          textAnchor="middle"
          fontSize="13"
          fill="#0f766e"
          fontWeight="bold"
        >
          {activeDeg}\u00B0
        </text>

        {/* Radius line to point */}
        <line x1={CX} y1={CY} x2={px} y2={py} stroke="#115e59" strokeWidth="2" />

        {/* Point on circle */}
        <circle cx={px} cy={py} r="5" fill="#0d9488" stroke="#115e59" strokeWidth="1.5" />

        {/* cos line (horizontal projection) */}
        <line x1={CX} y1={CY} x2={cosX} y2={CY} stroke="#3b82f6" strokeWidth="3" opacity="0.8" />
        <text x={(CX + cosX) / 2} y={CY + 16} textAnchor="middle" fontSize="13" fill="#3b82f6" fontWeight="bold">cos</text>

        {/* sin line (vertical projection) */}
        <line x1={px} y1={CY} x2={px} y2={py} stroke="#ef4444" strokeWidth="3" opacity="0.8" />
        <text x={px + 15} y={(CY + py) / 2 + 3} fontSize="13" fill="#ef4444" fontWeight="bold">sin</text>

        {/* Dashed projection lines */}
        <line x1={px} y1={py} x2={px} y2={CY} stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 2" />
        <line x1={px} y1={py} x2={CX} y2={py} stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 2" />

        {/* tan line */}
        {activeDeg !== 90 && activeDeg !== 0 && (
          <>
            <line x1={CX + R} y1={CY} x2={CX + R} y2={CY - tanLen} stroke="#f59e0b" strokeWidth="3" opacity="0.8" />
            <text x={CX + R + 15} y={CY - tanLen / 2 + 3} fontSize="13" fill="#f59e0b" fontWeight="bold">tan</text>
            {/* Extended radius to tangent */}
            <line x1={CX} y1={CY} x2={CX + R} y2={CY - tanLen} stroke="#115e59" strokeWidth="1" strokeDasharray="4 3" />
          </>
        )}

        {/* Important angle markers on circle */}
        {angles.map((a) => {
          const aRad = (a.deg * Math.PI) / 180;
          const ax = CX + R * Math.cos(aRad);
          const ay = CY - R * Math.sin(aRad);
          const isActive = a.deg === activeDeg;
          return (
            <g
              key={a.deg}
              className="cursor-pointer"
              onClick={() => setActiveDeg(a.deg)}
            >
              <circle
                cx={ax}
                cy={ay}
                r={isActive ? 5 : 3.5}
                fill={isActive ? "#0d9488" : "#99f6e4"}
                stroke="#115e59"
                strokeWidth={isActive ? 1.5 : 1}
              />
              {!isActive && (
                <text
                  x={ax + (Math.cos(aRad) > 0 ? 10 : -10)}
                  y={ay + (Math.sin(aRad) > 0 ? -8 : 12)}
                  textAnchor="middle"
                  fontSize="7"
                  fill="#6b7280"
                >
                  {a.deg}\u00B0
                </text>
              )}
            </g>
          );
        })}

        {/* Point coordinates */}
        <text x={px + (Math.cos(rad) >= 0 ? 12 : -12)} y={py - 10} textAnchor="middle" fontSize="7" fill="#115e59">
          ({activeAngle?.cos}, {activeAngle?.sin})
        </text>

        {/* Legend */}
        <rect x="20" y="330" width="390" height="40" rx="6" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1" />
        <line x1="30" y1="350" x2="50" y2="350" stroke="#3b82f6" strokeWidth="3" />
        <text x="55" y="353" fontSize="13" fill="#3b82f6">cos \u03B1 = x-Koordinate</text>
        <line x1="175" y1="350" x2="195" y2="350" stroke="#ef4444" strokeWidth="3" />
        <text x="200" y="353" fontSize="13" fill="#ef4444">sin \u03B1 = y-Koordinate</text>
        <line x1="310" y1="350" x2="330" y2="350" stroke="#f59e0b" strokeWidth="3" />
        <text x="335" y="353" fontSize="13" fill="#f59e0b">tan \u03B1 = sin/cos</text>
      </svg>

      {activeAngle && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">Winkel: {activeAngle.deg}\u00B0 = {activeAngle.rad} rad</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="text-xs text-center">
              <span className="font-semibold text-blue-600">cos</span>
              <span className="text-gray-700 dark:text-gray-300"> = {activeAngle.cos}</span>
            </div>
            <div className="text-xs text-center">
              <span className="font-semibold text-red-600">sin</span>
              <span className="text-gray-700 dark:text-gray-300"> = {activeAngle.sin}</span>
            </div>
            <div className="text-xs text-center">
              <span className="font-semibold text-amber-600">tan</span>
              <span className="text-gray-700 dark:text-gray-300"> = {activeAngle.tan}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
