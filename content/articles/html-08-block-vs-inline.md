---
id: "html-08-block-vs-inline"
title: "HTML 08: Memahami Perbedaan Block vs Inline Elements"
category: "Web Development"
date: "05 Agu 2026"
readTime: "4 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Pelajari perbedaan sifat tampilan elemen Block-level (div, p, h1) dan Inline-level (span, a, strong) serta penggunaannya dalam layout."
---

Di dalam HTML, setiap elemen memiliki sifat perilaku secara bawaan (*default display behavior*) yaitu berupa **Block-level** atau **Inline-level**.

## 1. Elemen Block-Level

Elemen *Block* selalu **memulai baris baru** dan mengambil **seluruh lebar layar** yang tersedia (dari ujung kiri hingga kanan).

Contoh elemen Block: `<div>`, `<p>`, `<h1>` sampai `<h6>`, `<ul>`, `<ol>`, `<section>`, `<article>`, `<form>`.

```html
<!-- Dua tag div ini akan muncul berurutan dari atas ke bawah -->
<div style="background: lightblue;">Saya elemen Block pertama</div>
<div style="background: lightgreen;">Saya elemen Block kedua (otomatis baris baru)</div>
```

## 2. Elemen Inline-Level

Elemen *Inline* **TIDAK membuat baris baru** dan hanya mengambil lebar seluas isi konten di dalamnya saja. Elemen inline akan berdiri berdampingan secara horizontal dengan elemen inline lainnya.

Contoh elemen Inline: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<mark>`, `<label>`.

```html
<!-- Tag span ini akan berada sejajar di satu baris yang sama -->
<p>
  Teks ini memiliki kata ber-warna 
  <span style="color: red;">Merah</span> dan kata ber-warna 
  <span style="color: blue;">Biru</span> yang sejajar.
</p>
```

## 3. Kapan Menggunakan `<div>` vs `<span>`?

- Gunakan `<div>` (Division) sebagai **kontainer pembungkus kelompok elemen besar** (misal: pembungkus sekelompok kartu produk).
- Gunakan `<span>` untuk **memberi styling khusus pada potongan teks kecil** di dalam kalimat tanpa merusak alur paragraf.

---

### Kesimpulan
Memahami perbedaan sifat Block dan Inline akan mempermudah Anda saat mengatur tata letak (*layouting*) dengan CSS nantinya.
