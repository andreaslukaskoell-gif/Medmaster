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

type ImmunantwortExplainerProps = {
  audioSrc: string;
  subtitles: SubtitleSegment[];
};

/* ─── Constants ─── */

const BIO_COLOR = SUBJECT_COLORS.Biologie;

type DefenseItem = {
  name: string;
  detail: string;
  color: string;
};

const INNATE_ITEMS: DefenseItem[] = [
  { name: "Haut & Schleimhaut", detail: "Physikalische Barriere", color: "#0ea5e9" },
  { name: "Makrophagen", detail: "Phagozytose + Antigenpräsentation", color: "#06b6d4" },
  { name: "NK-Zellen", detail: "Töten bei Missing Self", color: "#14b8a6" },
  { name: "Komplement", detail: "C3b, C5a, MAC", color: "#10b981" },
];

const ADAPTIVE_ITEMS: DefenseItem[] = [
  { name: "T-Helferzellen (CD4⁺)", detail: "Koordinieren die Immunantwort", color: "#f59e0b" },
  { name: "Zytotox. T-Zellen (CD8⁺)", detail: "Töten infizierte Zellen", color: "#ef4444" },
  { name: "B-Zellen → Plasmazellen", detail: "Produzieren Antikörper", color: "#ec4899" },
  { name: "Gedächtniszellen", detail: "Schnelle Sekundärantwort", color: "#a855f7" },
];

/* ─── Scene timing (30fps) — synced to actual TTS ─── */

// Scene 1: Hook (seg 0–2: 0–246)
const HOOK_FALSCH_HIT = 96;
const HOOK_END = 255;

// Scene 2: Two systems overview (seg 3: 270–438)
const OVERVIEW_START = 258;
const OVERVIEW_END = 450;

// Scene 3: Innate defense build (seg 4–8: 462–1008)
const INNATE_START = 455;
const INNATE_ITEM_STARTS = [462, 629, 743, 901]; // Barriere, Makrophagen, NK, Komplement
const _INNATE_END = 1015;

// Scene 4: Adaptive defense build (seg 9–12: 1024–1563)
const ADAPTIVE_START = 1018;
const ADAPTIVE_ITEM_STARTS = [1024, 1147, 1325, 1451]; // T-Helfer, Zytotox, B-Zellen, Gedächtnis
const ADAPTIVE_END = 1575;

// Scene 5: Merke (seg 13: 1587–1743)
const MERKE_START = 1578;
const MERKE_END = 1752;

// Scene 6: CTA (seg 14: 1767–1829)
const CTA_START = 1755;

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

function sceneFade(frame: number, start: number, end: number): number {
  return Math.min(fadeIn(frame, start, 12), fadeOut(frame, end - 12, 12));
}

/* ─── Defense item row ─── */

const DefenseRow: React.FC<{
  item: DefenseItem;
  frame: number;
  fps: number;
  startFrame: number;
  visible: boolean;
  compact: boolean;
}> = ({ item, frame, fps, startFrame, visible, compact }) => {
  if (!visible) return null;

  const scale = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 10, stiffness: 200 },
  });
  const detailOp = fadeIn(frame, startFrame + 12, 10);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: compact ? "6px 12px" : "10px 16px",
        borderRadius: 12,
        background: `${item.color}15`,
        borderLeft: `4px solid ${item.color}`,
        transform: `scale(${scale})`,
        width: "100%",
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          background: item.color,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: compact ? 18 : 22,
            fontWeight: 700,
            color: "white",
          }}
        >
          {item.name}
        </div>
        {!compact && (
          <div
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: BRAND.textMuted,
              opacity: detailOp,
            }}
          >
            {item.detail}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Section panel ─── */

