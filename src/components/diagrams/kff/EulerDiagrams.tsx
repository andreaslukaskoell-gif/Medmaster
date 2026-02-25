// Euler-Diagramme für Implikationen erkennen
// Visualisiert die 4 Grundaussagen und Schlussfolgerungen

import type { ImplikationTask } from "@/data/kffImplikationen";

interface EulerProps {
  width?: number;
  height?: number;
  className?: string;
}

type LayoutKey =
  | "chain"
  | "all-overlap"
  | "ab-separated"
  | "bc-separated"
  | "a-in-b-overlap-c"
  | "a-in-b-separated-c"
  | "a-in-b-in-c"
  | "all-separated";

function parsePremise(p: string): {
  type: "all-in" | "all-disjoint" | "some-overlap" | "some-not";
  terms: [string, string];
} | null {
  const s = p.trim().replace(/\.$/, "");
  const allIn = /^Alle (.+?) sind (.+?)$/i.exec(s);
  if (allIn) return { type: "all-in", terms: [allIn[1].trim(), allIn[2].trim()] };
  const allDisjoint = /^Alle (.+?) sind keine (.+?)$/i.exec(s);
  if (allDisjoint)
    return { type: "all-disjoint", terms: [allDisjoint[1].trim(), allDisjoint[2].trim()] };
  const someIn = /^Einige (.+?) sind (.+?)$/i.exec(s);
  if (someIn) return { type: "some-overlap", terms: [someIn[1].trim(), someIn[2].trim()] };
  const someNot = /^Einige (.+?) sind keine (.+?)$/i.exec(s);
  if (someNot) return { type: "some-not", terms: [someNot[1].trim(), someNot[2].trim()] };
  return null;
}

function getLayoutFromPremises(
  p1: string,
  p2: string
): { labels: [string, string, string]; layout: LayoutKey } {
  const a = parsePremise(p1);
  const b = parsePremise(p2);
  if (!a || !b) return { labels: ["A", "B", "C"], layout: "chain" };
  const [t1a, t1b] = a.terms;
  const [t2a, t2b] = b.terms;
  const mid = t1a === t2a ? t1a : t1b === t2a ? t2a : t1a === t2b ? t1a : t1b;
  const left = t1a === mid ? t1b : t1a;
  const right = t2a === mid ? t2b : t2a;
  // Einheitliche Semantik: labels[0]=Kreis 0, labels[1]=Kreis 1, labels[2]=Kreis 2.
  // a-in-b-in-c: innen = A (erstes Kettenglied), mittel = B, außen = C → [left, mid, right]
  if (a.type === "all-in" && b.type === "all-in")
    return { labels: [left, mid, right], layout: "a-in-b-in-c" };
  // a-in-b-overlap-c: A (mid) innen in B (left), C (right) überlappt B → [mid, left, right]
  if (a.type === "all-in" && b.type === "some-overlap")
    return { labels: [mid, left, right], layout: "a-in-b-overlap-c" };
  // a-in-b-separated-c: A innen in B, C getrennt. A = Subjekt von "Alle A sind B" = t1a.
  if (a.type === "all-in" && b.type === "all-disjoint") {
    const t1a = a.terms[0];
    const t1b = a.terms[1];
    const labels: [string, string, string] = t1a === mid ? [mid, left, right] : [left, mid, right]; // mid in left vs left in mid
    return { labels, layout: "a-in-b-separated-c" };
  }
  // all-disjoint + all-in: P2 gibt B in C, P1 sagt A getrennt von B → labels passend für A-in-B-sep-C
  if (a.type === "all-disjoint" && b.type === "all-in")
    return { labels: [t2a, t2b, t1a], layout: "a-in-b-separated-c" };
  // Nüsse∩Gewürze ≠ ∅, Nüsse∩Pflanzen = ∅ → Kreise 0&1 überlappen, 2 getrennt
  if (a.type === "all-disjoint" && b.type === "some-overlap")
    return { labels: [mid, left, right], layout: "bc-separated" };
  if (a.type === "some-overlap" && b.type === "all-disjoint")
    return { labels: [mid, left, right], layout: "bc-separated" };
  if (a.type === "some-overlap" && b.type === "some-overlap")
    return { labels: [mid, left, right], layout: "all-overlap" };
  if (a.type === "some-not" || b.type === "some-not")
    return { labels: [mid, left, right], layout: "chain" };
  return { labels: [mid, left, right], layout: "chain" };
}

