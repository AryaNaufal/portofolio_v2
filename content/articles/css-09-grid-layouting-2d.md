---
id: "css-09-grid-layouting-2d"
title: "CSS 09: Menyusun Galeri & Tata Letak 2 Dimensi dengan CSS Grid Masterclass"
category: "Web Development"
date: "05 Agu 2026"
readTime: "9 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan praktis CSS Grid: Membuat tata letak 2 dimensi (baris dan kolom sekaligus), memahami fr unit, fungsi repeat(), gap, dan trik auto-fit responsif."
---

Jika **Flexbox** sangat hebat dalam menangani tata letak **1 dimensi** (hanya baris atau kolom saja), maka **CSS Grid** adalah ahlinya dalam menangani tata letak **2 dimensi** (baris DAN kolom secara bersamaan seperti papan catur atau etalase toko).

Dengan CSS Grid, Anda dapat mendesain tata letak halaman web yang kompleks tanpa perlu menggunakan pembungkus `<div>` bersarang yang rumit.

---

## 1. Menyalakan CSS Grid (`display: grid`)

CSS Grid bekerja dengan membagi area pembungkus menjadi kisi-kisi kolom dan baris:

```html
<div className="galeri-grid">
    <div className="item">Foto 1</div>
    <div className="item">Foto 2</div>
    <div className="item">Foto 3</div>
    <div className="item">Foto 4</div>
    <div className="item">Foto 5</div>
    <div className="item">Foto 6</div>
</div>
```

```css
.galeri-grid {
    display: grid;
    /* Membuat 3 kolom dengan lebar sama rata */
    grid-template-columns: 200px 200px 200px;
    gap: 20px; /* Jarak spasi antar baris dan kolom */
}
```

---

## 2. Memahami Fractional Unit (`fr`)

CSS Grid memperkenalkan satuan ukuran fleksibel baru yaitu **`fr` (Fractional Unit)**. Satuan `1fr` mewakili 1 bagian dari sisa ruang kosong yang tersedia:

```css
.kontainer-3-kolom {
    display: grid;
    /* 3 Kolom yang membagi sisa lebar layar secara adil */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
}
```

Anda juga bisa membuat gabungan ukuran seperti `grid-template-columns: 250px 1fr 200px;` di mana kolom tengah akan otomatis melebar memenuhi sisa layar!

---

## 3. Menggunakan Fungsi `repeat()`

Daripada menulis `1fr 1fr 1fr 1fr` secara manual, Anda bisa me-ringkasnya menggunakan fungsi `repeat()`:

```css
.katalog-4-kolom {
    display: grid;
    /* Membuat 4 kolom ber-ukuran 1fr */
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}
```

---

## 4. Trik Ajaib: Grid Responsif Otomatis Tanpa Media Query (`auto-fit`)

Ini adalah teknik tingkat tinggi yang sangat disukai oleh para profesional untuk membuat galeri foto atau daftar kartu produk yang **otomatis menyesuaikan jumlah kolomnya di layar HP dan Komputer tanpa perlu menulis Media Query**:

```css
.galeri-responsif-otomatis {
    display: grid;
    /* Otomatis muat sebanyak mungkin kolom, minimal lebar 260px per kartu */
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
}
```

### Cara Kerja Kode Ajaib Ini:
- Di layar Monitor Komputer lebar: Browser akan menampilkan **4 atau 5 kolom**.
- Di layar Laptop: Otomatis menyesuaikan menjadi **3 kolom**.
- Di layar Tablet: Otomatis menyesuaikan menjadi **2 kolom**.
- Di layar Smartphone HP kecil: Otomatis menumpuk rapi menjadi **1 kolom**!

---

## 💡 Rangkuman & Kapan Pakai Flexbox vs Grid?

- Gunakan **Flexbox** saat: Menyusun elemen 1 dimensi (seperti menu Navbar, tombol aksi, atau baris ikon).
- Gunakan **CSS Grid** saat: Menyusun tata letak 2 dimensi (seperti kisi-kisi galeri foto, etalase toko online, atau layout dashboard).
