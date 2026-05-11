import type { NextConfig } from "next";

// في ملف next.config.js أو middleware.ts
const cspHeader = `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.google.com https://*.googletagservices.com https://*.googlesyndication.com https://*.doubleclick.net https://securepubads.g.doubleclick.net https://imasdk.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.google.com https://*.googlesyndication.com https://*.doubleclick.net https://images.unsplash.com; connect-src 'self' https://*.google.com https://*.doubleclick.net https://*.supabase.co https://*.googletagservices.com https://*.googlesyndication.com; frame-src 'self' https://*.google.com https://*.doubleclick.net https://*.googlesyndication.com https://*.ok.ru;`.replace(/\n/g, "");
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.btolat.com' },
      { protocol: 'https', hostname: 'png.pngtree.com' },
      { protocol: 'https', hostname: 'media.gemini.media' },
      { protocol: 'https', hostname: 'www.algomhor.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  
};

export default nextConfig;