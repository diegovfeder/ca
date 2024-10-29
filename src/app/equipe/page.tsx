import { TeamMember } from "@/components";
import Image from "next/image";

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
      {/* Header Section */}
      <h1 className="text-4xl font-light text-stone-950 mb-12">Equipe</h1>

      {/* Quote Section */}
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

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="group">
            {member.imageUrl && (
              <div className="overflow-hidden mb-6 relative border-b border-black">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={256}
                  height={400}
                  className="object-cover object-center"
                />
              </div>
            )}
            <h3 className="text-xl font-medium text-stone-950 mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">
              {member.title}
            </p>
            <p className="text-neutral-400 leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
