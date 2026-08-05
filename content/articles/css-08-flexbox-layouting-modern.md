---
id: "css-08-flexbox-layouting-modern"
title: "CSS 08: Layouting Modern 1 Dimensi dengan CSS Flexbox"
category: "Web Development"
date: "05 Agu 2026"
readTime: "6 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan menguasai CSS Flexbox: Cara mudah menyusun layout horizontal/vertikal, meratakan elemen ke tengah (center), dan mengatur jarak dengan gap."
---

Dahulu, meratakan elemen tepat di tengah-tengah layar sangatlah rumit. Namun sejak hadirnya **CSS Flexbox** (*Flexible Box*), pembuatan layout web 1 dimensi (secara baris atau kolom) menjadi sangat mudah dan menyenangkan!

## 1. Menyalakan Flexbox (`display: flex`)

Flexbox bekerja dengan memberikan perintah pada pembungkus induk (*flex container*):

```css
.container-pembungkus {
    display: flex;
}
```

Seketika setelah `display: flex` dipasang, seluruh elemen anak di dalamnya yang tadinya menumpuk ke bawah akan **otomatis berjejer rapi secara horizontal** ke samping!

## 2. Mengatur Penataan Elemen (Flex Properties Utama)

### A. `justify-content` (Perataan Horizontal)
Mengatur perataan elemen anak di sepanjang sumbu utama:

- `justify-content: center;` $\rightarrow$ Meratakan semua elemen tepat di tengah.
- `justify-content: space-between;` $\rightarrow$ Elemen pertama di paling kiri, elemen terakhir di paling kanan, sisa ruang kosong di tengah.
- `justify-content: flex-end;` $\rightarrow$ Meratakan semua elemen ke paling kanan.

### B. `align-items` (Perataan Vertikal)
Mengatur perataan tegak lurus secara vertikal:

- `align-items: center;` $\rightarrow$ Meratakan tinggi elemen anak tepat di tengah vertikal.

### C. `gap` (Jarak Antar Elemen)
Memberi jarak antar elemen anak tanpa perlu repot mengatur `margin`:

```css
.navbar-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px; /* Jarak 20px antar item menu */
}
```

## 3. Trik Sakti: Teks Tepat di Tengah Layar

Hanya butuh 3 baris kode CSS untuk membuat elemen berada tepat di tengah-tengah layar:

```css
.kotak-tengah-layar {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---

### Kesimpulan Ringkas
Flexbox adalah senjata utama pengembang web modern untuk membuat Navbar, kartu produk sejajar, dan meratakan elemen ke tengah.
