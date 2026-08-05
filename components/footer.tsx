"use client";

import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoLogoTwitter,
  IoChevronUpOutline,
  IoCodeSlashOutline,
} from "react-icons/io5";

export default function Footer() {
  const { darkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative border-t transition-colors duration-800 ${
        darkMode
          ? "bg-[#070a0e] text-slate-300 border-slate-800/80"
          : "bg-[#eeeae1] text-slate-700 border-slate-300/80"
      }`}
    >
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Bio Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-amber-400 text-slate-950 font-black text-sm shadow-md">
                AN
              </div>
              <span className="gradient-text font-extrabold text-2xl">Arya Naufal</span>
            </Link>

            <p className={`text-xs sm:text-sm leading-relaxed max-w-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Fullstack Web Developer & Instructor. Berfokus pada performa web ultra cepat, aksesibilitas, dan pengalaman pengguna modern.
            </p>

            {/* Availability Badge */}
            <div className="pt-1">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                darkMode ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/50" : "bg-emerald-100 text-emerald-800 border border-emerald-300"
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Tersedia untuk Proyek Baru & Freelance
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <p className={`text-xs font-bold uppercase tracking-widest ${darkMode ? "text-slate-200" : "text-slate-900"}`}>
              Navigasi Cepat
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-[color:var(--accent)] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/article" className="hover:text-[color:var(--accent)] transition-colors">
                  Katalog Artikel
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[color:var(--accent)] transition-colors">
                  Proyek Pilihan
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[color:var(--accent)] transition-colors">
                  Tentang Saya
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology & Topics Column */}
          <div className="md:col-span-4 space-y-3">
            <p className={`text-xs font-bold uppercase tracking-widest ${darkMode ? "text-slate-200" : "text-slate-900"}`}>
              Teknologi & Topik
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js 15", "React 19", "HTML5 Masterclass", "TypeScript", "Tailwind CSS", "Markdown Engine"].map((tech) => (
                <span
                  key={tech}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-all ${
                    darkMode
                      ? "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-teal-500/50"
                      : "bg-white text-slate-700 border-slate-200 hover:border-teal-500/50 shadow-sm"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <p className={`text-xs font-semibold mb-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Terhubung dengan Saya:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={`rounded-full p-2.5 text-base transition-all duration-300 ${
                    darkMode
                      ? "bg-slate-800/80 text-slate-300 hover:bg-teal-500 hover:text-slate-950"
                      : "bg-white text-slate-700 hover:bg-teal-500 hover:text-slate-950 border border-slate-200 shadow-sm"
                  }`}
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className={`rounded-full p-2.5 text-base transition-all duration-300 ${
                    darkMode
                      ? "bg-slate-800/80 text-slate-300 hover:bg-teal-500 hover:text-slate-950"
                      : "bg-white text-slate-700 hover:bg-teal-500 hover:text-slate-950 border border-slate-200 shadow-sm"
                  }`}
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="mailto:contact@aryanaufal.com"
                  aria-label="Send Email"
                  className={`rounded-full p-2.5 text-base transition-all duration-300 ${
                    darkMode
                      ? "bg-slate-800/80 text-slate-300 hover:bg-teal-500 hover:text-slate-950"
                      : "bg-white text-slate-700 hover:bg-teal-500 hover:text-slate-950 border border-slate-200 shadow-sm"
                  }`}
                >
                  <IoMailOutline />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className={`rounded-full p-2.5 text-base transition-all duration-300 ${
                    darkMode
                      ? "bg-slate-800/80 text-slate-300 hover:bg-teal-500 hover:text-slate-950"
                      : "bg-white text-slate-700 hover:bg-teal-500 hover:text-slate-950 border border-slate-200 shadow-sm"
                  }`}
                >
                  <IoLogoTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="mt-12 pt-8 border-t border-[color:var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-teal-400">Arya Naufal</span>. Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-4">
            <span className={`flex items-center gap-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              <IoCodeSlashOutline className="text-sm" /> Made with Next.js 15 & React
            </span>

            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 font-semibold transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800 text-slate-300 hover:bg-teal-500 hover:text-slate-950"
                  : "bg-white text-slate-700 hover:bg-teal-500 hover:text-slate-950 border border-slate-200 shadow-sm"
              }`}
              title="Kembali ke atas"
            >
              <IoChevronUpOutline className="text-sm" />
              Ke Atas
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
