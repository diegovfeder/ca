import { Project, ProjectDetails, Category } from "@/types";

export const residencialProjects: Project[] = [
  {
    id: "apt-frb",
    title: "APARTAMENTO FRB",
    image: "/images/projetos/residencial/apt-frb/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-miami-mgg",
    title: "APARTAMENTO MIAMI MGG",
    image: "/images/projetos/residencial/apt-miami-mgg/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "res-arc",
    title: "RESIDÊNCIA ARC",
    image: "/images/projetos/residencial/res-arc/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-trw",
    title: "APARTAMENTO TRW",
    image: "/images/projetos/residencial/apt-trw/hero.jpg",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-cee",
    title: "APARTAMENTO CEE",
    image: "/images/projetos/residencial/apt-cee/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-litoral-vlr",
    title: "APARTAMENTO LITORAL VLR",
    image: "/images/projetos/residencial/apt-litoral-vlr/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-litoral-rrm",
    title: "APARTAMENTO LITORAL RRM",
    image: "/images/projetos/residencial/apt-litoral-rrm/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "res-miami-mgg",
    title: "RESIDÊNCIA MIAMI MGG",
    image: "/images/projetos/residencial/apt-litoral-mgg/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "res-erg",
    title: "RESIDÊNCIA ERG",
    image: "/images/projetos/residencial/res-erg/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-litoral-ajb",
    title: "APARTAMENTO LITORAL AJB",
    image: "/images/projetos/residencial/apt-litoral-ajb/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-cib",
    title: "APARTAMENTO CIB",
    image: "/images/projetos/residencial/apt-cib/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-jw",
    title: "APARTAMENTO JW",
    image: "/images/projetos/residencial/apt-jw/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "res-ajb",
    title: "RESIDÊNCIA AJB",
    image: "/images/projetos/residencial/res-ajb/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-rp",
    title: "APARTAMENTO RP",
    image: "/images/projetos/residencial/apt-rp/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-litoral-cee",
    title: "APARTAMENTO LITORAL CEE",
    image: "/images/projetos/residencial/apt-litoral-cee/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "ed-trianon",
    title: "EDIFÍCIO TRIANON",
    image: "/images/projetos/residencial/ed-trianon/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-prg",
    title: "APARTAMENTO PRG",
    image: "/images/projetos/residencial/apt-prg/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-nld",
    title: "APARTAMENTO NLD",
    image: "/images/projetos/residencial/apt-nld/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-dcm",
    title: "APARTAMENTO DCM",
    image: "/images/projetos/residencial/apt-dcm/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-litoral-lgb",
    title: "APARTAMENTO LITORAL LGB",
    image: "/images/projetos/residencial/apt-litoral-lgb/hero.webp",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-lfa",
    title: "APARTAMENTO LFA",
    image: "/images/projetos/residencial/apt-lfa/hero.webp",
    category: Category.RESIDENCIAL,
  },
];

