"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Logo {
  image: string;
  link: string;
}

interface Slot {
  /** vw units — confined to left (0-14) or right (84-100) corridor */
  x: number;
  /** vh units */
  y: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ALL_LOGOS: Logo[] = [
  { image: "/logos/tanishq.png",  link: "/case-studies/tanishq"  },
  { image: "/logos/lays.png",     link: "/case-studies/lays"     },
  { image: "/logos/cocacola.png", link: "/case-studies/coca-cola"},
  { image: "/logos/campbell.png", link: "/case-studies/campbells" },
  { image: "/logos/hyundai.png",  link: "/case-studies/hyundai"  },
  { image: "/logos/mercedes.png", link: "/case-studies/mercedes-benz" },
  { image: "/logos/amul.png",     link: "/case-studies/amul"     },
  { image: "/logos/fevicol.png",  link: "/case-studies/fevicol"  },
  { image: "/logos/pepsi.png",    link: "/case-studies/pepsi"    },
  { image: "/logos/google.png",   link: "/case-studies/google"   },
  { image: "/logos/tatatea.png",   link: "/case-studies/tata-tea"   },

];

/**
 * All available spawn positions confined to narrow side corridors so they
 * never overlap centre-page text. Left corridor: x 0–13vw. Right: x 84–98vw.
 * More slots than logos so the pool system has room to pick a fresh position.
 */
const DESKTOP_SLOTS: Slot[] = [
  // ── left corridor ──
  { x: 1,  y: 8  },
  { x: 5,  y: 20 },
  { x: 0,  y: 33 },
  { x: 6,  y: 47 },
  { x: 2,  y: 60 },
  { x: 7,  y: 73 },
  { x: 1,  y: 86 },
  // ── right corridor ──
  { x: 87, y: 12 },
  { x: 91, y: 25 },
  { x: 85, y: 38 },
  { x: 93, y: 52 },
  { x: 87, y: 65 },
  { x: 92, y: 78 },
  { x: 86, y: 91 },
];

const MOBILE_SLOTS: Slot[] = [
  // left
  { x: 2,  y: 12 },
  { x: 5,  y: 38 },
  { x: 1,  y: 65 },
  // right
  { x: 76, y: 20 },
  { x: 79, y: 50 },
  { x: 74, y: 78 },
];

// ─── Constants ────────────────────────────────────────────────────────────────

/** How many logos are visible at once */
const VISIBLE_DESKTOP = 10;
const VISIBLE_MOBILE  = 6;

/** Time range (seconds) before a logo relocates */
const LIFESPAN_MIN = 4;
const LIFESPAN_MAX = 8;

/** Float bob amplitude in px */
const BOB_AMPLITUDE = 18;

/** Float cycle duration in seconds */
const BOB_DURATION = 3;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function brandNameFromPath(imagePath: string): string {
  const file = imagePath.split("/").pop() ?? "";
  return file.replace(".png", "").replace(/-/g, " ") || "brand";
}

function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  }) as T;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FloatingLogos() {
  const containerRef  = useRef<HTMLDivElement | null>(null);
  const gsapCtx       = useRef<gsap.Context | null>(null);
  const timersRef     = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // ── Responsive ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    const debouncedUpdate = debounce(update, 150);
    update();
    window.addEventListener("resize", debouncedUpdate);
    return () => window.removeEventListener("resize", debouncedUpdate);
  }, []);

  // ── Main animation ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous timers + animations
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    gsapCtx.current?.revert();

    const slots        = isMobile ? MOBILE_SLOTS  : DESKTOP_SLOTS;
    const visibleCount = isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP;
    const logos        = ALL_LOGOS.slice(0, visibleCount);
    const targetOpacity = isMobile ? 0.72 : 0.85;

    // Track which slot indices are currently occupied so two logos never share
    const occupiedSlots = new Set<number>();

    /** Pick a random unoccupied slot index */
    function pickSlot(excluding?: number): number {
      const free = slots
        .map((_, i) => i)
        .filter((i) => !occupiedSlots.has(i) && i !== excluding);
      if (free.length === 0) {
        // Fallback: pick any slot that isn't the current one
        const all = slots.map((_, i) => i).filter((i) => i !== excluding);
        return all[Math.floor(Math.random() * all.length)];
      }
      return free[Math.floor(Math.random() * free.length)];
    }

    gsapCtx.current = gsap.context(() => {
      gsap.matchMedia().add(
        {
          motion:  "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (matchCtx) => {
          const { motion } = matchCtx.conditions as { motion: boolean };

          const elements = Array.from(
            containerRef.current!.querySelectorAll<HTMLAnchorElement>(".floating-logo")
          );

          /**
           * Teleport `el` to a new slot (fade out → move → fade in),
           * then schedule the next relocation.
           */
          function relocate(el: HTMLAnchorElement, currentSlotIdx: number) {
            const duration = motion ? 0.5 : 0;

            // Fade out
            gsap.to(el, {
              opacity: 0,
              scale: 0.75,
              duration,
              ease: "power2.in",
              onComplete: () => {
                // Free the old slot
                occupiedSlots.delete(currentSlotIdx);

                // Pick a new slot
                const newIdx  = pickSlot(currentSlotIdx);
                const newSlot = slots[newIdx];
                occupiedSlots.add(newIdx);

                // Move to new position
                gsap.set(el, {
                  left: `${newSlot.x}vw`,
                  top:  `${newSlot.y}vh`,
                  rotate: rand(-6, 6),
                });

                // Kill the old bob tween and start a fresh one
                gsap.killTweensOf(el, "y,rotate");

                // Fade in + start bobbing
                gsap.to(el, {
                  opacity: targetOpacity,
                  scale: 1,
                  duration: motion ? 0.6 : 0,
                  ease: "power3.out",
                });

                if (motion) {
                  gsap.to(el, {
                    y: rand(-BOB_AMPLITUDE, BOB_AMPLITUDE),
                    rotate: rand(-5, 5),
                    duration: BOB_DURATION + rand(-0.4, 0.4),
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                  });
                }

                // Schedule the next relocation
                scheduleRelocate(el, newIdx);
              },
            });
          }

          function scheduleRelocate(el: HTMLAnchorElement, slotIdx: number) {
            const delay = rand(LIFESPAN_MIN, LIFESPAN_MAX) * 1000;
            const t = setTimeout(() => relocate(el, slotIdx), delay);
            timersRef.current.push(t);
          }

          // ── Initial placement ──────────────────────────────────────────────
          elements.forEach((el, i) => {
            const slotIdx = pickSlot();
            occupiedSlots.add(slotIdx);
            const slot      = slots[slotIdx];
            const direction = i % 2 === 0 ? 1 : -1;
            const initDelay = i * 0.1;

            gsap.set(el, {
              left:     `${slot.x}vw`,
              top:      `${slot.y}vh`,
              yPercent: -50,
              opacity:  0,
              scale:    0.8,
              rotate:   direction * -5,
            });

            // Entrance
            gsap.to(el, {
              opacity:  targetOpacity,
              scale:    1,
              duration: motion ? 0.8 : 0,
              delay:    motion ? initDelay : 0,
              ease:     "power3.out",
            });

            // Bob
            if (motion) {
              gsap.to(el, {
                y:        direction * rand(BOB_AMPLITUDE * 0.6, BOB_AMPLITUDE),
                rotate:   direction * 4,
                duration: BOB_DURATION + rand(-0.5, 0.5),
                delay:    initDelay,
                ease:     "sine.inOut",
                yoyo:     true,
                repeat:   -1,
              });
            }

            // Hover effect — GSAP handles it so it doesn't fight CSS transitions
            el.addEventListener("mouseenter", () => {
              gsap.to(el, { scale: 1.18, duration: 0.25, ease: "power2.out" });
              const img = el.querySelector("img");
              if (img) gsap.to(img, { opacity: 1, duration: 0.2 });
            });

            el.addEventListener("mouseleave", () => {
              gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.inOut" });
              const img = el.querySelector("img");
              if (img) gsap.to(img, { opacity: targetOpacity, duration: 0.2 });
            });

            // Schedule first relocation after initial lifespan
            scheduleRelocate(el, slotIdx);
          });
        }
      );
    }, containerRef);

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
      gsapCtx.current?.revert();
    };
  }, [isMobile]);

  // Derive visible logos for rendering (count only — images are static)
  const logos = ALL_LOGOS.slice(0, isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-40 h-screen w-screen overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {logos.map((logo) => {
        const brand = brandNameFromPath(logo.image);

        return (
          <a
            key={logo.image}
            href={logo.link}
            className="floating-logo absolute cursor-pointer will-change-transform"
            style={{ pointerEvents: "auto" }}
            aria-label={`View ${brand} case study`}
          >
            <img
              src={logo.image}
              alt=""
              role="presentation"
              draggable={false}
              loading="eager"
              className={[
                "h-auto object-contain",
                "drop-shadow-[0_6px_18px_rgba(0,0,0,0.12)]",
                // Glow ring on hover — pure CSS outline so it doesn't cost a
                // GPU layer (the scale/opacity hover is handled by GSAP above)
                "rounded-lg outline outline-2 outline-transparent",
                "transition-[outline-color] duration-200",
                "hover:outline-indigo-400/40",
                isMobile ? "w-16 sm:w-20" : "w-20 md:w-24 lg:w-28",
              ].join(" ")}
            />
          </a>
        );
      })}
    </div>
  );
}