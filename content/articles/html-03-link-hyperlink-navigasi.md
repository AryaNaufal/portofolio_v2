---
id: "html-03-link-hyperlink-navigasi"
title: "HTML 03: Cara Kerja Link & Navigasi Halaman Web"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Pelajari cara menghubungkan halaman web Anda dengan situs lain atau halaman internal menggunakan tag <a> (anchor) dengan analogi pintu berpindah halaman yang sangat jelas."
---

Kekuatan utama dari Word Wide Web adalah kemampuannya saling terhubung satu sama lain. Tanpa adanya tautan (*link*), internet hanyalah sekumpulan dokumen terisolasi yang tidak bisa dikunjungi secara berurutan.

## 1. Apa itu Tag Link? (Analogi Pintu Teleportasi)

Bayangkan sebuah halaman web seperti **Rumah dengan Banyak Ruangan**:

- Tag `<a>` (singkatan dari *Anchor*) bertindak seperti **Pintu Rahasia / Teleportasi**. 
- Atribut `href` bertindak sebagai **Alamat Peta** yang menentukan ke mana pengunjung akan pergi saat membuka pintu tersebut.

Berikut contoh penulisan tautan ke situs luar (seperti Google):

```html
<!-- Tautan Eksternal ke Situs Lain -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Klik Di Sini untuk Membuka Google
</a>
```

> 💡 **Tips Pemula:** Atribut `target="_blank"` berguna agar link terbuka di **tab baru**, sehingga pengunjung tidak langsung meninggalkan halaman website Anda.

## 2. Berpindah Antar Halaman di Proyek Sendiri (Relative Link)

Jika Anda memiliki beberapa file HTML di komputer Anda sendiri (seperti halaman *Beranda*, *Tentang*, dan *Kontak*), Anda bisa menghubungkannya seperti ini:

```html
<!-- Navigasi Halaman Internal -->
<a href="index.html">Kembali ke Beranda</a>
<a href="tentang.html">Tentang Saya</a>
<a href="kontak.html">Hubungi Kami</a>
```

## 3. Melompat ke Bagian Tertentu di Halaman yang Sama (Anchor Link)

Pernahkah Anda melihat tombol *"Kembali ke Atas"* atau daftar isi yang saat diklik langsung meluncur ke bawah? Itu dibuat menggunakan kombinasi atribut `href="#id"`:

```html
<!-- Tombol Pemicu di Atas Halaman -->
<a href="#bagian-kontak">Melompat Langsung ke Bagian Kontak</a>

<!-- Bagian Tujuan di Bawah Halaman -->
<div id="bagian-kontak">
  <h2>Hubungi Kami</h2>
  <p>Kirim email ke: info@example.com</p>
</div>
```

---

### Kesimpulan Ringkas
Tag `<a>` dengan atribut `href` adalah kunci utama yang menghubungkan seluruh halaman web di dunia. Tanpa tag ini, jaringan internet tidak akan pernah ada!
