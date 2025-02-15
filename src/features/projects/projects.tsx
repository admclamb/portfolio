import { projects } from "@/config";
import { ProjectCard } from "./project-card";

export const ProjectsList = () => {
  return (
    <section className="grid grid-cols-2 gap-5">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </section>
  );
};
