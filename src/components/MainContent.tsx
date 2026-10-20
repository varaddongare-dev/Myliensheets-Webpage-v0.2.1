"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const brandLogos = [
  { src: "/logos/pepsi.png", link: "/case-studies/pepsi" },
  { src: "/logos/cocacola.png", link: "/case-studies/coca-cola" },
  { src: "/logos/lays.png", link: "/case-studies/lays" },
  { src: "/logos/google.png", link: "/case-studies/google" },
  { src: "/logos/campbell.png", link: "/case-studies/campbells" },
  { src: "/logos/hyundai.png", link: "/case-studies/hyundai" },
  { src: "/logos/mercedes.png", link: "/case-studies/mercedes-benz" },
  { src: "/logos/paypal.png", link: "/case-studies/paypal" },
  { src: "/logos/amul.png", link: "/case-studies/amul" },
  { src: "/logos/fevicol.png", link: "/case-studies/fevicol" },
  { src: "/logos/cadbury.png", link: "/case-studies/cadbury" },
  { src: "/logos/tanishq.png", link: "/case-studies/tanishq" }
];

function useNeuronAnimations() {
  useGSAP(() => {
    gsap.to(".neuron-left", {
      y: 46,
      x: 18,
      rotate: 182,
      duration: 14,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".neuron-right", {
      y: -42,
      x: -22,
      rotate: -2,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".neuron-center", {
      y: 34,
      scale: 1.035,
      duration: 16,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".neuron-backdrop", {
      opacity: 0.56,
      duration: 7,
      repeat: -1,
      yoyo: true,
      stagger: 1.2,
      ease: "sine.inOut",
    });
  }, []);
}

const stats = [
  { metric: "95%", text: "of buying decisions made subconsciously" },
  { metric: "$200M", text: "earned by Google from one colour change" },
  { metric: "9/10", text: "new products fail without emotional neural resonance" },
  { metric: "$3.8B", text: "global neuromarketing market by 2034" },
];

const services = [
  { num: "01", title: "Ad & Creative Testing", desc: "Know how it lands before you spend.", href: "/services" },
  { num: "02", title: "Packaging Neuroscience", desc: "What your pack says without words", href: "/services" },
  { num: "03", title: "Brand Perception Mapping", desc: "What they feel vs what you think they feel", href: "/services" },
  { num: "04", title: "Consumer Behaviour Research", desc: "The decision your data never saw", href: "/services" },
  { num: "05", title: "UX & Digital Neuromarketing", desc: "Every pixel is a conversation.", href: "/services" },
  { num: "06", title: "Campaign Strategy Consulting", desc: "Built around how the brain decides.", href: "/services" },
];

const misses = [
  "Surveys capture what people think they should say",
  "Focus groups are dominated by social pressure",
  "People cannot report subconscious responses",
  "Stated preference rarely equals actual behavior",
];

const reveals = [
  "Measures actual brain responses, not opinions",
  "Captures subconscious reactions millisecond by millisecond",
  "Predicts behavior from neural signals before thought forms",
  "Cannot be faked, biased, or socially performed",
];

export default function MainContent(): React.JSX.Element {
  useNeuronAnimations();

  return (
    <div className="relative z-10 w-full text-[#3a3a3a]">
      <NeuronBackdrops />

      <section className="relative z-10 mx-auto flex min-h-[700px] w-full max-w-[1180px] flex-col justify-start px-6 pb-8 pt-1 md:min-h-screen md:px-12 lg:px-16">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.92fr]">
          <div className="max-w-[620px]">
            <h1 className="text-[44px] font-black leading-[1.08] tracking-[-0.01em] text-[#333333] sm:text-[60px] md:text-[70px] lg:text-[73px]">
              95% of your customer&apos;s decision is already made.
            </h1>
            <p className="mt-5 max-w-[540px] text-[17px] font-semibold leading-[1.45] text-[#303841]/50">
              Neuromarketing tells you what made it and how to make it yours. We translate brain science into brand strategy.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-[#333333] px-6 py-3 text-[13px] font-extrabold tracking-[0.02em] text-white border border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_12px_30px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-black hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_18px_40px_rgba(0,0,0,0.28)] active:translate-y-0"
              >
                <span className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent opacity-100" />
                <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[140%]" />
                <span className="relative z-10 flex items-center gap-2">
                  Book a Discovery Call
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/case-studies"
                className="group relative overflow-hidden rounded-full border border-[#d7d7d7] bg-white px-6 py-3 text-[13px] font-extrabold tracking-[0.02em] text-[#444] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#bdbdbd] hover:shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_14px_32px_rgba(0,0,0,0.12)]"
              >
                <span className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#fafafa]" />
                <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-black/[0.04] to-transparent transition-all duration-700 group-hover:left-[140%]" />
                <span className="relative z-10 flex items-center gap-2">
                  See the Evidence
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            <p className="mt-4 text-[11px] font-bold text-[#666666]/60">
              30 minutes reframes everything that comes after it
            </p>
          </div>
          <div className="hidden h-[430px] lg:block" aria-hidden="true" />
        </div>

        <div className="relative z-30 mt-12 grid w-full gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.metric}
              className="group relative overflow-hidden flex flex-col items-center justify-center rounded-3xl border border-black/[0.04] bg-white/40 backdrop-blur-2xl px-5 py-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.08)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/30" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <strong className="relative z-10 text-[31px] md:text-[37px] font-black leading-none text-[#2d2d2d] tracking-tight">
                {stat.metric}
              </strong>
              <span className="relative z-10 mt-2 max-w-[160px] text-center text-[10.5px] font-semibold leading-normal text-[#62666b]">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[950px] text-center">
          <p className="text-[15px] font-black uppercase tracking-[0.08em] text-[#666666]">
            The Proof Is Already Out There
          </p>
          <h2 className="mt-2 text-[40px] font-black leading-[1.04] text-[#333333] sm:text-[48px] md:text-[56px]">
            Brands That Used It, Won
          </h2>
          <p className="mx-auto mt-3 max-w-[690px] text-[17px] font-semibold leading-[1.35] text-[#8b9097]">
            Published, peer-reviewed neuromarketing research. The same science powers everything we do at Myelinsheets.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {brandLogos.map((brand) => (
              <Link
                key={brand.src}
                href={brand.link}
                className="group relative overflow-hidden flex h-[94px] items-center justify-center rounded-2xl border border-black/[0.04] bg-white/40 px-7 shadow-[0_4px_24px_0_rgba(0,0,0,0.02)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.06)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60" />
                <Image 
                  src={brand.src} 
                  alt="Brand Logo Case Study Link" 
                  width={140}
                  height={64}
                  className="relative z-10 max-h-[64px] max-w-full object-contain transition-transform duration-500 group-hover:scale-105" 
                />
              </Link>
            ))}
          </div>

          <Link href="/case-studies" className="group relative overflow-hidden mt-9 inline-flex rounded-full bg-[#1d1d1f] px-6 py-3 text-[13px] font-extrabold tracking-[0.02em] text-white border border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-black hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_18px_32px_rgba(0,0,0,0.22)] active:translate-y-0">
            <span className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent opacity-100" />
            <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[140%]" />
            <span className="relative z-10 flex items-center gap-2">
              View all 13 case studies
              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <section id="services" className="relative z-10 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[38px] font-black leading-none text-[#333333] md:text-[50px]">
            What We Do
          </h2>
          <p className="mx-auto mt-5 max-w-[650px] text-[15px] font-bold leading-[1.35] text-[#666666]/60">
            One mission make your marketing work with the brain, not against it.
          </p>

          <div className="mt-12 space-y-4 text-left">
            {services.map((service) => (
              <Link
                key={service.num}
                href={service.href}
                className="group relative overflow-hidden grid min-h-[56px] grid-cols-[48px_1fr] items-center rounded-full border border-black/[0.03] bg-white/35 px-6 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] md:grid-cols-[64px_1.2fr_1fr]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/50" />
                <span className="font-mono text-[12px] font-bold tracking-wider text-[#9aa0a6] transition-colors duration-300 group-hover:text-[#1d1d1f]">
                  {service.num}
                </span>
                <strong className="text-[14.5px] font-bold tracking-tight text-[#1d1d1f] md:text-[15px]">
                  {service.title}
                </strong>
                <span className="hidden justify-self-end text-right text-[12.5px] font-medium tracking-tight text-[#62666b] md:flex md:items-center md:gap-3">
                  <span className="opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                    {service.desc}
                  </span>
                  <svg
                    className="h-3.5 w-3.5 opacity-40 transition-all duration-300 transform group-hover:translate-x-1 group-hover:opacity-100 text-[#1d1d1f]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="science" className="relative z-10 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center">
            <p className="font-sans text-[12px] font-black uppercase tracking-[0.1em] text-[#86868b]">
              Why Neuromarketing
            </p>
            <h2 className="mt-3 text-[38px] font-bold leading-[1.08] tracking-tight text-[#1d1d1f] md:text-[52px]">
              The Brain Decides.
              <br />
              Then It Finds a Reason.
            </h2>
          </div>

          <div className="relative z-30 mt-12 grid gap-8 sm:gap-6 md:grid-cols-2 lg:mt-16 xl:gap-8">
            <ComparisonPanel 
              title="Traditional Research — What It Misses:" 
              items={misses} 
              type="miss" 
            />
            <ComparisonPanel 
              title="Neuromarketing — What It Reveals:" 
              items={reveals} 
              type="reveal" 
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 text-center md:px-12 md:py-32">
        <div className="mx-auto max-w-[720px] flex flex-col items-center">
          <h2 className="text-[38px] font-bold leading-[1.1] tracking-tight text-[#1d1d1f] md:text-[54px]">
            Ready to understand your customer&apos;s brain?
          </h2>
          <p className="mt-5 max-w-[480px] text-[16px] font-semibold leading-[1.4] text-[#62666b]/70 md:text-[17px]">
            Most brands that find us wish they&apos;d asked sooner.
          </p>
          <Link href="/contact" className="group relative overflow-hidden mt-10 rounded-full bg-[#1d1d1f] px-8 py-4 text-[14px] font-extrabold tracking-[0.02em] text-white border border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-black hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_18px_40px_rgba(0,0,0,0.26)] active:translate-y-0">
            <span className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent opacity-100" />
            <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[140%]" />
            <span className="relative z-10 flex items-center gap-2.5">
              Let&apos;s Find Out
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

function NeuronBackdrops(): React.JSX.Element {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="neuron-backdrop neuron-left absolute -left-[24vw] top-[23rem] w-[760px] rotate-180 opacity-45 md:-left-[14vw] md:w-[980px] lg:w-[1120px]">
        <img src="/assets/neuron.png" alt="" width="760" className="h-auto w-full object-contain" />
      </div>
      
      <div className="neuron-backdrop neuron-right absolute -right-[24vw] top-[150rem] w-[760px] opacity-45 md:-right-[14vw] md:w-[980px] lg:w-[1120px]">
        <img src="/assets/neuron.png" alt="" width="760" className="h-auto w-full object-contain" />
      </div>
    </div>
  );
}

function ComparisonPanel({
  title,
  items,
  type,
}: {
  title: string;
  items: string[];
  type: "miss" | "reveal";
}): React.JSX.Element {
  return (
    <div className="rounded-[8px] border-2 border-[#5f666d] bg-white/80 px-7 py-7 shadow-[0_10px_22px_rgba(16,24,40,0.04)] backdrop-blur-sm">
      <h3 className="text-[21px] font-black leading-tight text-[#474747]">{title}</h3>
      <ul className="mt-9 space-y-7">
        {items.map((item) => (
          <li key={item} className="grid grid-cols-[28px_1fr] gap-5">
            <span
              className={`text-[27px] font-black leading-none ${
                type === "miss" ? "text-[#ff3b35]" : "text-[#45cf4b]"
              }`}
            >
              {type === "miss" ? "×" : "✓"}
            </span>
            <span className="text-[18px] font-extrabold leading-[1.16] text-[#62666b]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}