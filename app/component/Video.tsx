"use client";
import React from 'react';

export default function AdOverlay({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group">
      {/* 1. مشغل البث المباشر - خليناه z-10 عشان نضمن ترتيبه */}
      <div className="w-full h-full relative z-10">
        {children}
      </div>

      {/* 2. حاوية إعلان الفيديو */}
      {/* التعديل: شلنا pointer-events-auto وخليناها pointer-events-none */}
      {/* عشان الضغط يعدي للفيديو، وجوجل لما بيحط الإعلان هو بيعرف يتعامل مع الـ clicks بتاعته */}
      <div 
        id="div-gpt-ad-video-overlay" 
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <script dangerouslySetInnerHTML={{ __html: `
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-video-overlay'); });
        `}} />
      </div>
    </div>
  );
}