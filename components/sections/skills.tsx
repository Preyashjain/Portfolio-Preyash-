import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { skills } from "@/lib/data/skills";

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Skills" title="The toolkit, organized the way I use it." />

        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <h3 className="mb-3.5 font-mono text-[13px] text-accent">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-3 py-1.5 text-[13.5px] text-foreground/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Skills };
