import { useState } from "react";

type Step = "transfer" | "lattice";

export default function IonicBond() {
  const [step, setStep] = useState<Step>("transfer");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Ionenbindung — NaCl
      </h4>
      <p className="text-xs text-muted">Elektronenuebertragung und Kristallgitter.</p>
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setStep("transfer")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            step === "transfer"
              ? "bg-teal-600 text-white border-teal-600"
              : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Elektronenuebertragung
        </button>
        <button
          onClick={() => setStep("lattice")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            step === "lattice"
              ? "bg-teal-600 text-white border-teal-600"
              : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Kristallgitter
        </button>
      </div>

      {step === "transfer" ? (
        <svg viewBox="0 0 480 260" className="w-full max-w-lg mx-auto">
          <title>Ionenbindung — Elektronenübertragung und NaCl-Gitter</title>
          <defs>
            <radialGradient id="naGrad" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#9ca3af" />
            </radialGradient>
            <radialGradient id="clGrad" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#bbf7d0" />
              <stop offset="100%" stopColor="#22c55e" />
            </radialGradient>
            <radialGradient id="naPlusGrad" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#fca5a5" />
              <stop offset="100%" stopColor="#ef4444" />
            </radialGradient>
            <radialGradient id="clMinusGrad" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#16a34a" />
            </radialGradient>
            <marker
              id="arrowTransfer"
              markerWidth="8"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L8,3 L0,6" fill="#0d9488" />
            </marker>
          </defs>

          <text x="240" y="20" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            Ionenbindung: Na + Cl → NaCl
          </text>

          {/* Na Atom */}
          <circle cx="90" cy="120" r="35" fill="url(#naGrad)" stroke="#6b7280" strokeWidth="1.5" />
          <text x="90" y="124" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#374151">
            Na
          </text>
          <text x="90" y="137" textAnchor="middle" fontSize="13" fill="#6b7280">
            11 e\u207B
          </text>

          {/* Outer electron of Na */}
          <circle cx="127" cy="110" r="5" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
          <text x="127" y="113" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="bold">
            e\u207B
          </text>

          {/* Transfer arrow */}
          <path
            d="M140,110 C180,80 220,80 260,110"
            fill="none"
            stroke="#0d9488"
            strokeWidth="2"
            markerEnd="url(#arrowTransfer)"
          />
          <text x="200" y="82" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
            e\u207B Übertragung
          </text>

          {/* Cl Atom */}
          <circle cx="310" cy="120" r="40" fill="url(#clGrad)" stroke="#16a34a" strokeWidth="1.5" />
          <text x="310" y="124" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#15803d">
            Cl
          </text>
          <text x="310" y="137" textAnchor="middle" fontSize="13" fill="#15803d">
            17 e\u207B
          </text>

          {/* 7 outer electrons on Cl */}
          {[0, 51, 103, 154, 206, 257, 309].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const ex = 310 + 42 * Math.cos(rad);
            const ey = 120 + 42 * Math.sin(rad);
            return (
              <circle
                key={i}
                cx={ex}
                cy={ey}
                r="4"
                fill="#f59e0b"
                stroke="#d97706"
                strokeWidth="0.8"
                opacity="0.7"
              />
            );
          })}

          {/* Arrow down */}
          <text x="200" y="175" textAnchor="middle" fontSize="20" fill="#0d9488">
            \u2193
          </text>

          {/* Na+ */}
          <circle
            cx="120"
            cy="220"
            r="28"
            fill="url(#naPlusGrad)"
            stroke="#ef4444"
            strokeWidth="2"
          />
          <text x="120" y="218" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">
            Na
          </text>
          <text x="138" y="212" fontSize="13" fill="#fff" fontWeight="bold">
            +
          </text>
          <text x="120" y="232" textAnchor="middle" fontSize="7" fill="#fff">
            10 e\u207B (Kation)
          </text>

          {/* Cl- */}
          <circle
            cx="280"
            cy="220"
            r="34"
            fill="url(#clMinusGrad)"
            stroke="#16a34a"
            strokeWidth="2"
          />
          <text x="280" y="218" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">
            Cl
          </text>
          <text x="300" y="212" fontSize="13" fill="#fff" fontWeight="bold">
            \u2013
          </text>
          <text x="280" y="232" textAnchor="middle" fontSize="7" fill="#fff">
            18 e\u207B (Anion)
          </text>

          {/* Electrostatic attraction */}
          <line
            x1="150"
            y1="220"
            x2="244"
            y2="220"
            stroke="#0d9488"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text x="197" y="215" textAnchor="middle" fontSize="7" fill="#0d9488">
            Elektrostatische Anziehung
          </text>

          {/* Side note */}
          <text x="420" y="215" textAnchor="middle" fontSize="13" fill="#6b7280">
            Ionenbindung
          </text>
          <text x="420" y="228" textAnchor="middle" fontSize="7" fill="#6b7280">
            \u0394EN &gt; 1,7
          </text>
        </svg>
      ) : (
        <svg viewBox="0 0 480 280" className="w-full max-w-lg mx-auto">
          <text x="240" y="20" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            NaCl-Kristallgitter
          </text>

          {/* Crystal lattice grid */}
          {[0, 1, 2, 3, 4, 5].map((row) =>
            [0, 1, 2, 3, 4, 5].map((col) => {
              const isNa = (row + col) % 2 === 0;
              const cx = 115 + col * 50;
              const cy = 50 + row * 40;
              const r = isNa ? 14 : 18;
              return (
                <g key={`${row}-${col}`}>
                  {/* Bonds to neighbors */}
                  {col < 5 && (
                    <line
                      x1={cx + r}
                      y1={cy}
                      x2={cx + 50 - (isNa ? 18 : 14)}
                      y2={cy}
                      stroke="#d1d5db"
                      strokeWidth="1"
                    />
                  )}
                  {row < 5 && (
                    <line
                      x1={cx}
                      y1={cy + r}
                      x2={cx}
                      y2={cy + 40 - ((row + 1 + col) % 2 === 0 ? 14 : 18)}
                      stroke="#d1d5db"
                      strokeWidth="1"
                    />
                  )}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={isNa ? "#fca5a5" : "#86efac"}
                    stroke={isNa ? "#ef4444" : "#16a34a"}
                    strokeWidth="1.5"
                  />
                  <text
                    x={cx}
                    y={cy + 3}
                    textAnchor="middle"
                    fontSize={isNa ? "7" : "7"}
                    fontWeight="bold"
                    fill={isNa ? "#991b1b" : "#15803d"}
                  >
                    {isNa ? "Na\u207A" : "Cl\u207B"}
                  </text>
                </g>
              );
            })
          )}

          {/* Labels */}
          <text x="240" y="302" textAnchor="middle" fontSize="13" fill="#6b7280">
            Regelmäßige Anordnung: Jedes Na\u207A ist von 6 Cl\u207B umgeben und umgekehrt
          </text>
        </svg>
      )}

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {step === "transfer"
            ? "Natrium (1 Valenzelektron) gibt sein äußeres Elektron an Chlor (7 Valenzelektronen) ab. Beide erreichen Edelgaskonfiguration."
            : "Im NaCl-Kristall ordnen sich die Ionen alternierend an. Die Koordinationszahl beträgt 6 (jedes Ion hat 6 Nachbarn)."}
        </p>
      </div>
    </div>
  );
}
