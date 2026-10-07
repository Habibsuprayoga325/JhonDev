import type { Metadata } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/lib/site-config";

const onestSans = Onest({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Metadata default untuk seluruh halaman.
 *
 * `metadataBase` membuat URL absolut untuk canonical, Open Graph, dan
 * sitemap. HARUS sesuai domain produksi — kalau salah, semua URL absolut
 * (termasuk yang dibagikan ke WhatsApp) akan menunjuk host yang keliru.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "JohnDev — Sistem Operasional Bisnis Otomatis",
    template: "%s | JohnDev",
  },
  description:
    "Berhenti mengelola bisnis di WhatsApp, buku, dan catatan. JohnDev membangun aplikasi web & mobile, ERP, POS, dan integrasi printer kasir yang disesuaikan dengan alur kerja bisnis Anda.",
  applicationName: siteConfig.name,
  keywords: [
    "developer Indonesia",
    "software house Indonesia",
    "ERP custom",
    "POS system Indonesia",
    "landing page bisnis",
    "integrasi printer kasir",
    "aplikasi kasir Android",
    "sistem operasional bisnis",
  ],
  authors: [{ name: "John — JohnDev", url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "JohnDev — Sistem Operasional Bisnis Otomatis",
    description:
      "Berhenti mengelola bisnis di WhatsApp, buku, dan catatan. POS, ERP, aplikasi mobile, dan integrasi printer kasir yang mengikuti alur kerja bisnis Anda.",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "JohnDev — Sistem Operasional Bisnis Otomatis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JohnDev — Sistem Operasional Bisnis Otomatis",
    description:
      "POS, ERP, aplikasi mobile, dan integrasi printer kasir untuk bisnis Anda.",
    images: ["/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/johndev-icon-transparent.png", type: "image/png" },
    ],
    shortcut: "/johndev-icon-transparent.png",
    apple: "/johndev-icon-transparent.png",
  },
};

/**
 * JSON-LD LocalBusiness — membantu Google menampilkan kartu bisnis di
 * hasil pencarian (nama, telepon, lokasi).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  description:
    "Pembuat perangkat lunak: company profile, ERP, POS, aplikasi mobile, dan integrasi hardware/IoT.",
  url: siteConfig.url,
  telephone: `+${siteConfig.contact.whatsapp}`,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cikarang",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  areaServed: { "@type": "Country", name: "Indonesia" },
  knowsLanguage: ["id-ID", "en"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${onestSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Lewati ke konten utama
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          // Isi di bawah literal yang dikontrol developer, bukan input
          // pengguna — tidak ada risiko injeksi di sini.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
