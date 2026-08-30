"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/SiteShell";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteShell activeHref="/contact">
      <div className="relative min-h-screen text-[#132033]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-24">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-3">
              GET STARTED[cite: 1]
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-[#132033] mb-6">
              Book a Discovery Call[cite: 1]
            </h1>
            <p className="text-base sm:text-lg text-[#51657f] leading-relaxed">
              30 minutes. No commitment. We will tell you exactly where neuromarketing can move the needle for your brand[cite: 1].
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-black/[0.06] p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="text-4xl">✨</div>
                  <h3 className="font-serif text-2xl text-[#132033]">Request Received</h3>
                  <p className="text-sm text-[#51657f] max-w-md mx-auto leading-relaxed">
                    We will review your submission within 24 hours and contact you to schedule your discovery call[cite: 1].
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#132033] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full rounded-xl border border-black/[0.1] bg-slate-50 px-4 py-3 text-sm text-[#132033] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132033]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#132033] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Corp"
                      className="w-full rounded-xl border border-black/[0.1] bg-slate-50 px-4 py-3 text-sm text-[#132033] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132033]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#132033] mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@acme.com"
                      className="w-full rounded-xl border border-black/[0.1] bg-slate-50 px-4 py-3 text-sm text-[#132033] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132033]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#132033] mb-2">
                      Company Size
                    </label>
                    <select
                      className="w-full rounded-xl border border-black/[0.1] bg-slate-50 px-4 py-3 text-sm text-[#132033] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132033]"
                    >
                      <option value="1-10">1–10</option>
                      <option value="11-50">11–50</option>
                      <option value="51-200">51–200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#132033] mb-2">
                      Your Biggest Marketing Challenge
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe what your brand is facing..."
                      className="w-full rounded-xl border border-black/[0.1] bg-slate-50 px-4 py-3 text-sm text-[#132033] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#132033]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#132033] py-4 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#0f172a] transition-all active:scale-[0.99]"
                  >
                    Request Discovery Call →
                  </button>
                </form>
              )}
            </div>

            {/* Info & Next Steps Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl bg-slate-50 border border-black/[0.06] p-8">
                <h3 className="font-serif text-xl text-[#132033] mb-6">
                  What happens next
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="font-mono text-xs font-bold text-slate-400">01</span>
                    <p className="text-sm text-[#51657f]">We review your submission within 24 hours</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-xs font-bold text-slate-400">02</span>
                    <p className="text-sm text-[#51657f]">Schedule a call</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-xs font-bold text-slate-400">03</span>
                    <p className="text-sm text-[#51657f]">We map your challenge to the right methodology</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-xs font-bold text-slate-400">04</span>
                    <p className="text-sm text-[#51657f]">You receive a scoped proposal</p>
                  </div>
                </div>
              </div>

              {/* Note from us box */}
              <div className="rounded-3xl bg-[#132033] text-white p-8 shadow-md">
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
                  Note from us
                </p>
                <p className="italic text-sm text-slate-200 leading-relaxed">
                  "We only take projects where we are confident neuromarketing will genuinely move the needle. The discovery call is as much for us to qualify the fit as it is for you."
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </SiteShell>
  );
}