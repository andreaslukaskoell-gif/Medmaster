import { useState } from "react";

const parts = [
  {
    id: "mouth",
    label: "Mundhöhle",
    detail:
      "Mechanische Verdauung durch Zähne, enzymatische Verdauung durch Amylase aus Speicheldrüsen",
  },
  {
    id: "esophagus",
    label: "Ösophagus",
    detail:
      "Peristaltik: rhythmische Muskelkontraktionen transportieren Nahrung zum Magen (~25 cm)",
  },
  {
    id: "stomach",
    label: "Magen",
    detail:
      "Produktion von HCl und Pepsin für Proteinverdauung, sehr saures Milieu (pH 1-2), Speicherung und Durchmischung",
  },
  {
    id: "liver",
    label: "Leber",
    detail:
      "Galleproduktion für Fettverdauung, Entgiftung, Glykogenspeicherung, Proteinbiosynthese, größtes inneres Organ",
  },
  {
    id: "gallbladder",
    label: "Gallenblase",
    detail: "Speicherung und Konzentration der Galle, Abgabe in Duodenum bei Nahrungsaufnahme",
  },
  {
    id: "pancreas",
    label: "Pankreas (Bauchspeicheldrüse)",
    detail:
      "Exokrine Funktion: Verdauungsenzyme (Lipase, Amylase, Trypsin) und Bikarbonat. Endokrine Funktion: Insulin und Glukagon",
  },
  {
    id: "small-intestine",
    label: "Dünndarm (Duodenum, Jejunum, Ileum)",
    detail:
      "Hauptort der Nährstoffaufnahme, Zotten und Mikrovilli vergrößern Oberfläche enorm, Länge 6-7 m",
  },
  {
    id: "large-intestine",
    label: "Dickdarm (Colon)",
    detail: "Wasserrückresorption, bakterielle Flora produziert Vitamine (K, B12), Länge ca. 1,5 m",
  },
  {
    id: "rectum",
    label: "Rektum/Anus",
    detail:
      "Speicherung der Fäzes, kontrollierte Defäkation durch Schließmuskeln (innerer glatt, äußerer quergestreift)",
  },
];

type Part = (typeof parts)[number];

