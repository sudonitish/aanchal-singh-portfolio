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
    <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
      <div className="flex flex-col gap-5 text-left">
        {eyebrow && (
          <span className="text-sm font-bold tracking-[0.15em] text-accent-strong uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl font-extrabold leading-[1.2] text-black sm:text-3xl">
          {heading}
        </h2>
        <p className="text-base leading-relaxed text-[#8C8C8C]">{description}</p>

        <div className="flex flex-col gap-2">
          {findings.map((finding, index) => {
            const isActive = index === active;
            return (
              <button
                key={finding.pill}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className="rounded-2xl border px-5 py-4 text-left text-base font-bold transition-colors"
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
        className="flex flex-col justify-between gap-8 rounded-[24px] p-8 sm:p-10"
        style={{ background: `linear-gradient(135deg, ${accentColor}33 0%, ${accentColor}0D 100%)` }}
      >
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold tracking-[0.15em] text-[#64748B] uppercase">
            Key Finding {String(active + 1).padStart(2, "0")}
          </span>
          <h3 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl">
            {current.title}
          </h3>
          <p className="text-base leading-relaxed text-[#4A5568]">
            {current.description}
          </p>
        </div>
        <div className="flex gap-2">
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
  );
}
