import { Layout } from "~/components/layout";
import { SidebarMainHeader } from "~/components/sidebar/sidebar-main-header";
import { routerConfig } from "../router-config";
import { ProjectsList } from "~/features/projects/projects";
import { Container } from "~/components/container";

export default function Projects() {
  return (
    <Layout>
      <Container className="flex flex-col gap-10">
        <SidebarMainHeader
          breadcrumbs={[
            {
              href: routerConfig.root.path,
              name: "Home",
            },
            {
              href: routerConfig.about.path,
              name: "Projects",
            },
          ]}
        />
        <section>
          {/* <span className="text-4xl">💼</span> */}
          <h2 className="text-3xl font-bold tracking-tight">
            What I&apos;ve been working on
          </h2>
        </section>
        <ProjectsList />
      </Container>
    </Layout>
  );
}
