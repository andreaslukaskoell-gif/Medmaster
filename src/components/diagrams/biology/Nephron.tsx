import { useState } from "react";

const parts = [
  { id: "bowman", label: "Bowman-Kapsel", detail: "Umgibt den Glomerulus. Hier findet die Ultrafiltration statt: Blutplasma wird in den Tubulus abgepresst (Primärharn ~180 L/Tag)." },
  { id: "glomerulus", label: "Glomerulus", detail: "Knauel aus Kapillaren. Hoher Blutdruck presst Wasser, Ionen, Glukose, Harnstoff durch die Filtrationsbarriere." },
  { id: "proximal", label: "Proximaler Tubulus", detail: "Rückresorption von ~65% des Filtrats: Glukose, Aminosäuren, Na+, HCO3-, Wasser. Aktiver und passiver Transport." },
  { id: "henle", label: "Henle-Schleife", detail: "Absteigender Schenkel: wasserpermeabel. Aufsteigender Schenkel: wasserimpermeabel, aktive Na+/Cl--Resorption. Erzeugt Konzentrationsgradient im Mark." },
  { id: "distal", label: "Distaler Tubulus", detail: "Feinregulation: Na+-Resorption (Aldosteron), Ca2+-Resorption (PTH). Sekretion von H+ und K+." },
  { id: "sammelrohr", label: "Sammelrohr", detail: "ADH reguliert Wasserrückresorption. Aldosteron: Na+-Resorption. Endgültiger Harn wird konzentriert (~1.5 L/Tag)." },
  { id: "filtration", label: "Filtration", detail: "Im Glomerulus: Blutdruck presst Primärharn durch die Filtrationsbarriere (Endothel, Basalmembran, Podozyten)." },
  { id: "reabsorption", label: "Rückresorption", detail: "Nützliche Stoffe (Glukose, Aminosäuren, Wasser, Ionen) werden aus dem Tubulus zurück ins Blut aufgenommen." },
  { id: "sekretion", label: "Sekretion", detail: "Abfallstoffe (H+, K+, Medikamente, Kreatinin) werden aus dem Blut in den Tubulus abgegeben." },
];

type Part = (typeof parts)[number];

