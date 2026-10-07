import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Pola URL mencurigakan dan path scanner bot yang langsung diblokir:
 * Mencegah automated reconnaissance (.env, .git, backdoor PHP, path traversal)
 */
const BLOCKED_PATTERNS = [
  /\/\.env/i,
  /\/\.git/i,
  /\/\.svn/i,
  /\/\.vscode/i,
  /\/\.idea/i,
  /\.php$/i,
  /\/wp-admin/i,
  /\/wp-login/i,
  /\/xmlrpc/i,
  /\/phpmyadmin/i,
  /\/cgi-bin/i,
  /\/\.\./, // Path traversal
  /%2e%2e/i, // Encoded path traversal
  /<script/i, // XSS attempt in URL
];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const fullPath = pathname + search;

  // 1. Deteksi & blokir automated reconnaissance / attack vectors
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(fullPath)) {
      return new NextResponse("Access Denied", {
        status: 403,
        headers: { "Content-Type": "text/plain" },
      });
    }
  }

  // 2. Handle OPTIONS preflight request jika ada request CORS
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": request.nextUrl.origin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  // 3. Lanjutkan request dan sisipkan security headers
  const response = NextResponse.next();

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public asset extensions (.png, .jpg, .svg, .webp)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
