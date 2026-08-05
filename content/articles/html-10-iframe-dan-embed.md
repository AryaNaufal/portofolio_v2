---
id: "html-10-iframe-dan-embed"
title: "HTML 10: Memasang Embed Iframe, YouTube & Google Maps"
category: "Web Development"
date: "05 Agu 2026"
readTime: "8 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Panduan praktis mengunggah konten luar ke dalam situs web Anda: Menggunakan tag <iframe>, menyematkan video YouTube, peta lokasi Google Maps, dan faktor keamanan."
---

Pernahkah Anda melihat halaman web kontak bisnis yang menampilkan **peta interaktif Google Maps** langsung di dalam halamannya? Atau artikel yang menampilkan pemutar video **YouTube** yang bisa diputar langsung tanpa keluar dari web tersebut?

Teknologi di balik fitur penyematan tersebut adalah tag `<iframe>` (*Inline Frame*).

---

## 1. Apa itu Tag `<iframe>`? (Analogi Jendela Kaca Dinding)

Bayangkan rumah Anda memiliki **Jendela Kaca Transparan** di dinding:

- Melalui jendela kaca tersebut, Anda bisa melihat pemandangan kebun tetangga di luar tanpa perlu melangkah keluar dari rumah Anda.
- Tag `<iframe>` bertindak persis seperti jendela kaca tersebut - tag ini memungkinkan Anda **menampilkan dokumen halaman web lain** langsung di dalam jendela kotak situs Anda sendiri.

---

## 2. Cara Kerja Penulisan Tag `<iframe>`

```html
<iframe 
    src="https://example.com" 
    width="800" 
    height="450" 
    title="Pratinjau Situs Eksternal"
    loading="lazy">
    Browser Anda tidak mendukung iframe.
</iframe>
```

### Penjelasan Atribut Penting:

- `src`: URL alamat web luar yang ingin dimasukkan.
- `width` & `height`: Menentukan lebar dan tinggi kotak jendela piksel.
- `title`: Wajib diisi demi aksesibilitas screen reader tunanetra.
- `loading="lazy"`: Fitur hemat kuota yang menunda pemuatan iframe sebelum pengunjung meng-scroll mendekati lokasi jendela tersebut.

---

## 3. Cara Memasang Embed Video YouTube

YouTube tidak mengizinkan Anda memasang link video langsung di atribut `src` biasa. YouTube menyediakan kode penyematan (*embed code*) khusus:

1. Buka video di YouTube.
2. Klik tombol **Bagikan (Share)** $\rightarrow$ Pilih **Sematkan (Embed)**.
3. Salin kode `<iframe>` yang disediakan dan tempelkan ke dalam kode HTML Anda:

```html
<!-- Contoh Kode Embed Pemutar Video YouTube -->
<div className="rasio-video">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="Pemutar Video YouTube" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
```

---

## 4. Memasang Peta Lokasi Google Maps Interaktif

Untuk menampilkan lokasi toko atau kantor Anda di halaman Kontak:

1. Buka lokasi bisnis Anda di **Google Maps**.
2. Klik tombol **Bagikan (Share)** $\rightarrow$ Pilih **Sematkan Peta (Embed a Map)**.
3. Salin kode HTML iframe yang diberikan:

```html
<!-- Contoh Kode Embed Peta Google Maps -->
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135000001!3d-6.194741399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e6735c13e4b7!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid" 
    width="100%" 
    height="400" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

---

## 5. Isu Keamanan Iframe & Atribut `sandbox`

Menampilkan halaman web luar di dalam situs Anda bisa menimbulkan risiko keamanan (*clickjacking*). Untuk melindungi pengunjung Anda dari skrip jahat, gunakan atribut `sandbox`:

```html
<!-- Mengunci Akses Skrip Jahat dari Web Luar -->
<iframe src="https://website-luar.com" sandbox="allow-scripts allow-same-origin"></iframe>
```

---

## 💡 Rangkuman & Selamat!

Selamat! Anda telah menyelesaikan seluruh **10 Modul Seri Belajar HTML5 Masterclass**!  
Kini kerangka web Anda sudah berdiri kokoh. Langkah berikutnya adalah melanjutkan ke **Seri Belajar CSS3** untuk mulai mempercantik warna, tata letak flexbox, grid, dan animasi website Anda!
