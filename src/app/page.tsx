/**
 * HOMEPAGE — Halaman utama website.
 * Terdiri dari 3 section utama:
 *   1. Hero        — Banner fullscreen dengan CTA
 *   2. Identifikasi Masalah — 4 kartu masalah pasca panen kopi
 *   3. Solusi Teknologi     — Preview 3 alat yang direkomendasikan
 *
 * Data: tools (produk) dan problems (masalah) dari data/content.ts
 */
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  tools,
  problems,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-page">
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-shade" />
          <div className="container hero-content">
            <p className="eyebrow">Studi &amp; Kajian</p>
            <h1>
              Teknologi Tepat Guna
              <br />
              untuk Komoditas Unggulan
            </h1>
            <p className="hero-copy">
              Mengidentifikasi kebutuhan stakeholder dan merekomendasikan solusi
              teknologi pengeringan, pemilahan, dan pengukuran untuk meningkatkan kualitas kopi.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/teknologi">
                Lihat Katalog Teknologi
              </Link>
              <Link className="button button-outline" href="/tentang">
                Tentang Proyek
              </Link>
            </div>
          </div>
        </section>



        {/* ── IDENTIFIKASI MASALAH ── */}
        <section className="problems-section section" style={{ backgroundColor: "#ffffff" }}>
          <div className="container">
            <SectionHeading
              eyebrow="Identifikasi Masalah"
              title="Tantangan Pasca Panen Kopi Indonesia"
            />
            <p className="problems-subtitle" style={{ textAlign: "center", margin: "20px auto 60px", maxWidth: "900px", lineHeight: 1.8, color: "var(--muted)" }}>
              Pembahasan berfokus pada rantai pengolahan kopi dari budidaya, panen, pascapanen, hingga
              roasting. Dari seluruh tahapan tersebut, kendala utama petani berada pada proses pascapanen,
              terutama pada tahap pengeringan, pengukuran kadar air, dan pemilahan kualitas biji kopi.
            </p>
            <div className="problems-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px", marginBottom: "80px" }}>
              {problems.map((problem, i) => (
                <div className="problem-card" key={i}>
                  <div className="problem-card-icon" style={{ fontSize: "56px", marginBottom: "20px" }}>{problem.icon}</div>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                  <div className="problem-impact">
                    <strong>Dampak:</strong> {problem.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── SOLUSI TEKNOLOGI ── */}
        <section className="catalog section">
          <div className="container">
            <SectionHeading
              eyebrow="Solusi Teknologi"
              title="Alat Utama yang Direkomendasikan"
            />
            <p className="catalog-subtitle">
              Berdasarkan identifikasi masalah, berikut adalah teknologi tepat guna yang kami rekomendasikan.
              Setiap alat telah melalui survei harga dan perbandingan spesifikasi di pasaran.
            </p>
            <div className="catalog-grid">
              {tools.slice(0, 5).map((tool) => (
                <Link
                  className="catalog-card"
                  href={`/product/${tool.slug}`}
                  key={tool.slug}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div className="catalog-image" style={{ aspectRatio: '1', position: 'relative' }}>
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      sizes="(max-width: 700px) 100vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="catalog-body" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px' }}>
                    <h3 style={{
                      color: 'var(--ink)',
                      fontSize: '14px',
                      fontWeight: 700,
                      marginBottom: '8px',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {tool.name}
                    </h3>
                    
                    <div style={{ marginTop: 'auto', textAlign: 'right' }}>
                      <hr style={{ border: 'none', borderTop: '1px solid #EAEAEA', margin: '8px 0', width: '100%' }} />
                      <strong style={{ 
                        display: 'inline-block', 
                        fontSize: '13px', 
                        color: '#F97316', 
                        backgroundColor: '#FFEDD5',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontWeight: 700 
                      }}>
                        {tool.priceRange}
                      </strong>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="catalog-cta">
              <Link className="button" href="/teknologi">
                Lihat Katalog Produk
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
