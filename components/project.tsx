"use client";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

const projects = [
  {
    name: "unpam super app",
    techStack: ["Astro 3", "TailwindCSS"],
    repoLink: "https://github.com/NeoNusantaraProject/open-unpam-superapp",
  },
  {
    name: "portofolio-v1",
    techStack: ["NextJS 13", "TailwindCSS", "TypeScript"],
    repoLink: "https://github.com/AryaNaufal/AryaNaufal.github.io",
  },
  {
    name: "toko onlen",
    techStack: [
      "NextJS 14",
      "TailwindCSS",
      "Prisma(PosgreSQL)",
      "Tanstack Query",
    ],
    repoLink: "https://github.com/AryaNaufal/toko-onlen.git",
  },
  {
    name: "game catur",
    techStack: ["HTML", "CSS", "Javascript"],
    repoLink: "https://github.com/AryaNaufal/Game-Catur",
  },
  {
    name: "chat app",
    techStack: ["PHP", "Mysql"],
    repoLink: "https://github.com/AryaNaufal/ChatApp_PHP",
  },
  {
    name: "notion app",
    techStack: ["NextJS 15", "TailwindCSS", "Prisma(MySql)", "NextAuth", "JWT"],
    repoLink: "https://github.com/AryaNaufal/notion-apps",
  },
];

export default function Project() {
  const { darkMode } = useTheme();
  return (
    <section
      className={`transition-colors duration-800 min-h-screen pt-20 pb-28 ${
        darkMode ? "bg-[#0b0f14] text-[#F7F7F7]" : "bg-[#f7f4ee] text-gray-900"
      } border-t border-[color:var(--border)] scroll-mt-24`}
      id="project"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-8 text-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p
              className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                darkMode ? "text-slate-300/80" : "text-slate-600"
              }`}
            >
              Selected Work
            </p>
            <h2 className="text-3xl font-semibold md:text-5xl">
              Project <span className="gradient-text">Terbaru</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="glass-panel group relative overflow-hidden rounded-3xl p-6 text-left transition-transform duration-400 hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-teal-500 to-amber-400 opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold capitalize">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] transition-colors duration-400 hover:text-[color:var(--accent-2)]"
                >
                  View Repository
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
