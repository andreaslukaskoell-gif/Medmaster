import { useState } from "react";

const parts = [
  {
    id: "phospholipid",
    label: "Phospholipid",
    detail:
      "Amphiphiles Molekül: hydrophiler Kopf (Phosphatgruppe) und zwei hydrophobe Fettsäureketten.",
  },
  {
    id: "integral",
    label: "Integrales Protein (Kanal)",
    detail:
      "Durchspannt die gesamte Membran als Multisubunit-Komplex. Bildet eine wassergefüllte Pore für Ionentransport.",
  },
  {
    id: "carrier",
    label: "Carrier / Transporter",
    detail:
      "Integrales Membranprotein mit Konformationsänderung. Transportiert Moleküle aktiv oder passiv (z. B. Glucose-Transporter, Na⁺/K⁺-ATPase).",
  },
  {
    id: "peripheral",
    label: "Peripheres Protein",
    detail: "An der Membranoberfläche angelagert. Funktion: Signaltransduktion, Strukturgebung.",
  },
  {
    id: "cholesterol",
    label: "Cholesterin",
    detail:
      "Reguliert die Membranfluidität. Steroidringstruktur eingelagert zwischen Phospholipiden. Verhindert zu starkes Erstarren oder Verflüssigen.",
  },
  {
    id: "glycoprotein",
    label: "Glykoprotein",
    detail: "Protein mit Zuckerketten. Wichtig für Zellerkennung und Immunantwort (Glykokalyx).",
  },
  {
    id: "glycolipid",
    label: "Glykolipid",
    detail: "Lipid mit Zuckerketten. Teil der Glykokalyx auf der Außenseite.",
  },
];

type PartInfo = (typeof parts)[number];

