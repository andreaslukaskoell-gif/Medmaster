import React from "react";

/**
 * Instagram-safe content area.
 * For You Page shows 4:5 crop (1080×1350) centered in 1080×1920.
 * Hidden: top ~285px, bottom ~285px. Plus caption/buttons overlap.
 * Safe: top 320px, bottom 380px, left 60px, right 120px.
 */
export const SafeArea: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 320,
        bottom: 380,
        left: 60,
        right: 60,
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
