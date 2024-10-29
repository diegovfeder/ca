import { Project, ProjectDetails, Category } from "@/types";

export const comercialProjects: Project[] = [
  {
    id: "auau",
    title: "AUAU CARLOS DE CARVALHO",
    image: "/images/projetos/comercial/auau/hero.jpg",
    category: Category.COMERCIAL,
    isFeatured: true,
  },
  {
    id: "fiep",
    title: "FIEP - SALÃO DE EVENTOS",
    image: "/images/projetos/comercial/fiep/hero.jpg",
    category: Category.COMERCIAL,
  },
  {
    id: "eurobusiness",
    title: "LOBBY EUROBUSINESS",
    image: "/images/projetos/comercial/eurobusiness/hero.jpg",
    category: Category.COMERCIAL,
    isFeatured: true,
  },
];

// Detailed project data
export const comercialProjectDetails: ProjectDetails[] = [
  {
    ...comercialProjects[0],
    description: "TODO: ...",
    images: [
      "/images/projetos/comercial/auau/detalhes/01.jpg",
      "/images/projetos/comercial/auau/detalhes/02.jpg",
      "/images/projetos/comercial/auau/detalhes/03.jpg",
      "/images/projetos/comercial/auau/detalhes/04.jpg",
      "/images/projetos/comercial/auau/detalhes/05.jpg",
      "/images/projetos/comercial/auau/detalhes/06.jpg",
      "/images/projetos/comercial/auau/detalhes/07.jpg",
      "/images/projetos/comercial/auau/detalhes/08.jpg",
      "/images/projetos/comercial/auau/detalhes/09.jpg",
      "/images/projetos/comercial/auau/detalhes/10.jpg",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...comercialProjects[1],
    description: "TODO: ...",
    images: [
      "/images/projetos/comercial/fiep/detalhes/01.jpg",
      "/images/projetos/comercial/fiep/detalhes/02.jpg",
      "/images/projetos/comercial/fiep/detalhes/03.jpg",
      "/images/projetos/comercial/fiep/detalhes/04.jpg",
    ],
    // TODO: Check year
    year: 2020,
    location: "Curitiba, PR",
  },
  {
    ...comercialProjects[2],
    description: "TODO: ...",
    images: [
      "/images/projetos/comercial/eurobusiness/detalhes/01.jpg",
      "/images/projetos/comercial/eurobusiness/detalhes/02.jpg",
      "/images/projetos/comercial/eurobusiness/detalhes/03.jpg",
      "/images/projetos/comercial/eurobusiness/detalhes/04.jpg",
    ],
    // TODO: Check year
    year: 2022,
    location: "Curitiba, PR",
  },
];
