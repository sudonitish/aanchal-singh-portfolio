"use client";

import { useState } from "react";

export interface InterviewFinding {
  pill: string;
  title: string;
  description: string;
}

interface InterviewFindingsProps {
  eyebrow?: string;
  heading: string;
  description: string;
  findings: InterviewFinding[];
  accentColor?: string;
}

export default function InterviewFindings({
  eyebrow,
  heading,
  description,
  findings,
  accentColor = "#D8FB78",
}: InterviewFindingsProps) {
  const [active, setActive] = useState(0);
  const current = findings[active];

  return (
    <div className="flex flex-col gap-8">
      {eyebrow && (
        <div className="flex items-center gap-4">
          <span className="shrink-0 text-[10px] leading-[13px] font-semibold tracking-[2.4px] text-[#5A7A1A] uppercase">
            {eyebrow}
          </span>
          <span className="h-px flex-1 bg-black/[0.08]" />
        </div>
      )}
      <div className="grid gap-[19px] lg:grid-cols-2 lg:items-stretch">
      <div className="flex flex-col gap-4 text-left">
        <h2 className="text-[19px] font-extrabold leading-[1.2] text-black sm:text-[19px]">
          {heading}
        </h2>
        <p className="text-[13px] leading-relaxed text-[#8C8C8C]">{description}</p>

        <div className="flex flex-col gap-1.5">
          {findings.map((finding, index) => {
            const isActive = index === active;
            return (
              <button
                key={finding.pill}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className="rounded-2xl border px-4 py-[13px] text-left text-[13px] font-bold transition-colors"
                style={
                  isActive
                    ? { background: accentColor, borderColor: accentColor, color: "#1A202C" }
                    : { background: "#FFFFFF", borderColor: "#E2E8F0", color: "#64748B" }
                }
              >
                {finding.pill}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="flex flex-col justify-between gap-[26px] rounded-[24px] p-8 sm:p-8"
        style={{ background: `linear-gradient(135deg, ${accentColor}33 0%, ${accentColor}0D 100%)` }}
      >
        <div className="flex flex-col gap-[13px]">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#64748B] uppercase">
            Key Finding {String(active + 1).padStart(2, "0")}
          </span>
          <h3 className="text-2xl font-extrabold leading-tight text-black sm:text-[29px]">
            {current.title}
          </h3>
          <p className="text-[13px] leading-relaxed text-[#4A5568]">
            {current.description}
          </p>
        </div>
        <div className="flex gap-1.5">
          {findings.map((finding, index) => (
            <span
              key={finding.pill}
              aria-hidden
              className="h-1 w-8 rounded-full transition-colors"
              style={{ background: index === active ? accentColor : "#D9D9D9" }}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
