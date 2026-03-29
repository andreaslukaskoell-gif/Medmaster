import { useState } from "react";

type Structure = {
  id: string;
  label: string;
  labelShort: string;
  color: string;
  hoverColor: string;
  detail: string;
  prüfung: string;
};

const structures: Structure[] = [
  {
    id: "ra",
    label: "Rechter Vorhof (Atrium dextrum)",
    labelShort: "RA",
    color: "#3b82f6",
    hoverColor: "#60a5fa",
    detail:
      "Empfängt sauerstoffarmes Blut aus der oberen (V. cava superior) und unteren Hohlvene (V. cava inferior) sowie dem Koronarsinus. Wand dünn (~2 mm), da nur geringer Druck nötig. Enthält den Sinusknoten (primärer Schrittmacher, 60–80/min).",
    prüfung: "Sinusknoten-Lage, Hohlvenen-Mündung, Fossa ovalis",
  },
  {
    id: "rv",
    label: "Rechte Kammer (Ventriculus dexter)",
    labelShort: "RV",
    color: "#2563eb",
    hoverColor: "#3b82f6",
    detail:
      "Pumpt sauerstoffarmes Blut über den Truncus pulmonalis in die Lunge. Wand dünner als linke Kammer (~3–5 mm), da nur Lungenkreislauf-Druck (ca. 25/8 mmHg). Enthält Trabeculae carneae und Papillarmuskeln, die über Chordae tendineae die Trikuspidalklappe halten.",
    prüfung: "Wanddicke vs. LV, Lungenkreislauf-Druck, Papillarmuskeln",
  },
  {
    id: "la",
    label: "Linker Vorhof (Atrium sinistrum)",
    labelShort: "LA",
    color: "#dc2626",
    hoverColor: "#f87171",
    detail:
      "Empfängt sauerstoffreiches Blut aus den 4 Lungenvenen (Vv. pulmonales). Hintere Wand glatt, vorderes Herzohr (Auricula) mit Pectinati-Muskeln. Häufigster Ursprungsort von Vorhofflimmern.",
    prüfung: "4 Lungenvenen, Vorhofflimmern-Entstehung, Herzohr",
  },
  {
    id: "lv",
    label: "Linke Kammer (Ventriculus sinister)",
    labelShort: "LV",
    color: "#b91c1c",
    hoverColor: "#dc2626",
    detail:
      "Pumpt sauerstoffreiches Blut über die Aorta in den Körperkreislauf. Dickste Wand aller Kammern (~12–15 mm), da systemischer Druck (ca. 120/80 mmHg). Konische Form. Bei Hypertrophie: konzentrisches Remodeling (Druckbelastung) vs. exzentrisch (Volumenbelastung).",
    prüfung: "Wanddicke 12–15 mm, systolischer Druck 120 mmHg, Hypertrophie-Formen",
  },
  {
    id: "tv",
    label: "Trikuspidalklappe",
    labelShort: "TK",
    color: "#6366f1",
    hoverColor: "#818cf8",
    detail:
      "Segelklappe zwischen rechtem Vorhof und rechter Kammer. Drei Segel (anterior, posterior, septal), gehalten von Chordae tendineae an Papillarmuskeln. Verhindert Rückfluss in den Vorhof während der Systole.",
    prüfung: "3 Segel, AV-Klappe, Chordae tendineae, Auskultation: 4. ICR parasternal rechts",
  },
  {
    id: "mv",
    label: "Mitralklappe (Bikuspidalklappe)",
    labelShort: "MK",
    color: "#e11d48",
    hoverColor: "#fb7185",
    detail:
      "Segelklappe zwischen linkem Vorhof und linker Kammer. Nur zwei Segel (anterior, posterior) — daher Bikuspidalklappe. Häufigste Klappe bei Vitien (Mitralinsuffizienz, Mitralstenose). Auskultation: Herzspitze (5. ICR, MCL links).",
    prüfung: "2 Segel (einzige Bikuspidalklappe!), häufigstes Vitium, Auskultationspunkt",
  },
  {
    id: "pk",
    label: "Pulmonalklappe",
    labelShort: "PK",
    color: "#8b5cf6",
    hoverColor: "#a78bfa",
    detail:
      "Taschenklappe am Übergang rechte Kammer → Truncus pulmonalis. Drei halbmondförmige Taschen. Öffnet sich bei Systole der rechten Kammer. Pulmonalstenose: häufigstes angeborenes Klappenvitium.",
    prüfung: "Taschenklappe, 3 Taschen, Auskultation: 2. ICR parasternal links",
  },
  {
    id: "ak",
    label: "Aortenklappe",
    labelShort: "AK",
    color: "#be185d",
    hoverColor: "#ec4899",
    detail:
      "Taschenklappe am Übergang linke Kammer → Aorta ascendens. Drei Taschen (coronaria dextra/sinistra, non-coronaria). Abgänge der Koronararterien direkt oberhalb der rechten und linken Tasche (Sinus Valsalvae). Aortenstenose: häufigstes erworbenes Klappenvitium im Alter.",
    prüfung:
      "3 Taschen, Koronarabgänge aus Sinus Valsalvae, Auskultation: 2. ICR parasternal rechts",
  },
  {
    id: "aorta",
    label: "Aorta",
    labelShort: "Ao",
    color: "#991b1b",
    hoverColor: "#dc2626",
    detail:
      "Größte Arterie des Körpers. Aorta ascendens → Aortenbogen (Truncus brachiocephalicus, A. carotis communis sinistra, A. subclavia sinistra) → Aorta descendens (thorakale → abdominale Aorta). Windkesselfunktion: elastische Wand glättet den pulsatilen Blutfluss.",
    prüfung: "3 Äste des Aortenbogens (Reihenfolge!), Windkesselfunktion, Aortendissektion",
  },
  {
    id: "tp",
    label: "Truncus pulmonalis",
    labelShort: "TP",
    color: "#1d4ed8",
    hoverColor: "#3b82f6",
    detail:
      "Führt sauerstoffarmes Blut von der rechten Kammer zur Lunge. Teilt sich in A. pulmonalis dextra und sinistra. Einzige Arterie, die sauerstoffarmes Blut führt!",
    prüfung: "Arterie mit sauerstoffarmem Blut, Bifurkation, Lungenembolie",
  },
  {
    id: "vcs",
    label: "V. cava superior",
    labelShort: "VCS",
    color: "#1e40af",
    hoverColor: "#3b82f6",
    detail:
      "Obere Hohlvene. Sammelt venöses Blut aus Kopf, Hals, oberen Extremitäten und Thorax. Mündet in den rechten Vorhof. Kein Klappenapparat.",
    prüfung: "Drainage-Gebiet, V. cava superior-Syndrom bei Kompression",
  },
  {
    id: "vci",
    label: "V. cava inferior",
    labelShort: "VCI",
    color: "#1e3a8a",
    hoverColor: "#2563eb",
    detail:
      "Untere Hohlvene. Sammelt venöses Blut aus Abdomen, Becken und unteren Extremitäten. Mündet inferior in den rechten Vorhof. Passiert das Zwerchfell (Foramen venae cavae).",
    prüfung: "Drainage-Gebiet, Zwerchfelldurchtritt (T8-Höhe), kein Klappenapparat",
  },
  {
    id: "septum",
    label: "Septum interventriculare",
    labelShort: "Sept.",
    color: "#78716c",
    hoverColor: "#a8a29e",
    detail:
      "Herzscheidewand zwischen den Kammern. Muskulärer Anteil (dick, untere ⅔) und membranöser Anteil (dünn, oberes ⅓). His-Bündel verläuft im membranösen Anteil. Ventrikelseptumdefekt (VSD): häufigstes angeborenes Herzvitium.",
    prüfung: "VSD = häufigstes angeborenes Vitium, His-Bündel im membranösen Anteil",
  },
];

