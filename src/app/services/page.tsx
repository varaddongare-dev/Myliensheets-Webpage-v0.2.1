"use client";

import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const services = [
  {
    number: "01",
    icon: "👁",
    title: "Ad & Creative Testing",
    hook: "Know how it lands before you spend.",
    badge: "40% avg. improvement in ad recall",
    description:
      "Before you spend on media, know exactly how your creative lands in the brain. We use EEG, eye-tracking, and behavioural data to measure genuine emotional response, attention peaks, and memory encoding — not what people say they feel.",
  },
  {
    number: "02",
    icon: "📦",
    title: "Packaging Neuroscience",
    hook: "What your pack says without words.",
    badge: "Used by Frito-Lay, Campbell's, & more",
    description:
      "Your packaging is having a subconscious conversation with every customer's brain right now. We measure guilt responses, desire triggers, and attention allocation to optimise packaging for genuine neural engagement.",
  },
  {
    number: "03",
    icon: "🧭",
    title: "Brand Perception Mapping",
    hook: "What they feel vs. what you think they feel.",
    badge: "Neural brand audits in 4 weeks",
    description:
      "Map exactly what emotional and cognitive associations your brand triggers in your target audience's brain. Compare against competitors at a neural level. Understand what you're actually communicating vs. what you think you are.",
  },
  {
    number: "04",
    icon: "🔬",
    title: "Consumer Behaviour Research",
    hook: "The decision your data never saw.",
    badge: "95% of decisions are subconscious",
    description:
      "Go beyond surveys and focus groups. We measure actual decision-making at the neural level — revealing the subconscious triggers, cognitive biases, and emotional drivers behind every purchase decision your customer makes.",
  },
  {
    number: "05",
    icon: "💻",
    title: "UX & Digital Neuromarketing",
    hook: "Every pixel is a conversation.",
    badge: "Google moved $200M with one tweak",
    description:
      "Test your website, app, and digital ads using eye-tracking and behavioural data to measure visual attention, cognitive load, and emotional response — page by page, element by element.",
  },
  {
    number: "06",
    icon: "📈",
    title: "Campaign Strategy Consulting",
    hook: "Built around how the brain decides.",
    badge: "End-to-end neuro-informed strategy",
    description:
      "Translate neural data into actionable creative briefs, messaging hierarchies, and campaign architectures. We build marketing strategy around how the brain actually makes decisions — not how marketers assume it does.",
  },
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We map your brand, audience, and marketing challenge in depth before recommending anything.",
  },
  {
    step: "02",
    title: "Research Design",
    desc: "We design the right neuromarketing methodology for your specific question and audience.",
  },
  {
    step: "03",
    title: "Testing",
    desc: "We run EEG, eye-tracking, or behavioural studies with your exact target audience.",
  },
  {
    step: "04",
    title: "Strategy Delivery",
    desc: "Neural insights translated into actionable creative briefs, messaging hierarchies, and brand strategy.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell activeHref="/services">
      {/* 3D Flip Styles */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="relative min-h-screen text-[#132033]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-24">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-3">
              WHAT WE OFFER
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-[#132033] mb-6">
              Services
            </h1>
            <p className="text-base sm:text-lg text-[#51657f] leading-relaxed">
              One mission — make your marketing work with the brain, not against it. Hover over each service to see the methodology.
            </p>
          </div>

          {/* 3D Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((svc) => (
              <div
                key={svc.number}
                className="group h-[320px] w-full perspective-1000 cursor-pointer"
              >
                <div className="relative h-full w-full rounded-3xl transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.06]">
                  
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-7 flex flex-col justify-between backface-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {svc.number}
                        </span>
                        <span className="text-2xl animate-pulse">{svc.icon}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#132033] mb-2 leading-tight">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-[#51657f] leading-relaxed">
                        {svc.hook}
                      </p>
                    </div>

                    <div>
                      <span className="inline-block rounded-full bg-[#132033]/5 px-3 py-1 text-[11px] font-bold text-[#132033]">
                        {svc.badge}
                      </span>
                      <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#132033] transition-colors">
                        <span>Hover to inspect</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 h-full w-full rounded-3xl bg-[#132033] p-7 text-white flex flex-col justify-between rotate-y-180 backface-hidden shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {svc.number} · Methodology
                        </span>
                        <span className="text-sm font-semibold text-slate-300">
                          Deep Dive
                        </span>
                      </div>
                      <h4 className="font-serif text-lg text-white mb-2 leading-snug">
                        {svc.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {svc.description}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-[#132033] hover:bg-slate-100 transition-colors"
                    >
                      Inquire for this →
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* How We Work — 4 Steps */}
          <div className="mb-24">
            <div className="mb-12 text-center sm:text-left">
              <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-2">
                THE PROCESS
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#132033] tracking-tight">
                How We Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-7 shadow-sm flex flex-col justify-between"
                >
                  <span className="text-3xl font-serif text-[#132033]/20 font-bold block mb-4">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#132033] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#51657f] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Philosophy Box */}
          <div className="rounded-3xl bg-slate-50 border border-black/[0.06] p-8 sm:p-12 max-w-4xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center sm:text-left">
              <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#64748b] block mb-2">
                ENGAGEMENT MODEL
              </span>
              <h3 className="font-serif text-2xl text-[#132033] mb-3">
                Custom-scoped to your question.
              </h3>
              <p className="text-sm text-[#51657f] leading-relaxed">
                We do not have package pricing — every engagement is scoped to your specific research question, audience, and timeline[cite: 1]. The discovery call helps us understand your challenge before we design a proposal[cite: 1].
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex rounded-full bg-[#132033] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0f172a] transition-all active:scale-95"
            >
              Book a Discovery Call
            </Link>
          </div>

        </div>
      </div>
    </SiteShell>
  );
}