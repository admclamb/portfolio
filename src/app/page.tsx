import { Layout } from "@/components/layout";
import { routerConfig } from "./router-config";
import { Container } from "@/components/container/container";
import { SidebarMainHeader } from "@/components/sidebar/sidebar-main-header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <Layout>
      <Container>
        <SidebarMainHeader
          breadcrumbs={[
            {
              href: routerConfig.root.path,
              name: "Home",
            },
          ]}
        />
        <Hero />
      </Container>
    </Layout>
  );
}
