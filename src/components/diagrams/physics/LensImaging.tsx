import { useState } from "react";

type LensType = "converging" | "diverging";

export default function LensImaging() {
  const [lens, setLens] = useState<LensType>("converging");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Linsenabbildung</h4>
      <p className="text-xs text-muted">Sammellinse und Zerstreuungslinse im Vergleich.</p>

      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setLens("converging")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            lens === "converging" ? "bg-teal-600 text-white border-teal-600" : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Sammellinse
        </button>
        <button
          onClick={() => setLens("diverging")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            lens === "diverging" ? "bg-teal-600 text-white border-teal-600" : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Zerstreuungslinse
        </button>
      </div>

      {lens === "converging" ? (
        <svg viewBox="0 0 480 300" className="w-full max-w-lg mx-auto">
          <defs>
            <marker id="arrowRayC" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <path d="M0,0 L6,2.5 L0,5" fill="#ef4444" />
            </marker>
            <marker id="arrowRayC2" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <path d="M0,0 L6,2.5 L0,5" fill="#3b82f6" />
            </marker>
            <marker id="arrowRayC3" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <path d="M0,0 L6,2.5 L0,5" fill="#22c55e" />
            </marker>
          </defs>

          <text x="240" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">Sammellinse (Konvexlinse)</text>

          {/* Optical axis */}
          <line x1="20" y1="150" x2="460" y2="150" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 3" />
          <text x="450" y="145" textAnchor="end" fontSize="7" fill="#6b7280">Optische Achse</text>

          {/* Lens */}
          <path d="M230,60 Q245,150 230,240" fill="none" stroke="#0d9488" strokeWidth="3" />
          <path d="M230,60 Q215,150 230,240" fill="none" stroke="#0d9488" strokeWidth="3" />
          {/* Arrows on lens */}
          <polygon points="230,60 224,72 236,72" fill="#0d9488" />
          <polygon points="230,240 224,228 236,228" fill="#0d9488" />

          {/* Focal points */}
          <circle cx="155" cy="150" r="4" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
          <text x="155" y="168" textAnchor="middle" fontSize="13" fill="#f59e0b" fontWeight="bold">F</text>

          <circle cx="305" cy="150" r="4" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
          <text x="305" y="168" textAnchor="middle" fontSize="13" fill="#f59e0b" fontWeight="bold">F&apos;</text>

          {/* 2F points */}
          <circle cx="80" cy="150" r="3" fill="#d97706" opacity="0.5" />
          <text x="80" y="168" textAnchor="middle" fontSize="7" fill="#d97706">2F</text>
          <circle cx="380" cy="150" r="3" fill="#d97706" opacity="0.5" />
          <text x="380" y="168" textAnchor="middle" fontSize="7" fill="#d97706">2F&apos;</text>

          {/* Object (Gegenstand) */}
          <line x1="100" y1="150" x2="100" y2="85" stroke="#0f766e" strokeWidth="2.5" />
          <polygon points="100,85 94,95 106,95" fill="#0f766e" />
          <text x="100" y="78" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">G</text>

          {/* Ray 1: Parallel ray -> through F' */}
          <line x1="100" y1="85" x2="230" y2="85" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowRayC)" />
          <line x1="230" y1="85" x2="420" y2="190" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="none" />

          {/* Ray 2: Through F -> parallel after lens */}
          <line x1="100" y1="85" x2="230" y2="150" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrowRayC2)" />
          <line x1="230" y1="150" x2="420" y2="150" stroke="#3b82f6" strokeWidth="1.5" />

          {/* Ray 3: Central ray (through center) */}
          <line x1="100" y1="85" x2="420" y2="190" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrowRayC3)" />

          {/* Image (Bild) - inverted */}
          <line x1="365" y1="150" x2="365" y2="190" stroke="#ef4444" strokeWidth="2.5" />
          <polygon points="365,190 359,180 371,180" fill="#ef4444" />
          <text x="365" y="202" textAnchor="middle" fontSize="13" fill="#ef4444" fontWeight="bold">B</text>
          <text x="365" y="214" textAnchor="middle" fontSize="7" fill="#6b7280">(reell, umgekehrt)</text>

          {/* Legend */}
          <line x1="30" y1="260" x2="50" y2="260" stroke="#ef4444" strokeWidth="1.5" />
          <text x="55" y="263" fontSize="7" fill="#ef4444">Parallelstrahl</text>
          <line x1="130" y1="260" x2="150" y2="260" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="155" y="263" fontSize="7" fill="#3b82f6">Brennpunktstrahl</text>
          <line x1="250" y1="260" x2="270" y2="260" stroke="#22c55e" strokeWidth="1.5" />
          <text x="275" y="263" fontSize="7" fill="#22c55e">Mittelpunktstrahl</text>

          {/* Formula */}
          <text x="240" y="285" textAnchor="middle" fontSize="13" fill="#0f766e">Linsengleichung: 1/f = 1/g + 1/b</text>
        </svg>
      ) : (
        <svg viewBox="0 0 480 300" className="w-full max-w-lg mx-auto">
          <defs>
            <marker id="arrowRayD" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <path d="M0,0 L6,2.5 L0,5" fill="#ef4444" />
            </marker>
            <marker id="arrowRayD2" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <path d="M0,0 L6,2.5 L0,5" fill="#3b82f6" />
            </marker>
            <marker id="arrowRayD3" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <path d="M0,0 L6,2.5 L0,5" fill="#22c55e" />
            </marker>
          </defs>

          <text x="240" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">Zerstreuungslinse (Konkavlinse)</text>

          {/* Optical axis */}
          <line x1="20" y1="150" x2="460" y2="150" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 3" />
          <text x="450" y="145" textAnchor="end" fontSize="7" fill="#6b7280">Optische Achse</text>

          {/* Diverging lens */}
          <path d="M240,60 Q225,150 240,240" fill="none" stroke="#0d9488" strokeWidth="3" />
          <path d="M240,60 Q255,150 240,240" fill="none" stroke="#0d9488" strokeWidth="3" />
          {/* Arrows on lens (pointing inward for diverging) */}
          <polygon points="240,60 234,72 246,72" fill="#0d9488" />
          <polygon points="240,240 234,228 246,228" fill="#0d9488" />

          {/* Focal points (virtual on same side for diverging) */}
          <circle cx="170" cy="150" r="4" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
          <text x="170" y="168" textAnchor="middle" fontSize="13" fill="#f59e0b" fontWeight="bold">F</text>

          <circle cx="310" cy="150" r="4" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
          <text x="310" y="168" textAnchor="middle" fontSize="13" fill="#f59e0b" fontWeight="bold">F&apos;</text>

          {/* Object */}
          <line x1="100" y1="150" x2="100" y2="85" stroke="#0f766e" strokeWidth="2.5" />
          <polygon points="100,85 94,95 106,95" fill="#0f766e" />
          <text x="100" y="78" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">G</text>

          {/* Ray 1: Parallel ray -> diverges, appears from F on same side */}
          <line x1="100" y1="85" x2="240" y2="85" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowRayD)" />
          <line x1="240" y1="85" x2="420" y2="55" stroke="#ef4444" strokeWidth="1.5" />
          {/* Virtual extension back to F */}
          <line x1="240" y1="85" x2="170" y2="110" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

          {/* Ray 2: Toward F' -> becomes parallel after lens */}
          <line x1="100" y1="85" x2="240" y2="130" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrowRayD2)" />
          <line x1="240" y1="130" x2="420" y2="100" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Virtual extension */}
          <line x1="240" y1="130" x2="170" y2="120" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

          {/* Ray 3: Central ray */}
          <line x1="100" y1="85" x2="420" y2="35" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrowRayD3)" />
          {/* Virtual extension */}
          <line x1="240" y1="60" x2="170" y2="107" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

          {/* Virtual image (aufrecht, verkleinert) */}
          <line x1="170" y1="150" x2="170" y2="115" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" />
          <polygon points="170,115 164,125 176,125" fill="#ef4444" opacity="0.7" />
          <text x="170" y="108" textAnchor="middle" fontSize="13" fill="#ef4444" fontWeight="bold">B</text>
          <text x="170" y="185" textAnchor="middle" fontSize="7" fill="#6b7280">(virtuell, aufrecht,</text>
          <text x="170" y="196" textAnchor="middle" fontSize="7" fill="#6b7280">verkleinert)</text>

          {/* Legend */}
          <line x1="30" y1="260" x2="50" y2="260" stroke="#ef4444" strokeWidth="1.5" />
          <text x="55" y="263" fontSize="7" fill="#ef4444">Parallelstrahl</text>
          <line x1="130" y1="260" x2="150" y2="260" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="155" y="263" fontSize="7" fill="#3b82f6">Brennpunktstrahl</text>
          <line x1="250" y1="260" x2="270" y2="260" stroke="#22c55e" strokeWidth="1.5" />
          <text x="275" y="263" fontSize="7" fill="#22c55e">Mittelpunktstrahl</text>
          <line x1="350" y1="260" x2="370" y2="260" stroke="#6b7280" strokeWidth="1" strokeDasharray="4 3" />
          <text x="375" y="263" fontSize="7" fill="#6b7280">Virtuelle Verlängerung</text>

          {/* Formula */}
          <text x="240" y="285" textAnchor="middle" fontSize="13" fill="#0f766e">f &lt; 0 bei Zerstreuungslinse | 1/f = 1/g + 1/b</text>
        </svg>
      )}

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {lens === "converging"
            ? "Die Sammellinse bündelt parallele Strahlen im Brennpunkt F. Bei Gegenstandsweite g > 2f entsteht ein reelles, umgekehrtes, verkleinertes Bild."
            : "Die Zerstreuungslinse zerstreut parallele Strahlen. Das Bild ist stets virtuell, aufrecht und verkleinert. Anwendung: Kurzsichtigkeit (Myopie)."}
        </p>
      </div>
    </div>
  );
}
