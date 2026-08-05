"use client";

import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { ArticleItem } from "@/lib/markdown";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

interface ArticlePrevNextProps {
  prevArticle?: ArticleItem | null;
  nextArticle?: ArticleItem | null;
}

export default function ArticlePrevNext({
  prevArticle,
  nextArticle,
}: ArticlePrevNextProps) {
  const { darkMode } = useTheme();

  if (!prevArticle && !nextArticle) return null;

  return (
    <nav
      aria-label="Navigasi Modul Artikel"
      className="mt-16 pt-8 border-t border-[color:var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {/* Previous Article Card */}
      {prevArticle ? (
        <Link
          href={`/article/${prevArticle.id}`}
          className={`glass-panel group flex flex-col justify-between rounded-3xl p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
            darkMode ? "hover:border-teal-500/50" : "hover:border-teal-500/50"
          }`}
        >
          <div className="flex items-center gap-1.5 text-xs font-bold text-[color:var(--accent)] mb-2">
            <IoArrowBack className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Modul Sebelumnya</span>
          </div>
          <p className="text-sm sm:text-base font-bold line-clamp-2 leading-snug group-hover:text-[color:var(--accent)] transition-colors">
            {prevArticle.title}
          </p>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {/* Next Article Card */}
      {nextArticle && (
        <Link
          href={`/article/${nextArticle.id}`}
          className={`glass-panel group flex flex-col justify-between rounded-3xl p-5 text-right transition-all duration-300 hover:-translate-y-1 ${
            darkMode ? "hover:border-teal-500/50" : "hover:border-teal-500/50"
          }`}
        >
          <div className="flex items-center justify-end gap-1.5 text-xs font-bold text-[color:var(--accent)] mb-2">
            <span>Modul Selanjutnya</span>
            <IoArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          <p className="text-sm sm:text-base font-bold line-clamp-2 leading-snug group-hover:text-[color:var(--accent)] transition-colors">
            {nextArticle.title}
          </p>
        </Link>
      )}
    </nav>
  );
}
