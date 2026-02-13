import { useState } from "react";

const parts = [
  { id: "presynaptic", label: "Präsynaptische Endigung", detail: "Verdicktes Axonende (Bouton). Enthält synaptische Vesikel mit Neurotransmittern und Mitochondrien für Energieversorgung." },
  { id: "vesicle", label: "Synaptische Vesikel", detail: "Membranumhüllte Blaeschen mit Neurotransmittern (z.B. Acetylcholin, Glutamat, GABA). Werden bei Erregung freigesetzt." },
  { id: "calcium", label: "Ca²⁺-Einstrom", detail: "Aktionspotential öffnet spannungsgesteuerte Ca²⁺-Kanäle. Ca²⁺-Einstrom löst Vesikelfusion und Exozytose aus." },
  { id: "fusion", label: "Vesikelfusion (Exozytose)", detail: "Ca²⁺ bewirkt Verschmelzung der Vesikel mit der präsynaptischen Membran. SNARE-Proteine vermitteln die Fusion." },
  { id: "cleft", label: "Synaptischer Spalt", detail: "Ca. 20-40 nm breit. Neurotransmitter diffundieren durch den Spalt zur postsynaptischen Membran." },
  { id: "receptor", label: "Postsynaptische Rezeptoren", detail: "Ionotrope Rezeptoren: ligandengesteuerte Ionenkanäle (schnell). Metabotrope Rezeptoren: G-Protein-gekoppelt (langsam)." },
  { id: "postsynaptic", label: "Postsynaptische Membran", detail: "Enthält Rezeptoren und Ionenkanäle. EPSP (erregend) oder IPSP (hemmend) je nach Neurotransmitter und Rezeptortyp." },
  { id: "reuptake", label: "Wiederaufnahme / Abbau", detail: "Neurotransmitter werden enzymatisch abgebaut (z.B. AChE) oder durch Transporter in die Praesynapse zurückaufgenommen (Reuptake)." },
];

type Part = (typeof parts)[number];

