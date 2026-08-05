import About from "@/components/about";
import Article from "@/components/article";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <About />
        <Project />
        <Article />
      </main>
      <Footer />
    </>
  );
}
