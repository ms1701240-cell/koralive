import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
import Script from "next/script";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "كورة نيوز | بث مباشر وأخبار الرياضة لحظة بلحظة",
  description: "تابع أهم مباريات اليوم، البث المباشر، وآخر أخبار كرة القدم العالمية والمحلية على كورة نيوز.",
  openGraph: {
    title: "كورة نيوز - عالم الكرة بين يديك",
    description: "بث مباشر لجميع مباريات اليوم بجودة عالية",
    type: "website",
    locale: "ar_EG",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
       <Script
    async
    src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
    strategy="afterInteractive"
  />
  <Script id="gpt-init" strategy="afterInteractive">
    {`
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag.defineSlot('/23212078890/header_ads_01', [728, 90], 'div-gpt-ad-1778252658756-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
    `}
  </Script>
      </head>
      <body className={`${tajawal.variable} font-tajawal antialiased bg-[#0a0f1a] text-white`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow px-4 md:px-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}