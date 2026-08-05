---
id: "html-06-form-dan-input"
title: "HTML 06: Menguasai Form, Tipe Input, Dropdown & Validasi"
category: "Web Development"
date: "05 Agu 2026"
readTime: "9 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Panduan praktis membuat formulir pendaftaran interaktif: Menguasai tag form, berbagai tipe input (text, email, password, radio, checkbox, date), select dropdown, textarea, dan atribut validasi."
---

Formulir adalah satu-satunya jembatan interaksi dua arah di dalam HTML yang memungkinkan pengunjung web mengirimkan data ke sistem Anda - mulai dari pendaftaran akun baru, login, pencarian barang, hingga transaksi pembayaran online.

Di modul ini, kita akan membongkar seluruh elemen formulir HTML5 secara mendalam.

---

## 1. Analogi Formulir Fisik Kertas

Bayangkan formulir pendaftaran di dunia nyata:

- Tag `<form>` bertindak seperti **Stopmap Kertas** yang menampung lembaran pertanyaan.
- Atribut `action` adalah **Alamat Petugas** tempat lembaran tersebut dikirimkan.
- Atribut `method` (`GET` atau `POST`) adalah **Metode Pengiriman** (apakah dikirim via Kartu Pos terbuka atau Surat Tertutup).

```html
<form action="/proses-daftar" method="POST">
    <!-- Komponen Isian Formulir Di Sini -->
</form>
```

---

## 2. Pasangan Wajib: Tag `<label>` dan `<input>`

Setiap kolom isian wajib diberi label penjelas. Gunakan atribut `for` pada `<label>` yang nilainya sama dengan atribut `id` pada `<input>` agar ketika teks label diklik, kursor koding otomatis melompat masuk ke kolom isian tersebut!

```html
<div className="form-group">
    <label for="nama-lengkap">Nama Lengkap:</label>
    <input type="text" id="nama-lengkap" name="nama" placeholder="Masukkan nama Anda">
</div>
```

---

## 3. Jenis-Jenis Tipe Input (`type="..."`) Paling Sering Digunakan

Atribut `type` menentukan jenis data apa yang dapat diketik oleh pengguna:

### A. Isian Teks & Keamanan Password
- `type="text"`: Isian teks singkat (seperti nama atau kota).
- `type="email"`: Kolom email yang otomatis mengecek format alamat `@`.
- `type="password"`: Karakter yang diketik akan disamarkan menjadi titik-titik hitam demi keamanan.

```html
<!-- Kolom Password -->
<label for="kata-sandi">Kata Sandi:</label>
<input type="password" id="kata-sandi" name="password" required minlength="8">
```

### B. Pilihan Tunggal vs Pilihan Ganda
- `type="radio"`: **Pilihan Tunggal**. Pengguna hanya bisa memilih 1 dari beberapa opsi (misal: Jenis Kelamin). Semua opsi radio wajib memiliki nama `name` yang sama!
- `type="checkbox"`: **Pilihan Ganda**. Pengguna boleh memilih lebih dari satu centang (misal: Hobi atau Bahasa yang Dikuasai).

```html
<!-- Radio Button Pilihan Tunggal -->
<p>Jenis Kelamin:</p>
<input type="radio" id="pria" name="gender" value="L">
<label for="pria">Laki-Laki</label>

<input type="radio" id="wanita" name="gender" value="P">
<label for="wanita">Perempuan</label>

<!-- Checkbox Pilihan Ganda -->
<p>Hobi Anda:</p>
<input type="checkbox" id="koding" name="hobi" value="coding">
<label for="koding">Koding</label>

<input type="checkbox" id="desain" name="hobi" value="design">
<label for="desain">Desain</label>
```

### C. Pemilih Tanggal & Warna Modern HTML5
- `type="date"`: Membuka kalender interaktif untuk memilih tanggal lahir.
- `type="color"`: Membuka pemilih warna *color-picker* visual.
- `type="number"`: Kolom khusus angka dengan tombol naik-turun (`min` & `max`).

```html
<label for="tgl-lahir">Tanggal Lahir:</label>
<input type="date" id="tgl-lahir" name="birthdate">

<label for="jumlah">Jumlah Tiket (Max 5):</label>
<input type="number" id="jumlah" name="qty" min="1" max="5" value="1">
```

---

## 4. Menu Dropdown (`<select>`) dan Isian Panjang (`<textarea>`)

### A. Menu Dropdown Pilihan (`<select>`)
Jika Anda memiliki daftar pilihan yang sangat banyak (seperti daftar Provinsi), gunakan `<select>` agar tidak memakan tempat di layar:

```html
<label for="kota">Kota Tempat Tinggal:</label>
<select id="kota" name="city">
    <option value="">-- Pilih Kota --</option>
    <option value="jakarta">Jakarta</option>
    <option value="surabaya">Surabaya</option>
    <option value="bandung">Bandung</option>
</select>
```

### B. Kolom Pesan Panjang (`<textarea>`)
Untuk isian cerita, alamat rumah lengkap, atau catatan pesan yang membutuhkan beberapa baris tulisan:

```html
<label for="pesan">Pesan Anda:</label>
<textarea id="pesan" name="message" rows="4" cols="50" placeholder="Tuliskan pesan Anda..."></textarea>
```

---

## 5. Fitur Validasi Bawaan HTML5

Anda dapat melakukan validasi isian tanpa perlu menulis JavaScript! Gunakan atribut validasi HTML5 berikut:

- `required`: Wajib diisi (formulir tidak bisa dikirim jika kolom ini kosong).
- `placeholder="..."`: Teks petunjuk abu-abu sebelum pengguna mengetik.
- `minlength="8"` / `maxlength="20"`: Membatasi minimal & maksimal jumlah karakter.
- `readonly` / `disabled`: Membekukan kolom agar tidak bisa diketik.

```html
<!-- Contoh Tombol Kirim & Reset -->
<button type="submit">Kirim Pendaftaran</button>
<button type="reset">Bersihkan Formulir</button>
```

---

## 💡 Rangkuman & Praktik Terbaik

1. **Selalu gunakan tag `<label>`** yang terhubung dengan `id` pada kolom input untuk memudahkan pengguna saat mengklik kolom.
2. Gunakan `type="email"`, `type="number"`, dan `type="password"` sesuai peruntukannya agar keyboard smartphone otomatis menyesuaikan tombol input pengguna!
