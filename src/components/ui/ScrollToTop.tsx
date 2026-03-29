import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SCROLL_THRESHOLD = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`@media print { .scroll-to-top-btn { display: none !important; } }`}</style>
      <AnimatePresence>
        {visible && (
          <motion.button
            key="scroll-to-top"
            className="scroll-to-top-btn btn-glass fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-[150] w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer"
            onClick={scrollToTop}
            aria-label="Nach oben scrollen"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ willChange: "opacity, transform" }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
