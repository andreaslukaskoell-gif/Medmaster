/**
 * TextAnimate — Premium staggered text reveal animation.
 * Animates text word-by-word or character-by-character with blur + slide.
 */

import { memo } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Pre-create motion components to avoid re-mounting on parent re-render
const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

type AnimateBy = "word" | "character" | "line";
type Animation = "blurInUp" | "fadeIn" | "slideUp" | "scaleUp";

type TextAnimateProps = {
  children: string;
  by?: AnimateBy;
  animation?: Animation;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

const animations: Record<
  Animation,
  { hidden: Record<string, string | number>; visible: Record<string, string | number> }
> = {
  blurInUp: {
    hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

function splitText(text: string, by: AnimateBy): string[] {
  if (by === "word") return text.split(/(\s+)/);
  if (by === "character") return text.split("");
  return text.split("\n");
}

export const TextAnimate = memo(function TextAnimate({
  children,
  by = "word",
  animation = "blurInUp",
  delay = 0,
  duration = 0.35,
  staggerDelay,
  className,
  as: Tag = "div",
}: TextAnimateProps) {
  const segments = splitText(children, by);
  const anim = animations[animation];
  const stagger = staggerDelay ?? (by === "character" ? 0.02 : 0.04);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: anim.hidden,
    visible: {
      ...anim.visible,
      transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const MotionTag = motionTags[Tag];

  return (
    <MotionTag
      className={cn("flex flex-wrap", by === "line" && "flex-col", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {segments.map((segment, i) => {
        if (segment.match(/^\s+$/)) {
          return <span key={i}>&nbsp;</span>;
        }
        return (
          <motion.span key={i} variants={child} className="inline-block">
            {segment}
          </motion.span>
        );
      })}
    </MotionTag>
  );
});
