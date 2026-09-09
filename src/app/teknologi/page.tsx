/**
 * HALAMAN TEKNOLOGI — /teknologi
 * Menampilkan katalog lengkap semua alat teknologi dengan fitur search/filter.
 * Ini adalah client component ("use client") karena menggunakan useState untuk search.
 */
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import { tools } from "@/data/content";
import { useState } from "react";

export default function TeknologiPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  
  const categories = ["Semua", "Pengeringan", "Pengukuran", "Pemilahan"];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
                          tool.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className="inner-page">
        <section className="catalog section">
          <div className="container">
            <SectionHeading
              eyebrow=""
              title="Katalog Teknologi Alat"
            />
            <p className="catalog-subtitle" style={{ marginBottom: "20px" }}>
              Alat utama yang direkomendasikan
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
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
                  boxShadow: "0 2px 8px rgba(255, 154, 0, 0.3)"
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
                style={{ width: "100%", padding: "14px 20px", borderRadius: "30px", border: "1px solid var(--border)", fontSize: "15px", outline: "none", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", marginBottom: "25px" }}
              />
              
              {/* Kategori Filter */}
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "20px",
                      border: "1px solid var(--border)",
                      backgroundColor: activeCategory === cat ? "var(--ink)" : "transparent",
                      color: activeCategory === cat ? "var(--cream)" : "var(--ink)",
                      cursor: "pointer",
                      fontWeight: activeCategory === cat ? "600" : "normal",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="catalog-grid">
              {filteredTools.map((tool) => (
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
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
