import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Instantly visible hook text — no fade delay.
 * Uses spring scale for punch, but text is readable from frame 1.
 */
type Props = {
  text: string;
  fontSize?: number;
  color?: string;
  style?: React.CSSProperties;
};

export const HookText: React.FC<Props> = ({
  text,
  fontSize = 64,
  color = "white",
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 300 },
    from: 0.7,
    to: 1,
  });

  return (
    <div
      style={{
        fontSize,
        fontWeight: 800,
        color,
        textAlign: "center",
        lineHeight: 1.2,
        transform: `scale(${scale})`,
        textShadow: "0 4px 12px rgba(0,0,0,0.5)",
        ...style,
      }}
    >
      {text}
    </div>
  );
};
