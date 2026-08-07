import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow: string;
  title: string;
  description?: string;
}

function SectionHeading({ eyebrow, title, description, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)} {...props}>
      <div className="mb-3 flex items-center gap-2.5 font-mono text-[13px] text-accent">
        <span className="h-px w-4 bg-accent/60" aria-hidden />
        {eyebrow}
      </div>
      <h2 className="text-balance text-[28px] font-semibold leading-tight tracking-tight text-foreground md:text-[34px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
