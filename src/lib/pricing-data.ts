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
    name: "Jasa Pembuatan Website & Company Profile Bisnis",
    bestFor: "UMKM & perusahaan yang butuh kehadiran web resmi terpercaya, siap iklan, dan terindeks Google",
    priceFrom: "Rp 2,5 juta",
    includes: [
      "Landing page & company profile profesional responsif mobile-friendly",
      "Struktur SEO on-page ramah Googlebot & meta tag siap indeks",
      "Domain resmi (.com / .id), hosting cloud cepat & sertifikat SSL gratis",
      "Form kontak dinamis langsung terhubung ke WhatsApp bisnis",
      "Katalog produk / portofolio layanan interaktif",
      "Garansi pemeliharaan & pendampingan teknis 14 hari",
    ],
    excludes: [
      "Sistem kasir transaksi",
      "Database inventori gudang",
      "Aplikasi mobile Android",
    ],
  },
  {
    id: "system",
    name: "Jasa Aplikasi Kasir POS & Sistem Manajemen Toko",
    bestFor: "Pemilik toko retail, resto, cafe, katering, & gerai yang butuh kasir sekali bayar tanpa langganan",
    priceFrom: "Rp 9 juta",
    popular: true,
    includes: [
      "Semua fitur Website & Company Profile",
      "Software aplikasi kasir POS UMKM sekali bayar (tanpa biaya langganan)",
      "Sistem manajemen stok barang & mutasi inventori gudang real-time",
      "Dashboard laporan penjualan harian & rekap omset otomatis",
      "Integrasi cetak struk nota printer thermal (USB / Bluetooth)",
      "Integrasi payment gateway QRIS otomatis (Midtrans / Xendit)",
      "Pelatihan operasional kasir & garansi perbaikan bug 3 bulan",
    ],
    excludes: [
      "Multi-cabang enterprise skala besar",
      "Integrasi timbangan / sensor mesin pabrik",
      "Aplikasi mobile Android native",
    ],
  },
  {
    id: "mobile",
    name: "Jasa Pembuatan Aplikasi Mobile Android (Custom App)",
    bestFor: "Bisnis dengan tim sales lapangan, kurir pengiriman, atau pelanggan yang butuh pesan via HP",
    priceFrom: "Rp 11 juta",
    includes: [
      "Developer aplikasi Android native (performa cepat, ringan, & stabil)",
      "Sistem login pengguna & otentikasi hak akses per peran (Role-Based)",
      "Sinkronisasi database real-time dengan server sistem web bisnis",
      "Fitur katalog menu, tracking pesanan & notifikasi transaksi",
      "Bantuan teknis build & publikasi ke Google Play Store",
      "Pelatihan penggunaan aplikasi untuk tim lapangan & owner",
      "Garansi penanganan bug & dukungan teknis 3 bulan",
    ],
    excludes: [
      "Aplikasi iOS (Apple App Store)",
      "Integrasi mesin printer thermal khusus",
    ],
  },
  {
    id: "enterprise",
    name: "Jasa Pembuatan Sistem ERP Kustom & Otomasi Hardware (IoT)",
    bestFor: "Perusahaan manufaktur, distributor logistik, & gerai besar yang butuh otomasi mesin & SPK",
    priceFrom: "Rp 22,5 juta",
    includes: [
      "Semua kapabilitas paket sistem sebelumnya",
      "Software ERP kustom: modul gudang, SPK (Surat Perintah Kerja) & armada",
      "Integrasi hardware: CUPS print server, printer thermal, timbangan & sensor",
      "Arsitektur multi-cabang & Role-Based Access Control (RBAC) PostgreSQL",
      "Sistem otomasi cetak kiosk self-service & antrean otomatis",
      "Migrasi data dari Excel atau sistem lama tanpa kehilangan riwayat",
      "Pelatihan lanjutan tim manajemen, dokumen SOP & garansi 6 bulan",
    ],
    excludes: [
      "Pengadaan fisik perangkat keras (printer/mesin dibeli mandiri)",
    ],
  },
] as const;
