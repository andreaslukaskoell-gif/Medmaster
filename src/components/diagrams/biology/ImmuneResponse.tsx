import { useState } from "react";

const parts = [
  {
    id: "innate",
    label: "Angeborene Immunantwort",
    detail:
      "Schnell (Minuten–Stunden), unspezifisch, kein immunologisches Gedächtnis. Erste Verteidigungslinie nach den Barrieren.",
  },
  {
    id: "adaptive",
    label: "Adaptive Immunantwort",
    detail:
      "Langsamer (Tage), hoch spezifisch, bildet Gedächtniszellen. Vermittelt durch T- und B-Lymphozyten.",
  },
  {
    id: "makro",
    label: "Makrophagen",
    detail:
      "Fresszellen (Phagozytose). Präsentieren Antigene auf MHC-II → aktivieren T-Helferzellen. Zytokinproduktion.",
  },
  {
    id: "nk",
    label: "NK-Zellen",
    detail:
      "Natürliche Killerzellen. Erkennen und töten virusinfizierte Zellen und Tumorzellen. Kein Antigenrezeptor nötig.",
  },
  {
    id: "komplement",
    label: "Komplementsystem",
    detail:
      "Kaskade aus ~30 Plasmaproteinen. Opsonierung, MAC (Membranattacke-Komplex), Chemotaxis, Entzuendung.",
  },
  {
    id: "dendritisch",
    label: "Dendritische Zellen",
    detail:
      "Professionelle antigenpräsentierende Zellen (APC). Bilden Brücke zwischen angeborenem und adaptivem Immunsystem.",
  },
  {
    id: "tcell",
    label: "T-Zellen",
    detail:
      "T-Helferzellen (CD4+): koordinieren Immunantwort. Zytotoxische T-Zellen (CD8+): töten infizierte Zellen direkt.",
  },
  {
    id: "bcell",
    label: "B-Zellen → Antikörper",
    detail:
      "Erkennen Antigene mit B-Zell-Rezeptor. Differenzieren zu Plasmazellen → produzieren Antikörper (IgG, IgM, IgA, IgE, IgD).",
  },
  {
    id: "memory",
    label: "Gedächtniszellen",
    detail:
      "Langlebige B- und T-Gedächtniszellen. Bei erneutem Kontakt: schnellere und stärkere Immunantwort (sekundäre Antwort).",
  },
];

type Part = (typeof parts)[number];

