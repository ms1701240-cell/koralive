import Image from "next/image";
import { supabase } from "@/lib/supabase"; 
import Link from "next/link";
import Footer from "./component/Footer";

export const revalidate = 0;

export default async function Home() {
  const { data: liveStreamData } = await supabase
    .from("matches")
    .select("*")
    .eq("id", 999)
    .limit(1);

  const activeLiveStream = liveStreamData && liveStreamData[0]?.is_live_now ? liveStreamData[0] : null;

  const { data: dbArticles } = await supabase
    .from("matches")
    .select("*")
    .eq("is_live", true)
    .neq("id", 999)
    .order('id', { ascending: false });

  const allArticles = [...(dbArticles || [])];

  return (
    <div className="bg-[#f0f7f4] min-h-screen text-[#2d3748] pb-24 font-tajawal overflow-x-hidden">
      
      {/* 1. شريط الأخبار العلوي - متجاوب وأنيميشن شغال */}
      <div className="bg-[#1a302b] border-b border-[#48bb78] h-10 flex items-center overflow-hidden z-[40] relative" dir="rtl">
        <div className="max-w-7xl mx-auto w-full flex items-center h-full px-2 md:px-4 relative text-white">
          
          <div className="bg-[#48bb78] text-white text-[10px] md:text-[11px] font-black h-full flex items-center px-3 md:px-5 shrink-0 relative z-30 shadow-2xl">
             دليلك للنباتات
            <div className="absolute left-[-10px] top-0 border-y-[20px] border-y-transparent border-r-[10px] border-r-[#48bb78]"></div>
          </div>

          <div className="flex-1 overflow-hidden h-full flex items-center relative">
            <div 
              className="flex items-center gap-8 md:gap-16 whitespace-nowrap animate-scroll-rtl"
              style={{
                display: 'flex',
                width: 'max-content',
              }}
            >
              {[...allArticles, ...allArticles, ...allArticles].map((art: any, index) => (
                <div key={index} className="text-[10px] md:text-[11px] font-bold text-gray-200 flex items-center gap-2 shrink-0">
                  <span className="text-[#48bb78]">✿</span> {art.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll-rtl {
            0% { transform: translateX(0%); }
            100% { transform: translateX(50%); }
          }
          .animate-scroll-rtl {
            animation: scroll-rtl 40s linear infinite;
          }
          @media (max-width: 768px) {
            .animate-scroll-rtl {
              animation: scroll-rtl 25s linear infinite;
            }
          }
        `}} />
      </div>

      {/* 2. Navbar متجاوب */}
      <nav className="bg-white border-b border-gray-100 p-4 md:p-8 sticky top-0 z-50 shadow-sm text-center">
          <div className="text-2xl md:text-4xl font-black text-[#2d3748] tracking-tighter uppercase">
            FLOWER<span className="text-[#48bb78]">SPOT</span>
          </div>
          <p className="text-[8px] md:text-[10px] text-gray-400 font-bold tracking-widest mt-1">NATURE & BOTANICAL GUIDE</p>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-6 text-right" dir="rtl">
        
        {/* Ad Space */}
        <div className="w-full flex flex-col items-center justify-center mb-6 md:mb-10 overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm py-4">
          <span className="text-[9px] text-gray-400 mb-2 font-bold tracking-widest uppercase">- إعلان -</span>
          <div 
            id="div-gpt-ad-1778252658756-0" 
            className="max-w-full overflow-hidden flex justify-center"
            style={{ minWidth: '300px', minHeight: '90px' }}
          >
            <script dangerouslySetInnerHTML={{ __html: `
              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1778252658756-0'); });
            `}} />
          </div>
        </div>

        {/* 3. مقدمة المقال */}
        <article className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden text-right mb-8 md:mb-12">
          <div className="relative h-[300px] md:h-[500px] w-full bg-gray-100">
            <Image 
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000&auto=format&fit=crop"
              alt="Beautiful Flowers" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-6 right-6 left-6 md:bottom-10 md:right-10 md:left-10">
              <span className="bg-[#48bb78] text-white text-[9px] md:text-[10px] font-bold px-3 py-1 mb-2 md:mb-4 inline-block rounded">عالم الطبيعة</span>
              <h2 className="text-xl md:text-5xl font-black text-white leading-tight">
                أجمل أنواع الزهور النادرة: دليل شامل للعناية بنباتات الزينة في منزلك
              </h2>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="prose prose-sm md:prose-lg max-w-none text-gray-600 leading-[1.7] md:leading-[1.9] text-right">
              <p className="text-base md:text-xl font-medium text-gray-500 mb-4 md:mb-8">
                تعتبر الزهور لغة الطبيعة التي تعبر عن الجمال والهدوء. في هذا الدليل، نستعرض كيفية تحويل مساحتك الخاصة إلى جنة خضراء.
              </p>
              <h3 className="text-lg md:text-2xl font-black text-[#2d3748] mb-4 border-r-4 border-[#48bb78] pr-4">أسرار العناية بالزهور الموسمية</h3>
              <p>
                يتطلب الحفاظ على نضارة الزهور فهماً عميقاً لاحتياجاتها من الضوء والري. خبراء <span className="font-bold text-[#48bb78]">FlowerSpot</span> يقدمون لك أفضل النصائح.
              </p>
            </div>
          </div>
        </article>

        {/* 4. قسم البث */}
        <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 md:w-3 md:h-3 bg-red-600 rounded-full animate-ping"></span>
                <h3 className="text-base md:text-lg font-black text-[#2d3748]">تغطية حية ومباشرة</h3>
            </div>
            <div className="relative bg-black aspect-video w-full rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border-b-4 md:border-b-8 border-[#48bb78] flex items-center justify-center">
              {activeLiveStream ? (
                activeLiveStream.stream_code ? (
                  <div className="absolute inset-0 w-full h-full [&_iframe]:w-full [&_iframe]:h-full" dangerouslySetInnerHTML={{ __html: activeLiveStream.stream_code }} />
                ) : (
                  <iframe src={activeLiveStream.stream_url} className="absolute inset-0 w-full h-full border-0" allowFullScreen />
                )
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#1a1a1a]">
                   <span className="text-[#48bb78] font-black text-[10px] md:text-xs uppercase tracking-widest">Awaiting Live Feed</span>
                </div>
              )}
            </div>
        </div>

        {/* 5. شبكة المقالات متجاوبة */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="lg:col-span-3">
            <h3 className="text-xl md:text-2xl font-black text-[#2d3748] border-r-4 border-[#48bb78] pr-3 mb-6 md:mb-8">استكشف المزيد</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {allArticles.map((article: any) => (
                <div key={article.id} className="group flex flex-col bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <div className="relative h-48 md:h-56 w-full overflow-hidden">
                    <Image src={article.image_url} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#48bb78] text-[8px] md:text-[9px] font-black px-2 md:px-3 py-1 rounded-full shadow-sm z-10">
                       BOTANICAL
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-[#2d3748] group-hover:text-[#48bb78] transition-colors">{article.title}</h4>
                    <p className="text-gray-500 text-xs md:text-sm line-clamp-3 mb-4">{article.content}</p>
                    <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between text-[9px] md:text-[11px] font-bold text-gray-400">
                        <span>أبريل 2026</span>
                        <span className="text-[#48bb78]">Flower Guide</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar متجاوب */}
          <aside className="lg:col-span-1 space-y-6 md:space-y-8">
            <div className="bg-white p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-black text-base md:text-lg mb-4 border-r-4 border-[#48bb78] pr-3">حول FlowerSpot</h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">بوابتك لاستكشاف عالم النباتات والزهور، نقدم لك محتوى تعليمي حول الطبيعة.</p>
            </div>
            
            <div className="bg-[#1a302b] p-6 rounded-xl md:rounded-2xl text-center text-white">
                <p className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-[#48bb78] mb-4">ADVERTISEMENT</p>
                <div className="w-full h-48 md:h-64 bg-[#253d38] border border-[#2d4a44] rounded-xl flex items-center justify-center italic text-[10px] text-gray-500">
                  Side Ad Slot
                </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}