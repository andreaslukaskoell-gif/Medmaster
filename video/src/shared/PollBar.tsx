import React from "react";
import { spring, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "./brand";

/**
 * Animated visual poll bar — prompts viewers to comment their answer.
 * Shows letter buttons (A–E) that pop in with spring animation.
 */
type Props = {
  letters?: string[];
  prompt?: string;
};

export const PollBar: React.FC<Props> = ({
  letters = ["A", "B", "C", "D", "E"],
  prompt = "Kommentiere deinen Buchstaben!",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div
        style={{
          fontSize: 34,
          fontWeight: 700,
          color: "white",
          textAlign: "center",
          textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        {prompt}
      </div>
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        {letters.map((letter, i) => {
          const scale = spring({
            frame: frame - i * 4,
            fps,
            config: { damping: 8, stiffness: 250 },
          });
          const _isHighlight = i === 0; // first one pulses slightly

          return (
            <div
              key={letter}
              style={{
                width: 90,
                height: 90,
                borderRadius: 20,
                background: "rgba(255,255,255,0.1)",
                border: `3px solid ${BRAND.accent}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 42,
                fontWeight: 800,
                color: BRAND.accent,
                transform: `scale(${scale})`,
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              {letter}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          opacity: interpolate(frame - 15, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        <span style={{ fontSize: 28 }}>👇</span>
        <span style={{ fontSize: 28, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
          Ab in die Kommentare!
        </span>
        <span style={{ fontSize: 28 }}>👇</span>
      </div>
    </div>
  );
};
