import { ArrowDown } from "lucide-react";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/lib/services-data";

export function ServicesSection() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-heading"
      className="scroll-mt-20 bg-white py-12 sm:py-16 border-b border-border/70 relative"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
            KAPABILITAS &amp; SOLUSI SISTEM
          </span>

          <h2
            id="layanan-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance"
          >
            Solusi Rekayasa Perangkat Lunak
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl">
            Dari aplikasi kasir POS toko, modul ERP pergudangan, hingga portal web kustom.
            Setiap modul dirancang dari kode bersih yang siap menopang ekspansi bisnis Anda.
          </p>
        </div>

        {/* Grid Kartu Layanan */}
        <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={index === 1 || index === 2}
            />
          ))}
        </div>

        {/* Banner Navigasi ke Paket Investasi */}
        <div className="mt-14 rounded-2xl border border-border/80 bg-[#f8fafc] p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h3 className="text-base font-bold text-foreground">
              Ingin Mengetahui Rincian Biaya &amp; Paket Investasi?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Setiap proyek dikerjakan bertahap dengan pembayaran per termin, transparan tanpa biaya tersembunyi.
            </p>
          </div>
          <a
            href="#harga"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-brand-navy-soft transition-all shadow-xs hover:shadow-md shrink-0"
          >
            <span>Lihat Paket &amp; Biaya</span>
            <ArrowDown className="size-3.5 text-brand-lime" />
          </a>
        </div>

      </div>
    </section>
  );
}
