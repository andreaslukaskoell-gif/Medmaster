import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { BrandedBackground } from "../shared/BrandedBackground";
import { SafeArea } from "../shared/SafeArea";
import { HookText } from "../shared/HookText";
import { TripleCTA } from "../shared/TripleCTA";
import { BRAND } from "../shared/brand";
import type { StatsUrgencyProps } from "../types";

const AnimatedCounter: React.FC<{
  target: number;
  suffix?: string;
  color: string;
  label: string;
  delay: number;
}> = ({ target, suffix = "", color, label, delay }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame - delay, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const value = Math.round(target * progress);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 100, fontWeight: 900, color, textShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
        {value.toLocaleString("de-AT")}{suffix}
      </div>
      <div style={{ fontSize: 32, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>{label}</div>
    </div>
  );
};

// Hook — instant shock stat (0–1.5s = 0–45f)
const HookScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
      <HookText text="87% fallen beim MedAT durch." fontSize={62} />
      <div style={{ fontSize: 38, color: BRAND.error, fontWeight: 700, textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
        Gehörst du zu den 13%?
      </div>
    </SafeArea>
  </BrandedBackground>
);

// Numbers flash (1.5–5s = 45–150f)
const NumbersScene: React.FC<StatsUrgencyProps> = ({ applicants, spots }) => {
  const frame = useCurrentFrame();
  const ratio = Math.round((spots / applicants) * 100);

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 40 }}>
        <AnimatedCounter target={applicants} suffix="+" color={BRAND.accent} label="Bewerber pro Jahr" delay={0} />
        <AnimatedCounter target={spots} color={BRAND.error} label="Studienplätze" delay={12} />
        <div style={{
          fontSize: 64, fontWeight: 900, color: "rgba(255,255,255,0.3)",
          opacity: interpolate(frame, [30, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          = {ratio}% Erfolgsquote
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// "Der Unterschied" (5–8s = 150–240f)
const DifferenceScene: React.FC<{ questions: number }> = ({ questions }) => {
  const frame = useCurrentFrame();
  const features = [
    `${questions.toLocaleString("de-AT")}+ Übungsfragen`,
    "KFF-Generator",
    "TV & SEK",
    "Komplett gratis bis Ende März",
  ];

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 28 }}>
        <HookText text="Wer ÜBEN kann, gewinnt." fontSize={52} color={BRAND.accent} />
        {features.map((t, i) => (
          <div key={t} style={{
            display: "flex", alignItems: "center", gap: 16,
            opacity: interpolate(frame - i * 8, [5, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            transform: `translateX(${interpolate(frame - i * 8, [5, 15], [-30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
          }}>
            <span style={{ fontSize: 32 }}>✅</span>
            <span style={{ fontSize: 34, color: "white", fontWeight: 600 }}>{t}</span>
          </div>
        ))}
      </SafeArea>
    </BrandedBackground>
  );
};

// Urgency CTA (8–12s = 240–360f)
const UrgencyScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
        <div style={{
          padding: "16px 36px", borderRadius: 16,
          background: "rgba(239,68,68,0.2)", border: `2px solid ${BRAND.error}`,
          opacity: interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          <div style={{ fontSize: 32, color: BRAND.error, fontWeight: 700 }}>⏰ Nur noch bis Ende März gratis!</div>
        </div>
        <HookText text="Jetzt starten. Nicht morgen." fontSize={50} style={{ marginTop: 10 }} />
        <TripleCTA
          commentText="Wann startest DU? Kommentiere!"
          shareText="Schick an deinen MedAT-Lernpartner!"
          saveText="Speichern als Reminder!"
        />
      </SafeArea>
    </BrandedBackground>
  );
};

// 12s = 360 frames (shortened from 17s per research)
export const StatsUrgency: React.FC<StatsUrgencyProps> = (props) => (
  <AbsoluteFill>
    <Sequence from={0} durationInFrames={45}><HookScene /></Sequence>
    <Sequence from={45} durationInFrames={105}><NumbersScene {...props} /></Sequence>
    <Sequence from={150} durationInFrames={90}><DifferenceScene questions={props.questions} /></Sequence>
    <Sequence from={240} durationInFrames={120}><UrgencyScene /></Sequence>
  </AbsoluteFill>
);