function getHighlightFromConclusion(
  option: string,
  labels: [string, string, string]
): "ab" | "bc" | "ac" | "a-in-b" | "b-in-c" | "a-in-c" | "none" {
  const s = option.trim().replace(/\.$/, "");
  if (/^Keine der Schlussfolgerungen/i.test(s)) return "none";
  const allIn = /^Alle (.+?) sind (.+?)$/i.exec(s);
  if (allIn) {
    const [x, y] = [allIn[1].trim(), allIn[2].trim()];
    const ix = labels.indexOf(x);
    const iy = labels.indexOf(y);
    if (ix >= 0 && iy >= 0) {
      if (ix === 0 && iy === 1) return "a-in-b";
      if (ix === 1 && iy === 2) return "b-in-c";
      if (ix === 0 && iy === 2) return "a-in-c";
    }
  }
  const someIn = /^Einige (.+?) sind (.+?)$/i.exec(s);
  if (someIn) {
    const [x, y] = [someIn[1].trim(), someIn[2].trim()];
    const ix = labels.indexOf(x);
    const iy = labels.indexOf(y);
    if (ix >= 0 && iy >= 0) {
      if ((ix === 0 && iy === 1) || (ix === 1 && iy === 0)) return "ab";
      if ((ix === 1 && iy === 2) || (ix === 2 && iy === 1)) return "bc";
      if ((ix === 0 && iy === 2) || (ix === 2 && iy === 0)) return "ac";
    }
  }
  const someNot = /^Einige (.+?) sind keine (.+?)$/i.exec(s);
  if (someNot) {
    const [x, y] = [someNot[1].trim(), someNot[2].trim()];
    const ix = labels.indexOf(x);
    const iy = labels.indexOf(y);
    if (ix >= 0 && iy >= 0) {
      if ((ix === 0 && iy === 1) || (ix === 1 && iy === 0)) return "ab";
      if ((ix === 1 && iy === 2) || (ix === 2 && iy === 1)) return "bc";
      if ((ix === 0 && iy === 2) || (ix === 2 && iy === 0)) return "ac";
    }
  }
  return "none";
}

/** Visuelle Lösung für eine Implikationsaufgabe: Euler-Diagramm mit hervorgehobener gültiger Region. */
export function ImplikationSolutionDiagram({
  task,
  width,
  height,
  className,
}: {
  task: ImplikationTask;
  width?: number;
  height?: number;
  className?: string;
}) {
  const hasVisualData =
    task.premise1 &&
    task.premise2 &&
    task.options &&
    task.options.length === 5 &&
    task.correctAnswer >= 0 &&
    task.correctAnswer <= 4;
  const { labels, layout } = getLayoutFromPremises(task.premise1 || "", task.premise2 || "");
  const correctOption = hasVisualData ? task.options[task.correctAnswer] : null;
  const highlight = correctOption ? getHighlightFromConclusion(correctOption, labels) : "none";
  const isNone = highlight === "none";
  const useDefaultVisual = !hasVisualData;

  return (
    <div className={className}>
      <div className="flex flex-col items-center gap-2">
        <EulerThreeCircles
          width={width ?? 280}
          height={height ?? 160}
          labels={labels}
          layout={layout}
          highlightRegion={isNone ? undefined : highlight}
        />
        <p className="text-xs font-medium text-center text-muted">
          {useDefaultVisual
            ? "Lösung siehe Erklärung unten."
            : isNone
              ? "Keine der Schlussfolgerungen ist zwingend — kein Bereich hervorgehoben."
              : "✓ Markierter Bereich = gültige Schlussfolgerung."}
        </p>
        {!useDefaultVisual && (
          <p className="text-[11px] text-center text-muted-foreground/80">
            Mengen: <span className="font-medium">{labels[0]}</span>,{" "}
            <span className="font-medium">{labels[1]}</span>,{" "}
            <span className="font-medium">{labels[2]}</span>
          </p>
        )}
      </div>
    </div>
  );
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
  /** Welche Region als gültige Schlussfolgerung hervorheben (visuell) */
  highlightRegion?: "ab" | "bc" | "ac" | "a-in-b" | "b-in-c" | "a-in-c" | "none";
}

