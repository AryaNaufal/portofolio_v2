# Folder Gambar Artikel

Simpan semua file gambar artikel Anda (seperti `.jpg`, `.png`, `.webp`, `.svg`) di dalam folder ini (`public/articles/`).

## Cara Menggunakan Gambar di File Markdown (`.md`)

Pada bagian **frontmatter** (bagian paling atas file `.md` di `content/articles/`), tuliskan path gambarnya diawali dengan `/articles/ nama-file-anda`:

```markdown
---
id: "artikel-pertama-saya"
title: "Judul Artikel Pertama"
category: "Web Development"
date: "05 Agu 2026"
readTime: "5 min read"
author: "Arya Naufal"
authorRole: "Software Engineer"
authorAvatar: "/articles/avatar-saya.jpg"
image: "/articles/cover-artikel-1.jpg"
featured: true
excerpt: "Deskripsi singkat artikel Anda..."
---
```

### Keuntungan:
- Next.js secara otomatis melayani file yang berada di dalam folder `public/` sebagai file statis.
- Gambar dapat langsung diakses melalui URL lokal tanpa perlu konfigurasi domain luar.
