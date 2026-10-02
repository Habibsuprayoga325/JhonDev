import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTA_MESSAGE_DEFAULT, siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Menu navigasi untuk layar kecil (< 768px).
 *
 * **Server component, nol JS.** Dipakai `<details>`/`<summary>` native browser
 * alih-alih dialog primitive: menu ini sebenarnya tidak butuh focus trap,
 * portal, atau inertial scroll.
 *
 * Konsekuensinya: Sheet (Base UI Dialog) yang sebelumnya dipakai di sini
 * ~30 KB bundle dan menarik focus-trap code ke homepage. Dengan `<details>`,
 * homepage jadi 0 KB JS tambahan untuk navigasi mobile.
 *
 * Keterbatasan yang disadari:
 *  - tidak ada animasi buka/tutup (tapi tidak butuh)
 *  - tidak ada focus trap — perilaku standarnya Escape-to-close browser
 *  - `<details>` cuma support di browser modern; ini target kita
 */
export function MobileNav() {
  return (
    <details className="group relative md:hidden">
      <summary
        className={cn(
          "grid size-9 cursor-pointer list-none place-items-center rounded-lg",
          "border border-border text-foreground transition-colors",
          "hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2",
          "focus-visible:outline-primary",
          "[&::-webkit-details-marker]:hidden",
          "group-open:bg-accent",
        )}
      >
        <span className="sr-only">Buka menu navigasi</span>
        {/* Ikon hamburger ke X — CSS murni tanpa JS */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          className="size-5"
        >
          <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
          <path d="M6 6l12 12M18 6L6 18" className="hidden group-open:block" />
        </svg>
      </summary>

      <nav
        aria-label="Navigasi mobile"
        className={cn(
          "absolute right-0 top-11 z-50 w-64 rounded-xl border border-border",
          "bg-background p-2 shadow-lg",
        )}
      >
        <ul className="flex flex-col">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-foreground transition-colors hover:bg-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-2 border-t border-border pt-2">
          <a
            href={whatsappLink(CTA_MESSAGE_DEFAULT)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 w-full",
            )}
          >
            Konsultasi Gratis
          </a>
          <a
            href={`tel:+${siteConfig.contact.whatsapp}`}
            className="mt-1 block rounded-lg px-3 py-2 text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Telepon {siteConfig.contact.whatsappDisplay}
          </a>
        </div>
      </nav>
    </details>
  );
}
