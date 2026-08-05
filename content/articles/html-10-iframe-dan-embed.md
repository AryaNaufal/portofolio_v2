---
id: "html-10-iframe-dan-embed"
title: "HTML 10: Menyisipkan Iframe, YouTube Video & Google Maps"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Pelajari cara mengintegrasikan konten luar seperti video YouTube, peta lokasi Google Maps, dan website lain menggunakan tag <iframe>."
---

Tag `<iframe>` (Inline Frame) memungkinkan Anda membuat "jendela" di dalam halaman web untuk menampilkan situs lain atau media dari platform eksternal.

## 1. Konsep Dasar Tag Iframe

```html
<iframe 
  src="https://example.com" 
  width="100%" 
  height="400" 
  title="Pratinjau Situs"
  style="border: none;">
</iframe>
```

## 2. Cara Embed Video YouTube

Platform seperti YouTube menyediakan kode embed berbasis `<iframe>` yang siap disalin ke situs Anda:

```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

## 3. Cara Embed Peta Google Maps

Menampilkan lokasi toko atau kantor Anda menggunakan iframe dari Google Maps:

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135000001!3d-6.194741399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e6735db7089b!2sJakarta!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid" 
  width="100%" 
  height="350" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

---

### Kesimpulan
Tag `<iframe>` memberikan fleksibilitas luar biasa untuk memperkaya informasi situs web Anda dengan memanfaatkan layanan populer eksternal.
