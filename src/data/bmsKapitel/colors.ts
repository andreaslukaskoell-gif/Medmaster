/**
 * Premium-Bucket Color System (Phase 4: STRUCT-01)
 *
 * Defines consistent color theming for all BMS subjects:
 * - Biologie: emerald (green)
 * - Chemie: red
 * - Physik: blue
 * - Mathematik: violet
 *
 * Usage:
 * ```tsx
 * import { getSubjectColors } from '@/data/bmsKapitel/colors';
 * const colors = getSubjectColors('biologie');
 * <div className={`${colors.bg} ${colors.bgDark}`}>
 * ```
 */

export const SUBJECT_COLORS = {
  biologie: {
    bg: "bg-emerald-100",
    bgDark: "dark:bg-emerald-900/30",
    text: "text-emerald-700",
    textDark: "dark:text-emerald-400",
    border: "border-l-emerald-500",
    button: "bg-emerald-600 hover:bg-emerald-700",
    progress: "bg-emerald-500",
    icon: "text-emerald-600",
  },
  chemie: {
    bg: "bg-red-100",
    bgDark: "dark:bg-red-900/30",
    text: "text-red-700",
    textDark: "dark:text-red-400",
    border: "border-l-red-500",
    button: "bg-red-600 hover:bg-red-700",
    progress: "bg-red-500",
    icon: "text-red-600",
  },
  physik: {
    bg: "bg-blue-100",
    bgDark: "dark:bg-blue-900/30",
    text: "text-blue-700",
    textDark: "dark:text-blue-400",
    border: "border-l-blue-500",
    button: "bg-blue-600 hover:bg-blue-700",
    progress: "bg-blue-500",
    icon: "text-blue-600",
  },
  mathematik: {
    bg: "bg-violet-100",
    bgDark: "dark:bg-violet-900/30",
    text: "text-violet-700",
    textDark: "dark:text-violet-400",
    border: "border-l-violet-500",
    button: "bg-violet-600 hover:bg-violet-700",
    progress: "bg-violet-500",
    icon: "text-violet-600",
  },
} as const;

export type SubjectId = keyof typeof SUBJECT_COLORS;

/**
 * Get color classes for a given subject.
 * Returns color object with bg, text, border, etc. for consistent theming.
 */
export function getSubjectColors(subject: SubjectId) {
  return SUBJECT_COLORS[subject];
}
