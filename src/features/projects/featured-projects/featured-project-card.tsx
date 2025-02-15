import { routerConfig } from "@/app/router-config";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Project } from "@/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type FeaturedProjectCardProps = {
  project: Project;
};

export const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  return (
    <Card>
      <CardContent className="py-5">
        <Image
          src={project.coverImage}
          alt={`${project.title} cover image`}
          width={300}
          height={200}
          className="w-full p-5"
        />
        <CardTitle className="text-base">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-2">
          {project.description}
        </p>
        <ul className="flex items-center flex-wrap gap-3">
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
      </CardContent>
    </Card>
  );
};
