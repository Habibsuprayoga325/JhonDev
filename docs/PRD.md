# PRD — JohnDev Technology Solution Company Profile

**Status:** v0.1 DRAFT — menunggu keputusan pada 3 pertanyaan pembuka
**Tanggal:** 2026-10-01
**Owner:** John (Habib Suprayoga)
**Referensi visual:** Shopify.com/id (pola section, kartu produk, CTA tunggal)

---

## ✅ Keputusan Pembuka (SUDAH SELESAI — 2026-10-01)

| # | Keputusan | Hasil |
|---|---|---|
| **K1** | Ejaan nama brand | **JohnDev** (mengikuti logo & CV) |
| **K2** | Bentuk produk Phase 1 | **Marketing site saja** + CTA WhatsApp. Portal klien = Phase 2 |
| **K3** | Metrik utama | **Qualified Leads 25** + **Lead→Meeting ≥20%**. DAU = metrik sekunder |
| **K4** | Repository | `github.com/Habibsuprayoga325/JhonDev.git` |
| **K5** | Hosting | **Bukan Vercel** — provider milik John (belum ditentukan) |

### Catatan K5
Hosting memengaruhi Step 5.9 (deploy). Syarat yang harus dipenuhi provider pilihan John:
- Node.js 20+ runtime
- Support Next.js standalone output, ATAU static export
- HTTPS + custom domain + SSL otomatis
- Environment variables untuk secrets
- Cron/worker bila diperlukan (untuk rate limiting form)

---


## 1. Problem Statement — "Kenapa harus JohnDev?"

Klaim tanpa bukti tidak membedakan JohnDev dari 500 agency lain di online. Yang membedakan adalah **bukti sistem yang sudah jalan di produksi**.

### 1.1 Masalah yang dialami klien

Pemilik usaha di Indonesia umumnya menghadapi **sistem yang terpisah-pisah dan tidak saling bicara**:

- Order masuk di WhatsApp, stok ada di kepala sendiri →BEDA database
- Kasir manual di buku →tidak ada laporan real-time
- Modul ERP bawaan (Odoo, Accurate) terlalu berat & mahal untuk skala 5–50 orang
- Butuh integrasi ke hardware (printer thermal, scanner) →banyak agency web tidak bisa sentuh
- Vendor sebelumnya hilang setelah serah terima → tidak ada yang jelas sistemnya bisa diteruskan

### 1.2 Bukti JohnDev (dari CV, terverifikasi)

| Bukti | Detail | Mengapa ini penting |
|---|---|---|
| **Sistem produksi live, bukan demo** | printsmart.my.id (ERP internal), ata.typeapproval.co.id (fleet & warehouse), pilkasetda.my.id (e-voting), ppdbamanahbangsa.web.id (PPDB) | Membuktikan kerja selesai dan tetap jalan |
| **Integrasi hardware** | CUPS Print Server, raw printing protocol ke printer thermal | 90% agency web **tidak bisa** ini — ini diferensiasi nyata |
| **Payment gateway nyata** | Midtrans + Redis Queue untuk antrean dokumen | Memahami money flow, bukan sekadar CRUD |
| **Arsitektur data serius** | PostgreSQL untuk fleet/logistics, DB indexing untuk high-concurrency PPDB | Handles traffic & data volume nyata |
| **Full-stack breadth** | Laravel, Node/TS, React, Android native, Odoo, Python | Bisa pilih tools yang tepat, tidak terikat vendor |
| **Otomasi hardware & IoT** | Printer, CUPS, konfigurasi server | Menjawab kebutuhan industri & ritel |
| **Kompetensi komunikasi & training** | Trainer RAYA School of Training, R&D HIMATIF 100+ siswa | Bisa melatih tim klien, bukan cuma serah terima kode |

### 1.3 Positioning Statement

> **JohnDev membantu pemilik bisnis yang sudah berjalan di atas (bukan baru mulai) memindahkan operasi kertas ke digital dalam satu siklus hidup — dari requirement sampai sistem yang benar-benar jalan di hardware mereka.**

Titik bedanya: **satu partner untuk web + mobile + hardware**, dan **sudah pernah bloody sailed** — bukan agency yang belajar IoT di proyek pertama.

