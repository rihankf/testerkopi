# KATALOG TEKNOLOGI KOPI

Rekomendasi teknologi alat pasca panen komoditas unggulan kopi Indonesia.

**Deskripsi Proyek:**
Merupakan platform rekomendasi solusi teknologi pasca panen kopi, khususnya pada tahap pengeringan, pengukuran, dan pemilahan. Proyek ini bekerja dengan menyajikan daftar alat yang dilengkapi dengan spesifikasi lengkap, rentang harga pasar serta link pembelian. Berdasarkan identifikasi masalah petani kopi, aplikasi ini merekomendasikan alat yang tepat guna untuk meningkatkan kualitas biji kopi.

**Fitur:**

- Pencarian dan pemfilteran katalog alat (pengeringan, pengukuran, pemilahan).
- Detail spesifikasi lengkap tiap alat beserta harga.
- Unduh katalog produk ke format PDF.
- Link pembelian.

**Menjalankan Aplikasi:**
Setting environment:

- Pastikan [Node.js](https://nodejs.org/) terinstal di sistem Anda.
- Kloning repositori ini menggunakan perintah: `git clone https://github.com/rihankf/alat-kopi.git`
- Instal semua dependensi yang dibutuhkan: `npm install`
- Jalankan aplikasi web: `npm run dev`

**Teknologi yang Digunakan:**

- Next.js (App Router)
- React
- TypeScript
- Vanilla CSS

**Arsitektur Proyek:**
Arsitektur website menggunakan pola pemisahan antara logika data dan antarmuka pengguna:

- Komponen antarmuka (UI) dipisahkan ke dalam folder `src/components/` dan routing halaman di `src/app/`.
- Data statis menggunakan TypeScript Arrays di `src/data/` (seperti `products.ts`, `problems.ts`).
- Pengelolaan status pencarian (_search filter_) menggunakan `useState` bawaan React.

**Komponen Proyek:**

- `products.ts` adalah modul yang menyimpan array objek dari 17 alat teknologi kopi.
- `page.tsx` di dalam direktori `src/app/` adalah modul halaman utama aplikasi web (Homepage).
- `Header.tsx` dan `Footer.tsx` mengatur navigasi antar halaman.
- `globals.css` adalah komponen utama untuk seluruh penataan gaya CSS dasar dan _Design Tokens_.
