import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { WaveformVisual } from "@/components/visuals/waveform";
import { StaggerGroup, StaggerItem } from "@/components/shared/stagger-group";
import { siteConfig } from "@/lib/constants";

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-16"
    >
      <Container className="relative z-10 py-20 md:py-28">
        <StaggerGroup className="max-w-[680px]">
          <StaggerItem>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1.5 font-mono text-[12px] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {siteConfig.availability}
              <span className="mx-1 h-3 w-px bg-border-strong" aria-hidden />
              <MapPin className="h-3 w-3" />
              {siteConfig.location}
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-balance text-[38px] font-semibold leading-[1.12] tracking-tight text-foreground md:text-[52px]">
              I build machine learning systems and the backend
              infrastructure they run on.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-[540px] text-pretty text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
              Recent work spans simulation-based inference, 3D computer
              vision, and production RAG pipelines — built alongside an
              M.Sc. in Data Science at TU Dortmund.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#work" size="lg">
                View my work
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#contact" size="lg" variant="outline">
                Get in touch
              </ButtonLink>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Container>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 text-foreground/[0.07] md:h-32"
        aria-hidden
      >
        <WaveformVisual className="h-full w-full" />
      </div>
    </section>
  );
}

export { Hero };