---

## 2. Target Users

### Persona A — Pemilik Usaha Ritel / UMKM (PRIMARY, ~60% lead)
- **Profil:** 28–50 tahun, pemilik toko/kafe/restoran/kedai, 3–20 karyawan
- **Situasi:** order manual, stokmanual, laporanRp interested
- **Keluhan:** “saya랑 anak buah saya kerja lembur karena order numpuk”
- **Kebutuhan:** POS/landing page yang jalan bulan ini, tidak perlu belajar complicated
- **Faktor penentu:** harga jelas, garansi, bisa demonstrate langsung

### Persona B — Owner / Director UMKM Skala Medium (PRIMARY, ~25%)
- **Profil:** 35–55 tahun, perusahaan 20–100 karyawan, sudah punya sistem tapi berantakan
- **Situasi:** solusi sebelumnya (Odoo/Accurate/Excel) tidak dipakai karena alasan lain
- **Keluhan:** “sudah beli software tapi tidak ada yang jalanin”
- **Kebutuhan:** ERP/POS custom yang mengikuti proses, integrasi hardware
- **Pembeda penentu:** REFERENSI yang bisa ditunjukkan, garansi SLA

### Persona C — Manager Operasional (SECONDARY, ~10%)
- **Profil:** 28–40,|Non technical,igi dashboard real-time
- **Situasi:** butuh laporan tanpa minta ke atasan
- **Kebutuhan:** dashboard, integrasi WhatsApp bot, laporan otomatis
- **Pembeda penentu:** mobile-friendly, Bahasa Indonesia

### Persona D — Public Sector / Instansi (OPPORTUNISTIC, ~5%)
- **Profil:** petugas verifier PPDB / operator desa
- **Situasi:** butuh sistem dengan verifikasi NIK, PPDB
- **Kebutuhan:** high-concurrency, audit trail, RBAC
- **Pembeda penentu:** track record pilkasetda & PPDB, referensi institutional

---

## 3. Goals & Non-Goals

### Goals (3 bulan)
| # | Goal | Metric | Target |
|---|---|---|---|
| G1 | Generate leads qualified | Leads masuk via form + WA | **25** |
| G2 | Konversi lead ke konsultasi | Lead→meeting | **≥20%** (≥5 meeting) |
| G3 | Kredibilitas instantly | Waktu visit + scroll ke bagian produk | <2 menit |
| G4 | Baseline repeat visit | Returning visitors (sekunder) | +20% vs baseline |

### Non-Goals (Phase 1, sengaja TIDAK dikerjakan)
- Portal/konten client login (K2 opsi B)
- Blog/SEO content strategy (butuh 3–6 bulan compounding)
- Multi-bahasa (EN)
- E-commerce / transaksi langsung
- Chatbot AI

---

## 4. User Stories

### US-1 (KUNCI — sesuai instruksi)
> Sebagai calon klien, saya ingin **langsung masuk ke dashboard** dan melihat semua yang bisa JhonDev kerjakan, lalu **satu klik** untuk memesan — supaya tidak perlu bikin akun dan tidak perlu cek WhatsApp dulu untuk tahu harga.

**Acceptance Criteria:**
- Mockup "dashboard" di homepage menampilkan grid layanan (Web/ERP/POS/Mobile/IoT/Custom) sebagai **kartu produk** ala Shopify
- Setiap kartu: nama, gambar, deskripsi 1 kalimat, rentang harga "mulai dari", badge kategori
- **Tombol tunggal** di sticky header: "Konsultasi Gratis" → prefilled WhatsApp (`wa.me/6287846073782?text=<pesan otomatis>`)
- Tidak ada form panjang di homepage. Form panjang hanya sebagai fallback di luar WhatsApp
- Mobile-first: grid 1 kolom di bawah 640px

### US-2 — Kredibilitas
> Sebagai pemilik bisnis yang pernah kecewa, saya ingin **bukti nyata** bahwa JohnDev pernah menghapus sistem produksi, bukan sekadar klaim — supaya saya percaya cukup untuk mulai scoping.

