"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { motionTokens } from "@/lib/constants";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}

/**
 * Fades and lifts children into place once they scroll into view.
 * Runs once per element (no re-triggering on scroll-back) and collapses
 * to a plain fade when the user prefers reduced motion.
 */
function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTokens.duration.slow,
        delay,
        ease: motionTokens.ease,
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export { Reveal };
