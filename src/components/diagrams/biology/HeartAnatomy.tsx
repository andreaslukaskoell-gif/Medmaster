import { useState } from "react";

const structures = [
  {
    id: "rv",
    label: "Rechter Ventrikel",
    detail:
      "Pumpt sauerstoffarmes Blut über die Lungenarterie in die Lunge. Dünnere Wand als linker Ventrikel.",
  },
  {
    id: "lv",
    label: "Linker Ventrikel",
    detail: "Pumpt sauerstoffreiches Blut über die Aorta in den Körperkreislauf. Dickste Herzwand.",
  },
  {
    id: "ra",
    label: "Rechter Vorhof",
    detail: "Empfängt sauerstoffarmes Blut aus dem Körper über obere und untere Hohlvene.",
  },
  {
    id: "la",
    label: "Linker Vorhof",
    detail: "Empfängt sauerstoffreiches Blut aus der Lunge über die Lungenvenen.",
  },
  {
    id: "aorta",
    label: "Aorta",
    detail:
      "Größte Arterie. Führt sauerstoffreiches Blut vom linken Ventrikel in den Körperkreislauf.",
  },
  {
    id: "pa",
    label: "Lungenarterie (Truncus pulmonalis)",
    detail:
      "Führt sauerstoffarmes Blut vom rechten Ventrikel zur Lunge. Einzige Arterie mit sauerstoffarmem Blut!",
  },
  {
    id: "pv",
    label: "Lungenvenen",
    detail:
      "Führen sauerstoffreiches Blut von der Lunge zum linken Vorhof. Einzige Venen mit sauerstoffreichem Blut!",
  },
  {
    id: "vc",
    label: "Hohlvenen (Vena cava)",
    detail:
      "Obere (V. cava superior) und untere (V. cava inferior) Hohlvene bringen sauerstoffarmes Blut zum rechten Vorhof.",
  },
  {
    id: "tv",
    label: "Trikuspidalklappe",
    detail: "Zwischen rechtem Vorhof und rechtem Ventrikel. 3 Segel. Verhindert Rückfluss.",
  },
  {
    id: "mv",
    label: "Mitralklappe (Bikuspidalklappe)",
    detail: "Zwischen linkem Vorhof und linkem Ventrikel. 2 Segel. Verhindert Rückfluss.",
  },
  {
    id: "pklappe",
    label: "Pulmonalklappe",
    detail: "Taschenklappe am Abgang der Lungenarterie. Verhindert Rückfluss ins rechte Herz.",
  },
  {
    id: "aklappe",
    label: "Aortenklappe",
    detail: "Taschenklappe am Abgang der Aorta. Verhindert Rückfluss ins linke Herz.",
  },
];

type Structure = (typeof structures)[number];

