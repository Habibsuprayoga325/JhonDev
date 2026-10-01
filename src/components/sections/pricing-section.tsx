import { Check, Minus, Sparkles } from "lucide-react";

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
        "relative flex flex-col rounded-xl border bg-card p-6",
        featured
          ? "border-brand-primary shadow-md ring-1 ring-brand-primary/20"
          : "border-border",
      )}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            <Sparkles aria-hidden="true" className="size-3" />
            Paling sering dipilih
          </span>
        </span>
      )}

      <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {tier.bestFor}
      </p>

      <div className="mt-6 border-y border-border py-4">
        <span className="block text-xs text-muted-foreground">Mulai dari</span>
        <span
          className={cn(
            "mt-0.5 block text-3xl font-bold tracking-tight",
            featured ? "text-brand-primary" : "text-foreground",
          )}
        >
          {tier.priceFrom}
        </span>
      </div>

      <ul className="mt-5 flex-1 space-y-2.5">
        {tier.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground"
          >
            <Check
              aria-hidden="true"
              className={cn(
                "mt-0.5 size-4 shrink-0",
                featured ? "text-brand-primary" : "text-muted-foreground",
              )}
            />
            {item}
          </li>
        ))}

        {tier.excludes && tier.excludes.length > 0 && (
          <>
            <li className="pt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Tidak termasuk
            </li>
            {tier.excludes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                <Minus
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground/60"
                />
                {item}
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
          "mt-6 h-11 w-full",
        )}
      >
        Tanya Paket Ini
        <span className="sr-only"> {tier.name} via WhatsApp</span>
      </a>
    </article>
  );
}

/**
 * Section Pricing \u2014 4 paket (PRD FR-05).
 *
 * `id="harga"` sekaligus menutup link navbar yang sebelumnya 404.
 * Prices selalu "mulai dari"; angka final disepakati setelah scoping.
 */
export function PricingSection({ tiers }: { tiers: readonly PricingTier[] }) {
  return (
    <section
      id="harga"
      aria-labelledby="harga-heading"
      className="scroll-mt-16 border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="harga-heading"
            className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl"
          >
            Harga yang jelas, sejak awal
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Tidak ada harga yang harus Anda tanyakan dulu. Angka di bawah adalah
            titik awal — rinciannya ditentukan setelah kita bicara.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Semua harga adalah estimasi awal dan bergantung pada ruang lingkup
          project. Harga final disepakati tertulis sebelum pengerjaan dimulai,
          dan tidak berubah di tengah jalan. Pembayaran dapat dicicil.
        </p>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Kebutuhan Anda tidak cocok dengan paket mana pun?{" "}
          <a
            href={whatsappLink(CTA_MESSAGE_DEFAULT)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-primary underline-offset-4 hover:underline"
          >
            Ceritakan kebutuhan khususnya
          </a>{" "}
          — sebagian besar pekerjaan custom tetap bisa kami tangani.
        </p>
      </div>
    </section>
  );
}
