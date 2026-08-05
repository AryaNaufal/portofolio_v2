"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import DarkMode from "./dark-mode";
import { BsPersonExclamation } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHomeOutline, IoDocumentTextOutline } from "react-icons/io5";

const menuItems = [
  {
    link: "/#home",
    label: "Home",
    target: "home",
    icon: <IoHomeOutline />,
  },
  {
    link: "/#about",
    label: "About",
    target: "about",
    icon: <BsPersonExclamation />,
  },
  {
    link: "/#project",
    label: "Project",
    target: "project",
    icon: <GoProjectRoadmap />,
  },
  {
    link: "/article",
    label: "Article",
    target: "article",
    icon: <IoDocumentTextOutline />,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const { darkMode } = useTheme();

  useEffect(() => {
    // If we are on /article or /article/[id], active section is 'article'
    if (pathname.startsWith("/article")) {
      setActiveSection("article");
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = menuItems
        .filter((item) => item.target !== "article")
        .map((item) => document.getElementById(item.target));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let foundActiveSection = false;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.clientHeight
        ) {
          setActiveSection(section.id);
          foundActiveSection = true;
        }
      });

      if (!foundActiveSection) {
        return;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const dark = scrolled
    ? "bg-[#0b0f14]/80 backdrop-blur-lg border-b border-white/5"
    : "bg-transparent";
  const light = scrolled
    ? "bg-white/70 backdrop-blur-lg border-b border-black/5"
    : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 z-40 w-screen transition-colors duration-700 ${
          darkMode ? dark : light
        }`}
        aria-label="Primary"
      >
        <div className="container flex h-20 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#home"
              className="cursor-pointer text-xl font-semibold md:text-2xl"
              style={{ color: darkMode ? "#F7F7F7" : "#0f172a" }}
            >
              <h1>
                <span className="gradient-text hidden sm:inline">Arya Naufal</span>
              </h1>
            </Link>
          </motion.div>

          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <DarkMode />
            </div>
            <ul className="hidden items-center gap-3 md:flex">
              {menuItems.map((item) => {
                const isActive = activeSection === item.target;
                return (
                  <li key={item.label} className="px-4 py-2">
                    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                      <Link
                        href={item.link}
                        aria-current={isActive ? "page" : undefined}
                        className={`relative text-sm font-semibold tracking-wide ${
                          isActive
                            ? "text-[color:var(--accent)]"
                            : darkMode
                            ? "text-white/80"
                            : "text-slate-700"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`absolute left-0 top-full mt-2 h-[2px] w-full bg-teal-500 transition-opacity duration-400 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        ></span>
                      </Link>
                    </motion.div>
                  </li>
                );
              })}
              <li>
                <DarkMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile bottom nav */}
      <nav
        aria-label="Mobile"
        className="fixed bottom-4 left-1/2 z-40 w-[92%] max-w-md -translate-x-1/2 md:hidden"
        style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      >
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-2">
          {menuItems.map((item) => {
            const isActive = activeSection === item.target;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex-1"
              >
                <Link
                  href={item.link}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex flex-col items-center gap-1 rounded-full px-3 py-2 text-[0.7rem] font-semibold transition-all duration-400 ${
                    isActive
                      ? "bg-teal-500 text-white shadow-lg"
                      : darkMode
                      ? "text-white/80"
                      : "text-slate-700"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
