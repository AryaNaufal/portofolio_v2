"use client";

import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import TimeLine from "./timeline";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`transition-colors duration-800 relative ${
        darkMode ? "bg-[#0b0f14] text-[#F7F7F7]" : "bg-[#f7f4ee] text-gray-900"
      } border-t border-[color:var(--border)] scroll-mt-24`}
      id="about"
    >
      <div className="container py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.35fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                  darkMode ? "text-slate-300/80" : "text-slate-600"
                }`}
              >
                About
              </p>
              <h2 className="text-3xl font-semibold md:text-5xl">
                Tentang{" "}
                <span className="gradient-text">Perjalanan</span> Saya
              </h2>
            </div>
            <div
              className={`space-y-5 text-sm leading-relaxed md:text-base ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              <p>
                Saya adalah Pengembang Website dengan pengalaman lebih dari 3 tahun 
                dalam pengembangan perangkat lunak dan web. Saat ini saya menempuh 
                pendidikan S1 Teknik Informatika di Universitas Pamulang, 
                sembari terus mengasah kemampuan teknis untuk membangun aplikasi dan website yang 
                inovatif, efisien, dan mudah digunakan.
              </p>
              <p>
                Sepanjang perjalanan karier saya terlibat dalam berbagai proyek mulai dari 
                pembuatan website dinamis, sistem manajemen konten (CMS), hingga pengembangan 
                aplikasi berbasis web yang berfokus pada user experience dan performa. 
                Saya terbiasa bekerja dengan HTML, CSS, JavaScript, PHP, serta framework Next.js untuk 
                merancang dan membangun solusi web yang andal, terstruktur, dan scalable.
              </p>
              <p>
                Saat SMK saya juga meraih Juara 2 dalam Lomba Kompetisi Siswa Tingkat Provinsi, 
                yang menguatkan kemampuan saya dalam berpikir analitis, berkolaborasi dalam tim, 
                dan menyelesaikan tantangan teknis secara efektif. Pencapaian ini menjadi motivasi 
                bagi saya untuk terus berkembang dan mengikuti tren teknologi terbaru.
              </p>
              <p>
                Dengan kombinasi latar belakang akademik dan pengalaman praktis, 
                saya siap berkontribusi dalam proyek pengembangan perangkat lunak, 
                memberikan hasil kerja yang berkualitas, dan terus bertumbuh di industri teknologi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-panel rounded-3xl p-6">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                  darkMode ? "text-slate-300/80" : "text-slate-600"
                }`}
              >
                Highlight
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span>Pengalaman</span>
                  <span className="font-semibold">3+ tahun</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Pendidikan</span>
                  <span className="font-semibold">S1 Informatika</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Prestasi</span>
                  <span className="font-semibold">Juara 2 LKS</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                  darkMode ? "text-slate-300/80" : "text-slate-600"
                }`}
              >
                Core Tools
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "PHP", "Next.js"].map(
                  (item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                  darkMode ? "text-slate-300/80" : "text-slate-600"
                }`}
              >
                Fokus
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Mengutamakan pengalaman pengguna, performa, dan codebase yang
                mudah dirawat.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <TimeLine />
    </section>
  );
}
