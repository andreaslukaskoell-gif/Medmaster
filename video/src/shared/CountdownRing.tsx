import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { BRAND } from "./brand";

type Props = {
  durationFrames: number;
  size?: number;
};

export const CountdownRing: React.FC<Props> = ({
  durationFrames,
  size = 200,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, durationFrames], [1, 0], {
    extrapolateRight: "clamp",
  });

  const seconds = Math.ceil((durationFrames - frame) / 30);
  const r = (size - 20) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - progress);

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width={size} height={size} style={{ position: "absolute" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={10}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={BRAND.accent}
          strokeWidth={10}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div
        style={{
          fontSize: size * 0.4,
          fontWeight: 900,
          color: "white",
          zIndex: 1,
        }}
      >
        {seconds}
      </div>
    </div>
  );
};
