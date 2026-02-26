import React from "react";
import { motion } from "framer-motion";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { getSubjectColors, type SubjectId } from "@/data/bmsKapitel/colors";
import { ArrowRight } from "lucide-react";

interface FachRoadmapProps {
  /** All chapters for this subject */
  chapters: Kapitel[];
  /** Currently active chapter ID (highlighted in roadmap) */
  currentChapterId?: string;
  /** Callback when user clicks a chapter in roadmap */
  onSelectChapter?: (chapterId: string) => void;
}

/**
 * FachRoadmap - Visual learning sequence for a subject
 *
 * Displays chapters in lernlogische Abfolge (learning order) with:
 * - Sequence numbers (1, 2, 3...)
 * - Full chapter titles (title)
 * - Arrow connectors between chapters
 * - Current chapter highlighted
 * - Subject-specific color theming
 *
 * Phase 4: STRUCT-02, STRUCT-03
 */
export function FachRoadmap({ chapters, currentChapterId, onSelectChapter }: FachRoadmapProps) {
  if (chapters.length === 0) return null;

  const subject = chapters[0]?.subject;
  if (!subject) return null;

  const colors = getSubjectColors(subject as SubjectId);

  // Sort by sequence (chapters without sequence appear at end)
  const sorted = [...chapters].sort((a, b) => {
    const aSeq = a.sequence ?? 999;
    const bSeq = b.sequence ?? 999;
    return aSeq - bSeq;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-6 rounded-lg border-l-4 ${colors.border} ${colors.bg} ${colors.bgDark}`}
    >
      <h3
        className={`font-semibold ${colors.text} ${colors.textDark} mb-4 flex items-center gap-2`}
      >
        Lernpfad
      </h3>

      <div className="relative">
        {/* Fade gradient to indicate scrollability */}
        {sorted.length > 3 && (
          <div className="absolute right-0 top-0 bottom-2 w-16 bg-linear-to-l from-white dark:from-slate-800 to-transparent pointer-events-none z-10" />
        )}

        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {sorted.map((chapter, idx) => (
            <React.Fragment key={chapter.id}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectChapter?.(chapter.id)}
                className={`px-3 py-2 rounded-md whitespace-nowrap text-sm font-medium transition ${
                  currentChapterId === chapter.id
                    ? `${colors.button} text-white shadow-md`
                    : "bg-white/50 dark:bg-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/70"
                }`}
              >
                {chapter.sequence ? `${chapter.sequence}. ` : ""}
                {chapter.title}
              </motion.button>

              {idx < sorted.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
