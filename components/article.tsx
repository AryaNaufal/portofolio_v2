"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import {
  IoTimeOutline,
  IoCalendarOutline,
  IoArrowForward,
} from "react-icons/io5";
import type { ArticleItem } from "@/lib/markdown";

interface ArticleSectionProps {
  articles: ArticleItem[];
}

export default function ArticleSection({ articles = [] }: ArticleSectionProps) {
  const { darkMode } = useTheme();
  // Display top 3 articles on the homepage preview
  const recentArticles = articles.slice(0, 3);

  return (
    <section
      className="transition-colors duration-700 relative py-20 bg-background text-foreground border-t border-[color:var(--border)] scroll-mt-24"
      id="article-preview"
    >
      <div className="container">
        {/* Header Title */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-3 max-w-2xl"
          >
            <p
              className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                darkMode ? "text-slate-300/80" : "text-slate-600"
              }`}
            >
              Writing & Insights
            </p>
            <h2 className="text-3xl font-bold md:text-5xl tracking-wide">
              Artikel & <span className="gradient-text">Wawasan</span>
            </h2>
            <p
              className={`text-sm md:text-base tracking-wide ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Kumpulan tulisan seputar teknologi, web development, dan pengalaman teknis.
            </p>
          </motion.div>
        </div>

        {/* Articles Preview Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="glass-panel group flex flex-col justify-between overflow-hidden rounded-3xl text-left transition-transform duration-400 hover:-translate-y-1.5"
            >
              <div>
                {/* Thumbnail Image Clean */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Card Content Body with Category Pill and Letter Spacing */}
                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="pill text-[11px] font-semibold tracking-wide">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className={`flex items-center gap-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        <IoCalendarOutline />
                        {article.date}
                      </span>
                      <span className={`flex items-center gap-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        <IoTimeOutline />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold leading-snug tracking-wide group-hover:text-[color:var(--accent)] transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed tracking-wide line-clamp-3 ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[color:var(--border)] mt-2">
                <span className={`text-xs font-medium tracking-wide ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  Oleh {article.author}
                </span>

                <Link
                  href={`/article/${article.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold tracking-wider text-[color:var(--accent)] transition-colors duration-300 hover:text-[color:var(--accent-2)]"
                >
                  Baca
                  <IoArrowForward className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/article"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 tracking-wider"
          >
            Lihat Semua Artikel
            <IoArrowForward className="text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
}
