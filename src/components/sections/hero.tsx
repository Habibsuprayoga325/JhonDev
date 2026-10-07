"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Database,
  Layers,
  Receipt,
  Cpu,
  Clock,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTA_MESSAGE_DEFAULT, whatsappLink } from "@/lib/site-config";

/**
 * Node sistem operasional untuk visualisasi orbital (Image 2)
 */
const systemNodes = [
  {
    id: "web",
    title: "Web & SaaS",
    description: "Aplikasi web & dashboard operasional performa tinggi berbasis Next.js & React.",
    icon: Layers,
    color: "#00d2ff",
    pos: "top-4 left-6 sm:left-10",
    animClass: "animate-float",
  },
  {
    id: "pos",
    title: "POS Kasir",
    description: "Aplikasi kasir multi-cabang dengan integrasi printer thermal & scanner.",
    icon: Receipt,
    color: "#0062ff",
    pos: "top-24 right-2 sm:right-6",
    animClass: "animate-float-delayed",
  },
  {
    id: "erp",
    title: "ERP & Stok",
    description: "Sentralisasi mutasi inventori gudang, purchase order, dan laporan laba-rugi.",
    icon: Database,
    color: "#8ce500",
    pos: "bottom-12 left-6 sm:left-12",
    animClass: "animate-float",
  },
  {
    id: "iot",
    title: "Hardware & IoT",
    description: "Koneksi printer thermal kasir, timbangan digital, serta WhatsApp API gateway.",
    icon: Cpu,
    color: "#060b28",
    pos: "bottom-4 right-10 sm:right-16",
    animClass: "animate-float-delayed",
  },
] as const;

/**
 * Metrik dampak operasional (Image 2)
 */
const heroMetrics = [
  {
    value: "100%",
    label: "Kustomisasi Alur SOP",
    detail: "Bukan paket bawaan yang kaku",
  },
  {
    value: "3x",
    label: "Siklus Rilis Lebih Cepat",
    detail: "Dari konsep hingga produksi",
  },
  {
    value: "10x",
    label: "Efisiensi Waktu Kerja",
    detail: "Otomasi proses repetitif harian",
  },
] as const;

