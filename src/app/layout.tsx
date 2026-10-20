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
    default: "JohnDev — Jasa Pembuatan Aplikasi Kasir POS, ERP Custom & Website Bisnis",
    template: "%s | JohnDev Software House",
  },
  description:
    "Software house & jasa pembuatan aplikasi kasir POS custom sekali bayar, sistem ERP kustom, aplikasi mobile Android native, dan website company profile profesional teroptimasi SEO di Cikarang, Bekasi, Jabodetabek.",
  applicationName: siteConfig.name,
  keywords: [
    "jasa pembuatan aplikasi kasir pos",
    "jasa aplikasi kasir pos custom",
    "software kasir toko tanpa langganan",
    "aplikasi kasir umkm sekali bayar",
    "sistem manajemen stok barang gudang",
    "dashboard laporan penjualan harian real-time",
    "integrasi payment gateway qris midtrans",
    "jasa bikin erp custom",
    "jasa pembuatan sistem erp custom",
    "software erp gudang dan manufaktur lokal",
    "sistem manajemen spk",
    "integrasi printer thermal cups",
    "sistem otomasi cetak kiosk self-service",
    "role-based access control rbac postgresql",
    "jasa buat aplikasi android",
    "jasa pembuatan aplikasi mobile perusahaan",
    "developer aplikasi android native",
    "aplikasi tracking pesanan dan inventaris",
    "publikasi aplikasi google play store",
    "jasa pembuatan website company profile",
    "jasa pembuatan website company profile bisnis",
    "jasa bikin web profesional",
    "landing page responsif mobile-friendly",
    "web portofolio bisnis teroptimasi seo",
    "domain dan hosting ssl gratis",
    "software house murah bekasi",
    "software house cikarang bekasi",
    "software house system integrator bekasi jabodetabek",
    "jasa web developer cikarang bekasi",
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
    title: "JohnDev — Jasa Pembuatan Aplikasi Kasir POS, ERP Custom & Website Bisnis",
    description:
      "Jasa pembuatan aplikasi kasir POS custom sekali bayar, software ERP gudang, aplikasi Android native, dan website company profile profesional di Cikarang, Bekasi, Jabodetabek.",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "JohnDev — Jasa Pembuatan Aplikasi Kasir POS, ERP Custom & Website Bisnis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JohnDev — Jasa Pembuatan Aplikasi Kasir POS, ERP Custom & Website Bisnis",
    description:
      "Jasa pembuatan aplikasi kasir POS custom, software ERP pergudangan, aplikasi mobile Android, dan website company profile di Bekasi & Jabodetabek.",
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
 * JSON-LD Schema.org — ProfessionalService & OfferCatalog
 * Memberi sinyal kaya ke Googlebot untuk Rich Snippets (Layanan, Harga, Lokasi, Kontak).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  description:
    "Software house dan jasa pembuatan aplikasi kasir POS custom sekali bayar, sistem ERP kustom, aplikasi mobile Android native, dan website company profile profesional.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/johndev-icon-transparent.png`,
  image: `${siteConfig.url}/og-image`,
  telephone: `+${siteConfig.contact.whatsapp}`,
  email: siteConfig.contact.email,
  priceRange: "Rp 2.500.000 - Rp 25.000.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cikarang",
    addressLocality: "Cikarang, Kabupaten Bekasi",
    addressRegion: "Jawa Barat",
    postalCode: "17530",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.3056,
    longitude: 107.1511,
  },
  areaServed: [
    { "@type": "City", name: "Bekasi" },
    { "@type": "City", name: "Cikarang" },
    { "@type": "City", name: "Jakarta" },
    { "@type": "Country", name: "Indonesia" },
  ],
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Rekayasa Perangkat Lunak JohnDev",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Pembuatan Website & Company Profile Bisnis",
          description: "Jasa bikin website company profile profesional, landing page responsif mobile-friendly, teroptimasi SEO Googlebot dengan SSL gratis.",
        },
        price: "2500000",
        priceCurrency: "IDR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Aplikasi Kasir POS & Sistem Manajemen Toko",
          description: "Software aplikasi kasir POS toko UMKM sekali bayar tanpa langganan, manajemen stok barang gudang, dashboard laporan penjualan, dan integrasi QRIS Midtrans.",
        },
        price: "9000000",
        priceCurrency: "IDR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Pembuatan Aplikasi Mobile Android (Custom App)",
          description: "Jasa pembuatan aplikasi Android native untuk tim operasional lapangan, sales, dan pelanggan dengan publikasi Google Play Store.",
        },
        price: "11000000",
        priceCurrency: "IDR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Pembuatan Sistem ERP Kustom & Otomasi Hardware (IoT)",
          description: "Software ERP kustom pergudangan, manufaktur, otomasi kiosk self-service, integrasi CUPS print server printer thermal, dan database PostgreSQL.",
        },
        price: "22500000",
        priceCurrency: "IDR",
      },
    ],
  },
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
