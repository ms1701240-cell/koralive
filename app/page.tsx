import Image from "next/image";
import { supabase } from "@/lib/supabase"; 
import Link from "next/link";
export const revalidate = 0;
export default async function Home() {
  // 1. جلب البث المباشر الفعلي
  const { data: liveStreamData } = await supabase
    .from("matches")
    .select("*")
    .eq("id", 999) // ننادي الـ ID المخصص للبث بس
    .single();

  const activeLiveStream = liveStreamData && liveStreamData.is_live_now ? liveStreamData : null;


  // جلب المقالات التمويهية
  const { data: articles } = await supabase
    .from("matches")
    .select("*")
    .eq("is_live", true)
    .neq("id", 999) // عشان المقال "999" ميظهرش في وسط الأخبار
    .order('id', { ascending: true });

  return (
    <div style={{ backgroundColor: '#0a0f1a', minHeight: '100vh', color: 'white' }}>
      
      {/* Navbar */}
      <nav style={{ backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b' }} className="p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-black text-green-500 italic">KoraNews</div>
          
          <div className="md:hidden text-white text-2xl">☰</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 text-right" dir="rtl">
        {/* Ad Space */}
        <div className="w-full h-24 bg-[#1e293b] border border-dashed border-gray-600 rounded-xl flex items-center justify-center mb-10">
          <span className="text-gray-500 text-xs font-bold tracking-widest">ADVERTISEMENT SPACE</span>
        </div>

        {/* شبكة المقالات - نستخدم articles هنا */}
       
        {/* قسم البث المباشر */}
       {/* قسم البث المباشر */}
<section className="mt-12 border-t border-gray-800 pt-12">
  <div className="flex items-center gap-3 mb-6 bg-[#161e2f] p-4 rounded-2xl border-r-4 border-green-500">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
    </span>
    <h2 className="text-2xl font-black text-white">
      {activeLiveStream ? `بث مباشر الآن: ${activeLiveStream.title}` : "مركز البث المباشر"}
    </h2>
  </div>

  <div className="bg-[#161e2f] p-2 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
    {/* أضفنا كلاس aspect-video وهيدن للأوفر فلو لضمان التناسق */}
    <div className="aspect-video w-full bg-black relative">
      {activeLiveStream ? (
        activeLiveStream.stream_code ? (
          /* هنا السر: عملنا كلاس يمسك الـ iframe اللي جوه الـ HTML ويجبره يملأ الشاشة */
          <div 
            className="w-full h-full [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:absolute [&_iframe]:top-0 [&_iframe]:left-0" 
            dangerouslySetInnerHTML={{ __html: activeLiveStream.stream_code }} 
          />
        ) : (
          <iframe 
            src={activeLiveStream.stream_url} 
            className="absolute top-0 left-0 w-full h-full" 
            allowFullScreen 
          />
        )
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black">
           <div className="animate-pulse mb-2 text-green-500/20 text-4xl">⚽</div>
           <span className="text-gray-800 text-xs font-bold tracking-[0.2em] uppercase">Signal Waiting</span>
        </div>
      )}
    </div>
  </div>
</section>
      </main>
    </div>
  );
}