export default function Synapse() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Synapse — Signalübertragung</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Strukturen für Details.</p>

      <svg viewBox="0 0 460 420" className="w-full max-w-xl mx-auto">
        {/* ===== PRESYNAPTIC TERMINAL ===== */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[0])} onMouseLeave={() => setActive(null)}>
          <path d="M60,30 Q60,10 230,10 Q400,10 400,30 L400,200 Q400,220 230,220 Q60,220 60,200 Z" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2.5" />
          <text x="230" y="30" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">Präsynaptische Endigung</text>
        </g>

        {/* Axon coming in */}
        <rect x="200" y="0" width="60" height="15" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
        <text x="230" y="9" textAnchor="middle" fontSize="6" fill="#0d9488">Axon</text>

        {/* Mitochondria */}
        <ellipse cx="340" cy="80" rx="28" ry="14" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
        <path d="M320,80 Q330,73 340,80 Q350,87 360,80" fill="none" stroke="#f97316" strokeWidth="1" />
        <text x="340" y="100" textAnchor="middle" fontSize="6" fill="#f97316">Mitochondrium</text>

        {/* Vesicles */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[1])} onMouseLeave={() => setActive(null)}>
          {[
            [120, 70], [150, 55], [180, 75], [100, 100], [140, 105],
            [170, 110], [200, 95], [130, 140], [160, 145], [190, 135],
            [220, 120], [250, 100], [110, 165], [150, 170], [190, 175],
          ].map(([cx, cy], i) => (
            <circle key={`v-${i}`} cx={cx} cy={cy} r="12" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="1.5" />
          ))}
          {/* Neurotransmitter dots inside vesicles */}
          {[
            [120, 70], [150, 55], [180, 75], [140, 105], [170, 110],
          ].map(([cx, cy], i) => (
            <g key={`nt-${i}`}>
              <circle cx={cx - 3} cy={cy - 2} r="2" fill="#0d9488" />
              <circle cx={cx + 3} cy={cy + 2} r="2" fill="#0d9488" />
              <circle cx={cx} cy={cy - 4} r="2" fill="#0d9488" />
            </g>
          ))}
          <text x="250" y="60" fontSize="7" fill="#14b8a6" fontWeight="bold">Vesikel</text>
        </g>

        {/* Ca2+ channels */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[2])} onMouseLeave={() => setActive(null)}>
          {[290, 330, 370].map((x) => (
            <g key={`ca-${x}`}>
              <rect x={x - 8} y="195" width="16" height="30" rx="3" fill="#eab308" opacity="0.6" stroke="#d97706" strokeWidth="1" />
              <text x={x} y="215" textAnchor="middle" fontSize="5" fill="#92400e" fontWeight="bold">Ca²⁺</text>
              {/* Arrows in */}
              <line x1={x} y1="228" x2={x} y2="200" stroke="#eab308" strokeWidth="1.5" />
              <polygon points={`${x - 3},204 ${x},196 ${x + 3},204`} fill="#eab308" />
            </g>
          ))}
          <text x="330" y="175" textAnchor="middle" fontSize="7" fill="#d97706" fontWeight="bold">Ca²⁺-Kanäle</text>
        </g>

        {/* Vesicle fusion */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[3])} onMouseLeave={() => setActive(null)}>
          {/* Fusing vesicle */}
          <path d="M150,195 Q140,185 130,195 Q120,210 140,210 Q160,210 150,195" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="1.5" />
          <circle cx="140" cy="200" r="2" fill="#0d9488" />
          <circle cx="135" cy="196" r="2" fill="#0d9488" />
          <circle cx="145" cy="204" r="2" fill="#0d9488" />
          <text x="100" y="195" textAnchor="end" fontSize="6" fill="#14b8a6" fontWeight="bold">Exozytose</text>
        </g>

        {/* ===== SYNAPTIC CLEFT ===== */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[4])} onMouseLeave={() => setActive(null)}>
          <rect x="60" y="225" width="340" height="55" fill="#f0fdfa" opacity="0.3" />
          <text x="230" y="256" textAnchor="middle" fontSize="13" fill="#115e59" fontWeight="bold">Synaptischer Spalt (~20 nm)</text>
        </g>

        {/* Released neurotransmitters */}
        {[
          [130, 240], [145, 248], [160, 235], [175, 250], [190, 242],
          [205, 255], [220, 238], [235, 260], [250, 245], [265, 252],
        ].map(([cx, cy], i) => (
          <circle key={`rel-${i}`} cx={cx} cy={cy} r="3" fill="#0d9488" opacity="0.7" />
        ))}

        {/* Diffusion arrows */}
        {[140, 180, 220, 260].map((x) => (
          <g key={`diff-${x}`}>
            <line x1={x} y1="225" x2={x} y2="272" stroke="#0d9488" strokeWidth="0.8" strokeDasharray="3 2" />
            <polygon points={`${x - 2},272 ${x},278 ${x + 2},272`} fill="#0d9488" opacity="0.6" />
          </g>
        ))}

        {/* ===== POSTSYNAPTIC MEMBRANE ===== */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[6])} onMouseLeave={() => setActive(null)}>
          <rect x="60" y="280" width="340" height="30" rx="4" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" />
          <text x="230" y="298" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">Postsynaptische Membran</text>
        </g>

        {/* Receptors */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[5])} onMouseLeave={() => setActive(null)}>
          {[120, 180, 240, 300, 350].map((x) => (
            <g key={`rec-${x}`}>
              <rect x={x - 10} y="274" width="20" height="35" rx="5" fill="#6366f1" opacity="0.5" stroke="#4f46e5" strokeWidth="1" />
              {/* Binding site */}
              <path d={`M${x - 4},274 Q${x},268 ${x + 4},274`} fill="none" stroke="#4f46e5" strokeWidth="1.5" />
              {/* Neurotransmitter binding */}
              <circle cx={x} cy={268} r="3" fill="#0d9488" />
            </g>
          ))}
          <text x="420" y="290" fontSize="7" fill="#4f46e5" fontWeight="bold">Rezeptoren</text>
        </g>

        {/* Postsynaptic cell */}
        <rect x="60" y="310" width="340" height="40" rx="8" fill="#f0fdfa" opacity="0.5" stroke="#0f766e" strokeWidth="1" strokeDasharray="4 3" />
        <text x="230" y="334" textAnchor="middle" fontSize="13" fill="#0f766e">Postsynaptische Zelle (Dendrit)</text>

        {/* EPSP/IPSP label */}
        <text x="230" y="365" textAnchor="middle" fontSize="7" fill="#115e59">→ EPSP (erregend) oder IPSP (hemmend)</text>

        {/* Reuptake */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[7])} onMouseLeave={() => setActive(null)}>
          <path d="M80,260 Q50,250 50,230 Q50,215 75,215" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="75,212 80,215 75,218" fill="#a855f7" />
          <text x="30" y="255" fontSize="6" fill="#a855f7" fontWeight="bold">Reuptake /</text>
          <text x="30" y="265" fontSize="6" fill="#a855f7" fontWeight="bold">Abbau</text>
        </g>

        {/* Action potential arrow */}
        <line x1="230" y1="0" x2="230" y2="10" stroke="#0d9488" strokeWidth="2" />
        <polygon points="226,8 230,14 234,8" fill="#0d9488" />
        <text x="270" y="6" fontSize="6" fill="#0d9488" fontWeight="bold">Aktionspotential</text>

        {/* Sequence summary */}
        <rect x="20" y="385" width="420" height="25" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1" />
        <text x="230" y="401" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">AP → Ca²⁺ Einstrom → Vesikelfusion → Neurotransmitter → Rezeptorbindung → EPSP/IPSP</text>
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
