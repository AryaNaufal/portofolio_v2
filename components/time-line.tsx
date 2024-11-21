"use client";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

const education = [
  {
    title: "RPL (Software Engineering)",
    place: "SMK Letris Indonesia 2",
    date: "Tangerang Selatan, ID / 2019 - 2022",
  },
  {
    title: "Informatic Engineer",
    place: "Universitas Pamulang",
    date: "Tangerang Selatan, ID / 2022 - Present",
  },
];

const course = [
  {
    title: "Learn All Fundamental about Basic Front End and Basic Back End",
    place: "Codepolitan (KelasFullstack)",
    date: "Tangerang Selatan, ID / Permanent",
  },
  {
    title: " Learn Basic PHP",
    place: "Digitalent (Junior Web Developer)",
    date: "Tangerang Selatan, ID / 2021",
  },
];

export default function TimeLine() {
  const { darkMode } = useTheme();
  return (
    <div
      className={`transition-colors duration-700 ${
        darkMode ? "bg-gray-900 text-[#F7F7F7]" : "bg-[#F7F7F7] text-gray-900"
      }`}
    >
      <div className="container justify-between w-full px-20 pt-40 md:flex">
        <div className="md:w-[50%]">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mb-10 text-2xl font-bold tracking-wide text-transparent xl:text-4xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text hover:from-pink-500 hover:to-orange-500"
            style={{ lineHeight: "normal" }}
          >
            Education
          </motion.h1>
          <motion.ol
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className={`relative border-s ml-6 ${
              darkMode ? "border-[#F7F7F7]" : "border-gray-900"
            }`}
          >
            {education.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="mb-10 ms-4"
              >
                <div
                  className={`transition-colors duration-700 absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border ${
                    darkMode
                      ? "border-gray-900 bg-[#F7F7F7]"
                      : "bg-gray-900 border-[#F7F7F7]"
                  }`}
                ></div>
                <time
                  className={`mb-1 text-sm font-normal leading-none ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold">{item.place}</h3>
                <p
                  className={`mb-4 text-base font-normal ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
        <div className="md:w-[50%]">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mb-10 text-2xl font-bold tracking-wide text-transparent xl:text-4xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text hover:from-pink-500 hover:to-orange-500"
            style={{ lineHeight: "normal" }}
          >
            Course
          </motion.h1>
          <motion.ol
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className={`relative border-s ml-6 ${
              darkMode ? "border-[#F7F7F7]" : "border-gray-900"
            }`}
          >
            {course.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="mb-10 ms-4"
              >
                <div
                  className={`transition-colors duration-700 absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border ${
                    darkMode
                      ? "border-gray-900 bg-[#F7F7F7]"
                      : "bg-gray-900 border-[#F7F7F7]"
                  }`}
                ></div>
                <time
                  className={`mb-1 text-sm font-normal leading-none ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold">{item.place}</h3>
                <p
                  className={`mb-4 text-base font-normal ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </div>
  );
}
