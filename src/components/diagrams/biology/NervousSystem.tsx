import { useState } from "react";

const parts = [
  { id: "nervensystem", label: "Nervensystem", detail: "Gesamtes neuronales Steuerungssystem des Körpers – unterteilt in ZNS und PNS." },
  { id: "zns", label: "ZNS (Zentralnervensystem)", detail: "Gehirn und Rückenmark – zentrale Verarbeitung und Steuerung aller neuronalen Signale." },
  { id: "gehirn", label: "Gehirn", detail: "Höchstes Steuerungsorgan – Sitz von Bewusstsein, Denken, Gedächtnis und Koordination." },
  { id: "grosshirn", label: "Großhirn (Cortex)", detail: "Bewusstsein, Sprache, Motorik, Sensorik, Lernen und Gedächtnis." },
  { id: "kleinhirn", label: "Kleinhirn (Cerebellum)", detail: "Koordination von Bewegungen, Gleichgewicht und Feinmotorik." },
  { id: "hirnstamm", label: "Hirnstamm", detail: "Medulla, Pons, Mittelhirn – Steuerung lebenswichtiger Funktionen wie Atmung, Herzschlag, Reflexe." },
  { id: "zwischenhirn", label: "Zwischenhirn", detail: "Thalamus (Sinnesrelais) und Hypothalamus (Hormonsteuerung, Homöostase)." },
  { id: "rueckenmark", label: "Rückenmark", detail: "Leitet Signale zwischen Gehirn und Körper, steuert Reflexe." },
  { id: "pns", label: "PNS (Peripheres Nervensystem)", detail: "Alle Nerven außerhalb von Gehirn und Rückenmark – Verbindung zwischen ZNS und Körper." },
  { id: "somatisch", label: "Somatisches NS", detail: "Willkürliche Steuerung der Skelettmuskulatur und bewusste Wahrnehmung von Sinnesreizen." },
  { id: "vegetativ", label: "Vegetatives NS (Autonomes NS)", detail: "Unwillkürliche Steuerung innerer Organe, Drüsen und glatter Muskulatur – arbeitet autonom." },
  { id: "sympathikus", label: "Sympathikus", detail: "Fight or Flight – erhöht Herzfrequenz, erweitert Bronchien, hemmt Verdauung, Stressreaktion." },
  { id: "parasympathikus", label: "Parasympathikus", detail: "Rest and Digest – senkt Herzfrequenz, fördert Verdauung, Entspannung und Regeneration." },
];

type Part = (typeof parts)[number];

