import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Sitemap XML otomatis.
 *
 * `lastModified` sengaja TIDAK diisi per halaman — kalau diisi dengan
 * `new Date()` setiap request, Google melihat sitemap berubah terus-menerus
 * dan mengindeks ulang terus. достаточно satu tanggal global yang diubah
 * saat konten memang berubah.
 */
const LAST_MODIFIED = new Date("2026-10-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
