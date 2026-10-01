/**
 * Data kredibilitas JohnDev — sumber tunggal untuk section WhyJohnDev.
 *
 * ATURAN KETAT: semua klaim di sini harus bisa diverifikasi dan dikonfirmasi John
 * sebelum ditunjukkan ke calon klien. Klaim yang tidak bisa dibuktikan
 * adalah liability, bukan aset — lihat PRD §1.2 dan R1 di §10.
 */

export type PainPoint = {
  /** Masalah yang dialami calon klien setiap hari. */
  problem: string;
  /** Bagaimana JohnDev menyelesaikannya — konkret, bukan slogan. */
  solution: string;
};

export const painPoints: readonly PainPoint[] = [
  {
    problem: "Order datang dari mana-maja, tidak ada satu pun datanya.",
    solution:
      "Semua order masuk ke satu sistem — web, kasir, dan WhatsApp alike — dengan stok yang langsung terpotong otomatis.",
  },
  {
    problem: "Laporan penjualan harus dihitung manual, tutup buku jam 11 malam.",
    solution:
      "Dashboard menampilkan angka real-time. Anda tidak lagi menyusun laporan; laporannya sudah jadi.",
  },
  {
    problem: "Software bawaan terlalu berat, atau tidak cocok dengan cara kerja tim Anda.",
    solution:
      "Sistem dibangun mengikuti alur kerja yang sudah Anda jalankan — bukan memaksa Anda adapting ke software.",
  },
  {
    problem: "Integrasi ke printer, timbangan, atau scanner dianggap mustahil.",
    solution:
      "Ini kekuatan kami. Sistem digital kami sambung langsung ke perangkat di lapangan, bukan berhenti di layar.",
  },
] as const;

/**
 * Studi kasus dari sistem yang benar-benar berjalan.
 *
 * `published: false` = jangan tampilkan nama klien sebelum ada izin.
 * Aturan ini menentukan Risiko R1 di PRD §10 — jangan dihapus.
 */
export type CaseStudy = {
  id: string;
  /** Nama yang ditampilkan. Tetap publik-sembunyi kalau belum ada izin. */
  client: string;
  /** Linha waktu singkat — kapan, sudah berapa lama. */
  period: string;
  /** Masalah nyata yangINGOINI diselesaikan. */
  challenge: string;
  /** Hasil yang bisa diverifikasi — bukan pujian generik. */
  outcome: string;
  /** Keunggulan teknis yang membedakan dari agency biasa. */
  techHighlight: string;
  /** Link publik, kalau ada dan boleh ditampilkan. */
  url?: string;
  /** Status izin tampilkan nama. WAJIB true sebelum client dipakai di atas. */
  published: boolean;
  /**
   * Alasan tidak ditampilkan meski published true.
   * Contoh: "Domain mati saat dicek 2026-10-01" — supaya keputusan ini
   * tercatat dan bisa ditinjau ulang, bukan hilang diam-diam.
   */
  hiddenReason?: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "printsmart",
    client: "PrintSmart (printsmart.my.id)",
    period: "Aktif sejak 2026",
    challenge:
      "Antrean dokumen dan cetak manual. Semua order masuk lewat chat, tidak ada antrean yang tertata, dan cetak baru jalan setelah staff tahu ada order.",
    outcome:
      "Sistem self-service dengan payment gateway dan antrean dokumen otomatis. Cetak dieksekusi langsung ke printer tanpaWaiting order masuk manual.",
    techHighlight:
      "CUPS Print Server + raw printing protocol, Payment Gateway, dan job queue untuk antrean.",
    url: "https://printsmart.my.id",
    published: true,
  },
  {
    id: "ata-galaxy",
    client: "Fleet & Warehouse Management",
    period: "Sistem produksi, 2026",
    challenge:
      "Manajemen armada dan gudang masih terpisah: status kendaraan, work order, inventori, dan log logistik tidak saling terhubung.",
    outcome:
      "Satu sistem untuk fleet, work order, inventori, dan log logistik dengan akses berbasis peran. Dipakai tim operasional di produksi.",
    techHighlight:
      "Laravel + PostgreSQL dengan indexing untuk query volume tinggi, plus role-based access control.",
    url: "https://ata.typeapproval.co.id",
    published: true,
  },
  {
    id: "pilkasetda",
    client: "Sistem E-Voting & Data Voters",
    period: "Pemilihan kepala desa, 2025–2026",
    challenge:
      "Pemilihan kepala desa butuh rekap suara yang tidak bisa dimanipulasi, dan perbedaan hasil rekap antar petugas harus dicek otomatis.",
    outcome:
      "Validasi algoritmik otomatis plus rekap real-time untuk mencegah selisih antar kertas suara.",
    techHighlight:
      "Validasi otomatis dan tabulasi real-time dengan deteksi selisih.",
    url: "https://pilkasetda.my.id",
    published: true,
  },
  {
    id: "ppdb",
    client: "Sistem PPDB SMK Amanah Bangsa",
    period: "Sistem admissions, 2025–2026",
    challenge:
      "Penerimaan siswa baru dengan verifikasi dokumen bertahap, tracking calon siswa, dan lonjakan beban database saat periode pendaftaran.",
    outcome:
      "Pipeline verifikasi dokumen otomatis dengan tracking pendaftar yang bisa dipantau, dan database yang tetap stabil pada kondisi high-concurrency.",
    techHighlight:
      "Optimasi database untuk high-concurrency di periode pendaftaran.",
    url: "https://ppdbamanahbangsa.web.id",
    published: false,
    hiddenReason: "Domain tidak merespons saat dicek 2026-10-01 — jangan tampilkan link mati ke calon klien.",
  },
] as const;

/** Studi kasus yang boleh ditampilkan (sudah dapat izin). */
export const publishedCaseStudies = caseStudies.filter((c) => c.published);

/**
 * Angka untuk trust bar. Semua harus cocok dengan CV John.
 * Jangan tambah angka tanpa bukti — ini akan diuji calon klien.
 */
export const credibilityStats = [
  { value: "4+", label: "Sistem produksi aktif hari ini" },
  { value: "6+", label: "Teknologi: web, mobile, sampai hardware" },
  { value: "1.000+", label: "Orang yang saya latih pakai teknologi ini" },
] as const;
