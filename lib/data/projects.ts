import type { Project } from "@/types";

/**
 * NOTE FOR PREYASH: every `links` entry below points at your GitHub profile
 * root as a safe placeholder — I couldn't pull your actual repo list
 * (GitHub's public API rate-limited the sandbox this was built in). Swap
 * each `href` for the real repo / demo URL before you publish. Search
 * "TODO(link)" to find every spot that needs one.
 */

export const projects: Project[] = [
  {
    slug: "gravitational-wave-inference",
    name: "Amortized Inference for Gravitational-Wave Signals",
    oneLiner:
      "A neural posterior estimator that replaces expensive MCMC sampling with a trained network — built for a Simulation-Based Inference course at TU Dortmund.",
    status: "Coursework — Simulation-Based Inference",
    period: "TU Dortmund · 2026",
    role: "Team project",
    featured: true,
    visual: "waveform",
    stack: ["Python", "BayesFlow", "PyCBC", "Jupyter"],
    problem:
      "Estimating the physical parameters behind a gravitational-wave signal — the properties of the merging bodies that produced it — is classically done with MCMC sampling against a likelihood function. It works, but every new observation means running the sampler again from scratch: accurate, but too slow to amortize across many events.",
    approach: [
      "Framed the problem as simulation-based inference: rather than sampling a posterior per-event, train a neural network once on simulated waveforms so it can produce a posterior for any new observation in a single forward pass.",
      "Generated training data with PyCBC, simulating gravitational-wave signals across the parameter space the network needed to learn.",
      "Trained a BayesFlow neural posterior estimator for 250 epochs on a cosine-decayed learning rate schedule, which gave steadier late-stage convergence than a fixed rate.",
      "Validated calibration with posterior z-score and contraction diagnostics — the standard check for whether a simulation-based posterior is actually trustworthy, not just confident.",
    ],
    impact: [
      "Working amortized pipeline: one trained network produces calibrated posteriors for new signals without re-running inference from scratch.",
      "Calibration diagnostics (z-score vs. contraction) confirmed the posteriors weren't just narrow — they were honest.",
      "Presented findings and methodology in a Beamer deck with a prepared Q&A defense of the modeling choices.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Preyashjain" }], // TODO(link): real repo URL
  },
  {
    slug: "3d-point-cloud-reconstruction",
    name: "3D Reconstruction from Orbital Video",
    oneLiner:
      "Dense point-cloud reconstruction from monocular video, using known orbital camera motion to constrain the geometry — built with a course partner for Industrial Data Science.",
    status: "Coursework — Industrial Data Science",
    period: "TU Dortmund · 2026",
    role: "Team project with Maik",
    featured: true,
    visual: "pointcloud",
    stack: ["Python", "OpenCV", "Open3D", "SuperPoint", "LightGlue"],
    problem:
      "Reconstruct a dense, accurate 3D point cloud of an object from a single orbiting camera — no stereo rig, no depth sensor. The whole problem has to be solved from 2D correspondences and motion alone.",
    approach: [
      "Started with classic SIFT feature matching, then moved to SuperPoint + LightGlue for correspondence detection after early results showed it held up far better under the video's motion blur and repeated texture.",
      "Because the camera moves in a known orbital path, the relative pose between frames isn't fully unknown — that let the reconstruction use the Essential Matrix (5 degrees of freedom) instead of the more general Fundamental Matrix, a tighter formulation that's only valid because the camera constraint is known in advance.",
      "Triangulated matched correspondences across the frame sequence and filtered the resulting cloud in Open3D to remove noisy or low-confidence points before merging.",
    ],
    impact: [
      "Reconstructed and validated 3.2M+ 3D points from a single monocular video sequence.",
      "The SIFT → SuperPoint/LightGlue switch and Fundamental → Essential Matrix simplification were both made in response to professor feedback mid-project — and both measurably improved reconstruction quality.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Preyashjain" }], // TODO(link): real repo URL
  },
  {
    slug: "creator-brand-marketplace",
    name: "Creator–Brand Marketplace",
    oneLiner:
      "An India-first marketplace connecting nano and micro UGC creators with brands — regional-language-first, barter-inclusive, and built as technical co-founder.",
    status: "In development",
    period: "2026 — ongoing",
    role: "Technical co-founder",
    featured: true,
    visual: "marketplace",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Zod", "PostgreSQL"],
    problem:
      "Most creator-brand marketplaces are built around English-first, follower-count-first creators. That leaves out a large tier of nano and micro creators working in regional languages — and brands who'd rather pay in product than cash for smaller, more authentic UGC campaigns.",
    approach: [
      "Designing India-first, from the schema up: regional-language creator profiles and barter-based (product-for-content) deals as first-class flows, not bolted on later.",
      "Built the data layer as a multi-tenant PostgreSQL schema with row-level security policies, so a creator's data and a brand's data are isolated at the database layer, not just the application layer.",
      "Full-stack on Next.js 16 and React 19, with Zod schemas validating data at every boundary between client and server.",
      "Went through a deliberate architecture review before writing more application code — nine schema-level improvements were identified and are being folded in ahead of an architecture freeze.",
    ],
    impact: [
      "Production-grade schema design with RLS from day one, rather than retrofitted after a security review.",
      "Currently pre-launch and in active architecture refinement — the emphasis so far has been on getting the data model right before scaling the surface area of the app.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Preyashjain" }], // TODO(link): real repo URL, or remove if repo is private
  },
  {
    slug: "divehack-intercultural-competence-index",
    name: "Intercultural Competence Index",
    oneLiner:
      "A BERT-based framework for scoring intercultural competence from behavioral text data, built in 24 hours at DiveHack 2026.",
    status: "Hackathon — DiveHack 2026 (TU Dortmund × Volkswagen Group)",
    period: "2026",
    role: "Team project",
    featured: false,
    visual: "generic",
    stack: ["Python", "BERT", "NLP"],
    problem:
      "Give organizations a quantifiable, text-derived signal for intercultural competence instead of relying on self-reported surveys.",
    approach: [
      "Built a BERT-based NLP pipeline to score behavioral and text-based signals against an intercultural-competence framework.",
    ],
    impact: [
      "Delivered a working framework within the hackathon's 24-hour window; listed under Honours & Awards.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Preyashjain" }], // TODO(link): real repo URL
  },
  {
    slug: "titanic-odds",
    name: "titanic-odds",
    oneLiner:
      "An installable Python package wrapping logistic regression with per-feature log-odds explanations — and a real test suite.",
    status: "Coursework — Python, final project",
    period: "2026",
    role: "Solo",
    featured: false,
    visual: "generic",
    stack: ["Python", "scikit-learn", "pytest"],
    problem:
      "Most intro ML class projects stop at a notebook with an accuracy score. The goal here was to ship something closer to a real package: installable, documented, tested, and able to explain its own predictions.",
    approach: [
      "Wrapped a logistic regression model in an installable package rather than a one-off script.",
      "Added per-feature log-odds explanations, so a prediction comes with a readable answer to 'why' — not just a probability.",
      "Backed it with 27 passing tests covering the modeling and explanation logic.",
    ],
    impact: [
      "27/27 tests passing; submitted as the course final project and received positive feedback.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Preyashjain" }], // TODO(link): real repo URL
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
