# STANDARD OPERATING PROCEDURE (SOP)
## SOP-03: Garansi Pemeliharaan, Service Level Agreement (SLA), dan Change Request

**Kode Dokumen:** SOP-JD-003  
**Divisi:** Customer Support & Maintenance  
**Entitas:** JohnDev Technology Solution  
**Versi:** 1.0 (Efektif Oktober 2026)  

---

### 1. TUJUAN (OBJECTIVE)
1. Memberikan perlindungan dan jaminan operasional yang jelas kepada klien pasca-peluncuran (*go-live*).
2. Membedakan secara tegas antara perbaikan kesalahan program (*bug fix* gratis dalam masa garansi) dan permintaan fitur baru (*change request* berbayar).
3. Menetapkan standar waktu tanggap (*response time*) dan penyelesaian kendala teknis (SLA).

---

### 2. KETENTUAN MASA GARANSI (WARRANTY PERIOD)

* **Durasi Garansi:**
  * Paket Sistem Operasional / Aplikasi Mobile: **3 (Tiga) Bulan** sejak penandatanganan BAST.
  * Paket Custom Enterprise: **6 (Enam) Bulan** sejak penandatanganan BAST.
* **Cakupan yang TERMASUK Garansi (Gratis):**
  1. *Bug* atau kesalahan logika koding (contoh: rumus diskon kasir keliru, stok salah potong, tombol eror 500).
  2. Kegagalan fungsi integrasi yang sebelumnya sudah disepakati di dokumen SOW (contoh: print server gagal mengirim instruksi ke printer thermal).
  3. Masalah performa sistem internal yang bukan disebabkan oleh batas kapasitas server.

* **Cakupan yang TIDAK TERMASUK Garansi (Dikecualikan):**
  1. Penambahan tombol, kolom data, menu, laporan baru, atau alur kerja baru yang tidak tercatat di SOW awal.
  2. Eror atau kerusakan basis data akibat pihak klien memodifikasi *source code* atau tabel *database* secara mandiri tanpa izin JohnDev.
  3. Server *down* atau situs tidak bisa diakses akibat masa sewa domain/VPS milik klien habis atau belum dibayar.
  4. Gangguan jaringan internet lokal klien atau kerusakan fisik perangkat keras (printer rusak, kabel putus).

---

### 3. MATRIX SERVICE LEVEL AGREEMENT (SLA)

Seluruh laporan kendala operasional wajib dikirimkan melalui kanal resmi (WhatsApp Support atau Email JohnDev) dan akan diklasifikasikan ke dalam 3 tingkat keparahan (*severity levels*):

| Tingkat Keparahan | Definisi & Contoh Kendala | Waktu Tanggap (*First Response*) | Target Solusi (*Resolution Time*) |
| :--- | :--- | :---: | :---: |
| **Severity 1 (Kritis)** | **Sistem Lumpuh Total:** Transaksi penjualan berhenti total, kasir tidak bisa login, atau basis data terkunci. | **< 2 Jam** | **< 12 Jam** |
| **Severity 2 (Mayor)** | **Modul Tertentu Terganggu:** Modul kasir berjalan lancar, namun menu ekspor laporan ke Excel mengalami eror. | **< 6 Jam** | **< 24 Jam** |
| **Severity 3 (Minor)** | **Kosmetik / Glitch Non-Kritis:** Teks salah ketik (*typo*), format tanggal tidak seragam, atau warna tombol kurang sesuai. | **< 24 Jam** | **< 72 Jam** |

*Jam kerja operasional reguler support: Senin – Sabtu, pukul 08.30 – 18.00 WIB. Untuk insiden Severity 1 (Kritis), penanganan siaga berlaku setiap hari.*

---

### 4. PROSEDUR PERMINTAAN FITUR BARU (CHANGE REQUEST / ADDENDUM)

Jika klien membutuhkan perubahan atau penambahan fitur di luar dokumen SOW awal:

```
[Klien Mengajukan Form CR] ---> [JohnDev Menghitung Biaya & Jadwal] ---> [Klien Setuju & Bayar DP 50%] ---> [Pengerjaan & Deploy]
```

1. Klien mengisi lembar ringkas **Formulir Permintaan Perubahan (Change Request Form)**.
2. Tim JohnDev menganalisis dampak teknis dan menyusun estimasi biaya tambahan serta estimasi hari kerja (*Mandays*).
3. Setelah klien menyetujui, diterbitkan *Addendum Kontrak* dengan skema pembayaran DP 50% di awal dan pelunasan 50% setelah penambahan fitur selesai diuji.

---

### 5. LAMPIRAN: TEMPLATE FORMULIR CHANGE REQUEST (CR)

```markdown
================================================================================
                    FORMULIR PERMINTAAN FITUR BARU / CHANGE REQUEST (CR)
================================================================================
Nomor CR             : CR/JD/[NOMOR-PROYEK]/[URUTAN]
Nama Sistem          : [Nama Sistem Aktif Klien]
Nama Pemohon         : [Nama PIC Klien]
Tanggal Pengajuan    : [DD/MM/YYYY]

DESKRIPSI PERMINTAAN PERUBAHAN:
1. Nama Modul / Fitur : [Contoh: Penambahan Modul Cetak Label Barcode Rak]
2. Latar Belakang Kebutuhan:
   [Jelaskan mengapa fitur ini dibutuhkan di operasional saat ini]
3. Alur Kerja yang Diinginkan:
   [Jelaskan input data dan output yang diharapkan]

ESTIMASI OLEH TIM JOHNDEV (Diisi oleh Developer):
- Kompleksitas        : [Rendah / Sedang / Kompleks]
- Estimasi Pengerjaan : [ ... ] Hari Kerja
- Biaya Investasi CR  : Rp [ ... ]
- Skema Pembayaran    : DP 50% (Awal) dan Pelunasan 50% (Selesai Uji)

Persetujuan Klien,                               Persetujuan JohnDev,


( _______________________ )                      ( _______________________ )
Tanggal:                                         Tanggal:
================================================================================
```
