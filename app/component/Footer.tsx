import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* حقوق النشر */}
        <p className="text-gray-500 text-[10px] font-bold">
          © 2026 <span className="text-green-500 italic">FLOWERSPOT</span>. جميع الحقوق محفوظة.
        </p>

        {/* الروابط المهمة للإعلانات - صغر الخط جداً */}
        <div className="flex gap-4 text-[10px] font-bold text-gray-400">
          <Link href="/privacy" className="hover:text-green-500 transition-colors">سياسة الخصوصية</Link>
          <Link href="/terms" className="hover:text-green-500 transition-colors">شروط الاستخدام</Link>
          <Link href="/contact" className="hover:text-green-500 transition-colors">اتصل بنا</Link>
        </div>

      </div>
    </footer>
  );
}