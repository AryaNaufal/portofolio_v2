import { Metadata } from "next";
import Navbar from "@/components/navbar";
import ArticleClientPage from "@/components/article-client";
import Footer from "@/components/footer";
import { getAllArticles } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Katalog Artikel & Wawasan Tech",
  description:
    "Jelajahi panduan lengkap belajar HTML5, web development, dan wawasan pemrograman terbaru karya Arya Naufal.",
  openGraph: {
    title: "Katalog Artikel & Wawasan Tech | Arya Naufal",
    description:
      "Jelajahi panduan lengkap belajar HTML5, web development, dan wawasan pemrograman terbaru karya Arya Naufal.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalog Artikel & Wawasan Tech | Arya Naufal",
    description:
      "Jelajahi panduan lengkap belajar HTML5, web development, dan wawasan pemrograman terbaru karya Arya Naufal.",
  },
};

export default function ArticlePage() {
  const articles = getAllArticles();

  return (
    <>
      <Navbar />
      <ArticleClientPage articles={articles} />
      <Footer />
    </>
  );
}
