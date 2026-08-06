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

Dalam situasi nyata, Anda mungkin perlu menggabungkan beberapa kolom (seperti baris total biaya) atau beberapa baris (seperti pengelompokan hari) pada tabel. HTML menyediakannya menggunakan atribut khusus pada tag `<td>` atau `<th>`:

- **`colspan`**: Menggabungkan beberapa kolom secara **horizontal** (ke samping).
- **`rowspan`**: Menggabungkan beberapa baris secara **vertikal** (ke bawah).

Mari kita lihat contoh tabel jadwal pelajaran di bawah ini. Anda bisa mengaktifkan mode **Preview** untuk melihat hasilnya secara langsung:

```html
<!-- Tabel Jadwal Belajar Menggunakan Colspan & Rowspan -->
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; font-family: sans-serif; border-color: #cbd5e1;">
    <thead>
        <tr style="background-color: #f1f5f9;">
            <th>Hari</th>
            <th>Waktu</th>
            <th>Materi Belajar</th>
            <th>Ruangan</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <!-- rowspan="2" menggabungkan baris Senin secara vertikal ke bawah -->
            <td rowspan="2" align="center" style="font-weight: bold; background-color: #f8fafc;">Senin</td>
            <td>08:00 - 10:00</td>
            <td>HTML Dasar</td>
            <td>Lab 1</td>
        </tr>
        <tr>
            <!-- Karena kolom 'Hari' di atas sudah memakan 2 baris (rowspan=2),
                 baris ini langsung diisi dari kolom 'Waktu' -->
            <td>10:00 - 12:00</td>
            <td>HTML Semantik</td>
            <td>Lab 1</td>
        </tr>
        <tr>
            <td align="center" style="font-weight: bold; background-color: #f8fafc;">Selasa</td>
            <td>08:00 - 11:00</td>
            <td>CSS Box Model</td>
            <td>Lab 2</td>
        </tr>
        <tr style="background-color: #f0fdfa;">
            <!-- colspan="4" menggabungkan 4 kolom menjadi 1 sel horizontal raksasa -->
            <td colspan="4" align="center" style="font-weight: bold; color: #0d9488;">
                ☕ JAM ISTIRAHAT & DISKUSI KELOMPOK
            </td>
        </tr>
        <tr>
            <td align="center" style="font-weight: bold; background-color: #f8fafc;">Rabu</td>
            <td>09:00 - 12:00</td>
            <td>Flexbox & Grid</td>
            <td>Lab 1</td>
        </tr>
    </tbody>
</table>
```

### Bedah Cara Kerjanya:
* **`rowspan="2"` pada sel "Senin":** Sel ini memakan ruang 2 baris ke bawah. Perhatikan pada baris berikutnya (`<tr>` kedua), kita **tidak perlu lagi** menuliskan kolom `<td>Senin</td>` karena kolom pertama sudah terisi otomatis oleh limpahan baris pertama.
* **`colspan="4"` pada sel "JAM ISTIRAHAT":** Sel ini menggabungkan seluruh 4 kolom (`Hari`, `Waktu`, `Materi Belajar`, dan `Ruangan`) secara mendatar menjadi 1 sel panjang. Oleh sebab itu, di baris tersebut kita hanya menuliskan **satu** tag `<td>` saja.

---

## 💡 Rangkuman & Praktik Terbaik

1. Gunakan **`<ul>`** untuk daftar tanpa urutan angka, dan **`<ol>`** untuk urutan instruksi langkah demi langkah.
2. Selalu gunakan elemen semantik **`<thead>`** dan **`<tbody>`** di dalam tabel demi aksesibilitas dan pembersihan kode CSS yang rapi.
