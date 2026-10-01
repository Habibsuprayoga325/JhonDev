import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakartaMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johndev.co.id"),
  title: {
    default: "JohnDev — Modernisasi Bisnis Anda ke Digital",
    template: "%s | JohnDev",
  },
  description:
    "JohnDev membantu pemilik bisnis memindahkan operasional ke digital: company profile, SaaS, ERP, POS, CRM, CMS, aplikasi mobile, dan integrasi hardware/IoT. Sudah 4+ sistem produksi berjalan.",
  keywords: [
    "developer Indonesia",
    "software house Indonesia",
    "ERP custom",
    "POS system",
    "landing page bisnis",
    "integrasi hardware",
    "IoT Indonesia",
  ],
  authors: [{ name: "John — JohnDev" }],
  creator: "JohnDev",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "JohnDev",
    title: "JohnDev — Modernisasi Bisnis Anda ke Digital",
    description:
      "Company profile, SaaS, ERP, POS, mobile app, dan integrasi hardware untuk pemilik bisnis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JohnDev — Modernisasi Bisnis Anda ke Digital",
    description:
      "Company profile, SaaS, ERP, POS, mobile app, dan integrasi hardware untuk pemilik bisnis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakartaSans.variable} ${jakartaMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
