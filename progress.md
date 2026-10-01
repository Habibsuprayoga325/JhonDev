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
| Domain | `Johntech.web.id` (dari John) |
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

---

## 2026-10-01 — Fix Nomor WhatsApp + Step 1.2: Mobile Menu

### Bug: nomor WhatsApp tidak bisa dihubungi

**Gejala:** klik CTA → WhatsApp tampil *"The number +62 878-4607-382 isn't on WhatsApp"*.

**Akar masalah:** kelalaian transkripsi saat memasukkan nomor dari CV ke `site-config.ts`.
Dua field punya format berbeda, hanya satu yang salah:

| Field | Sebelum | Sesudah | Status |
|---|---|---|---|
| `whatsappDisplay` | `+62 878-4607-3782` | tidak berubah | ✅ benar sejak awal |
| `whatsapp` (untuk URL) | `628784607382` (10 digit) | `6287846073782` (11 digit) | ❌ Fixed |

Nomor di URL kehilangan satu digit `7`. URL-nya tetap **valid secara sintaks**,
jadi build dan lint tidak pernah menangkapnya — hanya WhatsApp yang menolak.
Nomor yang aktif tetap tampil benar karena sumbernya `whatsappDisplay`.

**Pencegahan:** guard di `site-config.ts` yang `throw` saat build kalau
`whatsapp` bukan 11–15 digit. Bug serupa akan gagal di CI, bukan di tangan klien.

### Step 1.2 — Mobile menu

1. **`src/components/ui/sheet.tsx`** — shadcn/ui Sheet (Base UI drawer).
   Dipilih karena sudah menyediakan focus trap, Escape-to-close, scroll lock, dan ARIA.
2. **`src/components/layout/mobile-nav.tsx`** — tombol hamburger (SVG inline,
   `aria-label="Buka menu navigasi"`), panel slide-in dari kanan, 4 item nav
   + CTA WhatsApp + link telepon.
3. **`site-header.tsx`** — `MobileNav` dipasang; nav desktop tetap `hidden md:flex`.
4. **`site-footer.tsx`** — tambah link `tel:` sebagai alternatif kalau WhatsApp
   tidak terpasang di perangkat pengguna.

### Catatan Base UI (lanjutan dari Step 1.1)

Base UI memakai prop **`render`**, bukan `asChild` (Radix).
`SheetTrigger render={<button />}` — itulah polanya di `mobile-nav.tsx`.

### Verifikasi

- `npm run build` → ✅ (2×TypeScript error `SheetClose` belum di-import, sudah diperbaiki)
- `npm run lint` → ✅ 0 error
- Render: `wa.me/6287846073782` (11 digit), `tel:+6287846073782`,
  `aria-label="Buka menu navigasi"` — semua ada.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | `/privacy`, `/terms`, `#layanan`, `#harga`, `#kontak` masih **404**. |
| 🟡 Sedang | Logo masih monogram teks "JD", asset logo asli belum diimpor. |
| 🟡 Sedang | Mobile menu **belum diuji di perangkat sentuh sungguhan** — hanya diuji lewat render HTML. Perlu dicek manual di HP. |
| 🟠 Info | Tombol CTA desktop masih terlihat di mobile (bersamaan dengan hamburger). Kalau terasa penuh, sembunyikan CTA di <640px. |

---

## 2026-10-01 — Step 1.3: Hero Section

### Yang dikerjakan

