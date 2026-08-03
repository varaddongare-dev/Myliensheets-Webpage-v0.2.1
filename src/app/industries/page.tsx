import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { industries } from "@/data/siteContent";

export default function IndustriesPage(): React.JSX.Element {
  return (
    <SiteShell activeHref="/industries">
      <section className="relative mx-auto w-full max-w-[1180px] overflow-hidden px-6 pb-16 pt-20 sm:px-8 md:px-10 md:pt-24 lg:px-12">
        
        <div className="pointer-events-none absolute inset-0 -z-10 select-none opacity-40 mix-blend-multiply dark:opacity-20">
          <svg
            className="absolute -left-20 top-0 h-[600px] w-[600px] text-[#56708f]/10"
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            <path d="M50,150 Q120,80 200,150 T350,150" strokeDasharray="3 3" className="animate-[dash_50s_linear_infinite]" />
            <path d="M120,80 Q200,240 280,80" />
            <circle cx="50" cy="150" r="3" fill="currentColor" />
            <circle cx="120" cy="80" r="3" fill="currentColor" className="animate-pulse" />
            <circle cx="200" cy="150" r="4" fill="currentColor" />
            <circle cx="280" cy="80" r="3" fill="currentColor" />
            <circle cx="350" cy="150" r="3" fill="currentColor" className="animate-pulse delay-100" />
          </svg>
        </div>

        <div className="max-w-[840px]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#56708f]">
            Where We Work
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-[#132033] sm:text-6xl md:text-7xl">
            Industries
          </h1>
          <p className="mt-6 max-w-[780px] text-base font-medium leading-relaxed text-[#4b607c] md:text-lg">
            Wherever consumers make decisions, brain science can improve how your brand
            communicates. Neuromarketing is not a niche tool. It is a universal one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="rounded-[28px] border border-black/[0.04] bg-gradient-to-b from-white to-[#f6faff]/90 p-6 shadow-[0_12px_34px_rgba(30,41,59,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-black tracking-tight text-[#132033]">
                {industry.title}
              </h2>
              <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#344861]">
                {industry.body}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-12 flex flex-col items-center text-center rounded-[34px] border border-black/[0.04] bg-gradient-to-b from-[#132033] to-[#162b44] p-6 text-white shadow-xl sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">
            India Opportunity
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl max-w-3xl">
            India is the world&apos;s most complex consumer market.
          </h2>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/80">
            1.4 billion people. 22 official languages. 2,000+ distinct ethnic groups.
            Cultural, regional, and generational variations that no single survey can capture.
            Traditional research fails disproportionately in India because the diversity of
            subconscious consumer triggers is unlike any other market on earth. Neuromarketing,
            which measures universal neural responses while accounting for cultural variables, is
            not just useful in India. It is necessary.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#132033] transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Discuss Your Industry &rarr;
          </Link>
        </section>
      </section>
    </SiteShell>
  );
}