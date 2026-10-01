import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTA_MESSAGE_DEFAULT, whatsappLink } from "@/lib/site-config";

/**
 * Angka trust bar. Semua berbasis klaim yang bisa diverifikasi —
 * lihat PRD §1.2 (sumber: CV Habib Suprayoga).
 * Jangan tambah angka baru tanpa bukti yang bisa ditunjukkan ke calon klien.
 */
const trustPoints = [
  { value: "4+", label: "Sistem produksi berjalan hari ini" },
  { value: "100%", label: "Dikerjakan 1 orang, bukan dioper ke vendor lain" },
  { value: "1.000+", label: "Siswa & trainee yang saya latih" },
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
            4+ sistem produksi sudah jalan untuk klien kami
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Order numpuk di WhatsApp, stok tidak sinkron?
            <br className="hidden sm:block" />{" "}
            <span className="text-brand-primary">
              Saya yang bikin jalan, dari server sampai printer.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Bukan sekadar website. POS, ERP, aplikasi kasir, sampai integrasi
            printer dan gudang — dikerjakan satu orang, dari requirement sampai
            sistem benar-benar dipakai karyawan Anda.
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
              Ceritakan Masalah Anda
            </a>
            <a
              href="#layanan"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 w-full px-8 text-base sm:w-auto",
              )}
            >
              Lihat yang Bisa Saya Kerjakan
            </a>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Balasan dalam 24 jam kerja &middot; Konsultasi pertama gratis
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
