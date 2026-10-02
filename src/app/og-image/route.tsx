import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

/**
 * OG image untuk preview saat link dibagikan (WhatsApp, LinkedIn, dll).
 *
 * Dibuat secara dinamis dengan `next/og` \u2014 tanpa file gambar yang harus
 * di-export manual, dan selalu sinkron dengan warna brand.
 *
 * Ukuran 1200x630 mengikuti rasio standar Open Graph.
 */
export const alt = "JohnDev \u2014 Sistem Operasional Bisnis Otomatis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 55%, #dbeafe 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#2563eb",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            JD
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            Sistem digital untuk bisnis yang sudah berjalan
          </div>
          <div style={{ fontSize: 32, color: "#475569", maxWidth: 900 }}>
            POS, ERP, aplikasi mobile, dan integrasi printer kasir
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #dbeafe",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 26, color: "#2563eb", fontWeight: 600 }}>
            {siteConfig.contact.whatsappDisplay}
          </div>
          <div style={{ fontSize: 24, color: "#64748b" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}