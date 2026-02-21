/**
 * BlurFade — Magic UI inspired staggered entrance animation.
 * Uses framer-motion (already installed).
 *
 * Usage:
 *   <BlurFade delay={0.1} inView>
 *     <div>...</div>
 *   </BlurFade>
 *
 *   // Staggered list
 *   {items.map((item, i) => (
 *     <BlurFade key={item.id} delay={i * 0.05} inView>
 *       <Card />
 *     </BlurFade>
 *   ))}
 */

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface BlurFadeProps {
  children: React.ReactNode
  /** Delay before animation starts, in seconds */
  delay?: number
  /** Duration of animation, in seconds. Default 0.3 */
  duration?: number
  /** Vertical offset to animate from. Default 6 */
  yOffset?: number
  /** Only animate when in viewport. Default true */
  inView?: boolean
  /** Extra className on the wrapper div */
  className?: string
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.3,
  yOffset = 6,
  inView = true,
  className,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inViewResult = useInView(ref, { once: true, margin: "-20px" })
  const isVisible = !inView || inViewResult

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset, filter: "blur(4px)" }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: yOffset, filter: "blur(4px)" }
      }
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
