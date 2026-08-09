import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { featuredProjects, otherProjects } from "@/lib/data/projects";

function Projects() {
  return (
    <section id="work" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Case studies, not a screenshot dump."
          description="Problem, approach, and outcome for each, plus the smaller builds below."
        />

        <div className="space-y-6">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-6 font-mono text-[13px] uppercase tracking-wide text-muted-foreground">
            Other builds
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <div className="group relative rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong">
                  <Badge variant="outline" className="w-fit">
                    {project.status}
                  </Badge>
                  <h4 className="mt-3 text-[15px] font-semibold text-foreground">
                    <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0">
                      {project.name}
                    </Link>
                  </h4>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                    {project.oneLiner}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge key={tech} size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-medium text-foreground/70 transition-transform group-hover:translate-x-0.5">
                    Details
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Projects };
