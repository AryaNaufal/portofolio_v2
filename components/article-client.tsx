"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { ArticleItem } from "@/lib/markdown";
import {
  IoSearchOutline,
  IoTimeOutline,
  IoCalendarOutline,
  IoArrowForward,
  IoChevronBack,
  IoChevronForward,
  IoCloseCircle,
  IoBookOutline,
  IoColorPaletteOutline,
  IoLayersOutline,
} from "react-icons/io5";

interface ArticleClientProps {
  articles: ArticleItem[];
}

const ITEMS_PER_PAGE = 6;

export default function ArticleClientPage({ articles }: ArticleClientProps) {
  const { darkMode } = useTheme();
  
  // Series Filter State: "Semua Seri" | "Seri Belajar HTML5" | "Seri Belajar CSS3"
  const [selectedSeries, setSelectedSeries] = useState("Semua Seri");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  
  // Instant input & Debounced search state
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Apply 300ms Debounce effect on search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchInput);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSeries, selectedCategory, debouncedSearchQuery]);

  // Helper to determine article series
  const getArticleSeries = (articleId: string) => {
    if (articleId.startsWith("html-")) return "Seri Belajar HTML5";
    if (articleId.startsWith("css-")) return "Seri Belajar CSS3";
    return "Artikel Umum";
  };

  // Separate articles by series
  const htmlArticles = articles.filter((a) => a.id.startsWith("html-"));
  const cssArticles = articles.filter((a) => a.id.startsWith("css-"));

  // Dynamic Categories
  const categories = [
    "Semua",
    ...Array.from(new Set(articles.map((a) => a.category).filter(Boolean))),
  ];

  // Filter articles based on series, category, and debounced search
  const filteredArticles = articles.filter((article) => {
    const articleSeries = getArticleSeries(article.id);
    const matchesSeries =
      selectedSeries === "Semua Seri" || articleSeries === selectedSeries;
    const matchesCategory =
      selectedCategory === "Semua" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(debouncedSearchQuery.toLowerCase());

    return matchesSeries && matchesCategory && matchesSearch;
  });

  // Calculate total pages and paginated slice
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  const handleResetFilters = () => {
    setSelectedSeries("Semua Seri");
    setSearchInput("");
    setDebouncedSearchQuery("");
    setSelectedCategory("Semua");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const gridElement = document.getElementById("articles-grid-top");
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <main
      className={`min-h-screen pt-28 pb-24 transition-colors duration-800 ${
        darkMode ? "bg-[#0b0f14] text-[#F7F7F7]" : "bg-[#f7f4ee] text-gray-900"
      }`}
    >
      <div className="container">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-sm"
            }`}
          >
            <IoChevronBack className="text-sm" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Header Title */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3 max-w-2xl"
          >
            <p
              className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                darkMode ? "text-slate-300/80" : "text-slate-600"
              }`}
            >
              Tech & Programming Articles
            </p>
            <h1 className="text-3xl font-bold md:text-5xl tracking-wide">
              Pusat <span className="gradient-text">Panduan & Edukasi Tech</span>
            </h1>
            <p
              className={`text-sm md:text-base tracking-wide ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Panduan dan modul pembelajaran teknologi modern yang disusun secara terstruktur, praktis, dan mudah dipahami untuk semua tingkat keahlian.
            </p>
          </motion.div>
        </div>

        {/* Series Tab Switcher Bar - Theme Adaptive Styling */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            { id: "Semua Seri", label: "Semua Seri", icon: IoLayersOutline, count: articles.length },
            { id: "Seri Belajar HTML5", label: "Seri HTML5", icon: IoBookOutline, count: htmlArticles.length },
            { id: "Seri Belajar CSS3", label: "Seri CSS3", icon: IoColorPaletteOutline, count: cssArticles.length },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedSeries === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedSeries(tab.id)}
                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? darkMode
                      ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-md shadow-teal-500/10 scale-105"
                      : "bg-teal-600 text-white border border-teal-700 shadow-md shadow-teal-600/20 scale-105"
                    : darkMode
                    ? "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm"
                }`}
              >
                <Icon className="text-sm" />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive
                      ? darkMode
                        ? "bg-teal-400/20 text-teal-200"
                        : "bg-white/20 text-white"
                      : darkMode
                      ? "bg-slate-800 text-slate-400"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.count} Modul
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Article Hero Card */}
        {selectedSeries === "Semua Seri" && selectedCategory === "Semua" && !debouncedSearchQuery && currentPage === 1 && featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-10"
          >
            <div className="glass-panel group relative overflow-hidden rounded-3xl p-6 md:p-8 transition-transform duration-400 hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-1 bg-teal-500"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Article Thumbnail */}
                <div className="lg:col-span-6 relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-md ${
                    darkMode ? "bg-teal-500/30 text-teal-200 border border-teal-400/40 backdrop-blur-md" : "bg-teal-600 text-white"
                  }`}>
                    Featured
                  </span>
                </div>

                {/* Article Info */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="pill text-xs font-medium tracking-wide">{featuredArticle.category}</span>
                    <span className={`flex items-center gap-1 text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      <IoCalendarOutline />
                      {featuredArticle.date}
                    </span>
                    <span className={`flex items-center gap-1 text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      <IoTimeOutline />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-wide group-hover:text-[color:var(--accent)] transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>

                  <p className={`text-sm leading-relaxed tracking-wide ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[color:var(--border)]">
                    <div className="flex items-center gap-3">
                      <div className="relative h-9 w-9 overflow-hidden rounded-full border border-teal-500">
                        <Image
                          src={featuredArticle.authorAvatar}
                          alt={featuredArticle.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wide">{featuredArticle.author}</p>
                        <p className={`text-[11px] ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{featuredArticle.authorRole}</p>
                      </div>
                    </div>

                    <Link
                      href={`/article/${featuredArticle.id}`}
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold shadow-md transition-all duration-300 hover:scale-105 tracking-wider ${
                        darkMode
                          ? "bg-teal-500 text-slate-950 hover:bg-teal-400 shadow-teal-500/20"
                          : "bg-teal-600 text-white hover:bg-teal-700 shadow-teal-600/20"
                      }`}
                    >
                      Baca Artikel
                      <IoArrowForward className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter & Search Bar */}
        <div id="articles-grid-top" className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 scroll-mt-28">
          {/* Dynamic Categories - Theme Adaptive Active Styling */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isSelected
                      ? darkMode
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 font-bold shadow-sm"
                        : "bg-teal-600 text-white border border-teal-700 font-bold shadow-sm shadow-teal-600/20"
                      : darkMode
                      ? "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Debounced Search Input */}
          <div className="relative min-w-[240px] md:min-w-[280px]">
            <IoSearchOutline className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`} />
            <input
              type="text"
              placeholder="Cari modul artikel..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={`w-full rounded-full border py-2.5 pl-10 pr-10 text-xs font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ${
                darkMode
                  ? "border-slate-700 bg-slate-900/70 text-white placeholder-slate-400"
                  : "border-slate-200 bg-white text-slate-900 placeholder-slate-600"
              }`}
            />
            {searchInput && (
              <button
                onClick={() => setSearchInput("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                title="Hapus pencarian"
              >
                <IoCloseCircle className="text-base" />
              </button>
            )}
          </div>
        </div>

        {/* Section Header Indicator */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
              {selectedSeries === "Semua Seri" ? "Seluruh Modul Pembelajaran" : selectedSeries}
            </h2>
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-bold ${darkMode ? "bg-slate-800 text-teal-400" : "bg-slate-200 text-teal-700"}`}>
              {filteredArticles.length} artikel
            </span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedArticles.length > 0 ? (
            paginatedArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
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
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-teal-300 border border-white/10">
                      {getArticleSeries(article.id)}
                    </span>
                  </div>

                  {/* Card Content Body with Letter Spacing */}
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
                <div className="px-6 py-4 flex items-center justify-between border-t border-[color:var(--border)] mt-2">
                  <div className="flex items-center gap-2">
                    <div className="relative h-7 w-7 overflow-hidden rounded-full">
                      <Image
                        src={article.authorAvatar}
                        alt={article.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className={`text-xs font-medium tracking-wide ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      {article.author}
                    </span>
                  </div>

                  <Link
                    href={`/article/${article.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold tracking-wider text-[color:var(--accent)] transition-colors duration-300 hover:text-[color:var(--accent-2)]"
                  >
                    Baca
                    <IoArrowForward className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className={`text-base font-semibold tracking-wide ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Tidak ada artikel yang cocok dengan filter atau pencarian Anda.
              </p>
              <button
                onClick={handleResetFilters}
                className={`mt-4 rounded-full px-5 py-2 text-xs font-bold tracking-wider transition-colors ${
                  darkMode ? "bg-teal-500 text-slate-950 hover:bg-teal-400" : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Pagination Control Bar */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[color:var(--border)]">
            <p className={`text-xs font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Menampilkan Halaman <span className="font-bold text-teal-400">{currentPage}</span> dari <span className="font-bold text-teal-400">{totalPages}</span> ({filteredArticles.length} artikel)
            </p>

            <div className="flex items-center gap-2">
              {/* Previous Page Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-xs font-bold transition-all duration-300 ${
                  currentPage === 1
                    ? "opacity-40 cursor-not-allowed border border-slate-700 text-slate-500"
                    : darkMode
                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm"
                }`}
              >
                <IoChevronBack className="text-sm" />
                Sebelumnya
              </button>

              {/* Numbered Page Buttons - Theme Adaptive Styling */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`h-8 w-8 rounded-full text-xs font-bold transition-all duration-300 ${
                      currentPage === pageNum
                        ? darkMode
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 font-bold shadow-sm scale-105"
                          : "bg-teal-600 text-white font-bold shadow-sm shadow-teal-600/20 scale-105"
                        : darkMode
                        ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              {/* Next Page Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-xs font-bold transition-all duration-300 ${
                  currentPage === totalPages
                    ? "opacity-40 cursor-not-allowed border border-slate-700 text-slate-500"
                    : darkMode
                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm"
                }`}
              >
                Selanjutnya
                <IoChevronForward className="text-sm" />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
