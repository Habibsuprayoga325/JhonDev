import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTA_MESSAGE_DEFAULT, siteConfig, whatsappLink } from "@/lib/site-config";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          {siteConfig.legalName}
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {siteConfig.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={whatsappLink(CTA_MESSAGE_DEFAULT)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 text-base")}
          >
            Konsultasi Gratis
          </a>
          <a
            href="#layanan"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-11 px-6 text-base",
            )}
          >
            Lihat Layanan
          </a>
        </div>
      </div>

      {/* Placeholder — section berikutnya dibangun di Step 1.3 dan seterusnya. */}
      <div className="mt-16 rounded-xl border border-dashed border-border p-10 text-center">
        <p className="text-sm text-muted-foreground">
          Layout shell (Step 1.1) selesai. Konten section berikutnya menyusul.
        </p>
      </div>
    </section>
  );
}
