/**
 * HALAMAN MITRA — /mitra
 * Menampilkan informasi mitra kerjasama (BPVP Bandung Barat).
 * Layout: background image desaturated + glassmorphism card.
 */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";

export default function MitraPage() {
  return (
    <>
      <Header />
      <main className="inner-page">
        <section className="commodities section" style={{ position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/bg-mitra.jpg')", // Pastikan gambar disimpan di public/images/bg-mitra.jpg
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0.3)", // Mengurangi saturasi gambar
            zIndex: 0,
            opacity: 0.6 // Transparansi agar teks tetap terbaca
          }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto", padding: "50px 40px", background: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(10px)", border: "1px solid var(--border)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-lg)" }}>
              {/* Logo Kiri Atas */}
              <img 
                src="/images/logo-kemnaker.png" 
                alt="Logo Kementerian Ketenagakerjaan" 
                style={{ position: "absolute", top: "25px", left: "30px", height: "50px", width: "auto" }} 
              />
              <div style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "28px", fontWeight: 700, margin: "0" }}>Mitra Kerjasama</h2>
                <div style={{ width: "40px", height: "1px", background: "var(--sand)", margin: "15px auto 0" }} />
              </div>
              <div className="about-copy" style={{ marginTop: "10px", maxWidth: "800px", marginInline: "auto", textAlign: "center" }}>
                <div>
                  <h3 style={{ fontSize: "36px", fontFamily: "Outfit", margin: "0 0 15px", color: "var(--ink)" }}>BPVP Bandung Barat</h3>
                  <p style={{ color: "var(--muted)", marginBottom: "25px", fontSize: "15px", lineHeight: 1.6 }}>
                    Balai Pelatihan Vokasi dan Produktivitas Bandung Barat yang berfokus pada pengembangan SDM dan inovasi teknologi
                  </p>
                  <a href="https://bpvpbandungbarat.kemnaker.go.id/" target="_blank" rel="noopener noreferrer" className="button">
                    Kunjungi Website BPVP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
