import Image from "next/image";
import { supabase } from "@/lib/supabase"; 
import Link from "next/link";
import Footer from "./component/Footer";
import AdOverlay from './component/Video';
import { match } from "node:assert";
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
      {/* Ad Space - التحديث الجديد */}
<div className="w-full flex flex-col items-center justify-center mb-10 overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm py-4 px-2">
  <span className="text-[9px] text-gray-400 mb-2 font-bold tracking-widest uppercase">- إعلان -</span>
  
  {/* وحدة الإعلان الجديدة */}
  <div 
    id="div-gpt-ad-1778267424902-0" 
    className="max-w-full overflow-hidden flex justify-center"
    style={{ minWidth: '320px', minHeight: '90px' }} 
  >
    <script dangerouslySetInnerHTML={{ __html: `
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1778267424902-0'); });
    `}} />
  </div>
</div>

        {/* 3. مقدمة المقال */}
       {/* 3. مقدمة المقال - محتوى محسن لجوجل وأدكس */}
<article className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden text-right mb-8 md:mb-12">
  <div className="relative h-[300px] md:h-[550px] w-full bg-gray-100">
    <Image 
      src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000&auto=format&fit=crop"
      alt="عالم الزهور ونباتات الزينة المنزلية" 
      fill 
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
    <div className="absolute bottom-6 right-6 left-6 md:bottom-12 md:right-12 md:left-12">
      <span className="bg-[#48bb78] text-white text-[10px] md:text-[12px] font-black px-4 py-1.5 mb-3 md:mb-6 inline-block rounded-full shadow-lg">
        دليل الطبيعة 2026
      </span>
      <h2 className="text-2xl md:text-6xl font-black text-white leading-[1.2] md:leading-[1.1] mb-4">
        أسرار الطبيعة: كيف تجعل منزلك جنة خضراء باستخدام زهور الزينة النادرة؟
      </h2>
      <p className="text-gray-200 text-sm md:text-xl font-medium max-w-3xl leading-relaxed hidden md:block">
        اكتشف الدليل الشامل للعناية بالنباتات المنزلية، من اختيار التربة المناسبة وحتى تقنيات الري الحديثة للحفاظ على نضارة زهورك طوال العام.
      </p>
    </div>
  </div>

  <div className="p-6 md:p-12">
    <div className="prose prose-sm md:prose-xl max-w-none text-gray-700 leading-[1.8] md:leading-[2] text-right">
      <p className="text-lg md:text-2xl font-bold text-[#1a302b] mb-6 md:mb-10 bg-[#f0f7f4] p-4 md:p-6 border-r-8 border-[#48bb78] rounded-l-lg">
        تعتبر النباتات والزهور الرئة التي يتنفس بها المنزل، فهي ليست مجرد ديكور جمالي، بل هي مصدر للطاقة الإيجابية وتنقية الهواء وتحسين الحالة النفسية لسكان المنزل.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-xl md:text-3xl font-black text-[#2d3748] mb-4">لماذا نهتم بنباتات الزينة؟</h3>
          <p>
            تشير الدراسات الحديثة إلى أن وجود الخضرة داخل مساحات العمل أو المعيشة يقلل من مستويات التوتر بنسبة تصل إلى 40%. في <strong>FlowerSpot</strong>، نؤمن بأن كل شخص يستطيع أن يكون "بستانياً" ناجحاً إذا تعلم القواعد الأساسية للتعامل مع الطبيعة.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-3xl font-black text-[#2d3748] mb-4">أهم متطلبات النمو السليم</h3>
          <p>
            تختلف احتياجات الزهور الموسمية عن النباتات المستديمة؛ فبينما تحتاج "الأوركيد" إلى إضاءة غير مباشرة ورطوبة عالية، نجد أن "الصبارات" تزدهر في الأماكن الجافة والمشمسة. الإضاءة، والري، والتهوية هي الثالوث المقدس لنجاح حديقتك المنزلية.
          </p>
        </div>
      </div>

      <h3 className="text-xl md:text-3xl font-black text-[#2d3748] mb-6 border-b-2 border-gray-100 pb-2">خطوات عملية للمبتدئين</h3>
      <p className="mb-6">
        ابدأ دائماً بالنباتات "المسامحة" التي لا تموت بسهولة، مثل نبات السانسيفيريا (جلد النمر) أو البوتس. هذه النباتات تعطيك الثقة في البداية وتتحمل أخطاء الري البسيطة. تأكد دائماً من وجود فتحات تصريف في الأواني لمنع تعفن الجذور، واستخدم تربة "بيتموس" خفيفة للسماح للجذور بالتنفس بحرية.
      </p>

      <div className="bg-[#1a302b] text-white p-6 md:p-10 rounded-2xl my-8 md:my-12 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-2xl md:text-4xl font-black mb-4 text-[#48bb78]">نصيحة الخبراء</h4>
          <p className="text-base md:text-xl italic">
            "لا تروِ نباتاتك حسب جدول زمني ثابت، بل المس التربة بإصبعك؛ إذا كانت جافة بعمق 2 سم، فقد حان وقت السقاية. فالإفراط في الري يقتل النباتات أسرع من الجفاف!"
          </p>
        </div>
        <div className="absolute top-[-20px] left-[-20px] text-9xl text-white/5 font-black">✿</div>
      </div>

      <p className="mb-0">
        نحن هنا في <strong>FlowerSpot</strong> نوفر لك كافة المعلومات والدروس التعليمية المتقدمة لمتابعة نمو نباتاتك لحظة بلحظة. استمتع برحلتك في عالم الطبيعة وحول منزلك إلى واحة من الراحة والجمال.
      </p>
    </div>
  </div>
</article>

        {/* 4. قسم البث */}
        {/* 4. قسم البث المطور بالإعلانات */}
{/* 4. قسم البث المباشر المطور */}
<div className="mb-8 md:mb-12">
    <div className="flex items-center gap-2 mb-4 text-right" dir="rtl">
        <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
        <h3 className="text-base md:text-lg font-black text-[#2d3748]">تغطية حية ومباشرة</h3>
    </div>

    <AdOverlay>
      {activeLiveStream ? (
        activeLiveStream.stream_code ? (
          <div className="w-full h-full [&_iframe]:w-full [&_iframe]:h-full" dangerouslySetInnerHTML={{ __html: activeLiveStream.stream_code }} />
        ) : (
          <iframe src={activeLiveStream.stream_url} className="w-full h-full border-0" allowFullScreen />
        )
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a] text-gray-600">Awaiting Feed</div>
      )}
    </AdOverlay>
</div>
        {/* إعلان وسط الصفحة المتجاوب */}
<div className="w-full flex flex-col items-center justify-center my-8 md:my-12 py-6 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
  <span className="text-[9px] text-gray-400 mb-3 tracking-widest uppercase italic">- ADVERTISEMENT -</span>
  
  <div 
    id="div-gpt-ad-1778270091024-0" 
    className="flex justify-center w-full overflow-hidden"
    style={{ minWidth: '300px', minHeight: '90px' }}
  >
    <script dangerouslySetInnerHTML={{ __html: `
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1778270091024-0'); });
    `}} />
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
                        <Link 
      href={`/match/${article.slug}`}
      className="bg-green-500 text-white px-4 py-2 rounded mt-2 inline-block"
    >
      اقرأ المزيد
    </Link>
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
            
          {/* إعلان السايد بار الجديد - متوافق مع الموبايل والكمبيوتر */}
<div className="bg-white p-4 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm text-center">
    <p className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-[#48bb78] mb-4 uppercase">ADVERTISEMENT</p>
    
    <div className="flex justify-center items-center w-full">
      <div 
        id="div-gpt-ad-1778268313330-0" 
        className="mx-auto overflow-hidden"
        style={{ minWidth: '300px', minHeight: '50px' }} // بيبدأ بـ 50 عشان الموبايل ويفتح لـ 250 في الكمبيوتر
      >
        <script dangerouslySetInnerHTML={{ __html: `
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1778268313330-0'); });
        `}} />
      </div>
    </div>
</div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}