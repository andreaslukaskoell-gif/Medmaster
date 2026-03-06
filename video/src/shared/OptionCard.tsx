import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "./brand";

type OptionState = "default" | "selected" | "correct" | "wrong";

type Props = {
  letter: string;
  text: string;
  index: number;
  delay?: number;
  state?: OptionState;
};

const STATE_STYLES: Record<
  OptionState,
  { bg: string; border: string; letterColor: string; textColor: string }
> = {
  default: {
    bg: "rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.15)",
    letterColor: BRAND.accent,
    textColor: "white",
  },
  selected: {
    bg: "rgba(245,158,11,0.15)",
    border: BRAND.accent,
    letterColor: BRAND.accent,
    textColor: "white",
  },
  correct: {
    bg: "rgba(34,197,94,0.2)",
    border: BRAND.success,
    letterColor: BRAND.success,
    textColor: "#4ade80",
  },
  wrong: {
    bg: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.1)",
    letterColor: "rgba(255,255,255,0.3)",
    textColor: "rgba(255,255,255,0.35)",
  },
};

export const OptionCard: React.FC<Props> = ({
  letter,
  text,
  index,
  delay = 0,
  state = "default",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const styles = STATE_STYLES[state];

  const scale = spring({
    frame: frame - delay - index * 4,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "20px 28px",
        background: styles.bg,
        borderRadius: 20,
        border: `2px solid ${styles.border}`,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          minWidth: 64,
          height: 64,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: 34,
          color: styles.letterColor,
          background: state === "correct" ? "rgba(34,197,94,0.15)" : `${styles.letterColor}22`,
        }}
      >
        {letter}
      </div>
      <div
        style={{
          fontSize: 36,
          color: styles.textColor,
          fontWeight: state === "correct" ? 700 : 500,
          flex: 1,
        }}
      >
        {text}
      </div>
      {state === "correct" && <div style={{ fontSize: 44, marginLeft: "auto" }}>✅</div>}
    </div>
  );
};
