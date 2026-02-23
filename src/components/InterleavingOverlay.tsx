import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, X } from "lucide-react";
import { useInterleavingStore } from "@/store/interleaving";
import { suggestedAlternateArea, areaLabel, type LearningArea } from "@/lib/learningArea";
import { Button } from "@/components/ui/button";

interface Props {
  visible: boolean;
  currentArea: LearningArea;
  onDismiss: () => void;
}

export function InterleavingOverlay({ visible, currentArea, onDismiss }: Props) {
  const navigate = useNavigate();
  const suggestion = suggestedAlternateArea(currentArea);

  const handleSwitch = () => {
    useInterleavingStore.getState().resetTimer();
    onDismiss();
    if (suggestion) navigate(suggestion.path);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-end justify-center p-4 pb-8 pointer-events-none"
        >
          <div className="pointer-events-auto max-w-md w-full">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg shadow-black/10 dark:shadow-black/30 p-4"
            >
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                Zeit für einen Kontextwechsel?
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Du bist seit über 45 Minuten in {areaLabel(currentArea)}. Ein kurzer Wechsel
                trainiert die kognitive Flexibilität und beugt Ermüdung vor.
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestion && (
                  <Button size="sm" onClick={handleSwitch} className="gap-2">
                    <RefreshCw className="w-4 h-4" />
                    {suggestion.label}
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={onDismiss} className="gap-2">
                  <X className="w-4 h-4" />
                  Weiter hier
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
