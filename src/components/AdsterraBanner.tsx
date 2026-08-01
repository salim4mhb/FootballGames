'use client';

import { useEffect, useRef } from 'react';

interface BannerProps {
  idKey: string; // قيمة الكود key الخاص بك
  width: number;
  height: number;
}

export default function AdsterraBanner({ idKey, width, height }: BannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current || bannerRef.current.querySelector('script')) return;

    // إعداد متغير atOptions لـ Adsterra
    (window as unknown as Record<string, unknown>).atOptions = {
      key: idKey,
      format: 'iframe',
      height: height,
      width: width,
      params: {},
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//www.highperformanceformat.com/${idKey}/invoke.js`;

    bannerRef.current.appendChild(script);
  }, [idKey, width, height]);

  return (
    <div className="my-4 flex justify-center items-center overflow-hidden">
      <div ref={bannerRef} style={{ width: `${width}px`, height: `${height}px` }} />
    </div>
  );
}