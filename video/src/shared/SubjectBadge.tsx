import React from "react";
import { SUBJECT_COLORS } from "./brand";

type Props = {
  subject: string;
};

export const SubjectBadge: React.FC<Props> = ({ subject }) => {
  const color = SUBJECT_COLORS[subject] ?? "#6b7280";

  return (
    <div
      style={{
        padding: "10px 24px",
        borderRadius: 20,
        background: color,
        color: "white",
        fontSize: 22,
        fontWeight: 700,
      }}
    >
      BMS {subject}
    </div>
  );
};
