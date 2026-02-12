import { useState } from "react";

const plantOnly = [
  { id: "zellwand", label: "Zellwand", detail: "Starre Hülle aus Cellulose. Gibt der Pflanzenzelle Form und Stabilität." },
  { id: "chloroplast", label: "Chloroplasten", detail: "Ort der Fotosynthese. Enthalten Chlorophyll (gruener Farbstoff). Eigene DNA!" },
  { id: "vakuole", label: "Große Vakuole", detail: "Zentralvakuole speichert Wasser, Ionen, Farbstoffe. Erzeugt Turgor (Zellinnendruck)." },
];

const shared = [
  { id: "kern", label: "Zellkern", detail: "Enthält die DNA und steuert die Genexpression." },
  { id: "mito", label: "Mitochondrien", detail: "Kraftwerke der Zelle – ATP-Produktion durch Zellatmung." },
  { id: "er", label: "ER", detail: "Endoplasmatisches Retikulum – Protein- und Lipidsynthese." },
  { id: "golgi", label: "Golgi-Apparat", detail: "Sortierung, Modifikation und Verpackung von Proteinen." },
];

type InfoItem = { id: string; label: string; detail: string };

export default function PlantVsAnimalCell() {
  const [active, setActive] = useState<InfoItem | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Pflanzenzelle vs. Tierzelle</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Strukturen fuer Details.</p>

      <svg viewBox="0 0 500 320" className="w-full max-w-xl mx-auto">
        {/* Background */}
        <rect x="0" y="0" width="500" height="320" fill="none" />

        {/* ===== PLANT CELL (left) ===== */}
        <text x="125" y="20" textAnchor="middle" fontSize="11" fill="#0d9488" fontWeight="bold">Pflanzenzelle</text>

        {/* Cell wall */}
        <rect x="18" y="30" width="214" height="260" rx="18" fill="none" stroke="#0f766e" strokeWidth="4" />
        <text x="24" y="48" fontSize="7" fill="#0f766e" fontWeight="bold">Zellwand</text>

        {/* Cell membrane */}
        <ellipse cx="125" cy="160" rx="95" ry="120" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="2" />

        {/* Central vacuole */}
        <ellipse
          cx="125" cy="175" rx="55" ry="50"
          fill="#ccfbf1" stroke="#0d9488" strokeWidth="2"
          className="cursor-pointer"
          onClick={() => setActive(plantOnly[2])}
          onMouseEnter={() => setActive(plantOnly[2])}
          onMouseLeave={() => setActive(null)}
        />
        <text x="125" y="178" textAnchor="middle" fontSize="8" fill="#115e59" fontWeight="bold">Vakuole</text>

        {/* Chloroplasts */}
        <ellipse cx="70" cy="90" rx="22" ry="12" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5"
          className="cursor-pointer"
          onClick={() => setActive(plantOnly[1])}
          onMouseEnter={() => setActive(plantOnly[1])}
          onMouseLeave={() => setActive(null)}
        />
        <line x1="55" y1="90" x2="85" y2="90" stroke="#16a34a" strokeWidth="0.8" />
        <line x1="58" y1="85" x2="82" y2="85" stroke="#16a34a" strokeWidth="0.8" />
        <line x1="58" y1="95" x2="82" y2="95" stroke="#16a34a" strokeWidth="0.8" />
        <text x="70" y="80" textAnchor="middle" fontSize="7" fill="#16a34a">Chloroplast</text>

        <ellipse cx="170" cy="100" rx="18" ry="10" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5"
          className="cursor-pointer"
          onClick={() => setActive(plantOnly[1])}
          onMouseEnter={() => setActive(plantOnly[1])}
          onMouseLeave={() => setActive(null)}
        />

        {/* Nucleus */}
        <ellipse cx="125" cy="105" rx="28" ry="20" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2"
          className="cursor-pointer"
          onClick={() => setActive(shared[0])}
          onMouseEnter={() => setActive(shared[0])}
          onMouseLeave={() => setActive(null)}
        />
        <circle cx="130" cy="103" r="7" fill="#ccfbf1" stroke="#115e59" strokeWidth="1.5" />
        <text x="125" y="108" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">Kern</text>

        {/* Mitochondria */}
        <ellipse cx="80" cy="245" rx="18" ry="9" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5"
          className="cursor-pointer"
          onClick={() => setActive(shared[1])}
          onMouseEnter={() => setActive(shared[1])}
          onMouseLeave={() => setActive(null)}
        />
        <text x="80" y="262" textAnchor="middle" fontSize="6" fill="#f97316">Mito.</text>

        {/* ER */}
        <path d="M150,240 Q165,232 175,242 Q185,252 175,258" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        <text x="168" y="270" textAnchor="middle" fontSize="6" fill="#6366f1">ER</text>

        {/* Golgi */}
        {[0, 5, 10].map((dy) => (
          <path key={`pg-${dy}`} d={`M55,${225 + dy} Q70,${220 + dy} 85,${226 + dy}`} fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
        ))}
        <text x="70" y="218" textAnchor="middle" fontSize="6" fill="#eab308">Golgi</text>

        {/* Cell wall clickable */}
        <rect x="18" y="30" width="214" height="260" rx="18" fill="transparent"
          className="cursor-pointer"
          onClick={() => setActive(plantOnly[0])}
          onMouseEnter={() => setActive(plantOnly[0])}
          onMouseLeave={() => setActive(null)}
          style={{ pointerEvents: "stroke" } as React.CSSProperties}
        />

        {/* ===== ANIMAL CELL (right) ===== */}
        <text x="375" y="20" textAnchor="middle" fontSize="11" fill="#0d9488" fontWeight="bold">Tierzelle</text>

        {/* Cell membrane */}
        <ellipse cx="375" cy="165" rx="100" ry="125" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="2.5" />
        <ellipse cx="375" cy="165" rx="96" ry="121" fill="none" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />

        {/* Nucleus */}
        <ellipse cx="375" cy="130" rx="30" ry="22" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2"
          className="cursor-pointer"
          onClick={() => setActive(shared[0])}
          onMouseEnter={() => setActive(shared[0])}
          onMouseLeave={() => setActive(null)}
        />
        <circle cx="380" cy="128" r="8" fill="#ccfbf1" stroke="#115e59" strokeWidth="1.5" />
        <text x="375" y="134" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">Kern</text>

        {/* Mitochondria */}
        <ellipse cx="340" cy="200" rx="20" ry="10" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5"
          className="cursor-pointer"
          onClick={() => setActive(shared[1])}
          onMouseEnter={() => setActive(shared[1])}
          onMouseLeave={() => setActive(null)}
        />
        <path d="M325,200 Q333,194 340,200 Q347,206 355,200" fill="none" stroke="#f97316" strokeWidth="1" />
        <text x="340" y="218" textAnchor="middle" fontSize="6" fill="#f97316">Mito.</text>

        <ellipse cx="410" cy="230" rx="18" ry="9" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />

        {/* ER */}
        <path d="M400,170 Q420,162 435,175 Q445,185 430,192 Q415,198 400,190" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        <text x="420" y="160" textAnchor="middle" fontSize="6" fill="#6366f1">ER</text>

        {/* Golgi */}
        {[0, 6, 12].map((dy) => (
          <path key={`ag-${dy}`} d={`M330,${240 + dy} Q355,${234 + dy} 370,${241 + dy}`} fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
        ))}
        <text x="350" y="237" textAnchor="middle" fontSize="6" fill="#eab308">Golgi</text>

        {/* Lysosome (animal only) */}
        <circle cx="420" cy="260" r="12" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
        <text x="420" y="263" textAnchor="middle" fontSize="6" fill="#ef4444">Lysosom</text>

        {/* Centrosome (animal only) */}
        <circle cx="375" cy="80" r="8" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="371" y1="80" x2="379" y2="80" stroke="#06b6d4" strokeWidth="1" />
        <line x1="375" y1="76" x2="375" y2="84" stroke="#06b6d4" strokeWidth="1" />
        <text x="375" y="72" textAnchor="middle" fontSize="6" fill="#06b6d4">Zentrosom</text>

        {/* Divider */}
        <line x1="250" y1="30" x2="250" y2="310" stroke="#0d9488" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />

        {/* Legend at bottom */}
        <rect x="30" y="298" width="8" height="8" rx="2" fill="#16a34a" opacity="0.7" />
        <text x="42" y="306" fontSize="7" fill="#115e59">Nur Pflanzenzelle</text>

        <rect x="140" y="298" width="8" height="8" rx="2" fill="#14b8a6" opacity="0.7" />
        <text x="152" y="306" fontSize="7" fill="#115e59">Gemeinsam</text>

        <rect x="230" y="298" width="8" height="8" rx="2" fill="#ef4444" opacity="0.7" />
        <text x="242" y="306" fontSize="7" fill="#115e59">Nur Tierzelle</text>
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
