import { routerConfig } from "@/app/router-config";
import { T2 } from "@/components/typography/t2";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeaturedProjectCard } from "./featured-project-card";

export const FeaturedProjects = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <T2>Featured Projects</T2>
        <Link
          href={routerConfig.projects.path}
          className={buttonVariants({ variant: "ghost" })}
        >
          Show More <ArrowRight />
        </Link>
      </div>
      <section className="grid grid-cols-2 gap-5">
        {projects.map((project) => (
          <FeaturedProjectCard project={project} key={project.title} />
        ))}
      </section>
    </section>
  );
};
