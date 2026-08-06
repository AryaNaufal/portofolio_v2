"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/theme-context";
import { slugify, cleanHeadingText } from "@/lib/slug";
import { IoListOutline, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractToc(markdown: string): TocItem[] {
  // Normalize line endings to LF to avoid carriage return (\r) issues
  const normalizedMarkdown = markdown.replace(/\r\n/g, "\n");
  const lines = normalizedMarkdown.split("\n");
  const items: TocItem[] = [];

  lines.forEach((line) => {
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = line.match(/^###\s+(.+)$/);

    if (h2Match) {
      const text = cleanHeadingText(h2Match[1]);
      const id = slugify(text);
      items.push({ id, text, level: 2 });
    } else if (h3Match) {
      const text = cleanHeadingText(h3Match[1]);
      const id = slugify(text);
      items.push({ id, text, level: 3 });
    }
  });

  return items;
}

interface TableOfContentsProps {
  markdown: string;
  isSidebar?: boolean;
}

export default function TableOfContents({
  markdown,
  isSidebar = false,
}: TableOfContentsProps) {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState<string>("");
  const tocItems = extractToc(markdown);

  // Active heading detection on scroll
  useEffect(() => {
    if (tocItems.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  if (tocItems.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`rounded-3xl transition-all duration-300 border ${
        isSidebar ? "p-5 border-slate-700/60 shadow-xl max-h-[calc(100vh-140px)] overflow-y-auto thin-scrollbar" : "my-8 p-5 sm:p-6"
      } ${
        darkMode
          ? "bg-slate-900/90 border-slate-700/80 text-slate-200"
          : "bg-white/90 border-slate-200 text-slate-800 shadow-lg shadow-slate-200/50"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-sm">
          <IoListOutline className="text-lg text-[color:var(--accent)]" />
          <span>Daftar Isi</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-mono font-medium ${
              darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-600"
            }`}
          >
            {tocItems.length} topik
          </span>
        </div>

        {!isSidebar && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-full p-1.5 transition-colors ${
              darkMode ? "hover:bg-slate-800 text-slate-400" : "hover:bg-slate-100 text-slate-600"
            }`}
            aria-label="Toggle Daftar Isi"
          >
            {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </button>
        )}
      </div>

      {(isOpen || isSidebar) && (
        <nav className="mt-3 pt-3 border-t border-[color:var(--border)] space-y-1.5 text-xs sm:text-sm">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className={`group block w-full text-left rounded-xl px-2.5 py-1.5 transition-all duration-200 ${
                  item.level === 3 ? "pl-6 text-xs" : "font-semibold"
                } ${
                  isActive
                    ? "bg-gradient-to-r from-teal-500/20 to-teal-500/20 text-[color:var(--accent)] font-bold border border-teal-500 pl-3"
                    : darkMode
                    ? "text-slate-300 hover:bg-slate-800/60 hover:text-teal-300"
                    : "text-slate-700 hover:bg-slate-100 hover:text-teal-700"
                }`}
              >
                <span className="mr-1.5 text-[color:var(--accent)] font-mono">
                  {item.level === 2 ? "•" : "└"}
                </span>
                {item.text}
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
