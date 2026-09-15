// NOTE:
// Halaman Tentang (/tentang).
// Section: Rangkuman Masalah (3 tahap timeline), Latar Belakang (sejarah kopi),
// Tujuan (4 kartu objektif), CTA (ajakan ke halaman teknologi).

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import Image from "next/image";

export default function TentangPage() {
  return (
    <>
      <Header />
      <main className="inner-page">
        <section className="problems-section section">
          <div className="container">
            <SectionHeading eyebrow="Identifikasi" title="Rangkuman Masalah" />
            <p
              className="problems-subtitle"
              style={{
                textAlign: "center",
                margin: "20px auto 30px",
                maxWidth: "900px",
                lineHeight: 1.8,
              }}
            >
              Berdasarkan identifikasi permasalahan pascapanen kopi, 
              terdapat tiga titik utama yang perlu mendapatkan perhatian: pengeringan, pengukuran kadar air, dan pemilahan kualitas biji.
            </p>
            <div
              className="timeline"
              style={{
                gridTemplateColumns: "repeat(3, 1fr)",
                marginTop: "30px",
                marginBottom: "40px",
              }}
            >
              <div
                className="timeline-line"
                style={{ left: "16.66%", right: "16.66%" }}
              />

              <div className="timeline-item timeline-active">
                <div className="timeline-node">
                  <span className="timeline-month" style={{ fontSize: "20px" }}>
                    ☀️
                  </span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">Tahap 1</span>
                  <h3>Pengeringan</h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    Ketergantungan pada sinar matahari menyebabkan proses pengeringan rentan terhadap perubahan cuaca. 
                    Keterbatasan lahan dan kapasitas pengeringan juga menjadi hambatan bagi petani.
                  </p>
                </div>
              </div>

              <div className="timeline-item timeline-active">
                <div className="timeline-node">
                  <span className="timeline-month" style={{ fontSize: "20px" }}>
                    💧
                  </span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">Tahap 2</span>
                  <h3>Pengukuran</h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    Harga alat ukur yang relatif mahal membuat sebagian petani masih mengandalkan pemeriksaan manual atau berdasarkan pengalaman, 
                    sehingga akurasi pengukuran menjadi tantangan.
                  </p>
                </div>
              </div>

              <div className="timeline-item timeline-active">
                <div className="timeline-node">
                  <span className="timeline-month" style={{ fontSize: "20px" }}>
                    ⚖️
                  </span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">Tahap 3</span>
                  <h3>Pemilahan</h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    Pemilahan dengan sistem kering sulit membedakan biji berdasarkan berat jenis, 
                    sedangkan sistem basah membutuhkan banyak air dan memperpanjang proses pengeringan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about section">
          <div className="container">
            <SectionHeading title="Mengapa Proyek Ini Penting?" />
            <div className="about-grid" style={{ marginTop: "40px" }}>
              <div style={{ textAlign: "center" }}>
                <Image
                  src="/images/sejarah-kopi.jpg"
                  alt="Ilustrasi Sejarah Kopi Indonesia"
                  width={800}
                  height={533}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "800px",
                    borderRadius: "16px",
                    boxShadow: "var(--shadow-md)",
                    margin: "0 auto",
                  }}
                />
              </div>
              <div className="about-copy" style={{ paddingTop: "0" }}>
                <p>
                  Kopi tidak hanya memiliki nilai sebagai komoditas, tetapi juga melibatkan proses panjang dari budidaya, panen, pascapanen hingga roasting. 
                  Berdasarkan hasil pembahasan, kendala utama petani justru banyak ditemukan pada tahap pascapanen, 
                  terutama pada proses pengeringan, pengukuran kadar air, dan pemilahan kualitas biji kopi.
                </p>
                <p>
                  Proses pengeringan masih banyak mengandalkan sinar matahari secara langsung. 
                  Kondisi cuaca, keterbatasan lahan, kapasitas pengeringan, serta biaya pembangunan fasilitas menjadi hambatan bagi petani. 
                  Pada musim hujan, kadar air kopi juga lebih sulit diturunkan hingga kondisi optimal sekitar 10–11%.
                </p>
                <p>Di sisi lain, alat pengukur kadar air memang telah tersedia, tetapi harganya relatif mahal. 
                Akibatnya, sebagian petani masih menggunakan pemeriksaan manual berdasarkan sentuhan atau pengalaman, 
                yang kurang akurat terutama bagi petani baru.
                Pemilahan kualitas juga menjadi tantangan. Sistem kering lebih sederhana tetapi tidak mudah memisahkan biji berdasarkan berat jenis, 
                sementara sistem basah membutuhkan banyak air dan dapat memperpanjang proses pengeringan.
                  </p>
              </div>
            </div>
          </div>
        </section>

        <section className="objectives-section section">
          <div className="container">
            <SectionHeading
              eyebrow="Tujuan"
              title="Apa yang Ingin Kami Capai?"
            />
            <div className="objectives-grid">
              <div className="objective-card">
                <div className="objective-number">01</div>
                <h3>Identifikasi Kebutuhan</h3>
                <p>
                  Mengidentifikasi kebutuhan dan permasalahan stakeholder melalui wawancara serta penggalian informasi dari petani, 
                  pelaku usaha, dan pihak terkait dalam rantai pasok kopi.
                </p>
              </div>
              <div className="objective-card">
                <div className="objective-number">02</div>
                <h3>Survei Teknologi</h3>
                <p>
                  Melakukan survei terhadap teknologi alat panen kopi yang
                  tersedia di pasaran dari yang paling sederhana hingga yang
                  canggih lengkap dengan spesifikasi dan harga.
                </p>
              </div>
              <div className="objective-card">
                <div className="objective-number">03</div>
                <h3>Rekomendasi Solusi</h3>
                <p>
                  Merekomendasikan solusi teknologi yang tepat guna bukan yang
                  paling mahal atau canggih, tetapi yang paling sesuai dengan
                  kebutuhan.
                </p>
              </div>
              <div className="objective-card">
                <div className="objective-number">04</div>
                <h3>Dokumen</h3>
                <p>
                  Menyusun dokumen lengkap berisi solusi dan usulan berdasarkan
                  kajian.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta section">
          <div
            className="container"
            style={{ textAlign: "center", maxWidth: "700px" }}
          >
            <SectionHeading title="Jelajahi Teknologi yang Kami Rekomendasikan" />
            <p
              style={{
                color: "var(--muted)",
                marginBottom: "30px",
                lineHeight: 1.8,
              }}
            >
              Lihat katalog lengkap teknologi alat
            </p>
            <Link className="button" href="/teknologi">
              Lihat Teknologi
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
