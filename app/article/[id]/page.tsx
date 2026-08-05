import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import ArticleDetailClient from "@/components/article-detail-client";
import Footer from "@/components/footer";
import { getArticleById, getAllArticles } from "@/lib/markdown";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const isCss = article.id.startsWith("css-");
  const seriesName = isCss ? "Seri Belajar CSS3" : "Seri Belajar HTML5";

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [
      article.category,
      seriesName,
      isCss ? "Belajar CSS" : "Belajar HTML",
      "Arya Naufal",
      "Web Development",
    ],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();

  // Filter articles belonging ONLY to the same series (html-* or css-*)
  const isCss = article.id.startsWith("css-");
  const seriesArticles = allArticles.filter((a) =>
    isCss ? a.id.startsWith("css-") : a.id.startsWith("html-")
  );

  const currentIndex = seriesArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? seriesArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < seriesArticles.length - 1
      ? seriesArticles[currentIndex + 1]
      : null;

  return (
    <>
      <Navbar />
      <ArticleDetailClient
        article={article}
        allArticles={seriesArticles}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
      />
      <Footer />
    </>
  );
}
