/**
 * HALAMAN ARTIKEL — /[slug]
 * Dynamic route untuk menampilkan artikel kajian.
 * Menggunakan generateStaticParams() untuk pre-render semua slug artikel.
 * Menampilkan: breadcrumb, judul, cover image, konten paragraf, tags, navigasi prev/next, related articles.
 */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import { articles } from "@/data/content";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = articles.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const article = articles[index];
  const previous = articles[index - 1];
  const next = articles[index + 1];
  const related = articles.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="article-page">
        <section className="article-hero">
          <div className="container article-hero-copy">
            <nav className="breadcrumbs dark-crumb" aria-label="Breadcrumb">
              <Link href="/">Beranda</Link>
              <span>•</span>
              <Link href="/">Studi Kajian</Link>
              <span>•</span>
              <span>Artikel</span>
            </nav>
            <p className="detail-kicker dark">Studi Kajian Maganghub</p>
            <h1>{article.title}</h1>
            <div className="article-byline">
              <span className="author-mark">M</span>
              <div>
                <strong>Tim Maganghub</strong>
                <span>
                  {article.date} &nbsp;•&nbsp; 5 menit baca
                </span>
              </div>
            </div>
          </div>
        </section>
        <article className="container article-shell">
          <div className="article-cover">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 900px) 100vw, 1180px"
              priority
            />
          </div>
          <div className="article-layout">
            <aside className="share-column">
              <span>Bagikan</span>
              <a href="https://facebook.com" aria-label="Bagikan di Facebook">
                f
              </a>
              <a href="https://linkedin.com" aria-label="Bagikan di LinkedIn">
                in
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(article.title)}`}
                aria-label="Bagikan via email"
              >
                ✉
              </a>
            </aside>
            <div className="article-content enriched">
              <p className="article-lead">{article.content[0]}</p>
              <blockquote>
                Teknologi tepat guna bukan tentang yang tercanggih, tapi yang
                paling sesuai dengan kebutuhan dan konteks lokal.
              </blockquote>
              {article.content.slice(1).map((paragraph, i) => (
                <section key={i}>
                  {(i === 0 || i === 2) && (
                    <h2>
                      {i === 0
                        ? "Analisis & Temuan Kunci"
                        : "Implikasi & Langkah Selanjutnya"}
                    </h2>
                  )}
                  <p>{paragraph}</p>
                </section>
              ))}
              <div className="article-tags">
                <span>Maganghub</span>
                <span>Kopi</span>
                <span>Teknologi Tepat Guna</span>
                <span>Pasca Panen</span>
              </div>
            </div>
          </div>
          <nav className="post-nav">
            {previous ? (
              <Link href={`/${previous.slug}`}>
                <small>Artikel sebelumnya</small>
                <strong>← {previous.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/${next.slug}`}>
                <small>Artikel berikutnya</small>
                <strong>{next.title} →</strong>
              </Link>
            )}
          </nav>
        </article>
        <section className="article-related">
          <div className="container">
            <div className="related-heading">
              <div>
                <p className="detail-kicker dark">Baca juga</p>
                <h2>Kajian Lainnya</h2>
              </div>
              <Link href="/" className="text-link">
                Semua kajian <span>↗</span>
              </Link>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <Link
                  href={`/${item.slug}`}
                  className="related-card"
                  key={item.slug}
                >
                  <div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="33vw"
                    />
                  </div>
                  <span>{item.date}</span>
                  <h3>{item.title}</h3>
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
