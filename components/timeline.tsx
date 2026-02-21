"use client";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

type TimelineItem = {
  title: string;
  place: string;
  date: string;
};

const education: TimelineItem[] = [
  {
    title: "RPL (Software Engineering)",
    place: "SMK Letris Indonesia 2",
    date: "Tangerang Selatan, ID / 2019 - 2022",
  },
  {
    title: "Informatic Engineer",
    place: "Universitas Pamulang",
    date: "Tangerang Selatan, ID / 2022 - 2026",
  },
];

const course: TimelineItem[] = [
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

const baseTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

type SectionProps = {
  title: string;
  items: TimelineItem[];
};

function TimelineSection({ title, items }: SectionProps) {
  const { darkMode } = useTheme();

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">
        <span className="gradient-text">{title}</span>
      </h3>
      <div className="relative pl-10">
        <div className="absolute left-4 top-0 h-full w-px bg-[color:var(--border)]"></div>
        <ul className="space-y-6">
          {items.map((item, index) => (
            <motion.li
              key={`${item.place}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute left-4 top-2 h-3 w-3 -translate-x-[380%] rounded-full bg-[color:var(--accent)]"></span>
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 transition-transform duration-300 hover:-translate-y-0.5">
                <time
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    darkMode ? "text-slate-300/80" : "text-slate-600"
                  }`}
                >
                  {item.date}
                </time>
                <h4 className="mt-2 text-lg font-semibold">{item.place}</h4>
                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TimeLine() {
  const { darkMode } = useTheme();
  return (
    <section
      className={`transition-colors duration-800 ${
        darkMode ? "bg-[#0b0f14] text-[#F7F7F7]" : "bg-[#f7f4ee] text-gray-900"
      } border-t border-[color:var(--border)]`}
    >
      <div className="container py-20 lg:py-24">
        <div className="mb-10 space-y-3">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] ${
              darkMode ? "text-slate-300/80" : "text-slate-600"
            }`}
          >
            Timeline
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Simple <span className="gradient-text">Journey</span>
          </h2>
          <p
            className={`max-w-2xl text-sm leading-relaxed md:text-base ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Pendidikan dan course yang jadi fondasi skill saya hingga saat ini.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <TimelineSection title="Education" items={education} />
          <TimelineSection title="Course" items={course} />
        </div>
      </div>
    </section>
  );
}