export default function ImmuneResponse() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Immunantwort — Angeboren vs. Adaptiv
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Zelltypen für Details.</p>

      <svg viewBox="0 0 480 420" className="w-full max-w-xl mx-auto">
        <title>Angeborene und adaptive Immunantwort</title>
        {/* Pathogen at top */}
        <g>
          <circle cx="240" cy="30" r="18" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
          {/* Spikes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={`spike-${angle}`}
                x1={240 + 18 * Math.cos(rad)}
                y1={30 + 18 * Math.sin(rad)}
                x2={240 + 26 * Math.cos(rad)}
                y2={30 + 26 * Math.sin(rad)}
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}
          <text x="240" y="34" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">
            Erreger
          </text>
        </g>

        {/* Arrow down */}
        <line x1="240" y1="58" x2="240" y2="75" stroke="#0d9488" strokeWidth="1.5" />
        <polygon points="236,75 240,83 244,75" fill="#0d9488" />

        {/* Split into two branches */}
        <line x1="240" y1="83" x2="130" y2="110" stroke="#0d9488" strokeWidth="1.5" />
        <line x1="240" y1="83" x2="350" y2="110" stroke="#0d9488" strokeWidth="1.5" />

        {/* ===== LEFT: ANGEBOREN ===== */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[0])}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x="20"
            y="100"
            width="220"
            height="30"
            rx="8"
            fill={active?.id === "innate" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#0d9488"
            strokeWidth="2"
          />
          <text x="130" y="119" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
            Angeboren (unspezifisch)
          </text>
        </g>

        {/* Timeline label */}
        <text x="130" y="145" textAnchor="middle" fontSize="7" fill="#0d9488">
          Minuten – Stunden
        </text>

        {/* Makrophagen */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[2])}
          onMouseLeave={() => setActive(null)}
        >
          <circle
            cx="70"
            cy="195"
            r="28"
            fill={active?.id === "makro" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#0d9488"
            strokeWidth="2"
          />
          {/* Pseudopodia */}
          <path
            d="M45,185 Q38,178 42,172"
            fill="none"
            stroke="#0d9488"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M50,210 Q42,218 46,225"
            fill="none"
            stroke="#0d9488"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M92,180 Q100,174 98,168"
            fill="none"
            stroke="#0d9488"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text x="70" y="192" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">
            Makro-
          </text>
          <text x="70" y="202" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">
            phage
          </text>
          {/* Phagocytosis illustration */}
          <circle
            cx="70"
            cy="188"
            r="5"
            fill="#fecaca"
            stroke="#ef4444"
            strokeWidth="0.8"
            opacity="0.6"
          />
        </g>

        {/* NK-Zellen */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[3])}
          onMouseLeave={() => setActive(null)}
        >
          <circle
            cx="135"
            cy="195"
            r="24"
            fill={active?.id === "nk" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#14b8a6"
            strokeWidth="2"
          />
          {/* Granules */}
          <circle cx="130" cy="190" r="3" fill="#14b8a6" opacity="0.5" />
          <circle cx="140" cy="195" r="3" fill="#14b8a6" opacity="0.5" />
          <circle cx="133" cy="200" r="3" fill="#14b8a6" opacity="0.5" />
          <text x="135" y="188" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">
            NK-
          </text>
          <text x="135" y="198" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">
            Zelle
          </text>
        </g>

        {/* Komplementsystem */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[4])}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x="170"
            y="172"
            width="60"
            height="46"
            rx="10"
            fill={active?.id === "komplement" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#0f766e"
            strokeWidth="2"
          />
          <text x="200" y="192" textAnchor="middle" fontSize="6" fill="#0f766e" fontWeight="bold">
            Komplement-
          </text>
          <text x="200" y="202" textAnchor="middle" fontSize="6" fill="#0f766e" fontWeight="bold">
            system
          </text>
          {/* cascade arrows */}
          <text x="200" y="212" textAnchor="middle" fontSize="13" fill="#0f766e">
            C3→C5→MAC
          </text>
        </g>

        {/* ===== BRIDGE: DENDRITIC CELLS ===== */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[5])}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse
            cx="240"
            cy="280"
            rx="50"
            ry="25"
            fill={active?.id === "dendritisch" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#eab308"
            strokeWidth="2"
          />
          {/* Dendrites */}
          {[150, 180, 210, 270, 300, 330].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={`dend-${angle}`}
                x1={240 + 48 * Math.cos(rad)}
                y1={280 + 23 * Math.sin(rad)}
                x2={240 + 62 * Math.cos(rad)}
                y2={280 + 32 * Math.sin(rad)}
                stroke="#eab308"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            );
          })}
          <text x="240" y="277" textAnchor="middle" fontSize="7" fill="#92400e" fontWeight="bold">
            Dendritische
          </text>
          <text x="240" y="287" textAnchor="middle" fontSize="7" fill="#92400e" fontWeight="bold">
            Zelle (APC)
          </text>
        </g>

        {/* Arrows from innate to dendritic */}
        <line x1="130" y1="220" x2="210" y2="260" stroke="#eab308" strokeWidth="1.5" />
        <polygon points="208,256 214,262 208,264" fill="#eab308" />
        <text x="150" y="244" fontSize="6" fill="#eab308">
          Antigenpräsentation
        </text>

        {/* Arrow from dendritic to adaptive */}
        <line x1="270" y1="260" x2="340" y2="230" stroke="#eab308" strokeWidth="1.5" />
        <polygon points="338,234 344,228 340,226" fill="#eab308" />

        {/* ===== RIGHT: ADAPTIV ===== */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[1])}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x="260"
            y="100"
            width="200"
            height="30"
            rx="8"
            fill={active?.id === "adaptive" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#0d9488"
            strokeWidth="2"
          />
          <text x="360" y="119" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
            Adaptiv (spezifisch)
          </text>
        </g>

        {/* Timeline label */}
        <text x="360" y="145" textAnchor="middle" fontSize="7" fill="#0d9488">
          Tage – Wochen
        </text>

        {/* T-Zellen */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[6])}
          onMouseLeave={() => setActive(null)}
        >
          <circle
            cx="320"
            cy="195"
            r="26"
            fill={active?.id === "tcell" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#6366f1"
            strokeWidth="2"
          />
          <text x="320" y="190" textAnchor="middle" fontSize="7" fill="#4f46e5" fontWeight="bold">
            T-Zelle
          </text>
          {/* TCR */}
          <path d="M307,178 Q310,168 314,178" fill="none" stroke="#6366f1" strokeWidth="1.5" />
          <text x="320" y="202" textAnchor="middle" fontSize="6" fill="#4f46e5">
            CD4⁺ / CD8⁺
          </text>
        </g>

        {/* B-Zellen */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[7])}
          onMouseLeave={() => setActive(null)}
        >
          <circle
            cx="410"
            cy="195"
            r="26"
            fill={active?.id === "bcell" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#8b5cf6"
            strokeWidth="2"
          />
          <text x="410" y="190" textAnchor="middle" fontSize="7" fill="#7c3aed" fontWeight="bold">
            B-Zelle
          </text>
          {/* BCR / Y-shaped antibody */}
          <path
            d="M404,175 L400,165 M404,175 L408,165 M404,175 L404,180"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <text x="410" y="202" textAnchor="middle" fontSize="6" fill="#7c3aed">
            → Plasmazelle
          </text>
        </g>

        {/* Antibodies from B-cell */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[7])}
          onMouseLeave={() => setActive(null)}
        >
          {[
            { x: 430, y: 240 },
            { x: 450, y: 260 },
            { x: 440, y: 280 },
          ].map((pos, i) => (
            <g key={`ab-${i}`}>
              <path
                d={`M${pos.x},${pos.y + 8} L${pos.x - 4},${pos.y} M${pos.x},${pos.y + 8} L${pos.x + 4},${pos.y} M${pos.x},${pos.y + 8} L${pos.x},${pos.y + 14}`}
                stroke="#8b5cf6"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          ))}
          <text x="445" y="300" fontSize="7" fill="#7c3aed" fontWeight="bold">
            Antikörper
          </text>
        </g>

        {/* Memory cells */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[8])}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x="295"
            y="330"
            width="120"
            height="35"
            rx="8"
            fill={active?.id === "memory" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#0d9488"
            strokeWidth="1.5"
          />
          <text x="355" y="346" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">
            Gedächtniszellen
          </text>
          <text x="355" y="358" textAnchor="middle" fontSize="6" fill="#0d9488">
            (T- und B-Memory)
          </text>
        </g>

        {/* Arrows to memory */}
        <line
          x1="320"
          y1="222"
          x2="335"
          y2="330"
          stroke="#0d9488"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        <line
          x1="410"
          y1="222"
          x2="375"
          y2="330"
          stroke="#0d9488"
          strokeWidth="1"
          strokeDasharray="3 2"
        />

        {/* T-cell → B-cell cooperation */}
        <line x1="346" y1="195" x2="384" y2="195" stroke="#0d9488" strokeWidth="1.5" />
        <polygon points="384,192 390,195 384,198" fill="#0d9488" />
        <text x="365" y="190" textAnchor="middle" fontSize="5" fill="#0d9488">
          Hilfe
        </text>

        {/* Labels: timing */}
        <rect
          x="20"
          y="380"
          width="440"
          height="30"
          rx="6"
          fill="#f0fdfa"
          stroke="#14b8a6"
          strokeWidth="1"
        />
        <text x="240" y="398" textAnchor="middle" fontSize="13" fill="#115e59" fontWeight="bold">
          Angeboren: schnell, unspezifisch → Adaptiv: langsam, spezifisch, Gedächtnis
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
