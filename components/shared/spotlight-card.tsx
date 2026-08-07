"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * A card with a very subtle radial highlight that tracks the cursor.
 * Pure CSS variables updated on pointer move — no extra dependency, and
 * it no-ops harmlessly on touch devices since there's no hover/pointer
 * position to track.
 */
function SpotlightCard({ children, className, ...props }: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-surface",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
        "before:[background:radial-gradient(360px_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),color-mix(in_oklch,var(--color-accent)_10%,transparent),transparent_70%)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { SpotlightCard };
