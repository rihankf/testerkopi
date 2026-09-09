/**
 * HALAMAN KONTAK — /kontak
 * Menampilkan informasi kontak dan lokasi tim Maganghub.
 * Data lokasi diambil dari data/company.ts.
 */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import { locations } from "@/data/content";

export default function KontakPage() {
  return (
    <>
      <Header />
      <main className="inner-page">
        <section className="contact section" id="kontak">
          <div className="container contact-grid">
            <div>
              <SectionHeading
                eyebrow="Hubungi Kami"
                title="Ingin berpartisipasi dalam asesmen?"
              />
              <p>
                Kami membutuhkan masukan dari petani, pelaku usaha, dan stakeholder
                komoditas unggulan Indonesia. Interview Anda sangat berharga untuk
                memunculkan ide dan solusi yang tepat sasaran.
              </p>
            </div>
            <div className="locations">
              {locations.map((location) => (
                <div key={location.title}>
                  <h3>{location.title}</h3>
                  <p>{location.address}</p>
                  <a href={`mailto:${location.email}`}>{location.email}</a>
                </div>
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
