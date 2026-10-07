import type { NextConfig } from "next";

/**
 * Enterprise HTTP Security Headers (OWASP Compliant)
 * Diadaptasi dari standar keamanan printSmart / antrianPrint
 */
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Sembunyikan header 'X-Powered-By: Next.js' agar tidak memudahkan fingerprinting scanner
  poweredByHeader: false,

  // Cegah kebocoran kode asli TypeScript di tab DevTools "Sources" pada mode produksi
  productionBrowserSourceMaps: false,

  // Hilangkan console.log secara otomatis saat dibuild ke mode produksi
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  // Konfigurasi level kompresi gambar Next.js Image
  images: {
    qualities: [75, 100],
  },

  // Pasang security headers di seluruh route
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
