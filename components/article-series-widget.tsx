"use client";

import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { ArticleItem } from "@/lib/markdown";
import { IoBookOutline, IoColorPaletteOutline, IoCheckmarkCircle } from "react-icons/io5";

interface ArticleSeriesWidgetProps {
  articles: ArticleItem[];
  currentArticleId: string;
}

export default function ArticleSeriesWidget({
  articles,
  currentArticleId,
}: ArticleSeriesWidgetProps) {
  const { darkMode } = useTheme();

  const isCss = currentArticleId.startsWith("css-");
  const seriesTitle = isCss ? "Seri Belajar CSS3" : "Seri Belajar HTML5";
  const SeriesIcon = isCss ? IoColorPaletteOutline : IoBookOutline;

  // Filter articles so widget only displays modules belonging to current article's series
  const seriesArticles = articles.filter((item) =>
    isCss ? item.id.startsWith("css-") : item.id.startsWith("html-")
  );

  if (seriesArticles.length === 0) return null;

  return (
    <div
      className={`rounded-3xl p-5 border transition-all duration-300 shadow-xl max-h-[calc(100vh-320px)] overflow-y-auto thin-scrollbar ${
        darkMode
          ? "bg-slate-900/90 border-slate-700/80 text-slate-200"
          : "bg-white/90 border-slate-200 text-slate-800 shadow-slate-200/50"
      }`}
    >
      {/* Dynamic Series Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[color:var(--border)]">
        <div className="flex items-center gap-2 font-bold text-sm">
          <SeriesIcon className="text-lg text-[color:var(--accent)]" />
          <span>{seriesTitle}</span>
        </div>
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-medium ${
            darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-600"
          }`}
        >
          {seriesArticles.length} Modul
        </span>
      </div>

      {/* Module List */}
      <nav className="mt-3 space-y-1.5 text-xs">
        {seriesArticles.map((item, idx) => {
          const isCurrent = item.id === currentArticleId;
          const moduleNum = String(idx + 1).padStart(2, "0");

          return (
            <Link
              key={item.id}
              href={`/article/${item.id}`}
              className={`group flex items-start gap-2.5 rounded-xl px-2.5 py-2 transition-all duration-200 ${
                isCurrent
                  ? "bg-gradient-to-r from-teal-500/20 to-teal-500/20 text-[color:var(--accent)] font-bold border border-teal-500 pl-3"
                  : darkMode
                  ? "text-slate-300 hover:bg-slate-800/60 hover:text-teal-300"
                  : "text-slate-700 hover:bg-slate-100 hover:text-teal-700"
              }`}
            >
              {isCurrent ? (
                <IoCheckmarkCircle className="text-teal-500 text-sm mt-0.5 shrink-0" />
              ) : (
                <span className="font-mono text-[10px] text-slate-400 mt-0.5 shrink-0">
                  {moduleNum}.
                </span>
              )}
              <span className="line-clamp-2 leading-snug">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