export default function Nephron() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Nephron — Aufbau &amp; Funktion</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Strukturen für Details.</p>

      <svg viewBox="0 0 480 420" className="w-full max-w-xl mx-auto">
        {/* Cortex / Medulla zones */}
        <rect x="10" y="10" width="460" height="160" rx="0" fill="#f0fdfa" opacity="0.3" />
        <rect x="10" y="170" width="460" height="240" rx="0" fill="#ccfbf1" opacity="0.2" />
        <text x="460" y="28" textAnchor="end" fontSize="13" fill="#0d9488" fontWeight="bold">Rinde (Cortex)</text>
        <text x="460" y="188" textAnchor="end" fontSize="13" fill="#0d9488" fontWeight="bold">Mark (Medulla)</text>
        <line x1="10" y1="170" x2="470" y2="170" stroke="#0d9488" strokeWidth="1" strokeDasharray="6 3" opacity="0.5" />

        {/* ===== BOWMAN'S CAPSULE + GLOMERULUS ===== */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[0])} onMouseLeave={() => setActive(null)}>
          <ellipse cx="120" cy="80" rx="45" ry="40" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="120" y="38" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">Bowman-Kapsel</text>
        </g>

        {/* Glomerulus */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[1])} onMouseLeave={() => setActive(null)}>
          {/* Capillary loops */}
          <path d="M105,65 Q95,75 105,85 Q115,95 105,105" fill="none" stroke="#ef4444" strokeWidth="2" />
          <path d="M115,60 Q105,72 115,82 Q125,92 115,102" fill="none" stroke="#ef4444" strokeWidth="2" />
          <path d="M125,65 Q115,75 125,85 Q135,95 125,105" fill="none" stroke="#ef4444" strokeWidth="2" />
          <path d="M135,60 Q125,72 135,82 Q145,92 135,102" fill="none" stroke="#ef4444" strokeWidth="2" />
          <text x="120" y="82" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Glomerulus</text>
        </g>

        {/* Afferent / Efferent arterioles */}
        <line x1="75" y1="60" x2="100" y2="70" stroke="#ef4444" strokeWidth="2.5" />
        <text x="55" y="55" textAnchor="middle" fontSize="6" fill="#ef4444">Vas afferens</text>
        <polygon points="98,67 102,73 95,72" fill="#ef4444" />

        <line x1="100" y1="95" x2="75" y2="105" stroke="#3b82f6" strokeWidth="2.5" />
        <text x="55" y="115" textAnchor="middle" fontSize="6" fill="#3b82f6">Vas efferens</text>
        <polygon points="77,104 73,108 80,106" fill="#3b82f6" />

        {/* Filtration arrow */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[6])} onMouseLeave={() => setActive(null)}>
          <line x1="145" y1="75" x2="165" y2="75" stroke="#0d9488" strokeWidth="1.5" />
          <polygon points="165,72 172,75 165,78" fill="#0d9488" />
          <text x="170" y="72" fontSize="6" fill="#0d9488" fontWeight="bold">Filtration</text>
        </g>

        {/* ===== PROXIMAL TUBULUS ===== */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[2])} onMouseLeave={() => setActive(null)}>
          <path d="M165,80 Q200,75 230,85 Q260,95 290,90 Q320,85 340,100" fill="none" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" />
          {/* Brush border (microvilli) */}
          {[180, 200, 220, 240, 260, 280, 300, 320].map((x) => (
            <line key={`mv-${x}`} x1={x} y1={80 + (x - 180) * 0.08} x2={x} y2={74 + (x - 180) * 0.08} stroke="#14b8a6" strokeWidth="1" />
          ))}
          <text x="260" y="72" textAnchor="middle" fontSize="13" fill="#115e59" fontWeight="bold">Proximaler Tubulus</text>
        </g>

        {/* Reabsorption arrows (proximal) */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[7])} onMouseLeave={() => setActive(null)}>
          {[210, 250, 290].map((x) => (
            <g key={`reab-${x}`}>
              <line x1={x} y1={95 + (x - 210) * 0.05} x2={x} y2={110 + (x - 210) * 0.05} stroke="#16a34a" strokeWidth="1" />
              <polygon points={`${x - 2},${110 + (x - 210) * 0.05} ${x},${116 + (x - 210) * 0.05} ${x + 2},${110 + (x - 210) * 0.05}`} fill="#16a34a" />
            </g>
          ))}
          <text x="250" y="130" textAnchor="middle" fontSize="6" fill="#16a34a">Rückresorption (65%)</text>
        </g>

        {/* ===== HENLE-SCHLEIFE ===== */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[3])} onMouseLeave={() => setActive(null)}>
          {/* Descending limb */}
          <path d="M340,100 Q345,150 340,200 Q335,280 310,340 Q290,370 280,380" fill="none" stroke="#0d9488" strokeWidth="3.5" strokeLinecap="round" />
          {/* Loop at bottom */}
          <path d="M280,380 Q270,395 260,380" fill="none" stroke="#0d9488" strokeWidth="3.5" strokeLinecap="round" />
          {/* Ascending limb */}
          <path d="M260,380 Q250,340 240,280 Q230,220 220,170 Q215,155 210,145" fill="none" stroke="#0f766e" strokeWidth="3.5" strokeLinecap="round" />

          <text x="355" y="240" fontSize="7" fill="#0d9488">absteigend</text>
          <text x="355" y="252" fontSize="6" fill="#0d9488">(H₂O permeabel)</text>
          <text x="205" y="250" textAnchor="end" fontSize="7" fill="#0f766e">aufsteigend</text>
          <text x="205" y="262" textAnchor="end" fontSize="6" fill="#0f766e">(H₂O impermeabel)</text>
          <text x="290" y="405" textAnchor="middle" fontSize="13" fill="#115e59" fontWeight="bold">Henle-Schleife</text>
        </g>

        {/* Water arrows descending */}
        {[200, 260, 320].map((y) => (
          <g key={`water-${y}`}>
            <line x1={345} y1={y} x2={365} y2={y} stroke="#3b82f6" strokeWidth="1" />
            <polygon points={`365,${y - 2} 371,${y} 365,${y + 2}`} fill="#3b82f6" />
            <text x="374" y={y + 3} fontSize="5" fill="#3b82f6">H₂O</text>
          </g>
        ))}

        {/* Na+ arrows ascending */}
        {[220, 280, 340].map((y) => (
          <g key={`na-${y}`}>
            <line x1={225} y1={y} x2={205} y2={y} stroke="#f97316" strokeWidth="1" />
            <polygon points={`205,${y - 2} 199,${y} 205,${y + 2}`} fill="#f97316" />
            <text x="193" y={y + 3} textAnchor="end" fontSize="5" fill="#f97316">Na⁺/Cl⁻</text>
          </g>
        ))}

        {/* ===== DISTAL TUBULUS ===== */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[4])} onMouseLeave={() => setActive(null)}>
          <path d="M210,145 Q190,135 170,140 Q140,148 120,140 Q100,132 85,140" fill="none" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />
          <text x="150" y="155" textAnchor="middle" fontSize="13" fill="#115e59" fontWeight="bold">Distaler Tubulus</text>
        </g>

        {/* Secretion arrows (distal) */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[8])} onMouseLeave={() => setActive(null)}>
          {[130, 170].map((x) => (
            <g key={`sec-${x}`}>
              <line x1={x} y1={125} x2={x} y2={133} stroke="#a855f7" strokeWidth="1" />
              <polygon points={`${x - 2},133 ${x},139 ${x + 2},133`} fill="#a855f7" />
            </g>
          ))}
          <text x="150" y="122" textAnchor="middle" fontSize="6" fill="#a855f7">Sekretion (H⁺, K⁺)</text>
        </g>

        {/* ===== SAMMELROHR ===== */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[5])} onMouseLeave={() => setActive(null)}>
          <path d="M85,140 Q75,160 70,200 Q65,280 60,360 Q58,390 55,410" fill="none" stroke="#115e59" strokeWidth="5" strokeLinecap="round" />
          <text x="40" y="300" textAnchor="end" fontSize="13" fill="#115e59" fontWeight="bold" transform="rotate(-90, 40, 300)">Sammelrohr</text>
        </g>

        {/* ADH water arrows */}
        {[220, 280, 340].map((y) => (
          <g key={`adh-${y}`}>
            <line x1={55} y1={y} x2={35} y2={y} stroke="#3b82f6" strokeWidth="1" />
            <polygon points={`35,${y - 2} 29,${y} 35,${y + 2}`} fill="#3b82f6" />
            <text x="26" y={y + 3} textAnchor="end" fontSize="5" fill="#3b82f6">H₂O</text>
          </g>
        ))}
        <text x="22" y="380" textAnchor="end" fontSize="6" fill="#3b82f6">(ADH-abhängig)</text>

        {/* Urine output */}
        <polygon points="52,410 58,410 55,418" fill="#115e59" />
        <text x="55" y="418" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold" dy="8">Endharn</text>

        {/* Legend */}
        <g transform="translate(380, 310)">
          <rect x="-5" y="-5" width="95" height="80" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1" />
          <line x1="0" y1="8" x2="15" y2="8" stroke="#16a34a" strokeWidth="2" />
          <text x="20" y="12" fontSize="7" fill="#115e59">Rückresorption</text>
          <line x1="0" y1="28" x2="15" y2="28" stroke="#a855f7" strokeWidth="2" />
          <text x="20" y="32" fontSize="7" fill="#115e59">Sekretion</text>
          <line x1="0" y1="48" x2="15" y2="48" stroke="#3b82f6" strokeWidth="2" />
          <text x="20" y="52" fontSize="7" fill="#115e59">H₂O-Transport</text>
          <line x1="0" y1="68" x2="15" y2="68" stroke="#f97316" strokeWidth="2" />
          <text x="20" y="72" fontSize="7" fill="#115e59">Ionentransport</text>
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
