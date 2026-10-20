"use client";

import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const tools = [
  {
    code: "EEG",
    name: "Electroencephalography",
    tagline: "Brain Electrical Activity",
    description:
      "Measures real-time brain electrical activity, capturing moment-by-moment emotional engagement, attention, and memory encoding. Cost-effective, portable, and ideal for measuring how creative content lands.",
  },
  {
    code: "Eye-Tracking",
    name: "Visual Attention Mapping",
    tagline: "Gaze Path & Fixation",
    description:
      "Maps exactly where attention goes on a webpage, ad, or package. Identifies what consumers actually look at vs. what they say they notice often completely different.",
  },
  {
    code: "Behavioural Data",
    name: "Implicit Behavioural Testing",
    tagline: "Subconscious Reaction Latency",
    description:
      "Implicit behavioural testing captures decision patterns, hesitation, and response sequences that reveal subconscious preferences without asking the participant a single direct question.",
  },
];

const principles = [
  {
    title: "Priming",
    hook: "Stimulus alters processing",
    body: "Exposure to a stimulus (like a brand logo) changes how the brain processes subsequent information. Brand salience on every touchpoint is scientifically not just strategically important.",
  },
  {
    title: "Anchoring",
    hook: "First values dictate judgment",
    body: "The first number the brain encounters disproportionately influences all subsequent judgements. We design pricing, messaging hierarchies, and content around this principle.",
  },
  {
    title: "Loss Aversion",
    hook: "Pain of loss > pleasure of gain",
    body: "The brain responds 2x more strongly to potential losses than equivalent gains. Framing marketing around what customers risk losing consistently outperforms gain-based messaging.",
  },
  {
    title: "Emotional Memory",
    hook: "Amygdala imprint durability",
    body: "The amygdala tags emotional experiences with strong memory markers. Marketing that triggers genuine emotion creates brand memories that survive years without reinforcement].",
  },
  {
    title: "Mirror Neurons",
    hook: "Social simulation circuitry",
    body: "Seeing human faces activates the brain's social simulation system. Faces in ads, testimonial videos, and packaging consistently outperform non-human visuals.",
  },
  {
    title: "Cognitive Ease",
    hook: "Frictionless neural decoding",
    body: "The brain prefers effortless information processing. Clear design, familiar patterns, and simple messaging reduce cognitive load and increase positive brand associations.",
  },
];

export default function SciencePage() {
  return (
    <SiteShell activeHref="/science">
      <div className="relative min-h-screen text-[#132033]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-24">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-3">
              WHAT IS NEUROMARKETING?
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-[#132033] mb-6">
              Your brain decides. Your mind just explains it later.
            </h1>
            <p className="text-base sm:text-lg text-[#51657f] leading-relaxed font-normal">
              Before you picked a product, clicked an ad, or chose one brand over another your brain had already made the call milliseconds before conscious thought. Driven by emotion, memory, and instinct you weren't even aware of.
            </p>
          </div>

          {/* Subconscious Gap Card */}
          <div className="rounded-3xl bg-[#132033] text-white p-8 sm:p-12 mb-20 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                <span className="text-6xl sm:text-7xl font-serif text-white block tracking-tight">95%</span>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400 mt-2 block">
                  Subconscious Decision Space
                </span>
              </div>
              <div className="md:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Traditional research surveys focus groups A/B tests only reaches the 5% that's conscious. The other 95% has always been a blind spot.
                </p>
                <p>
                  By measuring real brain responses to ads, packaging and creative using EEG eye-tracking and behavioural analytics neuromarketing reveals what consumers actually feel not what they say they feel. Not after the campaign. At the exact millisecond.
                </p>
              </div>
            </div>
          </div>

          {/* Research Tools We Use */}
          <div className="mb-20">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-2">
                METHODOLOGY
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#132033] tracking-tight">
                Research Tools We Use
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.code}
                  className="rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-serif font-bold text-[#132033]">{tool.code}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                        Verified
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-[#132033] mb-1">{tool.name}</h3>
                    <p className="text-xs text-[#64748b] mb-4 font-mono">{tool.tagline}</p>
                    <p className="text-sm text-[#51657f] leading-relaxed font-normal">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 border border-black/[0.04] p-6 text-center text-sm text-[#51657f] leading-relaxed">
              For complex research questions requiring additional methodologies, we design a customised workflow in collaboration with the client and relevant research partners. Methodology is always matched to the question not the other way around.
            </div>
          </div>

          {/* Key Principles Applied */}
          <div className="mb-24">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-2">
                FOUNDATIONAL DYNAMICS
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#132033] tracking-tight">
                Key Principles We Apply
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 shadow-[0_4px_20px_rgb(0,0,0,0.02)]"
                >
                  <h3 className="font-serif text-lg text-[#132033] mb-1">{p.title}</h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    {p.hook}
                  </p>
                  <p className="text-sm text-[#51657f] leading-relaxed font-normal">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="rounded-3xl bg-[#132033] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-lg">
            <h3 className="font-serif text-2xl sm:text-4xl leading-tight mb-4 text-slate-100">
              Ready to understand your customer's brain?
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 font-normal leading-relaxed">
              Most brands that find us wish they had asked sooner. 30 minutes reframes everything that comes after it.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-white text-[#132033] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
              >
                Let's Find Out →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </SiteShell>
  );
}