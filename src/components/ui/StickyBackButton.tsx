import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useBack } from "@/hooks/useBack";

interface Props {
  /** Custom back action. If not set, uses previous page or dashboard. */
  onClick?: () => void;
  /** Label text (default: "Zurück") */
  label?: string;
}

export function StickyBackButton({ onClick, label = "Zurück" }: Props) {
  const [visible, setVisible] = useState(false);
  const goBack = useBack();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll(); // check once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick();
    else goBack();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed top-16 left-4 lg:left-[272px] z-100 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--card)]/80 backdrop-blur-sm shadow-md border border-[var(--border)]/50 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--card)] transition-all cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </button>
  );
}
