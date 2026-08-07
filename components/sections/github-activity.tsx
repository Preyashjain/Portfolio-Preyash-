import { ArrowUpRight, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/constants";
import { getGitHubProfile, getTopRepos, getContributionCalendar } from "@/lib/github";

const LEVEL_OPACITY: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: "bg-muted",
  1: "bg-accent/25",
  2: "bg-accent/50",
  3: "bg-accent/75",
  4: "bg-accent",
};

async function GitHubActivity() {
  const [profile, repos, calendar] = await Promise.all([
    getGitHubProfile(),
    getTopRepos(6),
    getContributionCalendar(),
  ]);

  return (
    <section id="github" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="GitHub"
          title="Pulled live from the source."
          description="Repositories and activity below are fetched directly from the GitHub API — not a static screenshot."
        />

        {profile ? (
          <Reveal>
            <div className="mb-10 flex flex-wrap gap-8 border-b border-border pb-8 font-mono text-[13px]">
              <div>
                <span className="text-[20px] font-semibold text-foreground">
                  {profile.publicRepos}
                </span>
                <span className="ml-1.5 text-muted-foreground">public repos</span>
              </div>
              <div>
                <span className="text-[20px] font-semibold text-foreground">
                  {profile.followers}
                </span>
                <span className="ml-1.5 text-muted-foreground">followers</span>
              </div>
            </div>
          </Reveal>
        ) : null}

        {calendar ? (
          <Reveal>
            <div className="mb-12 overflow-x-auto pb-2">
              <div
                className="grid w-fit gap-[3px]"
                style={{ gridAutoFlow: "column", gridTemplateRows: "repeat(7, 11px)" }}
              >
                {calendar.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.count} contributions on ${day.date}`}
                    className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL_OPACITY[day.level]}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-12 flex items-center justify-between rounded-lg border border-border bg-surface px-5 py-4 text-[14px] text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              See full contribution activity on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        )}

        {repos.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <Reveal key={repo.name} delay={i * 0.04}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong"
                >
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="font-mono text-[11px] text-muted-foreground">/</span>
                    <span className="truncate text-[14px] font-medium">{repo.name}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-4 flex items-center gap-3 font-mono text-[12px] text-muted-foreground">
                    {repo.language ? <span>{repo.language}</span> : null}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {repo.stars}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <p className="text-[14px] text-muted-foreground">
              Couldn&apos;t reach the GitHub API just now —{" "}
              <a href={siteConfig.github} className="text-accent underline underline-offset-2">
                view the profile directly
              </a>
              .
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

export { GitHubActivity };
