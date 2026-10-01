import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTA_MESSAGE_DEFAULT, siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Angka trust bar. Semua berbasis klaim yang bisa diverifikasi —
 * lihat PRD §1.2 (sumber: CV Habib Suprayoga).
 * Jangan tambah angka baru tanpa bukti yang bisa ditunjukkan ke calon klien.
 */
const trustPoints = [
  { value: "4+", label: "Sistem produksi live" },
  { value: "1.000+", label: "Siswa & trainee dilatih" },
  { value: "6+", label: "Stack yang dikuasai" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Latar dekoratif — gradien lembut di belakang konten. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,var(--brand-light)_0%,transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-light px-3.5 py-1.5 text-xs font-medium text-brand-primary">
            <span className="size-1.5 rounded-full bg-brand-primary" />
            {siteConfig.legalName}
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Sistem digital untuk bisnis yang{" "}
            <span className="text-brand-primary">sudah berjalan</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Kami memindahkan operasional kertas, WhatsApp, dan catatanmanual Anda
            ke sistem yang benar-benar jalan — termasuk di{" "}
            <strong className="font-medium text-foreground">
              printer, kasir, dan gudang
            </strong>{" "}
            Anda. Bukan sekadar website.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(CTA_MESSAGE_DEFAULT)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full px-8 text-base sm:w-auto",
              )}
            >
              Konsultasi Gratis
            </a>
            <a
              href="#layanan"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 w-full px-8 text-base sm:w-auto",
              )}
            >
              Lihat Layanan
            </a>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Balasan dalam 24 jam kerja &middot; Tanpa biaya konsultasi
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-10">
          {trustPoints.map((item) => (
            <div key={item.label} className="text-center">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {item.value}
                </span>
                <span className="mt-1.5 block text-xs leading-snug text-muted-foreground sm:text-sm">
                  {item.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