export default function NervousSystem() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Nervensystem — Übersicht</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Bereiche für Details.</p>
      <svg viewBox="0 0 600 520" className="w-full max-w-2xl mx-auto">
        {/* Connecting lines */}
        <g stroke="#94a3b8" strokeWidth="2" fill="none">
          {/* Main split: Nervensystem to ZNS/PNS */}
          <line x1="300" y1="50" x2="150" y2="90" />
          <line x1="300" y1="50" x2="450" y2="90" />

          {/* ZNS to Gehirn/Rückenmark */}
          <line x1="150" y1="130" x2="150" y2="170" />
          <line x1="150" y1="130" x2="100" y2="370" />

          {/* Gehirn to subdivisions */}
          <line x1="150" y1="210" x2="80" y2="250" />
          <line x1="150" y1="210" x2="150" y2="250" />
          <line x1="150" y1="210" x2="220" y2="250" />
          <line x1="150" y1="210" x2="220" y2="310" />

          {/* PNS to Somatisch/Vegetativ */}
          <line x1="450" y1="130" x2="380" y2="170" />
          <line x1="450" y1="130" x2="520" y2="170" />

          {/* Vegetativ to Sympathikus/Parasympathikus */}
          <line x1="520" y1="210" x2="480" y2="250" />
          <line x1="520" y1="210" x2="560" y2="250" />
        </g>

        {/* Level 1: Root */}
        <g
          onMouseEnter={() => setActive(parts[0])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="230" y="20" width="140" height="40" rx="6" fill="#64748b" stroke="#334155" strokeWidth="2" opacity="0.95" />
          <text x="300" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">Nervensystem</text>
        </g>

        {/* Level 2: ZNS */}
        <g
          onMouseEnter={() => setActive(parts[1])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="80" y="100" width="140" height="40" rx="6" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" opacity="0.95" />
          <text x="150" y="125" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">ZNS</text>
        </g>

        {/* Level 2: PNS */}
        <g
          onMouseEnter={() => setActive(parts[8])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="380" y="100" width="140" height="40" rx="6" fill="#64748b" stroke="#334155" strokeWidth="2" opacity="0.95" />
          <text x="450" y="125" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">PNS</text>
        </g>

        {/* Level 3: Gehirn */}
        <g
          onMouseEnter={() => setActive(parts[2])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="80" y="180" width="140" height="40" rx="6" fill="#60a5fa" stroke="#2563eb" strokeWidth="2" opacity="0.95" />
          <text x="150" y="205" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Gehirn</text>
        </g>

        {/* Level 3: Rückenmark */}
        <g
          onMouseEnter={() => setActive(parts[7])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="30" y="360" width="140" height="40" rx="6" fill="#60a5fa" stroke="#2563eb" strokeWidth="2" opacity="0.95" />
          <text x="100" y="385" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Rückenmark</text>
        </g>

        {/* Level 4: Großhirn */}
        <g
          onMouseEnter={() => setActive(parts[3])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="10" y="250" width="130" height="35" rx="5" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" opacity="0.95" />
          <text x="75" y="272" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e3a8a">Großhirn</text>
        </g>

        {/* Level 4: Kleinhirn */}
        <g
          onMouseEnter={() => setActive(parts[4])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="85" y="250" width="130" height="35" rx="5" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" opacity="0.95" />
          <text x="150" y="272" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e3a8a">Kleinhirn</text>
        </g>

        {/* Level 4: Hirnstamm */}
        <g
          onMouseEnter={() => setActive(parts[5])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="160" y="250" width="120" height="35" rx="5" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" opacity="0.95" />
          <text x="220" y="272" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e3a8a">Hirnstamm</text>
        </g>

        {/* Level 4: Zwischenhirn */}
        <g
          onMouseEnter={() => setActive(parts[6])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="160" y="300" width="120" height="35" rx="5" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" opacity="0.95" />
          <text x="220" y="322" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e3a8a">Zwischenhirn</text>
        </g>

        {/* Level 3: Somatisches NS */}
        <g
          onMouseEnter={() => setActive(parts[9])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="310" y="180" width="140" height="40" rx="6" fill="#10b981" stroke="#059669" strokeWidth="2" opacity="0.95" />
          <text x="380" y="205" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Somatisches NS</text>
        </g>

        {/* Level 3: Vegetatives NS */}
        <g
          onMouseEnter={() => setActive(parts[10])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="450" y="180" width="140" height="40" rx="6" fill="#94a3b8" stroke="#475569" strokeWidth="2" opacity="0.95" />
          <text x="520" y="198" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Vegetatives NS</text>
          <text x="520" y="213" textAnchor="middle" fontSize="10" fill="white">(Autonomes NS)</text>
        </g>

        {/* Level 4: Sympathikus */}
        <g
          onMouseEnter={() => setActive(parts[11])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="410" y="260" width="130" height="40" rx="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" opacity="0.95" />
          <text x="475" y="285" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Sympathikus</text>
        </g>

        {/* Level 4: Parasympathikus */}
        <g
          onMouseEnter={() => setActive(parts[12])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer"
        >
          <rect x="430" y="320" width="160" height="40" rx="5" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="2" opacity="0.95" />
          <text x="510" y="345" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Parasympathikus</text>
        </g>

        {/* Additional labels for functional keywords */}
        <text x="475" y="295" textAnchor="middle" fontSize="8" fill="#fee2e2" fontStyle="italic">fight or flight</text>
        <text x="510" y="355" textAnchor="middle" fontSize="8" fill="#ede9fe" fontStyle="italic">rest and digest</text>
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
