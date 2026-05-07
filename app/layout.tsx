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
          id="adsense-id"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          strategy="lazyOnload" 
        />
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