"use client";

import Image from "next/image";
import { useState } from "react";
import { aboutAssets } from "@/data/config/assets";

interface PolaroidSpot {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
}

const POLAROID_SPOTS: PolaroidSpot[] = [
  { id: "figma-tool", left: 11.19, top: 10.81, width: 17.67, height: 20.96, rotate: 6 },
  { id: "ai-partner", left: 68.24, top: 11.9, width: 18.79, height: 20.96, rotate: -5.07 },
  { id: "coffee", left: 42.06, top: 3.17, width: 17.78, height: 21.62, rotate: -6.18 },
  { id: "headphones", left: 0, top: 36.14, width: 17.78, height: 22.71, rotate: -6.18 },
  { id: "architecture", left: 82.66, top: 37.0, width: 17.67, height: 29.04, rotate: 6.74 },
  { id: "palette", left: 77.84, top: 69.28, width: 18.79, height: 25.55, rotate: -5.07 },
  { id: "moonchild", left: 2.01, top: 65.07, width: 17.67, height: 31.22, rotate: 6.74 },
];

export default function PortraitCollage() {
  return (
    <div className="relative mx-auto aspect-[894/916] w-full">
      <div className="absolute top-[21.79%] left-[17.87%] h-[76.66%] w-[59.71%]">
        <Image
          src={aboutAssets.portraitCutout}
          alt="Illustrated portrait of Aanchal Singh"
          fill
          sizes="(min-width: 1024px) 30vw, 60vw"
          className="object-contain"
          priority
        />
      </div>

      {POLAROID_SPOTS.map((spot, index) => (
        <Polaroid key={spot.id} spot={spot} index={index} />
      ))}
    </div>
  );
}

function Polaroid({ spot, index }: { spot: PolaroidSpot; index: number }) {
  const [hovered, setHovered] = useState(false);
  const data = aboutAssets.polaroids.find((p) => p.id === spot.id);
  if (!data) return null;

  return (
    <div
      className="animate-float absolute"
      style={{
        left: `${spot.left}%`,
        top: `${spot.top}%`,
        width: `${spot.width}%`,
        height: `${spot.height}%`,
        animationDelay: `${index * 0.35}s`,
        animationDuration: `${3.5 + (index % 3) * 0.4}s`,
      }}
    >
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className={`relative block h-full w-full rotate-[var(--spot-rotate)] cursor-default transition-transform duration-300 ease-out hover:z-10 hover:scale-105`}
        style={{ "--spot-rotate": `${spot.rotate}deg` } as React.CSSProperties}
        aria-label={data.alt}
      >
        <Image
          src={data.normal}
          alt={data.alt}
          fill
          sizes="20vw"
          className={`object-contain transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src={data.hover}
          alt={data.alt}
          fill
          sizes="20vw"
          className={`object-contain transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        />
      </button>
    </div>
  );
}
