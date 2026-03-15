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

type ProteinstrukturExplainerProps = {
  audioSrc: string;
  subtitles: SubtitleSegment[];
};

/* ─── Constants ─── */

const CHEM_COLOR = SUBJECT_COLORS.Chemie;

type ProteinLevel = {
  level: string;
  name: string;
  stabilizer: string;
  example: string;
  icon: string; // emoji-like character for visual
  color: string;
};

const LEVELS: ProteinLevel[] = [
  {
    level: "1°",
    name: "Primärstruktur",
    stabilizer: "Peptidbindungen",
    example: "Aminosäuresequenz",
    icon: "━━━",
    color: "#3b82f6", // blue — linear chain
  },
  {
    level: "2°",
    name: "Sekundärstruktur",
    stabilizer: "H-Brücken im Rückgrat",
    example: "α-Helix, β-Faltblatt",
    icon: "〰️",
    color: "#10b981", // green — helix/sheet
  },
  {
    level: "3°",
    name: "Tertiärstruktur",
    stabilizer: "Seitenketten-WW",
    example: "Disulfidbrücken, hydrophob",
    icon: "🔮",
    color: "#f59e0b", // amber — 3D folding
  },
  {
    level: "4°",
    name: "Quartärstruktur",
    stabilizer: "Untereinheiten",
    example: "Hämoglobin (α₂β₂)",
    icon: "🔗",
    color: "#ef4444", // red — multimerx
  },
];

/* ─── Scene timing (30fps) — synced to actual TTS output ─── */

// Scene 1: Hook (seg 0–2: 0–226)
const HOOK_FALSCH_HIT = 85; // "Falsch."
const HOOK_END = 235;

// Scene 2: Rule (seg 3: 250–385)
const RULE_START = 238;
const RULE_END = 400;

// Scene 3: Level stack (seg 4–11)
const LVL_STARTS = [400, 708, 1005, 1353]; // Primär, Sekundär, Tertiär, Quartär
const LVL_ENDS = [708, 1005, 1353, 1610];

// Scene 4: Merke (seg 12: 1620–1791)
const MERKE_START = 1612;
const MERKE_END = 1800;

// Scene 5: CTA (seg 13: 1815–1877)
const CTA_START = 1805;

/* ─── Helpers ─── */

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
  return Math.min(fadeIn(frame, sceneStart, 12), fadeOut(frame, sceneEnd - 12, 12));
}

/* ─── Level card component ─── */

