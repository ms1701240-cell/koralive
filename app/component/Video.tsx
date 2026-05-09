"use client";
import React from 'react';

export default function AdOverlay({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group">
      {/* 1. مشغل البث المباشر */}
      <div className="w-full h-full">
        {children}
      </div>

      {/* 2. حاوية إعلان الفيديو (VAST Container) */}
      {/* جوجل هيستخدم الـ div ده عشان يحط فيه فيديو الإعلان وزرار التخطي بتاعه */}
      <div 
        id="div-gpt-ad-video-overlay" 
        className="absolute inset-0 z-50 pointer-events-auto"
      >
        <script dangerouslySetInnerHTML={{ __html: `
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-video-overlay'); });
        `}} />
      </div>
    </div>
  );
}