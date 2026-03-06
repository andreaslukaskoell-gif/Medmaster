import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BrandedBackground } from "../shared/BrandedBackground";
import { SafeArea } from "../shared/SafeArea";
import { HookText } from "../shared/HookText";
import { CountdownRing } from "../shared/CountdownRing";
import { PollBar } from "../shared/PollBar";
import { TripleCTA } from "../shared/TripleCTA";
import { BRAND } from "../shared/brand";
import type { FigurenProps } from "../types";

const LETTERS = ["A", "B", "C", "D", "E"];

// Simple geometric shape renderer
const Shape: React.FC<{
  type: string;
  size: number;
  color: string;
  delay?: number;
}> = ({ type, size, color, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame: frame - delay, fps, config: { damping: 10, stiffness: 180 } });

  const shapeStyle: React.CSSProperties = {
    width: size,
    height: size,
    transform: `scale(${scale})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const shapeMap: Record<string, React.CSSProperties> = {
    circle: { ...shapeStyle, borderRadius: "50%", background: color },
    square: { ...shapeStyle, borderRadius: 8, background: color },
    triangle: { ...shapeStyle, width: 0, height: 0, background: "transparent", borderLeft: `${size / 2}px solid transparent`, borderRight: `${size / 2}px solid transparent`, borderBottom: `${size}px solid ${color}` },
    diamond: { ...shapeStyle, background: color, transform: `scale(${scale}) rotate(45deg)`, borderRadius: 6 },
    pentagon: { ...shapeStyle, borderRadius: "50%", background: color, clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" },
    hexagon: { ...shapeStyle, background: color, clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" },
  };

  return <div style={shapeMap[type] || shapeMap.square} />;
};

// Hook (0–1.5s = 0–45f)
const HookScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 24 }}>
      <div style={{ fontSize: 80 }}>🧩</div>
      <HookText text="Welche Figur passt?" fontSize={58} />
      <div style={{ fontSize: 34, color: BRAND.accent, fontWeight: 700 }}>
        KFF Figuren zusammensetzen
      </div>
    </SafeArea>
  </BrandedBackground>
);

// Puzzle display (1.5–7s = 45–210f)
const PuzzleScene: React.FC<FigurenProps> = ({ pieces, options, targetShape }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", gap: 24 }}>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: 2 }}>
          DIESE TEILE ERGEBEN...
        </div>
        <div style={{
          display: "flex", gap: 20, padding: "30px 40px",
          background: "rgba(255,255,255,0.06)", borderRadius: 24,
          border: "2px solid rgba(255,255,255,0.15)", justifyContent: "center", flexWrap: "wrap",
        }}>
          {pieces.map((p, i) => (
            <Shape key={i} type={p} size={100} color={`${BRAND.accent}88`} delay={i * 5} />
          ))}
        </div>
        <div style={{ fontSize: 36, color: "white", fontWeight: 700, marginTop: 12 }}>
          Welche Figur?
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
          {options.map((o, i) => {
            const pop = spring({ frame: frame - 20 - i * 5, fps, config: { damping: 12, stiffness: 200 } });
            return (
              <div key={i} style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                padding: "20px 24px", background: "rgba(255,255,255,0.06)",
                borderRadius: 18, border: "2px solid rgba(255,255,255,0.12)",
                transform: `scale(${pop})`, minWidth: 140,
              }}>
                <Shape type={o} size={80} color="rgba(255,255,255,0.3)" delay={0} />
                <div style={{ fontSize: 28, fontWeight: 800, color: BRAND.accent }}>{LETTERS[i]}</div>
              </div>
            );
          })}
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Poll (7–8.5s = 210–255f)
const PollScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 30 }}>
      <PollBar prompt="Welche Figur passt? Kommentiere!" />
    </SafeArea>
  </BrandedBackground>
);

// Countdown (8.5–11s = 255–330f)
const CountdownScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
      <div style={{ fontSize: 32, color: "rgba(255,255,255,0.5)" }}>Auflösung in...</div>
      <CountdownRing durationFrames={75} size={200} />
    </SafeArea>
  </BrandedBackground>
);

// Reveal (11–14s = 330–420f)
const RevealScene: React.FC<FigurenProps> = ({ correctOption, correctIndex }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 8, stiffness: 200 } });

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 30 }}>
        <div style={{ fontSize: 36, color: BRAND.success, fontWeight: 700 }}>✅ Lösung</div>
        <div style={{
          padding: 40, background: "rgba(34,197,94,0.1)", borderRadius: 28,
          border: `3px solid ${BRAND.success}`, transform: `scale(${pop})`,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
        }}>
          <Shape type={correctOption} size={160} color={BRAND.success} delay={0} />
          <div style={{ fontSize: 52, fontWeight: 900, color: BRAND.success }}>
            {LETTERS[correctIndex]}
          </div>
        </div>
        <div style={{
          fontSize: 32, color: "rgba(255,255,255,0.6)", textAlign: "center",
          opacity: interpolate(frame, [20, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          Die Teile ergeben zusammen diese Figur!
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// CTA (14–17s = 420–510f)
const CTAScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
      <div style={{ fontSize: 44, fontWeight: 800, color: "white", textAlign: "center", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
        Figuren-Training im Generator
      </div>
      <TripleCTA
        commentText="Hattest du es richtig? A–E!"
        shareText="Schick an deinen MedAT-Lernpartner!"
        saveText="Speichern zum Üben!"
      />
    </SafeArea>
  </BrandedBackground>
);

// 17s = 510 frames
export const FigurenChallenge: React.FC<FigurenProps> = (props) => (
  <AbsoluteFill>
    <Sequence from={0} durationInFrames={45}><HookScene /></Sequence>
    <Sequence from={45} durationInFrames={165}><PuzzleScene {...props} /></Sequence>
    <Sequence from={210} durationInFrames={45}><PollScene /></Sequence>
    <Sequence from={255} durationInFrames={75}><CountdownScene /></Sequence>
    <Sequence from={330} durationInFrames={90}><RevealScene {...props} /></Sequence>
    <Sequence from={420} durationInFrames={90}><CTAScene /></Sequence>
  </AbsoluteFill>
);
