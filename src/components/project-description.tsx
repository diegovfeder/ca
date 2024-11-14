import React from "react";

// FIXME: These is something wrong with passing this props in regard to what we have in projetos/[id]
interface ProjectDetails {
  location: string;
  status: string;
  projectDate: string;
  constructionDate: string;
  photographer: string;
  description: string;
}

interface ProjectDescriptionProps {
  details: ProjectDetails;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ project }) => {
  return (
    <>
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
    </>
  );
};

export default ProjectDescription;