export function Hero() {
  const [activeNode, setActiveNode] = useState<(typeof systemNodes)[number]>(systemNodes[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-[#f8fafc] pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Background ambient lighting - aksen cyan dan neon lime dari logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-1/4 -right-32 h-[28rem] w-[28rem] rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          
          {/* ==================== KOLOM KIRI: HEADLINE & COPYWRITING ==================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Studio Eyebrow */}
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
              ARSITEKTUR PERANGKAT LUNAK BISNIS
            </span>

            {/* Headline */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-balance">
              Sistem Digital Bisnis.{" "}
              <span className="block mt-1 text-gradient-brand">
                Dibangun untuk Efisiensi Nyata.
              </span>
            </h1>

            {/* Subheadline yang padat & profesional */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
              Berhenti mengelola bisnis dengan catatan terpisah dan chat WhatsApp yang menumpuk.
              JohnDev merancang aplikasi POS kasir, ERP inventori, dan software kustom yang 100%
              disesuaikan dengan alur kerja unik bisnis Anda.
            </p>

            {/* Tombol CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href={whatsappLink(CTA_MESSAGE_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group relative h-12.5 px-8 rounded-full text-base font-semibold bg-brand-navy hover:bg-brand-navy-soft text-white transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 overflow-hidden",
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Konsultasikan Kebutuhan
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 text-brand-lime" />
                </span>
              </a>

              <a
                href="#layanan"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12.5 px-7 rounded-full text-base font-medium border-border/80 bg-white/80 hover:bg-white text-foreground transition-all shadow-2xs hover:border-brand-primary/40",
                )}
              >
                Lihat Layanan
              </a>
            </div>

            <p className="mt-3.5 text-xs text-muted-foreground flex items-center gap-2">
              <Clock className="size-3.5 text-brand-primary" />
              <span>Respons teknis &lt; 24 jam kerja &middot; Konsultasi awal tanpa komitmen</span>
            </p>
          </div>


          {/* ==================== KOLOM KANAN: THE ORBITAL ARC & KEY METRICS (IMAGE 2 & 3) ==================== */}
          <div className="lg:col-span-5 relative flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-8">
            
            {/* Visual Arc Box */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Sweeping Circular Arc SVG */}
              {/* Sweeping Circular Arc SVG with slow radar rotation */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {/* Outer decorative track with slow ambient spin */}
                <circle
                  cx="200"
                  cy="200"
                  r="175"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  className="opacity-70 animate-[spin_60s_linear_infinite] origin-center"
                />
                
                {/* Sweeping Arc Track with Brand Gradient */}
                <circle
                  cx="200"
                  cy="200"
                  r="135"
                  fill="none"
                  stroke="url(#arcGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="480 380"
                  className="opacity-85"
                />

                {/* Inner track */}
                <circle
                  cx="200"
                  cy="200"
                  r="95"
                  fill="none"
                  stroke="#dbeafe"
                  strokeWidth="1.5"
                  className="opacity-60"
                />

                <defs>
                  <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#060b28" stopOpacity="0.9" />
                    <stop offset="45%" stopColor="#0062ff" stopOpacity="0.95" />
                    <stop offset="85%" stopColor="#00d2ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#8ce500" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central Tactile 3D Sphere (Image 3 "Enigma" Inspired) */}
              <div
                className={cn(
                  "relative z-20 flex size-40 sm:size-44 flex-col items-center justify-center rounded-full text-center transition-all duration-500 cursor-pointer select-none",
                  "bg-gradient-to-b from-white via-[#fcfdff] to-[#edf2f9]",
                  "shadow-[0_20px_40px_-10px_rgba(6,11,40,0.18),0_0_0_1px_rgba(255,255,255,0.9)_inset,0_2px_8px_rgba(255,255,255,0.8)_inset]",
                  "border border-border/70 hover:scale-105 active:scale-98",
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Soft glowing ambient aura behind center orb */}
                <div
                  className={cn(
                    "absolute -inset-2 rounded-full -z-10 transition-opacity duration-700 blur-xl",
                    isHovered
                      ? "bg-gradient-to-tr from-cyan-400/40 via-blue-500/30 to-lime-400/40 opacity-100"
                      : "bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 opacity-50",
                  )}
                />

                {/* JohnDev Official Monogram Icon inside */}
                <div className="relative size-12 mb-1 flex items-center justify-center">
                  <Image
                    src="/johndev-icon-transparent.png"
                    alt="JohnDev"
                    width={48}
                    height={34}
                    style={{ width: "auto", height: "auto" }}
                    className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                </div>

                <div className="font-extrabold text-xs sm:text-sm tracking-tight text-foreground">
                  JohnDev Core
                </div>

                <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-white/90 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-muted-foreground border border-border/80 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-brand-lime" />
                  <span>99.9% UPTIME</span>
                </div>
              </div>

              {/* Orbiting Animated System Nodes (Image 2) */}
              {systemNodes.map((node) => {
                const IconComponent = node.icon;
                const isCurrent = activeNode.id === node.id;

                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveNode(node)}
                    className={cn(
                      "absolute z-30 flex items-center gap-2 rounded-full p-2 pr-3 text-xs font-semibold shadow-md transition-all duration-300 cursor-pointer",
                      node.pos,
                      node.animClass,
                      isCurrent
                        ? "bg-white text-brand-navy ring-2 ring-brand-primary scale-110 shadow-lg"
                        : "bg-white/95 text-muted-foreground hover:bg-white hover:text-foreground hover:scale-105 border border-border/80",
                    )}
                  >
                    <span
                      className="grid size-6.5 place-items-center rounded-full text-white shadow-2xs"
                      style={{ backgroundColor: node.color }}
                    >
                      <IconComponent className="size-3.5" />
                    </span>
                    <span className="hidden sm:inline font-bold tracking-tight">
                      {node.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Impact Metrics Stack on Right (Image 2) */}
            <div className="w-full lg:w-44 flex flex-row lg:flex-col justify-around lg:justify-center gap-6 sm:gap-8 border-t lg:border-t-0 lg:border-l border-border/80 pt-6 lg:pt-0 lg:pl-6">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="text-left">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-semibold text-foreground/90">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground hidden sm:block">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
