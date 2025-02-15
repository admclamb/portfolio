import { Layout } from "@/components/layout";
import { routerConfig } from "./router-config";
import { Container } from "@/components/container/container";
import { SidebarMainHeader } from "@/components/sidebar/sidebar-main-header";
import { Hero } from "@/components/hero";
import { ExperienceCard } from "@/features/experience/experience-card";
import { FeaturedProjects } from "@/features/projects/featured-projects/featured-projects";
import { FeaturedContributions } from "@/features/contributions/featured-contributions";

export default function Home() {
  return (
    <Layout>
      <Container className="flex flex-col gap-12 mb-10">
        <SidebarMainHeader
          breadcrumbs={[
            {
              href: routerConfig.root.path,
              name: "Home",
            },
          ]}
        />
        <Hero />
        <ExperienceCard />
        <FeaturedProjects />
        <FeaturedContributions />
      </Container>
    </Layout>
  );
}
