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
      <body className={`${tajawal.variable} font-tajawal antialiased bg-[#0a0f1a] text-white`}>
        
        {/* 1. تم تغيير الإستراتيجية إلى afterInteractive لحل خطأ الـ Build */}
        <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="afterInteractive"
        />

        {/* 2. مكتبة IMA */}
        <Script 
          src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"
          strategy="afterInteractive"
        />

        {/* 3. كود التعريف - تم التأكد من وجود window.googletag لمنع ReferenceError */}
        <Script id="gpt-init" strategy="afterInteractive">
          {`
            window.googletag = window.googletag || {cmd: []};
            googletag.cmd.push(function() {
             // الهيدر: خليه يقبل 728x90 وكمان مقاس الموبايل الكبير
  googletag.defineSlot('/23212078890/header_ads_01', [[728, 90], [320, 100]], 'div-gpt-ad-1778267424902-0').addService(googletag.pubads());
  
  // السايد بار: أهم تعديل عشان يبقى "كبير" (نضيف مقاس 300x600)
  googletag.defineSlot('/23212078890/sidebar_ad_01', [[160, 600], [300, 600], [300, 250]], 'div-gpt-ad-1778268313330-0').addService(googletag.pubads());
  
  // إعلان وسط الصفحة: خليه يقبل مقاسات كبيرة برضه
  googletag.defineSlot('/23212078890/Ad_Responsive_02', [[728, 90], [336, 280], [300, 250]], 'div-gpt-ad-1778270091024-0').addService(googletag.pubads());
  
  // الفوتر: خليه يقبل المقاس العريض
  googletag.defineSlot('/23212078890/footer_bottom_01', [[728, 90], [320, 50]], 'div-gpt-ad-1778273361751-0').addService(googletag.pubads());

   googletag.defineSlot('/23212078890/video_ads_01', [[400, 300], [640, 480]], 'div-gpt-ad-video-overlay').addService(googletag.pubads());
             
              googletag.pubads().enableSingleRequest();
              // هيحجز المساحة ويفضل سايبها حتى لو الإعلان صغير أو مفيش إعلان خالص
             googletag.pubads().collapseEmptyDivs(true, true);
              googletag.enableServices();
            });
          `}
        </Script>

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