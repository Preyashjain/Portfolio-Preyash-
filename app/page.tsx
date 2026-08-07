import { Suspense } from "react";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { GitHubActivity } from "@/components/sections/github-activity";
import { Contact } from "@/components/sections/contact";
import { Container } from "@/components/ui/container";

function GitHubSkeleton() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="h-8 w-40 animate-pulse rounded-md bg-muted" />
        <div className="mt-6 h-24 w-full animate-pulse rounded-lg bg-muted" />
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Suspense fallback={<GitHubSkeleton />}>
        <GitHubActivity />
      </Suspense>
      <Contact />
    </>
  );
}
