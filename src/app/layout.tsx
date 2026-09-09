/**
 * ROOT LAYOUT — Template utama yang membungkus semua halaman.
 * - Menyisipkan Google Fonts (Montserrat & Roboto)
 * - Menyisipkan globals.css (design system)
 * - Mengatur metadata SEO default (title & description)
 * - lang="id" untuk accessibility Bahasa Indonesia
 */
import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
