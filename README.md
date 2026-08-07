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

## Deploying

Push to a GitHub repo and import it in Vercel — zero config needed beyond the optional `GITHUB_TOKEN`. Framework preset (Next.js) is auto-detected.
