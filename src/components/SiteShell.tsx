"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FloatingLogos from "./FloatingLogos";

// Updated to exact specifications: Case Studies, Services, The Science, Industries, About
const navItems = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services",     href: "/services" },
  { label: "The Science",  href: "/science" },
  { label: "Industries",   href: "/industries" },
  { label: "About",        href: "/about" },
];

export function SiteShell({
  activeHref,
  children,
}: {
  activeHref?: string;
  children: React.ReactNode;
}): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#132033] antialiased selection:bg-[#132033]/10">
      <SiteBackdrop />

      {/* Persistent side-corridor floating logos */}
      <FloatingLogos />

      <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-5">
        <nav className="mx-auto w-[calc(100%-16px)] max-w-[1180px] sm:w-[calc(100%-32px)]">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-3 rounded-full border border-black/[0.06] bg-white/90 px-4 sm:px-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl">
            
            {/* Header Brand Logo */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="shrink-0 flex items-center transition-transform duration-150 active:scale-95"
            >
              <Image
                src="/logos/logo.png"
                alt="MyelinSheets"
                width={280}
                height={70}
                priority
                className="h-10 sm:h-14 md:h-16 w-auto max-w-[190px] sm:max-w-none object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
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

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/contact"
                className="hidden sm:inline-flex rounded-full bg-[#132033] px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white transition active:scale-95 hover:bg-[#0f172a]"
              >
                Book a Call
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.06] bg-white text-[#132033] shadow-sm transition active:scale-90 md:hidden"
              >
                <div className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4 flex-col justify-between">
                  <span
                    className={`h-0.5 w-full bg-current transition-transform duration-200 ${
                      isOpen ? "rotate-45 translate-y-[6px] sm:translate-y-[7px]" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-current transition-opacity duration-150 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-current transition-transform duration-200 ${
                      isOpen ? "-rotate-45 -translate-y-[6px] sm:-translate-y-[7px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`mt-2 flex flex-col gap-1 rounded-2xl border border-black/[0.06] bg-white/95 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-300 md:hidden origin-top overflow-y-auto ${
              isOpen
                ? "opacity-100 scale-100 max-h-[80vh]"
                : "opacity-0 scale-95 max-h-0 pointer-events-none overflow-hidden"
            }`}
          >
            <MobileNavLink href="/" active={activeHref === "/"} onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                active={activeHref === item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
            <div className="my-1.5 border-t border-black/[0.06]" />
            <MobileNavLink
              href="/contact"
              active={activeHref === "/contact"}
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </MobileNavLink>
          </div>
        </nav>
      </header>

      {/* Main Content Viewport */}
      <main className="relative z-10 pt-24 sm:pt-36 px-4 sm:px-0">{children}</main>

      {/* Global Footer */}
      <footer className="relative mt-20 overflow-hidden bg-[#e8e8e8]">
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
            <div>
              <div className="flex items-center gap-4">
                <img
                  src="/logos/logo.png"
                  alt="MyelinSheets"
                  className="h-72 w-72 object-contain"
                />
              </div>

              <p className="mt-8 max-w-sm text-[15px] leading-7 text-[#5f6368]">
                Published research, translated into strategic decisions your brand can actually use.
              </p>
            </div>

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

            <div>
              <h4 className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#5d5d5d]">
                Contact
              </h4>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Image src="/assets/email.svg" alt="Email" width={24} height={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[#4a4a4a]">Email</p>
                    <p className="text-sm text-[#666]">info@myelinsheets.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Image src="/assets/globe.svg" alt="Globe" width={24} height={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[#4a4a4a]">Website</p>
                    <p className="text-sm text-[#666]">www.myelinsheets.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12 h-px w-full bg-black/10" />

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm font-semibold text-[#666]">
              © 2026 MyelinSheets. All rights reserved.
            </p>
            <p className="text-sm text-[#777]">Research → Strategy → Growth</p>
          </div>
        </div>

        <div className="relative z-10 px-4 pb-4">
          <p
            className="select-none text-center font-black leading-[0.82] tracking-[-0.01em] text-[#707070]/30"
            style={{ fontSize: "clamp(3rem, 12vw, 12rem)" }}
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

function MobileNavLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`w-full block rounded-xl px-4 py-3 text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-150 active:scale-[0.99] ${
        active ? "bg-[#132033] text-white shadow-sm" : "bg-transparent text-[#51657f] active:bg-black/[0.03]"
      }`}
    >
      {children}
    </Link>
  );
}