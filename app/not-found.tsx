import Link from "next/link";
import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center pt-20 pb-24 text-center">
        <div className="container max-w-md space-y-4">
          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400 border border-red-500/20">
            404 Not Found
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-slate-400">
            Maaf, artikel atau halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
          </p>
          <div className="pt-4">
            <Link
              href="/article"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-amber-400 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/10 transition-all duration-300 hover:scale-105"
            >
              Kembali ke Daftar Artikel
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
