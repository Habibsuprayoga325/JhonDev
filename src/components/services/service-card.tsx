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
        "group flex flex-col rounded-xl border bg-card p-6 transition-all",
        "hover:border-brand-primary/40 hover:shadow-sm",
        featured && "border-brand-primary/30",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-light text-brand-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <ServiceGlyph name={service.icon} />
        </span>
        <Badge
          variant="secondary"
          className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
        >
          {service.badge}
        </Badge>
      </div>

      <h3 className="mt-5 text-base font-semibold leading-snug text-foreground">
        {service.title}
      </h3>

      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="mt-4 space-y-2">
        {service.examples.map((example) => (
          <li
            key={example}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <Check
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-brand-primary"
            />
            {example}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-end justify-between gap-3 border-t border-border pt-4">
        <div>
          <span className="block text-xs text-muted-foreground">
            Mulai dari
          </span>
          <span className="block text-base font-semibold text-foreground">
            {service.priceFrom}
          </span>
        </div>

        <a
          href={cta}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "h-9 shrink-0 px-3.5",
          )}
        >
          Tanya
          <span className="sr-only"> tentang {service.title} via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
