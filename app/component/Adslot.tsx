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

export default function AdSlot({ adId, width, height }: AdSlotProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      window.googletag.display(adId);
    });
  }, [adId]);

  return (
    <div
      id={adId}
      style={{
        width: '100%',
        minHeight: `${height}px`,
        margin: '0 auto',
      }}
    />
  );
}