export default function HeartAnatomy() {
  const [active, setActive] = useState<Structure | null>(null);

  const hover = (s: Structure | null) => setActive(s);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Herz — Anatomie &amp; Blutfluss
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf Strukturen für Details. Blau = sauerstoffarm, Rot = sauerstoffreich.
      </p>

      <svg viewBox="0 0 480 440" className="w-full max-w-xl mx-auto">
        {/* Heart outline */}
        <path
          d="M240,50 Q180,20 140,60 Q90,110 100,170 Q100,200 120,240 L240,400 L360,240 Q380,200 380,170 Q390,110 340,60 Q300,20 240,50"
          fill="#fef2f2"
          stroke="#0d9488"
          strokeWidth="2.5"
        />

        {/* Septum */}
        <line x1="240" y1="80" x2="240" y2="370" stroke="#0d9488" strokeWidth="2.5" />

        {/* AV divider (horizontal) */}
        <path
          d="M110,190 Q175,210 240,195 Q305,210 370,190"
          fill="none"
          stroke="#0d9488"
          strokeWidth="2"
        />

        {/* ===== RIGHT ATRIUM (viewer's left = anatomical right) ===== */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[2])}
          onMouseLeave={() => hover(null)}
        >
          <rect x="120" y="90" width="110" height="90" rx="8" fill="#dbeafe" opacity="0.5" />
          <text x="175" y="130" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="bold">
            Rechter
          </text>
          <text x="175" y="143" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="bold">
            Vorhof
          </text>
        </g>

        {/* ===== LEFT ATRIUM (viewer's right = anatomical left) ===== */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[3])}
          onMouseLeave={() => hover(null)}
        >
          <rect x="250" y="90" width="110" height="90" rx="8" fill="#fecaca" opacity="0.5" />
          <text x="305" y="130" textAnchor="middle" fontSize="13" fill="#dc2626" fontWeight="bold">
            Linker
          </text>
          <text x="305" y="143" textAnchor="middle" fontSize="13" fill="#dc2626" fontWeight="bold">
            Vorhof
          </text>
        </g>

        {/* ===== RIGHT VENTRICLE ===== */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[0])}
          onMouseLeave={() => hover(null)}
        >
          <path
            d="M115,210 Q130,200 240,210 L240,360 L150,280 Q115,240 115,210"
            fill="#dbeafe"
            opacity="0.4"
          />
          <text x="180" y="270" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="bold">
            Rechter
          </text>
          <text x="180" y="283" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="bold">
            Ventrikel
          </text>
        </g>

        {/* ===== LEFT VENTRICLE ===== */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[1])}
          onMouseLeave={() => hover(null)}
        >
          <path
            d="M240,210 Q350,200 365,210 Q365,240 330,280 L240,360 Z"
            fill="#fecaca"
            opacity="0.4"
          />
          <text x="300" y="270" textAnchor="middle" fontSize="13" fill="#dc2626" fontWeight="bold">
            Linker
          </text>
          <text x="300" y="283" textAnchor="middle" fontSize="13" fill="#dc2626" fontWeight="bold">
            Ventrikel
          </text>
        </g>

        {/* ===== VALVES ===== */}
        {/* Tricuspid */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[8])}
          onMouseLeave={() => hover(null)}
        >
          <ellipse
            cx="185"
            cy="198"
            rx="22"
            ry="6"
            fill="#fbbf24"
            opacity="0.7"
            stroke="#d97706"
            strokeWidth="1.5"
          />
          <text x="185" y="201" textAnchor="middle" fontSize="6" fill="#92400e" fontWeight="bold">
            Trikusp.
          </text>
        </g>

        {/* Mitral */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[9])}
          onMouseLeave={() => hover(null)}
        >
          <ellipse
            cx="295"
            cy="198"
            rx="22"
            ry="6"
            fill="#fbbf24"
            opacity="0.7"
            stroke="#d97706"
            strokeWidth="1.5"
          />
          <text x="295" y="201" textAnchor="middle" fontSize="6" fill="#92400e" fontWeight="bold">
            Mitral
          </text>
        </g>

        {/* ===== GREAT VESSELS ===== */}
        {/* Vena cava superior */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[7])}
          onMouseLeave={() => hover(null)}
        >
          <rect
            x="110"
            y="20"
            width="28"
            height="70"
            rx="8"
            fill="#93c5fd"
            stroke="#3b82f6"
            strokeWidth="1.5"
          />
          <text x="87" y="52" textAnchor="end" fontSize="7" fill="#1e40af" fontWeight="bold">
            Obere
          </text>
          <text x="87" y="62" textAnchor="end" fontSize="7" fill="#1e40af" fontWeight="bold">
            Hohlvene
          </text>
          {/* Flow arrow */}
          <polygon points="120,80 124,72 128,80" fill="#3b82f6" />
        </g>

        {/* Vena cava inferior */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[7])}
          onMouseLeave={() => hover(null)}
        >
          <rect
            x="130"
            y="310"
            width="24"
            height="50"
            rx="8"
            fill="#93c5fd"
            stroke="#3b82f6"
            strokeWidth="1.5"
          />
          <text x="115" y="340" textAnchor="end" fontSize="7" fill="#1e40af" fontWeight="bold">
            Untere
          </text>
          <text x="115" y="350" textAnchor="end" fontSize="7" fill="#1e40af" fontWeight="bold">
            Hohlvene
          </text>
          <polygon points="138,318 142,310 146,318" fill="#3b82f6" />
        </g>

        {/* Pulmonary artery */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[5])}
          onMouseLeave={() => hover(null)}
        >
          <path
            d="M200,80 Q200,40 170,20 Q150,10 130,20"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M200,80 Q200,40 170,20 Q150,10 130,20"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Pulmonary valve */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => hover(structures[10])}
            onMouseLeave={() => hover(null)}
          >
            <ellipse
              cx="200"
              cy="80"
              rx="10"
              ry="5"
              fill="#fbbf24"
              opacity="0.7"
              stroke="#d97706"
              strokeWidth="1"
            />
          </g>
          <text x="155" y="12" textAnchor="middle" fontSize="7" fill="#1e40af" fontWeight="bold">
            Lungenarterie
          </text>
          <polygon points="135,24 127,18 133,16" fill="#3b82f6" />
        </g>

        {/* Pulmonary veins */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[6])}
          onMouseLeave={() => hover(null)}
        >
          <path
            d="M360,90 Q390,70 410,50"
            fill="none"
            stroke="#ef4444"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M360,90 Q390,70 410,50"
            fill="none"
            stroke="#fca5a5"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text x="420" y="45" fontSize="7" fill="#dc2626" fontWeight="bold">
            Lungenvenen
          </text>
          <polygon points="358,86 360,94 364,88" fill="#ef4444" />
        </g>

        {/* Aorta */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => hover(structures[4])}
          onMouseLeave={() => hover(null)}
        >
          <path
            d="M280,80 Q280,30 310,15 Q340,5 370,15 Q400,30 400,55"
            fill="none"
            stroke="#ef4444"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M280,80 Q280,30 310,15 Q340,5 370,15 Q400,30 400,55"
            fill="none"
            stroke="#fca5a5"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Aortic valve */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => hover(structures[11])}
            onMouseLeave={() => hover(null)}
          >
            <ellipse
              cx="280"
              cy="80"
              rx="10"
              ry="5"
              fill="#fbbf24"
              opacity="0.7"
              stroke="#d97706"
              strokeWidth="1"
            />
          </g>
          <text x="340" y="8" textAnchor="middle" fontSize="13" fill="#dc2626" fontWeight="bold">
            Aorta
          </text>
          <polygon points="396,50 404,50 400,58" fill="#ef4444" />
        </g>

        {/* Flow arrows inside chambers */}
        {/* RA → RV */}
        <polygon points="181,165 185,175 189,165" fill="#3b82f6" opacity="0.6" />
        {/* LA → LV */}
        <polygon points="291,165 295,175 299,165" fill="#ef4444" opacity="0.6" />
        {/* RV up to PA */}
        <polygon points="196,230 200,220 204,230" fill="#3b82f6" opacity="0.6" />
        {/* LV up to Aorta */}
        <polygon points="276,230 280,220 284,230" fill="#ef4444" opacity="0.6" />

        {/* Legend */}
        <rect
          x="10"
          y="410"
          width="460"
          height="25"
          rx="6"
          fill="#f0fdfa"
          stroke="#14b8a6"
          strokeWidth="1"
        />
        <circle cx="50" cy="422" r="6" fill="#93c5fd" stroke="#3b82f6" strokeWidth="1" />
        <text x="62" y="426" fontSize="13" fill="#115e59">
          Sauerstoffarmes Blut
        </text>
        <circle cx="230" cy="422" r="6" fill="#fca5a5" stroke="#ef4444" strokeWidth="1" />
        <text x="242" y="426" fontSize="13" fill="#115e59">
          Sauerstoffreiches Blut
        </text>
        <ellipse
          cx="400"
          cy="422"
          rx="10"
          ry="5"
          fill="#fbbf24"
          opacity="0.7"
          stroke="#d97706"
          strokeWidth="1"
        />
        <text x="416" y="426" fontSize="13" fill="#115e59">
          Klappe
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
