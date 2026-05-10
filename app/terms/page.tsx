// app/terms/page.tsx
export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto p-10 text-right text-gray-800" dir="rtl">
      <h1 className="text-3xl font-black mb-6 border-r-4 border-[#48bb78] pr-3">شروط الاستخدام</h1>
      <p className="mb-4 text-lg">باستخدامك لموقع FlowerSpot، فإنك توافق على الشروط التالية:</p>
      
      <h2 className="text-xl font-bold mt-6 mb-2">1. المحتوى</h2>
      <p className="mb-4">جميع المعلومات المنشورة في الموقع هي لأغراض تعليمية وإرشادية حول النباتات والزهور.</p>
      
      <h2 className="text-xl font-bold mt-6 mb-2">2. حقوق الملكية</h2>
      <p className="mb-4">العلامة التجارية FlowerSpot وتصميم الموقع هي ملكية خاصة، ولا يجوز نسخ المحتوى دون إذن.</p>
      
      <h2 className="text-xl font-bold mt-6 mb-2">3. الإعلانات</h2>
      <p className="mb-4">الموقع يعرض إعلانات طرف ثالث، ونحن غير مسؤولين عن محتوى الإعلانات الخارجية.</p>
      
      <p className="mt-10 text-sm text-gray-500">آخر تحديث: مايو 2026</p>
    </div>
  );
}