/** Flexibles 3-Kreis-Euler-Diagramm für Schlussfolgerungen */
export function EulerThreeCircles({
  width = 280,
  height = 160,
  className,
  labels = ["A", "B", "C"],
  layout,
  highlightRegion,
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

  // Zeichenreihenfolge: bei Verschachtelung zuerst großer Kreis, dann kleinere, damit Labels lesbar bleiben
  const sortedCircles =
    layout === "a-in-b-in-c"
      ? [...config.circles].reverse()
      : layout === "a-in-b-overlap-c" || layout === "a-in-b-separated-c"
        ? [config.circles[1], config.circles[2], config.circles[0]]
        : config.circles;

  // Bei konzentrischem Layout Labels in den Ringen platzieren (nicht alle im Zentrum)
  const getLabelY = (i: number) => {
    if (layout !== "a-in-b-in-c") return config.circles[i].cy + 5;
    const baseY = 80;
    if (i === 0) return baseY; // innen
    if (i === 1) return baseY - 28; // mittlerer Ring
    return baseY - 52; // äußerer Ring
  };

  return (
    <svg viewBox="0 0 280 160" width={width} height={height} className={className}>
      {sortedCircles.map((c, i) => (
        <circle
          key={i}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          fill={c.fill}
          fillOpacity="0.4"
          stroke={c.color}
          strokeWidth="2.5"
        />
      ))}
      {config.circles.map((c, i) => (
        <text
          key={`label-${i}`}
          x={c.cx}
          y={getLabelY(i)}
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill={c.color}
        >
          {labels[i]}
        </text>
      ))}
      {highlightRegion &&
        highlightRegion !== "none" &&
        (() => {
          const circles = config.circles;
          const mid = (i: number, j: number) => ({
            x: (circles[i].cx + circles[j].cx) / 2,
            y: (circles[i].cy + circles[j].cy) / 2,
          });
          const pos =
            highlightRegion === "ab"
              ? mid(0, 1)
              : highlightRegion === "bc"
                ? mid(1, 2)
                : highlightRegion === "ac"
                  ? mid(0, 2)
                  : highlightRegion === "a-in-b"
                    ? { x: circles[0].cx, y: circles[0].cy }
                    : highlightRegion === "b-in-c"
                      ? { x: circles[1].cx, y: circles[1].cy }
                      : highlightRegion === "a-in-c"
                        ? { x: circles[0].cx, y: circles[0].cy }
                        : null;
          if (!pos) return null;
          const isContained =
            highlightRegion === "a-in-b" ||
            highlightRegion === "b-in-c" ||
            highlightRegion === "a-in-c";
          const r = isContained ? 14 : 20;
          return (
            <g key="highlight">
              <circle
                cx={pos.x}
                cy={pos.y}
                r={r + 5}
                fill="rgba(34,197,94,0.2)"
                stroke="#16a34a"
                strokeWidth="3"
              />
              <text
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
                fill="#15803d"
              >
                ✓
              </text>
            </g>
          );
        })()}
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
