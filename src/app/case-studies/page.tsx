import React from "react";
import { SiteShell } from "@/components/SiteShell";
import CaseStudiesContent from "@/components/CaseStudiesContent";

export default function CaseStudiesPage(): React.JSX.Element {
  return (
    <SiteShell>
      <CaseStudiesContent />
    </SiteShell>
  );
}