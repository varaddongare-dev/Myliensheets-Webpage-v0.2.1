"use client";

import React from "react";
import Link from "next/link";

interface FloatingLogoItem {
  image: string;
  link: string;
  top: string;
  side: "left" | "right";
  offset: string;
  duration: string;
  delay: string;
}

// 8 Dedicated, non-overlapping corridor slots (4 Left, 4 Right)
const LOGO_CONFIG: FloatingLogoItem[] = [
  // ── Left Corridor ──
  {
    image: "/logos/lays.png",
    link: "/case-studies/lays",
    top: "12%",
    side: "left",
    offset: "2vw",
    duration: "11s",
    delay: "0s",
  },
  {
    image: "/logos/pepsi.png",
    link: "/case-studies/pepsi",
    top: "34%",
    side: "left",
    offset: "4.5vw",
    duration: "13s",
    delay: "-3s",
  },
  {
    image: "/logos/fevicol.png",
    link: "/case-studies/fevicol",
    top: "56%",
    side: "left",
    offset: "1.5vw",
    duration: "10s",
    delay: "-6s",
  },
  {
    image: "/logos/amul.png",
    link: "/case-studies/amul",
    top: "78%",
    side: "left",
    offset: "3.5vw",
    duration: "14s",
    delay: "-2s",
  },

  // ── Right Corridor ──
  {
    image: "/logos/cocacola.png",
    link: "/case-studies/coca-cola",
    top: "18%",
    side: "right",
    offset: "2vw",
    duration: "12s",
    delay: "-1s",
  },
  {
    image: "/logos/hyundai.png",
    link: "/case-studies/hyundai",
    top: "40%",
    side: "right",
    offset: "4.5vw",
    duration: "11s",
    delay: "-4s",
  },
  {
    image: "/logos/tanishq.png",
    link: "/case-studies/tanishq",
    top: "62%",
    side: "right",
    offset: "1.5vw",
    duration: "13s",
    delay: "-7s",
  },
  {
    image: "/logos/mercedes.png",
    link: "/case-studies/mercedes-benz",
    top: "84%",
    side: "right",
    offset: "3.5vw",
    duration: "10s",
    delay: "-5s",
  },
];

export default function FloatingLogos() {
  return (
    <>
      {/* Dynamic Keyframes for smooth floating */}
      <style jsx global>{`
        @keyframes floatGently {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1.5deg);
          }
        }
      `}</style>

      {/* Hidden on mobile viewports (<768px), visible on md+ screens */}
      <div
        className="hidden md:block fixed inset-0 z-30 h-screen w-screen overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {LOGO_CONFIG.map((logo) => {
          const positionStyle: React.CSSProperties = {
            top: logo.top,
            [logo.side]: logo.offset,
            animation: `floatGently ${logo.duration} ease-in-out infinite`,
            animationDelay: logo.delay,
            pointerEvents: "auto",
          };

          return (
            <Link
              key={logo.image}
              href={logo.link}
              style={positionStyle}
              className="absolute transition-transform duration-300 hover:scale-110"
            >
              <img
                src={logo.image}
                alt=""
                draggable={false}
                loading="eager"
                className="h-auto w-12 md:w-14 lg:w-16 object-contain opacity-75 transition-opacity duration-200 hover:opacity-100 drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}