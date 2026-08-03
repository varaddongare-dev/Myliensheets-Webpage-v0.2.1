"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

export function SiteShell({
  activeHref,
  children,
}: {
  activeHref?: string;
  children: React.ReactNode;
}): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-[#132033] antialiased selection:bg-[#132033]/10">
      <SiteBackdrop />

      <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-5">
        <nav className="mx-auto w-[calc(100%-16px)] max-w-[1180px] sm:w-[calc(100%-32px)]">
          <div className="flex h-12 sm:h-14 items-center justify-between gap-2 rounded-full border border-black/[0.04] bg-white/80 px-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:px-6 md:px-8">
            <Link href="/" className="shrink-0 flex items-center active:scale-95 transition-transform duration-150">
              <Image
                src="/logos/logo.png"
                alt="MyelinSheets"
                width={140}
                height={32}
                priority
                className="h-7 w-auto object-contain sm:h-9"
              />
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="/"
                className={`text-[11px] font-bold uppercase tracking-[0.14em] transition ${
                  activeHref === "/" ? "text-[#132033]" : "text-[#64748b] hover:text-[#132033]"
                }`}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] font-bold uppercase tracking-[0.14em] transition ${
                    activeHref === item.href ? "text-[#132033]" : "text-[#64748b] hover:text-[#132033]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden sm:inline-flex rounded-full bg-[#132033] px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white transition active:scale-95 hover:bg-[#0f172a]"
              >
                Book a Call
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.04] bg-white/90 text-[#132033] shadow-sm transition active:scale-90 md:hidden"
              >
                <div className="relative flex h-4 w-4 flex-col justify-between">
                  <span className={`h-0.5 w-full bg-current transition-transform duration-200 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                  <span className={`h-0.5 w-full bg-current transition-opacity duration-150 ${isOpen ? "opacity-0" : ""}`} />
                  <span className={`h-0.5 w-full bg-current transition-transform duration-200 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </div>
              </button>
            </div>
          </div>

          <div
            className={`mt-2 flex flex-col gap-1 rounded-2xl border border-black/[0.04] bg-white/90 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 md:hidden origin-top ${
              isOpen ? "opacity-100 scale-100 max-h-64" : "opacity-0 scale-95 max-h-0 pointer-events-none overflow-hidden"
            }`}
          >
            <MobileNavLink href="/" active={activeHref === "/"}>
              Home
            </MobileNavLink>
            {navItems.map((item) => (
              <MobileNavLink key={item.href} href={item.href} active={activeHref === item.href}>
                {item.label}
              </MobileNavLink>
            ))}
            <MobileNavLink href="/contact" active={activeHref === "/contact"}>
              Contact / Book Call
            </MobileNavLink>
          </div>
        </nav>
      </header>

      <main className="relative z-10 pt-24 sm:pt-36 px-4 sm:px-0">{children}</main>

      <footer className="relative mt-20 overflow-hidden bg-[#e8e8e8]">

  {/* ---------- Wave ---------- */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg
      viewBox="0 0 1440 180"
      preserveAspectRatio="none"
      className="relative block h-[80px] sm:h-[120px] w-full"
    >
      <path
        fill="#ffffff"
        d="M0,64L60,74.7C120,85,240,107,360,112C480,117,600,107,720,90.7C840,75,960,53,1080,58.7C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 pt-24 pb-14">

    <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">

      {/* ---------- Brand ---------- */}
      <div>

        <div className="flex items-center gap-4">

          <img
            src="/logos/logo.png"
            alt="MyelinSheets"
            className="h-60 w-60 object-contain"
          />

          

        </div>

        <p className="mt-8 max-w-sm text-[15px] leading-7 text-[#5f6368]">
          Published research, translated into strategic decisions your
          brand can actually use.
        </p>

      </div>

      {/* ---------- Navigation ---------- */}

      <div>

        <h4 className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#5d5d5d]">
          Navigation
        </h4>

        <ul className="space-y-3">

          <li>
            <Link
              href="/"
              className="font-bold text-[#666] transition hover:text-black"
            >
              Home
            </Link>
          </li>

          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-bold text-[#666] transition hover:text-black"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/contact"
              className="font-bold text-[#666] transition hover:text-black"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

      {/* ---------- Contact ---------- */}

      <div>

        <h4 className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#5d5d5d]">
          Contact
        </h4>

        <div className="space-y-5">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
  <Image
    src="/assets/email.svg"
    alt="Globe"
    width={24}
    height={24}
  />
</div>

            <div>

              <p className="font-bold text-[#4a4a4a]">
                Email
              </p>

              <p className="text-sm text-[#666]">
                info@myelinsheets.com
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
  <Image
    src="/assets/globe.svg"
    alt="Globe"
    width={24}
    height={24}
  />
</div>

            <div>

              <p className="font-bold text-[#4a4a4a]">
                Website
              </p>

              <p className="text-sm text-[#666]">
                www.myelinsheets.com
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* Divider */}

    <div className="my-12 h-px w-full bg-black/10" />

    {/* Bottom */}

    <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

      <p className="text-sm font-semibold text-[#666]">
        © 2026 MyelinSheets. All rights reserved.
      </p>

      <p className="text-sm text-[#777]">
        Research → Strategy → Growth
      </p>

    </div>

  </div>

  {/* ---------- Giant Typography ---------- */}

  <div className="relative z-10 px-4 pb-4">

    <p
      className="select-none text-center font-black leading-[0.82] tracking-[-0.01em] text-[#707070]/30"
      style={{
        fontSize: "clamp(3rem,12vw,12rem)",
      }}
    >
      MYELINSHEETS
    </p>

  </div>

</footer>
    </div>
  );
}

function SiteBackdrop(): React.JSX.Element {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.2] sm:opacity-[0.3] mix-blend-multiply bg-[url('/assets/neural-web.svg')] bg-[length:600px_auto] bg-center bg-repeat-y sm:bg-[length:1200px_auto] lg:bg-[length:1500px_auto]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.3)_26%,rgba(255,255,255,0.4)_60%,rgba(255,255,255,0.85)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[300px] sm:h-[420px] bg-[radial-gradient(circle_at_50%_0%,rgba(195,224,255,0.4),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(255,228,196,0.3),transparent_40%)] sm:bg-[radial-gradient(circle_at_16%_14%,rgba(195,224,255,0.5),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(255,228,196,0.42),transparent_20%)]" />
    </div>
  );
}

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-[4px] bg-[#353535] text-[13px] font-black leading-none text-white transition active:scale-95 sm:text-[12px]"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <Link
      href={href}
      className={`w-full block rounded-xl px-4 py-3 text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-150 active:scale-[0.99] ${
        active ? "bg-[#132033] text-white shadow-sm" : "bg-transparent text-[#51657f] active:bg-black/[0.03]"
      }`}
    >
      {children}
    </Link>
  );
}