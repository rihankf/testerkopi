/**
 * HALAMAN TENTANG — /tentang
 * Berisi 4 section:
 *   1. Rangkuman Masalah — 3 tahap masalah pasca panen (pengeringan, pengukuran, pemilahan)
 *   2. Latar Belakang    — Sejarah kopi Indonesia, gap harga, alasan proyek
 *   3. Tujuan            — 4 tujuan utama proyek (identifikasi, survei, rekomendasi, dokumen)
 *   4. CTA               — Link ke halaman teknologi
 */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { problems } from "@/data/content";

export default function TentangPage() {
  return (
    <>
      <Header />
      <main className="inner-page">
        {/* ── RANGKUMAN MASALAH ── */}
        <section className="problems-section section">
          <div className="container">
            <SectionHeading
              eyebrow="Identifikasi"
              title="Rangkuman Masalah"
            />
            <p className="problems-subtitle" style={{ textAlign: "center", margin: "20px auto 30px", maxWidth: "900px", lineHeight: 1.8 }}>
              Berdasarkan observasi pada rantai pengolahan pascapanen kopi, kendala utama yang menghambat petani dalam mencapai kualitas dan harga jual optimal terpusat pada tiga aspek yaitu proses pengeringan yang sangat bergantung pada cuaca, keterbatasan alat ukur kadar air yang presisi dan terjangkau, serta metode pemilahan biji kopi yang masih kurang baik pada sistem basah maupun kering.
            </p>
            <div className="timeline" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: "30px", marginBottom: "40px" }}>
              <div className="timeline-line" style={{ left: "16.66%", right: "16.66%" }} />
              
              <div className="timeline-item timeline-active">
                <div className="timeline-node">
                  <span className="timeline-month" style={{ fontSize: "20px" }}>☀️</span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">Tahap 1</span>
                  <h3>Pengeringan</h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                    Mengandalkan cuaca dan lahan terbatas. Saat musim hujan kadar air sulit turun (10-11%), menurunkan kualitas roasting.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item timeline-active">
                <div className="timeline-node">
                  <span className="timeline-month" style={{ fontSize: "20px" }}>💧</span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">Tahap 2</span>
                  <h3>Pengukuran</h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                    Alat presisi mahal. Pemeriksaan manual/feeling kurang akurat bagi petani baru, menyulitkan kontrol standar.
                  </p>
                </div>
              </div>

              <div className="timeline-item timeline-active">
                <div className="timeline-node">
                  <span className="timeline-month" style={{ fontSize: "20px" }}>⚖️</span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">Tahap 3</span>
                  <h3>Pemilahan</h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                    Sistem kering campur biji kopong, sistem basah bisa misah tapi boros air & memperlambat proses kering ulang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LATAR BELAKANG ── */}
        <section className="about section">
          <div className="container">
            <SectionHeading title="Mengapa Proyek Ini Penting?" />
            <div className="about-grid" style={{ marginTop: "40px" }}>
              <div style={{ textAlign: "center" }}>
                <img src="/images/sejarah-kopi.jpg" alt="Ilustrasi Sejarah Kopi Indonesia" style={{ width: "100%", maxWidth: "800px", borderRadius: "16px", boxShadow: "var(--shadow-md)", margin: "0 auto" }} />
              </div>
              <div className="about-copy" style={{ paddingTop: "0" }}>
                <p>
                  Kopi bukan sekadar komoditas, kopi adalah bagian dari <strong>sejarah panjang budaya Indonesia</strong>.
                  Sebagai produsen kopi terbesar ke-4 dunia, Indonesia menghasilkan sekitar 774.000 ton kopi per tahun
                  dengan nilai ekspor mencapai USD 1,2 miliar. Produksi kopi melibatkan sekitar 1,9 juta petani
                  yang tersebar di 17 provinsi.
                </p>
                <p>
                  Namun, terdapat <strong>gap besar antara harga potensial dan harga aktual</strong> yang diterima
                  petani. Banyak petani menjual cherry atau asalan dengan harga rendah (Rp 8.000–12.000/kg)
                  karena tidak memiliki alat dan pengetahuan untuk melakukan proses pasca panen yang baik.
                  Padahal, kopi Arabika <i>specialty grade</i> bisa mencapai Rp 80.000–150.000/kg di level <i>green bean</i>.
                </p>
                <p>
                  <strong>Masalah utama</strong> yang kami identifikasi adalah pada proses pascapanen, pengeringan
                  tidak merata, sortasi manual yang lambat dan inkonsisten, serta tidak adanya kontrol kadar air
                  yang akurat. Akibatnya, kualitas biji kopi menjadi tidak konsisten dan gagal memenuhi
                  standar ekspor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TUJUAN ── */}
        <section className="objectives-section section">
          <div className="container">
            <SectionHeading eyebrow="Tujuan" title="Apa yang Ingin Kami Capai?"/>
            <div className="objectives-grid">
              <div className="objective-card">
                <div className="objective-number">01</div>
                <h3>Identifikasi Kebutuhan</h3>
                <p>
                  Mengidentifikasi kebutuhan stakeholder melalui wawancara langsung dengan petani,
                  pelaku usaha, dan pemangku kepentingan di rantai pasok kopi. Mendengarkan sebelum mengusulkan.
                </p>
              </div>
              <div className="objective-card">
                <div className="objective-number">02</div>
                <h3>Survei Teknologi</h3>
                <p>
                  Melakukan survei komprehensif terhadap teknologi pasca panen kopi yang tersedia di
                  pasaran dari yang paling sederhana hingga yang canggih lengkap dengan spesifikasi
                  detail dan perbandingan harga.
                </p>
              </div>
              <div className="objective-card">
                <div className="objective-number">03</div>
                <h3>Rekomendasi Solusi</h3>
                <p>
                  Merekomendasikan solusi teknologi yang tepat guna bukan yang paling mahal atau canggih,
                  tetapi yang paling sesuai dengan kebutuhan, budget.
                </p>
              </div>
              <div className="objective-card">
                <div className="objective-number">04</div>
                <h3>Dokumen Komprehensif</h3>
                <p>
                  Menyusun dokumen lengkap berisi solusi dan usulan berdasarkan kajian mendalam
                  sebagai acuan bagi pemerintah daerah, lembaga donor, dan koperasi dalam
                  mengalokasikan sumber daya.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* ── CTA ── */}
        <section className="about-cta section">
          <div className="container" style={{ textAlign: "center", maxWidth: "700px" }}>
            <SectionHeading title="Jelajahi Teknologi yang Kami Rekomendasikan" />
            <p style={{ color: "var(--muted)", marginBottom: "30px", lineHeight: 1.8 }}>
              Lihat katalog lengkap teknologi pasca panen kopi yang telah kami Survei
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
