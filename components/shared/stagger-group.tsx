"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { motionTokens } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger,
      delayChildren: 0.1,
    },
  },
};

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}

/** Wraps a list of <StaggerItem> children and staggers their entrance. */
function StaggerGroup({ children, className, once = true }: StaggerGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: motionTokens.duration.base, ease: motionTokens.ease },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

export { StaggerGroup, StaggerItem };
