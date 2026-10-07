import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ServiceGlyph } from "@/components/services/service-glyph";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site-config";
import type { ServiceCategory } from "@/lib/services-data";

/**
 * Kartu satu layanan.
 *
 * Kartu ini Stateless — seluruh data datang dari `services-data.ts`,
 * jadi menambah layanan cukup mengedit satu file.
 */
export function ServiceCard({
  service,
  featured = false,
}: {
  service: ServiceCategory;
  featured?: boolean;
}) {
  const waMessage = `Halo JohnDev, saya tertarik dengan layanan "${service.title}". Boleh minta penjelasan lebih lanjut?`;
  const cta = whatsappLink(waMessage);

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-300",
        "border-border/80 hover:border-brand-primary/50 hover:shadow-xl hover:-translate-y-1",
        featured && "border-brand-primary/40 shadow-sm ring-1 ring-brand-primary/10",
      )}
    >
      {/* Subtle top accent bar on hover */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-navy via-brand-primary to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

      <div className="flex items-start justify-between gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-light text-brand-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-brand-navy group-hover:to-brand-primary group-hover:text-white group-hover:shadow-md">
          <ServiceGlyph name={service.icon} />
        </span>
        <span className="shrink-0 rounded-md px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider bg-brand-light text-brand-primary border border-brand-border/60">
          {service.badge}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold leading-snug text-foreground group-hover:text-brand-primary transition-colors">
        {service.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2.5 flex-1">
        {service.examples.map((example) => (
          <li
            key={example}
            className="flex items-start gap-2.5 text-sm text-foreground/80"
          >
            <Check
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-brand-primary"
            />
            <span>{example}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/80 pt-4">
        <span className="text-[11px] font-mono font-medium text-muted-foreground">
          Arsitektur Kustom &bull; Full Ownership
        </span>

        <a
          href={cta}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "h-8.5 shrink-0 rounded-full px-3.5 text-xs font-semibold border-border/80 hover:border-brand-primary hover:bg-brand-primary hover:text-white transition-all",
          )}
        >
          Konsultasi Solusi &rarr;
          <span className="sr-only"> tentang {service.title} via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
