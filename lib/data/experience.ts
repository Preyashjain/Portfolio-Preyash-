import type { ExperienceItem } from "@/types";

/**
 * NOTE FOR PREYASH: your old site listed Gudsky as "Oct 2025 – Present."
 * I have it noted elsewhere as ending around Mar 2026. I've defaulted to
 * "Present" here since that's what your own site says — but double-check
 * this before publishing, since it's exactly the kind of detail that
 * comes up in an interview.
 */

export const experience: ExperienceItem[] = [
  {
    id: "tu-dortmund",
    type: "education",
    title: "M.Sc. Data Science",
    org: "TU Dortmund University",
    location: "Dortmund, Germany",
    period: "Apr 2026 — Present",
    points: [
      "Coursework spanning simulation-based inference, industrial data science, and advanced statistical learning.",
    ],
  },
  {
    id: "gudsky",
    type: "work",
    title: "Project Volunteer — GenAI & Backend Engineering",
    org: "Gudsky Research Foundation",
    period: "Oct 2025 — Present",
    points: [
      "Architecting a GenAI webmail system integrating 5 open-source LLMs (Llama 3, Mistral 7B, Phi-3, Gemma 2) via HuggingFace Transformers and Ollama.",
      "Built REST APIs in Flask and PostgreSQL, with multi-provider OAuth 2.0 (Gmail, Outlook) and IMAP/SMTP integration.",
      "Containerized the backend with Docker and added AES-256 credential encryption for GDPR compliance.",
      "Benchmarked LLM output quality and inference speed with BLEU/ROUGE metrics to guide model selection.",
    ],
  },
  {
    id: "ibm-skillsbuild",
    type: "work",
    title: "AI & Cloud Intern",
    org: "Edunet Foundation × IBM SkillsBuild",
    period: "Jul 2025 — Aug 2025",
    points: [
      "Built a RAG pipeline on IBM Cloud using IBM Granite, LangChain, and a Milvus vector database.",
      "Implemented the document chunking, embedding, and vector-indexing stages of the pipeline.",
      "Certified in Machine Learning with Python, AI Fundamentals, and Journey to Cloud (Credly-verified).",
    ],
  },
  {
    id: "sankalp",
    type: "work",
    title: "Data Analysis Intern",
    org: "Sankalp Concepts",
    period: "Oct 2024 — Dec 2024",
    points: [
      "Led a team of 5+ interns on data analysis for school-profiling projects.",
      "Built information-collection pipelines in Excel and Google Sheets to support strategic decisions.",
    ],
  },
  {
    id: "bit-raipur",
    type: "education",
    title: "B.Tech, Computer Science Engineering",
    org: "Bhilai Institute of Technology",
    location: "Raipur, India",
    period: "2021 — 2025",
    points: [],
  },
];
