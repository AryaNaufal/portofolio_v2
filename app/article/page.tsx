import { Metadata } from "next";
import Navbar from "@/components/navbar";
import ArticleClientPage from "@/components/article-client";
import Footer from "@/components/footer";
import { getAllArticles } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Pusat Panduan & Edukasi Tech",
  description:
    "Jelajahi panduan lengkap, tutorial pemrograman, dan wawasan teknologi terbaru karya Arya Naufal.",
  openGraph: {
    title: "Pusat Panduan & Edukasi Tech | Arya Naufal",
    description:
      "Jelajahi panduan lengkap, tutorial pemrograman, dan wawasan teknologi terbaru karya Arya Naufal.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pusat Panduan & Edukasi Tech | Arya Naufal",
    description:
      "Jelajahi panduan lengkap, tutorial pemrograman, dan wawasan teknologi terbaru karya Arya Naufal.",
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
