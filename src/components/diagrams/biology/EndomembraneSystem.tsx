import { useState } from "react";

const parts = [
  {
    id: "nucleus",
    label: "Kernhülle",
    detail: "Doppelmembran mit Kernporen. Kontinuierlich mit dem rauen ER verbunden. Trennt Nukleoplasma vom Zytoplasma."
  },
  {
    id: "rer",
    label: "Raues ER",
    detail: "Mit Ribosomen besetzt. Ort der Proteinsynthese und -faltung für sekretorische und Membranproteine. Direkt mit Kernhülle verbunden."
  },
  {
    id: "ser",
    label: "Glattes ER",
    detail: "Ohne Ribosomen. Lipidsynthese, Detoxifikation, Ca²⁺-Speicherung. Metabolismus von Kohlenhydraten und Steroiden."
  },
  {
    id: "golgi",
    label: "Golgi-Apparat",
    detail: "Cis-Seite (Empfang), mediale Zisternen (Modifikation), Trans-Seite (Versand). Glykosylierung, Sortierung und Verpackung von Proteinen."
  },
  {
    id: "vesicles",
    label: "Transportvesikel",
    detail: "Membranumschlossene Strukturen. Transport von Proteinen und Lipiden zwischen Organellen. COPII (ER→Golgi), COPI (rückwärts), Clathrin (TGN→Ziele)."
  },
  {
    id: "lysosomes",
    label: "Lysosomen",
    detail: "Saures Milieu (pH 4.5-5.0). Enthalten hydrolytische Enzyme (Proteasen, Lipasen, Nukleasen). Intrazelluläre Verdauung und Autophagie."
  },
  {
    id: "endosomes",
    label: "Endosomen",
    detail: "Sortierstation für endozytiertes Material. Frühe Endosomen (pH 6.0-6.5), späte Endosomen (pH 5.0-6.0). Recycling oder Abbau."
  },
  {
    id: "membrane",
    label: "Zellmembran",
    detail: "Plasmamembran. Ziel der Exozytose (sekretorische Vesikel). Ursprung der Endozytose (Rezeptor-vermittelt oder Pinozytose)."
  },
];

type Part = (typeof parts)[number];

