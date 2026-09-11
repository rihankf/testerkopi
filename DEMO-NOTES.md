# 📋 CATATAN DEMO — Website Teknologi Tepat Guna Komoditas Kopi

> **Dokumen ini** berisi panduan lengkap untuk menjelaskan website saat demo/presentasi.
> Mencakup: arsitektur, teknologi, alur kerja, penjelasan per halaman, dan cara deploy.

---

## 1. RINGKASAN PROYEK

**Nama Proyek:** Teknologi Tepat Guna untuk Komoditas Unggulan Indonesia (fokus Kopi)  
**Tim:** Maganghub (Hana, Putri, Aul, Rihan)  
**Mitra:** BPVP Bandung Barat (Kementerian Ketenagakerjaan)

**Tujuan Website:**

- Mengidentifikasi masalah pasca panen kopi yang dihadapi petani
- Menyajikan katalog teknologi tepat guna yang sudah disurvei
- Memberikan rekomendasi alat dengan perbandingan harga dari pasaran
- Menjadi dokumen digital hasil kajian yang bisa diakses stakeholder

---

## 2. TEKNOLOGI YANG DIGUNAKAN

| Teknologi         | Versi  | Fungsi                                                                  |
| ----------------- | ------ | ----------------------------------------------------------------------- |
| **Next.js**       | 16.3.1 | Framework React untuk web — mendukung routing, SSG, dan optimasi gambar |
| **React**         | 19.2.4 | Library UI untuk membangun antarmuka komponen                           |
| **TypeScript**    | 5.8.3  | Superset JavaScript dengan type safety                                  |
| **CSS (Vanilla)** | -      | Styling tanpa framework, menggunakan CSS Variables (design tokens)      |

**Cara Kerja (Static Site Generation / SSG):**

1. Saat `npm run build`, Next.js **pre-render** semua halaman menjadi file HTML statis
2. Output disimpan di folder `out/`
3. Website bisa di-hosting di **server statis** manapun (tidak butuh Node.js di server)
4. Keuntungan: **cepat, aman, murah** — cocok untuk website informasi

---

## 3. ARSITEKTUR & STRUKTUR FOLDER

```
alat-kopi/
├── public/
│   ├── images/                ← Gambar (produk, gallery, logo)
│   │   ├── Pengering1-5.jpeg  ← Foto produk pengeringan
│   │   ├── Pengukur1-7.*      ← Foto produk pengukuran
│   │   ├── logo.png           ← Logo website
│   │   ├── logo-kemnaker.png  ← Logo mitra
│   │   ├── header-bg.jpg      ← Background hero
│   │   ├── bg-mitra.jpg       ← Background halaman mitra
│   │   ├── sejarah-kopi.jpg   ← Gambar halaman tentang
│   │   └── gallery-*.jpg      ← Gambar artikel & dekorasi
│   └── katalog-produk.pdf     ← PDF katalog yang bisa diunduh
├── src/
│   ├── app/                   ← HALAMAN (Next.js App Router)
│   │   ├── page.tsx               → Homepage
│   │   ├── layout.tsx             → Template utama (font, metadata)
│   │   ├── globals.css            → Seluruh styling website
│   │   ├── tentang/page.tsx       → Halaman Tentang
│   │   ├── mitra/page.tsx         → Halaman Mitra (BPVP)
│   │   ├── teknologi/page.tsx     → Katalog Alat (search + filter kategori)
│   │   ├── kontak/page.tsx        → Halaman Kontak
│   │   ├── product/[slug]/        → Detail per alat (dynamic route)
│   │   ├── [slug]/                → Detail per artikel (dynamic route)
│   │   └── not-found.tsx          → Halaman 404
│   ├── components/            ← KOMPONEN REUSABLE
│   │   ├── layout/
│   │   │   ├── Header.tsx         → Navigasi (responsive, scroll effect)
│   │   │   └── Footer.tsx         → Footer + Google Maps
│   │   └── ui/
│   │       ├── SectionHeading.tsx      → Heading section (eyebrow + title)
│   │       ├── FloatingContact.tsx     → Tombol WhatsApp
│   │       └── PriceComparisonTable.tsx → Tabel perbandingan harga
│   ├── data/                  ← DATA (sumber konten website)
│   │   ├── products.ts            → Alat teknologi pengeringan & pengukuran
│   │   ├── articles.ts            → 3 artikel kajian
│   │   ├── problems.ts            → 3 masalah pasca panen
│   │   ├── company.ts             → Data tim & lokasi kontak
│   │   └── content.ts             → Barrel export (penghubung data)
│   └── types/                 ← TYPE DEFINITIONS
│       └── index.ts               → Kontrak data (Tool, Article, Problem, dll)
├── next.config.ts             ← Konfigurasi Next.js (output: "export" = SSG)
└── package.json               ← Dependencies & scripts
```

