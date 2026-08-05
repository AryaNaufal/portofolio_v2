---
id: "css-09-grid-layouting-2d"
title: "CSS 09: Menyusun Galeri & Layout 2 Dimensi dengan CSS Grid"
category: "Web Development"
date: "05 Agu 2026"
readTime: "6 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan praktis CSS Grid: Membuat tata letak 2 dimensi (baris dan kolom sekaligus), membuat galeri foto responsif, dan menggunakan fr unit."
---

Jika **Flexbox** sangat hebat untuk layout **1 dimensi** (baris atau kolom saja), maka **CSS Grid** adalah ahlinya dalam menangani layout **2 dimensi** (baris DAN kolom secara bersamaan seperti papan catur atau etalase toko).

## 1. Menyalakan CSS Grid (`display: grid`)

```css
.galeri-grid {
    display: grid;
    /* Membuat 3 kolom dengan lebar yang sama rata (1fr = 1 Fraction) */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px; /* Jarak baris dan kolom 20px */
}
```

## 2. Menggunakan Fungsi `repeat()`

Daripada menulis `1fr 1fr 1fr`, Anda bisa mempersingkatnya dengan fungsi `repeat()`:

```css
.katalog-produk {
    display: grid;
    /* Membuat 4 kolom berukuran sama rata */
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}
```

## 3. Trik Ajaib: Grid Responsif Tanpa Media Query (`auto-fit`)

Ini adalah teknik favorit para profesional untuk membuat galeri kartu yang otomatis menyesuaikan layar komputer dan HP tanpa perlu menulis Media Query:

```css
.galeri-otomatis {
    display: grid;
    /* Kolom menyesuaikan lebar layar, minimal 250px per kartu */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}
```

Saat layar mengecil (di HP), kolom yang tidak muat akan otomatis berpindah ke bawah dengan rapi!

---

### Kesimpulan Ringkas
Gunakan **CSS Grid** saat Anda ingin membuat kisi-kisi galeri foto, daftar kartu produk, atau tata letak dashboard 2D.
