import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { aboutValues, manifestoParagraphs } from "@/data/siteContent";

export default function AboutPage(): React.JSX.Element {
  return (
    <SiteShell activeHref="/about">
      <section className="relative mx-auto w-full max-w-[1180px] overflow-hidden px-6 pb-16 pt-1 sm:px-8 md:px-10 md:pt-24 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 select-none opacity-40 mix-blend-multiply dark:opacity-20">
          <svg
            className="absolute -right-20 top-0 h-[600px] w-[600px] text-[#56708f]/10"
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path 
              d="M100,80 Q140,40 200,80 T300,80" 
              strokeDasharray="4 4"
              className="animate-[dash_60s_linear_infinite]"
            />
            <path d="M140,40 Q180,120 220,60 T320,120" />
            <path d="M200,80 Q220,160 180,220 T260,300" />
            <path d="M180,220 Q120,260 140,340" />
            <circle cx="100" cy="80" r="3" fill="currentColor" className="animate-pulse" />
            <circle cx="140" cy="40" r="3" fill="currentColor" />
            <circle cx="200" cy="80" r="4" fill="currentColor" className="animate-pulse delay-75" />
            <circle cx="300" cy="80" r="3" fill="currentColor" />
            <circle cx="220" cy="60" r="3" fill="currentColor" />
            <circle cx="320" cy="120" r="3" fill="currentColor" />
            <circle cx="180" cy="220" r="4" fill="currentColor" className="animate-pulse delay-150" />
            <circle cx="260" cy="300" r="3" fill="currentColor" />
            <circle cx="140" cy="340" r="3" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-[840px]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#56708f]">
            Our Story
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[0.96] tracking-tight text-[#132033] sm:text-6xl md:text-7xl">
            About MyelinSheets
          </h1>
        </div>

        <section className="mt-10 rounded-[34px] border border-black/[0.04] bg-white/45 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7c8da5]">
            Why The Name?
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#132033] sm:text-4xl">
            Myelin is how the brain builds mastery.
          </h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <p className="text-base font-medium leading-relaxed text-[#344861]">
              Myelin sheaths are the fatty coating around neural pathways in the brain. Every time
              a neural circuit fires repeatedly, myelin builds up around it, making that pathway
              faster, stronger, and more automatic. It is literally how habits, skills, and brand
              memories form in the brain.
            </p>
            <p className="text-base font-medium leading-relaxed text-[#344861]">
              MyelinSheets is named for exactly this: we help brands build thick, strong neural
              pathways in their customers&apos; minds. Not campaign spikes, permanent memory. Not
              awareness, identity. We do not just do marketing. We build myelin.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
          <article className="rounded-[34px] border border-black/[0.04] bg-gradient-to-b from-[#132033]/95 to-[#162b44]/95 p-6 text-white shadow-[0_16px_40px_rgba(19,32,51,0.18)] sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">
              Manifesto
            </p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/90">
              {manifestoParagraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "font-black text-white" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <div className="grid gap-5">
            {aboutValues.map((value) => (
              <article
                key={value.title}
                className="rounded-[28px] border border-black/[0.04] bg-white/85 p-6 shadow-[0_12px_34px_rgba(30,41,59,0.05)] backdrop-blur-xl"
              >
                <h3 className="text-xl font-black tracking-tight text-[#132033]">
                  {value.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-[#344861]">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 flex flex-col items-center text-center rounded-[34px] border border-black/[0.04] bg-gradient-to-b from-[#132033] to-[#162b44] p-6 text-white shadow-[0_16px_40px_rgba(19,32,51,0.18)] sm:p-8">
          <h2 className="text-2xl font-black tracking-tight sm:text-4xl max-w-2xl">
            Let&apos;s build something the brain won&apos;t forget.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-white/80 max-w-xl">
            Start with a 30-minute conversation and we&apos;ll tell you exactly where
            neuromarketing can move the needle for your brand.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-[#132033] transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Book a Discovery Call
          </Link>
        </section>
      </section>
    </SiteShell>
  );
}