import Image from "next/image";

export default function EquipePage() {
  const architects = [
    {
      firstName: "JULIA",
      lastName: "RAEDER",
      imageUrl: "/images/equipe/julia-raeder.jpg",
    },
    {
      firstName: "THAISA",
      lastName: "COMASSETTO",
      imageUrl: "/images/equipe/thaisa-comasseto.jpg",
    },
    {
      firstName: "BRUNA",
      lastName: "LIGESKI",
      imageUrl: "/images/equipe/bruna-ligeski.jpg",
    },
    // TODO: Update images
    {
      firstName: "HENRIQUE",
      lastName: "DRANSFELD",
      imageUrl: "/images/equipe/henrique-oramsfeld.jpg",
    },
    {
      firstName: "GABRIEL",
      lastName: "LUTZ",
      imageUrl: "/images/equipe/gabriel-lutz.jpg",
    },
  ];

  return (
    <main className="pt-24 px-4 md:px-6 lg:px-8 xl:px-12 pb-8">
      {/* Hero Section - Stack on mobile, side-by-side on desktop */}
      <div className="flex flex-col justify-center md:flex-row gap-8 md:gap-12 mb-16">
        <div className="flex-1 space-y-4 md:space-y-6 text-stone-500 max-w-[520px]">
          <p>
            Mestre em Gestão e Graduada em Arquitetura e Urbanismo pela
            Pontifícia Universidade Católica do Paraná, em seu curriculum
            experiência de projetos desde sua concepção à finalização da obra.
          </p>
          <p>
            O contato contínuo com as tendências mundiais, através de feiras,
            viagens e pesquisas, aliado a um planejamento estratégico, traduzem
            na arte do projetar o equilíbrio entre a forma e a função,
            garantindo a atemporalidade aos espaços.
          </p>
          <p>
            Seus projetos são inteligentes, práticos e harmônicos, com perfeitas
            soluções técnicas de criação para um resultado de bem-estar e
            satisfação.
          </p>
          <p>
            Mestre em Gestão e Graduada em Arquitetura e Urbanismo pela
            Pontifícia Universidade Católica do Paraná, em seu curriculum
            experiência de projetos desde sua concepção à finalização da obra.
          </p>
          <p>
            O contato contínuo com as tendências mundiais, através de feiras,
            viagens e pesquisas, aliado a um planejamento estratégico, traduzem
            na arte do projetar o equilíbrio entre a forma e a função,
            garantindo a atemporalidade aos espaços.
          </p>
          <p>
            Seus projetos são inteligentes, práticos e harmônicos, com perfeitas
            soluções técnicas de criação para um resultado de bem-estar e
            satisfação.
          </p>
        </div>
        {/* Image container */}
        <div className="relative w-full md:w-[520px] h-[400px] md:h-[600px] flex-shrink-0 order-first md:order-last">
          {/* TODO: Update images, improve dimensions */}
          <Image
            src="/images/equipe/caroline-andrusko.png"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Architects Section - Scrollable on mobile */}
      <h2 className="mb-4 md:mb-6 text-stone-400 text-lg text-center font-semibold tracking-[.3em] ">
        ARQUITETOS
      </h2>

      <div className="flex flex-wrap justify-center gap-3 gap-y-9 mb-12">
        {architects.map((architect) => (
          <div key={architect.firstName} className="w-[250px]">
            <div className="relative w-full h-[340px] mb-2">
              <Image
                src={architect.imageUrl}
                alt={architect.firstName}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-start text-md font-semibold text-stone-400 leading-5 tracking-[.3em] flex flex-col">
              <span>{architect.firstName}</span>
              <span>{architect.lastName}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Images - Stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative aspect-[3/2]">
          {/* TODO: Update images */}
          <Image
            // src="/images/equipe/escritorio-exterior.jpg"
            src="/images/projetos/comercial/fiep/hero.webp"
            alt="Office exterior"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/2]">
          <Image
            // src="/images/equipe/escritorio-interior.jpg"
            src="/images/projetos/comercial/fiep/hero.webp"
            alt="Office interior"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
