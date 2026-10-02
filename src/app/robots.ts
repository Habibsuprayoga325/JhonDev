import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * robots.txt
 *
 * `host` wajib diisi supaya search engine tahu URL kanonik situs ini —
 * tanpa itu, URL kanonik diambil dari domain tempat sitemap ditemukan.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
