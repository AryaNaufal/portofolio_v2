---
id: "html-02-format-teks-headings"
title: "HTML 02: Memahami Judul (Heading), Paragraf & Formatting Teks"
category: "Web Development"
date: "05 Agu 2026"
readTime: "8 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Panduan praktis memformat tulisan pada halaman web: Hirarki tag heading (h1-h6), teknik pembagian paragraf, line break, dan penekanan teks penting."
---

Setiap halaman web yang nyaman dibaca pasti memiliki tata letak tulisan yang teratur. Bayangkan jika Anda membaca koran atau majalah yang seluruh tulisannya berukuran sama tanpa ada judul berita maupun alinea - tentu sangat membingungkan, bukan?

Di modul ini, kita akan mempelajari cara menyusun hirarki judul, membagi paragraf, dan memberi penekanan pada kata-kata penting.

---

## 1. Hirarki Tag Heading (`<h1>` sampai `<h6>`)

HTML menyediakan 6 tingkatan tag judul (*Heading*), mulai dari `<h1>` yang paling besar dan penting, hingga `<h6>` yang paling kecil.

```html
<h1>Judul Utama Artikel (H1)</h1>
<h2>Sub-Bab Utama (H2)</h2>
<h3>Sub-Topik Detail (H3)</h3>
<h4>Sub-Sub Topik (H4)</h4>
<h5>Topik Kecil (H5)</h5>
<h6>Topik Paling Kecil (H6)</h6>
```

### 📰 Analogi Koran & Majalah

- **`<h1>` (Judul Berita Utama Koran)**: Hanya boleh ada **satu `<h1>` per halaman web**. Digunakan untuk judul utama artikel. Ini sangat penting untuk SEO Google!
- **`<h2>` (Sub-Judul / Bab Baru)**: Digunakan untuk membagi artikel menjadi beberapa bagian topik utama.
- **`<h3>` (Sub-Topik di Dalam Bab)**: Digunakan untuk rincian bagian di bawah `<h2>`.

> 💡 **Aturan Emas SEO:** Jangan pernah memilih tag heading hanya karena ingin tulisannya berukuran besar. Gunakan heading berdasarkan **hirarki struktur artikel**, bukan untuk hiasan visual semata!

---

## 2. Paragraf (`<p>`) dan Pindah Baris (`<br>`)

### A. Tag Paragraf (`<p>`)
Tag `<p>` digunakan untuk membungkus satu blok paragraf bacaan. Secara otomatis, browser akan memberikan jarak spasi margin di atas dan di bawah elemen ini agar bacaan terasa lega.

```html
<p>
    HTML adalah bahasa penandaan standar untuk membuat halaman web. 
    Dengan HTML, Anda bisa menyusun tulisan dan media secara terstruktur.
</p>

<p>
    Ini adalah paragraf kedua. Jarak antar paragraf akan otomatis 
    diatur oleh peramban tanpa perlu menambahkan spasi manual.
</p>
```

### B. Line Break (`<br>`) - Tag Tanpa Penutup
Jika Anda ingin membuat baris baru **tanpa membuat paragraf baru** (seperti saat menulis bait puisi atau alamat rumah), gunakan tag `<br>` (*Break*). Tag ini adalah tag mandiri tanpa tag penutup.

```html
<p>
    Jl. Merdeka No. 45<br>
    Kecamatan Serpong, Kota Tangerang Selatan<br>
    Banten, Indonesia
</p>
```

---

## 3. Formatting Penekanan Teks (Semantic Text Styling)

Untuk memberi tekanan atau gaya khusus pada kata tertentu di dalam paragraf, gunakan tag elemen teks berikut:

```html
<p>
    Belajar koding itu <strong>sangat penting</strong> untuk masa depan. 
    Pastikan Anda <em>konsisten latihan setiap hari</em>. 
    Jangan lupa membaca <mark>dokumentasi resmi</mark> HTML5!
</p>
```

- **`<strong>`**: Memberikan penekanan **teks tebal (bold)** yang menandakan kalimat tersebut sangat penting atau krusial.
- **`<em>` (Emphasis)**: Memberikan penekanan **teks miring (italic)** pada kata asing, istilah teknis, atau penekanan nada bicara.
- **`<mark>`**: Memberikan efek **stabilo/highlighter kuning** pada kata kunci penting.
- **`<del>` (Deleted)**: Memberikan efek **teks dicoret** (cocok untuk menampilkan diskon harga produk lama).
- **`<ins>` (Inserted)**: Memberikan efek **teks bergaris bawah** untuk menandakan revisi harga baru.

```html
<!-- Contoh Kasus Diskon Toko Online -->
<p>
    Harga Spesial: <del>Rp 500.000</del> <ins>Rp 250.000</ins>!
</p>
```

---

## 4. Garis Pemisah Horizontal (`<hr>`)

Jika Anda ingin memberikan garis pembatas visual antara satu bagian bab dengan bab berikutnya, gunakan tag `<hr>` (*Horizontal Rule*).

```html
<h2>Bab 1: Dasar HTML</h2>
<p>Isi penjelasan bab 1...</p>

<!-- Garis Pemisah Horizontal -->
<hr>

<h2>Bab 2: Lanjutan HTML</h2>
<p>Isi penjelasan bab 2...</p>
```

---

## 💡 Rangkuman & Praktik Terbaik

1. Selalu gunakan **satu `<h1>`** di setiap halaman web.
2. Gunakan `<strong>` alih-alih tag `<b>` lama, dan `<em>` alih-alih `<i>` lama demi standar **Semantic Web**.
3. Bungkus setiap alinea dengan tag `<p>` agar dokumen Anda rapi dan rapi saat dibaca oleh peramban.
