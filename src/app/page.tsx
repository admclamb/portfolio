import Contributions from "@/components/contributions/contributions";
import Hero from "@/components/hero/hero";
import Layout from "@/components/layout/layout";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies/technologies";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Technologies />
      <Projects />
      <Contributions />
    </Layout>
  );
}
