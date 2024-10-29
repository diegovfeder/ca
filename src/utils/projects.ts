import { projects } from "@/data";
import { Project } from "@/types";

// TODO: How do we want to sort or showcase these featured projects?
export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.isFeatured)
    .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
}
