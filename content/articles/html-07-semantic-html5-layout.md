---
id: "html-07-semantic-html5-layout"
title: "HTML 07: Semantic HTML5 & Struktur Layout Web Modern"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Mengenal pentingnya elemen semantik HTML5 seperti header, nav, main, section, article, dan footer untuk menciptakan website yang ramah SEO dan mudah diakses."
---

Sebelum era HTML5, seluruh bagian website dibuat menggunakan tag `<div>` biasa. Kini, HTML5 memperkenalkan **Elemen Semantik** yang memiliki makna jelas bagi browser, mesin pencari (SEO), dan *screen reader*.

## 1. Apa itu Semantic HTML?

*Semantic HTML* adalah penulisan tag HTML berdasarkan makna dan fungsi dari isi kontennya, bukan sekadar tampilan visual semata.

## 2. Struktur Layout Web Modern dengan Elemen Semantik

Berikut adalah contoh tata letak (*layout*) website modern menggunakan tag semantik:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Situs Berita Modern</title>
</head>
<body>
    <!-- Header Situs & Navigasi -->
    <header>
        <h1>Portal Berita Teknologi</h1>
        <nav>
            <ul>
                <li><a href="#home">Beranda</a></li>
                <li><a href="#news">Berita</a></li>
                <li><a href="#contact">Kontak</a></li>
            </ul>
        </nav>
    </header>

    <!-- Konten Utama Halaman -->
    <main>
        <section id="news">
            <h2>Berita Terkini</h2>
            <article>
                <h3>Peluncuran Teknologi Web Terbaru</h3>
                <p>Artikel penjelasan mengenai fitur baru di ekosistem web...</p>
            </article>
        </section>

        <!-- Sidebar / Informasi Samping -->
        <aside>
            <h4>Artikel Populer</h4>
            <p>Daftar tautan artikel yang sering dibaca...</p>
        </aside>
    </main>

    <!-- Catatan Kaki Situs -->
    <footer>
        <p>&copy; 2026 Portal Berita. Hak Cipta Dilindungi.</p>
    </footer>
</body>
</html>
```

## 3. Manfaat Utama Semantic HTML

1. **SEO yang Lebih Baik**: Google dapat mengindeks bagian `<main>` dan `<article>` secara lebih akurat.
2. **Aksesibilitas (Accessibility)**: Pembaca layar (*screen reader*) untuk penglihat terbatas dapat melompat langsung ke bagian `<nav>` atau `<main>`.
3. **Kode Mudah Dibaca**: Pengembang lain dalam tim dapat langsung paham struktur halaman hanya dengan membaca tagnya.

---

### Kesimpulan
Selalu gunakan tag semantik HTML5 dibandingkan tumpukan `<div>` universal agar struktur website Anda profesional dan berstandar internasional.