**AC:** Section "Bukti Track Record" dengan 4 project nyata (printSmart, Ata Galaxy, pilkasetda, PPDB) — nama klien, masalah, solusi, link live. Stats bar: "4+ sistem produksi", "1.000+ siswa dilatih", "6+ stack".

### US-3 — Pricing transparan
> Sebagai pemilik usaha, saya ingin **tahu harga dasar** sebelum menghubungi — supaya saya bisa apakah ini masuk budget saya, dan tidak buang waktu kalau tidak.

**AC:** Halaman `/pricing` dengan 3–4 paket (Landing Page, POS/SaaS, ERP Custom, Maintenance) — range "mulai dari Rp X", excludes di-response dalam 24 jam. Pricing terbuka tanpa perlu login.

### US-4 — Kustom / di luar katalog
> Sebagai klien dengan kebutuhan unik (misal integrasi printer khusus), saya ingin **cara cepat** booked dengan JhonDev untuk didiskusikan — supaya tidak memaksa diri masuk kategori yang tidak cocok.

**AC:** Section "Custom Solution" di homepage dengan CTA berbeda. Auto-prefill pesan WhatsApp berbeda. Form minta 4 field (nama, bisnis, kebutuhan, rentang budget).

### US-5 — Mobile-first browsing
> Sebagai pemilik usaha yang cek HP saat di lapangan, saya ingin seluruh situs **terbaca dan berfungsi** di HP — supaya saya bisa lihat portofolio sebelumOCKETAN.

**AC:** LCP <2.5s di koneksi 3G, semua CTA thumb-reachable, grid responsif.

---

## 5. Functional Requirements

Prioritas: **M** = Must (launch), **S** = Should, **C** = Could

| # | Requirement | Prioritas |
|---|---|---|
| FR-01 | Homepage hero: logo, tagline, 1 CTA utama | M |
| FR-02 | **WhyJohnDev** — 4 pain point + solusi mapping | M |
| FR-03 | **Products grid** — dashboard-style, 8–10 kategori layanan | M |
| FR-04 | Sticky CTA WhatsApp (desktop + mobile) | M |
| FR-05 | **Pricing** — 4 paket, range harga | M |
| FR-06 | Track record — 4 case study nyata + link | M |
| FR-07 | **Contact** — form (nama, email/WA, bisnis, kebutuhan) + embed lokasi + info kontak | M |
| FR-08 | Design system tokens (warna logo, font, spacing) | M |
| FR-09 | SEO: metadata, OG image, sitemap, robots, JSON-LD LocalBusiness | S |
| FR-10 | Page "Custom Solution" | S |
| FR-11 | FAQ / FAQ schema | S |
| FR-12 | Privacy policy + Terms | **M (legal)** |
| FR-13 | Testimonial carousel | C |
| FR-14 | Blog scaffold | C |
| FR-15 | Analytics (Umami/GA4, consent-aware) | S |
| FR-16 | 404 + error boundary | M |
| FR-17 | Dark mode | C |

### FR-03 Catalog kategori (draft)
1. **Company Profile / Landing Page** — Next.js, SEO-ready
2. **POS System** — Android + web, Midtrans, offline-capable
3. **ERP Custom** — Laravel + PostgreSQL, Odoo extension
4. **Mobile App** — Flutter / Native Android
5. **SaaS Development** — multi-tenant, subscription
6. **IoT & Hardware Integration** — printer thermal, CUPS, sensor
7. **CRM & CMS**
8. **System Integration & API** — legacy ↔ modern, payment gateway

---

## 6. Non-Functional Requirements

| Kategori | Requirement |
|---|---|
| **Performance** | LCP < 2.5s (3G), CLS < 0.1, INP < 200ms. Static generation, minimal client JS. Target Lighthouse ≥ 90. |
| **SEO** | Core Web Vitals hijau, sitemap.xml auto, structured data valid (Google Rich Results test lulus), indexable |
| **Responsive** | 360px → 1440px tanpa horizontal scroll |
| **Browser** | Chrome/Edge/Firefox/Safari last 2 major |
| **Accessibility** | WCAG 2.1 AA: kontras ≥ 4.5:1, fokus keyboard terlihat, alt text, semantic HTML, `aria-label` pada CTA icon |
| **Security** | Lihat §7 |
| **Privacy** | GDPR/UU PDP compliant: consent banner, tidak ada PII di URL, retention policy |
| **Maintainability** | TypeScript strict, ESLint + Prettier, component modular, typed props |
| **Scalability** | Headless CMS-agnostic; mudah tambah produk tanpa sentuh komponen |
| **Uptime** | 99.5% |
| **Cost** | Tergantung provider John |

