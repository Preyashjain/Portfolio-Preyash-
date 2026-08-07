# Preyash Jain — Portfolio

Rebuilt from scratch on Next.js 16 (App Router, Turbopack), React 19, TypeScript, and Tailwind CSS v4. No UI kit runtime dependency — the shadcn-style primitives in `components/ui` are owned code, not an installed package.

## Stack

- **Next.js 16** — App Router, Server Components by default, static generation for every route
- **TypeScript**, strict mode
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.js`; tokens live in `app/globals.css`
- **motion** (the current name for Framer Motion) — scroll reveals, staggered entrances
- **next-themes** — light/dark, system-aware
- **Geist Sans / Geist Mono** — self-hosted via `next/font`, zero layout shift

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint      # eslint
```

Requires Node 20.9+.

## Environment variables

Copy `.env.example` to `.env.local` if you want the live GitHub contribution calendar (optional — see `lib/github.ts` for the fallback behavior if you skip this):

```
GITHUB_TOKEN=your_fine_grained_token_with_read:user_scope
```

Set this in Vercel under **Project Settings → Environment Variables**, not in a committed file.

## Project structure

```
app/                  routes, layouts, metadata files (sitemap, robots, manifest, OG image)
components/
  ui/                 owned primitives (button, badge, container, section-heading)
  layout/             nav, footer, theme toggle/provider
  sections/            homepage sections
  shared/              reveal/stagger animation wrappers, spotlight card
  visuals/             the generated SVG illustrations (waveform, point cloud, marketplace graph)
  work/                 case-study page template
lib/
  data/                content — projects, experience, skills, nav (edit these, not the components)
  github.ts             GitHub REST + GraphQL data fetching, fails soft everywhere
  constants.ts           site config + motion tokens
types/                   shared TypeScript types
```

To add a project: add an entry to `lib/data/projects.ts`. `featured: true` gets a full case-study card + a `/work/[slug]` page; `featured: false` goes in the smaller grid. To change any copy, experience entry, or skill, edit the corresponding file in `lib/data/` — no component code needs to change.

## Before you publish — things I couldn't verify or complete for you

1. **Your live link is currently broken for anyone but you.** The URL you gave me (`preyash-portfolio-2vp5aiqnz-...vercel.app`) is a hashed *preview* deployment, which Vercel puts behind a login wall by default. Find your actual production domain in the Vercel dashboard (no random hash — something like `preyash-portfolio.vercel.app`, or a custom domain if you add one) and use that everywhere: CV, LinkedIn, email signature. I've set `siteConfig.url` in `lib/constants.ts` to a guess at this — confirm and correct it.

2. **Every project's GitHub link is a placeholder.** I hit GitHub's API rate limit while researching (unauthenticated requests are capped at 60/hour, and this sandbox's IP had already used its quota), so I couldn't pull your real repo list. Every `links` entry in `lib/data/projects.ts` currently points at your GitHub profile root, marked `// TODO(link)`. Search that file for `TODO(link)` and swap in the real repo URLs — and if the creator-marketplace repo is private, either remove that link or leave it pointed at your profile.

3. **Double-check the Gudsky end date.** Your old site says "Oct 2025 – Present." I have a note elsewhere suggesting it ended around March 2026. I defaulted to what your own site said, in `lib/data/experience.ts` — but confirm which is actually correct before this goes live. It's exactly the kind of detail that comes up in an interview.

4. **Add real project screenshots if you have them.** Every visual on the site right now is a generated SVG (the waveform, point cloud, and marketplace graph are all mathematically generated from your actual project parameters, not stock art) — deliberate, and they hold up fine on their own. But if you have an actual screenshot of the creator-marketplace UI or a plot from the gravitational-wave project, swapping one in for that specific case study would strengthen it further.

5. **The OG image has a very minor rendering quirk.** `app/opengraph-image.tsx` generates a branded social-preview image on the fly — there's a slightly uneven word gap in the headline that comes from the image-generation library itself (Satori), not from the text content — I checked. Cosmetic only; doesn't affect anything functional.

## Deploying

Push to a GitHub repo and import it in Vercel — zero config needed beyond the optional `GITHUB_TOKEN`. Framework preset (Next.js) is auto-detected.
