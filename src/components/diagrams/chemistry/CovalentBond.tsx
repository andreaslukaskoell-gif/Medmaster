import { useState } from "react";

export default function CovalentBond() {
  const [showDipole, setShowDipole] = useState(true);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Kovalente Bindung — H\u2082O
      </h4>
      <p className="text-xs text-muted">Lewis-Struktur, Bindungswinkel und Dipolmoment.</p>
      <svg viewBox="0 0 420 350" className="w-full max-w-lg mx-auto">
        <defs>
          <radialGradient id="oGrad" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#ef4444" />
          </radialGradient>
          <radialGradient id="hGrad" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </radialGradient>
          <marker id="dipoleArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#0d9488" />
          </marker>
        </defs>

        <text x="210" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          H\u2082O — Kovalente Bindung
        </text>

        {/* Lewis Structure section */}
        <text x="130" y="50" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Lewis-Struktur
        </text>

        {/* O atom center */}
        <circle cx="130" cy="110" r="28" fill="url(#oGrad)" stroke="#dc2626" strokeWidth="2" />
        <text x="130" y="114" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">
          O
        </text>

        {/* H atoms */}
        <circle cx="60" cy="165" r="18" fill="url(#hGrad)" stroke="#2563eb" strokeWidth="2" />
        <text x="60" y="169" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">
          H
        </text>

        <circle cx="200" cy="165" r="18" fill="url(#hGrad)" stroke="#2563eb" strokeWidth="2" />
        <text x="200" y="169" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">
          H
        </text>

        {/* Bonding lines */}
        <line x1="108" y1="130" x2="74" y2="152" stroke="#374151" strokeWidth="2.5" />
        <line x1="152" y1="130" x2="186" y2="152" stroke="#374151" strokeWidth="2.5" />

        {/* Shared electron pairs on bonds */}
        <circle cx="90" cy="140" r="3.5" fill="#f59e0b" stroke="#d97706" strokeWidth="0.8" />
        <circle cx="96" cy="135" r="3.5" fill="#f59e0b" stroke="#d97706" strokeWidth="0.8" />
        <circle cx="164" cy="140" r="3.5" fill="#f59e0b" stroke="#d97706" strokeWidth="0.8" />
        <circle cx="170" cy="135" r="3.5" fill="#f59e0b" stroke="#d97706" strokeWidth="0.8" />

        {/* Lone pairs on O */}
        <circle cx="118" cy="80" r="3" fill="#f59e0b" opacity="0.7" />
        <circle cx="126" cy="78" r="3" fill="#f59e0b" opacity="0.7" />
        <circle cx="136" cy="78" r="3" fill="#f59e0b" opacity="0.7" />
        <circle cx="144" cy="80" r="3" fill="#f59e0b" opacity="0.7" />
        <text x="130" y="72" textAnchor="middle" fontSize="6" fill="#6b7280">
          Freie e\u207B-Paare
        </text>

        {/* Bond angle */}
        <path
          d="M92,138 Q130,155 168,138"
          fill="none"
          stroke="#0d9488"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <text x="130" y="162" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
          104,5\u00B0
        </text>

        {/* 3D model section */}
        <text x="330" y="50" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Raumstruktur
        </text>

        {/* 3D-ish water molecule */}
        <circle
          cx="330"
          cy="110"
          r="32"
          fill="url(#oGrad)"
          stroke="#dc2626"
          strokeWidth="2"
          opacity="0.9"
        />
        <text x="330" y="114" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">
          O
        </text>

        <circle cx="268" cy="168" r="20" fill="url(#hGrad)" stroke="#2563eb" strokeWidth="2" />
        <text x="268" y="172" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
          H
        </text>

        <circle cx="392" cy="168" r="20" fill="url(#hGrad)" stroke="#2563eb" strokeWidth="2" />
        <text x="392" y="172" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
          H
        </text>

        {/* Bonds */}
        <line x1="305" y1="132" x2="281" y2="153" stroke="#374151" strokeWidth="3" />
        <line x1="355" y1="132" x2="379" y2="153" stroke="#374151" strokeWidth="3" />

        {/* Partial charges */}
        <text x="330" y="82" textAnchor="middle" fontSize="13" fill="#dc2626" fontWeight="bold">
          \u03B4\u2013
        </text>
        <text x="250" y="172" textAnchor="middle" fontSize="13" fill="#2563eb" fontWeight="bold">
          \u03B4+
        </text>
        <text x="410" y="172" textAnchor="middle" fontSize="13" fill="#2563eb" fontWeight="bold">
          \u03B4+
        </text>

        {/* Angle arc */}
        <path
          d="M296,140 Q330,160 364,140"
          fill="none"
          stroke="#0d9488"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <text x="330" y="165" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
          104,5\u00B0
        </text>

        {/* Dipole arrow */}
        {showDipole && (
          <g>
            <line
              x1="330"
              y1="200"
              x2="330"
              y2="240"
              stroke="#0d9488"
              strokeWidth="2.5"
              markerEnd="url(#dipoleArrow)"
            />
            <text x="330" y="204" textAnchor="middle" fontSize="13" fill="#0d9488">
              +
            </text>
            <line x1="325" y1="198" x2="335" y2="198" stroke="#0d9488" strokeWidth="1.5" />
            <text x="355" y="225" fontSize="13" fill="#0d9488" fontWeight="bold">
              Dipolmoment
            </text>
            <text x="355" y="236" fontSize="7" fill="#6b7280">
              \u03BC = 1,85 D
            </text>
          </g>
        )}

        {/* Explanation section */}
        <rect
          x="20"
          y="210"
          rx="6"
          width="220"
          height="120"
          fill="#f0fdfa"
          stroke="#99f6e4"
          strokeWidth="1"
        />
        <text x="130" y="228" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Zusammenfassung
        </text>
        <text x="30" y="244" fontSize="13" fill="#374151">
          Bindungstyp: Kovalent (polar)
        </text>
        <text x="30" y="258" fontSize="13" fill="#374151">
          Bindungswinkel: 104,5\u00B0
        </text>
        <text x="30" y="272" fontSize="13" fill="#374151">
          Geometrie: Gewinkelt
        </text>
        <text x="30" y="286" fontSize="13" fill="#374151">
          Freie e\u207B-Paare am O: 2
        </text>
        <text x="30" y="300" fontSize="13" fill="#374151">
          Bindende e\u207B-Paare: 2
        </text>
        <text x="30" y="314" fontSize="13" fill="#374151">
          \u0394EN (O\u2013H): 1,4 → Polar
        </text>
      </svg>

      <div className="flex gap-2">
        <button
          onClick={() => setShowDipole(!showDipole)}
          className="text-xs px-3 py-1 rounded-full border border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
        >
          {showDipole ? "Dipol ausblenden" : "Dipol anzeigen"}
        </button>
      </div>
    </div>
  );
}
