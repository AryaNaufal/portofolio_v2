---
id: "css-02-selectors-dan-cara-memilih"
title: "CSS 02: Menguasai CSS Selectors (Cara Memilih Elemen)"
category: "Web Development"
date: "05 Agu 2026"
readTime: "8 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan lengkap memilih elemen HTML: Menguasai Element Selector, Class Selector (.kelas), ID Selector (#id), Combinator, Pseudo-classes (:hover), dan Spesifisitas."
---

Sebelum Anda dapat mengubah warna cat atau mengatur ukuran suatu tulisan, Anda harus memberitahu browser **elemen spesifik mana yang ingin Anda ubah**. Di dalam CSS, mekanisme penunjukan ini disebut **Selector**.

Kemampuan memilih elemen secara akurat adalah keterampilan paling membedakan antara pengembang pemula dan pengembang berpengalaman.

---

## 1. Analogi Pemanggilan Siswa di Ruang Kelas

Bayangkan seorang Wali Kelas di depan kelas:

- **Element Selector**: *"Semua siswa yang pakai baju putih, berdiri!"* (Memilih seluruh elemen sejenis di seluruh halaman).
- **Class Selector (`.`)**: *"Siswa yang punya stiker kelompok 'Tim-Futsal', maju ke depan!"* (Memilih sekelompok elemen tertentu yang bisa berjumlah banyak).
- **ID Selector (`#`)**: *"Siswa bernama Budi dengan Nomor Induk 001, maju!"* (Memilih hanya **1 elemen unik** yang sangat spesifik).

---

## 2. Bedah 5 Jenis CSS Selector Utama

### A. Element / Tag Selector
Menunjuk seluruh elemen berdasarkan nama tag HTML nya tanpa tambahan simbol apa pun.

```css
/* Mengubah warna semua paragraf <p> di website */
p {
    color: #475569;
    line-height: 1.6;
}
```

### B. Class Selector (Menggunakan Simbol Titik `.`)
Digunakan untuk memberi gaya pada elemen yang memiliki atribut `class="..."`. Satu nama class dapat dipakai oleh **banyak elemen sekaligus** di seluruh halaman!

HTML:
```html
<p class="teks-sorot">Paragraf dengan kelas sorot.</p>
<button class="teks-sorot">Tombol dengan kelas sorot</button>
```

CSS:
```css
/* Menunjuk seluruh elemen yang ber-class teks-sorot */
.teks-sorot {
    color: #14b8a6;
    font-weight: bold;
}
```

### C. ID Selector (Menggunakan Simbol Pagar `#`)
Digunakan untuk menunjuk elemen unik yang memiliki atribut `id="..."`. Nama ID **hanya boleh digunakan oleh 1 elemen per halaman web**!

HTML:
```html
<h1 id="judul-utama-situs">Portofolio Arya Naufal</h1>
```

CSS:
```css
/* Menunjuk hanya 1 elemen ber-ID judul-utama-situs */
#judul-utama-situs {
    color: #f59e0b;
    font-size: 36px;
}
```

### D. Universal Selector (Simbol Bintang `*`)
Menunjuk **seluruh elemen tanpa terkecuali** di dalam halaman web. Sering digunakan di baris paling atas CSS untuk mereset margin default browser.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### E. Grouping Selector (Menggunakan Koma `,`)
Jika Anda memiliki beberapa elemen yang berbagi gaya yang sama, gabungkan menggunakan koma agar kode tidak berulang:

```css
/* Mengubah judul h1, h2, dan h3 sekaligus */
h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    color: #0f172a;
}
```

---

## 3. Pseudo-Classes Interaktif (`:hover`, `:active`, `:focus`)

Pseudo-class digunakan untuk mengubah gaya elemen saat terjadi **interaksi dari pengguna**:

```css
.tombol-aksi {
    background-color: #14b8a6;
    color: white;
    transition: background-color 0.3s;
}

/* Gaya saat kursor mouse diarahkan di atas tombol */
.tombol-aksi:hover {
    background-color: #0d9488;
}

/* Gaya saat tombol diklik ditekan */
.tombol-aksi:active {
    transform: scale(0.98);
}
```

---

## 4. Memahami Perhitungan Spesifisitas (Specificity)

Jika ada dua aturan CSS yang bentrok menunjuk elemen yang sama, siapakah yang menang?

1. **Inline Style (`style="..."`)** -> Skor: 1000 (Paling Kuat)
2. **ID Selector (`#id`)** -> Skor: 100
3. **Class / Attribute Selector (`.class`)** -> Skor: 10
4. **Element Selector (`h1`, `p`)** -> Skor: 1 (Paling Lemah)

---

## 💡 Rangkuman & Praktik Terbaik

1. **Gunakan Class Selector (`.`)** sebagai pilihan utama penulisan CSS sehari-hari karena sangat fleksibel dan re-usable.
2. Hindari penggunaan ID Selector untuk penulisan gaya visual biasa.
3. Hindari penggunaan kata kunci `!important` kecuali dalam kondisi darurat override library luar.
