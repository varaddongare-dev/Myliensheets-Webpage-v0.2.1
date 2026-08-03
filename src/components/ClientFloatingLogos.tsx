"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const FloatingLogos = dynamic(() => import("@/components/FloatingLogos"), {
  ssr: false,
});

export default function ClientFloatingLogos() {
  const pathname = usePathname();

  return <FloatingLogos key={pathname} />;
}