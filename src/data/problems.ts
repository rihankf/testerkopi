import type { Problem } from "@/types";

// ══════════════════════════════════════════════════════════
// IDENTIFIKASI MASALAH PASCA PANEN KOPI
// Data ini ditampilkan di:
//   - Homepage (section "Identifikasi Masalah")
//   - Halaman Tentang (referensi konteks)
// ══════════════════════════════════════════════════════════

export const problems: Problem[] = [
  {
    icon: "🌧️",
    title: "Kendala Cuaca dalam Pengeringan",
    description:
      "Pengeringan masih banyak mengandalkan sinar matahari dengan cara menghamparkan kopi secara langsung. Kendala utama adalah cuaca, keterbatasan lahan, kapasitas pengeringan, dan tingginya biaya pembangunan fasilitas seperti greenhouse atau sun dryer.",
    impact:
      "Pada musim hujan, kadar air sulit diturunkan hingga kondisi optimal (10–11%). Jika dipaksakan masuk ke proses roasting saat kadar air tinggi, kualitas dan cita rasanya dapat menurun.",
  },
  {
    icon: "💧",
    title: "Pengukuran Kadar Air Tidak Akurat",
    description:
      "Alat pengukur kadar air sudah tersedia tetapi relatif mahal. Sebagian petani masih mengandalkan pemeriksaan manual/feeling berdasarkan sentuhan atau pengalaman yang kurang akurat, terutama bagi petani baru.",
    impact:
      "Pengukuran yang lebih presisi terkadang baru dilakukan ketika kopi diperiksa oleh pengepul, menyebabkan petani kesulitan memprediksi dan mempertahankan standar kualitas.",
  },
  {
    icon: "⚖️",
    title: "Kelemahan Sistem Pemilahan Kering",
    description:
      "Sistem pengolahan pascapanen kering lebih sederhana, tetapi tidak dapat dengan mudah memisahkan biji berdasarkan berat jenis sehingga biji yang baik dan biji kopong dapat tercampur.",
    impact:
      "Pemisahan yang kurang optimal membuat kualitas akhir biji kopi yang dihasilkan menjadi tidak merata.",
  },
];
