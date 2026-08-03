import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyDetailPage(
  props: { params: Promise<{ slug: string }> },
): Promise<React.JSX.Element> {
  const { slug } = await props.params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const otherStudies = caseStudies.filter((item) => item.slug !== study.slug);

  return (
    <SiteShell activeHref="/case-studies">
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

        <div className="rounded-[34px] border border-black/[0.04] bg-white/45 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-black/[0.04] pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#72839a]">
              <Link href="/case-studies" className="text-[#132033] transition hover:opacity-70">
                ← All Case Studies
              </Link>
              <span className="rounded-full border border-[#132033]/10 bg-white px-3 py-1">
                {study.tag}
              </span>
              <span>{study.tool} · {study.year}</span>
            </div>

            {study.logoUrl && (
              <div className="relative flex h-8 w-24 items-center justify-start sm:justify-end">
                <Image
                  src={study.logoUrl}
                  alt={`${study.brand} logo`}
                  fill
                  className="object-contain opacity-90 mix-blend-multiply dark:invert"
                  priority
                />
              </div>
            )}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7c8da5]">
                Published Research
              </p>
              <h1 className="mt-3 max-w-[15ch] text-4xl font-black leading-[0.96] tracking-tight text-[#132033] sm:text-5xl md:text-6xl">
                {study.headline}
              </h1>
              <p className="mt-5 max-w-[720px] text-base font-semibold leading-relaxed text-[#51657f] md:text-lg">
                {study.statLabel}
              </p>
            </div>

            <div className="rounded-[28px] border border-black/[0.04] bg-gradient-to-b from-[#132033]/95 to-[#162b44]/95 p-6 text-white shadow-[0_16px_40px_rgba(19,32,51,0.18)]">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">Signal Outcome</p>
              <p className="mt-3 text-5xl font-black leading-none tracking-tighter sm:text-6xl">
                {study.stat}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
            <div className="rounded-[30px] border border-black/[0.04] bg-white/85 p-6 shadow-[0_12px_34px_rgba(30,41,59,0.05)] backdrop-blur-xl sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7c8da5]">
                The Study
              </p>
              <p className="mt-5 text-base font-medium leading-relaxed text-[#2b3c54] md:text-lg">
                {study.body}
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-[30px] border border-black/[0.04] bg-gradient-to-b from-[#132033] to-[#162b44] p-6 text-white shadow-[0_16px_40px_rgba(19,32,51,0.18)] sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">
                  Myelin Sheets Insight
                </p>
                <blockquote className="mt-4 text-base font-semibold italic leading-relaxed text-white/95">
                  “{study.insight}”
                </blockquote>
              </div>

              <div className="rounded-[30px] border border-black/[0.04] bg-white/90 p-6 shadow-[0_12px_34px_rgba(30,41,59,0.05)] backdrop-blur-xl sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7c8da5]">
                  Research Details
                </p>
                <dl className="mt-5 grid gap-4">
                  <InfoRow label="Tool" value={study.tool} />
                  <InfoRow label="Year" value={study.year} />
                  <InfoRow label="Market" value={study.market} />
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center text-center rounded-[34px] border border-black/[0.04] bg-gradient-to-b from-[#132033] to-[#162b44] p-6 text-white shadow-[0_16px_40px_rgba(19,32,51,0.18)] sm:p-8">
            <h2 className="text-xl font-black tracking-tight sm:text-2xl max-w-2xl">
              Translate this research into your own category.
            </h2>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-[#132033] transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Apply This to My Brand →
            </Link>
          </div>
        </div>

        <section className="mt-10 rounded-[34px] border border-black/[0.04] bg-white/45 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7c8da5]">
            Explore More Research
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {otherStudies.map((item) => (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                className="group flex flex-col justify-between rounded-[28px] border border-black/[0.04] bg-white/85 p-5 shadow-[0_12px_34px_rgba(30,41,59,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#132033]/25"
              >
                <div className="flex items-center justify-between border-b border-black/[0.04] pb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#7c8da5]">
                    {item.tag}
                  </span>
                  {item.logoUrl ? (
                    <div className="relative h-6 w-16 opacity-60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100 dark:invert">
                      <Image
                        src={item.logoUrl}
                        alt={item.brand}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#132033]">
                      {item.brand}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-black tracking-tight text-[#132033] line-clamp-2 transition-colors group-hover:text-[#162b44]">
                    {item.headline}
                  </h4>
                  <p className="mt-2 text-xs font-semibold text-[#56708f]">
                    {item.tool} · {item.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </SiteShell>
  );
}

function InfoRow({ label, value }: { label: string; value: string }): React.JSX.Element {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#132033]/10 pb-4 last:border-b-0 last:pb-0">
      <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#7c8da5]">{label}</dt>
      <dd className="text-right text-sm font-semibold text-[#2b3c54]">{value}</dd>
    </div>
  );
}