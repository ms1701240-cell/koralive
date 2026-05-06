import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MatchPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 1. التعامل مع الـ params الجديدة
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 2. سحب بيانات المقال من جدول matches
  const { data: match, error } = await supabase
    .from("matches")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !match) {
    console.error("Supabase Error:", error);
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-white p-6 text-right" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* عنوان المقال (التمويه) */}
        <h1 className="text-3xl font-bold mb-6 text-green-500 leading-tight">
          {match.title}
        </h1>
        
        {/* الصورة الأساسية */}
        <div className="relative h-96 w-full mb-8 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          <Image 
            src={match.image_url} 
            alt={match.title} 
            fill 
            className="object-cover" 
            unoptimized 
          />
        </div>

        {/* محتوى المقال التمويلي لجوجل وأدكس */}
        <article className="prose prose-invert max-w-none text-gray-300 text-lg leading-loose mb-12">
          <div className="whitespace-pre-wrap">
            {match.content}
          </div>
        </article>

        {/* منطقة البث المباشر - شغل العميل */}
       

           {/* منطقة البث المباشر - بدون عنوان أو علامة حمراء */}
{(match.stream_code || match.stream_url) && (
  <div className="bg-[#161e2f] p-4 md:p-8 rounded-3xl border border-green-500/10 shadow-2xl">
    
    <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-gray-700 shadow-inner">
      {match.stream_code ? (
        /* لو العميل حط كود تضمين كامل (Iframe) */
        <div 
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: match.stream_code || "" }} 
        />
      ) : (
        /* لو العميل حط رابط بس */
        <iframe 
          src={match.stream_url} 
          className="w-full h-full" 
          allowFullScreen 
        />
      )}
    </div>
    
    <p className="mt-4 text-center text-sm text-gray-500 italic">
      إذا توقف البث، قم بتحديث الصفحة
    </p>
  </div>
)}
      </div>
    </main>
  );
}