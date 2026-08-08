/**
 * NOTE FOR PREYASH: confirm `url` below is actually your production Vercel
 * domain. The link you sent me (preyash-portfolio-2vp5aiqnz-...vercel.app)
 * is a hashed PREVIEW deployment URL — Vercel puts those behind a login
 * wall by default, which means anyone you've sent that link to (recruiters
 * included) has been hitting a Vercel sign-in page instead of your site.
 * Your production domain (no hash, e.g. preyash-portfolio.vercel.app) is
 * public by default. Use that everywhere — CV, LinkedIn, email signature.
 */
export const siteConfig = {
  name: "Preyash Jain",
  title: "AI Engineer & Backend Developer",
  description:
    "AI engineer and backend developer building ML systems, inference pipelines, and production infrastructure. M.Sc. Data Science at TU Dortmund.",
  url: "https://preyash-portfolio.vercel.app",
  email: "preyashjain916@gmail.com",
  location: "Dortmund, Germany",
  github: "https://github.com/Preyashjain",
  githubUsername: "Preyashjain",
  linkedin: "https://www.linkedin.com/in/preyash-jain-91baa8230",
  availability: "Open to Werkstudent & internship roles",
  resume: {
    en: "/resume/preyash-jain-cv-en.pdf",
  },
};

/** Shared motion tokens so every animated component uses the same feel. */
export const motionTokens = {
  ease: [0.16, 1, 0.3, 1] as const, // "ease-out-quart" — decisive but not springy
  duration: {
    fast: 0.15,
    base: 0.4,
    slow: 0.7,
  },
  stagger: 0.08,
};
