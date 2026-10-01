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
    whatsapp: "628784607382",
    /** Format tampilan ke pengguna. */
    whatsappDisplay: "+62 878-4607-3782",
    email: "habibsuprayoga3@gmail.com",
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

/** Pesan default untuk tombol CTA utama. */
export const CTA_MESSAGE_DEFAULT =
  "Halo JohnDev, saya lihat website JhonDev. Saya mau konsultasi soal kebutuhan digitalisasi bisnis saya.";

/** Pesan untuk form "Custom Solution" — lebih spesifik, minta detail masalah. */
export const CTA_MESSAGE_CUSTOM =
  "Halo JohnDev, saya butuh solusi custom. Kebutuhan saya: [tulis di sini].";
