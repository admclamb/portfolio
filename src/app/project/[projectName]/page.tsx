import Layout from "@/components/layout/layout";
import Navbar from "@/components/layout/navbar/navbar";
import { projects } from "@/config/config";
import { param } from "framer-motion/client";
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
      <main>
        <div className="pt-36">
          <h1 className="text-center mx-auto text-7xl font-extrabold leading-tight uppsercase max-w-5xl tracking-wide">
            {title}
          </h1>
          <h3 className="text-3xl leading-tight text-center max-w-5xl mx-auto text-muted-foreground">
            {description}
          </h3>
        </div>
      </main>
    </Layout>
  );
}
