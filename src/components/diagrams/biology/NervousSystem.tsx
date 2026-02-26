import { useState } from "react";

const parts = [
  {
    id: "nervensystem",
    label: "Nervensystem",
    detail: "Gesamtes neuronales Steuerungssystem des Körpers – unterteilt in ZNS und PNS.",
    color: "#64748b",
  },
  {
    id: "zns",
    label: "ZNS (Zentralnervensystem)",
    detail: "Gehirn und Rückenmark – zentrale Verarbeitung und Steuerung aller neuronalen Signale.",
    color: "#2563eb",
  },
  {
    id: "gehirn",
    label: "Gehirn",
    detail: "Höchstes Steuerungsorgan – Sitz von Bewusstsein, Denken, Gedächtnis und Koordination.",
    color: "#3b82f6",
  },
  {
    id: "grosshirn",
    label: "Großhirn (Cortex)",
    detail: "Bewusstsein, Sprache, Motorik, Sensorik, Lernen und Gedächtnis.",
    color: "#1d4ed8",
  },
  {
    id: "kleinhirn",
    label: "Kleinhirn (Cerebellum)",
    detail: "Koordination von Bewegungen, Gleichgewicht und Feinmotorik.",
    color: "#1e40af",
  },
  {
    id: "hirnstamm",
    label: "Hirnstamm",
    detail:
      "Medulla, Pons, Mittelhirn – Steuerung lebenswichtiger Funktionen wie Atmung, Herzschlag, Reflexe.",
    color: "#1e3a8a",
  },
  {
    id: "zwischenhirn",
    label: "Zwischenhirn",
    detail: "Thalamus (Sinnesrelais) und Hypothalamus (Hormonsteuerung, Homöostase).",
    color: "#7c3aed",
  },
  {
    id: "rueckenmark",
    label: "Rückenmark",
    detail: "Leitet Signale zwischen Gehirn und Körper, steuert Reflexe.",
    color: "#3b82f6",
  },
  {
    id: "pns",
    label: "PNS (Peripheres Nervensystem)",
    detail: "Alle Nerven außerhalb von Gehirn und Rückenmark – Verbindung zwischen ZNS und Körper.",
    color: "#059669",
  },
  {
    id: "somatisch",
    label: "Somatisches NS",
    detail:
      "Willkürliche Steuerung der Skelettmuskulatur und bewusste Wahrnehmung von Sinnesreizen.",
    color: "#10b981",
  },
  {
    id: "vegetativ",
    label: "Vegetatives NS (Autonomes NS)",
    detail:
      "Unwillkürliche Steuerung innerer Organe, Drüsen und glatter Muskulatur – arbeitet autonom.",
    color: "#6b7280",
  },
  {
    id: "sympathikus",
    label: "Sympathikus",
    detail:
      "Fight or Flight – erhöht Herzfrequenz, erweitert Bronchien, hemmt Verdauung, Stressreaktion.",
    color: "#dc2626",
  },
  {
    id: "parasympathikus",
    label: "Parasympathikus",
    detail:
      "Rest and Digest – senkt Herzfrequenz, fördert Verdauung, Entspannung und Regeneration.",
    color: "#7c3aed",
  },
];

type Part = (typeof parts)[number];

/* Label positions: partId -> { lx, ly } for external labels */
const labelPositions: Record<string, { lx: number; ly: number }> = {
  grosshirn: { lx: 30, ly: 42 },
  kleinhirn: { lx: 30, ly: 68 },
  zwischenhirn: { lx: 30, ly: 94 },
  hirnstamm: { lx: 30, ly: 120 },
  rueckenmark: { lx: 30, ly: 350 },
  somatisch: { lx: 430, ly: 210 },
  sympathikus: { lx: 430, ly: 310 },
  parasympathikus: { lx: 430, ly: 390 },
};

