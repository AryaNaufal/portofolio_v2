"use client";

import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import TimeLine from "./time-line";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`transition-colors duration-700 ${
        darkMode ? "bg-gray-900 text-[#F7F7F7]" : "bg-[#F7F7F7] text-gray-900"
      } min-h-screen py-16`}
      id="about"
    >
      <div className="container pt-[4rem] lg:pt-[5rem]">
        <div className="flex flex-col items-center justify-center gap-4 px-5 text-center md:text-justify lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent xl:text-6xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text hover:from-pink-500 hover:to-orange-500"
          >
            <h1>About Me</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-light tracking-wider md:text-md lg:text-lg"
          >
            Saya adalah Junior Website Developer dengan lebih dari 3 tahun
            pengalaman dalam pengembangan perangkat lunak dan web. Saat ini,
            saya sedang menempuh pendidikan S1 di Teknik Informatika di
            Universitas Pamulang dan terus mengembangkan keterampilan teknis
            saya dalam membangun aplikasi dan website yang inovatif dan efisien.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            viewport={{ once: true }}
            className="text-sm font-light tracking-wider md:text-md lg:text-lg"
          >
            Selama perjalanan saya, saya telah terlibat dalam berbagai proyek,
            mulai dari pembuatan website dinamis, sistem manajemen konten (CMS),
            hingga pengembangan aplikasi berbasis web yang mengutamakan user
            experience dan kinerja optimal. Saya terbiasa bekerja dengan
            teknologi seperti HTML, CSS, JavaScript, Php serta framework Next Js
            untuk membangun solusi web yang handal.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
            viewport={{ once: true }}
            className="text-sm font-light tracking-wider md:text-md lg:text-lg"
          >
            Pencapaian saya termasuk meraih Juara 2 dalam Lomba Kompetisi Siswa
            Tingkat Provinsi yang membuktikan kemampuan saya dalam berpikir
            analitis, berkolaborasi dalam tim, dan mengatasi tantangan teknis.
            Pencapaian ini memotivasi saya untuk terus meningkatkan keterampilan
            dan belajar lebih banyak tentang tren teknologi terbaru.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            viewport={{ once: true }}
            className="text-sm font-light tracking-wider md:text-md lg:text-lg"
          >
            Dengan latar belakang akademis yang kuat dan pengalaman praktis yang
            terus berkembang, saya siap untuk berkontribusi dalam proyek
            pengembangan perangkat lunak, terus belajar, dan berkembang di dunia
            teknologi.
          </motion.p>
        </div>
      </div>
      <TimeLine />
    </section>
  );
}
