"use client";

import { useTheme } from "@/context/theme-context";
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";

export default function ArticleDetailActions() {
  const { darkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => alert("Artikel telah disimpan (demo)")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
          darkMode
            ? "border-slate-700 text-slate-300 hover:bg-slate-800"
            : "border-slate-200 text-slate-700 hover:bg-slate-100"
        }`}
      >
        <IoBookmarkOutline />
        Simpan
      </button>
      <button
        onClick={() => alert("Link artikel telah disalin (demo)")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
          darkMode
            ? "border-slate-700 text-slate-300 hover:bg-slate-800"
            : "border-slate-200 text-slate-700 hover:bg-slate-100"
        }`}
      >
        <IoShareSocialOutline />
        Bagikan
      </button>
    </div>
  );
}
