"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JohnDevLogo } from "@/components/ui/johndev-logo";
import { LiveClock } from "@/components/layout/live-clock";
import { MobileNav } from "@/components/layout/mobile-nav";
import { CTA_MESSAGE_DEFAULT, siteConfig, whatsappLink } from "@/lib/site-config";

export function SiteHeader() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 76;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 transition-colors">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center shrink-0">
          <JohnDevLogo />
        </div>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center justify-center gap-8 lg:flex flex-1"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[0.92rem] font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <LiveClock />

          <a
            href={whatsappLink(CTA_MESSAGE_DEFAULT)}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-navy hover:bg-brand-navy-soft text-white px-4.5 py-2 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md"
          >
            <span>Mulai Proyek</span>
            <span className="grid size-5.5 place-items-center rounded-full bg-white/15 text-brand-lime transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-3.5" />
            </span>
          </a>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
