import { useState } from "react";

const organelles = [
  { id: "nucleus", label: "Zellkern", x: 200, y: 180, rx: 55, ry: 40, color: "#0d9488", detail: "Enthält die DNA, steuert Genexpression. Doppelmembran mit Kernporen." },
  { id: "nucleolus", label: "Nukleolus", x: 210, y: 175, rx: 15, ry: 12, color: "#115e59", detail: "Bildungsort der ribosomalen RNA (rRNA). Liegt im Zellkern." },
  { id: "mito", label: "Mitochondrium", x: 100, y: 120, rx: 35, ry: 18, color: "#f97316", detail: "Kraftwerk der Zelle. ATP-Produktion durch oxidative Phosphorylierung. Eigene DNA!" },
  { id: "mito2", label: "Mitochondrium", x: 310, y: 260, rx: 30, ry: 16, color: "#f97316", detail: "Doppelmembran mit Cristae (Einfaltungen der inneren Membran)." },
  { id: "er-rough", label: "Raues ER", x: 290, y: 130, rx: 45, ry: 25, color: "#6366f1", detail: "Mit Ribosomen besetzt. Proteinsynthese und -faltung." },
  { id: "er-smooth", label: "Glattes ER", x: 120, y: 260, rx: 40, ry: 22, color: "#8b5cf6", detail: "Ohne Ribosomen. Lipidsynthese, Calciumspeicher, Entgiftung." },
  { id: "golgi", label: "Golgi-Apparat", x: 170, y: 300, rx: 35, ry: 20, color: "#eab308", detail: "Sortierung, Modifikation und Verpackung von Proteinen in Vesikel." },
  { id: "lysosome", label: "Lysosom", x: 280, y: 310, rx: 18, ry: 18, color: "#ef4444", detail: "Enthält hydrolytische Enzyme (pH 4-5). Intrazelluläre Verdauung." },
  { id: "centrosome", label: "Zentrosom", x: 250, y: 230, rx: 12, ry: 12, color: "#06b6d4", detail: "Organisationszentrum der Mikrotubuli. Wichtig für die Zellteilung (Spindelapparat)." },
  { id: "ribosome", label: "Ribosomen", x: 340, y: 180, rx: 6, ry: 6, color: "#6366f1", detail: "Ort der Translation (Proteinsynthese). 80S bei Eukaryoten." },
  { id: "peroxisome", label: "Peroxisom", x: 90, y: 200, rx: 14, ry: 14, color: "#a855f7", detail: "Abbau langkettiger Fettsäuren. Entgiftung von H₂O₂ durch Katalase." },
  { id: "vesicle", label: "Vesikel", x: 220, y: 290, rx: 10, ry: 10, color: "#14b8a6", detail: "Membranumhüllte Transportbläschen für Stoffe innerhalb der Zelle." },
];

