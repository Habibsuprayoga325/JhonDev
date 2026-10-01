# progress.md — JohnDev Company Profile

Status: **Phase 0 selesai** — fondasi project siap. Next: Step 0.5 (Step 1.x layout).

---

## 2026-10-01 — Phase 0: Keputusan & Persiapan

### Yang dikerjakan

1. **PRD ditulis** (`docs/PRD.md`, 349 baris) — 11 section: problem statement berbasis bukti
   (4 sistem produksi live dari CV), 4 persona, goals K3, 5 user story,
   17 functional + 11 non-functional requirement, 10 security requirement,
   40 langkah execution (6 phase), 6 risiko, DoD.
2. **5 keputusan pembuka dikunci** oleh John: JohnDev, marketing site saja,
   metrik leads (bukan DAU), repo GitHub, hosting sendiri (bukan Vercel).
3. **Scaffold Next.js** — Next.js 16.3.8 App Router, TypeScript, Tailwind v4, ESLint,
   `src/` dir, alias `@/*`. 358 packages, 0 vulnerability.
4. **shadcn/ui diinstall** — `button`, `card`, `badge`, `input`, `textarea`, `label`.
   Plus `lib/utils.ts` (helper `cn()`).
5. **Design tokens** — palette logo diterapkan ke `globals.css`
   (light + dark), `layout.tsx` diganti ke Plus Jakarta Sans + metadata SEO Indonesia.
6. **README.md** ditulis ulang (status, tokens, struktur, workflow, security baseline).

### Keputusan arsitektur

| Keputusan | Alasan |
|---|---|
| Static data (`src/lib/*.ts`) untuk produk/case study, bukan headless CMS | 10 produk statis; CMS = dependency + biaya tanpa Benefit di Phase 1 |
| shadcn/ui (bukan component library.npmjs) | komponen masuk ke repo → full ownership, tidak ada vendor lock-in |
| Server Action + Zod untuk form kontak | tanpa API key pihak ketiga; validasi server-side by design |
| Plus Jakarta Sans | font Indonesia, professional, sesuai brand "teknologi-terpercaya" |
| Plus Jakarta Sans Mono → JetBrains Mono | numerals & code consistency |

### Files

| File | Perubahan |
|---|---|
| `docs/PRD.md` | baru — 349 baris |
| `README.md` | baru (ganti default CRA) |
| `src/app/globals.css` | palette brand + dark mode |
| `src/app/layout.tsx` | font, metadata SEO, `lang="id"` |
| `src/lib/utils.ts` | baru (shadcn) |
| `src/components/ui/*.tsx` | baru: button, card, badge, input, textarea, label |
| `package.json` | next 16.3.8, react 19.2.8, tailwind v4 |

### Verifikasi

- `npm run build` → ✅ sukses, 4 route static, TypeScript strict bersih.
- `npm audit` → 0 vulnerability.

### Catatan

- `gh` CLI belum terinstall di mesin ini. Push lewat git HTTPS manual dulu,
  atau install `gh` untuk workflow berikutnya.
- Hosting (K5) belum ditentukan — memengaruhi Step 5.9 saja.

---

## 2026-10-01 — Step 1.1: Layout Shell

### Keputusan yang masuk

| K | Nilai |
|---|---|
| Domain | `johntech.web.id` (dari John) |
| WhatsApp | `+62 878-4607-3782` → `wa.me/628784607382` |

### Yang dikerjakan

1. **`src/lib/site-config.ts`** — single source of truth untuk domain, kontak,
   nav links, dan link WhatsApp (`whatsappLink()` helper + pesan preset).
2. **`src/components/layout/site-header.tsx`** — sticky header, logo monogram
   "JD", 4 item nav (disembunyikan di mobile), CTA "Konsultasi Gratis".
3. **`src/components/layout/site-footer.tsx`** — 4 kolom (brand, navigasi,
   kontak, media) + baris copyright & legal links.
4. **`layout.tsx`** — passthrough `SiteHeader` / `SiteFooter` + skip-link
   "Lewati ke konten utama" untuk aksesibilitas keyboard.
5. **`page.tsx`** — hero placeholder (eyebrow, H1, subheadline, 2 CTA) +
   placeholder section yang menandai batas Step 1.1.

### Temuan teknis (penting untuk langkah berikutnya)

**shadcn/ui versi ini pakai Base UI (`@base-ui/react`), BUKAN Radix.**
- Radix → `asChild` prop.
- Base UI → tidak punya `asChild`.

Build sempat gagal 3 error TypeScript karena `asChild`. **Solusi yang dipakai:**
anchor diberi styling via `buttonVariants()` + `cn()`, bukan `asChild`/`render`.
Pola ini yang dipakai untuk semua CTA link di project — hindari `asChild` ke depan.

### Verifikasi

- `npm run build` → ✅ sukses, 2 route static, TypeScript strict bersih.
- `npm run lint` → ✅ 0 error.
- Render check via HTTP: H1, WA deep link (ter-encode), nav anchor, footer,
  skip-link — semua ada.
- `npm audit` → 0 vulnerability.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | `/privacy`, `/terms`, `#layanan`, `#harga`, `#kontak` semua **404** saat ini — footer & nav sudah menautkan ke sana. Akan hilang sendiri begitu Step 2–5 membangun section/page-nya. |
| 🟡 Sedang | Logo masih teks monogram "JD" placeholder — asset logo asli belum diimpor. |
| 🟡 Sedang | Nav mobile disembunyikan (`hidden md:flex`) dan **belum ada hamburger menu** — harus diselesaikan di Step 1.2. |
