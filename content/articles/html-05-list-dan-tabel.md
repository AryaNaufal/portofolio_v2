---
id: "html-05-list-dan-tabel"
title: "HTML 05: Membuat Daftar (List) dan Tabel Struktur Data"
category: "Web Development"
date: "05 Agu 2026"
readTime: "6 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Panduan lengkap menyajikan data dalam bentuk daftar poin/angka (UL, OL) serta menyusun tabel data dengan tag table, tr, th, dan td."
---

Data yang terstruktur rapi sangat membantu pengguna dalam mencerna informasi dengan cepat. Di modul ini, kita akan mempelajari penulisan List dan Tabel.

## 1. Unordered List (Daftar Poin / Bullet)

Gunakan tag `<ul>` dipadukan dengan tag `<li>` untuk poin-poin yang urutannya tidak mengikat:

```html
<h3>Langkah Belajar Web:</h3>
<ul>
  <li>Memahami HTML5</li>
  <li>Mempelajari CSS3 & Layouting</li>
  <li>Kuasai JavaScript ES6</li>
</ul>
```

## 2. Ordered List (Daftar Berurutan / Angka)

Gunakan tag `<ol>` untuk urutan berseri atau langkah-langkah bertahap:

```html
<h3>Tahap Pendaftaran:</h3>
<ol>
  <li>Isi formulir pendaftaran</li>
  <li>Lakukan verifikasi email</li>
  <li>Masuk ke dashboard akun</li>
</ol>
```

## 3. Menyusun Tabel Data (Table)

Tabel disusun menggunakan kombinasi tag `<table>`, `<thead>`, `<tbody>`, `<tr>` (row), `<th>` (header cell), dan `<td>` (data cell):

```html
<table border="1">
  <thead>
    <tr>
      <th>No</th>
      <th>Nama Bahasa</th>
      <th>Tingkat Kesulitan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>HTML5</td>
      <td>Mudah (Pemula)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>JavaScript</td>
      <td>Menengah</td>
    </tr>
  </tbody>
</table>
```

---

### Kesimpulan
Daftar poin dan tabel adalah dua elemen pendukung terbaik untuk menampilkan ringkasan data yang bersih dan profesional.
