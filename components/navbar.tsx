"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-context";
import DarkMode from "./dark-mode";
import { BsPersonExclamation } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";

const menu = [
  {
    link: "#home",
    label: "Home",
    target: "home",
    icon: <IoHomeOutline />,
  },
  {
    link: "#about",
    label: "About",
    target: "about",
    icon: <BsPersonExclamation />,
  },

  {
    link: "#project",
    label: "Project",
    target: "project",
    icon: <GoProjectRoadmap />,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = menu.map((item) => document.getElementById(item.target));
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
        setActiveSection("");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const dark = scrolled ? "bg-gray-900 shadow-md" : "bg-transparent";
  const white = scrolled ? "bg-[#F7F7F7] shadow-md" : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 z-10 w-screen text-white transition-colors duration-500 ${
        darkMode ? dark : white
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <motion.div
          className="text-2xl font-bold cursor-pointer"
          whileHover={{
            color: ["#f97316", "#ec4899"],
          }}
          transition={{ duration: 1 }}
          style={{ color: darkMode ? "#F7F7F7" : "#000033" }}
          onClick={() => handleScrollToSection("home")}
        >
          <h1>Portofolio</h1>
        </motion.div>

        <div>
          <ul className="flex items-center gap-5">
            {menu.map((item) => (
              <li
                key={item.label}
                className={`px-4 py-2 font-semibold rounded-md cursor-pointer hidden md:block ${
                  activeSection === item.target
                    ? "underline text-orange-500 underline-offset-[6px] decoration-[3px] "
                    : "bg-transparent"
                }`}
                onClick={() => handleScrollToSection(item.target)}
              >
                <motion.div
                  whileHover={{
                    color: ["#f97316", "#ec4899"],
                  }}
                  transition={{ duration: 1 }}
                  style={{ color: darkMode ? "#F7F7F7" : "#000033" }}
                >
                  {item.label}
                </motion.div>
              </li>
            ))}
            <li>
              <DarkMode />
            </li>
          </ul>
        </div>
        {/* mobile */}
        <div
          className={`fixed bottom-0 right-0 flex justify-center w-full shadow-[rgba(50,50,93,0.25)_0px_-2px_4px_-2px,_rgba(0,0,0,0.3)_0px_-3px_7px_-3px]
 ${darkMode ? "bg-gray-900" : "bg-[#F7F7F7]"} md:hidden`}
        >
          <ul className="flex items-center gap-5">
            {menu.map((item) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                key={item.label}
                className={`relative px-3 py-4 font-semibold rounded-full cursor-pointer text-xs ${
                  activeSection === item.target
                    ? `bg-gradient-to-r from-orange-500 to-pink-500 text-[#F7F7F7] absolute top-[-20px] ${
                        darkMode ? "border-gray-900" : "border-red-500"
                      }`
                    : "bg-transparent"
                }`}
                onClick={() => handleScrollToSection(item.target)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{
                    color: ["#f97316", "#ec4899"],
                  }}
                  transition={{ duration: 1 }}
                  className="flex flex-col items-center"
                  style={{
                    color:
                      darkMode || activeSection === item.target
                        ? "#F7F7F7"
                        : "#000033",
                  }}
                >
                  {item.icon}
                  {item.label}
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