### Pola Arsitektur (Penjelasan untuk Demo):

> "Website ini menggunakan pola **pemisahan data dan tampilan**:
>
> - **Data** disimpan di file TypeScript (`src/data/`) — mudah diedit tanpa sentuh kode UI
> - **Tampilan** dibangun dari komponen React (`src/app/` dan `src/components/`)
> - **Styling** terpusat di satu file CSS dengan design tokens (variabel warna, spacing, dll)
> - Saat build, Next.js menggabungkan data + tampilan → menghasilkan HTML statis"

---

## 4. KATALOG PRODUK AKTIF

### Kategori Pengeringan (5 produk)

| Produk                               | Harga         |
| ------------------------------------ | ------------- |
| Pengering Pertanian Model Ruangan    | Rp 19.560.000 |
| Mesin Oven Gas 10 Rak 1 Pintu        | Rp 16.160.000 |
| Rotary Dryer 100 kg (Raja Pengering) | Rp 35.820.000 |
| Rotary Dryer 100 kg (Hanindo)        | Rp 20.727.400 |
| Box Dryer AGR-BOXIN4000              | Rp 54.990.000 |

### Kategori Pengukuran (7 produk)

| Produk                                       | Harga        |
| -------------------------------------------- | ------------ |
| Pengukur Kadar Air Model Garpu/Tusuk         | Rp 150.000   |
| Pengukur Kadar Air Model Corong Tabung       | Rp 1.500.000 |
| Pengukur Kadar Air Genggam Profesional       | Rp 6.000.000 |
| Meja Grading Visual dengan Pencahayaan       | Rp 2.000.000 |
| Timbangan Digital Presisi Analitik           | Rp 300.000   |
| Set Ayakan Kopi Standar (SCA Screen Grading) | Rp 1.500.000 |
| Termohigrometer Digital Ruang Penyimpanan    | Rp 350.000   |

### Kategori Pemilahan

> ⏳ **Dalam proses** — data sedang dikerjakan oleh tim.

---

## 5. PENJELASAN PER HALAMAN (untuk Demo)

### 5.1 Homepage (`/`)

**Yang ditampilkan:**

1. **Hero Section** — Banner fullscreen dengan background image perkebunan kopi + overlay gradient gelap. Berisi judul proyek, deskripsi singkat, dan 2 tombol CTA.
2. **Identifikasi Masalah** — 3 kartu masalah utama pasca panen kopi (cuaca, kadar air, sistem kering). Setiap kartu punya ikon, deskripsi, dan dampak.
3. **Solusi Teknologi** — Preview 5 alat pertama yang direkomendasikan dalam bentuk card grid. Klik untuk lihat detail.

---

### 5.2 Halaman Tentang (`/tentang`)

**Yang ditampilkan:**

1. **Rangkuman Masalah** — 3 tahap (pengeringan → pengukuran → pemilahan) dalam layout timeline visual
2. **Latar Belakang** — Narasi: Indonesia produsen kopi ke-4 dunia, gap harga petani vs potensi
3. **Tujuan Proyek** — 4 kartu: Identifikasi, Survei, Rekomendasi, Dokumen
4. **CTA** — Link ke halaman katalog teknologi

---

### 5.3 Halaman Teknologi (`/teknologi`)

**Yang ditampilkan:**

