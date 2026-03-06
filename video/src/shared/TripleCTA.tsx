import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { BRAND } from "./brand";

/**
 * Triple CTA: Comment + Save + DM Share.
 * Appears staggered for visual interest.
 */
type Props = {
  commentText?: string;
  shareText?: string;
  saveText?: string;
};

export const TripleCTA: React.FC<Props> = ({
  commentText = "Kommentiere A–E!",
  shareText = "Schick an deinen MedAT-Lernpartner!",
  saveText = "Speichern für die Vorbereitung!",
}) => {
  const frame = useCurrentFrame();

  const items = [
    { icon: "💬", text: commentText, delay: 0 },
    { icon: "📩", text: shareText, delay: 8 },
    { icon: "🔖", text: saveText, delay: 16 },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
      }}
    >
      {items.map((item) => {
        const opacity = interpolate(frame - item.delay, [0, 10], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const translateY = interpolate(frame - item.delay, [0, 10], [20, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={item.text}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              opacity,
              transform: `translateY(${translateY}px)`,
            }}
          >
            <span style={{ fontSize: 32 }}>{item.icon}</span>
            <span
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {item.text}
            </span>
          </div>
        );
      })}
      <div
        style={{
          marginTop: 20,
          padding: "22px 50px",
          borderRadius: 999,
          background: BRAND.accent,
          fontSize: 36,
          fontWeight: 800,
          color: "#1a1a1a",
          opacity: interpolate(frame, [20, 35], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        medmaster.at → Link in Bio
      </div>
    </div>
  );
};
