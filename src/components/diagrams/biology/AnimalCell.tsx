import { useState } from "react";

const organelles = [
  { id: "nucleus", label: "Zellkern", x: 280, y: 230, rx: 60, ry: 45, color: "#0d9488", detail: "Enthält die DNA, steuert Genexpression. Doppelmembran mit Kernporen." },
  { id: "nucleolus", label: "Nukleolus", x: 290, y: 225, rx: 16, ry: 13, color: "#115e59", detail: "Bildungsort der ribosomalen RNA (rRNA). Liegt im Zellkern." },
  { id: "mito", label: "Mitochondrium", x: 180, y: 160, rx: 38, ry: 19, color: "#f97316", detail: "Kraftwerk der Zelle. ATP-Produktion durch oxidative Phosphorylierung. Eigene DNA!" },
  { id: "mito2", label: "Mitochondrium", x: 380, y: 310, rx: 33, ry: 17, color: "#f97316", detail: "Doppelmembran mit Cristae (Einfaltungen der inneren Membran)." },
  { id: "er-rough", label: "Raues ER", x: 370, y: 175, rx: 48, ry: 27, color: "#6366f1", detail: "Mit Ribosomen besetzt. Proteinsynthese und -faltung." },
  { id: "er-smooth", label: "Glattes ER", x: 190, y: 320, rx: 42, ry: 24, color: "#8b5cf6", detail: "Ohne Ribosomen. Lipidsynthese, Calciumspeicher, Entgiftung." },
  { id: "golgi", label: "Golgi-Apparat", x: 250, y: 360, rx: 38, ry: 22, color: "#eab308", detail: "Sortierung, Modifikation und Verpackung von Proteinen in Vesikel." },
  { id: "lysosome", label: "Lysosom", x: 350, y: 365, rx: 19, ry: 19, color: "#ef4444", detail: "Enthält hydrolytische Enzyme (pH 4-5). Intrazelluläre Verdauung." },
  { id: "centrosome", label: "Zentrosom", x: 330, y: 275, rx: 13, ry: 13, color: "#06b6d4", detail: "Organisationszentrum der Mikrotubuli. Wichtig für die Zellteilung (Spindelapparat)." },
  { id: "ribosome", label: "Ribosomen", x: 420, y: 230, rx: 6, ry: 6, color: "#6366f1", detail: "Ort der Translation (Proteinsynthese). 80S bei Eukaryoten." },
  { id: "peroxisome", label: "Peroxisom", x: 160, y: 250, rx: 15, ry: 15, color: "#a855f7", detail: "Abbau langkettiger Fettsäuren. Entgiftung von H₂O₂ durch Katalase." },
  { id: "vesicle", label: "Vesikel", x: 300, y: 345, rx: 11, ry: 11, color: "#14b8a6", detail: "Membranumhüllte Transportbläschen für Stoffe innerhalb der Zelle." },
];

/* External label positions: { organelleId -> { lx, ly } } */
const labelPositions: Record<string, { lx: number; ly: number }> = {
  "nucleus":    { lx: 68,  ly: 115 },
  "nucleolus":  { lx: 68,  ly: 145 },
  "mito":       { lx: 30,  ly: 60  },
  "mito2":      { lx: 540, ly: 395 },
  "er-rough":   { lx: 530, ly: 80  },
  "er-smooth":  { lx: 30,  ly: 405 },
  "golgi":      { lx: 130, ly: 470 },
  "lysosome":   { lx: 440, ly: 465 },
  "centrosome": { lx: 530, ly: 275 },
  "ribosome":   { lx: 540, ly: 160 },
  "peroxisome": { lx: 30,  ly: 280 },
  "vesicle":    { lx: 340, ly: 470 },
};

