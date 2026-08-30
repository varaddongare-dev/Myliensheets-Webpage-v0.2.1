import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { notFound } from "next/navigation";

interface CaseDetail {
  brand: string;
  tag: string;
  stat: string;
  headline: string;
  tool: string;
  year: string;
  market: string;
  quote: string;
  paragraphs: string[];
}

const caseStudiesData: Record<string, CaseDetail> = {
  "coca-cola": {
    brand: "Coca-Cola",
    tag: "Global",
    stat: "75%",
    headline: "Brand > Taste. Every Time.",
    tool: "fMRI",
    year: "2004",
    market: "Global Beverages",
    quote: "When the brain knows what it is drinking, cultural memory overrides sensory input entirely.",
    paragraphs: [
      "Functional MRI scans reveal that when consumers know they are drinking Coca-Cola, the brain's ventromedial prefrontal cortex lights up with reward and cultural memory activity far beyond blind taste tests.",
      "Even when participants preferred the physical taste of competitor formulas in unlabelled trials, their neural architecture fundamentally shifted the moment branding was introduced. The brand equity stored in the brain acts as a real neurological filter that changes subjective taste perception."
    ]
  },
  "pepsi": {
    brand: "Pepsi",
    tag: "Global",
    stat: "50/50",
    headline: "Won the Taste Test. Lost the Market.",
    tool: "Blind Taste + Brain Imaging",
    year: "2004",
    market: "Global Beverages",
    quote: "Sensory preference in a blind test means nothing against decades of established brand narrative.",
    paragraphs: [
      "The classic 'Pepsi Paradox' demonstrates that winning a sensory preference test does not dictate market victory when powerful brand equity circuits override physical taste profiles.",
      "While physical sweet receptors trigger short-term approval, deep-seated emotional associations managed by Coca-Cola's neural footprint dominate long-term consumer loyalty and purchasing decisions."
    ]
  },
  "lays": {
    brand: "Lay's",
    tag: "Global",
    stat: "195M+",
    headline: "A Bag Redesign. 195M Minds Changed.",
    tool: "EEG + Packaging Testing",
    year: "2009",
    market: "Global Snacks",
    quote: "Your packaging is having a subconscious conversation with every customer's brain. What is it actually saying?",
    paragraphs: [
      "Frito-Lay noticed women were not buying despite snacking more than men overall. Neuromarketing found why: shiny chip bags activated the cingulate cortex, the brain's guilt processing center, specifically in female consumers.",
      "Traditional surveys said 'I try to eat healthy.' Brains said this bag makes me feel guilty. The redesign to matte beige with healthier ingredient imagery eliminated the guilt response entirely. Result: 195M+ positive impressions and record-breaking sales in 6 months."
    ]
  },
  "google": {
    brand: "Google",
    tag: "Global",
    stat: "$200M",
    headline: "41 Shades of Blue. $200M.",
    tool: "Behavioral A/B Testing",
    year: "2009",
    market: "Global Digital",
    quote: "Every pixel speaks to the subconscious. A shade you cannot consciously distinguish can move $200 million.",
    paragraphs: [
      "Marissa Mayer tested 41 shades of blue for Google's ad links, each shown to 2.5% of visitors for two weeks while clicks were tracked.",
      "The winning shade generated $200M in additional annual revenue. The brain cannot consciously distinguish these micro-variations, yet it responds differently to each. This is neuromarketing's core insight: the gap between what people notice and what their brains respond to is where all the value lives."
    ]
  },
  "campbells": {
    brand: "Campbell's",
    tag: "Global",
    stat: "1,500",
    headline: "1,500 Minds to Perfect a Label.",
    tool: "Eye-Tracking + Facial Coding + Pupilometry",
    year: "2010",
    market: "North America",
    quote: "What your most loyal customers have stared at for 30 years may still be working against you at a neural level.",
    paragraphs: [
      "Campbell's brought in three neuromarketing firms simultaneously for a two-year, 1,500-subject study. Using micro facial-expression analysis, in-aisle eye tracking, and pupilometry, they found the iconic Campbell's logo at the top was cognitively distracting rather than reassuring.",
      "Steam cues triggered nurturing emotional memories. The logo moved lower, steam was added, and the bowl was restyled. Result: measurable sales lift on an unchanged product."
    ]
  },
  "hyundai": {
    brand: "Hyundai",
    tag: "Global",
    stat: "EEG-Led",
    headline: "Redesigned by the Brain.",
    tool: "EEG",
    year: "2011",
    market: "Global Automotive",
    quote: "Continuous neural validation ensures structural design aligns with subconscious aesthetic preference.",
    paragraphs: [
      "Continuous EEG measurement of consumer attention and emotional valence during vehicle concept evaluations shaped the structural form of the final build.",
      "By isolating electrical signatures associated with hesitation versus approach motivation, design teams optimized body lines and frontal geometry long before physical manufacturing began."
    ]
  },
  "mercedes-benz": {
    brand: "Mercedes-Benz",
    tag: "Global",
    stat: "+12%",
    headline: "The Brain Sees a Face in Every Car.",
    tool: "Face-Recognition Design Research",
    year: "2012",
    market: "Global Automotive",
    quote: "Your product has a personality in your customer's brain before they read a single word of your copy. Design it intentionally.",
    paragraphs: [
      "Daimler's research with the University of Ulm found that the brain's social-recognition centers automatically interpret car fronts as faces, headlights as eyes and the grille as a mouth.",
      "Cars designed with confident facial expressions trigger stronger activation in reward and social-status circuits. A campaign built around this neural insight contributed to a 12% Q1 sales increase. The brain makes a social, emotional judgment of a car before it reads a single spec."
    ]
  },
  "paypal": {
    brand: "PayPal",
    tag: "Global",
    stat: "+20%",
    headline: "Security vs Speed. Brain Chose Speed.",
    tool: "EEG Messaging Study",
    year: "2016",
    market: "Global FinTech",
    quote: "Perceived friction triggers more neural anxiety than abstract security messaging mitigates.",
    paragraphs: [
      "Neuromarketing metrics proved that perceived friction caused far more neural anxiety than perceived security risks during online checkout flows.",
      "Optimizing messaging around speed and instant execution reduced cognitive load, leading to a dramatic increase in successful conversion rates."
    ]
  },
  "amul": {
    brand: "Amul",
    tag: "India",
    stat: "85%",
    headline: "50 Years of Neuromarketing. Accidentally.",
    tool: "Consumer Research Study",
    year: "2024",
    market: "India",
    quote: "Consistency in the right emotional triggers, compounded for decades, creates a brand that lives in the brain, not just the market.",
    paragraphs: [
      "A 2024 study in the Indian Journal of Consumer Research surveyed more than 200 Amul loyalists and found over 85% showed powerful emotional neural connections extending into national identity, family memory, and intergenerational trust, far beyond dairy.",
      "The Amul Girl mascot, running for 50+ years with topical wit and humor, is a neuromarketing masterpiece: humor maximizes reward-system activation and brand recall. No celebrities. No expensive campaigns. Eighty-five percent butter market share."
    ]
  },
  "fevicol": {
    brand: "Fevicol",
    tag: "India",
    stat: "60yr",
    headline: "No Celebrities. Pure Neuroscience.",
    tool: "Advertising Recall Analysis",
    year: "1960s-Present",
    market: "India Consumer Goods",
    quote: "Shared cultural metaphors cement long-term associative pathways far better than rented star power.",
    paragraphs: [
      "Leaning heavily into shared cultural metaphors and situational humor rather than star power creates deep, enduring associative memory networks.",
      "Decades of consistent comedic framing have embedded the brand name directly into linguistic and functional routines across Indian households."
    ]
  },
  "tata-tea": {
    brand: "Tata Tea",
    tag: "India",
    stat: "Movement",
    headline: "When Tea Woke a Nation.",
    tool: "Social Identity Campaign Analysis",
    year: "2007",
    market: "India Beverages",
    quote: "Activating higher-order identity circuits shifts consumer loyalty from product utility to social movement.",
    paragraphs: [
      "Shifting messaging from physical product benefits to social awakening tapped into higher-order identity circuits within the Indian consumer's brain.",
      "By reframing an everyday beverage as an active choice of social consciousness, the brand achieved unmatched cultural resonance and organic discussion."
    ]
  },
  "cadbury-india": {
    brand: "Cadbury India",
    tag: "India",
    stat: "#1",
    headline: "The Science of Making India Feel.",
    tool: "Festive Campaign Study",
    year: "2024",
    market: "India Confectionery",
    quote: "Deep cultural anchoring guarantees instant emotional resonance across generations.",
    paragraphs: [
      "Anchoring product positioning to traditional celebrations and familial warmth guarantees immediate emotional resonance across diverse demographic segments.",
      "Neural tracking during festive ad playback shows synchronized reward pathway activation across family units, cementing the brand as an intrinsic part of celebration."
    ]
  },
  "tanishq": {
    brand: "Tanishq",
    tag: "India",
    stat: "Top 3",
    headline: "Jewellery That Speaks the Indian Brain.",
    tool: "Cultural Recall Research",
    year: "2023",
    market: "India Retail",
    quote: "Reframing retail around personal empowerment alters deep subconscious value assessments.",
    paragraphs: [
      "Reframing modern gold retail around personal empowerment instead of traditional duty completely transformed how urban Indian women process value.",
      "Implicit testing confirms that progressive narrative positioning drives higher emotional attachment and lower price sensitivity than conventional category messaging."
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudiesData[slug];

  if (!study) {
    notFound();
  }

  return (
    <SiteShell activeHref="/case-studies">
      <div className="relative min-h-screen text-[#132033]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-12 pb-24">
          
          <Link
            href="/case-studies"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#64748b] hover:text-[#132033] mb-8 transition-colors"
          >
            ← Back to Case Studies
          </Link>

          <div className="rounded-3xl bg-white border border-black/[0.06] p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-600">
                  {study.tag} Market Research
                </span>
                <span className="text-xs font-mono text-slate-500 bg-slate-50 border border-black/[0.04] px-3 py-1 rounded-full">
                  {study.tool} · {study.year}
                </span>
              </div>
              <span className="font-serif text-3xl font-bold text-[#132033]">
                {study.stat}
              </span>
            </div>

            <h2 className="text-xs font-bold uppercase tracking-widest text-[#64748b] mb-2">
              {study.brand} ({study.market})
            </h2>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#132033] leading-tight mb-8">
              {study.headline}
            </h1>

            {/* Featured Quote Callout */}
            <div className="rounded-2xl bg-slate-50 border-l-4 border-[#132033] p-6 mb-8 text-[#132033] font-serif text-lg italic leading-relaxed">
              "{study.quote}"
            </div>

            {/* Detailed Paragraphs */}
            <div className="space-y-6 text-sm sm:text-base text-[#51657f] leading-relaxed border-t border-black/[0.06] pt-8">
              {study.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-12 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748b] text-center sm:text-left">
                Translate this research into your own category.
              </span>
              <Link
                href="/contact"
                className="inline-flex rounded-full px-7 py-3 bg-[#132033] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0f172a] transition-all whitespace-nowrap"
              >
                Apply This to My Brand →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </SiteShell>
  );
}