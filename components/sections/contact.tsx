"use client";

import * as React from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/constants";

function Contact() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API can fail (permissions, insecure context) — the
      // email is still visible and the mailto link below still works.
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[560px] text-center">
            <h2 className="text-balance text-[30px] font-semibold tracking-tight text-foreground md:text-[38px]">
              Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-pretty text-[15.5px] leading-relaxed text-muted-foreground">
              {siteConfig.availability}. If something here is a fit, email is
              the fastest way to reach me.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center rounded-lg border border-border-strong">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="px-5 py-3 font-mono text-[14px] text-foreground"
                >
                  {siteConfig.email}
                </a>
                <button
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="flex h-full items-center border-l border-border-strong px-3.5 py-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {copied ? (
                    <Check className="h-[15px] w-[15px] text-accent" />
                  ) : (
                    <Copy className="h-[15px] w-[15px]" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 pt-1 font-mono text-[12.5px] text-muted-foreground">
                <span>Resume:</span>
                <a href={siteConfig.resume.en} download className="text-accent hover:underline">
                  English
                </a>
                <span aria-hidden>·</span>
                <a href={siteConfig.resume.de} download className="text-accent hover:underline">
                  Deutsch
                </a>
              </div>

              <div className="flex items-center gap-5 pt-1">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted-foreground hover:text-foreground"
                >
                  GitHub
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { Contact };
