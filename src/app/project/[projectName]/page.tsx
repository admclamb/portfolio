import Layout from "@/components/layout/layout";
import Navbar from "@/components/layout/navbar/navbar";
import TechnologiesList from "@/components/technologies/technologies-list/technologies-list";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/config/config";
import { cn } from "@/lib/utils";
import { param } from "framer-motion/client";
import { Code, Globe, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { projectName: string };
}) {
  const slug = params.projectName;
  const project = projects.find((project) => project.slug === slug);

  if (!project) return { title: "Not Found" };

  return {
    title: `Project ${project.title}`,
  };
}

export default function WorkPage({
  params,
}: {
  params: { projectName: string };
}) {
  const projectSlug = params.projectName;
  const project = projects.find((project) => project?.slug === projectSlug);

  if (!project) return notFound();

  const {
    title,
    description,
    coverImage,
    alt,
    categories,
    deployedLink,
    githubLink,
    fullDescription,
  } = project;

  return (
    <Layout>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <div className="pt-24 flex flex-col gap-10">
          <div>
            <h1 className="md:text-6xl lg:text-7xl text-center max-w-5xl leading-normal tracking-wide uppercase mx-auto font-black">
              {title}
            </h1>
            <h3 className="md:text-5xl lg:text-6xl text-center max-w-5xl text-muted-foreground leading-normal tracking-wide uppercase mx-auto">
              {description}
            </h3>
          </div>

          <Link href="#image" className="mx-auto my-36">
            <MoveDown className="size-16" strokeWidth={1} />
          </Link>
        </div>
        <div className="rounded-lg overflow-hidden" id="image">
          <Image src={coverImage} width={2000} height={1000} alt={alt} />
        </div>
        <div className="py-6">
          <div className="mt-8 mb-32 flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
            <div className="flex-1">
              <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl dark:text-stone-200 mb-5">
                Project Overview
              </h2>

              <TechnologiesList techStack={categories} />
              <ul className="flex items-center gap-4 mt-10">
                <li>
                  <a
                    href={deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-36"
                    )}
                  >
                    <Globe /> <span>View Site</span>
                  </a>
                </li>
                <li>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-36"
                    )}
                  >
                    <Code /> <span>Source Code</span>
                  </a>
                </li>
              </ul>
            </div>

            <p className="flex-1">{fullDescription}</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
