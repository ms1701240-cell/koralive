import Image from "next/image";
import { supabase } from "@/lib/supabase"; 
import Link from "next/link";
import Footer from "./component/Footer";

export const revalidate = 0;

export default async function Home() {
  // 1. جلب بيانات البث من Supabase (ملمسناش الكود ده)
  const { data: liveStreamData } = await supabase
    .from("matches")
    .select("*")
    .eq("id", 999)
    .limit(1);

  const activeLiveStream = liveStreamData && liveStreamData[0]?.is_live_now ? liveStreamData[0] : null;

  // 2. جلب المقالات من قاعدة البيانات
  const { data: dbArticles } = await supabase
    .from("matches")
    .select("*")
    .eq("is_live", true)
    .neq("id", 999)
    .order('id', { ascending: false });

  const allArticles = [...(dbArticles || [])];

  return (
    // تغيير الخلفية للون رمادي فاتح مريح للعين (ستايل المدونات)
    <div className="bg-[#f4f7f6] min-h-screen text-[#333] pb-24 font-tajawal">
      
      {/* 1. شريط الأخبار العلوي (النسخة اللي ظبطناها: وقت + عاجل + أنيميشن) */}
      <div className="bg-[#0f172a] border-b border-red-600 h-10 flex items-center overflow-hidden z-[40] relative" dir="rtl">
        <div className="max-w-7xl mx-auto w-full flex items-center h-full px-4 relative text-white">
          <div className="hidden lg:flex items-center gap-2 text-gray-400 text-[10px] font-bold shrink-0 border-l border-white/10 pl-4 ml-4">
            <span>{new Intl.DateTimeFormat('ar-EG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date())}</span>
          </div>

          <div className="bg-red-600 text-white text-[11px] font-black h-full flex items-center px-5 shrink-0 relative z-30 shadow-2xl">
            أخبار عاجلة
            <div className="absolute left-[-10px] top-0 border-y-[20px] border-y-transparent border-r-[10px] border-r-red-600"></div>
          </div>

          <div className="flex-1 overflow-hidden h-full flex items-center relative text-white">
            <div 
              className="flex items-center gap-16 whitespace-nowrap"
              style={{
                display: 'flex',
                width: 'max-content',
                animation: 'scroll-rtl 800s linear infinite',
              }}
            >
              {[...allArticles, ...allArticles, ...allArticles, ...allArticles, ...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles,...allArticles].map((art: any, index) => (
                <Link key={index} href={`/match/${art.slug}`} className="text-[11px] font-bold text-gray-300 hover:text-green-500 transition-colors flex items-center gap-3 shrink-0">
                  <span className="text-red-600">◀</span> {art.title}
                </Link>
              ))}
              {[...allArticles, ...allArticles].map((art: any, index) => (
      <Link 
        key={`dup-${index}`} 
        href={`/match/${art.slug}`} 
        className="text-[11px] font-bold text-gray-300 hover:text-green-500 transition-colors flex items-center gap-3 shrink-0"
      >
        <span className="text-red-600">◀</span> {art.title}
      </Link>
    ))}
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll-rtl {
            0% { transform: translateX(0%); }
            100% { transform: translateX(50%); }
          }
        `}} />
      </div>

      {/* 2. Navbar (أبيض سادة زي المدونة) */}
      <nav className="bg-white border-b border-gray-200 p-6 sticky top-0 z-50 shadow-sm text-center">
          <div className="text-4xl font-black text-[#1a1a1a] tracking-tighter uppercase italic">
            KORA<span className="text-red-600 text-3xl">NEWS</span>
          </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-6 text-right" dir="rtl">
        
        {/* Ad Space */}
        {/* مساحة الإعلان العلوية - متظبطة للموبايل والكمبيوتر */}
        <div className="w-full flex flex-col items-center justify-center mb-10 overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm py-4">
          <span className="text-[9px] text-gray-400 mb-2 font-bold tracking-widest uppercase">- إعلان -</span>
          
          <div 
            id="div-gpt-ad-1778252658756-0" 
            className="max-w-full overflow-hidden flex justify-center"
            style={{ minWidth: '300px', minHeight: '90px' }} // المينيمم للموبايل
          >
            <script dangerouslySetInnerHTML={{ __html: `
              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1778252658756-0'); });
            `}} />
          </div>
        </div>



        {/* المقال التمويهي لـ Google Adsense - SEO Content */}
         {/* 3. مقدمة المقال (ستايل جنة المفتوح) */}
            <article className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden text-right">
              {/* الصورة الضخمة */}
              <div className="relative h-[450px] w-full bg-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
                  alt="Sports Update" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 right-10 left-10">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 mb-4 inline-block">تقارير رياضية</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                    أهم المستجدات الرياضية وتفاصيل الأحداث الجارية في الملاعب العالمية
                  </h2>
                </div>
              </div>

              {/* المحتوى النصي التمويهي الضخم */}
              <div className="p-10">
                <div className="prose prose-lg max-w-none text-gray-700 leading-[1.8] text-right">
                  <p className="text-xl font-medium text-gray-500 mb-8 leading-relaxed">
                    تستمر الساحرة المستديرة في خطف الأنفاس حول العالم، حيث تشهد الملاعب في هذه الأونة زخمًا كبيرًا وتنافسية غير مسبوقة بين كبار الأندية. ومع اقتراب المراحل الحاسمة من الموسم، تزداد أهمية كل تفصيلة فنية تكتيكية داخل المستطيل الأخضر.
                  </p>
                  
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-6 border-r-4 border-red-600 pr-4">تحليل الأداء الفني والبدني</h3>
                  <p className="mb-6">
                    تشير التقارير الصادرة من المعسكرات التدريبية إلى أن الجاهزية البدنية ستلعب الدور الأبرز في حسم المواجهات القادمة. المحللون في <span className="font-bold text-red-600">كورة نيوز</span> يراقبون عن كثب تحركات اللاعبين وتغييرات المدربين التكتيكية التي تهدف إلى إيجاد ثغرات في دفاعات الخصوم.
                  </p>

                  {/* 4. البث المباشر (مدفون في نص المقال للتمويه) */}
                 
                </div>
              </div>
            </article>
   

   

    {/* كلمات دلالية (Tags) للـ SEO */}
   
{/* زر الانضمام للتليجرام - فوق البث مباشرة */}
<div className="mb-4">
  <Link 
    href="https://t.me/your_telegram_link" // حط رابط قناتك هنا
    target="_blank"
    className="group relative flex items-center justify-between bg-white border border-gray-200 p-3 rounded-xl hover:border-[#0088cc] transition-all duration-300 shadow-sm overflow-hidden"
  >
    {/* تأثير ضوئي بيجري على الزرار */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0088cc]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    
    <div className="flex items-center gap-3 relative z-10">
      <div className="bg-[#0088cc] p-2 rounded-lg">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.467 8.316l-1.246 6.139c-.101.439-.36.547-.728.341l-1.938-1.429-1.146 1.103c-.126.126-.231.231-.476.231l.17-2.41 4.387-3.963c.19-.17-.041-.263-.293-.095l-5.422 3.414-2.337-.73c-.508-.159-.519-.508.106-.753l9.126-3.516c.422-.153.791.1.641.748z"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-[13px] font-black text-[#1a1a1a]">انضم إلى قناتنا على تليجرام</span>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Get live match updates</span>
      </div>
    </div>

    <div className="bg-[#f0f2f5] group-hover:bg-[#0088cc] group-hover:text-white text-gray-400 px-4 py-1.5 rounded-lg text-[11px] font-black transition-all duration-300 relative z-10">
      انضم الآن
    </div>
  </Link>
</div>
        {/* تقسيم الشاشة: عمود المقالات (3/4) + السايد بار الجانبي (1/4) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* العمود الرئيسي */}
          <div className="lg:col-span-3">
            {/* قسم البث المباشر (زي ما هو بالظبط) */}
           {/* قسم البث المباشر - النسخة اللي مش بتبوظ */}
<div className="relative bg-black aspect-video w-full rounded-xl shadow-2xl overflow-hidden border-b-4 border-red-600 mb-12 h-100 flex items-center justify-center">
  {activeLiveStream ? (
    // لو فيه كود iframe جاهز (stream_code)
    activeLiveStream.stream_code ? (
      <div 
        className="absolute inset-0 w-full h-full [&_iframe]:w-full [&_iframe]:h-full" 
        dangerouslySetInnerHTML={{ __html: activeLiveStream.stream_code }} 
      />
    ) : 
    // لو فيه رابط مباشر (stream_url)
    activeLiveStream.stream_url ? (
      <iframe 
        src={activeLiveStream.stream_url} 
        className="absolute inset-0 w-full h-full border-0" 
        allowFullScreen 
        allow="autoplay; encrypted-media"
      />
    ) : (
      <div className="text-gray-400 font-bold">الرابط غير متاح حالياً</div>
    )
  ) : (
    // لو مفيش بث شغال حالياً
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#1a1a1a]">
       <div className="text-6xl mb-4 opacity-20">⚽</div>
       <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em] animate-pulse">Signal Waiting</span>
    </div>
  )}

  {/* العلامة الحمراء للبث المباشر */}
  {activeLiveStream && (
    <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-2 shadow-lg z-10 animate-bounce">
      <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
      بث مباشر الآن
    </div>
  )}
</div>

            <h3 className="text-2xl font-black text-[#1a1a1a] border-r-4 border-red-600 pr-3 mb-8">أحدث الأخبار</h3>

            {/* شبكة المقالات (كروت بيضاء بخلفية فاتحة) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allArticles.map((article: any) => (
                <Link href={`/match/${article.slug}`} key={article.id} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 text-right">
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={article.image_url} 
                      alt={article.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-3 py-1 uppercase z-10">
                       {article.category || "News"}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow text-right">
                    <h4 className="font-bold text-lg leading-snug mb-4 text-[#1a1a1a] group-hover:text-red-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-4 text-[11px] font-bold text-gray-400">
                      <span>{new Date().toLocaleDateString('ar-EG')}</span>
                      <span className="text-red-600 underline underline-offset-4">اقرأ المزيد ←</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 3. العمود الجانبي (Sidebar) - اللي كان في الموقع اللي بعته */}
          <aside className="lg:col-span-1 space-y-8">
            {/* مربع "من نحن" */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-right">
                <h4 className="font-black text-lg mb-4 border-r-4 border-red-600 pr-3 text-[#1a1a1a]">من نحن</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                    موقع كورة نيوز هو بوابتكم الأولى لمتابعة أهم مباريات اليوم والبث المباشر وأخبار كرة القدم العالمية والمحلية لحظة بلحظة.
                </p>
            </div>
            
            {/* مساحة إعلانية جانبية */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl text-center text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4 italic">ADVERTISEMENT</p>
                <div className="w-full h-64 bg-[#262626] border border-gray-800 rounded flex items-center justify-center">
                    <span className="text-gray-700 font-bold uppercase">Sidebar Ad Slot</span>
                </div>
            </div>

            {/* مربع التواصل الاجتماعي أو التصنيفات */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-right text-[#1a1a1a]">
                <h4 className="font-black text-lg mb-4 border-r-4 border-red-600 pr-3">تصنيفات</h4>
                <ul className="space-y-2 text-sm font-bold">
                    <li className="hover:text-red-600 cursor-pointer">• الدوري الإنجليزي</li>
                    <li className="hover:text-red-600 cursor-pointer">• الدوري الإسباني</li>
                    <li className="hover:text-red-600 cursor-pointer">• أخبار الميركاتو</li>
                </ul>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}