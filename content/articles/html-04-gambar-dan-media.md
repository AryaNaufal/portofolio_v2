---
id: "html-04-gambar-dan-media"
title: "HTML 04: Menambahkan Gambar, Audio, Video & Alt Text"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Pelajari cara memasukkan elemen multimedia seperti gambar dengan tag <img>, video HTML5, audio player, serta pentingnya atribut alt text."
---

Sebuah halaman web akan terlihat membosankan jika hanya berisi teks. HTML5 mempermudah kita dalam menyisipkan berbagai elemen media seperti gambar, video, dan audio.

## 1. Menampilkan Gambar (tag img)

Tag `<img>` bersifat *self-closing* (tidak membutuhkan tag penutup `</img>`).

```html
<img 
  src="/logo_html.png" 
  alt="Logo HTML5" 
  width="600" 
  height="400" 
/>
```

> **Pentingnya Alt Text:** Atribut `alt` sangat penting untuk **aksesibilitas** bagi pengguna pembaca layar (*screen reader*) dan **SEO** Google.

## 2. Menggunakan Tag Video HTML5

Tag `<video>` memungkinkan kita memutar video langsung tanpa plugin tambahan.

```html
<video width="640" height="360" controls poster="cover-video.jpg">
  <source src="video-tutorial.mp4" type="video/mp4">
   Browser Anda tidak mendukung pemutaran video.
</video>
```

## 3. Pemutar Audio HTML5

Sama seperti video, tag `<audio>` digunakan untuk menyisipkan lagu atau podcast:

```html
<audio controls preload="metadata">
  <source src="podcast-episode-1.mp3" type="audio/mpeg">
  Browser Anda tidak mendukung pemutar audio.
</audio>
```

---

### Kesimpulan
Penggunaan media visual dan audio membuat konten artikel Anda menjadi lebih interaktif dan menarik bagi pengunjung.
