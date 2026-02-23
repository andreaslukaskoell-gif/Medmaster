import { useState } from "react";

type CircuitType = "series" | "parallel";

export default function CircuitDiagram() {
  const [view, setView] = useState<CircuitType>("series");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Schaltkreise</h4>
      <p className="text-xs text-muted">Reihen- und Parallelschaltung im Vergleich.</p>

      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setView("series")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            view === "series"
              ? "bg-teal-600 text-white border-teal-600"
              : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Reihenschaltung
        </button>
        <button
          onClick={() => setView("parallel")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            view === "parallel"
              ? "bg-teal-600 text-white border-teal-600"
              : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Parallelschaltung
        </button>
      </div>

      {view === "series" ? (
        <svg viewBox="0 0 460 300" className="w-full max-w-lg mx-auto">
          <text x="230" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            Reihenschaltung
          </text>

          {/* Battery */}
          <line x1="60" y1="80" x2="60" y2="200" stroke="#374151" strokeWidth="2" />
          <line x1="46" y1="120" x2="74" y2="120" stroke="#374151" strokeWidth="3" />
          <line x1="52" y1="135" x2="68" y2="135" stroke="#374151" strokeWidth="2" />
          <text x="38" y="115" fontSize="13" fill="#ef4444" fontWeight="bold">
            +
          </text>
          <text x="38" y="142" fontSize="13" fill="#3b82f6" fontWeight="bold">
            \u2013
          </text>
          <text x="60" y="215" textAnchor="middle" fontSize="13" fill="#374151">
            U
          </text>

          {/* Top wire */}
          <line x1="60" y1="80" x2="400" y2="80" stroke="#374151" strokeWidth="2" />
          {/* Bottom wire */}
          <line x1="60" y1="200" x2="400" y2="200" stroke="#374151" strokeWidth="2" />
          {/* Right wire */}
          <line x1="400" y1="80" x2="400" y2="200" stroke="#374151" strokeWidth="2" />

          {/* R1 */}
          <rect
            x="140"
            y="65"
            width="60"
            height="30"
            rx="4"
            fill="#f0fdfa"
            stroke="#0d9488"
            strokeWidth="2"
          />
          <text x="170" y="85" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            R\u2081
          </text>

          {/* R2 */}
          <rect
            x="260"
            y="65"
            width="60"
            height="30"
            rx="4"
            fill="#f0fdfa"
            stroke="#0d9488"
            strokeWidth="2"
          />
          <text x="290" y="85" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            R\u2082
          </text>

          {/* Current arrows */}
          <polygon points="108,76 118,80 108,84" fill="#ef4444" />
          <text x="110" y="70" fontSize="7" fill="#ef4444" fontWeight="bold">
            I
          </text>

          <polygon points="228,76 238,80 228,84" fill="#ef4444" />

          <polygon points="362,76 372,80 362,84" fill="#ef4444" />

          <polygon points="352,204 342,200 352,196" fill="#ef4444" />
          <text x="340" y="215" fontSize="7" fill="#ef4444" fontWeight="bold">
            I
          </text>

          {/* Voltage labels */}
          <path d="M140,52 L200,52" stroke="#3b82f6" strokeWidth="1" />
          <text x="170" y="48" textAnchor="middle" fontSize="7" fill="#3b82f6">
            U\u2081
          </text>
          <path d="M260,52 L320,52" stroke="#3b82f6" strokeWidth="1" />
          <text x="290" y="48" textAnchor="middle" fontSize="7" fill="#3b82f6">
            U\u2082
          </text>

          {/* Formulas */}
          <rect
            x="100"
            y="230"
            width="260"
            height="55"
            rx="6"
            fill="#f0fdfa"
            stroke="#99f6e4"
            strokeWidth="1"
          />
          <text x="230" y="248" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            Reihenschaltung
          </text>
          <text x="120" y="264" fontSize="13" fill="#374151">
            R_ges = R\u2081 + R\u2082
          </text>
          <text x="120" y="278" fontSize="13" fill="#374151">
            I = I\u2081 = I\u2082 (gleich)
          </text>
          <text x="280" y="264" fontSize="13" fill="#374151">
            U = U\u2081 + U\u2082
          </text>
          <text x="280" y="278" fontSize="13" fill="#374151">
            Strom ueberall gleich
          </text>
        </svg>
      ) : (
        <svg viewBox="0 0 460 320" className="w-full max-w-lg mx-auto">
          <text x="230" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            Parallelschaltung
          </text>

          {/* Battery */}
          <line x1="60" y1="70" x2="60" y2="220" stroke="#374151" strokeWidth="2" />
          <line x1="46" y1="125" x2="74" y2="125" stroke="#374151" strokeWidth="3" />
          <line x1="52" y1="140" x2="68" y2="140" stroke="#374151" strokeWidth="2" />
          <text x="38" y="120" fontSize="13" fill="#ef4444" fontWeight="bold">
            +
          </text>
          <text x="38" y="147" fontSize="13" fill="#3b82f6" fontWeight="bold">
            \u2013
          </text>
          <text x="45" y="165" fontSize="13" fill="#374151">
            U
          </text>

          {/* Top wire */}
          <line x1="60" y1="70" x2="400" y2="70" stroke="#374151" strokeWidth="2" />
          {/* Bottom wire */}
          <line x1="60" y1="220" x2="400" y2="220" stroke="#374151" strokeWidth="2" />
          {/* Right wire */}
          <line x1="400" y1="70" x2="400" y2="220" stroke="#374151" strokeWidth="2" />

          {/* Branch point left */}
          <circle cx="160" cy="70" r="4" fill="#374151" />
          <circle cx="160" cy="220" r="4" fill="#374151" />

          {/* Branch point right */}
          <circle cx="330" cy="70" r="4" fill="#374151" />
          <circle cx="330" cy="220" r="4" fill="#374151" />

          {/* Branch 1 (top) */}
          <line x1="160" y1="70" x2="160" y2="110" stroke="#374151" strokeWidth="2" />
          <rect
            x="220"
            y="95"
            width="60"
            height="30"
            rx="4"
            fill="#f0fdfa"
            stroke="#0d9488"
            strokeWidth="2"
          />
          <text x="250" y="115" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            R\u2081
          </text>
          <line x1="160" y1="110" x2="220" y2="110" stroke="#374151" strokeWidth="2" />
          <line x1="280" y1="110" x2="330" y2="110" stroke="#374151" strokeWidth="2" />
          <line x1="330" y1="70" x2="330" y2="110" stroke="#374151" strokeWidth="2" />

          {/* Branch 2 (bottom) */}
          <line x1="160" y1="220" x2="160" y2="180" stroke="#374151" strokeWidth="2" />
          <rect
            x="220"
            y="165"
            width="60"
            height="30"
            rx="4"
            fill="#f0fdfa"
            stroke="#0d9488"
            strokeWidth="2"
          />
          <text x="250" y="185" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            R\u2082
          </text>
          <line x1="160" y1="180" x2="220" y2="180" stroke="#374151" strokeWidth="2" />
          <line x1="280" y1="180" x2="330" y2="180" stroke="#374151" strokeWidth="2" />
          <line x1="330" y1="220" x2="330" y2="180" stroke="#374151" strokeWidth="2" />

          {/* Current arrows - main */}
          <polygon points="108,66 118,70 108,74" fill="#ef4444" />
          <text x="110" y="62" fontSize="7" fill="#ef4444" fontWeight="bold">
            I
          </text>

          {/* Current arrows - branches */}
          <polygon points="185,106 195,110 185,114" fill="#ef4444" />
          <text x="188" y="100" fontSize="7" fill="#ef4444">
            I\u2081
          </text>

          <polygon points="185,176 195,180 185,184" fill="#ef4444" />
          <text x="188" y="170" fontSize="7" fill="#ef4444">
            I\u2082
          </text>

          {/* Return current */}
          <polygon points="352,224 342,220 352,216" fill="#ef4444" />

          {/* Voltage labels */}
          <text x="250" y="88" textAnchor="middle" fontSize="7" fill="#3b82f6">
            U\u2081 = U
          </text>
          <text x="250" y="160" textAnchor="middle" fontSize="7" fill="#3b82f6">
            U\u2082 = U
          </text>

          {/* Formulas */}
          <rect
            x="90"
            y="245"
            width="280"
            height="60"
            rx="6"
            fill="#f0fdfa"
            stroke="#99f6e4"
            strokeWidth="1"
          />
          <text x="230" y="262" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            Parallelschaltung
          </text>
          <text x="110" y="278" fontSize="13" fill="#374151">
            1/R_ges = 1/R\u2081 + 1/R\u2082
          </text>
          <text x="110" y="294" fontSize="13" fill="#374151">
            I = I\u2081 + I\u2082 (geteilt)
          </text>
          <text x="290" y="278" fontSize="13" fill="#374151">
            U = U\u2081 = U\u2082
          </text>
          <text x="290" y="294" fontSize="13" fill="#374151">
            Spannung ueberall gleich
          </text>
        </svg>
      )}

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {view === "series"
            ? "In der Reihenschaltung fließt der gleiche Strom durch alle Bauteile. Die Gesamtspannung teilt sich auf. Der Gesamtwiderstand ist die Summe der Einzelwiderstände."
            : "In der Parallelschaltung liegt an allen Zweigen die gleiche Spannung an. Der Strom teilt sich auf. Der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand."}
        </p>
      </div>
    </div>
  );
}
