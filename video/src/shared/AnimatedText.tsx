import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

type Props = {
  text: string;
  delay?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  textAlign?: "left" | "center" | "right";
  lineHeight?: number;
  style?: React.CSSProperties;
};

export const AnimatedText: React.FC<Props> = ({
  text,
  delay = 0,
  fontSize = 48,
  color = "white",
  fontWeight = 700,
  textAlign = "center",
  lineHeight = 1.3,
  style,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame - delay, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame - delay, [0, 12], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        fontSize,
        color,
        fontWeight,
        textAlign,
        lineHeight,
        opacity,
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {text}
    </div>
  );
};
