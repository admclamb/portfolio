import Layout from "@/components/layout/layout";
import Navbar from "@/components/layout/navbar/navbar";
import { projects } from "@/config/config";
import { param } from "framer-motion/client";
import { MoveDown } from "lucide-react";
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

  const { title, description, coverImage, alt, projectOwner } = project;

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
        <div className="py-12"></div>
      </main>
    </Layout>
  );
}
