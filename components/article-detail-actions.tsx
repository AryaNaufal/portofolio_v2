"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/theme-context";
import {
  IoBookmarkOutline,
  IoBookmark,
  IoShareSocialOutline,
  IoCopyOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";

const STORAGE_KEY = "bookmarked_articles";

function getBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export default function ArticleDetailActions() {
  const { darkMode } = useTheme();
  const pathname = usePathname();
  const articleId = pathname.split("/").pop() || "";

  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setBookmarked(getBookmarks().includes(articleId));
  }, [articleId]);

  const toggleBookmark = useCallback(() => {
    const bookmarks = getBookmarks();
    let updated: string[];
    if (bookmarks.includes(articleId)) {
      updated = bookmarks.filter((id) => id !== articleId);
    } else {
      updated = [...bookmarks, articleId];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setBookmarked(updated.includes(articleId));
  }, [articleId]);

  const share = useCallback(async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url,
        });
        return;
      } catch {
        // user cancelled or share failed, fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleBookmark}
        aria-pressed={bookmarked}
        aria-label={bookmarked ? "Hapus dari bookmark" : "Simpan artikel"}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
          bookmarked
            ? darkMode
              ? "border-teal-600 text-teal-400 bg-teal-500/10"
              : "border-teal-500 text-teal-600 bg-teal-50"
            : darkMode
              ? "border-slate-700 text-slate-300 hover:bg-slate-800"
              : "border-slate-200 text-slate-700 hover:bg-slate-100"
        }`}
      >
        {bookmarked ? <IoBookmark className="text-sm" /> : <IoBookmarkOutline className="text-sm" />}
        {bookmarked ? "Tersimpan" : "Simpan"}
      </button>
      <button
        onClick={share}
        aria-label={copied ? "Link tersalin" : "Bagikan artikel"}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
          copied
            ? darkMode
              ? "border-teal-600 text-teal-400 bg-teal-500/10"
              : "border-teal-500 text-teal-600 bg-teal-50"
            : darkMode
              ? "border-slate-700 text-slate-300 hover:bg-slate-800"
              : "border-slate-200 text-slate-700 hover:bg-slate-100"
        }`}
      >
        {copied ? (
          <IoCheckmarkOutline className="text-sm" />
        ) : (
          <IoShareSocialOutline className="text-sm" />
        )}
        {copied ? "Tersalin!" : "Bagikan"}
      </button>
    </div>
  );
}
