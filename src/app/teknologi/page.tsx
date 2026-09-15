// NOTE:
// Halaman Teknologi (/teknologi) — Client Component.
// Menampilkan katalog lengkap alat teknologi dengan fitur search & filter kategori.
// Menggunakan "use client" karena membutuhkan useState untuk state pencarian & kategori aktif.
// Komponen yang dipakai: Header, Footer, FloatingContact, SectionHeading, CatalogCard.
// Data alat diambil dari @/data/content (tools).
// Filter kategori tersedia: Semua, Pengeringan, Pengukuran, Pemilahan.

"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import CatalogCard from "@/components/ui/CatalogCard";
import { tools } from "@/data/content";
import { useState } from "react";

export default function TeknologiPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Pengeringan", "Pengukuran", "Pemilahan"];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "Semua" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className="inner-page">
        <section className="catalog section">
          <div className="container">
            <SectionHeading eyebrow="" title="Katalog Teknologi Alat" />
            <p className="catalog-subtitle" style={{ marginBottom: "20px" }}>
              Alat utama yang direkomendasikan
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "40px",
              }}
            >
              <a
                href="/katalog-produk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  backgroundColor: "var(--sand)",
                  color: "#fff",
                  borderRadius: "20px",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(255, 154, 0, 0.3)",
                }}
              >
                Unduh Katalog Lengkap (PDF)
              </a>
            </div>

            <div style={{ maxWidth: "600px", margin: "0 auto 40px" }}>
              <input
                type="text"
                placeholder="Cari nama alat atau kategori..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: "30px",
                  border: "1px solid var(--border)",
                  fontSize: "15px",
                  outline: "none",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                  marginBottom: "25px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "20px",
                      border: "1px solid var(--border)",
                      backgroundColor:
                        activeCategory === cat ? "var(--ink)" : "transparent",
                      color:
                        activeCategory === cat ? "var(--cream)" : "var(--ink)",
                      cursor: "pointer",
                      fontWeight: activeCategory === cat ? "600" : "normal",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="catalog-grid">
              {filteredTools.map((tool) => (
                <CatalogCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
