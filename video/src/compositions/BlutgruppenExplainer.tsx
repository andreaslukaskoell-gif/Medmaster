import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BrandedBackground } from "../shared/BrandedBackground";
import { SafeArea } from "../shared/SafeArea";
import { BRAND, SUBJECT_COLORS } from "../shared/brand";

/* ─── Types ─── */

type SubtitleSegment = {
  text: string;
  startFrame: number;
  endFrame: number;
};

type BlutgruppenExplainerProps = {
  audioSrc: string;
  subtitles: SubtitleSegment[];
};

/* ─── Constants ─── */

const BIO_COLOR = SUBJECT_COLORS.Biologie;

// Blood type data for the animated table
type BloodTypeData = {
  group: string;
  antigen: string;
  antibody: string;
  markerColor: string;
  badge?: string;
  badgeColor?: string;
};

const BLOOD_TYPES: BloodTypeData[] = [
  {
    group: "A",
    antigen: "A-Antigen",
    antibody: "Anti-B",
    markerColor: "#a855f7",
  },
  {
    group: "B",
    antigen: "B-Antigen",
    antibody: "Anti-A",
    markerColor: "#06b6d4",
  },
  {
    group: "AB",
    antigen: "A + B",
    antibody: "Keine",
    badge: "Universalempfänger",
    badgeColor: "#059669",
    markerColor: "#f59e0b",
  },
  {
    group: "0",
    antigen: "Keine",
    antibody: "Anti-A + Anti-B",
    badge: "Universalspender",
    badgeColor: "#2563eb",
    markerColor: "#6b7280",
  },
];

/* ─── Scene timing (30fps) — synced to actual TTS output ─── */

// Scene 1: Hook — wrong statement + red X (seg 0–2)
const HOOK_WRONG_TEXT_IN = 0;
const HOOK_FALSCH_HIT = 71; // "Falsch." starts
const HOOK_END = 195; // fade out after seg 2 ends (188) + buffer

// Scene 2: The rule — kinetic typography (seg 3: 212–333)
const RULE_START = 200;
const RULE_END = 345;

// Scene 3: Table build — 4 columns sequentially (seg 4–11)
const COL_A_START = 350; // seg 4+5: A-Antigen + Anti-B (357–510)
const COL_A_END = 520;
const COL_B_START = 520; // seg 6: B-Antigen + Anti-A (527–652)
const COL_B_END = 660;
const COL_AB_START = 660; // seg 7+8: AB + Universalempfänger (668–840)
const COL_AB_END = 850;
const COL_0_START = 850; // seg 9+10+11: 0 + Universalspender (856–1110)
const COL_0_END = 1120;

// Scene 4: Full table + Merke (seg 12: 1134–1276)
const MERKE_START = 1125;
const MERKE_END = 1285;

// Scene 5: CTA with product shot (seg 13: 1292–1353)
const CTA_START = 1285;

/* ─── Helper: fade in/out within a range ─── */

function fadeIn(frame: number, start: number, dur = 10): number {
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function fadeOut(frame: number, start: number, dur = 10): number {
  return interpolate(frame, [start, start + dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function sceneFade(frame: number, sceneStart: number, sceneEnd: number): number {
  const inOp = fadeIn(frame, sceneStart, 12);
  const outOp = fadeOut(frame, sceneEnd - 12, 12);
  return Math.min(inOp, outOp);
}

/* ─── Sub-components ─── */

/** Red blood cell SVG — simplified but recognizable */
const BloodCell: React.FC<{
  size: number;
  label: string;
  markerColor: string;
  showMarkers: boolean;
  scale: number;
}> = ({ size, label, markerColor, showMarkers, scale }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        transform: `scale(${scale})`,
      }}
    >
      <svg viewBox="0 0 100 100" width={size} height={size}>
        {/* Cell body */}
        <circle cx="50" cy="50" r="44" fill="#dc2626" />
        <circle cx="50" cy="50" r="22" fill="#b91c1c" opacity="0.5" />
        {/* Markers (antigens) */}
        {showMarkers &&
          [0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 50 + 38 * Math.cos(rad);
            const y = 50 + 38 * Math.sin(rad);
            return <circle key={angle} cx={x} cy={y} r="5" fill={markerColor} />;
          })}
      </svg>
      {/* Label centered on cell */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: size * 0.28,
          fontWeight: 900,
          color: "white",
          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
        }}
      >
        {label}
      </div>
    </div>
  );
};

