"use client";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
const words = [
  "H",
  "e",
  "l",
  "l",
  "o",
  " ",
  "I",
  "'",
  "m",
  " ",
  "A",
  "r",
  "y",
  "a",
  " ",
  "N",
  "a",
  "u",
  "f",
  "a",
  "l",
];

export default function Hero() {
  const { darkMode } = useTheme();
  return (
    <section
      className={`transition-colors duration-700 relative w-full min-h-[101vh] ${
        darkMode ? "bg-gray-900" : "bg-[#F7F7F7]"
      } pt-36`}
      id="home"
    >
      {darkMode ? (
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-25"></div>
      ) : (
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat bg-[#F7F7F7]"></div>
      )}
      <div className="container relative">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-15rem)] gap-4 text-center lg:gap-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-4xl font-bold tracking-wide text-transparent xl:text-6xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text hover:from-pink-500 hover:to-orange-500"
            style={{ lineHeight: "normal" }}
          >
            {words.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  ease: "easeInOut",
                  delay: index * 0.07,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`text-xl font-semibold tracking-wide ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            A Fullstack Web Developer
          </motion.p>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/CV Arya Naufal.pdf"
              download="CV Arya Naufal.pdf"
              className="px-6 py-3 text-sm font-semibold text-white rounded-lg shadow-lg lg:text-md bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-500 hover:to-pink-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
