import { TeamMember } from "@/components";

export default function EquipePage() {
  const teamMembers = [
    {
      name: "Julia Raeder",
      title: "Arquiteta",
      description:
        "Arquiteta e Urbanista formada pela Universidade Positivo em 2010, fez carreira com Caroline Andrusko desde 2009. É gerente de projetos arquitetônicos e de interiores. Suas tarefas envolvem a coordenação e o gerenciamento, do desenho técnico à entrega da obra.",
      imageUrl: "/images/equipe/01.jpg",
    },
    {
      name: "Bianca Buzzi",
      title: "Arquiteta",
      description:
        "Arquiteta e urbanista formada pela Universidade Regional de Blumenau no ano de 2011 e pós graduada em Arquitetura e Design de Interiores pela PUCPR. Fez carreira em escritórios de arquitetura e faz parte da equipe da Caroline Andrusko desde 2013. Como coordenadora de projetos, planeja e acompanha o desenvolvimento de projetos e obras.",
      imageUrl: "/images/equipe/02.jpg",
    },
    {
      name: "Thaisa Comasseto",
      title: "Arquiteta",
      description:
        "Arquiteta e Urbanista formada pela UTFPR em 2018, e pós graduada em gerenciamento e execução de obras pela Universidade Positivo em 2021. Com Caroline Andrusko desde 2020.",
      imageUrl: "/images/equipe/03.jpg",
    },
    {
      name: "Renata Hirt",
      title: "Arquiteta",
      description:
        "Arquiteta e Urbanista formada pela PUCPR em 2018. Com Caroline Andrusko desde 2021.",
      // imageUrl: "/images/equipe/04.jpg",
    },
    {
      name: "Bruna Ligeski",
      title: "Arquiteta",
      description:
        "Arquiteta e Urbanista formada pela Universidade Positivo em 2017, e pós graduada em Interiores e Lighting Design pela Universidade Positivo em 2020. Com Caroline Andrusko desde 2021.",
      // imageUrl: "/images/equipe/05.jpg",
    },
  ];

  return (
    <main className="container mx-auto px-4 pt-24 min-h-[calc(100vh-4rem)]">
      <h1 className="text-4xl font-light text-stone-950 mb-12">Equipe</h1>
      <div className="mb-24 relative">
        <div className="absolute top-0 left-0 w-16 h-[1px] bg-stone-600" />
        <blockquote className="pt-8 px-6">
          <p className="text-2xl font-light text-stone-600 italic mb-6">
            &quot;Ninguém faz algo de valor sozinho.&quot;
          </p>
          <p className="text-base text-stone-500 leading-relaxed">
            A equipe Caroline Andrusko Arquitetos é formada de pessoas jovens,
            de atitude, que compartilham ideias e extrapolam limites para
            entregar projetos funcionais com estilo e estética.
          </p>
        </blockquote>
        <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-stone-600" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            title={member.title}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
