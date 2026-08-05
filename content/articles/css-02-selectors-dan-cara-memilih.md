---
id: "css-02-selectors-dan-cara-memilih"
title: "CSS 02: Memahami CSS Selectors (Cara Memilih Elemen)"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_css.png"
featured: false
excerpt: "Pelajari cara memilih elemen HTML spesifik menggunakan Element Selector, Class Selector (.kelas), ID Selector (#id), serta Universal Selector dengan analogi nama siswa di kelas."
---

Sebelum Anda bisa mewarnai atau mengatur ukuran suatu teks, Anda harus memberitahu komputer **elemen mana yang ingin Anda ubah**. Di dalam CSS, aturan penunjukan ini disebut **Selector**.

## 1. Analogi Nama Siswa di Kelas

Bayangkan seorang guru di dalam kelas:

- **Element Selector**: *"Semua siswa yang pakai baju putih, berdiri!"* (Memilih semua elemen sejenis).
- **Class Selector (`.`)**: *"Siswa yang punya stiker kelompom 'Tim-Juara', maju ke depan!"* (Memilih sekelompok elemen tertentu).
- **ID Selector (`#`)**: *"Siswa dengan nomor induk siswa 101, maju!"* (Memilih hanya 1 elemen unik yang sangat spesifik).

## 2. Jenis-Jenis CSS Selector Utama

### A. Element / Tag Selector
Mengubah seluruh elemen berdasarkan nama tag HTML nya.

```css
/* Mengubah warna semua paragraf <p> di website */
p {
    color: #475569;
    font-size: 16px;
}
```

### B. Class Selector (Menggunakan Titik `.`)
Digunakan untuk memberi gaya pada elemen yang memiliki atribut `class="..."`. Satu nama class bisa dipakai oleh banyak elemen.

```html
<p class="teks-penting">Ini paragraf penting.</p>
<button class="teks-penting">Tombol Penting</button>
```

```css
/* Mengubah semua elemen ber-class teks-penting */
.teks-penting {
    color: #f59e0b;
    font-weight: bold;
}
```

### C. ID Selector (Menggunakan Pagar `#`)
Digunakan untuk 1 elemen yang sangat unik menggunakan atribut `id="..."`. Nama ID hanya boleh ada 1 per halaman.

```html
<h1 id="judul-halaman">Judul Utama Situs</h1>
```

```css
/* Mengubah hanya elemen ber-ID judul-halaman */
#judul-halaman {
    color: #14b8a6;
    font-size: 36px;
}
```

### D. Universal Selector (Bintang `*`)
Memilih **seluruh elemen tanpa terkecuali** di dalam halaman web. Sering digunakan untuk reset margin.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

---

### Kesimpulan Ringkas
Gunakan **Class Selector (`.`)** sebagai pilihan utama untuk menghias elemen website karena fleksibel dan bisa digunakan berulang kali.