export default function AnimalCell() {
  const [active, setActive] = useState<string | null>(null);
  const activeOrganelle = organelles.find((o) => o.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Tierzelle — Aufbau</h4>
      <p className="text-xs text-muted">Klicke auf eine Organelle für Details.</p>
      <svg viewBox="0 0 420 400" className="w-full max-w-lg mx-auto">
        {/* Cell membrane */}
        <ellipse cx="210" cy="210" rx="190" ry="175" fill="#f0fdfa" stroke="#0d9488" strokeWidth="3" />
        <ellipse cx="210" cy="210" rx="185" ry="170" fill="none" stroke="#0d9488" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />

        {/* Cytoplasm texture */}
        {[...Array(15)].map((_, i) => (
          <circle key={`dot-${i}`} cx={80 + Math.random() * 260} cy={80 + Math.random() * 260} r="1" fill="#99f6e4" opacity="0.5" />
        ))}

        {/* Rough ER lines */}
        <path d="M260,110 Q280,100 300,115 Q320,130 300,145 Q280,155 260,145" fill="none" stroke="#6366f1" strokeWidth="2" />
        <path d="M265,118 Q282,108 298,120 Q315,132 298,140 Q280,148 265,140" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        {/* Ribosomes on rough ER */}
        {[262, 275, 290, 305, 298, 285, 270].map((x, i) => (
          <circle key={`rib-${i}`} cx={x} cy={108 + (i % 2) * 44 + Math.sin(i) * 5} r="2.5" fill="#6366f1" />
        ))}

        {/* Smooth ER */}
        <path d="M90,245 Q110,235 130,250 Q150,265 130,278 Q110,288 90,275 Z" fill="none" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M96,252 Q112,243 126,254 Q142,265 126,274 Q112,282 96,272" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />

        {/* Golgi apparatus */}
        {[0, 8, 16].map((dy) => (
          <path key={`golgi-${dy}`} d={`M140,${288 + dy} Q170,${282 + dy} 200,${290 + dy}`} fill="none" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
        ))}

        {/* Mitochondria */}
        <ellipse cx="100" cy="120" rx="35" ry="18" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
        <path d="M72,120 Q85,110 100,120 Q115,130 128,120" fill="none" stroke="#f97316" strokeWidth="1.5" />
        <ellipse cx="310" cy="260" rx="30" ry="16" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
        <path d="M285,260 Q298,252 310,260 Q322,268 335,260" fill="none" stroke="#f97316" strokeWidth="1.5" />

        {/* Nucleus */}
        <ellipse cx="200" cy="180" rx="58" ry="43" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2.5" />
        {/* Nuclear pores */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return <circle key={`pore-${angle}`} cx={200 + 57 * Math.cos(rad) * 0.98} cy={180 + 42 * Math.sin(rad) * 0.98} r="3" fill="white" stroke="#0d9488" strokeWidth="1" />;
        })}
        {/* Nucleolus */}
        <ellipse cx="210" cy="175" rx="16" ry="13" fill="#ccfbf1" stroke="#115e59" strokeWidth="2" />

        {/* Lysosomes */}
        <circle cx="280" cy="310" r="18" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="280" y="314" textAnchor="middle" fontSize="7" fill="#ef4444" fontWeight="bold">pH 4.5</text>

        {/* Centrosome */}
        <circle cx="250" cy="230" r="12" fill="#ecfeff" stroke="#06b6d4" strokeWidth="2" />
        <line x1="244" y1="230" x2="256" y2="230" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="250" y1="224" x2="250" y2="236" stroke="#06b6d4" strokeWidth="1.5" />

        {/* Peroxisome */}
        <circle cx="90" cy="200" r="14" fill="#faf5ff" stroke="#a855f7" strokeWidth="2" />

        {/* Free ribosomes */}
        {[[340, 180], [345, 190], [335, 195], [350, 175]].map(([x, y], i) => (
          <circle key={`free-rib-${i}`} cx={x} cy={y} r="3" fill="#6366f1" />
        ))}

        {/* Transport vesicles */}
        <circle cx="220" cy="290" r="10" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="235" cy="280" r="7" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />

        {/* Clickable overlay areas */}
        {organelles.map((o) => (
          <ellipse
            key={o.id}
            cx={o.x}
            cy={o.y}
            rx={o.rx + 5}
            ry={o.ry + 5}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => setActive(o.id)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(active === o.id ? null : o.id)}
          />
        ))}

        {/* Hover highlight */}
        {active && (() => {
          const o = organelles.find((o) => o.id === active)!;
          return (
            <ellipse cx={o.x} cy={o.y} rx={o.rx + 3} ry={o.ry + 3} fill="none" stroke={o.color} strokeWidth="2.5" strokeDasharray="4 2" className="animate-pulse" />
          );
        })()}

        {/* Labels */}
        <text x="210" y="25" textAnchor="middle" fontSize="10" fill="#0d9488" fontWeight="bold">Zellmembran</text>
        <line x1="210" y1="28" x2="210" y2="38" stroke="#0d9488" strokeWidth="0.8" />
        <text x="200" y="182" textAnchor="middle" fontSize="9" fill="#115e59" fontWeight="bold">Zellkern</text>
        <text x="100" y="105" textAnchor="middle" fontSize="8" fill="#f97316">Mitochondrium</text>
        <text x="290" y="108" textAnchor="middle" fontSize="8" fill="#6366f1">Raues ER</text>
        <text x="120" y="242" textAnchor="middle" fontSize="8" fill="#8b5cf6">Glattes ER</text>
        <text x="170" y="282" textAnchor="middle" fontSize="8" fill="#eab308">Golgi</text>
        <text x="280" y="337" textAnchor="middle" fontSize="8" fill="#ef4444">Lysosom</text>
        <text x="340" y="170" textAnchor="middle" fontSize="7" fill="#6366f1">Ribosomen</text>
      </svg>

      {activeOrganelle && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold" style={{ color: activeOrganelle.color }}>{activeOrganelle.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeOrganelle.detail}</p>
        </div>
      )}
    </div>
  );
}
