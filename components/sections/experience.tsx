import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { experience } from "@/lib/data/experience";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where the work happened."
          description="Reverse-chronological. Education and applied work, together."
        />

        <ol className="relative">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05} as="li">
              <div className="grid gap-1 border-b border-border py-7 first:pt-0 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-8 md:py-8">
                <div className="font-mono text-[13px] text-muted-foreground">
                  {item.period}
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <h3 className="text-[16px] font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-[14px] text-muted-foreground">
                      · {item.org}
                    </span>
                  </div>

                  {item.points.length > 0 ? (
                    <ul className="mt-3 space-y-2">
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/75"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export { Experience };
