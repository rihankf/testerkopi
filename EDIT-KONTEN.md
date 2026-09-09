# Cara Mengubah Konten

Jangan mengedit file di folder `out`. Folder tersebut dibuat ulang setiap menjalankan build.

## Mengubah produk

Buka `src/data/products.ts`. Setiap produk memiliki data utama:

```ts
{
  slug: "nama-di-url",
  name: "Nama Produk",
  category: "Pengeringan",        // Pengeringan | Pengukuran | Pemilahan
  image: "/images/nama-gambar.jpg",
  problem: "Masalah yang diselesaikan",
  description: "Deskripsi solusi",
  priceRange: "Rp 1.000.000",
  features: ["Fitur 1", "Fitur 2"],
  specs: [{ label: "Kapasitas", value: "100 kg" }],
  justification: "Alasan rekomendasi",
  recommendation: "Saran penggunaan",
  researcher: "Nama Peneliti",
  comparisons: [{ name: "...", brand: "...", price: "...", priceValue: 0, origin: "...", notes: "..." }]
}
```

Gambar diletakkan di `public/images/` dan direferensikan dengan path `/images/namafile.jpg`.

## Mengubah artikel

Buka `src/data/articles.ts`. Isi artikel ditulis sebagai daftar paragraf pada properti `content`.

## Mengubah tim dan alamat

Buka `src/data/company.ts`.

## Menerapkan perubahan

Jalankan:

```bash
npm run build
```

Hasil terbaru akan dibuat otomatis di folder `out`.
