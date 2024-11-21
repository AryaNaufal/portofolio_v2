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
      className={`transition-colors duration-700 min-h-screen pt-16 pb-28 ${
        darkMode ? "bg-gray-900 text-[#F7F7F7]" : "bg-[#F7F7F7] text-gray-900"
      }`}
      id="project"
    >
      <div className="container pt-[4rem] lg:pt-[5rem]">
        <div className="flex flex-col items-center justify-center gap-8 text-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent xl:text-6xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text hover:from-pink-500 hover:to-orange-500"
            style={{ lineHeight: "normal" }}
          >
            <h1>Project</h1>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`p-6 transisiton-colors duration-700 ${
                  darkMode ? "bg-gray-900" : "bg-[#F7F7F7]"
                } rounded-lg shadow-lg hover:shadow-xl`}
              >
                <h3 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                  {project.name}
                </h3>
                <div className="flex items-center justify-center md:h-32">
                  <ul className="mb-4 text-sm list-disc">
                    {project.techStack.map((tech, i) => (
                      <li key={i} className="w-fit">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink-500 transition-colors duration-300 hover:text-pink-400"
                >
                  View Repository
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
