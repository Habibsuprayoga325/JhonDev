"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ClientLogo } from "@/lib/credibility-data";

/**
 * Logo marquee — logo klien bergerak horizontal tanpa henti.
 *
 * Kenapa CSS animation, bukan JS interval:
 *  - jalan di GPU/compositor, tidak memblokir main thread
 *  - tidak menambah logic yang bisa salah (satu CSSkeyframes sederhana)
 *  - tetap jalan walau JS belum selesai hydrate
 *
 * Aksesibilitas:
 *  - `prefers-reduced-motion` menghentikan animasi (W3C WCAG 2.1)
 *  - baris logo diberi `aria-hidden` supaya screen reader tidak
 *    membacakan logo yang sama dua kali
 */
export function LogoMarquee({
  logos,
  className,
}: {
  logos: readonly ClientLogo[];
  className?: string;
}) {
  // Duplikasi list agar animasi selalu punya konten untuk "menutup" loop.
  const doubled = [...logos, ...logos];

  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div
        className="flex w-max shrink-0 items-center gap-14 pr-14 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        // Loop mulus: geser tepat 50% dari lebar total (2x list) lalu reset.
      >
        {doubled.map((logo, index) => (
          <LogoItem key={`${logo.src}-${index}`} logo={logo} isCopy={index >= logos.length} />
        ))}
      </div>
    </div>
  );
}

function LogoItem({ logo, isCopy }: { logo: ClientLogo; isCopy: boolean }) {
  return (
    <div
      className="flex h-16 w-[220px] shrink-0 items-center justify-center"
      // Copy kedua adalah pengisi loop \u2014 sembunyikan dari aksesibilitas
      // supaya logo tidak dibacakan dua kali.
      aria-hidden={isCopy || undefined}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        // Quality 100 supaya logo vektor tidak buram setelah dikompresi.
        // jadi buram setelah dikompresi ulang.
        quality={100}
        className="h-auto max-h-14 w-auto max-w-[200px] object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}
