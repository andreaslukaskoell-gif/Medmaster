import React from "react";

/**
 * Instagram-safe content area.
 * Top: 108px (username bar), Bottom: 320px (caption/buttons),
 * Left: 60px, Right: 120px (like/share buttons).
 */
export const SafeArea: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 108,
        bottom: 320,
        left: 60,
        right: 120,
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
