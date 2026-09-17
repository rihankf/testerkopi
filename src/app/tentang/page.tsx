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
              terdapat tiga masalah utama: pengeringan, pengukuran kadar air, dan pemilahan kualitas biji
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
                  Kopi melalui proses panjang mulai dari budidaya, panen, pascapanen, hingga roasting. 
                  Pada tahap pascapanen, petani masih menghadapi beberapa kendala utama, terutama dalam pengeringan, pengukuran kadar air, dan pemilahan kualitas biji kopi. 
                  Ketiga hal tersebut menjadi bagian penting karena menentukan kondisi biji sebelum masuk ke tahap pengolahan berikutnya.
                </p>
                <p>
                  Proses pengeringan masih banyak mengandalkan sinar matahari dengan cara menghamparkan kopi secara langsung, sehingga sangat dipengaruhi oleh cuaca, keterbatasan lahan, kapasitas pengeringan, dan biaya fasilitas seperti greenhouse atau sun dryer. 
                  Pada musim hujan, kadar air kopi lebih sulit diturunkan hingga sekitar 10–11%. Sementara itu, alat pengukur kadar air yang tersedia masih relatif mahal, sehingga sebagian petani mengandalkan sentuhan atau pengalaman untuk memperkirakan kondisi biji. 
                  Cara ini kurang akurat, terutama bagi petani baru.
                </p>
                <p>
                  Pada pemilahan kualitas, sistem kering lebih sederhana tetapi belum mudah memisahkan biji berdasarkan berat jenis, sehingga biji dapat tercampur. 
                  Sistem basah dapat memisahkan berdasarkan berat jenis. Biji yang tenggelam cenderung memiliki kualitas lebih baik, sedangkan yang mengapung cenderung lebih rendah atau kopong. 
                  Karena itu, terdapat peluang untuk mengembangkan metode pemilahan berdasarkan berat jenis tanpa penggunaan air dalam jumlah besar.
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
                <h3>Katalog</h3>
                <p>
                  Menyusun katalog lengkap berisi solusi dan usulan berdasarkan
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
