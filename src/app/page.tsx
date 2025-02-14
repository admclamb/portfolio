import { Layout } from "@/components/layout";
import { routerConfig } from "./router-config";
import { Container } from "@/components/container/container";
import { SidebarMainHeader } from "@/components/sidebar/sidebar-main-header";
import { Hero } from "@/components/hero";
import { ExperienceCard } from "@/features/experience/experience-card";

export default function Home() {
  return (
    <Layout>
      <Container className="flex flex-col gap-10">
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
      </Container>
    </Layout>
  );
}
