import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, CTA_MESSAGE_DEFAULT, whatsappLink } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white pt-16 sm:pt-24 pb-12 rounded-t-[2.5rem] border-t border-white/10">
      
      {/* Background Watermark Lumora style */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-6 sm:-bottom-12 flex justify-center opacity-[0.035] select-none overflow-hidden"
      >
        <span className="text-[14rem] sm:text-[20rem] lg:text-[25rem] font-black tracking-tighter text-white leading-none">
          JOHNDEV
        </span>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CTA Top Row (Lumora style) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-lime">
              LANGKAH SELANJUTNYA
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Punya ide sistem atau kendala operasional? Mari kita diskusikan.
            </h2>
          </div>

          <a
            href={whatsappLink(CTA_MESSAGE_DEFAULT)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white hover:bg-[#f1f0ee] text-brand-navy py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5 shrink-0 self-start lg:self-end"
          >
            <span>Mulai Diskusi Proyek</span>
            <span className="grid size-9 place-items-center rounded-full bg-brand-navy text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 py-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/johndev-logo-dark.png"
                alt="JohnDev"
                width={170}
                height={30}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Studio rekayasa software independen. Kami membangun sistem kasir POS, ERP, dan aplikasi digital kustom yang siap menopang ekspansi bisnis Anda.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
              <span className="size-2 rounded-full bg-brand-lime" />
              <span>Cikarang, Kab. Bekasi &mdash; Melayani Seluruh Indonesia</span>
            </div>
          </div>

          {/* Nav Col */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan Col */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Layanan Utama
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Point of Sale (POS) &amp; Kasir
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  ERP &amp; Manajemen Inventori
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Aplikasi Web &amp; Mobile Kustom
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Integrasi Hardware &amp; WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak Col */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <a
                  href={whatsappLink(CTA_MESSAGE_DEFAULT)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Resmi
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Studio
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {year} {siteConfig.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
