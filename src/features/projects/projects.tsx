import { projects } from "~/config";
import { ProjectCard } from "./project-card";

export const ProjectsList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </section>
  );
};
