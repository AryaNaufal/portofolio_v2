---
id: "html-08-block-vs-inline"
title: "HTML 08: Perbedaan Perilaku Block-Level vs Inline Elements"
category: "Web Development"
date: "05 Agu 2026"
readTime: "8 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Memahami konsep perilaku tampilan elemen HTML: Perbedaan cara kerja Block-level vs Inline-level, serta kapan harus menggunakan <div> dan <span>."
---

Mengapa elemen `<h1>` dan `<p>` selalu membuat baris baru ke bawah, sedangkan tag `<a>` dan `<strong>` bisa berdiri sejajar berdampingan dalam satu baris kalimat?

Jawabannya terletak pada **Perilaku Tampilan bawaan elemen HTML** yang terbagi menjadi dua kelompok utama: **Block-Level Elements** dan **Inline-Level Elements**.

---

## 1. Analogi Balok Batu Bata vs Stiker Label

- 🧱 **Block-Level Elements (Analogi Balok Batu Bata)**:
  Seperti balok batu bata besar yang kokoh. Ketika ditaruh, batu bata ini akan memakan **seluruh lebar ruang tempat dari kiri ke kanan** dan memaksa benda berikutnya untuk ditaruh di baris baru di bawahnya.
- 🏷️ **Inline-Level Elements (Analogi Stiker Label Teks)**:
  Seperti stiker label nama kecil yang ditempelkan di atas kertas. Stiker ini hanya memakan tempat seukuran lebarnya saja dan stiker berikutnya bisa ditempel tepat di sebelahnya pada baris yang sama.

---

## 2. Karakteristik Elemen Block-Level

```html
<!-- Dua Elemen Block yang Selalu Berada di Baris Berbeda -->
<div>Saya adalah elemen Block pertama</div>
<p>Saya adalah elemen Block kedua</p>
```

### Ciri-Ciri Utama Elemen Block:

1. **Selalu Memulai Baris Baru**: Otomatis turun ke bawah.
2. **Mengambil Lebar Penuh (100%)**: Memenuhi seluruh lebar container induknya.
3. **Bisa Mengatur Ukuran**: Mengizinkan pengaturan lebar (`width`) dan tinggi (`height`) via CSS.
4. **Boleh Membungkus Elemen Lain**: Dapat berisi elemen block lainnya maupun elemen inline.

### Daftar Elemen Block-Level Populer:
`<div>`, `<p>`, `<h1>` s/d `<h6>`, `<ul>`, `<ol>`, `<li>`, `<form>`, `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`.

---

## 3. Karakteristik Elemen Inline-Level

```html
<!-- Tiga Elemen Inline yang Berdiri Sejajar di Satu Baris -->
<p>
    Teks ini mengandung kata <strong>tebal</strong>, <em>miring</em>, dan <a href="#">tautan link</a> yang semuanya berdiri sejajar!
</p>
```

### Ciri-Ciri Utama Elemen Inline:

1. **TIDAK Membuat Baris Baru**: Berdiri sejajar dalam satu alinea kalimat.
2. **Lebar Seukuran Konten**: Lebarnya hanya selebar teks/media di dalamnya.
3. **TIDAK BISA Mengatur Ukuran**: Mengabaikan atribut `width` dan `height` CSS.
4. **Hanya Boleh Membungkus Teks/Inline Lain**: Tidak boleh membungkus elemen block!

### Daftar Elemen Inline-Level Populer:
`<span>`, `<a>`, `<strong>`, `<em>`, `<mark>`, `<img>`, `<input>`, `<label>`, `<code>`.

---

## 4. Kapan Menggunakan `<div>` vs `<span>`?

Kedua elemen ini tidak memiliki arti semantik bawaan, tetapi sangat sering digunakan sebagai pembungkus khusus untukStyling CSS:

### A. Penggunaan `<div>` (Divider / Block Wrapper)
Gunakan `<div>` saat Anda ingin **kelompokkan beberapa elemen** (seperti membungkus judul, gambar, dan paragraf menjadi satu kartu produk):

```html
<!-- Membungkus Satu Kartu Produk -->
<div className="kartu-produk">
    <img src="sepatu.jpg" alt="Sepatu Lari">
    <h3>Sepatu Lari Sport</h3>
    <p>Harga: Rp 450.000</p>
</div>
```

### B. Penggunaan `<span>` (Inline Span / Text Wrapper)
Gunakan `<span>` saat Anda ingin **memberi gaya khusus pada sebagian kata** di dalam sebuah kalimat tanpa merusak alur paragraf:

```html
<p>
    Sistem kami berjalan secara <span style="color: green; font-weight: bold;">Aktif & Normal</span> hari ini.
</p>
```

---

## 💡 Rangkuman & Praktik Terbaik

1. **Elemen Block** mengambil seluruh lebar layar dan membuat baris baru.
2. **Elemen Inline** berdiri sejajar di dalam teks dan lebarnya pas seukuran isi kontennya.
3. Gunakan **`<div>`** untuk kelompokkan kontainer layout, dan **`<span>`** untuk bagian kata tertentu.
