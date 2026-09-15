// NOTE:
// Root Layout — Template utama pembungkus semua halaman.
// Menyisipkan Google Fonts (Montserrat & Roboto), globals.css (design system),
// metadata SEO default (title & description), dan lang="id" untuk aksesibilitas.

import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Teknologi Tepat Guna",
  description:
    "Platform sistem informasi dan katalog teknologi pasca panen kopi. Mengidentifikasi kebutuhan stakeholder dan merekomendasikan solusi yang terjangkau berdasarkan kajian mendalam.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
