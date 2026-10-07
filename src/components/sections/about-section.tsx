import { Globe, ArrowUpRight } from "lucide-react";
import { siteConfig, CTA_MESSAGE_DEFAULT, whatsappLink } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 bg-white py-20 sm:py-28 border-b border-border/70 relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Sisi Kiri: Studio identity */}
          <div className="lg:col-span-5 relative flex flex-col justify-between min-h-[16rem] sm:min-h-[20rem] p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-border/80 overflow-hidden">
            {/* Background graphic */}
            <Globe
              className="absolute -right-10 -bottom-10 size-60 sm:size-72 text-brand-primary/[0.04] pointer-events-none select-none"
              strokeWidth={1}
            />

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-2xs">
                <span className="size-2 rounded-full bg-brand-primary" />
                <span>The Studio</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                JohnDev Studio
              </h3>
            </div>

            <div className="relative z-10 mt-8 flex items-start gap-3 text-sm text-foreground/80 leading-relaxed font-medium">
              <Globe className="size-5 shrink-0 text-brand-primary mt-0.5" />
              <span>
                Tim rekayasa perangkat lunak independen yang merancang arsitektur sistem dari hulu ke hilir untuk pertumbuhan bisnis yang terukur.
              </span>
            </div>
          </div>

          {/* Sisi Kanan: Editorial statement */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.3] tracking-tight text-foreground text-pretty">
              Kami bermitra dengan pemilik bisnis dan founder yang ingin menghilangkan kekacauan operasional &mdash;{" "}
              <span className="text-muted-foreground">
                membangun aplikasi kasir POS, modul ERP kustom, dan ekosistem digital yang bekerja stabil tanpa henti.
              </span>
            </h2>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 mb-2.5">
                  Tautan &amp; Jaringan
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-9.5 place-items-center rounded-full bg-[#f1f0ee] text-foreground/80 hover:bg-brand-navy hover:text-white transition-all text-xs font-bold"
                  >
                    GH
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-9.5 place-items-center rounded-full bg-[#f1f0ee] text-foreground/80 hover:bg-brand-navy hover:text-white transition-all text-xs font-bold"
                  >
                    IN
                  </a>
                  <a
                    href={whatsappLink(CTA_MESSAGE_DEFAULT)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-9.5 place-items-center rounded-full bg-brand-primary text-white hover:bg-brand-primary-hover transition-all text-xs font-bold"
                  >
                    WA
                  </a>
                </div>
              </div>

              <a
                href={whatsappLink(CTA_MESSAGE_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-white hover:bg-[#f8fafc] text-foreground px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all hover:border-foreground/40 shadow-2xs"
              >
                <span>Konsultasi Bebas Biaya</span>
                <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