const SectionPanel: React.FC<{
  title: string;
  subtitle: string;
  color: string;
  items: DefenseItem[];
  itemStarts: number[];
  frame: number;
  fps: number;
  visible: boolean;
  compact: boolean;
}> = ({ title, subtitle, color, items, itemStarts, frame, fps, visible, compact }) => {
  if (!visible) return null;

  return (
    <div
      style={{
        width: "100%",
        background: "rgba(15, 23, 42, 0.5)",
        borderRadius: 16,
        padding: compact ? "10px 12px" : "14px 16px",
        border: `2px solid ${color}30`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: compact ? 6 : 10,
        }}
      >
        <div
          style={{
            padding: "4px 14px",
            background: color,
            borderRadius: 10,
            fontSize: compact ? 16 : 18,
            fontWeight: 700,
            color: "white",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: compact ? 14 : 16,
            fontWeight: 600,
            color: BRAND.textMuted,
          }}
        >
          {subtitle}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: compact ? 4 : 8,
        }}
      >
        {items.map((item, idx) => (
          <DefenseRow
            key={item.name}
            item={item}
            frame={frame}
            fps={fps}
            startFrame={itemStarts[idx]}
            visible={frame >= itemStarts[idx]}
            compact={compact}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── Main composition ─── */

export const ImmunantwortExplainer: React.FC<ImmunantwortExplainerProps> = ({
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

  /* ─── Scene 2: Overview ─── */
  const overviewOp = sceneFade(frame, OVERVIEW_START, OVERVIEW_END);

  /* ─── Scene 3+4: Defense panels ─── */
  const panelsVisible = frame >= INNATE_START - 10;
  const panelsOp = fadeIn(frame, INNATE_START - 10, 15);
  const bothBuilt = frame >= ADAPTIVE_END;

  /* ─── Scene 5: Merke ─── */
  const merkeOp = sceneFade(frame, MERKE_START, MERKE_END + 30);

  /* ─── Scene 6: CTA ─── */
  const ctaOp = fadeIn(frame, CTA_START, 15);

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
              NK-Zellen gehören zur{"\n"}erworbenen Immunität.
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

            <div style={{ width: 80, height: 4, backgroundColor: BIO_COLOR, borderRadius: 2 }} />
          </SafeArea>
        )}

        {/* ─── Scene 2: Overview ─── */}
        {overviewOp > 0 && (
          <SafeArea
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              opacity: overviewOp,
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
              Zwei Systeme.{"\n"}Angeboren und erworben.
            </div>
            <div
              style={{ fontSize: 28, fontWeight: 600, color: BRAND.textMuted, textAlign: "center" }}
            >
              Verschiedene Zellen. Verschiedene Aufgaben.
            </div>
          </SafeArea>
        )}

        {/* ─── Scene 3+4: Defense panels ─── */}
        {panelsVisible && (
          <SafeArea
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: 10,
              gap: 12,
              opacity: panelsOp,
              zIndex: 10,
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
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
                  fontSize: 26,
                  fontWeight: 800,
                  color: "white",
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                Immunantwort
              </div>
            </div>

            {/* Innate panel */}
            <SectionPanel
              title="Angeboren"
              subtitle="sofort, unspezifisch"
              color="#0ea5e9"
              items={INNATE_ITEMS}
              itemStarts={INNATE_ITEM_STARTS}
              frame={frame}
              fps={fps}
              visible={frame >= INNATE_START}
              compact={bothBuilt}
            />

            {/* Adaptive panel */}
            <SectionPanel
              title="Erworben"
              subtitle="langsam, hochspezifisch"
              color="#f59e0b"
              items={ADAPTIVE_ITEMS}
              itemStarts={ADAPTIVE_ITEM_STARTS}
              frame={frame}
              fps={fps}
              visible={frame >= ADAPTIVE_START}
              compact={bothBuilt}
            />

            {/* Merke */}
            {merkeOp > 0 && (
              <div
                style={{
                  marginTop: 12,
                  padding: "12px 20px",
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
                  Angeboren = schnell, kein Gedächtnis{"\n"}
                  Erworben = langsam, mit <span style={{ color: BRAND.accent }}>Gedächtnis</span>
                </div>
              </div>
            )}
          </SafeArea>
        )}

        {/* ─── Scene 6: CTA ─── */}
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
                border: `3px solid ${BIO_COLOR}`,
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                transform: `perspective(800px) rotateY(${interpolate(frame, [CTA_START, CTA_START + 20], [-8, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}deg)`,
              }}
            >
              <Img
                src={staticFile("bio-immunantwort.jpg")}
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

        {/* ─── Subtitles ─── */}
        {currentSub && (
          <div style={{ position: "absolute", bottom: 400, left: 60, right: 60, zIndex: 50 }}>
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
