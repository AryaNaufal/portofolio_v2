---
id: "css-06-display-block-inline"
title: "CSS 06: Mengatur Perilaku Tampilan Elemen dengan Display Property"
category: "Web Development"
date: "05 Agu 2026"
readTime: "8 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan praktis properti display di CSS: Mengubah sifat elemen bawaan (block, inline, inline-block) serta teknik menyembunyikan elemen (display: none)."
---

Properti `display` di dalam CSS adalah saklar utama yang menentukan bagaimana sebuah elemen HTML berperilaku saat berdiri di layar berdampingan dengan elemen-elemen lainnya.

Dengan memanipulasi properti `display`, Anda dapat merubah elemen yang tadinya selalu turun ke bawah menjadi berdiri sejajar ke samping, atau sebaliknya.

---

## 1. 4 Nilai Utama Display Property

Berikut adalah empat nilai properti `display` yang paling sering digunakan dalam pengembangan web:

### A. `display: block`
- Memaksa elemen membuat **baris baru** di bawahnya.
- Otomatis mengambil **seluruh lebar layar** (100% dari kiri ke kanan).
- Mengizinkan pengaturan ukuran `width` dan `height`.
- Contoh elemen bawaan: `<div>`, `<p>`, `<h1>` s/d `<h6>`, `<section>`.

```css
.tombol-lebar-penuh {
    display: block;
    width: 100%;
    text-align: center;
}
```

### B. `display: inline`
- **TIDAK membuat baris baru** (berdiri sejajar berdampingan di satu baris).
- Ukuran lebarnya **hanya seukuran konten di dalamnya**.
- **TIDAK BISA** diatur ukuran `width` dan `height`-nya (akan diabaikan oleh browser).
- Contoh elemen bawaan: `<span>`, `<a>`, `<strong>`, `<em>`.

### C. `display: inline-block` (Kombinasi Terbaik)
`inline-block` menggabungkan kelebihan terbaik dari kedua dunia:
1. Elemen **TIDAK membuat baris baru** (dapat berdiri sejajar ke samping).
2. Elemen **BISA diatur** ukuran `width`, `height`, `margin`, dan `padding`-nya secara bebas!

Properti ini adalah pilihan sempurna saat Anda ingin membuat **Tombol-Tombol Navigasi Sejajar**:

```css
.tombol-menu {
    display: inline-block;
    width: 140px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #14b8a6;
    color: white;
    border-radius: 12px;
}
```

### D. `display: none` (Menyembunyikan Total)
Menyembunyikan elemen secara total dari layar peramban. Elemen yang di-set `none` dianggap tidak ada dan ruang yang ditinggalkannya akan diisi oleh elemen lain di sekitarnya.

```css
.modal-popup {
    /* Sembunyikan popup secara bawaan */
    display: none;
}
```

---

## 2. Perbedaan `display: none` vs `visibility: hidden`

Banyak pemula terkecoh antara dua cara menyembunyikan elemen ini:

- **`display: none`**: Menyembunyikan elemen **DAN menghapus ruang fisiknya**. Elemen di bawahnya akan naik mengisi bekas tempatnya.
- **`visibility: hidden`**: Menyembunyikan elemen visualnya saja, **TETAPI ruang tempat fisiknya tetap ada** sebagai kotak kosong tak terlihat.

---

## 💡 Rangkuman & Praktik Terbaik

1. Gunakan **`display: inline-block`** untuk membuat tombol-tombol pilihan yang berdiri sejajar namun memiliki ukuran fisik yang konsisten.
2. Gunakan **`display: none`** saat ingin membuat menu seluler hamburger yang hanya muncul ketika tombol diklik.
3. Ingat bahwa Flexbox (`display: flex`) dan Grid (`display: grid`) juga merupakan nilai lanjutan dari properti `display`.
