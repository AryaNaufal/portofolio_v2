"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import ArticleDetailActions from "@/components/article-detail-actions";
import MarkdownRenderer from "@/components/markdown-renderer";
import TableOfContents from "@/components/table-of-contents";
import ArticleSeriesWidget from "@/components/article-series-widget";
import ArticlePrevNext from "@/components/article-prev-next";
import { ArticleItem } from "@/lib/markdown";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoChevronBack,
} from "react-icons/io5";

interface ArticleDetailClientProps {
  article: ArticleItem;
  allArticles: ArticleItem[];
  prevArticle?: ArticleItem | null;
  nextArticle?: ArticleItem | null;
}

export default function ArticleDetailClient({
  article,
  allArticles,
  prevArticle,
  nextArticle,
}: ArticleDetailClientProps) {
  const { darkMode } = useTheme();

  return (
    <main
      className={`min-h-screen pt-28 pb-24 transition-colors duration-700 ${
        darkMode ? "bg-[#0b0f14] text-[#F7F7F7]" : "bg-[#f7f4ee] text-slate-900"
      }`}
    >
      <div className="container max-w-7xl">
        {/* Breadcrumb & Top Actions */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/article"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-sm"
            }`}
          >
            <IoChevronBack className="text-sm" />
            Kembali ke Artikel
          </Link>

          <ArticleDetailActions />
        </div>

        {/* 2-Column Grid: Main Content (Left) & Floating Sidebar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Main Article Column */}
          <article className="lg:col-span-8 space-y-6">
            {/* Article Header */}
            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="pill text-xs font-bold bg-gradient-to-r from-teal-500 to-amber-400 text-slate-950 border-none tracking-wide">
                  {article.category}
                </span>
                <span className={`flex items-center gap-1 text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  <IoCalendarOutline />
                  {article.date}
                </span>
                <span className={`flex items-center gap-1 text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  <IoTimeOutline />
                  {article.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-3 pt-2">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-teal-500">
                  <Image
                    src={article.authorAvatar}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide">{article.author}</p>
                  <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    {article.authorRole}
                  </p>
                </div>
              </div>
            </header>

            {/* Main Cover Image */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            {/* Mobile-Only Table of Contents */}
            <div className="block lg:hidden">
              <TableOfContents markdown={article.rawMarkdown} />
            </div>

            {/* Article Content Rendered with Code Canvas IDE Editor */}
            <MarkdownRenderer content={article.rawMarkdown} />

            {/* Previous & Next Article Navigation */}
            <ArticlePrevNext prevArticle={prevArticle} nextArticle={nextArticle} />
          </article>

          {/* Right Floating Sticky Sidebar (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 self-start space-y-5">
            {/* 1. Table of Contents */}
            <TableOfContents markdown={article.rawMarkdown} isSidebar={true} />

            {/* 2. Series List Widget */}
            <ArticleSeriesWidget articles={allArticles} currentArticleId={article.id} />
          </aside>
        </div>
      </div>
    </main>
  );
}
