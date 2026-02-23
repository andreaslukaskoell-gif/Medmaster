// Euler-Diagramme für Implikationen erkennen
// Visualisiert die 4 Grundaussagen und Schlussfolgerungen

interface EulerProps {
  width?: number;
  height?: number;
  className?: string;
}

/** "Alle X sind Y" — X komplett innerhalb von Y */
export function EulerAlleXsindY({ width = 220, height = 150, className }: EulerProps) {
  return (
    <svg viewBox="0 0 220 150" width={width} height={height} className={className}>
      <circle cx="110" cy="75" r="60" fill="none" stroke="#6366f1" strokeWidth="2" />
      <circle cx="110" cy="85" r="32" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
      <text x="110" y="90" textAnchor="middle" fontSize="13" fontWeight="600" fill="#4338ca">
        X
      </text>
      <text x="110" y="35" textAnchor="middle" fontSize="13" fontWeight="600" fill="#4338ca">
        Y
      </text>
    </svg>
  );
}

/** "Alle X sind keine Y" — Kreise getrennt */
export function EulerAlleXkeineY({ width = 220, height = 150, className }: EulerProps) {
  return (
    <svg viewBox="0 0 220 150" width={width} height={height} className={className}>
      <circle cx="70" cy="75" r="45" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
      <circle cx="155" cy="75" r="45" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
      <text x="70" y="80" textAnchor="middle" fontSize="13" fontWeight="600" fill="#dc2626">
        X
      </text>
      <text x="155" y="80" textAnchor="middle" fontSize="13" fontWeight="600" fill="#4338ca">
        Y
      </text>
    </svg>
  );
}

/** "Einige X sind Y" — Kreise überlappen */
export function EulerEinigeXsindY({ width = 220, height = 150, className }: EulerProps) {
  return (
    <svg viewBox="0 0 220 150" width={width} height={height} className={className}>
      <circle
        cx="85"
        cy="75"
        r="50"
        fill="#fef3c7"
        fillOpacity="0.5"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <circle
        cx="135"
        cy="75"
        r="50"
        fill="#c7d2fe"
        fillOpacity="0.5"
        stroke="#6366f1"
        strokeWidth="2"
      />
      <text x="65" y="80" textAnchor="middle" fontSize="13" fontWeight="600" fill="#d97706">
        X
      </text>
      <text x="155" y="80" textAnchor="middle" fontSize="13" fontWeight="600" fill="#4338ca">
        Y
      </text>
      <text x="110" y="80" textAnchor="middle" fontSize="10" fill="#78716c">
        ∩
      </text>
    </svg>
  );
}

/** "Einige X sind keine Y" — Kreise überlappen teilweise, mit Betonung des nicht-überlappenden Teils */
export function EulerEinigeXkeineY({ width = 220, height = 150, className }: EulerProps) {
  return (
    <svg viewBox="0 0 220 150" width={width} height={height} className={className}>
      <circle
        cx="85"
        cy="75"
        r="50"
        fill="#fecaca"
        fillOpacity="0.4"
        stroke="#dc2626"
        strokeWidth="2"
      />
      <circle
        cx="135"
        cy="75"
        r="50"
        fill="#c7d2fe"
        fillOpacity="0.4"
        stroke="#6366f1"
        strokeWidth="2"
      />
      {/* Markierung des nicht-überlappenden Teils von X */}
      <line
        x1="45"
        y1="60"
        x2="55"
        y2="90"
        stroke="#dc2626"
        strokeWidth="2"
        strokeDasharray="3,3"
      />
      <text x="55" y="80" textAnchor="middle" fontSize="13" fontWeight="600" fill="#dc2626">
        X
      </text>
      <text x="165" y="80" textAnchor="middle" fontSize="13" fontWeight="600" fill="#4338ca">
        Y
      </text>
      <text x="110" y="55" textAnchor="middle" fontSize="9" fill="#78716c">
        nicht alle X
      </text>
      <text x="110" y="67" textAnchor="middle" fontSize="9" fill="#78716c">
        sind in Y
      </text>
    </svg>
  );
}

interface EulerThreeCircleProps extends EulerProps {
  /** Labels for the three circles */
  labels?: [string, string, string];
  /** Layout type */
  layout:
    | "chain"
    | "all-overlap"
    | "ab-separated"
    | "bc-separated"
    | "a-in-b-overlap-c"
    | "a-in-b-separated-c"
    | "a-in-b-in-c"
    | "all-separated";
}

