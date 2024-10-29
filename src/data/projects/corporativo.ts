import { Project, ProjectDetails, Category } from "@/types";

export const corporativoProjects: Project[] = [
  {
    id: "bhs",
    title: "BHS CURITIBA",
    image: "/images/projetos/corporativo/bhs/hero.jpg",
    category: Category.CORPORATIVO,
    isFeatured: true,
  },
  {
    id: "mdgp",
    title: "ESCRITÓRIO MDGP",
    image: "/images/projetos/corporativo/mdgp/hero.jpg",
    category: Category.CORPORATIVO,
  },
  {
    id: "redecam",
    title: "ESCRITÓRIO REDECAM",
    image: "/images/projetos/corporativo/redecam/hero.jpg",
    category: Category.CORPORATIVO,
  },
  {
    id: "linhares-valentini",
    title: "LINHARES & VALENTINI ADVOCACIA",
    image: "/images/projetos/corporativo/linhares/hero.jpg",
    category: Category.CORPORATIVO,
    isFeatured: true,
  },
];

export const corporativoProjectDetails: ProjectDetails[] = [
  {
    ...corporativoProjects[0],
    description: "TODO: ...",
    images: [
      "/images/projetos/corporativo/bhs/detalhes/01.jpg",
      "/images/projetos/corporativo/bhs/detalhes/02.jpg",
      "/images/projetos/corporativo/bhs/detalhes/03.jpg",
      "/images/projetos/corporativo/bhs/detalhes/04.jpg",
      "/images/projetos/corporativo/bhs/detalhes/05.jpg",
      "/images/projetos/corporativo/bhs/detalhes/06.jpg",
      "/images/projetos/corporativo/bhs/detalhes/07.jpg",
      "/images/projetos/corporativo/bhs/detalhes/08.jpg",
      "/images/projetos/corporativo/bhs/detalhes/09.jpg",
      "/images/projetos/corporativo/bhs/detalhes/10.jpg",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...corporativoProjects[1],
    description: "TODO: ...",
    images: [
      "/images/projetos/corporativo/mdgp/detalhes/01.jpg",
      "/images/projetos/corporativo/mdgp/detalhes/02.jpg",
      "/images/projetos/corporativo/mdgp/detalhes/03.jpg",
      "/images/projetos/corporativo/mdgp/detalhes/04.jpg",
      "/images/projetos/corporativo/mdgp/detalhes/05.jpg",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...corporativoProjects[2],
    description: "TODO: ...",
    images: [
      "/images/projetos/corporativo/redecam/detalhes/01.jpg",
      "/images/projetos/corporativo/redecam/detalhes/02.jpg",
      "/images/projetos/corporativo/redecam/detalhes/03.jpg",
      "/images/projetos/corporativo/redecam/detalhes/04.jpg",
      "/images/projetos/corporativo/redecam/detalhes/05.jpg",
      "/images/projetos/corporativo/redecam/detalhes/06.jpg",
      "/images/projetos/corporativo/redecam/detalhes/07.jpg",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...corporativoProjects[3],
    description: "TODO: ...",
    images: [
      "/images/projetos/corporativo/linhares/detalhes/01.jpg",
      "/images/projetos/corporativo/linhares/detalhes/02.jpg",
      "/images/projetos/corporativo/linhares/detalhes/03.jpg",
      "/images/projetos/corporativo/linhares/detalhes/04.jpg",
      "/images/projetos/corporativo/linhares/detalhes/05.jpg",
      "/images/projetos/corporativo/linhares/detalhes/06.jpg",
      "/images/projetos/corporativo/linhares/detalhes/07.jpg",
      "/images/projetos/corporativo/linhares/detalhes/08.jpg",
      "/images/projetos/corporativo/linhares/detalhes/09.jpg",
      "/images/projetos/corporativo/linhares/detalhes/10.jpg",
      "/images/projetos/corporativo/linhares/detalhes/11.jpg",
      "/images/projetos/corporativo/linhares/detalhes/12.jpg",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
];