/** Single column in the blood type table */
const BloodColumn: React.FC<{
  data: BloodTypeData;
  frame: number;
  fps: number;
  colStart: number;
  isActive: boolean;
  isBuilt: boolean;
}> = ({ data, frame, fps, colStart, isActive, isBuilt }) => {
  // Stagger: cell → antigen label → antibody label → badge
  const cellDelay = colStart;
  const antigenDelay = colStart + 15;
  const antibodyDelay = colStart + 30;
  const badgeDelay = colStart + 45;

  const cellScale = isBuilt
    ? 1
    : spring({ frame: frame - cellDelay, fps, config: { damping: 10, stiffness: 200 } });
  const antigenOp = isBuilt ? 1 : fadeIn(frame, antigenDelay, 12);
  const antibodyOp = isBuilt ? 1 : fadeIn(frame, antibodyDelay, 12);
  const badgeOp =
    data.badge && (isActive || isBuilt) ? (isBuilt ? 1 : fadeIn(frame, badgeDelay, 12)) : 0;

  const visible = isActive || isBuilt;
  if (!visible) return null;

  // Highlight glow when actively being explained
  const glowOpacity = isActive
    ? interpolate(frame, [colStart, colStart + 20], [0, 0.6], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        padding: "16px 8px",
        borderRadius: 16,
        position: "relative",
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* Active glow */}
      {glowOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 16,
            background: `radial-gradient(ellipse at center, ${BIO_COLOR}40, transparent)`,
            opacity: glowOpacity,
          }}
        />
      )}

      {/* Blood group label */}
      <div
        style={{
          fontSize: 38,
          fontWeight: 900,
          color: "white",
          opacity: cellScale,
        }}
      >
        {data.group}
      </div>

      {/* Red blood cell */}
      <BloodCell
        size={110}
        label={data.group}
        markerColor={data.markerColor}
        showMarkers={data.antigen !== "Keine"}
        scale={cellScale}
      />

      {/* Antigen label */}
      <div style={{ opacity: antigenOp, textAlign: "center" }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: BRAND.accent,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          Antigen
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "white",
          }}
        >
          {data.antigen}
        </div>
      </div>

      {/* Antibody label */}
      <div style={{ opacity: antibodyOp, textAlign: "center" }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#f87171",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          Antikörper
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "white",
          }}
        >
          {data.antibody}
        </div>
      </div>

      {/* Badge (Universalspender / Universalempfänger) */}
      {data.badge && badgeOp > 0 && (
        <div
          style={{
            marginTop: 4,
            padding: "6px 14px",
            background: data.badgeColor,
            borderRadius: 12,
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            opacity: badgeOp,
            transform: `scale(${badgeOp})`,
            whiteSpace: "nowrap",
          }}
        >
          {data.badge}
        </div>
      )}
    </div>
  );
};

/* ─── Main composition ─── */

