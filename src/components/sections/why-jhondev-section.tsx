import { ArrowRight, CheckCircle2, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogoMarquee } from "@/components/credibility/logo-marquee";
import { clientLogos, painPoints, workSteps } from "@/lib/credibility-data";
import { CTA_MESSAGE_DEFAULT, whatsappLink } from "@/lib/site-config";

/** Header section WhyJohnDev — 4 masalah → bagaimana kami menyelesaikannya. */
function WhyBlock() {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {painPoints.map((point) => (
        <div
          key={point.problem}
          className="group rounded-2xl border border-border/80 bg-white p-6 sm:p-7 shadow-xs hover:border-brand-primary/40 hover:shadow-md transition-all duration-300"
        >
          <p className="flex items-start gap-3 text-base font-semibold leading-snug text-foreground">
            <span
              aria-hidden="true"
              className="mt-0.5 grid size-5 shrink-0 place-items-center rounded bg-destructive/10 text-destructive"
            >
              <X className="size-3.5 stroke-[2.5]" />
            </span>
            <span>{point.problem}</span>
          </p>
          <div className="mt-4 pt-4 border-t border-border/60 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-brand-primary"
            />
            <span className="text-foreground/90 font-medium">{point.solution}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function WhyJohnDevSection() {
  return (
    <section
      id="why-jhondev"
      aria-labelledby="why-heading"
      className="scroll-mt-20 border-b border-border/80 bg-white relative"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
            ARSITEKTUR &amp; KEUNGGULAN OPERASIONAL
          </span>

          <h2
            id="why-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
          >
            Bukan Sekadar Kode, Tapi Solusi Operasional Nyata
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl">
            Banyak software house hanya membuat tampilan. Kami merancang arsitektur sistem
            yang benar-benar menyelesaikan bottleneck harian tim Anda.
          </p>
        </div>

        <WhyBlock />

        <div className="mt-20">
          {clientLogos.length > 0 && (
            <div className="mt-12">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  DIPERCAYA OLEH TIM &amp; BISNIS DI BERBAGAI SEKTOR
                </span>
              </div>
              <LogoMarquee logos={clientLogos} />
            </div>
          )}
        </div>

        {/* Alur kerja — 4 tahap terstruktur */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Alur Kerja Transparan &amp; Terukur
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base">
              Setiap milestone dilaporkan berkala. Anda selalu tahu progres tanpa perlu menebak-nebak.
            </p>
          </div>

          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((item) => (
              <li
                key={item.step}
                className="group relative rounded-2xl border border-border/80 bg-[#f9fafc] p-6 shadow-xs hover:border-brand-primary/40 hover:bg-white hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center size-10 rounded-xl bg-brand-navy group-hover:bg-brand-primary text-white text-xs font-mono font-bold shadow-xs transition-colors duration-300"
                >
                  {item.step}
                </span>
                <h4 className="mt-5 text-base font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Banner konsultasi */}
        <div className="mt-20 rounded-3xl border border-brand-border bg-gradient-to-r from-brand-light via-white to-blue-50/50 p-8 sm:p-12 text-center shadow-md">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Punya Tantangan Operasional yang Perlu Diselesaikan?
          </h3>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground text-sm sm:text-base">
            Ceritakan proses bisnis Anda. Kami bantu analisis arsitektur dan opsi solusi paling hemat biaya tanpa komitmen.
          </p>
          <a
            href={whatsappLink(CTA_MESSAGE_DEFAULT)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 h-12.5 rounded-full px-9 text-base font-semibold bg-brand-navy hover:bg-brand-navy-soft text-white transition-all shadow-md hover:shadow-xl",
            )}
          >
            Diskusi Kebutuhan Sekarang
            <ArrowRight aria-hidden="true" className="size-4 ml-2 text-brand-cyan" />
          </a>
        </div>
      </div>
    </section>
  );
}
