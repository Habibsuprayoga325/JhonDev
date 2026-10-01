import { ArrowRight, CheckCircle2, Smartphone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogoMarquee } from "@/components/credibility/logo-marquee";
import {
  clientLogos,
  painPoints,
  publishedCaseStudies,
} from "@/lib/credibility-data";
import { CTA_MESSAGE_DEFAULT, whatsappLink } from "@/lib/site-config";

/** Header section WhyJohnDev — 4 masalah → bagaimana kami menyelesaikannya. */
function WhyBlock() {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {painPoints.map((point) => (
        <div
          key={point.problem}
          className="rounded-xl border border-border bg-card p-6"
        >
          <p className="flex items-start gap-2.5 text-base font-semibold leading-snug text-foreground">
            <span
              aria-hidden="true"
              className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                className="size-3"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </span>
            {point.problem}
          </p>
          <p className="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-brand-primary"
            />
            {point.solution}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Kartu satu studi kasus — bukti, bukan pujian. */
function CaseCard({
  study,
}: {
  study: (typeof publishedCaseStudies)[number];
}) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-foreground">
              {study.client}
            </h3>
            {study.kind === "mobile" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                <Smartphone aria-hidden="true" className="size-3" />
                Android
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {study.period}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-sm">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Masalah
          </h4>
          <p className="mt-1.5 leading-relaxed text-muted-foreground">
            {study.challenge}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Hasil
          </h4>
          <p className="mt-1.5 leading-relaxed text-foreground">
            {study.outcome}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-border pt-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">Teknologi:</span>{" "}
          {study.techHighlight}
        </p>
        {study.proofNote && (
          <p className="mt-2.5 rounded-lg bg-secondary px-3 py-2 text-xs leading-relaxed text-secondary-foreground">
            {study.proofNote}
          </p>
        )}
      </div>
    </article>
  );
}

/**
 * Section WhyJohnDev — kredibilitas berbasis bukti (PRD §3.1–3.4).
 *
 * Hanya menampilkan studi kasus yang `published: true`.
 * Kalau John belum punya izin dari salah satu klien, ubah flag di
 * `credibility-data.ts` — komponen ini otomatis menyembunyikannya.
 */
export function WhyJohnDevSection() {
  return (
    <section
      id="why-jhondev"
      aria-labelledby="why-heading"
      className="scroll-mt-16 border-b border-border bg-secondary/30"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="why-heading"
            className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl"
          >
            Mengapa harus JohnDev
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Bukan karena kami yang terbaik &mdash; tapi karena
            sistem-sistem ini sudah jalan di produksi, dan bisa Anda cek
            sendiri.
          </p>
        </div>

        <WhyBlock />

        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold tracking-tight text-foreground">
            Sistem yang sudah berjalan
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Empat sistem yang sudah berjalan di produksi — untuk web, mobile,
            sampai integrasi hardware.
          </p>

          {/* Logo klien: bukti sosial tanpa menampilkan nama atau link. */}
          {clientLogos.length > 0 && (
            <div className="mt-12">
              <LogoMarquee logos={clientLogos} />
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Logo klien yang menyetujui ditampilkan sebagai bukti portofolio.
              </p>
            </div>
          )}

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {publishedCaseStudies.map((study) => (
              <CaseCard key={study.id} study={study} />
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-xl border border-brand-border bg-brand-light p-8 text-center">
          <p className="text-lg font-semibold text-foreground">
            Punya masalah yang mirip dengan salah satu di atas?
          </p>
          <p className="mt-2 text-muted-foreground">
            Ceritakan situasinya. Konsultasi pertama tidak dipungut biaya.
          </p>
          <a
            href={whatsappLink(CTA_MESSAGE_DEFAULT)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 h-12 px-8 text-base",
            )}
          >
            Konsultasikan Kebutuhan Anda
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
