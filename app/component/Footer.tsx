import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 py-10 mt-20 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* اللوجو والوصف */}
        <div className="text-center md:text-right">
          <div className="text-2xl font-black text-green-500 italic mb-2 tracking-tighter">KoraNews</div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            منصتك الأولى لمتابعة أخبار كرة القدم، تحليلات المباريات، وأسرار تدريبات المحترفين.
          </p>
        </div>

        {/* لينكات سريعة */}
        <div className="flex gap-8 text-gray-400 text-sm font-bold">
          <Link href="#" className="hover:text-green-500 transition-colors">عن الموقع</Link>
          <Link href="#" className="hover:text-green-500 transition-colors">سياسة الخصوصية</Link>
          <Link href="#" className="hover:text-green-500 transition-colors">اتصل بنا</Link>
        </div>

        {/* الحقوق */}
        <div className="text-gray-500 text-xs font-mono">
          © {new Date().getFullYear()} KoraNews. All rights reserved.
        </div>
      </div>

      {/* لمسة المبرمج */}
      <div className="text-center mt-8 pt-4 border-t border-gray-800/50">
        <p className="text-gray-600 text-[10px] tracking-widest uppercase">
          جميع الحقوق محفوظة لصاحب الموقع <span className="text-green-500 font-bold">منتظر الأسدي</span> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}