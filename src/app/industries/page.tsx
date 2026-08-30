"use client";

import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const industries = [
  {
    icon: "🛒",
    title: "FMCG & Consumer Goods",
    desc: "The highest-stakes application of neuromarketing. Packaging, shelf positioning, and ad recall are all directly measurable. Every rupee of optimisation compounds at scale across millions of units.",
  },
  {
    icon: "🏪",
    title: "Retail & E-commerce",
    desc: "From store layout to homepage design, every consumer touchpoint has a neurological signature. We optimise the path from attention to purchase at every step — online and offline.",
  },
  {
    icon: "🏦",
    title: "Financial Services & Fintech",
    desc: "Financial decisions are disproportionately emotional. We help banks, insurance companies, and fintechs design messaging and UX that reduces anxiety and increases trust at the neural level.",
  },
  {
    icon: "🏥",
    title: "Healthcare & Pharma",
    desc: "Patient and physician decisions are deeply subconscious. We apply neuromarketing to healthcare communication, packaging, and brand perception with full ethical compliance.",
  },
  {
    icon: "🚗",
    title: "Automotive",
    desc: "The car purchase is one of the most emotionally complex buying journeys. We map the neural triggers at every stage — from first ad impression to showroom experience to the moment of decision.",
  },
  {
    icon: "💡",
    title: "B2B Technology",
    desc: "Even B2B buyers are humans with emotional brains. We bring neuromarketing into pitch decks, product positioning, and digital presence for technology companies selling to enterprise.",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    desc: "The biggest purchase of a consumer's life is driven by emotion, not spreadsheets. We optimise property marketing to activate aspiration, belonging, and trust circuits precisely.",
  },
  {
    icon: "🚀",
    title: "Startups & Brand Building",
    desc: "For early-stage brands, neural efficiency matters most — every touchpoint must work harder. We help startups build strong brand memory from day one, before budgets allow for repetition.",
  },
];

export default function IndustriesPage() {
  return (
    <SiteShell activeHref="/industries">
      <div className="relative min-h-screen text-[#132033]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-24">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-3">
              WHERE WE WORK
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-[#132033] mb-6">
              Industries
            </h1>
            <p className="text-base sm:text-lg text-[#51657f] leading-relaxed">
              Wherever consumers make decisions, brain science can improve how your brand communicates. Neuromarketing is not a niche tool — it is a universal one.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-20">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="rounded-3xl bg-white border border-black/[0.06] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-black/[0.12] transition-colors"
              >
                <div>
                  <div className="text-3xl mb-4">{ind.icon}</div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#132033] mb-3">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-[#51657f] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* India Opportunity Box */}
          <div className="rounded-3xl bg-[#132033] text-white p-8 sm:p-12 mb-20 shadow-xl relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-slate-400 block mb-3">
                REGIONAL COMPLEXITY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                India is the world's most complex consumer market.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                1.4 billion people. 22 official languages. 2,000+ distinct ethnic groups. Cultural, regional, and generational variations that no single survey can capture. Traditional research fails disproportionately in India because the diversity of subconscious consumer triggers is unlike any other market on earth. Neuromarketing — which measures universal neural responses while accounting for cultural variables — is not just useful in India. It is necessary.
              </p>
              <Link
                href="/contact"
                className="inline-flex rounded-full px-8 py-3.5 bg-white text-[#132033] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
              >
                Discuss Your Industry →
              </Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h3 className="font-serif text-xl sm:text-2xl text-[#132033] mb-4">
              Ready to map your industry's neural landscape?
            </h3>
            <Link
              href="/contact"
              className="inline-flex rounded-full px-7 py-3 bg-[#132033] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0f172a] transition-all"
            >
              Book a Discovery Call
            </Link>
          </div>

        </div>
      </div>
    </SiteShell>
  );
}