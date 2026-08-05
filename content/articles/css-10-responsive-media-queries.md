---
id: "css-10-responsive-media-queries"
title: "CSS 10: Desain Responsif & Media Queries untuk Layar HP"
category: "Web Development"
date: "05 Agu 2026"
readTime: "6 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan merancang Responsive Web Design menggunakan Media Queries (@media), strategi Mobile-First, serta membuat website Anda tampil sempurna di HP, tablet, dan laptop."
---

Di zaman sekarang, lebih dari 60% pengguna internet mengakses website melalui Smartphone (HP). Oleh karena itu, website yang Anda buat **wajib responsif**—artinya tampilannya bisa menyesuaikan ukuran layar apa pun secara otomatis.

## 1. Apa itu Media Queries? (Analogi Bunglon)

**Media Queries** diibaratkan seperti sifat **Bunglon**. Elemen CSS akan mengubah "warna dan bentuk tampilannya" hanya saat mendeteksi batas lebar layar tertentu (*breakpoint*).

Format penulisannya menggunakan kata kunci `@media`:

```css
/* Tampilan Standar Desktop / Laptop */
.kartu-artikel {
    font-size: 18px;
    padding: 30px;
}

/* Aturan Khusus Layar HP (Lebar Layar Maksimal 768px) */
@media (max-width: 768px) {
    .kartu-artikel {
        font-size: 14px;  /* Ukuran font mengecil di HP */
        padding: 15px;    /* Padding mengecil agar lega */
    }
}
```

## 2. Mengubah Layout Kolom Desktop Menjadi Stacked di HP

Misalnya Anda memiliki 3 kolom kartu di desktop, saat dibuka di HP 3 kolom tersebut harus ditumpuk menjadi 1 kolom dari atas ke bawah:

```css
/* Layout Desktop: 3 Kolom */
.kontainer-kartu {
    display: flex;
    flex-direction: row;
}

/* Layout HP: Berubah Menjadi 1 Kolom Menumpuk */
@media (max-width: 768px) {
    .kontainer-kartu {
        flex-direction: column;
    }
}
```

## 3. Breakpoint Layar Standar Industri

Berikut adalah patokan ukuran layar (*breakpoint*) yang paling sering digunakan dalam web development:

- `max-width: 640px` $\rightarrow$ Smartphone / HP kecil.
- `max-width: 768px` $\rightarrow$ Tablet / iPad.
- `max-width: 1024px` $\rightarrow$ Laptop / Monitor Komputer.

---

### Kesimpulan Seri Belajar CSS
Selamat! Anda telah menyelesaikan seluruh **10 Modul Seri Belajar CSS3**. Sekarang Anda siap menggabungkan HTML5 dan CSS3 untuk menciptakan website modern yang indah dan responsif!
