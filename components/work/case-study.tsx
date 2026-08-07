import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { ProjectVisualIcon } from "@/components/visuals";

function CaseStudyBlock({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 py-10 first:pt-0 md:grid-cols-[160px_1fr] md:gap-8">
      <h2 className="font-mono text-[13px] text-accent">{eyebrow}</h2>
      <div>{children}</div>
    </div>
  );
}

function CaseStudy({ project }: { project: Project }) {
  const githubLink = project.links.find((l) => l.label === "GitHub");
  const demoLink = project.links.find((l) => l.label === "Demo");

  return (
    <article className="pb-28 pt-32">
      <Container className="max-w-[760px]">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All work
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8">
            <Badge variant="outline">{project.status}</Badge>
            <h1 className="mt-4 text-balance text-[32px] font-semibold leading-tight tracking-tight text-foreground md:text-[42px]">
              {project.name}
            </h1>
            <p className="mt-4 max-w-[560px] text-pretty text-[16px] leading-relaxed text-muted-foreground">
              {project.oneLiner}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-border py-5 font-mono text-[13px] text-muted-foreground">
            <span>{project.period}</span>
            <span>{project.role}</span>
            <div className="flex-1" />
            {githubLink ? (
              <a
                href={githubLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-accent"
              >
                Code <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
            {demoLink ? (
              <a
                href={demoLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-accent"
              >
                Live demo <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="my-4 flex items-center justify-center rounded-lg border border-border bg-surface p-10 text-foreground/70">
            <ProjectVisualIcon visual={project.visual} className="h-full max-h-[220px] w-full" />
          </div>
        </Reveal>

        <div className="divide-y divide-border">
          <Reveal>
            <CaseStudyBlock eyebrow="Problem">
              <p className="text-pretty text-[15.5px] leading-[1.75] text-foreground/85">
                {project.problem}
              </p>
            </CaseStudyBlock>
          </Reveal>

          <Reveal>
            <CaseStudyBlock eyebrow="Approach">
              <ul className="space-y-3.5">
                {project.approach.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[15.5px] leading-[1.7] text-foreground/85">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </CaseStudyBlock>
          </Reveal>

          <Reveal>
            <CaseStudyBlock eyebrow="Impact">
              <ul className="space-y-3.5">
                {project.impact.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[15.5px] leading-[1.7] text-foreground/85">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </CaseStudyBlock>
          </Reveal>

          <Reveal>
            <CaseStudyBlock eyebrow="Stack">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </CaseStudyBlock>
          </Reveal>
        </div>
      </Container>
    </article>
  );
}

export { CaseStudy };
