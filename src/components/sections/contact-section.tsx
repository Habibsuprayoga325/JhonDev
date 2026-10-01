"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Section Kontak — WhatsApp-first (PRD §US-1).
 *
 * KEPUTUSAN John (2026-10-01): **WhatsApp dulu.** Tidak ada form yang mengirim
 * ke server pada Phase 1. Alasannya:
 *   1. hosting belum ditentukan \u2014 form butuh runtime server, dan deployment
 *      ke provider pilihan John bisa bermasalah
 *   2. untuk AUDIENS UMKM, WhatsApp jauh lebih familiar daripada form web
 *   3. 0 attack surface \u2014 tidak ada endpoint, tidak ada input yang bisa diserang
 *
 * Form email tetap bisa ditambahkan nanti (opsinya terbuka).
 *
 * Karena itu section ini **tidak punya server action, tidak punya Zod, dan
 * tidak punya rate limit** — semuanya belum relevan. Yang ada di
 * PR 4.4–4.7 hanyalah validasi client-side untuk UX, bukan keamanan.
 */

/** Template pesan agar user tinggal klik, tinggal edit lalu kirim. */
function buildMessage(topic: string, body: string) {
  return `Halo JohnDev, saya datang dari website JhonDev.

Topik: ${topic}
${body ? `\nKebutuhan saya:\n${body}` : ""}`.trim();
}

export function ContactSection() {
  const [topic, setTopic] = useState("Digitalisasi operasional");
  const [details, setDetails] = useState("");

  const message = buildMessage(topic, details);
  const waHref = whatsappLink(message);

  const isDetailsTooLong = details.length > 600;

  return (
    <section
      id="kontak"
      aria-labelledby="kontak-heading"
      className="scroll-mt-16 bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="kontak-heading"
            className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl"
          >
            Ceritakan kebutuhan Anda
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Pilih topik, tulis kebutuhan singkat, lalu kirim langsung ke
            WhatsApp kami. Balasan dalam 24 jam kerja.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-border bg-card p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="kontak-topik"
                className="block text-sm font-medium text-foreground"
              >
                Topik
              </label>
              <select
                id="kontak-topik"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <option>Digitalisasi operasional</option>
                <option>Point of Sale (POS)</option>
                <option>ERP & Sistem Kustom</option>
                <option>Aplikasi Mobile</option>
                <option>Company Profile / Landing Page</option>
                <option>Integrasi Hardware / IoT</option>
                <option>Integrasi Sistem & API</option>
                <option>Custom Solution</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="kontak-detail"
                className="block text-sm font-medium text-foreground"
              >
                Kebutuhan Anda{" "}
                <span className="font-normal text-muted-foreground">(opsional)</span>
              </label>
              <textarea
                id="kontak-detail"
                rows={5}
                maxLength={600}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Contoh: order masih lewat WhatsApp, stok manual, laporan tiap akhir bulan, karyawan 5 orang."
                className="mt-2 w-full resize-y rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
              <p
                className={cn(
                  "mt-1.5 text-xs",
                  isDetailsTooLong ? "text-destructive" : "text-muted-foreground",
                )}
              >
                {details.length}/600
              </p>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full text-base",
              )}
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              Kirim lewat WhatsApp
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:text-left">
          <a
            href={`tel:+${siteConfig.contact.whatsapp}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone aria-hidden="true" className="size-4" />
            Telepon {siteConfig.contact.whatsappDisplay}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {siteConfig.contact.email}
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          Data Anda tidak disimpan di website ini. Isi form hanya disusun di
          perangkat Anda, lalu dikirim langsung ke WhatsApp \u2014 tidak melewati
          server kami.
        </p>
      </div>
    </section>
  );
}