---

## 7. Security Requirements (Phase 1)

| ID | Requirement |
|---|---|
| SEC-01 | Input validation **server-side** (form kontak) — Zod |
| SEC-02 | Rate limiting pada endpoint form: 5 request / 10 menit / IP |
| SEC-03 | Honeypot field + timestamp check pada form (anti-spam) |
| SEC-04 | Tidak ada secret/API key di client bundle. Semua integration server-side |
| SEC-05 | Secrets hanya di env vars, tidak di commit |
| SEC-06 | Sanitasi output — evitar `dangerouslySetInnerHTML` tanpa sanitasi (react-mdX/preview) |
| SEC-07 | Security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy |
| SEC-08 | Dependencies: `npm audit` bersih dalam CI |
| SEC-09 | Tidak ada data sensitif di log/analytics |
| SEC-10 | HTTPS only (Vercel) |

---

## 8. Tech Stack — Rekomendasi

Mengikuti stack yang sudah dikuasai John (mengurangi risiko & waktu belajar):

| Layer | Pilihan | Alasan |
|---|---|---|
| **Framework** | **Next.js 15 (App Router) + TypeScript** | Stack utama John, SSG untuk performa, satu repo untuk web |
| **Styling** | **Tailwind CSS v4** | Cepat, konsisten dengan design token |
| **Component** | **shadcn/ui** | Bash minimal,ZYAR sudah download ke repo, ownership penuh |
| **Font** | **Plus Jakarta Sans** (Indonesian-made, professional) | Sesuai brand "teknologi-tepercaya"; alternatif: Inter |
| **Content** | **MDX atau static TS objects** | Untuk Phase 1, static objects lebih simple. MDX kalau blog mau |
| **Form** | **Server Action + Zod** | Tidak perlu API key pihak ketiga |
| **Email/Notif** | Resend atau Formspree | Kirim notifikasi lead ke John |
| **Hosting** | Milik John (TBD) | Keputusan K5 — bukan Vercel. Target: Node 20+, HTTPS, env vars, cron. Deployment adapter (Docker/standalone/PM2) ditentukan di Step 5.9 |
| **Analytics** | **Umami** (self-host, privacy-friendly) | Sesuai prinsip PDP; GA4 opsional |
| **Env** | `.env.local` + Vercel env vars | Standar |

### Design tokens (dari logo)
```css
--brand-primary: #2563EB;   /* biru logo */
--brand-navy:    #0F172A;   /* teks/monogram */
--brand-light:   #EFF6FF;   /* background accent */
--brand-accent:  #1D4ED8;   /* hover state */
```

### ❌ Yang saya rekomendasikan untuk TIDAK dipakai (Phase 1)
- **Headless CMS (Sanity/Strapi)** — overkill untuk 10 produk statis; tambah dependency & biaya
- **Multi-page dengan animasi berat** — trigir LCP, tidak perlu di company profile
- **Chart.js / dashboard analytics** — bukan goal Phase 1

---

## 9. Scope — Execution Plan

Aturan: **setiap langkah kecil & bisa dites sendiri.** ⚠️ = risiko tinggi / belum jelas.

### **Phase 0 — Keputusan & Persiapan**

| Step | Task | Risiko |
|---|---|---|
| **0.1** | John jawab K1, K2, K3 | — |
| **0.2** | Buat repo GitHub + struktur folder Next.js + inisialisasi | — |
| **0.3** | Setup Tailwind + shadcn/ui + font Plus Jakarta Sans | — |
| **0.4** | Buat design token file (`globals.css`) dengan warna logo | — |

### **Phase 1 — Fondasi & Layout**

