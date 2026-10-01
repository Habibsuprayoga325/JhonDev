/**
 * Single source of truth untuk data situs yang dipakai di banyak komponen.
 * Ubah di sini saja — jangan hard-code URL/kontak di komponen.
 */

export const siteConfig = {
  name: "JohnDev",
  legalName: "JohnDev Technology Solution",
  tagline: "Modernisasi Bisnis Anda ke Digital",
  description:
    "JohnDev membantu pemilik bisnis memindahkan operasional ke digital: company profile, SaaS, ERP, POS, CRM, CMS, aplikasi mobile, dan integrasi hardware/IoT.",

  url: "https://johntech.web.id",

  contact: {
    /** Format internasional tanpa "+" dan tanpa spasi — untuk wa.me deep link. */
    whatsapp: "6287846073782",
    /** Format tampilan ke pengguna. */
    whatsappDisplay: "+62 878-4607-3782",
    email: "johndev912@gmail.com",
    location: "Cikarang, Kabupaten Bekasi, Jawa Barat",
  },

  social: {
    github: "https://github.com/Habibsuprayoga325",
    linkedin: "https://www.linkedin.com/in/habib-suprayoga-921a23326",
  },

  nav: [
    { label: "Mengapa JohnDev", href: "#why-jhondev" },
    { label: "Layanan", href: "#layanan" },
    { label: "Harga", href: "#harga" },
    { label: "Kontak", href: "#kontak" },
  ],
} as const;

/**
 * Bangun link WhatsApp dengan pesan otomatis yang sudah terisi.
 *
 * @param message Pesan yang akan terisi otomatis di kolom chat klien.
 * @returns URL `wa.me` siap pakai untuk atribut href.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
/**
 * Guard: nomor WhatsApp harus format internasional tanpa "+" dan tanpa spasi.
 *
 * Nomor Indonesia = 62 + 10–12 digit. Angka yang salah (kurang satu digit)
 * tetap menghasilkan URL yang valid secara sintaks, tapi WhatsApp akan
 * menampilkan "isn't on WhatsApp" — sulit dideteksi dari sisi klien.
 * Karena itu bentuk divalidasi saat build, bukan saat klik.
 */
const _whatsappDigits = siteConfig.contact.whatsapp;
if (!/^\d{11,15}$/.test(_whatsappDigits)) {
  throw new Error(
    `siteConfig.contact.whatsapp tidak valid: "${_whatsappDigits}". ` +
      `Harus 11–15 digit (format internasional tanpa "+"). ` +
      `Periksa juga siteConfig.contact.whatsappDisplay agar konsisten.`,
  );
}


/** Pesan default untuk tombol CTA utama. */
export const CTA_MESSAGE_DEFAULT =
  "Halo JohnDev, saya lihat website JhonDev. Saya mau konsultasi soal kebutuhan digitalisasi bisnis saya.";

/** Pesan untuk form "Custom Solution" — lebih spesifik, minta detail masalah. */
export const CTA_MESSAGE_CUSTOM =
  "Halo JohnDev, saya butuh solusi custom. Kebutuhan saya: [tulis di sini].";
