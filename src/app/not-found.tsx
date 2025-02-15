import { Container } from "@/components/container/container";
import { Layout } from "@/components/layout";
import { SidebarMainHeader } from "@/components/sidebar/sidebar-main-header";
import { routerConfig } from "./router-config";
import { T1 } from "@/components/typography/t1";
import { TMuted } from "@/components/typography/t-muted";

export default function NotFound() {
  return (
    <Layout>
      <Container className="flex flex-col gap-12">
        <SidebarMainHeader
          breadcrumbs={[
            {
              href: routerConfig.root.path,
              name: "Home",
            },
            {
              href: routerConfig.root.path,
              name: "Not Found",
            },
          ]}
        />
        <section>
          <div className="flex mt-10">
            <div className="border-r flex justify-center items-center p-5">
              <span className="text-6xl title font-bold">404</span>
            </div>
            <div className="p-5 flex flex-col gap-2">
              <T1>The page you are looking for cannot be found...</T1>
              <TMuted>Try going back to the previous page.</TMuted>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
