import { useState } from "react";

const parts = [
  {
    id: "passive",
    label: "Passive Diffusion",
    color: "#3b82f6",
    detail:
      "Kleine unpolare Moleküle (O₂, CO₂) diffundieren direkt durch die Lipiddoppelschicht entlang des Konzentrationsgradienten. Keine Energie erforderlich.",
  },
  {
    id: "facilitated",
    label: "Erleichterte Diffusion",
    color: "#10b981",
    detail:
      "Polare Moleküle und Ionen nutzen Kanalproteine oder Carrierproteine. Entlang des Konzentrationsgradienten, keine ATP-Hydrolyse notwendig.",
  },
  {
    id: "active",
    label: "Aktiver Transport",
    color: "#ef4444",
    detail:
      "Pumpenproteine transportieren Stoffe gegen den Konzentrationsgradienten unter ATP-Verbrauch. Beispiel: Na⁺/K⁺-ATPase (3 Na⁺ raus, 2 K⁺ rein).",
  },
  {
    id: "vesicular",
    label: "Vesikulärer Transport",
    color: "#8b5cf6",
    detail:
      "Große Moleküle und Partikel werden in Vesikeln transportiert. Endozytose (Aufnahme) und Exozytose (Abgabe) durch Membranfusion.",
  },
];

type Part = (typeof parts)[number];

/* Phospholipid component matching CellMembrane.tsx style */
const Phospholipid = ({ x, y, flip }: { x: number; y: number; flip?: boolean }) => {
  const dir = flip ? -1 : 1;
  return (
    <g>
      <circle cx={x} cy={y} r="5" fill="#14b8a6" stroke="#0f766e" strokeWidth="0.8" />
      <path
        d={`M${x - 1.5},${y + 5 * dir} Q${x - 3},${y + 12 * dir} ${x - 1.5},${y + 19 * dir} Q${x},${y + 24 * dir} ${x - 1.5},${y + 29 * dir}`}
        fill="none"
        stroke="#eab308"
        strokeWidth="1.2"
      />
      <path
        d={`M${x + 1.5},${y + 5 * dir} Q${x + 3},${y + 12 * dir} ${x + 1.5},${y + 19 * dir} Q${x},${y + 24 * dir} ${x + 1.5},${y + 29 * dir}`}
        fill="none"
        stroke="#eab308"
        strokeWidth="1.2"
      />
    </g>
  );
};

/* Positions for the continuous bilayer phospholipids */
const spacing = 14;
const startX = 16;
const topY = 168;
const botY = 232;
const lipidCount = 46;

/* Gaps in the bilayer where proteins sit */
const isGap = (i: number) => {
  const x = startX + i * spacing;
  /* Channel protein gap */
  if (x >= 185 && x <= 215) return true;
  /* Carrier protein gap */
  if (x >= 260 && x <= 295) return true;
  /* Na/K pump gap */
  if (x >= 370 && x <= 410) return true;
  /* Vesicular region gap (right edge) */
  if (x >= 545 && x <= 590) return true;
  return false;
};

