import { useState } from "react";

type WaveView = "transversal" | "longitudinal";

export default function WaveTypes() {
  const [view, setView] = useState<WaveView>("transversal");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Wellentypen</h4>
      <p className="text-xs text-muted">Transversal- und Longitudinalwellen im Vergleich.</p>

      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setView("transversal")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            view === "transversal" ? "bg-teal-600 text-white border-teal-600" : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Transversalwelle
        </button>
        <button
          onClick={() => setView("longitudinal")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            view === "longitudinal" ? "bg-teal-600 text-white border-teal-600" : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Longitudinalwelle
        </button>
      </div>

      {view === "transversal" ? (
        <svg viewBox="0 0 460 280" className="w-full max-w-lg mx-auto">
          <defs>
            <marker id="arrowTW" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="#0d9488" />
            </marker>
            <marker id="arrowAmpl" markerWidth="6" markerHeight="5" refX="3" refY="2.5" orient="auto">
              <path d="M0,0 L6,2.5 L0,5" fill="#ef4444" />
            </marker>
          </defs>

          <text x="230" y="22" textAnchor="middle" fontSize="12" fill="#0f766e" fontWeight="bold">Transversalwelle</text>
          <text x="230" y="38" textAnchor="middle" fontSize="8" fill="#6b7280">Schwingung senkrecht zur Ausbreitungsrichtung</text>

          {/* Equilibrium line */}
          <line x1="40" y1="140" x2="430" y2="140" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 3" />

          {/* Sine wave */}
          <path
            d="M40,140 C65,70 95,70 120,140 C145,210 175,210 200,140 C225,70 255,70 280,140 C305,210 335,210 360,140 C385,70 415,70 430,140"
            fill="none"
            stroke="#0d9488"
            strokeWidth="2.5"
          />

          {/* Amplitude markers */}
          <line x1="120" y1="140" x2="120" y2="70" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="115" y1="70" x2="125" y2="70" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="115" y1="140" x2="125" y2="140" stroke="#ef4444" strokeWidth="1.5" />
          {/* Double arrow for amplitude */}
          <line x1="130" y1="140" x2="130" y2="74" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowAmpl)" />
          <line x1="130" y1="70" x2="130" y2="136" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowAmpl)" />
          <text x="145" y="108" fontSize="9" fill="#ef4444" fontWeight="bold">Amplitude (A)</text>

          {/* Wavelength */}
          <line x1="40" y1="55" x2="200" y2="55" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="40" y1="50" x2="40" y2="60" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="200" y1="50" x2="200" y2="60" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="120" y="50" textAnchor="middle" fontSize="9" fill="#3b82f6" fontWeight="bold">Wellenlänge (\u03BB)</text>

          {/* Direction arrow */}
          <line x1="40" y1="230" x2="140" y2="230" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrowTW)" />
          <text x="155" y="234" fontSize="9" fill="#0d9488" fontWeight="bold">Ausbreitungsrichtung</text>

          {/* Oscillation direction */}
          <line x1="25" y1="110" x2="25" y2="170" stroke="#f59e0b" strokeWidth="2" />
          <polygon points="25,106 20,116 30,116" fill="#f59e0b" />
          <polygon points="25,174 20,164 30,164" fill="#f59e0b" />
          <text x="18" y="102" fontSize="6" fill="#f59e0b">Schwingung</text>

          {/* Labels */}
          <text x="78" y="68" fontSize="7" fill="#0f766e">Wellenberg</text>
          <text x="158" y="218" fontSize="7" fill="#0f766e">Wellental</text>

          {/* Example */}
          <text x="230" y="265" textAnchor="middle" fontSize="8" fill="#6b7280">Beispiele: Lichtwellen, Seilwellen, Wasserwellen (Oberflaeche)</text>
        </svg>
      ) : (
        <svg viewBox="0 0 460 280" className="w-full max-w-lg mx-auto">
          <defs>
            <marker id="arrowLW" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="#0d9488" />
            </marker>
          </defs>

          <text x="230" y="22" textAnchor="middle" fontSize="12" fill="#0f766e" fontWeight="bold">Longitudinalwelle</text>
          <text x="230" y="38" textAnchor="middle" fontSize="8" fill="#6b7280">Schwingung in Ausbreitungsrichtung</text>

          {/* Particle rows */}
          {[0, 1, 2].map((row) => {
            const baseY = 80 + row * 50;
            const particles: { x: number; compressed: boolean }[] = [];

            for (let i = 0; i < 30; i++) {
              const baseX = 30 + i * 14;
              // Simulate compression and rarefaction
              const phase = (i / 30) * Math.PI * 4;
              const offset = Math.sin(phase) * 3;
              const isCompressed = Math.sin(phase) < -0.3;
              particles.push({ x: baseX + offset, compressed: isCompressed });
            }

            return (
              <g key={row}>
                {particles.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={baseY}
                    r={p.compressed ? 5 : 4}
                    fill={p.compressed ? "#0d9488" : "#99f6e4"}
                    stroke="#0f766e"
                    strokeWidth="1"
                    opacity={p.compressed ? 1 : 0.7}
                  />
                ))}
              </g>
            );
          })}

          {/* Compression/Rarefaction labels */}
          <rect x="58" y="195" width="70" height="20" rx="3" fill="#0d9488" opacity="0.15" />
          <text x="93" y="209" textAnchor="middle" fontSize="8" fill="#0f766e" fontWeight="bold">Verdichtung</text>

          <rect x="120" y="195" width="70" height="20" rx="3" fill="#99f6e4" opacity="0.3" />
          <text x="155" y="209" textAnchor="middle" fontSize="8" fill="#0f766e" fontWeight="bold">Verdünnung</text>

          {/* Wavelength bracket */}
          <line x1="55" y1="60" x2="163" y2="60" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="55" y1="55" x2="55" y2="65" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="163" y1="55" x2="163" y2="65" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="109" y="55" textAnchor="middle" fontSize="9" fill="#3b82f6" fontWeight="bold">Wellenlänge (\u03BB)</text>

          {/* Direction arrow */}
          <line x1="40" y1="235" x2="140" y2="235" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrowLW)" />
          <text x="155" y="239" fontSize="9" fill="#0d9488" fontWeight="bold">Ausbreitungsrichtung</text>

          {/* Oscillation direction */}
          <line x1="200" y1="235" x2="280" y2="235" stroke="#f59e0b" strokeWidth="2" />
          <polygon points="283,235 273,230 273,240" fill="#f59e0b" />
          <polygon points="197,235 207,230 207,240" fill="#f59e0b" />
          <text x="240" y="248" textAnchor="middle" fontSize="7" fill="#f59e0b">Schwingungsrichtung = Ausbreitungsrichtung</text>

          {/* Example */}
          <text x="230" y="270" textAnchor="middle" fontSize="8" fill="#6b7280">Beispiele: Schallwellen in Luft, Druckwellen</text>
        </svg>
      )}

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {view === "transversal"
            ? "Bei Transversalwellen schwingt das Medium senkrecht zur Ausbreitungsrichtung. Die Amplitude ist die maximale Auslenkung. Beispiel: Elektromagnetische Wellen."
            : "Bei Longitudinalwellen schwingt das Medium in Ausbreitungsrichtung. Es entstehen Verdichtungen und Verdünnungen. Beispiel: Schallwellen."}
        </p>
      </div>
    </div>
  );
}
