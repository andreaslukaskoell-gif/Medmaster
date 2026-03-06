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
import { TripleCTA } from "../shared/TripleCTA";
import { PollBar } from "../shared/PollBar";
import { BRAND } from "../shared/brand";
import type { WortRaetselProps } from "../types";

const LetterTile: React.FC<{ letter: string; index: number }> = ({ letter, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rotateX = interpolate(
    spring({ frame: frame - index * 5, fps, config: { damping: 10, stiffness: 150 } }),
    [0, 1],
    [90, 0]
  );

  return (
    <div
      style={{
        width: 100,
        height: 120,
        borderRadius: 18,
        background: "rgba(255,255,255,0.1)",
        border: "3px solid rgba(255,255,255,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 58,
        fontWeight: 800,
        color: "white",
        fontFamily: "monospace",
        transform: `perspective(400px) rotateX(${rotateX}deg)`,
      }}
    >
      {letter}
    </div>
  );
};

// Hook (0–1.5s = 0–45f)
const HookScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
      <div style={{ fontSize: 80 }}>🔤</div>
      <HookText text="Welches Wort ergibt sich?" fontSize={56} />
      <PollBar letters={["💬"]} prompt="Kommentiere deine Lösung!" />
    </SafeArea>
  </BrandedBackground>
);

// Letters (1.5–7s = 45–210f)
const LetterScene: React.FC<WortRaetselProps> = ({ letters, hint }) => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 30 }}>
      <div style={{ fontSize: 30, color: BRAND.textMuted, fontWeight: 500 }}>{hint}</div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        {letters.map((l, i) => (
          <LetterTile key={i} letter={l} index={i} />
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
        KFF Wortflüssigkeit
      </div>
    </SafeArea>
  </BrandedBackground>
);

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
const RevealScene: React.FC<WortRaetselProps> = ({ word }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 8, stiffness: 200 } });

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
        <div style={{ fontSize: 36, color: BRAND.success, fontWeight: 700 }}>✅ Lösung</div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "white",
            fontFamily: "monospace",
            transform: `scale(${pop})`,
            letterSpacing: 8,
            textShadow: "0 4px 12px rgba(0,0,0,0.4)",
          }}
        >
          {word}
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
        Wortflüssigkeit trainieren
      </div>
      <TripleCTA
        commentText="Hattest du es? ✅ oder ❌"
        shareText="Wer aus deinen Freunden findet es?"
        saveText="Speichern zum Üben!"
      />
    </SafeArea>
  </BrandedBackground>
);

// 15s = 450 frames
export const WortRaetsel: React.FC<WortRaetselProps> = (props) => (
  <AbsoluteFill>
    <Sequence from={0} durationInFrames={45}>
      <HookScene />
    </Sequence>
    <Sequence from={45} durationInFrames={165}>
      <LetterScene {...props} />
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
