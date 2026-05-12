'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    googletag: any;
  }
}

interface AdSlotProps {
  adId: string;
  width: number;
  height: number;
}

export default function AdSlot({
  adId,
  width,
  height,
}: AdSlotProps) {

  useEffect(() => {
    if (!window.googletag) return;

    window.googletag.cmd.push(() => {
      window.googletag.display(adId);
    });
  }, [adId]);

  return (
    <div
      id={adId}
      className="overflow-hidden flex justify-center items-center"
      style={{
        width: '100%',
        maxWidth: `${width}px`,
        minHeight: `${height}px`,
        margin: '0 auto',
      }}
    />
  );
}