"use client";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTA_MESSAGE_DEFAULT, siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Menu navigasi untuk layar kecil (< 768px).
 *
 * Sheet dipakai, bukan dropdown buatan sendiri, karena sudah menangani
 * focus trap, Escape untuk menutup, scroll lock, dan aria attributes.
 */
export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            type="button"
            aria-label="Buka menu navigasi"
            className="grid size-9 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent md:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              className="size-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        }
      />

      <SheetContent
        side="right"
        className="w-[85vw] max-w-sm border-l border-border bg-background p-0"
      >
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="text-base font-bold text-foreground">
            Menu
          </SheetTitle>
          <SheetDescription className="sr-only">
            Navigasi utama JohnDev
          </SheetDescription>
        </SheetHeader>

        <nav
          aria-label="Navigasi mobile"
          className="flex flex-col gap-1 px-3 py-4"
        >
          {siteConfig.nav.map((item) => (
            <SheetClose key={item.href} render={<Link href={item.href} />}>
              <span className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-foreground transition-colors hover:bg-accent">
                {item.label}
              </span>
            </SheetClose>
          ))}

          <a
            href={whatsappLink(CTA_MESSAGE_DEFAULT)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-3 h-11 w-full",
            )}
          >
            Konsultasi Gratis
          </a>

          <a
            href={`tel:+${siteConfig.contact.whatsapp}`}
            className="mt-1 rounded-lg px-3 py-2 text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Telepon {siteConfig.contact.whatsappDisplay}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
