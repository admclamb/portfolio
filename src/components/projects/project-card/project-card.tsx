import { BlurImage } from "@/components/ui/apple-cards-carousel";
import { buttonVariants } from "@/components/ui/button";
import { Project } from "@/config/config";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type ProjectCardProps = {
  project: Project;
  index: number;
  layout?: boolean;
};

const ProjectCard = ({ project, index, layout }: ProjectCardProps) => {
  console.log(project);
  return (
    <motion.div
      layoutId={layout ? `card-${project.title}` : undefined}
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
    >
      <Link href={`/project/${encodeURIComponent(project.slug)}`}>
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={
              layout ? `category-${project.categories.join(", ")}` : undefined
            }
            className="text-muted-foreground text-sm md:text-base font-medium font-sans text-left"
          >
            {dayjs(project.createdAt).format("MMM, YYYY")}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${project.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {project.title}
          </motion.p>
        </div>
        <BlurImage
          src={project.coverImage}
          alt={project.alt}
          fill
          className="object-cover absolute z-10 inset-0 brightness-[0.4]"
        />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
