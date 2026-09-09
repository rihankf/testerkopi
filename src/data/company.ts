import type { TeamMember, ContactLocation } from "@/types";

// ══════════════════════════════════════════════════════════
// TIM MAGANGHUB & LOKASI KONTAK
// Data anggota tim dan alamat kontak.
// Ditampilkan di halaman /kontak (lokasi).
// ══════════════════════════════════════════════════════════
export const team: TeamMember[] = [
  {
    name: "Hana",
    role: "Researcher — Pengeringan",
    focus: "Sun Dryer (Pengering Surya)",
    image: "/images/team-stephany.jpg",
  },
  {
    name: "Putri",
    role: "Researcher — Pemilahan",
    focus: "Alat Pemilah Biji Kopi",
    image: "/images/team-nadira.jpeg",
  },
  {
    name: "Aul",
    role: "Researcher — Pengukuran",
    focus: "Alat Pengukur Kadar Air",
    image: "/images/team-philipe.jpeg",
  },
  {
    name: "Rihan",
    role: "Developer — Sistem Informasi",
    focus: "Website & Katalog Digital",
    image: "/images/gallery-7.jpg",
  },
];

export const locations: ContactLocation[] = [
  {
    title: "Kampus Utama",
    address: "Universitas Indonesia, Depok, Jawa Barat, Indonesia",
    email: "maganghub@university.ac.id",
  },
  {
    title: "Lokasi Riset",
    address: "Kawasan Perkebunan Kopi, Indonesia",
    email: "riset@maganghub.id",
  },
];
