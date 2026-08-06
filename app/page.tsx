import About from "@/components/about";
import Article from "@/components/article";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import Footer from "@/components/footer";
import { getAllArticles } from "@/lib/markdown";

export default function Home() {
  const articles = getAllArticles();

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <About />
        <Project />
        <Article articles={articles} />
      </main>
      <Footer />
    </>
  );
}