/* Anchor points on the anatomy for leader lines */
const anchorPoints: Record<string, { ax: number; ay: number }> = {
  grosshirn: { ax: 230, ay: 68 },
  kleinhirn: { ax: 290, ay: 155 },
  zwischenhirn: { ax: 235, ay: 130 },
  hirnstamm: { ax: 222, ay: 178 },
  rueckenmark: { ax: 205, ay: 340 },
  somatisch: { ax: 330, ay: 250 },
  sympathikus: { ax: 310, ay: 320 },
  parasympathikus: { ax: 290, ay: 400 },
};

export default function NervousSystem() {
  const [active, setActive] = useState<Part | null>(null);

  const isActive = (id: string) => active?.id === id;

  const handleEnter = (id: string) => {
    const p = parts.find((p) => p.id === id);
    if (p) setActive(p);
  };

  const handleClick = (id: string) => {
    if (active?.id === id) {
      setActive(null);
    } else {
      const p = parts.find((p) => p.id === id);
      if (p) setActive(p);
    }
  };

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Nervensystem — Sagittalschnitt & Peripherie
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf Strukturen für Details. Blau = ZNS, Grün = PNS (somatisch), Rot = Sympathikus,
        Violett = Parasympathikus.
      </p>

      <svg viewBox="0 0 600 520" className="w-full max-w-2xl mx-auto">
        <defs>
          {/* Brain interior gradient */}
          <radialGradient id="ns-brainGrad" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="50%" stopColor="#bfdbfe" />
            <stop offset="100%" stopColor="#93c5fd" />
          </radialGradient>

          {/* Cerebellum gradient */}
          <radialGradient id="ns-cerebellumGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="100%" stopColor="#818cf8" />
          </radialGradient>

          {/* Brainstem gradient */}
          <linearGradient id="ns-brainstemGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>

          {/* Spinal cord gradient */}
          <linearGradient id="ns-spinalGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Zwischenhirn gradient */}
          <radialGradient id="ns-diencephalonGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ede9fe" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </radialGradient>

          {/* Sympathikus nerve color */}
          <linearGradient id="ns-sympathGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>

          {/* Parasympathikus nerve color */}
          <linearGradient id="ns-parasympGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* PNS somatic nerve color */}
          <linearGradient id="ns-somaticGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          {/* Dashed animation for hover highlight */}
          <filter id="ns-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ============================================ */}
        {/* BACKGROUND: Skin/head silhouette hint */}
        {/* ============================================ */}
        <path
          d="M155,30 Q145,25 140,40 Q132,60 130,90 Q128,120 130,145 Q132,168 140,185
             Q145,195 150,200 L150,205 L200,210"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* ============================================ */}
        {/* GROSSHIRN (Cerebrum) — wrinkled cortex */}
        {/* ============================================ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("grosshirn")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("grosshirn")}
        >
          {/* Main cerebrum shape — large dome with sulci */}
          <path
            d="M155,140 Q150,125 152,100 Q155,70 170,50 Q190,30 220,25
               Q250,20 275,25 Q300,32 315,50 Q330,70 330,100
               Q330,125 325,140 Q310,145 295,140 Q275,142 255,138
               Q235,142 215,140 Q195,142 175,138 Q162,140 155,140 Z"
            fill="url(#ns-brainGrad)"
            stroke="#1d4ed8"
            strokeWidth={isActive("grosshirn") ? 2.5 : 1.8}
            opacity={isActive("grosshirn") ? 1 : 0.95}
          />
          {/* Sulci — wrinkles/folds of the cortex */}
          <path
            d="M175,55 Q195,48 210,56"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <path
            d="M220,38 Q245,32 265,40"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <path
            d="M280,42 Q300,38 315,52"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <path
            d="M165,80 Q185,70 210,78 Q230,70 250,80"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.0"
            opacity="0.5"
          />
          <path
            d="M260,75 Q280,68 305,78 Q315,82 325,90"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.0"
            opacity="0.5"
          />
          <path
            d="M160,108 Q180,98 205,106 Q225,98 248,108"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.0"
            opacity="0.45"
          />
          <path
            d="M258,104 Q278,96 300,106 Q315,110 325,118"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.0"
            opacity="0.45"
          />
          <path
            d="M168,128 Q190,120 215,128 Q240,122 260,130"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="0.8"
            opacity="0.35"
          />

          {/* Hover highlight */}
          {isActive("grosshirn") && (
            <path
              d="M155,140 Q150,125 152,100 Q155,70 170,50 Q190,30 220,25
                 Q250,20 275,25 Q300,32 315,50 Q330,70 330,100
                 Q330,125 325,140 Q310,145 295,140 Q275,142 255,138
                 Q235,142 215,140 Q195,142 175,138 Q162,140 155,140 Z"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="3"
              strokeDasharray="5 3"
              className="animate-pulse"
            />
          )}
        </g>

        {/* ============================================ */}
        {/* ZWISCHENHIRN (Diencephalon) — center of brain */}
        {/* ============================================ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("zwischenhirn")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("zwischenhirn")}
        >
          <ellipse
            cx="235"
            cy="130"
            rx="35"
            ry="20"
            fill="url(#ns-diencephalonGrad)"
            stroke="#7c3aed"
            strokeWidth={isActive("zwischenhirn") ? 2.5 : 1.5}
          />
          {/* Thalamus label inside */}
          <text x="235" y="127" textAnchor="middle" fontSize="7" fill="#5b21b6" fontWeight="600">
            Thalamus
          </text>
          <text x="235" y="137" textAnchor="middle" fontSize="6.5" fill="#6d28d9">
            Hypothalamus
          </text>

          {isActive("zwischenhirn") && (
            <ellipse
              cx="235"
              cy="130"
              rx="38"
              ry="23"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2.5"
              strokeDasharray="4 2"
              className="animate-pulse"
            />
          )}
        </g>

        {/* ============================================ */}
        {/* KLEINHIRN (Cerebellum) — back, folded */}
        {/* ============================================ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("kleinhirn")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("kleinhirn")}
        >
          {/* Cerebellum main shape */}
          <path
            d="M280,135 Q310,130 325,140 Q340,152 335,170 Q328,185 310,188
               Q295,190 280,185 Q268,180 265,170 Q262,155 270,142 Z"
            fill="url(#ns-cerebellumGrad)"
            stroke="#1e40af"
            strokeWidth={isActive("kleinhirn") ? 2.5 : 1.5}
          />
          {/* Parallel folds (folia) */}
          <path
            d="M275,148 Q295,143 315,148"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="0.9"
            opacity="0.6"
          />
          <path
            d="M272,156 Q295,150 320,156"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="0.9"
            opacity="0.6"
          />
          <path
            d="M270,164 Q295,158 325,164"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="0.9"
            opacity="0.6"
          />
          <path
            d="M273,172 Q295,166 322,172"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="0.9"
            opacity="0.55"
          />
          <path
            d="M278,180 Q295,175 315,180"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="0.8"
            opacity="0.45"
          />

          {isActive("kleinhirn") && (
            <path
              d="M280,135 Q310,130 325,140 Q340,152 335,170 Q328,185 310,188
                 Q295,190 280,185 Q268,180 265,170 Q262,155 270,142 Z"
              fill="none"
              stroke="#1e40af"
              strokeWidth="3"
              strokeDasharray="4 2"
              className="animate-pulse"
            />
          )}
        </g>

        {/* ============================================ */}
        {/* HIRNSTAMM (Brainstem) — bottom of brain */}
        {/* ============================================ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("hirnstamm")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("hirnstamm")}
        >
          {/* Brainstem tapering shape */}
          <path
            d="M218,150 Q225,148 238,150 Q245,155 245,170 Q242,190 235,200
               Q228,208 220,210 Q215,208 210,200 Q205,190 205,175
               Q206,160 212,152 Z"
            fill="url(#ns-brainstemGrad)"
            stroke="#1e3a8a"
            strokeWidth={isActive("hirnstamm") ? 2.5 : 1.5}
          />
          {/* Pons bulge */}
          <path
            d="M208,165 Q200,170 200,178 Q202,185 210,188"
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="1"
            opacity="0.5"
          />
          {/* Small labels */}
          <text x="224" y="168" textAnchor="middle" fontSize="5.5" fill="#1e3a8a" fontWeight="600">
            Pons
          </text>
          <text x="224" y="192" textAnchor="middle" fontSize="5.5" fill="#1e3a8a" fontWeight="600">
            Medulla
          </text>

          {isActive("hirnstamm") && (
            <path
              d="M218,150 Q225,148 238,150 Q245,155 245,170 Q242,190 235,200
                 Q228,208 220,210 Q215,208 210,200 Q205,190 205,175
                 Q206,160 212,152 Z"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="3"
              strokeDasharray="4 2"
              className="animate-pulse"
            />
          )}
        </g>

        {/* ============================================ */}
        {/* RUCKENMARK (Spinal Cord) — extending down */}
        {/* ============================================ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("rueckenmark")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("rueckenmark")}
        >
          {/* Spinal cord — long tapered column */}
          <path
            d="M213,210 Q218,212 222,210 Q224,230 224,260 Q223,300 222,340
               Q220,380 218,420 Q216,440 214,460 Q212,465 210,460
               Q208,440 207,420 Q205,380 204,340 Q203,300 204,260
               Q204,230 206,212 Z"
            fill="url(#ns-spinalGrad)"
            stroke="#2563eb"
            strokeWidth={isActive("rueckenmark") ? 2.5 : 1.3}
          />
          {/* Vertebral segments hints */}
          {[240, 270, 300, 330, 360, 390, 420].map((y, i) => (
            <line
              key={`seg-${i}`}
              x1="207"
              y1={y}
              x2="220"
              y2={y}
              stroke="#1d4ed8"
              strokeWidth="0.6"
              opacity="0.35"
            />
          ))}

          {isActive("rueckenmark") && (
            <rect
              x="200"
              y="210"
              width="28"
              height="255"
              rx="14"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeDasharray="5 3"
              className="animate-pulse"
            />
          )}
        </g>

        {/* ============================================ */}
        {/* ZNS bracket indicator */}
        {/* ============================================ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("zns")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("zns")}
        >
          <path
            d="M148,30 L142,30 L142,460 L148,460"
            fill="none"
            stroke="#2563eb"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="138"
            y="250"
            textAnchor="middle"
            fontSize="10"
            fill="#2563eb"
            fontWeight="700"
            transform="rotate(-90,138,250)"
          >
            ZNS
          </text>
          {isActive("zns") && (
            <path
              d="M148,30 L142,30 L142,460 L148,460"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeDasharray="5 3"
              className="animate-pulse"
            />
          )}
        </g>

        {/* ============================================ */}
        {/* PERIPHERAL NERVES (PNS) — branching off spinal cord */}
        {/* ============================================ */}

        {/* === Somatic nerves (green) === */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("somatisch")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("somatisch")}
        >
          {/* Cervical somatic */}
          <path
            d="M222,235 Q260,228 310,220 Q350,215 390,218"
            fill="none"
            stroke="url(#ns-somaticGrad)"
            strokeWidth={isActive("somatisch") ? 3 : 2}
            strokeLinecap="round"
          />
          <path
            d="M390,218 Q410,220 430,215"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M390,218 Q405,230 420,240"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Thoracic somatic */}
          <path
            d="M222,260 Q270,252 330,248 Q370,245 400,250"
            fill="none"
            stroke="url(#ns-somaticGrad)"
            strokeWidth={isActive("somatisch") ? 3 : 2}
            strokeLinecap="round"
          />
          <path
            d="M400,250 Q420,252 440,248"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Lumbar somatic */}
          <path
            d="M220,290 Q265,283 320,278 Q365,274 400,280"
            fill="none"
            stroke="url(#ns-somaticGrad)"
            strokeWidth={isActive("somatisch") ? 3 : 2}
            strokeLinecap="round"
          />
          <path
            d="M400,280 Q425,278 445,272"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {isActive("somatisch") && (
            <rect
              x="300"
              y="208"
              width="155"
              height="82"
              rx="8"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="4 2"
              className="animate-pulse"
            />
          )}
        </g>

        {/* === Sympathikus nerves (red) === */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("sympathikus")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("sympathikus")}
        >
          {/* Sympathetic chain ganglia representation */}
          {[310, 335, 360].map((y, i) => (
            <g key={`symp-gang-${i}`}>
              {/* Nerve branch from spinal cord */}
              <path
                d={`M220,${y} Q260,${y - 5} 310,${y - 8} Q350,${y - 10} 390,${y - 5}`}
                fill="none"
                stroke="url(#ns-sympathGrad)"
                strokeWidth={isActive("sympathikus") ? 3 : 1.8}
                strokeLinecap="round"
              />
              {/* Terminal branches */}
              <path
                d={`M390,${y - 5} Q410,${y - 8} 435,${y - 12}`}
                fill="none"
                stroke="#ef4444"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d={`M390,${y - 5} Q415,${y} 440,${y + 5}`}
                fill="none"
                stroke="#ef4444"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Ganglion dot on sympathetic chain */}
              <circle cx="310" cy={y - 8} r="3.5" fill="#fecaca" stroke="#dc2626" strokeWidth="1" />
            </g>
          ))}
          {/* Sympathetic chain (vertical connection between ganglia) */}
          <line
            x1="310"
            y1="302"
            x2="310"
            y2="352"
            stroke="#dc2626"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            opacity="0.6"
          />

          {isActive("sympathikus") && (
            <rect
              x="300"
              y="295"
              width="150"
              height="75"
              rx="8"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeDasharray="4 2"
              className="animate-pulse"
            />
          )}
        </g>

        {/* === Parasympathikus nerves (purple) === */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("parasympathikus")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("parasympathikus")}
        >
          {/* Cranial parasympathetic (vagus from brainstem) */}
          <path
            d="M210,200 Q195,220 190,240 Q185,260 190,280
               Q200,310 230,330 Q280,355 340,370 Q380,378 420,375"
            fill="none"
            stroke="url(#ns-parasympGrad)"
            strokeWidth={isActive("parasympathikus") ? 3 : 1.8}
            strokeLinecap="round"
          />
          <text x="186" y="258" fontSize="5.5" fill="#7c3aed" fontWeight="600" opacity="0.7">
            N. vagus
          </text>
          {/* Terminal branches from vagus */}
          <path
            d="M420,375 Q440,372 458,365"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M420,375 Q438,382 455,388"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Sacral parasympathetic (from lower spinal cord) */}
          <path
            d="M215,420 Q250,418 300,415 Q350,412 400,418"
            fill="none"
            stroke="url(#ns-parasympGrad)"
            strokeWidth={isActive("parasympathikus") ? 3 : 1.8}
            strokeLinecap="round"
          />
          <path
            d="M400,418 Q425,420 450,415"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M400,418 Q420,425 440,432"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Parasympathetic ganglion dots */}
          <circle cx="340" cy="370" r="3" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1" />
          <circle cx="300" cy="415" r="3" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1" />

          {isActive("parasympathikus") && (
            <rect
              x="180"
              y="360"
              width="285"
              height="82"
              rx="8"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2"
              strokeDasharray="4 2"
              className="animate-pulse"
            />
          )}
        </g>

        {/* PNS bracket indicator */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("pns")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("pns")}
        >
          <path
            d="M470,205 L476,205 L476,445 L470,445"
            fill="none"
            stroke="#059669"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="482"
            y="330"
            textAnchor="middle"
            fontSize="10"
            fill="#059669"
            fontWeight="700"
            transform="rotate(90,482,330)"
          >
            PNS
          </text>
          {isActive("pns") && (
            <path
              d="M470,205 L476,205 L476,445 L470,445"
              fill="none"
              stroke="#059669"
              strokeWidth="3"
              strokeDasharray="5 3"
              className="animate-pulse"
            />
          )}
        </g>

        {/* Vegetativ bracket */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("vegetativ")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("vegetativ")}
        >
          <path
            d="M458,295 L464,295 L464,445 L458,445"
            fill="none"
            stroke="#6b7280"
            strokeWidth="1"
            opacity="0.5"
          />
          <text
            x="454"
            y="370"
            textAnchor="middle"
            fontSize="7"
            fill="#6b7280"
            fontWeight="600"
            transform="rotate(90,454,370)"
          >
            Vegetativ
          </text>
        </g>

        {/* Gehirn clickable overlay */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("gehirn")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("gehirn")}
        >
          <rect x="155" y="25" width="185" height="190" rx="10" fill="transparent" />
        </g>

        {/* Nervensystem title clickable */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleEnter("nervensystem")}
          onMouseLeave={() => setActive(null)}
          onClick={() => handleClick("nervensystem")}
        >
          <text
            x="300"
            y="510"
            textAnchor="middle"
            fontSize="11"
            fill="#64748b"
            fontWeight="700"
            stroke="white"
            strokeWidth="3"
            paintOrder="stroke"
          >
            Nervensystem (Gesamtübersicht)
          </text>
          <text x="300" y="510" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="700">
            Nervensystem (Gesamtübersicht)
          </text>
        </g>

        {/* ============================================ */}
        {/* LEADER LINES + EXTERNAL LABELS */}
        {/* ============================================ */}
        {Object.entries(labelPositions).map(([id, { lx, ly }]) => {
          const anchor = anchorPoints[id];
          if (!anchor) return null;
          const part = parts.find((p) => p.id === id);
          if (!part) return null;
          const isLeft = lx < 200;
          const textAnchor = isLeft ? "start" : "start";
          const isCurrent = isActive(id);
          return (
            <g key={`label-${id}`}>
              {/* Leader line */}
              <line
                x1={anchor.ax}
                y1={anchor.ay}
                x2={lx + (isLeft ? 2 : -2)}
                y2={ly - 4}
                stroke="#94a3b8"
                strokeWidth="0.8"
                strokeDasharray="3 2"
              />
              {/* Dot at anatomy end */}
              <circle cx={anchor.ax} cy={anchor.ay} r="2" fill={part.color} />
              {/* White halo behind label */}
              <text
                x={lx}
                y={ly}
                textAnchor={textAnchor}
                fontSize={isCurrent ? 11 : 10}
                fontWeight={isCurrent ? "700" : "600"}
                fill={part.color}
                stroke="white"
                strokeWidth="3.5"
                paintOrder="stroke"
              >
                {part.label}
              </text>
              {/* Foreground label */}
              <text
                x={lx}
                y={ly}
                textAnchor={textAnchor}
                fontSize={isCurrent ? 11 : 10}
                fontWeight={isCurrent ? "700" : "600"}
                fill={part.color}
              >
                {part.label}
              </text>
            </g>
          );
        })}

        {/* Functional annotations */}
        <text x="445" y="325" fontSize="7" fill="#dc2626" fontStyle="italic" opacity="0.7">
          fight or flight
        </text>
        <text x="445" y="405" fontSize="7" fill="#7c3aed" fontStyle="italic" opacity="0.7">
          rest &amp; digest
        </text>

        {/* Organ target icons (small symbols at nerve ends) */}
        {/* Heart icon hint for sympathikus */}
        <text x="448" y="340" fontSize="9" opacity="0.5">
          ♥
        </text>
        {/* Lung icon hint */}
        <text x="452" y="358" fontSize="8" opacity="0.4">
          ☁
        </text>
        {/* Gut icon hint for parasympathikus */}
        <text x="458" y="420" fontSize="8" opacity="0.4">
          ◎
        </text>
      </svg>

      {/* Detail panel */}
      {active && (
        <div
          className="border rounded-lg p-3"
          style={{
            backgroundColor: `${active.color}08`,
            borderColor: `${active.color}40`,
          }}
        >
          <p className="text-sm font-semibold" style={{ color: active.color }}>
            {active.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{active.detail}</p>
        </div>
      )}
    </div>
  );
}