// TODO: Add all images that we have in the public/images/projetos/... folders
export const residencialProjectDetails: ProjectDetails[] = [
  {
    ...residencialProjects[0],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-frb/detalhes/01.webp",
      "/images/projetos/residencial/apt-frb/detalhes/02.webp",
      "/images/projetos/residencial/apt-frb/detalhes/03.webp",
      // TODO: Add until 24 webp images
    ],
    year: 2024,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[1],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-miami-mgg/detalhes/01.webp",
      "/images/projetos/residencial/apt-miami-mgg/detalhes/02.webp",
      "/images/projetos/residencial/apt-miami-mgg/detalhes/03.webp",
      // Add more images as needed
    ],
    year: 2023,
    location: "Miami, FL",
  },
  {
    ...residencialProjects[2],
    description: "Residencial Arc",
    images: [
      "/images/projetos/residencial/res-arc/detalhes/01.webp",
      "/images/projetos/residencial/res-arc/detalhes/02.webp",
      "/images/projetos/residencial/res-arc/detalhes/03.webp",
      "/images/projetos/residencial/res-arc/detalhes/04.webp",
      "/images/projetos/residencial/res-arc/detalhes/05.webp",
      "/images/projetos/residencial/res-arc/detalhes/06.webp",
      "/images/projetos/residencial/res-arc/detalhes/07.webp",
      "/images/projetos/residencial/res-arc/detalhes/08.webp",
      "/images/projetos/residencial/res-arc/detalhes/09.webp",
      "/images/projetos/residencial/res-arc/detalhes/10.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[3],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-trw/detalhes/01.webp",
      "/images/projetos/residencial/apt-trw/detalhes/02.webp",
      "/images/projetos/residencial/apt-trw/detalhes/03.webp",
      "/images/projetos/residencial/apt-trw/detalhes/04.webp",
      "/images/projetos/residencial/apt-trw/detalhes/05.webp",
      "/images/projetos/residencial/apt-trw/detalhes/06.webp",
      // TODO: Add until 25 images
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },

  {
    ...residencialProjects[4],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-cee/detalhes/01.webp",
      "/images/projetos/residencial/apt-cee/detalhes/02.webp",
      "/images/projetos/residencial/apt-cee/detalhes/03.webp",
      "/images/projetos/residencial/apt-cee/detalhes/04.webp",
      "/images/projetos/residencial/apt-cee/detalhes/05.webp",
      "/images/projetos/residencial/apt-cee/detalhes/06.webp",
      "/images/projetos/residencial/apt-cee/detalhes/07.webp",
      "/images/projetos/residencial/apt-trw/detalhes/08.webp",
      // TODO: Add until 25 images
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },

  {
    ...residencialProjects[5],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-litoral-vlr/detalhes/01.webp",
      "/images/projetos/residencial/apt-litoral-vlr/detalhes/02.webp",
      "/images/projetos/residencial/apt-litoral-vlr/detalhes/03.webp",
      "/images/projetos/residencial/apt-litoral-vlr/detalhes/04.webp",
      "/images/projetos/residencial/apt-litoral-vlr/detalhes/05.webp",
      "/images/projetos/residencial/apt-litoral-vlr/detalhes/06.webp",
      "/images/projetos/residencial/apt-litoral-vlr/detalhes/07.webp",
      "/images/projetos/residencial/apt-litoral-vlr/detalhes/08.webp",
      "/images/projetos/residencial/apt-litoral-vlr/detalhes/09.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[6],
    description: "Apartamento Litoral RRM",
    images: [
      "/images/projetos/residencial/apt-litoral-rrm/detalhes/01.webp",
      "/images/projetos/residencial/apt-litoral-rrm/detalhes/02.webp",
      "/images/projetos/residencial/apt-litoral-rrm/detalhes/03.webp",
      "/images/projetos/residencial/apt-litoral-rrm/detalhes/04.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[7],
    description: "TODO: ...",
    images: ["/images/projetos/residencial/apt-litoral-mgg/detalhes/01.webp"],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[8],
    description: "Residencia ERG",
    images: [
      "/images/projetos/residencial/res-erg/detalhes/01.webp",
      "/images/projetos/residencial/res-erg/detalhes/02.webp",
      "/images/projetos/residencial/res-erg/detalhes/03.webp",
      "/images/projetos/residencial/res-erg/detalhes/04.webp",
      "/images/projetos/residencial/res-erg/detalhes/05.webp",
      "/images/projetos/residencial/res-erg/detalhes/06.webp",
      // TODO: Add until 25 images
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[9],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-litoral-ajb/detalhes/01.webp",
      "/images/projetos/residencial/apt-litoral-ajb/detalhes/02.webp",
      "/images/projetos/residencial/apt-litoral-ajb/detalhes/03.webp",
      "/images/projetos/residencial/apt-litoral-ajb/detalhes/04.webp",
      "/images/projetos/residencial/apt-litoral-ajb/detalhes/05.webp",
      "/images/projetos/residencial/apt-litoral-ajb/detalhes/06.webp",
      "/images/projetos/residencial/apt-litoral-ajb/detalhes/07.webp",
      "/images/projetos/residencial/apt-litoral-ajb/detalhes/08.webp",
      "/images/projetos/residencial/apt-litoral-ajb/detalhes/09.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[10],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-cib/detalhes/01.webp",
      "/images/projetos/residencial/apt-cib/detalhes/02.webp",
      "/images/projetos/residencial/apt-cib/detalhes/03.webp",
      "/images/projetos/residencial/apt-cib/detalhes/04.webp",
      "/images/projetos/residencial/apt-cib/detalhes/05.webp",
      "/images/projetos/residencial/apt-cib/detalhes/06.webp",
      "/images/projetos/residencial/apt-cib/detalhes/07.webp",
      "/images/projetos/residencial/apt-cib/detalhes/08.webp",
      "/images/projetos/residencial/apt-cib/detalhes/09.webp",
      "/images/projetos/residencial/apt-cib/detalhes/10.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[11],
    description: "Apartamento JW",
    images: ["/images/projetos/residencial/apt-jw/detalhes/01.webp"],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[12],
    description: "Residencia AJB",
    images: [
      "/images/projetos/residencial/res-ajb/detalhes/01.webp",
      "/images/projetos/residencial/res-ajb/detalhes/02.webp",
      "/images/projetos/residencial/res-ajb/detalhes/03.webp",
      "/images/projetos/residencial/res-ajb/detalhes/04.webp",
      "/images/projetos/residencial/res-ajb/detalhes/05.webp",
      "/images/projetos/residencial/res-ajb/detalhes/06.webp",
      "/images/projetos/residencial/res-ajb/detalhes/07.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[13],
    description: "Apartamento RP",
    images: ["/images/projetos/residencial/apt-rp/detalhes/01.webp"],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[14],
    description: "Apartamento Litoral CEE",
    images: [
      "/images/projetos/residencial/apt-litoral-cee/detalhes/01.webp",
      "/images/projetos/residencial/apt-litoral-cee/detalhes/02.webp",
      "/images/projetos/residencial/apt-litoral-cee/detalhes/03.webp",
      "/images/projetos/residencial/apt-litoral-cee/detalhes/04.webp",
      "/images/projetos/residencial/apt-litoral-cee/detalhes/05.webp",
      "/images/projetos/residencial/apt-litoral-cee/detalhes/06.webp",
      "/images/projetos/residencial/apt-litoral-cee/detalhes/07.webp",
      "/images/projetos/residencial/apt-litoral-cee/detalhes/08.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[15],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/ed-trianon/detalhes/01.webp",
      "/images/projetos/residencial/ed-trianon/detalhes/02.webp",
      "/images/projetos/residencial/ed-trianon/detalhes/03.webp",
      "/images/projetos/residencial/ed-trianon/detalhes/04.webp",
      "/images/projetos/residencial/ed-trianon/detalhes/05.webp",
      "/images/projetos/residencial/ed-trianon/detalhes/06.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[16],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-prg/detalhes/01.webp",
      "/images/projetos/residencial/apt-prg/detalhes/02.webp",
      "/images/projetos/residencial/apt-prg/detalhes/03.webp",
    ],
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[17],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-nld/detalhes/01.webp",
      "/images/projetos/residencial/apt-nld/detalhes/02.webp",
      "/images/projetos/residencial/apt-nld/detalhes/03.webp",
      "/images/projetos/residencial/apt-nld/detalhes/04.webp",
      "/images/projetos/residencial/apt-nld/detalhes/05.webp",
      "/images/projetos/residencial/apt-nld/detalhes/06.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[18],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-dcm/detalhes/01.webp",
      "/images/projetos/residencial/apt-dcm/detalhes/02.webp",
      "/images/projetos/residencial/apt-dcm/detalhes/03.webp",
      "/images/projetos/residencial/apt-dcm/detalhes/04.webp",
      "/images/projetos/residencial/apt-dcm/detalhes/05.webp",
      "/images/projetos/residencial/apt-dcm/detalhes/06.webp",
      "/images/projetos/residencial/apt-dcm/detalhes/07.webp",
      "/images/projetos/residencial/apt-dcm/detalhes/08.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[19],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-litoral-lgb/detalhes/01.webp",
      "/images/projetos/residencial/apt-litoral-lgb/detalhes/02.webp",
      "/images/projetos/residencial/apt-litoral-lgb/detalhes/03.webp",
      "/images/projetos/residencial/apt-litoral-lgb/detalhes/04.webp",
      "/images/projetos/residencial/apt-litoral-lgb/detalhes/05.webp",
      "/images/projetos/residencial/apt-litoral-lgb/detalhes/06.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
  {
    ...residencialProjects[20],
    description: "TODO: ...",
    images: [
      "/images/projetos/residencial/apt-lfa/detalhes/01.webp",
      "/images/projetos/residencial/apt-lfa/detalhes/02.webp",
      "/images/projetos/residencial/apt-lfa/detalhes/03.webp",
      "/images/projetos/residencial/apt-lfa/detalhes/04.webp",
      "/images/projetos/residencial/apt-lfa/detalhes/05.webp",
      "/images/projetos/residencial/apt-lfa/detalhes/06.webp",
      "/images/projetos/residencial/apt-lfa/detalhes/07.webp",
      "/images/projetos/residencial/apt-lfa/detalhes/08.webp",
    ],
    // TODO: Check year
    year: 2021,
    location: "Curitiba, PR",
  },
];
