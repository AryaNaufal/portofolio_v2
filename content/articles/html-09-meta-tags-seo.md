---
id: "html-09-meta-tags-seo"
title: "HTML 09: Meta Tags, SEO Fundamentals & Open Graph Social Media"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Panduan mengonfigurasi meta tag di dalam elemen <head> untuk optimasi SEO di Google, pratinjau kartu media sosial (Open Graph), dan Favicon."
---

Elemen `<head>` pada dokumen HTML bertindak sebagai pusat kendali metadata—informasi penting mengenai halaman yang tidak terlihat langsung di layar, namun sangat krusial bagi browser dan mesin pencari.

## 1. Meta Tag SEO Wajib

Meta tag ini memberitahu Google mengenai topik dan deskripsi situs Anda saat muncul di halaman pencarian:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Judul & Deskripsi SEO -->
  <title>Panduan Belajar HTML5 Terlengkap 2026</title>
  <meta name="description" content="Pelajari dasar-dasar HTML5 dari awal hingga mahir dengan contoh kode interaktif dan penjelasan praktis.">
  <meta name="keywords" content="html, html5, belajar web, frontend, coding">
  <meta name="author" content="Arya Naufal">
</head>
```

## 2. Meta Tag Open Graph (Pratinjau Media Sosial)

Ketika seseorang membagikan link website Anda ke WhatsApp, Twitter/X, LinkedIn, atau Facebook, meta tag Open Graph (`og:*`) mengatur tampilan gambar pratinjau, judul, dan ringkasan:

```html
<!-- Open Graph Protocol -->
<meta property="og:title" content="Panduan Belajar HTML5 Terlengkap 2026">
<meta property="og:description" content="Pelajari dasar-dasar HTML5 dari awal hingga mahir.">
<meta property="og:image" content="https://websiteanda.com/logo_html.png">
<meta property="og:url" content="https://websiteanda.com/article/html-09">
<meta property="og:type" content="article">
```

## 3. Menambahkan Favicon (Ikon Tab Browser)

Favicon adalah ikon kecil yang muncul di sebelah judul pada tab browser pengguna:

```html
<link rel="icon" type="image/png" href="/favicon.ico">
```

---

### Kesimpulan
Penerapan meta tag yang lengkap membuat situs Anda terlihat kredibel, mudah ditemukan di Google, dan profesional saat dibagikan di media sosial.
