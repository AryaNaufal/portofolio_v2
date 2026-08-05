---
id: "css-06-display-block-inline"
title: "CSS 06: Mengatur Perilaku Elemen dengan Display Property"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Pelajari cara mengubah sifat bawaan elemen HTML menggunakan properti display (block, inline, inline-block, dan display: none) untuk menyembunyikan elemen."
---

Properti `display` di dalam CSS digunakan untuk mengontrol bagaimana sebuah elemen HTML berperilaku saat berdampingan dengan elemen lain di layar.

## 1. 4 Nilai Utama Display Property

### A. `display: block`
- Memaksa elemen membuat **baris baru**.
- Mengambil **seluruh lebar layar** (100% dari ujung kiri ke kanan).
- Boleh diatur ukuran `width` dan `height`-nya.
- Contoh elemen bawaan: `<div>`, `<p>`, `<h1>`.

```css
.tombol-lebar {
    display: block;
    width: 100%;
}
```

### B. `display: inline`
- **TIDAK membuat baris baru** (berdiri sejajar di satu baris).
- Lebarnya hanya seukuran konten di dalamnya.
- **TIDAK bisa** diatur `width` dan `height`-nya.
- Contoh elemen bawaan: `<span>`, `<a>`, `<strong>`.

### C. `display: inline-block` (Kombinasi Terbaik)
- Menggabungkan kelebihan keduanya: **TIDAK membuat baris baru** (bisa berdiri sejajar), TETAPI **BISA diatur** `width`, `height`, dan `padding`-nya secara bebas!
- Sangat cocok untuk membuat **Tombol Navigasi**.

```css
.tombol-navigasi {
    display: inline-block;
    width: 150px;
    height: 40px;
    text-align: center;
}
```

### D. `display: none`
- **Menyembunyikan elemen secara total** dari layar.
- Elemen yang di-set `none` dianggap tidak ada dan ruang yang ditinggalkannya akan ditempati oleh elemen lain (sering digunakan untuk menu hamburger mobile).

---

### Kesimpulan Ringkas
Gunakan `display: inline-block` saat Anda ingin membuat tombol yang sejajar namun memiliki ukuran lebar & tinggi khusus.
