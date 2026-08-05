---
id: "html-01-pengenalan-html"
title: "HTML 01: Pengenalan Dasar HTML5, Cara Kerja Web & Anatomi Dokumen"
category: "Web Development"
date: "05 Agu 2026"
readTime: "8 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: true
excerpt: "Panduan paling mendasar dan mendalam belajar HTML5 dari nol: Memahami cara kerja web, anatomi tag HTML, atribut, hingga struktur standar dokumen HTML5 dengan analogi bangunan rumah."
---

Selamat datang di langkah pertama perjalanan Anda menjadi seorang **Web Developer**! Di dalam dunia pemrograman web, **HTML** adalah fondasi paling awal dan paling krusial yang wajib dikuasai oleh siapa pun, baik Anda ingin menjadi Front-End Developer, Back-End Developer, maupun UI/UX Designer.

Tanpa HTML, tidak ada situs web di internet yang dapat tampil di layar peramban (*browser*) Anda.

---

## 1. Apa itu HTML? (Analogi Konstruksi Bangunan Rumah)

**HTML** adalah singkatan dari **HyperText Markup Language**. Mari kita bedah istilah ini secara sederhana:

- **HyperText**: Teks yang saling terhubung satu sama lain melalui tautan (*link*), memungkinkan pengguna melompat dari satu halaman ke halaman lainnya dengan sekali klik.
- **Markup Language**: Bahasa penandaan yang menggunakan elemen penanda (disebut **Tag**) untuk memberi tahu *browser* bagaimana suatu konten harus ditampilkan.

### 🏗️ Analogi Konstruksi Rumah

Untuk memahami peran HTML dalam pembuatan situs web, bayangkan Anda sedang membangun **sebuah rumah tinggal**:

1. 🧱 **HTML (Struktur & Dinding Batu Bata)**: Mengatur posisi fondasi, ruangan, pintu, jendela, dan tinggi atap. Tanpa perhiasan apa pun, rumah hanya berupa bangunan semen polos.
2. 🎨 **CSS (Cat & Dekorasi Interior)**: Memberikan warna cat pada dinding, memilih bahan lantai keramik, mengatur pencahayaan lampu, dan menghias wallpaper agar indah dipandang.
3. ⚡ **JavaScript (Sistem Listrik & Otomasi)**: Memberikan fungsi interaktif pada rumah, seperti pintu yang bisa terbuka otomatis saat ada orang mendekat atau lampu yang bisa menyala sendiri saat malam hari.

---

## 2. Cara Kerja Browser Membaca File HTML

Ketika Anda mengetikkan alamat seperti `https://google.com` di browser (Chrome, Firefox, Edge, atau Safari):

1. Browser mengirimkan permintaan (*request*) ke komputer server penyimpanan web.
2. Server mengirimkan kembali balasan berupa file teks mentah yang berisi kode **HTML**.
3. Browser Anda bertindak sebagai **penerjemah** yang membaca file kode tersebut dari baris paling atas hingga bawah, lalu menyusunnya menjadi tampilan visual cantik yang Anda lihat di layar.

---

## 3. Anatomi Tag, Elemen, dan Atribut HTML

Setiap penulisan di dalam HTML dibentuk oleh tiga komponen dasar: **Tag Opening**, **Konten**, dan **Tag Closing**.

```html
<p class="teks-pengantar">Selamat datang di kelas HTML!</p>
```

Mari kita uraikan komponen kode di atas:

- **Tag Pembuka (`<p>`)**: Menandai awal dari sebuah elemen paragraf.
- **Atribut (`class="teks-pengantar"`)**: Informasi tambahan yang diberikan kepada tag untuk identifikasi atau pemberian gaya CSS.
- **Konten (`Selamat datang...`)**: Teks atau informasi utama yang akan dibaca oleh pengguna.
- **Tag Penutup (`</p>`)**: Menandai akhir dari elemen paragraf (ditandai dengan simbol garis miring `/`).
- **Elemen**: Gabungan keseluruhan dari Tag Pembuka + Atribut + Konten + Tag Penutup.

---

## 4. Bedah Struktur Dokumen Standar HTML5

Setiap file HTML wajib memiliki struktur dasar standar. Berikut adalah *template* resmi dokumen HTML5 yang biasa digunakan para pengembang profesional:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Web Pertama Saya</title>
</head>
<body>
    <h1>Halo Dunia! Saya Belajar HTML</h1>
    <p>Ini adalah paragraf pertama di web baru saya.</p>
</body>
</html>
```

### Penjelasan Baris demi Baris:

1. `<!DOCTYPE html>`: Deklarasi wajib di baris pertama yang memberitahu browser bahwa dokumen ini menggunakan standar versi **HTML5** terbaru.
2. `<html lang="id">`: Pembungkus utama seluruh dokumen HTML. Atribut `lang="id"` menandakan bahasa utama situs adalah Bahasa Indonesia (sangat penting untuk Search Engine & Screen Reader).
3. `<head>`: Area khusus tempat menyimpan metadata website (informasi yang tidak tampil langsung di badan halaman, seperti judul tab browser, karakter encoding, dan link CSS).
4. `<meta charset="UTF-8">`: Memastikan dokumen dapat membaca berbagai karakter huruf huruf Latin, simbol, hingga emoji secara sempurna.
5. `<meta name="viewport" ...>`: Mengatur agar halaman web bisa tampil responsif saat dibuka di layar HP maupun Komputer.
6. `<title>`: Menentukan teks judul yang muncul pada **Tab Browser** atas dan hasil pencarian Google.
7. `<body>`: Area utama tempat Anda menuliskan seluruh isi konten website (teks, gambar, tombol, video, dan form) yang bisa dilihat langsung oleh pengunjung.

---

## 5. Kesalahan Umum Pemula yang Wajib Dihindari

> ⚠️ **1. Lupa Menutup Tag (`</tag>`)**  
> Banyak pemula lupa menuliskan garis miring `/` pada tag penutup. Akibatnya, elemen di bawahnya bisa rusak atau ikut terpengaruh oleh gaya elemen sebelumnya.

> ⚠️ **2. Menggunakan Tag Huruf Besar (`<BODY>`)**  
> Walaupun HTML tidak peka huruf besar-kecil (*case-insensitive*), standar industri modern mewajibkan penulisan tag menggunakan **huruf kecil (*lowercase*)** seperti `<body>`, `<h1>`, dan `<p>`.

---

## 💡 Rangkuman & Langkah Selanjutnya

Selamat! Anda telah memahami konsep paling fundamental dari HTML5. Sekarang Anda siap melanjutkan ke **Modul 02** untuk mempelajari cara memformat teks, membuat judul (*heading*), dan merawat paragraf bacaan agar profesional!
