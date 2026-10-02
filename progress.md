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

---

## 2026-10-01 — Penurunan Harga + Step 3: WhyJohnDev

### Penurunan harga (−10%)

John: harga terasa overprice. Diturunkan −10% lalu **dibulatkan** ke angka
yang enak dibaca (tidak ada "Rp 2,7 juta" di kartu):

| Layanan | Lama | Baru | Deviasi |
|---|---|---|---|
| Company Profile | 3 jt | **2,5 jt** | −16,7% |
| Integrasi Sistem | 7 jt | **6,5 jt** | −7,1% |
| POS | 8 jt | **7,5 jt** | −6,2% |
| IoT | 10 jt | **9 jt** | −10% |
| CRM | 10 jt | **9 jt** | −10% |
| Mobile | 12 jt | **11 jt** | −8,3% |
| SaaS | 20 jt | **18 jt** | −10% |
| ERP | 25 jt | **22,5 jt** | −10% |

Deviasi tidak rata karena dibulatkan ke angka psychologically-bulat.
Tiga di antaranya turun lebih dari 10% (−6,2% – −8,3% masih dalam toleransi
perlu disetujui John.
perlu perlu disetujui John.

### Step 3 — WhyJohnDev

1. **`src/lib/credibility-data.ts`** — 4 pain point (masalah → solusi), 4 studi
   kasus dari CV, plus `credibilityStats`.
2. **`src/components/sections/why-jhondev-section.tsx`** — blok 4 pain point,
   grid 3 kartu studi kasus, dan CTA penutup di panel biru.
3. **`page.tsx`** — section dipasang setelah Layanan.

Struktur copy sengaja: **masalah → hasil**, bukan daftar klaim tanpa bukti. Setiap kartu studi kasus memuat Masalah, Hasil, dan Teknologi — supaya yang bisa diuji calon klien (bukan jargon, bukan pujian generik).
Struktur copy sengaja: **masalah → hasil**, bukan daftar klaim tanpa bukti.
### Temuan: satu domain klien mati

Semua URL studi kasus diuji dengan `curl` sebelum ditampilkan:

| Domain | Status |
|---|---|
| printsmart.my.id | ✅ 200 |
| ata.typeapproval.co.id | ✅ 200 |
| pilkasetda.my.id | ✅ 200 |
| **ppdbamanahbangsa.web.id** | ❌ **tidak merespons** |

**Tindakan:** study PPDB di-set `published: false` + `hiddenReason` terisi.
Tiga studi kasus yang hidup tetap tampil. Alasan disembunyikannya **tercatat
di kode** supaya bisa ditinjau ulang, bukan hilang diam-diam.

### Mekanisme permission (R1 di PRD)

Tiap studi kasus punya flag `published`. Komponen hanya me-render yang `true`.
Menampilkan nama klien tanpa izin = risiko hukum/reputasi, jadi ini di mechanic
rather than bergantung padaingingatan.
digunakan di kode, bukan bergantung pada ingatan.
Ditambahkan field `hiddenReason?: string` supaya keputusan tidak ditampilkan
selalu punya jejak alasan.

### Verifikasi

- `npm run build` → ✅ · `npm run lint` → ✅ 0 masalah
- Render: `id="why-jhondev"` ada, 4 pain point, **3 studi kasus tampil**,
  PPDB tidak muncul, harga baru terpakai, 8+3=11 `<article>`.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 **Tinggi** | **Harga masih placeholder.** Menurunkan 10% dari angka yang sendirinya belum tervalidasi tidak menjadikannya benar. Kalau biaya riil POS adalah 15 juta, tawaran 7,5 juta = kerugian. Perlu konfirmasi John. |
| 🟡 Sedang | **Izin tampilkan nama klien belum dikonfirmasi.** `published: true` saat ini berdasarkan asumsi John adalah pemilik atau pihak yang merekrutnya. Kalau belum pernah ditanyakan, samarkan nama kliennya. |
| 🟡 Sedang | Domain PPDB mati — kalau tidak sengaja, perbaiki; kalau tidak bisa dipulihkan, ganti domain atau hapus studi kasus ini. |
| 🟡 Sedang | Copy 4 pain point + 3 studi kasus belum diuji ke calon klien. |
| 🟠 Info | `#harga`, `#kontak`, `/privacy`, `/terms` masih 404. |

---

## 2026-10-01 — Anonymisasi klien + Zaquiza masuk sebagai studi kasus

### Keputusan John

1. **Harga** — dipakai apa adanya. Tidak turun lagi.
2. **Nama klien tidak akan dipublikasikan.**
3. **Studi kasus PPDB (domain mati) diganti** dengan project Android
   John — Aplikasi Kasir & Pemesanan Katering. Screenshots dikirim John.

### Perubahan data

- Semua `client` diganti **label industri**, bukan nama asli:
  "Sistem Otomasi Print & ERP Internal", "Fleet & Warehouse Management",
  "Sistem E-Voting & Data Voters", "Aplikasi Kasir & Pemesanan Katering".
- Nama asli dipindah ke **komentar kode** sebagai referensi internal saja.
- Studi kasus PPDB tetap ada di array dengan `published: false` +
  `hiddenReason` (bukan dihapus), supaya jejaknya tercatat.
- Studi kasus baru dapat field `kind: "web" | "mobile"` dan `proofNote`.

### Temuan keamanan: nama klien bocor lewat HTML attribute

Setelah anonymisasi `client`, masih ada kebocoran:

```
<article "zaquiza" ...>     → terbaca lewat View Source
```

**Akar masalah:** `id` dipakai sebagai React `key` pada `<article>`. Di
server component, React mengirim string key itu sebagai **HTML attribute**,
jadi terlihat di View Source meskipun tidak tampil di layar.

**Perbaikan:** semua `id` dinetralkan agar tidak derivasi dari nama klien
(`zaquiza` → `catering-pos`, `ata-galaxy` → `fleet-warehouse`,
`printsmart` → `print-erp`, `pilkasetda` → `e-voting`,
`ppdb` → `admission-portal`). Aturan ini ditulis di docblock `CaseStudy`.

**Pelajaran:** anonymisasi di UI saja tidak cukup. Kalau string yang
disamarkan masih muncul di atribut HTML, orang tetap bisa membacanya.
Selalu verifikasi dengan `curl | grep`, bukan hanya dengan mata.

**Catatan:** domain publik (`printsmart.my.id`, `pilkasetda.my.id`,
`ata.typeapproval.co.id`) **tetap tampil** — itu memang link yang sengaja
ditampilkan sebagai bukti. Kalau nanti tetap dianggap sensitif, hapus
field `url` dan pakai `proofNote` seperti yang dilakukan pada studi kasus
Android.

### Perlakuan khusus studi kasus tanpa URL

Aplikasi Android tidak punya link publik. Kartu sekarang:
- menampilkan badge "Android" (ikon smartphone)
- menampilkan `proofNote` di kotak abu: *"Demo layar dapat ditunjukkan saat konsultasi."*
- subjudul grid disesuaikan: "Tiga bisa Anda buka langsung sekarang; satu
  aplikasi Android didemokan saat konsultasi." — tidak lagi menjanjikan
  semua studi bisa diklik.

### Verifikasi

- `npm run build` → ✅ · `npm run lint` → ✅
- Render: **4 kartu**, badge Android, proofNote, subjudul baru.
- **Cek kebocoran** `curl | grep` untuk `zaquiza`, `Zaquiza`, `ata-galaxy`,
  `pilkasetda`, `printsmart"`, `ppdb"`, `Ata Galaxy`, `PPDB SMK Amanah` →
  semua 0 kecuali domain publik yang memang ditampilkan.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | **Domain klien masih terlihat di link** (`printsmart.my.id` dsb). Kalau nama domain ini menyentuh identitas klien, hapus field `url` — komponen sudah siap menanganinya lewat `proofNote`. |
| 🟡 Sedang | Link klien harus **dipantau berkala**. printsmart & pilkasetda balas HTTP 200 saat dicek; kalau suatu saat mati, itu masalah yang sama seperti PPDB. |
| 🟠 Info | `#harga`, `#kontak`, `/privacy`, `/terms` masih 404. |
| 🟠 Info | Screenshot Zaquiza belum dimasukkan sebagai gambar — baru deskripsi teks + badge. Kalau mau, screenshot bisa jadi bagian Step 3.4 (tapi perlu izin & optimasi ukuran). |

---

## 2026-10-01 — Logo marquee (ganti link klien) + anonymisasi final

### Keputusan John

Link klien **terlalu sensitif**. Diganti dengan **logo perusahaan saja**, dalam
marquee animasi bergerak kiri ke kanan. John meminta ukuran logo disesuaikan
oleh saya.

### Proses normalisasi logo

Tiga logo dari John (komposisi & warna dicek dengan Pillow lokal):

| Sumber | Asli | Masalah | Keluaran |
|---|---|---|---|
| PrintSmart | 2802x388, **aspect 7.2:1** | Bukan logo, tapi banner — 7x lebih lebar dari logo lain | 220x31 (8,3 KB) |
| Fleet & Warehouse | 1280x825 JPEG, **background putih** | Latar opaque, tidak menyatu | 148x96 (16,9 KB) |
| Panpilkades | 1254x1254 PNG, **background putih** | Square, latar opaque | 96x96 (23,7 KB) |

**Keputusan teknis:** dua batas, bukan satu — `MAX_H = 96` **dan**
`MAX_W = 220`. Tanpa batas lebar, logo PrintSmart jadi 675px dan carousel
terlihat rusak (satu logo 7x lebih besar dari yang lain).

Background putih diubah jadi transparan dengan **threshold 242** (bukan
>250`) supaya tepi antialiasing tidak meninggalkan halo putih. Logo PrintSmart
sudah PNG transparan asli, jadi tidak diolah sama sekali —akninya bisa
berhenti di tengah.

### Perubahan privasi

- **Semua `url` klien dihapus** dari studi kasus (3 domain publik dicabut).
  Field `url` tetap ada di type, jadi kalau klien menyetujui publikasi URL
  di kemudian hari tinggal diisi lagi.
- Setiap studi kasus kini punya `proofNote` yang menjelaskan cara verifikasi:
  *"Berjalan di server klien. Demo alur … dapat ditunjukkan saat konsultasi."*
- `clientLogos` — data baru, **logo saja**: tanpa nama, tanpa link.
  Alt text juga deskriptif, bukan nama klien.

### Komponen marquee

`src/components/credibility/logo-marquee.tsx` — **CSS animation, bukan JS**:
- jalan di compositor, tidak memblokir main thread
- tetap jalan sebelum JS selesai hydrate
- satu `@keyframes marquee` translateX(0) → translateX(-50%)
- list digandakan → `-50%` tepat satu siklus penuh, loop mulus tanpa celah

**Aksesibilitas:**
- `motion-reduce:animate-none` — animasi berhenti kalau user mengaktifkan
  `prefers-reduced-motion` (WCAG 2.1)
- copy kedua `aria-hidden` — logo tidak dibacakan dua kali
- pause saat hover (`group-hover`)
- mask gradient di tepi kiri/kanan supaya logo muncul ‒ hilang rapi

`next/image` dipakai (bukan `<img>`) — warning LCP hilang, optimasi otomatis.

### Verifikasi

- `npm run build` → ✅ · `npm run lint` → ✅ **0 warning**
- 3 logo dilayani HTTP 200 dengan Content-Length benar (8,5 / 17,3 / 24,2 KB)
- `animate-marquee` ada di HTML, ketiga `/clients/*.png` ter-referensikan
- **Cek kebocoran `curl | grep`**: printsmart, zaquiza, Zaquiza, pilkasetda,
  typeapproval, "Ata Galaxy" → **semua 0**
- **Link eksternal klien → 0** (sebelumnya 3)

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | **Dua gambar belum diproses.** John mengirim 5 gambar; 3 logo sudah dipakai. Dua sisanya (`image_14693e.png` 477x448 aspect 1.06, `image_c15167.png` 633x193 aspect 3.28) belum teridentifikasi — kemungkinan logo atau screenshot tambahan. Vision tool kena rate limit 429, jadi belum bisa saya pastikan. Perlu John konfirmasi. |
| 🟡 Sedang | **Logo klien harus punya izin.** Menampilkan logo perusahaan pihak tanpa izin sama risky-nya dengan menyebut nama. Perlu konfirmasi John sudah minta izin ke ke-3 pemilik logo. |
| 🟡 Sedang | Klaim "Logo klien yang menyetujui ditampilkan" **belum tentu benar** — kalimat itu sudah ditulis, tapi izinnya belum dikonfirmasi. Jangan dibiarkan berdiri kalau ternyata belum ada izin. |
| 🟠 Info | `#harga`, `#kontak`, `/privacy`, `/terms` masih 404. |
| 🟠 Info | `@keyframes marquee` dan `.animate-marquee` ada di `globals.css` di luar `@layer utilities` — tidak ter-override Tailwind karena specificity-nya unik. |

---

## 2026-10-01 — Marquee polish: opasitas, heading dihapus, 2 logo baru

### Perubahan

1. **Opasitas logo 0.70 → 0.95.** John: logo "kurang jelas terlalu transparan".
   Border tipis (seperti logo printSmart) hilang di opasitas rendah.
2. **Heading "Sistem yang sudah berjalan" + subjudulnya dihapus.** John:
   "tidak usah ada". Marquee dan kartu studi kasus tetap.
3. **2 logo baru ditambahkan** (`client-1.png` 91x96, `client-2.png` 220x45),
   diproses dengan pipeline yang sama (transparent background, dual size cap).
   Alt text deskriptif, bukan "Logo klien" — teks generik tidak berguna
   untuk pembaca screen reader.

### ⚠️ Catatan hukum: lambang negara di logo ke-3

Logo **PAN PILKADES (`e-voting.png`) memuat LAMBANG NEGARA Indonesia** — Garuda
Pancasila dengan tulisan "REPUBLIK INDONESIA". Penggunaan lambang negara
diatur **UU No. 28 Tahun 2014 tentang Lambang Negara**, yang melarang pemakaian
untuk kepentingan komersial oleh pihak/swasta, dengan sanksi pidana.

**Keputusan John (2026-10-01): ditampilkan, dengan risiko ditanggung John.**
Logo tetap dirender. Catatan ini disimpan supaya keputusan punya jejak:
kalau nanti ada komplain atau masalah legal, yang perlu diubah hanya menghapus
satu entri dari `clientLogos`.

Levelled risk:
- ~~Dasar hukum: UU No. 28 Tahun 2014 tentang Lambang Negara~~ — **SALAH, sudah dikoreksi di bawah.** UU 28/2014 adalah UU Hak Cipta, bukan undang-undang lambang negara.
- Yang dilakukan: John sudah diberi tahu risikonya dan memutuskan untuk ditampilkan. Keputusan ini dicatat di sini.
- Yang BELUM dilakukan: verifikasi apakah pihak yang berhak protes punya
  standing, atau apakah penggunaan ini termasuk pengecualian.

### Verifikasi

- `npm run build` → ✅ · `npm run lint` → ✅ 0 warning
- Render: **5 logo** terreferensikan, `opacity-95` ada, heading "Sistem yang
  sudah berjalan" → **0 kemunculan**, `client-1` & `client-2` HTTP 200.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🔴 Tinggi | **Lambang negara (UU 28/2014).** Sudah diputuskan John untuk ditampilkan, tapi ini exposure yang nyata dan berulang tiap kali logo tampil. Pertimbangkan: ganti dengan logo desa yang tidak memakai lambang negara, atau tampilkan hanya saat konsultasi 1-on-1. |
| 🟡 Sedang | **2 logo baru belum diidentifikasi.** John: "langsung pasang saja tidak apa-apa". Alt text dibuat generik karena isi logonya belum dipastikan. Kalau ternyata salah, cukup ganti. |
| 🟡 Sedang | **Izin logo belum dikonfirmasi** untuk 5 logo. |
| 🟡 Sedang | Logo **Garuda (merah-putih) kontras rendah** di atas kartu putih. Kalau kurang terbaca, butuh treatment khusus (border/background). |
| 🟠 Info | `#harga`, `#kontak`, `/privacy`, `/terms` masih 404. |

---

## 2026-10-01 — Kartu studi kasus DIHAPUS + koreksi catatan lambang negara

### 1. Kartu studi kasus dihapus

John: bagian penjelasan sistem yang sudah berjalan "tidak usah ada" — dan
men reiterated karena revisi sebelumnya **hanya menghapus heading-nya**, bukan
kartu-kartunya. Gogitu.

**Yang dihapus:** komponen `CaseCard` (62 baris) dan grid 4 kartu
(Masalah / Hasil / Teknologi + proofNote).

**Yang dipertahankan:** 4 pain point, logo marquee (5 logo), CTA penutup.

**Data TIDAK dihapus.** `caseStudies` dan `proofNote` tetap ada di
`credibility-data.ts` karena masih berguna untuk percakapan 1-on-1 atau
materi penjualan. Hanya render-nya yang dibuang.

Efek samping yang(QString bagus): 4 deskripsi teknis yang sebelumnya ter-render
(mention payment gateway, PostgreSQL, CUPS, algoritma validasi) kini tidak
publik. Itu incidentally mengurangi permukaan informasi tentang sistem klien.

### 2. ✅ Koreksi: catatan lambang negara

**Catatan sebelumnya salah.** John crosscheck dan memberi dasar hukum yang
benar; asumsi Hermes sebelumnya keliru.

| | Catatan lama (SALAH) | Koreksi John (BENAR) |
|---|---|---|
| Undang-undang | UU No. 28 Tahun 2014 | **UU No. 24 Tahun 2009** (Bendera, Bahasa, Lambang Negara) |
| UU 28/2014 itu | dianggap mengatur lambang negara | **Tentang Hak Cipta** |
| Batasan penggunaan | dilarang | **Putusan MK No. 4/PUU-X/2012** membatalkan Pasal 57 huruf d UU 24/2009 — warga & pihak swasta boleh memakai Garuda untuk aktivitas kemasyarakatan, atribut, kaus, logo organisasi swasta |

**Dasar hukum — UU No. 24 Tahun 2009** (Pasal 56 & 57):
- **Pasal 56**: Garuda Pancasila tidak boleh digunakan untuk kepentingan
  komersial, dan tidak boleh dipergunakan untuk tujuan yang bertentangan
  dengan nilai kebangsaan.
- **Pasal 57 huruf a**: larangan yang telah dibatalkan oleh MK.
- **Yang masih bisa dipidana** — yang masih dipidana:
  1. **Merusak/menghina** (mencoret, menggambari, menodai) — Pasal 57 jo. Pasal 66,
    isors embol(pidana 5 tahun / Rp 500 juta)
  2. **Komersialisasi yang memberi kesan produk resmi negara** (pemalsuan
     identitas resmi negara)

**Alasan John's specific case valid:** Panitia Pemilihan Kepala Desa adalah
lembaga *ad hoc* resmi yang dibentuk pemerintah desa untuk menyelenggarakan
agenda negara/daerah — bukan entity komersial. Karena itu penggunaan Garuda di
logo kepanitiaan **tidak masuk kategori komersialisasi ilegal**.

**Kesimpulan: flag 🔴 pada commit sebelumnya DIBATALKAN.** Logo Garuda tetap
ditampilkan, dan sekarang alasannya benar — bukan sekadar "John
risiko sendiri".

### Pelajaran untuk Hermes

1. Jangan menyebut nomor UU tanpa memverifikasinya. Aku menyebut "UU 28/2014"
   dengan yakin; John membetulkan dalam satu balasan.
2. Saat John memberi koreksi hukum, perlakukan sebagai data yang lebih kuat
   daripada asumsi awal aku — dan **koreksi catatan yang salah**, jangan hanya
   menambah catatan baru.
3. "John sudah memutuskan sendiri" BUKAN argumen hukum yang valid. Itu
   cuma keputusan, bukan dasar hukum.

### Verifikasi

- `npm run build` → ✅ · `npm run lint` → ✅ 0 warning
- Render: "MASALAH", "HASIL", "Fleet & Warehouse", "Aplikasi Kasir &
  Pemesanan", "E-Voting" → **semua 0**. Marquee (5 logo) + pain point tetap.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | Section WhyJohnDev sekarang hanya pain point + logo marquee. Kalau hasilnya terasa terlalu tipis untuk justify harga, opsi: tambah statistik, atau tambahkan satu blok "Bagaimana kami bekerja" (proses 4 langkah). |
| 🟡 Sedang | Kalimat *"Logo klien yang menyetujui ditampilkan"* masih berdiri. Izin untuk 5 logo belum dikonfirmasi. |
| 🟠 Info | Lambang negara: legal untuk_logo kepanitiaan resmi. Kalau nanti logo Garuda dipakai untuk konteks yang berbeda, tinjau ulang. |
| 🟠 Info | `#harga`, `#kontak`, `/privacy`, `/terms` masih 404. |

---

## 2026-10-01 — Izin logo dikonfirmasi + Blok "Cara Kami Bekerja" + Step 4.1–4.3

### 1. Izin logo — DICONFIRMASI

John mengizinkan penggunaan logo di website (2026-10-01). Kalimat
*"Logo klien yang menyetujui ditampilkan sebagai bukti portofolio"* sekarang
sesuai kenyataan. Risiko izin **tutup**.

### 2. Blok "Bagaimana Kami Bekerja"

Section WhyJohnDev terasa tipis setelah kartu studi kasus dihapus. Ditambah
4 langkah kerja (`workSteps` di `credibility-data.ts`):

| | Langkah |
|---|---|
| 01 | Wawancara & Pemetaan |
| 02 | Desain & Estimasi |
| 03 | Pengerjaan & Demo Berkala |
| 04 | Serah Terima & Pelatihan Tim |

Kata kerjanya sengaja dipilih yang **bisa diverifikasi** (wawancara,
approval, pelatihan, serah terima) — bukan jargon seperti "agile", "lean",
atau "best practice". Jargon itu tidak bergerak bagi calon klien;
"revisi tahap ini tidak menambah biaya" dan
"Anda tidak bergantung pada kami selamanya" — itu yang bergerak.

Render memakai `<ol>` + `<li>` (bukan `<div>`), jadi bermakna secara semantik
untuk pembaca screen reader.

### 3. Step 4.1–4.3 — Pricing

**`src/lib/pricing-data.ts`** — 4 paket:

| Paket | Mulai dari | Untuk siapa |
|---|---|---|
| Company Profile | Rp 2,5 jt | Butuh kehadiran digital, belum butuh sistem |
| **Sistem Operasional** ★ | Rp 9 jt | Operasional masih manual atau kacau |
| Aplikasi Mobile | Rp 11 jt | Tim lapangan/pelanggan butuh HP |
| Sistem Kustom | Rp 22,5 jt | Operasional besar + integrasi hardware |

**Keputusan produk: setiap paket punya `excludes` yang DITAMPILKAN.**
Bagian "Tidak termasuk" terlihat di semua 4 kartu. Alasannya: mencegah
ekspektasi salah, dan justru membangun kepercayaan — klien lebih mudah
bertanya kalau batasannya jelas.

**`pricing-section.tsx`** — grid 4 kolom, `id="harga"` (menutup link navbar
yang tadinya 404), `scroll-mt-16`, paket "Sistem Operasional" ditandai
`popular` dengan border biru + badge "Paling sering dipilih".

**Konsistensi harga diverifikasi otomatis:** 4 angka di `pricing-data.ts`
semua ada di `services-data.ts`. Kalau harga berubah di satu file, yang
lain harus ikut — dicek manual di langkah ini.

### Verifikasi

- `npm run build` → ✅ (1 SyntaxError karena kutip hilang saat edit baris,
  sudah diperbaiki) · `npm run lint` → ✅ 0 masalah
- Render: `id="harga"`, 4 paket, 4 harga, badge popular, 4 blok "Tidak
  termasuk", blok "Bagaimana kami bekerja" + 4 langkah, `href="#harga"` ada.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | **Harga masih placeholder.** Sudah disepakati (2026-10-01) untuk dipakai apa adanya, tapi belum divalidasi terhadap biaya riil. Kalau POSIX ternyata lebih murah, margin tergerus; kalau lebih mahal, tawaran merugi. |
| 🟡 Sedang | **"Pembayaran dapat dicicil"** — diklaim di disclaimer tanpa pernah dikonfirmasi John. Hapus kalau tidak mau dibagiratakan. |
| 🟡 Sedang | Badge **"Paling sering dipilih"** pada Sistem Operasional — asumsi Hermes, bukan data. Kalau belum ada riwayat transaksi, klaim ini bisa diganti jadi "Paling banyak diminati". |
| 🟡 Sedang | "Semua harga adalah estimasi awal… harga final tidak berubah di tengah jalan" — **komitmen kontrak**. Pastikan John agree sebelum launch. |
| 🟠 Info | `#kontak`, `/privacy`, `/terms` masih 404. |

---

## 2026-10-01 — Step 4.4–4.7: Kontak (WhatsApp-first) + ganti email

### Keputusan John

- **WhatsApp dulu** untuk_contact form. Opsi email tetap terbuka untuk nanti.
- Email kontak diganti dari `habibsuprayoga3@gmail.com` →
  **`johndev912@gmail.com`**.

### Kenapa WhatsApp-first, dan kenapa ini bukan kegagalan

PRD §9 menandai Step 4.4–4.7 sebagai "⚠️ Tinggi" karena form server
berarti Server Action + Zod + rate limit + honeypot. **Keputusan John membuat
langkah itu tidak perlu ada sama sekali di Phase 1:**

1. **Hosting belum ditentukan.** Form butuh runtime server; deploy ke provider
   pilihan John bisa bermasalah dan belum ada yang dites.
2. **Audiens UMKM lebih familiar dengan WhatsApp** daripada form web.
3. **⚠️ Zero attack surface.** Tidak ada endpoint, tidak ada input yang
   sampai ke server, jadi tidak ada yang bisa diserang. Rate limit, honeypot,
   dan Zod **tidak relevan** — tidak ada yang perlu dirate-limit.

Jadi PR ini **tidak mengimplementasikan** Server Action/Zod/rate limit/honeypot
sama sekali. Yang ada hanya validasi client-side (`maxLength=600`) untuk UX,
yang memang bukan kontrol keamanan.

### Yang dibuat

`src/components/sections/contact-section.tsx` — **satu-satunya client
component di homepage** (karena punya state form):
- Dropdown **Topik** (8 opsi — cerminan 8 kategori layanan, plus "Custom Solution")
- Textarea **Kebutuhan** (opsional, max 600 karakter, dengan counter)
- Tombol **Kirim lewat WhatsApp** → `wa.me` dengan pesan terisi otomatis:
  topik + kebutuhan yang diketik user
- Link telepon & email sebagai alternatif

Section juga menampilkan privacy notice: *"Data Anda tidak disimpan di website
ini. Isi form hanya disusun di perangkat Anda, lalu dikirim langsung ke
WhatsApp — tidak melewati server kami."* — ini **benar secara teknis** untuk
arsitektur saat ini.

### Perubahan email

- `src/lib/site-config.ts`: `contact.email` → `johndev912@gmail.com`
- `src/app/layout.tsx`: `authors` dapat `url: "https://johntech.web.id"`

### ⚠️ Email lama masih ada di git history

`habibsuprayoga3@gmail.com` masih bisa dibaca di commit lama
(`0062e7c` → `adc229e`). Menghapusnya berarti `git filter-repo` + force-push,
yang **menulis ulang seluruh riwayat** dan berisiko merusak fork/clone lokal.

**Rekomendasi: biarkan.** Email itu publik — CV-nya sudah online di LinkedIn.
Kalau memang ingin hilang, perlu keputusan eksplisit, bukan asumsi.

### Verifikasi

- `npm run build` → ✅ · `npm run lint` → ✅ 0 masalah
- Render: `id="kontak"`, placeholder Step 4.1 → **0** (sudah dihapus),
  `johndev912@gmail.com` ada, `habibsuprayoga3` → **0**, privacy notice ada.

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | **Tidak ada form yang menyimpan lead.** Semua lead masuk lewat WhatsApp pribadi — tidak ada daftar, tidak bisa diukur funnel, tidak bisa dilacak konversinya. Ini **konsekuensi langsung** dari keputusan WhatsApp-first, bukan bug. Kalau nanti butuh data, barulah Email/DB masuk. |
| 🟡 Sedang | `/privacy` dan `/terms` masih **404**, padahal footer menautkannya. Sekarang section kontak sudahолот privacy notice yang benar, jadi halaman legal jadi makin penting. |
| 🟠 Info | Link `tel:` dan `mailto:` di section kontak — `mailto:` membuka mail client dengan email **baru**. Sudah dicek render. |

---

## 2026-10-01 — Step 5.3: Privacy & Terms + fix typo copy

### Bug copy yang ditemukan lewat screenshot

John mengirim screenshot katalog layanan; di sana terlihat teks
**"Produk berlangganan denganisolasi data per pelanggan"** — kata
"dengan" dan "isolasi" glued jadi satu.

**Akar masalah:** glitch penulisan saatxmengedit `services-data.ts` di Step 2.1.
Build, TypeScript, dan lint **tidak menangkapnya** — ini bukan kode rusak,
hanya teks salah. Verifikasi yang menangkap adalah screenshot John.

Scan seluruh `src/` untuk pola serupa (`dengan` + kata panjang) → hanya 1
kemunculan. Sudah diperbaiki.

**Pelajaran:** cek copy tidak bisa diandalkan pada build/lint. Butuh mata
manusia — atau minimal render check per kata.

### Step 5.3 — Privacy & Terms

**Keputusan John:** badan usaha belum ada → ditulis sebagai
CV/sole proprietorship, tanpa NIB.

**`src/app/privacy/page.tsx`** — kebijakan privasi yang **cocok dengan
arsitektur saat ini**:
- "Website ini **tidak menyimpan data pribadi Anda**" — benar, karena form
composing di client lalu dikirim ke WhatsApp.
- Tidak ada cookie analitik, tidak ada form yang menyimpan di server
- Data yang dikirim pengguna sendiri dijelaskan eksplisit: ada di WhatsApp, bukan
  di server kami
- **Catatan eksplisit:** kalau nanti ada form yang menyimpan data (mis. untuk
  measuring conversion), kebijakan akan diperbarui dan retensi dicantumkan

**`src/app/terms/page.tsx`** — 9 section:
1. Penerimaan ketentuan
2. Informasi di website (harga = estimasi; contoh hasil kerja = ringkasan;
   logo klien = milik pemilik)
3. Lingkup jasa
4. Pembayaran (termin, harga tidak berubah kecuali ada scope change disetujui)
5. **Hak cipta** — kode khusus untuk klien beralih ke klien; komponen
   generik/template tetap milik JohnDev
6. Batasan tanggung jawab
7. Penyelesaian sengketa (musyawarah → hukum Indonesia)
8. Perubahan ketentuan
9. Kontak

Kedua halaman punya `<Link>` kembali ke beranda dan `metadata` sendiri
(title template "— | JohnDev" bekerja otomatis).

### Dua klaim website yang kini jadi kontrak resmi

"**Harga final tidak berubah di tengah jalan**" ada di pricing section, dan
sekarang tercantum juga di Terms — jadi bukan sekadar copy, tapi ketentuan
berlaku. Kalau John berubah pikiran, **keduanya** harus diubah.

### Verifikasi

- `npm run build` → ✅ (1 SyntaxError karena tag `</p>` hilang saat edit,
  sudah diperbaiki) · `npm run lint` → ✅
- Route: `/`, `/privacy`, `/terms` → **semua 200** (sebelumnya 404)
- Title: "Kebijakan Privasi | JohnDev", "Syarat & Ketentuan | JohnDev"
- **Tidak ada lagi link mati di seluruh website.**

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | **Privacy Policy belum menyebut nama badan usaha atau lokasi server.** John menjawab badan usaha "belum ada", tapi **tidak menjawab pertanyaan hosting**. Kebijakan privasi normalnya menyebut di mana data diproses; sekarang tidak ada data diproses, jadi technically tidak wajib — tapi akan lebih kuat setelah hosting ditentukan. |
| 🟡 Sedang | **Terms adalah dokumen hukum, bukan review copy.** Ini template generik, bukan hasil konsultasi hukum. Untuk project di bawah nilai tertentu template ini cukup; untuk kontrak bernilai besar, minta review oleh advokat. |
| 🟠 Info | Sisa Step 5: 5.1 SEO metadata, 5.2 sitemap/robots, 5.4 error boundary + 404, 5.5 analytics, 5.6 a11y, 5.7 Lighthouse, 5.8 security review, 5.9 deploy. |

---

## 2026-10-01 — Step 5.1–5.2: SEO metadata, OG image, sitemap, robots

### Step 5.1 — Metadata & structured data

**`src/app/layout.tsx`** — metadata default yang lengkap:
- `metadataBase` dari `siteConfig.url` — **satu sumber kebenaran**, bukan URL
  hardcode lagi (sebelumnya `johntech.web.id` ditulis langsung)
- `title.template: "%s | JohnDev"` — halaman anak otomatis dapat suffix
- `openGraph` + `twitter` dengan `summary_large_image` → preview penuh 1200x630
- `robots.googleBot` dengan `max-image-preview: large` — tanpa ini, Google
  sering menampilkan thumbnail kecil
- `category: "technology"`
- `applicationName`, `publisher`, `authors[].url`

**JSON-LD `ProfessionalService`** —={
  member of schema.org, allows Google
to show a business card (nama, telepon, lokasi) di hasil pencarian.
Fields: name, description, url, telephone, email, address, areaServed, knowsLanguage.

**Catatan keamanan:** `dangerouslySetInnerHTML` dipakai untuk JSON-LD. Isinya
100% literal developer-controlled, bukan input user — **tidak ada risiko injeksi**.
Ini satu-satunya penggunaan di project; komentar di kode menjelaskan kenapa aman.

### OG image dinamis (`src/app/og-image/route.tsx`)

Dibuat dengan **`next/og`** — bukan file PNG yang di-export manual:
- Selalu sinkron dengan warna brand (warna diambil sebagai literal yang sama)
- Tidak perlu asset binary di repo
- 1200x630, ~82 KB

Verifikasi visual: **teks lengkap, tidak ada yang terpotong** — logo JD,
headline, subheadline, nomor WhatsApp, dan domain semua terbaca.

### Step 5.2 — Sitemap & robots

**`src/app/sitemap.ts`** — 3 URL dengan `changefreq` & `priority` berbeda:
`/` (monthly, 1.0), `/privacy` & `/terms` (yearly, 0.3).

`lastModified` **sengaja satu konstanta global**, bukan `new Date()` per
request — kalau dinamis, Google melihat sitemap berubah terus dan mengindeks
ulang terus. Cukup diubah manual saat konten memang berubah.

**`src/app/robots.ts`** — `allow: /`, plus `sitemap` dan `host`. Field `host`
wajib diisi supaya search engine tahu URL kanonik; tanpa itu diambil dari
domain tempat sitemap ditemukan.

**Canonical per halaman** — `alternates.canonical` ditambahkan ke `/privacy`
dan `/terms`.

### Verifikasi

- `npm run build` → ✅ (2 error diperbaiki: `export default` tidak valid
  untuk OG route — harus named `GET`; dan baris JD yang tertimpa saat edit)
  · `npm run lint` → ✅
- Route: `/`, `/_not-found`, `/og-image`, `/privacy`, `/robots.txt`,
  `/sitemap.xml`, `/terms` → **7 route**
- `robots.txt` → berisi Host + Sitemap dengan domain benar
- `sitemap.xml` → 3 URL, XML valid, `lastmod` konsisten
- OG image → **PNG 1200x630, 82 KB**, diverifikasi visual

### Risiko aktif

| Sev | Temuan |
|---|---|
| 🟡 Sedang | **`metadataBase` = `johntech.web.id`, domain belum aktif.** Sebelum deploy, domain harus sudah diarahkan. Kalau tidak, OG image & canonical di shared links akan menunjuk domain yang belum ada. |
| 🟡 Sedang | **JSON-LD menyertakan alamat fisik Cikarang.** Ini mengirim lokasi ke search engine — dengan satu beneficiality: bisa muncul di local pack. Tapi juga berarti lokasiBON office publishable. Kalau hanya area servis, hapus `address`. |
| 🟠 Info | **Belum ada favicon custom** — masih `favicon.ico` default Next.js. Tampak di tab browser. |
| 🟠 Info | `lastModified` sitemap harus di-update manual tiap konten berubah. Kalau lupa, Google masih tahu lewat HTTP Last-Modified. |
| 🟠 Info | Sisa Step 5: 5.4 404 page, 5.5 analytics, 5.6 a11y, 5.7 Lighthouse, 5.8 security review, 5.9 deploy. |