export default function AnimalCell() {
  const [active, setActive] = useState<string | null>(null);
  const activeOrganelle = organelles.find((o) => o.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Tierzelle — Aufbau</h4>
      <p className="text-xs text-muted">Klicke auf eine Organelle für Details.</p>
      <svg viewBox="0 0 600 500" className="w-full max-w-2xl mx-auto">
        <defs>
          {/* Radial gradient for cell background */}
          <radialGradient id="cellGradient" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#ccfbf1" />
            <stop offset="60%" stopColor="#f0fdfa" />
            <stop offset="100%" stopColor="#e0f7f2" />
          </radialGradient>
        </defs>

        {/* Cell membrane */}
        <ellipse cx="290" cy="260" rx="210" ry="195" fill="url(#cellGradient)" stroke="#0d9488" strokeWidth="3" />
        <ellipse cx="290" cy="260" rx="205" ry="190" fill="none" stroke="#0d9488" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />

        {/* Cytoplasm texture dots */}
        {[
          [140, 150], [180, 380], [350, 140], [400, 350], [220, 200],
          [330, 390], [150, 300], [410, 260], [260, 140], [370, 220],
          [200, 270], [310, 180], [240, 400], [430, 300], [120, 210],
        ].map(([cx, cy], i) => (
          <circle key={`dot-${i}`} cx={cx} cy={cy} r="1.2" fill="#99f6e4" opacity="0.5" />
        ))}

        {/* Rough ER lines */}
        <path d="M335,150 Q360,138 385,155 Q405,172 385,188 Q360,200 335,188" fill="none" stroke="#6366f1" strokeWidth="2" />
        <path d="M341,158 Q362,148 382,160 Q398,173 382,183 Q362,193 341,183" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        {/* Ribosomes on rough ER */}
        {[338, 352, 368, 384, 380, 365, 348].map((x, i) => (
          <circle key={`rib-${i}`} cx={x} cy={148 + (i % 2) * 46 + Math.sin(i) * 5} r="2.8" fill="#6366f1" />
        ))}

        {/* Smooth ER */}
        <path d="M158,302 Q180,290 200,308 Q220,326 200,340 Q180,352 158,338 Z" fill="none" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M165,309 Q183,300 197,312 Q213,324 197,334 Q183,343 165,333" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />

        {/* Golgi apparatus */}
        {[0, 9, 18].map((dy) => (
          <path key={`golgi-${dy}`} d={`M218,${346 + dy} Q250,${339 + dy} 282,${348 + dy}`} fill="none" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
        ))}

        {/* Mitochondrium 1 (top-left) */}
        <ellipse cx="180" cy="160" rx="38" ry="19" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
        <path d="M148,160 Q163,149 180,160 Q197,171 212,160" fill="none" stroke="#f97316" strokeWidth="1.5" />

        {/* Mitochondrium 2 (bottom-right) */}
        <ellipse cx="380" cy="310" rx="33" ry="17" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
        <path d="M352,310 Q366,301 380,310 Q394,319 408,310" fill="none" stroke="#f97316" strokeWidth="1.5" />

        {/* Nucleus */}
        <ellipse cx="280" cy="230" rx="63" ry="48" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2.5" />
        {/* Nuclear pores */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return <circle key={`pore-${angle}`} cx={280 + 62 * Math.cos(rad)} cy={230 + 47 * Math.sin(rad)} r="3.2" fill="white" stroke="#0d9488" strokeWidth="1" />;
        })}
        {/* Nucleolus */}
        <ellipse cx="290" cy="225" rx="17" ry="14" fill="#ccfbf1" stroke="#115e59" strokeWidth="1.5" />

        {/* Lysosome */}
        <circle cx="350" cy="365" r="19" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
        <text x="350" y="369" textAnchor="middle" fontSize="13" fill="#ef4444" fontWeight="bold">pH 4.5</text>

        {/* Centrosome */}
        <circle cx="330" cy="275" r="13" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="323" y1="275" x2="337" y2="275" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="330" y1="268" x2="330" y2="282" stroke="#06b6d4" strokeWidth="1.5" />

        {/* Peroxisome */}
        <circle cx="160" cy="250" r="15" fill="#faf5ff" stroke="#a855f7" strokeWidth="1.5" />

        {/* Free ribosomes */}
        {[[420, 230], [426, 241], [415, 246], [432, 224]].map(([x, y], i) => (
          <circle key={`free-rib-${i}`} cx={x} cy={y} r="3.2" fill="#6366f1" />
        ))}

        {/* Transport vesicles */}
        <circle cx="300" cy="345" r="11" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="316" cy="334" r="7.5" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />

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
            <ellipse cx={o.x} cy={o.y} rx={o.rx + 4} ry={o.ry + 4} fill="none" stroke={o.color} strokeWidth="2.5" strokeDasharray="4 2" className="animate-pulse" />
          );
        })()}

        {/* Leader lines + labels with white halo */}
        {organelles.map((o) => {
          const lp = labelPositions[o.id];
          if (!lp) return null;
          const { lx, ly } = lp;
          const isLeft = lx < 290;
          const anchor = isLeft ? "start" : "end";
          const isImportant = o.id === "nucleus" || o.id === "mito" || o.id === "mito2";
          const fSize = isImportant ? 14 : 13;
          const fWeight = isImportant ? "600" : "normal";
          return (
            <g key={`label-${o.id}`}>
              {/* Leader line */}
              <line
                x1={o.x}
                y1={o.y}
                x2={lx + (isLeft ? 2 : -2)}
                y2={ly}
                stroke="#94a3b8"
                strokeWidth="0.8"
                strokeDasharray="3 2"
              />
              {/* Small dot at organelle end */}
              <circle cx={o.x} cy={o.y} r="2" fill="#94a3b8" />
              {/* White halo behind text */}
              <text
                x={lx}
                y={ly}
                textAnchor={anchor}
                fontSize={fSize}
                fontWeight={fWeight}
                fill="#1f2937"
                stroke="white"
                strokeWidth="4"
                paintOrder="stroke"
              >
                {o.label}
              </text>
              {/* Foreground text */}
              <text
                x={lx}
                y={ly}
                textAnchor={anchor}
                fontSize={fSize}
                fontWeight={fWeight}
                fill="#1f2937"
              >
                {o.label}
              </text>
            </g>
          );
        })}

        {/* Zellmembran label (special — not an organelle object) */}
        <text x="290" y="30" textAnchor="middle" fontSize="14" fill="#1f2937" fontWeight="600" stroke="white" strokeWidth="4" paintOrder="stroke">Zellmembran</text>
        <text x="290" y="30" textAnchor="middle" fontSize="14" fill="#1f2937" fontWeight="600">Zellmembran</text>
        <line x1="290" y1="34" x2="290" y2="66" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3 2" />
        <circle cx="290" cy="66" r="2" fill="#94a3b8" />
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
