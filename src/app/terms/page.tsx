import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan website JohnDev Technology Solution.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const UPDATED = "1 Oktober 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Link
        href="/"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; Kembali ke beranda
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Syarat &amp; Ketentuan
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Terakhir diperbarui: {UPDATED}
      </p>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_p]:mt-3 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:mt-3 space-y-3">
        <section>
          <h2>Penerimaan ketentuan</h2>
          <p>
            Dengan mengakses dan menggunakan website ini, Anda menyetujui
            ketentuan di bawah ini. Bila Anda tidak menyetujuinya, mohon
            berhenti menggunakan website ini.
          </p>
        </section>

        <section>
          <h2>Informasi di website ini</h2>
          <p>
            Seluruh isi website ini — termasuk deskripsi layanan, contoh
            hasil kerja, dan angka harga — bersifat informatif dan dapat berubah
            tanpa pemberitahuan sebelumnya.
          </p>
          <ul>
            <li>
              <strong>Harga bersifat estimasi.</strong> Harga yang tertera
              adalah titik awal dan bergantung pada ruang lingkup project.
              Harga final disepakati tertulis sebelum pengerjaan dimulai.
            </li>
            <li>
              <strong>Contoh hasil kerja</strong> yang ditampilkan merupakan
              ringkasan project sebelumnya dan mungkin telah mengalami
              penyesuaian sesuai kebutuhan klien.
            </li>
            <li>
              <strong>Logo klien</strong> ditampilkan dengan izin dan tetap
              menjadi milik masing-masing pemilik logo.
            </li>
          </ul>
        </section>

        <section>
          <h2>Lingkup jasa</h2>
          <p>
            Layanan yang kami berikan mencakup pembuatan perangkat lunak
            (web, mobile, sistem internal) beserta integrasi ke perangkat keras
            bila disepakati. Rincian lingkup pekerjaan ditentukan secara
            tertulis pada proposal atau kontrak terpisah.
          </p>
        </section>

        <section>
          <h2>Pembayaran</h2>
          <ul>
            <li>
              Harga dan skema pembayaran disepakati tertulis sebelum project
              dimulai.
            </li>
            <li>
              Termin pembayaran mengikuti kesepakatan pada kontrak, umumnya
              uang muka di awal dan pelunasan saat serah terima.
            </li>
            <li>
              Harga yang disepakati tidak berubah selama project berjalan,
              kecuali ada perubahan scope yang disetujui tertulis oleh kedua
              belah pihak.
            </li>
          </ul>
        </section>

        <section>
          <h2>Hak cipta</h2>
          <ul>
            <li>
              Pada project yang telah dibayar lunas, hak cipta atas kode yang
              dibuat khusus untuk Anda beralih kepada Anda.
            </li>
            <li>
              Komponen generik (template, pustaka, class helper) yang merupakan
              aset kami dan dapat dipakai ulang pada project lain tetap milik
              kami.
            </li>
            <li>
              Nama, logo, dan merek JohnDev tetap menjadi hak kami dan tidak
              boleh digunakan tanpa izin tertulis.
            </li>
          </ul>
        </section>

        <section>
          <h2>Batasan tanggung jawab</h2>
          <p>
            Kami strive menyediakan sistem yang berjalan sesuai scope yang
            disepakati. Namun kami tidak dapat menjamin hasil bisnis tertentu
            (omzet, efisiensi) sebagai dampak penggunaan sistem yang kami buat.
            Tanggung jawab kami terbatas pada perbaikan atas cacat teknis yang
            dapat diprediksi pada sistem yang kami kerjakan.
          </p>
        </section>

        <section>
          <h2>Penyelesaian sengketa</h2>
          <p>
            Setiap sengketa akan diselesaikan secara musyawarah terlebih
            dahulu. Bila musyawarah tidak mencapai kesepakatan, kedua belah
            pihak dapat menempuh penyelesaian hukum sesuai hukum yang berlaku
            di Indonesia.
          </p>
        </section>

        <section>
          <h2>Perubahan ketentuan</h2>
          <p>
            Ketentuan ini dapat diperbarui. Tanggal pembaruan terakhir selalu
            tercantum di bagian atas halaman ini, dan perubahan berlaku sejak
            tanggal tersebut.
          </p>
        </section>

        <section>
          <h2>Kontak</h2>
          <p>
            Untuk pertanyaan mengenai ketentuan ini, hubungi kami di:
            <br />
            WhatsApp: {siteConfig.contact.whatsappDisplay}
            <br />
            Email: {siteConfig.contact.email}
          </p>
        </section>
      </div>
    </div>
  );
}