export const BlutgruppenExplainer: React.FC<BlutgruppenExplainerProps> = ({
  audioSrc,
  subtitles,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Current subtitle
  const currentSub = subtitles.find((s) => frame >= s.startFrame && frame <= s.endFrame);

  /* ─── Scene 1: Hook ─── */
  const hookVisible = frame < HOOK_END + 15;
  const wrongTextOp = fadeIn(frame, HOOK_WRONG_TEXT_IN + 5, 12);
  const wrongTextOut = fadeOut(frame, HOOK_END - 20, 15);

  // "Falsch." stamp
  const falschScale = spring({
    frame: frame - HOOK_FALSCH_HIT,
    fps,
    config: { damping: 6, stiffness: 300 },
  });
  const falschOp = fadeIn(frame, HOOK_FALSCH_HIT, 3);

  // Screen shake on "Falsch"
  const shakeX =
    frame >= HOOK_FALSCH_HIT && frame < HOOK_FALSCH_HIT + 6
      ? Math.sin((frame - HOOK_FALSCH_HIT) * 8) * 8
      : 0;

  /* ─── Scene 2: Rule ─── */
  const ruleOp = sceneFade(frame, RULE_START, RULE_END);

  // "NICHT" emphasis — scale pop
  const nichtDelay = RULE_START + 30;
  const nichtScale = spring({
    frame: frame - nichtDelay,
    fps,
    config: { damping: 8, stiffness: 250 },
  });
  const nichtOp = fadeIn(frame, nichtDelay, 8);

  /* ─── Scene 3: Table build ─── */
  const tableVisible = frame >= COL_A_START - 10;
  const tableOp = fadeIn(frame, COL_A_START - 10, 15);

  // Determine which columns are active / already built
  const colStarts = [COL_A_START, COL_B_START, COL_AB_START, COL_0_START];
  const colEnds = [COL_A_END, COL_B_END, COL_AB_END, COL_0_END];

  /* ─── Scene 4: Merke ─── */
  const merkeOp = sceneFade(frame, MERKE_START, MERKE_END + 30);

  /* ─── Scene 5: CTA ─── */
  const ctaOp = fadeIn(frame, CTA_START, 15);

  return (
    <AbsoluteFill>
      <BrandedBackground>
        {/* Audio */}
        <Audio src={staticFile(audioSrc)} volume={1} />

        {/* ─── Scene 1: Hook ─── */}
        {hookVisible && (
          <SafeArea
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
              gap: 28,
              opacity: Math.min(wrongTextOp, wrongTextOut),
              transform: `translateX(${shakeX}px)`,
              zIndex: 20,
            }}
          >
            {/* MedAT BMS badge */}
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: BRAND.accent,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              MedAT BMS
            </div>

            {/* Wrong statement */}
            <div
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: "white",
                textAlign: "center",
                lineHeight: 1.35,
                padding: "0 20px",
                textShadow: "0 3px 12px rgba(0,0,0,0.5)",
              }}
            >
              Blutgruppe A hat{"\n"}Anti-A-Antikörper.
            </div>

            {/* Red X stamp */}
            {frame >= HOOK_FALSCH_HIT && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) scale(${falschScale}) rotate(-12deg)`,
                  opacity: falschOp,
                  zIndex: 30,
                }}
              >
                <div
                  style={{
                    fontSize: 80,
                    fontWeight: 900,
                    color: BRAND.error,
                    textTransform: "uppercase",
                    letterSpacing: 6,
                    border: `6px solid ${BRAND.error}`,
                    borderRadius: 16,
                    padding: "8px 36px",
                    background: "rgba(0,0,0,0.7)",
                  }}
                >
                  FALSCH
                </div>
              </div>
            )}

            {/* Accent bar */}
            <div
              style={{
                width: 80,
                height: 4,
                backgroundColor: BIO_COLOR,
                borderRadius: 2,
              }}
            />
          </SafeArea>
        )}

        {/* ─── Scene 2: The Rule (kinetic typography) ─── */}
        {ruleOp > 0 && (
          <SafeArea
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              opacity: ruleOp,
              zIndex: 15,
            }}
          >
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                lineHeight: 1.5,
                padding: "0 30px",
              }}
            >
              Antikörper gegen das,
            </div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                lineHeight: 1.5,
                display: "flex",
                alignItems: "baseline",
                gap: 12,
              }}
            >
              <span>was du</span>
              <span
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  color: BRAND.accent,
                  transform: `scale(${nichtScale})`,
                  opacity: nichtOp,
                  display: "inline-block",
                  textShadow: `0 0 30px ${BRAND.accent}60`,
                }}
              >
                NICHT
              </span>
              <span>hast.</span>
            </div>
          </SafeArea>
        )}

        {/* ─── Scene 3 + 4: Animated table ─── */}
        {tableVisible && (
          <SafeArea
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: 20,
              opacity: tableOp,
              zIndex: 10,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  padding: "6px 20px",
                  background: BIO_COLOR,
                  borderRadius: 20,
                  fontSize: 22,
                  fontWeight: 700,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Biologie
              </div>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "white",
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                AB0-Blutgruppen
              </div>
            </div>

            {/* Table grid — 4 columns */}
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: 4,
                background: "rgba(15, 23, 42, 0.6)",
                borderRadius: 20,
                padding: "12px 4px",
                border: `2px solid ${BIO_COLOR}40`,
              }}
            >
              {BLOOD_TYPES.map((bt, idx) => {
                const isActive = frame >= colStarts[idx] && frame < colEnds[idx];
                const isBuilt = frame >= colEnds[idx];
                return (
                  <BloodColumn
                    key={bt.group}
                    data={bt}
                    frame={frame}
                    fps={fps}
                    colStart={colStarts[idx]}
                    isActive={isActive}
                    isBuilt={isBuilt}
                  />
                );
              })}
            </div>

            {/* Merke line (scene 4) */}
            {merkeOp > 0 && (
              <div
                style={{
                  marginTop: 24,
                  padding: "14px 24px",
                  background: "rgba(15, 23, 42, 0.92)",
                  borderRadius: 14,
                  borderLeft: `4px solid ${BRAND.accent}`,
                  width: "100%",
                  opacity: merkeOp,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.45,
                    textAlign: "center",
                  }}
                >
                  Antigen auf der Zelle —{"\n"}
                  Antikörper im Plasma —{"\n"}
                  <span style={{ color: BRAND.accent }}>immer gegeneinander.</span>
                </div>
              </div>
            )}
          </SafeArea>
        )}

        {/* ─── Scene 5: CTA ─── */}
        {ctaOp > 0 && (
          <SafeArea
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
              opacity: ctaOp,
              zIndex: 25,
            }}
          >
            {/* Product shot: textbook image */}
            <div
              style={{
                width: "85%",
                borderRadius: 16,
                overflow: "hidden",
                border: `3px solid ${BIO_COLOR}`,
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                transform: `perspective(800px) rotateY(${interpolate(
                  frame,
                  [CTA_START, CTA_START + 20],
                  [-8, 0],
                  { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                )}deg)`,
              }}
            >
              <Img
                src={staticFile("bio-blutgruppen.jpg")}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* CTA text */}
            <div
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: "white",
                textAlign: "center",
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              medmaster.at
            </div>
            <div
              style={{
                padding: "12px 32px",
                background: BIO_COLOR,
                borderRadius: 14,
                fontSize: 24,
                fontWeight: 700,
                color: "white",
              }}
            >
              Link in Bio
            </div>
          </SafeArea>
        )}

        {/* ─── Subtitle bar (always visible when subtitle active) ─── */}
        {currentSub && (
          <div
            style={{
              position: "absolute",
              bottom: 400,
              left: 60,
              right: 60,
              zIndex: 50,
            }}
          >
            <div
              style={{
                background: "rgba(15, 23, 42, 0.92)",
                borderRadius: 14,
                padding: "14px 22px",
                borderLeft: `4px solid ${BIO_COLOR}`,
              }}
            >
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.45,
                  textAlign: "center",
                  textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  whiteSpace: "pre-line",
                }}
              >
                {currentSub.text}
              </div>
            </div>
          </div>
        )}
      </BrandedBackground>
    </AbsoluteFill>
  );
};
