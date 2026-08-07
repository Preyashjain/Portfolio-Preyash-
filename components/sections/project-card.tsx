import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { ProjectVisualIcon } from "@/components/visuals";

function ProjectCard({ project }: { project: Project }) {
  const githubLink = project.links.find((l) => l.label === "GitHub");

  return (
    <SpotlightCard>
      <div className="grid md:grid-cols-[1fr_1.4fr]">
        <div className="flex items-center justify-center border-b border-border bg-background/40 p-8 text-foreground/70 md:border-b-0 md:border-r">
          <ProjectVisualIcon visual={project.visual} className="h-full max-h-[180px] w-full" />
        </div>

        <div className="flex flex-col p-6 md:p-8">
          <Badge variant="outline" className="w-fit">
            {project.status}
          </Badge>

          <h3 className="mt-4 text-[19px] font-semibold text-foreground">
            {/* Stretched link: covers the whole card so it feels clickable
                as a unit, while staying a single real <a> whose accessible
                name is just the project name. */}
            <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0">
              {project.name}
            </Link>
          </h3>
          <p className="mt-2 text-pretty text-[14.5px] leading-relaxed text-muted-foreground">
            {project.oneLiner}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 pt-1 text-[13px] font-medium">
            <span className="inline-flex items-center gap-1 text-foreground transition-transform group-hover:translate-x-0.5">
              Read case study
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
            {githubLink ? (
              <a
                href={githubLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
              >
                Code
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export { ProjectCard };
