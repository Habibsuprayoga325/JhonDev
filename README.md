# JohnDev — Company Profile

Marketing site untuk **JohnDev Technology Solution**: membantu pemilik bisnis memindahkan
operasional ke digital (company profile, SaaS, ERP, POS, CRM, CMS, mobile app, integrasi hardware/IoT).

## Status

| Item | Value |
|---|---|
| Nama brand | JohnDev |
| Bentuk produk | Marketing site + CTA WhatsApp (portal klien = Phase 2) |
| Metrik utama | 25 qualified leads + lead→meeting ≥20% |
| Stack | Next.js 16 (App Router) · TypeScript · Tailwind v4 · shadcn/ui |
| Font | Plus Jakarta Sans |
| Hosting | Milik John (TBD) |
| Docs | [`PRD.md`](docs/PRD.md) |

## Brand tokens

```css
--brand-primary: #2563eb;   /* biru logo  */
--brand-navy:    #0f172a;   /* teks      */
--brand-light:   #eff6ff;   /* accent bg */
```

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Struktur

```
src/
  app/
    layout.tsx        # metadata, font, global wrapper
    globals.css       # design tokens (brand palette)
    page.tsx          # homepage
  components/
    ui/               # shadcn/ui components
  lib/
    utils.ts          # cn() helper
```

## Workflow

Ikuti urutan di `PRD.md` §9 (Scope). Aturan main:

1. Satu langkah pada satu waktu — jangan lompat.
2. Setiap langkah harus bisa dites sendiri.
3. Keputusan teknis di luar rencana → tanya dulu, jangan asumsikan.
4. Setelah selesai: ringkas 3–5 poin + daftar file + langkah tes manual.

## Security baseline

Lihat `PRD.md` §7. Wajib sebelum production: Zod server-side validation, rate limit,
honeypot, CSP header, tidak ada secret di client bundle.
