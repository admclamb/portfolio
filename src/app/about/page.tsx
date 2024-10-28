import AboutHero from "@/components/about/about-hero/about-hero";
import Layout from "@/components/layout/layout";
import Navbar from "@/components/layout/navbar/navbar";

export default function About() {
  return (
    <Layout>
      <Navbar />
      <AboutHero />
    </Layout>
  );
}
