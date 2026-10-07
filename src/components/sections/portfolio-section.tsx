import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    name: "E-Voting Digital Multi-Kandidat",
    category: "Platform Pemilihan",
    year: "2024",
    description: "Sistem pemungutan suara digital real-time dengan verifikasi identitas pemilih, enkripsi data suara, dan rekapitulasi instan tanpa jeda.",
    tags: ["Next.js", "WebSocket Realtime", "Data Encryption"],
  },
  {
    name: "Fleet & Warehouse Logistics",
    category: "Sistem Logistik & ERP",
    year: "2024",
    description: "Platform pemantauan armada distribusi dan otomasi mutasi inventori multi-gudang untuk meniadakan selisih stok fisik.",
    tags: ["ERP Kustom", "GPS Integration", "Stock Sync"],
  },
  {
    name: "Print ERP & Kasir POS Pintar",
    category: "Retail & Percetakan",
    year: "2023",
    description: "Aplikasi kasir multi-cabang terintegrasi langsung dengan printer thermal, kalkulator ongkos cetak dinamis, dan laporan laba harian.",
    tags: ["POS System", "Thermal Printer", "Multi-Cabang"],
  },
  {
    name: "Corporate Web & Lead Engine",
    category: "Web Architecture",
    year: "2024",
    description: "Website korporat performa tinggi dengan integrasi alur prospek langsung ke WhatsApp sales, optimasi SEO teknis, dan load time <1s.",
    tags: ["Next.js", "WhatsApp Gateway", "SEO Optimal"],
  },
];

export function PortfolioSection() {
  return (
    <section id="works" className="scroll-mt-16 bg-white py-20 sm:py-28 border-b border-border/70 relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-2xs">
            <span className="size-2 rounded-full bg-brand-primary" />
            <span>Karya Terpilih</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            Sistem Produksi yang Telah Teruji
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty max-w-xl">
            Studi kasus proyek nyata yang dibangun untuk menyelesaikan kendala operasional riil para klien kami.
          </p>
        </div>

        {/* 4 Deep Dark Ink Cards (Lumora Style) */}
        <div className="mt-14 sm:mt-18 grid gap-6 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <article
              key={item.name}
              className="group relative flex flex-col justify-between min-h-[22rem] sm:min-h-[26rem] rounded-3xl bg-brand-navy p-6 sm:p-8 text-white border border-white/10 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand-primary/50"
            >
              {/* Subtle background watermark */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110"
              >
                <Image
                  src="/johndev-icon-transparent.png"
                  alt=""
                  width={220}
                  height={150}
                  className="object-contain invert brightness-200"
                />
              </div>

              {/* Top Meta Row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {item.category} &mdash; {item.year}
                </span>

                <div className="grid size-11 place-items-center rounded-full bg-white/10 text-white border border-white/15 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-105 group-hover:bg-brand-primary">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-12 sm:mt-16">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                  {item.name}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-white/60 leading-relaxed max-w-lg">
                  {item.description}
                </p>

                {/* Tag Chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
