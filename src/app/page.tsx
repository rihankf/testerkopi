// NOTE:
// Homepage — Halaman utama website.
// Terdiri dari 3 section: Hero (banner + CTA), Identifikasi Masalah (4 kartu masalah),
// dan Solusi Teknologi (preview 3 alat rekomendasi).
// Data diambil dari @/data/content (tools & problems).

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import CatalogCard from "@/components/ui/CatalogCard";
import ProblemCard from "@/components/ui/ProblemCard";
import { tools, problems } from "@/data/content";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-page">
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
              teknologi pengeringan, pemilahan, dan pengukuran untuk
              meningkatkan kualitas kopi.
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

        <section
          className="problems-section section"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="container">
            <SectionHeading
              eyebrow="Identifikasi Masalah"
              title="Tantangan Pasca Panen Kopi Indonesia"
            />
            <p
              className="problems-subtitle"
              style={{
                textAlign: "center",
                margin: "20px auto 60px",
                maxWidth: "900px",
                lineHeight: 1.8,
                color: "var(--muted)",
              }}
            >
              Pembahasan berfokus pada kendala utama petani yaitu pada proses
              pascapanen, terutama pada tahap pengeringan, pengukuran kadar air,
              dan pemilahan kualitas biji kopi.
            </p>
            <div
              className="problems-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "30px",
                marginBottom: "80px",
              }}
            >
              {problems.map((problem, i) => (
                <ProblemCard key={i} problem={problem} />
              ))}
            </div>
          </div>
        </section>

        <section className="catalog section">
          <div className="container">
            <SectionHeading
              eyebrow="Solusi Teknologi"
              title="Alat Utama yang Direkomendasikan"
            />
            <p className="catalog-subtitle">
              Berdasarkan identifikasi masalah, berikut adalah teknologi tepat
              guna yang kami rekomendasikan. Setiap alat telah melalui survei
              harga dan perbandingan spesifikasi di pasaran.
            </p>
            <div className="catalog-grid">
              {tools.slice(0, 5).map((tool) => (
                <CatalogCard key={tool.slug} tool={tool} />
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