const LevelCard: React.FC<{
  data: ProteinLevel;
  frame: number;
  fps: number;
  startFrame: number;
  isActive: boolean;
  isBuilt: boolean;
  compact: boolean;
}> = ({ data, frame, fps, startFrame, isActive, isBuilt, compact }) => {
  const visible = isActive || isBuilt;
  if (!visible) return null;

  const entryScale = isBuilt
    ? 1
    : spring({ frame: frame - startFrame, fps, config: { damping: 10, stiffness: 180 } });

  const detailOp = isBuilt ? 1 : fadeIn(frame, startFrame + 15, 12);

  const glowOp = isActive
    ? interpolate(frame, [startFrame, startFrame + 20], [0, 0.5], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: compact ? "10px 16px" : "14px 20px",
        borderRadius: 16,
        background: isActive ? `${data.color}20` : "rgba(15, 23, 42, 0.5)",
        border: `2px solid ${isActive ? data.color : `${data.color}40`}`,
        transform: `scale(${entryScale})`,
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Active glow */}
      {glowOp > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at left, ${data.color}30, transparent)`,
            opacity: glowOp,
          }}
        />
      )}

      {/* Level badge */}
      <div
        style={{
          width: compact ? 50 : 60,
          height: compact ? 50 : 60,
          borderRadius: 14,
          background: data.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: compact ? 22 : 26,
          fontWeight: 900,
          color: "white",
          flexShrink: 0,
        }}
      >
        {data.level}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: compact ? 22 : 26,
            fontWeight: 800,
            color: "white",
            marginBottom: 2,
          }}
        >
          {data.name}
        </div>
        {!compact && (
          <div style={{ opacity: detailOp }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: data.color,
                marginBottom: 2,
              }}
            >
              {data.stabilizer}
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: BRAND.textMuted,
              }}
            >
              {data.example}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Main composition ─── */

export const ProteinstrukturExplainer: React.FC<ProteinstrukturExplainerProps> = ({
  audioSrc,
  subtitles,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const currentSub = subtitles.find((s) => frame >= s.startFrame && frame <= s.endFrame);

  /* ─── Scene 1: Hook ─── */
  const hookVisible = frame < HOOK_END + 15;
  const hookOp = Math.min(fadeIn(frame, 5, 12), fadeOut(frame, HOOK_END - 20, 15));

  const falschScale = spring({
    frame: frame - HOOK_FALSCH_HIT,
    fps,
    config: { damping: 6, stiffness: 300 },
  });
  const falschOp = fadeIn(frame, HOOK_FALSCH_HIT, 3);

  const shakeX =
    frame >= HOOK_FALSCH_HIT && frame < HOOK_FALSCH_HIT + 6
      ? Math.sin((frame - HOOK_FALSCH_HIT) * 8) * 8
      : 0;

  /* ─── Scene 2: The rule ─── */
  const ruleOp = sceneFade(frame, RULE_START, RULE_END);

  /* ─── Scene 3: Level stack ─── */
  const stackVisible = frame >= LVL_STARTS[0] - 10;
  const stackOp = fadeIn(frame, LVL_STARTS[0] - 10, 15);

  /* ─── Scene 4: Merke ─── */
  const merkeOp = sceneFade(frame, MERKE_START, MERKE_END + 30);

  /* ─── Scene 5: CTA ─── */
  const ctaOp = fadeIn(frame, CTA_START, 15);

  // Are we in "full stack" mode (all 4 built)?
  const allBuilt = frame >= LVL_ENDS[3];

  return (
    <AbsoluteFill>
      <BrandedBackground>
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
              opacity: hookOp,
              transform: `translateX(${shakeX}px)`,
              zIndex: 20,
            }}
          >
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

            <div
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "white",
                textAlign: "center",
                lineHeight: 1.35,
                padding: "0 20px",
                textShadow: "0 3px 12px rgba(0,0,0,0.5)",
              }}
            >
              H-Brücken stabilisieren{"\n"}die Tertiärstruktur.
            </div>

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

            <div
              style={{
                width: 80,
                height: 4,
                backgroundColor: CHEM_COLOR,
                borderRadius: 2,
              }}
            />
          </SafeArea>
        )}

        {/* ─── Scene 2: The Rule ─── */}
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
                fontSize: 38,
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                lineHeight: 1.5,
                padding: "0 30px",
              }}
            >
              Jede Ebene hat{"\n"}ihre eigene Stabilisierung.
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: BRAND.textMuted,
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Vier Ebenen. Vier Regeln.
            </div>
          </SafeArea>
        )}

        {/* ─── Scene 3 + 4: Level stack ─── */}
        {stackVisible && (
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
              opacity: stackOp,
              zIndex: 10,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  padding: "6px 20px",
                  background: CHEM_COLOR,
                  borderRadius: 20,
                  fontSize: 22,
                  fontWeight: 700,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Chemie
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "white",
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                Proteinstruktur
              </div>
            </div>

            {/* 4 level cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                width: "100%",
              }}
            >
              {LEVELS.map((lvl, idx) => {
                const isActive = frame >= LVL_STARTS[idx] && frame < LVL_ENDS[idx];
                const isBuilt = frame >= LVL_ENDS[idx];
                return (
                  <LevelCard
                    key={lvl.level}
                    data={lvl}
                    frame={frame}
                    fps={fps}
                    startFrame={LVL_STARTS[idx]}
                    isActive={isActive}
                    isBuilt={isBuilt}
                    compact={allBuilt}
                  />
                );
              })}
            </div>

            {/* Merke (scene 4) */}
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
                    fontSize: 24,
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.45,
                    textAlign: "center",
                  }}
                >
                  Sequenz → Rückgrat → Seitenketten →{"\n"}
                  <span style={{ color: BRAND.accent }}>Untereinheiten</span>
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
            <div
              style={{
                width: "85%",
                borderRadius: 16,
                overflow: "hidden",
                border: `3px solid ${CHEM_COLOR}`,
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
                src={staticFile("ch-proteinstruktur.jpg")}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>

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
                background: CHEM_COLOR,
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

        {/* ─── Subtitles ─── */}
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
                borderLeft: `4px solid ${CHEM_COLOR}`,
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
