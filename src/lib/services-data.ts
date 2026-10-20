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
    title: "Website & Company Profile Bisnis",
    description:
      "Jasa pembuatan website company profile dan landing page profesional responsif, cepat diakses dari HP, dan teroptimasi SEO Google.",
    examples: [
      "Company profile korporat & portofolio bisnis",
      "Landing page promosi mobile-friendly",
      "Katalog produk terintegrasi WhatsApp",
    ],
    priceFrom: "Rp 2,5 juta",
    icon: "globe",
    badge: "Web",
  },
  {
    id: "pos",
    title: "Aplikasi Kasir POS & Manajemen Toko",
    description:
      "Software kasir POS toko sekali bayar tanpa langganan bulanan, tetap beroperasi saat offline, dengan rekap transaksi otomatis.",
    examples: [
      "Kasir POS warung, cafe, resto & retail",
      "Integrasi QRIS Midtrans & cetak struk thermal",
      "Laporan penjualan harian & stok barang real-time",
    ],
    priceFrom: "Rp 7,5 juta",
    icon: "pos",
    badge: "Operasional",
  },
  {
    id: "erp",
    title: "Sistem ERP Kustom & Pergudangan",
    description:
      "Jasa pembuatan sistem ERP custom untuk manajemen gudang, manufaktur, dan alur kerja operasional unik tanpa batasan software bawaan.",
    examples: [
      "Manajemen inventori gudang & logistik",
      "Sistem Surat Perintah Kerja (SPK) & produksi",
      "Role-Based Access Control (RBAC) database PostgreSQL",
    ],
    priceFrom: "Rp 22,5 juta",
    icon: "erp",
    badge: "Enterprise",
  },
  {
    id: "mobile",
    title: "Aplikasi Mobile Android (Custom App)",
    description:
      "Jasa buat aplikasi Android native yang ringan, stabil, dan terhubung langsung ke database cloud untuk tim sales dan pelanggan.",
    examples: [
      "Aplikasi katalog menu & pemesanan mandiri",
      "Aplikasi tracking operasional sales lapangan",
      "Publikasi siap tayang di Google Play Store",
    ],
    priceFrom: "Rp 11 juta",
    icon: "mobile",
    badge: "Mobile",
  },
  {
    id: "saas",
    title: "SaaS & Platform Multi-Tenant",
    description:
      "Pengembangan aplikasi web berbasis langganan dengan isolasi database per pelanggan, auto-billing, dan dashboard superadmin.",
    examples: [
      "Aplikasi bisnis model SaaS berlangganan",
      "Arsitektur multi-tenant data terisolasi",
      "Integrasi payment gateway recurring billing",
    ],
    priceFrom: "Rp 18 juta",
    icon: "saas",
    badge: "Produk",
  },
  {
    id: "iot",
    title: "Otomasi Hardware & Kiosk IoT",
    description:
      "Integrasi sistem perangkat lunak ke perangkat keras lapangan: printer kasir thermal, barcode scanner, timbangan digital, dan kiosk cetak.",
    examples: [
      "Auto-print server CUPS & nota antrean",
      "Integrasi scanner barcode & timbangan gudang",
      "Sistem kiosk self-service otomatis",
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
