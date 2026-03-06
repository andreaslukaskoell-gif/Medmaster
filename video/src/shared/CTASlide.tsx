import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { BRAND } from "./brand";
import { BrandedBackground } from "./BrandedBackground";

type Props = {
  headline?: string;
  subline?: string;
};

export const CTASlide: React.FC<Props> = ({
  headline = "Tausende MedAT-Fragen",
  subline = "BMS · KFF · TV · SEK — alles drin",
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, 15], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <BrandedBackground>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 30 }}>📱</div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: 20,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            fontSize: 40,
            color: BRAND.accent,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          Bis Ende März komplett gratis!
        </div>
        <div
          style={{
            padding: "28px 60px",
            borderRadius: 999,
            background: BRAND.accent,
            fontSize: 40,
            fontWeight: 800,
            color: "#1a1a1a",
          }}
        >
          medmaster.at →
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 28,
            color: BRAND.textMuted,
          }}
        >
          {subline}
        </div>
      </div>
      <div style={{ padding: 40, textAlign: "center" }}>
        <div style={{ fontSize: 32, color: "rgba(255,255,255,0.3)" }}>
          @medmaster_medat
        </div>
      </div>
    </BrandedBackground>
  );
};
