"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { caseStudies, type CaseStudy, type CaseStudyRegion } from "@/data/caseStudies";

type FilterKey = "All Brands" | CaseStudyRegion;

const filters: FilterKey[] = ["All Brands", "Global", "India"];
const filterDescriptions: Record<FilterKey, string> = {
  "All Brands": "Browse the full scientific record across every featured brand.",
  Global: "See the global studies that shaped modern neuromarketing practice.",
  India: "Explore India-specific examples built on culture, memory, and identity.",
};

const statTones: Record<CaseStudyRegion, string> = {
  Global: "from-[#dbeafe] via-white to-[#eef2ff] text-[#163f7a]",
  India: "from-[#fef3c7] via-white to-[#ffedd5] text-[#8a4b06]",
};

function filterStudies(items: CaseStudy[], activeFilter: FilterKey): CaseStudy[] {
  if (activeFilter === "All Brands") {
    return items;
  }

  return items.filter((item) => item.tag === activeFilter);
}

export default function CaseStudiesContent(): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All Brands");

  const visibleStudies = useMemo(
    () => filterStudies(caseStudies, activeFilter),
    [activeFilter],
  );
  const globalCount = useMemo(
    () => caseStudies.filter((study) => study.tag === "Global").length,
    [],
  );
  const indiaCount = useMemo(
    () => caseStudies.filter((study) => study.tag === "India").length,
    [],
  );

  return (
    <div className="relative overflow-hidden bg-white text-[#132033]">
      <CaseStudiesBackdrop />

      <main className="relative z-10 mx-auto max-w-[1180px] px-6 pb-20 pt-10 md:px-10 lg:px-12">
        <section className="grid gap-10 pb-18 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-[760px]">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#56708f]">
              Published Research
            </p>
            <h1 className="mt-4 max-w-[10ch] text-[54px] font-black leading-[0.94] tracking-[-0.04em] text-[#132033] sm:text-[68px] lg:text-[86px]">
              Case Studies
            </h1>
            <p className="mt-6 max-w-[720px] text-[17px] font-medium leading-[1.65] text-[#4b607c] md:text-[19px]">
              Peer-reviewed, published neuromarketing research from global and Indian brands.
              These are not our claims, they are the scientific record. The same principles power
              everything we do at Myelin Sheets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SummaryChip label="All Brands" value={caseStudies.length.toString()} />
              <SummaryChip label="Global" value={globalCount.toString()} />
              <SummaryChip label="India" value={indiaCount.toString()} />
            </div>
          </div>

          <div className="rounded-[32px] border border-black/[0.04] bg-white/45 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#7c8da5]">
              Page Snapshot
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <MetricCard value="13" label="published brand studies" />
              <MetricCard value="8" label="global research examples" />
              <MetricCard value="5" label="India-focused examples" />
              <MetricCard value="2" label="filter paths to browse" />
            </div>
            <p className="mt-4 text-[13px] font-medium leading-[1.5] text-[#5d718c]">
              Every card below follows the same proof format from the content doc: tag, stat,
              brand, headline, and a case-study cue.
            </p>
          </div>
        </section>

        <section className="rounded-[40px] border border-black/[0.04] bg-white/45 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 border-b border-[#132033]/8 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#7c8da5]">
                Research Grid
              </p>
              <h2 id="research-grid" className="mt-2 text-[30px] font-black tracking-[-0.03em] text-[#132033] md:text-[40px]">
                Evidence the market could already see
              </h2>
              <p className="mt-3 max-w-[620px] text-[16px] font-medium leading-[1.6] text-[#5d718c]">
                A cleaner way to scan the published research: filter by market, compare the key
                signal, and move through each study without the page feeling packed.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:max-w-[360px] md:justify-end">
              {filters.map((filter) => {
                const isActive = filter === activeFilter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-[12px] font-black uppercase tracking-[0.12em] transition ${
                      isActive
                        ? "border-[#132033] bg-[#132033] text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)]"
                        : "border-[#132033]/10 bg-white text-[#51657f] hover:border-[#132033]/20 hover:text-[#132033]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 rounded-[28px] border border-black/[0.04] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,251,255,0.96))] px-5 py-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#7c8da5]">
                Active View
              </p>
              <p className="mt-1 text-[16px] font-bold leading-[1.4] text-[#2b3c54]">
                {filterDescriptions[activeFilter]}
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#132033] px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white">
              <span>{visibleStudies.length}</span>
              <span>brand cards visible</span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {visibleStudies.map((study) => (
              <article
                key={study.id}
                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[32px] border border-black/[0.04] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,255,0.9))] p-7 shadow-[0_12px_34px_rgba(30,41,59,0.05)] transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_22px_52px_rgba(30,41,59,0.1)] md:p-8"
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.82),transparent_62%)] opacity-90 transition duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full border border-[#132033]/10 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#72839a]">
                      {study.tag}
                    </span>
                    <p className="mt-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#90a0b5]">
                      Study {study.id.toString().padStart(2, "0")}
                    </p>
                  </div>

                  <div
                    className={`rounded-[22px] bg-gradient-to-br px-4 py-3 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ${statTones[study.tag]}`}
                  >
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] opacity-65">
                      Signal
                    </p>
                    <p className="mt-1 text-[24px] font-black leading-none tracking-[-0.04em]">
                      {study.stat}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-12 flex-1">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8fa0b5]">
                    {study.tag} Brand
                  </p>
                  <h3 className="text-[28px] font-black leading-[1] tracking-[-0.04em] text-[#132033]">
                    {study.brand}
                  </h3>
                  <p className="mt-4 max-w-[30ch] text-[19px] font-semibold leading-[1.38] tracking-[-0.02em] text-[#344861]">
                    {study.headline}
                  </p>
                </div>

                <div className="relative z-10 mt-12 flex items-center justify-between border-t border-[#132033]/8 pt-6">
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a9bb1]">
                    Published evidence
                  </span>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    aria-label={`View case study for ${study.brand}`}
                    className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.12em] text-[#132033]"
                  >
                    View case study
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
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}): React.JSX.Element {
  return (
    <div className="rounded-[22px] border border-[#132033]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,247,255,0.96))] px-4 py-5">
      <p className="text-[28px] font-black leading-none tracking-[-0.04em] text-[#132033]">{value}</p>
      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#72839a]">{label}</p>
    </div>
  );
}

function SummaryChip({
  label,
  value,
}: {
  label: string;
  value: string;
}): React.JSX.Element {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#132033]/10 bg-white/90 px-4 py-2 shadow-[0_8px_22px_rgba(15,23,42,0.05)]">
      <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#7c8da5]">{label}</span>
      <span className="text-[15px] font-black tracking-[-0.03em] text-[#132033]">{value}</span>
    </div>
  );
}

function CaseStudiesBackdrop(): React.JSX.Element {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.34] mix-blend-multiply bg-[url('/assets/neural-web.svg')] bg-[length:1200px_auto] bg-center bg-repeat-y md:bg-[length:1500px_auto]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.14)_28%,rgba(255,255,255,0.38)_62%,rgba(255,255,255,0.8)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(circle_at_20%_18%,rgba(195,224,255,0.5),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(255,228,196,0.42),transparent_20%)]" />
      <div className="absolute left-[-14rem] top-[22rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(214,231,255,0.42),transparent_62%)] blur-3xl" />
      <div className="absolute right-[-10rem] top-[34rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,236,214,0.38),transparent_62%)] blur-3xl" />
      <div className="absolute left-1/2 top-[58rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(223,241,255,0.32),transparent_64%)] blur-3xl" />
    </div>
  );
}