// SVG path data for anatomically correct heart shape
const HEART_OUTER =
  "M250,60 C250,60 200,20 150,20 C90,20 40,70 40,130 C40,200 100,270 175,340 C210,370 250,400 250,420 C250,400 290,370 325,340 C400,270 460,200 460,130 C460,70 410,20 350,20 C300,20 250,60 250,60 Z";

export default function HeartAnatomyInteractive() {
  const [active, setActive] = useState<string | null>(null);
  const activeStructure = structures.find((s) => s.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Herzanatomie — Interaktiv
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Klicke auf eine Struktur für Details. Blau = sauerstoffarm, Rot = sauerstoffreich.
      </p>

      <svg
        role="img"
        viewBox="0 0 500 480"
        className="w-full max-w-lg mx-auto"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <title>Anatomie des Herzens — Kammern, Klappen und große Gefäße</title>
        <defs>
          {/* Gradients for realistic appearance */}
          <linearGradient id="hrt-deoxy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="hrt-oxy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="hrt-aorta" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
          <linearGradient id="hrt-pulm" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <filter id="hrt-shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* ===== HEART OUTLINE (pericardium) ===== */}
        <path
          d={HEART_OUTER}
          fill="#fef2f2"
          stroke="#e5e7eb"
          strokeWidth="2"
          filter="url(#hrt-shadow)"
        />

        {/* ===== GREAT VESSELS ===== */}

        {/* V. cava superior */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "vcs" ? null : "vcs")}
        >
          <path
            d="M155,20 L155,-30 C155,-50 145,-60 130,-60 L130,-80"
            fill="none"
            stroke={active === "vcs" ? "#3b82f6" : "#1e40af"}
            strokeWidth={active === "vcs" ? 18 : 14}
            strokeLinecap="round"
            opacity={active === "vcs" ? 1 : 0.85}
          />
          <text x="110" y="-65" fontSize="9" fill="#1e40af" fontWeight="600" textAnchor="middle">
            V. cava sup.
          </text>
        </g>

        {/* V. cava inferior */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "vci" ? null : "vci")}
        >
          <path
            d="M155,340 L140,380 L130,420 L125,450"
            fill="none"
            stroke={active === "vci" ? "#2563eb" : "#1e3a8a"}
            strokeWidth={active === "vci" ? 16 : 12}
            strokeLinecap="round"
            opacity={active === "vci" ? 1 : 0.85}
          />
          <text x="105" y="460" fontSize="9" fill="#1e3a8a" fontWeight="600" textAnchor="middle">
            V. cava inf.
          </text>
        </g>

        {/* Truncus pulmonalis */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "tp" ? null : "tp")}
        >
          <path
            d="M220,110 C210,80 200,50 180,30 C165,15 140,10 120,20"
            fill="none"
            stroke={active === "tp" ? "#3b82f6" : "#1d4ed8"}
            strokeWidth={active === "tp" ? 16 : 12}
            strokeLinecap="round"
            opacity={active === "tp" ? 1 : 0.85}
          />
          <text x="135" y="8" fontSize="9" fill="#1d4ed8" fontWeight="600" textAnchor="middle">
            Truncus pulm.
          </text>
        </g>

        {/* Aorta */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "aorta" ? null : "aorta")}
        >
          <path
            d="M280,90 C290,55 310,25 340,15 C370,5 400,15 420,35 C435,50 440,75 440,100"
            fill="none"
            stroke={active === "aorta" ? "#dc2626" : "#991b1b"}
            strokeWidth={active === "aorta" ? 18 : 14}
            strokeLinecap="round"
            opacity={active === "aorta" ? 1 : 0.85}
          />
          {/* Aortic arch branches */}
          <path
            d="M340,15 L345,-15"
            fill="none"
            stroke="#991b1b"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M365,8 L375,-20"
            fill="none"
            stroke="#991b1b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M395,15 L410,-10"
            fill="none"
            stroke="#991b1b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <text x="345" y="-22" fontSize="7" fill="#991b1b" textAnchor="middle">
            Tr. brachioceph.
          </text>
          <text x="375" y="-26" fontSize="7" fill="#991b1b" textAnchor="middle">
            A. car. com. sin.
          </text>
          <text x="418" y="-16" fontSize="7" fill="#991b1b" textAnchor="middle">
            A. subcl. sin.
          </text>
          <text x="448" y="100" fontSize="9" fill="#991b1b" fontWeight="600">
            Aorta
          </text>
        </g>

        {/* Pulmonary veins (oxygenated, to LA) */}
        <path
          d="M380,100 C410,90 435,85 455,75"
          fill="none"
          stroke="#dc2626"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M385,130 C415,125 440,120 458,115"
          fill="none"
          stroke="#dc2626"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.6"
        />
        <text x="462" y="72" fontSize="7" fill="#dc2626">
          Vv. pulm.
        </text>

        {/* ===== CHAMBERS ===== */}

        {/* Septum interventriculare */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "septum" ? null : "septum")}
        >
          <line
            x1="250"
            y1="130"
            x2="250"
            y2="395"
            stroke={active === "septum" ? "#a8a29e" : "#78716c"}
            strokeWidth={active === "septum" ? 8 : 5}
            opacity={active === "septum" ? 0.9 : 0.6}
          />
        </g>

        {/* Atrial septum */}
        <line x1="250" y1="95" x2="250" y2="195" stroke="#78716c" strokeWidth="3" opacity="0.4" />

        {/* Right Atrium */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "ra" ? null : "ra")}
        >
          <ellipse
            cx="170"
            cy="145"
            rx="75"
            ry="55"
            fill={active === "ra" ? "#bfdbfe" : "#dbeafe"}
            stroke={active === "ra" ? "#3b82f6" : "#93c5fd"}
            strokeWidth={active === "ra" ? 3 : 1.5}
            opacity="0.85"
          />
          <text
            x="170"
            y="135"
            textAnchor="middle"
            fontSize="12"
            fill="#1e40af"
            fontWeight="700"
          >
            RA
          </text>
          <text x="170" y="150" textAnchor="middle" fontSize="8" fill="#1e40af">
            Rechter Vorhof
          </text>
          {/* Sinusknoten indicator */}
          <circle cx="120" cy="105" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="120" y="96" textAnchor="middle" fontSize="6" fill="#92400e" fontWeight="600">
            SA
          </text>
        </g>

        {/* Left Atrium */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "la" ? null : "la")}
        >
          <ellipse
            cx="340"
            cy="140"
            rx="70"
            ry="50"
            fill={active === "la" ? "#fecaca" : "#fee2e2"}
            stroke={active === "la" ? "#dc2626" : "#fca5a5"}
            strokeWidth={active === "la" ? 3 : 1.5}
            opacity="0.85"
          />
          <text
            x="340"
            y="130"
            textAnchor="middle"
            fontSize="12"
            fill="#991b1b"
            fontWeight="700"
          >
            LA
          </text>
          <text x="340" y="145" textAnchor="middle" fontSize="8" fill="#991b1b">
            Linker Vorhof
          </text>
        </g>

        {/* AV-plane / valve plane line */}
        <line
          x1="95"
          y1="195"
          x2="410"
          y2="195"
          stroke="#d4d4d8"
          strokeWidth="2"
          strokeDasharray="4,3"
          opacity="0.5"
        />
        <text x="425" y="198" fontSize="7" fill="#a1a1aa" fontStyle="italic">
          Ventilebene
        </text>

        {/* Tricuspid valve */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "tv" ? null : "tv")}
        >
          <path
            d="M185,188 L170,205 L155,188"
            fill="none"
            stroke={active === "tv" ? "#818cf8" : "#6366f1"}
            strokeWidth={active === "tv" ? 3.5 : 2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M195,188 L185,205 L175,188"
            fill="none"
            stroke={active === "tv" ? "#818cf8" : "#6366f1"}
            strokeWidth={active === "tv" ? 3.5 : 2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="175" y="218" textAnchor="middle" fontSize="7" fill="#6366f1" fontWeight="600">
            TK (3 Segel)
          </text>
        </g>

        {/* Mitral valve */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "mv" ? null : "mv")}
        >
          <path
            d="M325,188 L315,208 L305,188"
            fill="none"
            stroke={active === "mv" ? "#fb7185" : "#e11d48"}
            strokeWidth={active === "mv" ? 3.5 : 2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M340,188 L330,208 L320,188"
            fill="none"
            stroke={active === "mv" ? "#fb7185" : "#e11d48"}
            strokeWidth={active === "mv" ? 3.5 : 2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="325" y="221" textAnchor="middle" fontSize="7" fill="#e11d48" fontWeight="600">
            MK (2 Segel!)
          </text>
        </g>

        {/* Right Ventricle */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "rv" ? null : "rv")}
        >
          <path
            d="M100,210 C90,260 95,320 120,360 C140,390 190,410 245,400 L245,210 Z"
            fill={active === "rv" ? "#bfdbfe" : "#dbeafe"}
            stroke={active === "rv" ? "#2563eb" : "#93c5fd"}
            strokeWidth={active === "rv" ? 3 : 1.5}
            opacity="0.8"
          />
          {/* Trabeculae */}
          <path
            d="M140,280 C155,290 160,310 150,320"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="1"
            opacity="0.4"
          />
          <path
            d="M170,300 C185,310 188,325 178,335"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="1"
            opacity="0.4"
          />
          {/* Papillarmuskeln + Chordae */}
          <ellipse cx="160" cy="350" rx="12" ry="8" fill="#93c5fd" opacity="0.5" />
          <line
            x1="160"
            y1="342"
            x2="170"
            y2="207"
            stroke="#93c5fd"
            strokeWidth="0.8"
            strokeDasharray="2,2"
            opacity="0.4"
          />
          <text
            x="165"
            y="290"
            textAnchor="middle"
            fontSize="12"
            fill="#1e40af"
            fontWeight="700"
          >
            RV
          </text>
          <text x="165" y="305" textAnchor="middle" fontSize="7" fill="#1e40af">
            Rechte Kammer
          </text>
          <text x="165" y="315" textAnchor="middle" fontSize="6" fill="#3b82f6">
            Wand: 3–5 mm
          </text>
        </g>

        {/* Left Ventricle */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "lv" ? null : "lv")}
        >
          <path
            d="M255,210 L255,400 C310,410 380,385 400,340 C420,300 415,250 400,210 Z"
            fill={active === "lv" ? "#fecaca" : "#fee2e2"}
            stroke={active === "lv" ? "#b91c1c" : "#fca5a5"}
            strokeWidth={active === "lv" ? 3 : 1.5}
            opacity="0.8"
          />
          {/* Thicker wall indicator */}
          <path
            d="M400,210 C420,260 425,320 405,360"
            fill="none"
            stroke="#b91c1c"
            strokeWidth="8"
            opacity="0.15"
          />
          {/* Papillarmuskeln */}
          <ellipse cx="340" cy="345" rx="14" ry="9" fill="#fca5a5" opacity="0.5" />
          <line
            x1="340"
            y1="336"
            x2="325"
            y2="210"
            stroke="#fca5a5"
            strokeWidth="0.8"
            strokeDasharray="2,2"
            opacity="0.4"
          />
          <text
            x="330"
            y="280"
            textAnchor="middle"
            fontSize="12"
            fill="#991b1b"
            fontWeight="700"
          >
            LV
          </text>
          <text x="330" y="295" textAnchor="middle" fontSize="7" fill="#991b1b">
            Linke Kammer
          </text>
          <text x="330" y="305" textAnchor="middle" fontSize="6" fill="#b91c1c">
            Wand: 12–15 mm
          </text>
        </g>

        {/* Pulmonary valve */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "pk" ? null : "pk")}
        >
          <path
            d="M205,115 C210,105 215,105 220,115"
            fill="none"
            stroke={active === "pk" ? "#a78bfa" : "#8b5cf6"}
            strokeWidth="2.5"
          />
          <path
            d="M215,115 C220,105 225,105 230,115"
            fill="none"
            stroke={active === "pk" ? "#a78bfa" : "#8b5cf6"}
            strokeWidth="2.5"
          />
          <text x="218" y="100" textAnchor="middle" fontSize="7" fill="#8b5cf6" fontWeight="600">
            PK
          </text>
        </g>

        {/* Aortic valve */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "ak" ? null : "ak")}
        >
          <path
            d="M265,95 C270,85 275,85 280,95"
            fill="none"
            stroke={active === "ak" ? "#ec4899" : "#be185d"}
            strokeWidth="2.5"
          />
          <path
            d="M275,95 C280,85 285,85 290,95"
            fill="none"
            stroke={active === "ak" ? "#ec4899" : "#be185d"}
            strokeWidth="2.5"
          />
          <text x="278" y="80" textAnchor="middle" fontSize="7" fill="#be185d" fontWeight="600">
            AK
          </text>
        </g>

        {/* Blood flow arrows */}
        <defs>
          <marker id="hrt-arr-blue" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <path d="M0,0 L6,2 L0,4" fill="#3b82f6" />
          </marker>
          <marker id="hrt-arr-red" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <path d="M0,0 L6,2 L0,4" fill="#dc2626" />
          </marker>
        </defs>

        {/* Flow: RA → RV */}
        <path
          d="M170,175 C170,190 170,200 168,225"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          markerEnd="url(#hrt-arr-blue)"
          opacity="0.5"
        />
        {/* Flow: RV → Pulm */}
        <path
          d="M190,240 C195,200 200,160 210,120"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          markerEnd="url(#hrt-arr-blue)"
          opacity="0.5"
        />
        {/* Flow: LA → LV */}
        <path
          d="M335,170 C335,190 335,200 333,230"
          fill="none"
          stroke="#dc2626"
          strokeWidth="1.5"
          markerEnd="url(#hrt-arr-red)"
          opacity="0.5"
        />
        {/* Flow: LV → Aorta */}
        <path
          d="M300,240 C295,190 290,140 285,100"
          fill="none"
          stroke="#dc2626"
          strokeWidth="1.5"
          markerEnd="url(#hrt-arr-red)"
          opacity="0.5"
        />

        {/* Legend */}
        <rect x="10" y="430" width="110" height="40" rx="4" fill="#f8fafc" stroke="#e5e7eb" />
        <circle cx="25" cy="443" r="5" fill="#dbeafe" stroke="#3b82f6" />
        <text x="35" y="446" fontSize="7" fill="#1e40af">
          Sauerstoffarm (venös)
        </text>
        <circle cx="25" cy="458" r="5" fill="#fee2e2" stroke="#dc2626" />
        <text x="35" y="461" fontSize="7" fill="#991b1b">
          Sauerstoffreich (arteriell)
        </text>
      </svg>

      {/* Detail panel */}
      {activeStructure && (
        <div
          className="rounded-lg p-3 border"
          style={{
            backgroundColor: `${activeStructure.color}08`,
            borderColor: `${activeStructure.color}40`,
          }}
        >
          <p className="text-sm font-semibold" style={{ color: activeStructure.color }}>
            {activeStructure.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed">
            {activeStructure.detail}
          </p>
          <div className="mt-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded px-2 py-1.5">
            <p className="text-[10px] font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wide">
              MedAT-Fokus
            </p>
            <p className="text-xs text-amber-800 dark:text-amber-200 mt-0.5">
              {activeStructure.prüfung}
            </p>
          </div>
        </div>
      )}

      {!activeStructure && (
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Klicke auf eine Struktur im Herz-Diagramm für anatomische Details und MedAT-Fokuspunkte.
          </p>
        </div>
      )}
    </div>
  );
}
