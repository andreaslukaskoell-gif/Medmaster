import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Network, Sparkles, BookOpen, Trophy } from "lucide-react";
import { pathForChapter } from "@/lib/bmsRoutes";
import { getRelatedTopics, getDeepRelatedTopics } from "@/data/knowledgeBridge";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";

const SUBJECT_LABELS: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

const SUBJECT_COLORS: Record<string, string> = {
  biologie: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/40",
  chemie: "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/40",
  physik: "bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/40",
  mathematik: "bg-violet-500/20 text-violet-700 dark:text-violet-400 border-violet-500/40",
};

interface KnowledgeBridgeSlideOverProps {
  open: boolean;
  onClose: () => void;
  chapterId: string;
  subject: string;
  chapterTitle: string;
  /** Kapitel-Content (Text) zum Extrahieren von Schlagworten */
  content: string;
}

export function KnowledgeBridgeSlideOver({
  open,
  onClose,
  chapterId,
  subject,
  chapterTitle,
  content,
}: KnowledgeBridgeSlideOverProps) {
  const navigate = useNavigate();
  const earnedBadges = useStore((s) => s.earnedBadges);
  const showDeep = subject === "physik" && earnedBadges.includes("physik-profi");
  const related = useMemo(
    () => getRelatedTopics(content, chapterId, subject),
    [content, chapterId, subject]
  );
  const deepRelated = useMemo(
    () => (showDeep ? getDeepRelatedTopics(content, chapterId, subject) : []),
    [showDeep, content, chapterId, subject]
  );

  const handleLink = (subj: string, chId: string) => {
    onClose();
    navigate(pathForChapter(subj, chId));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-white/10 shadow-2xl"
          >
            <div className="flex-1 overflow-y-auto p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 dark:bg-primary-500/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Knowledge Bridge</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Verknüpfte Themen</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Schließen"
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Schlagworte in diesem Kapitel verknüpfen sich mit Themen in anderen Fächern – so lernst du nicht in Silos, sondern vernetzt.
              </p>

              {showDeep && deepRelated.length > 0 && (
                <div className="mb-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-200 flex items-center gap-1.5 mb-2">
                    <Trophy className="w-3.5 h-3.5" />
                    Tiefere Zusammenhänge (Physik-Profi)
                  </p>
                  <div className="space-y-2">
                    {deepRelated.map(({ keyword, topic }, i) => (
                      <button
                        key={`deep-${i}`}
                        type="button"
                        onClick={() => handleLink(topic.subject, topic.chapterId)}
                        className={cn(
                          "w-full text-left rounded-lg p-3 border transition-all text-sm",
                          "bg-white dark:bg-slate-800/50 border-amber-200 dark:border-amber-800",
                          "hover:border-amber-400 dark:hover:border-amber-600"
                        )}
                      >
                        <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">{keyword}</span>
                        <p className="font-medium text-slate-900 dark:text-white mt-0.5">{topic.label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{topic.chapterTitle} · {SUBJECT_LABELS[topic.subject] ?? topic.subject}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {related.length === 0 && deepRelated.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/50 p-6 text-center">
                  <BookOpen className="w-10 h-10 mx-auto text-slate-400 dark:text-slate-500 mb-2" />
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Keine Brücken für dieses Kapitel gefunden. Mehr Schlagworte in <code className="text-xs bg-slate-200 dark:bg-slate-700 px-1 rounded">knowledgeBridge.ts</code> anlegen.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {related.map(({ keyword, topic }, i) => (
                    <motion.div
                      key={`${topic.subject}:${topic.chapterId}:${i}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group"
                    >
                      <button
                        type="button"
                        onClick={() => handleLink(topic.subject, topic.chapterId)}
                        className={cn(
                          "w-full text-left rounded-xl p-4 border transition-all",
                          "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-white/10",
                          "hover:border-primary-400/60 dark:hover:border-primary-500/50",
                          "hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
                          "focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center">
                              <Sparkles className="w-5 h-5 text-primary-500" />
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                              Schlagwort: {keyword}
                            </span>
                            <p className="font-medium text-slate-900 dark:text-white mt-0.5">{topic.label}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {topic.chapterTitle} · {SUBJECT_LABELS[topic.subject] ?? topic.subject}
                            </p>
                            <span
                              className={cn(
                                "inline-block mt-2 text-[10px] font-medium px-2 py-0.5 rounded border",
                                SUBJECT_COLORS[topic.subject] ?? "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                              )}
                            >
                              {SUBJECT_LABELS[topic.subject] ?? topic.subject}
                            </span>
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-white/10 shrink-0">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center">
                MedAT: Vernetztes Wissen bringt Bestnoten.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
