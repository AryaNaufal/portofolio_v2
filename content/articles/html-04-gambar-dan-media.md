---
id: "html-04-gambar-dan-media"
title: "HTML 04: Menampilkan Gambar (<img>), Audio & Video HTML5"
category: "Web Development"
date: "05 Agu 2026"
readTime: "8 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Panduan lengkap memasang gambar visual, atribut alt text untuk SEO & aksesibilitas, serta memutar pemutar media audio dan video bawaan HTML5."
---

Sebuah halaman web tanpa gambar dan media interaktif akan terasa sangat membosankan. Gambar tidak hanya mempercantik tampilan visual, tetapi juga membantu pembaca memahami informasi dengan jauh lebih cepat.

Di modul ini, Anda akan mempelajari cara menampilkan gambar menggunakan tag `<img>`, menggunakan `alt text` untuk SEO, serta memasang pemutar media audio dan video HTML5 secara native.

---

## 1. Menampilkan Gambar dengan Tag `<img>`

Tag `<img>` adalah tag mandiri tanpa tag penutup (*self-closing tag*). Dua atribut paling penting yang **wajib** ada pada tag ini adalah `src` dan `alt`.

```html
<img src="pemandangan.jpg" alt="Pemandangan gunung di pagi hari" width="800" height="450">
```

### Penjelasan Atribut Utama:

- **`src` (Source)**: Alamat jalur file gambar yang ingin ditampilkan (bisa berupa jalur relatif file lokal atau URL internet).
- **`alt` (Alternative Text)**: Teks deskriptif pengganti jika gambar gagal dimuat akibat koneksi internet lambat.
- **`width` & `height`**: Menentukan dimensi ukuran lebar dan tinggi gambar dalam piksel.

---

## 2. Kenapa `alt text` Sangat Krusial untuk SEO & Aksesibilitas?

Banyak pemula mengabaikan atribut `alt`, padahal atribut ini memiliki 3 fungsi sangat krusial:

1. 👁️ **Bantuan Difabel (Screen Reader)**: Pengunjung tunanetra yang menggunakan alat pembaca layar bergantung pada `alt text` untuk mengetahui isi gambar tersebut.
2. 🌐 **Penyelamat Koneksi Lambat**: Jika gambar gagal terunduh, browser akan menampilkan teks `alt` sebagai informasi pengganti di dalam kotak gambar.
3. 🔍 **SEO Google Images**: Mesin pencari seperti Google tidak bisa "melihat" piksel gambar secara langsung; Google memahami gambar melalui deskripsi `alt text` Anda.

> ❌ **Buruk**: `alt="gambar1"`  
> ✅ **Baik**: `alt="Logo HTML5 berwarna oranye dengan latar belakang transparan"`

---

## 3. Pembungkus Gambar Modern (`<figure>` dan `<figcaption>`)

HTML5 menyediakan elemen khusus untuk membungkus gambar beserta teks penjelas (*caption*) di bawahnya:

```html
<figure>
    <img src="laptop-coding.jpg" alt="Seorang developer sedang koding di laptop">
    <figcaption>Gambar 1.1: Suasana kerja seorang Front-End Developer.</figcaption>
</figure>
```

---

## 4. Memutar Video HTML5 (`<video>`)

Sebelum HTML5 hadir, memutar video di web memerlukan plugin pihak ketiga seperti Flash Player. Sekarang, Anda bisa memutar video langsung menggunakan tag `<video>` bawaan browser:

```html
<video src="tutorial.mp4" controls width="640" height="360" poster="sampul-video.jpg">
    Browser Anda tidak mendukung pemutaran video HTML5.
</video>
```

### Atribut Tambahan Tag Video:

- `controls`: Menampilkan tombol play/pause, durasi waktu, pengatur volume, dan tombol fullscreen.
- `autoplay`: Memutar video secara otomatis saat halaman dibuka (biasanya harus digabung dengan `muted`).
- `loop`: Memutar video kembali dari awal secara terus-menerus setelah selesai.
- `poster`: Memasang gambar sampul (*thumbnail*) sebelum video diputar.

---

## 5. Memutar Musik & Audio (`<audio>`)

Sama seperti video, Anda dapat menambahkan pemutar audio lagu atau podcast ke dalam web menggunakan tag `<audio>`:

```html
<audio controls preload="auto">
    <source src="podcast-episode-1.mp3" type="audio/mpeg">
    <source src="podcast-episode-1.ogg" type="audio/ogg">
    Browser Anda tidak mendukung pemutar audio.
</audio>
```

---

## 💡 Rangkuman & Praktik Terbaik

1. **Selalu tuliskan atribut `alt`** yang jelas pada setiap tag `<img>`.
2. Gunakan format gambar yang tepat: **JPG** untuk foto, **PNG** untuk gambar transparan, dan **SVG** untuk ikon vector tajam.
3. Selalu tambahkan atribut `controls` pada pemutar `<video>` dan `<audio>` agar pengunjung memiliki kendali penuh atas suara peramban mereka.
