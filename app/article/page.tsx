import { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getAllArticles } from "@/lib/markdown";

const ArticleClientPage = dynamic(
  () => import("@/components/article-client"),
  { loading: () => <div className="min-h-screen pt-28 bg-[var(--background)] text-[var(--foreground)]" /> }
);

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
