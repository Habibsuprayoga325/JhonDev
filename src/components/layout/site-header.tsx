import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTA_MESSAGE_DEFAULT, siteConfig, whatsappLink } from "@/lib/site-config";

/** Logo wordmark sementara — monogram SVG diganti di Step 1.2 bila perlu. */
function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label={`${siteConfig.name} — beranda`}
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-lg bg-primary font-bold text-primary-foreground"
      >
        JD
      </span>
      <span className="text-lg font-bold tracking-tight text-foreground">
        {siteConfig.name}
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-7 md:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink(CTA_MESSAGE_DEFAULT)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "sm" }),
            "h-9 shrink-0 px-4 text-sm",
          )}
        >
          Konsultasi Gratis
        </a>
      </div>
    </header>
  );
}
