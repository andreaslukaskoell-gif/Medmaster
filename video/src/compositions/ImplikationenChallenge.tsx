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
import { AnimatedText } from "../shared/AnimatedText";
import { PollBar } from "../shared/PollBar";
import { TripleCTA } from "../shared/TripleCTA";
import { BRAND } from "../shared/brand";
import type { ImplikationenProps } from "../types";

const LETTERS = ["A", "B", "C", "D", "E"];

// Hook (0–1.5s = 0–45f)
const HookScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 24 }}>
      <div style={{ fontSize: 80 }}>🧠</div>
      <HookText text="Welcher Schluss ist zwingend?" fontSize={56} />
      <div style={{ fontSize: 36, color: BRAND.accent, fontWeight: 700 }}>
        KFF Implikationen
      </div>
    </SafeArea>
  </BrandedBackground>
);

// Premises + Options (1.5–8s = 45–240f)
const PremiseScene: React.FC<ImplikationenProps> = ({ premise1, premise2, options }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <BrandedBackground>
      <SafeArea style={{ gap: 20 }}>
        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: 2 }}>
          PRÄMISSEN
        </div>
        <div style={{
          padding: "28px 32px", background: "rgba(255,255,255,0.08)", borderRadius: 22,
          border: "2px solid rgba(255,255,255,0.2)",
        }}>
          <AnimatedText text={`\u201E${premise1}\u201C`} fontSize={38} fontWeight={700} delay={0} lineHeight={1.4} />
          <div style={{ height: 16 }} />
          <AnimatedText text={`\u201E${premise2}\u201C`} fontSize={38} fontWeight={700} delay={8} lineHeight={1.4} />
        </div>
        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: 2, marginTop: 12 }}>
          SCHLUSSFOLGERUNG
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, justifyContent: "center" }}>
          {options.map((o, i) => {
            const scale = spring({
              frame: frame - 15 - i * 4,
              fps,
              config: { damping: 12, stiffness: 200 },
            });
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 24px", background: "rgba(255,255,255,0.06)",
                borderRadius: 16, border: "2px solid rgba(255,255,255,0.12)",
                transform: `scale(${scale})`,
              }}>
                <div style={{
                  minWidth: 52, height: 52, borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 28, color: BRAND.accent,
                  background: `${BRAND.accent}22`,
                }}>
                  {LETTERS[i]}
                </div>
                <div style={{ fontSize: 30, color: "white", fontWeight: 500, flex: 1, lineHeight: 1.3 }}>
                  {o}
                </div>
              </div>
            );
          })}
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Poll (8–10s = 240–300f)
const PollScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 30 }}>
      <PollBar prompt="Welche Schlussfolgerung ist zwingend?" />
    </SafeArea>
  </BrandedBackground>
);

// Countdown (10–13s = 300–390f)
const CountdownScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
      <div style={{ fontSize: 32, color: "rgba(255,255,255,0.5)" }}>Auflösung in...</div>
      <CountdownRing durationFrames={90} size={200} />
    </SafeArea>
  </BrandedBackground>
);

// Reveal (13–18s = 390–540f)
const RevealScene: React.FC<ImplikationenProps> = ({ premise1, premise2, options, correctAnswer, explanation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 8, stiffness: 200 } });

  return (
    <BrandedBackground>
      <SafeArea style={{ gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: "white" }}>MedMaster</div>
          <div style={{ padding: "6px 16px", borderRadius: 14, background: BRAND.success, color: "white", fontSize: 18, fontWeight: 700 }}>
            ✅ Auflösung
          </div>
        </div>
        <div style={{
          padding: "20px 24px", background: "rgba(255,255,255,0.06)", borderRadius: 18,
          border: "2px solid rgba(255,255,255,0.15)", fontSize: 30, color: "rgba(255,255,255,0.7)", lineHeight: 1.4,
        }}>
          {premise1} {premise2}
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 16, padding: "20px 24px",
          background: "rgba(34,197,94,0.15)", borderRadius: 18,
          border: `2px solid ${BRAND.success}`, transform: `scale(${pop})`,
        }}>
          <div style={{
            minWidth: 52, height: 52, borderRadius: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 28, color: BRAND.success,
            background: "rgba(34,197,94,0.2)",
          }}>
            {LETTERS[correctAnswer]}
          </div>
          <div style={{ fontSize: 32, color: "#4ade80", fontWeight: 700, flex: 1, lineHeight: 1.3 }}>
            {options[correctAnswer]}
          </div>
          <div style={{ fontSize: 40 }}>✅</div>
        </div>
        <div style={{
          padding: "16px 24px", background: "rgba(34,197,94,0.08)", borderRadius: 14,
          border: "1px solid rgba(34,197,94,0.2)", marginTop: 8, flex: 1,
          opacity: interpolate(frame, [20, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          <div style={{ fontSize: 24, color: "#86efac", lineHeight: 1.5 }}>{explanation}</div>
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// CTA (18–22s = 540–660f)
const CTAScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
      <div style={{ fontSize: 44, fontWeight: 800, color: "white", textAlign: "center", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
        KFF-Training mit Generator
      </div>
      <TripleCTA
        commentText="Hattest du es richtig? A–E!"
        shareText="Schick an deinen MedAT-Lernpartner!"
        saveText="Speichern zum Üben!"
      />
    </SafeArea>
  </BrandedBackground>
);

// 22s = 660 frames
export const ImplikationenChallenge: React.FC<ImplikationenProps> = (props) => (
  <AbsoluteFill>
    <Sequence from={0} durationInFrames={45}><HookScene /></Sequence>
    <Sequence from={45} durationInFrames={195}><PremiseScene {...props} /></Sequence>
    <Sequence from={240} durationInFrames={60}><PollScene /></Sequence>
    <Sequence from={300} durationInFrames={90}><CountdownScene /></Sequence>
    <Sequence from={390} durationInFrames={150}><RevealScene {...props} /></Sequence>
    <Sequence from={540} durationInFrames={120}><CTAScene /></Sequence>
  </AbsoluteFill>
);
