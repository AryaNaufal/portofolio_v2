---
id: "html-02-format-teks-headings"
title: "HTML 02: Cara Menulis Judul, Paragraf & Teks Tebal"
category: "Web Development"
date: "05 Agu 2026"
readTime: "4 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Panduan praktis menulis judul artikel yang rapi dengan Heading (H1-H6), membuat paragraf baru, serta menebalkan atau memiringkan kata dengan bahasa yang sangat mudah dimengerti."
---

Setelah memahami kerangka dasar website di modul pertama, sekarang saatnya kita belajar cara menyusun teks bacaan agar terlihat rapi dan nyaman dibaca oleh pengunjung.

## 1. Menulis Judul Tulisan (Tag Heading H1 sampai H6)

Bayangkan saat Anda sedang membaca **Koran** atau **Buku Pelajaran**:

- **Judul Utama Koran** ukuran tulisan yang paling besar disebut `<h1>`.
- **Judul Bab / Topik** ukuran sedang disebut `<h2>`.
- **Anak Sub-Bab** ukuran lebih kecil disebut `<h3>`, dan seterusnya hingga `<h6>`.

Berikut contoh penulisannya di HTML:

```html
<h1>Judul Utama Artikel Anda (Ukuran Paling Besar)</h1>
<h2>Sub-Judul Bagian Utama (H2)</h2>
<h3>Sub-Bagian Detail Topik (H3)</h3>
<h4>Judul Kecil (H4)</h4>
<h5>Judul Lebih Kecil (H5)</h5>
<h6>Judul Terkecil (H6)</h6>
```

> 💡 **Tips Pemula:** Di setiap halaman web, usahakan hanya ada **1 buah `<h1>`** saja (yaitu judul utama artikel), agar mesin pencari Google tidak bingung menentukan topik utama artikel Anda.

## 2. Menulis Paragraf dan Pindah Baris

Untuk membuat paragraf tulisan biasa, kita menggunakan tag `<p>` (singkatan dari *Paragraph*). 

Jika Anda ingin berpindah baris di dalam paragraf yang sama (seperti menekan tombol `Shift + Enter` di Word), gunakan tag `<br>` (*Break*):

```html
<p>Ini adalah paragraf pertama yang berisi kalimat penjelasan.</p>

<p>Ini adalah paragraf kedua.<br>Baris ini berada tepat di bawahnya tanpa membuat jarak paragraf baru.</p>
```

## 3. Memberikan Efek Pada Kata (Tebal, Miring & Stabilo)

Agar tulisan Anda lebih menarik dan kata kunci penting mudah ditemukan mata pembaca, kita bisa memberi format khusus:

```html
<p>
  Teks ini mengandung kata <strong>sangat penting (Cetak Tebal)</strong>.<br>
  Teks ini dicetak <em>miring (Italic)</em> untuk memberi penekanan.<br>
  Teks ini diberi <mark>warna stabilo kuning (Highlight)</mark>.<br>
  Teks ini <del>dicoret (Strikethrough)</del> karena sudah tidak berlaku.
</p>
```

---

### Kesimpulan Ringkas
Membuat teks yang rapi di HTML sangatlah mudah! Cukup gunakan `<h1>-<h6>` untuk judul, `<p>` untuk paragraf, dan `<strong>` untuk menebalkan kata penting.
