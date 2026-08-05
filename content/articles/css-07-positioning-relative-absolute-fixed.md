---
id: "css-07-positioning-relative-absolute-fixed"
title: "CSS 07: Menguasai CSS Positioning (Relative, Absolute, Fixed, Sticky)"
category: "Web Development"
date: "05 Agu 2026"
readTime: "6 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan praktis mengatur posisi elemen secara presisi menggunakan position relative, absolute, fixed (tombol melayang), sticky (navbar), dan z-index."
---

Secara bawaan, elemen HTML disusun mengalir dari atas ke bawah. Namun dengan `position`, Anda bisa menaruh elemen di posisi mana pun yang Anda inginkan (seperti menempelkan stiker di atas papan).

## 1. 4 Jenis Nilai Position di CSS

### A. `position: relative`
Memindahkan elemen dari posisi aslinya tanpa merusak alur elemen di sekitarnya. Yang paling penting: `relative` bertindak sebagai **patokan jangkar** bagi elemen anak ber-`absolute`.

### B. `position: absolute`
Elemen dicabut dari aliran dokumen biasa dan melayang bebas. Posisi `top`, `bottom`, `left`, `right`-nya akan mengacu pada pembungkus terdekat yang memiliki `position: relative`.

```css
/* Pembungkus Induk */
.kartu-produk {
    position: relative; /* Jangkar Patokan */
    width: 300px;
    height: 400px;
}

/* Badge Diskon di Sudut Kanan Atas Kartu */
.badge-diskon {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #f59e0b;
    padding: 5px 10px;
}
```

### C. `position: fixed` (Melayang Pinned di Layar)
Elemen dikunci pada posisi tertentu di **layar monitor/HP**. Meskipun pengunjung men-scroll halaman dari atas sampai bawah, elemen tersebut akan **tetap mengambang di posisi yang sama** (contoh: tombol WhatsApp melayang di sudut kanan bawah).

```css
.tombol-wa-melayang {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
}
```

### D. `position: sticky` (Menempel Saat Di-scroll)
Kombinasi antara `relative` dan `fixed`. Elemen akan mengikuti scroll biasa, namun saat mencapai jarak tertentu (misal `top: 0`), elemen akan **otomatis menempel** (contoh: Navbar dan Daftar Isi).

## 2. Memahami `z-index` (Tumpukan Lapisan)

Saat ada 2 elemen melayang yang saling bertumpukan, properti `z-index` menentukan elemen mana yang berada di atas:

- Angka `z-index` lebih besar (misal `z-index: 10`) akan **berada di atas** elemen ber-`z-index` kecil (misal `z-index: 1`).

---

### Kesimpulan Ringkas
Ingat rumus berpasangan ini: Pasang `position: relative` pada pembungkus luar, dan `position: absolute` pada elemen anak yang ingin Anda geser ke sudut tertentu.
