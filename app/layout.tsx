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
  title: "FlowerSpot | دليلك الشامل لجمال الطبيعة والزهور",
  description: "استكشف أسرار العناية بالزهور، النباتات المنزلية، وتغطية حية لأجمل الحدائق حول العالم.",
  openGraph: {
    title: "FlowerSpot - عالم الطبيعة بين يديك",
    description: "كل ما تحتاجه للعناية بنباتاتك في مكان واحد",
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
    src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
    strategy="beforeInteractive"
  />

  {/* 2. مكتبة IMA الخاصة بإعلانات الفيديو - لازم تكون في سكريبت منفصل */}
  <Script 
    src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"
    strategy="afterInteractive"
  />

  {/* 2. كود التعريف الخاص بك */}
  <Script id="gpt-init" strategy="beforeInteractive">
    {`
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        // تعريف الهيدر
        googletag.defineSlot('/23212078890/header_ads_01', [728, 90], 'div-gpt-ad-1778267424902-0').addService(googletag.pubads());
        
        // تعريف السايد بار
        googletag.defineSlot('/23212078890/sidebar_ad_01', [[300, 50], [300, 250]], 'div-gpt-ad-1778268313330-0').addService(googletag.pubads());
         
        //تعريف header center
        googletag.defineSlot('/23212078890/Ad_Responsive_02', [[300, 250], [728, 90]], 'div-gpt-ad-1778270091024-0').addService(googletag.pubads());
        // إضافة السطر ده لتعريف إعلان الفيديو
googletag.defineSlot('/23212078890/video_ads_01', [[400, 300], [640, 480]], 'div-gpt-ad-video-overlay').addService(googletag.pubads());

// تعريف إعلان الفوتر النهائي
googletag.defineSlot('/23212078890/footer_bottom_01', [[728, 90], [320, 50]], 'div-gpt-ad-1778273361751-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
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