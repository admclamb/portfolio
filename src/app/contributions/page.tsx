import { Layout } from "~/components/layout";
import { SidebarMainHeader } from "~/components/sidebar/sidebar-main-header";
import { routerConfig } from "../router-config";
import { ContributionsList } from "~/features/contributions/contributions";
import { Container } from "~/components/container";

export default function Contributions() {
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
              href: routerConfig.contributions.path,
              name: "Contributions",
            },
          ]}
        />
        <section className="flex flex-col gap-2">
          {/* <span className="text-4xl">💼</span> */}
          <h2 className="text-3xl font-bold tracking-tight">
            My open source contributions
          </h2>
          <p className="text-muted-foreground">
            I love contributing to open source anyway I can. Heres all my work.
          </p>
        </section>
        <ContributionsList />
      </Container>
    </Layout>
  );
}
