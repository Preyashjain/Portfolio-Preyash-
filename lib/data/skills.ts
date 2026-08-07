import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript / JavaScript", "SQL", "Dart"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "REST API design", "PostgreSQL", "Supabase"],
  },
  {
    category: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "HuggingFace Transformers",
      "LangChain",
      "BayesFlow",
      "spaCy / NLP",
    ],
  },
  {
    category: "Data & Computer Vision",
    items: ["Pandas", "NumPy", "OpenCV", "Open3D"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Git", "Vercel", "IBM Cloud"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Flutter"],
  },
];
