import Link from "next/link";
import { closingCta } from "@/data/content/about/data";

export default function ClosingCta() {
  return (
    <section
      className="relative overflow-hidden rounded-[38px] bg-surface-dark px-6 py-16 sm:px-14 sm:py-20 lg:px-[70px] lg:py-[70px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-10 hidden h-[71px] w-[71px] items-center justify-center rounded-full border border-accent-strong/50 sm:flex"
      >
        <span className="text-2xl text-white">:)</span>
      </div>

      <div className="relative flex flex-col gap-[30px]">
        <span className="text-sm font-bold tracking-[2.4px] text-accent-strong uppercase">
          {closingCta.eyebrow}
        </span>

        <div className="flex flex-col gap-6">
          <h2 className="max-w-[900px] text-[36px] leading-[44px] font-extrabold tracking-[-1.938px] text-[#F8F5F0] sm:text-[52px] sm:leading-[64px] lg:text-[75px] lg:leading-[97px]">
            {closingCta.headingFragments.map((fragment, index) => (
              <span
                key={index}
                className={
                  fragment.variant === "accent"
                    ? "text-accent-strong"
                    : fragment.variant === "muted-italic"
                      ? "text-white/40 italic"
                      : undefined
                }
              >
                {fragment.text}
              </span>
            ))}
          </h2>
          <p className="max-w-[720px] text-[18px] leading-[28px] text-white/55 sm:text-[24px] sm:leading-[37px]">
            {closingCta.subtext}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
          <Link
            href={closingCta.primary.href}
            className="inline-flex items-center gap-3 rounded-pill bg-accent-strong px-8 py-5 text-[18px] font-semibold text-[#0F1A0D] transition-opacity hover:opacity-90"
          >
            {closingCta.primary.label}
            <span aria-hidden>&rarr;</span>
          </Link>
          <Link
            href={closingCta.secondary.href}
            className="text-[18px] text-white underline-offset-4 hover:underline"
          >
            {closingCta.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
