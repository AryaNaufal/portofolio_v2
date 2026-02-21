import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <About />
        <Project />
      </main>
    </>
  );
}
