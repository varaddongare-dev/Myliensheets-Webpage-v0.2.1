"use client";

import React from "react";
import dynamic from "next/dynamic";
import { SiteShell } from "@/components/SiteShell";
import MainContent from "@/components/MainContent";

const BrainCanvas = dynamic(() => import("@/components/BrainCanvas"), {
  ssr: false,
});



export default function Home(): React.JSX.Element {
  return (
    <SiteShell>
      <BrainCanvas />
      <MainContent />
    </SiteShell>
  );
}