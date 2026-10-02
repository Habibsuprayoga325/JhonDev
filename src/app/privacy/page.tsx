import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi JohnDev — bagaimana data Anda dikumpulkan, disimpan, dan digunakan.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const UPDATED = "1 Oktober 2026";

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Link
        href="/"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; Kembali ke beranda
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Kebijakan Privasi
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Terakhir diperbarui: {UPDATED}
      </p>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_p]:mt-3 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:mt-3 space-y-3">
        <section>
          <h2>Ringkasan singkat</h2>
          <p>
            Website ini <strong>tidak menyimpan data pribadi Anda</strong>. Apa pun
            yang Anda tulis di form kontak disusun di browser Anda, lalu dikirim
            langsung ke WhatsApp kami. Tidak ada data yang melewati atau disimpan
            di server kami.
          </p>
        </section>

        <section>
          <h2>Data yang kami kumpulkan</h2>
          <p>Secara langsung, website ini tidak mengumpulkan data apa pun dari Anda.</p>
          <ul>
            <li>Tidak ada cookie analitik atau pelacakan.</li>
            <li>Tidak ada formulir yang menyimpan data di server.</li>
            <li>Tidak ada akun pengguna yang perlu dibuat.</li>
          </ul>
        </section>

        <section>
          <h2>Data yang Anda kirim sendiri</h2>
          <p>
            Bila Anda mengisi form kontak lalu menekan &ldquo;Kirim lewat
            WhatsApp&rdquo;, Anda sendiri yang memilih mengirim data tersebut ke
            nomor WhatsApp kami. Informasi yang dapat Anda kirim meliputi:
          </p>
          <ul>
            <li>Topik kebutuhan yang Anda pilih.</li>
            <li>Kebutuhan yang Anda tulis sendiri.</li>
            <li>Nomor WhatsApp Anda (diperlukan oleh platform WhatsApp).</li>
          </ul>
          <p>
            Data ini berada di bawah kendali Anda sebagai pengirim. Kami
            menggunakan data tersebut hanya untuk menjawab pertanyaan Anda.
          </p>
        </section>

        <section>
          <h2>Penyimpanan data</h2>
          <p>
            Karena seluruh komunikasi terjadi melalui WhatsApp, data Anda
            tersimpan pada platform WhatsApp, bukan di infrastruktur kami.
           aturally server kami tidak menyimpan salinan dari data tersebut.
          </p>
          <p>
            <strong>Catatan:</strong> apabila di kemudian hari website ini
            BBM menambahkan formulir yang menyimpan data (misalnya untuk
            pengukuran konversi), kebijakan ini akan diperbarui dan waktu
            retensi data akan dicantumkan di sini.
          </p>
        </section>

        <section>
          <h2>Berbagi data kepada pihak ketiga</h2>
          <p>
            Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda
            kepada pihak mana pun.
          </p>
        </section>

        <section>
          <h2>Hak Anda</h2>
          <p>
          Anda dapat meminta penghapusan data komunikasi yang tersimpan pada
            nomor kami kapan saja dengan menghubungi kami secara langsung
            melalui WhatsApp atau email di bawah.
          </p>
        </section>

        <section>
          <h2>Perubahan kebijakan</h2>
          <p>
            Kebijakan ini dapat diperbarui. Tanggal pembaruan terakhir selalu
            tercantum di bagian atas halaman ini.
          </p>
        </section>

        <section>
          <h2>Kontak</h2>
          <p>
            Untuk pertanyaan mengenai privasi, hubungi kami di:
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