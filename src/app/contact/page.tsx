import React from "react";
import { SiteShell } from "@/components/SiteShell";

const companySizes = ["1–10", "11–50", "51–200", "200+"] as const;
const nextSteps = [
  "01 · We review your submission within 24 hours",
  "02 · Schedule a call",
  "03 · We map your challenge to the right methodology",
  "04 · You receive a scoped proposal",
] as const;

export default function ContactPage(): React.JSX.Element {
  return (
    <SiteShell activeHref="/contact">
      <section className="relative mx-auto w-full max-w-[1180px] overflow-hidden px-6 pb-16 pt-20 sm:px-8 md:px-10 md:pt-24 lg:px-12">
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
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#56708f]">
            Get Started
          </p>
          <h1 className="mt-4 text-[42px] font-black leading-[0.96] tracking-[-0.04em] text-[#132033] sm:text-[58px] md:text-[74px]">
            Book a Discovery Call
          </h1>
          <p className="mt-6 max-w-[760px] text-[17px] font-medium leading-[1.7] text-[#4b607c] md:text-[19px]">
            30 minutes. No commitment. We will tell you exactly where neuromarketing can move the
            needle for your brand.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <form className="rounded-[34px] border border-black/[0.04] bg-white/45 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-[18px] border border-[#132033]/10 bg-white px-4 py-3 text-[15px] font-medium text-[#132033] outline-none transition focus:border-[#132033]/25"
                />
              </Field>
              <Field label="Company">
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-[18px] border border-[#132033]/10 bg-white px-4 py-3 text-[15px] font-medium text-[#132033] outline-none transition focus:border-[#132033]/25"
                />
              </Field>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Business Email">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-[18px] border border-[#132033]/10 bg-white px-4 py-3 text-[15px] font-medium text-[#132033] outline-none transition focus:border-[#132033]/25"
                />
              </Field>
              <Field label="Company Size">
                <select className="w-full rounded-[18px] border border-[#132033]/10 bg-white px-4 py-3 text-[15px] font-medium text-[#132033] outline-none transition focus:border-[#132033]/25">
                  {companySizes.map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Your Biggest Marketing Challenge">
                <textarea
                  rows={6}
                  placeholder="Tell us what you want to understand, improve, or test."
                  className="w-full rounded-[22px] border border-[#132033]/10 bg-white px-4 py-4 text-[15px] font-medium text-[#132033] outline-none transition focus:border-[#132033]/25"
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-7 rounded-full bg-[#132033] px-6 py-3 text-[12px] font-extrabold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#162b44]"
            >
              Request Discovery Call →
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-[34px] border border-black/[0.04] bg-white/80 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-8">
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#7c8da5]">
                What Happens Next
              </p>
              <div className="mt-6 grid gap-4">
                {nextSteps.map((step) => (
                  <div
                    key={step}
                    className="rounded-[22px] border border-[#132033]/5 bg-white/85 px-4 py-4 text-[15px] font-semibold leading-[1.6] text-[#2b3c54] shadow-[0_4px_12px_rgba(30,41,59,0.02)] backdrop-blur-xl"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-black/[0.04] bg-gradient-to-b from-[#132033]/95 to-[#162b44]/95 p-6 text-white shadow-[0_16px_40px_rgba(19,32,51,0.18)] sm:p-8">
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/60">
                Note From Us
              </p>
              <blockquote className="mt-4 text-[17px] font-semibold italic leading-[1.75] text-white/90">
                “We only take projects where we are confident neuromarketing will genuinely move
                the needle. The discovery call is as much for us to qualify the fit as it is for
                you.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-black uppercase tracking-[0.16em] text-[#72839a]">
        {label}
      </span>
      {children}
    </label>
  );
}