export default function CellMembrane() {
  const [active, setActive] = useState<PartInfo | null>(null);

  const handleHover = (part: PartInfo | null) => setActive(part);

  /* Phospholipid: circle head + two distinct tails (saturated=straighter, unsaturated=kinked) */
  const Phospholipid = ({
    x,
    y,
    flip,
    seed,
  }: {
    x: number;
    y: number;
    flip?: boolean;
    seed?: number;
  }) => {
    const dir = flip ? -1 : 1;
    /* Slight variation per lipid for fluidity feel */
    const s = seed ?? 0;
    const wobble = Math.sin(s * 1.7) * 1.5;
    const lenVar = Math.cos(s * 2.3) * 2;

    /* Saturated tail (left): relatively straight with gentle wave */
    const satTail = `M${x - 3},${y + 7 * dir}
      Q${x - 4 + wobble},${y + 16 * dir} ${x - 3},${y + 24 * dir}
      Q${x - 2 + wobble * 0.5},${y + 32 * dir} ${x - 3},${y + (38 + lenVar) * dir}`;

    /* Unsaturated tail (right): distinct kink at cis double bond */
    const unsatTail = `M${x + 3},${y + 7 * dir}
      Q${x + 4 - wobble},${y + 13 * dir} ${x + 5},${y + 18 * dir}
      L${x + 8 + wobble},${y + 23 * dir}
      Q${x + 5},${y + 28 * dir} ${x + 4},${y + 33 * dir}
      Q${x + 3 - wobble * 0.3},${y + 36 * dir} ${x + 3},${y + (37 + lenVar) * dir}`;

    return (
      <g
        className="cursor-pointer"
        onMouseEnter={() => handleHover(parts[0])}
        onMouseLeave={() => handleHover(null)}
      >
        {/* Tail fills — thicker strokes with round caps for visible fatty acid chains */}
        <path
          d={satTail}
          fill="none"
          stroke="url(#tailGradient)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d={unsatTail}
          fill="none"
          stroke="url(#tailGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Hydrophilic head */}
        <circle
          cx={x}
          cy={y}
          r="6.5"
          fill="url(#headGradient)"
          stroke="#0e7468"
          strokeWidth="0.8"
        />
      </g>
    );
  };

  const topY = 95;
  const botY = 190;
  const spacing = 17;
  const startX = 22;

  /* Skip ranges for proteins */
  const skipTop = (i: number) => (i >= 6 && i <= 8) || (i >= 14 && i <= 16) || (i >= 21 && i <= 23);
  const skipBot = (i: number) => (i >= 6 && i <= 8) || (i >= 14 && i <= 16);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Zellmembran — Flüssig-Mosaik-Modell
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf Bestandteile für Details.
      </p>

      <svg viewBox="0 0 500 310" className="w-full max-w-xl mx-auto">
        <defs>
          {/* Head gradient — teal with depth */}
          <radialGradient id="headGradient" cx="35%" cy="35%">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="70%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </radialGradient>

          {/* Tail gradient — warm amber/yellow */}
          <linearGradient id="tailGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Hydrophobic core band */}
          <linearGradient id="coreGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#fde68a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.5" />
          </linearGradient>

          {/* Channel protein gradient */}
          <linearGradient id="channelGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>

          {/* Carrier protein gradient */}
          <linearGradient id="carrierGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>

          {/* Cholesterol gradient */}
          <linearGradient id="cholGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Glycoprotein gradient */}
          <linearGradient id="glycoGradient" x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {/* Extrazellular label */}
        <text x="250" y="16" textAnchor="middle" fontSize="12" fill="#0d9488" fontWeight="bold">
          Extrazellulärer Raum
        </text>

        {/* Intrazellular label */}
        <text x="250" y="298" textAnchor="middle" fontSize="12" fill="#0d9488" fontWeight="bold">
          Intrazellulärer Raum (Zytoplasma)
        </text>

        {/* ─── Hydrophobic core band (visual thickness) ─── */}
        <rect
          x="10"
          y={topY + 8}
          width="480"
          height={botY - topY - 16}
          rx="4"
          fill="url(#coreGradient)"
        />

        {/* Hydrophilic / Hydrophobic region labels */}
        <text x="488" y={topY - 2} textAnchor="end" fontSize="6.5" fill="#14b8a6" fontWeight="600">
          hydrophil
        </text>
        <text
          x="488"
          y={(topY + botY) / 2 + 2}
          textAnchor="end"
          fontSize="6.5"
          fill="#b45309"
          fontWeight="600"
        >
          hydrophob
        </text>
        <text x="488" y={botY + 12} textAnchor="end" fontSize="6.5" fill="#14b8a6" fontWeight="600">
          hydrophil
        </text>

        {/* ─── Upper leaflet phospholipids ─── */}
        {Array.from({ length: 27 }, (_, i) => {
          const x = startX + i * spacing;
          if (skipTop(i)) return null;
          return <Phospholipid key={`top-${i}`} x={x} y={topY} seed={i} />;
        })}

        {/* ─── Lower leaflet phospholipids ─── */}
        {Array.from({ length: 27 }, (_, i) => {
          const x = startX + i * spacing;
          if (skipBot(i)) return null;
          return <Phospholipid key={`bot-${i}`} x={x} y={botY} flip seed={i + 30} />;
        })}

        {/* ═══════════ INTEGRAL PROTEIN — ION CHANNEL (multi-subunit barrel) ═══════════ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[1])}
          onMouseLeave={() => handleHover(null)}
        >
          {/* Left subunit — curved stave */}
          <path
            d={`M${startX + 6 * spacing - 12},${topY - 4}
                C${startX + 6 * spacing - 18},${topY + 20}
                 ${startX + 6 * spacing - 18},${botY - 20}
                 ${startX + 6 * spacing - 12},${botY + 4}
                L${startX + 6 * spacing - 4},${botY + 6}
                C${startX + 6 * spacing - 8},${botY - 18}
                 ${startX + 6 * spacing - 8},${topY + 18}
                 ${startX + 6 * spacing - 4},${topY - 6}
                Z`}
            fill="url(#channelGradient)"
            stroke="#4338ca"
            strokeWidth="0.8"
            opacity="0.9"
          />
          {/* Right subunit — curved stave */}
          <path
            d={`M${startX + 8 * spacing + 12},${topY - 4}
                C${startX + 8 * spacing + 18},${topY + 20}
                 ${startX + 8 * spacing + 18},${botY - 20}
                 ${startX + 8 * spacing + 12},${botY + 4}
                L${startX + 8 * spacing + 4},${botY + 6}
                C${startX + 8 * spacing + 8},${botY - 18}
                 ${startX + 8 * spacing + 8},${topY + 18}
                 ${startX + 8 * spacing + 4},${topY - 6}
                Z`}
            fill="url(#channelGradient)"
            stroke="#4338ca"
            strokeWidth="0.8"
            opacity="0.9"
          />
          {/* Front-left helical subunit */}
          <path
            d={`M${startX + 7 * spacing - 8},${topY - 6}
                C${startX + 7 * spacing - 13},${topY + 15}
                 ${startX + 7 * spacing - 13},${botY - 15}
                 ${startX + 7 * spacing - 8},${botY + 6}
                L${startX + 7 * spacing - 2},${botY + 4}
                C${startX + 7 * spacing - 5},${botY - 18}
                 ${startX + 7 * spacing - 5},${topY + 18}
                 ${startX + 7 * spacing - 2},${topY - 4}
                Z`}
            fill="#818cf8"
            stroke="#4338ca"
            strokeWidth="0.6"
            opacity="0.85"
          />
          {/* Front-right helical subunit */}
          <path
            d={`M${startX + 7 * spacing + 8},${topY - 6}
                C${startX + 7 * spacing + 13},${topY + 15}
                 ${startX + 7 * spacing + 13},${botY - 15}
                 ${startX + 7 * spacing + 8},${botY + 6}
                L${startX + 7 * spacing + 2},${botY + 4}
                C${startX + 7 * spacing + 5},${botY - 18}
                 ${startX + 7 * spacing + 5},${topY + 18}
                 ${startX + 7 * spacing + 2},${topY - 4}
                Z`}
            fill="#818cf8"
            stroke="#4338ca"
            strokeWidth="0.6"
            opacity="0.85"
          />
          {/* Central pore (water channel) */}
          <ellipse
            cx={startX + 7 * spacing}
            cy={topY - 2}
            rx="5"
            ry="3"
            fill="#dbeafe"
            stroke="#6366f1"
            strokeWidth="0.6"
          />
          <rect
            x={startX + 7 * spacing - 4}
            y={topY}
            width="8"
            height={botY - topY - 2}
            fill="#dbeafe"
            opacity="0.5"
          />
          <ellipse
            cx={startX + 7 * spacing}
            cy={botY}
            rx="5"
            ry="3"
            fill="#dbeafe"
            stroke="#6366f1"
            strokeWidth="0.6"
          />
          {/* Ion movement arrows inside pore */}
          <path
            d={`M${startX + 7 * spacing},${topY + 15} L${startX + 7 * spacing},${botY - 18}`}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            markerEnd="url(#arrowBlue)"
          />
          {/* Helical ridges across subunits */}
          {[0.2, 0.4, 0.6, 0.8].map((frac) => {
            const cy = topY + frac * (botY - topY);
            return (
              <g key={`helix-${frac}`}>
                <path
                  d={`M${startX + 7 * spacing - 12},${cy - 2} Q${startX + 7 * spacing - 7},${cy + 3} ${startX + 7 * spacing - 5},${cy}`}
                  fill="none"
                  stroke="#c7d2fe"
                  strokeWidth="0.6"
                />
                <path
                  d={`M${startX + 7 * spacing + 12},${cy - 2} Q${startX + 7 * spacing + 7},${cy + 3} ${startX + 7 * spacing + 5},${cy}`}
                  fill="none"
                  stroke="#c7d2fe"
                  strokeWidth="0.6"
                />
              </g>
            );
          })}
        </g>
        {/* Channel label */}
        <text
          x={startX + 7 * spacing}
          y={topY - 14}
          textAnchor="middle"
          fontSize="7"
          fill="#4f46e5"
          fontWeight="bold"
          stroke="white"
          strokeWidth="2.5"
          paintOrder="stroke"
        >
          Ionenkanal
        </text>
        <text
          x={startX + 7 * spacing}
          y={topY - 14}
          textAnchor="middle"
          fontSize="7"
          fill="#4f46e5"
          fontWeight="bold"
        >
          Ionenkanal
        </text>

        {/* Arrow marker for ion flow */}
        <defs>
          <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,1 L3,3 L0,5" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
          </marker>
        </defs>

        {/* ═══════════ CARRIER / TRANSPORTER PROTEIN ═══════════ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[2])}
          onMouseLeave={() => handleHover(null)}
        >
          {/* Left half of carrier */}
          <path
            d={`M${startX + 14 * spacing - 6},${topY - 6}
                C${startX + 14 * spacing - 20},${topY + 10}
                 ${startX + 14 * spacing - 22},${botY - 10}
                 ${startX + 14 * spacing - 6},${botY + 6}
                L${startX + 15 * spacing - 2},${botY + 2}
                C${startX + 15 * spacing - 4},${botY - 20}
                 ${startX + 15 * spacing - 4},${topY + 20}
                 ${startX + 15 * spacing - 2},${topY - 2}
                Z`}
            fill="url(#carrierGradient)"
            stroke="#6d28d9"
            strokeWidth="0.8"
            opacity="0.9"
          />
          {/* Right half of carrier */}
          <path
            d={`M${startX + 16 * spacing + 6},${topY - 6}
                C${startX + 16 * spacing + 20},${topY + 10}
                 ${startX + 16 * spacing + 22},${botY - 10}
                 ${startX + 16 * spacing + 6},${botY + 6}
                L${startX + 15 * spacing + 2},${botY + 2}
                C${startX + 15 * spacing + 4},${botY - 20}
                 ${startX + 15 * spacing + 4},${topY + 20}
                 ${startX + 15 * spacing + 2},${topY - 2}
                Z`}
            fill="url(#carrierGradient)"
            stroke="#6d28d9"
            strokeWidth="0.8"
            opacity="0.9"
          />
          {/* Binding pocket / cleft between halves — extracellular opening */}
          <path
            d={`M${startX + 15 * spacing - 2},${topY - 2}
                Q${startX + 15 * spacing},${topY + 18}
                 ${startX + 15 * spacing + 2},${topY - 2}`}
            fill="#ede9fe"
            stroke="#7c3aed"
            strokeWidth="0.5"
            opacity="0.7"
          />
          {/* Substrate dot in binding site */}
          <circle
            cx={startX + 15 * spacing}
            cy={topY + 10}
            r="3"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="0.6"
            opacity="0.8"
          />
          {/* Conformational change arrows */}
          <path
            d={`M${startX + 14 * spacing - 16},${(topY + botY) / 2} L${startX + 14 * spacing - 10},${(topY + botY) / 2}`}
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="0.7"
            markerEnd="url(#arrowPurple)"
          />
          <path
            d={`M${startX + 16 * spacing + 16},${(topY + botY) / 2} L${startX + 16 * spacing + 10},${(topY + botY) / 2}`}
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="0.7"
            markerEnd="url(#arrowPurple)"
          />
          {/* Helical texture on left half */}
          {[0.25, 0.5, 0.75].map((frac) => {
            const cy = topY + frac * (botY - topY);
            return (
              <path
                key={`carrier-helix-l-${frac}`}
                d={`M${startX + 14 * spacing - 14},${cy} Q${startX + 14 * spacing - 6},${cy + 4} ${startX + 15 * spacing - 3},${cy}`}
                fill="none"
                stroke="#ddd6fe"
                strokeWidth="0.5"
              />
            );
          })}
          {/* Helical texture on right half */}
          {[0.25, 0.5, 0.75].map((frac) => {
            const cy = topY + frac * (botY - topY);
            return (
              <path
                key={`carrier-helix-r-${frac}`}
                d={`M${startX + 16 * spacing + 14},${cy} Q${startX + 16 * spacing + 6},${cy + 4} ${startX + 15 * spacing + 3},${cy}`}
                fill="none"
                stroke="#ddd6fe"
                strokeWidth="0.5"
              />
            );
          })}
        </g>
        {/* Carrier label */}
        <text
          x={startX + 15 * spacing}
          y={topY - 14}
          textAnchor="middle"
          fontSize="7"
          fill="#7c3aed"
          fontWeight="bold"
          stroke="white"
          strokeWidth="2.5"
          paintOrder="stroke"
        >
          Carrier / Transporter
        </text>
        <text
          x={startX + 15 * spacing}
          y={topY - 14}
          textAnchor="middle"
          fontSize="7"
          fill="#7c3aed"
          fontWeight="bold"
        >
          Carrier / Transporter
        </text>

        {/* Purple arrow marker */}
        <defs>
          <marker
            id="arrowPurple"
            markerWidth="5"
            markerHeight="5"
            refX="3"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0.5 L3,2.5 L0,4.5" fill="none" stroke="#c4b5fd" strokeWidth="0.7" />
          </marker>
        </defs>

        {/* ═══════════ PERIPHERAL PROTEIN (top surface) ═══════════ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[3])}
          onMouseLeave={() => handleHover(null)}
        >
          <ellipse
            cx={startX + 11 * spacing}
            cy={topY - 10}
            rx="18"
            ry="9"
            fill="#ec4899"
            opacity="0.75"
            stroke="#db2777"
            strokeWidth="1.2"
          />
          {/* Secondary structure suggestion */}
          <ellipse
            cx={startX + 11 * spacing - 5}
            cy={topY - 10}
            rx="5"
            ry="7"
            fill="none"
            stroke="#fbcfe8"
            strokeWidth="0.5"
          />
          <ellipse
            cx={startX + 11 * spacing + 5}
            cy={topY - 10}
            rx="5"
            ry="7"
            fill="none"
            stroke="#fbcfe8"
            strokeWidth="0.5"
          />
        </g>
        <text
          x={startX + 11 * spacing}
          y={topY - 24}
          textAnchor="middle"
          fontSize="7"
          fill="#db2777"
          fontWeight="bold"
          stroke="white"
          strokeWidth="2.5"
          paintOrder="stroke"
        >
          Peripheres Protein
        </text>
        <text
          x={startX + 11 * spacing}
          y={topY - 24}
          textAnchor="middle"
          fontSize="7"
          fill="#db2777"
          fontWeight="bold"
        >
          Peripheres Protein
        </text>

        {/* ═══════════ CHOLESTEROL 1 (upper leaflet) — steroid ring structure ═══════════ */}
        {(() => {
          const cx = startX + 3 * spacing;
          const cy0 = topY + 10;
          return (
            <g
              className="cursor-pointer"
              onMouseEnter={() => handleHover(parts[4])}
              onMouseLeave={() => handleHover(null)}
            >
              {/* Steroid ring system: 4 fused rings (A-B-C-D) */}
              {/* Ring A (6-membered) */}
              <path
                d={`M${cx - 6},${cy0} L${cx - 3},${cy0 - 5} L${cx + 3},${cy0 - 5} L${cx + 6},${cy0} L${cx + 3},${cy0 + 5} L${cx - 3},${cy0 + 5} Z`}
                fill="url(#cholGradient)"
                stroke="#b45309"
                strokeWidth="0.7"
              />
              {/* Ring B (6-membered, fused to A) */}
              <path
                d={`M${cx + 6},${cy0} L${cx + 9},${cy0 - 5} L${cx + 14},${cy0 - 4} L${cx + 15},${cy0 + 1} L${cx + 12},${cy0 + 5} L${cx + 6},${cy0 + 5} Z`}
                fill="url(#cholGradient)"
                stroke="#b45309"
                strokeWidth="0.7"
                opacity="0.9"
              />
              {/* Ring C (6-membered) */}
              <path
                d={`M${cx - 6},${cy0} L${cx - 3},${cy0 + 5} L${cx - 6},${cy0 + 10} L${cx - 3},${cy0 + 15} L${cx + 3},${cy0 + 15} L${cx + 6},${cy0 + 10} L${cx + 3},${cy0 + 5} Z`}
                fill="url(#cholGradient)"
                stroke="#b45309"
                strokeWidth="0.7"
                opacity="0.85"
              />
              {/* Ring D (5-membered, fused to C) */}
              <path
                d={`M${cx + 6},${cy0 + 10} L${cx + 10},${cy0 + 8} L${cx + 12},${cy0 + 13} L${cx + 9},${cy0 + 16} L${cx + 3},${cy0 + 15} Z`}
                fill="url(#cholGradient)"
                stroke="#b45309"
                strokeWidth="0.7"
                opacity="0.8"
              />
              {/* Hydroxyl group (OH) at top */}
              <circle
                cx={cx}
                cy={cy0 - 7}
                r="3"
                fill="#fef3c7"
                stroke="#b45309"
                strokeWidth="0.7"
              />
              <text
                x={cx}
                y={cy0 - 5.5}
                textAnchor="middle"
                fontSize="3.5"
                fill="#92400e"
                fontWeight="bold"
              >
                OH
              </text>
              {/* Short hydrocarbon tail */}
              <path
                d={`M${cx},${cy0 + 15} L${cx - 1},${cy0 + 21} L${cx + 1},${cy0 + 26}`}
                fill="none"
                stroke="#d97706"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          );
        })()}
        <text
          x={startX + 3 * spacing}
          y={topY + 42}
          textAnchor="middle"
          fontSize="6"
          fill="#b45309"
          fontWeight="600"
        >
          Cholesterin
        </text>

        {/* ═══════════ CHOLESTEROL 2 (lower leaflet) ═══════════ */}
        {(() => {
          const cx = startX + 20 * spacing;
          const cy0 = botY - 10;
          return (
            <g
              className="cursor-pointer"
              onMouseEnter={() => handleHover(parts[4])}
              onMouseLeave={() => handleHover(null)}
            >
              {/* Ring A */}
              <path
                d={`M${cx - 6},${cy0} L${cx - 3},${cy0 + 5} L${cx + 3},${cy0 + 5} L${cx + 6},${cy0} L${cx + 3},${cy0 - 5} L${cx - 3},${cy0 - 5} Z`}
                fill="url(#cholGradient)"
                stroke="#b45309"
                strokeWidth="0.7"
              />
              {/* Ring B */}
              <path
                d={`M${cx + 6},${cy0} L${cx + 9},${cy0 + 5} L${cx + 14},${cy0 + 4} L${cx + 15},${cy0 - 1} L${cx + 12},${cy0 - 5} L${cx + 6},${cy0 - 5} Z`}
                fill="url(#cholGradient)"
                stroke="#b45309"
                strokeWidth="0.7"
                opacity="0.9"
              />
              {/* Ring C */}
              <path
                d={`M${cx - 6},${cy0} L${cx - 3},${cy0 - 5} L${cx - 6},${cy0 - 10} L${cx - 3},${cy0 - 15} L${cx + 3},${cy0 - 15} L${cx + 6},${cy0 - 10} L${cx + 3},${cy0 - 5} Z`}
                fill="url(#cholGradient)"
                stroke="#b45309"
                strokeWidth="0.7"
                opacity="0.85"
              />
              {/* Ring D */}
              <path
                d={`M${cx + 6},${cy0 - 10} L${cx + 10},${cy0 - 8} L${cx + 12},${cy0 - 13} L${cx + 9},${cy0 - 16} L${cx + 3},${cy0 - 15} Z`}
                fill="url(#cholGradient)"
                stroke="#b45309"
                strokeWidth="0.7"
                opacity="0.8"
              />
              {/* OH group */}
              <circle
                cx={cx}
                cy={cy0 + 7}
                r="3"
                fill="#fef3c7"
                stroke="#b45309"
                strokeWidth="0.7"
              />
              <text
                x={cx}
                y={cy0 + 8.5}
                textAnchor="middle"
                fontSize="3.5"
                fill="#92400e"
                fontWeight="bold"
              >
                OH
              </text>
              {/* Short tail going up into hydrophobic core */}
              <path
                d={`M${cx},${cy0 - 15} L${cx - 1},${cy0 - 21} L${cx + 1},${cy0 - 26}`}
                fill="none"
                stroke="#d97706"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          );
        })()}

        {/* ═══════════ GLYCOPROTEIN (integral + sugar chains) ═══════════ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[5])}
          onMouseLeave={() => handleHover(null)}
        >
          {/* Protein body spanning membrane — barrel shape */}
          <path
            d={`M${startX + 21 * spacing - 8},${topY - 4}
                C${startX + 21 * spacing - 14},${topY + 15}
                 ${startX + 21 * spacing - 14},${botY - 15}
                 ${startX + 21 * spacing - 8},${botY + 4}
                L${startX + 23 * spacing + 8},${botY + 4}
                C${startX + 23 * spacing + 14},${botY - 15}
                 ${startX + 23 * spacing + 14},${topY + 15}
                 ${startX + 23 * spacing + 8},${topY - 4}
                Z`}
            fill="url(#glycoGradient)"
            stroke="#6d28d9"
            strokeWidth="0.8"
            opacity="0.8"
          />
          {/* Helical texture lines */}
          {[0.3, 0.55, 0.8].map((frac) => {
            const cy = topY + frac * (botY - topY);
            return (
              <path
                key={`glyco-helix-${frac}`}
                d={`M${startX + 21 * spacing - 10},${cy} Q${startX + 22 * spacing},${cy + 5} ${startX + 23 * spacing + 10},${cy}`}
                fill="none"
                stroke="#ddd6fe"
                strokeWidth="0.5"
              />
            );
          })}
          {/* Branching sugar chains (Y-shaped, more detailed) */}
          {[
            { dx: 0, spread: false },
            { dx: 12, spread: true },
            { dx: 24, spread: false },
          ].map(({ dx, spread }, idx) => {
            const sx = startX + 21 * spacing - 2 + dx;
            return (
              <g key={`sugar-chain-${idx}`}>
                {/* Main stem */}
                <line
                  x1={sx}
                  y1={topY - 4}
                  x2={sx}
                  y2={topY - 22}
                  stroke="#7c3aed"
                  strokeWidth="1"
                />
                {/* Branch sugar balls */}
                <circle
                  cx={sx}
                  cy={topY - 24}
                  r="3.5"
                  fill="#c4b5fd"
                  stroke="#7c3aed"
                  strokeWidth="0.7"
                />
                {spread ? (
                  <>
                    <line
                      x1={sx}
                      y1={topY - 27}
                      x2={sx - 5}
                      y2={topY - 34}
                      stroke="#7c3aed"
                      strokeWidth="0.7"
                    />
                    <line
                      x1={sx}
                      y1={topY - 27}
                      x2={sx + 5}
                      y2={topY - 34}
                      stroke="#7c3aed"
                      strokeWidth="0.7"
                    />
                    <circle
                      cx={sx - 5}
                      cy={topY - 36}
                      r="2.5"
                      fill="#ddd6fe"
                      stroke="#7c3aed"
                      strokeWidth="0.6"
                    />
                    <circle
                      cx={sx + 5}
                      cy={topY - 36}
                      r="2.5"
                      fill="#ede9fe"
                      stroke="#7c3aed"
                      strokeWidth="0.6"
                    />
                  </>
                ) : (
                  <>
                    <line
                      x1={sx}
                      y1={topY - 27}
                      x2={sx}
                      y2={topY - 33}
                      stroke="#7c3aed"
                      strokeWidth="0.7"
                    />
                    <circle
                      cx={sx}
                      cy={topY - 35}
                      r="2.5"
                      fill="#ddd6fe"
                      stroke="#7c3aed"
                      strokeWidth="0.6"
                    />
                  </>
                )}
              </g>
            );
          })}
        </g>
        <text
          x={startX + 22 * spacing}
          y={topY - 44}
          textAnchor="middle"
          fontSize="7"
          fill="#7c3aed"
          fontWeight="bold"
          stroke="white"
          strokeWidth="2.5"
          paintOrder="stroke"
        >
          Glykoprotein
        </text>
        <text
          x={startX + 22 * spacing}
          y={topY - 44}
          textAnchor="middle"
          fontSize="7"
          fill="#7c3aed"
          fontWeight="bold"
        >
          Glykoprotein
        </text>

        {/* ═══════════ GLYCOLIPID ═══════════ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[6])}
          onMouseLeave={() => handleHover(null)}
        >
          {/* Lipid head */}
          <circle
            cx={startX + 25 * spacing}
            cy={topY}
            r="6.5"
            fill="url(#headGradient)"
            stroke="#0e7468"
            strokeWidth="0.8"
          />
          {/* Tails */}
          <path
            d={`M${startX + 25 * spacing - 3},${topY + 7}
                Q${startX + 25 * spacing - 4},${topY + 16} ${startX + 25 * spacing - 3},${topY + 24}
                Q${startX + 25 * spacing - 2},${topY + 32} ${startX + 25 * spacing - 3},${topY + 38}`}
            fill="none"
            stroke="url(#tailGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d={`M${startX + 25 * spacing + 3},${topY + 7}
                Q${startX + 25 * spacing + 5},${topY + 14} ${startX + 25 * spacing + 6},${topY + 18}
                L${startX + 25 * spacing + 8},${topY + 22}
                Q${startX + 25 * spacing + 5},${topY + 28} ${startX + 25 * spacing + 4},${topY + 36}`}
            fill="none"
            stroke="url(#tailGradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Sugar chain */}
          <line
            x1={startX + 25 * spacing}
            y1={topY - 7}
            x2={startX + 25 * spacing}
            y2={topY - 20}
            stroke="#0f766e"
            strokeWidth="1"
          />
          <circle
            cx={startX + 25 * spacing}
            cy={topY - 22}
            r="3.5"
            fill="#99f6e4"
            stroke="#0f766e"
            strokeWidth="0.7"
          />
          <line
            x1={startX + 25 * spacing}
            y1={topY - 25}
            x2={startX + 25 * spacing - 4}
            y2={topY - 32}
            stroke="#0f766e"
            strokeWidth="0.7"
          />
          <line
            x1={startX + 25 * spacing}
            y1={topY - 25}
            x2={startX + 25 * spacing + 4}
            y2={topY - 32}
            stroke="#0f766e"
            strokeWidth="0.7"
          />
          <circle
            cx={startX + 25 * spacing - 4}
            cy={topY - 34}
            r="2.5"
            fill="#ccfbf1"
            stroke="#0f766e"
            strokeWidth="0.6"
          />
          <circle
            cx={startX + 25 * spacing + 4}
            cy={topY - 34}
            r="2.5"
            fill="#ccfbf1"
            stroke="#0f766e"
            strokeWidth="0.6"
          />
        </g>
        <text
          x={startX + 25 * spacing}
          y={topY - 40}
          textAnchor="middle"
          fontSize="7"
          fill="#0f766e"
          fontWeight="bold"
          stroke="white"
          strokeWidth="2.5"
          paintOrder="stroke"
        >
          Glykolipid
        </text>
        <text
          x={startX + 25 * spacing}
          y={topY - 40}
          textAnchor="middle"
          fontSize="7"
          fill="#0f766e"
          fontWeight="bold"
        >
          Glykolipid
        </text>

        {/* ═══════════ LEGEND ═══════════ */}
        <circle
          cx="28"
          cy="270"
          r="5"
          fill="url(#headGradient)"
          stroke="#0e7468"
          strokeWidth="0.6"
        />
        <text x="38" y="273" fontSize="7" fill="#115e59">
          Hydrophiler Kopf
        </text>
        <line
          x1="130"
          y1="265"
          x2="130"
          y2="275"
          stroke="url(#tailGradient)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <text x="138" y="273" fontSize="7" fill="#115e59">
          Hydrophobe Schwänze
        </text>
        <rect
          x="252"
          y="265"
          width="10"
          height="10"
          rx="2"
          fill="url(#cholGradient)"
          stroke="#b45309"
          strokeWidth="0.6"
        />
        <text x="267" y="273" fontSize="7" fill="#115e59">
          Cholesterin
        </text>
        <circle cx="338" cy="270" r="3" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="0.6" />
        <text x="345" y="273" fontSize="7" fill="#115e59">
          Zuckerkette
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
