import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { BrandedBackground } from "../shared/BrandedBackground";
import { SafeArea } from "../shared/SafeArea";
import { HookText } from "../shared/HookText";
import { CountdownRing } from "../shared/CountdownRing";
import { OptionCard } from "../shared/OptionCard";
import { SubjectBadge } from "../shared/SubjectBadge";
import { TripleCTA } from "../shared/TripleCTA";
import { AnimatedText } from "../shared/AnimatedText";
import { PollBar } from "../shared/PollBar";
import { BRAND } from "../shared/brand";
import type { QuizChallengeProps } from "../types";

const LETTERS = ["A", "B", "C", "D", "E"];

// Scene 1: Hook — instant text, no fade (0–1.5s = 0–45f)
const HookScene: React.FC = () => {
  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 30 }}>
        <HookText text="Schaffst du diese MedAT-Frage?" fontSize={68} />
        <div
          style={{
            fontSize: 40,
            color: BRAND.accent,
            fontWeight: 700,
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          98% antworten FALSCH
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Scene 2: Question + Options stagger in (1.5–7s = 45–210f)
const QuestionScene: React.FC<QuizChallengeProps> = ({ question, subject, options }) => {
  return (
    <BrandedBackground>
      <SafeArea>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 30 }}>
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: "white",
              textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            }}
          >
            MedMaster
          </div>
          <SubjectBadge subject={subject} />
        </div>
        <AnimatedText
          text={question}
          fontSize={48}
          fontWeight={700}
          textAlign="left"
          delay={3}
          style={{ marginBottom: 30, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {options.map((o, i) => (
            <OptionCard key={o.id} letter={LETTERS[i]} text={o.text} index={i} delay={12} />
          ))}
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Scene 2b: Poll prompt — animated A–E buttons (5.5–7s = 165–210f)
const PollScene: React.FC = () => (
  <BrandedBackground>
    <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 30 }}>
      <PollBar />
    </SafeArea>
  </BrandedBackground>
);

// Scene 3: Countdown ring (7–12s = 210–360f)
const CountdownScene: React.FC = () => {
  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 30 }}>
        <div style={{ fontSize: 36, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>
          Auflösung in...
        </div>
        <CountdownRing durationFrames={150} size={240} />
        <div style={{ fontSize: 32, color: BRAND.accent, fontWeight: 600 }}>
          Hast du es gewusst?
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Scene 4: Reveal with explanation (12–17s = 360–510f)
const RevealScene: React.FC<QuizChallengeProps> = ({
  question,
  options,
  correctOptionId,
  explanation,
}) => {
  const frame = useCurrentFrame();
  return (
    <BrandedBackground>
      <SafeArea>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: "white" }}>MedMaster</div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: 16,
              background: BRAND.success,
              color: "white",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            ✅ Auflösung
          </div>
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.3,
            marginBottom: 24,
            textShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          {question}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {options.map((o, i) => (
            <OptionCard
              key={o.id}
              letter={LETTERS[i]}
              text={o.text}
              index={i}
              delay={3}
              state={o.id === correctOptionId ? "correct" : "wrong"}
            />
          ))}
        </div>
        <div
          style={{
            padding: "20px 28px",
            background: "rgba(34,197,94,0.1)",
            borderRadius: 16,
            border: "1px solid rgba(34,197,94,0.3)",
            marginTop: 16,
            opacity: interpolate(frame, [30, 45], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div style={{ fontSize: 26, color: "#86efac", lineHeight: 1.4 }}>{explanation}</div>
        </div>
      </SafeArea>
    </BrandedBackground>
  );
};

// Scene 5: Triple CTA (17–20s = 510–600f)
const CTAScene: React.FC = () => {
  return (
    <BrandedBackground>
      <SafeArea style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            marginBottom: 20,
          }}
        >
          Tausende MedAT-Fragen
        </div>
        <div style={{ fontSize: 36, color: BRAND.accent, fontWeight: 700, marginBottom: 30 }}>
          Gratis bis Ende März!
        </div>
        <TripleCTA />
      </SafeArea>
    </BrandedBackground>
  );
};

// 22s = 660 frames @ 30fps
export const QuizChallenge: React.FC<QuizChallengeProps> = (props) => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={45}>
        <HookScene />
      </Sequence>
      <Sequence from={45} durationInFrames={150}>
        <QuestionScene {...props} />
      </Sequence>
      <Sequence from={195} durationInFrames={60}>
        <PollScene />
      </Sequence>
      <Sequence from={255} durationInFrames={120}>
        <CountdownScene />
      </Sequence>
      <Sequence from={375} durationInFrames={150}>
        <RevealScene {...props} />
      </Sequence>
      <Sequence from={525} durationInFrames={135}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
