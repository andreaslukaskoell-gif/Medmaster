import { useState } from "react";

const parts = [
  {
    id: "g1",
    label: "G1-Phase",
    detail:
      "Wachstumsphase: Zellwachstum, Proteinsynthese, Organellenvermehrung. Zelle bereitet sich auf DNA-Replikation vor. G1/S-Checkpoint kontrolliert Zellgröße und DNA-Schäden.",
  },
  {
    id: "s",
    label: "S-Phase",
    detail:
      "Synthesephase: DNA-Replikation, Verdopplung des Genoms. Chromosomen werden dupliziert, Histonsynthese. Zelle hat nach S-Phase diploiden Chromosomensatz mit verdoppelter DNA.",
  },
  {
    id: "g2",
    label: "G2-Phase",
    detail:
      "Zweite Wachstumsphase: Vorbereitung auf Mitose, Proteinsynthese für Zellteilung, Organellenverdopplung. G2/M-Checkpoint prüft DNA-Replikation und Zellgröße.",
  },
  {
    id: "m",
    label: "M-Phase (Mitose)",
    detail:
      "Mitosephase: Kernteilung (Prophase, Metaphase, Anaphase, Telophase) und Cytokinese. Chromosomen werden auf zwei Tochterzellen verteilt. Spindelapparat trennt Schwesterchromatiden.",
  },
  {
    id: "g0",
    label: "G0-Phase",
    detail:
      "Ruhephase: Zellen treten aus Zellzyklus aus, differenzierte Zellen (z.B. Neuronen, Muskelzellen). Können permanent oder temporär in G0 verbleiben. Metabolisch aktiv aber nicht teilungsfähig.",
  },
  {
    id: "g1s-checkpoint",
    label: "G1/S-Checkpoint",
    detail:
      "Restriktionspunkt: Kontrolliert Zellgröße, Nährstoffverfügbarkeit, Wachstumssignale und DNA-Integrität. Entscheidet über Eintritt in S-Phase oder G0-Phase.",
  },
  {
    id: "g2m-checkpoint",
    label: "G2/M-Checkpoint",
    detail:
      "Kontrolliert vollständige DNA-Replikation, DNA-Schäden und Zellgröße. Verhindert Eintritt in Mitose bei Replikationsfehlern. Aktiviert DNA-Reparaturmechanismen.",
  },
];

type Part = (typeof parts)[number];