export default function MembraneTransport() {
  const [active, setActive] = useState<Part | null>(null);

  const hoverProps = (part: Part) => ({
    className: "cursor-pointer",
    onMouseEnter: () => setActive(part),
    onMouseLeave: () => setActive(null),
  });

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Membrantransport</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Bewege die Maus über eine Transportart für Details.
      </p>

      <svg viewBox="0 0 650 380" className="w-full max-w-2xl mx-auto">
        <defs>
          {/* Gradients */}
          <linearGradient id="mt-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="45%" stopColor="#f8fafc" />
            <stop offset="55%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#eff6ff" />
          </linearGradient>
          <linearGradient id="mt-channel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="mt-carrier" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="mt-pump" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <radialGradient id="mt-vesicle" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </radialGradient>
          <radialGradient id="mt-atp" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
          {/* Arrow markers */}
          <marker id="mt-arrBlue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6" />
          </marker>
          <marker id="mt-arrGreen" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#10b981" />
          </marker>
          <marker id="mt-arrRed" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
          </marker>
          <marker id="mt-arrRedUp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
          </marker>
          <marker
            id="mt-arrBlueDown"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
          </marker>
          <marker
            id="mt-arrPurple"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#8b5cf6" />
          </marker>
          <marker
            id="mt-arrPurpleDown"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed" />
          </marker>
        </defs>

        {/* Background */}
        <rect width="650" height="380" fill="url(#mt-bg)" rx="4" />

        {/* Environment labels */}
        <text
          x="325"
          y="22"
          textAnchor="middle"
          fontSize="12"
          fill="#475569"
          fontWeight="600"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          Extrazellulär
        </text>
        <text x="325" y="22" textAnchor="middle" fontSize="12" fill="#475569" fontWeight="600">
          Extrazellulär
        </text>
        <text
          x="325"
          y="372"
          textAnchor="middle"
          fontSize="12"
          fill="#475569"
          fontWeight="600"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          Intrazellulär
        </text>
        <text x="325" y="372" textAnchor="middle" fontSize="12" fill="#475569" fontWeight="600">
          Intrazellulär
        </text>

        {/* Concentration gradient dots — extracellular (dense) */}
        {[32, 52, 72, 92, 45, 65, 85].map((x, i) => (
          <circle
            key={`ext-dot-${i}`}
            cx={x}
            cy={50 + (i % 3) * 12}
            r="2.5"
            fill="#93c5fd"
            opacity="0.35"
          />
        ))}
        {[38, 58, 78, 50, 70].map((x, i) => (
          <circle
            key={`ext-dot2-${i}`}
            cx={x}
            cy={80 + (i % 2) * 10}
            r="2"
            fill="#93c5fd"
            opacity="0.25"
          />
        ))}
        {/* Concentration gradient dots — intracellular (sparse for passive region) */}
        {[55, 75].map((x, i) => (
          <circle
            key={`int-dot-${i}`}
            cx={x}
            cy={290 + i * 15}
            r="2"
            fill="#93c5fd"
            opacity="0.2"
          />
        ))}

        {/* Gradient label */}
        <text x="8" y="55" fontSize="7" fill="#93c5fd" fontWeight="600">
          hohe [C]
        </text>
        <text x="8" y="305" fontSize="7" fill="#bfdbfe" fontWeight="600">
          niedrige [C]
        </text>
        <path
          d="M14,60 L14,290"
          stroke="#bfdbfe"
          strokeWidth="0.8"
          strokeDasharray="3,3"
          markerEnd="url(#mt-arrBlue)"
          opacity="0.4"
        />

        {/* ============ CONTINUOUS PHOSPHOLIPID BILAYER ============ */}
        {/* Upper leaflet */}
        {Array.from({ length: lipidCount }, (_, i) => {
          if (isGap(i)) return null;
          const x = startX + i * spacing;
          return <Phospholipid key={`top-${i}`} x={x} y={topY} />;
        })}
        {/* Lower leaflet */}
        {Array.from({ length: lipidCount }, (_, i) => {
          if (isGap(i)) return null;
          const x = startX + i * spacing;
          return <Phospholipid key={`bot-${i}`} x={x} y={botY} flip />;
        })}

        {/* Hydrophobic core shading */}
        <rect
          x="10"
          y={topY + 28}
          width="630"
          height={botY - topY - 56}
          fill="#fef9c3"
          opacity="0.15"
          rx="2"
        />

        {/* ============ 1. PASSIVE DIFFUSION (left) ============ */}
        <g {...hoverProps(parts[0])}>
          {/* Highlight zone */}
          <rect
            x="30"
            y="35"
            width="110"
            height="310"
            fill={active?.id === "passive" ? "#3b82f6" : "transparent"}
            opacity="0.06"
            rx="6"
          />

          {/* Small molecules passing through the bilayer */}
          {/* O2 molecule */}
          <circle cx="60" cy="70" r="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
          <text x="60" y="73" textAnchor="middle" fontSize="7" fill="#1d4ed8" fontWeight="bold">
            O₂
          </text>

          <circle cx="80" cy="115" r="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
          <text x="80" y="118" textAnchor="middle" fontSize="7" fill="#1d4ed8" fontWeight="bold">
            O₂
          </text>

          {/* Arrow showing passage through */}
          <path
            d="M70,85 Q75,130 70,145 Q65,165 68,195 Q72,230 75,270 Q78,300 82,320"
            stroke="#3b82f6"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4,3"
            opacity="0.6"
          />

          {/* CO2 molecule going opposite direction */}
          <circle cx="95" cy="300" r="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
          <text x="95" y="303" textAnchor="middle" fontSize="6.5" fill="#1d4ed8" fontWeight="bold">
            CO₂
          </text>

          <circle cx="55" cy="140" r="5.5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
          <text x="55" y="143" textAnchor="middle" fontSize="6" fill="#1d4ed8" fontWeight="bold">
            CO₂
          </text>

          <path
            d="M92,288 Q88,250 85,230 Q80,200 78,180 Q72,145 60,110"
            stroke="#60a5fa"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="4,3"
            opacity="0.5"
          />

          {/* Downward arrow */}
          <path d="M65,42 L65,62" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#mt-arrBlue)" />
          <text x="78" y="48" fontSize="7" fill="#3b82f6" fontWeight="600">
            hoch → niedrig
          </text>

          {/* Interactive overlay */}
          <rect x="30" y="35" width="110" height="310" fill="transparent" />
        </g>

        {/* ============ 2. FACILITATED DIFFUSION — Channel + Carrier ============ */}
        <g {...hoverProps(parts[1])}>
          <rect
            x="150"
            y="35"
            width="175"
            height="310"
            fill={active?.id === "facilitated" ? "#10b981" : "transparent"}
            opacity="0.06"
            rx="6"
          />

          {/* --- Channel protein (barrel shape) --- */}
          {/* Outer barrel */}
          <path
            d="M185,162 C185,155 215,155 215,162 L215,238 C215,245 185,245 185,238 Z"
            fill="url(#mt-channel)"
            opacity="0.85"
            stroke="#047857"
            strokeWidth="1.2"
          />
          {/* Inner pore */}
          <rect x="193" y="165" width="14" height="70" rx="5" fill="#ecfdf5" opacity="0.7" />
          {/* Selectivity filter dots */}
          <circle cx="197" cy="192" r="1.5" fill="#047857" opacity="0.6" />
          <circle cx="203" cy="198" r="1.5" fill="#047857" opacity="0.6" />
          <circle cx="197" cy="205" r="1.5" fill="#047857" opacity="0.6" />

          {/* Ions passing through channel */}
          <circle cx="200" cy="110" r="5" fill="#d1fae5" stroke="#10b981" strokeWidth="1.2" />
          <text x="200" y="113" textAnchor="middle" fontSize="7" fill="#047857" fontWeight="bold">
            Na⁺
          </text>

          <circle cx="200" cy="140" r="4.5" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
          <text x="200" y="143" textAnchor="middle" fontSize="6.5" fill="#047857" fontWeight="bold">
            Na⁺
          </text>

          <circle cx="200" cy="200" r="4" fill="#a7f3d0" stroke="#059669" strokeWidth="1" />
          <text x="200" y="203" textAnchor="middle" fontSize="6" fill="#047857" fontWeight="bold">
            Na⁺
          </text>

          <circle cx="200" cy="270" r="5" fill="#d1fae5" stroke="#10b981" strokeWidth="1.2" />
          <text x="200" y="273" textAnchor="middle" fontSize="7" fill="#047857" fontWeight="bold">
            Na⁺
          </text>

          {/* Flow arrow */}
          <path
            d="M200,90 L200,105"
            stroke="#10b981"
            strokeWidth="1.8"
            markerEnd="url(#mt-arrGreen)"
          />

          {/* Channel label */}
          <text x="200" y="78" textAnchor="middle" fontSize="7.5" fill="#059669" fontWeight="600">
            Kanal
          </text>

          {/* --- Carrier protein (conformational change) --- */}
          {/* Open conformation (cup shape facing up) */}
          <path
            d="M255,162 C248,162 245,172 248,180 L252,195 Q277,200 282,195 L286,180 C289,172 286,162 279,162
                   C276,162 274,165 277,170 L275,188 Q266,192 259,188 L257,170 C260,165 258,162 255,162 Z"
            fill="url(#mt-carrier)"
            opacity="0.8"
            stroke="#047857"
            strokeWidth="1.2"
          />
          {/* Substrate in carrier */}
          <circle cx="267" cy="182" r="5" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
          <text x="267" y="185" textAnchor="middle" fontSize="6" fill="#92400e" fontWeight="bold">
            Glc
          </text>

          {/* Lower part — closed conformation releasing */}
          <path
            d="M255,238 C248,238 245,228 248,220 L252,208 Q277,203 282,208 L286,220 C289,228 286,238 279,238
                   C276,238 274,235 277,230 L275,213 Q266,209 259,213 L257,230 C260,235 258,238 255,238 Z"
            fill="url(#mt-carrier)"
            opacity="0.5"
            stroke="#047857"
            strokeWidth="1"
            strokeDasharray="3,2"
          />

          {/* Glucose being released below */}
          <circle cx="267" cy="275" r="5" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
          <text x="267" y="278" textAnchor="middle" fontSize="6" fill="#92400e" fontWeight="bold">
            Glc
          </text>

          {/* Conformational change arrow */}
          <path
            d="M240,195 Q235,200 240,210"
            stroke="#059669"
            strokeWidth="1"
            fill="none"
            markerEnd="url(#mt-arrGreen)"
          />

          {/* Flow arrow */}
          <path
            d="M267,255 L267,268"
            stroke="#10b981"
            strokeWidth="1.5"
            markerEnd="url(#mt-arrGreen)"
          />

          {/* Carrier label */}
          <text x="267" y="78" textAnchor="middle" fontSize="7.5" fill="#059669" fontWeight="600">
            Carrier
          </text>

          {/* Interactive overlay */}
          <rect x="150" y="35" width="175" height="310" fill="transparent" />
        </g>

        {/* ============ 3. ACTIVE TRANSPORT — Na+/K+-ATPase ============ */}
        <g {...hoverProps(parts[2])}>
          <rect
            x="340"
            y="35"
            width="110"
            height="310"
            fill={active?.id === "active" ? "#ef4444" : "transparent"}
            opacity="0.06"
            rx="6"
          />

          {/* Pump protein — multi-subunit shape */}
          <path
            d="M370,158 C360,155 355,162 358,172 L360,180 C356,185 356,195 360,200
                   L360,215 C356,220 358,228 362,232 L368,238 C378,244 400,244 410,238
                   L416,232 C420,228 422,220 418,215 L418,200 C422,195 422,185 418,180
                   L420,172 C423,162 418,155 408,158 C402,160 398,158 390,158 C382,158 378,160 370,158 Z"
            fill="url(#mt-pump)"
            opacity="0.85"
            stroke="#b91c1c"
            strokeWidth="1.5"
          />

          {/* Alpha subunit detail */}
          <ellipse cx="390" cy="200" rx="18" ry="25" fill="#fecaca" opacity="0.3" />
          {/* Beta subunit */}
          <ellipse
            cx="410"
            cy="185"
            rx="8"
            ry="15"
            fill="#fee2e2"
            opacity="0.4"
            stroke="#dc2626"
            strokeWidth="0.8"
          />
          <text x="410" y="188" textAnchor="middle" fontSize="5.5" fill="#991b1b" fontWeight="bold">
            β
          </text>
          <text x="385" y="203" textAnchor="middle" fontSize="6" fill="#991b1b" fontWeight="bold">
            α
          </text>

          {/* Phosphorylation site */}
          <text x="390" y="215" textAnchor="middle" fontSize="5" fill="#991b1b">
            ~P
          </text>

          {/* 3 Na+ going OUT (upward) */}
          <circle cx="380" cy="90" r="5.5" fill="#fecaca" stroke="#ef4444" strokeWidth="1.2" />
          <text x="380" y="93" textAnchor="middle" fontSize="6.5" fill="#991b1b" fontWeight="bold">
            Na⁺
          </text>
          <circle cx="395" cy="78" r="5" fill="#fecaca" stroke="#ef4444" strokeWidth="1" />
          <text x="395" y="81" textAnchor="middle" fontSize="6" fill="#991b1b" fontWeight="bold">
            Na⁺
          </text>
          <circle cx="408" cy="90" r="5.5" fill="#fecaca" stroke="#ef4444" strokeWidth="1.2" />
          <text x="408" y="93" textAnchor="middle" fontSize="6.5" fill="#991b1b" fontWeight="bold">
            Na⁺
          </text>

          {/* 3 Na+ arrows going up */}
          <path
            d="M380,152 L380,100"
            stroke="#ef4444"
            strokeWidth="1.5"
            markerEnd="url(#mt-arrRed)"
          />
          <path
            d="M395,152 L395,88"
            stroke="#ef4444"
            strokeWidth="1.5"
            markerEnd="url(#mt-arrRedUp)"
          />
          <path
            d="M408,152 L408,100"
            stroke="#ef4444"
            strokeWidth="1.5"
            markerEnd="url(#mt-arrRed)"
          />

          {/* "3 Na⁺" label */}
          <text x="394" y="65" textAnchor="middle" fontSize="8" fill="#dc2626" fontWeight="bold">
            3 Na⁺ ↑
          </text>

          {/* 2 K+ going IN (downward) */}
          <circle cx="378" cy="305" r="5.5" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.2" />
          <text x="378" y="308" textAnchor="middle" fontSize="6.5" fill="#1e40af" fontWeight="bold">
            K⁺
          </text>
          <circle cx="400" cy="310" r="5.5" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.2" />
          <text x="400" y="313" textAnchor="middle" fontSize="6.5" fill="#1e40af" fontWeight="bold">
            K⁺
          </text>

          {/* 2 K+ arrows going down */}
          <path
            d="M378,248 L378,296"
            stroke="#2563eb"
            strokeWidth="1.5"
            markerEnd="url(#mt-arrBlueDown)"
          />
          <path
            d="M400,248 L400,302"
            stroke="#2563eb"
            strokeWidth="1.5"
            markerEnd="url(#mt-arrBlueDown)"
          />

          {/* "2 K⁺" label */}
          <text x="389" y="335" textAnchor="middle" fontSize="8" fill="#2563eb" fontWeight="bold">
            2 K⁺ ↓
          </text>

          {/* ATP symbol */}
          <circle cx="430" cy="226" r="10" fill="url(#mt-atp)" stroke="#d97706" strokeWidth="1.2" />
          <text x="430" y="229" textAnchor="middle" fontSize="7" fill="#78350f" fontWeight="bold">
            ATP
          </text>
          {/* Arrow from ATP to pump */}
          <path
            d="M420,224 L416,220"
            stroke="#d97706"
            strokeWidth="1.2"
            markerEnd="url(#mt-arrRed)"
          />

          {/* ADP + Pi leaving */}
          <text x="442" y="248" fontSize="6" fill="#92400e">
            ADP+Pᵢ
          </text>

          {/* "gegen Gradient" label */}
          <text x="350" y="48" fontSize="7" fill="#ef4444" fontWeight="600">
            gegen Gradient
          </text>

          {/* Interactive overlay */}
          <rect x="340" y="35" width="110" height="310" fill="transparent" />
        </g>

        {/* ============ 4. VESICULAR TRANSPORT ============ */}
        <g {...hoverProps(parts[3])}>
          <rect
            x="470"
            y="35"
            width="170"
            height="310"
            fill={active?.id === "vesicular" ? "#8b5cf6" : "transparent"}
            opacity="0.06"
            rx="6"
          />

          {/* --- Endocytosis (above membrane) --- */}
          {/* Membrane invagination — the bilayer curves inward here */}
          <path
            d="M540,168 Q545,168 550,170 Q560,178 565,190 Q568,200 565,210 Q560,222 550,230 Q545,232 540,232"
            stroke="#0f766e"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Inner invagination */}
          <path
            d="M540,175 Q548,175 553,180 Q560,188 562,200 Q560,212 553,220 Q548,225 540,225"
            stroke="#0f766e"
            strokeWidth="1"
            fill="#f0fdfa"
            opacity="0.5"
          />

          {/* Forming vesicle pinching off */}
          <circle
            cx="570"
            cy="200"
            r="14"
            fill="#ede9fe"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            opacity="0.7"
          />
          {/* Cargo dots inside */}
          <circle cx="566" cy="196" r="2.5" fill="#a78bfa" />
          <circle cx="573" cy="202" r="2" fill="#a78bfa" />
          <circle cx="568" cy="205" r="2.2" fill="#a78bfa" />

          {/* Completed endocytic vesicle (below membrane, moving inward) */}
          <circle
            cx="555"
            cy="290"
            r="12"
            fill="url(#mt-vesicle)"
            opacity="0.6"
            stroke="#7c3aed"
            strokeWidth="1.5"
          />
          <circle cx="552" cy="287" r="2" fill="#c4b5fd" />
          <circle cx="558" cy="293" r="1.8" fill="#c4b5fd" />

          {/* Arrow: invagination to vesicle */}
          <path
            d="M570,218 Q565,248 558,275"
            stroke="#8b5cf6"
            strokeWidth="1.3"
            fill="none"
            markerEnd="url(#mt-arrPurple)"
            strokeDasharray="4,3"
          />

          {/* Endocytosis label */}
          <text x="590" y="155" fontSize="8" fill="#7c3aed" fontWeight="bold">
            Endo-
          </text>
          <text x="590" y="165" fontSize="8" fill="#7c3aed" fontWeight="bold">
            zytose
          </text>

          {/* --- Exocytosis (below membrane) --- */}
          {/* Vesicle approaching membrane from below */}
          <circle
            cx="500"
            cy="280"
            r="12"
            fill="url(#mt-vesicle)"
            opacity="0.6"
            stroke="#7c3aed"
            strokeWidth="1.5"
          />
          <circle cx="497" cy="277" r="2" fill="#ddd6fe" />
          <circle cx="503" cy="283" r="1.8" fill="#ddd6fe" />

          {/* Arrow: vesicle moving up to fuse */}
          <path
            d="M500,266 L500,248"
            stroke="#7c3aed"
            strokeWidth="1.3"
            markerEnd="url(#mt-arrPurpleDown)"
          />

          {/* Fusing vesicle at membrane */}
          <path
            d="M488,232 Q492,242 500,245 Q508,242 512,232"
            stroke="#7c3aed"
            strokeWidth="1.5"
            fill="#ede9fe"
            opacity="0.5"
          />

          {/* Released cargo (above membrane) */}
          <circle cx="495" cy="110" r="2.5" fill="#a78bfa" opacity="0.7" />
          <circle cx="505" cy="100" r="2" fill="#a78bfa" opacity="0.6" />
          <circle cx="500" cy="120" r="2.2" fill="#a78bfa" opacity="0.5" />

          {/* Release arrows */}
          <path
            d="M498,155 Q498,135 497,115"
            stroke="#8b5cf6"
            strokeWidth="1"
            fill="none"
            markerEnd="url(#mt-arrPurple)"
            strokeDasharray="3,2"
            opacity="0.6"
          />
          <path
            d="M505,155 Q506,130 505,105"
            stroke="#8b5cf6"
            strokeWidth="1"
            fill="none"
            markerEnd="url(#mt-arrPurple)"
            strokeDasharray="3,2"
            opacity="0.6"
          />

          {/* Exocytosis label */}
          <text x="490" y="320" fontSize="8" fill="#7c3aed" fontWeight="bold">
            Exo-
          </text>
          <text x="490" y="330" fontSize="8" fill="#7c3aed" fontWeight="bold">
            zytose
          </text>

          {/* Interactive overlay */}
          <rect x="470" y="35" width="170" height="310" fill="transparent" />
        </g>

        {/* ============ LABELS with leader lines ============ */}
        {/* Passive Diffusion label */}
        <line
          x1="75"
          y1="345"
          x2="75"
          y2="355"
          stroke="#3b82f6"
          strokeWidth="0.8"
          strokeDasharray="2,2"
        />
        <text
          x="75"
          y="363"
          textAnchor="middle"
          fontSize="9"
          fill="#3b82f6"
          fontWeight="700"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          Passive Diffusion
        </text>
        <text x="75" y="363" textAnchor="middle" fontSize="9" fill="#3b82f6" fontWeight="700">
          Passive Diffusion
        </text>

        {/* Facilitated Diffusion label */}
        <line
          x1="235"
          y1="345"
          x2="235"
          y2="355"
          stroke="#10b981"
          strokeWidth="0.8"
          strokeDasharray="2,2"
        />
        <text
          x="235"
          y="363"
          textAnchor="middle"
          fontSize="9"
          fill="#10b981"
          fontWeight="700"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          Erleichterte Diffusion
        </text>
        <text x="235" y="363" textAnchor="middle" fontSize="9" fill="#10b981" fontWeight="700">
          Erleichterte Diffusion
        </text>

        {/* Active Transport label */}
        <line
          x1="390"
          y1="345"
          x2="390"
          y2="355"
          stroke="#ef4444"
          strokeWidth="0.8"
          strokeDasharray="2,2"
        />
        <text
          x="390"
          y="363"
          textAnchor="middle"
          fontSize="9"
          fill="#ef4444"
          fontWeight="700"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          Aktiver Transport
        </text>
        <text x="390" y="363" textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="700">
          Aktiver Transport
        </text>

        {/* Vesicular Transport label */}
        <line
          x1="545"
          y1="345"
          x2="545"
          y2="355"
          stroke="#8b5cf6"
          strokeWidth="0.8"
          strokeDasharray="2,2"
        />
        <text
          x="545"
          y="363"
          textAnchor="middle"
          fontSize="9"
          fill="#8b5cf6"
          fontWeight="700"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          Vesikulärer Transport
        </text>
        <text x="545" y="363" textAnchor="middle" fontSize="9" fill="#8b5cf6" fontWeight="700">
          Vesikulärer Transport
        </text>

        {/* Hover highlight border per section */}
        {active?.id === "passive" && (
          <rect
            x="30"
            y="35"
            width="110"
            height="310"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            rx="6"
            strokeDasharray="5,3"
            className="animate-pulse"
          />
        )}
        {active?.id === "facilitated" && (
          <rect
            x="150"
            y="35"
            width="175"
            height="310"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            rx="6"
            strokeDasharray="5,3"
            className="animate-pulse"
          />
        )}
        {active?.id === "active" && (
          <rect
            x="340"
            y="35"
            width="110"
            height="310"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            rx="6"
            strokeDasharray="5,3"
            className="animate-pulse"
          />
        )}
        {active?.id === "vesicular" && (
          <rect
            x="470"
            y="35"
            width="170"
            height="310"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            rx="6"
            strokeDasharray="5,3"
            className="animate-pulse"
          />
        )}

        {/* Legend */}
        <circle cx="18" cy="370" r="4" fill="#14b8a6" stroke="#0f766e" strokeWidth="0.8" />
        <text x="26" y="373" fontSize="6.5" fill="#475569">
          Phospholipid
        </text>
        <line x1="80" y1="366" x2="80" y2="374" stroke="#eab308" strokeWidth="2" />
        <text x="86" y="373" fontSize="6.5" fill="#475569">
          Fettsäurekette
        </text>
      </svg>

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