- Tombol unduh katalog PDF
- Katalog lengkap semua alat dalam grid card
- **Search bar** untuk filter berdasarkan nama atau kategori
- **Filter kategori** (tab): Semua, Pengeringan, Pengukuran, Pemilahan

---

### 5.4 Detail Produk (`/product/[slug]`)

**Yang ditampilkan:**

1. **Hero** — Gambar full-width + overlay + nama alat + range harga
2. **Problem Statement** — Masalah yang diselesaikan oleh alat ini
3. **Deskripsi + Spesifikasi** — Penjelasan alat + grid spesifikasi
4. **Alat Lainnya** — Link ke produk lain

---

### 5.5 Halaman Mitra (`/mitra`)

**Yang ditampilkan:**

- Card glassmorphism dengan logo Kemnaker
- Info BPVP Bandung Barat
- Link ke website resmi BPVP

---

### 5.6 Halaman Kontak (`/kontak`)

**Yang ditampilkan:**

- Info kontak dengan 2 lokasi (Kampus Utama & Lokasi Riset)
- Data dari `company.ts`

---

### 5.7 Halaman Artikel (`/[slug]`)

**Yang ditampilkan:**

- Artikel kajian lengkap dengan cover image besar
- Social sharing sidebar
- Navigasi prev/next antar artikel
- Related articles grid

---

## 6. KONSEP TEKNIS PENTING (untuk Penjelasan)

### 6.1 Static Site Generation (SSG)

```
npm run build  →  Next.js render semua halaman  →  folder out/  →  upload ke server
```

- **Tidak butuh server Node.js** — cukup web server statis (Apache, Nginx, bahkan GitHub Pages)
- Semua halaman sudah jadi HTML saat deploy, sehingga **loading sangat cepat**

### 6.2 Dynamic Routes (`[slug]`)

- `src/app/product/[slug]/page.tsx` → slug = nama URL produk
- `generateStaticParams()` memberitahu Next.js slug apa saja yang perlu di-render
- Contoh: slug `"pengering-ruangan-raja"` → URL `/product/pengering-ruangan-raja/`

### 6.3 Barrel Export Pattern

```
src/data/content.ts  ← Satu file yang re-export semua data
  ├── products.ts  (tools)
  ├── articles.ts  (articles)
  ├── problems.ts  (problems)
  └── company.ts   (team, locations)
```

Halaman cukup import dari `@/data/content` tanpa perlu tahu file sumber mana.

### 6.4 Component Architecture

```
Layout Components (Header, Footer)
  → Dipakai di SEMUA halaman
  → Muncul di setiap page.tsx

UI Components (SectionHeading, FloatingContact, PriceComparisonTable)
  → Dipakai selektif sesuai kebutuhan halaman
```

### 6.5 CSS Design Tokens

```css
:root {
  --ink: #4f200d; /* Warna teks utama (coklat kopi) */
  --sand: #ff9a00; /* Warna aksen (oranye) */
  --cream: #f6f1e9; /* Background cream */
  --deep: #4f200d; /* Warna gelap (header, footer) */
}
```

Palet warna terinspirasi dari **kopi** — coklat tua, krem, dan oranye hangat.

---

## 7. CARA MENJALANKAN

```bash
# Install dependencies
npm install

# Jalankan development server (localhost:3000)
npm run dev

# Build untuk production (output ke folder out/)
npm run build
```

---

## 8. CARA MENGUBAH KONTEN

| Yang ingin diubah     | File yang diedit                                        |
| --------------------- | ------------------------------------------------------- |
| Produk/alat teknologi | `src/data/products.ts`                                  |
| Artikel kajian        | `src/data/articles.ts`                                  |
| Masalah pasca panen   | `src/data/problems.ts`                                  |
| Tim & kontak          | `src/data/company.ts`                                   |
| Gambar                | Letakkan di `public/images/`, referensikan path di data |
| Styling/warna         | `src/app/globals.css` (ubah CSS variables di `:root`)   |

Setelah mengubah konten, jalankan `npm run build` untuk menghasilkan output terbaru.
