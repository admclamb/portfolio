/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Container } from "~/components/container";
import { Layout } from "~/components/layout";
import { SidebarMainHeader } from "~/components/sidebar/sidebar-main-header";
import { HydrateClient } from "~/trpc/server";
import { routerConfig } from "./router-config";
import Hero from "~/features/hero/hero";
import ExperienceCard from "~/features/experience/experience-card";
import { FeaturedProjects } from "~/features/projects/featured-projects/featured-projects";
import { FeaturedContributions } from "~/features/contributions/featured-contributions";

export default async function Home() {
  return (
    <HydrateClient>
      <Layout>
        <Container className="flex flex-col gap-12">
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
    </HydrateClient>
  );
}
