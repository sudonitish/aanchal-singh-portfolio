import Link from "next/link";
import { closingCta } from "@/data/content/about/data";

export default function ClosingCta() {
  return (
    <section
      className="relative overflow-hidden rounded-[38px] bg-surface-dark px-6 py-16 sm:px-[45px] sm:py-16 lg:px-14 lg:py-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[12%] bottom-[18.77%] hidden h-[71px] w-[71px] rounded-full border border-accent-strong/50 sm:block"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute top-[5.7%] right-[9.9%] hidden grid-cols-6 gap-[11px] sm:grid"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="h-[5px] w-[5px] rounded-full bg-accent-strong/50" />
        ))}
      </div>

      <div className="relative flex flex-col gap-[30px]">
        <span className="text-sm font-bold tracking-[2.4px] text-accent-strong uppercase">
          {closingCta.eyebrow}
        </span>

        <div className="flex flex-col gap-6">
          <h2 className="max-w-[900px] text-[36px] leading-[44px] font-extrabold tracking-[-1.938px] text-[#F8F5F0] sm:text-[42px] sm:leading-[51px] lg:text-[60px] lg:leading-[78px]">
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
          <p className="max-w-[720px] text-[18px] leading-[28px] text-white/55 sm:text-[19px] sm:leading-[30px]">
            {closingCta.subtext}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
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
