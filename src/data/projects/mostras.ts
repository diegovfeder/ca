import { Project, ProjectDetails, Category } from "@/types";

export const mostrasProjects: Project[] = [
  {
    id: "artefacto-2022",
    title: "ARTEFACTO 2022",
    image: "/images/projetos/mostras/artefacto/2022/hero.webp",
    category: Category.MOSTRAS,
    isFeatured: true,
  },
  {
    id: "artefacto-2021",
    title: "ARTEFACTO 2021",
    image: "/images/projetos/mostras/artefacto/2021/hero.webp",
    category: Category.MOSTRAS,
    isFeatured: true,
  },
  {
    id: "artefacto-2020",
    title: "ARTEFACTO 2020",
    image: "/images/projetos/mostras/artefacto/2020/hero.webp",
    category: Category.MOSTRAS,
  },
  {
    id: "artefacto-2018",
    title: "ARTEFACTO 2018",
    image: "/images/projetos/mostras/artefacto/2018/hero.webp",
    category: Category.MOSTRAS,
  },
  {
    id: "vitrine-artefacto-2020",
    title: "VITRINE ARTEFACTO 2020",
    image: "/images/projetos/mostras/vitrine/artefacto/2020/hero.webp",
    category: Category.MOSTRAS,
  },
  {
    id: "vitrine-botteh-2024",
    title: "VITRINE BOTTEH 2024",
    image: "/images/projetos/mostras/vitrine/botteh/2024/hero.webp",
    category: Category.MOSTRAS,
    isFeatured: true,
  },
];

// Detailed project data
export const mostrasProjectDetails: ProjectDetails[] = [
  {
    ...mostrasProjects[0],
    description: "TODO: ...",
    images: [
      "/images/projetos/mostras/artefacto/2022/detalhes/01.webp",
      "/images/projetos/mostras/artefacto/2022/detalhes/02.webp",
      "/images/projetos/mostras/artefacto/2022/detalhes/03.webp",
      "/images/projetos/mostras/artefacto/2022/detalhes/04.webp",
      "/images/projetos/mostras/artefacto/2022/detalhes/05.webp",
      "/images/projetos/mostras/artefacto/2022/detalhes/06.webp",
      "/images/projetos/mostras/artefacto/2022/detalhes/07.webp",
    ],
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...mostrasProjects[1],
    description: "TODO: ...",
    images: [
      "/images/projetos/mostras/artefacto/2021/detalhes/01.webp",
      "/images/projetos/mostras/artefacto/2021/detalhes/02.webp",
      "/images/projetos/mostras/artefacto/2021/detalhes/03.webp",
      "/images/projetos/mostras/artefacto/2021/detalhes/04.webp",
      "/images/projetos/mostras/artefacto/2021/detalhes/05.webp",
      "/images/projetos/mostras/artefacto/2021/detalhes/06.webp",
      "/images/projetos/mostras/artefacto/2021/detalhes/07.webp",
    ],
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...mostrasProjects[2],
    description: "TODO: ...",
    images: [
      "/images/projetos/mostras/artefacto/2020/detalhes/01.webp",
      "/images/projetos/mostras/artefacto/2020/detalhes/02.webp",
      "/images/projetos/mostras/artefacto/2020/detalhes/03.webp",
      "/images/projetos/mostras/artefacto/2020/detalhes/04.webp",
      "/images/projetos/mostras/artefacto/2020/detalhes/05.webp",
      "/images/projetos/mostras/artefacto/2020/detalhes/06.webp",
      "/images/projetos/mostras/artefacto/2020/detalhes/07.webp",
      "/images/projetos/mostras/artefacto/2020/detalhes/08.webp",
      "/images/projetos/mostras/artefacto/2020/detalhes/09.webp",
    ],
    year: 2020,
    location: "Curitiba, PR",
  },
  {
    ...mostrasProjects[3],
    description: "TODO: ...",
    images: [
      "/images/projetos/mostras/artefacto/2018/detalhes/01.webp",
      "/images/projetos/mostras/artefacto/2018/detalhes/02.webp",
      "/images/projetos/mostras/artefacto/2018/detalhes/03.webp",
      "/images/projetos/mostras/artefacto/2018/detalhes/04.webp",
      "/images/projetos/mostras/artefacto/2018/detalhes/05.webp",
    ],
    year: 2018,
    location: "Curitiba, PR",
  },
  {
    ...mostrasProjects[4],
    description: "TODO: ...",
    images: [
      "/images/projetos/mostras/vitrine/artefacto/2020/detalhes/01.webp",
      "/images/projetos/mostras/vitrine/artefacto/2020/detalhes/02.webp",
    ],
    year: 2020,
    location: "Curitiba, PR",
  },
  {
    ...mostrasProjects[5],
    description: "TODO: ...",
    images: [
      "/images/projetos/mostras/vitrine/botteh/2024/detalhes/01.webp",
      "/images/projetos/mostras/vitrine/botteh/2024/detalhes/02.webp",
      "/images/projetos/mostras/vitrine/botteh/2024/detalhes/03.webp",
      "/images/projetos/mostras/vitrine/botteh/2024/detalhes/04.webp",
      "/images/projetos/mostras/vitrine/botteh/2024/detalhes/05.webp",
      "/images/projetos/mostras/vitrine/botteh/2024/detalhes/06.webp",
      "/images/projetos/mostras/vitrine/botteh/2024/detalhes/07.webp",
    ],
    year: 2024,
    location: "Curitiba, PR",
  },
];
