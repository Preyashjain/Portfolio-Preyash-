import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";

const facts = [
  { label: "Based in", value: "Dortmund, Germany" },
  { label: "Studying", value: "M.Sc. Data Science, TU Dortmund" },
  { label: "Languages", value: "English (C1) · German (A2)" },
  { label: "Focus", value: "ML systems, backend infrastructure" },
];

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="About" title="Grounded in both research and shipping." />

        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <Reveal>
            <div className="space-y-5 text-pretty text-[16px] leading-[1.75] text-foreground/85">
              <p>
                I&apos;m an M.Sc. Data Science student at TU Dortmund,
                originally from India and now building software in Germany.
                My work sits between two things that don&apos;t always meet:
                rigorous ML, simulation-based inference, calibration
                diagnostics, computer vision from first principles, and the
                unglamorous engineering that makes any of it usable: APIs,
                schemas, containers, tests.
              </p>
              <p>
                Before Dortmund, I completed a B.Tech in Computer Science
                Engineering and worked across GenAI, cloud, and data
                analysis roles. I care more about systems that hold up under
                real use than demos that only work once.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-border rounded-lg border border-border bg-surface">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1 px-5 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="text-[14px] text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { About };
