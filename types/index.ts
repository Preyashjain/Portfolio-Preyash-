export type ProjectVisual = "waveform" | "pointcloud" | "marketplace" | "generic";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  oneLiner: string;
  status: string;
  period: string;
  role: string;
  featured: boolean;
  visual: ProjectVisual;
  stack: string[];
  problem: string;
  approach: string[];
  impact: string[];
  links: ProjectLink[];
}

export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  title: string;
  org: string;
  location?: string;
  period: string;
  points: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface NavLink {
  href: string;
  label: string;
}
