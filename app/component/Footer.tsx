import Link from "next/link";
import AdSlot from "./Adslot";
export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* مساحة الإعلان الجديد داخل الفوتر */}
        <div className="w-full flex flex-col items-center border-b border-gray-800/50 pb-6 mb-2">
          <span className="text-[8px] text-gray-600 mb-3 tracking-[0.3em] uppercase italic">ADVERTISEMENT</span>
          <div 
            
            style={{ minWidth: '320px', minHeight: '50px' }}
            className="flex justify-center overflow-hidden"
          >
            <AdSlot adId="div-gpt-ad-1778273361751-0" width={728} height={90} />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          {/* حقوق النشر */}
          <p className="text-gray-500 text-[10px] font-bold">
            © 2026 <span className="text-green-500 italic">FLOWERSPOT</span>. جميع الحقوق محفوظة.
          </p>

          {/* الروابط المهمة */}
          <div className="flex gap-4 text-[10px] font-bold text-gray-400">
            <Link href="/privacy" className="hover:text-green-500 transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-green-500 transition-colors">شروط الاستخدام</Link>
            <Link href="/contactpage" className="hover:text-green-500 transition-colors">اتصل بنا</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}