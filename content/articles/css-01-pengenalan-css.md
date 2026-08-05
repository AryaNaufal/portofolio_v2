---
id: "css-01-pengenalan-css"
title: "CSS 01: Pengenalan CSS & 3 Cara Memasang CSS di HTML"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Panduan paling awal belajar CSS3 untuk pemula: Memahami cara kerja CSS dengan analogi cat & dekorasi rumah, serta 3 cara memasangnya pada halaman HTML."
---

Setelah menguasai kerangka HTML di modul sebelumnya, kini saatnya kita membuat tampilan website menjadi jauh lebih cantik, berwarna, dan profesional menggunakan **CSS**.

## 1. Apa itu CSS? (Analogi Cat & Dekorasi Rumah)

**CSS** adalah singkatan dari *Cascading Style Sheets*. 

Jika **HTML** adalah **tulang dan tembok semen** sebuah rumah, maka **CSS** adalah **cat dinding, wallpaper, karpet, lampu hias, dan tata letak interior** rumah tersebut.

Tanpa CSS, sebuah halaman web hanya akan berupa teks polos hitam putih dari atas ke bawah. Dengan CSS, Anda bisa mengubah warna tulisan, menambah bayangan, mengatur ukuran font, hingga menata tombol agar indah dipandang.

## 2. Tiga Cara Memasang CSS pada Dokumen HTML

Ada 3 metode untuk menghubungkan CSS dengan file HTML Anda:

### A. Inline CSS (Menulis langsung di tag HTML)
Ditulis langsung di dalam tag HTML menggunakan atribut `style=""`. Cocok untuk pengujian cepat 1 elemen.

```html
<h1 style="color: red; text-align: center;">Judul Ini Berwarna Merah</h1>
```

### B. Internal CSS (Menulis di dalam tag `<style>`)
Ditulis di dalam elemen `<head>` pada file HTML yang sama.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        h1 {
            color: #14b8a6;
            font-size: 28px;
        }
    </style>
</head>
<body>
    <h1>Judul dengan Warna Teal</h1>
</body>
</html>
```

### C. External CSS (Metode Terbaik & Paling Rapi)
Menulis kode CSS di file terpisah (misalnya `style.css`), lalu dihubungkan menggunakan tag `<link>` di dalam `<head>`.

File `index.html`:
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

File `style.css`:
```css
/* File CSS terpisah */
body {
    background-color: #0b0f14;
    color: #ffffff;
}

h1 {
    color: #f59e0b;
}
```

---

### Kesimpulan Ringkas
Metode **External CSS** adalah standar industri yang wajib digunakan dalam pembuatan website profesional agar kode HTML dan gaya visual tersimpan secara rapi dan terpisah.
