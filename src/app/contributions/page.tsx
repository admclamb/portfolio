import { Container } from "@/components/container/container";
import { Layout } from "@/components/layout";
import { SidebarMainHeader } from "@/components/sidebar/sidebar-main-header";
import { routerConfig } from "../router-config";
import { TMuted } from "@/components/typography/t-muted";
import { ContributionsList } from "@/features/contributions/contributions";

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
          <h2 className="title text-5xl">My open source contributions</h2>
          <TMuted>
            I love contributing to open source anyway I can. Heres all my work.
          </TMuted>
        </section>
        <ContributionsList />
      </Container>
    </Layout>
  );
}
