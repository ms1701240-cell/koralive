'use client'; // ضروري جداً
import { useEffect } from 'react';

// تعريف googletag عشان TypeScript ميزعلش
declare global {
  interface Window {
    googletag: any;
  }
}

// تعريف أنواع البيانات (Props)
interface AdSlotProps {
  adId: string;
  width: number;
  height: number;
}

export default function AdSlot({ adId, width, height }: AdSlotProps) {
  useEffect(() => {
    // التأكد إن مكتبة جوجل موجودة قبل المناداة
    const gpt = window.googletag;
    if (gpt && gpt.apiReady) {
      gpt.cmd.push(function() {
        gpt.display(adId);
      });
    }
  }, [adId]); // يشتغل مرة واحدة لما الـ ID يتغير

  return (
    <div 
      id={adId} 
      style={{ width: `${width}px`, height: `${height}px`, margin: '0 auto' }} 
    />
  );
}