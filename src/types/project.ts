export enum Category {
  RESIDENCIAL = "residencial",
  COMERCIAL_E_CORPORATIVO = "comercial_e_corporativo",
  MOSTRAS = "mostras",
}

// Base 'Project' interface for home and filter pages
export interface Project {
  id: string;
  title: string;
  image: string;
  category: Category;
}

// Extended 'ProjectDetails' interface for project/[id] page
export interface ProjectDetails extends Project {
  description: string;
  images: string[];
  year: number;
  location: string;
  status?: string;
  date?: string;
  constructionDate?: string;
  photographer?: string;
}
