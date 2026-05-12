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
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${tajawal.variable} font-tajawal antialiased bg-[#0a0f1a] text-white`}>
        
        {/* 1. السكربت الأساسي - خليه قبل التفاعل لضمان التعريف */}
        <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="beforeInteractive"
        />

        {/* 2. مكتبة IMA - ممكن تسيبها after عادي لأنها للفيديو */}
        <Script 
          src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"
          strategy="afterInteractive"
        />

        {/* 3. كود التعريف - شيل الـ Strategy وخليها الافتراضية عشان يشتغل مع GPT */}
        <Script id="gpt-init">
  {`
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
      
      // 1. تعريف خريطة المقاسات للهيدر والفوتر (اللافتات العريضة)
      var bannerMapping = googletag.sizeMapping()
        .addSize([1024, 0], [[728, 90]])   // لو الكمبيوتر أكبر من 1024 بكسل اظهر 728
        .addSize([768, 0], [[728, 90]])    // للتابلت اظهر 728 برضه
        .addSize([0, 0], [[320, 100], [320, 50]]) // للموبايل (أي مقاس أصغر) اظهر مقاسات الموبايل
        .build();

      // 2. تعريف خريطة السايد بار
      var sidebarMapping = googletag.sizeMapping()
        .addSize([1024, 0], [[300, 600], [160, 600]])
        .addSize([768, 0], [[300, 250]]) // للتابلت
        .addSize([0, 0], [[300, 250]]) // للموبايل حوله لمربع عشان ما يخرجش بره الشاشة
        .build();

      // 3. تعريف الوحدات وربطها بالخرايط (Mapping)
      
      // الهيدر
      googletag.defineSlot('/23212078890/header_ads_01', [[728, 90], [320, 100], [320, 50]], 'div-gpt-ad-1778267424902-0')
        .defineSizeMapping(bannerMapping)
        .addService(googletag.pubads());
      
      // السايد بار
      googletag.defineSlot('/23212078890/sidebar_ad_01', [[300, 600], [160, 600], [300, 250]], 'div-gpt-ad-1778268313330-0')
        .defineSizeMapping(sidebarMapping)
        .addService(googletag.pubads());
      
      // وسط الصفحة (Responsive)
     // Responsive Mapping
var responsiveMapping = googletag.sizeMapping()
  .addSize([1024, 0], [[728, 90], [336, 280]])
  .addSize([768, 0], [[336, 280], [300, 250]])
  .addSize([0, 0], [[300, 250]])
  .build();

// وسط الصفحة
googletag.defineSlot(
  '/23212078890/Ad_Responsive_02',
  [[728, 90], [336, 280], [300, 250]],
  'div-gpt-ad-1778270091024-0'
)
.defineSizeMapping(responsiveMapping)
.addService(googletag.pubads());
      
      // الفوتر
      googletag.defineSlot('/23212078890/footer_bottom_01', [[728, 90], [320, 50]], 'div-gpt-ad-1778273361751-0')
        .defineSizeMapping(bannerMapping)
        .addService(googletag.pubads());

      // إعلان الفيديو (Rewarded)
      googletag.defineSlot('/23212078890/video_ads_01', [[400, 300], [640, 480]], 'div-gpt-ad-video-overlay').addService(googletag.pubads());

    
      
      // خليها (true, true) زي ما هي عشان تضمن إنها ما تختفيش إلا لما الطلب يخلص
      googletag.setConfig({
  singleRequest: true,
});
      
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