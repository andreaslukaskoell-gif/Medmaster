import { useState } from "react";

type BoneGroup = {
  id: string;
  label: string;
  count: string;
  bones: string[];
  color: string;
  detail: string;
};

const boneGroups: BoneGroup[] = [
  {
    id: "skull",
    label: "Schädel",
    count: "22 Knochen",
    bones: [
      "Stirnbein (Os frontale)",
      "Scheitelbein (Os parietale) ×2",
      "Hinterhauptbein (Os occipitale)",
      "Schläfenbein ×2",
      "Keilbein",
      "Siebenbein",
      "Unterkiefer (Mandibula)",
      "Oberkiefer (Maxilla) ×2",
    ],
    color: "#7c3aed",
    detail:
      "Der Schädel besteht aus Hirnschädel (Neurokranium, 8 Knochen) und Gesichtsschädel (Viscerokranium, 14 Knochen). Wichtig: Foramen magnum (Durchtritt des Hirnstamms), Foramina für Hirnnerven (I–XII). Nähte (Suturen) sind unbeweglich (Synarthrosen). Schädelbasis: Fossa anterior (Frontallappen), media (Temporallappen), posterior (Kleinhirn).",
  },
  {
    id: "spine",
    label: "Wirbelsäule",
    count: "33–34 Wirbel",
    bones: [
      "7 Halswirbel (C1–C7)",
      "12 Brustwirbel (Th1–Th12)",
      "5 Lendenwirbel (L1–L5)",
      "5 Kreuzbeinwirbel (verwachsen → Os sacrum)",
      "4–5 Steißbeinwirbel (Os coccygis)",
    ],
    color: "#2563eb",
    detail:
      "Die Wirbelsäule hat 4 physiologische Krümmungen: Hals-/Lendenlordose (nach ventral), Brust-/Kreuzbeinkyphose (nach dorsal). Atlas (C1) trägt den Schädel (Nickgelenk), Axis (C2) trägt den Dens (Drehgelenk). Zwischen den Wirbelkörpern: Bandscheiben (Nucleus pulposus + Anulus fibrosus). Klinisch: Bandscheibenvorfall (L4/L5, L5/S1 am häufigsten).",
  },
  {
    id: "thorax",
    label: "Brustkorb",
    count: "37 Knochen",
    bones: [
      "Sternum (Brustbein): Manubrium + Corpus + Xiphoid",
      "12 Rippenpaare (Costae)",
      "Rippen 1–7: echte Rippen (wahre)",
      "Rippen 8–10: falsche Rippen",
      "Rippen 11–12: freie Rippen",
    ],
    color: "#0891b2",
    detail:
      "Der knöcherne Thorax schützt Herz, Lunge und große Gefäße. Sternum: Manubrium sternit (Articulatio sternoclavicularis), Corpus sterni (Rippenansätze 2–7), Processus xiphoideus (kein Rippenansatz). Costochondrale Knorpelverbindungen (synchondrosen) erlauben Atembewegungen. Klinisch: Rippenfraktur (Gefahr: Pneumothorax).",
  },
  {
    id: "upper",
    label: "Obere Extremitäten",
    count: "64 Knochen (2×32)",
    bones: [
      "Clavicula (Schlüsselbein)",
      "Scapula (Schulterblatt)",
      "Humerus (Oberarmknochen)",
      "Radius + Ulna (Unterarm)",
      "8 Handwurzelknochen",
      "5 Mittelhandknochen",
      "14 Fingerknochen",
    ],
    color: "#dc2626",
    detail:
      "Schultergelenk: Kugelgelenk (Caput humeri + Cavitas glenoidalis). Häufigste Luxation. Ellenbogengelenk: Scharniergelenk (Flexion/Extension) + Drehgelenk (Pronation/Supination). Handwurzel: proximale Reihe (Skaphoid, Lunatum, Triquetrum, Pisiforme), distale Reihe (Trapezium, Trapezoid, Kapitatum, Hamatum). Klinisch: Kahnbeinfraktur (Skaphoid) → avaskuläre Nekrose.",
  },
  {
    id: "pelvis",
    label: "Becken",
    count: "4 Knochen",
    bones: [
      "Os coxae (Hüftbein) ×2",
      "→ Ilium (Darmbein)",
      "→ Ischium (Sitzbein)",
      "→ Pubis (Schambein)",
      "Os sacrum (Kreuzbein)",
      "Os coccygis (Steißbein)",
    ],
    color: "#059669",
    detail:
      "Das Becken verbindet Wirbelsäule mit den unteren Extremitäten. Articulatio sacroiliaca (Iliosakralgelenk): straffe Verbindung mit geringer Beweglichkeit. Symphysis pubica: Faserknorpel (Synchondrose). Geschlechtsunterschied: weibl. Becken breiter, Angulus subpubicus > 80°, Apertura pelvis minor größer (Geburtsmechanismus). Hüftgelenk: Kugelgelenk.",
  },
  {
    id: "lower",
    label: "Untere Extremitäten",
    count: "62 Knochen (2×31)",
    bones: [
      "Femur (Oberschenkelknochen)",
      "Patella (Kniescheibe)",
      "Tibia + Fibula (Unterschenkel)",
      "7 Fußwurzelknochen (Talus, Calcaneus…)",
      "5 Mittelfußknochen",
      "14 Zehenknochen",
    ],
    color: "#d97706",
    detail:
      "Kniegelenk: Scharniergelenk + begrenzte Rotation; Menisci (Innen-/Außenmeniskus) erhöhen Kongruenz; Kreuz- (vorderes/hinteres) und Kollateralbänder. Patella: größtes Sesambein, eingebettet in Quadrizepssehne. Sprunggelenk (oberes): Scharniergelenk (Talus in Malleolengabel). Längswölbung des Fußes durch Bänder und Muskulatur. Klinisch: Kreuzbandruptur, Meniskusläsion, Achillessehnenruptur.",
  },
];

