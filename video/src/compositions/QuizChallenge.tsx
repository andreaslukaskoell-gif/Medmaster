import React from "react";
import { AbsoluteFill, Sequence, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BrandedBackground } from "../shared/BrandedBackground";
import { SafeArea } from "../shared/SafeArea";
import { ThumbnailHook } from "../shared/ThumbnailHook";
import { CountdownRing } from "../shared/CountdownRing";
import { OptionCard } from "../shared/OptionCard";
import { SubjectBadge } from "../shared/SubjectBadge";
import { TripleCTA } from "../shared/TripleCTA";
import { AnimatedText } from "../shared/AnimatedText";
import { PollBar } from "../shared/PollBar";
import { BRAND } from "../shared/brand";
import type { QuizChallengeProps } from "../types";

const LETTERS = ["A", "B", "C", "D", "E"];

// Scene 1: Hook — instant text, no fade (0–1s = 0–30f)
const HookScene: React.FC = () => {
  return (
    <BrandedBackground>
      <ThumbnailHook
        text="Schaffst du diese MedAT-Frage?"
        subtext="Die meisten antworten FALSCH"
      />
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

// Scene 5: Triple CTA
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
          5000+ MedAT-Aufgaben
        </div>
        <div style={{ fontSize: 36, color: BRAND.accent, fontWeight: 700, marginBottom: 30 }}>
          Jetzt starten!
        </div>
        <TripleCTA />
      </SafeArea>
    </BrandedBackground>
  );
};

// 15s = 450 frames @ 30fps (optimized for completion rate)
export const QuizChallenge: React.FC<QuizChallengeProps> = (props) => {
  return (
    <AbsoluteFill>
      {/* Background music */}
      <Audio src={staticFile("audio/bgm-lofi.mp3")} volume={0.12} loop />
      {/* Hook: 1s */}
      <Sequence from={0} durationInFrames={30}>
        <HookScene />
      </Sequence>
      {/* Question + Options: 4s */}
      <Sequence from={30} durationInFrames={120}>
        <QuestionScene {...props} />
      </Sequence>
      {/* Poll prompt: 1.5s */}
      <Sequence from={150} durationInFrames={45}>
        <PollScene />
      </Sequence>
      {/* Countdown: 2.5s */}
      <Sequence from={195} durationInFrames={75}>
        <CountdownScene />
      </Sequence>
      {/* Correct SFX */}
      <Sequence from={270} durationInFrames={15}>
        <Audio src={staticFile("audio/correct.mp3")} volume={0.5} />
      </Sequence>
      {/* Reveal: 3s */}
      <Sequence from={270} durationInFrames={90}>
        <RevealScene {...props} />
      </Sequence>
      {/* CTA: 3s */}
      <Sequence from={360} durationInFrames={90}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
