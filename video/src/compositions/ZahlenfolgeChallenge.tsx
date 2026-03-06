import React from "react";
import {
  AbsoluteFill,
  Sequence,
  spring,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BrandedBackground } from "../shared/BrandedBackground";
import { SafeArea } from "../shared/SafeArea";
import { HookText } from "../shared/HookText";
import { CountdownRing } from "../shared/CountdownRing";
import { AnimatedText } from "../shared/AnimatedText";
import { TripleCTA } from "../shared/TripleCTA";
import { PollBar } from "../shared/PollBar";
import { BRAND } from "../shared/brand";
import type { ZahlenfolgeProps } from "../types";

const NumberBox: React.FC<{
  value: number | string;
  index: number;
  isQuestion?: boolean;
}> = ({ value, index, isQuestion }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const drop = spring({ frame: frame - index * 5, fps, config: { damping: 10, stiffness: 180 } });
  const pulse = isQuestion
    ? interpolate(Math.sin((frame * Math.PI) / 30), [-1, 1], [0.95, 1.05])
    : 1;

  return (
    <div
      style={{
        width: 120,
        height: 120,
        borderRadius: 22,
        background: isQuestion ? `${BRAND.accent}33` : "rgba(255,255,255,0.08)",
        border: `3px solid ${isQuestion ? BRAND.accent : "rgba(255,255,255,0.2)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: isQuestion ? 52 : 44,
        fontWeight: 800,
        color: isQuestion ? BRAND.accent : "white",
        transform: `scale(${drop * pulse})`,
      }}
    >
      {value}
    </div>
  );
};

// Hook (0–1.5s = 0–45f)
const HookScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
      <div style={{ fontSize: 80 }}>🔢</div>
      <HookText text="Findest du das Muster?" fontSize={60} />
      <PollBar letters={["💬"]} prompt="Kommentiere deine Lösung!" />
    </SafeArea>
  </BrandedBackground>
);

// Puzzle (1.5–7s = 45–210f)
const PuzzleScene: React.FC<ZahlenfolgeProps> = ({ sequence }) => {
  const display = [...sequence.slice(0, -1), "?"];
  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 40 }}>
        <div style={{ fontSize: 38, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>
          Welche Zahl fehlt?
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          {display.map((v, i) => (
            <NumberBox key={i} value={v} index={i} isQuestion={i === display.length - 1} />
          ))}
        </div>
        <div
          style={{
            padding: "10px 24px",
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            fontSize: 22,
            color: BRAND.textMuted,
          }}
        >
          KFF Zahlenfolgen
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Countdown (7–10s = 210–300f)
const CountdownScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
      <div style={{ fontSize: 32, color: "rgba(255,255,255,0.5)" }}>Auflösung in...</div>
      <CountdownRing durationFrames={90} size={200} />
    </SafeArea>
  </BrandedBackground>
);

// Reveal (10–12s = 300–360f)
const RevealScene: React.FC<ZahlenfolgeProps> = ({ sequence, answer, rule }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 8, stiffness: 200 } });

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 30 }}>
        <div style={{ fontSize: 36, color: BRAND.success, fontWeight: 700 }}>✅ Lösung</div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: BRAND.success,
            transform: `scale(${pop})`,
          }}
        >
          {answer}
        </div>
        <AnimatedText
          text={rule}
          fontSize={34}
          color="rgba(255,255,255,0.7)"
          fontWeight={500}
          delay={8}
        />
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {sequence.map((v, i) => (
            <NumberBox key={i} value={v} index={0} />
          ))}
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// CTA (12–15s = 360–450f)
const CTAScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
      <div
        style={{
          fontSize: 44,
          fontWeight: 800,
          color: "white",
          textAlign: "center",
          textShadow: "0 2px 8px rgba(0,0,0,0.4)",
        }}
      >
        KFF-Training mit Generator
      </div>
      <TripleCTA
        commentText="Hattest du es richtig? ✅ oder ❌"
        shareText="Schick an deinen MedAT-Lernpartner!"
        saveText="Speichern zum Üben!"
      />
    </SafeArea>
  </BrandedBackground>
);

// 15s = 450 frames
export const ZahlenfolgeChallenge: React.FC<ZahlenfolgeProps> = (props) => (
  <AbsoluteFill>
    <Sequence from={0} durationInFrames={45}>
      <HookScene />
    </Sequence>
    <Sequence from={45} durationInFrames={165}>
      <PuzzleScene {...props} />
    </Sequence>
    <Sequence from={210} durationInFrames={90}>
      <CountdownScene />
    </Sequence>
    <Sequence from={300} durationInFrames={60}>
      <RevealScene {...props} />
    </Sequence>
    <Sequence from={360} durationInFrames={90}>
      <CTAScene />
    </Sequence>
  </AbsoluteFill>
);
