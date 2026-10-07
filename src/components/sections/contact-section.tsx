"use client";

import { useState } from "react";
import { ArrowUpRight, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function sanitizeInput(str: string, maxLength: number) {
  return str
    .replace(/<[^>]*>?/gm, "") // Strip any HTML tags
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // Strip control characters
    .slice(0, maxLength)
    .trim();
}

function buildMessage(name: string, topic: string, body: string) {
  const cleanName = sanitizeInput(name, 80) || "Calon Klien";
  const cleanTopic = sanitizeInput(topic, 100);
  const cleanBody = sanitizeInput(body, 600);

  return `Halo JohnDev, saya ${cleanName}.
Saya ingin berdiskusi mengenai kebutuhan: ${cleanTopic}.
${cleanBody ? `\nCatatan kebutuhan:\n${cleanBody}` : ""}`.trim();
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Point of Sale (POS) & Kasir Pintar");
  const [details, setDetails] = useState("");

  const message = buildMessage(name, topic, details);
  const waHref = whatsappLink(message);

  return (
    <section
      id="kontak"
      className="scroll-mt-20 bg-[#fafbfd] py-12 sm:py-16 border-b border-border/70 relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
            KONSULTASI &amp; DISKUSI PROYEK
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            Ceritakan Apa yang Ingin Anda Bangun
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl">
            Punya kendala alur kerja manual atau ide produk digital? Tim engineer kami siap memetakan arsitektur dan estimasi biaya tanpa komitmen.
          </p>
        </div>

        {/* Clean Studio Request Form (Lumora Request Form Style) */}
        <div className="mx-auto mt-8 sm:mt-10 max-w-2xl rounded-3xl border border-border/80 bg-white p-6 sm:p-10 shadow-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waHref, "_blank", "noopener,noreferrer");
            }}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="kontak-nama"
                className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2"
              >
                Nama Lengkap / Perusahaan
              </label>
              <input
                id="kontak-nama"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi Santoso (Toko Sentosa)"
                className="h-12 w-full rounded-xl border border-border/80 bg-[#f8fafc] px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:border-brand-primary focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="kontak-topik"
                className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2"
              >
                Kategori Solusi
              </label>
              <select
                id="kontak-topik"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="h-12 w-full rounded-xl border border-border/80 bg-[#f8fafc] px-4 text-sm font-medium text-foreground focus:bg-white focus:border-brand-primary focus:outline-none transition-all"
              >
                <option>Point of Sale (POS) &amp; Kasir Pintar</option>
                <option>ERP &amp; Manajemen Inventori Gudang</option>
                <option>Pengembangan Web App &amp; SaaS</option>
                <option>Aplikasi Mobile (Android / iOS)</option>
                <option>Integrasi Hardware (Printer Thermal &amp; Barcode)</option>
                <option>Integrasi WhatsApp API &amp; Gateway Notifikasi</option>
                <option>Custom Enterprise Solution</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="kontak-detail"
                className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2"
              >
                Gambaran Kebutuhan &amp; Alur Kerja
              </label>
              <textarea
                id="kontak-detail"
                rows={4}
                maxLength={600}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Ceritakan singkat alur bisnis Anda saat ini, jumlah cabang/karyawan, dan fitur utama yang Anda harapkan."
                className="w-full resize-none rounded-xl border border-border/80 bg-[#f8fafc] p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:border-brand-primary focus:outline-none transition-all"
              />
              <p className="mt-1 text-xs text-right text-muted-foreground">
                {details.length}/600 karakter
              </p>
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-3 h-13 w-full rounded-full bg-brand-navy hover:bg-brand-navy-soft text-white text-sm font-semibold transition-all shadow-md hover:shadow-xl cursor-pointer"
            >
              <span>Hubungkan ke WhatsApp JohnDev</span>
              <span className="grid size-8 place-items-center rounded-full bg-white/15 text-brand-lime transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4" />
              </span>
            </button>
          </form>
        </div>

        {/* Contact info below form */}
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Clock className="size-3.5 text-brand-primary" />
            <span>Respons tim: &lt; 24 jam kerja</span>
          </div>

          <a
            href={`tel:+${siteConfig.contact.whatsapp}`}
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors font-medium"
          >
            <Phone className="size-3.5 text-brand-primary" />
            {siteConfig.contact.whatsappDisplay}
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors font-medium"
          >
            <Mail className="size-3.5 text-brand-primary" />
            {siteConfig.contact.email}
          </a>
        </div>

      </div>
    </section>
  );
}
