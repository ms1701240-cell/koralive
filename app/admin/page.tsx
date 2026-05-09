"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [streamUrl, setStreamUrl] = useState("");
  const [streamCode, setStreamCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      }
    };
    checkUser();
  }, [router]);
const stopStream = async () => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase
      .from("matches")
      .update({ is_live_now: false })
      .eq("id", 999);

    setLoading(false);
    if (error) {
      setMessage("❌ فشل إيقاف البث: " + error.message);
    } else {
      setMessage("✅ تم إيقاف البث بنجاح");
    }
  };
 // AdminDashboard.tsx
const updateMatch = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  // 1. نقفل أي بث شغال دلوقتي الأول (اختياري لو أنت ضامن إنك بتحدث الـ 999 بس)
await supabase
  .from("matches")
  .update({ is_live_now: false })
  .neq("id", 999); // اقفل الكل ما عدا اللي هنشغله دلوقتي

// 2. تحديث البث رقم 999 بالبيانات الجديدة
// 2. تحديث البث رقم 999 بالبيانات الجديدة
const { error } = await supabase
  .from("matches")
  .update({
    // لو المستخدم كتب كود في الـ Textarea استخدمه، لو مفيش حط null
    stream_code: streamCode.trim() !== "" ? streamCode : null,
    // لو مفيش كود، استخدم الرابط العادي
    stream_url: streamUrl.trim() !== "" ? streamUrl : null,
    is_live_now: true,
    title: "بث مباشر الآن" 
  })
  .eq("id", 999);

  setLoading(false);
  // ... باقي كود الرسائل

    if (error) {
      setMessage("❌ حصل مشكلة: " + error.message);
    } else {
      setMessage("✅ تم تحديث البث بنجاح!");
      setStreamUrl("");
      setStreamCode("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white p-10 flex flex-col items-center" dir="rtl">
      <h1 className="text-3xl font-black mb-8 text-green-500 italic">FLOWERSPOT Admin</h1>
      
      <form onSubmit={updateMatch} className="bg-[#161e2f] p-8 rounded-2xl border border-gray-800 w-full max-w-md shadow-2xl">
        <h2 className="text-xl font-bold mb-6 text-center">تحديث البث المباشر (الرئيسية)</h2>

        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-400 text-sm">رابط البث (URL):</span>
            <input 
              type="text" 
              value={streamUrl}
              onChange={(e) => setStreamUrl(e.target.value)}
              className="mt-2 block w-full bg-[#0a0f1a] border border-gray-700 p-3 rounded-lg text-green-400 focus:outline-none focus:border-green-500 transition-all"
              placeholder="https://..."
            />
          </label>

          <div className="relative py-2 text-center">
            <span className="bg-[#161e2f] px-2 text-gray-500 text-xs">أو (يفضل للأكواد الكاملة)</span>
            <hr className="border-gray-800 absolute top-1/2 w-full -z-10" />
          </div>

          <label className="block">
            <span className="text-gray-400 text-sm">كود التضمين (Embed Code / Iframe):</span>
            <textarea 
              value={streamCode}
              onChange={(e) => setStreamCode(e.target.value)}
              className="mt-2 block w-full bg-[#0a0f1a] border border-gray-700 p-3 rounded-lg text-green-400 focus:outline-none focus:border-green-500 transition-all h-32"
              placeholder="<iframe ...></iframe>"
            />
          </label>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 mt-8 p-4 rounded-xl font-bold transition-all disabled:bg-gray-700 shadow-lg shadow-green-900/20"
        >
          {loading ? "جاري التحديث..." : "نشر البث الآن 🚀"}
        </button>
          <button 
          type="button" 
          onClick={stopStream}
          disabled={loading}
          className="w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white mt-4 p-4 rounded-xl font-bold transition-all disabled:opacity-50"
        >
          {loading ? "جاري الإيقاف..." : "إيقاف البث فوراً 🛑"}
        </button>
        {message && (
          <div className={`mt-6 p-3 rounded-lg text-center font-bold text-sm ${message.includes('❌') ? 'bg-red-900/20 text-red-400' : 'bg-green-900/20 text-green-400'}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}