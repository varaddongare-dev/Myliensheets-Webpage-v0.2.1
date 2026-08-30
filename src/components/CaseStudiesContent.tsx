"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CaseStudy {
  id: number;
  brand: string;
  slug: string;
  category: "Global" | "India";
  tag: string;
  stat: string;
  headline: string;
}

const caseStudies: CaseStudy[] = [
  { id: 1, brand: "Coca-Cola", slug: "coca-cola", category: "Global", tag: "Global", stat: "75%", headline: "Brand > Taste. Every Time." },
  { id: 2, brand: "Pepsi", slug: "pepsi", category: "Global", tag: "Global", stat: "50/50", headline: "Won the Taste Test. Lost the Market." },
  { id: 3, brand: "Lay's", slug: "lays", category: "Global", tag: "Global", stat: "195M+", headline: "A Bag Redesign. 195M Minds Changed." },
  { id: 4, brand: "Google", slug: "google", category: "Global", tag: "Global", stat: "$200M", headline: "41 Shades of Blue. $200M." },
  { id: 5, brand: "Campbell's", slug: "campbells", category: "Global", tag: "Global", stat: "1,500", headline: "1,500 Minds to Perfect a Label." },
  { id: 6, brand: "Hyundai", slug: "hyundai", category: "Global", tag: "Global", stat: "EEG-Led", headline: "Redesigned by the Brain." },
  { id: 7, brand: "Mercedes-Benz", slug: "mercedes-benz", category: "Global", tag: "Global", stat: "+12%", headline: "The Brain Sees a Face in Every Car." },
  { id: 8, brand: "PayPal", slug: "paypal", category: "Global", tag: "Global", stat: "+20%", headline: "Security vs Speed. Brain Chose Speed." },
  { id: 9, brand: "Amul", slug: "amul", category: "India", tag: "India", stat: "85%", headline: "50 Years of Neuromarketing. Accidentally." },
  { id: 10, brand: "Fevicol", slug: "fevicol", category: "India", tag: "India", stat: "60yr", headline: "No Celebrities. Pure Neuroscience." },
  { id: 11, brand: "Tata Tea", slug: "tata-tea", category: "India", tag: "India", stat: "Movement", headline: "When Tea Woke a Nation." },
  { id: 12, brand: "Cadbury India", slug: "cadbury-india", category: "India", tag: "India", stat: "#1", headline: "The Science of Making India Feel." },
  { id: 13, brand: "Tanishq", slug: "tanishq", category: "India", tag: "India", stat: "Top 3", headline: "Jewellery That Speaks the Indian Brain." },
];

export default function CaseStudiesContent() {
  const [filter, setFilter] = useState<"All Brands" | "Global" | "India">("All Brands");

  const filteredStudies = caseStudies.filter((item) => {
    if (filter === "Global") return item.category === "Global";
    if (filter === "India") return item.category === "India";
    return true;
  });

  return (
    <div className="relative min-h-screen text-[#132033]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#64748b] block mb-3">
            PUBLISHED RESEARCH
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-[#132033] mb-6">
            Case Studies
          </h1>
          <p className="text-base sm:text-lg text-[#51657f] leading-relaxed">
            Peer-reviewed, published neuromarketing research from global and Indian brands. These are not our claims — they are the scientific record. The same principles power everything we do at Myelin Sheets.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center items-center gap-2 mb-14">
          {(["All Brands", "Global", "India"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                filter === tab
                  ? "bg-[#132033] text-white shadow-sm"
                  : "bg-slate-100 text-[#51657f] hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Case Studies Grid with Dynamic Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.slug}`}
              className="group rounded-3xl bg-white border border-black/[0.06] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-600">
                    {study.tag}
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#132033]">
                    {study.stat}
                  </span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#64748b] mb-1">
                  {study.brand}
                </h3>
                <h4 className="font-serif text-xl text-[#132033] leading-snug mb-6">
                  {study.headline}
                </h4>
              </div>

              <div className="pt-4 border-t border-black/[0.04] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#64748b] group-hover:text-[#132033] transition-colors">
                <span>View case study</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="rounded-3xl bg-[#132033] text-white p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg">
          <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-slate-100">
            Want to see these metrics on your next campaign?
          </h3>
          <p className="text-slate-400 text-sm mb-8 font-normal">
            Book a 30-minute discovery call to explore what neuroscience can achieve for your brand.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full px-8 py-3.5 bg-white text-[#132033] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>

      </div>
    </div>
  );
}