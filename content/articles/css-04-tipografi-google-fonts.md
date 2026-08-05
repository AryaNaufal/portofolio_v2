---
id: "css-04-tipografi-google-fonts"
title: "CSS 04: Mempercantik Teks dengan Tipografi & Google Fonts"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan mengolah tipografi website: Memilih font family, jarak baris (line-height), kerning huruf (letter-spacing), serta menyambungkan Google Fonts secara gratis."
---

Tipografi yang baik membuat artikel website terasa nyaman dibaca dan tidak membuat mata lelah. Di modul ini, kita akan mempelajari cara mengatur tulisan agar profesional.

## 1. Atribut Utama Tipografi CSS

Berikut adalah properti wajib yang paling sering digunakan untuk merawat teks:

- `font-family`: Jenis huruf/font yang digunakan (misal: Inter, Roboto, Arial).
- `font-size`: Ukuran besar/kecilnya huruf (misal: `16px`, `1.2rem`).
- `font-weight`: Ketebalan huruf, mulai dari `400` (normal) hingga `700` (bold).
- `line-height`: Jarak spasi antar baris atas dan bawah agar teks paragraf tidak terlalu rapat.
- `letter-spacing`: Jarak kerning antar huruf (misal: `0.05em`).
- `text-align`: Meratakan teks (`left`, `center`, `right`, `justify`).

```css
p {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;        /* Jarak baris ideal untuk artikel */
    letter-spacing: 0.01em;  /* Kerning huruf yang nyaman */
    color: #334155;
}
```

## 2. Cara Memasang Google Fonts (Gratis Ribuan Font)

Secara bawaan, komputer pengunjung hanya memiliki font standar seperti Arial atau Times New Roman. Untuk menggunakan font modern dari **Google Fonts**:

1. Buka [fonts.google.com](https://fonts.google.com).
2. Pilih font favorit (contoh: **Montserrat**).
3. Salin kode `<link>` dan tempelkan di dalam tag `<head>` file HTML Anda:

```html
<head>
    <!-- Import Google Fonts Montserrat -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
</head>
```

4. Panggil di file CSS Anda:

```css
h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}
```

---

### Kesimpulan Ringkas
Penggunaan `line-height: 1.5` hingga `1.6` dan `letter-spacing` yang tepat adalah rahasia utama membuat paragraf bacaan terasa lega dan enak dibaca.
