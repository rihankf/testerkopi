/**
 * HALAMAN DETAIL PRODUK — /product/[slug]
 * Dynamic route untuk menampilkan detail setiap alat teknologi.
 * Menggunakan generateStaticParams() untuk pre-render semua slug produk.
 * Menampilkan: hero, problem statement, deskripsi + spesifikasi teknis, alat lainnya.
 * Data comparisons (perbandingan harga) tersedia tapi belum ditampilkan di UI.
 */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import { tools } from "@/data/content";

export function generateStaticParams() {
  return tools.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);
  if (!tool) notFound();
  const related = tools.filter((item) => item.slug !== slug);

  return (
    <>
      <Header />
      <main className="product-page">
        {/* ── HERO ── */}
        <section className="product-hero">
          <Image
            src={tool.image}
            alt=""
            fill
            sizes="100vw"
            className="product-hero-bg"
            priority
          />
          <div className="product-hero-overlay" />
          <div className="container product-hero-inner">
            <p className="detail-kicker">{tool.category}</p>
            <h1>{tool.name}</h1>
            <p>Range harga: {tool.priceRange}</p>
          </div>
        </section>

        {/* ── PROBLEM STATEMENT ── */}
        <section className="tool-problem section" style={{ padding: "40px 0" }}>
          <div className="container tool-problem-grid">
            <div>
              <p className="detail-kicker dark">Masalah yang Dihadapi Petani</p>
              <h2>Mengapa Alat Ini Dibutuhkan?</h2>
            </div>
            <div className="problem-content">
              <div className="problem-icon">⚠️</div>
              <p>{tool.problem}</p>
            </div>
          </div>
        </section>

        {/* ── DESKRIPSI SOLUSI ── */}
        <section className="container product-story" style={{ marginTop: "0" }}>
          <div className="product-showcase">
            <div className="product-main-image">
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                sizes="(max-width: 800px) 100vw, 47vw"
              />
            </div>
            <div className="quality-stamp">
              <strong>✓</strong>
              <span>
                Tepat
                <br />
                Guna
              </span>
            </div>
          </div>
          <article className="detail-copy">
            <p className="detail-kicker dark">Solusi Teknologi</p>
            <h2>Deskripsi Alat</h2>
            <p className="lead">{tool.description}</p>
            {/* Spesifikasi digabung di bawahnya */}
            <h3 className="detail-subtitle" style={{ marginTop: "30px", marginBottom: "15px" }}>Spesifikasi Teknis</h3>
            <div className="specs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              {tool.specs.map((s, i) => (
                <div className="spec-item" key={i} style={{ padding: "15px", border: "1px solid var(--border)", borderRadius: "8px", background: "var(--cream)" }}>
                  <span className="spec-label" style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "4px" }}>{s.label}</span>
                  <strong className="spec-value" style={{ display: "block", fontSize: "14px", color: "var(--ink)" }}>{s.value}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>



        {/* ── ALAT LAINNYA ── */}
        <section className="related-section container" style={{ marginTop: "60px", marginBottom: "60px" }}>
          <div className="related-heading">
            <div>
              <p className="detail-kicker dark">Katalog Lainnya</p>
              <h2 className="related-title">Teknologi Lainnya</h2>
            </div>
            <Link href="/teknologi" className="text-link">
              Lihat semua alat <span>→</span>
            </Link>
          </div>
          <div className="related-grid">
            {related.slice(0, 3).map((item) => (
              <Link
                href={`/product/${item.slug}`}
                className="related-card"
                key={item.slug}
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="50vw"
                  />
                </div>
                <span>{item.category}</span>
                <h3>{item.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
