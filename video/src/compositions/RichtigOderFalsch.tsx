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
import { AnimatedText } from "../shared/AnimatedText";
import { TripleCTA } from "../shared/TripleCTA";
import { PollBar } from "../shared/PollBar";
import { BRAND } from "../shared/brand";
import type { RichtigOderFalschProps } from "../types";

// Intro (0–2.5s = 0–75f)
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 24 }}>
        <HookText text="Richtig oder Falsch?" fontSize={64} />
        <div style={{ fontSize: 38, color: BRAND.accent, fontWeight: 600 }}>3 MedAT-Aussagen</div>
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 30,
            opacity: interpolate(frame, [15, 30], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div
            style={{
              padding: "16px 36px",
              borderRadius: 18,
              background: "rgba(34,197,94,0.2)",
              border: `2px solid ${BRAND.success}`,
              fontSize: 32,
              color: "#4ade80",
              fontWeight: 700,
            }}
          >
            ✅ Richtig
          </div>
          <div
            style={{
              padding: "16px 36px",
              borderRadius: 18,
              background: "rgba(239,68,68,0.2)",
              border: `2px solid ${BRAND.error}`,
              fontSize: 32,
              color: "#f87171",
              fontWeight: 700,
            }}
          >
            ❌ Falsch
          </div>
        </div>
        <PollBar letters={["✅", "❌"]} prompt="Kommentiere bei jeder Aussage!" />
      </SafeArea>
    </BrandedBackground>
  );
};

// Difficulty badge
const DifficultyBadge: React.FC<{ level: number }> = ({ level }) => {
  const labels = ["Leicht", "Mittel", "Schwer"];
  const colors = [BRAND.success, BRAND.accent, BRAND.error];
  return (
    <div
      style={{
        padding: "8px 20px",
        borderRadius: 12,
        background: `${colors[level]}22`,
        border: `2px solid ${colors[level]}`,
        fontSize: 22,
        color: colors[level],
        fontWeight: 700,
      }}
    >
      {labels[level]}
    </div>
  );
};

// Statement question
const StatementScene: React.FC<{ text: string; index: number }> = ({ text, index }) => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 22, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
          RICHTIG ODER FALSCH?
        </div>
        <DifficultyBadge level={index} />
      </div>
      <div
        style={{
          padding: "44px 36px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: 28,
          border: "2px solid rgba(255,255,255,0.15)",
          width: "100%",
        }}
      >
        <AnimatedText
          text={`\u201E${text}\u201C`}
          fontSize={44}
          fontWeight={700}
          delay={3}
          lineHeight={1.4}
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
        />
      </div>
      <AnimatedText
        text="🤔 Was denkst du?"
        fontSize={32}
        color="rgba(255,255,255,0.3)"
        delay={15}
      />
    </SafeArea>
  </BrandedBackground>
);

// Statement reveal with bounce
const RevealScene: React.FC<{ text: string; correct: boolean }> = ({ text, correct }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bounce = spring({ frame, fps, config: { damping: 6, stiffness: 200 } });
  const color = correct ? BRAND.success : BRAND.error;
  const icon = correct ? "✅" : "❌";
  const label = correct ? "RICHTIG!" : "FALSCH!";

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
        <div style={{ fontSize: 90, transform: `scale(${bounce})` }}>{icon}</div>
        <div
          style={{ fontSize: 60, fontWeight: 900, color, textShadow: "0 4px 12px rgba(0,0,0,0.4)" }}
        >
          {label}
        </div>
        <div
          style={{
            padding: 36,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 22,
            width: "100%",
          }}
        >
          <div
            style={{ fontSize: 36, color: "white", textAlign: "center", lineHeight: 1.4 }}
          >{`\u201E${text}\u201C`}</div>
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Score + CTA
const OutroScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 16 }}>
      <HookText text="Wie viele hattest du richtig?" fontSize={44} />
      <TripleCTA
        commentText="Kommentiere: 3/3, 2/3, 1/3 oder 0/3!"
        shareText="Schick an deinen MedAT-Lernpartner!"
        saveText="Speichern für mehr Fragen!"
      />
    </SafeArea>
  </BrandedBackground>
);

// 25s = 750 frames
// Intro 2.5s + 3×(question 3.5s + reveal 2s) + outro 6s = 25s
export const RichtigOderFalsch: React.FC<RichtigOderFalschProps> = ({ statements }) => {
  const stmts = statements.slice(0, 3);
  const introEnd = 75; // 2.5s
  const perQ = 105; // 3.5s
  const perR = 60; // 2s
  const perStmt = perQ + perR; // 5.5s

  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={introEnd}>
        <IntroScene />
      </Sequence>
      {stmts.map((s, i) => (
        <React.Fragment key={i}>
          <Sequence from={introEnd + i * perStmt} durationInFrames={perQ}>
            <StatementScene text={s.text} index={i} />
          </Sequence>
          <Sequence from={introEnd + i * perStmt + perQ} durationInFrames={perR}>
            <RevealScene text={s.text} correct={s.correct} />
          </Sequence>
        </React.Fragment>
      ))}
      <Sequence from={introEnd + stmts.length * perStmt} durationInFrames={180}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
