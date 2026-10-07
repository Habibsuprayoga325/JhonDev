# STANDARD OPERATING PROCEDURE (SOP)
## SOP-02: Termin Pembayaran, Lingkungan Uji, dan Serah Terima Sistem

**Kode Dokumen:** SOP-JD-002  
**Divisi:** Finance & Technical Delivery  
**Entitas:** JohnDev Technology Solution  
**Versi:** 1.0 (Efektif Oktober 2026)  

---

### 1. TUJUAN (OBJECTIVE)
1. Menjamin arus kas developer terjaga selama masa pengembangan proyek.
2. Mencegah risiko klien mangkir (*bad debt*) atau mengambil alih *source code* sebelum melunasi sisa tagihan.
3. Memberikan kepastian jadwal dan hak milik (*intellectual property*) kepada klien secara adil dan transparan.

---

### 2. STRUKTUR PEMBAGIAN TERMIN (MILESTONE PAYMENTS)

Total nilai proyek yang disepakati dibagi menjadi 3 (tiga) termin bertahap:

| Termin | Persentase | Waktu Penagihan | Syarat / Pencapaian (*Milestone*) | Hak Akses Klien |
| :--- | :---: | :--- | :--- | :--- |
| **Termin 1 (DP)** | **30%** | Sebelum pengerjaan dimulai | Dokumen SOW & rancangan arsitektur disetujui. | Prototipe desain antarmuka (*Figma/Wireframe*). |
| **Termin 2** | **40%** | Progres pengerjaan 70% | Fitur fungsional inti selesai diuji coba. | Akses akun uji coba di **Server Staging JohnDev**. |
| **Termin 3 (Pelunasan)** | **30%** | Pra-penyerahan sistem akhir | UAT (*User Acceptance Test*) selesai & sistem siap tayang. | **Full Source Code, Akses Server Production, & Akun Root/Admin.** |

---

### 3. PROTOKOL KEAMANAN LINGKUNGAN PENGUJIAN (STAGING VS PRODUCTION)

```
[Komputer Developer] ---> [Server Staging JohnDev] ---> [Pembayaran Termin 3 Lunas] ---> [Server Production Klien]
                               (Demo & Review)                                               (Go-Live & Source Code)
```

1. **Pengujian Selalu di Staging Milik JohnDev:**
   * Selama masa *development* hingga Termin 2, sistem hanya di-deploy di server/subdomain milik JohnDev (contoh: `staging.project-klien.johndev.com`).
   * Database yang digunakan berisi data *dummy* / simulasi untuk menjaga kerahasiaan.
2. **Golden Rule Pelunasan:**
   * **DILARANG KERAS** mengunggah kode sumber ke server klien (*production*) atau menyerahkan file ZIP / repository GitHub pribadi klien sebelum bukti transfer **Termin 3 (Pelunasan 100%)** masuk dan terverifikasi di rekening JohnDev.

---

### 4. BIAYA INFRASTRUKTUR & PIHAK KETIGA

* **Biaya Jasa JohnDev:** Murni mencakup analisis, rekayasa kode program, integrasi, dan pendampingan teknis.
* **Biaya yang Menjadi Tanggung Jawab Klien:**
  1. Biaya sewa domain tahunan (`.com`, `.id`, `.co.id`).
  2. Biaya sewa server cloud/VPS (misalnya DigitalOcean, AWS, IDCloudHost).
  3. Biaya kuota API berbayar (misalnya saldo WhatsApp Business API resmi, biaya per transaksi Payment Gateway Midtrans/Xendit).
  4. Biaya pendaftaran akun Google Play Console ($25 sekali bayar) jika membuat aplikasi Android.
* Seluruh akun infrastruktur di atas wajib dibuat atas nama dan email resmi milik klien, sehingga kepemilikan aset server sepenuhnya berada di tangan klien.

---

### 5. PROSEDUR SERAH TERIMA & BERITA ACARA (BAST)

Setelah Termin 3 lunas:
1. Tim JohnDev melakukan *deployment* ke server *production* klien.
2. Tim JohnDev menyerahkan:
   * Kredensial *master admin* / *superadmin*.
   * Akses repositori *source code* (atau arsip file lengkap).
   * Panduan ringkas penggunaan (*User Manual / SOP Singkat*).
3. Pihak Klien dan JohnDev menandatangani **Berita Acara Serah Terima (BAST)** sebagai penanda dimulainya masa garansi resmi.

---

### 6. LAMPIRAN: TEMPLATE BERITA ACARA SERAH TERIMA (BAST)

```markdown
================================================================================
                    BERITA ACARA SERAH TERIMA SISTEM (BAST)
================================================================================
Nomor Dokumen        : BAST/JD/[BULAN]/[TAHUN]
Hari / Tanggal       : [Hari, DD/MM/YYYY]

Telah dilakukan serah terima hasil pekerjaan rekayasa perangkat lunak antara:
1. Nama Pengembang  : JohnDev Technology Solution (PIHAK PERTAMA)
2. Nama Klien       : [Nama Lengkap / Instansi] (PIHAK KEDUA)

Dengan rincian hasil pekerjaan:
- Nama Sistem       : [Contoh: Sistem POS Kasir & Stok Multi-Cabang]
- URL Akses Aktif   : [https://pos.namabisnis.com]
- Status Pembayaran : LUNAS (Termin 1, 2, dan 3)

PIHAK PERTAMA telah menyerahkan kepada PIHAK KEDUA:
[X] Hak akses sistem penuh (Super Admin).
[X] Seluruh salinan kode sumber (Source Code) dan basis data.
[X] Sesi pelatihan tim operasional (durasi 1 sesi).

Dengan ditandatanganinya berita acara ini, masa GARANSI & DUKUNGAN SISTEM (SLA)
dimulai terhitung sejak tanggal [DD/MM/YYYY] hingga [DD/MM/YYYY] (3 Bulan).

PIHAK KEDUA (Klien),                             PIHAK PERTAMA (JohnDev),


( _______________________ )                      ( _______________________ )
Nama:                                            Nama:
================================================================================
```
