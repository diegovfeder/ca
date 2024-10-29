import Image from "next/image";
import { notFound } from "next/navigation";
import { projectDetails } from "@/data";

type Params = Promise<{
  id: string;
}>;

interface ProjectPageProps {
  params: Params;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectDetails.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projeto não encontrado | Caroline Andrusko",
    };
  }

  return {
    title: `${project.title} | Caroline Andrusko`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectDetails.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-24 mb-12">
      <div className="mx-auto">
        <h1 className="text-3xl text-stone-600 text-center pb-8 tracking-wide">
          {project.title}
        </h1>

        <div className="mx-16 grid grid-cols-3 gap-x-8 gap-y-4 mt-8 mb-12 text-stone-600">
          <div>
            <h3 className="font-medium mb-1">Local</h3>
            <p>{project.location}</p>
          </div>

          <div>
            <h3 className="font-medium mb-1">Status</h3>
            <p>{project.status}</p>
          </div>

          <div>
            <h3 className="font-medium mb-1">Projeto</h3>
            <p>{project.projectDate}</p>
          </div>

          <div>
            <h3 className="font-medium mb-1">Obra</h3>
            <p>{project.constructionDate}</p>
          </div>

          <div>
            <h3 className="font-medium mb-1">Fotos</h3>
            <p>{project.photographer}</p>
          </div>
        </div>

        <div className="m-16 text-stone-600">
          <p className="text-lg">{project.description}</p>
        </div>

        <div className="grid gap-1">
          {project.images.map((image, index) => (
            // FIXME: Aspect ratio should be dynamic
            <div key={index} className="relative aspect-[16/9]">
              <Image
                src={image}
                alt={`${project.title} - Imagem ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
            </div>
          ))}
        </div>
        <div className="pt-2 w-full flex justify-between text-xl font-extralight">
          <p>{project.year}</p>
          <p>{project.location}</p>
        </div>
      </div>
    </main>
  );
}