| Step | Task | Risiko |
|---|---|---|
| **1.1** | Layout shell: Navbar + Footer + container | — |
| **1.2** | Navbar: logo, 4 menu item, CTA WhatsApp | — |
| **1.3** | Hero section: headline, subheadline, CTA | — |
| **1.4** | **TEST 1.1–1.4** — visual check di browser | — |

### **Phase 2 — Products (grid dashboard)**

| Step | Task | Risiko |
|---|---|---|
| **2.1** | Buat data file produk (8 kategori, typed TS) | — |
| **2.2** | Kartu produk: ikon, nama, deskripsi, badge, harga | — |
| **2.3** | Grid responsif (1/2/3 kolom) | — |
| **2.4** | Hover state + link ke Pricing | — |
| **2.5** | **TEST 2.1–2.5** | — |

### **Phase 3 — WhyJohnDev (kredibilitas)**

| Step | Task | Risiko |
|---|---|---|
| **3.1** | Data file track record (4 studi kasus dari CV) | — |
| **3.2** | Section WhyJohnDev: 4 pain point → solusi | — |
| **3.3** | Stats bar (angka-angka nyata) | — |
| **3.4** | Card case study + link ke project live | ⚠️ **Permission** — pastikan boleh tampilkan nama klien |
| **3.5** | **TEST 3.1–3.5** | — |

### **Phase 4 — Pricing & Contact (konversi)**

| Step | Task | Risiko |
|---|---|---|
| **4.1** | Data file paket harga (4 paket) | — |
| **4.2** | Section pricing cards | — |
| **4.3** | WhatsApp CTA: `wa.me` deep link + pesan auto | — |
| **4.4** | **Form kontak dengan Server Action + Zod** | ⚠️ **Tinggi** — validasi, spam |
| **4.5** | Rate limit + honeypot pada form | ⚠️ **Tinggi** |
| **4.6** | Notifikasi lead (Resend/email ke John) | — |
| **4.7** | **TEST 4.1–4.7** — submit form end-to-end | — |

### **Phase 5 — Polish & Launch**

| Step | Task | Risiko |
|---|---|---|
| **5.1** | SEO metadata + OG image + JSON-LD | — |
| **5.2** | sitemap.xml + robots.txt | — |
| **5.3** | Privacy/Terms | — |
| **5.4** | Error boundary + 404 | — |
| **5.5** | Analytics setup | — |
| **5.6** | Accessibility pass (kontras, fokus, alt) | — |
| **5.7** | Lighthouse audit → target ≥ 90 | — |
| **5.8** | **Security review (OWASP Top 10)** | ⚠️ **Tinggi** |
| **5.9** | Deploy ke provider hosting John + domain | ⚠️ **TBD** — butuh info provider (Step 5.9) |
| **5.10** | Post-launch monitoring | — |

---

## 10. Risiko Teridentifikasi

| # | Risiko | Dampak | Mitigasi |
|---|---|---|---|
| R1 | Klien tidak setuju nama ditampilkan di website | Credibilitas turun | Konfirmasi di Step 3.4 — opsi anonim/"Startup Logistik" |
| R2 | Harga di website tidakellular sering berubah | BPK ulong | Tampilkan **range "mulai dari"**, bukan angka pasti |
| R3 | 9Router tidak auto-start setelah reboot | Hermes agent down | Sedang dikerjakan: Scheduled Task |
| R4 | Spam form kontak | Kotak masuk John penuh | Rate limit + honeypot (Step 4.5) |
| R5 | Scope creep (portal klien) | Timeline molor | K2: Phase 2 eksplisit |
| R6 | Terlalu banyak kategori produk | Klien bingung | Maksimal 8, grup jelas |

---

## 11. Definition of Done

- [ ] Semua FR Must (FR-01 s.d. FR-08, FR-12, FR-16) selesai
- [ ] Form kontak terbukti terkirim ≥ 1x real
- [ ] Lighthouse ≥ 90 di semua kategori
- [ ] `npm audit` = 0 vulnerability HIGH/CRITICAL
- [ ] Tidak ada secret di repo
- [ ] Responsive 360px–1440px verified
- [ ] Deploy live + domain aktif
- [ ] Analytics tracking jalan

---

*Dokumen ini menunggu keputusan K1–K3 sebelum Step 0.2.*
