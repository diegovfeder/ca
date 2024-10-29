export enum Category {
  RESIDENCIAL = "residencial",
  COMERCIAL = "comercial",
  CORPORATIVO = "corporativo",
  MOSTRAS = "mostras",
}

// Base 'Project' interface for home and filter pages
export interface Project {
  id: string;
  title: string;
  image: string;
  category: Category;
  isFeatured?: boolean; // For projects to be displayed on the home page
}

// Extended 'ProjectDetails' interface for project/[id] page
export interface ProjectDetails extends Project {
  description: string;
  images: string[];
  year: number;
  location: string;
  status?: string;
  projectDate?: string;
  constructionDate?: string;
  photographer?: string;
}
