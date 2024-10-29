import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectImageProps {
  project: Project;
}

// TODO: Improve UI, hover effect, etc...
// FIXME: Project details
const ProjectImage: React.FC<ProjectImageProps> = ({ project }) => {
  return (
    <Link
      key={project.id}
      href={`/projetos/${project.id}`}
      className="group relative overflow-hidden border-b border-black"
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-2xl font-black tracking-tight">{project.title}</h2>
      </div>
    </Link>
  );
};

export default ProjectImage;
