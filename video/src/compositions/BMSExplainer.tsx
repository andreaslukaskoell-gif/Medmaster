import React from "react";
import {
  AbsoluteFill,
  Img,
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
import { BRAND, SUBJECT_COLORS } from "../shared/brand";

type BMSExplainerProps = {
  subject: string;
  hook: string;
  topicTitle: string;
  imageUrl: string;
  steps: string[];
  merke: string;
  cta: string;
};

// Scene 1: MedAT hook (0–2s = 0–60f)
const HookScene: React.FC<{ hook: string; subject: string }> = ({ hook, subject }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 12 } });
  const color = SUBJECT_COLORS[subject] || BRAND.primary;

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 24 }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: BRAND.accent,
            letterSpacing: 3,
            textTransform: "uppercase",
            opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          MedAT BMS
        </div>
        <div
          style={{
            transform: `scale(${scale})`,
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.3,
            textShadow: "0 3px 12px rgba(0,0,0,0.5)",
            padding: "0 20px",
          }}
        >
          {hook}
        </div>
        <div
          style={{
            width: 80,
            height: 4,
            backgroundColor: color,
            borderRadius: 2,
            opacity: interpolate(frame, [20, 35], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
      </SafeArea>
    </BrandedBackground>
  );
};

// Scene 2: Topic + Image (2–8s = 60–240f)
const TopicScene: React.FC<{
  topicTitle: string;
  subject: string;
  imageUrl: string;
  steps: string[];
}> = ({ topicTitle, subject, imageUrl, steps }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const imgScale = spring({ frame, fps, config: { damping: 14 } });
  const color = SUBJECT_COLORS[subject] || BRAND.primary;

  return (
    <BrandedBackground>
      <SafeArea
        style={{ alignItems: "center", justifyContent: "flex-start", gap: 16, paddingTop: 20 }}
      >
        <SubjectBadge subject={subject} />
        <div
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            opacity: interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          {topicTitle}
        </div>

        {/* MedMaster image (optional) */}
        {imageUrl ? (
          <div
            style={{
              transform: `scale(${imgScale})`,
              borderRadius: 20,
              overflow: "hidden",
              border: `3px solid ${color}`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.4)`,
              width: "92%",
              maxHeight: 480,
            }}
          >
            <Img src={imageUrl} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ) : null}

        {/* Explanation steps */}
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}
        >
          {steps.map((step, i) => {
            const stepDelay = 30 + i * 25;
            const opacity = interpolate(frame, [stepDelay, stepDelay + 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const slideX = interpolate(frame, [stepDelay, stepDelay + 15], [40, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={i}
                style={{
                  opacity,
                  transform: `translateX(${slideX}px)`,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 14,
                  borderLeft: `4px solid ${color}`,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color,
                    minWidth: 32,
                    textAlign: "center",
                  }}
                >
                  {i + 1}
                </div>
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: "white",
                    lineHeight: 1.4,
                  }}
                >
                  {step}
                </div>
              </div>
            );
          })}
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Scene 3: Merksatz (8–11s = 240–330f)
const MerkeScene: React.FC<{ merke: string; subject: string }> = ({ merke, subject }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 10 } });
  const color = SUBJECT_COLORS[subject] || BRAND.primary;

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 24 }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: BRAND.accent,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          MERKE
        </div>
        <div
          style={{
            transform: `scale(${scale})`,
            padding: "36px 32px",
            background: `linear-gradient(135deg, ${color}22, ${color}44)`,
            borderRadius: 24,
            border: `2px solid ${color}`,
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.5,
              textAlign: "center",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {merke}
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            color: BRAND.textMuted,
            marginTop: 8,
            opacity: interpolate(frame, [20, 35], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Aus dem MedMaster BMS-Kapitel
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Scene 4: CTA (11–13s = 330–390f)
const CTAScene: React.FC<{ cta: string }> = ({ cta }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const btnScale = spring({ frame: frame - 10, fps, config: { damping: 12 } });

  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 28 }}>
        <div
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          {cta}
        </div>
        <div
          style={{
            transform: `scale(${Math.max(0, btnScale)})`,
            padding: "20px 48px",
            background: BRAND.accent,
            borderRadius: 16,
            fontSize: 32,
            fontWeight: 700,
            color: BRAND.bg,
          }}
        >
          medmaster.at
        </div>
        <div
          style={{
            fontSize: 26,
            color: BRAND.textMuted,
            opacity: interpolate(frame, [25, 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          🔖 Speichern für den MedAT
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// 13s = 390 frames @ 30fps
export const BMSExplainer: React.FC<BMSExplainerProps> = (props) => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={60}>
        <HookScene hook={props.hook} subject={props.subject} />
      </Sequence>
      <Sequence from={60} durationInFrames={180}>
        <TopicScene
          topicTitle={props.topicTitle}
          subject={props.subject}
          imageUrl={props.imageUrl}
          steps={props.steps}
        />
      </Sequence>
      <Sequence from={240} durationInFrames={90}>
        <MerkeScene merke={props.merke} subject={props.subject} />
      </Sequence>
      <Sequence from={330} durationInFrames={60}>
        <CTAScene cta={props.cta} />
      </Sequence>
    </AbsoluteFill>
  );
};
