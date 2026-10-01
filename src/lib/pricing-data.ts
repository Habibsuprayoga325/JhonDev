/**
 * Paket harga JohnDev untuk section Pricing (PRD FR-05).
 *
 * ANGKA DISINKRONKAN DENGAN `services-data.ts` \u2014 kalau harga di sana berubah,
 *ubah di sini juga. Both files memakai angka yang sama per layanan.
 *
 * Prinsip: harga expressed sebagai "mulai dari", dengan disclaimer di bawah grid.
 * Angka custom berubah tergantung scope; angka kaku di website cepat basi.
 */

export type PricingTier = {
  id: string;
  name: string;
  /** Untuk siapa paket ini \u2014 helps klien memilih tanpa perlu bertanya. */
  bestFor: string;
  /** Harga terendah di paket ini. */
  priceFrom: string;
  /** Apa saja yang termasuk. */
  includes: readonly string[];
  /** Apa yang TIDAK termasuk \u2014 mencegah ekspektasi salah. */
  excludes?: readonly string[];
  /** Paket yang paling sering dipilih. */
  popular?: boolean;
};

export const pricingTiers: readonly PricingTier[] = [
  {
    id: "starter",
    name: "Company Profile",
    bestFor: "Bisnis yang butuh kehadiran digital, belum butuh sistem",
    priceFrom: "Rp 2,5 juta",
    includes: [
      "Desain landing page atau company profile",
      "Desain responsif (HP, tablet, desktop)",
      "Optimasi SEO dasar",
      "Form kontak & tombol WhatsApp",
      "Sertifikat SSL",
      "Garansi revisi 14 hari",
    ],
    excludes: ["Sistem internal", "Integrasi database", "Aplikasi mobile"],
  },
  {
    id: "system",
    name: "Sistem Operasional",
    bestFor: "Pemilik usaha yang operasinya masih manual atau kacau",
    priceFrom: "Rp 9 juta",
    popular: true,
    includes: [
      "Semua yang ada di Company Profile",
      "POS atau modul operasional",
      "Dashboard laporan real-time",
      "Manajemen data produk & stok",
      "Integrasi payment gateway (opsional)",
      "Pelatihan tim dasar",
      "Dukungan teknis 3 bulan",
    ],
    excludes: ["Integrasi printer khusus", "Multi-cabang", "Aplikasi mobile"],
  },
  {
    id: "mobile",
    name: "Aplikasi Mobile",
    bestFor: "Tim lapangan atau pelanggan yang perlu akses dari HP",
    priceFrom: "Rp 11 juta",
    includes: [
      "Aplikasi Android native",
      "Login, registrasi, dan hak akses per peran",
      "Integrasi dengan sistem web yang sudah ada",
      "Riwayat & notifikasi",
      "Upload dan publikasi ke Play Store",
      "Pelatihan tim dasar",
      "Dukungan teknis 3 bulan",
    ],
    excludes: ["iOS", "Integrasi printer thermal"],
  },
  {
    id: "enterprise",
    name: "Sistem Kustom",
    bestFor: "Operasional besar dengan kebutuhan integrasi hardware",
    priceFrom: "Rp 22,5 juta",
    includes: [
      "Semua yang ada di paket sebelumnya",
      "ERP atau modul kustom sesuai proses",
      "Integrasi printer, timbangan, atau sensor",
      "Multi-cabang & multi-role",
      "Migrasi data dari sistem lama",
      "Pelatihan tim lanjutan",
      "Dukungan teknis 6 bulan",
    ],
    excludes: ["Perangkat keras (dibeli terpisah)"],
  },
] as const;