1. **`src/components/sections/hero.tsx`** — eyebrow pill, H1 dengan sorotan
   kata kunci, subheadline, dua CTA, reassurance line ("Balasan dalam 24 jam
   kerja · Tanpa biaya konsultasi"), dan trust bar 3 angka.
2. **`src/app/page.tsx`** — sekarang hanya merakit `<Hero />` + placeholder.

### Copy rationale

H1 ditulis **"Sistem digital untuk bisnis yang sudah berjalan"** — bukan
"kami mengerjakan apa saja". Ini menyasar persona B (owner yang sudah punya
sistem tapi berantakan), dan sengaja mengecualikan yang baru mulai, supaya
pelanggan tidak salah datang.

Subheadline menyebut **printer, kasir, gudang** karena itu diferensiator nyata
JohnDev (CV: CUPS + integrasi printer) yang tidak bisa diklaim agency web biasa.

Trust bar memakai klaim yang bisa diverifikasi dari CV. **Angka tidak boleh
ditambah tanpa bukti** — klausa ini dikomentari di source.

### Bug yang ditemukan: brand tokens tidak ter-generate

`--brand-*` sudah ada di `:root` `globals.css`, tapi **tidak terdaftar di
`@theme inline`**. Tailwind v4 hanya membuat utility dari token yang terdaftar
di `@theme`, jadi `bg-brand-light`, `text-brand-primary`, dan
`border-brand-border` **tidak menghasilkan CSS sama sekali** — build tetap hijau.

Terdeteksi karena verifikasi CSS hasil build, bukan dari kode saja.
Perbaikan: daftarkan keenam token brand di `@theme inline`.

**Pelajaran:** di Tailwind v4, variabel CSS di `:root` **tidak otomatis**
menjadi utility class. Cek `.next/**/*.css` setelah pakai token kustom.

### Verifikasi

- `npm run build` → ✅ (setelah `rm -rf .next` untuk memastikan bukan cache)
- `npm run lint` → ✅ 0 error
- Cek CSS hasil build: `bg-brand-light`, `text-brand-primary`, `border-brand-border`,
  `text-balance`, `text-pretty` → semua ≥1 (sebelumnya 0).
- Render: seluruh copy hero, trust bar, dan WA link → semua ada.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | `/layanan`, `/harga`, `/kontak`, `/privacy`, `/terms` masih **404**. Tombol "Lihat Layanan" sudah menunjuk ke sana. |
| 🟡 Sedang | Trust bar belum di-link ke bukti (case study). Untuk sekarang klaim ada tapi belum bisa diklik — Step 3.4. |
| 🟡 Sedang | Hero belum diuji visual di layar nyata (browser tool timeout di sesi ini). |
| 🟠 Info | `text-balance`/`text-pretty` butuh browser modern; di browser lama headline tidak rapi — degradasi aman (justify normal). |

---

## 2026-10-01 — Step 1.3 (revisi): copy hero

### Masalah

John: *"kata-katanya masih kurang untuk mengajak customer"*.

**Akar masalah:** copy sebelumnya **deskriptif**, bukan persuasif. Ia
menjelaskan apa yang John kerjakan ("memindahkan operasional kertas ke
sistem"), padahal calon klien tidak-care apa yang dikerjakan — dia peduli
**rasa sakitnya sendiri**.

Bandingkan pola hero yang dipakai pemasar besar (Shopify: *"Be the next
AI all-star"*, *"Get started fast"*): pendek, menantang, dan menyasar
**kedudukan** — bukan menjelaskan arsitektur sistem.

### Copy baru

| Elemen | Lama | Baru |
|---|---|---|
| Eyebrow | JohnDev Technology Solution | 4+ sistem produksi sudah jalan untuk klien kami |
| H1 | "Sistem digital untuk bisnis yang sudah berjalan" | "Order numpuk di WhatsApp, stok tidak sinkron? **Saya yang bikin jalan, dari server sampai printer.**" |
| Subheadline | "Kami memindahkan operasional kertas, WhatsApp..." | "Bukan sekadar website. POS, ERP, aplikasi kasir, sampai integrasi printer dan gudang — dikerjakan satu orang, dari requirement sampai sistem benar-benar dipakai karyawan Anda." |
| CTA utama | Konsultasi Gratis | **Ceritakan Masalah Anda** |
| CTA kedua | Lihat Layanan | Lihat yang Bisa Saya Kerjakan |
| Reassurance | Tanpa biaya konsultasi | Konsultasi pertama gratis |

### Prinsip yang dipakai

1. **Pakai kalimat yang boss-nya ucapkan.** "Order numpuk di WhatsApp, stok
   tidak sinkron" adalah bahasa pemilik usaha, bukan bahasa konsultan IT.
2. **Janji-janji tak bere,** gantikan klaim. "Saya yang bikin jalan, dari
   server sampai printer" — spesifik dan bisa dibuktikan (CV: CUPS).
3. **"Bukan sekadar website"** upfront. Ini memfilter yang cuma cari landing
   page Murah, dan justrumemperbesar pool lead yang tepat.
4. **"Dikerjakan satu orang"** — menyentuh ke keluhan klasik: vendor
   yang biayanya tinggi lalu disappears setelah serah terima.
5. **CTA lowered the ask.** "Ceritakan Masalah Anda" invites a conversation,
   bukan membeli — jauh lebih rendah hambatannya dari "Konsultasi Gratis".

### Trust bar diperkuat

Semula angka teknis (6+ stack) — tidak terasa relevan bagi pemilik usaha.
Diganti jadi yang menjawab keberatan:

- **4+** — Sistem produksi berjalan hari ini
- **100%** — Dikerjakan 1 orang, bukan dioper ke vendor lain
- **1.000+** — Siswa & trainee yang saya latih

### Metadata SEO diselaraskan

Title → *"JohnDev — POS, ERP & Integrasi Printer untuk Bisnis Anda"*
(konsisten dengan positioning hardware yang sekarang jadi angle utama).
Description memakai pembuka yang sama dengan H1.

### Verifikasi

- `npm run build` → ✅ · `npm run lint` → ✅ 0 masalah
- Render H1, subheadline, 2 CTA, trust bar, title → semua sesuai

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | H1 sekarang **dua kalimat** — pada 360px bisa wrap menjadi 4–5 baris. Perlu dicek visual di HP. |
| 🟡 Sedang | Klaim "4+ sistem produksi sudah jalan" muncul di eyebrow; harus konsisten dengan `/layanan` di Step 2. |
| 🟡 Sedang | Link `#layanan` masih 404 — tombol "Lihat yang Bisa Saya Kerjakan" sekarang menjanjikan sesuatu yang belum ada. |
| 🟠 Info | Copy masih perlu review **bahasa** — John yang pakai, aku tidak tahu register yang paling pas untuk targetnya. |

---

## 2026-10-01 — Step 1.3 (revisi 2): nada perusahaan, bukan one-man show

### Masukan John (dua arah, keduanya valid)

**Kritik 1 — nada "freelancer".** Kalimat *"Saya yang bikin jalan"* dan
*"dikerjakan satu orang"* menurunkan kredibilitas sebagai entitas. Klien B2B
ragu kalau tahu sistemnya di-handle satu orang — takut tidak ada support kalau
sibuk atau sakit.

**Kritik 2 — usulan dari agent lain terlalu kaku.** Opsi yang ditawarkan
(*"dalam Satu Ekosistem Terpadu"*, *"infrastruktur sistem yang siap pakai"*)
memakai bahasa korporat yang tidak dipakai pemilik usaha. Itu memang gaya
Stripe/enterprise, tapi jaraknya terlalu jauh dari bahasa calon kalon John.

### Solusi: tengah di antara keduanya

Ambil **struktur argumentasi** dari versi enterprise (masalah → hasil), tapi
ganti **kosa kata**-nya ke bahasa pemilik usaha. Dan ubah subjek dari
**"saya" ke "kami"** — ini yang mengembalikan kredibilitas tanpa perlu
menyebut jumlah orang.

| | Revisi 1 (freelancer) | Revisi 2 (kini) |
|---|---|---|
| H1 | "Order numpuk di WhatsApp, stok tidak sinkron? **Saya** yang bikin jalan, dari server sampai printer." | "Berhenti mengelola bisnis di WhatsApp, buku, dan catatan. **Pindahkan ke satu sistem yang jalan otomatis.**" |
| Subhead | "…dikerjakan **satu orang**, dari requirement…" | "**Kami** membangun aplikasi web & mobile, modul ERP, POS, hingga integrasi printer kasir dan gudang — semua **disesuaikan dengan alur kerja bisnis Anda**, bukan paket bawaan yang harus dibelajarkan ulang." |
| CTA 1 | Ceritakan Masalah Anda | **Konsultasikan Kebutuhan Anda** |
| CTA 2 | Lihat yang Bisa Saya Kerjakan | Lihat Layanan |
| Eyebrow | …untuk klien kami | 4+ sistem produksi aktif untuk klien kami |

### Trust bar

Trust bar "100% dikerjakan 1 orang" **dihapus** — justru memperkuat kesan
one-man show. Diganti dua angka lain yang tetap bisa diverifikasi dari CV:

- **4+** Sistem produksi aktif hari ini
- **6+** Teknologi: web, mobile, sampai hardware
- **1.000+** Orang yang saya latih pakai teknologi ini

### Prinsip

1. **Subjek = "kami".** Klien membeli entitas, bukan individu. Menyebut
   "saya" di headline+H1+trust bar menandai ini portofolio pribadi.
2. **Kosa kata tetap konkret.** "Alur kerja", "printer kasir", "gudang" —
   bukan "ekosistem", "infrastruktur", "solusi terpadu".
3. **Pains tetap spesifik.** "WhatsApp, buku, dan catatan" — kalimat yang
   benar-benar terasa oleh pemilik usaha, bukan abstrak.
4. **"Bukan paket bawaan yang harus dibelajarkan ulang"** — keberatan
   tersembunyi dari produk instan (SaaS/Accurate/Odoo) expressed dalam satu klausa.
5. **CTA "Konsultasikan Kebutuhan Anda"** — cukup profesional untuk B2B,
   tetap rendah hambatan.

### Metadata SEO

Title → *"JohnDev — Sistem Operasional Bisnis Otomatis"*;
description memakai pembuka yang sama dengan H1.

### Verifikasi

- `npm run build` → ✅ · `npm run lint` → ✅ 0 masalah
- Render H1, CTA, title → sesuai. Tidak ada lagi frasa "saya yang bikin"
  maupun "satu orang" di halaman.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | Frasa "kami" dipakai tanpa menjelaskan siapa (perusahaan/sole proprietorship). Kalau ingin, tambahkan "CV JohnDev Technology Solution" di footer atau section Kontak agar entitasnya terasa resmi. |
| 🟡 Sedang | Trust bar "6+ Teknologi: web, mobile, sampai hardware" sengaja dikembalikan (revisi 1 menggantinya dengan 'dikerjakan satu orang'). |
| 🟡 Sedang | `#layanan` masih 404 — tombol "Lihat Layanan" masih promising sesuatu yang belum ada. |
| 🟠 Info | Ketiga revisi ini masih **berhypothese**. Copy final sebaiknya diuji ke 2–3 prospek nyata (kirim link, lihat mana yang bikin mereka chat). Data >CCPREFER. |

---

## 2026-10-01 — Step 2.1 + 2.2: Katalog Layanan

### Yang dikerjakan

1. **`src/lib/services-data.ts`** — 8 kategori layanan sebagai typed data
   (`ServiceCategory`). Sumber tunggal; menambah layanan = menambah satu objek.
2. **`src/components/services/service-glyph.tsx`** — pemetaan `ServiceIcon`
   → komponen lucide-react, dengan fallback `Globe` untuk key tak dikenal.
3. **`src/components/services/service-card.tsx`** — kartu: ikon, badge kategori,
   judul, deskripsi, 3 contoh konkret, harga "mulai dari", dan tombol "Tanya"
   yang membuka WA dengan pesan spesifik per layanan.
4. **`src/components/sections/services-section.tsx`** — grid 1/2/3 kolom,
   `id="layanan"` (menutup link yang tadinya 404), `scroll-mt-16` agar tidak
   ketutup header sticky.
5. **`src/app/page.tsx`** — `<ServicesSection />` dipasang.

### Keputusan: harga "mulai dari", bukan angka pasti

Harga custom bergantung pada scope. Angka kaku di website cepat basi dan
berisiko salah janji. Semua kartu memakai "Mulai dari Rp X juta" + disclaimer
di bawah grid: *"Harga bersifat estimasi awal dan bergantung pada scope."*

Angka-angka ini **placeholder yang perlu dikonfirmasi John** sebelum launch —
belum divalidasi terhadap biaya riil.

### Keputusan: server component, tanpa filter

Section ini **tidak punya state**, jadi tidak perlu `"use client"` — nol JS
terunduh untuk bagian yang paling besar. Filter kategori baru butuh
client component; catatannya sudah ditulis di docblock `services-section.tsx`.

### Verifikasi

- `npm run build` → ✅ · `npm run lint` → ✅ 0 masalah
- Render: `id="layanan"` ada, **8 `<article>`**, 8 judul unik, ikon ter-render,
  link WA per kartu memakai pesan spesifik ("saya tertarik dengan layanan ...").

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 **Tinggi** | **Harga placeholder.** Semua angka `Rp X juta` adalah tebakan awal, belum divalidasi terhadap biaya riil John. Salah harga = kredibilitas rusak + janji meleset. Perlu dikonfirmasi sebelum launch. |
| 🟡 Sedang | Copy 8 layanan belum ditinjau John — ini marketing copy yang belum diuji ke pasar. |
| 🟡 Sedang | Tombol "Tanya" di setiap kartu menambah **9 link WA di halaman**. Kalau terasaighbourhoodspam, pertimbangkan tombol tunggal di akhir grid (Step 2.4). |
| 🟠 Info | `featured` di-index (`index === 1 `||``||` index === 5`) adalah placeholder — logikanya arbitrer, ganti kalau John punya layanan yang mau ditonjolkan. |
| 🟠 Info | `#harga`, `#kontak`, `/privacy`, `/terms` masih 404. |
