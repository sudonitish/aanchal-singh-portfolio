"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { expectations, expectationsHeading } from "@/data/content/about/data";

export default function Expectations() {
  const [hoveredCard, setHoveredCard] = useState(false);

  return (
    <section className="flex w-full flex-col gap-6">
      <SectionHeading label={expectationsHeading.eyebrow ?? ""} />

      <div className="relative py-10">
        <svg
          aria-hidden
          viewBox="0 0 1000 280"
          preserveAspectRatio="none"
          className="pointer-events-none absolute top-0 left-0 aspect-[1000/280] w-full select-none"
        >
          <text
            x="0"
            y="230"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontSize="260"
            fontWeight="800"
            className={`transition-colors duration-300 ${hoveredCard ? "fill-[#FDF6E3]" : "fill-[#F5F1FD]"}`}
          >
            DESIGN
          </text>
        </svg>

        <div className="relative grid gap-[24px] px-[55px] pt-16 sm:grid-cols-2 sm:pt-[90px] lg:grid-cols-4 lg:pt-[115px]">
          {expectations.map((item) => (
            <div
              key={item.category}
              onMouseEnter={() => setHoveredCard(true)}
              onMouseLeave={() => setHoveredCard(false)}
              className="relative overflow-hidden rounded-[14px] border border-[#DBDBDB] bg-white transition-[background-color,translate,box-shadow] duration-400 ease-out hover:-translate-y-4 hover:bg-[#F5F1FD] hover:shadow-xl"
            >
              <div className="flex h-full flex-col gap-3 p-[24px]">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-semibold tracking-[2px] text-black/[0.28] uppercase">
                    {item.category}
                  </span>
                  <span
                    aria-hidden
                    className="text-[48px] leading-[48px] font-normal tracking-[-5.675px] text-black/[0.07]"
                  >
                    {item.index}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-3">
                  <p
                    className="text-[14px] leading-[18px] font-bold tracking-[-0.312px] text-surface-dark"
                    style={{ maxWidth: item.headingMaxWidth }}
                  >
                    {item.heading}
                  </p>
                  <p className="text-[11px] leading-[17px] text-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
