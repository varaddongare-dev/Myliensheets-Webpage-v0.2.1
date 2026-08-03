"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import gsap from "gsap";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const lenisRef = useRef<LenisRef | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!lenisRef.current?.lenis) return;

    const lenisInstance = lenisRef.current.lenis;

    function updateTicker(time: number): void {
      lenisInstance.raf(time * 1000);
    }

    gsap.ticker.add(updateTicker);

    return () => {
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current?.lenis) return;
    
    lenisRef.current.lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.08,
        syncTouch: true,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}