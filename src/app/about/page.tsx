"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";

const founders = [
  {
    name: "Archee Gupte",
    role: "Founder & Head of Strategy",
    image: "/assets/archee.png",
    bio: "Translating behavioural insights into high-impact campaigns and structural brand growth across markets.",
    expertise: ["Brand Architecture", "Consumer Biases", "Campaign Engineering"],
  },
  {
    name: "Hrutuja Dongare",
    role: "Co-Founder & Neuroscientist",
    image: "/assets/hd.png",
    bio: "Specializing in cognitive neuroscience and EEG methodologies, bridging clinical neural research with commercial brand architecture.",
    expertise: ["EEG Analysis", "Cognitive Priming", "Sensory Processing"],
  },
];

const values = [
  {
    title: "Evidence First",
    body: "Every recommendation we make is grounded in neural evidence — not intuition, opinion, or creative preference. Data over gut, always.",
  },
  {
    title: "Radical Transparency",
    body: "We show you exactly what the data says — including findings that challenge your existing assumptions. Uncomfortable truths included.",
  },
  {
    title: "India Fluency",
    body: "We understand the Indian consumer's brain — culturally, linguistically, and neurologically. Local insight, not imported frameworks.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell activeHref="/about">
      <div className="relative min-h-screen text-[#132033]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-12 pb-24">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-3">
              OUR STORY
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-[#132033] mb-6">
              About MyelinSheets
            </h1>
            <p className="text-base sm:text-lg text-[#51657f] leading-relaxed">
              We are not a creative agency. We are not a research firm. We are the bridge — where neuroscience meets brand strategy.
            </p>
          </div>

          {/* Name Origin Box */}
          <div className="rounded-3xl bg-slate-50 border border-black/[0.06] p-8 sm:p-12 mb-16 shadow-sm">
            <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#64748b] block mb-3">
              WHY THE NAME?
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#132033] mb-4">
              Myelin is how the brain builds mastery.
            </h2>
            <p className="text-sm sm:text-base text-[#51657f] leading-relaxed mb-4">
              Myelin sheaths are the fatty coating around neural pathways in the brain. Every time a neural circuit fires repeatedly, myelin builds up around it — making that pathway faster, stronger, and more automatic. It is literally how habits, skills, and brand memories form in the brain.
            </p>
            <p className="text-sm sm:text-base text-[#132033] font-medium leading-relaxed">
              MyelinSheets is named for exactly this: we help brands build thick, strong neural pathways in their customers' minds. Not campaign spikes — permanent memory. Not awareness — identity. We do not just do marketing. We build myelin.
            </p>
          </div>

          {/* Manifesto */}
          <div className="border-l-2 border-[#132033] pl-6 sm:pl-8 space-y-4 my-16 max-w-3xl">
            <p className="font-bold text-[#132033] text-base sm:text-lg leading-snug">
              Most marketing fails because it tries to persuade the rational mind. The rational mind is not where decisions are made.
            </p>
            <p className="text-sm sm:text-base text-[#51657f] leading-relaxed">
              95% of every purchase decision happens in the subconscious — processed by emotional circuits the customer cannot access, report, or control.
            </p>
            <p className="text-sm sm:text-base text-[#51657f] leading-relaxed">
              We are the translators between what the brain does and what your brand says. We make marketing that works with the brain, not against it.
            </p>
          </div>

          {/* Values */}
          <div className="mb-24">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-2">
                CORE PRINCIPLES
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#132033] tracking-tight">
                What We Stand For
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((val) => (
                <div key={val.title} className="rounded-2xl bg-white border border-black/[0.06] p-7 shadow-sm">
                  <h3 className="font-serif text-lg text-[#132033] mb-2">{val.title}</h3>
                  <p className="text-sm text-[#51657f] leading-relaxed">{val.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founders Section (Integrated with Images) */}
          <div className="mb-24 pt-12 border-t border-black/[0.08]">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-2">
                LEADERSHIP
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#132033] tracking-tight">
                The Founders
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="rounded-3xl bg-white border border-black/[0.06] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between"
                >
                  <div>
                    {/* Founder Image */}
                    <div className="relative mb-6 h-60 w-full overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="font-serif text-2xl text-[#132033]">{founder.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#64748b] mt-1 mb-4">
                      {founder.role}
                    </p>
                    <p className="text-sm text-[#51657f] leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.05]">
                    {founder.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="rounded-3xl bg-[#132033] text-white p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg">
            <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-slate-100">
              Let's build something the brain won't forget.
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Start with a 30-minute discovery conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full px-8 py-3 bg-white text-[#132033] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>

        </div>
      </div>
    </SiteShell>
  );
}