export default function EndomembraneSystem() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Endomembransystem</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Organellen für Details zum Membranfluss.</p>

      <svg viewBox="0 0 600 500" className="w-full max-w-2xl mx-auto">
        <defs>
          {/* Arrow markers */}
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#059669" />
          </marker>
          <marker id="arrowhead-endo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#dc2626" />
          </marker>
        </defs>

        {/* Cell outline */}
        <ellipse cx="300" cy="250" rx="280" ry="220" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />

        {/* Nuclear envelope */}
        <g
          onMouseEnter={() => setActive(parts[0])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <ellipse cx="150" cy="150" rx="70" ry="60" fill="#7c3aed" fillOpacity="0.2" stroke="#7c3aed" strokeWidth="3" />
          <ellipse cx="150" cy="150" rx="64" ry="54" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3,2" />
          {/* Nuclear pores */}
          <circle cx="130" cy="120" r="3" fill="#7c3aed" />
          <circle cx="170" cy="130" r="3" fill="#7c3aed" />
          <circle cx="160" cy="170" r="3" fill="#7c3aed" />
          <circle cx="140" cy="160" r="3" fill="#7c3aed" />
        </g>

        {/* Rough ER - connected to nucleus */}
        <g
          onMouseEnter={() => setActive(parts[1])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          {/* Connected to nuclear envelope */}
          <path d="M 220 140 Q 250 135 280 140 Q 290 145 295 155 Q 295 165 285 170 Q 270 175 250 172 Q 230 170 220 165 Z"
                fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2.5" />
          <path d="M 220 180 Q 250 175 280 180 Q 290 185 295 195 Q 295 205 285 210 Q 270 215 250 212 Q 230 210 220 205 Z"
                fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2.5" />
          {/* Ribosomes */}
          <circle cx="240" cy="142" r="2.5" fill="#1e40af" />
          <circle cx="260" cy="145" r="2.5" fill="#1e40af" />
          <circle cx="275" cy="150" r="2.5" fill="#1e40af" />
          <circle cx="240" cy="182" r="2.5" fill="#1e40af" />
          <circle cx="260" cy="185" r="2.5" fill="#1e40af" />
          <circle cx="275" cy="190" r="2.5" fill="#1e40af" />
        </g>

        {/* Smooth ER */}
        <g
          onMouseEnter={() => setActive(parts[2])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <path d="M 220 230 Q 250 225 280 230 Q 295 235 300 245 Q 300 255 290 260 Q 270 265 245 262 Q 225 260 220 250 Z"
                fill="#60a5fa" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="2.5" />
          <path d="M 230 270 Q 255 268 275 272 Q 285 277 287 285 Q 285 293 275 297 Q 255 300 240 296 Q 230 290 230 283 Z"
                fill="#60a5fa" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="2.5" />
        </g>

        {/* Golgi apparatus - cis, medial, trans */}
        <g
          onMouseEnter={() => setActive(parts[3])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          {/* Cis face (receiving from ER) */}
          <ellipse cx="360" cy="170" rx="45" ry="8" fill="#fbbf24" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="2" />
          <ellipse cx="365" cy="180" rx="47" ry="8" fill="#fbbf24" fillOpacity="0.5" stroke="#f59e0b" strokeWidth="2" />
          <ellipse cx="370" cy="190" rx="49" ry="8" fill="#fbbf24" fillOpacity="0.6" stroke="#f59e0b" strokeWidth="2" />
          <ellipse cx="375" cy="200" rx="50" ry="8" fill="#fbbf24" fillOpacity="0.7" stroke="#f59e0b" strokeWidth="2" />
          {/* Trans face (shipping) */}
          <ellipse cx="380" cy="210" rx="48" ry="8" fill="#fbbf24" fillOpacity="0.8" stroke="#f59e0b" strokeWidth="2.5" />
          <ellipse cx="383" cy="220" rx="45" ry="8" fill="#fbbf24" fillOpacity="0.9" stroke="#f59e0b" strokeWidth="2.5" />

          {/* Labels for Golgi faces */}
          <text x="310" y="173" fontSize="9" fill="#92400e" fontStyle="italic">cis</text>
          <text x="305" y="223" fontSize="9" fill="#92400e" fontStyle="italic">trans</text>
        </g>

        {/* Transport vesicles - ER to Golgi */}
        <g
          onMouseEnter={() => setActive(parts[4])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <circle cx="320" cy="175" r="8" fill="#10b981" fillOpacity="0.4" stroke="#059669" strokeWidth="2" />
          <circle cx="330" cy="195" r="7" fill="#10b981" fillOpacity="0.4" stroke="#059669" strokeWidth="2" />
          <circle cx="315" cy="205" r="6" fill="#10b981" fillOpacity="0.4" stroke="#059669" strokeWidth="2" />
        </g>

        {/* Transport vesicles - Golgi to membrane/lysosomes */}
        <g
          onMouseEnter={() => setActive(parts[4])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <circle cx="420" cy="235" r="8" fill="#10b981" fillOpacity="0.4" stroke="#059669" strokeWidth="2" />
          <circle cx="445" cy="250" r="7" fill="#10b981" fillOpacity="0.4" stroke="#059669" strokeWidth="2" />
          <circle cx="410" cy="270" r="7" fill="#10b981" fillOpacity="0.4" stroke="#059669" strokeWidth="2" />
        </g>

        {/* Lysosomes */}
        <g
          onMouseEnter={() => setActive(parts[5])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <circle cx="380" cy="320" r="25" fill="#ef4444" fillOpacity="0.3" stroke="#dc2626" strokeWidth="2.5" />
          {/* Enzymes representation */}
          <text x="374" y="318" fontSize="11" fill="#991b1b" fontWeight="bold">E</text>
          <text x="368" y="327" fontSize="9" fill="#991b1b">pH 5</text>
          <circle cx="365" cy="312" r="2" fill="#991b1b" />
          <circle cx="390" cy="315" r="2" fill="#991b1b" />
          <circle cx="375" cy="330" r="2" fill="#991b1b" />
        </g>

        {/* Endosomes */}
        <g
          onMouseEnter={() => setActive(parts[6])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <circle cx="480" cy="320" r="22" fill="#f97316" fillOpacity="0.3" stroke="#ea580c" strokeWidth="2.5" />
          <text x="470" y="325" fontSize="9" fill="#9a3412" fontWeight="bold">früh</text>
        </g>

        {/* Plasma membrane segments */}
        <g
          onMouseEnter={() => setActive(parts[7])}
          onMouseLeave={() => setActive(null)}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          {/* Exocytosis site */}
          <path d="M 500 240 Q 520 245 530 260" fill="none" stroke="#6b7280" strokeWidth="4" strokeLinecap="round" />
          <path d="M 496 238 Q 516 243 526 258" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />

          {/* Endocytosis site */}
          <path d="M 520 340 Q 530 335 540 330" fill="none" stroke="#6b7280" strokeWidth="4" strokeLinecap="round" />
          <path d="M 516 342 Q 526 337 536 332" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
          {/* Coated pit */}
          <circle cx="510" cy="350" r="8" fill="none" stroke="#6b7280" strokeWidth="2" strokeDasharray="2,1" />
        </g>

        {/* ARROWS showing flow - Secretory pathway */}
        {/* Nucleus to rER */}
        <path d="M 215 155 L 225 155" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* rER to Golgi (via vesicles) */}
        <path d="M 295 165 Q 320 168 340 170" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M 295 190 Q 320 193 340 185" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Golgi to membrane (exocytosis) */}
        <path d="M 410 215 Q 445 225 485 240" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Golgi to lysosomes */}
        <path d="M 385 228 Q 385 260 382 295" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* ARROWS showing flow - Endocytic pathway */}
        {/* Membrane to endosomes (endocytosis) */}
        <path d="M 515 330 Q 505 325 488 322" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead-endo)" />

        {/* Endosomes to lysosomes (fusion) */}
        <path d="M 460 320 Q 430 320 405 320" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead-endo)" />

        {/* Labels with leader lines */}
        {/* Kernhülle */}
        <line x1="150" y1="90" x2="150" y2="70" stroke="#7c3aed" strokeWidth="1" strokeDasharray="2,2" />
        <text x="155" y="68" fontSize="11" fill="#7c3aed" fontWeight="600">Kernhülle</text>

        {/* Raues ER */}
        <line x1="295" y1="155" x2="330" y2="135" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2,2" />
        <text x="335" y="138" fontSize="11" fill="#3b82f6" fontWeight="600">Raues ER</text>

        {/* Glattes ER */}
        <line x1="300" y1="245" x2="340" y2="245" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2,2" />
        <text x="345" y="248" fontSize="11" fill="#0284c7" fontWeight="600">Glattes ER</text>

        {/* Golgi */}
        <line x1="410" y1="195" x2="450" y2="185" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2,2" />
        <text x="455" y="188" fontSize="11" fill="#f59e0b" fontWeight="600">Golgi-Apparat</text>

        {/* Vesikel */}
        <line x1="428" y1="235" x2="460" y2="220" stroke="#059669" strokeWidth="1" strokeDasharray="2,2" />
        <text x="465" y="223" fontSize="11" fill="#059669" fontWeight="600">Vesikel</text>

        {/* Lysosomen */}
        <line x1="355" y1="325" x2="310" y2="340" stroke="#dc2626" strokeWidth="1" strokeDasharray="2,2" />
        <text x="240" y="343" fontSize="11" fill="#dc2626" fontWeight="600">Lysosomen</text>

        {/* Endosomen */}
        <line x1="500" y1="310" x2="520" y2="290" stroke="#ea580c" strokeWidth="1" strokeDasharray="2,2" />
        <text x="525" y="293" fontSize="11" fill="#ea580c" fontWeight="600">Endosomen</text>

        {/* Zellmembran */}
        <line x1="535" y1="260" x2="560" y2="250" stroke="#6b7280" strokeWidth="1" strokeDasharray="2,2" />
        <text x="490" y="245" fontSize="11" fill="#6b7280" fontWeight="600">Membran</text>

        {/* Pathway labels */}
        <text x="420" y="168" fontSize="10" fill="#059669" fontWeight="600" fontStyle="italic">Sekretorischer Weg</text>
        <text x="450" y="310" fontSize="10" fill="#dc2626" fontWeight="600" fontStyle="italic">Endozytose</text>

        {/* Legend */}
        <g transform="translate(20, 420)">
          <text x="0" y="0" fontSize="10" fill="#4b5563" fontWeight="600">Transportwege:</text>
          <line x1="0" y1="15" x2="30" y2="15" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="35" y="18" fontSize="9" fill="#4b5563">Sekretion (exo)</text>
          <line x1="150" y1="15" x2="180" y2="15" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead-endo)" />
          <text x="185" y="18" fontSize="9" fill="#4b5563">Endozytose</text>
        </g>
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
