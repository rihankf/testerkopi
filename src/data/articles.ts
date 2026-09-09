import type { Article } from "@/types";

// ══════════════════════════════════════════════════════════
// STUDI KAJIAN MAGANGHUB
// 3 artikel kajian yang mendukung asesmen teknologi pasca panen kopi.
// Setiap artikel berisi paragraf-paragraf (content: string[]).
//
// Ditampilkan di:
//   - Halaman /[slug] (detail artikel)
//   - Halaman artikel (related articles)
// ══════════════════════════════════════════════════════════
const kajianEkonomi = [
  "Kopi merupakan salah satu komoditas ekspor non-migas terpenting Indonesia. Sebagai produsen kopi terbesar ke-4 dunia setelah Brasil, Vietnam, dan Kolombia, Indonesia menghasilkan sekitar 774.000 ton kopi per tahun dengan nilai ekspor mencapai USD 1,2 miliar. Produksi kopi melibatkan sekitar 1,9 juta petani yang tersebar di 17 provinsi.",
  "Dari sisi ekonomi mikro, kopi menawarkan margin keuntungan yang menarik bagi petani — terutama untuk specialty coffee yang bisa dijual 3–5x lipat harga kopi biasa. Harga kopi Arabika specialty grade bisa mencapai Rp 80.000–150.000/kg di level green bean, dibandingkan Rp 25.000–35.000/kg untuk grade biasa. Namun, untuk mencapai grade specialty, diperlukan penanganan pasca panen yang presisi.",
  "Tantangan utama terletak di gap antara harga potensial dan harga aktual yang diterima petani. Banyak petani menjual cherry atau asalan dengan harga rendah (Rp 8.000–12.000/kg) karena tidak memiliki alat dan pengetahuan untuk melakukan proses pasca panen yang baik. Ini menjadi peluang besar untuk intervensi teknologi tepat guna.",
  "Studi menunjukkan bahwa investasi pada alat pasca panen sederhana (sun dryer, moisture meter, grader) dengan total biaya Rp 5–15 juta bisa meningkatkan harga jual biji kopi 40–100%. Artinya, investasi bisa balik modal dalam 1–2 musim panen. Ini menjadikan teknologi pasca panen kopi sebagai area dengan ROI tertinggi untuk intervensi pembangunan pertanian.",
];

const kajianTeknologi = [
  "Rantai pasca panen kopi terdiri dari beberapa tahap kritis yang masing-masing mempengaruhi kualitas akhir biji kopi. Setiap tahap merupakan 'pain point' potensial di mana intervensi teknologi dapat memberikan dampak signifikan. Memahami rantai ini secara menyeluruh adalah langkah pertama dalam asesmen kebutuhan teknologi.",
  "Tahap pertama adalah pemetikan (harvesting) — idealnya hanya cherry merah matang yang dipetik (selective picking). Namun, karena keterbatasan tenaga kerja, banyak petani melakukan strip picking yang mencampur cherry matang dan mentah. Tahap ini mempengaruhi seluruh kualitas hilir. Teknologi yang relevan: alat bantu petik selektif, mesin sortir cherry.",
  "Tahap kedua adalah pengolahan (processing) — meliputi pulping, fermentasi, dan pencucian untuk proses basah (wet/washed), atau pengeringan langsung untuk proses kering (natural/dry). Masing-masing metode menghasilkan profil rasa berbeda. Teknologi relevan: mesin pulper, bak fermentasi terkontrol, pH meter.",
  "Tahap ketiga dan keempat adalah pengeringan dan sortasi/grading — dua area dengan pain point terbesar bagi petani kecil. Pengeringan memerlukan sun dryer berkualitas dan moisture meter untuk monitoring. Sortasi memerlukan alat grading berdasarkan ukuran, berat, dan visual. Tahap kelima adalah penyimpanan dan pengemasan yang memerlukan kontrol kelembaban.",
];

const kajianStakeholder = [
  "Pendekatan Maganghub dalam asesmen kebutuhan teknologi berbeda dari model top-down yang umum diterapkan. Alih-alih mengusulkan teknologi terbaru, tim berperan sebagai konsultan yang lebih banyak mendengarkan terlebih dahulu. Filosofi ini penting karena di tingkat komunitas, perbaikan sudah terjadi secara organik berdasarkan pengalaman — tugas kita adalah mengidentifikasi gap dan menjembatani dengan praktik terbaik.",
  "Proses interview stakeholder dimulai dengan memahami konteks lokal: jenis kopi yang ditanam, volume produksi, metode pengolahan saat ini, akses pasar, dan tantangan spesifik yang dihadapi. Pertanyaan tidak bersifat leading — kita tidak menanyakan 'apakah Anda butuh alat X?' melainkan 'apa tantangan terbesar dalam proses pengeringan Anda?'",
  "Validasi dengan stakeholder dilakukan setelah identifikasi awal kebutuhan. Hasil kajian dipresentasikan kembali kepada petani dan pelaku rantai pasok untuk memastikan solusi yang diusulkan benar-benar sesuai kebutuhan. Prioritisasi dilakukan bersama menggunakan 5 dimensi: teknikal (apakah layak?), ekonomik (apakah terjangkau?), operasional (apakah mudah digunakan?), sosial (apakah diterima komunitas?), dan skala (apakah bisa direplikasi?).",
  "Harapan akhir dari proses ini adalah dokumen lengkap berisi solusi dan usulan berdasarkan kajian mendalam — bukan sekadar daftar belanja alat, tetapi roadmap komprehensif yang mempertimbangkan ekosistem petani secara holistik. Dokumen ini akan menjadi acuan bagi pemerintah daerah, lembaga donor, dan koperasi dalam mengalokasikan sumber daya.",
];

export const articles: Article[] = [
  {
    slug: "mengapa-kopi-menarik-secara-ekonomi",
    title: "Mengapa Kopi Menarik Secara Ekonomi?",
    image: "/images/gallery-25.jpg",
    date: "Agustus 2026",
    content: kajianEkonomi,
  },
  {
    slug: "rantai-pasca-panen-kopi-titik-kritis-teknologi",
    title: "Rantai Pasca Panen Kopi: Titik Kritis & Kebutuhan Teknologi",
    image: "/images/gallery-19.jpg",
    date: "Agustus 2026",
    content: kajianTeknologi,
  },
  {
    slug: "assessment-kebutuhan-stakeholder-mendengar-petani",
    title: "Assessment Kebutuhan Stakeholder: Mendengar Petani",
    image: "/images/gallery-2.jpg",
    date: "Agustus 2026",
    content: kajianStakeholder,
  },
];
