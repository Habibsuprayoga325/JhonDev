"use client";

import { useEffect } from "react";

import { buttonVariants } from "@/components/ui/button";
import { CTA_MESSAGE_DEFAULT, whatsappLink } from "@/lib/site-config";

/**
 * Error boundary untuk runtime error (PRD Step 5.4).
 *
 * Tanpa ini, error React akan menggantikan seluruh halaman dengan layar putih
 * kosong — pengunjung kehilangan navigasi dan CTA. Dengan ini, mereka
 * masih bisa menghubungi kami lewat WhatsApp.
 * `reset()` dicoba dulu sebelum menyerah — kadang error-nya hanya sementara
 * (network hiccup, state client yang rusak).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log ke console agar bisa dilihat saat debugging. Nanti (Step 5.5)
    // bisa diarahkan ke layanan error monitoring.
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-destructive">
        Terjadi kesalahan
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
        Halaman ini gagal dimuat
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
        Ada masalah teknis sementara. Coba muat ulang, atau langsung hubungi
        kami lewat WhatsApp — pesan Anda tetap akan sampai.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className={buttonVariants({ size: "lg" })}
        >
          Coba lagi
        </button>
        <a
          href={whatsappLink(CTA_MESSAGE_DEFAULT)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          Tanya via WhatsApp
        </a>
      </div>

      {error.digest && (
        <p className="mt-10 text-xs text-muted-foreground">
          Kode error: <code>{error.digest}</code>
        </p>
      )}
    </div>
  );
}
