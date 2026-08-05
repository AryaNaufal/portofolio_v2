---
id: "css-04-tipografi-google-fonts"
title: "CSS 04: Mempercantik Teks dengan Tipografi & Google Fonts"
category: "Web Development"
date: "05 Agu 2026"
readTime: "8 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan praktis seni tipografi web: Mengatur font-family, ketebalan (font-weight), jarak spasi baris (line-height), kerning huruf (letter-spacing), dan import Google Fonts gratis."
---

Lebih dari 90% informasi di internet disampaikan melalui tulisan berbentuk teks. Sebagus apa pun konten tulisan Anda, jika tipografinya terlalu kecil, terlalu rapat, atau menggunakan huruf yang sulit dibaca, pengunjung akan langsung meninggalkan website Anda dalam hitungan detik.

Di modul ini, Anda akan menguasai atribut tipografi CSS dan cara menyambungkan font modern gratis dari Google Fonts.

---

## 1. Atribut Utama Tipografi CSS

Berikut adalah properti wajib yang paling sering digunakan untuk mengatur gaya tulisan:

```css
p {
    /* 1. Jenis Huruf */
    font-family: 'Inter', system-ui, sans-serif;
    
    /* 2. Ukuran Huruf */
    font-size: 16px;
    
    /* 3. Ketebalan Huruf (400 = Normal, 700 = Bold) */
    font-weight: 400;
    
    /* 4. Jarak Spasi Antar Baris (Ideal untuk Paragraf) */
    line-height: 1.6;
    
    /* 5. Jarak Kerning Antar Huruf */
    letter-spacing: 0.015em;
    
    /* 6. Meratakan Teks */
    text-align: left;
}
```

---

## 2. Bedah Properti Tipografi Secara Detail

### A. `line-height` (Rahasia Kunci Kenyamanan Membaca)
Properti `line-height` mengatur jarak ketinggian antar baris tulisan dari atas ke bawah.
- ❌ **`line-height: 1.0`**: Tulisan sangat rapat dan bertumpukan (membuat mata sangat lelah).
- ✅ **`line-height: 1.5` s/d `1.7`**: **Nilai Emas Paragraf Artikel** yang memberikan ruang spasi bernapas lega bagi mata pembaca.

### B. `letter-spacing` (Kerning Teks)
Properti ini memberikan jarak renggang antar karakter huruf. Sangat berguna ketika Anda menulis judul ber-huruf kapital (*UPPERCASE*) agar terkesan mewah dan lega:

```css
.sub-judul-uppercase {
    text-transform: uppercase;
    letter-spacing: 0.25em; /* Jarak renggang antar huruf kapital */
    font-size: 12px;
    font-weight: 600;
}
```

---

## 3. Menghubungkan Google Fonts (Gratis Ribuan Font Modern)

Komputer pengunjung hanya memiliki font standar bawaan seperti Arial atau Times New Roman. Untuk menggunakan font modern seperti **Inter**, **Roboto**, atau **Montserrat**:

1. Buka [fonts.google.com](https://fonts.google.com).
2. Cari dan pilih font favorit (misalnya **Montserrat**).
3. Salin kode `<link>` dan tempelkan di bagian `<head>` file HTML Anda:

```html
<head>
    <!-- 1. Preconnect ke Server Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- 2. Import Font Montserrat dengan variasi weight 400, 600, dan 700 -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
</head>
```

4. Panggil font tersebut di dalam file CSS Anda:

```css
h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}
```

---

## 4. Hirarki Font Fallback (Font Stack)

Selalu sediakan nama font cadangan (*fallback font*) di paling belakang deklarasi `font-family` untuk berjaga-jaga jika font utama gagal terunduh akibat koneksi internet pengunjung terputus:

```css
body {
    /* 1. Utamakan Inter -> 2. Cadangan System UI -> 3. Standard Sans-Serif */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

---

## 💡 Rangkuman & Checklist Tipografi

1. Selalu tetapkan **`line-height: 1.6`** pada elemen paragraf artikel `<p>`.
2. Batasi penggunaan jumlah variasi font di satu situs web (maksimal 2 keluarga font berbeda) agar proses *loading* situs web tetap kilat.
3. Gunakan `letter-spacing: 0.015em` s/d `0.02em` pada judul artikel untuk meningkatkan estetika UX.
