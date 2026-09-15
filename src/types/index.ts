// NOTE:
// Type Definitions — Kontrak data untuk seluruh website.
// Tool: Alat teknologi pasca panen kopi (produk utama di katalog).
// Article: Artikel studi kajian Maganghub.
// TeamMember: Anggota tim Maganghub.
// ContactLocation: Lokasi kontak.
// Problem: Masalah pasca panen kopi yang diidentifikasi.

export type Tool = {
  slug: string;
  name: string;
  category: string;
  image: string;
  problem: string;
  description: string;
  priceRange: string;
  buyLink?: string;
  specs: { label: string; value: string }[];
};

export type Article = {
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string[];
};

export type ContactLocation = {
  title: string;
  address: string;
  email: string;
};

export type Problem = {
  icon: string;
  title: string;
  description: string;
  impact: string;
};
