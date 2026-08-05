export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  image: string;
  featured?: boolean;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: string;
    }[];
    conclusion: string;
  };
}

export const articlesData: ArticleItem[] = [
  {
    id: "html-01-pengenalan-html",
    title: "HTML 01: Pengenalan HTML & Cara Kerja Web",
    category: "Web Development",
    date: "05 Agu 2026",
    readTime: "5 min read",
    author: "Arya Naufal",
    authorRole: "Web Developer & Instructor",
    authorAvatar: "/my_profile.jpg",
    image: "/logo_html.png",
    featured: true,
    excerpt:
      "Modul pertama dalam seri belajar HTML: Memahami konsep dasar HyperText Markup Language, struktur dokumen HTML5, serta membuat halaman web pertama Anda.",
    content: {
      intro:
        "HTML (HyperText Markup Language) adalah fondasi utama dari setiap halaman web di internet. HTML bertindak sebagai kerangka dari sebuah situs web.",
      sections: [
        {
          heading: "1. Apa itu HTML?",
          body: "HTML adalah bahasa markah (markup language) yang menggunakan tag untuk memberitahu browser bagaimana konten harus ditampilkan.",
        },
      ],
      conclusion:
        "Memahami struktur dasar HTML adalah langkah awal yang sangat krusial sebelum melangkah ke tahap CSS dan JavaScript.",
    },
  },
];
