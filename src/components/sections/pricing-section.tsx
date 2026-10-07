import { Check, Minus } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTA_MESSAGE_DEFAULT, whatsappLink } from "@/lib/site-config";
import type { PricingTier } from "@/lib/pricing-data";

/**
 * Satu kartu paket.
 *
 * `includes` = yang ada, `excludes` = yang tidak. Bagian `excludes` sengaja
 * ditampilkan: mencegah ekspektasi salah dan justru membangun kepercayaan
 * (klien lebih mudah bertanya kalau batasannya jelas).
 */
function TierCard({ tier }: { tier: PricingTier }) {
  const message = `Halo JohnDev, saya tertarik dengan paket "${tier.name}". Boleh minta penjelasan lebih lanjut?`;
  const featured = Boolean(tier.popular);

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-300",
        featured
          ? "border-brand-primary/60 shadow-xl ring-2 ring-brand-primary/20 hover:-translate-y-1.5 hover:shadow-2xl"
          : "border-border/80 hover:border-brand-primary/40 hover:-translate-y-1.5 hover:shadow-lg",
      )}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-md bg-brand-navy px-3 py-0.5 text-[10px] font-mono font-bold tracking-widest text-brand-lime shadow-md border border-brand-primary/30 uppercase">
            REKOMENDASI
          </span>
        </span>
      )}

      <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground min-h-[40px]">
        {tier.bestFor}
      </p>

      <div className="mt-6 border-y border-border/70 py-4.5">
        <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Mulai dari
        </span>
        <span
          className={cn(
            "mt-1 block text-3xl font-extrabold tracking-tight",
            featured ? "text-brand-primary" : "text-foreground",
          )}
        >
          {tier.priceFrom}
        </span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground"
          >
            <Check
              aria-hidden="true"
              className={cn(
                "mt-0.5 size-4.5 shrink-0",
                featured ? "text-brand-primary" : "text-brand-primary/80",
              )}
            />
            <span>{item}</span>
          </li>
        ))}

        {tier.excludes && tier.excludes.length > 0 && (
          <>
            <li className="pt-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80">
              Tidak termasuk
            </li>
            {tier.excludes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground/80"
              >
                <Minus
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground/50"
                />
                <span>{item}</span>
              </li>
            ))}
          </>
        )}
      </ul>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({
            variant: featured ? "default" : "outline",
            size: "lg",
          }),
          "mt-8 h-12 w-full rounded-full text-sm font-semibold transition-all shadow-xs",
          featured
            ? "bg-brand-navy hover:bg-brand-navy-soft text-white hover:shadow-lg"
            : "hover:border-brand-primary hover:bg-brand-light hover:text-brand-primary",
        )}
      >
        Konsultasi Paket Ini
        <span className="sr-only"> {tier.name} via WhatsApp</span>
      </a>
    </article>
  );
}

export function PricingSection({ tiers }: { tiers: readonly PricingTier[] }) {
  return (
    <section
      id="harga"
      aria-labelledby="harga-heading"
      className="scroll-mt-20 border-b border-border/80 bg-[#f9fafc] relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
            PAKET INVESTASI &amp; SKEMA KERJASAMA
          </span>

          <h2
            id="harga-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
          >
            Investasi Transparan Tanpa Biaya Tersembunyi
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl">
            Bukan biaya sewa tanpa henti. Anda berinvestasi untuk sistem yang menjadi aset milik Anda seutuhnya,
            dengan alur pengerjaan dan pelunasan bertahap.
          </p>

          {/* 3 Kejelasan untuk Kenyamanan Klien */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-foreground/80">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-white px-3 py-1 shadow-2xs">
              <span className="size-1.5 rounded-full bg-brand-primary" />
              Pembayaran Bertahap Per Termin
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-white px-3 py-1 shadow-2xs">
              <span className="size-1.5 rounded-full bg-brand-lime" />
              Garansi &amp; Pendampingan 3–6 Bulan
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-white px-3 py-1 shadow-2xs">
              <span className="size-1.5 rounded-full bg-brand-cyan" />
              100% Hak Milik Source Code &amp; Data
            </span>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Harga akhir disesuaikan dengan kompleksitas modul dan integrasi spesifik.
            Pembayaran fleksibel per termin milestone pengerjaan.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">
            Kebutuhan custom skala enterprise?{" "}
            <a
              href={whatsappLink(CTA_MESSAGE_DEFAULT)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary underline underline-offset-4 hover:text-brand-primary-hover font-semibold"
            >
              Hubungi langsung tech lead kami &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