/** Flexibles 3-Kreis-Euler-Diagramm für Schlussfolgerungen */
export function EulerThreeCircles({
  width = 280,
  height = 160,
  className,
  labels = ["A", "B", "C"],
  layout,
}: EulerThreeCircleProps) {
  const configs: Record<
    string,
    { circles: { cx: number; cy: number; r: number; color: string; fill: string }[] }
  > = {
    // A-B überlappen, B-C überlappen, A-C nicht direkt
    chain: {
      circles: [
        { cx: 65, cy: 80, r: 40, color: "#dc2626", fill: "#fecaca" },
        { cx: 130, cy: 80, r: 40, color: "#6366f1", fill: "#c7d2fe" },
        { cx: 195, cy: 80, r: 40, color: "#059669", fill: "#a7f3d0" },
      ],
    },
    // Alle drei überlappen
    "all-overlap": {
      circles: [
        { cx: 100, cy: 60, r: 42, color: "#dc2626", fill: "#fecaca" },
        { cx: 145, cy: 60, r: 42, color: "#6366f1", fill: "#c7d2fe" },
        { cx: 122, cy: 100, r: 42, color: "#059669", fill: "#a7f3d0" },
      ],
    },
    // A und B getrennt, C separat
    "ab-separated": {
      circles: [
        { cx: 55, cy: 80, r: 35, color: "#dc2626", fill: "#fecaca" },
        { cx: 145, cy: 80, r: 35, color: "#6366f1", fill: "#c7d2fe" },
        { cx: 225, cy: 80, r: 35, color: "#059669", fill: "#a7f3d0" },
      ],
    },
    // B und C getrennt
    "bc-separated": {
      circles: [
        { cx: 90, cy: 80, r: 42, color: "#dc2626", fill: "#fecaca" },
        { cx: 140, cy: 80, r: 42, color: "#6366f1", fill: "#c7d2fe" },
        { cx: 225, cy: 80, r: 35, color: "#059669", fill: "#a7f3d0" },
      ],
    },
    // A innerhalb von B, B überlappt mit C
    "a-in-b-overlap-c": {
      circles: [
        { cx: 95, cy: 85, r: 22, color: "#dc2626", fill: "#fecaca" },
        { cx: 100, cy: 80, r: 45, color: "#6366f1", fill: "#c7d2fe" },
        { cx: 175, cy: 80, r: 40, color: "#059669", fill: "#a7f3d0" },
      ],
    },
    // A innerhalb von B, B getrennt von C
    "a-in-b-separated-c": {
      circles: [
        { cx: 80, cy: 85, r: 22, color: "#dc2626", fill: "#fecaca" },
        { cx: 85, cy: 80, r: 45, color: "#6366f1", fill: "#c7d2fe" },
        { cx: 195, cy: 80, r: 40, color: "#059669", fill: "#a7f3d0" },
      ],
    },
    // A in B in C (konzentrisch)
    "a-in-b-in-c": {
      circles: [
        { cx: 140, cy: 80, r: 20, color: "#dc2626", fill: "#fecaca" },
        { cx: 140, cy: 80, r: 40, color: "#6366f1", fill: "#c7d2fe" },
        { cx: 140, cy: 80, r: 58, color: "#059669", fill: "#a7f3d0" },
      ],
    },
    // Alle getrennt
    "all-separated": {
      circles: [
        { cx: 55, cy: 80, r: 35, color: "#dc2626", fill: "#fecaca" },
        { cx: 145, cy: 80, r: 35, color: "#6366f1", fill: "#c7d2fe" },
        { cx: 230, cy: 80, r: 35, color: "#059669", fill: "#a7f3d0" },
      ],
    },
  };

  const config = configs[layout] || configs.chain;

  // For nested layouts, draw largest first
  const sortedCircles =
    layout === "a-in-b-in-c"
      ? [...config.circles].reverse()
      : layout === "a-in-b-overlap-c" || layout === "a-in-b-separated-c"
        ? [config.circles[1], config.circles[2], config.circles[0]]
        : config.circles;

  return (
    <svg viewBox="0 0 280 160" width={width} height={height} className={className}>
      {sortedCircles.map((c, i) => (
        <circle
          key={i}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          fill={c.fill}
          fillOpacity="0.35"
          stroke={c.color}
          strokeWidth="2"
        />
      ))}
      {config.circles.map((c, i) => (
        <text
          key={`label-${i}`}
          x={c.cx}
          y={layout === "a-in-b-in-c" ? c.cy + 4 : c.cy + 4}
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill={c.color}
        >
          {labels[i]}
        </text>
      ))}
    </svg>
  );
}

/** Einfaches 2-Kreis-Diagramm für Beispiel-Regeln */
export function EulerTwoCircles({
  width = 220,
  height = 140,
  className,
  labels = ["A", "B"],
  overlap = "partial",
}: EulerProps & {
  labels?: [string, string];
  overlap?: "full" | "partial" | "none" | "contained";
}) {
  const configs = {
    // A und B überlappen teilweise
    partial: {
      c1: { cx: 80, cy: 70, r: 42 },
      c2: { cx: 140, cy: 70, r: 42 },
    },
    // A komplett in B
    contained: {
      c1: { cx: 110, cy: 78, r: 28 },
      c2: { cx: 110, cy: 70, r: 52 },
    },
    // Komplett getrennt
    none: {
      c1: { cx: 60, cy: 70, r: 38 },
      c2: { cx: 165, cy: 70, r: 38 },
    },
    // A = B (gleicher Kreis)
    full: {
      c1: { cx: 110, cy: 70, r: 45 },
      c2: { cx: 110, cy: 70, r: 45 },
    },
  };

  const c = configs[overlap];
  const drawOrder = overlap === "contained" ? (["c2", "c1"] as const) : (["c1", "c2"] as const);

  return (
    <svg viewBox="0 0 220 140" width={width} height={height} className={className}>
      {drawOrder.map((key, i) => {
        const circle = c[key];
        const isFirst = key === "c1";
        return (
          <circle
            key={i}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill={isFirst ? "#fecaca" : "#c7d2fe"}
            fillOpacity="0.35"
            stroke={isFirst ? "#dc2626" : "#6366f1"}
            strokeWidth="2"
          />
        );
      })}
      <text
        x={c.c1.cx - (overlap === "partial" ? 15 : 0)}
        y={c.c1.cy + (overlap === "contained" ? 5 : 4)}
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill="#dc2626"
      >
        {labels[0]}
      </text>
      <text
        x={c.c2.cx + (overlap === "partial" ? 15 : 0)}
        y={overlap === "contained" ? 35 : c.c2.cy + 4}
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill="#4338ca"
      >
        {labels[1]}
      </text>
    </svg>
  );
}
