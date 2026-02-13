import { useState } from "react";

const parts = [
  // Eye structures
  { id: "cornea", label: "Kornea (Cornea)", detail: "Transparente äußere Schicht des Auges; bricht einfallendes Licht und schützt die inneren Strukturen." },
  { id: "iris", label: "Iris/Pupille", detail: "Iris reguliert die Pupillengröße und steuert den Lichteinfall; Pupille ist die zentrale Öffnung." },
  { id: "lens", label: "Linse", detail: "Akkommodation: ändert ihre Brechkraft, um Licht präzise auf die Netzhaut zu fokussieren." },
  { id: "vitreous", label: "Glaskörper", detail: "Gallertartige Substanz, die das Auge ausfüllt und seine Form erhält; besteht hauptsächlich aus Wasser." },
  { id: "retina", label: "Retina (Netzhaut)", detail: "Lichtempfindliche Schicht mit Photorezeptoren: Stäbchen (skotopisches Sehen, Hell-Dunkel) und Zapfen (photopisches Sehen, Farbsehen mit 3 Typen: rot/grün/blau)." },
  { id: "fovea", label: "Fovea centralis", detail: "Bereich des schärfsten Sehens; enthält ausschließlich Zapfen für hochauflösendes Farbsehen." },
  { id: "optic", label: "N. opticus (Sehnerv)", detail: "Überträgt visuelle Informationen zur Sehrinde; Austrittstelle bildet den blinden Fleck (keine Photorezeptoren)." },
  { id: "sclera", label: "Sklera", detail: "Weiße, schützende äußere Hülle des Auges; gibt dem Augapfel Stabilität." },

  // Ear structures
  { id: "pinna", label: "Ohrmuschel + Gehörgang", detail: "Äußeres Ohr: sammelt Schallwellen und leitet sie zum Trommelfell." },
  { id: "tympanic", label: "Trommelfell", detail: "Dünne Membran, die durch Schallwellen in Schwingung versetzt wird." },
  { id: "ossicles", label: "Gehörknöchelchen", detail: "Hammer, Amboss, Steigbügel: verstärken mechanische Schwingungen um das ~20-fache und übertragen sie auf das ovale Fenster." },
  { id: "cochlea", label: "Cochlea (Schnecke)", detail: "Spiralförmiges Organ zur Frequenzanalyse; enthält das Corti-Organ mit Haarzellen, die mechanische Schwingungen in neuronale Signale umwandeln." },
  { id: "vestibular", label: "Vestibularorgan", detail: "3 Bogengänge in verschiedenen Raumebenen; zuständig für Gleichgewichtssinn und räumliche Orientierung." },
  { id: "vestibulocochlear", label: "N. vestibulocochlearis", detail: "VIII. Hirnnerv; überträgt auditorische und vestibuläre Informationen zur Hörrinde und zum Gleichgewichtszentrum." },
];

type Part = (typeof parts)[number];

