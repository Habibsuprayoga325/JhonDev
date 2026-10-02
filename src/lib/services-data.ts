/**
 * Katalog layanan JohnDev.
 *
 * Dipakai oleh section Layanan (Step 2.2) dan Pricing (Step 4.1).
 * Sumber: PRD FR-03.
 *
 * Atrium harga —WAJIB format "mulai dari", bukan angka pasti:
 * harga custom sangat bergantung pada scope, dan angka yang kaku
 * di website cepat basi serta berisiko salah janji.
 */

export type ServiceCategory = {
  /** Slug untuk anchor link (#layanan) dan key rendering. */
  id: string;
  /** Nama layanan — yang dilihat klien. */
  title: string;
  /** Satu kalimat: masalah apa yang diselesaikan. */
  description: string;
  /** Contoh hasil konkret, supaya tidak terasa kosmetik. */
  examples: readonly string[];
  /** Rentang harga "mulai dari". String, bukan number — format varies. */
  priceFrom: string;
  /** Ikon SVG key — dipetakan ke komponen di service-card.tsx. */
  icon: ServiceIcon;
  /** Label pendek untuk badge filter kategori. */
  badge: string;
};

export type ServiceIcon =
  | "globe"
  | "pos"
  | "erp"
  | "mobile"
  | "saas"
  | "iot"
  | "crm"
  | "api";

export const services: readonly ServiceCategory[] = [
  {
    id: "company-profile",
    title: "Company Profile & Landing Page",
    description:
      "Website yang menempatkan bisnis Anda di posisi yang tepat — cepat, rapi di HP, dan siap dari sisi SEO.",
    examples: [
      "Company profile korporat",
      "Landing page kampanye / promosi",
      "Portofolio & katalog produk",
    ],
    priceFrom: "Rp 2,5 juta",
    icon: "globe",
    badge: "Web",
  },
  {
    id: "pos",
    title: "Point of Sale (POS)",
    description:
      "Kasir yang tetap jalan saat internet mati, dengan sinkronisasi otomatis saat koneksi kembali.",
    examples: [
      "Kasir Android untuk warung & cafe",
      "Integrasi payment gateway",
      "Cetak struk ke printer thermal",
    ],
    priceFrom: "Rp 7,5 juta",
    icon: "pos",
    badge: "Operasional",
  },
  {
    id: "erp",
    title: "ERP Custom",
    description:
      "Modul operasional yang mengikuti alur kerja Anda — bukan paket bawaan yang harus dibelajarkan ulang.",
    examples: [
      "Manajemen gudang & inventori",
      "Fleet & logistik",
      "Modul kustom Odoo",
    ],
    priceFrom: "Rp 22,5 juta",
    icon: "erp",
    badge: "Enterprise",
  },
  {
    id: "mobile",
    title: "Aplikasi Mobile",
    description:
      "Aplikasi untuk tim lapangan dan pelanggan — Android native maupun Flutter lintas platform.",
    examples: [
      "Aplikasi kasir & order",
      "App operasional dengan role berbeda",
      "Integrasi dengan sistem web",
    ],
    priceFrom: "Rp 11 juta",
    icon: "mobile",
    badge: "Mobile",
  },
  {
    id: "saas",
    title: "SaaS & Multi-Tenant",
    description:
      "Produk berlangganan dengan isolasi data per pelanggan, tagihan, dan dashboard admin.",
    examples: [
      "Aplikasi berlangganan",
      "Multi-tenant dengan isolasi data",
      "Billing & subscription management",
    ],
    priceFrom: "Rp 18 juta",
    icon: "saas",
    badge: "Produk",
  },
  {
    id: "iot",
    title: "IoT & Integrasi Hardware",
    description:
      "Menyambungkan sistem digital ke perangkat di lapangan — printer, scanner, timbangan, sensor.",
    examples: [
      "Auto-print dari server (CUPS)",
      "Integrasi printer kasir & timbangan digital",
      "Sensor & monitoring perangkat",
    ],
    priceFrom: "Rp 9 juta",
    icon: "iot",
    badge: "Hardware",
  },
  {
    id: "crm",
    title: "CRM & CMS",
    description:
      "Menjaga relasi pelanggan dan konten marketing tetap terhubung dengan operasional harian.",
    examples: [
      "CRM untuk tim sales",
      "CMS untuk konten & blog",
      "Otomasi follow-up pelanggan",
    ],
    priceFrom: "Rp 9 juta",
    icon: "crm",
    badge: "Marketing",
  },
  {
    id: "integration",
    title: "Integrasi Sistem & API",
    description:
      "Menyambung sistem lama yang sudah jalan ke sistem baru, tanpa harus ganti semuanya.",
    examples: [
      "API gateway antar sistem",
      "Migrasi data dari sistem lama",
      "Integrasi payment & logistics",
    ],
    priceFrom: "Rp 6,5 juta",
    icon: "api",
    badge: "Integrasi",
  },
] as const;

/** Badge unik untuk filter — urut sesuai kemunculan pertama. */
export const serviceBadges = Array.from(
  new Set(services.map((s) => s.badge)),
);
