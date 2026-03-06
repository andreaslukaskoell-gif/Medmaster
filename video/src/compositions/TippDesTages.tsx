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
import { SubjectBadge } from "../shared/SubjectBadge";
import { TripleCTA } from "../shared/TripleCTA";
import { BRAND } from "../shared/brand";
import type { TippDesTagesProps } from "../types";

// Scene 1: Hook (0–1.5s = 0–45f)
const HookScene: React.FC = () => {
  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
        <div style={{ fontSize: 80, marginBottom: 10 }}>💡</div>
        <HookText text="Wusstest du das?" fontSize={64} />
        <div style={{ fontSize: 34, color: BRAND.accent, fontWeight: 600 }}>
          Die meisten wissen es NICHT
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Scene 2: Tipp card with pop-in (1.5–8s = 45–240f)
const TippScene: React.FC<TippDesTagesProps> = ({ subject, tipp, source }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cardScale = spring({ frame, fps, config: { damping: 12 } });

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 24 }}>
        <SubjectBadge subject={subject} />
        <div style={{
          transform: `scale(${cardScale})`,
          padding: "40px 36px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: 28,
          border: "2px solid rgba(255,255,255,0.15)",
          width: "100%",
        }}>
          <AnimatedText text={tipp} fontSize={40} fontWeight={600} delay={8} lineHeight={1.5} style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }} />
        </div>
        <div style={{
          fontSize: 24, color: BRAND.textMuted, marginTop: 12,
          opacity: interpolate(frame, [30, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          Quelle: {source}
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Scene 3: CTA (8–12s = 240–360f)
const CTAScene: React.FC = () => {
  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
        <div style={{ fontSize: 44, fontWeight: 800, color: "white", textAlign: "center", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
          Mehr MedAT-Wissen?
        </div>
        <TripleCTA
          commentText="Was willst du als nächstes wissen?"
          shareText="Schick an jemanden der MedAT macht!"
          saveText="Speichern für die Vorbereitung!"
        />
      </SafeArea>
    </BrandedBackground>
  );
};

// 12s = 360 frames
export const TippDesTages: React.FC<TippDesTagesProps> = (props) => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={45}>
        <HookScene />
      </Sequence>
      <Sequence from={45} durationInFrames={195}>
        <TippScene {...props} />
      </Sequence>
      <Sequence from={240} durationInFrames={120}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
