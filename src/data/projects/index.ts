import { comercialProjects, comercialProjectDetails } from "./comercial";
import { corporativoProjectDetails, corporativoProjects } from "./corporativo";
import { mostrasProjectDetails, mostrasProjects } from "./mostras";
import { residencialProjectDetails, residencialProjects } from "./residencial";

const projects = [
  ...comercialProjects,
  ...corporativoProjects,
  ...mostrasProjects,
  ...residencialProjects,
];

const projectDetails = [
  ...comercialProjectDetails,
  ...corporativoProjectDetails,
  ...mostrasProjectDetails,
  ...residencialProjectDetails,
];

export { projects, projectDetails };
