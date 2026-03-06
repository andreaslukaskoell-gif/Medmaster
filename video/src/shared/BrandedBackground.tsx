import React from "react";
import { BRAND } from "./brand";

export const BrandedBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: `linear-gradient(180deg, ${BRAND.primaryDark}, ${BRAND.bg})`,
        display: "flex",
        flexDirection: "column",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};
