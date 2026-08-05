---
id: "html-06-form-dan-input"
title: "HTML 06: Form, Input Types, Select & Validasi User"
category: "Web Development"
date: "05 Agu 2026"
readTime: "6 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Panduan merancang formulir interaktif menggunakan tag <form>, tipe-tipe <input> (email, password, radio, checkbox), elemen <select>, serta atribut validasi."
---

Formulir (*Form*) adalah sarana utama bagi pengunjung situs untuk berinteraksi, mengirimkan pesan, mendaftar akun, atau melakukan pembayaran.

## 1. Tag Form Utama

Tag `<form>` membungkus seluruh elemen input dan menentukan ke mana data akan dikirimkan:

```html
<form action="/api/submit" method="POST">
  <label for="nama">Nama Lengkap:</label>
  <input type="text" id="nama" name="fullname" required placeholder="Masukkan nama Anda">
  
  <button type="submit">Kirim Data</button>
</form>
```

## 2. Jenis-Jenis Tipe Input (Input Types)

HTML5 menyediakan berbagai tipe input yang menyesuaikan tampilan keyboard di perangkat mobile:

```html
<!-- Input Teks & Email -->
<input type="text" placeholder="Username">
<input type="email" placeholder="email@contoh.com" required>

<!-- Input Kata Sandi & Angka -->
<input type="password" placeholder="Password">
<input type="number" min="1" max="100" value="1">

<!-- Pilihan Radio & Checkbox -->
<input type="radio" id="pria" name="gender" value="pria">
<label for="pria">Pria</label>

<input type="checkbox" id="setuju" name="syarat" required>
<label for="setuju">Saya menyetujui syarat & ketentuan</label>

<!-- Pemilih Tanggal & Warna -->
<input type="date" name="tanggal_lahir">
<input type="color" name="warna_favorit">
```

## 3. Dropdown (Select) & Textarea Pesan

Untuk pilihan daftar panjang atau teks pesan berbaris-baris:

```html
<!-- Dropdown Pilihan -->
<label for="kota">Pilih Kota:</label>
<select id="kota" name="city">
  <option value="jakarta">Jakarta</option>
  <option value="bandung">Bandung</option>
  <option value="surabaya">Surabaya</option>
</select>

<!-- Teks Pesan Panjang -->
<label for="pesan">Pesan Anda:</label>
<textarea id="pesan" name="message" rows="4" placeholder="Tuliskan pesan Anda di sini..."></textarea>
```

---

### Kesimpulan
Memahami pembuatan form yang rapi dan aman akan memudahkan pengembang saat menghubungkan halaman depan dengan sistem backend database.
