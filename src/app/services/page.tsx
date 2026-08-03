import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { principles, researchTools, services, serviceSteps } from "@/data/siteContent";

export default function ServicesPage(): React.JSX.Element {
  return (
    <SiteShell activeHref="/services">
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
            What We Offer
          </p>
          <h1 className="mt-4 text-[42px] font-black leading-[0.96] tracking-[-0.04em] text-[#132033] sm:text-[58px] md:text-[74px]">
            Services
          </h1>
          <p className="mt-6 max-w-[760px] text-[17px] font-medium leading-[1.7] text-[#4b607c] md:text-[19px]">
            One mission: make your marketing work with the brain, not against it. Every
            engagement is custom-scoped to the question you actually need answered.
          </p>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[34px] border border-black/[0.04] bg-white/45 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 sm:p-8"
            >
              <div>
                <div className="inline-flex items-center justify-center rounded-[14px] border border-[#132033]/10 bg-white px-3 py-1.5 text-xs font-bold text-[#344861]">
                  <span className="mr-2">{service.emoji}</span>
                  <span className="uppercase tracking-wider text-[10px] font-black">{service.metric}</span>
                </div>
                <h2 className="mt-6 text-2xl font-black tracking-tight text-[#132033]">
                  {service.title}
                </h2>
                <p className="mt-3 text-[15px] font-semibold leading-snug text-[#344861]">
                  {service.shortDescription}
                </p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#56708f] opacity-100 transition-opacity duration-300 lg:group-hover:opacity-0">
                  {service.description}
                </p>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-full flex-col justify-end bg-gradient-to-b from-[#132033]/95 to-[#162b44]/95 p-6 text-white transition-transform duration-300 ease-out group-hover:translate-y-0 sm:p-8 lg:pointer-events-auto">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  What It Does
                </p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-white/90">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-[34px] border border-black/[0.04] bg-white/80 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-8">
            <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#7c8da5]">
              How We Work
            </p>
            <div className="mt-6 space-y-3">
              {serviceSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-[22px] border border-[#132033]/5 bg-white/85 px-4 py-4 text-[15px] font-semibold leading-[1.6] text-[#2b3c54] shadow-[0_4px_12px_rgba(30,41,59,0.02)] backdrop-blur-xl"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#132033] text-[11px] font-black text-white">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[34px] border border-black/[0.04] bg-gradient-to-b from-[#132033]/95 to-[#162b44]/95 p-6 text-white shadow-[0_16px_40px_rgba(19,32,51,0.18)] sm:p-8">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/60">
                Custom-Scoped
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-white/90">
                We do not have package pricing. Every engagement is scoped to your specific
                research question, audience, and timeline. The discovery call helps us understand
                your challenge before we design a proposal.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-[#132033] transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Book a Discovery Call
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-[34px] border border-black/[0.04] bg-white/45 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-8 md:p-12">
          <div className="max-w-2xl">
            <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#7c8da5]">
              Research Tools We Use
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#132033] sm:text-4xl">
              Three tools. Matched to the question, not the trend.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {researchTools.map((tool) => (
              <article
                key={tool.name}
                className="group relative overflow-hidden rounded-[28px] border border-black/[0.04] bg-white/85 p-6 shadow-[0_12px_34px_rgba(30,41,59,0.05)] backdrop-blur-xl"
              >
                <p className="text-[10px] font-black uppercase tracking-wider text-[#7c8da5]">
                  {tool.fullName}
                </p>
                <h3 className="mt-2 text-xl font-black tracking-tight text-[#132033]">
                  {tool.name}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-[#344861]">
                  {tool.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-black/[0.04] bg-gradient-to-b from-[#132033]/95 to-[#162b44]/95 p-6 text-white shadow-[0_16px_40px_rgba(19,32,51,0.18)] sm:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/60">
              Custom Research Ecosystems
            </p>
            <p className="mt-3 text-base font-medium leading-relaxed text-white/90">
              For complex research questions requiring additional methodologies, we design a
              customized workflow in collaboration with the client and relevant research partners.
              Methodology is always matched to the question, not the other way around.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="max-w-2xl">
            <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#7c8da5]">
              Key Principles We Apply
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#132033] sm:text-4xl">
              Brain rules we design around every time.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[28px] border border-black/[0.04] bg-white/85 p-6 shadow-[0_12px_34px_rgba(30,41,59,0.05)] backdrop-blur-xl"
              >
                <h3 className="text-xl font-black tracking-tight text-[#132033]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-[#344861]">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </SiteShell>
  );
}