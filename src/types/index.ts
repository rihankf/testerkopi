// ══════════════════════════════════════════════════════════
// TYPE DEFINITIONS — Kontrak data untuk seluruh website
// Setiap tipe merepresentasikan satu entitas data.
// ══════════════════════════════════════════════════════════

/** Perbandingan harga alat dari berbagai brand/sumber */
export type PriceComparison = {
  name: string;
  brand: string;
  price: string;
  priceValue: number;
  origin: string;
  notes: string;
};

/** Alat teknologi pasca panen kopi (produk utama di katalog) */
export type Tool = {
  slug: string;
  name: string;
  category: string;
  image: string;
  problem: string;
  description: string;
  priceRange: string;
  features: string[];
  specs: { label: string; value: string }[];
  justification: string;
  recommendation: string;
  comparisons: PriceComparison[];
  researcher: string;
};

/** Artikel studi kajian Maganghub */
export type Article = {
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string[];
};

/** Anggota tim Maganghub */
export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  image: string;
};

/** Lokasi kontak */
export type ContactLocation = {
  title: string;
  address: string;
  email: string;
};

/** Masalah pasca panen kopi yang diidentifikasi */
export type Problem = {
  icon: string;
  title: string;
  description: string;
  impact: string;
};
