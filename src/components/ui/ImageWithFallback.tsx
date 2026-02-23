import { useState, useCallback, useEffect } from "react";
import { ImageOff, Image as ImageIcon, X } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt?: string;
  className?: string;
  /** Container class (e.g. rounded-xl overflow-hidden). */
  containerClassName?: string;
  /** Enable click-to-open lightbox for detail view. */
  lightbox?: boolean;
}

/**
 * Image with fallback on error, progressive blur placeholder while loading,
 * and optional lightbox on click for detail graphics.
 */
export function ImageWithFallback({
  src,
  alt = "",
  className = "w-full h-auto object-contain",
  containerClassName = "",
  lightbox = true,
}: ImageWithFallbackProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleLoad = useCallback(() => {
    setStatus("loaded");
  }, []);

  const handleError = useCallback(() => {
    setStatus("error");
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const placeholderBase =
    "absolute inset-0 flex items-center justify-center bg-linear-to-br from-slate-100 to-primary-50 dark:from-slate-800 dark:to-primary-950/30";

  return (
    <>
      <div
        className={`relative overflow-hidden ${containerClassName}`}
        style={{ minHeight: status === "loading" ? 120 : undefined }}
      >
        {/* Progressive: blur placeholder while loading */}
        {status === "loading" && (
          <div className={`${placeholderBase} animate-pulse`} aria-hidden>
            <div className="h-16 w-16 rounded-full bg-slate-200/80 dark:bg-slate-600/50 blur-md" />
            <ImageIcon className="absolute w-8 h-8 text-slate-400 dark:text-slate-500" />
          </div>
        )}

        {/* Fallback: gradient + icon when error or invalid src */}
        {status === "error" && (
          <div className={`${placeholderBase} min-h-[120px]`}>
            <div className="text-center px-4">
              <ImageOff className="w-10 h-10 mx-auto text-slate-400 dark:text-slate-500 mb-2" />
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Bild konnte nicht geladen werden
              </p>
            </div>
          </div>
        )}

        {/* Real image: hidden until loaded, then fade in */}
        {status !== "error" && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`${className} transition-opacity duration-300 ${
              status === "loaded"
                ? "opacity-100"
                : "opacity-0 absolute inset-0 w-full h-full object-contain"
            } ${lightbox ? "cursor-zoom-in" : ""}`}
            onClick={lightbox ? () => setLightboxOpen(true) : undefined}
            role={lightbox ? "button" : undefined}
            tabIndex={lightbox ? 0 : undefined}
            onKeyDown={
              lightbox
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxOpen(true);
                    }
                  }
                : undefined
            }
          />
        )}
      </div>

      {/* Lightbox modal */}
      {lightbox && lightboxOpen && status === "loaded" && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Bild vergrößert"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
