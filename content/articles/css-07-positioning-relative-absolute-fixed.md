---
id: "css-07-positioning-relative-absolute-fixed"
title: "CSS 07: Menguasai CSS Positioning (Relative, Absolute, Fixed, Sticky & Z-Index)"
category: "Web Development"
date: "05 Agu 2026"
readTime: "9 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan presisi memosisikan elemen di layar: Menguasai position static, relative, absolute, fixed (tombol melayang), sticky (navbar), dan tumpukan lapisan z-index."
---

Secara bawaan, elemen HTML disusun mengalir secara berurutan dari atas ke bawah. Namun di dunia nyata, sering kali kita ingin memosisikan elemen secara bebas di sudut tertentu—seperti menaruh **Badge Diskon** di sudut kanan atas kartu gambar, membuat **Navbar Melayang** di atas layar, atau memasang **Tombol Chat WhatsApp** di sudut kanan bawah.

Di sinilah properti `position` mengambil peran vital.

---

## 1. 5 Jenis Nilai Position di CSS

### A. `position: static` (Bawaan Default)
Posisi bawaan seluruh elemen HTML. Elemen disusun mengalir normal dari atas ke bawah. Nilai properti `top`, `bottom`, `left`, `right`, dan `z-index` **tidak berpengaruh** pada `static`.

### B. `position: relative`
Memindahkan elemen dari posisi aslinya tanpa merusak alur tempat elemen di sekitarnya. 

Namun fungsi terpenting dari `relative` adalah: **Sebagai Jangkar Patokan** bagi elemen anak yang menggunakan `position: absolute`!

```css
.kontainer-induk {
    position: relative; /* Jangkar Patokan Koordinat */
    width: 300px;
    height: 400px;
}
```

### C. `position: absolute` (Melayang Bebas Berdasarkan Induk)
Elemen dicabut dari alur dokumen normal dan melayang bebas. Posisi `top`, `bottom`, `left`, dan `right`-nya akan **mengacu pada induk terdekat yang memiliki `position: relative`**.

```css
/* Badge Diskon di Sudut Kanan Atas Kartu Produk */
.badge-diskon {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: #f59e0b;
    color: #0f172a;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 99px;
}
```

### D. `position: fixed` (Kunci Pinned di Layar Monitor/HP)
Elemen dikunci pada koordinat posisi tertentu di **layar peramban/HP**. Meskipun pengunjung men-scroll halaman dari atas ke bawah, elemen tersebut akan **tetap diam melayang di posisi yang sama**!

```css
/* Tombol Chat WhatsApp Melayang di Kanan Bawah */
.tombol-wa-fixed {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999;
}
```

### E. `position: sticky` (Kombinasi Relative & Fixed)
Elemen akan mengikuti scroll biasa, namun ketika menyentuh batas koordinat tertentu (misal `top: 0`), elemen akan **otomatis menempel menjadi fixed** (sangat cocok untuk Navbar dan Sidebar Daftar Isi).

```css
.sidebar-daftar-isi {
    position: sticky;
    top: 100px; /* Menempel saat scroll menyentuh jarak 100px dari atas */
}
```

---

## 2. Memahami `z-index` (Urutan Lapisan Tumpukan)

Ketika beberapa elemen melayang secara bersamaan, mereka bisa saling bertumpukan. Properti `z-index` menentukan elemen mana yang berada di paling atas atau paling bawah (sumbu kedalaman Z):

```css
.lapisan-bawah {
    position: absolute;
    z-index: 1;
}

.lapisan-atas {
    position: absolute;
    z-index: 10; /* Angka lebih besar berada di atas! */
}
```

> ⚠️ **Catatan penting:** `z-index` **hanya bekerja** pada elemen yang memiliki `position` selain `static` (`relative`, `absolute`, `fixed`, atau `sticky`).

---

## 💡 Rangkuman & Rumus Pasangan Wajib

1. **Rumus Pasangan Sejati**: Selalu beri `position: relative` pada pembungkus induk, dan `position: absolute` pada elemen anak yang ingin digeser ke sudut tertentu.
2. Gunakan **`position: fixed`** untuk tombol melayang aksi WhatsApp/Back to Top.
3. Gunakan **`position: sticky`** untuk Navbar menu dan Sidebar daftar isi yang menempel saat di-scroll.
