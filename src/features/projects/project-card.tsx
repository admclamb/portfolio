import { routerConfig } from "@/app/router-config";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Project } from "@/config";
import { cn } from "@/lib/utils";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <CardContent className="py-5 flex flex-col gap-3">
        <div className="p-0">
          <div className="relative w-full aspect-[3/2] overflow-hidden">
            <Image
              src={project.coverImage}
              alt={`${project.title} cover image`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <CardTitle className="text-base">{project.title}</CardTitle>
          <p className="text-muted-foreground text-sm mb-2">
            {project.description}
          </p>
        </div>

        <ul className="flex items-center flex-wrap gap-3 mb-5">
          {project.categories.map((categroy) => (
            <li
              key={categroy.id}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "px-1.5 h-6 text-sm"
              )}
            >
              <Link
                href={routerConfig.projects.execute({ tags: [categroy.name] })}
              >
                {categroy.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-3 mt-auto">
          {project.githubLink ? (
            <li>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-7 px-2 font-semibold"
                )}
              >
                <FontAwesomeIcon icon={faGithub} />
                Source
              </a>
            </li>
          ) : null}
          {project.deployedLink ? (
            <li>
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "h-7 px-2 font-semibold"
                )}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
                Deploy
              </a>
            </li>
          ) : null}
        </ul>
      </CardContent>
    </Card>
  );
};
