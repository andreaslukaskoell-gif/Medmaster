import { Dna, Atom, Zap, Calculator } from "lucide-react";
import { SUBJECT_COLORS } from "@/data/bmsKapitel/colors";

export const subjects = [
  {
    id: "biologie" as const,
    label: "Biologie",
    icon: Dna,
    colors: SUBJECT_COLORS.biologie,
    description: "Lebewesen, Zellen, Genetik, Evolution",
  },
  {
    id: "chemie" as const,
    label: "Chemie",
    icon: Atom,
    colors: SUBJECT_COLORS.chemie,
    description: "Periodensystem, Bindungen, Reaktionen",
  },
  {
    id: "physik" as const,
    label: "Physik",
    icon: Zap,
    colors: SUBJECT_COLORS.physik,
    description: "Mechanik, Elektrizität, Wellen, Optik",
  },
  {
    id: "mathematik" as const,
    label: "Mathematik",
    icon: Calculator,
    colors: SUBJECT_COLORS.mathematik,
    description: "Algebra, Analysis, Geometrie, Trigonometrie",
  },
] as const;

export type SubjectId = (typeof subjects)[number]["id"];
export type SubjectData = (typeof subjects)[number];
