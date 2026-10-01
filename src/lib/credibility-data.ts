/**
 * Data kredibilitas JohnDev — sumber tunggal untuk section WhyJohnDev.
 *
 * ATURAN KETAT: semua klaim di sini harus bisa diverifikasi dan dikonfirmasi
 * John sebelum ditunjukkan ke calon klien. Klaim yang tidak bisa dibuktikan
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
      "Sistem dibangun mengikuti alur kerja yang sudah Anda jalankan — bukan memaksa Anda menyesuaikan diri ke software.",
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
 * KEPUTUSAN John (2026-10-01): **nama klien tidak dipublikasikan.**
 * Karena itu `client` memakai label industri, bukan nama asli. Nama asli hanya
 * ada di komentar kode sebagai referensi internal — jangan dipindahkan ke
 * komponen yang ter-render ke publik.
 *
 * `published: false` = jangan tampilkan sama sekali.
 * `hiddenReason` dicatat supaya keputusan tidak hilang diam-diam.
 */
export type CaseStudy = {
  /**
   * Key unik internal. WAJIB netral (tidak boleh berisi nama klien atau brand) —
   * nilai ini ikut terkirim ke HTML sebagai atribut oleh React, jadi bisa dibaca
   * lewat View Source aunque tidak tampil di layar.
   */
  id: string;
  /** Label yang tampil ke publik. Tidak boleh berisi nama klien. */
  client: string;
  /** Periode singkat — kapan sistem ini dibuat. */
  period: string;
  /** Masalah nyata yang diselesaikan. */
  challenge: string;
  /** Hasil yang bisa diverifikasi — bukan pujian generik. */
  outcome: string;
  /** Keunggulan teknis yang membedakan dari agency biasa. */
  techHighlight: string;
  /**
   * Link publik kalau ada.
   * Kosong = studi kasus berbasis screenshot (mis. aplikasi Android yang tidak
   * dipublikasikan). Kartu akan menampilkan `proofNote` sebagai gantinya.
   */
  url?: string;
  /** Kategori tampilan: web publik atau aplikasi mobile. */
  kind: "web" | "mobile";
  /** Cara memverifikasi kalau tidak ada URL publik. */
  proofNote?: string;
  /** Status izin tampilkan. WAJIB true sebelum case dipakai di atas. */
  published: boolean;
  /** Alasan tidak ditampilkan meski published true. */
  hiddenReason?: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "print-erp",
    // Nama asli: printsmart.my.id — referensi internal, jangan dipublikasikan
    client: "Sistem Otomasi Print & ERP Internal",
    period: "Sistem produksi, 2026",
    challenge:
      "Antrean dokumen dan cetak manual. Semua order masuk lewat chat, tidak ada antrean yang tertata, dan cetak baru jalan setelah staf tahu ada order.",
    outcome:
      "Sistem self-service dengan payment gateway dan antrean dokumen otomatis. Cetak dieksekusi langsung ke printer tanpa menunggu order masuk manual.",
    techHighlight:
      "CUPS Print Server + raw printing protocol, payment gateway, dan job queue untuk antrean.",
    url: "https://printsmart.my.id",
    kind: "web",
    published: true,
  },
  {
    id: "fleet-warehouse",
    client: "Fleet & Warehouse Management",
    period: "Sistem produksi, 2026",
    challenge:
      "Manajemen armada dan gudang masih terpisah: status kendaraan, work order, inventori, dan log logistik tidak saling terhubung.",
    outcome:
      "Satu sistem untuk fleet, work order, inventori, dan log logistik dengan akses berbasis peran. Dipakai tim operasional di produksi.",
    techHighlight:
      "Laravel + PostgreSQL dengan indexing untuk query volume tinggi, plus role-based access control.",
    url: "https://ata.typeapproval.co.id",
    kind: "web",
    published: true,
  },
  {
    id: "e-voting",
    client: "Sistem E-Voting & Data Voters",
    period: "Sistem pilihan, 2025–2026",
    challenge:
      "Pemilihan kepala desa butuh rekap suara yang tidak bisa dimanipulasi, dan perbedaan hasil rekap antar petugas harus dicek otomatis.",
    outcome:
      "Validasi algoritmik otomatis plus rekap real-time untuk mencegah selisih antar kertas suara.",
    techHighlight:
      "Validasi otomatis dan tabulasi real-time dengan deteksi selisih.",
    url: "https://pilkasetda.my.id",
    kind: "web",
    published: true,
  },
  {
    id: "catering-pos",
    // Nama asli: Zaquiza Catering — referensi internal, jangan dipublikasikan
    client: "Aplikasi Kasir & Pemesanan Katering",
    period: "Aplikasi Android, 2025–2026",
    challenge:
      "Pemesanan katering masuk lewat chat, pembayaran DP tidak tercatat terpisah dari pesanan, dan tidak ada riwayat order yang bisa dilacak pelanggan maupun tim internal.",
    outcome:
      "Aplikasi Android lengkap dengan login dan registrasi, katalog menu per kategori, keranjang, pemrosesan DP, dan riwayat pesanan real-time. Pelanggan bisa memesan sendiri lewat HP.",
    techHighlight:
      "Native Android (Android Studio), optimasi query untuk data order, dan invoice terstruktur.",
    kind: "mobile",
    proofNote:
      "Aplikasi berjalan di Android dan tidak dipublikasikan ke publik. Demo layar dapat ditunjukkan saat konsultasi.",
    published: true,
  },
  {
    id: "admission-portal",
    client: "Sistem PPDB SMK",
    period: "Sistem admissions, 2025–2026",
    challenge:
      "Penerimaan siswa baru dengan verifikasi dokumen bertahap, tracking calon siswa, dan lonjakan beban database saat periode pendaftaran.",
    outcome:
      "Pipeline verifikasi dokumen otomatis dengan tracking pendaftar yang bisa dipantau, dan database yang tetap stabil pada kondisi high-concurrency.",
    techHighlight:
      "Optimasi database untuk high-concurrency di periode pendaftaran.",
    url: "https://ppdbamanahbangsa.web.id",
    kind: "web",
    published: false,
    hiddenReason:
      "Domain tidak merespons saat dicek 2026-10-01. Digantikan studi kasus Aplikasi Kasir & Pemesanan Katering.",
  },
] as const;

/** Studi kasus yang boleh ditampilkan (sudah disetujui & terverifikasi). */
export const publishedCaseStudies = caseStudies.filter((c) => c.published);