export default function SkeletonOverview() {
  const [active, setActive] = useState<string | null>(null);
  const activeGroup = boneGroups.find((g) => g.id === active);

  const W = 500;
  const H = 460;
  const skX = 150; // skeleton center x
  const skTopY = 30; // skeleton top y

  function highlightColor(id: string) {
    return active === id ? boneGroups.find((g) => g.id === id)!.color : "#d1d5db";
  }
  function strokeW(id: string) {
    return active === id ? 2.5 : 1;
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Skelettübersicht — Knochengruppen
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf eine Knochengruppe für Details (gesamt: 206 Knochen im Erwachsenenalter).
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-lg mx-auto">
        <title>Menschliches Skelett — Knochengruppen Übersicht</title>

        {/* ── SKULL ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "skull" ? null : "skull")}
          onMouseEnter={() => setActive("skull")}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse
            cx={skX}
            cy={skTopY + 28}
            rx={28}
            ry={33}
            fill={active === "skull" ? "#ede9fe" : "#f5f3ff"}
            stroke={highlightColor("skull")}
            strokeWidth={strokeW("skull")}
          />
          {/* Face outline */}
          <ellipse
            cx={skX}
            cy={skTopY + 40}
            rx={18}
            ry={20}
            fill={active === "skull" ? "#ddd6fe" : "#ede9fe"}
            stroke={highlightColor("skull")}
            strokeWidth={strokeW("skull") * 0.8}
          />
          {/* Eye sockets */}
          <ellipse
            cx={skX - 8}
            cy={skTopY + 37}
            rx={5}
            ry={4}
            fill="white"
            stroke={highlightColor("skull")}
            strokeWidth={0.8}
          />
          <ellipse
            cx={skX + 8}
            cy={skTopY + 37}
            rx={5}
            ry={4}
            fill="white"
            stroke={highlightColor("skull")}
            strokeWidth={0.8}
          />
          {/* Jaw */}
          <rect
            x={skX - 14}
            y={skTopY + 52}
            width={28}
            height={12}
            rx={4}
            fill={active === "skull" ? "#c4b5fd" : "#ede9fe"}
            stroke={highlightColor("skull")}
            strokeWidth={strokeW("skull") * 0.8}
          />
        </g>

        {/* ── SPINE ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "spine" ? null : "spine")}
          onMouseEnter={() => setActive("spine")}
          onMouseLeave={() => setActive(null)}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <rect
              key={i}
              x={skX - 8}
              y={skTopY + 66 + i * 14}
              width={16}
              height={11}
              rx={2}
              fill={active === "spine" ? "#dbeafe" : "#eff6ff"}
              stroke={highlightColor("spine")}
              strokeWidth={strokeW("spine") * 0.7}
            />
          ))}
        </g>

        {/* ── THORAX ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "thorax" ? null : "thorax")}
          onMouseEnter={() => setActive("thorax")}
          onMouseLeave={() => setActive(null)}
        >
          {/* Sternum */}
          <rect
            x={skX - 6}
            y={skTopY + 68}
            width={12}
            height={88}
            rx={3}
            fill={active === "thorax" ? "#bae6fd" : "#e0f2fe"}
            stroke={highlightColor("thorax")}
            strokeWidth={strokeW("thorax")}
          />
          {/* Ribs */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            const ry = skTopY + 72 + i * 7.5;
            const spread = 12 + i * 2.5;
            return (
              <g key={i}>
                <path
                  d={`M ${skX - 6} ${ry} Q ${skX - spread - 8} ${ry - 4} ${skX - spread - 12} ${ry + 8}`}
                  fill="none"
                  stroke={highlightColor("thorax")}
                  strokeWidth={strokeW("thorax") * 0.8}
                />
                <path
                  d={`M ${skX + 6} ${ry} Q ${skX + spread + 8} ${ry - 4} ${skX + spread + 12} ${ry + 8}`}
                  fill="none"
                  stroke={highlightColor("thorax")}
                  strokeWidth={strokeW("thorax") * 0.8}
                />
              </g>
            );
          })}
        </g>

        {/* ── UPPER EXTREMITIES ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "upper" ? null : "upper")}
          onMouseEnter={() => setActive("upper")}
          onMouseLeave={() => setActive(null)}
        >
          {/* Left clavicle */}
          <line
            x1={skX - 6}
            y1={skTopY + 70}
            x2={skX - 42}
            y2={skTopY + 62}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper") * 1.5}
            strokeLinecap="round"
          />
          {/* Right clavicle */}
          <line
            x1={skX + 6}
            y1={skTopY + 70}
            x2={skX + 42}
            y2={skTopY + 62}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper") * 1.5}
            strokeLinecap="round"
          />
          {/* Left humerus */}
          <rect
            x={skX - 54}
            y={skTopY + 62}
            width={12}
            height={65}
            rx={4}
            fill={active === "upper" ? "#fecaca" : "#fff1f2"}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper")}
          />
          {/* Right humerus */}
          <rect
            x={skX + 42}
            y={skTopY + 62}
            width={12}
            height={65}
            rx={4}
            fill={active === "upper" ? "#fecaca" : "#fff1f2"}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper")}
          />
          {/* Left forearm */}
          <rect
            x={skX - 55}
            y={skTopY + 130}
            width={7}
            height={55}
            rx={3}
            fill={active === "upper" ? "#fca5a5" : "#fff1f2"}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper") * 0.8}
          />
          <rect
            x={skX - 47}
            y={skTopY + 130}
            width={7}
            height={55}
            rx={3}
            fill={active === "upper" ? "#fca5a5" : "#fff1f2"}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper") * 0.8}
          />
          {/* Right forearm */}
          <rect
            x={skX + 41}
            y={skTopY + 130}
            width={7}
            height={55}
            rx={3}
            fill={active === "upper" ? "#fca5a5" : "#fff1f2"}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper") * 0.8}
          />
          <rect
            x={skX + 49}
            y={skTopY + 130}
            width={7}
            height={55}
            rx={3}
            fill={active === "upper" ? "#fca5a5" : "#fff1f2"}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper") * 0.8}
          />
          {/* Hands (simplified) */}
          <rect
            x={skX - 60}
            y={skTopY + 187}
            width={22}
            height={18}
            rx={3}
            fill={active === "upper" ? "#fca5a5" : "#fff1f2"}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper") * 0.7}
          />
          <rect
            x={skX + 39}
            y={skTopY + 187}
            width={22}
            height={18}
            rx={3}
            fill={active === "upper" ? "#fca5a5" : "#fff1f2"}
            stroke={highlightColor("upper")}
            strokeWidth={strokeW("upper") * 0.7}
          />
        </g>

        {/* ── PELVIS ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "pelvis" ? null : "pelvis")}
          onMouseEnter={() => setActive("pelvis")}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d={`M ${skX - 38} ${skTopY + 160} Q ${skX - 45} ${skTopY + 200} ${skX - 20} ${skTopY + 210} L ${skX + 20} ${skTopY + 210} Q ${skX + 45} ${skTopY + 200} ${skX + 38} ${skTopY + 160} Z`}
            fill={active === "pelvis" ? "#d1fae5" : "#ecfdf5"}
            stroke={highlightColor("pelvis")}
            strokeWidth={strokeW("pelvis")}
          />
          {/* Symphysis */}
          <rect
            x={skX - 8}
            y={skTopY + 195}
            width={16}
            height={16}
            rx={2}
            fill={active === "pelvis" ? "#6ee7b7" : "#d1fae5"}
            stroke={highlightColor("pelvis")}
            strokeWidth={strokeW("pelvis") * 0.8}
          />
        </g>

        {/* ── LOWER EXTREMITIES ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "lower" ? null : "lower")}
          onMouseEnter={() => setActive("lower")}
          onMouseLeave={() => setActive(null)}
        >
          {/* Femora */}
          <rect
            x={skX - 32}
            y={skTopY + 210}
            width={18}
            height={90}
            rx={5}
            fill={active === "lower" ? "#fde68a" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower")}
          />
          <rect
            x={skX + 14}
            y={skTopY + 210}
            width={18}
            height={90}
            rx={5}
            fill={active === "lower" ? "#fde68a" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower")}
          />
          {/* Patellas */}
          <circle
            cx={skX - 23}
            cy={skTopY + 298}
            r={7}
            fill={active === "lower" ? "#fbbf24" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower") * 0.8}
          />
          <circle
            cx={skX + 23}
            cy={skTopY + 298}
            r={7}
            fill={active === "lower" ? "#fbbf24" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower") * 0.8}
          />
          {/* Tibias */}
          <rect
            x={skX - 33}
            y={skTopY + 305}
            width={14}
            height={75}
            rx={4}
            fill={active === "lower" ? "#fde68a" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower")}
          />
          <rect
            x={skX + 19}
            y={skTopY + 305}
            width={14}
            height={75}
            rx={4}
            fill={active === "lower" ? "#fde68a" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower")}
          />
          {/* Fibulas */}
          <rect
            x={skX - 18}
            y={skTopY + 307}
            width={7}
            height={71}
            rx={3}
            fill={active === "lower" ? "#fde68a" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower") * 0.7}
          />
          <rect
            x={skX + 11}
            y={skTopY + 307}
            width={7}
            height={71}
            rx={3}
            fill={active === "lower" ? "#fde68a" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower") * 0.7}
          />
          {/* Feet */}
          <rect
            x={skX - 36}
            y={skTopY + 378}
            width={26}
            height={14}
            rx={4}
            fill={active === "lower" ? "#fde68a" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower") * 0.7}
          />
          <rect
            x={skX + 10}
            y={skTopY + 378}
            width={26}
            height={14}
            rx={4}
            fill={active === "lower" ? "#fde68a" : "#fefce8"}
            stroke={highlightColor("lower")}
            strokeWidth={strokeW("lower") * 0.7}
          />
        </g>

        {/* ── Right side label panel ── */}
        {boneGroups.map((g, i) => {
          const labelY = 45 + i * 62;
          const isAct = active === g.id;
          return (
            <g
              key={g.id}
              className="cursor-pointer"
              onClick={() => setActive(active === g.id ? null : g.id)}
              onMouseEnter={() => setActive(g.id)}
              onMouseLeave={() => setActive(null)}
            >
              <rect
                x={310}
                y={labelY}
                width={178}
                height={52}
                rx={6}
                fill={isAct ? `${g.color}18` : "#f9fafb"}
                stroke={isAct ? g.color : "#e5e7eb"}
                strokeWidth={isAct ? 1.8 : 1}
              />
              <rect x={312} y={labelY + 2} width={5} height={48} rx={2} fill={g.color} />
              <text x={324} y={labelY + 17} fontSize={9} fill={g.color} fontWeight={700}>
                {g.label}
              </text>
              <text x={324} y={labelY + 30} fontSize={7.5} fill="#374151">
                {g.count}
              </text>
              <text x={324} y={labelY + 43} fontSize={7} fill="#6b7280">
                {g.bones[0]}
              </text>
            </g>
          );
        })}

        {/* Total count */}
        <text x={260} y={H - 8} textAnchor="middle" fontSize={8} fill="#6b7280">
          Gesamt: 206 Knochen (Erwachsener) | Kleinkind: ~270–300 Knochen
        </text>
      </svg>

      {activeGroup && (
        <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
          <p className="text-sm font-semibold" style={{ color: activeGroup.color }}>
            {activeGroup.label} — {activeGroup.count}
          </p>
          <ul className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-2 space-y-0.5">
            {activeGroup.bones.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
          <p className="text-xs text-gray-700 dark:text-gray-300">{activeGroup.detail}</p>
        </div>
      )}
    </div>
  );
}
