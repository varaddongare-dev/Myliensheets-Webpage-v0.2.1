"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const founders = [
  {
    name: "Hrutuja Dongare",
    title: "Founder & CEO",
    expertise: ["Neuropsychology", "Clinical Strategy", "Brand Neuroscience"],
    bio: "With a strong foundation in clinical neuropsychology and evidence-based interventions, Hrutuja leads MyelinSheets' strategic direction. She bridges the gap between deep brain science and practical consumer behavior, helping brands build authentic, long-lasting mental connections.",
    image: "/assets/hd.png",
  },
  {
    name: "Archee Gupte",
    title: "Co-Founder & COO",
    expertise: ["Sensory Research", "Operations", "Consumer Behavior"],
    bio: "Archee translates complex neurological research into reliable operational frameworks. Bringing a research-driven perspective to sensory processing and cognitive analysis, she oversees project execution to ensure every insight is actionable and impactful.",
    image: "/assets/archee.png",
  },
];

export default function FoundersPage() {
  return (
    <SiteShell activeHref="/founders">
      <div className="relative min-h-screen text-[#132033]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-24">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-3">
              THE MINDS BEHIND MYELINSHEETS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-[#132033] mb-6">
              Translating Brain Science into Brand Strategy
            </h1>
            <p className="text-base sm:text-lg text-[#51657f] leading-relaxed font-normal">
              We combine rigorous cognitive neuroscience with brand architecture, helping organizations decode subconscious decision-making.
            </p>
          </div>

          {/* Founders Cards */}
          <div className="flex flex-col gap-10 max-w-5xl mx-auto">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                {/* Content */}
                <div className="md:col-span-7 flex flex-col justify-center text-left order-2 md:order-1">
                  <h2 className="font-serif text-2xl sm:text-4xl text-[#132033] tracking-tight">
                    {founder.name}
                  </h2>
                  <p className="text-[11px] font-extrabold text-[#64748b] mt-2 mb-5 uppercase tracking-[0.18em]">
                    {founder.title}
                  </p>
                  <p className="text-sm sm:text-base text-[#51657f] leading-relaxed mb-8 font-normal">
                    {founder.bio}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-1.5 bg-[#f4f6f8] text-[#132033] text-[11px] font-semibold uppercase tracking-wider rounded-full border border-black/[0.04]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Frame - Tightly Hugged */}
                <div className="md:col-span-5 relative min-h-[280px] w-full flex items-end justify-center order-1 md:order-2 overflow-hidden rounded-2xl bg-[#f8fafc] border border-black/[0.03]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center select-none pointer-events-none transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quote Block */}
          <div className="mt-16 sm:mt-20 rounded-3xl bg-[#132033] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-lg">
            <h3 className="font-serif text-xl sm:text-3xl leading-relaxed mb-4 text-slate-100">
              &ldquo;95% of decisions are made subconsciously. Our mission is to illuminate that 95%.&rdquo;
            </h3>
            <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-semibold">
              MyelinSheets Leadership Vision
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-white text-[#132033] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>

        </div>
      </div>
    </SiteShell>
  );
}