"use client";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

const prefix = "Hello, I'm ";
const name = "Arya\nNaufal";
const prefixLetters = Array.from(prefix);
const nameLetters = Array.from(name);

const heroContainer = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.16,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { darkMode } = useTheme();
  return (
    <section
      className={`transition-colors duration-800 relative w-full overflow-hidden ${
        darkMode ? "bg-[#0b0f14]" : "bg-[#f7f4ee]"
      } min-h-screen`}
      id="home"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.35),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_70%)]"></div>
        <div className="absolute -bottom-24 left-[-10%] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.3),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.22),transparent_70%)]"></div>
      </div>

      <div className="container relative pt-28 pb-20 md:pt-32 lg:pt-36">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div
            variants={heroItem}
            className="space-y-6 text-center md:text-left"
          >
            <motion.p
              variants={heroItem}
              className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                darkMode ? "text-slate-300/80" : "text-slate-600"
              }`}
            >
              Fullstack Web Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl font-semibold leading-[1.1] md:text-6xl lg:text-7xl"
              style={{ lineHeight: "normal" }}
            >
              {prefixLetters.map((letter, index) => (
                <motion.span
                  key={`p-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    ease: "easeInOut",
                    delay: index * 0.07,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <span className="gradient-text">
                {nameLetters.map((letter, index) => (
                  <motion.span
                    key={`n-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      ease: "easeInOut",
                      delay: (index + prefixLetters.length) * 0.07,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className={`text-base leading-relaxed md:text-lg ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Saya membangun pengalaman web yang cepat, rapi, dan fokus pada
              detail. Kombinasi desain yang hangat dengan performa yang solid.
            </motion.p>
            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              <span className="pill">3+ tahun pengalaman</span>
              <span className="pill">Informatika S1</span>
              <span className="pill">Tangerang Selatan</span>
            </motion.div>
            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              <motion.a
                href="/CV Arya Naufal.pdf"
                download="CV Arya Naufal.pdf"
                className="rounded-full bg-gradient-to-r from-teal-500 to-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-transform duration-400 hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Download CV
              </motion.a>
              <motion.a
                href="#project"
                className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-400 hover:-translate-y-0.5 ${
                  darkMode
                    ? "border-white/20 text-white hover:border-white/40"
                    : "border-slate-900/20 text-slate-900 hover:border-slate-900/40"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Lihat Project
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="glass-panel rounded-3xl p-6 text-left md:p-8"
          >
            <div className="space-y-5">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                    darkMode ? "text-slate-300/80" : "text-slate-600"
                  }`}
                >
                  Core Stack
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  HTML, CSS, JavaScript, PHP, Next.js
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "UI/UX Detail",
                  "Performance",
                  "Clean Code",
                  "Motion Subtle",
                ].map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  darkMode
                    ? "border-white/10 text-slate-300"
                    : "border-slate-900/10 text-slate-600"
                }`}
              >
                Saat ini fokus di pengembangan web modern dan sistem yang
                scalable.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
