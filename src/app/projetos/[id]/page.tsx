import Image from "next/image";
import { notFound } from "next/navigation";
import { projectDetails } from "@/data";

interface ProjectPageProps {
  params: {
    id: string;
  };
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
    <main className="container mx-auto px-4 pt-24">
      <div className="mx-auto">
        <h1 className="text-4xl font-black text-center pb-8 tracking-tighter">
          {project.title}
        </h1>
        {/* <p className="mt-6 text-lg">{project.description}</p> */}

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
