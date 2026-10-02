import Link from "next/link";
import type { Metadata } from "next";

import { buttonVariants } from "@/components/ui/button";
import { CTA_MESSAGE_DEFAULT, siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  description: "Halaman yang Anda cari tidak ada atau sudah dipindahkan.",
  robots: { index: false, follow: false },
};

const suggestions = [
  { label: "Layanan", href: "/#layanan" },
  { label: "Harga", href: "/#harga" },
  { label: "Mengapa JohnDev", href: "/#why-jhondev" },
  { label: "Kontak", href: "/#kontak" },
];

/**
 * 404 kustom (PRD Step 5.4).
 *
 * `robots: noindex` \u2014 halaman ini tidak boleh masuk indeks search engine,
 * karena isinya tidak offering apa pun dan hanya menambah duplikat.
 *
 * Tiga tautan utama harus selalu ada di setiap halaman 404:
 * beranda, dan jalur menuju CTA \u2014 supaya pengunjung yang salah ketik tidak
 * langsung pergi tanpa contacting.
 */
export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
        Halaman ini tidak ditemukan
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
        Alamat yang Anda buka tidak ada, atau halamannya sudah dipindahkan.
       Mungkin ada yang lebih cocok di bawah ini.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className={buttonVariants({ size: "lg" })}
        >
          Kembali ke beranda
        </Link>
        <a
          href={whatsappLink(CTA_MESSAGE_DEFAULT)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          Tanya via WhatsApp
        </a>
      </div>

      <nav aria-label="Halaman lain" className="mt-12 w-full">
        <p className="text-sm text-muted-foreground">Atau coba langsung ke:</p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {suggestions.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-brand-primary underline-offset-4 transition-colors hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-12 text-xs text-muted-foreground">
        Butuh sesuatu yang tidak ada di daftar?{" "}
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="underline-offset-4 hover:underline"
        >
          {siteConfig.contact.email}
        </a>
      </p>
    </div>
  );
}