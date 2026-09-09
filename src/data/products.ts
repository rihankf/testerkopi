import type { Tool } from "@/types";

// ══════════════════════════════════════════════════════════
// KATALOG ALAT TEKNOLOGI PASCA PANEN KOPI
// Data utama website — 3 alat yang direkomendasikan.
// Setiap alat memiliki:
//   - problem    : masalah yang diselesaikan
//   - description: deskripsi solusi
//   - specs      : spesifikasi
//   - comparisons: perbandingan harga antar brand (untuk PriceComparisonTable)
//   - researcher : nama peneliti yang bertanggung jawab
//
// Ditampilkan di:
//   - Homepage (section "Solusi Teknologi")
//   - Halaman /teknologi (katalog lengkap + search)
//   - Halaman /product/[slug] (detail per alat)
// ══════════════════════════════════════════════════════════

export const tools: Tool[] = [
  {
    "slug": "pengering-ruangan-raja",
    "name": "Pengering Pertanian Model Ruangan",
    "category": "Pengeringan",
    "image": "/images/Pengering1.jpeg",
    "problem": "Ketergantungan pada sinar matahari membuat proses pengeringan sering terkendala saat musim hujan. Pengeringan sistem manual juga sangat dipengaruhi oleh kondisi cuaca dan membutuhkan lahan yang sangat luas.",
    "description": "Alat pengering tipe ruangan (kabinet) berkapasitas besar. Mesin mengalirkan udara panas menggunakan blower listrik dengan sistem pengaturan thermocontrol digital dan timer otomatis, menjamin suhu pengeringan tetap optimal.",
    "priceRange": "Rp 19.560.000",
    "features": [
      "Thermocontrol dan timer otomatis",
      "Udara panas didistribusikan merata dengan blower",
      "Kapasitas besar hingga 500 kg",
      "Dapat menggunakan sumber energi Gas atau Listrik"
    ],
    "specs": [
      {
        "label": "Kapasitas",
        "value": "500 kg"
      },
      {
        "label": "Rentang Suhu",
        "value": "30 - 110 °C"
      },
      {
        "label": "Daya Listrik",
        "value": "0,5 kW"
      },
      {
        "label": "Dimensi",
        "value": "66 x 80 x 45 cm"
      }
    ],
    "justification": "Kapasitas besar hingga 500 kg menjadikannya solusi ideal untuk tingkat kelompok tani atau UMKM yang membutuhkan throughput tinggi tanpa memakan lahan luas.",
    "recommendation": "Direkomendasikan untuk kelompok tani atau UMKM pengolah kopi di daerah curah hujan tinggi.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "Model Ruangan",
        "brand": "Raja Pengering",
        "price": "Rp 19.560.000",
        "priceValue": 19560000,
        "origin": "Indonesia",
        "notes": "Blower listrik 500W, konsumsi bahan bakar gas/listrik."
      }
    ]
  },
  {
    "slug": "oven-gas-10rak",
    "name": "Mesin Oven Gas 10 Rak 1 Pintu",
    "category": "Pengeringan",
    "image": "/images/Pengering2.jpeg",
    "problem": "Proses pengeringan yang kurang terkontrol seringkali menyebabkan bagian luar biji sudah kering namun dalamnya masih basah, sehingga memicu kerusakan kualitas dan aroma kopi.",
    "description": "Oven gas pengering bertipe kabinet dengan 10 rak (tray) yang disusun vertikal. Alat ini memanfaatkan sirkulasi udara panas dari burner gas yang ditiupkan oleh blower listrik. Memiliki thermocontrol untuk menjaga presisi suhu 30–110°C.",
    "priceRange": "Rp 16.160.000",
    "features": [
      "Material body Stainless Steel",
      "Thermocontrol dan timer otomatis",
      "Desain 10 rak menghemat ruang produksi",
      "Proses pengeringan tidak tergantung cuaca"
    ],
    "specs": [
      {
        "label": "Tipe",
        "value": "Oven Kabinet 10 Rak"
      },
      {
        "label": "Rentang Suhu",
        "value": "30 - 110 °C"
      },
      {
        "label": "Daya Listrik",
        "value": "0,07 kW"
      },
      {
        "label": "Dimensi",
        "value": "60 x 60 x 170 cm"
      }
    ],
    "justification": "Sistem tray cabinet sangat tepat untuk batch-batch kecil khusus produk premium atau specialty coffee karena suhu lebih presisi.",
    "recommendation": "Direkomendasikan untuk prosesor kopi specialty yang mengutamakan ketepatan dan konsistensi profil pengeringan.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "Oven 10 Rak 1 Pintu",
        "brand": "Raja Pengering",
        "price": "Rp 16.160.000",
        "priceValue": 17160000,
        "origin": "Indonesia",
        "notes": "Konsumsi gas 1-3 kg/jam. Garansi 12 bulan (MOQ 1 unit)."
      }
    ]
  },
  {
    "slug": "rotary-dryer-raja",
    "name": "Rotary Dryer 100 kg (Raja Pengering)",
    "category": "Pengeringan",
    "image": "/images/Pengering3.jpeg",
    "problem": "Penjemuran diam menyebabkan distribusi panas tidak merata. Biji kopi harus diaduk manual terus-menerus, memakan tenaga kerja besar dan memperbesar potensi human error.",
    "description": "Mesin pengering berbentuk drum silinder yang terus berputar (rotary dryer). Drum yang berputar memastikan biji kopi bergerak konstan sehingga seluruh permukaan biji mendapat paparan panas yang merata dari blower.",
    "priceRange": "Rp 35.820.000",
    "features": [
      "Perputaran drum (rotary) mencegah biji gosong",
      "Thermocontrol digital dan timer otomatis (maks 10 jam)",
      "Material drum Stainless Steel Food Grade",
      "Sistem pemanas fleksibel (LPG, listrik, solar, kayu)"
    ],
    "specs": [
      {
        "label": "Kapasitas",
        "value": "100 kg"
      },
      {
        "label": "Rentang Suhu",
        "value": "Maks 110 °C"
      },
      {
        "label": "Daya Listrik",
        "value": "2 kW"
      },
      {
        "label": "Bahan Drum",
        "value": "Stainless Steel Food Grade"
      }
    ],
    "justification": "Pergerakan berulang di dalam drum memberikan hasil yang sangat merata dengan laju pengeringan yang tinggi dan laju air akhir ideal (12%).",
    "recommendation": "Sangat direkomendasikan untuk sentra pengolahan kopi berkapasitas besar dengan pasokan listrik yang stabil.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "Rotary Dryer 100 kg",
        "brand": "Raja Pengering",
        "price": "Rp 35.820.000",
        "priceValue": 35820000,
        "origin": "Indonesia",
        "notes": "Bisa custom sistem pemanas. Garansi 12 bulan."
      }
    ]
  },
  {
    "slug": "rotary-dryer-hanindo",
    "name": "Rotary Dryer 100 kg (Hanindo)",
    "category": "Pengeringan",
    "image": "/images/Pengering4.jpeg",
    "problem": "Banyak mesin rotary dryer memiliki harga yang sangat mahal, sehingga sulit dijangkau oleh pengolah kopi pemula atau UMKM kecil yang butuh pengering mekanis.",
    "description": "Mesin rotary dryer ekonomis berkapasitas 100 kg dengan material body Besi Baja. Didesain secara fungsional menggunakan burner LPG dan blower, dilengkapi panel kontrol suhu digital sederhana untuk pengeringan kopi.",
    "priceRange": "Rp 20.727.400",
    "features": [
      "Harga lebih terjangkau untuk kapasitas 100 kg",
      "Thermocontrol digital dengan timer otomatis (maks 10 jam)",
      "Putaran drum adjustable (6-15 RPM)",
      "Penurunan kadar air diklaim 2-5% per jam"
    ],
    "specs": [
      {
        "label": "Kapasitas",
        "value": "100 kg"
      },
      {
        "label": "Daya Listrik",
        "value": "900 Watt (220 V)"
      },
      {
        "label": "Dimensi Drum",
        "value": "750 x 1000 mm"
      },
      {
        "label": "Material",
        "value": "Besi Baja"
      }
    ],
    "justification": "Alternatif Rotary Dryer dengan budget lebih ekonomis, berkat penggunaan material besi baja ketimbang full stainless steel.",
    "recommendation": "Cocok untuk prosesor yang membutuhkan rotary dryer murah, namun biji kopi parchment tetap harus dijaga kebersihannya.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "Rotary Dryer Besi Baja",
        "brand": "Hanindo Mesin JKT",
        "price": "Rp 20.727.400",
        "priceValue": 20727400,
        "origin": "Indonesia",
        "notes": "Pengeringan rotary dengan burner/blower."
      }
    ]
  },
  {
    "slug": "agr-boxin4000",
    "name": "Box Dryer AGR-BOXIN4000",
    "category": "Pengeringan",
    "image": "/images/Pengering5.jpeg",
    "problem": "Pengeringan dalam jumlah sangat besar (hingga 4 ton) sulit dilakukan dengan metode penjemuran biasa dan membutuhkan mesin berkapasitas ekstra besar yang tangguh.",
    "description": "Alat pengering tipe box (Box Dryer) berkapasitas sangat besar 500-4.000 kg/proses. Menggunakan pemanasan indirect dengan sirkulasi udara panas menggunakan axial blower. Bisa menggunakan bahan bakar sekam padi, kayu bakar, atau dimodifikasi untuk minyak tanah/LPG.",
    "priceRange": "Rp 54.990.000",
    "features": [
      "Kapasitas ekstra besar hingga 4 ton per proses",
      "Pemanasan indirect dengan axial blower",
      "Bahan bakar fleksibel (sekam padi, kayu bakar, opsional LPG)",
      "Sistem kontrol analog yang mudah digunakan"
    ],
    "specs": [
      {
        "label": "Kapasitas",
        "value": "500 - 4.000 kg/proses"
      },
      {
        "label": "Sumber Energi",
        "value": "Sekam padi / kayu bakar (bisa dimodif LPG)"
      },
      {
        "label": "Dimensi",
        "value": "6.500 x 2.000 x 1.150 mm"
      },
      {
        "label": "Material",
        "value": "Plat besi, screen besi, siku plat besi"
      }
    ],
    "justification": "Solusi pengeringan massal yang sangat cocok untuk koperasi tingkat desa atau pengepul besar dengan bahan bakar biomassa yang murah (sekam/kayu).",
    "recommendation": "Direkomendasikan untuk pabrik pengolahan skala besar atau gabungan kelompok tani.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "Box Dryer AGR-BOXIN4000",
        "brand": "Agrowindo",
        "price": "Rp 54.990.000",
        "priceValue": 54990000,
        "origin": "Indonesia",
        "notes": "Pemanasan indirect, bahan bakar fleksibel."
      }
    ]
  },
  {
    "slug": "pengukur-kadar-air-garpu",
    "name": "Pengukur Kadar Air Model Garpu/Tusuk",
    "category": "Pengukuran",
    "image": "/images/Pengukur1.png",
    "problem": "Petani membutuhkan alat ukur kadar air yang cepat dan praktis untuk mengecek kopi di dalam karung tanpa harus membukanya, namun alat yang ada di pasaran umumnya mahal. Pengukuran manual dengan feeling sangat tidak akurat.",
    "description": "Alat ini berbentuk mirip remote control atau termometer tembak dengan layar digital dan dua buah besi panjang runcing (probe). Dua besi runcing itu dimasukkan langsung ke dalam tumpukan biji kopi atau menembus karung kopi. Alat akan mengalirkan listrik searah (DC) di antara kedua besi tersebut dan membaca nilai hambatan airnya (resistansi).",
    "priceRange": "Rp 150.000",
    "features": [
      "Sangat murah, super cepat, dan praktis",
      "Tidak perlu membuka jahitan karung (tinggal tusuk dari luar)",
      "Layar LCD monokrom untuk menampilkan persentase presisi",
      "Tombol kontrol taktil (Power, Hold, Select)"
    ],
    "specs": [
      {
        "label": "Metode Ukur",
        "value": "Resistansi / Konduktivitas"
      },
      {
        "label": "Batas / Skala",
        "value": "Skala Gudang & Lahan"
      },
      {
        "label": "Kapasitas",
        "value": "Membaca area kontak probe"
      },
      {
        "label": "Akurasi",
        "value": "±1,0%"
      },
      {
        "label": "Rentang Ukur",
        "value": "5% - 30%"
      }
    ],
    "justification": "Sangat terjangkau bagi petani, super cepat, dan praktis, namun keakuratannya rendah hingga sedang karena alat hanya membaca biji kopi yang kebetulan menyentuh besi garpu tersebut, tidak mewakili seluruh karung.",
    "recommendation": "Sangat direkomendasikan untuk pengecekan cepat langsung ditusuk ke karung 50 kg - 100 kg atau tumpukan jemuran bagi petani kecil dan pengepul biasa.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "Benetech GM640",
        "brand": "Shenzhen Jumaoyuan",
        "price": "Rp 400.000",
        "priceValue": 400000,
        "origin": "China",
        "notes": "Garpu Dual Pin, Rentang Suhu -10°C - 60°C. Harga sekitar 25-50 USD."
      },
      {
        "name": "MD7822",
        "brand": "Sanfix / Vici / Generik",
        "price": "Rp 150.000 - Rp 300.000",
        "priceValue": 250000,
        "origin": "China",
        "notes": "Alat Ukur Portabel. Probe dihubungkan dengan kabel."
      }
    ]
  },
  {
    "slug": "pengukur-kadar-air-corong",
    "name": "Pengukur Kadar Air Model Corong Tabung",
    "category": "Pengukuran",
    "image": "/images/Pengukur2.jpg",
    "problem": "Pengukuran model tusuk merusak biji kopi (biji pecah tertusuk) dan hasilnya sering tidak mewakili keseluruhan sampel yang ada dalam satu wadah.",
    "description": "Berbentuk seperti tabung silinder vertikal yang lumayan besar dengan corong plastik di bagian atasnya dan mangkuk timbangan serta layar LCD di bawahnya. Biji kopi dituang melalui corong hingga memenuhi tabung penampung. Sensor di dinding tabung akan menembakkan gelombang elektromagnetik untuk membaca kapasitas air dari keseluruhan volume biji.",
    "priceRange": "Rp 1.500.000",
    "features": [
      "Tidak merusak sampel (non-destructive)",
      "Pembacaan jauh lebih merata dari model tusuk",
      "Serbaguna (bisa diatur untuk mengukur beras, jagung, gabah, dan kopi)",
      "Sensor suhu otomatis terintegrasi"
    ],
    "specs": [
      {
        "label": "Metode Ukur",
        "value": "Kapasitansi + Timbangan"
      },
      {
        "label": "Batas / Skala",
        "value": "Skala UMKM / Pengumpul Lokal"
      },
      {
        "label": "Kapasitas",
        "value": "~250 mL (150-200g biji)"
      },
      {
        "label": "Akurasi",
        "value": "±0,5%"
      },
      {
        "label": "Rentang Ukur",
        "value": "3% - 35%"
      }
    ],
    "justification": "Keakuratannya lumayan tinggi dan jauh lebih akurat dari model tusuk dengan syarat suhu lingkungan stabil. Pembacaan lebih merata untuk satu volume corong.",
    "recommendation": "Cocok untuk pengujian cepat sampel per wadah bagi skala UMKM atau Pengumpul Lokal, namun kurang praktis dibawa keliling kebun karena ukurannya yang memakan tempat.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "LDS-1G",
        "brand": "Shanghai Jenen / Generik",
        "price": "Rp 2.500.000 – Rp 4.500.000",
        "priceValue": 3500000,
        "origin": "China",
        "notes": "Dilengkapi mikrokontroler LCD, bahan plastik ABS & Logam."
      }
    ]
  },
  {
    "slug": "pengukur-kadar-air-genggam",
    "name": "Pengukur Kadar Air Genggam Profesional",
    "category": "Pengukuran",
    "image": "/images/Pengukur3.jpg",
    "problem": "Petani dan pelaku industri membutuhkan alat ukur yang sangat presisi dan tangguh yang bisa diandalkan untuk menstandarkan kadar air sesuai kriteria ekspor tanpa harus bolak-balik ke laboratorium.",
    "description": "Alat ukur premium berbasis kapasitansi presisi tinggi dengan bentuk tabung silinder logam tebal atau mug besar berbahan plastik tebal. Dilengkapi ruang sampel terintegrasi dan sensor suhu otomatis yang sangat presisi untuk menyesuaikan pembacaan kadar air dengan suhu kopi saat itu.",
    "priceRange": "Rp 6.000.000",
    "features": [
      "Build quality sangat tangguh dan portabel",
      "Kompensasi suhu otomatis yang membuat perhitungan anti meleset",
      "Akurasi standar industri (toleransi eror di bawah 0,5%)",
      "Layar LCD digital canggih dan sensor timbangan digital (model tertentu)"
    ],
    "specs": [
      {
        "label": "Metode Ukur",
        "value": "Kapasitansi (Sel Tertutup/Sistem Tuang)"
      },
      {
        "label": "Batas / Skala",
        "value": "Skala Industri / Laboratorium"
      },
      {
        "label": "Kapasitas",
        "value": "~90 mL hingga ~240 mL"
      },
      {
        "label": "Akurasi",
        "value": "±0,5%"
      },
      {
        "label": "Rentang Ukur",
        "value": "1% - 40%"
      }
    ],
    "justification": "Meskipun harganya sangat mahal, alat ini menawarkan akurasi standar industri yang maksimal yang bisa didapat di lapangan tanpa harus membawa kopi ke laboratorium.",
    "recommendation": "Sangat direkomendasikan untuk industri skala menengah, ekspor, dan laboratorium untuk memeriksa sampel acak hingga sampel partai besar (tonase).",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "Wile Coffee (Wile 55/200)",
        "brand": "Farmcomp Oy",
        "price": "Rp 7.500.000 – Rp 11.000.000",
        "priceValue": 9250000,
        "origin": "Finlandia",
        "notes": "Berbentuk tabung silinder kecil, menguji sampel acak dari karung 20 kg – 60 kg."
      },
      {
        "name": "Kett PM-450",
        "brand": "Kett Electric Lab",
        "price": "Rp 20.000.000 – Rp 28.000.000",
        "priceValue": 24000000,
        "origin": "Jepang",
        "notes": "Memeriksa sampel standar dari partai besar (tonase)."
      },
      {
        "name": "Mini GAC Plus",
        "brand": "Dickey-John Corp",
        "price": "Rp 22.000.000 – Rp 32.000.000",
        "priceValue": 27000000,
        "origin": "Amerika Serikat",
        "notes": "Metode Kapasitansi Dielektrik + Berat Jenis."
      },
      {
        "name": "TwistGrain Pro",
        "brand": "Draminski S.A.",
        "price": "Rp 9.000.000 – Rp 15.000.000",
        "priceValue": 12000000,
        "origin": "Polandia",
        "notes": "Metode Kapasitansi + Ulir Penekan (Twist)."
      },
      {
        "name": "HE 50 Coffee",
        "brand": "Pfeuffer GmbH",
        "price": "Rp 18.000.000 – Rp 27.000.000",
        "priceValue": 22500000,
        "origin": "Jerman",
        "notes": "Metode Kapasitansi + Tumbuk (Grinding cell)."
      }
    ]
  },
  {
    "slug": "meja-grading-visual",
    "name": "Meja Grading Visual dengan Pencahayaan",
    "category": "Pengukuran",
    "image": "/images/Pengukur4.jpg",
    "problem": "Melakukan Quality Control (QC) dan sortir manual cacat fisik (defect) di ruangan dengan cahaya minim menyebabkan ketidakakuratan dan kelelahan mata ekstrem bagi pekerja (sorter).",
    "description": "Meja sortir dan grading yang didesain secara ergonomis, dilengkapi dengan permukaan berwarna netral (biasanya biru muda atau abu-abu) dan lampu pencahayaan daylight (6500K) yang terang merata dan bebas bayangan.",
    "priceRange": "Rp 2.000.000",
    "features": [
      "Lampu LED spesifikasi Daylight 6500K High CRI",
      "Permukaan meja ergonomis dan mudah dibersihkan",
      "Dilengkapi kaca pembesar (opsional)",
      "Lubang corong pembuangan (drop hole) untuk biji reject"
    ],
    "specs": [
      {
        "label": "CRI Lampu",
        "value": ">90 (Akurasi warna tinggi)"
      },
      {
        "label": "Warna Meja",
        "value": "Netral (Light Blue/Grey)"
      },
      {
        "label": "Dimensi",
        "value": "120 x 80 cm"
      },
      {
        "label": "Tinggi Meja",
        "value": "Ergonomis duduk (75 cm)"
      }
    ],
    "justification": "Investasi yang sangat kecil namun memberi dampak langsung pada kesehatan pekerja (ergonomi) dan akurasi penyortiran manual.",
    "recommendation": "Sangat direkomendasikan untuk semua tingkatan pengolahan kopi yang masih bergantung pada tenaga manusia untuk final QC.",
    "researcher": "Aul",
    "comparisons": [
      {
        "name": "Meja Sortir Standar",
        "brand": "Custom Fabrikasi",
        "price": "Rp 2.500.000",
        "priceValue": 2500000,
        "origin": "Lokal",
        "notes": "Meja dengan lampu gantung dan drop-hole sederhana."
      }
    ]
  },
  {
    "slug": "timbangan-digital-presisi",
    "name": "Timbangan Digital Presisi Analitik",
    "category": "Pengukuran",
    "image": "/images/Pengukur5.jpg",
    "problem": "Perhitungan sampel cacat (defect count) untuk penentuan Grade Kopi (misal skala SCAA: sampel 350 gram) membutuhkan pengukuran gramasi yang sangat akurat. Timbangan pasar biasa tidak memiliki presisi desimal yang dibutuhkan.",
    "description": "Timbangan digital analitik dengan tingkat presisi tinggi (hingga 0.1 atau 0.01 gram). Digunakan di ruang cupping atau lab QC untuk menimbang sampel kopi green bean sebelum grading, atau menimbang biji kopi sangrai (roasted) untuk cupping.",
    "priceRange": "Rp 300.000",
    "features": [
      "Akurasi desimal tinggi (0.1g hingga 0.01g)",
      "Fungsi Tare / Zeroing yang responsif",
      "Layar digital LCD/LED yang jelas",
      "Baterai isi ulang atau adaptor daya"
    ],
    "specs": [
      {
        "label": "Kapasitas Maksimal",
        "value": "2000 - 5000 gram"
      },
      {
        "label": "Akurasi (Readability)",
        "value": "0.1 gram"
      },
      {
        "label": "Platform",
        "value": "Stainless Steel"
      },
      {
        "label": "Kalibrasi",
        "value": "Digital Auto-Calibration"
      }
    ],
    "justification": "Alat dasar yang wajib dimiliki oleh setiap Q-Grader atau pelaku usaha kopi untuk standardisasi perhitungan rasio dan grading.",
    "recommendation": "Wajib dimiliki untuk keperluan Lab QC dan kedai kopi. Tidak perlu membeli yang terlalu mahal asalkan konsisten dan sering dikalibrasi.",
    "researcher": "Aul",
    "comparisons": [
      {
        "name": "Timbangan Kopi Presisi",
        "brand": "Generic Import",
        "price": "Rp 450.000",
        "priceValue": 450000,
        "origin": "China",
        "notes": "Sudah sangat memadai untuk kebutuhan QC harian."
      }
    ]
  },
  {
    "slug": "set-ayakan-standar-sca",
    "name": "Set Ayakan Kopi Standar (SCA Screen Grading)",
    "category": "Pengukuran",
    "image": "/images/Pengukur6.jpg",
    "problem": "Tanpa alat ukur yang terstandarisasi, sulit bagi pelaku usaha untuk mengklasifikasikan biji kopi berdasarkan ukurannya secara resmi (misal: Screen Size 14, 15, 16, 17, 18). Perbedaan standar ukuran berpotensi merugikan harga jual di pasar ekspor.",
    "description": "Satu set ayakan kopi (Coffee Screen Grading Set) yang terbuat dari bahan stainless steel, diproduksi persis mengikuti standar internasional (SCA). Terdiri dari beberapa layer panci dengan lubang bundar yang diameternya bervariasi dengan presisi mikrometer.",
    "priceRange": "Rp 1.500.000",
    "features": [
      "Mengikuti standar Specialty Coffee Association (SCA)",
      "Set lengkap dari screen size 13 hingga 19",
      "Material 100% Stainless steel anti karat",
      "Dilengkapi tutup dan panci dasar (bottom pan)"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Stainless Steel 304"
      },
      {
        "label": "Ukuran Diameter Panci",
        "value": "20 cm (Standar Lab)"
      },
      {
        "label": "Rentang Screen",
        "value": "Size 13/64 inch - 19/64 inch"
      },
      {
        "label": "Fungsi Tambahan",
        "value": "Ayakan biji peaberry (slot)"
      }
    ],
    "justification": "Alat wajib untuk pengujian fisik di lab guna menetapkan ukuran profil kopi yang akan dijual. Ukuran seragam sangat penting saat proses roasting agar biji matang bersamaan.",
    "recommendation": "Wajib bagi koperasi eksportir atau pelaku QC. Harga cukup mahal untuk set original, namun buatan lokal berkualitas juga sudah memenuhi syarat fungsional.",
    "researcher": "Aul",
    "comparisons": [
      {
        "name": "Screen Grader Set Lokal",
        "brand": "Lokal",
        "price": "Rp 2.000.000",
        "priceValue": 2000000,
        "origin": "Indonesia",
        "notes": "Lebih murah dari versi impor, fungsionalitas sama."
      }
    ]
  },
  {
    "slug": "termohigrometer-digital",
    "name": "Termohigrometer Digital Ruang Penyimpanan",
    "category": "Pengukuran",
    "image": "/images/Pengukur7.jpg",
    "problem": "Biji kopi yang sudah dikeringkan (green beans) sangat rentan menyerap kelembaban dari udara sekitar. Penyimpanan di gudang yang lembab (RH > 65%) akan membuat kopi kembali basah, memicu jamur Okratoksin, dan merusak rasa.",
    "description": "Alat pengukur suhu (temperatur) dan kelembaban udara (Relative Humidity / RH) digital yang dipasang di dinding gudang penyimpanan kopi. Memberikan peringatan secara real-time jika kondisi gudang melewati batas aman penyimpanan kopi.",
    "priceRange": "Rp 350.000",
    "features": [
      "Layar LCD besar untuk pembacaan jarak jauh",
      "Sensor kelembaban (RH) presisi tinggi",
      "Fitur Data Logger (merekam riwayat suhu ke PC/HP)",
      "Alarm batas atas kelembaban"
    ],
    "specs": [
      {
        "label": "Rentang RH",
        "value": "10% - 99% RH"
      },
      {
        "label": "Rentang Suhu",
        "value": "-10°C hingga 60°C"
      },
      {
        "label": "Akurasi",
        "value": "±3% RH"
      },
      {
        "label": "Baterai",
        "value": "AAA / USB"
      }
    ],
    "justification": "Manajemen gudang adalah garis pertahanan terakhir. Alat yang sangat murah ini mampu menyelamatkan berton-ton kopi dari kerusakan akibat jamur.",
    "recommendation": "Alat wajib mutlak bagi siapa saja yang menyimpan green bean lebih dari 1 bulan. Pasang 1 unit di setiap sudut gudang.",
    "researcher": "Aul",
    "comparisons": [
      {
        "name": "Smart Thermo-Hygrometer",
        "brand": "Xiaomi / Inkbird",
        "price": "Rp 350.000",
        "priceValue": 350000,
        "origin": "Impor",
        "notes": "Sudah dilengkapi koneksi Bluetooth/WiFi untuk pantau lewat HP."
      }
    ]
  },
  {
    "slug": "mesin-sortasi-ai-wesort",
    "name": "Mesin Sortasi berbasis AI",
    "category": "Pemilahan",
    "image": "/images/Pemilah1.jpeg",
    "problem": "Biji kopi berkualitas baik dan rendah/cacat masih sulit dipisahkan pada proses pascapanen.",
    "description": "Optical color sorting menggunakan kamera CCD Full Color dan sistem pneumatic ejector (hembusan udara bertekanan) untuk memisahkan biji kopi berdasarkan warna antara biji diterima (accept) dan ditolak (reject). AI Smart Coffee Color Sorter dengan CCD Full Color Camera mendeteksi warna biji kopi dari sisi depan dan belakang.",
    "priceRange": "Rp 9.960.000",
    "features": [
      "Deteksi warna, bentuk, dan cacat visual",
      "Kamera CCD Full Color depan dan belakang",
      "Sistem pneumatic ejector",
      "Akurasi >= 99%"
    ],
    "specs": [
      {
        "label": "Tipe",
        "value": "6SXZ-136, 2 Chute"
      },
      {
        "label": "Kapasitas",
        "value": "800-2000 kg/h"
      },
      {
        "label": "Daya",
        "value": "2,7 kW"
      },
      {
        "label": "Dimensi",
        "value": "1837 x 5883 x 2149 mm"
      }
    ],
    "justification": "Mengotomatisasi penyortiran visual dengan tingkat akurasi tinggi dan kapasitas besar.",
    "recommendation": "Sangat direkomendasikan untuk pabrik pengolahan skala besar.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "S1LH128-IA",
        "brand": "WESORT",
        "price": "Rp 9.960.000",
        "priceValue": 9960000,
        "origin": "China",
        "notes": "Memerlukan udara bertekanan < 4000L/min (0,4-0,6 Mpa)."
      }
    ]
  },
  {
    "slug": "mesin-sortasi-loadcell-zonesun",
    "name": "Mesin Sortasi berbasis load cell dan sensor fotoelektrik",
    "category": "Pemilahan",
    "image": "/images/Pemilah2.jpg",
    "problem": "Mesin sortasi yang beredar umumnya menggunakan parameter warna/bentuk, sedangkan teknologi sortasi berdasarkan densitas/berat jenis masih terbatas.",
    "description": "Dynamic checkweighing menggunakan high-precision load cell dan sensor fotoelektrik untuk mendeteksi dan menimbang produk secara otomatis saat bergerak pada konveyor, kemudian mengklasifikasikan produk berdasarkan rentang berat yang telah ditentukan. Menggunakan ZONESUN ZS-MD210-6.",
    "priceRange": "Rp 132.199.637",
    "features": [
      "Sortasi berdasarkan berat biji kopi",
      "High-precision load cell & sensor fotoelektrik",
      "Konveyor berkecepatan tinggi",
      "Touchscreen control & automatic rejection mechanism"
    ],
    "specs": [
      {
        "label": "Kapasitas",
        "value": "100-300 kemasan/menit"
      },
      {
        "label": "Rentang Penimbangan",
        "value": "3-1000 g"
      },
      {
        "label": "Interval Skala",
        "value": "0,1 g"
      },
      {
        "label": "Pengelompokkan",
        "value": "3-16 kelompok"
      }
    ],
    "justification": "Sortasi berdasarkan berat memberikan pemilahan tingkat lanjut yang tidak hanya bertumpu pada visual.",
    "recommendation": "Mesin ini sangat berpotensi dikembangkan dengan mengintegrasikan teknologi pengukuran volume untuk memperoleh parameter densitas.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "ZS-MD210-6",
        "brand": "ZONESUN",
        "price": "Rp 132.199.637,70",
        "priceValue": 132199637,
        "origin": "China",
        "notes": "Berat mesin ±274 kg. Daya AC 220 V."
      }
    ]
  },
  {
    "slug": "mini-color-sorter-topsort",
    "name": "Mesin Mini Coffee Bean Color Sorter",
    "category": "Pemilahan",
    "image": "/images/Pemilah3.jpg",
    "problem": "Pemilahan manual tidak konsisten dan lambat. Mesin sortasi ukuran besar terlalu memakan tempat untuk industri skala kecil.",
    "description": "Pemisahan biji berdasarkan perbedaan warna, bentuk, ukuran, dan material/cacat visual menggunakan sistem optik. Biji yang tidak sesuai dipisahkan dengan semburan udara bertekanan. Menggunakan high-speed FPGA digital image processing dan AI self-learning.",
    "priceRange": "Tidak tercantum",
    "features": [
      "Deteksi warna, bentuk, ukuran, dan kotoran/cacat visual",
      "High-resolution touch screen dengan user-friendly graphics",
      "Dilengkapi WIFI untuk dukungan pengaturan secara online",
      "Akurasi Sortasi 99,99%"
    ],
    "specs": [
      {
        "label": "Kapasitas",
        "value": "150-300 kg/jam"
      },
      {
        "label": "Jumlah Channel",
        "value": "32 channel"
      },
      {
        "label": "Konsumsi Udara",
        "value": "<0,5 m³/menit"
      },
      {
        "label": "Dimensi",
        "value": "420 x 1100 x 1820 mm"
      }
    ],
    "justification": "Bentuk yang lebih kompak (mini) cocok untuk space terbatas dengan kemampuan sortasi optik yang mumpuni.",
    "recommendation": "Cocok untuk UMKM atau skala menengah yang membutuhkan mesin sortasi warna handal dengan tapak lebih kecil.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "TS-32 (Mini-32)",
        "brand": "TOPSORT",
        "price": "Tidak tercantum",
        "priceValue": 0,
        "origin": "China",
        "notes": "Garansi 2 tahun, bersertifikat CE."
      }
    ]
  },
  {
    "slug": "coffee-gravity-separator-vmac",
    "name": "Mesin Coffee Gravity Separator",
    "category": "Pemilahan",
    "image": "/images/Pemilah4.jpg",
    "problem": "Kebutuhan sortasi biji kopi berdasarkan kepadatan/densitas yang tidak dapat dideteksi oleh mesin optical color sorter biasa.",
    "description": "Gravity separation menggunakan kombinasi aliran udara ke atas dan getaran pada inclined deck untuk memisahkan green bean berdasarkan perbedaan berat jenis (densitas). Biji dipisahkan menjadi tiga bagian: heavy, middlings, dan lights.",
    "priceRange": "Tidak tercantum",
    "features": [
      "Deteksi berat jenis (densitas) biji kopi",
      "Air-fluidized vibrating deck dengan upward airflow",
      "Pengaturan feed rate, air volume, side tilt, dan end raise",
      "Memisahkan cacat terkait densitas"
    ],
    "specs": [
      {
        "label": "Kapasitas",
        "value": "500 kg/jam - 10 ton/jam"
      },
      {
        "label": "Fraksi Keluaran",
        "value": "3 fraksi: Heavy, Middlings, Lights"
      },
      {
        "label": "Motor Fan",
        "value": "3-17 HP"
      },
      {
        "label": "Catu Daya",
        "value": "3-phase, 440 V"
      }
    ],
    "justification": "Memisahkan biji kopi yang kopong, rusak karena serangga, atau berdensitas rendah secara efisien.",
    "recommendation": "Sangat direkomendasikan untuk export processing plant atau large curing works.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "Coffee Gravity Separator",
        "brand": "VMAC Industries",
        "price": "Tidak tercantum",
        "priceValue": 0,
        "origin": "India",
        "notes": "Kapasitas bervariasi sesuai ukuran deck (Small/Medium/Large)."
      }
    ]
  },
  {
    "slug": "gravity-separator-sutton",
    "name": "Mesin Gravity Separator",
    "category": "Pemilahan",
    "image": "/images/Pemilah5.jpg",
    "problem": "Pemisahan berdasarkan berat jenis basah membutuhkan banyak air dan meningkatkan kadar air biji, sehingga pengeringan lebih lama.",
    "description": "Gravity separation menggunakan kombinasi getaran meja dan aliran udara untuk memisahkan biji kopi berdasarkan perbedaan berat jenis (densitas). Biji yang lebih padat/berisi dan biji yang lebih ringan dapat bergerak ke arah keluaran yang berbeda.",
    "priceRange": "Rp 160.950.000",
    "features": [
      "Gravity Separator / Mesin Sutton",
      "Vibrating inclined deck dan air fluidization",
      "Mengelompokkan biji kopi berdasarkan berat jenis",
      "Tanpa ketergantungan pada proses basah"
    ],
    "specs": [
      {
        "label": "Kapasitas",
        "value": "1-2 ton/jam"
      },
      {
        "label": "Dimensi",
        "value": "2000 x 1250 x 1400 mm"
      },
      {
        "label": "Penggerak",
        "value": "4,5 HP"
      },
      {
        "label": "Status",
        "value": "Verified Supplier"
      }
    ],
    "justification": "Mampu memisahkan biji berdasarkan densitas tanpa menggunakan air, menghemat sumber daya air dan waktu pengeringan.",
    "recommendation": "Direkomendasikan untuk pengolah kopi yang mencari solusi lokal mesin pemisah densitas kering.",
    "researcher": "Tim Peneliti",
    "comparisons": [
      {
        "name": "Mesin Sutton",
        "brand": "CV. Kalfarolab Anugerah Nabawi",
        "price": "Rp 160.950.000",
        "priceValue": 160950000,
        "origin": "Indonesia",
        "notes": "Lokasi pengiriman Cileunyi, Kab. Bandung."
      }
    ]
  }
];
