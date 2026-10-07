import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface JohnDevLogoProps {
  className?: string;
  variant?: "full" | "icon";
  width?: number;
  height?: number;
  href?: string;
  priority?: boolean;
}

/**
 * Komponen Logo Resmi JohnDev
 * Menggunakan aset logo resmi dari file gambar logo transparan
 * yang disesuaikan dengan warna identitas (Navy, Electric Blue, Cyan, Neon Lime).
 */
export function JohnDevLogo({
  className,
  variant = "full",
  href = "/",
  priority = true,
}: JohnDevLogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {variant === "icon" ? (
        <span className="relative flex items-center justify-center shrink-0">
          <Image
            src="/johndev-icon-transparent.png"
            alt="JohnDev Icon"
            width={48}
            height={34}
            priority={priority}
            className="h-8 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </span>
      ) : (
        <span className="relative flex items-center shrink-0">
          <Image
            src="/johndev-logo-transparent.png"
            alt="JohnDev Logo"
            width={180}
            height={32}
            priority={priority}
            className="h-8 sm:h-9 w-auto object-contain transition-all duration-300 hover:opacity-95"
          />
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary transition-opacity hover:opacity-90"
        aria-label="JohnDev Beranda"
      >
        {content}
      </Link>
    );
  }

  return content;
}