export default function CellCycle() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Zellzyklus</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Phasen für Details.</p>
      <svg viewBox="0 0 480 420" className="w-full max-w-xl mx-auto">
        <title>Zellzyklus — G1, S, G2, M-Phase</title>
        {/* Center circle for G0 */}
        <circle
          cx="240"
          cy="210"
          r="60"
          fill="#6b7280"
          opacity="0.3"
          stroke="#4b5563"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-50 transition-opacity"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "g0") || null)}
          onMouseLeave={() => setActive(null)}
        />

        {/* G1 Phase (blue) - top right quadrant, larger arc */}
        <path
          d="M 240 90 A 120 120 0 0 1 344.85 155.15 L 240 210 Z"
          fill="#3b82f6"
          opacity="0.7"
          stroke="#2563eb"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-90 transition-opacity"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "g1") || null)}
          onMouseLeave={() => setActive(null)}
        />

        {/* S Phase (green) - right side */}
        <path
          d="M 344.85 155.15 A 120 120 0 0 1 344.85 264.85 L 240 210 Z"
          fill="#10b981"
          opacity="0.7"
          stroke="#059669"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-90 transition-opacity"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "s") || null)}
          onMouseLeave={() => setActive(null)}
        />

        {/* G2 Phase (amber) - bottom right quadrant */}
        <path
          d="M 344.85 264.85 A 120 120 0 0 1 240 330 L 240 210 Z"
          fill="#f59e0b"
          opacity="0.7"
          stroke="#d97706"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-90 transition-opacity"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "g2") || null)}
          onMouseLeave={() => setActive(null)}
        />

        {/* M Phase (red) - bottom to left */}
        <path
          d="M 240 330 A 120 120 0 0 1 135.15 264.85 L 240 210 Z"
          fill="#ef4444"
          opacity="0.7"
          stroke="#dc2626"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-90 transition-opacity"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "m") || null)}
          onMouseLeave={() => setActive(null)}
        />

        {/* Back to G1 - left to top (completing circle) */}
        <path
          d="M 135.15 264.85 A 120 120 0 0 1 240 90 L 240 210 Z"
          fill="#3b82f6"
          opacity="0.5"
          stroke="#2563eb"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-70 transition-opacity"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "g1") || null)}
          onMouseLeave={() => setActive(null)}
        />

        {/* Clockwise arrows */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#1f2937" />
          </marker>
        </defs>

        {/* Arrow 1: G1 → S */}
        <path
          d="M 330 130 Q 350 140 345 160"
          fill="none"
          stroke="#1f2937"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Arrow 2: S → G2 */}
        <path
          d="M 350 230 Q 360 250 345 270"
          fill="none"
          stroke="#1f2937"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Arrow 3: G2 → M */}
        <path
          d="M 270 320 Q 250 335 230 330"
          fill="none"
          stroke="#1f2937"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Arrow 4: M → G1 */}
        <path
          d="M 160 250 Q 140 210 150 170"
          fill="none"
          stroke="#1f2937"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* G0 label line and text */}
        <line
          x1="240"
          y1="210"
          x2="240"
          y2="160"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <text x="240" y="155" textAnchor="middle" fontSize="11" fontWeight="600" fill="#4b5563">
          G0
        </text>

        {/* Phase labels with leader lines */}
        {/* G1 label */}
        <line
          x1="310"
          y1="130"
          x2="380"
          y2="90"
          stroke="#2563eb"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="385" y="90" fontSize="12" fontWeight="600" fill="#2563eb">
          G1
        </text>
        <text x="385" y="103" fontSize="9" fill="#1e40af">
          (Wachstum)
        </text>

        {/* S label */}
        <line
          x1="360"
          y1="210"
          x2="420"
          y2="210"
          stroke="#059669"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="425" y="210" fontSize="12" fontWeight="600" fill="#059669">
          S
        </text>
        <text x="425" y="223" fontSize="9" fill="#047857">
          (DNA-Synthese)
        </text>

        {/* G2 label */}
        <line
          x1="310"
          y1="290"
          x2="380"
          y2="330"
          stroke="#d97706"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="385" y="335" fontSize="12" fontWeight="600" fill="#d97706">
          G2
        </text>
        <text x="385" y="348" fontSize="9" fill="#b45309">
          (Vorbereitung)
        </text>

        {/* M label */}
        <line
          x1="180"
          y1="290"
          x2="110"
          y2="330"
          stroke="#dc2626"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="50" y="335" fontSize="12" fontWeight="600" fill="#dc2626">
          M (Mitose)
        </text>
        <text x="50" y="348" fontSize="9" fill="#b91c1c">
          (Zellteilung)
        </text>

        {/* Checkpoint markers */}
        {/* G1/S Checkpoint */}
        <circle
          cx="340"
          cy="155"
          r="8"
          fill="#fbbf24"
          stroke="#f59e0b"
          strokeWidth="2"
          className="cursor-pointer hover:r-10 transition-all"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "g1s-checkpoint") || null)}
          onMouseLeave={() => setActive(null)}
        />
        <line
          x1="340"
          y1="155"
          x2="390"
          y2="135"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="395" y="132" fontSize="9" fontWeight="600" fill="#d97706">
          G1/S-CP
        </text>

        {/* G2/M Checkpoint */}
        <circle
          cx="300"
          cy="300"
          r="8"
          fill="#fbbf24"
          stroke="#f59e0b"
          strokeWidth="2"
          className="cursor-pointer hover:r-10 transition-all"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "g2m-checkpoint") || null)}
          onMouseLeave={() => setActive(null)}
        />
        <line
          x1="300"
          y1="300"
          x2="340"
          y2="360"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="345" y="365" fontSize="9" fontWeight="600" fill="#d97706">
          G2/M-CP
        </text>

        {/* G0 exit arrow */}
        <path
          d="M 190 180 Q 170 190 160 200"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.5"
          strokeDasharray="3,3"
          markerEnd="url(#arrowhead)"
        />
        <text x="100" y="195" fontSize="8" fill="#6b7280">
          G0-Austritt
        </text>

        {/* Center indicator */}
        <text x="240" y="215" textAnchor="middle" fontSize="10" fontWeight="600" fill="#374151">
          Interphase
        </text>
      </svg>
      {active && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">{active.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{active.detail}</p>
        </div>
      )}
    </div>
  );
}
