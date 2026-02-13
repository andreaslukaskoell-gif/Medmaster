import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  /** Custom back action. Falls back to navigate(-1) */
  onClick?: () => void;
  /** Label text (default: "Zurück") */
  label?: string;
}

export function StickyBackButton({ onClick, label = "Zurück" }: Props) {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={onClick || (() => navigate(-1))}
      className="fixed top-16 left-4 lg:left-[272px] z-40 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md border border-gray-200/50 dark:border-gray-700/50 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 transition-all cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </button>
  );
}
