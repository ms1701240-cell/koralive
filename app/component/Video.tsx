"use client";
import React, { useState, useEffect } from 'react';

export default function AdOverlay({ children }: { children: React.ReactNode }) {
  const [adVisible, setAdVisible] = useState(true);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer > 0 && adVisible) {
      const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, adVisible]);

  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
      {/* 1. البث المباشر (بيكون شغال في الخلفية) */}
      <div className="w-full h-full">
        {children}
      </div>

      {/* 2. طبقة الإعلان فوق البث */}
      {adVisible && (
        <div className="absolute inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center">
          <p className="text-[10px] text-gray-500 mb-4 uppercase tracking-[0.2em]">إعلان ممول</p>
          
          {/* هنا هنعرض إعلان السايد بار أو أي وحدة إعلانية مقاس 300x250 */}
          <div id="div-gpt-ad-video-overlay" className="min-w-[300px] min-h-[250px] bg-[#1a1a1a] flex items-center justify-center border border-gray-800">
             <p className="text-xs text-gray-600 italic">جاري تحميل الإعلان...</p>
             {/* نداء الوحدة الإعلانية */}
             <script dangerouslySetInnerHTML={{ __html: `
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-video-overlay'); });
             `}} />
          </div>

          {/* زرار التخطي */}
          <div className="absolute bottom-10 right-10">
            {timer > 0 ? (
              <div className="bg-black/80 text-white px-4 py-2 rounded border border-gray-700 text-xs font-bold font-sans">
                يمكنك التخطي خلال {timer}..
              </div>
            ) : (
              <button 
                onClick={() => setAdVisible(false)}
                className="bg-[#48bb78] hover:bg-[#3da366] text-white px-8 py-2 rounded font-black text-sm transition-all shadow-lg shadow-green-900/20"
              >
                تخطي الإعلان ❯
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}