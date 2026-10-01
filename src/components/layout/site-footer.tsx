import Link from "next/link";
import { CTA_MESSAGE_DEFAULT, siteConfig, whatsappLink } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold tracking-tight text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-labelledby="footer-nav">
            <h2
              id="footer-nav"
              className="text-sm font-semibold text-foreground"
            >
              Navigasi
            </h2>
            <ul className="mt-3 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Kontak</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={whatsappLink(CTA_MESSAGE_DEFAULT)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.location}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Media</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {siteConfig.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-5 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