export default function SenseOrgans() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Sinnesorgane — Auge &amp; Ohr</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Strukturen für Details.</p>
      <svg viewBox="0 0 560 450" className="w-full max-w-2xl mx-auto">
        <defs>
          <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="earGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Background labels */}
        <text x="135" y="20" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs font-semibold">AUGE</text>
        <text x="425" y="20" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs font-semibold">OHR</text>

        {/* ========== LEFT: EYE (Auge) ========== */}
        <g transform="translate(30, 40)">
          {/* Sclera (outer white layer) */}
          <ellipse
            cx="105" cy="110" rx="85" ry="75"
            className="fill-gray-100 dark:fill-gray-700 stroke-gray-600 dark:stroke-gray-400 cursor-pointer transition-all hover:stroke-indigo-500 hover:stroke-2"
            strokeWidth="1.5"
            filter="url(#shadow)"
            onMouseEnter={() => setActive(parts.find(p => p.id === "sclera")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Vitreous body (Glaskörper) */}
          <ellipse
            cx="115" cy="110" rx="65" ry="60"
            fill="url(#eyeGrad)"
            className="stroke-indigo-300 dark:stroke-indigo-600 cursor-pointer transition-all hover:stroke-indigo-500 hover:stroke-2"
            strokeWidth="1"
            onMouseEnter={() => setActive(parts.find(p => p.id === "vitreous")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Cornea (front curved surface) */}
          <path
            d="M 45 110 Q 30 110 30 110 Q 30 85 45 70 Q 55 60 70 58 Q 85 58 95 70 Q 105 85 105 110 Z"
            className="fill-cyan-200/40 dark:fill-cyan-600/30 stroke-cyan-500 dark:stroke-cyan-400 cursor-pointer transition-all hover:stroke-cyan-600 hover:stroke-2"
            strokeWidth="1.5"
            onMouseEnter={() => setActive(parts.find(p => p.id === "cornea")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Iris/Pupil */}
          <circle
            cx="70" cy="110" r="18"
            className="fill-blue-400 dark:fill-blue-600 stroke-blue-700 dark:stroke-blue-400 cursor-pointer transition-all hover:stroke-blue-500 hover:stroke-2"
            strokeWidth="1.5"
            onMouseEnter={() => setActive(parts.find(p => p.id === "iris")!)}
            onMouseLeave={() => setActive(null)}
          />
          <circle cx="70" cy="110" r="8" className="fill-black" />

          {/* Lens (behind iris) */}
          <ellipse
            cx="95" cy="110" rx="12" ry="20"
            className="fill-indigo-300/60 dark:fill-indigo-500/50 stroke-indigo-600 dark:stroke-indigo-400 cursor-pointer transition-all hover:stroke-indigo-500 hover:stroke-2"
            strokeWidth="1.2"
            onMouseEnter={() => setActive(parts.find(p => p.id === "lens")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Retina (back inner layer) */}
          <path
            d="M 130 60 Q 165 85 175 110 Q 165 135 130 160 L 120 155 Q 150 130 158 110 Q 150 90 120 65 Z"
            className="fill-purple-300/50 dark:fill-purple-600/40 stroke-purple-600 dark:stroke-purple-400 cursor-pointer transition-all hover:stroke-purple-500 hover:stroke-2"
            strokeWidth="1.2"
            onMouseEnter={() => setActive(parts.find(p => p.id === "retina")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Fovea centralis (spot on retina) */}
          <circle
            cx="148" cy="110" r="6"
            className="fill-pink-400 dark:fill-pink-500 stroke-pink-700 dark:stroke-pink-300 cursor-pointer transition-all hover:stroke-pink-500 hover:stroke-2"
            strokeWidth="1"
            onMouseEnter={() => setActive(parts.find(p => p.id === "fovea")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Optic nerve (N. opticus) */}
          <path
            d="M 165 125 L 190 140 L 200 138"
            className="stroke-yellow-500 dark:stroke-yellow-400 fill-none cursor-pointer transition-all hover:stroke-yellow-600 hover:stroke-2"
            strokeWidth="3"
            strokeLinecap="round"
            onMouseEnter={() => setActive(parts.find(p => p.id === "optic")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Leader lines and labels */}
          <line x1="30" y1="110" x2="10" y2="90" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="8" y="88" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Kornea</text>

          <line x1="70" y1="93" x2="50" y2="50" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="35" y="48" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Iris</text>

          <line x1="95" y1="95" x2="110" y2="35" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="95" y="33" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Linse</text>

          <line x1="148" y1="104" x2="170" y2="50" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="145" y="48" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Fovea</text>

          <line x1="160" y1="85" x2="190" y2="65" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="165" y="63" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Retina</text>

          <line x1="200" y1="138" x2="215" y2="155" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="195" y="170" className="fill-gray-600 dark:fill-gray-400 text-[9px]">N. opticus</text>

          <line x1="105" y1="175" x2="120" y2="195" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="90" y="210" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Glaskörper</text>

          <line x1="35" y1="140" x2="15" y2="160" className="stroke-gray-400 dark:fill-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="5" y="175" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Sklera</text>
        </g>

        {/* ========== RIGHT: EAR (Ohr) ========== */}
        <g transform="translate(300, 40)">
          {/* Outer ear (Ohrmuschel + canal) */}
          <path
            d="M 10 80 Q 5 70 10 60 Q 18 50 30 55 Q 40 60 45 75 Q 48 90 40 105 Q 30 115 20 110 Q 12 105 15 95 L 40 95 L 65 95"
            className="fill-orange-200/50 dark:fill-orange-600/30 stroke-orange-500 dark:stroke-orange-400 cursor-pointer transition-all hover:stroke-orange-600 hover:stroke-2"
            strokeWidth="1.5"
            onMouseEnter={() => setActive(parts.find(p => p.id === "pinna")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Ear canal extension */}
          <rect
            x="65" y="88" width="25" height="14"
            className="fill-orange-100/60 dark:fill-orange-700/40 stroke-orange-400 dark:stroke-orange-500 cursor-pointer transition-all hover:stroke-orange-500 hover:stroke-2"
            strokeWidth="1"
            rx="2"
            onMouseEnter={() => setActive(parts.find(p => p.id === "pinna")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Tympanic membrane (Trommelfell) */}
          <ellipse
            cx="93" cy="95" rx="3" ry="12"
            className="fill-yellow-200 dark:fill-yellow-600/60 stroke-yellow-600 dark:stroke-yellow-400 cursor-pointer transition-all hover:stroke-yellow-500 hover:stroke-2"
            strokeWidth="1.5"
            onMouseEnter={() => setActive(parts.find(p => p.id === "tympanic")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Ossicles (Gehörknöchelchen: Hammer, Amboss, Steigbügel) */}
          <g
            className="cursor-pointer transition-all"
            onMouseEnter={() => setActive(parts.find(p => p.id === "ossicles")!)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Hammer */}
            <circle cx="100" cy="95" r="3.5" className="fill-green-300 dark:fill-green-600 stroke-green-700 dark:stroke-green-400 hover:stroke-2" strokeWidth="1" />
            <line x1="96" y1="95" x2="93" y2="95" className="stroke-green-700 dark:stroke-green-400" strokeWidth="1.5" />

            {/* Amboss */}
            <circle cx="108" cy="92" r="3.5" className="fill-green-300 dark:fill-green-600 stroke-green-700 dark:stroke-green-400 hover:stroke-2" strokeWidth="1" />
            <line x1="103.5" y1="94" x2="104" y2="94" className="stroke-green-700 dark:stroke-green-400" strokeWidth="1.5" />

            {/* Steigbügel */}
            <rect x="114" y="90" width="5" height="5" rx="1" className="fill-green-300 dark:fill-green-600 stroke-green-700 dark:stroke-green-400 hover:stroke-2" strokeWidth="1" />
            <line x1="111" y1="92.5" x2="114" y2="92.5" className="stroke-green-700 dark:stroke-green-400" strokeWidth="1.5" />
          </g>

          {/* Cochlea (Schnecke - spiral) */}
          <g
            className="cursor-pointer transition-all"
            onMouseEnter={() => setActive(parts.find(p => p.id === "cochlea")!)}
            onMouseLeave={() => setActive(null)}
          >
            <path
              d="M 120 92 Q 128 88 135 92 Q 140 98 138 106 Q 134 112 127 112 Q 122 110 121 105 Q 120 100 123 97"
              className="fill-teal-300/60 dark:fill-teal-600/50 stroke-teal-600 dark:stroke-teal-400 hover:stroke-teal-500 hover:stroke-2"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="128" cy="100" r="8" className="fill-teal-200/40 dark:fill-teal-700/40 stroke-teal-500 dark:stroke-teal-400 hover:stroke-2" strokeWidth="1" />
          </g>

          {/* Vestibular organ (3 semicircular canals) */}
          <g
            className="cursor-pointer transition-all"
            onMouseEnter={() => setActive(parts.find(p => p.id === "vestibular")!)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Canal 1 (superior) */}
            <ellipse cx="130" cy="70" rx="12" ry="8" className="fill-none stroke-blue-500 dark:stroke-blue-400 hover:stroke-blue-600 hover:stroke-2" strokeWidth="1.5" />

            {/* Canal 2 (posterior) */}
            <ellipse cx="145" cy="85" rx="9" ry="12" className="fill-none stroke-blue-500 dark:stroke-blue-400 hover:stroke-blue-600 hover:stroke-2" strokeWidth="1.5" />

            {/* Canal 3 (horizontal) */}
            <ellipse cx="138" cy="95" rx="14" ry="7" className="fill-none stroke-blue-500 dark:stroke-blue-400 hover:stroke-blue-600 hover:stroke-2" strokeWidth="1.5" />
          </g>

          {/* N. vestibulocochlearis */}
          <path
            d="M 135 110 L 155 130 L 165 132"
            className="stroke-yellow-500 dark:stroke-yellow-400 fill-none cursor-pointer transition-all hover:stroke-yellow-600 hover:stroke-2"
            strokeWidth="3"
            strokeLinecap="round"
            onMouseEnter={() => setActive(parts.find(p => p.id === "vestibulocochlear")!)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Leader lines and labels */}
          <line x1="25" y1="70" x2="10" y2="40" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="-15" y="38" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Ohrmuschel</text>

          <line x1="93" y1="84" x2="85" y2="55" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="55" y="53" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Trommelfell</text>

          <line x1="108" y1="88" x2="115" y2="60" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="80" y="30" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Gehörknöchelchen</text>

          <line x1="135" y1="105" x2="150" y2="145" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="125" y="160" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Cochlea</text>

          <line x1="145" y1="75" x2="170" y2="50" className="stroke-gray-400 dark:stroke-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="140" y="35" className="fill-gray-600 dark:fill-gray-400 text-[9px]">Vestibular</text>

          <line x1="165" y1="132" x2="180" y2="150" className="stroke-gray-400 dark:fill-gray-500 stroke-1" strokeDasharray="2,2" />
          <text x="135" y="180" className="fill-gray-600 dark:fill-gray-400 text-[9px]">N. vestibulocochlearis</text>
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
