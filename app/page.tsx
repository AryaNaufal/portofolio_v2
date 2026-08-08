import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { getAllArticles } from "@/lib/markdown";

const About = dynamic(() => import("@/components/about"), {
  loading: () => <div className="min-h-screen" />,
});

const Project = dynamic(() => import("@/components/project"), {
  loading: () => <div className="min-h-screen" />,
});

const Article = dynamic(() => import("@/components/article"), {
  loading: () => <div className="min-h-screen" />,
});

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <footer className="h-32" />,
});

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
