---
id: "html-05-list-dan-tabel"
title: "HTML 05: Membuat Daftar (List) & Tabel Data Terstruktur"
category: "Web Development"
date: "05 Agu 2026"
readTime: "8 min read"
author: "Arya Naufal"
authorRole: "Web Developer & Instructor"
authorAvatar: "/my_profile.jpg"
image: "/logo_html.png"
featured: false
excerpt: "Panduan lengkap menguasai Unordered List (ul), Ordered List (ol), Description List (dl), serta menyusun data tabel terstruktur menggunakan table, tr, th, dan td."
---

Menyajikan data informasi dalam bentuk poin-poin daftar (*list*) atau tabel berkolom sangat membantu pembaca dalam mencerna informasi dengan cepat.

Di modul ini, kita akan menguasai cara membuat **Daftar Berurutan**, **Daftar Tidak Berurutan**, serta **Tabel Data Terstruktur** di HTML5.

---

## 1. Daftar Tidak Berurutan (Unordered List - `<ul>`)

Daftar tidak berurutan digunakan ketika urutan poin-poin di dalamnya **tidak mempengaruhi makna informasi** (seperti daftar belanjaan atau fitur produk). Setiap poin dibungkus dengan tag `<li>` (*List Item*) dan secara otomatis diberi simbol titik peluru (*bullet*).

```html
<h3>Daftar Peralatan Belajar Koding:</h3>
<ul>
    <li>Laptop atau Komputer Desktop</li>
    <li>Koneksi Internet Stabil</li>
    <li>Text Editor (VS Code)</li>
    <li>Web Browser Modern (Chrome/Firefox)</li>
</ul>
```

---

## 2. Daftar Berurutan (Ordered List - `<ol>`)

Daftar berurutan digunakan ketika urutan langkah demi langkah **sangat penting dan tidak boleh tertukar** (seperti langkah resep masakan atau urutan tutorial). Secara otomatis, poin-poin akan diberi nomor `1, 2, 3, dst`.

```html
<h3>Langkah-Langkah Membuat File HTML:</h3>
<ol>
    <li>Buka aplikasi VS Code di komputer Anda.</li>
    <li>Buat file baru dan simpan dengan nama <code>index.html</code>.</li>
    <li>Tuliskan struktur dasar dokumen HTML5.</li>
    <li>Buka file tersebut di browser untuk melihat hasilnya.</li>
</ol>
```

### Atribut Tambahan pada `<ol>`:

- `type="A"`: Mengubah nomor angka menjadi huruf kapital (`A, B, C`).
- `type="i"`: Mengubah menjadi angka romawi kecil (`i, ii, iii`).
- `start="5"`: Memulai penomoran dari angka 5.

---

## 3. Daftar Deskripsi Istilah (Description List - `<dl>`)

Digunakan untuk menyusun kamus istilah, daftar glosarium, atau tanya-jawab (FAQ):

```html
<dl>
    <dt><strong>HTML</strong></dt>
    <dd>Bahasa penandaan untuk membuat struktur halaman web.</dd>

    <dt><strong>CSS</strong></dt>
    <dd>Bahasa pemformatan untuk menghias desain visual web.</dd>
</dl>
```

- `<dl>`: Pembungkus utama Description List.
- `<dt>` (Description Term): Istilah/Kata kunci yang dijelaskan.
- `<dd>` (Description Details): Penjelasan detail dari istilah tersebut.

---

## 4. Membuat Tabel Data Terstruktur (`<table>`)

Tabel digunakan untuk menampilkan data multikolom (seperti jadwal pelajaran, data transaksi keuangan, atau daftar harga produk).

```html
<table border="1" cellpadding="8" cellspacing="0">
    <!-- Kepala Tabel -->
    <thead>
        <tr>
            <th>No</th>
            <th>Nama Modul</th>
            <th>Tingkat Kesulitan</th>
            <th>Status</th>
        </tr>
    </thead>
    <!-- Badan Isi Tabel -->
    <tbody>
        <tr>
            <td>1</td>
            <td>HTML01: Pengenalan HTML</td>
            <td>Pemula</td>
            <td>Selesai</td>
        </tr>
        <tr>
            <td>2</td>
            <td>HTML02: Format Teks</td>
            <td>Pemula</td>
            <td>Selesai</td>
        </tr>
    </tbody>
</table>
```

### Penjelasan Tag Tabel:

- `<table>`: Pembungkus utama tabel.
- `<thead>`: Bagian baris judul utama kepala tabel.
- `<tbody>`: Bagian isi badan tabel.
- `<tr>` (Table Row): Membuat satu baris baru horizontal.
- `<th>` (Table Header): Sel judul kolom (secara otomatis dicetak tebal dan rata tengah).
- `<td>` (Table Data): Sel berisi data biasa.

---

## 5. Menggabungkan Baris & Kolom (`colspan` & `rowspan`)

Jika Anda ingin membuat satu sel tabel yang memakan beberapa kolom sekaligus atau beberapa baris sekaligus:

```html
<!-- Contoh Penggabungan 2 Kolom (Colspan) -->
<tr>
    <td colspan="2">Total Biaya Kursus</td>
    <td colspan="2"><strong>Rp 0 (Gratis)</strong></td>
</tr>
```

- `colspan="2"`: Menggabungkan 2 kolom secara **horizontal** menyamping.
- `rowspan="2"`: Menggabungkan 2 baris secara **vertikal** ke bawah.

---

## 💡 Rangkuman & Praktik Terbaik

1. Gunakan **`<ul>`** untuk daftar tanpa urutan angka, dan **`<ol>`** untuk urutan instruksi langkah demi langkah.
2. Selalu gunakan elemen semantik **`<thead>`** dan **`<tbody>`** di dalam tabel demi aksesibilitas dan pembersihan kode CSS yang rapi.