export default function DigestiveSystem() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Verdauungssystem</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Organe für Details.</p>
      <svg viewBox="0 0 420 520" className="w-full max-w-xl mx-auto">
        <title>Verdauungstrakt — Mund bis Dickdarm</title>
        {/* Mouth */}
        <ellipse
          id="mouth"
          cx="210"
          cy="30"
          rx="15"
          ry="10"
          fill="#fbbf24"
          stroke="#78350f"
          strokeWidth="2"
          onClick={() => setActive(parts[0])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Esophagus */}
        <rect
          id="esophagus"
          x="200"
          y="40"
          width="20"
          height="60"
          fill="#f97316"
          stroke="#7c2d12"
          strokeWidth="2"
          rx="3"
          onClick={() => setActive(parts[1])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Stomach */}
        <path
          id="stomach"
          d="M 185 100 Q 170 110 175 130 L 180 160 Q 185 175 210 175 Q 235 175 240 160 L 245 130 Q 250 110 235 100 Z"
          fill="#ef4444"
          stroke="#7f1d1d"
          strokeWidth="2"
          onClick={() => setActive(parts[2])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Liver */}
        <path
          id="liver"
          d="M 120 120 L 160 110 L 200 115 L 240 110 L 280 120 L 275 155 L 200 160 L 125 155 Z"
          fill="#7c3aed"
          stroke="#4c1d95"
          strokeWidth="2"
          onClick={() => setActive(parts[3])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Gallbladder */}
        <ellipse
          id="gallbladder"
          cx="245"
          cy="145"
          rx="12"
          ry="18"
          fill="#10b981"
          stroke="#065f46"
          strokeWidth="2"
          onClick={() => setActive(parts[4])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Pancreas */}
        <ellipse
          id="pancreas"
          cx="180"
          cy="155"
          rx="40"
          ry="15"
          fill="#ec4899"
          stroke="#831843"
          strokeWidth="2"
          onClick={() => setActive(parts[5])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Small intestine (winding path) */}
        <path
          id="small-intestine"
          d="M 210 180 L 220 200 Q 240 210 250 230 Q 255 250 235 265 Q 210 275 190 270 Q 170 265 165 245 Q 162 225 180 215 Q 200 210 215 225 Q 225 240 215 255 Q 200 265 185 260 Q 175 255 180 240 L 190 220 L 205 200"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="18"
          strokeLinecap="round"
          onClick={() => setActive(parts[6])}
          className="cursor-pointer hover:opacity-70 transition-opacity"
        />

        {/* Small intestine overlay for click detection */}
        <path
          d="M 210 180 L 220 200 Q 240 210 250 230 Q 255 250 235 265 Q 210 275 190 270 Q 170 265 165 245 Q 162 225 180 215 Q 200 210 215 225 Q 225 240 215 255 Q 200 265 185 260 Q 175 255 180 240 L 190 220 L 205 200"
          fill="none"
          stroke="transparent"
          strokeWidth="30"
          onClick={() => setActive(parts[6])}
          className="cursor-pointer"
        />

        {/* Large intestine (colon frame) */}
        <path
          id="large-intestine"
          d="M 205 285 L 160 290 L 140 310 L 140 360 Q 140 380 160 385 L 260 385 Q 280 380 280 360 L 280 310 L 260 290 L 215 285"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => setActive(parts[7])}
          className="cursor-pointer hover:opacity-70 transition-opacity"
        />

        {/* Large intestine overlay for click detection */}
        <path
          d="M 205 285 L 160 290 L 140 310 L 140 360 Q 140 380 160 385 L 260 385 Q 280 380 280 360 L 280 310 L 260 290 L 215 285"
          fill="none"
          stroke="transparent"
          strokeWidth="35"
          onClick={() => setActive(parts[7])}
          className="cursor-pointer"
        />

        {/* Rectum and Anus */}
        <rect
          id="rectum"
          x="200"
          y="385"
          width="20"
          height="50"
          fill="#6b7280"
          stroke="#1f2937"
          strokeWidth="2"
          rx="3"
          onClick={() => setActive(parts[8])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
        <circle
          cx="210"
          cy="445"
          r="8"
          fill="#374151"
          stroke="#111827"
          strokeWidth="2"
          onClick={() => setActive(parts[8])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Flow direction arrows */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            fill="#1f2937"
          >
            <polygon points="0 0, 10 3, 0 6" />
          </marker>
        </defs>

        <path
          d="M 218 45 L 218 55"
          stroke="#1f2937"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          fill="none"
        />
        <path
          d="M 218 95 L 218 105"
          stroke="#1f2937"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          fill="none"
        />
        <path
          d="M 215 175 L 215 185"
          stroke="#1f2937"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          fill="none"
        />
        <path
          d="M 208 380 L 208 390"
          stroke="#1f2937"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          fill="none"
        />

        {/* Labels with dashed leader lines */}

        {/* Mundhöhle label */}
        <line
          x1="225"
          y1="30"
          x2="280"
          y2="20"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="285" y="22" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Mundhöhle
        </text>

        {/* Ösophagus label */}
        <line
          x1="220"
          y1="70"
          x2="280"
          y2="60"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="285" y="62" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Ösophagus
        </text>

        {/* Magen label */}
        <line
          x1="245"
          y1="130"
          x2="300"
          y2="120"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="305" y="122" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Magen
        </text>

        {/* Leber label */}
        <line
          x1="120"
          y1="135"
          x2="60"
          y2="110"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="15" y="112" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Leber
        </text>

        {/* Gallenblase label */}
        <line
          x1="257"
          y1="145"
          x2="310"
          y2="155"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="315" y="157" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Gallenblase
        </text>

        {/* Pankreas label */}
        <line
          x1="140"
          y1="155"
          x2="80"
          y2="165"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="15" y="167" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Pankreas
        </text>

        {/* Dünndarm label */}
        <line
          x1="255"
          y1="240"
          x2="310"
          y2="235"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="315" y="237" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Dünndarm
        </text>

        {/* Dickdarm label */}
        <line
          x1="140"
          y1="340"
          x2="80"
          y2="340"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="15" y="342" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Dickdarm
        </text>

        {/* Rektum/Anus label */}
        <line
          x1="220"
          y1="415"
          x2="280"
          y2="425"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="285" y="427" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Rektum/Anus
        </text>

        {/* Additional anatomical markers */}
        <text
          x="150"
          y="505"
          fontSize="9"
          fill="#6b7280"
          className="dark:fill-gray-400"
          fontStyle="italic"
        >
          Gesamtlänge GI-Trakt: ~8-9 m
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
