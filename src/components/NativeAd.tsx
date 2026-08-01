'use client';

import { useEffect, useRef } from 'react';

export default function NativeAd() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || containerRef.current.querySelector('script')) return;

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    // ⚠️ استبدل هذا الرابط برابط الـ Script الموجود في GET CODE الخاص بالـ Native Banner
    script.src = 'https://pl30639899.effectivecpmnetwork.com/30b4574da383a2ca1cb0ec5e58d32277/invoke.js';

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="my-6 flex justify-center items-center w-full min-h-[100px] overflow-hidden">
      {/* ⚠️ استبدل هذا الـ ID بالـ ID الخاص بك المكتوب في كود Adsterra */}
      <div ref={containerRef} id="container-30b4574da383a2ca1cb0ec5e58d32277" />
    </div>
  );
}