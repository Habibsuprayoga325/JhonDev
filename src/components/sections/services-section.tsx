import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/lib/services-data";

/**
 * Section Layanan — grid katalog 8 kategori (PRD FR-03).
 *
 * Render murni server component: tidak ada state, tidak ada JS client
 * yang perlu diunduh. Hanya ada satu catatan: bila Section 2.2 menambahkan filter
 * kategori nanti, section ini harus jadi client component.
 */
export function ServicesSection() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-heading"
      className="scroll-mt-16 border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="layanan-heading"
            className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl"
          >
            Apa saja yang bisa kami kerjakan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Delapan area layanan. Kalau kebutuhan Anda tidak ada di daftar
            ini, kirim saja &mdash; sebagian besar-custom work tetap bisa kami
            tangani.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={index === 1 || index === 5}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Harga bersifat estimasi awal dan bergantung pada scope project.
          Harga final disepakati setelah kebutuhan dibahas.
        </p>
      </div>
    </section>
  );
}
