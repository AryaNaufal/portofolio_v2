import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/context/theme-context";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Montserrat = localFont({
  src: "./fonts/Montserrat-SemiBold.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "Arya Naufal | Fullstack Web Developer",
    template: "%s | Arya Naufal",
  },
  description:
    "Portofolio Arya Naufal, Fullstack Web Developer. Fokus pada performa, pengalaman pengguna, dan pengembangan web modern dengan Next.js.",
  keywords: [
    "Arya Naufal",
    "Fullstack Web Developer",
    "Next.js",
    "Portfolio",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Arya Naufal" }],
  creator: "Arya Naufal",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    title: "Arya Naufal | Fullstack Web Developer",
    description:
      "Portofolio Arya Naufal. Menampilkan project pilihan, pengalaman, dan fokus pada pengembangan web modern.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Naufal | Fullstack Web Developer",
    description:
      "Portofolio Arya Naufal. Menampilkan project pilihan, pengalaman, dan fokus pada pengembangan web modern.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Montserrat.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
