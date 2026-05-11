import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self' https://*.google.com https://*.doubleclick.net https://*.googlesyndication.com;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.doubleclick.net https://*.googletagservices.com https://*.googlesyndication.com https://imasdk.googleapis.com http://*.ok.ru https://*.ok.ru http://*.mycdn.me https://*.mycdn.me;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    frame-src 'self' https://*.google.com https://*.doubleclick.net https://*.googlesyndication.com http://ok.ru http://*.ok.ru https://*.ok.ru;
    connect-src 'self' https://*.google.com https://*.doubleclick.net https://*.google-analytics.com https://*.googlesyndication.com https://*.supabase.co wss://*.supabase.co;
`.replace(/\s{2,}/g, " ").trim();

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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig;